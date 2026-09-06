# Stage 1: Build
FROM node:22-alpine AS builder

RUN corepack enable pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# --ignore-scripts skips native-binding builds for sharp and unrs-resolver.
# next.config.ts sets images.unoptimized = true (static export), so sharp's
# runtime is never invoked; unrs-resolver only runs at Next's TypeScript
# compilation step, which the bundled JS fallback handles fine.
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY . .
RUN pnpm build

# Stage 2: Serve
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

# Custom nginx config for SPA.
#
# `/insight/` is a first-party proxy for the Rybbit tracker (script.js,
# track, site/tracking-config): the browser only ever talks to healthlog.dev,
# the CSP stays at 'self' and ad-block host lists do not apply. `resolver` is
# required because proxy_pass uses a variable (re-resolves the Cloudflare IP
# instead of pinning it at startup); `^~` keeps the regex asset location
# (\.js$) from hijacking /insight/script.js. The Cloudflare hop headers
# (CDN-Loop, CF-*) are cleared because healthlog.dev itself sits behind
# Cloudflare and the analytics host is Cloudflare-proxied too - a forwarded
# CDN-Loop header would otherwise be rejected as a proxy loop. The resolver
# is Docker's embedded DNS (127.0.0.11); the host blocks direct queries to
# public resolvers from containers. Set-Cookie is
# stripped so the analytics host can never set state on the visitor's device.
#
# The `/.well-known/apple-app-site-association` exact-match block runs
# before the generic `/` catch-all so Apple's CDN fetch lands on the
# Next.js-emitted JSON file with the correct `application/json`
# Content-Type. The file has no extension so it would otherwise inherit
# the default `application/octet-stream` and Apple would reject the
# response. The `default_type` override scopes the content type to that
# one path; no other request is affected.
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    add_header X-Content-Type-Options "nosniff" always; \
    add_header Referrer-Policy "strict-origin-when-cross-origin" always; \
    add_header X-Frame-Options "DENY" always; \
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always; \
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()" always; \
    add_header Content-Security-Policy "default-src '"'"'self'"'"'; img-src '"'"'self'"'"' data:; style-src '"'"'self'"'"' '"'"'unsafe-inline'"'"'; font-src '"'"'self'"'"'; script-src '"'"'self'"'"' '"'"'unsafe-inline'"'"'; connect-src '"'"'self'"'"'; frame-ancestors '"'"'none'"'"'; base-uri '"'"'self'"'"'; form-action '"'"'self'"'"'" always; \
    \
    location = /.well-known/apple-app-site-association { \
        default_type application/json; \
        add_header Cache-Control "public, max-age=3600"; \
    } \
    \
    location ^~ /insight/ { \
        resolver 127.0.0.11 valid=300s ipv6=off; \
        set $rybbit https://rybbit.bombeck.io; \
        rewrite ^/insight/(.*)$ /api/$1 break; \
        proxy_pass $rybbit; \
        proxy_ssl_server_name on; \
        proxy_ssl_name rybbit.bombeck.io; \
        proxy_set_header Host rybbit.bombeck.io; \
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; \
        proxy_set_header X-Forwarded-Proto https; \
        proxy_set_header CDN-Loop ""; \
        proxy_set_header CF-Connecting-IP ""; \
        proxy_set_header CF-Ray ""; \
        proxy_set_header CF-Visitor ""; \
        proxy_set_header CF-IPCountry ""; \
        proxy_set_header CF-Warp-Tag-Id ""; \
        proxy_pass_request_headers on; \
        proxy_hide_header Set-Cookie; \
        proxy_ignore_headers Set-Cookie; \
        client_max_body_size 1m; \
    } \
    \
    location / { \
        try_files $uri $uri.html $uri/index.html =404; \
    } \
    error_page 404 /404.html; \
    location ~ ^/(.+)/$ { \
        return 301 /$1; \
    } \
    \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    \
    gzip on; \
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml; \
    gzip_min_length 256; \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

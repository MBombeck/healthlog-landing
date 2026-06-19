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

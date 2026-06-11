import { NextResponse } from "next/server";

/**
 * Apple App Site Association (AASA) handler for `healthlog.dev`.
 *
 * Apple fetches `/.well-known/apple-app-site-association` over HTTPS
 * without credentials, with no extension and a strict
 * `application/json` Content-Type expectation. iOS uses the body to:
 *   - Wire Web Credentials so the marketing-site origin and the iOS
 *     bundle share passkey ceremonies registered to the same App ID.
 *   - Wire Universal Links — out of scope for the first cut, hence the
 *     empty `applinks.details` array. Future entries here pick up
 *     deep-linking from `https://healthlog.dev/...` once the iOS side
 *     opts in.
 *
 * The `webcredentials.apps` entry is the App ID prefix
 * (`<TeamID>.<BundleID>`) for the HealthLog iOS app. Apple proxies the
 * file through its own CDN
 * (`https://app-site-association.cdn-apple.com/a/v1/healthlog.dev`)
 * with a one-hour TTL, which the `Cache-Control` directive below
 * mirrors so a fresh ingest after a domain change cuts in cleanly.
 *
 * `force-static` cooperates with `output: "export"` in `next.config.ts`
 * so the build emits a literal file at
 * `out/.well-known/apple-app-site-association` (no extension) that
 * nginx serves verbatim, sidestepping the previous SPA-catch-all bug
 * that returned the landing HTML for every unmatched path.
 */
export const dynamic = "force-static";

const AASA = {
  applinks: {
    apps: [],
    details: [],
  },
  webcredentials: {
    apps: ["S8WDX4W5KX.dev.healthlog.app"],
  },
};

export function GET() {
  return NextResponse.json(AASA, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

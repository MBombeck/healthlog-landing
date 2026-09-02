// Shared constants for the privacy policy (English at /privacy, German at
// /de/privacy). Both pages and the sitemap read from here so the version
// stamp, the date and the hreflang pairing cannot drift apart.

import { SITE_ORIGIN } from "@/content/learn/locales";

/**
 * The policy version is bound to the application release that introduced the
 * current wording (section 12 of the policy says so). Bump it together with
 * LAST_UPDATED whenever the text changes materially.
 */
export const POLICY_VERSION = "1.38.1";
export const LAST_UPDATED = "2026-09-02";

export const PRIVACY_PATH_EN = "/privacy";
export const PRIVACY_PATH_DE = "/de/privacy";

/** hreflang alternates for the two policy renderings (x-default = English). */
export function privacyHreflang(): Record<string, string> {
  return {
    en: `${SITE_ORIGIN}${PRIVACY_PATH_EN}`,
    de: `${SITE_ORIGIN}${PRIVACY_PATH_DE}`,
    "x-default": `${SITE_ORIGIN}${PRIVACY_PATH_EN}`,
  };
}

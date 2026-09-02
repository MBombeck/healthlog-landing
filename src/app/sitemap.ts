import type { MetadataRoute } from "next";

import { CATEGORY_ORDER, LEARN_ARTICLES } from "@/content/learn";
import { LEARN_UPDATED } from "@/content/learn";
import {
  LOCALES,
  SITE_ORIGIN,
  hreflangMap,
  learnArticlePath,
  learnHubPath,
} from "@/content/learn/locales";
import {
  LAST_UPDATED as PRIVACY_UPDATED,
  PRIVACY_PATH_DE,
  PRIVACY_PATH_EN,
  privacyHreflang,
} from "@/content/privacy/meta";

// Static export: emit a build-time sitemap.xml. /learn entries derive from the
// article manifest × locales, so new guides and languages appear automatically.
export const dynamic = "force-static";

const LAST_MODIFIED = "2026-06-19";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_ORIGIN}/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_ORIGIN}/features`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_ORIGIN}/security`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_ORIGIN}${PRIVACY_PATH_EN}`, lastModified: PRIVACY_UPDATED, changeFrequency: "monthly", priority: 0.5, alternates: { languages: privacyHreflang() } },
    { url: `${SITE_ORIGIN}${PRIVACY_PATH_DE}`, lastModified: PRIVACY_UPDATED, changeFrequency: "monthly", priority: 0.4, alternates: { languages: privacyHreflang() } },
    { url: `${SITE_ORIGIN}/support`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_ORIGIN}/imprint`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
  ];

  const learnPages: MetadataRoute.Sitemap = LOCALES.flatMap((locale) => [
    {
      url: `${SITE_ORIGIN}${learnHubPath(locale)}`,
      lastModified: LEARN_UPDATED,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 0.8 : 0.7,
      alternates: { languages: hreflangMap((l) => learnHubPath(l)) },
    },
    ...LEARN_ARTICLES.map((a) => ({
      url: `${SITE_ORIGIN}${learnArticlePath(locale, a.slug)}`,
      lastModified: a.updatedAt ?? LEARN_UPDATED,
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 0.7 : 0.6,
      alternates: { languages: hreflangMap((l) => learnArticlePath(l, a.slug)) },
    })),
  ]);

  const topicPages: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    CATEGORY_ORDER.map((category) => ({
      url: `${SITE_ORIGIN}${learnHubPath(locale)}/topic/${category}`,
      lastModified: LEARN_UPDATED,
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 0.6 : 0.5,
      alternates: {
        languages: hreflangMap((l) => `${learnHubPath(l)}/topic/${category}`),
      },
    })),
  );

  return [...staticPages, ...learnPages, ...topicPages];
}

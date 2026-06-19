import type { MetadataRoute } from "next";

import { LEARN_ARTICLES } from "@/content/learn";
import {
  LOCALES,
  SITE_ORIGIN,
  learnArticlePath,
  learnHubPath,
} from "@/content/learn/locales";

// Static export: emit a build-time sitemap.xml. /learn entries derive from the
// article manifest × locales, so new guides and languages appear automatically.
export const dynamic = "force-static";

const LAST_MODIFIED = "2026-06-19";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_ORIGIN}/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_ORIGIN}/privacy`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_ORIGIN}/support`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
  ];

  const learnPages: MetadataRoute.Sitemap = LOCALES.flatMap((locale) => [
    {
      url: `${SITE_ORIGIN}${learnHubPath(locale)}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 0.8 : 0.7,
    },
    ...LEARN_ARTICLES.map((a) => ({
      url: `${SITE_ORIGIN}${learnArticlePath(locale, a.slug)}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 0.7 : 0.6,
    })),
  ]);

  return [...staticPages, ...learnPages];
}

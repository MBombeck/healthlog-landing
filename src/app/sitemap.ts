import type { MetadataRoute } from "next";

import { LEARN_ARTICLES } from "@/content/learn";

// Static export: emit a build-time sitemap.xml. The /learn entries derive from
// the article manifest, so new guides appear in the sitemap automatically.
export const dynamic = "force-static";

const BASE = "https://healthlog.dev";
const LAST_MODIFIED = "2026-06-19";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/learn`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/support`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const learnArticles: MetadataRoute.Sitemap = LEARN_ARTICLES.map((a) => ({
    url: `${BASE}/learn/${a.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...learnArticles];
}

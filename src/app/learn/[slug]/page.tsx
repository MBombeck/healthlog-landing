import type { Metadata } from "next";

import { LEARN_ARTICLES, getArticle } from "@/content/learn";
import { getMeta } from "@/content/learn/meta";
import {
  SITE_ORIGIN,
  hreflangMap,
  learnArticlePath,
} from "@/content/learn/locales";
import { LearnArticle } from "@/components/learn/learn-article";
import { LearnShell, articlePaths } from "@/components/learn/learn-shell";

export const dynamicParams = false;

export function generateStaticParams() {
  return LEARN_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  const am = getMeta("en").articles[slug];
  if (!article || !am) return {};
  const url = `${SITE_ORIGIN}/learn/${slug}`;
  return {
    title: am.title,
    description: am.description,
    alternates: {
      canonical: url,
      languages: hreflangMap((l) => learnArticlePath(l, slug)),
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${am.title} | HealthLog`,
      description: am.description,
      url,
      type: "article",
      siteName: "HealthLog",
      locale: "en_US",
      images: [`${SITE_ORIGIN}/learn-img/${slug}.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${am.title} | HealthLog`,
      description: am.description,
      images: [`${SITE_ORIGIN}/learn-img/${slug}.jpg`],
    },
  };
}

export default async function LearnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <LearnShell locale="en" paths={articlePaths(slug)}>
      <LearnArticle locale="en" slug={slug} />
    </LearnShell>
  );
}

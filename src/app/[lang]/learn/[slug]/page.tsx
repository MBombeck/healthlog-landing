import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LEARN_ARTICLES, getArticle } from "@/content/learn";
import { getMeta } from "@/content/learn/meta";
import {
  OG_LOCALE,
  PREFIXED_LOCALES,
  SITE_ORIGIN,
  hreflangMap,
  isLocale,
  learnArticlePath,
  type Locale,
} from "@/content/learn/locales";
import { LearnArticle } from "@/components/learn/learn-article";
import { LearnShell, articlePaths } from "@/components/learn/learn-shell";

export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.flatMap((lang) =>
    LEARN_ARTICLES.map((a) => ({ lang, slug: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const article = getArticle(slug);
  const am = getMeta(lang).articles[slug];
  if (!article || !am) return {};
  const url = `${SITE_ORIGIN}${learnArticlePath(lang, slug)}`;
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
      locale: OG_LOCALE[lang],
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

export default async function LocalizedLearnArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  return (
    <LearnShell locale={locale} paths={articlePaths(slug)}>
      <LearnArticle locale={locale} slug={slug} />
    </LearnShell>
  );
}

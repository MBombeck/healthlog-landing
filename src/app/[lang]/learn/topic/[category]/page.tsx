import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CATEGORY_ORDER, type CategoryKey } from "@/content/learn";
import { getMeta } from "@/content/learn/meta";
import {
  PREFIXED_LOCALES,
  SITE_ORIGIN,
  hreflangMap,
  isLocale,
  type Locale,
} from "@/content/learn/locales";
import { LearnCategory } from "@/components/learn/learn-category";
import { LearnShell, hubPaths } from "@/components/learn/learn-shell";

export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.flatMap((lang) =>
    CATEGORY_ORDER.map((category) => ({ lang, category })),
  );
}

function isCategory(v: string): v is CategoryKey {
  return (CATEGORY_ORDER as string[]).includes(v);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}): Promise<Metadata> {
  const { lang, category } = await params;
  if (!isLocale(lang) || !isCategory(category)) return {};
  const meta = getMeta(lang);
  const label = meta.categories[category];
  return {
    title: `${label} — ${meta.ui.hubKicker}`,
    description: `${label}: ${meta.ui.hubIntro}`,
    alternates: {
      canonical: `${SITE_ORIGIN}/${lang}/learn/topic/${category}`,
      languages: hreflangMap((l) =>
        l === "en" ? `/learn/topic/${category}` : `/${l}/learn/topic/${category}`,
      ),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedCategoryPage({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}) {
  const { lang, category } = await params;
  if (!isLocale(lang) || !isCategory(category)) notFound();
  return (
    <LearnShell locale={lang as Locale} paths={hubPaths()}>
      <LearnCategory locale={lang as Locale} category={category} />
    </LearnShell>
  );
}

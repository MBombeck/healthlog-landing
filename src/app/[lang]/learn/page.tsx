import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getMeta } from "@/content/learn/meta";
import {
  OG_LOCALE,
  PREFIXED_LOCALES,
  SITE_ORIGIN,
  hreflangMap,
  isLocale,
  learnHubPath,
  type Locale,
} from "@/content/learn/locales";
import { LearnHub } from "@/components/learn/learn-hub";
import { LearnShell, hubPaths } from "@/components/learn/learn-shell";

export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const meta = getMeta(lang);
  return {
    title: `${meta.ui.hubTitle} — ${meta.ui.hubKicker}`,
    description: meta.ui.hubIntro,
    alternates: {
      canonical: `${SITE_ORIGIN}${learnHubPath(lang)}`,
      languages: hreflangMap((l) => learnHubPath(l)),
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${meta.ui.hubTitle} | HealthLog`,
      description: meta.ui.hubIntro,
      url: `${SITE_ORIGIN}${learnHubPath(lang)}`,
      type: "website",
      siteName: "HealthLog",
      locale: OG_LOCALE[lang],
    },
  };
}

export default async function LocalizedLearnHubPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  return (
    <LearnShell locale={locale} paths={hubPaths()}>
      <LearnHub locale={locale} />
    </LearnShell>
  );
}

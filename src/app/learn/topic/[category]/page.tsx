import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CATEGORY_ORDER, type CategoryKey } from "@/content/learn";
import { getMeta } from "@/content/learn/meta";
import { SITE_ORIGIN, hreflangMap } from "@/content/learn/locales";
import { LearnCategory } from "@/components/learn/learn-category";
import { LearnShell, hubPaths } from "@/components/learn/learn-shell";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_ORDER.map((category) => ({ category }));
}

function isCategory(v: string): v is CategoryKey {
  return (CATEGORY_ORDER as string[]).includes(v);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  const meta = getMeta("en");
  const label = meta.categories[category];
  const title = `${label} — Learn`;
  const description = `${label} guides from HealthLog: ${meta.ui.hubIntro}`;
  const url = `${SITE_ORIGIN}/learn/topic/${category}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: hreflangMap((l) =>
        l === "en" ? `/learn/topic/${category}` : `/${l}/learn/topic/${category}`,
      ),
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "HealthLog",
      locale: "en_US",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isCategory(category)) notFound();
  return (
    <LearnShell locale="en" paths={hubPaths()}>
      <LearnCategory locale="en" category={category} />
    </LearnShell>
  );
}

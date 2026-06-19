import Link from "next/link";

import {
  CATEGORY_COLOR,
  LEARN_ARTICLES,
  type CategoryKey,
} from "@/content/learn";
import { getMeta } from "@/content/learn/meta";
import {
  SITE_ORIGIN,
  learnArticlePath,
  learnHubPath,
  type Locale,
} from "@/content/learn/locales";
import { LearnImage } from "./learn-image";

/** A single-category topic hub (crawlable, internally linked). */
export function LearnCategory({
  locale,
  category,
}: {
  locale: Locale;
  category: CategoryKey;
}) {
  const meta = getMeta(locale);
  const accent = CATEGORY_COLOR[category];
  const articles = LEARN_ARTICLES.filter((a) => a.category === category);
  const label = meta.categories[category];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${label} — ${meta.ui.hubTitle}`,
    inLanguage: locale,
    url: `${SITE_ORIGIN}${learnHubPath(locale)}/topic/${category}`,
    hasPart: articles.map((a) => ({
      "@type": "Article",
      headline: meta.articles[a.slug]?.title ?? a.slug,
      url: `${SITE_ORIGIN}${learnArticlePath(locale, a.slug)}`,
    })),
  };

  return (
    <main
      id="main-content"
      className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href={learnHubPath(locale)}
        className="text-text-tertiary hover:text-text-primary inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <span aria-hidden="true">←</span> {meta.ui.allGuides}
      </Link>

      <h1
        className="font-display mt-6 text-3xl font-extrabold tracking-[-0.02em] md:text-4xl"
        style={{ color: accent }}
      >
        {label}
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => {
          const am = meta.articles[a.slug];
          return (
            <Link
              key={a.slug}
              href={learnArticlePath(locale, a.slug)}
              className="glass-card group flex flex-col gap-3 p-4 transition-colors hover:border-[rgba(189,147,249,0.25)]"
            >
              <LearnImage base={`/learn-img/${a.slug}`} alt="" thumb className="learn-card-thumb" />
              <h2 className="font-display text-text-primary group-hover:text-purple mt-1 text-lg font-bold tracking-tight transition-colors">
                {am?.title ?? a.slug}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">{am?.dek}</p>
              <span className="text-text-tertiary mt-auto pt-2 font-mono text-xs">
                {meta.ui.minRead(a.readingTimeMin)}
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

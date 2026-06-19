import Link from "next/link";

import {
  CATEGORY_COLOR,
  CATEGORY_ORDER,
  LEARN_ARTICLES,
  type CategoryKey,
} from "@/content/learn";
import { getMeta } from "@/content/learn/meta";
import {
  SITE_ORIGIN,
  UI_EXTRA,
  learnArticlePath,
  learnHubPath,
  type Locale,
} from "@/content/learn/locales";
import { LearnSearch } from "./learn-search";

/** Hub main content (the LearnShell wraps it with header/footer). */
export function LearnHub({ locale }: { locale: Locale }) {
  const meta = getMeta(locale);
  const extra = UI_EXTRA[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `HealthLog — ${meta.ui.hubTitle}`,
    description: meta.ui.hubIntro,
    url: `${SITE_ORIGIN}${learnHubPath(locale)}`,
    inLanguage: locale,
    hasPart: LEARN_ARTICLES.map((a) => ({
      "@type": "Article",
      headline: meta.articles[a.slug]?.title ?? a.slug,
      url: `${SITE_ORIGIN}${learnArticlePath(locale, a.slug)}`,
    })),
  };

  const byCategory = (category: CategoryKey) =>
    LEARN_ARTICLES.filter((a) => a.category === category);

  return (
    <main
      id="main-content"
      className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-3">
        <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
          {meta.ui.hubKicker}
        </p>
        <h1 className="learn-gradient-text font-display text-3xl font-extrabold tracking-[-0.02em] md:text-5xl">
          {meta.ui.hubTitle}
        </h1>
        <p className="text-text-secondary max-w-3xl text-lg leading-relaxed">
          {meta.ui.hubIntro}
        </p>
      </div>

      <LearnSearch
        placeholder={extra.searchPlaceholder}
        noResults={extra.searchNoResults}
      />

      <div id="learn-grid" className="mt-12 space-y-12">
        {CATEGORY_ORDER.map((category) => {
          const articles = byCategory(category);
          if (articles.length === 0) return null;
          return (
            <section key={category} data-learn-section className="space-y-5">
              <h2
                className="section-label inline-flex w-fit"
                style={{
                  color: CATEGORY_COLOR[category],
                  borderColor: `${CATEGORY_COLOR[category]}33`,
                  backgroundColor: `${CATEGORY_COLOR[category]}0d`,
                }}
              >
                {meta.categories[category]}
              </h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((a) => {
                  const am = meta.articles[a.slug];
                  return (
                    <Link
                      key={a.slug}
                      href={learnArticlePath(locale, a.slug)}
                      data-search={`${am?.title ?? ""} ${am?.dek ?? ""} ${meta.categories[a.category]}`.toLowerCase()}
                      className="glass-card group flex flex-col gap-3 p-4 transition-colors hover:border-[rgba(189,147,249,0.25)]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/learn-img/${a.slug}.jpg`}
                        alt=""
                        loading="lazy"
                        className="learn-card-thumb"
                      />
                      <h3 className="font-display text-text-primary group-hover:text-purple mt-1 text-lg font-bold tracking-tight transition-colors">
                        {am?.title ?? a.slug}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {am?.dek}
                      </p>
                      <span className="text-text-tertiary mt-auto pt-2 font-mono text-xs">
                        {meta.ui.minRead(a.readingTimeMin)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

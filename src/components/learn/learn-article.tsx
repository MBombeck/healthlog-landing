import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CATEGORY_COLOR,
  getArticle,
  relatedArticles,
} from "@/content/learn";
import { LEARN_CONTENT } from "@/content/learn/content-map";
import { getMeta } from "@/content/learn/meta";
import {
  SITE_ORIGIN,
  UI_EXTRA,
  learnArticlePath,
  learnHubPath,
  type Locale,
} from "@/content/learn/locales";
import { FootnotesEnhancer } from "./footnotes-enhancer";

export async function LearnArticle({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const article = getArticle(slug);
  const loader = LEARN_CONTENT[locale]?.[slug];
  if (!article || !loader) notFound();

  const meta = getMeta(locale);
  const am = meta.articles[slug];
  const { default: Content } = await loader();
  const accent = CATEGORY_COLOR[article.category];
  const related = relatedArticles(slug, 2);
  const extra = UI_EXTRA[locale];

  const url = `${SITE_ORIGIN}${learnArticlePath(locale, slug)}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: am?.title ?? slug,
      description: am?.description,
      url,
      inLanguage: locale,
      isAccessibleForFree: true,
      image: `${SITE_ORIGIN}/learn-img/${slug}.jpg`,
      author: { "@type": "Organization", name: "HealthLog" },
      publisher: { "@type": "Organization", name: "HealthLog" },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      articleSection: meta.categories[article.category],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "HealthLog", item: SITE_ORIGIN },
        { "@type": "ListItem", position: 2, name: meta.ui.hubKicker, item: `${SITE_ORIGIN}${learnHubPath(locale)}` },
        { "@type": "ListItem", position: 3, name: am?.title ?? slug, item: url },
      ],
    },
  ];

  return (
    <main
      id="main-content"
      className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[46rem]">
        <Link
          href={learnHubPath(locale)}
          className="text-text-tertiary hover:text-text-primary inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <span aria-hidden="true">←</span> {meta.ui.allGuides}
        </Link>

        <header className="mt-6 space-y-4">
          <p
            className="font-mono text-xs font-medium tracking-[0.18em] uppercase"
            style={{ color: accent }}
          >
            {meta.categories[article.category]} · {meta.ui.minRead(article.readingTimeMin)}
          </p>
          <h1 className="font-display text-text-primary text-3xl font-extrabold tracking-[-0.02em] md:text-[2.5rem] md:leading-[1.1]">
            {am?.title ?? slug}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">{am?.dek}</p>
        </header>

        {/* Shared illustration (same image across all languages). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/learn-img/${slug}.jpg`}
          alt={am?.title ?? slug}
          width={1376}
          height={768}
          loading="eager"
          className="mt-8 w-full rounded-2xl border border-[rgba(98,114,164,0.12)]"
        />

        <article className="prose-learn mt-10">
          <Content />
        </article>
        <FootnotesEnhancer label={extra.footnotes} />

        {article.knowledgeSlug && (
          <aside className="glass-card mt-14 flex flex-col gap-3 p-6">
            <span
              className="section-label inline-flex w-fit"
              style={{ color: "var(--cyan)" }}
            >
              {meta.ui.goDeeperLabel}
            </span>
            <p className="text-text-secondary text-sm leading-relaxed">
              {meta.ui.goDeeperBody(am?.title ?? slug)}
            </p>
            <a
              href={`https://docs.healthlog.dev/knowledge/${article.knowledgeSlug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-cyan mt-1 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-2 hover:underline"
            >
              {meta.ui.goDeeperCta} <span aria-hidden="true">→</span>
            </a>
          </aside>
        )}

        {related.length > 0 && (
          <section className="mt-14" aria-label={extra.continueReading}>
            <h2 className="section-label text-text-tertiary mb-5 inline-flex w-fit">
              {extra.continueReading}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {related.map((r) => {
                const rm = meta.articles[r.slug];
                return (
                  <Link
                    key={r.slug}
                    href={learnArticlePath(locale, r.slug)}
                    className="glass-card group flex flex-col gap-3 p-4 transition-colors hover:border-[rgba(189,147,249,0.25)]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/learn-img/${r.slug}.jpg`}
                      alt=""
                      loading="lazy"
                      className="learn-card-thumb"
                    />
                    <span
                      className="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase"
                      style={{ color: CATEGORY_COLOR[r.category] }}
                    >
                      {meta.categories[r.category]}
                    </span>
                    <h3 className="font-display text-text-primary group-hover:text-purple text-base font-bold tracking-tight transition-colors">
                      {rm?.title ?? r.slug}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CATEGORY_COLOR,
  articleDates,
  getArticle,
  relatedArticles,
} from "@/content/learn";
import { LEARN_CONTENT } from "@/content/learn/content-map";
import { getFaq } from "@/content/learn/faq";
import { getMeta } from "@/content/learn/meta";
import {
  SITE_ORIGIN,
  UI_EXTRA,
  learnArticlePath,
  learnHubPath,
  type Locale,
} from "@/content/learn/locales";
import { DemoLink } from "./demo-link";
import { FootnotesEnhancer } from "./footnotes-enhancer";
import { LearnImage } from "./learn-image";
import { LearnRelatedCarousel } from "./learn-related-carousel";
import { LearnShare } from "./learn-share";
import { LearnToc } from "./learn-toc";

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
  const related = relatedArticles(slug, 6);
  const extra = UI_EXTRA[locale];
  const dates = articleDates(article);
  const faq = getFaq(locale, slug);

  // Serializable data only — the carousel is a client component, so no functions
  // cross the boundary.
  const relatedCards = related.map((r) => ({
    slug: r.slug,
    href: learnArticlePath(locale, r.slug),
    title: meta.articles[r.slug]?.title ?? r.slug,
    categoryLabel: meta.categories[r.category],
    color: CATEGORY_COLOR[r.category],
  }));

  const url = `${SITE_ORIGIN}${learnArticlePath(locale, slug)}`;
  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: am?.title ?? slug,
      description: am?.description,
      url,
      inLanguage: locale,
      isAccessibleForFree: true,
      image: `${SITE_ORIGIN}/learn-img/${slug}.jpg`,
      datePublished: dates.published,
      dateModified: dates.updated,
      author: { "@type": "Organization", name: "HealthLog", url: SITE_ORIGIN },
      publisher: { "@type": "Organization", name: "HealthLog", url: SITE_ORIGIN },
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

  if (faq.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <main
      id="main-content"
      className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-10">
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
          <p className="text-text-tertiary text-xs">
            {extra.updatedLabel}{" "}
            <time dateTime={dates.updated}>{dates.updated}</time>
          </p>
          {article.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-1" aria-label="Topics">
              {article.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-text-tertiary rounded-full border border-[rgba(98,114,164,0.16)] px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wide"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </header>

        {/* Shared illustration (same image across all languages). Decorative — the
            headline beside it already states the topic, so alt is empty. */}
        <LearnImage
          base={`/learn-img/${slug}`}
          alt=""
          eager
          className="mt-8 w-full rounded-2xl border border-[rgba(98,114,164,0.12)]"
        />

        <LearnToc label={extra.onThisPage} accent={accent} variant="inline" />

        <article className="prose-learn mt-10">
          <Content />
        </article>
        <FootnotesEnhancer label={extra.footnotes} />

        {faq.length > 0 && (
          <section className="mt-14" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="font-display text-text-primary mb-4 text-xl font-bold tracking-tight"
            >
              {extra.faqTitle}
            </h2>
            <div className="flex flex-col gap-2">
              {faq.map((f, i) => (
                <details key={i} className="learn-faq">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <LearnShare
          url={url}
          title={am?.title ?? slug}
          shareLabel={extra.share}
          copiedLabel={extra.linkCopied}
        />

        {/* Quiet product CTA — connects the reader back to HealthLog. */}
        <aside className="glass-card mt-10 flex flex-col gap-3 p-6">
          <h2 className="font-display text-text-primary text-lg font-bold tracking-tight">
            {extra.ctaTitle}
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed">
            {extra.ctaBody}
          </p>
          <div className="mt-1 flex flex-wrap gap-4">
            <DemoLink
              locale={locale}
              className="text-purple hover:text-cyan inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium underline-offset-2 hover:underline"
            >
              {extra.ctaDemo} <span aria-hidden="true">→</span>
            </DemoLink>
            <a
              href="https://github.com/MBombeck/HealthLog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary inline-flex items-center gap-1.5 text-sm font-medium underline-offset-2 hover:underline"
            >
              {extra.ctaSelfHost} <span aria-hidden="true">→</span>
            </a>
          </div>
        </aside>

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

        {relatedCards.length > 0 && (
          <LearnRelatedCarousel
            cards={relatedCards}
            heading={extra.continueReading}
          />
        )}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <LearnToc label={extra.onThisPage} accent={accent} variant="rail" />
          </div>
        </aside>
      </div>
    </main>
  );
}

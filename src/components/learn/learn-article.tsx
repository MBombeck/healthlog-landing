import Link from "next/link";
import { notFound } from "next/navigation";

import { getArticle } from "@/content/learn";
import { LEARN_CONTENT } from "@/content/learn/content-map";
import { getMeta } from "@/content/learn/meta";
import {
  SITE_ORIGIN,
  learnArticlePath,
  learnHubPath,
  type Locale,
} from "@/content/learn/locales";

/** Article main content (the LearnShell wraps it with header/footer). */
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
      className="relative z-10 mx-auto max-w-[52rem] px-4 py-10 md:px-6 md:py-16"
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

      <header className="mt-6 space-y-4">
        <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
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

      {article.knowledgeSlug && (
        <aside className="glass-card mt-14 flex flex-col gap-3 p-6">
          <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03] inline-flex w-fit">
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
    </main>
  );
}

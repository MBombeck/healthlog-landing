import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LEARN_ARTICLES, getArticle } from "@/content/learn";

// Static export: only the manifest slugs exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LEARN_ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  const url = `https://healthlog.dev/learn/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${article.title} | HealthLog`,
      description: article.description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | HealthLog`,
      description: article.description,
    },
  };
}

export default async function LearnArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  // MDX content lives as a pure module under src/content/learn/<slug>.mdx.
  const { default: Content } = await import(
    `@/content/learn/${params.slug}.mdx`
  );

  const url = `https://healthlog.dev/learn/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: "HealthLog" },
    publisher: { "@type": "Organization", name: "HealthLog" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <main
      id="main-content"
      className="relative z-10 mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/learn"
        className="text-text-tertiary hover:text-text-primary inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <span aria-hidden="true">←</span> All guides
      </Link>

      <header className="mt-6 space-y-4 border-b border-[rgba(98,114,164,0.08)] pb-8">
        <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
          {article.category} · {article.readingTimeMin} min read
        </p>
        <h1 className="font-display text-text-primary text-3xl font-extrabold tracking-[-0.02em] md:text-[2.5rem] md:leading-[1.1]">
          {article.title}
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          {article.dek}
        </p>
      </header>

      <article className="prose-learn mt-10">
        <Content />
      </article>

      {article.knowledgeSlug && (
        <aside className="glass-card mt-14 flex flex-col gap-3 p-6">
          <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03] inline-flex w-fit">
            Go deeper
          </span>
          <p className="text-text-secondary text-sm leading-relaxed">
            For the full reference — guideline ranges, measurement detail and
            the complete source list — read the {article.title.toLowerCase()}{" "}
            reference page in the documentation.
          </p>
          <a
            href={`https://docs.healthlog.dev/knowledge/${article.knowledgeSlug}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:text-cyan mt-1 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-2 hover:underline"
          >
            Open the reference page <span aria-hidden="true">→</span>
          </a>
        </aside>
      )}
    </main>
  );
}

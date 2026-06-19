import type { Metadata } from "next";
import Link from "next/link";

import {
  LEARN_ARTICLES,
  LEARN_CATEGORY_ORDER,
  type LearnCategory,
} from "@/content/learn";

export const metadata: Metadata = {
  title: "Learn — Health metrics explained",
  description:
    "Plain-language guides to the health metrics worth tracking — resting heart rate, HRV, sleep, blood pressure, glucose, VO₂max and more. Evidence-based, with sources.",
  alternates: { canonical: "https://healthlog.dev/learn" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Learn — Health metrics explained | HealthLog",
    description:
      "Plain-language, evidence-based guides to the everyday health metrics worth tracking, and how they connect into one picture.",
    url: "https://healthlog.dev/learn",
    type: "website",
  },
};

function byCategory(category: LearnCategory) {
  return LEARN_ARTICLES.filter((a) => a.category === category);
}

export default function LearnHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "HealthLog Learn",
    description:
      "Plain-language, evidence-based guides to the health metrics worth tracking.",
    url: "https://healthlog.dev/learn",
    hasPart: LEARN_ARTICLES.map((a) => ({
      "@type": "Article",
      headline: a.title,
      url: `https://healthlog.dev/learn/${a.slug}`,
    })),
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

      <div className="space-y-3">
        <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
          Learn
        </p>
        <h1 className="font-display text-text-primary text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
          Health metrics, explained
        </h1>
        <p className="text-text-secondary max-w-xl text-base leading-relaxed">
          Clear, plain-language guides to the numbers your body produces — what
          they mean, what moves them, and when a change is worth attention.
          Every claim is sourced; each guide links down to a deeper reference
          page in the documentation.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {LEARN_CATEGORY_ORDER.map((category) => {
          const articles = byCategory(category);
          if (articles.length === 0) return null;
          return (
            <section key={category} className="space-y-5">
              <h2 className="section-label text-text-tertiary inline-flex w-fit">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {articles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/learn/${a.slug}`}
                    className="glass-card group flex flex-col gap-3 p-6 transition-colors hover:border-[rgba(189,147,249,0.25)]"
                  >
                    <h3 className="font-display text-text-primary group-hover:text-purple text-lg font-bold tracking-tight transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {a.dek}
                    </p>
                    <span className="text-text-tertiary mt-auto pt-2 font-mono text-xs">
                      {a.readingTimeMin} min read
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";

import { LearnImage } from "./learn-image";

type RelatedCard = {
  slug: string;
  href: string;
  title: string;
  categoryLabel: string;
  color: string;
};

/**
 * "Continue reading" related-article carousel. Manual paging only (no autoplay):
 * a scroll-snap flex track that the prev/next buttons step by one viewport width
 * via `scrollBy`. Robust + accessible + swipeable on touch. Shows ~3 cards per
 * view on lg, 2 on sm, 1 on mobile.
 */
export function LearnRelatedCarousel({
  cards,
  heading,
}: {
  cards: RelatedCard[];
  heading: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function page(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  }

  const btn =
    "text-text-tertiary hover:text-text-primary hover:border-[rgba(189,147,249,0.4)] inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(98,114,164,0.18)] transition-colors";

  return (
    <section className="mt-14" aria-label={heading}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="section-label text-text-tertiary inline-flex w-fit">
          {heading}
        </h2>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => page(-1)} className={btn} aria-label="Previous">
            <ChevronIcon dir="left" />
          </button>
          <button type="button" onClick={() => page(1)} className={btn} aria-label="Next">
            <ChevronIcon dir="right" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label={heading}
        className="snap-x scroll-smooth -mx-1 flex gap-5 overflow-x-auto px-1 pb-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {cards.map((card) => (
          <Link
            key={card.slug}
            href={card.href}
            className="glass-card group flex w-[calc(100%-0.5rem)] flex-none snap-start flex-col gap-3 p-4 transition-colors hover:border-[rgba(189,147,249,0.25)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
          >
            <LearnImage
              base={`/learn-img/${card.slug}`}
              alt=""
              thumb
              className="learn-card-thumb"
            />
            <span
              className="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase"
              style={{ color: card.color }}
            >
              {card.categoryLabel}
            </span>
            <h3 className="font-display text-text-primary group-hover:text-purple text-base font-bold tracking-tight transition-colors">
              {card.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

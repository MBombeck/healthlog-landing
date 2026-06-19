"use client";

// This island intentionally derives its list + active section from the rendered
// DOM after mount (rehype-slug heading IDs), so setState inside the effect is by
// design here.
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

/**
 * "On this page" jumplist. Reads the rendered `.prose-learn h2[id]` headings
 * after hydration (rehype-slug gives them IDs).
 *
 *  - variant "rail": sticky sidebar (desktop). An IntersectionObserver tracks
 *    the section currently in view and colours its entry with the category accent.
 *  - variant "inline": a collapsed <details> jumplist for mobile.
 *
 * Renders nothing if there are fewer than two sections.
 */
export function LearnToc({
  label,
  accent,
  variant = "rail",
}: {
  label: string;
  accent?: string;
  variant?: "rail" | "inline";
}) {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const heads = Array.from(
      document.querySelectorAll<HTMLElement>(".prose-learn h2[id]"),
    ).map((h) => ({ id: h.id, text: h.textContent?.trim() ?? "" }));
    if (heads.length < 2) return;
    setItems(heads);

    // Active = the heading sitting in the top band below the sticky header.
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView[0]) setActive((inView[0].target as HTMLElement).id);
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0 },
    );
    heads.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  const list = (
    <ol>
      {items.map((it) => {
        const on = active === it.id;
        return (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              aria-current={on ? "true" : undefined}
              className={on ? "is-active" : undefined}
              style={on && accent ? { color: accent } : undefined}
            >
              {it.text}
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (variant === "inline") {
    return (
      <details className="learn-toc learn-toc--inline">
        <summary>{label}</summary>
        {list}
      </details>
    );
  }

  return (
    <nav className="learn-toc learn-toc--rail" aria-label={label}>
      <p className="learn-toc__title">{label}</p>
      {list}
    </nav>
  );
}

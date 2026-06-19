"use client";

import { useEffect, useState } from "react";

/**
 * "On this page" jumplist. Reads the rendered `.prose-learn h2[id]` headings
 * after hydration (rehype-slug gives them IDs) and renders anchor links.
 * Renders nothing if there are fewer than two sections.
 */
export function LearnToc({ label }: { label: string }) {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const hs = Array.from(
      document.querySelectorAll<HTMLElement>(".prose-learn h2[id]"),
    ).map((h) => ({ id: h.id, text: h.textContent?.trim() ?? "" }));
    if (hs.length >= 2) setItems(hs);
  }, []);

  if (items.length === 0) return null;

  return (
    <nav className="learn-toc" aria-label={label}>
      <p className="learn-toc__title">{label}</p>
      <ol>
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`}>{it.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

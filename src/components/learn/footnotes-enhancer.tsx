"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement: collapse the article's footnote/source list behind a
 * "Sources" toggle so it doesn't take up space by default, and auto-open it when
 * a reader clicks a footnote reference (e.g. "[9]") or arrives on a #fn hash.
 *
 * remark-gfm renders footnotes as <section class="footnotes">…</section> at the
 * end of the prose. We wrap it in a native <details> and intercept in-text
 * footnote-ref clicks to open it before the browser jumps to the note.
 */
export function FootnotesEnhancer({ label }: { label: string }) {
  useEffect(() => {
    const article = document.querySelector(".prose-learn");
    if (!article) return;
    const section = article.querySelector<HTMLElement>(".footnotes");
    if (!section || section.dataset.enhanced === "1") return;
    section.dataset.enhanced = "1";

    const details = document.createElement("details");
    details.className = "learn-footnotes";
    const summary = document.createElement("summary");
    summary.textContent = label;
    details.appendChild(summary);

    section.parentNode?.insertBefore(details, section);
    details.appendChild(section);

    const openAndScroll = (id: string) => {
      details.open = true;
      // let layout settle, then bring the target note into view
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    };

    // in-text footnote references
    const refs = article.querySelectorAll<HTMLAnchorElement>(
      'a[href^="#user-content-fn-"], sup a[href^="#"]',
    );
    refs.forEach((a) => {
      a.addEventListener("click", () => {
        const id = a.getAttribute("href")?.slice(1);
        if (id) openAndScroll(id);
      });
    });

    // direct hash navigation to a footnote
    if (location.hash.includes("fn")) details.open = true;
  }, [label]);

  return null;
}

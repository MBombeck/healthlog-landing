"use client";

import { useState } from "react";

/**
 * Client-side filter for the hub. The grid itself is server-rendered (good for
 * SEO and no-JS); this island just hides non-matching cards by reading each
 * card's `data-search` text, and hides category sections that end up empty.
 */
export function LearnSearch({
  placeholder,
  noResults,
}: {
  placeholder: string;
  noResults: string;
}) {
  const [query, setQuery] = useState("");

  function apply(value: string) {
    setQuery(value);
    const q = value.trim().toLowerCase();
    const root = document.getElementById("learn-grid");
    if (!root) return;

    let anyVisible = false;
    root.querySelectorAll<HTMLElement>("[data-learn-section]").forEach((section) => {
      let sectionVisible = false;
      section.querySelectorAll<HTMLElement>("[data-search]").forEach((card) => {
        const hay = card.dataset.search ?? "";
        const match = q === "" || hay.includes(q);
        card.style.display = match ? "" : "none";
        if (match) sectionVisible = true;
      });
      section.style.display = sectionVisible ? "" : "none";
      if (sectionVisible) anyVisible = true;
    });

    const empty = document.getElementById("learn-no-results");
    if (empty) empty.style.display = anyVisible ? "none" : "";
  }

  return (
    <div className="relative mt-8 max-w-md">
      <SearchIcon />
      <input
        type="search"
        value={query}
        onChange={(e) => apply(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="text-text-primary placeholder:text-text-tertiary w-full rounded-xl border border-[rgba(98,114,164,0.18)] bg-[rgba(15,16,24,0.6)] py-2.5 pr-4 pl-10 text-sm outline-none transition-colors focus:border-[rgba(189,147,249,0.45)]"
      />
      <p
        id="learn-no-results"
        className="text-text-tertiary mt-6 text-sm"
        style={{ display: "none" }}
      >
        {noResults}
      </p>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-text-tertiary pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

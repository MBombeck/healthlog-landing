"use client";

import { useState } from "react";

/**
 * Article share row: copy-link, native share (mobile), and static X / LinkedIn
 * / WhatsApp intent links (all work in a static export). `url` is the absolute
 * canonical; `title` is the article headline.
 */
export function LearnShare({
  url,
  title,
  shareLabel,
  copiedLabel,
}: {
  url: string;
  title: string;
  shareLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — no-op */
    }
  }

  async function nativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* dismissed */
      }
    } else {
      copy();
    }
  }

  const btn =
    "text-text-tertiary hover:text-text-primary hover:border-[rgba(189,147,249,0.35)] inline-flex h-9 min-w-9 items-center justify-center gap-1.5 rounded-lg border border-[rgba(98,114,164,0.18)] px-2.5 text-xs transition-colors";

  return (
    <div className="mt-10 flex flex-wrap items-center gap-2">
      <span className="text-text-tertiary mr-1 font-mono text-xs tracking-[0.14em] uppercase">
        {shareLabel}
      </span>
      <button type="button" onClick={copy} className={btn} aria-label={shareLabel}>
        {copied ? copiedLabel : "Copy link"}
      </button>
      <button type="button" onClick={nativeShare} className={`${btn} sm:hidden`}>
        ⇪
      </button>
      <a className={btn} href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`} target="_blank" rel="noopener noreferrer">X</a>
      <a className={btn} href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a className={btn} href={`https://wa.me/?text=${enc(title + " " + url)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
  );
}

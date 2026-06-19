"use client";

import { useState } from "react";

/**
 * Article share row: copy-link, native share (mobile), and X / LinkedIn /
 * WhatsApp — all icon buttons (static-export-safe intent links). `url` is the
 * absolute canonical; `title` is the article headline.
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

  const cls =
    "text-text-tertiary hover:text-text-primary hover:border-[rgba(189,147,249,0.4)] inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(98,114,164,0.18)] transition-colors";

  return (
    <div className="mt-10 flex flex-wrap items-center gap-2">
      <span className="text-text-tertiary mr-1 font-mono text-xs tracking-[0.14em] uppercase">
        {shareLabel}
      </span>

      <button
        type="button"
        onClick={copy}
        className={cls}
        aria-label={copied ? copiedLabel : shareLabel}
        title={copied ? copiedLabel : shareLabel}
      >
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>

      <button
        type="button"
        onClick={nativeShare}
        className={`${cls} sm:hidden`}
        aria-label={shareLabel}
        title={shareLabel}
      >
        <ShareIcon />
      </button>

      <a className={cls} href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`} target="_blank" rel="noopener noreferrer" aria-label="X" title="X">
        <XIcon />
      </a>
      <a className={cls} href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
        <LinkedInIcon />
      </a>
      <a className={cls} href={`https://wa.me/?text=${enc(title + " " + url)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L12.5 19.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-green" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M12 3v13M12 3L8 7M12 3l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14M7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.87 11.87 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.523 5.255l-.999 3.648zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414" />
    </svg>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shared chrome for the /learn guides — the marketing-side "magazine" layer
 * that explains each health metric in plain language and links down into the
 * citation-dense reference pages on docs.healthlog.dev/knowledge.
 *
 * Header + footer match the /support and /privacy sub-pages (self-contained,
 * dark Dracula tokens, no app shell). The hub grid and the per-article prose
 * each render their own <main>, so this layout stays chrome-only.
 */
export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-void text-text-primary relative min-h-dvh overflow-x-clip">
      <div className="noise-overlay" />

      <header
        className="bg-void/80 sticky top-0 z-10 border-b border-[rgba(98,114,164,0.08)] backdrop-blur"
        role="banner"
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 md:px-6">
          <Link
            href="/"
            className="text-text-primary hover:text-purple font-display inline-flex min-h-11 items-center text-sm font-semibold tracking-tight transition-colors"
          >
            HealthLog
          </Link>
          <nav className="flex items-center gap-5" aria-label="Learn">
            <Link
              href="/learn"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              Learn
            </Link>
            <a
              href="https://docs.healthlog.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              Docs
            </a>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-[rgba(98,114,164,0.08)]">
        <div className="text-text-tertiary mx-auto flex max-w-3xl flex-col gap-2 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            Educational content — general information, not medical advice.
          </p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/learn"
              className="hover:text-text-primary transition-colors"
            >
              All guides
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

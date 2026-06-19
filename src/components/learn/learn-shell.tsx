import Link from "next/link";
import type { ReactNode } from "react";

import { getMeta } from "@/content/learn/meta";
import {
  LOCALES,
  learnArticlePath,
  learnHubPath,
  type Locale,
} from "@/content/learn/locales";
import { LanguageSwitcher } from "./language-switcher";

/**
 * Shared chrome for every /learn page (hub + articles), in every language.
 * `paths` maps each locale to the equivalent URL of the current page so the
 * language switcher keeps the reader on the same content.
 */
export function LearnShell({
  locale,
  paths,
  children,
}: {
  locale: Locale;
  paths: Record<Locale, string>;
  children: ReactNode;
}) {
  const { ui } = getMeta(locale);

  return (
    <div className="learn-shell bg-void text-text-primary relative min-h-dvh overflow-x-clip">
      <div className="noise-overlay" />
      <div className="aurora" aria-hidden="true" />
      <div className="aurora-pink" aria-hidden="true" />

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
          <nav className="flex items-center gap-4 md:gap-5" aria-label="Learn">
            <Link
              href={learnHubPath(locale)}
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              {ui.hubKicker}
            </Link>
            <a
              href="https://docs.healthlog.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              {ui.docs}
            </a>
            <LanguageSwitcher
              current={locale}
              paths={paths}
              label={ui.languageLabel}
            />
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-[rgba(98,114,164,0.08)]">
        <div className="text-text-tertiary mx-auto flex max-w-3xl flex-col gap-2 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-6">
          <p>{ui.footerDisclaimer}</p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-text-primary transition-colors">
              {ui.home}
            </Link>
            <Link
              href={learnHubPath(locale)}
              className="hover:text-text-primary transition-colors"
            >
              {ui.allGuides}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** All-locale path map for the hub, used by the switcher on hub pages. */
export function hubPaths(): Record<Locale, string> {
  return Object.fromEntries(
    LOCALES.map((l) => [l, learnHubPath(l)]),
  ) as Record<Locale, string>;
}

/** All-locale path map for one article, used by the switcher on article pages. */
export function articlePaths(slug: string): Record<Locale, string> {
  return Object.fromEntries(
    LOCALES.map((l) => [l, learnArticlePath(l, slug)]),
  ) as Record<Locale, string>;
}

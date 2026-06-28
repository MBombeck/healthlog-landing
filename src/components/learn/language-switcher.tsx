import Link from "next/link";

import {
  LOCALES,
  LOCALE_LABELS,
  type Locale,
} from "@/content/learn/locales";

/**
 * Language switcher for the /learn guides. Native <details> disclosure so it
 * works with zero client JS in the static export. `paths` maps every locale to
 * the equivalent URL for the current page (hub or a specific article), so
 * switching language keeps you on the same content.
 */
export function LanguageSwitcher({
  current,
  paths,
  label,
}: {
  current: Locale;
  paths: Record<Locale, string>;
  label: string;
}) {
  return (
    <details className="lang-switcher">
      <summary
        className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 cursor-pointer list-none items-center gap-1.5 text-sm transition-colors"
        aria-label={label}
      >
        <GlobeIcon />
        {LOCALE_LABELS[current]}
        <ChevronIcon />
      </summary>
      <ul className="lang-switcher__menu" role="list">
        {LOCALES.map((locale) => (
          <li key={locale}>
            <Link
              href={paths[locale]}
              hrefLang={locale}
              data-locale-pick={locale}
              aria-current={locale === current ? "true" : undefined}
              className={
                locale === current
                  ? "text-text-primary bg-[rgba(189,147,249,0.10)]"
                  : "text-text-secondary hover:text-text-primary"
              }
            >
              {LOCALE_LABELS[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

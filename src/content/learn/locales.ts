// Locale configuration for the /learn guides. Mirrors the HealthLog app's six
// locales. English is the default and lives at the unprefixed /learn; the other
// five are served under /<lang>/learn.

export const LOCALES = ["en", "de", "es", "fr", "it", "pl"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// Locales that get a URL prefix (everything except the default).
export const PREFIXED_LOCALES = LOCALES.filter(
  (l) => l !== DEFAULT_LOCALE,
) as Exclude<Locale, "en">[];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pl: "Polski",
};

// BCP-47 tags for <html lang> and hreflang.
export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: "en",
  de: "de",
  es: "es",
  fr: "fr",
  it: "it",
  pl: "pl",
};

// Open Graph locale tags (og:locale).
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  es: "es_ES",
  fr: "fr_FR",
  it: "it_IT",
  pl: "pl_PL",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Short UI strings added after the initial translation pass. */
export interface UiExtra {
  footnotes: string;
  continueReading: string;
  searchPlaceholder: string;
  searchNoResults: string;
}

export const UI_EXTRA: Record<Locale, UiExtra> = {
  en: { footnotes: "Sources", continueReading: "Continue reading", searchPlaceholder: "Search guides…", searchNoResults: "No guides match your search." },
  de: { footnotes: "Quellen", continueReading: "Weiterlesen", searchPlaceholder: "Ratgeber durchsuchen…", searchNoResults: "Keine passenden Ratgeber gefunden." },
  es: { footnotes: "Fuentes", continueReading: "Sigue leyendo", searchPlaceholder: "Buscar guías…", searchNoResults: "Ninguna guía coincide con tu búsqueda." },
  fr: { footnotes: "Sources", continueReading: "Continuer la lecture", searchPlaceholder: "Rechercher des guides…", searchNoResults: "Aucun guide ne correspond à votre recherche." },
  it: { footnotes: "Fonti", continueReading: "Continua a leggere", searchPlaceholder: "Cerca guide…", searchNoResults: "Nessuna guida corrisponde alla ricerca." },
  pl: { footnotes: "Źródła", continueReading: "Czytaj dalej", searchPlaceholder: "Szukaj poradników…", searchNoResults: "Brak poradników pasujących do wyszukiwania." },
};

export function learnHubPath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/learn" : `/${locale}/learn`;
}

export function learnArticlePath(locale: Locale, slug: string): string {
  return locale === DEFAULT_LOCALE
    ? `/learn/${slug}`
    : `/${locale}/learn/${slug}`;
}

export const SITE_ORIGIN = "https://healthlog.dev";

/** hreflang alternates map (incl. x-default) for a given page across locales. */
export function hreflangMap(
  pathFor: (locale: Locale) => string,
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of LOCALES) {
    map[LOCALE_HREFLANG[locale]] = `${SITE_ORIGIN}${pathFor(locale)}`;
  }
  map["x-default"] = `${SITE_ORIGIN}${pathFor(DEFAULT_LOCALE)}`;
  return map;
}

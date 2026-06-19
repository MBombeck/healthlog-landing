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
  updatedLabel: string;
  share: string;
  linkCopied: string;
  ctaTitle: string;
  ctaBody: string;
  ctaDemo: string;
  ctaSelfHost: string;
  skipToContent: string;
  onThisPage: string;
  faqTitle: string;
}

export const UI_EXTRA: Record<Locale, UiExtra> = {
  en: { footnotes: "Sources", continueReading: "Continue reading", searchPlaceholder: "Search guides…", searchNoResults: "No guides match your search.", updatedLabel: "Updated", share: "Share", linkCopied: "Link copied", ctaTitle: "Track it yourself", ctaBody: "HealthLog turns the metrics in these guides into your own private, self-hosted health dashboard.", ctaDemo: "Try the live demo", ctaSelfHost: "Self-host it", skipToContent: "Skip to content", onThisPage: "On this page", faqTitle: "Frequently asked questions" },
  de: { footnotes: "Quellen", continueReading: "Weiterlesen", searchPlaceholder: "Ratgeber durchsuchen…", searchNoResults: "Keine passenden Ratgeber gefunden.", updatedLabel: "Aktualisiert", share: "Teilen", linkCopied: "Link kopiert", ctaTitle: "Selbst verfolgen", ctaBody: "HealthLog macht aus den Werten in diesen Ratgebern dein eigenes, selbstgehostetes Gesundheits-Dashboard.", ctaDemo: "Live-Demo testen", ctaSelfHost: "Selbst hosten", skipToContent: "Zum Inhalt springen", onThisPage: "Auf dieser Seite", faqTitle: "Häufige Fragen" },
  es: { footnotes: "Fuentes", continueReading: "Sigue leyendo", searchPlaceholder: "Buscar guías…", searchNoResults: "Ninguna guía coincide con tu búsqueda.", updatedLabel: "Actualizado", share: "Compartir", linkCopied: "Enlace copiado", ctaTitle: "Mídelo tú mismo", ctaBody: "HealthLog convierte las métricas de estas guías en tu propio panel de salud privado y autoalojado.", ctaDemo: "Prueba la demo", ctaSelfHost: "Autoalójalo", skipToContent: "Saltar al contenido", onThisPage: "En esta página", faqTitle: "Preguntas frecuentes" },
  fr: { footnotes: "Sources", continueReading: "Continuer la lecture", searchPlaceholder: "Rechercher des guides…", searchNoResults: "Aucun guide ne correspond à votre recherche.", updatedLabel: "Mis à jour", share: "Partager", linkCopied: "Lien copié", ctaTitle: "Suivez-le vous-même", ctaBody: "HealthLog transforme les mesures de ces guides en votre propre tableau de bord santé privé et auto-hébergé.", ctaDemo: "Essayer la démo", ctaSelfHost: "Auto-hébergez-le", skipToContent: "Aller au contenu", onThisPage: "Sur cette page", faqTitle: "Questions fréquentes" },
  it: { footnotes: "Fonti", continueReading: "Continua a leggere", searchPlaceholder: "Cerca guide…", searchNoResults: "Nessuna guida corrisponde alla ricerca.", updatedLabel: "Aggiornato", share: "Condividi", linkCopied: "Link copiato", ctaTitle: "Monitoralo tu stesso", ctaBody: "HealthLog trasforma i parametri di queste guide nella tua dashboard di salute privata e self-hosted.", ctaDemo: "Prova la demo", ctaSelfHost: "Self-hosting", skipToContent: "Vai al contenuto", onThisPage: "In questa pagina", faqTitle: "Domande frequenti" },
  pl: { footnotes: "Źródła", continueReading: "Czytaj dalej", searchPlaceholder: "Szukaj poradników…", searchNoResults: "Brak poradników pasujących do wyszukiwania.", updatedLabel: "Zaktualizowano", share: "Udostępnij", linkCopied: "Skopiowano link", ctaTitle: "Śledź to samodzielnie", ctaBody: "HealthLog zamienia wskaźniki z tych poradników w Twój własny, samodzielnie hostowany panel zdrowia.", ctaDemo: "Wypróbuj demo", ctaSelfHost: "Hostuj samodzielnie", skipToContent: "Przejdź do treści", onThisPage: "Na tej stronie", faqTitle: "Często zadawane pytania" },
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

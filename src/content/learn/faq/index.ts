import type { Locale } from "@/content/learn/locales";
import en from "./en";
import de from "./de";
import es from "./es";
import fr from "./fr";
import it from "./it";
import pl from "./pl";

export interface FaqItem {
  q: string;
  a: string;
}
const FAQ_BY_LOCALE: Record<Locale, Record<string, FaqItem[]>> = {
  en,
  de,
  es,
  fr,
  it,
  pl,
};

export function getFaq(locale: Locale, slug: string): FaqItem[] {
  return FAQ_BY_LOCALE[locale]?.[slug] ?? en[slug] ?? [];
}

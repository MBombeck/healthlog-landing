import type { LearnMeta } from "@/content/learn";
import type { Locale } from "@/content/learn/locales";

import en from "./en";
import de from "./de";
import es from "./es";
import fr from "./fr";
import it from "./it";
import pl from "./pl";

const META: Record<Locale, LearnMeta> = { en, de, es, fr, it, pl };

export function getMeta(locale: Locale): LearnMeta {
  return META[locale] ?? en;
}

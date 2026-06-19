/**
 * Language-neutral manifest for the /learn guides.
 *
 * One entry per guide. Display strings (title, dek, description, category
 * labels, UI chrome) are localized in `meta/<locale>.ts`; this file only holds
 * the structural facts shared across every language.
 *
 * `knowledgeSlug` cross-links each guide to its citation-dense reference page
 * on docs.healthlog.dev/knowledge/<slug>/ (English documentation).
 */

export type CategoryKey =
  | "foundations"
  | "heart"
  | "sleep"
  | "metabolic"
  | "fitness"
  | "body"
  | "mind";

export interface LearnArticle {
  slug: string;
  category: CategoryKey;
  readingTimeMin: number;
  knowledgeSlug: string | null;
  /**
   * English, language-neutral topic tags. Deliberately not localized (like the
   * source labels) — shown as quiet chips and folded into the hub search index
   * so a reader can find a guide by topic in any language.
   */
  tags: readonly string[];
  /** ISO date; falls back to the section-wide dates below. */
  publishedAt?: string;
  updatedAt?: string;
}

// Section-wide dates (single source of truth; override per-article above).
export const LEARN_PUBLISHED = "2026-06-19";
export const LEARN_UPDATED = "2026-06-19";

export function articleDates(a: LearnArticle): { published: string; updated: string } {
  return {
    published: a.publishedAt ?? LEARN_PUBLISHED,
    updated: a.updatedAt ?? LEARN_UPDATED,
  };
}

export const CATEGORY_ORDER: CategoryKey[] = [
  "foundations",
  "heart",
  "sleep",
  "metabolic",
  "fitness",
  "body",
  "mind",
];

export const LEARN_ARTICLES: LearnArticle[] = [
  { slug: "understanding-your-health-metrics", category: "foundations", readingTimeMin: 8, knowledgeSlug: null, tags: ["overview", "baseline", "trends", "getting started"] },
  { slug: "resting-heart-rate", category: "heart", readingTimeMin: 7, knowledgeSlug: "resting-heart-rate", tags: ["heart rate", "cardiovascular", "recovery", "baseline"] },
  { slug: "heart-rate-variability", category: "heart", readingTimeMin: 8, knowledgeSlug: "hrv", tags: ["HRV", "recovery", "stress", "heart rate"] },
  { slug: "reading-your-blood-pressure", category: "heart", readingTimeMin: 8, knowledgeSlug: "blood-pressure", tags: ["blood pressure", "cardiovascular", "hypertension"] },
  { slug: "sleep-consistency", category: "sleep", readingTimeMin: 8, knowledgeSlug: "sleep", tags: ["sleep", "circadian rhythm", "recovery", "routine"] },
  { slug: "respiratory-rate", category: "sleep", readingTimeMin: 6, knowledgeSlug: "respiratory-rate", tags: ["respiratory rate", "breathing", "vital signs"] },
  { slug: "blood-oxygen-spo2", category: "sleep", readingTimeMin: 6, knowledgeSlug: "spo2", tags: ["SpO₂", "blood oxygen", "vital signs", "wearables"] },
  { slug: "body-temperature-baseline", category: "sleep", readingTimeMin: 6, knowledgeSlug: "temperature", tags: ["body temperature", "baseline", "vital signs"] },
  { slug: "blood-sugar-beyond-diabetes", category: "metabolic", readingTimeMin: 9, knowledgeSlug: "glucose-hba1c", tags: ["blood glucose", "metabolic health", "HbA1c", "nutrition"] },
  { slug: "vo2max-and-longevity", category: "fitness", readingTimeMin: 8, knowledgeSlug: "vo2max-activity", tags: ["VO₂max", "fitness", "longevity", "exercise"] },
  { slug: "beyond-the-scale", category: "body", readingTimeMin: 8, knowledgeSlug: "weight-bmi", tags: ["weight", "BMI", "body composition", "body fat"] },
  { slug: "tracking-mood", category: "mind", readingTimeMin: 7, knowledgeSlug: "mood", tags: ["mood", "mental health", "wellbeing"] },
  { slug: "the-cycle-as-a-vital-sign", category: "mind", readingTimeMin: 8, knowledgeSlug: "menstrual-cycle", tags: ["menstrual cycle", "fertility", "hormones"] },
  { slug: "how-wearables-measure-you", category: "foundations", readingTimeMin: 8, knowledgeSlug: null, tags: ["wearables", "sensors", "accuracy", "technology"] },
  { slug: "reading-your-trends", category: "foundations", readingTimeMin: 7, knowledgeSlug: null, tags: ["trends", "baseline", "data literacy"] },
  { slug: "steps-and-movement", category: "fitness", readingTimeMin: 7, knowledgeSlug: null, tags: ["steps", "activity", "exercise"] },
  { slug: "caffeine-alcohol-and-your-readings", category: "metabolic", readingTimeMin: 7, knowledgeSlug: null, tags: ["caffeine", "alcohol", "sleep", "lifestyle"] },
  { slug: "hydration-and-your-body", category: "body", readingTimeMin: 7, knowledgeSlug: null, tags: ["hydration", "fluid balance", "weight"] },
  { slug: "stress-and-recovery", category: "mind", readingTimeMin: 8, knowledgeSlug: null, tags: ["stress", "recovery", "HRV", "sleep"] },
];

export const LEARN_SLUGS = LEARN_ARTICLES.map((a) => a.slug);

/** Accent colour per category (hub section labels + article kicker). */
export const CATEGORY_COLOR: Record<CategoryKey, string> = {
  foundations: "#bd93f9",
  heart: "#ff7eb6",
  sleep: "#8be9fd",
  metabolic: "#ffb86c",
  fitness: "#5af78e",
  body: "#7aa2f7",
  mind: "#f0a8e4",
};

export function getArticle(slug: string): LearnArticle | undefined {
  return LEARN_ARTICLES.find((a) => a.slug === slug);
}

/** Up to `n` related guides: same category first, then manifest neighbours. */
export function relatedArticles(slug: string, n = 2): LearnArticle[] {
  const current = getArticle(slug);
  if (!current) return [];
  const sameCat = LEARN_ARTICLES.filter(
    (a) => a.slug !== slug && a.category === current.category,
  );
  const others = LEARN_ARTICLES.filter(
    (a) => a.slug !== slug && a.category !== current.category,
  );
  return [...sameCat, ...others].slice(0, n);
}

/** Localized strings for one guide. */
export interface ArticleMeta {
  title: string;
  dek: string;
  description: string;
}

/** Localized UI chrome + per-slug strings for one locale. */
export interface LearnMeta {
  ui: {
    hubKicker: string;
    hubTitle: string;
    hubIntro: string;
    allGuides: string;
    minRead: (n: number) => string;
    goDeeperLabel: string;
    goDeeperBody: (title: string) => string;
    goDeeperCta: string;
    footerDisclaimer: string;
    languageLabel: string;
    docs: string;
    home: string;
  };
  categories: Record<CategoryKey, string>;
  articles: Record<string, ArticleMeta>;
}

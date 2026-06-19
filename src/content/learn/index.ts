/**
 * Manifest for the /learn guides.
 *
 * Each entry has exactly one matching `src/app/learn/<slug>/page.mdx` article.
 * This list is the single source of truth for the hub grid, the sitemap, and
 * the per-article JSON-LD. Keep it ordered for display; group via `category`.
 *
 * `knowledgeSlug` cross-links each accessible guide to its citation-dense
 * reference page on docs.healthlog.dev/knowledge/<slug>/.
 */

export interface LearnArticle {
  slug: string;
  title: string;
  /** One-sentence subtitle shown on the card and as the page dek. */
  dek: string;
  /** Used verbatim as the page <meta name="description">. */
  description: string;
  category: LearnCategory;
  readingTimeMin: number;
  /** Matching reference page on the docs knowledge hub, or null. */
  knowledgeSlug: string | null;
}

export type LearnCategory =
  | "Heart & circulation"
  | "Metabolic health"
  | "Sleep & recovery"
  | "Body & composition"
  | "Fitness & longevity"
  | "Mind & cycle"
  | "Foundations";

export const LEARN_CATEGORY_ORDER: LearnCategory[] = [
  "Foundations",
  "Heart & circulation",
  "Sleep & recovery",
  "Metabolic health",
  "Fitness & longevity",
  "Body & composition",
  "Mind & cycle",
];

export const LEARN_ARTICLES: LearnArticle[] = [
  {
    slug: "understanding-your-health-metrics",
    title: "Your health metrics, connected",
    dek: "Why a single number rarely tells the story — and how the signals your body produces fit together.",
    description:
      "A plain-language guide to the everyday health metrics worth tracking — heart rate, sleep, blood pressure, glucose and more — and how they connect into one picture.",
    category: "Foundations",
    readingTimeMin: 8,
    knowledgeSlug: null,
  },
  {
    slug: "resting-heart-rate",
    title: "What your resting heart rate is telling you",
    dek: "The simplest number on your wrist is also one of the most honest. Here's how to read it.",
    description:
      "What a resting heart rate is, what counts as normal, what nudges it up or down, and when a sustained change is worth a clinician's attention.",
    category: "Heart & circulation",
    readingTimeMin: 7,
    knowledgeSlug: "resting-heart-rate",
  },
  {
    slug: "heart-rate-variability",
    title: "Heart rate variability, without the hype",
    dek: "HRV is powerful and badly misunderstood. A grounded look at what the beat-to-beat numbers mean.",
    description:
      "Heart rate variability explained: what HRV measures, why it varies so much between people, how to read your own trend, and the limits of a single reading.",
    category: "Heart & circulation",
    readingTimeMin: 8,
    knowledgeSlug: "hrv",
  },
  {
    slug: "reading-your-blood-pressure",
    title: "Reading your blood pressure numbers",
    dek: "Two numbers, a lot of nuance. What systolic and diastolic actually mean for your health.",
    description:
      "How to read blood pressure: what the two numbers mean, the guideline categories, why measurement technique matters, and when readings warrant medical follow-up.",
    category: "Heart & circulation",
    readingTimeMin: 8,
    knowledgeSlug: "blood-pressure",
  },
  {
    slug: "sleep-consistency",
    title: "Why sleep consistency beats sleep duration",
    dek: "Eight hours at random times isn't the same as seven on a steady schedule. The timing is the signal.",
    description:
      "Sleep, explained: the stages, how much you actually need, why a regular schedule matters as much as total hours, and what your sleep trend can reveal.",
    category: "Sleep & recovery",
    readingTimeMin: 8,
    knowledgeSlug: "sleep",
  },
  {
    slug: "respiratory-rate",
    title: "Respiratory rate: the quietest vital sign",
    dek: "You rarely think about your breathing rate — which is exactly why a shift in it is so informative.",
    description:
      "What respiratory rate is, the normal range at rest, why an overnight baseline is so stable, and why a sustained rise can be an early signal worth noticing.",
    category: "Sleep & recovery",
    readingTimeMin: 6,
    knowledgeSlug: "respiratory-rate",
  },
  {
    slug: "blood-oxygen-spo2",
    title: "What blood oxygen tells you (and what it doesn't)",
    dek: "SpO₂ is reassuring when it's high and easy to misread when it dips. A calm guide to the number.",
    description:
      "Blood-oxygen saturation (SpO₂) explained: the normal range, why wrist readings vary, the known accuracy caveats, and when a low reading deserves attention.",
    category: "Sleep & recovery",
    readingTimeMin: 6,
    knowledgeSlug: "spo2",
  },
  {
    slug: "body-temperature-baseline",
    title: "Your baseline temperature as a signal",
    dek: "There is no single 'normal' temperature — there's yours. Deviation from it is the useful part.",
    description:
      "Why body temperature varies through the day and across people, how a personal baseline beats the textbook 37 °C, and what a sustained deviation can indicate.",
    category: "Sleep & recovery",
    readingTimeMin: 6,
    knowledgeSlug: "temperature",
  },
  {
    slug: "blood-sugar-beyond-diabetes",
    title: "Blood sugar, beyond diabetes",
    dek: "Glucose isn't only a diabetes number. Here's what it reflects for everyone — and how HbA1c fits in.",
    description:
      "Blood glucose and HbA1c explained for a general audience: what the numbers mean, the guideline ranges, the difference between a spot reading and long-term average.",
    category: "Metabolic health",
    readingTimeMin: 9,
    knowledgeSlug: "glucose-hba1c",
  },
  {
    slug: "vo2max-and-longevity",
    title: "VO₂max: the fitness number linked to a longer life",
    dek: "Cardiorespiratory fitness is one of the strongest predictors of how long you'll live. Here's why.",
    description:
      "VO₂max explained: what it measures, how wearables estimate it, why cardiorespiratory fitness tracks so strongly with longevity, and how to move the number.",
    category: "Fitness & longevity",
    readingTimeMin: 8,
    knowledgeSlug: "vo2max-activity",
  },
  {
    slug: "beyond-the-scale",
    title: "Beyond the scale: weight, BMI and body composition",
    dek: "The scale answers one question. Body composition answers the one you actually care about.",
    description:
      "Why body weight and BMI are useful but blunt, what body composition adds, how to read fat and lean mass trends, and which signals matter for health.",
    category: "Body & composition",
    readingTimeMin: 8,
    knowledgeSlug: "weight-bmi",
  },
  {
    slug: "tracking-mood",
    title: "Tracking mood as a health signal",
    dek: "Mood feels too subjective to measure — but a steady log turns it into one of your most useful trends.",
    description:
      "Why a simple, consistent mood log is a legitimate health metric, how it interacts with sleep and activity, and when a sustained low mood warrants support.",
    category: "Mind & cycle",
    readingTimeMin: 7,
    knowledgeSlug: "mood",
  },
  {
    slug: "the-cycle-as-a-vital-sign",
    title: "The menstrual cycle as a vital sign",
    dek: "Clinicians treat the cycle as a vital sign for good reason. What its rhythm reveals about health.",
    description:
      "The menstrual cycle explained as a health signal: the four phases, what a normal cycle looks like, what shifts it, and when a change warrants a clinician.",
    category: "Mind & cycle",
    readingTimeMin: 8,
    knowledgeSlug: "menstrual-cycle",
  },
];

export function getArticle(slug: string): LearnArticle | undefined {
  return LEARN_ARTICLES.find((a) => a.slug === slug);
}

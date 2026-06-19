import type { ComponentType } from "react";
import type { Locale } from "./locales";

/**
 * Explicit (locale, slug) -> MDX loader map. Static literal import() calls are
 * required for Turbopack static export; template-literal dynamic imports do not
 * resolve. Every locale has all 13 files (untranslated ones start as English
 * copies), so a lookup never misses. Keep in sync with the manifest + locales.
 */
type MdxLoader = () => Promise<{ default: ComponentType }>;

export const LEARN_CONTENT: Record<Locale, Record<string, MdxLoader>> = {
  en: {
    "understanding-your-health-metrics": () => import("./en/understanding-your-health-metrics.mdx"),
    "resting-heart-rate": () => import("./en/resting-heart-rate.mdx"),
    "heart-rate-variability": () => import("./en/heart-rate-variability.mdx"),
    "reading-your-blood-pressure": () => import("./en/reading-your-blood-pressure.mdx"),
    "sleep-consistency": () => import("./en/sleep-consistency.mdx"),
    "respiratory-rate": () => import("./en/respiratory-rate.mdx"),
    "blood-oxygen-spo2": () => import("./en/blood-oxygen-spo2.mdx"),
    "body-temperature-baseline": () => import("./en/body-temperature-baseline.mdx"),
    "blood-sugar-beyond-diabetes": () => import("./en/blood-sugar-beyond-diabetes.mdx"),
    "vo2max-and-longevity": () => import("./en/vo2max-and-longevity.mdx"),
    "beyond-the-scale": () => import("./en/beyond-the-scale.mdx"),
    "tracking-mood": () => import("./en/tracking-mood.mdx"),
    "the-cycle-as-a-vital-sign": () => import("./en/the-cycle-as-a-vital-sign.mdx"),
  },
  de: {
    "understanding-your-health-metrics": () => import("./de/understanding-your-health-metrics.mdx"),
    "resting-heart-rate": () => import("./de/resting-heart-rate.mdx"),
    "heart-rate-variability": () => import("./de/heart-rate-variability.mdx"),
    "reading-your-blood-pressure": () => import("./de/reading-your-blood-pressure.mdx"),
    "sleep-consistency": () => import("./de/sleep-consistency.mdx"),
    "respiratory-rate": () => import("./de/respiratory-rate.mdx"),
    "blood-oxygen-spo2": () => import("./de/blood-oxygen-spo2.mdx"),
    "body-temperature-baseline": () => import("./de/body-temperature-baseline.mdx"),
    "blood-sugar-beyond-diabetes": () => import("./de/blood-sugar-beyond-diabetes.mdx"),
    "vo2max-and-longevity": () => import("./de/vo2max-and-longevity.mdx"),
    "beyond-the-scale": () => import("./de/beyond-the-scale.mdx"),
    "tracking-mood": () => import("./de/tracking-mood.mdx"),
    "the-cycle-as-a-vital-sign": () => import("./de/the-cycle-as-a-vital-sign.mdx"),
  },
  es: {
    "understanding-your-health-metrics": () => import("./es/understanding-your-health-metrics.mdx"),
    "resting-heart-rate": () => import("./es/resting-heart-rate.mdx"),
    "heart-rate-variability": () => import("./es/heart-rate-variability.mdx"),
    "reading-your-blood-pressure": () => import("./es/reading-your-blood-pressure.mdx"),
    "sleep-consistency": () => import("./es/sleep-consistency.mdx"),
    "respiratory-rate": () => import("./es/respiratory-rate.mdx"),
    "blood-oxygen-spo2": () => import("./es/blood-oxygen-spo2.mdx"),
    "body-temperature-baseline": () => import("./es/body-temperature-baseline.mdx"),
    "blood-sugar-beyond-diabetes": () => import("./es/blood-sugar-beyond-diabetes.mdx"),
    "vo2max-and-longevity": () => import("./es/vo2max-and-longevity.mdx"),
    "beyond-the-scale": () => import("./es/beyond-the-scale.mdx"),
    "tracking-mood": () => import("./es/tracking-mood.mdx"),
    "the-cycle-as-a-vital-sign": () => import("./es/the-cycle-as-a-vital-sign.mdx"),
  },
  fr: {
    "understanding-your-health-metrics": () => import("./fr/understanding-your-health-metrics.mdx"),
    "resting-heart-rate": () => import("./fr/resting-heart-rate.mdx"),
    "heart-rate-variability": () => import("./fr/heart-rate-variability.mdx"),
    "reading-your-blood-pressure": () => import("./fr/reading-your-blood-pressure.mdx"),
    "sleep-consistency": () => import("./fr/sleep-consistency.mdx"),
    "respiratory-rate": () => import("./fr/respiratory-rate.mdx"),
    "blood-oxygen-spo2": () => import("./fr/blood-oxygen-spo2.mdx"),
    "body-temperature-baseline": () => import("./fr/body-temperature-baseline.mdx"),
    "blood-sugar-beyond-diabetes": () => import("./fr/blood-sugar-beyond-diabetes.mdx"),
    "vo2max-and-longevity": () => import("./fr/vo2max-and-longevity.mdx"),
    "beyond-the-scale": () => import("./fr/beyond-the-scale.mdx"),
    "tracking-mood": () => import("./fr/tracking-mood.mdx"),
    "the-cycle-as-a-vital-sign": () => import("./fr/the-cycle-as-a-vital-sign.mdx"),
  },
  it: {
    "understanding-your-health-metrics": () => import("./it/understanding-your-health-metrics.mdx"),
    "resting-heart-rate": () => import("./it/resting-heart-rate.mdx"),
    "heart-rate-variability": () => import("./it/heart-rate-variability.mdx"),
    "reading-your-blood-pressure": () => import("./it/reading-your-blood-pressure.mdx"),
    "sleep-consistency": () => import("./it/sleep-consistency.mdx"),
    "respiratory-rate": () => import("./it/respiratory-rate.mdx"),
    "blood-oxygen-spo2": () => import("./it/blood-oxygen-spo2.mdx"),
    "body-temperature-baseline": () => import("./it/body-temperature-baseline.mdx"),
    "blood-sugar-beyond-diabetes": () => import("./it/blood-sugar-beyond-diabetes.mdx"),
    "vo2max-and-longevity": () => import("./it/vo2max-and-longevity.mdx"),
    "beyond-the-scale": () => import("./it/beyond-the-scale.mdx"),
    "tracking-mood": () => import("./it/tracking-mood.mdx"),
    "the-cycle-as-a-vital-sign": () => import("./it/the-cycle-as-a-vital-sign.mdx"),
  },
  pl: {
    "understanding-your-health-metrics": () => import("./pl/understanding-your-health-metrics.mdx"),
    "resting-heart-rate": () => import("./pl/resting-heart-rate.mdx"),
    "heart-rate-variability": () => import("./pl/heart-rate-variability.mdx"),
    "reading-your-blood-pressure": () => import("./pl/reading-your-blood-pressure.mdx"),
    "sleep-consistency": () => import("./pl/sleep-consistency.mdx"),
    "respiratory-rate": () => import("./pl/respiratory-rate.mdx"),
    "blood-oxygen-spo2": () => import("./pl/blood-oxygen-spo2.mdx"),
    "body-temperature-baseline": () => import("./pl/body-temperature-baseline.mdx"),
    "blood-sugar-beyond-diabetes": () => import("./pl/blood-sugar-beyond-diabetes.mdx"),
    "vo2max-and-longevity": () => import("./pl/vo2max-and-longevity.mdx"),
    "beyond-the-scale": () => import("./pl/beyond-the-scale.mdx"),
    "tracking-mood": () => import("./pl/tracking-mood.mdx"),
    "the-cycle-as-a-vital-sign": () => import("./pl/the-cycle-as-a-vital-sign.mdx"),
  },
};


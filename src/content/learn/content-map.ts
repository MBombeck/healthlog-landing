import type { ComponentType } from "react";

/**
 * Explicit slug → MDX loader map.
 *
 * A dynamic `import(`./${slug}.mdx`)` with a template literal does not resolve
 * reliably under Turbopack static export (the page renders the error boundary
 * instead of the article). Static, literal import() calls always resolve, so
 * every guide is wired explicitly here. Keep in sync with the manifest in
 * `index.ts` — both list the same 13 slugs.
 */
type MdxLoader = () => Promise<{ default: ComponentType }>;

export const LEARN_CONTENT: Record<string, MdxLoader> = {
  "understanding-your-health-metrics": () =>
    import("./understanding-your-health-metrics.mdx"),
  "resting-heart-rate": () => import("./resting-heart-rate.mdx"),
  "heart-rate-variability": () => import("./heart-rate-variability.mdx"),
  "reading-your-blood-pressure": () =>
    import("./reading-your-blood-pressure.mdx"),
  "sleep-consistency": () => import("./sleep-consistency.mdx"),
  "respiratory-rate": () => import("./respiratory-rate.mdx"),
  "blood-oxygen-spo2": () => import("./blood-oxygen-spo2.mdx"),
  "body-temperature-baseline": () => import("./body-temperature-baseline.mdx"),
  "blood-sugar-beyond-diabetes": () =>
    import("./blood-sugar-beyond-diabetes.mdx"),
  "vo2max-and-longevity": () => import("./vo2max-and-longevity.mdx"),
  "beyond-the-scale": () => import("./beyond-the-scale.mdx"),
  "tracking-mood": () => import("./tracking-mood.mdx"),
  "the-cycle-as-a-vital-sign": () => import("./the-cycle-as-a-vital-sign.mdx"),
};

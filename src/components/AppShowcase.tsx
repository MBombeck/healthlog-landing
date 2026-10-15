"use client";

import { useState, useEffect, useRef } from "react";
import { AppScreen, type AppScreenName } from "./AppScreen";
import { BrowserFrame } from "./BrowserFrame";

/* Sticky scroll-reveal: the browser frame stays pinned in the centre of the
   viewport while the captions scroll past on the left, and the screenshot
   cross-fades to match the caption crossing the centre line. The captions are
   real DOM text (indexable, accessible); the dim/active state is opacity only.
   No animation library: CSS `position: sticky` + one IntersectionObserver.
   Each capture follows the visitor's colour scheme (see AppScreen). */

type Screen = {
  name: AppScreenName;
  alt: string;
  kicker: string;
  title: string;
  body: string;
  accent: string;
};

const screens: Screen[] = [
  {
    name: "day-panel",
    alt: "HealthLog blood-pressure chart with one day marked, and that day opened in a panel docked on the right: the medications running that day and eight values, each against the 30 days before",
    kicker: "Any day",
    title: "Open a day beside whatever you are looking at",
    body: "Tap a day on a chart, a list or the calendar strip and it docks at the side: what was running, every reading against your usual range, the doses and what happened. Step to the day before or after without losing the page you came from.",
    accent: "#8be9fd",
  },
  {
    name: "timeline",
    alt: "HealthLog timeline over three months with lanes for life events, conditions, medications, vaccinations, labs and cycle above blood pressure, weight and resting heart rate",
    kicker: "Timeline",
    title: "Years of your record on one axis",
    body: "Medications, conditions, vaccinations, lab draws, visits and life events in lanes, with your values drawn underneath. Zoom from all years down to a few weeks and see what changed when.",
    accent: "#bd93f9",
  },
  {
    name: "search",
    alt: "HealthLog search palette with the query ramipril, listing the medication and three doctor visits whose notes mention it, with the matching word highlighted",
    kicker: "Search",
    title: "Find anything you ever wrote down",
    body: "Press ⌘K and type. Visits, conditions, documents down to their text, vaccinations, lab results, medications, workouts and your own notes, each hit opening where it lives.",
    accent: "#ff79c6",
  },
  {
    name: "medications",
    alt: "HealthLog medications filed by category, with a supplement that records itself, next and last intake, 7- and 30-day adherence and take or skip actions",
    kicker: "Medications",
    title: "Doses, adherence and supplements that log themselves",
    body: "Each medication shows its next and last dose and how well you kept to it over 7 and 30 days. File them by category, and let a supplement you never miss record itself every evening.",
    accent: "#50fa7b",
  },
  {
    name: "labs",
    alt: "HealthLog lab results with each value placed on its reference range, a small trend per marker, and a glucose reading converted from mmol/L",
    kicker: "Labs",
    title: "Blood work against its range, in one unit",
    body: "Every marker sits on its reference range with its trend beside it. A report printed in another unit is converted on entry, and the value as printed stays next to it.",
    accent: "#ffb86c",
  },
  {
    name: "coach",
    alt: "HealthLog Coach answering how the week's recovery went, with the steps it took folded above the answer and earlier conversations listed on the right",
    kicker: "AI Coach",
    title: "Ask your record a question",
    body: "The Coach reads your own data, shows the steps it took and answers in plain language. Bring your own key, run a local model, or leave AI off entirely: everything else works without it.",
    accent: "#bd93f9",
  },
  {
    name: "sources",
    alt: "HealthLog source priority settings ranking Apple Health, Withings and manual entry for steps, with the winning source shown for each other metric",
    kicker: "Integrations",
    title: "Every source, one value per day",
    body: "Apple Health, Withings, WHOOP, Oura, Polar, Fitbit, Strava, Nightscout and your own entries. When two report the same metric on the same day, you decide which one counts. The others stay stored.",
    accent: "#8be9fd",
  },
];

export function AppShowcase() {
  const [active, setActive] = useState(0);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const nodes = captionRefs.current.filter(Boolean) as HTMLDivElement[];
    if (nodes.length === 0) return;

    // Zero-height line near the TOP of the viewport (≈15%), level with where the
    // pinned frame and the caption text sit — so the active screenshot matches
    // the caption currently aligned at the top, not one centred mid-screen.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index ?? "0",
            );
            setActive(idx);
          }
        }
      },
      { rootMargin: "-15% 0px -85% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ── Desktop: sticky scroll-reveal ─────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-[340px_1fr] lg:gap-12 xl:gap-16">
        {/* Left: scrolling captions */}
        <div>
          {screens.map((s, i) => (
            <div
              key={s.name}
              ref={(el) => {
                captionRefs.current[i] = el;
              }}
              data-index={i}
              className="flex min-h-[80vh] flex-col justify-start pt-[14vh] transition-opacity duration-500"
              style={{ opacity: i === active ? 1 : 0.5 }}
            >
              <span
                className="section-label mb-5 w-fit"
                style={{
                  color: s.accent,
                  borderColor: `${s.accent}26`,
                  backgroundColor: `${s.accent}0a`,
                }}
              >
                {s.kicker}
              </span>
              <h3 className="font-display text-text-primary mb-4 text-2xl font-bold tracking-[-0.02em] md:text-3xl">
                {s.title}
              </h3>
              <p className="text-text-secondary max-w-md text-base leading-[1.7]">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Right: pinned browser frame, screenshots cross-fade */}
        <div>
          {/* Pin the frame near the top (level with the caption text) so it stays
              put — chrome bar and all — through every caption including the last,
              and only releases when the caption column ends. */}
          <div className="sticky top-[14vh]">
            <div className="relative w-full">
              <BrowserFrame>
                <div className="relative aspect-[1600/785] overflow-hidden bg-[#282a36]">
                  {screens.map((s, i) => (
                    <div
                      key={s.name}
                      className="absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ opacity: i === active ? 1 : 0 }}
                      aria-hidden={i !== active}
                    >
                      <AppScreen
                        name={s.name}
                        alt={s.alt}
                        sizes="(max-width: 1024px) 0px, 860px"
                        className="h-full w-full object-contain object-top"
                      />
                    </div>
                  ))}
                </div>
              </BrowserFrame>

              {/* Progress rail */}
              <div className="absolute -left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-2 xl:flex">
                {screens.map((s, i) => (
                  <span
                    key={s.name}
                    className="h-6 w-0.5 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor:
                        i === active ? s.accent : "rgba(98,114,164,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile / tablet: stacked frames with captions ─────── */}
      <div className="flex flex-col gap-14 lg:hidden">
        {screens.map((s) => (
          <div key={s.name}>
            <div className="mb-5">
              <span
                className="section-label mb-3 w-fit"
                style={{
                  color: s.accent,
                  borderColor: `${s.accent}26`,
                  backgroundColor: `${s.accent}0a`,
                }}
              >
                {s.kicker}
              </span>
              <h3 className="font-display text-text-primary mb-2 text-xl font-bold tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="text-text-secondary text-sm leading-[1.7]">
                {s.body}
              </p>
            </div>
            <BrowserFrame>
              <div className="relative aspect-[1600/785] overflow-hidden bg-[#282a36]">
                <AppScreen
                  name={s.name}
                  alt={s.alt}
                  sizes="100vw"
                  className="h-full w-full object-contain object-top"
                />
              </div>
            </BrowserFrame>
          </div>
        ))}
      </div>
    </div>
  );
}

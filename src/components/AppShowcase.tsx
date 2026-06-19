"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* Sticky scroll-reveal: the browser frame stays pinned in the centre of the
   viewport while the captions scroll past on the left, and the screenshot
   cross-fades to match the caption crossing the centre line. The captions are
   real DOM text (indexable, accessible); the dim/active state is opacity only.
   No animation library — CSS `position: sticky` + one IntersectionObserver. */

type Screen = {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  body: string;
  accent: string;
};

const screens: Screen[] = [
  {
    src: "/screenshots/desktop-dashboard-opt.webp",
    alt: "HealthLog dashboard showing weight, blood pressure, pulse, and mood metric tiles with weight and BMI trend charts",
    kicker: "Dashboard",
    title: "Your whole day, the second you open it",
    body: "Weight, blood pressure, pulse and mood sit up top, your weight and BMI trends right below. Reorder, resize or hide each card — every tile is yours to arrange.",
    accent: "#8be9fd",
  },
  {
    src: "/screenshots/desktop-medications-opt.webp",
    alt: "HealthLog medication management with 7-day and 30-day compliance rings, next-intake times, and per-medication take or skip actions",
    kicker: "Medications",
    title: "Adherence you can actually see",
    body: "Today's doses, 7- and 30-day compliance rings, and the next intake time for each medication. Mark a dose taken or skipped in a single tap — supply, streaks and your compliance rate update on the spot.",
    accent: "#bd93f9",
  },
  {
    src: "/screenshots/desktop-trends-opt.webp",
    alt: "HealthLog trend charts for medication adherence, sleep duration, and daily step count",
    kicker: "Trends",
    title: "A shift you can spot in a second",
    body: "Clean-line charts for every metric — adherence, sleep, steps and more — each one overlaid with last month and last year, so the direction is obvious at a glance.",
    accent: "#50fa7b",
  },
  {
    src: "/screenshots/desktop-measurements-opt.webp",
    alt: "HealthLog measurements list showing weight, glucose, oxygen saturation, blood pressure, and steps with Withings and Apple Health source badges",
    kicker: "Measurements",
    title: "One timeline, every source",
    body: "Manual entries, Withings devices and Apple Health all land on the same list, each reading badged with where it came from. When several sources log the same day, they collapse into one canonical value — no double-counting.",
    accent: "#ff79c6",
  },
];

/* Browser chrome shared by the sticky frame and the mobile stack. */
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="showcase-frame w-full">
      <div className="showcase-frame-inner">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[rgba(98,114,164,0.12)] bg-[#1a1b26]">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5555] opacity-60" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffb86c] opacity-60" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#50fa7b] opacity-60" />
          </div>
          <div className="flex-1 flex justify-center min-w-0">
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-md bg-[rgba(68,71,90,0.4)] max-w-[280px] w-full">
              <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-text-tertiary flex-shrink-0 hidden sm:block" aria-hidden="true">
                <path d="M8 1a4 4 0 0 0-4 4v3H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V5a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="text-[10px] font-mono text-text-tertiary tracking-wide truncate">healthlog.yourserver.io</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export function AppShowcase() {
  const [active, setActive] = useState(0);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const nodes = captionRefs.current.filter(Boolean) as HTMLDivElement[];
    if (nodes.length === 0) return;

    // A zero-height band at the vertical centre of the viewport: whichever
    // caption crosses it becomes active.
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
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ── Desktop: sticky scroll-reveal ─────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-14 xl:gap-20">
        {/* Left: scrolling captions */}
        <div>
          {screens.map((s, i) => (
            <div
              key={s.src}
              ref={(el) => {
                captionRefs.current[i] = el;
              }}
              data-index={i}
              className="flex min-h-[78vh] flex-col justify-center transition-opacity duration-500"
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
          <div className="sticky top-0 flex h-screen items-center">
            <div className="relative w-full">
              <BrowserFrame>
                <div className="relative aspect-[1600/785] overflow-hidden bg-[#282a36]">
                  {screens.map((s, i) => (
                    <div
                      key={s.src}
                      className="absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ opacity: i === active ? 1 : 0 }}
                      aria-hidden={i !== active}
                    >
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(max-width: 1024px) 0px, 600px"
                        className="object-contain object-top"
                        priority={i === 0}
                        quality={90}
                      />
                    </div>
                  ))}
                </div>
              </BrowserFrame>

              {/* Progress rail */}
              <div className="absolute -left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-2 xl:flex">
                {screens.map((s, i) => (
                  <span
                    key={s.src}
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
          <div key={s.src}>
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
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="100vw"
                  className="object-contain object-top"
                  quality={90}
                />
              </div>
            </BrowserFrame>
          </div>
        ))}
      </div>
    </div>
  );
}

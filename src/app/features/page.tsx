import type { Metadata } from "next";
import Link from "next/link";

import { AppScreen, type AppScreenName } from "@/components/AppScreen";
import { BrowserFrame } from "@/components/BrowserFrame";
import { SITE_ORIGIN } from "@/content/learn/locales";

/**
 * Marketing features page.
 *
 * A deep, indexable expansion of what the homepage only summarises. Self-
 * contained: its own dark Dracula chrome (defined in `globals.css`), a minimal
 * top bar linking home, and a footer that links back. Server component.
 */

const TITLE = "Features: everything HealthLog tracks";
const DESCRIPTION =
  "Everything HealthLog tracks, in one list: vitals, medications, labs, documents, visits, the day view and timeline, record search, an optional AI Coach, sharing and export, device sync, and what it takes to run it on your own server.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/features`,
    type: "website",
    siteName: "HealthLog",
    locale: "en_US",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

/* ── data ─────────────────────────────────────────── */

type Item = [title: string, line: string];
type Group = {
  id: string;
  title: string;
  color: string;
  items: Item[];
  shot?: { name: AppScreenName; alt: string; caption: string };
};

const groups: Group[] = [
  {
    id: "every-day",
    title: "Every day",
    color: "#8be9fd",
    items: [
      ["Today", "A health score, the day's lead read and what needs a look, prepared overnight."],
      ["Vitals and trends", "Weight, blood pressure, heart rate, glucose, SpO₂, sleep, steps and more, each against your own target range."],
      ["Heart rate through the day", "The whole curve, not one resting number. Fine detail is kept for 90 days."],
      ["ECG", "Single-lead recordings from a compatible watch, shown on an ECG grid and never interpreted."],
      ["Mood", "A one-tap face or five optional sliders, trended over 7, 30 and 90 days."],
      ["Mental wellbeing", "WHO-5, PHQ-9 and GAD-7 self-checks. Off until you switch them on, answers encrypted."],
      ["Cycle", "Symptothermal tracking with a careful forecast. Off until you switch it on."],
      ["Nutrition", "Water, caffeine, vitamins and minerals from Apple Health, as context rather than a verdict."],
      ["Weather and air", "Weather, air quality, pollen and UV for your city, compared with your days after the season is taken out."],
    ],
  },
  {
    id: "medications",
    title: "Medications",
    color: "#50fa7b",
    items: [
      ["Any schedule", "Fixed times, calendar rules, rolling intervals, cyclic courses, as needed or a single dose."],
      ["Doses that log themselves", "For a supplement you never miss. Anything you log or skip by hand wins."],
      ["Adherence and stock", "Compliance over 7 and 30 days, and a warning before you run out."],
      ["Courses and categories", "Each course counted on its own, your own categories next to the built-in ones."],
      ["GLP-1", "Injection-site rotation, dose titration, pen inventory and a side-effect log."],
    ],
    shot: {
      name: "medications",
      alt: "HealthLog medication cards filed by category, with a supplement recorded automatically, adherence over 7 and 30 days, and take or skip actions",
      caption: "The supplement on the left records itself every evening.",
    },
  },
  {
    id: "record",
    title: "Your record",
    color: "#ffb86c",
    items: [
      ["Lab results", "Each value on its reference range, the range printed on the report first, converted into one unit with the printed value kept."],
      ["Longevity panel", "ApoB, Lp(a), hs-CRP, HbA1c, insulin, eGFR, the omega-3 index and more."],
      ["Illness journal", "Episodes with daily symptoms, up to eight symptoms of your own, and a Rest Mode while you recover."],
      ["Medical history", "Allergies and family history as structured, encrypted entries."],
      ["Doctor visits", "Each visit linked to the lab results, documents and episodes it concerned."],
      ["Vaccinations", "Every shot in one record, also on the timeline."],
      ["Check-up reminders", "Recurring reminders that close themselves when the matching reading or visit lands."],
      ["Document vault", "Letters and scans encrypted at rest, read on your server and searchable without storing readable text."],
    ],
    shot: {
      name: "labs",
      alt: "HealthLog lab results, each value on its reference range with a small trend, fasting glucose and vitamin D converted from SI units",
      caption: "Fasting glucose and vitamin D were printed in mmol/L and nmol/L.",
    },
  },
  {
    id: "understand",
    title: "Find and understand",
    color: "#ff79c6",
    items: [
      ["Day view", "Any date opens its day beside the page you are on, or as a sheet on a phone."],
      ["Timeline", "Conditions, medications, vaccinations, visits, labs and life events on one axis, from years down to weeks."],
      ["Record search", "⌘K finds visits, conditions, document text, lab results, medications, workouts and your own notes."],
      ["AI Coach", "Answers from your own numbers and shows the steps it took. It asks when a question is ambiguous and remembers health details only with your consent."],
      ["AI providers", "Your ChatGPT subscription, an OpenAI or Anthropic key, a local model on Ollama, LM Studio or vLLM, or none."],
      ["Correlations", "Sleep, mood, vitals and the weather side by side, without double-counting the season."],
    ],
    shot: {
      name: "search",
      alt: "HealthLog search with the query ramipril, showing the medication and three visits whose notes mention it",
      caption: "One search, four hits: the medication and three visit notes.",
    },
  },
  {
    id: "share",
    title: "Share and export",
    color: "#bd93f9",
    items: [
      ["Doctor report", "A localised PDF, rendered on your server, for the stretch you choose."],
      ["FHIR R4", "An export bundle and a read-only API a clinician's system can take in."],
      ["CSV and JSON", "Everything, for your own analysis."],
      ["Share links", "Time-boxed and revocable, with a QR code to scan at the desk."],
      ["Shared access", "Another account can read, add to or manage your record, whole or by section, until either side ends it."],
      ["Managed profiles", "A record for a child or someone in your care, with guardians and a hand-over link."],
      ["MCP for AI assistants", "Claude, ChatGPT and others read your record over OAuth. Writes are previewed and confirmed."],
    ],
  },
  {
    id: "connect",
    title: "Connect",
    color: "#8be9fd",
    items: [
      ["Withings, WHOOP, Oura, Polar, Strava", "OAuth sync, Withings with webhooks."],
      ["Fitbit and Pixel Watch", "Through the Google Health API and your own Google Cloud client."],
      ["Nightscout", "Continuous glucose from your own instance."],
      ["Apple Health", "Live two-way sync in the iPhone app, or an export.zip with your full history."],
      ["Health Connect", "Upload an export. Apps you already connect directly are skipped."],
      ["Garmin", "Through Apple Health or Health Connect."],
      ["Source priority", "Per metric, you pick which source counts when two report the same day."],
      ["Notifications", "Push, Telegram, ntfy, e-mail or a webhook. A tap opens the right page."],
    ],
    shot: {
      name: "sources",
      alt: "HealthLog source priority settings ranking Apple Health, Withings and manual entry for steps, with the winning source for each other metric",
      caption: "Source priority. The other readings stay stored.",
    },
  },
  {
    id: "run",
    title: "Run it",
    color: "#50fa7b",
    items: [
      ["One docker compose up", "App and PostgreSQL. All state lives in one database volume."],
      ["Backups", "Encrypted nightly backups to any S3-compatible bucket, if you want them."],
      ["Encryption", "AES-256-GCM for notes, documents, answers and keys, with key rotation. Values stay queryable."],
      ["Sign-in", "Passkeys, password with 2FA, or OpenID Connect single sign-on."],
      ["No telemetry", "Three small checks (update, password breach, sign-in location), none with health data, each can be switched off."],
      ["API", "A documented REST API with scoped tokens and an OpenAPI 3.1 contract."],
      ["Languages", "English, German, Spanish, French, Italian, Polish and Korean."],
      ["Not a medical device", "HealthLog shows and explains your data. It does not diagnose."],
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-void text-text-primary relative min-h-dvh overflow-x-clip">
      <div className="noise-overlay" />

      {/* Top bar */}
      <header
        className="bg-void/80 sticky top-0 z-10 border-b border-[rgba(98,114,164,0.08)] backdrop-blur"
        role="banner"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
          <Link
            href="/"
            className="text-text-primary hover:text-purple font-display inline-flex min-h-11 items-center text-sm font-semibold tracking-tight transition-colors"
          >
            HealthLog
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-4 md:gap-5">
            <Link
              href="/#demo"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              Demo
            </Link>
            <Link
              href="/security"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              Security
            </Link>
            <a
              href="https://docs.healthlog.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com/MBombeck/HealthLog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary hidden min-h-11 items-center text-sm transition-colors sm:inline-flex"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-5xl space-y-20 px-4 py-12 md:px-6 md:py-20"
      >
        <div className="max-w-3xl space-y-4">
          <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
            Features
          </p>
          <h1 className="font-display text-text-primary text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Everything HealthLog does
          </h1>
          <p className="text-text-secondary text-base leading-relaxed md:text-lg">
            One line each. The{" "}
            <a
              className="text-purple hover:underline"
              href="https://docs.healthlog.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              docs
            </a>{" "}
            have the detail, the{" "}
            <Link className="text-purple hover:underline" href="/security">
              security page
            </Link>{" "}
            the threat model.
          </p>
          <nav aria-label="Feature groups" className="flex flex-wrap gap-2 pt-2">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="text-text-secondary hover:text-text-primary rounded-full border border-[rgba(98,114,164,0.18)] px-3 py-1.5 text-xs transition-colors"
              >
                {g.title}
              </a>
            ))}
          </nav>
        </div>

        {groups.map((g) => (
          <section
            key={g.id}
            id={g.id}
            aria-labelledby={`${g.id}-heading`}
            className="scroll-mt-24"
          >
            <h2
              id={`${g.id}-heading`}
              className="font-display text-text-primary mb-6 flex items-center gap-3 text-2xl font-bold tracking-[-0.02em] md:text-3xl"
            >
              <span
                className="h-6 w-1 rounded-full"
                style={{ backgroundColor: g.color }}
                aria-hidden="true"
              />
              {g.title}
            </h2>
            <dl className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map(([title, line]) => (
                <div key={title}>
                  <dt className="font-display text-text-primary text-sm font-semibold">
                    {title}
                  </dt>
                  <dd className="text-text-secondary mt-1 text-sm leading-relaxed">
                    {line}
                  </dd>
                </div>
              ))}
            </dl>
            {g.shot && (
              <figure className="mt-10">
                <BrowserFrame>
                  <AppScreen
                    name={g.shot.name}
                    alt={g.shot.alt}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="block h-auto w-full"
                  />
                </BrowserFrame>
                <figcaption className="text-text-tertiary mt-3 text-center text-xs">
                  {g.shot.caption}
                </figcaption>
              </figure>
            )}
          </section>
        ))}

        {/* CTAs */}
        <section className="border-t border-[rgba(98,114,164,0.08)] pt-12">
          <h2 className="font-display text-text-primary mb-6 text-2xl font-bold tracking-[-0.02em] md:text-3xl">
            See it for yourself
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="https://github.com/MBombeck/HealthLog"
              className="cta-button group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View on GitHub</span>
            </a>
            <Link href="/#demo" className="cta-secondary group">
              <span>Try the live demo</span>
            </Link>
            <a
              href="https://docs.healthlog.dev"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Read the docs</span>
            </a>
          </div>
        </section>

        <footer className="text-text-tertiary mt-4 border-t border-[rgba(98,114,164,0.08)] pt-6 text-xs">
          <p>
            <Link
              href="/"
              className="hover:text-text-primary underline-offset-2 hover:underline"
            >
              Back to home
            </Link>{" "}
            ·{" "}
            <Link
              href="/security"
              className="hover:text-text-primary underline-offset-2 hover:underline"
            >
              Security &amp; privacy
            </Link>{" "}
            · HealthLog — source available under{" "}
            <a
              href="https://polyformproject.org/licenses/noncommercial/1.0.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary underline-offset-2 hover:underline"
            >
              PolyForm Noncommercial 1.0.0
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}

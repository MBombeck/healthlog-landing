import type { Metadata } from "next";
import Link from "next/link";

import { SITE_ORIGIN } from "@/content/learn/locales";

/**
 * Marketing features page.
 *
 * A deep, indexable expansion of what the homepage only summarises. Self-
 * contained: its own dark Dracula chrome (defined in `globals.css`), a minimal
 * top bar linking home, and a footer that links back. Server component.
 */

const TITLE = "Features — everything HealthLog tracks";
const DESCRIPTION =
  "A full tour of HealthLog: vitals and trends, medication adherence, lab biomarkers, FHIR and doctor-report export, an illness journal with Rest Mode, preventive-care reminders, a cited AI Coach, and device sync — all self-hosted and source available.";

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

/* ── small presentational helpers ─────────────────── */

const LABEL_COLORS: Record<string, string> = {
  purple: "text-purple border-purple/15 bg-purple/[0.03]",
  cyan: "text-cyan border-cyan/15 bg-cyan/[0.03]",
  pink: "text-pink border-pink/15 bg-pink/[0.03]",
  green: "text-green border-green/15 bg-green/[0.03]",
  orange: "text-orange border-orange/15 bg-orange/[0.03]",
};

function FeatureSection({
  id,
  label,
  color,
  title,
  children,
}: {
  id: string;
  label: string;
  color: keyof typeof LABEL_COLORS | string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4 sm:scroll-mt-28">
      <span
        className={`section-label inline-block ${LABEL_COLORS[color] ?? LABEL_COLORS.purple}`}
      >
        {label}
      </span>
      <h2 className="font-display text-text-primary text-2xl font-bold tracking-[-0.02em] md:text-3xl">
        {title}
      </h2>
      <div className="text-text-secondary space-y-4 text-sm leading-relaxed md:text-base">
        {children}
      </div>
    </section>
  );
}

const TOC = [
  { id: "vitals", label: "Vitals & trends" },
  { id: "medication", label: "Medication & adherence" },
  { id: "labs", label: "Labs & biomarkers" },
  { id: "export", label: "Export & interoperability" },
  { id: "illness", label: "Illness journal & Rest Mode" },
  { id: "cycle", label: "Cycle tracking" },
  { id: "preventive", label: "Preventive-care reminders" },
  { id: "coach", label: "AI Coach" },
  { id: "integrations", label: "Integrations" },
  { id: "notifications", label: "Notifications" },
  { id: "languages", label: "Languages & achievements" },
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
          <Link
            href="/security"
            className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
          >
            Security
          </Link>
        </div>
      </header>

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-3xl space-y-14 px-4 py-12 md:px-6 md:py-20"
      >
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
            Features
          </p>
          <h1 className="font-display text-text-primary text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Everything HealthLog tracks
          </h1>
          <p className="text-text-secondary text-base leading-relaxed md:text-lg">
            HealthLog brings every health signal you care about onto one
            timeline, on a server you control. Below is the full picture: the
            metrics, the medication engine, lab work, the export formats a
            clinician can actually open, and the cited AI Coach. No cloud, no
            telemetry, source available.
          </p>
        </div>

        {/* Table of contents */}
        <nav
          aria-label="Features contents"
          className="glass-card rounded-md p-5"
        >
          <ol className="grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  className="text-text-secondary hover:text-purple hover:underline"
                  href={`#${item.id}`}
                >
                  <span className="text-text-tertiary font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <FeatureSection
          id="vitals"
          label="Vitals & trends"
          color="purple"
          title="Every reading on one timeline"
        >
          <p>
            Weight, blood pressure, heart rate, body composition, blood glucose,
            SpO₂, sleep, steps and mood all share a single timeline. Each metric
            carries your own target ranges rather than generic defaults, and the
            charts overlay this period against last month or last year so a
            change reads at a glance.
          </p>
          <p>
            Behind the charts sits a persistent rollup tier that pre-aggregates
            history, so years of readings stay sub-second instead of grinding
            through every row on every load.
          </p>
          <div className="glass-card overflow-hidden p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/01-data-flow.svg"
              alt="Diagram of how readings flow from manual entry and connected sources through ingest endpoints and a source-priority resolver into one canonical timeline"
              loading="lazy"
              className="h-auto w-full rounded-md"
            />
            <p className="text-text-tertiary mt-3 px-1 text-xs leading-relaxed">
              How a reading flows from its source to the timeline every surface
              reads from.
            </p>
          </div>
        </FeatureSection>

        <FeatureSection
          id="medication"
          label="Medication & adherence"
          color="cyan"
          title="Any regimen, tracked precisely"
        >
          <p>
            Schedule medications at fixed times, on a calendar rule (RRULE), on
            rolling intervals, as a cyclic on/off course, as-needed (PRN), or as
            a one-shot injection. Each dose has its own intake window, so a dose
            counts as taken when you actually take it rather than snapping to the
            nearest slot.
          </p>
          <p>
            Supply tracking watches your remaining count and surfaces a low-stock
            runway before you run out. A compliance percentage rolls up across
            your real cadence, reminders escalate when a dose slips, and route of
            administration is captured per medication.
          </p>
          <p>
            GLP-1 treatments get a dedicated layer: injection-site rotation, a
            dose-titration history, pen-and-vial inventory, and a side-effect
            logbook against a fixed taxonomy.
          </p>
        </FeatureSection>

        <FeatureSection
          id="labs"
          label="Labs & biomarkers"
          color="green"
          title="Blood work that trends over time"
        >
          <p>
            Enter lab results against a biomarker catalogue that carries
            reference ranges, so each value lands in or out of range on entry.
            Group related markers into panels, and watch every biomarker trend
            across draws instead of reading isolated numbers off a PDF.
          </p>
        </FeatureSection>

        <FeatureSection
          id="export"
          label="Export & interoperability"
          color="green"
          title="Your data leaves the way it came in"
        >
          <p>
            Export to CSV or JSON for your own analysis, generate a localized
            doctor-report PDF to bring to an appointment, or hand a clinician a
            FHIR R4 bundle their system can ingest directly.
          </p>
          <p>
            The FHIR bundle covers Patient, Observation, MedicationStatement,
            MedicationAdministration and Coverage resources — the structured
            spine of your record in a standard format, no proprietary lock-in.
          </p>
        </FeatureSection>

        <FeatureSection
          id="illness"
          label="Illness journal & Rest Mode"
          color="pink"
          title="Track an episode without being punished for it"
        >
          <p>
            Log acute illnesses, chronic conditions, recurring conditions and
            individual flares through a lifecycle, with a daily symptom log
            underneath each episode.
          </p>
          <p>
            An active episode turns on Rest Mode, which softens nudges and
            reframes your score rather than penalising you for a week spent
            recovering. Being unwell should never read as a failure on your own
            dashboard.
          </p>
        </FeatureSection>

        <FeatureSection
          id="cycle"
          label="Cycle tracking"
          color="pink"
          title="Symptothermal, discreet, opt-in"
        >
          <p>
            Symptothermal cycle tracking with period logging, symptoms and a
            careful prediction model. It is off until you switch it on, and
            discreet by design once it is.
          </p>
        </FeatureSection>

        <FeatureSection
          id="preventive"
          label="Preventive-care reminders"
          color="orange"
          title="Never lose track of a check-up"
        >
          <p>
            Schedule recurring preventive-care and measurement reminders — annual
            blood work, a week of twice-daily blood pressure — on a rolling
            cadence or a calendar rule. They auto-resolve once the matching
            reading lands, so the list stays honest without manual cleanup.
          </p>
        </FeatureSection>

        <FeatureSection
          id="coach"
          label="AI Coach"
          color="orange"
          title="Every claim cites its data"
        >
          <p>
            The Coach answers from your own numbers and shows its work: each
            reply cites the exact metric, the window it looked at, and how many
            readings it drew on. It reads as prose first, with the evidence
            pinned underneath, not as a chatbot guessing.
          </p>
          <p>
            Pick the provider that fits your privacy and budget: your ChatGPT
            subscription, an OpenAI key (gpt-4o), an Anthropic key (Claude
            Sonnet 4.6), or a fully local OpenAI-compatible model running on
            Ollama, LM Studio or vLLM that never leaves your network.
          </p>
          <div className="glass-card overflow-hidden p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/02-coach-pipeline.svg"
              alt="Diagram of the AI Coach pipeline: a health-data snapshot becomes a prompt, runs through a multi-provider chain, and returns a schema-validated, cited response"
              loading="lazy"
              className="h-auto w-full rounded-md"
            />
            <p className="text-text-tertiary mt-3 px-1 text-xs leading-relaxed">
              Snapshot to prompt to multi-provider chain to a parsed, cited
              answer.
            </p>
          </div>
        </FeatureSection>

        <FeatureSection
          id="integrations"
          label="Integrations"
          color="cyan"
          title="Bring your devices and services"
        >
          <p>
            Sync from Withings, WHOOP, Oura, Polar, Fitbit (via Google Health)
            and Nightscout. Apple Health connects two-way through the native iOS
            app and HealthKit, and you can also drop an Apple Health export.zip
            on the upload page on any platform.
          </p>
          <p>
            When several sources log the same day, source-priority dedup resolves
            them to one canonical reading instead of triple-counting the same
            step or the same weigh-in.
          </p>
        </FeatureSection>

        <FeatureSection
          id="notifications"
          label="Notifications"
          color="purple"
          title="Reach you wherever you are"
        >
          <p>
            Reminders and alerts go out over Apple Push Notifications, Web Push
            (VAPID), Telegram or ntfy, so you can route HealthLog to whatever you
            already check.
          </p>
        </FeatureSection>

        <FeatureSection
          id="languages"
          label="Languages & achievements"
          color="green"
          title="Localized, with a little momentum"
        >
          <p>
            The interface ships in six languages — German, English, Spanish,
            French, Italian and Polish. Along the way, 40 achievements give
            consistent tracking a bit of momentum without turning your health
            into a game you can lose.
          </p>
        </FeatureSection>

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
            <a
              href="https://demo.healthlog.dev"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Try the live demo</span>
            </a>
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

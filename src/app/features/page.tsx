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
  "A full tour of HealthLog: vitals and trends, medication adherence, lab biomarkers and a longevity panel, PHQ-9/GAD-7 wellbeing screening, medical history, an encrypted document vault that reads, searches and shares your medical letters, FHIR and doctor-report export, an illness journal with Rest Mode, a cited AI Coach, an OAuth-secured MCP server for AI assistants, and device sync — all self-hosted and source available.";

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
  { id: "wellbeing", label: "Mental wellbeing" },
  { id: "history", label: "Medical history" },
  { id: "documents", label: "Document vault" },
  { id: "export", label: "Export & interoperability" },
  { id: "illness", label: "Illness journal & Rest Mode" },
  { id: "cycle", label: "Cycle tracking" },
  { id: "preventive", label: "Preventive-care reminders" },
  { id: "environment", label: "Environmental context" },
  { id: "coach", label: "AI Coach" },
  { id: "assistants", label: "AI assistants & MCP" },
  { id: "integrations", label: "Integrations" },
  { id: "notifications", label: "Notifications" },
  { id: "languages", label: "Languages & achievements" },
  { id: "scope", label: "What HealthLog is — and isn't" },
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
            SpO₂, respiratory rate, sleep, steps and mood all share a single
            timeline. Each metric carries your own target ranges rather than
            generic defaults, and the charts overlay this period against last
            month or last year so a change reads at a glance.
          </p>
          <p>
            Newer signals slot in the same way, each with its own detail page,
            reference range and trend: grip strength, a 0–10 pain score, and
            waist circumference with waist-to-height ratio. Single-lead ECG
            recordings synced from a compatible watch land here too, drawn on a
            familiar ECG grid with the recording device&apos;s own result kept
            unchanged — HealthLog shows the trace, it does not interpret or
            diagnose it.
          </p>
          <p>
            The dashboard surfaces more of what your devices already sync:
            heart-rate variability, blood oxygen (SpO₂), breathing rate and body
            composition each read as an at-a-glance tile alongside the core
            vitals, and you can show, hide and reorder every one.
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
            counts as taken when you actually take it rather than snapping to
            the nearest slot.
          </p>
          <p>
            Supply tracking watches your remaining count and surfaces a
            low-stock runway before you run out. A compliance percentage rolls
            up across your real cadence, reminders escalate when a dose slips,
            and route of administration is captured per medication.
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
          <p>
            A longevity panel rounds out the catalogue — ApoB, Lp(a), hs-CRP,
            HbA1c, fasting glucose and insulin, eGFR, GGT, ferritin and the
            omega-3 index — each with its reference range. Biomarker detail
            pages match the metric pages: a description, a summary, the chart,
            the trend, and a one-tap question to the Coach.
          </p>
        </FeatureSection>

        <FeatureSection
          id="wellbeing"
          label="Mental wellbeing"
          color="purple"
          title="Screening, never a diagnosis"
        >
          <p>
            Opt into PHQ-9 and GAD-7 self-assessments that sit alongside your
            mood log. They are screening questionnaires for self-awareness, not
            a diagnosis, and the module is off until you switch it on.
          </p>
          <p>
            Item answers are encrypted at rest. A non-zero self-harm response
            surfaces calm, locale-aware crisis-support contacts rather than a
            silent score. Your answers stay out of the AI Coach, the assistant
            connector and exports by default — only the scores export, and only
            once you enable the module.
          </p>
        </FeatureSection>

        <FeatureSection
          id="history"
          label="Medical history"
          color="green"
          title="Allergies and family history, structured"
        >
          <p>
            Record allergies and family history as structured entries gathered
            under a single Medical history section, encrypted at rest, and
            included in the health-record export. It is your record to keep —
            HealthLog stores what you enter and never interprets it into a
            diagnosis.
          </p>
        </FeatureSection>

        <FeatureSection
          id="documents"
          label="Document vault"
          color="cyan"
          title="Every letter and scan, in one encrypted place"
        >
          <p>
            Keep every doctor&apos;s letter, lab report, discharge summary and
            scan in one place, encrypted at rest on your own server. Upload a
            PDF or a photo, tag it, and file it where you can actually find it
            again — instead of a folder of screenshots and a shoebox of paper.
            The module is off until you switch it on.
          </p>
          <p>
            The moment a document lands, it is read and made searchable. A local
            reader stays entirely on your machine, so the file never leaves your
            server. When you want a richer read — one that handles handwriting
            and photographed scans — you can let your configured AI provider do
            it, but only for the documents you consent to, one at a time.
          </p>
          <p>
            Search the words inside your documents, not just their titles.
            Matching runs over an encrypted blind index, so HealthLog can
            surface every letter that mentions a marker without ever storing
            anything readable — the index holds tokens, never your text.
          </p>
          <p>
            Need to hand a document to a clinician? Generate a time-boxed,
            revocable share link and let them scan the QR code straight from
            your phone at the desk. It expires on your schedule and can be
            pulled back at any moment, and photos have their camera metadata —
            location included — stripped before a shared copy leaves your
            server.
          </p>
          <p>
            You can also ask a single document a question in plain language and
            get a grounded, cited answer drawn only from that page. HealthLog
            treats the document as untrusted input: the conversation is fenced
            off from the rest of your record and given no tools, so a
            booby-trapped letter cannot turn the reply against you — and, as
            everywhere in HealthLog, it explains rather than diagnoses. The{" "}
            <Link
              href="/security#documents"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              security model is spelled out on the security page
            </Link>
            .
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
            Schedule recurring preventive-care and measurement reminders —
            annual blood work, a week of twice-daily blood pressure — on a
            rolling cadence or a calendar rule. They auto-resolve once the
            matching reading lands, so the list stays honest without manual
            cleanup.
          </p>
        </FeatureSection>

        <FeatureSection
          id="environment"
          label="Environmental context"
          color="orange"
          title="What the weather was doing"
        >
          <p>
            An optional module records the daily weather, daylight and
            temperature for your location and correlates them against your mood,
            sleep and vitals — useful for spotting the seasonal patterns a
            number in isolation hides.
          </p>
          <p>
            It is off by default. Set a home location, add dated location
            periods for travel, and backfill the history once it is on.
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
            Its proactive check-in is warmer and in your language: it greets you
            by name, keeps to one calm thought, never quotes your own words
            back, and never arrives two days running. One setting turns the
            daily suggestions off; another lets the Coach compose the check-in
            itself.
          </p>
          <p>
            The Coach also talks about your documents. Open a stored letter,
            report or scan and ask it questions in its own document view, with
            its own separate history — the conversation stays grounded in that
            document, which is treated as untrusted input rather than
            instructions.
          </p>
          <p>
            Pick the provider that fits your privacy and budget: your ChatGPT
            subscription, an OpenAI key, an Anthropic (Claude) key, or a fully
            local OpenAI-compatible model running on Ollama, LM Studio or vLLM
            that never leaves your network.
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
          id="assistants"
          label="AI assistants & MCP"
          color="cyan"
          title="Connect your record to an assistant"
        >
          <p>
            HealthLog can expose your own record to MCP-compatible assistants —
            Claude, ChatGPT and others — over a standard, OAuth-secured Model
            Context Protocol server, remote over <code>/mcp</code> or as a local
            stdio command. A connected assistant can read your metric series,
            glucose, sleep, workouts, medication compliance and schedule, labs,
            correlations, baselines, recovery, illness, cycle and the
            preventive-care due-list — every value carrying its unit and
            reference range, with an honest &quot;no data&quot; instead of a
            fabricated zero.
          </p>
          <p>
            Writing is opt-in and confirmed: with a write-scoped token you mint
            yourself, an assistant can log a measurement, a blood-pressure pair
            or a mood entry — previewed first, then confirmed, append-only,
            idempotent and audited. Installable prompt &quot;skills&quot; cover
            a doctor-visit summary, a weekly review, a medication check, and
            recovery, glucose, sleep and lab-trend briefs.
          </p>
          <p>
            The whole surface is off by default, behind a module switch, and a
            connector token is bound to the MCP surface alone — it can never
            write or delete over the REST API and can never reach the admin
            surface.
          </p>
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
            When several sources log the same day, source-priority dedup
            resolves them to one canonical reading instead of triple-counting
            the same step or the same weigh-in.
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
            (VAPID), Telegram or ntfy, so you can route HealthLog to whatever
            you already check.
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

        <FeatureSection
          id="scope"
          label="What HealthLog is — and isn't"
          color="green"
          title="A tool you own, not a verdict"
        >
          <p>
            HealthLog is a personal health-tracking tool, not a medical device,
            and it does not diagnose. The screening questionnaires are for
            self-awareness, and the AI Coach summarises and explains your own
            data rather than giving medical advice. For any medical decision,
            talk to a qualified clinician.
          </p>
          <p>
            And it stays yours. Everything lives on infrastructure you control,
            with sensitive fields encrypted at rest and no telemetry phoning
            home. Nothing leaves your server unless you turn on an integration,
            an AI provider, the assistant connector or a notification channel —
            each one off until you choose it.
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

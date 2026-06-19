import Link from "next/link";
import Image from "next/image";

import { EcgMonitor } from "@/components/EcgMonitor";
import { ScrollIndicator, ScrollRevealObserver } from "@/components/HeroClient";
import { DemoCredentials } from "@/components/DemoCredentials";
import { TerminalBlock } from "@/components/TerminalBlock";
import { AppShowcase } from "@/components/AppShowcase";

/* ── SVG Icons ──────────────────────────────────── */

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} aria-label="HealthLog Logo">
      <defs>
        <clipPath id="heart-clip">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </clipPath>
      </defs>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#bd93f9" fillOpacity="0.2" stroke="#bd93f9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="3,12.5 8,12.5 9.5,9 11,16 12.5,7 14,12.5 15.5,12.5 21,12.5" fill="none" stroke="#bd93f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#heart-clip)" />
    </svg>
  );
}

function HeartMetricIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MoodIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="23" x2="14" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M23 4v6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 20v-6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`w-20 h-20 ${className}`} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#50fa7b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(80, 250, 123, 0.06)" />
      <polyline points="9,12 11,14 15,10" stroke="#50fa7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true">
      <path d="M3 8.5L6.5 12L13 4" stroke="#50fa7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" aria-hidden="true">
      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.05 12.04c-.03-2.78 2.27-4.11 2.37-4.18-1.29-1.89-3.3-2.15-4.02-2.18-1.71-.17-3.34 1.01-4.21 1.01-.86 0-2.2-.99-3.62-.96-1.86.03-3.58 1.08-4.54 2.75-1.94 3.36-.5 8.34 1.39 11.07.92 1.33 2.02 2.83 3.46 2.78 1.39-.06 1.91-.9 3.59-.9 1.68 0 2.15.9 3.62.87 1.49-.03 2.44-1.36 3.36-2.7 1.06-1.55 1.5-3.05 1.52-3.13-.03-.01-2.92-1.12-2.95-4.44zM14.28 4.03c.76-.93 1.27-2.21 1.13-3.49-1.1.05-2.42.73-3.21 1.65-.71.81-1.32 2.12-1.16 3.37 1.22.1 2.48-.62 3.24-1.53z" />
    </svg>
  );
}

function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" />
    </svg>
  );
}

/* ── Feature Data ───────────────────────────────── */

const primaryFeatures = [
  {
    icon: <HeartMetricIcon />,
    title: "All vitals at a glance",
    description: "Track weight, blood pressure, heart rate, body fat, body composition (total body water + bone mass), blood glucose, pulse oximetry (SpO₂), sleep, and steps. Interactive charts reveal trends instantly — with personalized target ranges. A persistent rollup tier keeps long-range reads sub-second even on years of history.",
    color: "purple",
  },
  {
    icon: <PillIcon />,
    title: "Never miss a dose again",
    description: "Define intake windows, get reminded via Telegram or Push, and monitor your compliance. Automatic escalation when doses are missed.",
    color: "cyan",
  },
  {
    icon: <BrainIcon />,
    title: "AI Coach grounded in your data",
    description: "A conversational Coach plus daily briefing, weekly report, and a Health Score tile — every reply cites the metric, window and reading count it drew on, with mini-charts pinned underneath. Multi-provider chain: ChatGPT subscription, BYOK OpenAI, BYOK Anthropic, local Ollama. Local endpoints keep all data on your network.",
    color: "orange",
  },
];

const secondaryFeatures = [
  { icon: <SyncIcon />, title: "Apple Health import", description: "Drop your iOS export.zip on the upload page — a streaming parser folds multi-GB archives into the same timeline as everything else.", color: "purple" },
  { icon: <HeartMetricIcon />, title: "Custom thresholds", description: "Override the guideline defaults with the targets your clinician set. Audit-logged, marked clearly on the Doctor Report PDF.", color: "purple" },
  { icon: <FileIcon />, title: "Customizable dashboard", description: "Show, hide, and reorder every widget. Reset to defaults anytime — your data is never touched.", color: "green" },
  { icon: <MoodIcon />, title: "Built-in feedback", description: "Send bug reports and feature requests from inside the app. Works out of the box; GitHub escalation is opt-in for admins.", color: "pink" },
  { icon: <FileIcon />, title: "Doctor report PDF", description: "Professional medical reports in your locale — numbers, dates, and units formatted right. Includes glucose trends.", color: "green" },
  { icon: <SyncIcon />, title: "Withings sync", description: "Automatic sync with Withings scales, BP monitors, and activity trackers.", color: "cyan" },
  { icon: <MoodIcon />, title: "Mood tracking", description: "5-point scale with tags, correlation analysis, and journal integration.", color: "pink" },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  purple: { bg: "rgba(189,147,249,0.08)", text: "#bd93f9" },
  cyan: { bg: "rgba(139,233,253,0.08)", text: "#8be9fd" },
  pink: { bg: "rgba(255,121,198,0.08)", text: "#ff79c6" },
  green: { bg: "rgba(80,250,123,0.08)", text: "#50fa7b" },
  orange: { bg: "rgba(255,184,108,0.08)", text: "#ffb86c" },
};

const techItems = [
  "Next.js 16", "TypeScript Strict", "PostgreSQL 16", "Prisma 7",
  "Progressive Web App", "AES-256-GCM", "WebAuthn / Passkeys",
  "Telegram Bot API", "OpenAI / Anthropic / local", "Withings OAuth2",
  "Apple HealthKit", "SwiftUI iOS",
  "pg-boss Queue", "Docker", "Recharts", "Zod v4",
];

const privacyChecks = [
  "No cloud dependency — runs entirely on your own server",
  "No telemetry, no analytics, no tracking scripts",
  "AES-256-GCM encryption for all sensitive data at rest",
  "API tokens stored as keyed HMAC-SHA-256 hashes, never in plaintext",
  "Passkey authentication — phishing-resistant, no password leaks",
  "Password fallback with Argon2id hashing and strength validation",
  "Withings OAuth tokens encrypted in the database",
  "Source available — every single line of code is auditable",
];

const terminalCommands = `git clone https://github.com/MBombeck/HealthLog.git
cd HealthLog
cp .env.example .env
echo "POSTGRES_PASSWORD=$(openssl rand -base64 24)" >> .env
echo "ENCRYPTION_KEY=$(openssl rand -hex 32)"       >> .env
echo "API_TOKEN_HMAC_KEY=$(openssl rand -hex 32)"   >> .env
docker compose up -d`;

/* ── Comparison Row ─────────────────────────────── */

function ComparisonRow({ feature, values, highlights }: {
  feature: string;
  values: string[];
  highlights: (boolean | null)[];
}) {
  return (
    <tr>
      <td>{feature}</td>
      {values.map((value, i) => {
        const highlight = highlights[i];
        let colorClass = "text-text-secondary";
        if (highlight === true) colorClass = "text-green font-semibold";
        else if (highlight === false) colorClass = "text-text-tertiary";
        return (
          <td key={`${feature}-${i}`} className={colorClass}>
            {value}
          </td>
        );
      })}
    </tr>
  );
}

/* ── Main Page (Server Component) ────────────────── */

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* Client-side scroll reveal observer */}
      <ScrollRevealObserver />

      {/* Skip navigation */}
      <a
        href="#main-content"
        className="skip-to-content"
      >
        Skip to content
      </a>

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* ─── HERO ─────────────────────────────────── */}
      <header id="main-content" className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden" role="banner">
        <div className="aurora" />
        <div className="aurora-pink" />
        <div className="grid-pattern" />
        <EcgMonitor />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <LogoIcon className="w-16 h-16 md:w-20 md:h-20" />
          </div>

          <h1 className="font-display font-extrabold text-[2.25rem] sm:text-6xl md:text-[5.5rem] leading-[1.05] tracking-[-0.03em] mb-8">
            <span className="text-text-primary">Your Health.</span>
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #bd93f9 0%, #8be9fd 50%, #ff79c6 100%)" }}>
              Your Server.
            </span>
          </h1>

          <p className="text-text-secondary text-lg sm:text-xl md:text-[1.35rem] max-w-2xl mx-auto mb-14 leading-[1.7] font-light tracking-[-0.01em]">
            The self-hosted health tracking app that gives you full control.
            Weight, blood pressure, glucose, medications, mood — encrypted on
            your own server. Syncs live with Apple Health on iOS, or with
            Withings on any device. Source available.
          </p>

          <nav className="flex flex-col sm:flex-row items-center justify-center gap-4" aria-label="Primary actions">
            <a
              href="https://github.com/MBombeck/HealthLog"
              className="cta-button group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-5 h-5 relative z-10" />
              <span>View on GitHub</span>
              <ArrowIcon />
            </a>
            <a
              href="https://docs.healthlog.dev"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookIcon className="w-5 h-5" />
              <span>Read the Docs</span>
            </a>
          </nav>

        </div>

        <ScrollIndicator />
      </header>

      {/* ─── APP MOCKUP ───────────────────────────── */}
      <main>
      <section id="interface" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="interface-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">Interface</span>
            </div>
            <h2 id="interface-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Your health dashboard
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              A dark, eye-friendly interface in the Dracula color scheme.
              Mobile-first, with instant access to all your metrics.
            </p>
          </div>
          <div className="reveal">
            <AppShowcase />
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────── */}
      <section id="how-it-works" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="how-it-works-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">How it works</span>
            </div>
            <h2 id="how-it-works-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              One pipeline. Every reading.
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Sources reach a small set of ingest endpoints, a source-priority resolver picks one canonical row per
              day, Postgres holds both the raw measurement and a pre-aggregated rollup, and every surface — dashboard tiles,
              Insights cards, AI Coach answers, the doctor PDF — reads from the same path so the numbers always match.
            </p>
          </div>
          <div className="reveal glass-card p-4 sm:p-8 bg-[rgba(15,16,24,0.4)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/01-data-flow.svg"
              alt="HealthLog data flow: sources to ingest to Postgres + rollups to reads to surfaces"
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
          </div>
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <a href="https://docs.healthlog.dev/integrations/apple-health/" target="_blank" rel="noopener noreferrer" className="glass-card p-5 hover:border-[rgba(189,147,249,0.25)] transition-colors duration-300">
              <div className="text-xs font-mono text-purple mb-1.5 uppercase tracking-wider">Apple Health</div>
              <div className="text-sm text-text-secondary leading-relaxed">Streaming export.zip importer, idempotent on the SHA-256 of the archive bytes.</div>
            </a>
            <a href="https://docs.healthlog.dev/integrations/withings/" target="_blank" rel="noopener noreferrer" className="glass-card p-5 hover:border-[rgba(139,233,253,0.25)] transition-colors duration-300">
              <div className="text-xs font-mono text-cyan mb-1.5 uppercase tracking-wider">Withings</div>
              <div className="text-sm text-text-secondary leading-relaxed">OAuth2 + webhook for near-real-time push from scales, BP monitors and ScanWatch.</div>
            </a>
            <a href="https://docs.healthlog.dev/concepts/source-priority/" target="_blank" rel="noopener noreferrer" className="glass-card p-5 hover:border-[rgba(255,184,108,0.25)] transition-colors duration-300">
              <div className="text-xs font-mono text-orange mb-1.5 uppercase tracking-wider">Source priority</div>
              <div className="text-sm text-text-secondary leading-relaxed">Three sensors logging the same day resolve to one canonical row — no triple-counting.</div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── AI COACH ─────────────────────────────── */}
      <section id="ai-coach" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="ai-coach-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-orange border-orange/15 bg-orange/[0.03]">AI Coach</span>
            </div>
            <h2 id="ai-coach-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Every claim cites its data.
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              The Coach is a partner sitting next to you, not a chatbot guessing. Each reply walks the same
              snapshot → prompt → multi-provider chain → schema-validated parse, then renders prose first with
              the evidence collapsed underneath. Pick the provider that fits your privacy and budget.
            </p>
          </div>
          <div className="reveal glass-card p-4 sm:p-8 bg-[rgba(15,16,24,0.4)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/02-coach-pipeline.svg"
              alt="Coach prompt pipeline: question to snapshot to prompt to provider chain to cited reply"
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
          </div>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="glass-card p-5">
              <div className="text-xs font-mono text-cyan mb-1.5 uppercase tracking-wider">ChatGPT</div>
              <div className="text-sm text-text-secondary leading-relaxed">Reuse your ChatGPT Plus / Pro subscription via device-code OAuth.</div>
            </div>
            <div className="glass-card p-5">
              <div className="text-xs font-mono text-purple mb-1.5 uppercase tracking-wider">OpenAI BYOK</div>
              <div className="text-sm text-text-secondary leading-relaxed">Paste your own API key. gpt-4o-mini default, override per user.</div>
            </div>
            <div className="glass-card p-5">
              <div className="text-xs font-mono text-pink mb-1.5 uppercase tracking-wider">Anthropic</div>
              <div className="text-sm text-text-secondary leading-relaxed">Workspace-scoped key. Claude 3.5 Sonnet default, AES-GCM at rest.</div>
            </div>
            <div className="glass-card p-5">
              <div className="text-xs font-mono text-green mb-1.5 uppercase tracking-wider">Local</div>
              <div className="text-sm text-text-secondary leading-relaxed">Ollama, LM Studio or vLLM on your network. Nothing leaves the host.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── iOS / APPLE HEALTH ───────────────────── */}
      <section id="ios" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="ios-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">iOS &amp; Apple Health</span>
            </div>
            <h2 id="ios-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Your iPhone writes<br />straight to your server.
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A native SwiftUI client, in public beta on TestFlight, keeps Apple
              Health in two-way sync with your own instance — no cloud middleman.
              Steps, weight, blood pressure, glucose, sleep and body composition
              flow both ways and land on the same timeline as every other reading.
            </p>
          </div>

          <div className="reveal grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto mb-12">
            {[
              { src: "/screenshots/ios/ios-dashboard.webp", alt: "HealthLog iOS app home screen with the Apple Health connection card, Health Score ring, today's medication compliance, and weight and blood-pressure tiles" },
              { src: "/screenshots/ios/ios-insights.webp", alt: "HealthLog iOS Insights screen with the Coach prompt, Health Score, BMI, and a blood-pressure target band" },
              { src: "/screenshots/ios/ios-medication-detail.webp", alt: "HealthLog iOS medication detail screen showing 30-day compliance, a 14-day adherence strip, last dose, and intake history" },
            ].map((shot, i) => (
              <div
                key={shot.src}
                className={`reveal reveal-delay-${i + 1} phone-frame relative aspect-[620/1348] overflow-hidden`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 240px"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="glass-card p-5">
              <div className="text-xs font-mono text-cyan mb-1.5 uppercase tracking-wider">Live HealthKit sync</div>
              <div className="text-sm text-text-secondary leading-relaxed">Two-way Apple Health sync — steps, weight, blood pressure, glucose, sleep and body composition, written directly to your instance.</div>
            </div>
            <div className="glass-card p-5">
              <div className="text-xs font-mono text-purple mb-1.5 uppercase tracking-wider">Sign in with a passkey</div>
              <div className="text-sm text-text-secondary leading-relaxed">Face ID / Touch ID passkey sign-in, with per-device refresh-token rotation against your own server.</div>
            </div>
            <div className="glass-card p-5">
              <div className="text-xs font-mono text-orange mb-1.5 uppercase tracking-wider">Reminders &amp; reports</div>
              <div className="text-sm text-text-secondary leading-relaxed">Local medication reminders with take / skip actions, the AI Coach, and the doctor-report export — all on the phone.</div>
            </div>
          </div>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://testflight.apple.com/join/bucuTBpa"
              className="cta-button group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppleIcon className="w-5 h-5 relative z-10" />
              <span>Join the TestFlight beta</span>
              <ArrowIcon />
            </a>
            <a
              href="https://docs.healthlog.dev/integrations/apple-health/"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookIcon className="w-5 h-5" />
              <span>Apple Health docs</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────── */}
      <section id="features" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-purple border-purple/15 bg-purple/[0.03]">Features</span>
            </div>
            <h2 id="features-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Everything you need.<br />
              <span className="text-text-secondary">Nothing you don&apos;t.</span>
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From daily measurements to AI-powered health reports —
              HealthLog covers your entire health workflow.
            </p>
          </div>

          {/* Primary features -- large cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            {primaryFeatures.map((feature, i) => {
              const colors = colorMap[feature.color];
              return (
                <div key={feature.title} className={`reveal reveal-delay-${i + 1} glass-card feature-card-accent p-6 group`} style={{ "--accent-color": colors.text } as React.CSSProperties}>
                  <div className="flex items-start gap-4">
                    <div className="feature-icon flex-shrink-0" style={{ backgroundColor: colors.bg, color: colors.text }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-text-primary mb-1.5 tracking-[-0.01em]">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-xs leading-[1.7]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Secondary features -- compact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {secondaryFeatures.map((feature, i) => {
              const colors = colorMap[feature.color];
              return (
                <div key={feature.title} className={`reveal reveal-delay-${i + 1} glass-card feature-card-accent p-6 group`} style={{ "--accent-color": colors.text } as React.CSSProperties}>
                  <div className="flex items-start gap-4">
                    <div className="feature-icon flex-shrink-0" style={{ backgroundColor: colors.bg, color: colors.text }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-text-primary mb-1.5 tracking-[-0.01em]">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-xs leading-[1.7]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extra capability badges */}
          <div className="reveal mt-12 flex flex-wrap justify-center gap-3">
            {[
              "Clean-line charts with per-chart overlays",
              "vs. last month / last year overlays",
              "Persistent rollup tier for sub-second reads",
              "Offline-capable PWA",
              "Telegram / ntfy / Web Push",
              "59 Achievements (plus a few hidden ones)",
              "CSV/JSON Export",
              "Locale-aware (EN / DE)",
              "Glucose mg/dL ↔ mmol/L",
              "Native iOS app (TestFlight beta)",
              "S3 off-host backups",
              "Docker-ready",
            ].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full text-xs font-mono text-text-tertiary border border-[rgba(98,114,164,0.1)] bg-[rgba(15,16,24,0.4)] hover:border-[rgba(189,147,249,0.15)] hover:text-text-secondary transition-all duration-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIVACY ──────────────────────────────── */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow privacy-section" aria-labelledby="privacy-heading">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="reveal flex justify-center mb-8">
              <ShieldIcon className="shield-glow" />
            </div>
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-green border-green/15 bg-green/[0.03]">Privacy & Security</span>
            </div>
            <h2 id="privacy-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Your data belongs to you.
              <br />
              <span className="text-green/80">Period.</span>
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Unlike Apple Health or Google Fit, HealthLog keeps you in full control.
              No data sharing, no subscription, no vendor lock-in.
            </p>
          </div>

          <div className="reveal glass-card p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4">
              {privacyChecks.map((check) => (
                <div key={check} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-text-secondary text-sm leading-[1.65]">{check}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal mt-8 glass-card p-4 sm:p-6 bg-[rgba(15,16,24,0.4)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/05-security-model.svg"
              alt="Security model: three concentric perimeters — auth, session, encrypted core — with rate limiter, audit log, HMAC tokens, CSP/HSTS and SSRF guard as side rails"
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
            <p className="text-text-tertiary text-xs mt-3 text-center">
              Three concentric perimeters protect the encrypted core. See the{" "}
              <a href="https://docs.healthlog.dev/security/overview/" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">security architecture page</a>{" "}
              for the full walkthrough.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ───────────────────────────── */}
      <section className="relative py-20 overflow-hidden" aria-label="Technology stack">
        <div className="reveal text-center mb-10">
          <p className="text-text-tertiary text-xs font-mono tracking-[0.2em] uppercase">Built with</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="tech-scroll" aria-hidden="true">
              {[...techItems, ...techItems].map((item, i) => (
                <span key={`${item}-${i}`} className="flex-shrink-0 px-5 py-2.5 rounded-full border border-[rgba(98,114,164,0.08)] bg-[rgba(15,16,24,0.5)] text-text-secondary text-sm font-mono whitespace-nowrap hover:border-[rgba(189,147,249,0.2)] hover:text-text-primary transition-all duration-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Screenreader-accessible list of tech stack items */}
          <ul className="sr-only">
            {techItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── COMPARISON ──────────────────────────── */}
      <section id="comparison" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow hidden md:block" aria-labelledby="comparison-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">Comparison</span>
            </div>
            <h2 id="comparison-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              HealthLog vs. The Rest
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              See how a self-hosted, source-available approach compares to the big players.
            </p>
          </div>

          {/* Desktop: Table */}
          <div className="reveal comparison-scroll">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="comparison-table" role="table">
                  <thead>
                    <tr>
                      <th scope="col">Feature</th>
                      <th scope="col">HealthLog</th>
                      <th scope="col">Apple Health</th>
                      <th scope="col">Google Fit</th>
                      <th scope="col">MyFitnessPal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ComparisonRow feature="Self-hosted" values={["Yes", "No", "No", "No"]} highlights={[true, false, false, false]} />
                    <ComparisonRow feature="Data encryption" values={["AES-256-GCM", "At rest", "At rest", "At rest"]} highlights={[true, false, false, false]} />
                    <ComparisonRow feature="Source available" values={["PolyForm NC 1.0.0", "No", "No", "No"]} highlights={[true, false, false, false]} />
                    <ComparisonRow feature="Native iOS app" values={["Public beta", "Native", "Native", "Native"]} highlights={[true, null, null, null]} />
                    <ComparisonRow feature="Apple Health sync" values={["Two-way, your server", "Own silo", "Import only", "Two-way"]} highlights={[true, false, false, null]} />
                    <ComparisonRow feature="Withings device sync" values={["OAuth2 + webhook", "Via Health", "Via Fit", "Limited"]} highlights={[true, null, null, false]} />
                    <ComparisonRow feature="Doctor-report PDF" values={["Built in", "No", "No", "No"]} highlights={[true, false, false, false]} />
                    <ComparisonRow feature="Offline capable" values={["Full PWA", "Native", "Native", "Limited"]} highlights={[true, null, null, false]} />
                    <ComparisonRow feature="Medication tracking" values={["Full compliance", "Basic", "No", "No"]} highlights={[true, null, false, false]} />
                    <ComparisonRow feature="AI insights" values={["BYOK or local", "Limited", "No", "Premium only"]} highlights={[true, null, false, false]} />
                    <ComparisonRow feature="Data export" values={["CSV + JSON", "XML (HealthKit)", "Google Takeout", "Premium only"]} highlights={[true, null, null, false]} />
                    <ComparisonRow feature="Cost" values={["Free forever", "Free (Apple only)", "Free", "Freemium"]} highlights={[true, null, null, false]} />
                    <ComparisonRow feature="Ad-free" values={["Always", "Yes", "Yes", "Premium only"]} highlights={[true, null, null, false]} />
                    <ComparisonRow feature="Custom server" values={["Your infrastructure", "Apple servers", "Google servers", "Under Armour servers"]} highlights={[true, false, false, false]} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile: Card layout */}
          <div className="reveal comparison-cards">
            {[
              { name: "Apple Health", items: [
                { feature: "Self-hosted", hl: "Yes", other: "No" },
                { feature: "Data encryption", hl: "AES-256-GCM", other: "At rest" },
                { feature: "Source available", hl: "PolyForm NC 1.0.0", other: "No" },
                { feature: "Medication tracking", hl: "Full compliance", other: "Basic" },
                { feature: "AI insights", hl: "BYOK or local", other: "Limited" },
                { feature: "Cost", hl: "Free forever", other: "Free (Apple only)" },
              ]},
              { name: "Google Fit", items: [
                { feature: "Self-hosted", hl: "Yes", other: "No" },
                { feature: "Data encryption", hl: "AES-256-GCM", other: "At rest" },
                { feature: "Source available", hl: "PolyForm NC 1.0.0", other: "No" },
                { feature: "Medication tracking", hl: "Full compliance", other: "No" },
                { feature: "AI insights", hl: "BYOK or local", other: "No" },
                { feature: "Data export", hl: "CSV + JSON", other: "Google Takeout" },
              ]},
              { name: "MyFitnessPal", items: [
                { feature: "Self-hosted", hl: "Yes", other: "No" },
                { feature: "Source available", hl: "PolyForm NC 1.0.0", other: "No" },
                { feature: "Offline capable", hl: "Full PWA", other: "Limited" },
                { feature: "Ad-free", hl: "Always", other: "Premium only" },
                { feature: "Data export", hl: "CSV + JSON", other: "Premium only" },
                { feature: "Cost", hl: "Free forever", other: "Freemium" },
              ]},
            ].map((competitor) => (
              <div key={competitor.name} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(98,114,164,0.12)]">
                  <span className="font-display font-bold text-sm text-purple">HealthLog</span>
                  <span className="text-text-tertiary text-xs font-mono">vs</span>
                  <span className="font-display font-bold text-sm text-text-secondary">{competitor.name}</span>
                </div>
                <div className="space-y-3">
                  {competitor.items.map((item) => (
                    <div key={item.feature} className="grid grid-cols-[1fr_auto_auto] gap-2 sm:gap-3 items-center">
                      <span className="text-[11px] sm:text-xs text-text-tertiary font-mono">{item.feature}</span>
                      <span className="text-[11px] sm:text-xs text-green font-mono text-right">{item.hl}</span>
                      <span className="text-[11px] sm:text-xs text-text-tertiary font-mono text-right">{item.other}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVE DEMO ─────────────────────────────── */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="demo-heading">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal flex justify-center mb-6">
            <span className="section-label text-orange border-orange/15 bg-orange/[0.03]">Live Demo</span>
          </div>
          <h2 id="demo-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
            See it in action
          </h2>
          <p className="reveal text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-12">
            Explore the full app with pre-populated data.
            No signup, no installation — just click and explore.
          </p>

          <DemoCredentials />

          <p className="reveal text-text-tertiary text-xs font-mono">
            Resets automatically — feel free to add, edit, and delete anything.
          </p>
        </div>
      </section>

      {/* ─── CTA + QUICK START ────────────────────── */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="quickstart-heading">
        <div className="reveal max-w-2xl mx-auto text-center">
          <div className="reveal flex justify-center mb-6">
            <span className="section-label text-pink border-pink/15 bg-pink/[0.03]">Quick Start</span>
          </div>
          <h2 id="quickstart-heading" className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
            Up and running<br />in minutes
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-12">
            HealthLog is source available and free for noncommercial use.
            Clone the repo, set your config, start with Docker.
          </p>

          <TerminalBlock commands={terminalCommands} />

          <div className="reveal mt-10 glass-card p-4 sm:p-6 bg-[rgba(15,16,24,0.4)] text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/03-self-hosting-topology.svg"
              alt="Self-hosting topology: internet to reverse proxy to Next.js app and pg-boss worker to PostgreSQL, with GHCR image pull and optional Coolify auto-deploy and S3 backup"
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
            <p className="text-text-tertiary text-xs mt-3 text-center">
              A single container does both web and worker by default. Split via{" "}
              <code className="text-cyan">HEALTHLOG_PROCESS_TYPE</code> for horizontal scale. See the{" "}
              <a href="https://docs.healthlog.dev/self-hosting/docker/" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">self-hosting docs</a>{" "}
              for the deployment guides.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://github.com/MBombeck/HealthLog"
              className="cta-button group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-5 h-5 relative z-10" />
              <span>View on GitHub</span>
              <ArrowIcon />
            </a>
            <a
              href="https://docs.healthlog.dev"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookIcon className="w-5 h-5" />
              <span>Read the Docs</span>
            </a>
          </div>
        </div>
      </section>

      </main>

      {/* ─── FOOTER ───────────────────────────────── */}
      <footer className="relative py-14 px-4 sm:px-6 border-t border-[rgba(98,114,164,0.06)]" role="contentinfo">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <LogoIcon className="w-5 h-5" />
            <span className="font-display font-semibold text-sm text-text-tertiary tracking-tight">HealthLog</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://docs.healthlog.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              <BookIcon className="w-4 h-4" />
              Docs
            </a>
            <a href="https://demo.healthlog.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              <PlayIcon className="w-4 h-4" />
              Demo
            </a>
            <a href="https://github.com/MBombeck/HealthLog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            <Link href="/learn" className="text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              Learn
            </Link>
            <Link href="/privacy" className="text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              Privacy
            </Link>
            <Link href="/support" className="text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              Support
            </Link>
            <span className="text-text-tertiary/60 text-xs font-mono">PolyForm Noncommercial 1.0.0</span>
          </div>
        </div>
        <p className="max-w-5xl mx-auto mt-6 text-center sm:text-left text-text-tertiary/60 text-xs leading-relaxed">
          Licensed under the PolyForm Noncommercial License 1.0.0 — free to use, self-host, and
          modify for noncommercial purposes. Releases up to and including v1.15.18 were published
          under AGPL-3.0 and remain available under that license.
        </p>
      </footer>
    </div>
  );
}

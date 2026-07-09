import Link from "next/link";
import Image from "next/image";

import { EcgMonitor } from "@/components/EcgMonitor";
import { ScrollIndicator, ScrollRevealObserver } from "@/components/HeroClient";
import { DemoCredentials } from "@/components/DemoCredentials";
import { DemoPopupLink } from "@/components/DemoPopupLink";
import { TerminalBlock } from "@/components/TerminalBlock";
import { AppShowcase } from "@/components/AppShowcase";
import { CATEGORY_COLOR, LEARN_ARTICLES } from "@/content/learn";
import { getMeta } from "@/content/learn/meta";
import { LearnImage } from "@/components/learn/learn-image";

/* ── SVG Icons ──────────────────────────────────── */

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-label="HealthLog Logo"
    >
      <defs>
        <clipPath id="heart-clip">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </clipPath>
      </defs>
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="#bd93f9"
        fillOpacity="0.2"
        stroke="#bd93f9"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="3,12.5 8,12.5 9.5,9 11,16 12.5,7 14,12.5 15.5,12.5 21,12.5"
        fill="none"
        stroke="#bd93f9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#heart-clip)"
      />
    </svg>
  );
}

function HeartMetricIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MoodIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 14s1.5 2 4 2 4-2 4-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="9"
        y1="9"
        x2="9.01"
        y2="9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="15"
        y1="9"
        x2="15.01"
        y2="9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="9"
        y1="21"
        x2="15"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="23"
        x2="14"
        y2="23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FileIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="14,2 14,8 20,8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="8"
        y1="13"
        x2="16"
        y2="13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="17"
        x2="13"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M23 4v6h-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 20v-6h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M9 2h6M10 2v6.5L4.8 18a2 2 0 0 0 1.8 3h10.8a2 2 0 0 0 1.8-3L14 8.5V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="7"
        y1="15"
        x2="17"
        y2="15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="9"
        x2="21"
        y2="9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="2"
        x2="8"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldFooterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LifeBuoyIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="4.93"
        y1="4.93"
        x2="9.17"
        y2="9.17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="14.83"
        y1="14.83"
        x2="19.07"
        y2="19.07"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="14.83"
        y1="9.17"
        x2="19.07"
        y2="4.93"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="4.93"
        y1="19.07"
        x2="9.17"
        y2="14.83"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`w-20 h-20 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="#50fa7b"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(80, 250, 123, 0.06)"
      />
      <polyline
        points="9,12 11,14 15,10"
        stroke="#50fa7b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="w-4 h-4 flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="#50fa7b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3 8h10m0 0L9 4m4 4L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="9"
        y1="7"
        x2="16"
        y2="7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="11"
        x2="14"
        y2="11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.05 12.04c-.03-2.78 2.27-4.11 2.37-4.18-1.29-1.89-3.3-2.15-4.02-2.18-1.71-.17-3.34 1.01-4.21 1.01-.86 0-2.2-.99-3.62-.96-1.86.03-3.58 1.08-4.54 2.75-1.94 3.36-.5 8.34 1.39 11.07.92 1.33 2.02 2.83 3.46 2.78 1.39-.06 1.91-.9 3.59-.9 1.68 0 2.15.9 3.62.87 1.49-.03 2.44-1.36 3.36-2.7 1.06-1.55 1.5-3.05 1.52-3.13-.03-.01-2.92-1.12-2.95-4.44zM14.28 4.03c.76-.93 1.27-2.21 1.13-3.49-1.1.05-2.42.73-3.21 1.65-.71.81-1.32 2.12-1.16 3.37 1.22.1 2.48-.62 3.24-1.53z" />
    </svg>
  );
}

function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" />
    </svg>
  );
}

function RssIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TagIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="7"
        y1="7"
        x2="7.01"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M9 2v6M15 2v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 8h12v3a6 6 0 0 1-12 0V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="17"
        x2="12"
        y2="22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="8"
        y1="11"
        x2="16"
        y2="11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="15"
        x2="13"
        y2="15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M17.5 19a4.5 4.5 0 0 0 .5-8.97 6 6 0 0 0-11.64-1.6A4 4 0 0 0 6.5 19h11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VaultIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <rect
        x="4"
        y="10"
        width="16"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10V7a4 4 0 0 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="12"
        y1="16.5"
        x2="12"
        y2="18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="16.5"
        y1="16.5"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Feature Data ───────────────────────────────── */

const primaryFeatures = [
  {
    icon: <HeartMetricIcon />,
    title: "All vitals at a glance",
    description:
      "Weight, blood pressure, heart rate, body composition, blood glucose, SpO₂, respiratory rate, sleep, steps and mood — plus grip strength, a pain score and waist measurements. Every reading on one timeline, with personal target ranges, vs-last-month or vs-last-year overlays, and a persistent rollup tier that keeps years of history sub-second.",
    color: "purple",
  },
  {
    icon: <PillIcon />,
    title: "Never miss a dose again",
    description:
      "Fixed times, flexible intervals, cyclic on/off courses, as-needed or one-off injections — schedule any regimen and set per-dose intake windows. Supply tracking warns you before you run out, reminders escalate when a dose slips, and injectables carry site rotation and dose-titration history.",
    color: "cyan",
  },
  {
    icon: <BrainIcon />,
    title: "AI Coach grounded in your data",
    description:
      "A conversational Coach, daily briefing, weekly report and Health Score — every reply cites the exact metric, window and reading count it drew on, with mini-charts pinned underneath. Its proactive check-in is warmer now: it greets you by name, keeps to one calm thought, and never nags. Bring your own provider — your ChatGPT subscription via OpenAI OAuth, your own OpenAI or Anthropic key, or a fully local model that never leaves your network.",
    color: "orange",
  },
];

const secondaryFeatures = [
  {
    icon: <PillIcon />,
    title: "Built for injectables",
    description:
      "GLP-1 and other injections get site-rotation tracking, a dose-titration timeline, pen inventory and a side-effect logbook — not just a checkbox.",
    color: "cyan",
  },
  {
    icon: <SyncIcon />,
    title: "Apple Health import",
    description:
      "Drop your iOS export.zip on the upload page — a streaming parser folds multi-GB archives into the same timeline, idempotent on the archive's checksum.",
    color: "purple",
  },
  {
    icon: <FlaskIcon />,
    title: "Lab results & biomarkers",
    description:
      "Log blood work against a biomarker catalogue with reference ranges, group results into panels, and watch every marker trend over time. A longevity panel covers ApoB, Lp(a), hs-CRP, HbA1c, fasting glucose and insulin, eGFR, GGT, ferritin and the omega-3 index.",
    color: "green",
  },
  {
    icon: <HeartMetricIcon />,
    title: "Illness & condition journal",
    description:
      "Track acute illnesses, chronic conditions and flares with a daily symptom log. An active episode turns on Rest Mode, which softens nudges and reframes your score instead of penalising it.",
    color: "pink",
  },
  {
    icon: <MoodIcon />,
    title: "Cycle tracking",
    description:
      "Symptothermal cycle tracking with period logging, symptoms and a careful prediction model. Discreet by design, and off unless you switch it on.",
    color: "pink",
  },
  {
    icon: <CalendarIcon />,
    title: "Preventive-care reminders",
    description:
      "Schedule recurring check-ups and measurements — annual blood work, a week of twice-daily blood pressure — on a rolling cadence or a calendar rule. They resolve themselves once the reading lands.",
    color: "orange",
  },
  {
    icon: <FileIcon />,
    title: "Export everything",
    description:
      "Your data leaves the way it came in: CSV, JSON, a localized doctor-report PDF, and a FHIR R4 bundle (Patient, Observation, MedicationStatement, MedicationAdministration, Coverage) for a clinician's system.",
    color: "green",
  },
  {
    icon: <FileIcon />,
    title: "Customizable dashboard",
    description:
      "Show, hide and reorder every widget. Reset to defaults anytime — your data is never touched.",
    color: "purple",
  },
  {
    icon: <MoodIcon />,
    title: "Mood tracking",
    description:
      "A five-point scale with tags and notes, correlated against sleep, activity and the rest of your timeline.",
    color: "pink",
  },
  {
    icon: <PlugIcon />,
    title: "Connect your record to AI assistants",
    description:
      "An OAuth-secured Model Context Protocol server lets MCP-compatible assistants — Claude, ChatGPT and others — read your record and, with a write-scoped token you mint, log a measurement after you confirm. Off by default; you stay in control of the connector token.",
    color: "cyan",
  },
  {
    icon: <ClipboardIcon />,
    title: "Mental-wellbeing check-ins",
    description:
      "Optional PHQ-9 and GAD-7 self-assessments sit alongside your mood log — screening, never a diagnosis. Answers are encrypted, and a non-zero self-harm response surfaces calm, local crisis-support contacts.",
    color: "purple",
  },
  {
    icon: <FileIcon />,
    title: "Medical history",
    description:
      "Structured, encrypted allergy and family-history records, gathered in one place and included in the health-record export. Yours to keep, never interpreted for you.",
    color: "green",
  },
  {
    icon: <CloudIcon />,
    title: "Environmental context",
    description:
      "An optional module pulls daily weather, daylight and temperature for your location and correlates them against your mood, sleep and vitals. Off by default, with a home location and backfill.",
    color: "orange",
  },
  {
    icon: <VaultIcon />,
    title: "Encrypted document vault",
    description:
      "Keep every doctor's letter, report and scan in one place, encrypted at rest. Each upload is read and made searchable automatically — by a local reader that never leaves your server, or, with your per-document consent, by your own AI provider for a richer read of scans. Off by default.",
    color: "cyan",
  },
  {
    icon: <SearchIcon />,
    title: "Search, ask and share documents",
    description:
      "Find a word across years of letters over an encrypted blind index that stores nothing readable. Ask a single document a plain-language question and get a grounded, cited answer. Hand a clinician a time-boxed, revocable link by QR — with photo metadata stripped.",
    color: "green",
  },
];

const integrations = [
  {
    name: "Withings",
    blurb:
      "Scales, blood-pressure monitors and watches sync automatically over OAuth, with a webhook for near-real-time updates.",
    color: "cyan",
  },
  {
    name: "Apple Health",
    blurb:
      "Two-way sync through the native iOS app — readings flow both directions onto one timeline, no cloud middleman.",
    color: "purple",
  },
  {
    name: "WHOOP",
    blurb:
      "Recovery, sleep and strain pulled in over OAuth and reconciled against your other sources.",
    color: "green",
  },
  {
    name: "Oura",
    blurb:
      "Sleep, readiness and activity from the ring, landing on the same timeline as everything else.",
    color: "pink",
  },
  {
    name: "Polar",
    blurb:
      "Workouts and heart-rate data sync straight from your Polar account.",
    color: "orange",
  },
  {
    name: "Fitbit",
    blurb: "Steps, sleep and activity through the Google Health connection.",
    color: "cyan",
  },
  {
    name: "Nightscout",
    blurb:
      "Continuous glucose pulled straight from your own Nightscout instance.",
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  purple: { bg: "rgba(189,147,249,0.08)", text: "#bd93f9" },
  cyan: { bg: "rgba(139,233,253,0.08)", text: "#8be9fd" },
  pink: { bg: "rgba(255,121,198,0.08)", text: "#ff79c6" },
  green: { bg: "rgba(80,250,123,0.08)", text: "#50fa7b" },
  orange: { bg: "rgba(255,184,108,0.08)", text: "#ffb86c" },
};

const techItems = [
  "Next.js 16",
  "TypeScript Strict",
  "PostgreSQL 16",
  "Prisma 7",
  "Progressive Web App",
  "AES-256-GCM",
  "WebAuthn / Passkeys",
  "Telegram Bot API",
  "OpenAI / Anthropic / local",
  "Withings OAuth2",
  "Apple HealthKit",
  "SwiftUI iOS",
  "pg-boss Queue",
  "Docker",
  "Recharts",
  "Zod v4",
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

// Kept verbatim in sync with the FAQPage JSON-LD in src/app/layout.tsx —
// Google rewards visible + structured parity, so the answer text here must
// match the schema answers word for word.
const faqs = [
  {
    question: "Is HealthLog free?",
    answer:
      "Yes, for noncommercial use. HealthLog is source available under the PolyForm Noncommercial 1.0.0 licence. You run it on your own server with a single docker compose up — there is no subscription and no paid tier.",
  },
  {
    question: "Does HealthLog sync with Apple Health?",
    answer:
      "Yes. The native SwiftUI iOS app (public TestFlight beta) keeps Apple Health (HealthKit) in two-way sync — steps, weight, blood pressure, blood glucose, sleep, and body composition flow straight to your own server. On any platform you can also drop an Apple Health export.zip on the upload page.",
  },
  {
    question: "Where is my health data stored?",
    answer:
      "Entirely on your own infrastructure. HealthLog is self-hosted on PostgreSQL, with all sensitive fields encrypted at rest using AES-256-GCM. There is no cloud dependency, no telemetry, and no third-party analytics.",
  },
  {
    question: "Which devices and services does HealthLog integrate with?",
    answer:
      "Withings devices (Body+, BPM Connect, ScanWatch) sync over OAuth2 with near-real-time webhooks, and Apple Health syncs live through the iOS app or via export import. AI insights run against OpenAI, Anthropic, your ChatGPT subscription, or a local model (Ollama, LM Studio, vLLM).",
  },
  {
    question: "Can I connect HealthLog to an AI assistant?",
    answer:
      "Yes. HealthLog can expose your own record to MCP-compatible assistants such as Claude or ChatGPT over an OAuth-secured Model Context Protocol server. It is off by default and gated behind a module switch; you mint the connector token yourself, read-only or read-and-write, and any write is previewed, confirmed, append-only and audited.",
  },
  {
    question: "Can HealthLog store and search my medical documents?",
    answer:
      "Yes. An optional, off-by-default document vault keeps your letters, reports and scans encrypted at rest on your own server. Each upload is read and made searchable automatically — by a local reader that never leaves your machine, or, with your per-document consent, by your configured AI provider for a richer read of scans. You can search the words inside your documents over an encrypted blind index that stores nothing readable, ask a single document a grounded and cited question, and share one with a clinician through a time-boxed, revocable QR link with photo metadata stripped.",
  },
  {
    question: "Is HealthLog a medical device?",
    answer:
      "No. HealthLog is a personal health-tracking tool, not a medical device, and it does not diagnose. Screening questionnaires like PHQ-9 and GAD-7 are for self-awareness, not diagnosis, and the AI Coach summarises your own data rather than giving medical advice. Always consult a qualified clinician for medical decisions. Your data stays on your own server.",
  },
];

const terminalCommands = `git clone https://github.com/MBombeck/HealthLog.git
cd HealthLog
cp .env.example .env
echo "POSTGRES_PASSWORD=$(openssl rand -base64 24)" >> .env
echo "ENCRYPTION_KEY=$(openssl rand -hex 32)"       >> .env
echo "API_TOKEN_HMAC_KEY=$(openssl rand -hex 32)"   >> .env
docker compose up -d`;

/* ── Comparison Row ─────────────────────────────── */

function ComparisonRow({
  feature,
  values,
  highlights,
}: {
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
  const learnMeta = getMeta("en");
  const featuredGuides = [
    "resting-heart-rate",
    "heart-rate-variability",
    "sleep-consistency",
    "blood-sugar-beyond-diabetes",
    "vo2max-and-longevity",
    "beyond-the-scale",
  ]
    .map((slug) => LEARN_ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is (typeof LEARN_ARTICLES)[number] => Boolean(a));

  return (
    <div className="relative overflow-x-clip">
      {/* Client-side scroll reveal observer */}
      <ScrollRevealObserver />

      {/* Skip navigation */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* ─── STICKY HEADER NAV ────────────────────── */}
      <nav
        className="bg-void/80 sticky top-0 z-50 border-b border-[rgba(98,114,164,0.08)] backdrop-blur"
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a
            href="#main-content"
            className="text-text-primary hover:text-purple font-display inline-flex min-h-11 items-center gap-2 text-sm font-semibold tracking-tight transition-colors"
          >
            <LogoIcon className="h-6 w-6" />
            HealthLog
          </a>
          <div className="flex items-center gap-4 md:gap-5">
            <a
              href="#features"
              className="text-text-tertiary hover:text-text-primary hidden min-h-11 items-center text-sm transition-colors sm:inline-flex"
            >
              Features
            </a>
            <a
              href="#integrations"
              className="text-text-tertiary hover:text-text-primary hidden min-h-11 items-center text-sm transition-colors sm:inline-flex"
            >
              Integrations
            </a>
            <a
              href="#privacy"
              className="text-text-tertiary hover:text-text-primary hidden min-h-11 items-center text-sm transition-colors sm:inline-flex"
            >
              Privacy
            </a>
            <a
              href="#faq"
              className="text-text-tertiary hover:text-text-primary hidden min-h-11 items-center text-sm transition-colors sm:inline-flex"
            >
              FAQ
            </a>
            <Link
              href="/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              Learn
            </Link>
            <a
              href="https://docs.healthlog.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              Docs
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────── */}
      <header
        id="main-content"
        className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
        role="banner"
      >
        <div className="aurora" />
        <div className="aurora-pink" />
        <div className="grid-pattern" />
        <EcgMonitor />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display font-extrabold text-[2.25rem] sm:text-6xl md:text-[5.5rem] leading-[1.05] tracking-[-0.03em] mb-8">
            <span className="text-text-primary">Your Health.</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #bd93f9 0%, #8be9fd 50%, #ff79c6 100%)",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Server.
            </span>
          </h1>

          <p className="text-text-secondary text-lg sm:text-xl md:text-[1.35rem] max-w-2xl mx-auto mb-14 leading-[1.7] font-light tracking-[-0.01em]">
            The self-hosted health tracking app that gives you full control.
            Weight, blood pressure, glucose, medications, mood — encrypted on
            your own server. Syncs live with Apple Health on iOS and with
            Withings, WHOOP, Oura, Polar, Fitbit and Nightscout on any device.
            Source available.
          </p>

          <nav
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            aria-label="Primary actions"
          >
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
            <Link href="/learn" className="cta-secondary group">
              <BookIcon className="w-5 h-5" />
              <span>Learn about your metrics</span>
            </Link>
          </nav>
        </div>

        <ScrollIndicator />
      </header>

      {/* ─── APP MOCKUP ───────────────────────────── */}
      <main>
        <section
          id="interface"
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow"
          aria-label="App interface"
        >
          <div className="max-w-7xl mx-auto">
            <div className="reveal">
              <AppShowcase />
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─────────────────────────────── */}
        <section
          id="features"
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow scroll-mt-20"
          aria-labelledby="features-heading"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="reveal flex justify-center mb-6">
                <span className="section-label text-purple border-purple/15 bg-purple/[0.03]">
                  Features
                </span>
              </div>
              <h2
                id="features-heading"
                className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
              >
                Everything you need.
                <br />
                <span className="text-text-secondary">
                  Nothing you don&apos;t.
                </span>
              </h2>
              <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                From daily measurements to lab panels, medication schedules and
                cited AI reports — HealthLog covers your whole health workflow.
              </p>
            </div>

            {/* Primary features -- large cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
              {primaryFeatures.map((feature, i) => {
                const colors = colorMap[feature.color];
                return (
                  <div
                    key={feature.title}
                    className={`reveal reveal-delay-${i + 1} glass-card feature-card-accent p-6 group`}
                    style={
                      { "--accent-color": colors.text } as React.CSSProperties
                    }
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="feature-icon flex-shrink-0"
                        style={{
                          backgroundColor: colors.bg,
                          color: colors.text,
                        }}
                      >
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
                  <div
                    key={feature.title}
                    className={`reveal reveal-delay-${i + 1} glass-card feature-card-accent p-6 group`}
                    style={
                      { "--accent-color": colors.text } as React.CSSProperties
                    }
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="feature-icon flex-shrink-0"
                        style={{
                          backgroundColor: colors.bg,
                          color: colors.text,
                        }}
                      >
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
                "Persistent rollup tier for sub-second reads",
                "Glucose mg/dL ↔ mmol/L",
                "FHIR R4 export",
                "GLP-1 injectable support",
                "MCP connector · OAuth-secured",
                "Encrypted document vault",
                "Document search · blind index",
                "Time-boxed share links · QR",
                "PHQ-9 · GAD-7 screening",
                "Longevity lab panel",
                "Grip strength · pain · waist",
                "Two-factor auth · TOTP & passkey",
                "Offline-capable PWA",
                "Telegram · ntfy · Web Push · APNs",
                "Passkey sign-in",
                "Native iOS app (TestFlight beta)",
                "40 achievements to unlock",
                "6 languages · EN/DE/ES/FR/IT/PL",
                "S3 off-host backups",
                "Docker-ready",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-xs font-mono text-text-tertiary border border-[rgba(98,114,164,0.1)] bg-[rgba(15,16,24,0.4)] hover:border-[rgba(189,147,249,0.15)] hover:text-text-secondary transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── iOS / APPLE HEALTH ───────────────────── */}
        <section
          id="ios"
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow"
          aria-labelledby="ios-heading"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="reveal flex justify-center mb-6">
                <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">
                  iOS &amp; Apple Health
                </span>
              </div>
              <h2
                id="ios-heading"
                className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
              >
                Your iPhone writes
                <br />
                straight to your server.
              </h2>
              <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                A native SwiftUI client, in public beta on TestFlight, keeps
                Apple Health in two-way sync with your own instance — no cloud
                middleman. Steps, weight, blood pressure, glucose, sleep and
                body composition flow both ways and land on the same timeline as
                every other reading.
              </p>
            </div>

            <div className="reveal grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto mb-12">
              {[
                {
                  src: "/screenshots/ios/ios-dashboard.webp",
                  alt: "HealthLog iOS app home screen with the Apple Health connection card, Health Score ring, today's medication compliance, and weight and blood-pressure tiles",
                },
                {
                  src: "/screenshots/ios/ios-insights.webp",
                  alt: "HealthLog iOS Insights screen with the Coach prompt, Health Score, BMI, and a blood-pressure target band",
                },
                {
                  src: "/screenshots/ios/ios-medication-detail.webp",
                  alt: "HealthLog iOS medication detail screen showing 30-day compliance, a 14-day adherence strip, last dose, and intake history",
                },
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
                <div className="text-xs font-mono text-cyan mb-1.5 uppercase tracking-wider">
                  Live HealthKit sync
                </div>
                <div className="text-sm text-text-secondary leading-relaxed">
                  Two-way Apple Health sync — steps, weight, blood pressure,
                  glucose, sleep and body composition, written directly to your
                  instance.
                </div>
              </div>
              <div className="glass-card p-5">
                <div className="text-xs font-mono text-purple mb-1.5 uppercase tracking-wider">
                  Sign in with a passkey
                </div>
                <div className="text-sm text-text-secondary leading-relaxed">
                  Face ID / Touch ID passkey sign-in, with per-device
                  refresh-token rotation against your own server.
                </div>
              </div>
              <div className="glass-card p-5">
                <div className="text-xs font-mono text-orange mb-1.5 uppercase tracking-wider">
                  Reminders &amp; reports
                </div>
                <div className="text-sm text-text-secondary leading-relaxed">
                  Local medication reminders with take / skip actions, the AI
                  Coach, and the doctor-report export — all on the phone.
                </div>
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

        {/* ─── INTEGRATIONS ─────────────────────────── */}
        <section
          id="integrations"
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow scroll-mt-20"
          aria-labelledby="integrations-heading"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="reveal flex justify-center mb-6">
                <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">
                  Integrations
                </span>
              </div>
              <h2
                id="integrations-heading"
                className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
              >
                Syncs with the gear you already wear
              </h2>
              <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Connect your devices over OAuth and every reading lands on one
                timeline. When several sources log the same day, they collapse
                into a single canonical value — no double-counting.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {integrations.map((it, i) => {
                const colors = colorMap[it.color];
                return (
                  <div
                    key={it.name}
                    className={`reveal reveal-delay-${(i % 3) + 1} glass-card p-5`}
                  >
                    <div
                      className="text-xs font-mono mb-1.5 uppercase tracking-wider"
                      style={{ color: colors.text }}
                    >
                      {it.name}
                    </div>
                    <div className="text-sm text-text-secondary leading-relaxed">
                      {it.blurb}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── ONE TIMELINE / CORRELATION ───────────── */}
        <section
          id="unified"
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow scroll-mt-20"
          aria-labelledby="unified-heading"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="reveal flex justify-center mb-6">
                <span className="section-label text-purple border-purple/15 bg-purple/[0.03]">
                  Why HealthLog
                </span>
              </div>
              <h2
                id="unified-heading"
                className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
              >
                Your data, finally in one place
              </h2>
              <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Half your numbers live in one app, the rest are scattered across
                your watch, your ring, your scale and a handful of services —
                each a closed silo behind its own subscription. HealthLog pulls
                them onto a single timeline you own, and keeps them there for
                good.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div
                className="glass-card feature-card-accent p-6"
                style={{ "--accent-color": "#8be9fd" } as React.CSSProperties}
              >
                <h3 className="font-display font-bold text-sm text-text-primary mb-1.5 tracking-[-0.01em]">
                  One timeline, every vendor
                </h3>
                <p className="text-text-secondary text-xs leading-[1.7]">
                  Steps, blood pressure, sleep, glucose and mood from any
                  connected device land together — deduplicated to a single
                  canonical reading per day, whatever the source.
                </p>
              </div>
              <div
                className="glass-card feature-card-accent p-6"
                style={{ "--accent-color": "#50fa7b" } as React.CSSProperties}
              >
                <h3 className="font-display font-bold text-sm text-text-primary mb-1.5 tracking-[-0.01em]">
                  Yours for good
                </h3>
                <p className="text-text-secondary text-xs leading-[1.7]">
                  When a subscription lapses or a service shuts down, your
                  history stays. Everything lives on your own server and exports
                  in full — no lock-in, no expiry.
                </p>
              </div>
              <div
                className="glass-card feature-card-accent p-6"
                style={{ "--accent-color": "#ffb86c" } as React.CSSProperties}
              >
                <h3 className="font-display font-bold text-sm text-text-primary mb-1.5 tracking-[-0.01em]">
                  Open API, fully documented
                </h3>
                <p className="text-text-secondary text-xs leading-[1.7]">
                  Every feature is reachable over a documented REST API with
                  scoped tokens — log a dose, pull your readings, wire HealthLog
                  into your own scripts. The full contract ships as OpenAPI.
                </p>
              </div>
              <div
                className="glass-card feature-card-accent p-6"
                style={{ "--accent-color": "#bd93f9" } as React.CSSProperties}
              >
                <h3 className="font-display font-bold text-sm text-text-primary mb-1.5 tracking-[-0.01em]">
                  Correlations the silos can&apos;t see
                </h3>
                <p className="text-text-secondary text-xs leading-[1.7]">
                  With the data finally side by side, the AI Coach connects what
                  separate apps never could — how your sleep moves your resting
                  heart rate, how a medication change tracks with your blood
                  pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRIVACY ──────────────────────────────── */}
        <section
          id="privacy"
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow privacy-section scroll-mt-20"
          aria-labelledby="privacy-heading"
        >
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <div className="reveal flex justify-center mb-8">
                <ShieldIcon className="shield-glow" />
              </div>
              <div className="reveal flex justify-center mb-6">
                <span className="section-label text-green border-green/15 bg-green/[0.03]">
                  Privacy & Security
                </span>
              </div>
              <h2
                id="privacy-heading"
                className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
              >
                Your data belongs to you.
                <br />
                <span className="text-green/80">Period.</span>
              </h2>
              <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Unlike Apple Health or Google Fit, HealthLog keeps you in full
                control. No data sharing, no subscription, no vendor lock-in.
              </p>
            </div>

            <div className="reveal glass-card p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4">
                {privacyChecks.map((check) => (
                  <div key={check} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-text-secondary text-sm leading-[1.65]">
                      {check}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMPARISON ──────────────────────────── */}
        <section
          id="comparison"
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow hidden md:block"
          aria-labelledby="comparison-heading"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="reveal flex justify-center mb-6">
                <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">
                  Comparison
                </span>
              </div>
              <h2
                id="comparison-heading"
                className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
              >
                HealthLog vs. the rest
              </h2>
              <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                See how a self-hosted, source-available approach compares to the
                big players.
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
                      <ComparisonRow
                        feature="Self-hosted"
                        values={["Yes", "No", "No", "No"]}
                        highlights={[true, false, false, false]}
                      />
                      <ComparisonRow
                        feature="Data encryption"
                        values={[
                          "AES-256-GCM",
                          "At rest",
                          "At rest",
                          "At rest",
                        ]}
                        highlights={[true, false, false, false]}
                      />
                      <ComparisonRow
                        feature="Source available"
                        values={["PolyForm NC 1.0.0", "No", "No", "No"]}
                        highlights={[true, false, false, false]}
                      />
                      <ComparisonRow
                        feature="Native iOS app"
                        values={["Public beta", "Native", "Native", "Native"]}
                        highlights={[true, null, null, null]}
                      />
                      <ComparisonRow
                        feature="Apple Health sync"
                        values={[
                          "Two-way, your server",
                          "Own silo",
                          "Import only",
                          "Two-way",
                        ]}
                        highlights={[true, false, false, null]}
                      />
                      <ComparisonRow
                        feature="Withings device sync"
                        values={[
                          "OAuth2 + webhook",
                          "Via Health",
                          "Via Fit",
                          "Limited",
                        ]}
                        highlights={[true, null, null, false]}
                      />
                      <ComparisonRow
                        feature="Doctor-report PDF"
                        values={["Built in", "No", "No", "No"]}
                        highlights={[true, false, false, false]}
                      />
                      <ComparisonRow
                        feature="Offline capable"
                        values={["Full PWA", "Native", "Native", "Limited"]}
                        highlights={[true, null, null, false]}
                      />
                      <ComparisonRow
                        feature="Medication tracking"
                        values={["Full compliance", "Basic", "No", "No"]}
                        highlights={[true, null, false, false]}
                      />
                      <ComparisonRow
                        feature="AI insights"
                        values={[
                          "BYOK or local",
                          "Limited",
                          "No",
                          "Premium only",
                        ]}
                        highlights={[true, null, false, false]}
                      />
                      <ComparisonRow
                        feature="Data export"
                        values={[
                          "CSV, JSON, FHIR, PDF",
                          "XML (HealthKit)",
                          "Google Takeout",
                          "Premium only",
                        ]}
                        highlights={[true, null, null, false]}
                      />
                      <ComparisonRow
                        feature="FHIR export"
                        values={["FHIR R4 bundle", "No", "No", "No"]}
                        highlights={[true, false, false, false]}
                      />
                      <ComparisonRow
                        feature="Cost"
                        values={[
                          "Free (noncommercial)",
                          "Free (Apple only)",
                          "Free",
                          "Freemium",
                        ]}
                        highlights={[true, null, null, false]}
                      />
                      <ComparisonRow
                        feature="Ad-free"
                        values={["Always", "Yes", "Yes", "Premium only"]}
                        highlights={[true, null, null, false]}
                      />
                      <ComparisonRow
                        feature="Custom server"
                        values={[
                          "Your infrastructure",
                          "Apple servers",
                          "Google servers",
                          "Under Armour servers",
                        ]}
                        highlights={[true, false, false, false]}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mobile: Card layout */}
            <div className="reveal comparison-cards">
              {[
                {
                  name: "Apple Health",
                  items: [
                    { feature: "Self-hosted", hl: "Yes", other: "No" },
                    {
                      feature: "Data encryption",
                      hl: "AES-256-GCM",
                      other: "At rest",
                    },
                    {
                      feature: "Source available",
                      hl: "PolyForm NC 1.0.0",
                      other: "No",
                    },
                    {
                      feature: "Medication tracking",
                      hl: "Full compliance",
                      other: "Basic",
                    },
                    {
                      feature: "AI insights",
                      hl: "BYOK or local",
                      other: "Limited",
                    },
                    {
                      feature: "Cost",
                      hl: "Free (noncommercial)",
                      other: "Free (Apple only)",
                    },
                  ],
                },
                {
                  name: "Google Fit",
                  items: [
                    { feature: "Self-hosted", hl: "Yes", other: "No" },
                    {
                      feature: "Data encryption",
                      hl: "AES-256-GCM",
                      other: "At rest",
                    },
                    {
                      feature: "Source available",
                      hl: "PolyForm NC 1.0.0",
                      other: "No",
                    },
                    {
                      feature: "Medication tracking",
                      hl: "Full compliance",
                      other: "No",
                    },
                    {
                      feature: "AI insights",
                      hl: "BYOK or local",
                      other: "No",
                    },
                    {
                      feature: "Data export",
                      hl: "CSV, JSON, FHIR, PDF",
                      other: "Google Takeout",
                    },
                  ],
                },
                {
                  name: "MyFitnessPal",
                  items: [
                    { feature: "Self-hosted", hl: "Yes", other: "No" },
                    {
                      feature: "Source available",
                      hl: "PolyForm NC 1.0.0",
                      other: "No",
                    },
                    {
                      feature: "Offline capable",
                      hl: "Full PWA",
                      other: "Limited",
                    },
                    { feature: "Ad-free", hl: "Always", other: "Premium only" },
                    {
                      feature: "Data export",
                      hl: "CSV, JSON, FHIR, PDF",
                      other: "Premium only",
                    },
                    {
                      feature: "Cost",
                      hl: "Free (noncommercial)",
                      other: "Freemium",
                    },
                  ],
                },
              ].map((competitor) => (
                <div key={competitor.name} className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(98,114,164,0.12)]">
                    <span className="font-display font-bold text-sm text-purple">
                      HealthLog
                    </span>
                    <span className="text-text-tertiary text-xs font-mono">
                      vs
                    </span>
                    <span className="font-display font-bold text-sm text-text-secondary">
                      {competitor.name}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {competitor.items.map((item) => (
                      <div
                        key={item.feature}
                        className="grid grid-cols-[1fr_auto_auto] gap-2 sm:gap-3 items-center"
                      >
                        <span className="text-[11px] sm:text-xs text-text-tertiary font-mono">
                          {item.feature}
                        </span>
                        <span className="text-[11px] sm:text-xs text-green font-mono text-right">
                          {item.hl}
                        </span>
                        <span className="text-[11px] sm:text-xs text-text-tertiary font-mono text-right">
                          {item.other}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── LIVE DEMO ─────────────────────────────── */}
        <section
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow"
          aria-labelledby="demo-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-orange border-orange/15 bg-orange/[0.03]">
                Live Demo
              </span>
            </div>
            <h2
              id="demo-heading"
              className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
            >
              See it in action
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-12">
              Explore the full app with pre-populated data. No signup, no
              installation — just click and explore.
            </p>

            <DemoCredentials />

            <p className="reveal text-text-tertiary text-xs font-mono">
              Resets automatically — feel free to add, edit, and delete
              anything.
            </p>
          </div>
        </section>

        {/* ─── CTA + QUICK START ────────────────────── */}
        <section
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow"
          aria-labelledby="quickstart-heading"
        >
          <div className="reveal max-w-2xl mx-auto text-center">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-pink border-pink/15 bg-pink/[0.03]">
                Quick Start
              </span>
            </div>
            <h2
              id="quickstart-heading"
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
            >
              Up and running
              <br />
              in minutes
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-12">
              HealthLog is source available and free for noncommercial use.
              Clone the repo, set your config, start with Docker.
            </p>

            <TerminalBlock commands={terminalCommands} />

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

        {/* ─── FAQ ──────────────────────────────────── */}
        <section
          id="faq"
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow scroll-mt-20"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <div className="reveal flex justify-center mb-6">
                <span className="section-label text-purple border-purple/15 bg-purple/[0.03]">
                  FAQ
                </span>
              </div>
              <h2
                id="faq-heading"
                className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
              >
                Questions, answered
              </h2>
              <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                The things people ask before they self-host. Short, honest
                answers.
              </p>
            </div>

            <div className="reveal space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="learn-faq group">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FROM LEARN ───────────────────────────── */}
        <section
          className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow"
          aria-labelledby="learn-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="reveal flex justify-center mb-6">
                <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">
                  Learn
                </span>
              </div>
              <h2
                id="learn-heading"
                className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5"
              >
                Understand your numbers
              </h2>
              <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Plain-language guides to the metrics HealthLog tracks — what
                they mean, what moves them, and when a change is worth a closer
                look. Every claim is sourced.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredGuides.map((a, i) => {
                const am = learnMeta.articles[a.slug];
                const accent = CATEGORY_COLOR[a.category];
                return (
                  <Link
                    key={a.slug}
                    href={`/learn/${a.slug}`}
                    className={`reveal reveal-delay-${(i % 3) + 1} glass-card group flex flex-col gap-3 p-4 transition-colors hover:border-[rgba(189,147,249,0.25)]`}
                  >
                    <LearnImage
                      base={`/learn-img/${a.slug}`}
                      alt=""
                      thumb
                      className="learn-card-thumb"
                    />
                    <span
                      className="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase"
                      style={{ color: accent }}
                    >
                      {learnMeta.categories[a.category]}
                    </span>
                    <h3 className="font-display text-text-primary group-hover:text-purple text-base font-bold tracking-tight transition-colors">
                      {am?.title ?? a.slug}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {am?.dek}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className="reveal mt-10 flex justify-center">
              <Link href="/learn" className="cta-secondary group">
                <BookIcon className="w-5 h-5" />
                <span>Browse all guides</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── TECH STACK ───────────────────────────── */}
        <section
          className="relative py-20 overflow-hidden"
          aria-label="Technology stack"
        >
          <div className="reveal text-center mb-10">
            <p className="text-text-tertiary text-xs font-mono tracking-[0.2em] uppercase">
              Built with
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />
            <div className="overflow-hidden">
              <div className="tech-scroll" aria-hidden="true">
                {[...techItems, ...techItems].map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="flex-shrink-0 px-5 py-2.5 rounded-full border border-[rgba(98,114,164,0.08)] bg-[rgba(15,16,24,0.5)] text-text-secondary text-sm font-mono whitespace-nowrap hover:border-[rgba(189,147,249,0.2)] hover:text-text-primary transition-all duration-300"
                  >
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
      </main>

      {/* ─── FOOTER ───────────────────────────────── */}
      <footer
        className="relative py-14 px-4 sm:px-6 border-t border-[rgba(98,114,164,0.06)]"
        role="contentinfo"
      >
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href="https://docs.healthlog.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm"
            >
              <BookIcon className="w-4 h-4" />
              Docs
            </a>
            <DemoPopupLink className="flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              <PlayIcon className="w-4 h-4" />
              Demo
            </DemoPopupLink>
            <a
              href="https://github.com/MBombeck/HealthLog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://github.com/MBombeck/HealthLog/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm"
            >
              <TagIcon className="w-4 h-4" />
              Releases
            </a>
            <Link
              href="/learn"
              className="flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm"
            >
              <BookIcon className="w-4 h-4" />
              Learn
            </Link>
            <a
              href="/learn/feed.xml"
              className="flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm"
            >
              <RssIcon className="w-4 h-4" />
              RSS
            </a>
            <Link
              href="/privacy"
              className="flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm"
            >
              <ShieldFooterIcon className="w-4 h-4" />
              Privacy
            </Link>
            <Link
              href="/imprint"
              className="flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm"
            >
              <FileIcon className="w-4 h-4" />
              Imprint
            </Link>
            <Link
              href="/support"
              className="flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm"
            >
              <LifeBuoyIcon className="w-4 h-4" />
              Support
            </Link>
          </div>
        </div>
        <p className="max-w-5xl mx-auto mt-6 text-center text-text-tertiary text-xs font-mono">
          © 2026 HealthLog ·{" "}
          <a
            href="https://polyformproject.org/licenses/noncommercial/1.0.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            PolyForm Noncommercial 1.0.0
          </a>
        </p>
      </footer>
    </div>
  );
}

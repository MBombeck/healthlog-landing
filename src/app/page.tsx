import Link from "next/link";

import { ScrollRevealObserver } from "@/components/HeroClient";
import { DemoCredentials } from "@/components/DemoCredentials";
import { DemoPopupLink } from "@/components/DemoPopupLink";
import { TerminalBlock } from "@/components/TerminalBlock";
import { AppScreen } from "@/components/AppScreen";
import { BrowserFrame } from "@/components/BrowserFrame";
import { PhoneFrame } from "@/components/PhoneFrame";

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

/* ── Feature Data ───────────────────────────────── */

/* ── Compact icons for the "everything else" grid (24px stroke set) ── */

const MINI: Record<string, string> = {
  heart:
    "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  drop: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
  pill: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z M8.5 8.5l7 7",
  flask: "M9 3h6 M10 3v7.4L4.6 19a1.5 1.5 0 0 0 1.3 2h12.2a1.5 1.5 0 0 0 1.3-2L14 10.4V3",
  smile: "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20 M8 14s1.5 2 4 2 4-2 4-2 M9 9h.01 M15 9h.01",
  spark: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z M19 17v4 M17 19h4",
  thermo: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
  calendar:
    "M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  syringe:
    "m18 2 4 4 M17 7l3-3 M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5 M9 11l4 4 M5 19l-3 3 M14 4l6 6",
  file: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M14 2v4a2 2 0 0 0 2 2h4 M8 13h8 M8 17h5",
  search: "M11 3a8 8 0 1 0 0 16a8 8 0 1 0 0-16 M21 21l-4.3-4.3",
  wind: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2 M9.6 4.6A2 2 0 1 1 11 8H2 M12.6 19.4A2 2 0 1 0 14 16H2",
  qr: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h3v3h-3z M20 20h1v1h-1z M20 14v3",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  user: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8",
  watch:
    "M12 9v3l1.5 1.5 M16.5 6.5 16 3H8l-.5 3.5 M7.5 17.5 8 21h8l.5-3.5 M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",
  link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  phone: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M12 18h.01",
  bell: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0",
  globe:
    "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20 M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
  box: "M21 8 12 3 3 8v8l9 5 9-5z M3 8l9 5 9-5 M12 13v8",
  lock: "M5 11h14v10H5z M8 11V7a4 4 0 1 1 8 0v4",
  code: "m16 18 6-6-6-6 M8 6l-6 6 6 6",
};

function MiniIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={MINI[name]} />
    </svg>
  );
}

/* Three things a self-hoster checks first. Each item is a fact, not a pitch. */
const pillars = [
  {
    icon: "box",
    color: "#8be9fd",
    title: "Your server",
    items: [
      "One docker compose up",
      "PostgreSQL in a single volume",
      "Encrypted backups to any S3 bucket",
      "No subscription, no vendor cloud",
    ],
  },
  {
    icon: "lock",
    color: "#50fa7b",
    title: "Secure by default",
    items: [
      "AES-256-GCM for notes, documents and keys",
      "Passkeys, 2FA and OpenID Connect",
      "Strict CSP, server-side sessions",
      "No telemetry, no third-party trackers",
    ],
  },
  {
    icon: "code",
    color: "#bd93f9",
    title: "Open at every edge",
    items: [
      "Source available, PolyForm Noncommercial",
      "REST API with an OpenAPI 3.1 contract",
      "FHIR R4 export and read API",
      "MCP server for AI assistants",
    ],
  },
];

/* One message per section, one picture each. */
const stories: {
  id: string;
  kicker: string;
  title: string;
  body: string;
  shot: "timeline" | "day-panel" | "coach";
  alt: string;
}[] = [
  {
    id: "timeline",
    kicker: "Timeline",
    title: "Every source on one timeline",
    body: "Apple Health, Withings, WHOOP, Oura, Polar, Fitbit, Nightscout and what you type in land on one axis, next to your medications, lab results and visits. When two devices report the same day, you decide which one counts.",
    shot: "timeline",
    alt: "HealthLog timeline over three months with lanes for life events, conditions, medications, vaccinations, labs and cycle above blood pressure, weight and resting heart rate",
  },
  {
    id: "day",
    kicker: "Any day",
    title: "Open any day in one tap",
    body: "Tap a date on a chart, in a list or on the calendar strip and the day docks beside the page: what was running, every reading against your usual range, and what happened.",
    shot: "day-panel",
    alt: "HealthLog blood-pressure chart with one day marked and that day open in a panel on the right: medications running that day, values against the 30 days before, and scores",
  },
  {
    id: "ai",
    kicker: "AI, optional",
    title: "Ask your record, or don't",
    body: "The Coach answers from your own numbers and shows the steps it took. Use your own OpenAI or Anthropic key, a local model on Ollama, LM Studio or vLLM, or leave AI off. Everything else works without it.",
    shot: "coach",
    alt: "HealthLog Coach answering how the week's recovery went, with its five steps folded above the answer and earlier conversations listed on the right",
  },
];

/* Everything else, one short line each. Nothing here repeats a section above. */
const everythingElse: { group: string; items: [string, string][] }[] = [
  {
    group: "Track",
    items: [
      ["heart", "Vitals, sleep, body composition"],
      ["activity", "ECG recordings"],
      ["drop", "Blood glucose and CGM"],
      ["smile", "Mood and wellbeing check-ins"],
      ["drop", "Cycle tracking"],
      ["wind", "Weather, air quality, pollen"],
      ["spark", "Health score and correlations"],
    ],
  },
  {
    group: "Records",
    items: [
      ["pill", "Medication schedules and stock"],
      ["pill", "Supplements that log themselves"],
      ["flask", "Lab results with unit conversion"],
      ["thermo", "Illness journal and symptoms"],
      ["calendar", "Doctor visits and check-ups"],
      ["syringe", "Vaccination record"],
      ["file", "Encrypted document vault"],
      ["search", "Record search with ⌘K"],
    ],
  },
  {
    group: "Share",
    items: [
      ["file", "Doctor report PDF"],
      ["qr", "Share links with a QR code"],
      ["users", "Family access, read or write"],
      ["user", "Records for a child"],
      ["globe", "7 languages"],
    ],
  },
  {
    group: "Connect",
    items: [
      ["watch", "Withings, WHOOP, Oura, Polar"],
      ["watch", "Fitbit and Pixel Watch"],
      ["link", "Strava, Nightscout, Dawarich"],
      ["phone", "Health Connect import"],
      ["watch", "Garmin via Apple or Google Health"],
      ["bell", "Push, Telegram, ntfy, e-mail"],
    ],
  },
];

// Kept verbatim in sync with the FAQPage JSON-LD in src/app/layout.tsx —
// Google rewards visible + structured parity, so the answer text here must
// match the schema answers word for word.
const faqs = [
  {
    question: "Is HealthLog free?",
    answer:
      "Yes, for noncommercial use. HealthLog is source available under the PolyForm Noncommercial 1.0.0 licence. You run it on your own server with a single docker compose up. There is no subscription and no paid tier. The iPhone app is a small one-time purchase on the App Store; the TestFlight beta and a copy you build yourself are free.",
  },
  {
    question: "Does HealthLog sync with Apple Health?",
    answer:
      "Yes. The native SwiftUI iOS app (on the App Store, source on GitHub) keeps Apple Health (HealthKit) in two-way sync: steps, weight, blood pressure, blood glucose, sleep, and body composition flow straight to your own server. On any platform you can also drop an Apple Health export.zip on the upload page.",
  },
  {
    question: "Where is my health data stored?",
    answer:
      "Entirely on your own infrastructure. HealthLog is self-hosted on PostgreSQL, with notes, documents, questionnaire answers, Coach conversations and tokens encrypted at rest using AES-256-GCM. Measurement values, lab values, medication names and mood scores are stored unencrypted so they can be queried and charted. There is no usage telemetry and no third-party analytics.",
  },
  {
    question: "Which devices and services does HealthLog integrate with?",
    answer:
      "Withings, WHOOP, Oura, Polar, Fitbit, Strava, Nightscout and Dawarich sync over OAuth or your own endpoints, and Apple Health syncs live through the iOS app or via export import. On Android you can import a Health Connect export. AI insights run against OpenAI, Anthropic, your ChatGPT subscription, or a local model (Ollama, LM Studio, vLLM).",
  },
  {
    question: "Can I connect HealthLog to an AI assistant?",
    answer:
      "Yes. HealthLog can expose your own record to MCP-compatible assistants such as Claude or ChatGPT over an OAuth-secured Model Context Protocol server. It is off by default and gated behind a module switch; you mint the connector token yourself, read-only or read-and-write, and any write is previewed, confirmed, append-only and audited.",
  },
  {
    question: "Can HealthLog store and search my medical documents?",
    answer:
      "Yes. An optional, off-by-default document vault keeps your letters, reports and scans encrypted at rest on your own server. Each upload is read and made searchable automatically, by a local reader that runs on your server or in your own browser, or, with your per-document consent, by your configured AI provider for a richer read of scans. You can search the words inside your documents over an encrypted blind index that stores nothing readable, ask a single document a grounded and cited question, and share one with a clinician through a time-boxed, revocable QR link with photo metadata stripped.",
  },
  {
    question: "Can I let a family member see my health record?",
    answer:
      "Yes, if they have an account on the same instance. You send them an invitation from Settings and it gives them nothing until they accept it. The invitation names a level: they can read your record, read it and add to it, or manage it, which can also correct and remove what is already recorded. It also names how much of the record it opens. You can pick from readings, medications, lab results, health background, illness, mood and mind, cycle and documents, and everything you do not pick stays closed and is refused exactly the way a record you never shared would be. Managing always covers the whole record, because a note in one section can be about any other. Deferring one of your reminders, and overturning a dose you have already decided, stay with you at every level. What somebody adds is stored as yours, because it is a fact about your body, with their name in the audit trail rather than on the row, and the activity panel names each act with a verb that says what it was. They can never reach your password, your second factor, your connected services, your notification channels, your exports or the sharing controls themselves. An invitation can name the day the access lapses, and either side can end it sooner, with effect on their next request rather than their next login. This is a grant between two accounts, so nobody ever shares a login.",
  },
  {
    question: "Can I keep a record for my child, or for somebody I care for?",
    answer:
      "Yes. A managed profile is a health record for a person who does not sign in at all. It has no password and no e-mail address of its own. When the person is ready to look after it themselves, a guardian can hand the profile over with a one-time link, and it becomes their own account with all of its history, while they decide who keeps access. You give it a name, optionally a date of birth and a gender, and the language and timezone its own days and reminders are measured in, and you become its first guardian in the same step, so the record is never left unattended. A guardian can change any of those later, behind the same second factor. You can invite a second guardian, who accepts the way any invitation is accepted. Its reminders reach the people looking after it rather than a phone it does not have: medication and measurement reminders, safety-floor and low-stock alerts all go to the guardians, each in their own language, naming whose record they are about. The record can never be left with nobody, so the last guardian may delete the profile but may not simply walk away from it. Creating one asks for your second factor.",
  },
  {
    question: "Is there an Android app?",
    answer:
      "Not a native one. HealthLog is a web app you can install to your home screen from the browser, and it runs on Android like on any other platform. For what your phone and watch record, Health Connect is the way in: export your data from Health Connect to a cloud folder, then upload that file on the import page in HealthLog's settings. Steps, heart rate, sleep, workouts and more arrive with their history, and apps you already connect to HealthLog directly are left out so nothing counts twice. It is an import rather than a live sync, so you repeat it when you want newer data.",
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
echo "POSTGRES_PASSWORD=$(openssl rand -hex 32)"   >> .env
echo "ENCRYPTION_KEY=$(openssl rand -hex 32)"      >> .env
echo "API_TOKEN_HMAC_KEY=$(openssl rand -hex 32)"  >> .env
# Plain HTTP (LAN, NAS, Tailscale) only; omit behind HTTPS:
echo "SESSION_COOKIE_SECURE=false"                 >> .env
docker compose up -d`;

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <ScrollRevealObserver />

      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

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
            <Link
              href="/features"
              className="text-text-tertiary hover:text-text-primary hidden min-h-11 items-center text-sm transition-colors sm:inline-flex"
            >
              Features
            </Link>
            <a
              href="#self-hosted"
              className="text-text-tertiary hover:text-text-primary hidden min-h-11 items-center text-sm transition-colors sm:inline-flex"
            >
              Self-hosting
            </a>
            <a
              href="#faq"
              className="text-text-tertiary hover:text-text-primary hidden min-h-11 items-center text-sm transition-colors sm:inline-flex"
            >
              FAQ
            </a>
            <a
              href="#demo"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              Demo
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
        className="relative flex flex-col items-center overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-24 md:pt-28 md:pb-24"
        role="banner"
      >
        <div className="aurora" />
        <div className="aurora-pink" />
        <div className="grid-pattern" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display mb-6 text-[2.5rem] leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-6xl md:text-[5rem]">
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

          <p className="text-text-secondary mx-auto mb-10 max-w-2xl text-lg leading-[1.6] font-light tracking-[-0.01em] sm:text-xl md:text-[1.3rem]">
            A self-hosted health record: what your devices, your doctors and
            you write down, on one timeline on your own server.
          </p>

          <nav
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            aria-label="Primary actions"
          >
            <a href="#demo" className="cta-button group">
              <PlayIcon className="relative z-10 h-5 w-5" />
              <span>Try the live demo</span>
              <ArrowIcon />
            </a>
            <a
              href="https://github.com/MBombeck/HealthLog"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://docs.healthlog.dev"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookIcon className="h-5 w-5" />
              <span>Docs</span>
            </a>
          </nav>
        </div>

        <div className="hero-shot relative z-10 mx-auto mt-14 w-full max-w-6xl sm:mt-20">
          <BrowserFrame>
            <AppScreen
              name="dashboard"
              alt="HealthLog dashboard: a health score of 90, the day's medications, last night's sleep and cycle day, an upcoming appointment, and tiles for weight, blood pressure, heart rate, oxygen saturation and body composition"
              sizes="(max-width: 1200px) 100vw, 1152px"
              priority
              className="block h-auto w-full"
            />
          </BrowserFrame>
        </div>
      </header>

      <main>
        {/* ─── SELF-HOSTED ──────────────────────────── */}
        <section
          id="self-hosted"
          className="section-glow relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28"
          aria-labelledby="self-hosted-heading"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="self-hosted-heading"
              className="reveal font-display text-text-primary mb-12 text-center text-3xl font-bold tracking-[-0.02em] sm:text-4xl md:text-5xl"
            >
              Built to run on your own server
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`reveal reveal-delay-${i + 1} glass-card p-6`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="feature-icon flex-shrink-0"
                      style={{ color: p.color, backgroundColor: `${p.color}14` }}
                    >
                      <MiniIcon name={p.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-text-primary text-lg font-bold tracking-[-0.01em]">
                      {p.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="text-text-secondary flex items-start gap-2.5 text-sm leading-snug"
                      >
                        <span className="mt-0.5" style={{ color: p.color }}>
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── STORIES: one message, one picture ────── */}
        {stories.map((st, i) => (
          <section
            key={st.id}
            id={st.id}
            className="section-glow relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28"
            aria-labelledby={`${st.id}-heading`}
          >
            <div className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:gap-14 ${i % 2 === 1 ? "lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]" : "lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"}`}>
              <div className={`reveal ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="section-label text-purple border-purple/15 bg-purple/[0.03] mb-5 inline-block">
                  {st.kicker}
                </span>
                <h2
                  id={`${st.id}-heading`}
                  className="font-display text-text-primary mb-4 text-3xl font-bold tracking-[-0.02em] md:text-4xl"
                >
                  {st.title}
                </h2>
                <p className="text-text-secondary text-base leading-relaxed md:text-lg">
                  {st.body}
                </p>
              </div>
              <div className={`reveal reveal-delay-1 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <BrowserFrame>
                  <AppScreen
                    name={st.shot}
                    alt={st.alt}
                    sizes="(max-width: 1024px) 100vw, 760px"
                    className="block h-auto w-full"
                  />
                </BrowserFrame>
              </div>
            </div>
          </section>
        ))}

        {/* ─── ON THE PHONE ─────────────────────────── */}
        <section
          id="mobile"
          className="section-glow relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28"
          aria-labelledby="mobile-heading"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-14">
            <div className="reveal">
              <span className="section-label text-pink border-pink/15 bg-pink/[0.03] mb-5 inline-block">
                Mobile
              </span>
              <h2
                id="mobile-heading"
                className="font-display text-text-primary mb-4 text-3xl font-bold tracking-[-0.02em] md:text-4xl"
              >
                In your pocket
              </h2>
              <p className="text-text-secondary mb-8 text-base leading-relaxed md:text-lg">
                The native iPhone app keeps Apple Health in two-way sync with
                your server. On Android, or anywhere else, install the web app
                from the browser.
              </p>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://apps.apple.com/app/id6769501341"
                  className="cta-secondary group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppleIcon className="h-5 w-5" />
                  <span>Get it on the App Store</span>
                </a>
                <a
                  href="https://testflight.apple.com/join/bucuTBpa"
                  className="cta-secondary group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppleIcon className="h-5 w-5" />
                  <span>Join the TestFlight beta</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {(
                [
                  {
                    name: "phone-dashboard",
                    alt: "HealthLog on a phone: the dashboard with a health score of 90, the day's medications, last night's sleep and an upcoming appointment",
                  },
                  {
                    name: "phone-day",
                    alt: "HealthLog on a phone: a day opened as a bottom sheet, with the medications running that day and blood pressure and resting heart rate against their usual range",
                  },
                ] as const
              ).map((shot, i) => (
                <div
                  key={shot.name}
                  className={`reveal reveal-delay-${i + 1}`}
                >
                  <PhoneFrame>
                    <AppScreen
                      name={shot.name}
                      alt={shot.alt}
                      sizes="(max-width: 768px) 45vw, 260px"
                      className="block h-auto w-full"
                    />
                  </PhoneFrame>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EVERYTHING ELSE ──────────────────────── */}
        <section
          id="more"
          className="section-glow relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28"
          aria-labelledby="more-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2
                id="more-heading"
                className="reveal font-display text-text-primary mb-4 text-3xl font-bold tracking-[-0.02em] sm:text-4xl"
              >
                And everything else
              </h2>
              <Link
                href="/features"
                className="reveal text-purple inline-flex items-center gap-1.5 text-sm hover:underline"
              >
                The full feature list
                <ArrowIcon />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {everythingElse.map((g) => (
                <div key={g.group} className="reveal">
                  <h3 className="text-text-tertiary mb-4 font-mono text-xs tracking-[0.18em] uppercase">
                    {g.group}
                  </h3>
                  <ul className="space-y-3">
                    {g.items.map(([icon, label]) => (
                      <li
                        key={label}
                        className="text-text-secondary flex items-center gap-3 text-sm"
                      >
                        <span className="text-purple flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-[rgba(189,147,249,0.12)] bg-[rgba(189,147,249,0.05)]">
                          <MiniIcon name={icon} />
                        </span>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DEMO + QUICK START ───────────────────── */}
        <section
          id="demo"
          className="section-glow relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28"
          aria-labelledby="demo-heading"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="demo-heading"
              className="reveal font-display text-text-primary mb-12 text-center text-3xl font-bold tracking-[-0.02em] sm:text-4xl md:text-5xl"
            >
              Try it, then run it
            </h2>
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
              <div className="text-center">
                <h3 className="font-display text-text-primary mb-2 text-lg font-bold">
                  Live demo
                </h3>
                <p className="text-text-secondary mb-6 text-sm">
                  Years of made-up data, read-only. Works in the iPhone app
                  too.
                </p>
                <DemoCredentials />
              </div>
              <div className="text-center">
                <h3 className="font-display text-text-primary mb-2 text-lg font-bold">
                  Your own server
                </h3>
                <p className="text-text-secondary mb-6 text-sm">
                  Free for noncommercial use. Behind HTTPS, drop the last echo.
                </p>
                <TerminalBlock commands={terminalCommands} />
                <a
                  href="https://docs.healthlog.dev"
                  className="cta-secondary group -mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookIcon className="h-5 w-5" />
                  <span>Installation guide</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────── */}
        <section
          id="faq"
          className="section-glow relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-3xl">
            <h2
              id="faq-heading"
              className="reveal font-display text-text-primary mb-10 text-center text-3xl font-bold tracking-[-0.02em] sm:text-4xl"
            >
              Questions
            </h2>
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

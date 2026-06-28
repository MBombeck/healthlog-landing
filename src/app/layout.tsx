import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { SITE_ORIGIN } from "@/content/learn/locales";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://healthlog.dev"),
  title: {
    default: "HealthLog — Self-Hosted Health Tracking App | Source-Available PWA",
    template: "%s | HealthLog",
  },
  description:
    "Self-hosted health tracker. Native iOS app with live Apple Health (HealthKit) two-way sync, Withings device sync, multi-provider AI insights, and a client-side doctor-report PDF. AES-256-GCM encrypted. Docker deploy in minutes. Free for noncommercial use, source available.",
  keywords: [
    "self-hosted health tracker",
    "health tracking app",
    "source available health app",
    "Apple Health sync",
    "HealthKit self-hosted",
    "iOS health app self-hosted",
    "medication management",
    "medication compliance tracker",
    "blood pressure tracker",
    "blood glucose tracker",
    "weight tracker",
    "mood tracker",
    "self-hosted PWA",
    "health dashboard",
    "Withings integration",
    "Withings self-hosted",
    "AI health insights",
    "doctor report PDF",
    "privacy-first health app",
    "Docker health app",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: [{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" }],
  },
  alternates: {
    canonical: "https://healthlog.dev",
    types: {
      "application/rss+xml": `${SITE_ORIGIN}/learn/feed.xml`,
    },
  },
  openGraph: {
    title: "HealthLog — Self-Hosted Health Tracking with Full Data Ownership",
    description:
      "Track weight, blood pressure, glucose, medications, and mood on your own server. Native iOS app with live Apple Health sync, Withings devices, AI insights. AES-256-GCM encrypted, source available.",
    type: "website",
    url: "https://healthlog.dev",
    siteName: "HealthLog",
    locale: "en_US",
    images: [
      {
        url: "https://healthlog.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "HealthLog — Self-hosted health tracking dashboard showing weight trends, medication compliance, and mood tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthLog — Self-Hosted Health Tracking App",
    description:
      "Track weight, blood pressure, glucose, medications, and mood on your own server. Native iOS app with live Apple Health sync. AES-256-GCM encrypted, source available, Docker-ready.",
    images: ["https://healthlog.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application-name": "HealthLog",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0b10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HealthLog",
    url: "https://healthlog.dev",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Web, Docker",
    description:
      "Self-hosted health tracker. Native iOS app with live Apple Health (HealthKit) two-way sync, Withings device sync, multi-provider AI insights, medication compliance, and a client-side doctor-report PDF. AES-256-GCM encrypted. Free for noncommercial use, source available.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Organization",
      name: "HealthLog",
      url: "https://github.com/MBombeck/HealthLog",
    },
    featureList: [
      "OAuth-secured Model Context Protocol (MCP) server — connect your own record to MCP-compatible assistants (Claude, ChatGPT, and others); read-only by default, optional confirmed write scope, off until enabled",
      "Mental-wellbeing self-assessments (PHQ-9 and GAD-7) — opt-in screening, not diagnosis, with encrypted answers and locale-aware crisis-support contacts",
      "Grip strength, a 0–10 pain score, waist circumference and waist-to-height ratio, and respiratory rate as first-class tracked signals",
      "Longevity lab panel in the biomarker catalogue — ApoB, Lp(a), hs-CRP, HbA1c, fasting glucose and insulin, eGFR, GGT, ferritin, omega-3 index — with reference ranges",
      "Structured, encrypted medical-history records — allergies and family history — included in the health-record export",
      "Optional environmental-context module — daily weather, daylight, and temperature correlated against mood, sleep, and vitals",
      "Inbound documents — file a doctor's report or discharge letter and review the transcribed facts before they enter your record",
      "Two-factor authentication (TOTP and WebAuthn) with step-up checks for sensitive actions",
      "Native SwiftUI iOS app (public TestFlight beta) with live two-way Apple Health (HealthKit) sync — steps, weight, blood pressure, glucose, sleep, body composition",
      "Weight, blood pressure, heart rate, body fat, sleep, steps tracking",
      "Body composition: total body water + bone mass via Withings auto-sync",
      "Pulse oximetry (SpO₂) tracking with personalisable target bands for COPD / chronic respiratory users",
      "Blood glucose tracking with fasting/postprandial/random/bedtime contexts",
      "Medication management with compliance analytics and reminders",
      "Mood tracking with 5-point scale and tags",
      "AI-powered health insights via OpenAI (BYOK or admin-shared key), Anthropic Claude, your ChatGPT subscription (one-click device-code Codex flow, no API plan needed), or local OpenAI-compatible providers (Ollama, LM Studio, vLLM)",
      "Multi-provider fallback chain — providers retry in user-defined order on hard failure, with last-working provider cached per user",
      "AI Coach drawer with streaming chat and encrypted conversation history — same provider chain as AI Insights, source-chip provenance per turn, per-user daily token budget",
      "Personal Health Score (composite 0–100 with three bands) drawn from blood-pressure target rate, weight-trend alignment, mood stability, and medication compliance",
      "Daily Briefing card and printable weekly report at /insights/report/[week]",
      "Per-recommendation explainability with rationale (window + comparison + deviation), pinned mini-chart of the data window, and was-this-helpful feedback",
      "Server-computed 0–100 confidence score per recommendation (sample size + recency + signal strength) — no model-claimed values",
      "Medical-reference grounding — every normative recommendation cites a curated guideline (ESH, ESC, ACC/AHA, WHO, DGE) with source links",
      "Hardened AI insights with strict citation requirement — every recommendation must point at a real datapoint, no hallucinated numbers",
      "Inline charts inside AI findings and three years of context per metric (360 daily + 24 monthly means)",
      "Clean-line health charts with smooth animation, rich tooltips, and explicit empty states — plus per-chart toggles for trend indicator, trend arrow, and target-range overlay",
      "Comparison overlays — toggle vs. last month / vs. last year on every chart, tile, and the AI insights surface",
      "Personal health targets that override guideline defaults, audit-logged per change",
      "Customizable dashboard — show, hide, and reorder every widget",
      "Doctor report PDF generation, locale-aware (EN/DE), with optional AI summary",
      "Withings device synchronization (Body+, BPM Connect, ScanWatch)",
      "Native API clients with Bearer + refresh-token rotation and Idempotency-Key support",
      "Off-host weekly encrypted backups to any S3-compatible bucket, with download / upload / restore from the admin panel and full audit-log trail",
      "Worker / web split for scaling beyond a single container",
      "Versioned encryption keys with online rotation",
      "AES-256-GCM encryption for all sensitive data",
      "Passkey (WebAuthn) authentication",
      "Offline-capable Progressive Web App",
      "CSV and JSON data export",
      "Telegram, ntfy, and Web Push notifications",
    ],
    screenshot: "https://healthlog.dev/og-image.png",
    // Tracks the latest stable HealthLog server release. Bumped manually
    // until the cross-repo release sync tool lands.
    softwareVersion: "1.25.0",
    license: "https://polyformproject.org/licenses/noncommercial/1.0.0/",
    // Landing page is English-only today. The HealthLog app itself is
    // bilingual (EN/DE) — that fact belongs on the app, not the marketing
    // page. Re-add "de" here once a German landing variant ships.
    inLanguage: "en",
    downloadUrl: "https://github.com/MBombeck/HealthLog",
    installUrl: "https://docs.healthlog.dev",
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "HealthLog — Self-Hosted Health Tracking App",
    description:
      "Self-hosted health tracking PWA with medication management, mood tracking, AI-powered insights, and Withings integration.",
    url: "https://healthlog.dev",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "HealthLog",
      url: "https://healthlog.dev",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is HealthLog free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, for noncommercial use. HealthLog is source available under the PolyForm Noncommercial 1.0.0 licence. You run it on your own server with a single docker compose up — there is no subscription and no paid tier.",
        },
      },
      {
        "@type": "Question",
        name: "Does HealthLog sync with Apple Health?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The native SwiftUI iOS app (public TestFlight beta) keeps Apple Health (HealthKit) in two-way sync — steps, weight, blood pressure, blood glucose, sleep, and body composition flow straight to your own server. On any platform you can also drop an Apple Health export.zip on the upload page.",
        },
      },
      {
        "@type": "Question",
        name: "Where is my health data stored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entirely on your own infrastructure. HealthLog is self-hosted on PostgreSQL, with all sensitive fields encrypted at rest using AES-256-GCM. There is no cloud dependency, no telemetry, and no third-party analytics.",
        },
      },
      {
        "@type": "Question",
        name: "Which devices and services does HealthLog integrate with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Withings devices (Body+, BPM Connect, ScanWatch) sync over OAuth2 with near-real-time webhooks, and Apple Health syncs live through the iOS app or via export import. AI insights run against OpenAI, Anthropic, your ChatGPT subscription, or a local model (Ollama, LM Studio, vLLM).",
        },
      },
      {
        "@type": "Question",
        name: "Can I connect HealthLog to an AI assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. HealthLog can expose your own record to MCP-compatible assistants such as Claude or ChatGPT over an OAuth-secured Model Context Protocol server. It is off by default and gated behind a module switch; you mint the connector token yourself, read-only or read-and-write, and any write is previewed, confirmed, append-only and audited.",
        },
      },
      {
        "@type": "Question",
        name: "Is HealthLog a medical device?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. HealthLog is a personal health-tracking tool, not a medical device, and it does not diagnose. Screening questionnaires like PHQ-9 and GAD-7 are for self-awareness, not diagnosis, and the AI Coach summarises your own data rather than giving medical advice. Always consult a qualified clinician for medical decisions. Your data stays on your own server.",
        },
      },
    ],
  };

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://healthlog.dev/#org",
        name: "HealthLog",
        url: "https://healthlog.dev",
        logo: {
          "@type": "ImageObject",
          url: "https://healthlog.dev/og-image.png",
        },
        sameAs: ["https://github.com/MBombeck/HealthLog"],
      },
      {
        "@type": "WebSite",
        "@id": "https://healthlog.dev/#website",
        name: "HealthLog",
        url: "https://healthlog.dev",
        publisher: { "@id": "https://healthlog.dev/#org" },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    default: "HealthLog — Self-Hosted Health Tracking App | Open Source PWA",
    template: "%s | HealthLog",
  },
  description:
    "Self-hosted health tracking PWA with medication management, mood tracking, AI-powered insights, and Withings integration. AES-256-GCM encrypted. Docker deploy in minutes. Free and open source.",
  keywords: [
    "self-hosted health tracker",
    "health tracking app",
    "open source health app",
    "medication management",
    "blood pressure tracker",
    "weight tracker",
    "mood tracker",
    "self-hosted PWA",
    "health dashboard",
    "Withings integration",
    "privacy-first health app",
    "Docker health app",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://healthlog.dev",
  },
  openGraph: {
    title: "HealthLog — Self-Hosted Health Tracking with Full Data Ownership",
    description:
      "Track weight, blood pressure, medications, and mood on your own server. AES-256-GCM encrypted, offline-capable PWA. Free and open source.",
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
      "Track weight, blood pressure, medications, and mood on your own server. AES-256-GCM encrypted, open source, Docker-ready.",
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
    operatingSystem: "Web, Docker",
    description:
      "Self-hosted health tracking PWA with medication management, mood tracking, AI-powered insights, and Withings integration. AES-256-GCM encrypted. Free and open source.",
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
    softwareVersion: "1.4.25",
    license: "https://www.gnu.org/licenses/agpl-3.0.html",
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

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
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

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
      "@type": "Person",
      name: "Marc Bombeck",
      url: "https://github.com/MBombeck",
    },
    featureList: [
      "Weight, blood pressure, heart rate, body fat, sleep, steps tracking",
      "Medication management with compliance analytics and reminders",
      "Mood tracking with 5-point scale and tags",
      "AI-powered health insights via OpenAI (BYOK)",
      "Doctor report PDF generation",
      "Withings device synchronization",
      "AES-256-GCM encryption for all sensitive data",
      "Passkey (WebAuthn) authentication",
      "Offline-capable Progressive Web App",
      "CSV and JSON data export",
      "Telegram, ntfy, and Web Push notifications",
    ],
    screenshot: "https://healthlog.dev/og-image.png",
    softwareVersion: "1.0",
    license: "https://www.gnu.org/licenses/agpl-3.0.html",
    inLanguage: ["en", "de"],
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

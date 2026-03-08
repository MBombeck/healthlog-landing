import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://healthlog.dev"),
  title: "HealthLog — Your Health. Your Server.",
  description:
    "Self-hosted health tracking PWA with medication management, mood tracking, AI insights, and Withings integration. Your data stays on your server. AES-256-GCM encrypted.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://healthlog.dev",
  },
  openGraph: {
    title: "HealthLog — Your Health. Your Server.",
    description:
      "Self-hosted health tracking PWA. Weight, blood pressure, medications, mood — all on your own server. AES-256-GCM encrypted.",
    type: "website",
    url: "https://healthlog.dev",
    siteName: "HealthLog",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthLog — Your Health. Your Server.",
    description:
      "Self-hosted health tracking PWA with E2E encryption. Weight, blood pressure, medications, mood — on your server.",
  },
  robots: {
    index: true,
    follow: true,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HealthLog",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    description:
      "Self-hosted health tracking PWA with medication management, mood tracking, AI insights, and Withings integration.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Weight, blood pressure, heart rate, body fat, sleep, steps",
      "Medication management with compliance analytics",
      "Mood tracking (5-point scale)",
      "AI-powered health insights",
      "Doctor report as PDF",
      "Withings device synchronization",
      "AES-256-GCM encryption",
      "Passkey authentication",
      "Offline-capable PWA",
    ],
    inLanguage: "en",
  };

  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

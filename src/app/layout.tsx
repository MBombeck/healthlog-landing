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
  metadataBase: new URL("https://healthlog.ioioio.dev"),
  title: "HealthLog — Deine Gesundheit. Dein Server.",
  description:
    "Self-hosted Health-Tracking PWA mit Medikamentenmanagement, Mood Tracking, KI-Insights und Withings-Integration. Deine Daten bleiben auf deinem Server. AES-256-GCM verschluesselt.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://healthlog.ioioio.dev",
  },
  openGraph: {
    title: "HealthLog — Deine Gesundheit. Dein Server.",
    description:
      "Self-hosted Health-Tracking PWA. Gewicht, Blutdruck, Medikamente, Stimmung — alles auf deinem Server. AES-256-GCM verschluesselt.",
    type: "website",
    url: "https://healthlog.ioioio.dev",
    siteName: "HealthLog",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthLog — Deine Gesundheit. Dein Server.",
    description:
      "Self-hosted Health-Tracking PWA mit E2E-Verschluesselung. Gewicht, Blutdruck, Medikamente, Stimmung — auf deinem Server.",
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
      "Self-hosted Health-Tracking PWA mit Medikamentenmanagement, Mood Tracking, KI-Insights und Withings-Integration.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Gewicht, Blutdruck, Puls, Koerperfett, Schlaf, Schritte",
      "Medikamentenmanagement mit Compliance-Analytik",
      "Mood Tracking (5-Punkte-Skala)",
      "KI-gestuetzte Gesundheitsanalysen",
      "Arztbericht als PDF",
      "Withings-Geraetesynchronisation",
      "AES-256-GCM Verschluesselung",
      "Passkey-Authentifizierung",
      "Offline-faehige PWA",
    ],
    inLanguage: "de",
  };

  return (
    <html lang="de">
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

import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
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
  title: "HealthLog — Deine Gesundheit. Dein Dashboard.",
  description:
    "Self-hosted Health-Tracking PWA mit Medikamentenmanagement, Mood Tracking, KI-Insights und Withings-Integration. Deine Daten bleiben auf deinem Server.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "HealthLog — Deine Gesundheit. Dein Dashboard.",
    description:
      "Self-hosted Health-Tracking PWA. Gewicht, Blutdruck, Medikamente, Stimmung — alles auf deinem Server.",
    type: "website",
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
  return (
    <html lang="de">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { SITE_ORIGIN } from "@/content/learn/locales";

/**
 * Legal notice / Impressum for the marketing site.
 *
 * Provider identification under § 5 TMG and § 18 Abs. 2 MStV for the
 * German-operated site. Self-contained — no auth shell — inheriting the dark
 * Dracula visual language from `globals.css`, matching `/privacy`.
 */

const TITLE = "Imprint";
const DESCRIPTION =
  "Legal notice (Impressum) for HealthLog under § 5 TMG and § 18 Abs. 2 MStV.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://healthlog.dev/imprint" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/imprint`,
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

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-3 sm:scroll-mt-28">
      <h2 className="font-display text-text-primary text-xl font-bold tracking-tight md:text-2xl">
        {title}
      </h2>
      <div className="text-text-secondary space-y-3 text-sm leading-relaxed md:text-base">
        {children}
      </div>
    </section>
  );
}

export default function ImprintPage() {
  return (
    <div className="bg-void text-text-primary relative min-h-dvh overflow-x-clip">
      <div className="noise-overlay" />

      <header
        className="bg-void/80 sticky top-0 z-10 border-b border-[rgba(98,114,164,0.08)] backdrop-blur"
        role="banner"
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 md:px-6">
          <Link
            href="/"
            className="text-text-primary hover:text-purple font-display inline-flex min-h-11 items-center text-sm font-semibold tracking-tight transition-colors"
          >
            HealthLog
          </Link>
          <Link
            href="/privacy"
            className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
          >
            Privacy
          </Link>
        </div>
      </header>

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-3xl space-y-10 px-4 py-10 md:px-6 md:py-16"
      >
        <div className="space-y-3">
          <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
            Impressum / Legal notice
          </p>
          <h1 className="font-display text-text-primary text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
            Imprint
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed">
            Provider identification under § 5 of the German Telemedia Act (TMG)
            and § 18 Abs. 2 of the Interstate Media Treaty (MStV).
          </p>
        </div>

        <Section id="provider" title="Provider">
          <p>The provider responsible for this website is:</p>
          <ul className="list-none space-y-1.5">
            <li>Marc-André Bombeck</li>
            <li>Am Alten Sägewerk 67</li>
            <li>44795 Bochum</li>
            <li>Germany</li>
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Email:{" "}
            <a
              href="mailto:support@healthlog.dev"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              support@healthlog.dev
            </a>
          </p>
        </Section>

        <Section id="responsible" title="Responsible for content">
          <p>Responsible for editorial content under § 18 Abs. 2 MStV:</p>
          <ul className="list-none space-y-1.5">
            <li>Marc-André Bombeck</li>
            <li>Am Alten Sägewerk 67, 44795 Bochum, Germany</li>
          </ul>
        </Section>

        <Section id="status" title="Status">
          <p>
            HealthLog is a private, non-commercial project. There is no VAT
            identification number and no commercial-register entry. Place of
            jurisdiction is Bochum, Germany; the competent court is the
            Amtsgericht Bochum.
          </p>
        </Section>

        <Section id="dispute" title="Dispute resolution">
          <p>
            The operator is neither obliged nor willing to participate in
            dispute-resolution proceedings before a consumer arbitration board
            (§ 36 VSBG).
          </p>
        </Section>

        <Section id="liability" title="Liability for content and links">
          <p>
            HealthLog is source-available software published under the{" "}
            <a
              href="https://polyformproject.org/licenses/noncommercial/1.0.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              PolyForm Noncommercial License 1.0.0
            </a>
            . Self-hosted deployments operated by a different party are the sole
            responsibility of that party. External links point to third-party
            sites whose content the operator does not control and for which no
            liability is assumed.
          </p>
        </Section>

        <footer className="text-text-tertiary mt-12 border-t border-[rgba(98,114,164,0.08)] pt-6 text-xs">
          <p>
            HealthLog — source available under{" "}
            <a
              href="https://github.com/MBombeck/HealthLog/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary underline-offset-2 hover:underline"
            >
              PolyForm Noncommercial 1.0.0
            </a>
            . See also the{" "}
            <Link
              href="/privacy"
              className="hover:text-text-primary underline-offset-2 hover:underline"
            >
              privacy policy
            </Link>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}

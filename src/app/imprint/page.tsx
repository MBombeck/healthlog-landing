import type { Metadata } from "next";
import Link from "next/link";

import { SITE_ORIGIN } from "@/content/learn/locales";

/**
 * Legal notice / Impressum for the marketing site.
 *
 * German law (§ 5 TMG, § 18 Abs. 2 MStV) requires a publicly reachable
 * provider identification for a German-operated commercial-facing site. The
 * page is self-contained — no auth shell, no app navigation — and inherits the
 * dark Dracula visual language from `globals.css`, matching `/privacy`.
 *
 * The operator details are deliberately left as bracketed placeholders. They
 * must be filled in by whoever publishes this instance — no name or address is
 * invented here.
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

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <code className="border-purple/30 bg-surface-raised text-purple my-0.5 inline-block rounded border border-dashed px-1.5 py-0.5 font-mono text-xs">
      {children}
    </code>
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

        <div className="glass-card space-y-2 p-4 text-sm leading-relaxed">
          <p className="text-text-primary font-medium">
            A note on the placeholders below.
          </p>
          <p className="text-text-secondary">
            The bracketed fields, shown as{" "}
            <Placeholder>[ … ]</Placeholder>, are templates. Whoever operates
            this instance must replace each one with their own real provider
            details before publishing. No name or address has been filled in
            here.
          </p>
        </div>

        <Section id="provider" title="Provider (Diensteanbieter)">
          <p>The provider responsible for this website is:</p>
          <ul className="list-none space-y-1.5">
            <li>
              <Placeholder>[ Name des Betreibers ]</Placeholder>
            </li>
            <li>
              <Placeholder>[ Anschrift / Postfach ]</Placeholder>
            </li>
            <li>
              <Placeholder>[ Postleitzahl und Ort ]</Placeholder>
            </li>
            <li>
              <Placeholder>[ Land ]</Placeholder>
            </li>
          </ul>
        </Section>

        <Section id="contact" title="Contact (Kontakt)">
          <p>
            Email:{" "}
            <a
              href="mailto:support@healthlog.dev"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              support@healthlog.dev
            </a>
          </p>
          <p>
            Telephone:{" "}
            <Placeholder>[ Telefonnummer, optional ]</Placeholder>
          </p>
        </Section>

        <Section
          id="responsible"
          title="Responsible for content (Inhaltlich verantwortlich)"
        >
          <p>
            Responsible for editorial content under § 18 Abs. 2 MStV:
          </p>
          <ul className="list-none space-y-1.5">
            <li>
              <Placeholder>[ Verantwortlich i.S.d. § 18 Abs. 2 MStV ]</Placeholder>
            </li>
            <li>
              <Placeholder>[ Anschrift, falls abweichend ]</Placeholder>
            </li>
          </ul>
        </Section>

        <Section id="vat" title="VAT / Register (USt-IdNr. / Register)">
          <p>
            VAT identification number under § 27 a of the German VAT Act
            (UStG), if applicable:
          </p>
          <p>
            <Placeholder>[ USt-IdNr., falls vorhanden ]</Placeholder>
          </p>
          <p>
            Commercial register entry, if applicable:
          </p>
          <p>
            <Placeholder>[ Registergericht und Registernummer, falls vorhanden ]</Placeholder>
          </p>
        </Section>

        <Section id="dispute" title="Dispute resolution (Streitschlichtung)">
          <p>
            The European Commission provides a platform for online dispute
            resolution (ODR):{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              ec.europa.eu/consumers/odr
            </a>
            . The operator is not obliged and generally not willing to
            participate in dispute-resolution proceedings before a consumer
            arbitration board.
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

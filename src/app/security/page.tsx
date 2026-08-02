import type { Metadata } from "next";
import Link from "next/link";

import { SITE_ORIGIN } from "@/content/learn/locales";

/**
 * Marketing security & privacy page.
 *
 * A trust-focused deep page that expands the homepage privacy block: how data
 * is encrypted, how sign-in and tokens work, what self-hosting means in
 * practice, and the deliberate absence of telemetry. Self-contained dark
 * Dracula chrome, minimal top bar, footer back-link. Server component.
 */

const TITLE = "Security & privacy — your data, your server";
const DESCRIPTION =
  "How HealthLog protects health data: AES-256-GCM at rest with versioned key rotation, passkeys, Argon2id and two-factor auth, server-side sessions and hashed API tokens, revocable read access between two accounts that is refused by default on every route, an off-by-default OAuth-scoped AI assistant connector, an encrypted document vault with blind-index search and untrusted-document chat, self-hosting on your own infrastructure, and zero telemetry. Source available.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/security` },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/security`,
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

const LABEL_COLORS: Record<string, string> = {
  purple: "text-purple border-purple/15 bg-purple/[0.03]",
  cyan: "text-cyan border-cyan/15 bg-cyan/[0.03]",
  pink: "text-pink border-pink/15 bg-pink/[0.03]",
  green: "text-green border-green/15 bg-green/[0.03]",
  orange: "text-orange border-orange/15 bg-orange/[0.03]",
};

function SecuritySection({
  id,
  label,
  color,
  title,
  children,
}: {
  id: string;
  label: string;
  color: keyof typeof LABEL_COLORS | string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4 sm:scroll-mt-28">
      <span
        className={`section-label inline-block ${LABEL_COLORS[color] ?? LABEL_COLORS.green}`}
      >
        {label}
      </span>
      <h2 className="font-display text-text-primary text-2xl font-bold tracking-[-0.02em] md:text-3xl">
        {title}
      </h2>
      <div className="text-text-secondary space-y-4 text-sm leading-relaxed md:text-base">
        {children}
      </div>
    </section>
  );
}

const TOC = [
  { id: "self-hosting", label: "Self-hosted by design" },
  { id: "encryption", label: "Encryption at rest" },
  { id: "auth", label: "Passkeys & passwords" },
  { id: "sessions", label: "Sessions & API tokens" },
  { id: "sharing", label: "Shared access" },
  { id: "connector", label: "AI assistant connector" },
  { id: "documents", label: "Document vault" },
  { id: "dedup", label: "Source-priority dedup" },
  { id: "telemetry", label: "No telemetry" },
  { id: "license", label: "Source available" },
];

export default function SecurityPage() {
  return (
    <div className="bg-void text-text-primary relative min-h-dvh overflow-x-clip">
      <div className="noise-overlay" />

      {/* Top bar */}
      <header
        className="bg-void/80 sticky top-0 z-10 border-b border-[rgba(98,114,164,0.08)] backdrop-blur"
        role="banner"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
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
            Privacy policy
          </Link>
        </div>
      </header>

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-3xl space-y-14 px-4 py-12 md:px-6 md:py-20"
      >
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
            Security &amp; privacy
          </p>
          <h1 className="font-display text-text-primary text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Your data, your server
          </h1>
          <p className="text-text-secondary text-base leading-relaxed md:text-lg">
            Health data is about as sensitive as personal data gets, so
            HealthLog is built so that it stays on infrastructure you control,
            encrypted at rest, with no central HealthLog cloud to leak from.
            Here is exactly how that works.
          </p>
        </div>

        {/* Table of contents */}
        <nav
          aria-label="Security contents"
          className="glass-card rounded-md p-5"
        >
          <ol className="grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  className="text-text-secondary hover:text-purple hover:underline"
                  href={`#${item.id}`}
                >
                  <span className="text-text-tertiary font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <SecuritySection
          id="self-hosting"
          label="Self-hosted by design"
          color="green"
          title="No cloud in the middle"
        >
          <p>
            HealthLog runs on your own infrastructure. There is no central
            HealthLog cloud, no shared multi-tenant database, and no analytics
            back-end watching from the side. Nothing leaves your server unless
            you explicitly turn on an outbound integration like a sync provider,
            an AI provider, or a notification channel.
          </p>
          <p>
            Deployment is a single Docker setup backed by PostgreSQL. Run it as
            one container, or split the web and worker processes for larger
            installs. Either way, you are the operator and the data controller.
          </p>
          <div className="glass-card overflow-hidden p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/03-self-hosting-topology.svg"
              alt="Diagram of a self-hosting topology: the HealthLog app and PostgreSQL running on the operator's own server, with optional outbound integrations"
              loading="lazy"
              className="h-auto w-full rounded-md"
            />
            <p className="text-text-tertiary mt-3 px-1 text-xs leading-relaxed">
              A self-hosted topology — app and database on infrastructure you
              control, integrations opt-in.
            </p>
          </div>
        </SecuritySection>

        <SecuritySection
          id="encryption"
          label="Encryption at rest"
          color="purple"
          title="AES-256-GCM with versioned keys"
        >
          <p>
            Sensitive fields are encrypted at the column level with AES-256-GCM,
            using a key kept separate from the database. Integration secrets,
            tokens and other sensitive values never sit in the database as
            plaintext.
          </p>
          <p>
            Keys are versioned, so you can rotate them online without a
            maintenance window: a new key takes over for fresh writes while old
            data re-encrypts in the background. Missing or malformed keys fail
            closed rather than quietly falling back to plaintext.
          </p>
          <div className="glass-card overflow-hidden p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/05-security-model.svg"
              alt="Diagram of the HealthLog security model: encrypted columns, key versioning, authentication, sessions, and hashed tokens"
              loading="lazy"
              className="h-auto w-full rounded-md"
            />
            <p className="text-text-tertiary mt-3 px-1 text-xs leading-relaxed">
              The security model — what is encrypted, what is hashed, and how
              sign-in fits together.
            </p>
          </div>
        </SecuritySection>

        <SecuritySection
          id="auth"
          label="Passkeys & passwords"
          color="cyan"
          title="Phishing-resistant sign-in first"
        >
          <p>
            HealthLog supports passkeys (WebAuthn) as the primary sign-in path —
            phishing-resistant, with nothing to type and nothing to leak. On iOS
            that means Face ID or Touch ID against your own server.
          </p>
          <p>
            Where a password is still needed, it is hashed with Argon2id and
            strength-validated. The plaintext password is never stored and never
            logged.
          </p>
          <p>
            Two-factor authentication is available with TOTP authenticator apps
            or a WebAuthn security key, and sensitive actions — changing your
            password among them — require a fresh second-factor check rather
            than riding on an old session.
          </p>
        </SecuritySection>

        <SecuritySection
          id="sessions"
          label="Sessions & API tokens"
          color="orange"
          title="Server-side sessions, hashed tokens"
        >
          <p>
            Sessions live server-side in PostgreSQL rather than in a token a
            client could replay. The session cookie carries a purpose-generated
            random secret and only its keyed HMAC-SHA-256 hash is stored, so the
            value in the browser exists nowhere on the server. API tokens are
            held the same way — never as plaintext, so a database read alone
            never yields a usable credential.
          </p>
          <p>
            Devices each get their own refresh token with one-time-use rotation.
            If a rotated token is ever reused, that signals theft, and the
            device&apos;s token family is revoked rather than left live. The
            device list identifies each device by an opaque handle that is
            useless as a login.
          </p>
          <p>
            An API token reaches only what its scope names. A token minted for
            one purpose is refused by every endpoint that has not declared it,
            and the refusal is audited.
          </p>
        </SecuritySection>

        <SecuritySection
          id="sharing"
          label="Shared access"
          color="cyan"
          title="A grant between two accounts, refused by default"
        >
          <p>
            One account can give another account on the same instance read
            access to its record. It is a grant, never a shared login: both
            people keep their own password and their own second factor, and the
            permission is a row the server checks rather than a credential
            anybody hands over.
          </p>
          <p>
            The grant is read from the database on every single request, so
            there is no cached verdict to wait out and revocation lands on the
            delegate&apos;s next request rather than at their next login. An
            invitation confers nothing until the person named on it accepts, and
            an unaccepted or lapsed grant fails the same check a revoked one
            does.
          </p>
          <p>
            Every route in the product refuses while a session is acting on
            another account. A route becomes reachable only by declaring itself
            safe to serve under a grant, and the set of declared routes is
            frozen by a test, so a new endpoint cannot quietly widen what a
            delegate reaches. Credentials, connected services, notification
            channels, exports, clinician links and the sharing controls
            themselves are all outside that set, which is why a delegate can
            neither widen their own access nor pass it on nor leave behind a
            door that outlives their revocation.
          </p>
          <p>
            Ending access stamps the grant rather than deleting it, so who had
            access and between which dates stays answerable. What no product can
            do is take back what somebody already read, and nothing in HealthLog
            pretends otherwise.
          </p>
        </SecuritySection>

        <SecuritySection
          id="connector"
          label="AI assistant connector"
          color="purple"
          title="Off by default, scoped by design"
        >
          <p>
            The optional Model Context Protocol server lets an MCP-compatible
            assistant read your record — and, with a write-scoped token, log a
            confirmed entry. It is off until you enable the module, and it stays
            dark unless an instance URL is configured.
          </p>
          <p>
            You mint the connector token yourself, read-only or read-and-write,
            over an OAuth 2.1 flow with PKCE. The token is bound to the
            connector surface alone: it can never write or delete over the REST
            API and can never reach the admin surface. Writes are append-only,
            idempotent, range-bounded and audited.
          </p>
        </SecuritySection>

        <SecuritySection
          id="documents"
          label="Document vault"
          color="green"
          title="Encrypted, indexed blind, shared on a leash"
        >
          <p>
            The optional document vault keeps your letters, reports and scans
            encrypted at rest, alongside the rest of your record. It is off
            until you switch it on, and — as with every AI surface — a document
            is only sent to an AI provider for a read you consented to. By
            default that is one document at a time, on the action you tap.
            Automatic reading is a separate, off-by-default switch; turning it
            on is standing consent, and every document it reaches still
            re-checks that consent and your daily budget. A local reader keeps
            the file on your server entirely.
          </p>
          <p>
            Searching inside your documents runs over an encrypted blind index.
            The index stores tokenised fingerprints of the words, never the
            readable text, so full-text search works without a plaintext copy of
            your medical correspondence sitting in the database.
          </p>
          <p>
            A share link is time-boxed and revocable: you set when it expires
            and you can pull it back at any moment. Photos are stripped of their
            camera metadata — location included — before a shared copy ever
            leaves your server, and the QR code simply carries that same
            short-lived link.
          </p>
          <p>
            Chatting with a document treats that document as untrusted input.
            The conversation is fenced off from your wider health record and
            given no tools, so a prompt hidden inside a letter cannot exfiltrate
            your data or steer the answer. Replies stay grounded in the
            document, cite what they draw on, and explain rather than diagnose.
          </p>
        </SecuritySection>

        <SecuritySection
          id="dedup"
          label="Source-priority dedup"
          color="cyan"
          title="One canonical reading per day"
        >
          <p>
            When several sources report the same metric on the same day, a
            source-priority resolver picks one canonical reading instead of
            stacking three. That keeps your trends honest and avoids the
            double-counting that quietly corrupts a merged health history.
          </p>
          <div className="glass-card overflow-hidden p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/04-source-priority.svg"
              alt="Diagram of source-priority dedup: multiple sources reporting the same day resolve to a single canonical reading"
              loading="lazy"
              className="h-auto w-full rounded-md"
            />
            <p className="text-text-tertiary mt-3 px-1 text-xs leading-relaxed">
              Several sources, one day, one canonical reading.
            </p>
          </div>
        </SecuritySection>

        <SecuritySection
          id="telemetry"
          label="No telemetry"
          color="green"
          title="Nothing watching over your shoulder"
        >
          <p>
            HealthLog ships no telemetry, no analytics SDK, and no third-party
            trackers. There are no advertising identifiers and no cross-app
            tracking. The instance does not phone home, because there is no home
            to phone.
          </p>
        </SecuritySection>

        <SecuritySection
          id="license"
          label="Source available"
          color="purple"
          title="Auditable, line by line"
        >
          <p>
            Every line of HealthLog is published under the{" "}
            <a
              href="https://polyformproject.org/licenses/noncommercial/1.0.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              PolyForm Noncommercial License 1.0.0
            </a>
            , so you can read exactly how your data is handled rather than
            taking a privacy promise on faith. Self-host it, modify it, and
            verify the claims on this page against the code itself.
          </p>
        </SecuritySection>

        {/* CTAs */}
        <section className="border-t border-[rgba(98,114,164,0.08)] pt-12">
          <h2 className="font-display text-text-primary mb-6 text-2xl font-bold tracking-[-0.02em] md:text-3xl">
            Go deeper
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="https://docs.healthlog.dev/security/overview/"
              className="cta-button group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Security docs</span>
            </a>
            <Link href="/privacy" className="cta-secondary group">
              <span>Read the privacy policy</span>
            </Link>
            <a
              href="https://github.com/MBombeck/HealthLog"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Audit the source</span>
            </a>
          </div>
        </section>

        <footer className="text-text-tertiary mt-4 border-t border-[rgba(98,114,164,0.08)] pt-6 text-xs">
          <p>
            <Link
              href="/"
              className="hover:text-text-primary underline-offset-2 hover:underline"
            >
              Back to home
            </Link>{" "}
            ·{" "}
            <Link
              href="/features"
              className="hover:text-text-primary underline-offset-2 hover:underline"
            >
              Features
            </Link>{" "}
            · HealthLog — source available under{" "}
            <a
              href="https://polyformproject.org/licenses/noncommercial/1.0.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary underline-offset-2 hover:underline"
            >
              PolyForm Noncommercial 1.0.0
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}

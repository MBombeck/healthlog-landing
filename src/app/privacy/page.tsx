import type { Metadata } from "next";
import Link from "next/link";

import { SITE_ORIGIN } from "@/content/learn/locales";

/**
 * Public privacy policy for the marketing site.
 *
 * Adapted from the in-app `/privacy` route on the reference instance. The
 * landing variant is self-contained — no auth shell, no app navigation — and
 * inherits the dark Dracula visual language defined in `globals.css`.
 *
 * Driving requirements:
 *
 *   1. Apple App Store Connect requires a publicly reachable Privacy-Policy
 *      URL before iOS submission. `https://healthlog.dev/privacy` is the
 *      stable, brand-aligned URL registered with ASC.
 *   2. GDPR Art. 13 / 14 + Art. 15-22 — data-subject rights enumerated with
 *      concrete endpoints the user can hit.
 *   3. EU MDR 2017/745 + MDCG 2021-24 — the "HealthLog is not a medical
 *      device" boundary is restated next to the AI Coach explanation.
 */

const POLICY_VERSION = "1.4.32";
const LAST_UPDATED = "2026-05-16";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "How HealthLog handles personal-health data, sub-processors, GDPR rights, and the EU MDR medical-device boundary.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://healthlog.dev/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/privacy`,
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
    <section
      id={id}
      className="scroll-mt-24 space-y-3 sm:scroll-mt-28"
    >
      <h2 className="font-display text-text-primary text-xl font-bold tracking-tight md:text-2xl">
        {title}
      </h2>
      <div className="text-text-secondary space-y-3 text-sm leading-relaxed md:text-base">
        {children}
      </div>
    </section>
  );
}

interface SubProcessorProps {
  name: string;
  role: string;
  data: string;
  location: string;
  policyUrl: string;
}

function SubProcessor({
  name,
  role,
  data,
  location,
  policyUrl,
}: SubProcessorProps) {
  return (
    <li className="glass-card space-y-1.5 p-4">
      <p className="text-text-primary font-semibold">{name}</p>
      <p className="text-text-secondary text-sm">
        <span className="text-text-primary font-medium">Role.</span> {role}
      </p>
      <p className="text-text-secondary text-sm">
        <span className="text-text-primary font-medium">Data transferred.</span>{" "}
        {data}
      </p>
      <p className="text-text-secondary text-sm">
        <span className="text-text-primary font-medium">Storage.</span>{" "}
        {location}
      </p>
      <p className="text-sm">
        <a
          href={policyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-cyan underline-offset-2 hover:underline"
        >
          Privacy policy
        </a>
      </p>
    </li>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-void text-text-primary relative min-h-dvh overflow-x-clip">
      <div className="noise-overlay" />

      {/* Top bar — visible home link so an App-Store reviewer can confirm
          the policy belongs to the same brand as the iOS app. */}
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
            href="/support"
            className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
          >
            Support
          </Link>
        </div>
      </header>

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-3xl space-y-10 px-4 py-10 md:px-6 md:py-16"
      >
        <div className="space-y-3">
          <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
            Policy version {POLICY_VERSION}
          </p>
          <h1 className="font-display text-text-primary text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-text-tertiary text-sm">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <details className="glass-card group rounded-md">
          <summary className="text-text-primary hover:text-purple cursor-pointer list-none px-4 py-3 text-sm font-medium transition-colors select-none">
            Contents
            <span
              aria-hidden="true"
              className="text-text-tertiary ml-2 inline-block transition-transform group-open:rotate-90"
            >
              {">"}
            </span>
          </summary>
          <nav
            aria-label="Privacy policy contents"
            className="border-t border-[rgba(98,114,164,0.08)] px-4 py-3"
          >
            <ol className="text-text-secondary space-y-1.5 text-sm leading-relaxed">
              <li>
                <a className="hover:text-purple hover:underline" href="#intro">
                  1. Overview
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#self-hosted"
                >
                  2. Self-hosted by design
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#data-we-collect"
                >
                  3. Data collected
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#purpose"
                >
                  4. Why each category is collected
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#sub-processors"
                >
                  5. Third-party sub-processors
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#storage"
                >
                  6. Storage, encryption, retention
                </a>
              </li>
              <li>
                <a className="hover:text-purple hover:underline" href="#rights">
                  7. Your rights (GDPR Art. 15-22)
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#medical-boundary"
                >
                  8. Medical-device boundary (EU MDR)
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#apple-categories"
                >
                  9. Apple App Store privacy categories
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#children"
                >
                  10. Children
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#changes"
                >
                  11. Changes to this policy
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple hover:underline"
                  href="#contact"
                >
                  12. Contact
                </a>
              </li>
            </ol>
          </nav>
        </details>

        <Section id="intro" title="1. Overview">
          <p>
            HealthLog is a source-available, self-hostable personal-health-tracking
            application released under the{" "}
            <a
              href="https://polyformproject.org/licenses/noncommercial/1.0.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              PolyForm Noncommercial License 1.0.0
            </a>
            . Source code is published at{" "}
            <a
              href="https://github.com/MBombeck/HealthLog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              github.com/MBombeck/HealthLog
            </a>
            .
          </p>
          <p>
            This policy applies to the maintainer-operated reference instance
            and the companion iOS application{" "}
            <em className="text-text-primary not-italic">HealthLog for iOS</em>{" "}
            (bundle identifier{" "}
            <code className="bg-surface-raised text-cyan rounded px-1 py-0.5 font-mono text-xs">
              io.bombeck.healthlog
            </code>
            ). It covers the web application version {POLICY_VERSION} and the
            iOS application version 0.3 and later.
          </p>
          <p>
            Self-hosted deployments controlled by a different operator are
            governed by that operator&apos;s own privacy policy; the document
            below applies to the maintainer-operated instance only.
          </p>
        </Section>

        <Section id="self-hosted" title="2. Self-hosted by design">
          <p>
            HealthLog runs on infrastructure the operator controls. There is no
            central HealthLog cloud, no shared multi-tenant database, and no
            analytics back-end. When a third party installs HealthLog on their
            own server, no data leaves that server unless the operator
            explicitly configures an outbound integration (AI provider,
            Withings sync, Telegram bot, ntfy, push notifications, off-host
            backup target).
          </p>
          <p>
            For a self-hosted install, the operator is the data controller in
            the GDPR sense. The reference instance below describes the
            maintainer&apos;s own deployment; private installations follow the
            same architecture but with the operator&apos;s own retention and
            sub-processor choices.
          </p>
        </Section>

        <Section id="data-we-collect" title="3. Data collected">
          <p>
            HealthLog records observations the user enters themselves and the
            health signals the user has explicitly connected through a
            third-party integration. The categories below are exhaustive for
            the released feature set.
          </p>

          <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
            3.1 Account and authentication
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Email address and chosen username.</li>
            <li>
              Password hash (Argon2id; the plain-text password is never stored
              or logged).
            </li>
            <li>
              Optional WebAuthn / passkey credentials (public key, credential
              ID, sign counter).
            </li>
            <li>
              Session identifiers (HTTP-only cookie on the web; opaque API
              tokens on iOS, stored in the device Keychain).
            </li>
            <li>
              Profile metadata: locale, timezone, date of birth (optional),
              biological sex (optional), height (optional). Used to compute
              age-adjusted target ranges and BMI.
            </li>
          </ul>

          <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
            3.2 Manually entered health data
          </h3>
          <p>
            Any value entered through the in-app forms, including timestamp,
            optional note, and the metric type. Categories include body
            weight, body-fat percentage, body temperature, BMI (derived);
            blood pressure with pulse rate; blood glucose with measurement
            context; resting heart rate, heart-rate variability, VO₂ max,
            oxygen saturation; sleep duration with per-stage breakdown
            (Awake / REM / Core / Deep); step count, distance, active-energy
            burned, flights climbed; environmental and headphone
            audio-exposure levels; time in daylight; mood (1-5 scale) with
            optional free-text note; workout sessions with an optional GPS
            route attached manually; and personal records derived
            automatically from these values.
          </p>

          <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
            3.3 Apple Health (iOS application)
          </h3>
          <p>
            When the user grants the iOS application read access to Apple
            HealthKit, HealthLog reads samples for a fixed set of identifiers
            (body mass, body fat percentage, body temperature, blood pressure
            systolic / diastolic, blood glucose, oxygen saturation, heart rate,
            resting heart rate, heart-rate variability SDNN, VO₂ max, step
            count, active energy burned, flights climbed, walking / running
            distance, environmental and headphone audio exposure, time in
            daylight, and sleep analysis with full per-stage granularity).
            HealthKit data remains on the user&apos;s device and the
            user&apos;s iCloud-backed Health store; the iOS application copies
            relevant samples to the user&apos;s HealthLog account so the web
            surface can render the same trends.
          </p>
          <p>
            Write access is requested for a subset (body mass, blood-pressure
            systolic / diastolic, blood glucose) so manual entries made inside
            the iOS app can flow back into HealthKit. The user controls both
            directions in the iOS Health app&apos;s permission surface and may
            revoke at any time.
          </p>

          <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
            3.4 Withings sync (optional)
          </h3>
          <p>
            When the user connects a Withings account, HealthLog stores the
            OAuth refresh and access tokens (encrypted at the column level)
            and the user&apos;s Withings identifier. Subsequent webhook-driven
            syncs pull body weight and composition, blood pressure, blood
            glucose, body temperature, activity totals, sleep sessions, SpO₂,
            and heart-rate variability where available.
          </p>

          <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
            3.5 Medications
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Active prescriptions: drug name, strength, route, schedule,
              treatment-class flag.
            </li>
            <li>
              Intake events: scheduled time, actual time, status (taken,
              skipped, missed).
            </li>
            <li>
              For GLP-1 treatments: dose-change history, injection events with
              optional injection site and pen identifier, side-effect logs
              against a fixed taxonomy, pen-and-vial inventory.
            </li>
          </ul>

          <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
            3.6 AI Coach and Insights
          </h3>
          <p>
            When the user enables the Coach surface and configures a
            language-model provider, HealthLog sends a snapshot bundle to that
            provider on demand. The bundle contains health context derived
            from the data above (aggregates, recent observations, target
            ranges, optional medication context). The bundle is generated per
            request; HealthLog does not retain long-term conversation state
            beyond the most recent thread. See section 5 for what each
            provider does with the data.
          </p>

          <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
            3.7 Device and integration metadata
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              A device identifier (random UUID generated client-side, stored
              in the iOS Keychain) sent as the{" "}
              <code className="bg-surface-raised text-cyan rounded px-1 py-0.5 font-mono text-xs">
                X-Device-Id
              </code>{" "}
              request header. Used for multi-device sync and abuse prevention.
            </li>
            <li>
              Apple Push Notification service (APNs) device token and
              environment flag, recorded only when the user enables push
              notifications.
            </li>
            <li>
              Telegram chat identifier — only when the user has explicitly
              connected the optional Telegram-bot notifier.
            </li>
          </ul>

          <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
            3.8 Security and audit
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Authentication events: login success / failure, passkey
              registration, password change, session revocation. Retained for
              security forensics.
            </li>
            <li>
              Server access logs: timestamp, request path, status code,
              user-agent, IP address. Retained for 14 days for abuse-rate
              limiting and debugging.
            </li>
          </ul>

          <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
            3.9 Data not collected
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              No third-party advertising identifiers, fingerprints, or
              cross-app tracking.
            </li>
            <li>
              No payment information (the application has no paid tier).
            </li>
            <li>
              No precise background location (workouts only carry GPS when the
              user attaches a route).
            </li>
            <li>No social-network identifiers or contact-list scrapes.</li>
            <li>
              No third-party product analytics. The instance does not ship a
              client-side analytics SDK.
            </li>
          </ul>
        </Section>

        <Section id="purpose" title="4. Why each category is collected">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-text-primary font-medium">
                Authentication data
              </span>{" "}
              — identifying the user and securing the session. Legal basis:
              GDPR Art. 6 (1) (b) performance of contract.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Health data
              </span>{" "}
              — displaying trends, computing target adherence, generating the
              Coach context bundle when the user invokes it. Legal basis: GDPR
              Art. 9 (2) (a) explicit consent for special-category data.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Coach context bundles
              </span>{" "}
              — generating personalised written feedback. The bundle is
              transmitted to the configured provider for the duration of the
              request only.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Device data
              </span>{" "}
              — push notifications, abuse prevention, and multi-device session
              hygiene.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Audit logs
              </span>{" "}
              — security-event tracing and rate-limiting. Legal basis: GDPR
              Art. 6 (1) (f) legitimate interest in operating the service
              securely.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Product analytics
              </span>{" "}
              — none collected.
            </li>
          </ul>
        </Section>

        <Section id="sub-processors" title="5. Third-party sub-processors">
          <p>
            The following providers may process personal data on behalf of the
            maintainer-operated instance. The list is exhaustive for the
            released feature set; sub-processors are only engaged for the
            features the user has explicitly enabled. Self-hosted instances
            run by other operators may use a different set.
          </p>
          <ul className="grid gap-3">
            <SubProcessor
              name="Anthropic, PBC"
              role="AI Coach and Insights provider when the user selects Anthropic Claude in settings."
              data="Coach snapshot bundle (health-data context) for the duration of the request."
              location="United States. Anthropic states a 30-day retention window for abuse-monitoring."
              policyUrl="https://www.anthropic.com/legal/privacy"
            />
            <SubProcessor
              name="OpenAI, L.L.C."
              role="Alternative AI Coach and Insights provider when the user selects an OpenAI model in settings."
              data="Coach snapshot bundle, same shape as the Anthropic variant."
              location="United States. Retention governed by OpenAI's policy applicable to the configured API key."
              policyUrl="https://openai.com/policies/privacy-policy"
            />
            <SubProcessor
              name="Withings SAS"
              role="Wearable-device data sync when the user connects a Withings account."
              data="OAuth refresh and access tokens, Withings user identifier, webhook notifications about new measurements."
              location="France (European Union)."
              policyUrl="https://www.withings.com/de/de/legal/privacy-policy"
            />
            <SubProcessor
              name="Apple, Inc."
              role="HealthKit (on-device store; samples never leave the user's device or iCloud unless the user grants read access to HealthLog) and Apple Push Notification service (when notifications are enabled)."
              data="HealthKit access is local to the device. APNs receives a device token, the application bundle identifier, and the notification payload."
              location="United States. HealthKit data lives on the user's device and iCloud-encrypted backups under the user's Apple ID."
              policyUrl="https://www.apple.com/legal/privacy/"
            />
            <SubProcessor
              name="Telegram FZ-LLC"
              role="Optional notification channel when the user enables the Telegram-bot integration."
              data="Telegram chat identifier and the notification payload."
              location="United Arab Emirates / Telegram global infrastructure."
              policyUrl="https://telegram.org/privacy"
            />
            <SubProcessor
              name="GitHub, Inc."
              role="Hosting of the public source repository and the issue tracker used as the support channel."
              data="Issue contents and any voluntary attachments. Avoid posting personal data in public issues; a private channel is offered after the first response."
              location="United States."
              policyUrl="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            />
            <SubProcessor
              name="Cloudflare, Inc."
              role="Authoritative DNS for the healthlog.dev zone."
              data="Source IP address and user-agent at DNS resolution time."
              location="United States; Cloudflare's standard global anycast network."
              policyUrl="https://www.cloudflare.com/privacypolicy/"
            />
            <SubProcessor
              name="Hetzner Online GmbH"
              role="Hardware host for the application server and the PostgreSQL database."
              data="Disk and network traffic between the operator-controlled virtual machines and the public internet."
              location="Germany (European Union). All HealthLog application data on the reference instance lives on Hetzner-hosted infrastructure under German jurisdiction."
              policyUrl="https://www.hetzner.com/legal/privacy-policy"
            />
          </ul>
        </Section>

        <Section id="storage" title="6. Storage, encryption, retention">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Primary data store: PostgreSQL on a Hetzner-hosted server in
              Germany. Disk encrypted at rest. Sensitive columns
              (authentication tokens, integration secrets) are individually
              encrypted at the column level using AES-256-GCM with a key
              separate from the database key.
            </li>
            <li>
              Encryption keys are versioned and rotatable online without a
              maintenance window.
            </li>
            <li>
              API tokens are stored as keyed HMAC-SHA-256 hashes, never in
              plaintext.
            </li>
            <li>
              Backups: daily, encrypted, retained for 30 days on an
              S3-compatible object store with its own encryption-at-rest layer.
            </li>
            <li>
              Retention: account data is retained until the user requests
              erasure (see section 7) or the account is administratively
              closed. Audit logs are retained for 90 days; server access logs
              for 14 days.
            </li>
            <li>
              Deletion: the account-deletion endpoint cascades through every
              user-scoped table — health observations, sessions, audit log,
              integration tokens, notification subscriptions, achievements,
              uploaded files. Deletion is immediate; backups age out under the
              30-day window above.
            </li>
          </ul>
        </Section>

        <Section id="rights" title="7. Your rights (GDPR Art. 15-22)">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-text-primary font-medium">
                Right of access (Art. 15)
              </span>{" "}
              — every value the application has stored is reachable through the
              in-app history surfaces. A consolidated JSON export is offered
              under <em className="not-italic">Settings → Data &amp; export</em>.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Right to rectification (Art. 16)
              </span>{" "}
              — every record carries an in-app edit and delete action.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Right to erasure (Art. 17)
              </span>{" "}
              —{" "}
              <em className="not-italic">
                Settings → Account → Delete account
              </em>
              . The action cascades immediately through user-scoped tables;
              backups age out within the 30-day window described in section 6.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Right to restriction of processing (Art. 18)
              </span>{" "}
              — request an administrative suspension by opening a GDPR issue
              (see section 12).
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Right to data portability (Art. 20)
              </span>{" "}
              — the JSON export under{" "}
              <em className="not-italic">Settings → Data &amp; export</em>{" "}
              returns the full record set in a structured, machine-readable
              format.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Right to object to automated decision-making (Art. 22)
              </span>{" "}
              — the AI Coach does not make automated decisions in the Art. 22
              sense. It generates written suggestions for the user to read; no
              action is taken on the user&apos;s behalf without explicit
              confirmation.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Right to lodge a complaint
              </span>{" "}
              — with the Federal Commissioner for Data Protection and Freedom
              of Information (BfDI) for the German federal level, or with the
              data-protection authority of the user&apos;s habitual residence.
            </li>
          </ul>
        </Section>

        <Section
          id="medical-boundary"
          title="8. Medical-device boundary (EU MDR 2017/745, MDCG 2021-24)"
        >
          <p>
            HealthLog is{" "}
            <strong className="text-text-primary">not a medical device</strong>{" "}
            within the meaning of EU Regulation 2017/745 (MDR). The
            application records and displays observations the user has
            entered; it does not diagnose, treat, prescribe, or monitor a
            specific medical condition.
          </p>
          <p>
            The AI Coach surface is constrained by explicit ground rules in
            its system prompt: it does not recommend GLP-1 doses, and it does
            not produce drug-level estimates. The GLP-1 Research Mode chart is
            a display-only visualisation gated behind a versioned
            acknowledgment that cites the MDR boundary to the user before
            unlocking. None of these surfaces issue clinical recommendations.
          </p>
          <p>
            For medical advice the user must consult a licensed clinician.
            HealthLog is intended to support that conversation by surfacing
            self-tracked data — not to replace it.
          </p>
        </Section>

        <Section
          id="apple-categories"
          title="9. Apple App Store privacy categories"
        >
          <p>
            The iOS application&apos;s Privacy Nutrition Labels in App Store
            Connect map to the following categories:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="text-text-primary font-medium">
                Health &amp; Fitness
              </span>{" "}
              — linked to the user; used for app functionality.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Sensitive Info
              </span>{" "}
              (blood pressure, glucose, medications) — linked to the user;
              used for app functionality.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Contact Info
              </span>{" "}
              (email address) — linked to the user; used for app functionality
              and account management.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                User Content
              </span>{" "}
              (notes attached to measurements, mood notes, bug-report text) —
              linked to the user; used for app functionality.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Identifiers
              </span>{" "}
              (device identifier, user identifier) — linked to the user; used
              for app functionality.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Diagnostics
              </span>{" "}
              — not collected.
            </li>
            <li>
              <span className="text-text-primary font-medium">Usage Data</span>{" "}
              — not collected.
            </li>
            <li>
              <span className="text-text-primary font-medium">Location</span>{" "}
              — not collected, except for an optional GPS route the user
              attaches manually to a workout.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Browsing History
              </span>{" "}
              — not collected.
            </li>
            <li>
              <span className="text-text-primary font-medium">
                Search History
              </span>{" "}
              — not collected.
            </li>
            <li>
              <span className="text-text-primary font-medium">Other Data</span>{" "}
              — not collected.
            </li>
          </ul>
        </Section>

        <Section id="children" title="10. Children">
          <p>
            HealthLog is not directed at children under the age of 16. The
            application should not be used by anyone under 16 without
            verifiable parental supervision. The operator does not knowingly
            collect personal data from children under 16; if such data is
            discovered, it will be deleted on detection.
          </p>
        </Section>

        <Section id="changes" title="11. Changes to this policy">
          <p>
            This document is version-stamped at the top. Material changes are
            summarised in the in-app release notes and on the public
            changelog. The published policy version is bound to the
            application release version that introduced it.
          </p>
        </Section>

        <Section id="contact" title="12. Contact">
          <p>
            For privacy questions and data-subject requests, open a public
            issue at{" "}
            <a
              href="https://github.com/MBombeck/HealthLog/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              github.com/MBombeck/HealthLog/issues
            </a>{" "}
            titled{" "}
            <em className="not-italic">
              GDPR — &lt;Access | Erasure | Portability&gt; request
            </em>
            . Do not include personal data in the public issue. A private
            channel for the actual exchange is provided in the first response.
          </p>
          <p>
            General support questions belong on the{" "}
            <Link
              href="/support"
              className="text-purple hover:text-cyan underline-offset-2 hover:underline"
            >
              support page
            </Link>
            .
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
            . Policy version {POLICY_VERSION}. Last updated {LAST_UPDATED}.
          </p>
        </footer>
      </main>
    </div>
  );
}

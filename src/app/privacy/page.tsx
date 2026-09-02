import type { Metadata } from "next";
import Link from "next/link";

import { SITE_ORIGIN } from "@/content/learn/locales";
import {
  LAST_UPDATED,
  POLICY_VERSION,
  PRIVACY_PATH_DE,
  PRIVACY_PATH_EN,
  privacyHreflang,
} from "@/content/privacy/meta";
import {
  Code,
  ExternalLink,
  PrivacyShell,
  Section,
  SubHeading,
  SubProcessor,
  type SubProcessorLabels,
} from "@/components/privacy/privacy-layout";

/**
 * Public privacy policy for the marketing site (English).
 *
 * The German rendering lives at `/de/privacy` and carries the same thirteen
 * sections under the same anchors, so a reader can switch language without
 * losing their place.
 *
 * Driving requirements:
 *
 *   1. Apple App Store Connect requires a publicly reachable Privacy-Policy
 *      URL before iOS submission. `https://healthlog.dev/privacy` is the
 *      stable, brand-aligned URL registered with ASC.
 *   2. GDPR Art. 13 / 14 + Art. 15-22: data-subject rights enumerated with
 *      concrete endpoints the user can hit.
 *   3. EU MDR 2017/745 + MDCG 2021-24: the "HealthLog is not a medical
 *      device" boundary is restated next to the AI Coach explanation.
 */

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "How HealthLog handles personal-health data, sub-processors, GDPR rights, and the EU MDR medical-device boundary.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_ORIGIN}${PRIVACY_PATH_EN}`,
    languages: privacyHreflang(),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}${PRIVACY_PATH_EN}`,
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

const LABELS: SubProcessorLabels = {
  role: "Role.",
  data: "Data transferred.",
  location: "Storage.",
  policy: "Privacy policy",
};

const TOC = [
  { href: "#intro", label: "1. Overview" },
  { href: "#self-hosted", label: "2. Self-hosted by design" },
  { href: "#website-analytics", label: "3. This website (healthlog.dev)" },
  { href: "#data-we-collect", label: "4. Data collected" },
  { href: "#purpose", label: "5. Why each category is collected" },
  { href: "#sub-processors", label: "6. Third-party sub-processors" },
  { href: "#storage", label: "7. Storage, encryption, retention" },
  { href: "#rights", label: "8. Your rights (GDPR Art. 15-22)" },
  { href: "#medical-boundary", label: "9. Medical-device boundary (EU MDR)" },
  { href: "#apple-categories", label: "10. Apple App Store privacy categories" },
  { href: "#children", label: "11. Children" },
  { href: "#changes", label: "12. Changes to this policy" },
  { href: "#contact", label: "13. Contact" },
];

export default function PrivacyPage() {
  return (
    <PrivacyShell
      supportLabel="Support"
      switchHref={PRIVACY_PATH_DE}
      switchLabel="Deutsch"
      switchHrefLang="de"
      versionLine={`Policy version ${POLICY_VERSION}`}
      heading="Privacy Policy"
      updatedLine={`Last updated: ${LAST_UPDATED}`}
      tocLabel="Contents"
      tocAriaLabel="Privacy policy contents"
      toc={TOC}
      footer={
        <p>
          HealthLog, source available under{" "}
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
      }
    >
      <Section id="intro" title="1. Overview">
        <p>
          HealthLog is a source-available, self-hostable
          personal-health-tracking application released under the{" "}
          <ExternalLink href="https://polyformproject.org/licenses/noncommercial/1.0.0/">
            PolyForm Noncommercial License 1.0.0
          </ExternalLink>
          . Source code is published at{" "}
          <ExternalLink href="https://github.com/MBombeck/HealthLog">
            github.com/MBombeck/HealthLog
          </ExternalLink>
          .
        </p>
        <p>
          This policy applies to the maintainer-operated reference instance and
          the companion iOS application{" "}
          <em className="text-text-primary not-italic">HealthLog for iOS</em>{" "}
          (bundle identifier <Code>io.bombeck.healthlog</Code>). It covers the
          web application version {POLICY_VERSION} and the iOS application
          version 0.3 and later. Section 3 covers this marketing website,
          healthlog.dev, which is operated separately from the application.
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
          third-party analytics back-end. When somebody installs HealthLog on
          their own server, no data leaves that server unless the operator
          explicitly configures an outbound integration (an AI provider, a
          device sync, a Telegram bot, ntfy, push notifications, an off-host
          backup target). Section 6 lists every such destination.
        </p>
        <p>
          A user may also give another account on the same instance access to
          their own record. That disclosure happens only on the user&apos;s own
          instruction, only once the other person has accepted it, only at the
          level the invitation named and only over the parts of the record it
          named, stays inside the same server, and can be withdrawn by either
          party at any time with effect on the recipient&apos;s next request.
          Neither the level nor the extent can be raised on an access already
          granted; a wider access requires a new invitation, accepted again. It
          adds no recipient outside the instance and no sub-processor.
        </p>
        <p>
          The second level lets the recipient add entries to the record from a
          closed list, and does not let them change or remove anything already
          recorded. The third lets them change and remove entries as well,
          including ones the record owner made, and record the health
          background held with the record. No level widens what the recipient
          may read beyond the parts the invitation named, and no level reaches
          the account around the record: credentials, second factor, connected
          services, API tokens, notification routing, module and threshold
          configuration, exports, and who else has access all stay with the
          account holder. Entries made under an access are stored as the record
          owner&apos;s own data, since they describe the owner rather than the
          person who entered them, and the identity of that person is retained
          in the audit log, which the owner can inspect and which is deleted on
          the instance&apos;s configured audit-retention schedule. The interface
          states that retention period to the owner rather than implying an
          unlimited one.
        </p>
        <p>
          An instance may also hold a record for a person who has no account of
          their own, such as a child or somebody in the user&apos;s care. Such a
          record has no login, no e-mail address and no authentication
          credential of any kind, and it is administered by one or more
          guardians who each hold an access of the third level over it. Data in
          it is processed on the same basis and on the same infrastructure as
          any other record on the instance. Notifications it generates are
          delivered to its guardians on the channels those guardians have
          themselves enabled, because the record has no contact channel of its
          own. Deleting the record erases the data held in it.
        </p>
        <p>
          For a self-hosted install, the operator is the data controller in the
          GDPR sense. The reference instance below describes the
          maintainer&apos;s own deployment; private installations follow the
          same architecture but with the operator&apos;s own retention and
          sub-processor choices.
        </p>
      </Section>

      <Section id="website-analytics" title="3. This website (healthlog.dev)">
        <p>
          This marketing website is operated separately from the application
          described above and stores nothing on the visitor&apos;s device: no
          cookies, no local storage, no advertising or cross-site identifiers,
          and therefore no consent banner.
        </p>
        <p>
          Aggregate visit statistics are collected with{" "}
          <ExternalLink href="https://umami.is">Umami</ExternalLink>, a
          cookieless analytics tool running on the maintainer&apos;s own server;
          no analytics data reaches a third-party provider. Recorded per visit
          are the page address, the referring address, browser, operating
          system, device type and country. Visitors are counted through a hash
          that is re-salted every day, so the raw IP address is never stored and
          no visitor can be identified or followed from one day to the next.
          Legal basis: GDPR Art. 6 (1) (f), the legitimate interest in knowing
          which pages are actually read. Because nothing is read from or written
          to the visitor&apos;s device, consent under TTDSG § 25 is not
          required.
        </p>
        <p>
          The application ships no third-party analytics SDK and no telemetry.
          The reference instance serves the same cookieless Umami script through
          its own origin and forwards the events server-side to the
          maintainer&apos;s Umami installation, so the analytics host never sees
          a request from the visitor&apos;s browser. An instance you host
          yourself has this switched off until its operator turns it on, and it
          never contacts this website.
        </p>
      </Section>

      <Section id="data-we-collect" title="4. Data collected">
        <p>
          HealthLog records observations the user enters themselves and the
          health signals the user has explicitly connected through a
          third-party integration. The categories below are exhaustive for the
          released feature set.
        </p>

        <SubHeading>4.1 Account and authentication</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>Email address and chosen username.</li>
          <li>
            Password hash (Argon2id; the plain-text password is never stored or
            logged).
          </li>
          <li>
            Optional WebAuthn / passkey credentials (public key, credential ID,
            sign counter).
          </li>
          <li>
            Session identifiers (HTTP-only cookie on the web; opaque API tokens
            on iOS, stored in the device Keychain).
          </li>
          <li>
            Profile metadata: locale, timezone, date of birth (optional),
            biological sex (optional), height (optional). Used to compute
            age-adjusted target ranges and BMI.
          </li>
          <li>
            When a password is set or changed, the first five characters of its
            SHA-1 hash are checked against the Have I Been Pwned range API. See
            section 6 for what that means in practice.
          </li>
        </ul>

        <SubHeading>4.2 Manually entered health data</SubHeading>
        <p>
          Any value entered through the in-app forms, including timestamp,
          optional note, and the metric type. Categories include body weight,
          body-fat percentage, body temperature, BMI (derived); blood pressure
          with pulse rate; blood glucose with measurement context; resting heart
          rate, heart-rate variability, VO₂ max, oxygen saturation; sleep
          duration with per-stage breakdown (Awake / REM / Core / Deep); step
          count, distance, active-energy burned, flights climbed; environmental
          and headphone audio-exposure levels; time in daylight; mood (1-5
          scale) with optional free-text note; workout sessions with an optional
          GPS route attached manually; and personal records derived
          automatically from these values.
        </p>

        <SubHeading>4.3 Apple Health (iOS application)</SubHeading>
        <p>
          When the user grants the iOS application read access to Apple
          HealthKit, HealthLog reads samples for a fixed set of identifiers
          (body mass, body fat percentage, body temperature, blood pressure
          systolic / diastolic, blood glucose, oxygen saturation, heart rate,
          resting heart rate, heart-rate variability SDNN, VO₂ max, step count,
          active energy burned, flights climbed, walking / running distance,
          environmental and headphone audio exposure, time in daylight, and
          sleep analysis with full per-stage granularity). HealthKit data
          remains on the user&apos;s device and the user&apos;s iCloud-backed
          Health store; the iOS application copies relevant samples to the
          user&apos;s HealthLog account so the web surface can render the same
          trends.
        </p>
        <p>
          Write access is requested for a subset (body mass, blood-pressure
          systolic / diastolic, blood glucose) so manual entries made inside the
          iOS app can flow back into HealthKit. The user controls both
          directions in the iOS Health app&apos;s permission surface and may
          revoke at any time.
        </p>

        <SubHeading>4.4 Connected devices and services (optional)</SubHeading>
        <p>
          Each connection is opt-in and is established by the user through that
          provider&apos;s own OAuth consent screen. HealthLog stores the OAuth
          refresh and access tokens (encrypted at the column level) and the
          identifier the provider assigns to the account, then pulls the data
          the granted scope covers: Withings (body weight and composition,
          blood pressure, blood glucose, body temperature, activity totals,
          sleep sessions, SpO₂, heart-rate variability, ECG recordings where
          available), WHOOP (recovery, sleep, workouts, cycles, profile, body
          measurements), Fitbit (activity, cardio fitness, heart rate, oxygen
          saturation, respiratory rate, sleep, weight, profile), Google Health
          (activity and fitness, health metrics and measurements, sleep,
          profile), Oura (daily summaries and profile), Polar (the Accesslink
          read collections), Strava (activities, including those marked
          private), and Nightscout (sensor glucose values from the
          user&apos;s own Nightscout instance). A connection can be revoked in
          HealthLog and at the provider; revoking stops further syncing.
        </p>

        <SubHeading>4.5 Medications</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Active prescriptions: drug name, strength, route, schedule,
            treatment-class flag.
          </li>
          <li>
            Intake events: scheduled time, actual time, status (taken, skipped,
            missed).
          </li>
          <li>
            For GLP-1 treatments: dose-change history, injection events with
            optional injection site and pen identifier, side-effect logs against
            a fixed taxonomy, pen-and-vial inventory.
          </li>
        </ul>

        <SubHeading>4.6 AI Coach and Insights</SubHeading>
        <p>
          When the user enables the Coach surface and configures a
          language-model provider, HealthLog sends a snapshot bundle to that
          provider on demand. The bundle contains health context derived from
          the data above (aggregates, recent observations, target ranges,
          optional medication context) and is built fresh for each request. See
          section 6 for what each provider does with the data.
        </p>
        <p>
          Coach conversations are stored on the instance. Each message is held
          in the database encrypted at rest with AES-256-GCM, under a key
          separate from the database itself, and is decrypted only to render the
          thread to the user or to continue it. Three further artefacts are
          derived from a conversation and stored the same way: a rolling summary
          of the older turns of that thread, so a long conversation keeps its
          own context without every turn being re-sent; short durable facts the
          user has stated about themselves, such as a standing preference or
          goal; and if-then plans the user has agreed to, which are recorded as
          proposals and only become active when the user confirms them. These
          are produced in the background by the same language-model provider the
          user configured, from the turns of that conversation, and they are
          used only to continue the Coach conversation. They are not used to
          train any model, not shared with other users, and not sent anywhere
          else.
        </p>
        <p>
          The user can delete an individual conversation, an individual fact and
          an individual plan in the app, which removes the stored text; deleting
          the account removes all of it. Until v1.38 this section claimed the
          Coach kept no long-term conversation state, which was never what the
          software did.
        </p>

        <SubHeading>4.7 Device and integration metadata</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            A device identifier (random UUID generated client-side, stored in
            the iOS Keychain) sent as the <Code>X-Device-Id</Code> request
            header. Used for multi-device sync and abuse prevention.
          </li>
          <li>
            Apple Push Notification service (APNs) device token and environment
            flag, recorded only when the user enables push notifications.
          </li>
          <li>
            Web Push subscription details (the endpoint URL the browser issues
            and its two public keys), recorded only when the user subscribes a
            browser.
          </li>
          <li>
            Telegram chat identifier, ntfy server address and topic, or an
            outbound webhook URL, each only when the user has explicitly
            connected that notification channel.
          </li>
          <li>
            Home location for the optional environmental-context module: a
            place the user picks, stored as coordinates rounded to two decimal
            places (roughly one kilometre) together with its timezone.
          </li>
        </ul>

        <SubHeading>4.8 Security and audit</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Authentication events: login success / failure, passkey
            registration, password change, session revocation. Retained for
            security forensics.
          </li>
          <li>
            Server access logs: timestamp, request path, status code,
            user-agent, IP address. Retained for 14 days for abuse-rate limiting
            and debugging.
          </li>
          <li>
            The IP address of a sign-in is resolved to a coarse location and
            network operator so the security page can show the user where their
            sessions came from. On the reference instance that resolution is an
            outbound lookup; see section 6.
          </li>
        </ul>

        <SubHeading>4.9 Data not collected</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            No third-party advertising identifiers, fingerprints, or cross-app
            tracking.
          </li>
          <li>No payment information (the application has no paid tier).</li>
          <li>
            No precise background location (workouts only carry GPS when the
            user attaches a route, and the environmental module stores only a
            coarse home location).
          </li>
          <li>No social-network identifiers or contact-list scrapes.</li>
          <li>
            No third-party product analytics. The application ships no
            client-side analytics SDK, and the optional Umami statistics
            described in section 3 go to an installation the operator runs.
          </li>
        </ul>
      </Section>

      <Section id="purpose" title="5. Why each category is collected">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-text-primary font-medium">
              Authentication data
            </span>
            : identifying the user and securing the session. Legal basis: GDPR
            Art. 6 (1) (b) performance of contract.
          </li>
          <li>
            <span className="text-text-primary font-medium">Health data</span>:
            displaying trends, computing target adherence, generating the Coach
            context bundle when the user invokes it. Legal basis: GDPR Art. 9
            (2) (a) explicit consent for special-category data.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Coach context bundles and stored conversations
            </span>
            : generating personalised written feedback and continuing a thread
            the user started. The bundle is transmitted to the configured
            provider for the duration of the request; the conversation stays on
            the instance, encrypted.
          </li>
          <li>
            <span className="text-text-primary font-medium">Device data</span>:
            push notifications, abuse prevention, and multi-device session
            hygiene.
          </li>
          <li>
            <span className="text-text-primary font-medium">Audit logs</span>:
            security-event tracing and rate-limiting. Legal basis: GDPR Art. 6
            (1) (f) legitimate interest in operating the service securely.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Password-breach check and sign-in geolocation
            </span>
            : protecting accounts against credential stuffing and letting a user
            recognise a session that is not theirs. Legal basis: GDPR Art. 6 (1)
            (f) legitimate interest in operating the service securely. Both are
            operator defaults rather than user choices, and both can be switched
            off by the operator.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Weather context
            </span>
            : relating self-tracked values to the conditions of the day, for the
            users who enable the environmental module.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Product analytics
            </span>
            : none collected by a third party.
          </li>
        </ul>
      </Section>

      <Section id="sub-processors" title="6. Third-party sub-processors">
        <p>
          The following providers may process personal data on behalf of the
          maintainer-operated instance. The list is exhaustive for the released
          feature set. Everything under &quot;connected devices and
          services&quot; and every AI provider is engaged only for a feature the
          user has explicitly enabled; the password-breach check, the sign-in
          geolocation and the infrastructure entries are operator defaults that
          apply without a per-user choice. Self-hosted instances run by other
          operators may use a different set.
        </p>
        <ul className="grid gap-3">
          <SubProcessor
            labels={LABELS}
            name="Anthropic, PBC"
            role="AI Coach and Insights provider when the user selects Anthropic Claude in settings. Requires the user's explicit AI consent."
            data="Coach snapshot bundle (health-data context) and the turns of the conversation, for the duration of the request."
            location="United States. Anthropic states a 30-day retention window for abuse-monitoring."
            policyUrl="https://www.anthropic.com/legal/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="OpenAI, L.L.C. (API key)"
            role="Alternative AI Coach and Insights provider when the user selects an OpenAI model in settings. Requires the user's explicit AI consent."
            data="Coach snapshot bundle, same shape as the Anthropic variant."
            location="United States. Retention governed by OpenAI's policy applicable to the configured API key."
            policyUrl="https://openai.com/policies/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="OpenAI, L.L.C. (ChatGPT account)"
            role="Third way to reach a model: instead of an API key, the user signs in to their own ChatGPT account and HealthLog talks to the ChatGPT backend on that account's behalf. The sign-in itself runs against auth.openai.com. Requires the user's explicit AI consent."
            data="The OAuth tokens of that ChatGPT account (encrypted at rest on the instance), the ChatGPT account identifier, and the same Coach snapshot bundle and conversation turns as above."
            location="United States. Usage falls under the terms of the user's own ChatGPT plan."
            policyUrl="https://openai.com/policies/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="Withings SAS"
            role="Device data sync when the user connects a Withings account."
            data="OAuth refresh and access tokens, Withings user identifier, webhook notifications about new measurements, and the measurements themselves."
            location="France (European Union)."
            policyUrl="https://www.withings.com/de/de/legal/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="WHOOP, Inc."
            role="Device data sync when the user connects a WHOOP account. Scope requested: recovery, sleep, workouts, cycles, profile, body measurements."
            data="OAuth tokens, the WHOOP user identifier, and the records covered by that scope."
            location="Provider-operated infrastructure. The integration does not pin a region."
            policyUrl="https://www.whoop.com/privacy/"
          />
          <SubProcessor
            labels={LABELS}
            name="Fitbit (Google LLC)"
            role="Device data sync when the user connects a Fitbit account. Scope requested: activity, cardio fitness, heart rate, oxygen saturation, respiratory rate, sleep, weight, profile."
            data="OAuth tokens, the Fitbit user identifier, and the records covered by that scope."
            location="Provider-operated infrastructure. The integration does not pin a region."
            policyUrl="https://www.fitbit.com/global/en/legal/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="Google LLC (Google Health)"
            role="Device data sync when the user connects Google Health. Scope requested: activity and fitness, health metrics and measurements, sleep, profile, all read-only."
            data="OAuth tokens, the Google account identifier used for the grant, and the records covered by that scope."
            location="Provider-operated infrastructure. The integration does not pin a region."
            policyUrl="https://policies.google.com/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="Oura Health Oy"
            role="Device data sync when the user connects an Oura account. Scope requested: daily summaries and profile."
            data="OAuth tokens, the Oura user identifier, and the records covered by that scope."
            location="Provider-operated infrastructure. The integration does not pin a region."
            policyUrl="https://ouraring.com/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="Polar Electro Oy"
            role="Device data sync when the user connects a Polar account through Polar AccessLink."
            data="OAuth tokens, the Polar user identifier, and the training and activity records AccessLink returns."
            location="Provider-operated infrastructure. The integration does not pin a region."
            policyUrl="https://www.polar.com/en/legal/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="Strava, Inc."
            role="Workout sync when the user connects a Strava account. Scope requested: read all activities, including those the user has marked private."
            data="OAuth tokens, the Strava athlete identifier, and the activities themselves."
            location="Provider-operated infrastructure. The integration does not pin a region."
            policyUrl="https://www.strava.com/legal/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="Nightscout instance (operated by the user)"
            role="Continuous-glucose sync when the user points HealthLog at a Nightscout server. Nightscout is not a company: the address is the one the user enters, usually a server they run themselves."
            data="The Nightscout API secret or access token (encrypted at rest on the instance) and, on each sync, a read request for sensor glucose values."
            location="Wherever the user hosts that Nightscout instance."
            policyUrl="https://nightscout.github.io/"
          />
          <SubProcessor
            labels={LABELS}
            name="Apple, Inc."
            role="HealthKit (on-device store; samples never leave the user's device or iCloud unless the user grants read access to HealthLog) and Apple Push Notification service (when notifications are enabled)."
            data="HealthKit access is local to the device. APNs receives a device token, the application bundle identifier, and the notification payload."
            location="United States. HealthKit data lives on the user's device and iCloud-encrypted backups under the user's Apple ID."
            policyUrl="https://www.apple.com/legal/privacy/"
          />
          <SubProcessor
            labels={LABELS}
            name="Telegram FZ-LLC"
            role="Optional notification channel when the user enables the Telegram-bot integration."
            data="Telegram chat identifier and the notification payload."
            location="United Arab Emirates / Telegram global infrastructure."
            policyUrl="https://telegram.org/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="ntfy server (address supplied by the user)"
            role="Optional notification channel. HealthLog posts each notification to the server address and topic the user entered, which may be the public ntfy.sh service or an ntfy instance the user or the operator runs."
            data="The notification text (title and message, stripped of markup), its priority and tags, and the topic name. An optional access token the user stored is sent as the authorisation header."
            location="Wherever the entered server is hosted. Anyone who knows a public topic name can read messages posted to it, so the notification text is kept short and the discreet mode omits detail."
            policyUrl="https://docs.ntfy.sh/privacy/"
          />
          <SubProcessor
            labels={LABELS}
            name="Web Push service of the user's browser vendor"
            role="Optional notification channel when the user subscribes a browser. The browser itself names the push endpoint (Mozilla, Google, Apple or Microsoft, depending on the browser), and HealthLog can only deliver to the endpoint it was given."
            data="The notification payload, encrypted for that subscription with the browser-supplied keys before it leaves the server, plus the VAPID signature identifying this instance as the sender. The push service can see the endpoint and the size and timing of the message, not its content."
            location="Operated by the browser vendor."
            policyUrl="https://datatracker.ietf.org/doc/html/rfc8291"
          />
          <SubProcessor
            labels={LABELS}
            name="Outbound webhook (address supplied by the user)"
            role="Optional notification channel for a relay the user runs or subscribes to, such as Gotify, a chat bridge or a home-automation system."
            data="A small JSON envelope with the notification title, plain-text message and event type, plus one optional header the user configured (typically a shared secret)."
            location="Wherever the entered URL points. Private and loopback addresses are refused."
            policyUrl="https://github.com/MBombeck/HealthLog"
          />
          <SubProcessor
            labels={LABELS}
            name="Have I Been Pwned (Pwned Passwords range API)"
            role="Checks a new password against known breach corpora when an account is registered, when a user changes their password, and when an administrator resets one. Nobody enables this: it is an operator default. The check is fail-open, so an unreachable service never blocks a password change."
            data="The first five characters of the SHA-1 hash of the password, and nothing else. The remaining 35 characters are compared on the server, so neither the full hash nor the password leaves the instance, and the request asks for padding so the response size does not reveal which bucket was queried. No account identifier is sent."
            location="Provider-operated infrastructure."
            policyUrl="https://haveibeenpwned.com/Privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="ip-api.com (sign-in geolocation)"
            role="Places the IP address of a sign-in on a map, so the security page can show the user where their sessions came from. Nobody enables this: it runs for every sign-in the instance cannot place from a local database. The reference instance currently has no local database in place, so every sign-in reaches the provider. An operator can switch it off entirely with IP_GEO_LOOKUP_DISABLED=1, point IP_GEO_LOOKUP_URL at another provider (the keyless default is ipwho.is), or supply the offline databases below and keep the lookup on the host."
            data="The IP address of the sign-in, and nothing else. No account identifier, no session, no health data."
            location="Provider-operated infrastructure. The free endpoint publishes no data-processing agreement."
            policyUrl="https://ip-api.com/docs/legal"
          />
          <SubProcessor
            labels={LABELS}
            name="MaxMind, Inc. (GeoLite2, optional)"
            role="The offline alternative to the lookup above. An operator who supplies a MaxMind licence key has the instance download the GeoLite2 City and ASN databases; from then on sign-in addresses are resolved locally and are consulted first, so the online provider is asked only about an address the databases could not place."
            data="The licence key and the download request. Sign-in IP addresses are never sent: the databases are files, and the lookup happens on the host."
            location="Downloads come from MaxMind's own distribution host. The databases themselves live on the operator's server."
            policyUrl="https://www.maxmind.com/en/privacy_policy"
          />
          <SubProcessor
            labels={LABELS}
            name="Open-Meteo"
            role="Historical weather and place lookup for the optional environmental-context module, which is off until the user enables it and sets a home location. A nightly job then fetches the days in the lookback window."
            data="The coarse home coordinates (rounded to two decimal places, roughly one kilometre), the timezone, and the date range. No account identifier and no health data. Picking the home location sends the search term the user typed to the same provider's geocoding endpoint."
            location="Provider-operated infrastructure. The hosted endpoints are the default; an operator can point the module at a self-hosted Open-Meteo instance instead."
            policyUrl="https://open-meteo.com/en/terms"
          />
          <SubProcessor
            labels={LABELS}
            name="GitHub, Inc."
            role="Hosting of the public source repository and the issue tracker used as an alternative support channel. The in-app update check also asks the GitHub releases API which version is current."
            data="Issue contents and any voluntary attachments. Avoid posting personal data in public issues; a private channel is offered after the first response. The update check sends no account data."
            location="United States."
            policyUrl="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          />
          <SubProcessor
            labels={LABELS}
            name="Cloudflare, Inc."
            role="Authoritative DNS for the healthlog.dev zone."
            data="Source IP address and user-agent at DNS resolution time."
            location="United States; Cloudflare's standard global anycast network."
            policyUrl="https://www.cloudflare.com/privacypolicy/"
          />
          <SubProcessor
            labels={LABELS}
            name="Hetzner Online GmbH"
            role="Hardware host for the application server and the PostgreSQL database."
            data="Disk and network traffic between the operator-controlled virtual machines and the public internet."
            location="Germany (European Union). All HealthLog application data on the reference instance lives on Hetzner-hosted infrastructure under German jurisdiction."
            policyUrl="https://www.hetzner.com/legal/privacy-policy"
          />
        </ul>
        <p>
          Error reports from the reference instance go to a GlitchTip
          installation the maintainer runs on the same infrastructure, not to a
          third-party error-tracking vendor. A report carries the error message
          and stack trace, the request path, the user-agent and a request
          identifier, passed through a redaction step that strips secrets; it
          carries no health data.
        </p>
        <p>
          The software supports further outbound destinations that the reference
          instance does not use: shipping the structured logs to a Loki endpoint,
          sending notification e-mail through an SMTP relay, and delegating
          login to an OpenID Connect identity provider. Each is off unless an
          operator configures it, and on a self-hosted install it is that
          operator&apos;s choice and their disclosure to make.
        </p>
      </Section>

      <Section id="storage" title="7. Storage, encryption, retention">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Primary data store: PostgreSQL on a Hetzner-hosted server in
            Germany. Disk encrypted at rest. Sensitive columns (authentication
            tokens, integration secrets, Coach conversations and the memory
            derived from them) are individually encrypted at the column level
            using AES-256-GCM with a key separate from the database key.
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
            Backups: daily, encrypted, retained for 30 days on an S3-compatible
            object store with its own encryption-at-rest layer.
          </li>
          <li>
            Retention: account data is retained until the user requests erasure
            (see section 8) or the account is administratively closed. Audit
            logs are retained for 365 days; server access logs for 14 days;
            notification-delivery attempts for 90 days. This page said 90 days
            for the audit log until August 2026, which was never what the
            software did: 365 days is the built-in default, and every operator
            sets their own window with <Code>AUDIT_LOG_RETENTION_DAYS</Code>.
          </li>
          <li>
            Deletion: the account-deletion endpoint cascades through every
            user-scoped table, including health observations, sessions, audit
            log, integration tokens, notification subscriptions, Coach
            conversations, facts and plans, achievements and uploaded files.
            Deletion is immediate; backups age out under the 30-day window
            above.
          </li>
        </ul>
      </Section>

      <Section id="rights" title="8. Your rights (GDPR Art. 15-22)">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-text-primary font-medium">
              Right of access (Art. 15)
            </span>
            : every value the application has stored is reachable through the
            in-app history surfaces. A consolidated JSON export is offered under{" "}
            <em className="not-italic">Settings → Data &amp; export</em>.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Right to rectification (Art. 16)
            </span>
            : every record carries an in-app edit and delete action.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Right to erasure (Art. 17)
            </span>
            : <em className="not-italic">Settings → Account → Delete account</em>
            . The action cascades immediately through user-scoped tables;
            backups age out within the 30-day window described in section 7.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Right to restriction of processing (Art. 18)
            </span>
            : request an administrative suspension at the contact address in
            section 13.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Right to withdraw consent (Art. 7 (3))
            </span>
            : the AI features run on explicit consent, and that consent is
            withdrawable on the same surface that grants it, under{" "}
            <em className="not-italic">Settings → AI</em>. Withdrawal takes
            effect immediately: the consent gate fails closed without an active
            receipt, so every AI surface falls back to its no-consent state.
            Withdrawing deletes nothing already recorded, which is the erasure
            path above.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Right to data portability (Art. 20)
            </span>
            : the JSON export under{" "}
            <em className="not-italic">Settings → Data &amp; export</em> returns
            the full record set in a structured, machine-readable format.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Right to object to automated decision-making (Art. 22)
            </span>
            : the AI Coach does not make automated decisions in the Art. 22
            sense. It generates written suggestions for the user to read; no
            action is taken on the user&apos;s behalf without explicit
            confirmation.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Right to lodge a complaint
            </span>
            : with the Federal Commissioner for Data Protection and Freedom of
            Information (BfDI) for the German federal level, or with the
            data-protection authority of the user&apos;s habitual residence.
          </li>
        </ul>
      </Section>

      <Section
        id="medical-boundary"
        title="9. Medical-device boundary (EU MDR 2017/745, MDCG 2021-24)"
      >
        <p>
          HealthLog is{" "}
          <strong className="text-text-primary">not a medical device</strong>{" "}
          within the meaning of EU Regulation 2017/745 (MDR). The application
          records and displays observations the user has entered; it does not
          diagnose, treat, prescribe, or monitor a specific medical condition.
        </p>
        <p>
          The AI Coach surface is constrained by explicit ground rules in its
          system prompt: it does not recommend GLP-1 doses, and it does not
          produce drug-level estimates. The GLP-1 Research Mode chart is a
          display-only visualisation gated behind a versioned acknowledgment
          that cites the MDR boundary to the user before unlocking. None of
          these surfaces issue clinical recommendations.
        </p>
        <p>
          For medical advice the user must consult a licensed clinician.
          HealthLog is intended to support that conversation by surfacing
          self-tracked data, not to replace it.
        </p>
      </Section>

      <Section
        id="apple-categories"
        title="10. Apple App Store privacy categories"
      >
        <p>
          The iOS application&apos;s Privacy Nutrition Labels in App Store
          Connect map to the following categories:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <span className="text-text-primary font-medium">
              Health &amp; Fitness
            </span>
            : linked to the user; used for app functionality.
          </li>
          <li>
            <span className="text-text-primary font-medium">Sensitive Info</span>{" "}
            (blood pressure, glucose, medications): linked to the user; used for
            app functionality.
          </li>
          <li>
            <span className="text-text-primary font-medium">Contact Info</span>{" "}
            (email address): linked to the user; used for app functionality and
            account management.
          </li>
          <li>
            <span className="text-text-primary font-medium">User Content</span>{" "}
            (notes attached to measurements, mood notes, Coach conversations,
            bug-report text): linked to the user; used for app functionality.
          </li>
          <li>
            <span className="text-text-primary font-medium">Identifiers</span>{" "}
            (device identifier, user identifier): linked to the user; used for
            app functionality.
          </li>
          <li>
            <span className="text-text-primary font-medium">Diagnostics</span>:
            not collected.
          </li>
          <li>
            <span className="text-text-primary font-medium">Usage Data</span>:
            not collected.
          </li>
          <li>
            <span className="text-text-primary font-medium">Location</span>: not
            collected, except for an optional GPS route the user attaches
            manually to a workout and the coarse home location of the optional
            environmental module.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Browsing History
            </span>
            : not collected.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Search History
            </span>
            : not collected.
          </li>
          <li>
            <span className="text-text-primary font-medium">Other Data</span>:
            not collected.
          </li>
        </ul>
      </Section>

      <Section id="children" title="11. Children">
        <p>
          HealthLog is not directed at children under the age of 16. The
          application should not be used by anyone under 16 without verifiable
          parental supervision. The operator does not knowingly collect personal
          data from children under 16; if such data is discovered, it will be
          deleted on detection. A guardian may keep a record for a child as
          described in section 2, in which case the guardian is responsible for
          what is entered.
        </p>
      </Section>

      <Section id="changes" title="12. Changes to this policy">
        <p>
          This document is version-stamped at the top. Material changes are
          summarised in the in-app release notes and on the public changelog.
          The published policy version is bound to the application release
          version that introduced it.
        </p>
      </Section>

      <Section id="contact" title="13. Contact">
        <p>
          For privacy questions and data-subject requests under GDPR Art. 15 to
          22, write to{" "}
          <a
            href="mailto:support@healthlog.dev?subject=GDPR%20request"
            className="text-purple hover:text-cyan underline-offset-2 hover:underline"
          >
            support@healthlog.dev
          </a>
          . State which right you are exercising and the email address of the
          account concerned. This mailbox reaches the operator of the reference
          instance directly and is the route to use for anything containing
          personal data.
        </p>
        <p>
          As an alternative, a request can be raised as a public issue at{" "}
          <ExternalLink href="https://github.com/MBombeck/HealthLog/issues">
            github.com/MBombeck/HealthLog/issues
          </ExternalLink>
          . Do not include personal data in a public issue; a private channel
          for the actual exchange is provided in the first response.
        </p>
        <p>
          General support questions belong on the{" "}
          <Link
            href="/support"
            className="text-purple hover:text-cyan underline-offset-2 hover:underline"
          >
            support page
          </Link>
          . The postal address of the operator is on the{" "}
          <Link
            href="/imprint"
            className="text-purple hover:text-cyan underline-offset-2 hover:underline"
          >
            imprint
          </Link>
          .
        </p>
      </Section>
    </PrivacyShell>
  );
}

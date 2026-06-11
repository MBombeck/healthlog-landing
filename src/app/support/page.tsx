import type { Metadata } from "next";
import Link from "next/link";

/**
 * Public support landing.
 *
 * Apple App Store Connect requires a publicly reachable Support URL before
 * iOS submission. `https://healthlog.dev/support` is the stable URL
 * registered with ASC.
 *
 * The page is intentionally short and action-oriented:
 *
 *   - Where to install      → docs.healthlog.dev
 *   - Where to report bugs  → GitHub Issues
 *   - Where to ask for help → GitHub Discussions, then Issues as fallback
 *   - Email contact         → mbombeck@gmail.com (no dedicated support
 *                             mailbox configured yet; the documented address
 *                             is the maintainer's personal one used across
 *                             the existing /privacy and /imprint surfaces)
 *
 * Visual language matches the privacy page — self-contained, dark Dracula
 * tokens, no app shell.
 */

const LAST_UPDATED = "2026-05-16";
const SUPPORT_EMAIL = "mbombeck@gmail.com";

export const metadata: Metadata = {
  title: "Support",
  description:
    "How to install, configure, and get help with HealthLog — the self-hosted health-tracking PWA.",
  alternates: { canonical: "https://healthlog.dev/support" },
  robots: { index: true, follow: true },
};

interface ResourceCardProps {
  label: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  accent: "purple" | "cyan" | "pink" | "green" | "orange";
}

const accentMap: Record<ResourceCardProps["accent"], string> = {
  purple: "text-purple border-purple/15 bg-purple/[0.03]",
  cyan: "text-cyan border-cyan/15 bg-cyan/[0.03]",
  pink: "text-pink border-pink/15 bg-pink/[0.03]",
  green: "text-green border-green/15 bg-green/[0.03]",
  orange: "text-orange border-orange/15 bg-orange/[0.03]",
};

function ResourceCard({
  label,
  title,
  body,
  href,
  cta,
  accent,
}: ResourceCardProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <article className="glass-card flex flex-col gap-3 p-6">
      <span
        className={`section-label inline-flex w-fit ${accentMap[accent]}`}
      >
        {label}
      </span>
      <h3 className="font-display text-text-primary text-lg font-bold tracking-tight">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-purple hover:text-cyan mt-2 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-2 hover:underline"
      >
        {cta}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function SupportPage() {
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
        className="relative z-10 mx-auto max-w-3xl space-y-12 px-4 py-10 md:px-6 md:py-16"
      >
        <div className="space-y-3">
          <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
            Support
          </p>
          <h1 className="font-display text-text-primary text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
            Get help with HealthLog
          </h1>
          <p className="text-text-secondary max-w-xl text-base leading-relaxed">
            HealthLog is a source-available, self-hosted application maintained
            on a best-effort schedule. The channels below are the supported
            paths for installation help, bug reports, and feature
            discussions.
          </p>
        </div>

        <section
          aria-labelledby="resources-heading"
          className="space-y-6"
        >
          <h2
            id="resources-heading"
            className="font-display text-text-primary text-xl font-bold tracking-tight md:text-2xl"
          >
            Where to go
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ResourceCard
              accent="cyan"
              label="Install"
              title="How do I install HealthLog?"
              body="The documentation walks through Docker Compose setup, environment configuration, encryption-key generation, and Withings / OAuth integration steps."
              href="https://docs.healthlog.dev"
              cta="Open the documentation"
            />
            <ResourceCard
              accent="pink"
              label="Bugs"
              title="Where do I report a bug?"
              body="Open a public issue on GitHub. Include the version reported on the in-app About page, the steps to reproduce, and any browser-console or server-log output relevant to the failure."
              href="https://github.com/MBombeck/HealthLog/issues"
              cta="Open a GitHub issue"
            />
            <ResourceCard
              accent="purple"
              label="Self-hosting"
              title="How do I get help with self-hosting?"
              body="Self-hosting questions, integration tips, and longer-form discussions belong in GitHub Discussions. The Issue tracker is fine as a fallback if a thread does not already exist."
              href="https://github.com/MBombeck/HealthLog/discussions"
              cta="Open GitHub Discussions"
            />
            <ResourceCard
              accent="green"
              label="Source"
              title="Want to read the code first?"
              body="HealthLog is released under the GNU Affero General Public License v3.0. Every line that touches user data is auditable on GitHub."
              href="https://github.com/MBombeck/HealthLog"
              cta="View the repository"
            />
          </div>
        </section>

        <section
          aria-labelledby="contact-heading"
          className="space-y-4"
        >
          <h2
            id="contact-heading"
            className="font-display text-text-primary text-xl font-bold tracking-tight md:text-2xl"
          >
            Direct contact
          </h2>
          <div className="glass-card space-y-4 p-6">
            <p className="text-text-secondary text-sm leading-relaxed">
              For matters that cannot be discussed in public — security
              disclosures, GDPR data-subject requests, or App Store review
              correspondence — email the maintainer directly:
            </p>
            <p className="text-text-primary font-mono text-base">
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=HealthLog%20support`}
                className="text-cyan hover:text-purple underline-offset-2 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
            <p className="text-text-tertiary text-xs leading-relaxed">
              Public bug reports and feature requests should go through
              GitHub so other users can find the answers. Email is reserved
              for the categories above.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="response-heading"
          className="space-y-4"
        >
          <h2
            id="response-heading"
            className="font-display text-text-primary text-xl font-bold tracking-tight md:text-2xl"
          >
            Response expectations
          </h2>
          <div className="glass-card space-y-3 p-6 text-sm leading-relaxed">
            <p className="text-text-secondary">
              HealthLog is a source-available side project, not a commercial
              product with a paid support plan. Responses are best-effort and
              typically arrive within a few days. Security-related reports
              are prioritised.
            </p>
            <p className="text-text-secondary">
              Outage reports for the maintainer-operated reference instance
              should also go through GitHub Issues — the same incident review
              process applies as for code defects.
            </p>
          </div>
        </section>

        <section aria-labelledby="status-heading" className="space-y-4">
          <h2
            id="status-heading"
            className="font-display text-text-primary text-xl font-bold tracking-tight md:text-2xl"
          >
            App and release status
          </h2>
          <div className="glass-card space-y-3 p-6 text-sm leading-relaxed">
            <p className="text-text-secondary">
              Release history, in-flight features, and known issues are
              tracked in the public GitHub repository. The in-app{" "}
              <em className="not-italic">About</em> page always carries the
              currently deployed version of the user&apos;s own instance.
            </p>
            <p className="text-text-secondary">
              Privacy and data-handling details are covered separately on the{" "}
              <Link
                href="/privacy"
                className="text-purple hover:text-cyan underline-offset-2 hover:underline"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </section>

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
            . Last updated {LAST_UPDATED}.
          </p>
        </footer>
      </main>
    </div>
  );
}

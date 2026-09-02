import Link from "next/link";

/**
 * Layout pieces shared by the English (/privacy) and German (/de/privacy)
 * renderings of the privacy policy. The prose lives in the two page files;
 * everything structural (header with language switch, section anatomy,
 * sub-processor card) lives here so both pages stay visually identical.
 */

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
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

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-text-primary font-display pt-2 text-base font-semibold">
      {children}
    </h3>
  );
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple hover:text-cyan underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-surface-raised text-cyan rounded px-1 py-0.5 font-mono text-xs">
      {children}
    </code>
  );
}

export interface SubProcessorLabels {
  role: string;
  data: string;
  location: string;
  policy: string;
}

interface SubProcessorProps {
  name: string;
  role: string;
  data: string;
  location: string;
  policyUrl: string;
  labels: SubProcessorLabels;
}

export function SubProcessor({
  name,
  role,
  data,
  location,
  policyUrl,
  labels,
}: SubProcessorProps) {
  return (
    <li className="glass-card space-y-1.5 p-4">
      <p className="text-text-primary font-semibold">{name}</p>
      <p className="text-text-secondary text-sm">
        <span className="text-text-primary font-medium">{labels.role}</span>{" "}
        {role}
      </p>
      <p className="text-text-secondary text-sm">
        <span className="text-text-primary font-medium">{labels.data}</span>{" "}
        {data}
      </p>
      <p className="text-text-secondary text-sm">
        <span className="text-text-primary font-medium">{labels.location}</span>{" "}
        {location}
      </p>
      <p className="text-sm">
        <ExternalLink href={policyUrl}>{labels.policy}</ExternalLink>
      </p>
    </li>
  );
}

interface TocEntry {
  href: string;
  label: string;
}

interface PrivacyShellProps {
  /** Header link to the support page. */
  supportLabel: string;
  /** Language switch: where the other rendering lives and what to call it. */
  switchHref: string;
  switchLabel: string;
  switchHrefLang: string;
  /** Kicker above the H1, e.g. "Policy version 1.38.1". */
  versionLine: string;
  heading: string;
  updatedLine: string;
  tocLabel: string;
  tocAriaLabel: string;
  toc: TocEntry[];
  children: React.ReactNode;
  footer: React.ReactNode;
}

export function PrivacyShell({
  supportLabel,
  switchHref,
  switchLabel,
  switchHrefLang,
  versionLine,
  heading,
  updatedLine,
  tocLabel,
  tocAriaLabel,
  toc,
  children,
  footer,
}: PrivacyShellProps) {
  return (
    <div className="bg-void text-text-primary relative min-h-dvh overflow-x-clip">
      <div className="noise-overlay" />

      {/* Top bar: a visible home link so an App Store reviewer can confirm
          the policy belongs to the same brand as the iOS app, plus the
          language switch. */}
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
          <nav className="flex items-center gap-4">
            <Link
              href={switchHref}
              hrefLang={switchHrefLang}
              lang={switchHrefLang}
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              {switchLabel}
            </Link>
            <Link
              href="/support"
              className="text-text-tertiary hover:text-text-primary inline-flex min-h-11 items-center text-sm transition-colors"
            >
              {supportLabel}
            </Link>
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-3xl space-y-10 px-4 py-10 md:px-6 md:py-16"
      >
        <div className="space-y-3">
          <p className="text-text-tertiary font-mono text-xs tracking-[0.2em] uppercase">
            {versionLine}
          </p>
          <h1 className="font-display text-text-primary text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
            {heading}
          </h1>
          <p className="text-text-tertiary text-sm">{updatedLine}</p>
        </div>

        <details className="glass-card group rounded-md">
          <summary className="text-text-primary hover:text-purple cursor-pointer list-none px-4 py-3 text-sm font-medium transition-colors select-none">
            {tocLabel}
            <span
              aria-hidden="true"
              className="text-text-tertiary ml-2 inline-block transition-transform group-open:rotate-90"
            >
              {">"}
            </span>
          </summary>
          <nav
            aria-label={tocAriaLabel}
            className="border-t border-[rgba(98,114,164,0.08)] px-4 py-3"
          >
            <ol className="text-text-secondary space-y-1.5 text-sm leading-relaxed">
              {toc.map((entry) => (
                <li key={entry.href}>
                  <a
                    className="hover:text-purple hover:underline"
                    href={entry.href}
                  >
                    {entry.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </details>

        {children}

        <footer className="text-text-tertiary mt-12 border-t border-[rgba(98,114,164,0.08)] pt-6 text-xs">
          {footer}
        </footer>
      </main>
    </div>
  );
}

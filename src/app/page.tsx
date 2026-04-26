import { EcgMonitor } from "@/components/EcgMonitor";
import { ScrollIndicator, ScrollRevealObserver } from "@/components/HeroClient";
import { DemoCredentials } from "@/components/DemoCredentials";
import { TerminalBlock } from "@/components/TerminalBlock";
import { AppShowcase } from "@/components/AppShowcase";

/* ── SVG Icons ──────────────────────────────────── */

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} aria-label="HealthLog Logo">
      <defs>
        <clipPath id="heart-clip">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </clipPath>
      </defs>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#bd93f9" fillOpacity="0.2" stroke="#bd93f9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="3,12.5 8,12.5 9.5,9 11,16 12.5,7 14,12.5 15.5,12.5 21,12.5" fill="none" stroke="#bd93f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#heart-clip)" />
    </svg>
  );
}

function HeartMetricIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MoodIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="23" x2="14" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M23 4v6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 20v-6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`w-20 h-20 ${className}`} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#50fa7b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(80, 250, 123, 0.06)" />
      <polyline points="9,12 11,14 15,10" stroke="#50fa7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true">
      <path d="M3 8.5L6.5 12L13 4" stroke="#50fa7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" aria-hidden="true">
      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" />
    </svg>
  );
}

/* ── Feature Data ───────────────────────────────── */

const primaryFeatures = [
  {
    icon: <HeartMetricIcon />,
    title: "All vitals at a glance",
    description: "Track weight, blood pressure, heart rate, body fat, sleep, and steps. Interactive charts reveal trends instantly — with personalized target ranges.",
    color: "purple",
  },
  {
    icon: <PillIcon />,
    title: "Never miss a dose again",
    description: "Define intake windows, get reminded via Telegram or Push, and monitor your compliance. Automatic escalation when doses are missed.",
    color: "cyan",
  },
  {
    icon: <BrainIcon />,
    title: "AI-powered health insights",
    description: "Personalized analyses of blood pressure, weight, heart rate, mood, and compliance powered by OpenAI. Bring-Your-Own-Key — your data stays yours.",
    color: "orange",
  },
];

const secondaryFeatures = [
  { icon: <MoodIcon />, title: "Mood tracking", description: "5-point scale with tags, correlation analysis, and journal integration.", color: "pink" },
  { icon: <FileIcon />, title: "Doctor report PDF", description: "Professional medical reports in European format, generated in your browser.", color: "green" },
  { icon: <SyncIcon />, title: "Withings sync", description: "Automatic sync with Withings scales, BP monitors, and activity trackers.", color: "cyan" },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  purple: { bg: "rgba(189,147,249,0.08)", text: "#bd93f9" },
  cyan: { bg: "rgba(139,233,253,0.08)", text: "#8be9fd" },
  pink: { bg: "rgba(255,121,198,0.08)", text: "#ff79c6" },
  green: { bg: "rgba(80,250,123,0.08)", text: "#50fa7b" },
  orange: { bg: "rgba(255,184,108,0.08)", text: "#ffb86c" },
};

const techItems = [
  "Next.js 16", "TypeScript Strict", "PostgreSQL 16", "Prisma 7",
  "Progressive Web App", "AES-256-GCM", "WebAuthn / Passkeys",
  "Telegram Bot API", "OpenAI API", "Withings OAuth2",
  "pg-boss Queue", "Docker", "Recharts", "Zod v4",
];

const privacyChecks = [
  "No cloud dependency — runs entirely on your own server",
  "No telemetry, no analytics, no tracking scripts",
  "AES-256-GCM encryption for all sensitive data at rest",
  "API tokens stored as SHA-256 hashes, never in plaintext",
  "Passkey authentication — phishing-resistant, no password leaks",
  "Password fallback with Argon2id hashing and strength validation",
  "Withings OAuth tokens encrypted in the database",
  "Open Source — every single line of code is auditable",
];

const terminalCommands = `git clone https://github.com/MBombeck/HealthLog.git
cd HealthLog
cp .env.example .env
echo "POSTGRES_PASSWORD=$(openssl rand -base64 24)" >> .env
echo "SESSION_SECRET=$(openssl rand -hex 32)"       >> .env
echo "ENCRYPTION_KEY=$(openssl rand -hex 32)"       >> .env
echo "API_TOKEN_HMAC_KEY=$(openssl rand -hex 32)"   >> .env
docker compose up -d`;

/* ── Comparison Row ─────────────────────────────── */

function ComparisonRow({ feature, values, highlights }: {
  feature: string;
  values: string[];
  highlights: (boolean | null)[];
}) {
  return (
    <tr>
      <td>{feature}</td>
      {values.map((value, i) => {
        const highlight = highlights[i];
        let colorClass = "text-text-secondary";
        if (highlight === true) colorClass = "text-green font-semibold";
        else if (highlight === false) colorClass = "text-text-tertiary";
        return (
          <td key={`${feature}-${i}`} className={colorClass}>
            {value}
          </td>
        );
      })}
    </tr>
  );
}

/* ── Main Page (Server Component) ────────────────── */

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* Client-side scroll reveal observer */}
      <ScrollRevealObserver />

      {/* Skip navigation */}
      <a
        href="#main-content"
        className="skip-to-content"
      >
        Skip to content
      </a>

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* ─── HERO ─────────────────────────────────── */}
      <header id="main-content" className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden" role="banner">
        <div className="aurora" />
        <div className="aurora-pink" />
        <div className="grid-pattern" />
        <EcgMonitor />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <LogoIcon className="w-16 h-16 md:w-20 md:h-20" />
          </div>

          <h1 className="font-display font-extrabold text-[2.25rem] sm:text-6xl md:text-[5.5rem] leading-[1.05] tracking-[-0.03em] mb-8">
            <span className="text-text-primary">Your Health.</span>
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #bd93f9 0%, #8be9fd 50%, #ff79c6 100%)" }}>
              Your Server.
            </span>
          </h1>

          <p className="text-text-secondary text-lg sm:text-xl md:text-[1.35rem] max-w-2xl mx-auto mb-14 leading-[1.7] font-light tracking-[-0.01em]">
            The self-hosted health tracking app that gives you full control.
            Weight, blood pressure, medications, mood — encrypted on your
            own server. Offline-capable. Open source.
          </p>

          <nav className="flex flex-col sm:flex-row items-center justify-center gap-4" aria-label="Primary actions">
            <a
              href="https://github.com/MBombeck/HealthLog"
              className="cta-button group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-5 h-5 relative z-10" />
              <span>View on GitHub</span>
              <ArrowIcon />
            </a>
            <a
              href="https://docs.healthlog.dev"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookIcon className="w-5 h-5" />
              <span>Read the Docs</span>
            </a>
          </nav>

        </div>

        <ScrollIndicator />
      </header>

      {/* ─── APP MOCKUP ───────────────────────────── */}
      <main>
      <section id="interface" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="interface-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">Interface</span>
            </div>
            <h2 id="interface-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Your health dashboard
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              A dark, eye-friendly interface in the Dracula color scheme.
              Mobile-first, with instant access to all your metrics.
            </p>
          </div>
          <div className="reveal">
            <AppShowcase />
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────── */}
      <section id="features" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-purple border-purple/15 bg-purple/[0.03]">Features</span>
            </div>
            <h2 id="features-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Everything you need.<br />
              <span className="text-text-secondary">Nothing you don&apos;t.</span>
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From daily measurements to AI-powered health reports —
              HealthLog covers your entire health workflow.
            </p>
          </div>

          {/* Primary features -- large cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            {primaryFeatures.map((feature, i) => {
              const colors = colorMap[feature.color];
              return (
                <div key={feature.title} className={`reveal reveal-delay-${i + 1} glass-card feature-card-accent p-6 group`} style={{ "--accent-color": colors.text } as React.CSSProperties}>
                  <div className="flex items-start gap-4">
                    <div className="feature-icon flex-shrink-0" style={{ backgroundColor: colors.bg, color: colors.text }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-text-primary mb-1.5 tracking-[-0.01em]">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-xs leading-[1.7]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Secondary features -- compact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
            {secondaryFeatures.map((feature, i) => {
              const colors = colorMap[feature.color];
              return (
                <div key={feature.title} className={`reveal reveal-delay-${i + 1} glass-card feature-card-accent p-6 group`} style={{ "--accent-color": colors.text } as React.CSSProperties}>
                  <div className="flex items-start gap-4">
                    <div className="feature-icon flex-shrink-0" style={{ backgroundColor: colors.bg, color: colors.text }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-text-primary mb-1.5 tracking-[-0.01em]">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-xs leading-[1.7]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extra capability badges */}
          <div className="reveal mt-12 flex flex-wrap justify-center gap-3">
            {[
              "Offline-capable PWA",
              "Telegram / ntfy / Web Push",
              "30+ Achievements",
              "CSV/JSON Export",
              "German & English",
              "Docker-ready",
            ].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full text-xs font-mono text-text-tertiary border border-[rgba(98,114,164,0.1)] bg-[rgba(15,16,24,0.4)] hover:border-[rgba(189,147,249,0.15)] hover:text-text-secondary transition-all duration-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIVACY ──────────────────────────────── */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow privacy-section" aria-labelledby="privacy-heading">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="reveal flex justify-center mb-8">
              <ShieldIcon className="shield-glow" />
            </div>
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-green border-green/15 bg-green/[0.03]">Privacy & Security</span>
            </div>
            <h2 id="privacy-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Your data belongs to you.
              <br />
              <span className="text-green/80">Period.</span>
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Unlike Apple Health or Google Fit, HealthLog keeps you in full control.
              No data sharing, no subscription, no vendor lock-in.
            </p>
          </div>

          <div className="reveal glass-card p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4">
              {privacyChecks.map((check) => (
                <div key={check} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-text-secondary text-sm leading-[1.65]">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ───────────────────────────── */}
      <section className="relative py-20 overflow-hidden" aria-label="Technology stack">
        <div className="reveal text-center mb-10">
          <p className="text-text-tertiary text-xs font-mono tracking-[0.2em] uppercase">Built with</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="tech-scroll" aria-hidden="true">
              {[...techItems, ...techItems].map((item, i) => (
                <span key={`${item}-${i}`} className="flex-shrink-0 px-5 py-2.5 rounded-full border border-[rgba(98,114,164,0.08)] bg-[rgba(15,16,24,0.5)] text-text-secondary text-sm font-mono whitespace-nowrap hover:border-[rgba(189,147,249,0.2)] hover:text-text-primary transition-all duration-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Screenreader-accessible list of tech stack items */}
          <ul className="sr-only">
            {techItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── COMPARISON ──────────────────────────── */}
      <section id="comparison" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow hidden md:block" aria-labelledby="comparison-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">Comparison</span>
            </div>
            <h2 id="comparison-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              HealthLog vs. The Rest
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              See how a self-hosted, open-source approach compares to the big players.
            </p>
          </div>

          {/* Desktop: Table */}
          <div className="reveal comparison-scroll">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="comparison-table" role="table">
                  <thead>
                    <tr>
                      <th scope="col">Feature</th>
                      <th scope="col">HealthLog</th>
                      <th scope="col">Apple Health</th>
                      <th scope="col">Google Fit</th>
                      <th scope="col">MyFitnessPal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ComparisonRow feature="Self-hosted" values={["Yes", "No", "No", "No"]} highlights={[true, false, false, false]} />
                    <ComparisonRow feature="Data encryption" values={["AES-256-GCM", "At rest", "At rest", "At rest"]} highlights={[true, false, false, false]} />
                    <ComparisonRow feature="Open source" values={["AGPL-3.0", "No", "No", "No"]} highlights={[true, false, false, false]} />
                    <ComparisonRow feature="Offline capable" values={["Full PWA", "Native", "Native", "Limited"]} highlights={[true, null, null, false]} />
                    <ComparisonRow feature="Medication tracking" values={["Full compliance", "Basic", "No", "No"]} highlights={[true, null, false, false]} />
                    <ComparisonRow feature="AI insights" values={["BYOK (your key)", "Limited", "No", "Premium only"]} highlights={[true, null, false, false]} />
                    <ComparisonRow feature="Data export" values={["CSV + JSON", "XML (HealthKit)", "Google Takeout", "Premium only"]} highlights={[true, null, null, false]} />
                    <ComparisonRow feature="Cost" values={["Free forever", "Free (Apple only)", "Free", "Freemium"]} highlights={[true, null, null, false]} />
                    <ComparisonRow feature="Ad-free" values={["Always", "Yes", "Yes", "Premium only"]} highlights={[true, null, null, false]} />
                    <ComparisonRow feature="Custom server" values={["Your infrastructure", "Apple servers", "Google servers", "Under Armour servers"]} highlights={[true, false, false, false]} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile: Card layout */}
          <div className="reveal comparison-cards">
            {[
              { name: "Apple Health", items: [
                { feature: "Self-hosted", hl: "Yes", other: "No" },
                { feature: "Data encryption", hl: "AES-256-GCM", other: "At rest" },
                { feature: "Open source", hl: "AGPL-3.0", other: "No" },
                { feature: "Medication tracking", hl: "Full compliance", other: "Basic" },
                { feature: "AI insights", hl: "BYOK (your key)", other: "Limited" },
                { feature: "Cost", hl: "Free forever", other: "Free (Apple only)" },
              ]},
              { name: "Google Fit", items: [
                { feature: "Self-hosted", hl: "Yes", other: "No" },
                { feature: "Data encryption", hl: "AES-256-GCM", other: "At rest" },
                { feature: "Open source", hl: "AGPL-3.0", other: "No" },
                { feature: "Medication tracking", hl: "Full compliance", other: "No" },
                { feature: "AI insights", hl: "BYOK (your key)", other: "No" },
                { feature: "Data export", hl: "CSV + JSON", other: "Google Takeout" },
              ]},
              { name: "MyFitnessPal", items: [
                { feature: "Self-hosted", hl: "Yes", other: "No" },
                { feature: "Open source", hl: "AGPL-3.0", other: "No" },
                { feature: "Offline capable", hl: "Full PWA", other: "Limited" },
                { feature: "Ad-free", hl: "Always", other: "Premium only" },
                { feature: "Data export", hl: "CSV + JSON", other: "Premium only" },
                { feature: "Cost", hl: "Free forever", other: "Freemium" },
              ]},
            ].map((competitor) => (
              <div key={competitor.name} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(98,114,164,0.12)]">
                  <span className="font-display font-bold text-sm text-purple">HealthLog</span>
                  <span className="text-text-tertiary text-xs font-mono">vs</span>
                  <span className="font-display font-bold text-sm text-text-secondary">{competitor.name}</span>
                </div>
                <div className="space-y-3">
                  {competitor.items.map((item) => (
                    <div key={item.feature} className="grid grid-cols-[1fr_auto_auto] gap-2 sm:gap-3 items-center">
                      <span className="text-[11px] sm:text-xs text-text-tertiary font-mono">{item.feature}</span>
                      <span className="text-[11px] sm:text-xs text-green font-mono text-right">{item.hl}</span>
                      <span className="text-[11px] sm:text-xs text-text-tertiary font-mono text-right">{item.other}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVE DEMO ─────────────────────────────── */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="demo-heading">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal flex justify-center mb-6">
            <span className="section-label text-orange border-orange/15 bg-orange/[0.03]">Live Demo</span>
          </div>
          <h2 id="demo-heading" className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
            See it in action
          </h2>
          <p className="reveal text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-12">
            Explore the full app with pre-populated data.
            No signup, no installation — just click and explore.
          </p>

          <DemoCredentials />

          <p className="reveal text-text-tertiary text-xs font-mono">
            Resets automatically — feel free to add, edit, and delete anything.
          </p>
        </div>
      </section>

      {/* ─── CTA + QUICK START ────────────────────── */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 section-glow" aria-labelledby="quickstart-heading">
        <div className="reveal max-w-2xl mx-auto text-center">
          <div className="reveal flex justify-center mb-6">
            <span className="section-label text-pink border-pink/15 bg-pink/[0.03]">Quick Start</span>
          </div>
          <h2 id="quickstart-heading" className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
            Up and running<br />in minutes
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-12">
            HealthLog is open source and free. Clone the repo,
            set your config, start with Docker.
          </p>

          <TerminalBlock commands={terminalCommands} />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/MBombeck/HealthLog"
              className="cta-button group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-5 h-5 relative z-10" />
              <span>View on GitHub</span>
              <ArrowIcon />
            </a>
            <a
              href="https://docs.healthlog.dev"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookIcon className="w-5 h-5" />
              <span>Read the Docs</span>
            </a>
          </div>
        </div>
      </section>

      </main>

      {/* ─── FOOTER ───────────────────────────────── */}
      <footer className="relative py-14 px-4 sm:px-6 border-t border-[rgba(98,114,164,0.06)]" role="contentinfo">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <LogoIcon className="w-5 h-5" />
            <span className="font-display font-semibold text-sm text-text-tertiary tracking-tight">HealthLog</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://docs.healthlog.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              <BookIcon className="w-4 h-4" />
              Docs
            </a>
            <a href="https://demo.healthlog.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              <PlayIcon className="w-4 h-4" />
              Demo
            </a>
            <a href="https://github.com/MBombeck/HealthLog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            <span className="text-text-tertiary/60 text-xs font-mono">Open Source</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

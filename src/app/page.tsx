"use client";

import { useEffect, useRef } from "react";

/* ── SVG Icons (inline for zero dependencies) ───── */

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="#bd93f9"
        fillOpacity="0.2"
        stroke="#bd93f9"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="3,12.5 8,12.5 9.5,9 11,16 12.5,7 14,12.5 15.5,12.5 21,12.5"
        fill="none"
        stroke="#bd93f9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartMetricIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 14.25h3m-6-6h9m-9 3h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoodIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 14s1.5 2 4 2 4-2 4-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="9"
        y1="9"
        x2="9.01"
        y2="9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="15"
        y1="9"
        x2="15.01"
        y2="9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="9"
        y1="21"
        x2="15"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="23"
        x2="14"
        y2="23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="14,2 14,8 20,8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="8"
        y1="13"
        x2="16"
        y2="13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="17"
        x2="13"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M23 4v6h-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 20v-6h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`w-16 h-16 ${className}`}
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="#50fa7b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(80, 250, 123, 0.08)"
      />
      <polyline
        points="9,12 11,14 15,10"
        stroke="#50fa7b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect
        x="3"
        y="11"
        width="18"
        height="11"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 11V7a5 5 0 0 1 10 0v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect
        x="2"
        y="2"
        width="20"
        height="8"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="2"
        y="14"
        width="20"
        height="8"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="6"
        y1="6"
        x2="6.01"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="18"
        x2="6.01"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path
        d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── ECG Background Line Component ──────────────── */

function EcgBackgroundLine() {
  const ecgPath =
    "M0,40 L40,40 L50,40 L55,20 L60,60 L65,10 L70,40 L80,40 L120,40 L160,40 L170,40 L175,20 L180,60 L185,10 L190,40 L200,40 L240,40 L280,40 L290,40 L295,20 L300,60 L305,10 L310,40 L320,40 L360,40 L400,40 L410,40 L415,20 L420,60 L425,10 L430,40 L440,40 L480,40";
  return (
    <div className="ecg-line">
      <svg viewBox="0 0 480 80" preserveAspectRatio="none">
        <path d={ecgPath} fill="none" stroke="#bd93f9" strokeWidth="2" />
        <path
          d={ecgPath}
          fill="none"
          stroke="#bd93f9"
          strokeWidth="2"
          transform="translate(480, 0)"
        />
      </svg>
    </div>
  );
}

/* ── Mockup App Display ─────────────────────────── */

function AppMockup() {
  return (
    <div className="gradient-border max-w-[720px] mx-auto">
      <div className="gradient-border-inner">
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(98,114,164,0.12)]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5555] opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffb86c] opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#50fa7b] opacity-60" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[11px] font-mono text-text-tertiary tracking-wide">
              healthlog.example.com
            </span>
          </div>
        </div>

        {/* App Content */}
        <div className="p-5 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <LogoIcon className="w-6 h-6" />
              <span className="font-display font-bold text-sm text-text-primary tracking-tight">
                HealthLog
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-purple/20 flex items-center justify-center">
              <span className="text-[10px] text-purple font-bold">M</span>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="mockup-grid">
            <MockupMetric label="Gewicht" value="82.4" unit="kg" trend="down" />
            <MockupMetric label="Blutdruck" value="124/78" unit="mmHg" trend="stable" />
            <MockupMetric label="Puls" value="68" unit="bpm" trend="down" />

            {/* Chart Area */}
            <div className="mockup-chart">
              <svg
                viewBox="0 0 300 60"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#bd93f9" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#bd93f9" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 C20,42 40,38 60,35 C80,32 100,28 120,30 C140,32 160,25 180,22 C200,19 220,24 240,20 C260,16 280,18 300,15"
                  fill="none"
                  stroke="#bd93f9"
                  strokeWidth="2"
                />
                <path
                  d="M0,45 C20,42 40,38 60,35 C80,32 100,28 120,30 C140,32 160,25 180,22 C200,19 220,24 240,20 C260,16 280,18 300,15 L300,60 L0,60 Z"
                  fill="url(#chartGrad)"
                />
              </svg>
              <div className="absolute bottom-2 left-3 text-[9px] text-text-tertiary font-mono">
                30 Tage Trend
              </div>
            </div>
          </div>

          {/* Medication Row */}
          <div className="flex items-center gap-3 bg-[rgba(80,250,123,0.04)] border border-[rgba(80,250,123,0.1)] rounded-lg p-3">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <div className="flex-1">
              <div className="text-[11px] font-semibold text-text-primary">
                Ramipril 5mg
              </div>
              <div className="text-[9px] text-text-tertiary">
                Eingenommen um 08:12
              </div>
            </div>
            <div className="text-[10px] text-green font-mono font-semibold">
              97% Compliance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupMetric({
  label,
  value,
  unit,
  trend,
}: {
  label: string;
  value: string;
  unit: string;
  trend: "up" | "down" | "stable";
}) {
  const trendArrow = trend === "down" ? "↓" : trend === "up" ? "↑" : "→";
  const trendColor =
    trend === "down"
      ? "text-green"
      : trend === "up"
        ? "text-[#ff5555]"
        : "text-text-tertiary";
  return (
    <div className="mockup-metric">
      <div className="text-[9px] text-text-tertiary mb-1 tracking-wider uppercase">
        {label}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-lg font-display font-bold text-text-primary leading-none">
          {value}
        </span>
        <span className="text-[9px] text-text-tertiary">{unit}</span>
      </div>
      <div className={`text-[9px] mt-1 ${trendColor}`}>{trendArrow} -2.1%</div>
    </div>
  );
}

/* ── Feature Card Data ──────────────────────────── */

const features = [
  {
    icon: <HeartMetricIcon />,
    title: "Gesundheitsmetriken",
    description:
      "Gewicht, Blutdruck, Puls, Koerperfett, Schlaf und Schritte. Trend-Charts mit gleitenden Durchschnitten und Zielbereichsbaendern.",
    color: "purple",
  },
  {
    icon: <PillIcon />,
    title: "Medikamentenmanagement",
    description:
      "Flexible Zeitfenster, Compliance-Analytik mit 7/30-Tage-Raten, Streaks und Heatmap-Kalender. Externe API fuer iOS Shortcuts.",
    color: "cyan",
  },
  {
    icon: <MoodIcon />,
    title: "Mood Tracking",
    description:
      "5-Punkte-Skala mit optionalen Notizen und Tags. Trend-Visualisierungen und Korrelationsanalyse mit Gesundheitsmetriken.",
    color: "pink",
  },
  {
    icon: <BrainIcon />,
    title: "KI-Gesundheitsanalysen",
    description:
      "OpenAI-gestuetzte Insights zu Blutdruck, Gewicht, Puls, Stimmung und Compliance. Bring Your Own Key — deine Daten, dein Modell.",
    color: "orange",
  },
  {
    icon: <FileIcon />,
    title: "Arztbericht PDF",
    description:
      "Professioneller PDF-Export im europaeischen Medizin-Format. Vitalzeichen, BP-Klassifikation nach ESC/ESH 2018, BMI nach WHO.",
    color: "green",
  },
  {
    icon: <SyncIcon />,
    title: "Withings Integration",
    description:
      "Automatische Synchronisation mit Waagen, Blutdruckmessgeraeten und Activity Trackern. OAuth2 mit verschluesseltem Token-Speicher.",
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  purple: { bg: "rgba(189,147,249,0.08)", text: "#bd93f9" },
  cyan: { bg: "rgba(139,233,253,0.08)", text: "#8be9fd" },
  pink: { bg: "rgba(255,121,198,0.08)", text: "#ff79c6" },
  green: { bg: "rgba(80,250,123,0.08)", text: "#50fa7b" },
  orange: { bg: "rgba(255,184,108,0.08)", text: "#ffb86c" },
};

/* ── Tech Stack Items ───────────────────────────── */

const techItems = [
  "Next.js 16",
  "TypeScript Strict",
  "PostgreSQL 16",
  "Prisma 7",
  "Progressive Web App",
  "AES-256-GCM",
  "WebAuthn Passkeys",
  "Telegram Bot API",
  "OpenAI API",
  "Withings OAuth2",
  "pg-boss Jobs",
  "Docker",
];

/* ── Privacy Features ───────────────────────────── */

const privacyFeatures = [
  {
    icon: <ServerIcon />,
    title: "Self-Hosted",
    description: "Laeuft auf deinem eigenen Server. Keine Cloud, keine Abhaengigkeit, kein Vendor Lock-in.",
  },
  {
    icon: <LockIcon />,
    title: "AES-256-GCM",
    description: "Alle sensitiven Daten werden clientseitig verschluesselt, bevor sie die Datenbank erreichen.",
  },
  {
    icon: <KeyIcon />,
    title: "Passkey-Auth",
    description: "WebAuthn-basierte Authentifizierung. Kein Passwort-Leak moeglich. Phishing-resistent.",
  },
];

/* ── Main Page Component ────────────────────────── */

export default function Home() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <main className="relative">
      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="aurora" />
        <div className="aurora-pink" />
        <div className="grid-pattern" />
        <EcgBackgroundLine />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="reveal visible flex justify-center mb-8">
            <div className="logo-pulse">
              <LogoIcon className="w-16 h-16 md:w-20 md:h-20" />
            </div>
          </div>

          {/* Brand */}
          <div className="reveal visible mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(189,147,249,0.15)] bg-[rgba(189,147,249,0.05)] text-purple text-xs font-mono tracking-widest uppercase">
              Self-Hosted Health Tracking
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={addRevealRef}
            className="reveal visible font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-text-primary">Deine Gesundheit.</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #bd93f9, #8be9fd, #ff79c6)",
              }}
            >
              Dein Dashboard.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={addRevealRef}
            className="reveal visible text-text-secondary text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light"
          >
            Gewicht, Blutdruck, Medikamente, Stimmung — alles in einer
            App. Auf deinem Server. Unter deiner Kontrolle.
          </p>

          {/* CTA */}
          <div ref={addRevealRef} className="reveal visible flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://github.com/MBombeck/HealthLog" className="cta-button" target="_blank" rel="noopener noreferrer">
              <span>Auf GitHub ansehen</span>
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 relative z-10"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-text-secondary hover:text-text-primary text-sm font-display font-medium tracking-wide transition-colors"
            >
              Mehr erfahren
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path
                  d="M8 3v10m0 0l4-4m-4 4L4 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-5 h-8 border border-text-tertiary rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-text-tertiary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────── */}
      <section id="features" className="relative py-24 sm:py-32 px-6 section-glow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              ref={addRevealRef}
              className="reveal text-purple text-xs font-mono tracking-[0.2em] uppercase mb-4"
            >
              Features
            </p>
            <h2
              ref={addRevealRef}
              className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary"
            >
              Alles, was du brauchst.
              <br />
              <span className="text-text-tertiary">Nichts, was du nicht brauchst.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => {
              const colors = colorMap[feature.color];
              return (
                <div
                  key={feature.title}
                  ref={addRevealRef}
                  className={`reveal reveal-delay-${(i % 3) + 1} glass-card p-6 group`}
                >
                  <div
                    className="feature-icon mb-4"
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.text,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional features list */}
          <div
            ref={addRevealRef}
            className="reveal mt-12 flex flex-wrap justify-center gap-3"
          >
            {[
              "Offline-faehige PWA",
              "3 Benachrichtigungskanale",
              "30+ Achievements",
              "CSV/JSON Export",
              "i18n (DE/EN)",
              "Gamification",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full text-xs font-mono text-text-tertiary border border-[rgba(98,114,164,0.12)] bg-[rgba(15,16,24,0.4)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APP MOCKUP ───────────────────────────── */}
      <section className="relative py-24 sm:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              ref={addRevealRef}
              className="reveal text-cyan text-xs font-mono tracking-[0.2em] uppercase mb-4"
            >
              Interface
            </p>
            <h2
              ref={addRevealRef}
              className="reveal font-display font-bold text-3xl sm:text-4xl tracking-tight text-text-primary"
            >
              Klar. Praezise. Dracula.
            </h2>
          </div>

          <div ref={addRevealRef} className="reveal">
            <AppMockup />
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ───────────────────────────── */}
      <section className="relative py-16 overflow-hidden section-glow">
        <div
          ref={addRevealRef}
          className="reveal text-center mb-8"
        >
          <p className="text-text-tertiary text-xs font-mono tracking-[0.2em] uppercase">
            Gebaut mit
          </p>
        </div>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="tech-scroll">
              {[...techItems, ...techItems].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="flex-shrink-0 px-5 py-2.5 rounded-full border border-[rgba(98,114,164,0.1)] bg-[rgba(15,16,24,0.5)] text-text-secondary text-sm font-mono whitespace-nowrap hover:border-[rgba(189,147,249,0.2)] hover:text-text-primary transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRIVACY ──────────────────────────────── */}
      <section className="relative py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div ref={addRevealRef} className="reveal flex justify-center mb-6">
              <ShieldIcon className="shield-glow" />
            </div>
            <p
              ref={addRevealRef}
              className="reveal text-green text-xs font-mono tracking-[0.2em] uppercase mb-4"
            >
              Datenschutz
            </p>
            <h2
              ref={addRevealRef}
              className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary mb-4"
            >
              Deine Daten.
              <br />
              <span className="text-green/80">Dein Server.</span>
            </h2>
            <p
              ref={addRevealRef}
              className="reveal text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed font-light"
            >
              HealthLog speichert keine Daten in der Cloud. Alles bleibt
              auf deiner Infrastruktur — verschluesselt und unter deiner
              vollen Kontrolle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {privacyFeatures.map((feature, i) => (
              <div
                key={feature.title}
                ref={addRevealRef}
                className={`reveal reveal-delay-${i + 1} glass-card p-6 text-center`}
              >
                <div className="flex justify-center mb-4 text-green/70">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-base text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────── */}
      <footer className="relative py-12 px-6 border-t border-[rgba(98,114,164,0.08)]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <LogoIcon className="w-5 h-5" />
            <span className="font-display font-bold text-sm text-text-secondary tracking-tight">
              HealthLog
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/MBombeck/HealthLog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <span className="text-text-tertiary text-xs font-mono">
              v1.0
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

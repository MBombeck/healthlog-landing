"use client";

import { useEffect, useRef } from "react";

/* ── SVG Icons ──────────────────────────────────── */

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
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <rect x="5" y="2" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="7" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="12" cy="17" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function MoodIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="23" x2="14" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M23 4v6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 20v-6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 22h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 19.24 7 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 19.24 17 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WifiOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M12 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12.859a10 10 0 0 1 5.17-2.69" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 12.859a10 10 0 0 0-2.007-1.523" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 8.82a15 15 0 0 1 4.177-2.643" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 8.82a15 15 0 0 0-11.288-3.764" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`w-16 h-16 ${className}`}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#50fa7b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(80, 250, 123, 0.08)" />
      <polyline points="9,12 11,14 15,10" stroke="#50fa7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── ECG Background Line (smooth bezier curves) ── */

function EcgBackgroundLine() {
  // Realistic ECG waveform with smooth bezier curves: P wave, QRS complex, T wave
  const ecgSegment = "M0,40 C15,40 25,40 35,40 C38,40 40,39 42,38 C44,37 46,36 48,38 C49,39 50,40 52,40 C54,40 55,38 56,34 C57,30 58,24 59,18 C60,12 60.5,8 61,12 C61.5,16 62,28 63,38 C63.5,43 64,50 65,54 C66,58 66.5,60 67,56 C67.5,52 68,44 69,40 C70,36 71,38 73,39 C75,40 78,40 82,40 C86,40 90,40 94,38 C96,37 98,36 100,37 C102,38 104,40 108,40 C112,40 120,40 130,40 C140,40 150,40 160,40";

  return (
    <div className="ecg-line">
      <svg viewBox="0 0 320 80" preserveAspectRatio="none">
        <path d={ecgSegment} fill="none" stroke="#bd93f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d={ecgSegment} fill="none" stroke="#bd93f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(160, 0)" />
      </svg>
    </div>
  );
}

/* ── Realistic App Mockup ───────────────────────── */

function AppMockup() {
  return (
    <div className="gradient-border max-w-[780px] mx-auto">
      <div className="gradient-border-inner">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(98,114,164,0.12)] bg-[#1e1f29]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5555] opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffb86c] opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#50fa7b] opacity-60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1.5 px-4 py-1 rounded-md bg-[rgba(68,71,90,0.4)] max-w-[280px] w-full">
              <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-text-tertiary flex-shrink-0"><path d="M8 1a4 4 0 0 0-4 4v3H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V5a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.2" /></svg>
              <span className="text-[10px] font-mono text-text-tertiary tracking-wide truncate">healthlog.example.com</span>
            </div>
          </div>
        </div>

        {/* App Content — realistic HealthLog dashboard */}
        <div className="bg-[#282a36] p-4 sm:p-6">
          {/* App Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <LogoIcon className="w-5 h-5" />
                <span className="font-display font-bold text-sm text-text-primary tracking-tight">HealthLog</span>
              </div>
              <p className="text-[11px] text-text-tertiary">Guten Morgen, Marc</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#44475a] flex items-center justify-center">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-text-tertiary"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center">
                <span className="text-[11px] text-purple font-bold">M</span>
              </div>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
            <DashboardMetric label="Gewicht" value="82.4" unit="kg" change="-0.8" changeLabel="7T" color="purple" />
            <DashboardMetric label="Systolisch" value="124" unit="mmHg" change="-3" changeLabel="7T" color="pink" />
            <DashboardMetric label="Diastolisch" value="78" unit="mmHg" change="+1" changeLabel="7T" color="cyan" />
            <DashboardMetric label="Puls" value="68" unit="bpm" change="-2" changeLabel="7T" color="green" />
          </div>

          {/* Chart Area */}
          <div className="bg-[#1e1f29] rounded-xl border border-[#44475a] p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-text-primary">Gewichtsverlauf</span>
              <div className="flex gap-1">
                <span className="text-[9px] px-2 py-0.5 rounded bg-purple/15 text-purple font-mono">30T</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-[#44475a] text-text-tertiary font-mono">90T</span>
              </div>
            </div>
            <svg viewBox="0 0 320 70" className="w-full h-16" preserveAspectRatio="none">
              <defs>
                <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#bd93f9" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#bd93f9" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Target range band */}
              <rect x="0" y="20" width="320" height="25" fill="rgba(80,250,123,0.04)" rx="2" />
              {/* Weight line — smooth bezier */}
              <path d="M0,55 C12,53 24,50 40,48 C56,46 72,42 88,40 C104,38 120,41 140,39 C160,37 176,34 196,32 C216,30 232,33 252,28 C272,23 288,20 320,18" fill="none" stroke="#bd93f9" strokeWidth="2" strokeLinecap="round" />
              <path d="M0,55 C12,53 24,50 40,48 C56,46 72,42 88,40 C104,38 120,41 140,39 C160,37 176,34 196,32 C216,30 232,33 252,28 C272,23 288,20 320,18 L320,70 L0,70 Z" fill="url(#mg)" />
              {/* Moving average dashed */}
              <path d="M0,52 C40,48 80,44 120,41 C160,38 200,34 240,28 C280,22 300,20 320,19" fill="none" stroke="#bd93f9" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
            </svg>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[9px] text-text-tertiary font-mono">08. Feb</span>
              <span className="text-[9px] text-green font-mono">-2.3 kg Trend</span>
              <span className="text-[9px] text-text-tertiary font-mono">08. Mär</span>
            </div>
          </div>

          {/* Medication + Mood Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Medication Status */}
            <div className="bg-[#1e1f29] rounded-xl border border-[#44475a] p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-text-primary">Medikamente heute</span>
                <span className="text-[9px] text-green font-mono font-semibold">2/2</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green" />
                  <span className="text-[10px] text-text-secondary flex-1">Ramipril 5mg</span>
                  <span className="text-[9px] text-text-tertiary font-mono">08:12</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green" />
                  <span className="text-[10px] text-text-secondary flex-1">Vitamin D3 2000IE</span>
                  <span className="text-[9px] text-text-tertiary font-mono">08:15</span>
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-[#44475a]">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-text-tertiary">30-Tage Compliance</span>
                  <span className="text-[10px] text-green font-mono font-bold">97%</span>
                </div>
                {/* Compliance bar */}
                <div className="mt-1 h-1 rounded-full bg-[#44475a] overflow-hidden">
                  <div className="h-full rounded-full bg-green" style={{ width: "97%" }} />
                </div>
              </div>
            </div>

            {/* Mood Status */}
            <div className="bg-[#1e1f29] rounded-xl border border-[#44475a] p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-text-primary">Stimmung</span>
                <span className="text-[9px] text-purple font-mono">Heute</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className={`w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold ${n <= 4 ? "bg-purple/20 text-purple" : "bg-[#44475a] text-text-tertiary"}`}>
                      {n}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-text-secondary">4/5 — Gut</span>
              </div>
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#44475a] text-text-tertiary">produktiv</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#44475a] text-text-tertiary">ausgeruht</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#44475a] text-text-tertiary">sport</span>
              </div>
              <div className="mt-2 pt-2 border-t border-[#44475a]">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-text-tertiary">7-Tage Durchschnitt</span>
                  <span className="text-[10px] text-purple font-mono font-bold">3.8/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMetric({
  label,
  value,
  unit,
  change,
  changeLabel,
  color,
}: {
  label: string;
  value: string;
  unit: string;
  change: string;
  changeLabel: string;
  color: string;
}) {
  const isNeg = change.startsWith("-");
  const changeColor = isNeg ? "text-cyan" : "text-text-tertiary";
  const colorMap: Record<string, string> = {
    purple: "border-l-purple",
    pink: "border-l-pink",
    cyan: "border-l-cyan",
    green: "border-l-green",
  };
  return (
    <div className={`bg-[#1e1f29] rounded-lg border border-[#44475a] ${colorMap[color]} border-l-2 p-3`}>
      <div className="text-[9px] text-text-tertiary mb-1.5 tracking-wider uppercase">{label}</div>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-display font-bold text-text-primary leading-none">{value}</span>
        <span className="text-[9px] text-text-tertiary">{unit}</span>
      </div>
      <div className={`text-[9px] mt-1 ${changeColor} font-mono`}>
        {change} {changeLabel}
      </div>
    </div>
  );
}

/* ── Feature Data ───────────────────────────────── */

const features = [
  {
    icon: <HeartMetricIcon />,
    title: "Gesundheitsmetriken",
    description: "Gewicht, Blutdruck, Puls, Körperfett, Schlaf und Schritte. Interaktive Trend-Charts mit gleitenden Durchschnitten, linearen Trendlinien und personalisierten Zielbereichen nach ESC/ESH- und WHO-Richtlinien.",
    color: "purple",
  },
  {
    icon: <PillIcon />,
    title: "Medikamentenmanagement",
    description: "Definiere flexible Einnahme-Zeitfenster, tracke Compliance mit 7- und 30-Tage-Raten, Streaks und Heatmap-Kalender. Externe API-Schnittstelle für die Einnahme-Protokollierung über iOS Shortcuts oder Home Assistant.",
    color: "cyan",
  },
  {
    icon: <MoodIcon />,
    title: "Stimmungstracking",
    description: "Bewerte deine Stimmung auf einer 5-Punkte-Skala mit optionalen Notizen und Tags. Analysiere Trends, Verteilungen und Korrelationen zwischen Stimmung und Gesundheitsmetriken.",
    color: "pink",
  },
  {
    icon: <BrainIcon />,
    title: "KI-Gesundheitsanalysen",
    description: "OpenAI-gestützte Insights zu sieben Bereichen: Allgemein, Blutdruck, Gewicht, Puls, Stimmung, Medikamente und BMI. Bring-Your-Own-Key-Modell — deine Daten verlassen nie deinen Server unkontrolliert.",
    color: "orange",
  },
  {
    icon: <FileIcon />,
    title: "Arztbericht als PDF",
    description: "Generiere professionelle PDF-Berichte im europäischen Medizin-Format direkt im Browser. Vitalzeichen-Tabellen, BP-Klassifikation nach ESC/ESH 2018, BMI nach WHO-Standards — alles auf Deutsch.",
    color: "green",
  },
  {
    icon: <SyncIcon />,
    title: "Withings-Synchronisation",
    description: "Verbinde Waagen, Blutdruckmessgeräte und Activity Tracker von Withings. Automatische und Webhook-basierte Synchronisation mit Deduplizierung und verschlüsseltem OAuth2-Token-Speicher.",
    color: "cyan",
  },
  {
    icon: <BellIcon />,
    title: "Drei Benachrichtigungskanäle",
    description: "Medikamenten-Erinnerungen über Telegram mit Inline-Buttons, ntfy als selbstgehosteter Push-Dienst und native Web-Push-Benachrichtigungen über VAPID. Eskalation bei verpassten Einnahmen.",
    color: "purple",
  },
  {
    icon: <TrophyIcon />,
    title: "Achievements & Gamification",
    description: "Über 30 Achievements mit persistenter Freischalt-Historie motivieren zur regelmäßigen Nutzung. Von ersten Messungen über Compliance-Streaks bis hin zu langfristigen Gesundheitszielen.",
    color: "orange",
  },
  {
    icon: <WifiOffIcon />,
    title: "Offline-fähige PWA",
    description: "Installiere HealthLog als Progressive Web App auf jedem Gerät. Intelligente Cache-Strategien im Service Worker sorgen dafür, dass du auch ohne Internetverbindung auf deine Daten zugreifen kannst.",
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  purple: { bg: "rgba(189,147,249,0.08)", text: "#bd93f9" },
  cyan: { bg: "rgba(139,233,253,0.08)", text: "#8be9fd" },
  pink: { bg: "rgba(255,121,198,0.08)", text: "#ff79c6" },
  green: { bg: "rgba(80,250,123,0.08)", text: "#50fa7b" },
  orange: { bg: "rgba(255,184,108,0.08)", text: "#ffb86c" },
};

/* ── Tech Stack ─────────────────────────────────── */

const techItems = [
  "Next.js 16",
  "TypeScript Strict",
  "PostgreSQL 16",
  "Prisma 7",
  "Progressive Web App",
  "AES-256-GCM",
  "WebAuthn / Passkeys",
  "Telegram Bot API",
  "OpenAI API (BYOK)",
  "Withings OAuth2",
  "pg-boss Queue",
  "Docker",
  "Recharts",
  "Zod v4",
  "Wide Events Logging",
];

/* ── Privacy Features ───────────────────────────── */

const privacyFeatures = [
  {
    icon: <ServerIcon />,
    title: "Self-Hosted",
    description: "Deine Instanz, dein Server, deine Regeln. HealthLog läuft komplett auf deiner eigenen Infrastruktur — ob Homelab, VPS oder Raspberry Pi. Keine Cloud-Abhängigkeit, kein Vendor Lock-in.",
  },
  {
    icon: <LockIcon />,
    title: "AES-256-GCM Verschlüsselung",
    description: "Alle sensitiven Daten — OAuth-Tokens, API-Keys, VAPID-Schlüssel — werden mit AES-256-GCM verschlüsselt, bevor sie die Datenbank erreichen. API-Tokens werden mit SHA-256 gehasht gespeichert.",
  },
  {
    icon: <KeyIcon />,
    title: "Passkey-Authentifizierung",
    description: "WebAuthn-basierte Passkeys als primäre Authentifizierung. Phishing-resistent, kein Passwort-Leak möglich. Optionaler Passwort-Fallback mit Argon2id-Hashing und zxcvbn-Stärkeprüfung.",
  },
];

/* ── Numbers Section Data ───────────────────────── */

const stats = [
  { value: "6", label: "Gesundheitsmetriken" },
  { value: "21", label: "Datenbankmodelle" },
  { value: "30+", label: "Achievements" },
  { value: "3", label: "Benachrichtigungskanäle" },
  { value: "2", label: "Sprachen (DE/EN)" },
  { value: "60+", label: "API-Endpunkte" },
];

/* ── Main Page ──────────────────────────────────── */

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
          <div className="reveal visible flex justify-center mb-10">
            <div className="logo-pulse">
              <LogoIcon className="w-16 h-16 md:w-20 md:h-20" />
            </div>
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
                backgroundImage: "linear-gradient(135deg, #bd93f9, #8be9fd, #ff79c6)",
              }}
            >
              Dein Dashboard.
            </span>
          </h1>

          {/* Subtitle — more content */}
          <p
            ref={addRevealRef}
            className="reveal visible text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-5 leading-relaxed font-light"
          >
            HealthLog ist eine self-hosted Health-Tracking-App, die dir die volle
            Kontrolle über deine Gesundheitsdaten gibt. Gewicht, Blutdruck,
            Medikamente, Stimmung und mehr — alles in einer modernen PWA, die
            auf deinem eigenen Server läuft.
          </p>
          <p
            ref={addRevealRef}
            className="reveal visible text-text-tertiary text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
          >
            End-to-End verschlüsselt. Offline-fähig. Mit KI-gestützten
            Gesundheitsanalysen und automatischer Gerätesynchronisation.
          </p>

          {/* CTA */}
          <div ref={addRevealRef} className="reveal visible flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://github.com/MBombeck/HealthLog" className="cta-button" target="_blank" rel="noopener noreferrer">
              <span>Auf GitHub ansehen</span>
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 relative z-10">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-text-secondary hover:text-text-primary text-sm font-display font-medium tracking-wide transition-colors"
            >
              Features entdecken
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M8 3v10m0 0l4-4m-4 4L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <p ref={addRevealRef} className="reveal text-purple text-xs font-mono tracking-[0.2em] uppercase mb-4">
              Features
            </p>
            <h2 ref={addRevealRef} className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary mb-4">
              Alles, was du brauchst.
            </h2>
            <p ref={addRevealRef} className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Von der täglichen Gewichtsmessung bis zum KI-gestützten
              Gesundheitsbericht — HealthLog deckt den kompletten Workflow
              deines persönlichen Health-Trackings ab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
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
                    style={{ backgroundColor: colors.bg, color: colors.text }}
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
        </div>
      </section>

      {/* ─── NUMBERS ──────────────────────────────── */}
      <section className="relative py-16 px-6">
        <div ref={addRevealRef} className="reveal max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-purple mb-1">
                {stat.value}
              </div>
              <div className="text-text-tertiary text-xs font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── APP MOCKUP ───────────────────────────── */}
      <section className="relative py-24 sm:py-32 px-6 section-glow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p ref={addRevealRef} className="reveal text-cyan text-xs font-mono tracking-[0.2em] uppercase mb-4">
              Interface
            </p>
            <h2 ref={addRevealRef} className="reveal font-display font-bold text-3xl sm:text-4xl tracking-tight text-text-primary mb-4">
              Klar. Präzise. Dracula.
            </h2>
            <p ref={addRevealRef} className="reveal text-text-secondary text-base max-w-xl mx-auto leading-relaxed">
              Ein dunkles, augenschonendes Interface basierend auf dem beliebten
              Dracula-Farbschema. Mobile-first designt, mit einer klaren
              Informationshierarchie und sofortigem Zugriff auf alle Metriken.
            </p>
          </div>

          <div ref={addRevealRef} className="reveal mt-12">
            <AppMockup />
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ───────────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div ref={addRevealRef} className="reveal text-center mb-8">
          <p className="text-text-tertiary text-xs font-mono tracking-[0.2em] uppercase">
            Gebaut mit
          </p>
        </div>

        <div className="relative">
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
      <section className="relative py-24 sm:py-32 px-6 section-glow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div ref={addRevealRef} className="reveal flex justify-center mb-6">
              <ShieldIcon className="shield-glow" />
            </div>
            <p ref={addRevealRef} className="reveal text-green text-xs font-mono tracking-[0.2em] uppercase mb-4">
              Datenschutz & Sicherheit
            </p>
            <h2 ref={addRevealRef} className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary mb-4">
              Deine Daten.
              <br />
              <span className="text-green/80">Dein Server.</span>
            </h2>
            <p ref={addRevealRef} className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              HealthLog wurde von Grund auf mit einem Security-First-Ansatz
              entwickelt. Keine Telemetrie, keine Analytics, keine externen
              Tracking-Scripts. Deine Gesundheitsdaten gehören dir — und bleiben
              auf deiner Infrastruktur, verschlüsselt und unter deiner vollen
              Kontrolle.
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

      {/* ─── CTA SECTION ──────────────────────────── */}
      <section className="relative py-24 px-6">
        <div ref={addRevealRef} className="reveal max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-text-primary mb-4">
            Bereit, deine Gesundheit
            <br />
            selbst in die Hand zu nehmen?
          </h2>
          <p className="text-text-secondary text-base max-w-lg mx-auto leading-relaxed mb-8">
            HealthLog ist Open Source und kostenlos. Starte mit Docker in
            wenigen Minuten und behalte die volle Kontrolle über deine
            Gesundheitsdaten.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://github.com/MBombeck/HealthLog" className="cta-button" target="_blank" rel="noopener noreferrer">
              <span>Repository auf GitHub</span>
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 relative z-10">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
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

"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ── SVG Icons ──────────────────────────────────── */

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} aria-label="HealthLog Logo">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#bd93f9" fillOpacity="0.2" stroke="#bd93f9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="3,12.5 8,12.5 9.5,9 11,16 12.5,7 14,12.5 15.5,12.5 21,12.5" fill="none" stroke="#bd93f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

/* ── Canvas ECG Heart Monitor ─────────────────── */

function ecgSample(t: number): number {
  const p = 0.22 * Math.exp(-Math.pow((t - 0.12) / 0.04, 2));
  const q = -0.08 * Math.exp(-Math.pow((t - 0.22) / 0.008, 2));
  const r = 1.0 * Math.exp(-Math.pow((t - 0.25) / 0.013, 2));
  const s = -0.12 * Math.exp(-Math.pow((t - 0.28) / 0.008, 2));
  const tw = 0.3 * Math.exp(-Math.pow((t - 0.42) / 0.045, 2));
  return p + q + r + s + tw;
}

function EcgMonitor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const baseline = h * 0.55;
    const amp = h * 0.4;

    const totalPx = Math.ceil(w);
    const beatsOnScreen = Math.max(3, Math.round(w / 350));
    const pxPerBeat = totalPx / beatsOnScreen;
    const data = new Float32Array(totalPx);
    for (let i = 0; i < totalPx; i++) {
      data[i] = ecgSample((i % pxPerBeat) / pxPerBeat);
    }

    const sweepSpeed = w / 5000;
    let sweepX = 0;
    let lastTime = -1;
    const gapPx = 60;
    const trailLength = Math.floor((totalPx - gapPx) * 0.45);
    const purple = [189, 147, 249];

    function frame(now: number) {
      if (lastTime < 0) lastTime = now;
      const dt = now - lastTime;
      lastTime = now;
      sweepX = (sweepX + sweepSpeed * dt) % w;

      const cv = canvasRef.current;
      if (!cv || !ctx) return;

      ctx.clearRect(0, 0, w, h);

      const sweepI = Math.floor(sweepX);

      for (let seg = 0; seg < trailLength - 1; seg++) {
        const i = (sweepI - trailLength + seg + totalPx) % totalPx;
        const j = (i + 1) % totalPx;
        const age = (trailLength - seg) / trailLength;
        const alpha = 0.05 + 0.95 * (1 - age);
        const y1 = baseline - data[i] * amp;
        const y2 = baseline - data[j] * amp;

        ctx.beginPath();
        ctx.moveTo(i < j ? i : 0, y1);
        ctx.lineTo(i < j ? j : 1, y2);
        ctx.strokeStyle = `rgba(${purple[0]},${purple[1]},${purple[2]},${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      const glowLen = Math.min(80, trailLength);
      ctx.shadowColor = `rgba(${purple[0]},${purple[1]},${purple[2]},0.8)`;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      let started = false;
      for (let seg = trailLength - glowLen; seg < trailLength; seg++) {
        const i = (sweepI - trailLength + seg + totalPx) % totalPx;
        const y = baseline - data[i] * amp;
        if (!started) { ctx.moveTo(i, y); started = true; }
        else { ctx.lineTo(i, y); }
      }
      ctx.strokeStyle = `rgba(${purple[0]},${purple[1]},${purple[2]},0.6)`;
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.shadowBlur = 0;

      const headY = baseline - data[sweepI] * amp;
      const grad = ctx.createRadialGradient(sweepX, headY, 0, sweepX, headY, 10);
      grad.addColorStop(0, "rgba(255,255,255,0.9)");
      grad.addColorStop(0.3, `rgba(${purple[0]},${purple[1]},${purple[2]},0.7)`);
      grad.addColorStop(1, `rgba(${purple[0]},${purple[1]},${purple[2]},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(sweepX, headY, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(sweepX, headY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    startAnimation();
    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      startAnimation();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [startAnimation]);

  return (
    <canvas
      ref={canvasRef}
      className="ecg-canvas"
      aria-hidden="true"
    />
  );
}

/* ── Realistic App Mockup ───────────────────────── */

function AppMockup() {
  return (
    <div className="gradient-border max-w-[820px] mx-auto">
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
              <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-text-tertiary flex-shrink-0" aria-hidden="true"><path d="M8 1a4 4 0 0 0-4 4v3H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V5a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.2" /></svg>
              <span className="text-[10px] font-mono text-text-tertiary tracking-wide truncate">health.myserver.com</span>
            </div>
          </div>
        </div>

        {/* App Content */}
        <div className="bg-[#282a36] p-4 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <LogoIcon className="w-5 h-5" />
                <span className="font-display font-bold text-sm text-text-primary tracking-tight">HealthLog</span>
              </div>
              <p className="text-[11px] text-text-tertiary">Good morning, Marc</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#44475a] flex items-center justify-center">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-text-tertiary" aria-hidden="true"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center">
                <span className="text-[11px] text-purple font-bold">M</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
            <DashboardMetric label="Weight" value="82.4" unit="kg" change="-0.8" changeLabel="7d" color="purple" />
            <DashboardMetric label="Systolic" value="124" unit="mmHg" change="-3" changeLabel="7d" color="pink" />
            <DashboardMetric label="Diastolic" value="78" unit="mmHg" change="+1" changeLabel="7d" color="cyan" />
            <DashboardMetric label="Heart Rate" value="68" unit="bpm" change="-2" changeLabel="7d" color="green" />
          </div>

          <div className="bg-[#1e1f29] rounded-xl border border-[#44475a] p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-text-primary">Weight Trend</span>
              <div className="flex gap-1">
                <span className="text-[9px] px-2 py-0.5 rounded bg-purple/15 text-purple font-mono">30d</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-[#44475a] text-text-tertiary font-mono">90d</span>
              </div>
            </div>
            <svg viewBox="0 0 320 70" className="w-full h-16" preserveAspectRatio="none" aria-label="Weight trend chart">
              <defs>
                <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#bd93f9" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#bd93f9" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect x="0" y="20" width="320" height="25" fill="rgba(80,250,123,0.04)" rx="2" />
              <path d="M0,55 C12,53 24,50 40,48 C56,46 72,42 88,40 C104,38 120,41 140,39 C160,37 176,34 196,32 C216,30 232,33 252,28 C272,23 288,20 320,18" fill="none" stroke="#bd93f9" strokeWidth="2" strokeLinecap="round" />
              <path d="M0,55 C12,53 24,50 40,48 C56,46 72,42 88,40 C104,38 120,41 140,39 C160,37 176,34 196,32 C216,30 232,33 252,28 C272,23 288,20 320,18 L320,70 L0,70 Z" fill="url(#mg)" />
            </svg>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[9px] text-text-tertiary font-mono">Feb 08</span>
              <span className="text-[9px] text-green font-mono">-2.3 kg trend</span>
              <span className="text-[9px] text-text-tertiary font-mono">Mar 08</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-[#1e1f29] rounded-xl border border-[#44475a] p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-text-primary">Medications today</span>
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
                  <span className="text-[9px] text-text-tertiary">30-day compliance</span>
                  <span className="text-[10px] text-green font-mono font-bold">97%</span>
                </div>
                <div className="mt-1 h-1 rounded-full bg-[#44475a] overflow-hidden">
                  <div className="h-full rounded-full bg-green" style={{ width: "97%" }} />
                </div>
              </div>
            </div>
            <div className="bg-[#1e1f29] rounded-xl border border-[#44475a] p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-text-primary">Mood</span>
                <span className="text-[9px] text-purple font-mono">Today</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className={`w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold ${n <= 4 ? "bg-purple/20 text-purple" : "bg-[#44475a] text-text-tertiary"}`}>{n}</div>
                  ))}
                </div>
                <span className="text-[10px] text-text-secondary">4/5 — Good</span>
              </div>
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#44475a] text-text-tertiary">productive</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#44475a] text-text-tertiary">well-rested</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#44475a] text-text-tertiary">exercise</span>
              </div>
              <div className="mt-2 pt-2 border-t border-[#44475a]">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-text-tertiary">7-day average</span>
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

function DashboardMetric({ label, value, unit, change, changeLabel, color }: {
  label: string; value: string; unit: string; change: string; changeLabel: string; color: string;
}) {
  const isNeg = change.startsWith("-");
  const changeColor = isNeg ? "text-cyan" : "text-text-tertiary";
  const borderMap: Record<string, string> = { purple: "border-l-purple", pink: "border-l-pink", cyan: "border-l-cyan", green: "border-l-green" };
  return (
    <div className={`bg-[#1e1f29] rounded-lg border border-[#44475a] ${borderMap[color]} border-l-2 p-3`}>
      <div className="text-[9px] text-text-tertiary mb-1.5 tracking-wider uppercase">{label}</div>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-display font-bold text-text-primary leading-none">{value}</span>
        <span className="text-[9px] text-text-tertiary">{unit}</span>
      </div>
      <div className={`text-[9px] mt-1 ${changeColor} font-mono`}>{change} {changeLabel}</div>
    </div>
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

/* ── Main Page ──────────────────────────────────── */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="aurora" />
        <div className="aurora-pink" />
        <div className="grid-pattern" />
        <EcgMonitor />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <LogoIcon className="w-16 h-16 md:w-20 md:h-20" />
          </div>

          <h1 className="font-display font-extrabold text-[2.75rem] sm:text-6xl md:text-[5.5rem] leading-[1.02] tracking-[-0.03em] mb-8">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://demo.healthlog.dev"
              className="cta-button group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Try the live demo</span>
              <ArrowIcon />
            </a>
            <a
              href="https://github.com/MBombeck/HealthLog"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${scrolled ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-25"}`}
          aria-hidden="true"
        >
          <div className="w-5 h-8 border border-text-tertiary rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-text-tertiary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── APP MOCKUP ───────────────────────────── */}
      <section id="interface" className="relative py-32 sm:py-40 px-6 section-glow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-cyan border-cyan/15 bg-cyan/[0.03]">Interface</span>
            </div>
            <h2 className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Your health dashboard
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              A dark, eye-friendly interface in the Dracula color scheme.
              Mobile-first, with instant access to all your metrics.
            </p>
          </div>
          <div className="reveal">
            <AppMockup />
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────── */}
      <section id="features" className="relative py-32 sm:py-40 px-6 section-glow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-purple border-purple/15 bg-purple/[0.03]">Features</span>
            </div>
            <h2 className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
              Everything you need.<br />
              <span className="text-text-secondary">Nothing you don&apos;t.</span>
            </h2>
            <p className="reveal text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From daily measurements to AI-powered health reports —
              HealthLog covers your entire health workflow.
            </p>
          </div>

          {/* Primary features — large cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            {primaryFeatures.map((feature, i) => {
              const colors = colorMap[feature.color];
              return (
                <div key={feature.title} className={`reveal reveal-delay-${i + 1} glass-card feature-card-accent p-8 group`} style={{ "--accent-color": colors.text } as React.CSSProperties}>
                  <div className="feature-icon mb-5" style={{ backgroundColor: colors.bg, color: colors.text }}>
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-3 tracking-[-0.01em]">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-[1.7]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Secondary features — compact cards */}
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
      <section className="relative py-32 sm:py-40 px-6 section-glow privacy-section">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="reveal flex justify-center mb-8">
              <ShieldIcon className="shield-glow" />
            </div>
            <div className="reveal flex justify-center mb-6">
              <span className="section-label text-green border-green/15 bg-green/[0.03]">Privacy & Security</span>
            </div>
            <h2 className="reveal font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
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
      <section className="relative py-20 overflow-hidden">
        <div className="reveal text-center mb-10">
          <p className="text-text-tertiary text-xs font-mono tracking-[0.2em] uppercase">Built with</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="tech-scroll">
              {[...techItems, ...techItems].map((item, i) => (
                <span key={`${item}-${i}`} className="flex-shrink-0 px-5 py-2.5 rounded-full border border-[rgba(98,114,164,0.08)] bg-[rgba(15,16,24,0.5)] text-text-secondary text-sm font-mono whitespace-nowrap hover:border-[rgba(189,147,249,0.2)] hover:text-text-primary transition-all duration-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA + QUICK START ────────────────────── */}
      <section className="relative py-32 sm:py-40 px-6 section-glow">
        <div className="reveal max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-text-primary mb-5">
            Up and running<br />in minutes
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-12">
            HealthLog is open source and free. Clone the repo,
            set your config, start with Docker.
          </p>

          <div className="glass-card terminal-window p-5 sm:p-6 text-left mb-12 max-w-lg mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green" />
              <span className="text-[11px] font-mono text-text-tertiary tracking-wide">terminal</span>
            </div>
            <pre className="text-sm font-mono text-purple leading-[1.8] overflow-x-auto">
              <code>{`git clone https://github.com/MBombeck/HealthLog.git
cd HealthLog
cp .env.example .env
docker compose up -d`}</code>
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://demo.healthlog.dev"
              className="cta-button group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Try the live demo</span>
              <ArrowIcon />
            </a>
            <a
              href="https://github.com/MBombeck/HealthLog"
              className="cta-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────── */}
      <footer className="relative py-14 px-6 border-t border-[rgba(98,114,164,0.06)]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <LogoIcon className="w-5 h-5" />
            <span className="font-display font-semibold text-sm text-text-tertiary tracking-tight">HealthLog</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://demo.healthlog.dev" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              Demo
            </a>
            <a href="https://docs.healthlog.dev" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              Docs
            </a>
            <a href="https://github.com/MBombeck/HealthLog" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm">
              GitHub
            </a>
            <span className="text-text-tertiary/60 text-xs font-mono">Open Source</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

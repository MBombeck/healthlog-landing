"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ── Scramble Decode Hook ─────────────────────────── */

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

function useScrambleDecode() {
  const intervalsRef = useRef<Set<ReturnType<typeof setInterval>>>(new Set());

  const decode = useCallback((target: string, setter: (v: string) => void, durationMs = 800) => {
    const len = target.length;
    const iterationsPerChar = 10;
    const totalSteps = len * iterationsPerChar;
    let step = 0;

    const id = setInterval(() => {
      const revealed = Math.floor(step / iterationsPerChar);
      let result = "";
      for (let i = 0; i < len; i++) {
        if (i < revealed) result += target[i];
        else result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      setter(result);
      step++;
      if (step >= totalSteps) {
        clearInterval(id);
        intervalsRef.current.delete(id);
        setter(target);
      }
    }, durationMs / totalSteps);
    intervalsRef.current.add(id);
  }, []);

  useEffect(() => {
    return () => { intervalsRef.current.forEach((id) => clearInterval(id)); };
  }, []);

  return decode;
}

/* ── Icons ────────────────────────────────────────── */

function CopyCheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
      <path d="M3 8.5L6.5 12L13 4" stroke="#50fa7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
      <rect x="5" y="2" width="6" height="2" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="3" y="4" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
      <circle cx="10.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 8l-5.5 5.5M4.5 11.5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" aria-hidden="true">
      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Demo Credentials Component ───────────────────── */

export function DemoCredentials() {
  const [credentialsRevealed, setCredentialsRevealed] = useState(false);
  const [displayUser, setDisplayUser] = useState("");
  const [displayPassword, setDisplayPassword] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const scrambleDecode = useScrambleDecode();
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const generateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      if (generateTimeoutRef.current) clearTimeout(generateTimeoutRef.current);
    };
  }, []);

  const copyToClipboard = useCallback(async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      setCopiedField(field);
      copyTimeoutRef.current = setTimeout(() => setCopiedField(null), 2000);
    } catch { /* clipboard not available */ }
  }, []);

  const handleGenerate = useCallback(() => {
    if (credentialsRevealed) return;
    setCredentialsRevealed(true);
    scrambleDecode("demo", setDisplayUser, 250);
    generateTimeoutRef.current = setTimeout(() => {
      scrambleDecode("demo123demo123", setDisplayPassword, 900);
    }, 300);
  }, [scrambleDecode, credentialsRevealed]);

  return (
    <div className="reveal demo-card glass-card max-w-md mx-auto p-8 mb-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-pink/10 flex items-center justify-center">
          <KeyIcon />
        </div>
        <div className="text-left">
          <p className="text-xs text-text-tertiary font-mono tracking-wider uppercase">Demo-Zugangsdaten</p>
        </div>
      </div>

      <div className="mb-8">
        {!credentialsRevealed ? (
          <button
            onClick={handleGenerate}
            className="generate-button group"
          >
            <KeyIcon />
            <span>Zugangsdaten generieren</span>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 transition-transform group-hover:rotate-90" aria-hidden="true">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        ) : (
          <div className="space-y-3 credential-enter">
            <div
              className="credential-field flex items-center justify-between px-4 py-3 rounded-xl bg-[rgba(15,16,24,0.8)] border border-[rgba(98,114,164,0.08)]"
              onClick={() => copyToClipboard("demo", "user")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copyToClipboard("demo", "user"); } }}
              role="button"
              tabIndex={0}
              aria-label="Copy username: demo"
            >
              <span className="text-xs text-text-tertiary font-mono tracking-wider uppercase">User</span>
              {copiedField === "user" ? (
                <span className="text-sm font-mono text-green font-semibold flex items-center gap-1.5">
                  <CopyCheckIcon /> Kopiert
                </span>
              ) : (
                <span className="text-sm font-mono text-purple font-semibold tracking-wide tabular-nums flex items-center gap-2">
                  {displayUser}
                  <ClipboardIcon />
                </span>
              )}
            </div>
            <div
              className="credential-field flex items-center justify-between px-4 py-3 rounded-xl bg-[rgba(15,16,24,0.8)] border border-[rgba(98,114,164,0.08)]"
              onClick={() => copyToClipboard("demo123demo123", "password")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copyToClipboard("demo123demo123", "password"); } }}
              role="button"
              tabIndex={0}
              aria-label="Copy password"
            >
              <span className="text-xs text-text-tertiary font-mono tracking-wider uppercase">Password</span>
              {copiedField === "password" ? (
                <span className="text-sm font-mono text-green font-semibold flex items-center gap-1.5">
                  <CopyCheckIcon /> Kopiert
                </span>
              ) : (
                <span className="text-sm font-mono text-purple font-semibold tracking-wide tabular-nums flex items-center gap-2">
                  {displayPassword}
                  <ClipboardIcon />
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <a
        href="https://demo.healthlog.dev"
        className="cta-button group w-full justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PlayIcon className="w-5 h-5 relative z-10" />
        <span>Try the live demo</span>
        <ArrowIcon />
      </a>
    </div>
  );
}

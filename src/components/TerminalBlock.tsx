"use client";

import { useRef, useState, useCallback, useEffect } from "react";

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

export function TerminalBlock({ commands }: { commands: string }) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
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

  return (
    <div
      className="group glass-card terminal-window terminal-copyable p-5 sm:p-6 text-left mb-12 max-w-lg mx-auto relative"
      onClick={() => copyToClipboard(commands, "terminal")}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copyToClipboard(commands, "terminal"); } }}
      role="button"
      tabIndex={0}
      aria-label="Copy installation commands"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green" />
          <span className="text-[11px] font-mono text-text-tertiary tracking-wide">terminal</span>
        </div>
        <div className="flex items-center gap-1.5 text-text-tertiary text-[10px] font-mono">
          {copiedField === "terminal" ? (
            <span className="flex items-center gap-1 text-green"><CopyCheckIcon /> Kopiert</span>
          ) : (
            <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"><ClipboardIcon /> Copy</span>
          )}
        </div>
      </div>
      <pre className="text-xs sm:text-sm font-mono text-purple leading-[1.8] overflow-x-auto">
        <code>{commands}</code>
      </pre>
    </div>
  );
}

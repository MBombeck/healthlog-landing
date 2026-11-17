"use client";

import { useCopy } from "@/components/useCopy";

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

/**
 * The install commands with a real copy button. A click anywhere on the block
 * still copies for pointer users; keyboard and screen-reader users get the
 * button. On devices without hover the button stays visible.
 */
export function TerminalBlock({ commands }: { commands: string }) {
  const { copied, failed, message, copy } = useCopy();
  const state = copied === "terminal" ? "copied" : failed === "terminal" ? "failed" : "idle";

  return (
    <div
      className="group glass-card terminal-window terminal-copyable p-5 sm:p-6 text-left mb-12 max-w-lg mx-auto relative"
      onClick={() => copy(commands, "terminal")}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green" />
          <span className="text-[11px] font-mono text-text-tertiary tracking-wide">terminal</span>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            copy(commands, "terminal");
          }}
          aria-label="Copy installation commands"
          className={`flex min-h-6 min-w-6 items-center gap-1.5 text-[10px] font-mono transition-opacity ${
            state === "idle"
              ? "text-text-tertiary [@media(hover:hover)]:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
              : state === "copied"
                ? "text-green"
                : "text-pink"
          }`}
        >
          {state === "copied" ? (
            <><CopyCheckIcon /> Copied</>
          ) : state === "failed" ? (
            "Copy failed"
          ) : (
            <><ClipboardIcon /> Copy</>
          )}
        </button>
      </div>
      <p role="status" className="sr-only">
        {message}
      </p>
      <pre className="text-xs sm:text-sm font-mono text-purple leading-[1.8] overflow-x-auto">
        <code>{commands}</code>
      </pre>
    </div>
  );
}

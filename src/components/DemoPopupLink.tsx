"use client";

import { useEffect, useRef, useState } from "react";

const DEMO_URL = "https://demo.healthlog.dev";
const USER = "demo";
const PASS = "demo123demo123";

const TITLE = "Demo access";
const NOTE = "The demo is password-protected. Sign in with these credentials.";
const OPEN = "Open the demo";

/** A "Demo" trigger that opens a popup with the basic-auth credentials. */
export function DemoPopupLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  function copy(value: string, field: string) {
    navigator.clipboard?.writeText(value).then(
      () => {
        setCopied(field);
        setTimeout(() => setCopied(null), 1600);
      },
      () => {},
    );
  }

  // Keyboard support while the dialog is open: move focus in, trap Tab,
  // close on Escape, and restore focus to the trigger on close.
  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeEl = document.activeElement;

      if (e.shiftKey && activeEl === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={TITLE}
          onClick={() => setOpen(false)}
        >
          <div
            ref={dialogRef}
            className="glass-card relative w-full max-w-sm p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-text-tertiary hover:text-text-primary absolute top-3 right-3 h-8 w-8"
            >
              ✕
            </button>
            <p className="text-text-tertiary font-mono text-xs tracking-[0.16em] uppercase">
              {TITLE}
            </p>
            <p className="text-text-secondary mt-3 text-sm leading-relaxed">
              {NOTE}
            </p>
            <div className="mt-4 space-y-2">
              {[
                { label: "User", value: USER, field: "u" },
                { label: "Password", value: PASS, field: "p" },
              ].map((c) => (
                <button
                  key={c.field}
                  type="button"
                  onClick={() => copy(c.value, c.field)}
                  className="flex w-full items-center justify-between rounded-lg border border-[rgba(98,114,164,0.18)] bg-[rgba(15,16,24,0.8)] px-3 py-2.5 text-left transition-colors hover:border-[rgba(189,147,249,0.35)]"
                >
                  <span className="text-text-tertiary font-mono text-xs uppercase">
                    {c.label}
                  </span>
                  <span className="text-purple font-mono text-sm font-semibold">
                    {copied === c.field ? "✓" : c.value}
                  </span>
                </button>
              ))}
            </div>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button group mt-5 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              <span>{OPEN}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useEffect, useId, useRef } from "react";

import { useCopy } from "@/components/useCopy";

const DEMO_URL = "https://demo.healthlog.dev";
const USER = "demo";
const PASS = "demo123demo123";

const TITLE = "Demo access";
const NOTE = "The demo is password-protected. Sign in with these credentials.";
const OPEN = "Open the demo";

/**
 * A "Demo" trigger that opens a native modal <dialog> with the basic-auth
 * credentials. The browser provides the focus containment, Esc and back
 * gesture, the inert page and the focus return to the trigger.
 */
export function DemoPopupLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();
  const { copied, failed, message, copy } = useCopy();

  // Light dismiss: closedby="any" where supported (not in Safari yet);
  // elsewhere close when a press both starts and ends outside the box.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || "closedBy" in HTMLDialogElement.prototype) return;

    const outside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };
    let pressedOutside = false;
    const onDown = (e: PointerEvent) => {
      pressedOutside = outside(e);
    };
    const onUp = (e: PointerEvent) => {
      if (pressedOutside && outside(e)) dialog.close();
    };
    dialog.addEventListener("pointerdown", onDown);
    dialog.addEventListener("pointerup", onUp);
    return () => {
      dialog.removeEventListener("pointerdown", onDown);
      dialog.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={className}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="demo-dialog glass-card w-full max-w-sm p-6"
        {...({ closedby: "any" } as Record<string, string>)}
      >
        <form method="dialog">
          <button
            type="submit"
            aria-label="Close"
            className="text-text-tertiary hover:text-text-primary absolute top-3 right-3 h-8 w-8"
          >
            ✕
          </button>
        </form>
        <p
          id={titleId}
          className="text-text-tertiary font-mono text-xs tracking-[0.16em] uppercase"
        >
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
              aria-label={`Copy ${c.label.toLowerCase()}: ${c.value}`}
              className="flex w-full items-center justify-between rounded-lg border border-[rgba(98,114,164,0.18)] bg-[rgba(15,16,24,0.8)] px-3 py-2.5 text-left transition-colors hover:border-[rgba(189,147,249,0.35)]"
            >
              <span className="text-text-tertiary font-mono text-xs uppercase">
                {c.label}
              </span>
              <span className="text-purple font-mono text-sm font-semibold">
                {copied === c.field ? "✓" : failed === c.field ? "Copy failed" : c.value}
              </span>
            </button>
          ))}
        </div>
        <p role="status" className="sr-only">
          {message}
        </p>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button group mt-5 w-full justify-center"
          onClick={() => dialogRef.current?.close()}
        >
          <span>{OPEN}</span>
          <span aria-hidden="true">→</span>
        </a>
      </dialog>
    </>
  );
}

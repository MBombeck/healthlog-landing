"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/**
 * Consent gate for the Rybbit analytics script (TDDDG § 25 (1), GDPR
 * Art. 6 (1) (a)).
 *
 * Nothing analytics-related is in the exported HTML. The tracker is injected
 * from here only after the visitor chose "Accept", and only then does it
 * write its visitor id to local storage. The choice itself is kept under
 * CONSENT_STORAGE_KEY, which is strictly necessary to remember it
 * (TDDDG § 25 (2) no. 2).
 *
 * The banner is fixed to the viewport and rendered only on the client after
 * the stored choice is known, so it never moves page content (no layout
 * shift) and never flashes for a visitor who already decided.
 */

export const CONSENT_STORAGE_KEY = "hl-analytics-consent";

const CHANGE_EVENT = "hl-analytics-consent-change";
const OPEN_EVENT = "hl-analytics-consent-open";

const RYBBIT_SRC = "/insight/script.js";
const RYBBIT_SITE_ID = "2";
// What the tracker writes (namespace "rybbit"): the persistent visitor id and
// an identified-user id in local storage, the replay sampling flag in session
// storage. Cleared when consent is declined or withdrawn.
const RYBBIT_LOCAL_KEYS = ["rybbit-visitor-id", "rybbit-user-id"];
const RYBBIT_SESSION_KEYS = ["rybbit-replay-sampled"];

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function rybbitTag(): HTMLScriptElement | null {
  return document.querySelector(`script[src="${RYBBIT_SRC}"]`);
}

function loadRybbit() {
  if (rybbitTag()) return;
  const s = document.createElement("script");
  s.src = RYBBIT_SRC;
  s.defer = true;
  s.dataset.siteId = RYBBIT_SITE_ID;
  document.head.appendChild(s);
}

function clearRybbitStorage() {
  try {
    RYBBIT_LOCAL_KEYS.forEach((k) => window.localStorage.removeItem(k));
    RYBBIT_SESSION_KEYS.forEach((k) => window.sessionStorage.removeItem(k));
  } catch {
    /* storage unavailable: nothing was written either */
  }
}

function isGerman(pathname: string | null) {
  return pathname === "/de" || (pathname ?? "").startsWith("/de/");
}

const TEXT = {
  en: {
    lang: "en",
    title: "Analytics",
    body: "May this site measure your visit? If you agree, it loads Rybbit, analytics on the maintainer's own server. It stores a random visitor id in your browser and records pages viewed, outbound links, errors and a session replay with form input masked. Nothing loads before you choose, and you can change it any time under Analytics settings in the footer.",
    privacy: "Privacy policy, section 3",
    privacyHref: "/privacy#website-analytics",
    accept: "Accept",
    decline: "Decline",
    current: (c: Choice) =>
      c === "granted"
        ? "Current choice: accepted."
        : "Current choice: declined.",
    settings: "Analytics settings",
  },
  de: {
    lang: "de",
    title: "Webanalyse",
    body: "Darf diese Website Ihren Besuch messen? Dann lädt sie Rybbit, eine Webanalyse auf dem eigenen Server des Entwicklers. Rybbit speichert eine zufällige Besucherkennung im Browser und erfasst aufgerufene Seiten, Klicks auf externe Links, Fehler und eine Sitzungsaufzeichnung mit verdeckten Formulareingaben. Vor Ihrer Wahl lädt nichts, und Sie können sie jederzeit unter Analyse-Einstellungen am Seitenende ändern.",
    privacy: "Datenschutzerklärung, Abschnitt 3",
    privacyHref: "/de/privacy#website-analytics",
    accept: "Zustimmen",
    decline: "Ablehnen",
    current: (c: Choice) =>
      c === "granted"
        ? "Aktuelle Wahl: zugestimmt."
        : "Aktuelle Wahl: abgelehnt.",
    settings: "Analyse-Einstellungen",
  },
} as const;

// Both buttons share one style on purpose: neither choice is visually
// preferred.
const BUTTON =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(189,147,249,0.35)] bg-purple/10 px-5 text-sm font-semibold text-text-primary transition-colors hover:bg-purple/20 sm:min-w-32";

export function AnalyticsConsent() {
  const stored = useSyncExternalStore(
    subscribe,
    readChoice,
    () => "pending" as const,
  );
  // Fallback when local storage is blocked: the choice holds for this page.
  const [sessionChoice, setSessionChoice] = useState<Choice | null>(null);
  const [reopened, setReopened] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const t = isGerman(usePathname()) ? TEXT.de : TEXT.en;
  const titleId = useId();
  const bodyId = useId();

  const choice: Choice | null =
    stored === "pending" ? null : (stored ?? sessionChoice);

  useEffect(() => {
    if (choice === "granted") loadRybbit();
    if (choice === "denied") clearRybbitStorage();
  }, [choice]);

  useEffect(() => {
    const open = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setReopened(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (reopened) panelRef.current?.focus();
  }, [reopened]);

  if (stored === "pending") return null;
  if (choice !== null && !reopened) return null;

  const close = () => {
    setReopened(false);
    returnFocusRef.current?.focus();
    returnFocusRef.current = null;
  };

  const decide = (next: Choice) => {
    const wasLoaded = rybbitTag() !== null;
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, next);
    } catch {
      /* blocked storage: fall back to the in-memory choice */
    }
    setSessionChoice(next);
    if (next === "denied" && wasLoaded) {
      // A running tracker cannot be unloaded; clear what it wrote and reload
      // so the page comes back without it.
      clearRybbitStorage();
      window.location.reload();
      return;
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
    close();
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        lang={t.lang}
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key === "Escape" && choice !== null) close();
        }}
        className="bg-surface-raised/95 pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-[rgba(98,114,164,0.2)] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md focus:outline-none sm:p-5"
      >
        <h2
          id={titleId}
          className="font-display text-text-primary text-sm font-semibold tracking-tight"
        >
          {t.title}
        </h2>
        <p
          id={bodyId}
          className="text-text-secondary mt-1.5 text-sm leading-relaxed"
        >
          {t.body}{" "}
          <Link
            href={t.privacyHref}
            className="text-purple hover:text-cyan underline underline-offset-2"
          >
            {t.privacy}
          </Link>
        </p>
        {choice !== null && (
          <p className="text-text-tertiary mt-2 text-xs">{t.current(choice)}</p>
        )}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:justify-end">
          <button
            type="button"
            className={BUTTON}
            onClick={() => decide("denied")}
          >
            {t.decline}
          </button>
          <button
            type="button"
            className={BUTTON}
            onClick={() => decide("granted")}
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Reopens the consent banner so a visitor can change or withdraw a choice. */
export function AnalyticsSettingsButton({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const t = isGerman(usePathname()) ? TEXT.de : TEXT.en;
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      {children ?? t.settings}
    </button>
  );
}

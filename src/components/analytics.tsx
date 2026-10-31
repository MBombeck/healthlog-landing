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
 * Visit counting with the self-hosted Rybbit server, without consent and
 * without touching the visitor's device.
 *
 * Rybbit's own tracker script is not used: it writes a persistent visitor id
 * to local storage on load, which needs consent under TDDDG § 25 (1). This
 * component sends the two events the site actually reads, a page view and a
 * click on a link to another site, straight to the tracking endpoint under
 * /insight/ (proxied to the Rybbit API by nginx in the Dockerfile). Nothing
 * is stored or read for counting. Without a client id the server identifies
 * a visitor by a hash of IP address and user agent salted per day (site
 * setting "saltUserIds"), so visits cannot be linked from one day to the
 * next; the IP address itself is not stored ("trackIp" off). Session replay,
 * clicks, copy, form, error, web-vitals and URL-parameter tracking are off in
 * the site config and nothing here sends them; privacy section 3 describes
 * exactly this set.
 *
 * Legal basis is the legitimate interest in knowing which pages are read
 * (GDPR Art. 6 (1) (f)), so a visitor can object: the settings panel turns
 * counting off for the browser, kept under OPT_OUT_STORAGE_KEY, which is
 * strictly necessary to remember that request (TDDDG § 25 (2) no. 2). A
 * browser that sends Global Privacy Control or Do Not Track is not counted.
 */

export const OPT_OUT_STORAGE_KEY = "hl-analytics-optout";

// The consent banner this replaced stored "denied" here. A visitor who
// declined then is treated as having objected now.
const LEGACY_CONSENT_KEY = "hl-analytics-consent";
// What Rybbit's script wrote for visitors who accepted the old banner.
const LEGACY_TRACKER_KEYS = ["rybbit-visitor-id", "rybbit-user-id"];
const LEGACY_TRACKER_SESSION_KEYS = ["rybbit-replay-sampled"];

const CHANGE_EVENT = "hl-analytics-change";
const OPEN_EVENT = "hl-analytics-open";

const TRACK_URL = "/insight/track";
const SITE_ID = "2";

type State = "on" | "off" | "signal";

function browserSignal(): boolean {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  return nav.globalPrivacyControl === true || nav.doNotTrack === "1";
}

function readState(): State {
  if (browserSignal()) return "signal";
  try {
    if (window.localStorage.getItem(OPT_OUT_STORAGE_KEY) === "1") return "off";
    if (window.localStorage.getItem(LEGACY_CONSENT_KEY) === "denied") {
      return "off";
    }
  } catch {
    /* storage unavailable: fall through to the default */
  }
  return "on";
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function clearLegacyStorage() {
  try {
    LEGACY_TRACKER_KEYS.forEach((k) => window.localStorage.removeItem(k));
    LEGACY_TRACKER_SESSION_KEYS.forEach((k) =>
      window.sessionStorage.removeItem(k),
    );
    if (window.localStorage.getItem(LEGACY_CONSENT_KEY) !== null) {
      if (window.localStorage.getItem(LEGACY_CONSENT_KEY) === "denied") {
        window.localStorage.setItem(OPT_OUT_STORAGE_KEY, "1");
      }
      window.localStorage.removeItem(LEGACY_CONSENT_KEY);
    }
  } catch {
    /* storage unavailable: nothing was written either */
  }
}

function send(event: Record<string, string>) {
  try {
    void fetch(TRACK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        site_id: SITE_ID,
        hostname: window.location.hostname,
        pathname: window.location.pathname,
        ...event,
      }),
      keepalive: true,
      credentials: "omit",
    }).catch(() => {});
  } catch {
    /* counting never breaks the page */
  }
}

/** Only the referring site's origin, and only when it is another site. */
function externalReferrer(): string {
  try {
    const ref = new URL(document.referrer);
    return ref.hostname === window.location.hostname ? "" : ref.origin;
  } catch {
    return "";
  }
}

function isGerman(pathname: string | null) {
  return pathname === "/de" || (pathname ?? "").startsWith("/de/");
}

const TEXT = {
  en: {
    lang: "en",
    title: "Visit counting",
    body: "This site counts page views and clicks on links to other sites with Rybbit, analytics on the maintainer's own server. It sets no cookies and stores nothing in your browser for that. Your IP address is not stored, and visits cannot be linked from one day to the next.",
    privacy: "Privacy policy, section 3",
    privacyHref: "/privacy#website-analytics",
    turnOff: "Don't count me",
    turnOn: "Count my visits",
    close: "Close",
    current: (s: State) =>
      s === "signal"
        ? "Your browser sends Global Privacy Control or Do Not Track, so your visits are not counted."
        : s === "off"
          ? "Your visits are not counted in this browser."
          : "Your visits are counted.",
    settings: "Analytics settings",
  },
  de: {
    lang: "de",
    title: "Besuchszählung",
    body: "Diese Website zählt Seitenaufrufe und Klicks auf Links zu anderen Websites mit Rybbit, einer Webanalyse auf dem eigenen Server des Entwicklers. Dafür setzt sie keine Cookies und speichert nichts in Ihrem Browser. Ihre IP-Adresse wird nicht gespeichert, und Besuche lassen sich nicht über einen Tag hinaus verknüpfen.",
    privacy: "Datenschutzerklärung, Abschnitt 3",
    privacyHref: "/de/privacy#website-analytics",
    turnOff: "Nicht mitzählen",
    turnOn: "Mitzählen",
    close: "Schließen",
    current: (s: State) =>
      s === "signal"
        ? "Ihr Browser sendet Global Privacy Control oder Do Not Track, deshalb werden Ihre Besuche nicht gezählt."
        : s === "off"
          ? "Ihre Besuche werden in diesem Browser nicht gezählt."
          : "Ihre Besuche werden gezählt.",
    settings: "Analyse-Einstellungen",
  },
} as const;

// Both choices share one style on purpose: neither is visually preferred.
const BUTTON =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(189,147,249,0.35)] bg-purple/10 px-5 text-sm font-semibold text-text-primary transition-colors hover:bg-purple/20 sm:min-w-32";

export function Analytics() {
  const state = useSyncExternalStore(
    subscribe,
    readState,
    () => "pending" as const,
  );
  const pathname = usePathname();
  const lastSent = useRef<string | null>(null);
  const firstView = useRef(true);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const t = isGerman(pathname) ? TEXT.de : TEXT.en;
  const titleId = useId();
  const bodyId = useId();

  useEffect(() => {
    clearLegacyStorage();
  }, []);

  useEffect(() => {
    if (state !== "on" || lastSent.current === pathname) return;
    lastSent.current = pathname;
    const referrer = firstView.current ? externalReferrer() : "";
    firstView.current = false;
    // Next sets the new page's title just after navigation commits.
    const timer = window.setTimeout(() => {
      send({ type: "pageview", page_title: document.title, referrer });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [state, pathname]);

  useEffect(() => {
    if (state !== "on") return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!(a instanceof HTMLAnchorElement)) return;
      let url: URL;
      try {
        url = new URL(a.href);
      } catch {
        return;
      }
      if (!url.protocol.startsWith("http")) return;
      if (url.hostname === window.location.hostname) return;
      send({
        type: "outbound",
        properties: JSON.stringify({ url: url.origin + url.pathname }),
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, [state]);

  useEffect(() => {
    const onOpen = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (state === "pending" || !open) return null;

  const close = () => {
    setOpen(false);
    returnFocusRef.current?.focus();
    returnFocusRef.current = null;
  };

  const choose = (count: boolean) => {
    try {
      if (count) window.localStorage.removeItem(OPT_OUT_STORAGE_KEY);
      else window.localStorage.setItem(OPT_OUT_STORAGE_KEY, "1");
    } catch {
      /* blocked storage: the choice cannot be kept */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
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
          if (e.key === "Escape") close();
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
        <p className="text-text-tertiary mt-2 text-xs" aria-live="polite">
          {t.current(state)}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:justify-end">
          {state !== "signal" && (
            <button
              type="button"
              className={BUTTON}
              onClick={() => choose(state === "off")}
            >
              {state === "off" ? t.turnOn : t.turnOff}
            </button>
          )}
          <button type="button" className={BUTTON} onClick={close}>
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Opens the panel where a visitor can turn counting off or back on. */
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

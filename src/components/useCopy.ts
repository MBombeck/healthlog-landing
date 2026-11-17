"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Copy text with the Async Clipboard API and report both outcomes. `message`
 * feeds a role="status" live region, so screen readers hear the same result
 * that sighted users see. A repeated message gets a no-break space appended,
 * because VoiceOver skips an announcement identical to the previous one.
 */
export function useCopy(resetMs = 2000) {
  const [copied, setCopied] = useState<string | null>(null);
  const [failed, setFailed] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const last = useRef("");

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = useCallback(
    async (text: string, field: string) => {
      let ok = true;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        ok = false;
      }
      if (timer.current) clearTimeout(timer.current);
      let next = ok ? "Copied" : "Copy failed";
      if (next === last.current) next += " ";
      last.current = next;
      setCopied(ok ? field : null);
      setFailed(ok ? null : field);
      setMessage(next);
      timer.current = setTimeout(() => {
        setCopied(null);
        setFailed(null);
        setMessage("");
      }, resetMs);
    },
    [resetMs],
  );

  return { copied, failed, message, copy };
}

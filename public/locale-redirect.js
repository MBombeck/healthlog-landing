/*
 * First-visit locale selection for the /learn guides.
 *
 * The site is a static export, so there is no server or edge layer to read
 * Accept-Language and redirect. This runs as a render-blocking <script src>
 * in the document <head>, before the body paints, so the decision happens
 * with no flash of the wrong language.
 *
 * Rules:
 *  - An explicit switcher choice is stored in localStorage and always wins.
 *    Once stored, browser detection never overrides it.
 *  - Detection only ever upgrades an unprefixed default-locale /learn page to
 *    its localized variant (/learn -> /<lang>/learn). It never pulls a visitor
 *    off a URL that already carries a locale prefix, so shared and crawled
 *    per-locale URLs are left intact and there is no redirect loop.
 *  - Only the /learn section has localized variants; every other page is left
 *    untouched.
 *
 * This file is the single source of truth: the pure helpers below are unit
 * tested via `node --test scripts/locale-redirect.test.mjs`. The browser block
 * at the bottom runs only when a DOM is present.
 */
(function () {
  "use strict";

  var DEFAULT = "en";
  // Locales that carry a URL prefix (everything except the default).
  var PREFIXED = ["de", "es", "fr", "it", "pl"];
  var STORAGE_KEY = "hl-learn-locale";

  // Map a browser language list (navigator.languages) to a supported locale.
  // Returns the matched locale, or null when nothing supported matches.
  function pickLocale(languages) {
    if (!languages) return null;
    for (var i = 0; i < languages.length; i++) {
      if (!languages[i]) continue;
      var base = String(languages[i]).toLowerCase().split("-")[0];
      if (base === DEFAULT) return DEFAULT;
      if (PREFIXED.indexOf(base) !== -1) return base;
    }
    return null;
  }

  // Given the current pathname and a chosen locale, return the localized path
  // to redirect to, or null when no redirect should happen. Only unprefixed
  // /learn pages are upgraded; prefixed URLs and non-/learn pages return null.
  function targetPath(pathname, locale) {
    if (!locale || locale === DEFAULT) return null;
    if (PREFIXED.indexOf(locale) === -1) return null;
    var seg = pathname.split("/")[1];
    if (PREFIXED.indexOf(seg) !== -1) return null; // already on a localized URL
    if (pathname === "/learn" || pathname.indexOf("/learn/") === 0) {
      return "/" + locale + pathname;
    }
    return null;
  }

  // Resolve the locale to apply: an explicit stored choice wins; otherwise fall
  // back to browser detection. Returns null when the default should stand.
  function resolveLocale(stored, languages) {
    if (stored) return stored;
    return pickLocale(languages);
  }

  // Export the pure helpers for the Node test runner.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      pickLocale: pickLocale,
      targetPath: targetPath,
      resolveLocale: resolveLocale,
      DEFAULT: DEFAULT,
      PREFIXED: PREFIXED,
      STORAGE_KEY: STORAGE_KEY,
    };
  }

  // ---- Browser runtime ----
  if (typeof document === "undefined" || typeof window === "undefined") return;

  // Persist an explicit switcher choice via event delegation. The switcher
  // links carry data-locale-pick="<locale>"; capturing the click here keeps the
  // switcher itself zero-JS and server-rendered.
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var link = target.closest("[data-locale-pick]");
    if (!link) return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        link.getAttribute("data-locale-pick"),
      );
    } catch (_) {
      /* localStorage unavailable (private mode, blocked) — ignore */
    }
  });

  // First-visit / return-visit redirect decision.
  var stored = null;
  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch (_) {
    return; // no storage access -> cannot detect safely, leave the page as-is
  }

  var languages = navigator.languages || (navigator.language ? [navigator.language] : []);
  var locale = resolveLocale(stored, languages);
  var to = targetPath(window.location.pathname, locale);
  if (to) {
    window.location.replace(to + window.location.search + window.location.hash);
  }
})();

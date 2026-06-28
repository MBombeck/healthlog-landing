// Unit tests for the first-visit locale selection logic.
// Run: node --test scripts/locale-redirect.test.mjs
//
// Imports the same module the browser loads from /locale-redirect.js, so the
// tested logic and the shipped logic can never drift.

import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { pickLocale, targetPath, resolveLocale, DEFAULT } = require(
  "../public/locale-redirect.js",
);

test("pickLocale: exact supported language", () => {
  assert.equal(pickLocale(["de"]), "de");
  assert.equal(pickLocale(["fr"]), "fr");
});

test("pickLocale: regional variant maps to base locale", () => {
  assert.equal(pickLocale(["de-AT"]), "de");
  assert.equal(pickLocale(["es-MX", "es"]), "es");
  assert.equal(pickLocale(["it-CH"]), "it");
});

test("pickLocale: first supported entry wins, in order", () => {
  assert.equal(pickLocale(["pt", "pt-BR", "fr-FR", "de"]), "fr");
});

test("pickLocale: English is recognised as the default", () => {
  assert.equal(pickLocale(["en-GB"]), "en");
});

test("pickLocale: unsupported language falls back to null (default stands)", () => {
  assert.equal(pickLocale(["pt", "ja", "zh-CN"]), null);
  assert.equal(pickLocale([]), null);
  assert.equal(pickLocale(undefined), null);
});

test("targetPath: upgrades an unprefixed learn hub", () => {
  assert.equal(targetPath("/learn", "de"), "/de/learn");
});

test("targetPath: upgrades an unprefixed learn article and topic", () => {
  assert.equal(
    targetPath("/learn/resting-heart-rate", "fr"),
    "/fr/learn/resting-heart-rate",
  );
  assert.equal(
    targetPath("/learn/topic/vitals", "it"),
    "/it/learn/topic/vitals",
  );
});

test("targetPath: never touches an already-localized URL (no loop)", () => {
  assert.equal(targetPath("/de/learn", "de"), null);
  assert.equal(targetPath("/fr/learn/resting-heart-rate", "de"), null);
});

test("targetPath: default locale never redirects", () => {
  assert.equal(targetPath("/learn", DEFAULT), null);
  assert.equal(targetPath("/learn", null), null);
});

test("targetPath: non-learn pages are left untouched", () => {
  assert.equal(targetPath("/", "de"), null);
  assert.equal(targetPath("/features", "de"), null);
  assert.equal(targetPath("/privacy", "fr"), null);
});

test("resolveLocale: stored explicit choice wins over browser language", () => {
  // Visitor explicitly picked English; browser is German -> stay English.
  assert.equal(resolveLocale("en", ["de-DE", "de"]), "en");
  // Visitor explicitly picked German; browser is French -> German persists.
  assert.equal(resolveLocale("de", ["fr-FR"]), "de");
});

test("resolveLocale: with no stored choice, detect from the browser", () => {
  assert.equal(resolveLocale(null, ["de-DE"]), "de");
  assert.equal(resolveLocale(null, ["ja"]), null);
});

test("end-to-end: stored 'en' on the default hub does not redirect", () => {
  const locale = resolveLocale("en", ["de"]);
  assert.equal(targetPath("/learn", locale), null);
});

test("end-to-end: first-visit German on the default hub redirects once", () => {
  const locale = resolveLocale(null, ["de-AT", "de"]);
  assert.equal(targetPath("/learn", locale), "/de/learn");
  // The post-redirect page is already localized -> no second hop.
  assert.equal(targetPath("/de/learn", locale), null);
});

test("end-to-end: unsupported browser language stays on the default", () => {
  const locale = resolveLocale(null, ["pt-BR", "pt"]);
  assert.equal(targetPath("/learn", locale), null);
});

// Postbuild: set <html lang> per locale on the exported /learn pages.
// Next's single root layout hardcodes lang="en"; for the static export we
// rewrite the localized output so de/es/fr/it/pl pages declare their language
// (WCAG 3.1.1 + correct hreflang/og:locale signal for crawlers).
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;
const LOCALES = ["de", "es", "fr", "it", "pl"];

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith(".html")) yield p;
  }
}

let changed = 0;
for (const locale of LOCALES) {
  const dir = join(OUT, locale);
  try {
    for await (const file of htmlFiles(dir)) {
      const html = await readFile(file, "utf8");
      if (html.includes('lang="en"')) {
        await writeFile(file, html.replace('lang="en"', `lang="${locale}"`));
        changed++;
      }
    }
  } catch {
    /* locale dir may not exist */
  }
}
console.log(`fix-html-lang: set lang on ${changed} localized pages`);

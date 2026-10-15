// Turns a set of raw app captures into the screenshots the site serves.
//
//   node scripts/optimize-screens.mjs <capture-dir>
//
// <capture-dir> holds `dark/<name>.png` and `light/<name>.png`, captured from
// the demo at 1600x785 CSS px (phones at 390x844) with device scale 2. Every
// capture becomes AVIF and WebP at a few widths under public/screenshots/app/,
// named with a hash of the source bytes, so a recapture always ships under new
// URLs and no CDN keeps serving the old picture. The manifest the pages read
// (src/content/app-screens.json) is rewritten with the new names, and files
// from the previous set are removed.
//
// Run by hand after a recapture; the build does not run it.
import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const src = process.argv[2];
if (!src) {
  console.error("usage: node scripts/optimize-screens.mjs <capture-dir>");
  process.exit(1);
}
const OUT = new URL("../public/screenshots/app/", import.meta.url).pathname;
const MANIFEST = new URL("../src/content/app-screens.json", import.meta.url)
  .pathname;
const THEMES = ["dark", "light"];

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const names = (await readdir(join(src, "dark")))
  .filter((f) => f.endsWith(".png"))
  .map((f) => f.slice(0, -4))
  .sort();

const manifest = {};
for (const name of names) {
  const phone = name.startsWith("phone-");
  const widths = phone ? [390, 780] : [1000, 1600, 2400];
  const entry = { width: 0, height: 0, dark: {}, light: {} };
  for (const theme of THEMES) {
    const file = join(src, theme, `${name}.png`);
    const bytes = await readFile(file);
    const hash = createHash("sha256").update(bytes).digest("hex").slice(0, 8);
    const meta = await sharp(bytes).metadata();
    entry.width = meta.width;
    entry.height = meta.height;
    for (const fmt of ["avif", "webp"]) {
      entry[theme][fmt] = [];
      for (const w of widths) {
        const out = `${name}-${theme}-${w}.${hash}.${fmt}`;
        const img = sharp(bytes).resize(w, null, { kernel: "lanczos3" });
        await (fmt === "avif"
          ? img.avif({ quality: 60, effort: 6 })
          : img.webp({ quality: 82, effort: 6 })
        ).toFile(join(OUT, out));
        entry[theme][fmt].push({ w, src: `/screenshots/app/${out}` });
      }
    }
  }
  manifest[name] = entry;
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`optimize-screens: ${names.length} screens, both themes`);

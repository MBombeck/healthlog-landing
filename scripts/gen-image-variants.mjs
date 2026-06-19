// Prebuild: generate WebP + AVIF (and small thumbnails) for every /learn JPEG.
// The hub previously shipped ~3.5 MB of full-res JPEGs as card thumbnails; this
// produces modern formats + 560px thumbs so <picture> can serve a fraction of
// that. Idempotent: skips variants newer than their source.
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const DIRS = [
  new URL("../public/learn-img/", import.meta.url).pathname,
  new URL("../public/learn-img-2/", import.meta.url).pathname,
];
const THUMB_W = 560;

async function fresh(src, out) {
  try {
    const [s, o] = await Promise.all([stat(src), stat(out)]);
    return o.mtimeMs >= s.mtimeMs;
  } catch {
    return false;
  }
}

let made = 0;
for (const dir of DIRS) {
  let files;
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith(".jpg") && !f.includes("-thumb"));
  } catch {
    continue;
  }
  for (const f of files) {
    const src = join(dir, f);
    const base = f.slice(0, -4);
    const jobs = [
      { out: join(dir, `${base}.webp`), run: (i) => i.webp({ quality: 80 }) },
      { out: join(dir, `${base}.avif`), run: (i) => i.avif({ quality: 55 }) },
      { out: join(dir, `${base}-thumb.jpg`), run: (i) => i.resize(THUMB_W).jpeg({ quality: 78, mozjpeg: true }) },
      { out: join(dir, `${base}-thumb.webp`), run: (i) => i.resize(THUMB_W).webp({ quality: 76 }) },
      { out: join(dir, `${base}-thumb.avif`), run: (i) => i.resize(THUMB_W).avif({ quality: 52 }) },
    ];
    for (const j of jobs) {
      if (await fresh(src, j.out)) continue;
      await j.run(sharp(src)).toFile(j.out);
      made++;
    }
  }
}
console.log(`gen-image-variants: wrote ${made} image variants`);

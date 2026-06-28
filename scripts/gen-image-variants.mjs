// Prebuild: generate WebP + AVIF (and small thumbnails) for every /learn JPEG.
// The hub previously shipped ~3.5 MB of full-res JPEGs as card thumbnails; this
// produces modern formats + 560px thumbs so <picture> can serve a fraction of
// that.
//
// Variants are always regenerated from their source JPEG. The earlier
// mtime-based skip ("output newer than source") was not safe on incremental or
// layer-cached builds: when a hero JPEG was replaced, a stale derived variant
// whose mtime happened to sit ahead of the new source survived and shipped. A
// Learn overview card kept serving the pre-update AVIF thumbnail that way while
// its JPEG sibling had already been refreshed. The variant set is tiny, so a
// full regenerate every build is cheap and keeps the source the single truth.
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const DIRS = [
  new URL("../public/learn-img/", import.meta.url).pathname,
  new URL("../public/learn-img-2/", import.meta.url).pathname,
];
const THUMB_W = 560;

let made = 0;
for (const dir of DIRS) {
  let files;
  try {
    files = (await readdir(dir)).filter(
      (f) => f.endsWith(".jpg") && !f.includes("-thumb"),
    );
  } catch {
    continue;
  }
  for (const f of files) {
    const src = join(dir, f);
    const base = f.slice(0, -4);
    const jobs = [
      { out: join(dir, `${base}.webp`), run: (i) => i.webp({ quality: 80 }) },
      { out: join(dir, `${base}.avif`), run: (i) => i.avif({ quality: 55 }) },
      {
        out: join(dir, `${base}-thumb.jpg`),
        run: (i) => i.resize(THUMB_W).jpeg({ quality: 78, mozjpeg: true }),
      },
      {
        out: join(dir, `${base}-thumb.webp`),
        run: (i) => i.resize(THUMB_W).webp({ quality: 76 }),
      },
      {
        out: join(dir, `${base}-thumb.avif`),
        run: (i) => i.resize(THUMB_W).avif({ quality: 52 }),
      },
    ];
    for (const j of jobs) {
      await j.run(sharp(src)).toFile(j.out);
      made++;
    }
  }
}
console.log(`gen-image-variants: wrote ${made} image variants`);

const DESKTOP = [
  { w: 1200, src: "/screenshots/theme/theme-split-desktop-1200.d5de4468.webp" },
  { w: 2400, src: "/screenshots/theme/theme-split-desktop-2400.d5de4468.webp" },
];
const PHONE = [
  { w: 585, src: "/screenshots/theme/theme-split-phone-585.fd7a0908.webp" },
  { w: 1170, src: "/screenshots/theme/theme-split-phone-1170.fd7a0908.webp" },
];

const srcSet = (list: { w: number; src: string }[]) =>
  list.map((v) => `${v.src} ${v.w}w`).join(", ");

/**
 * The dashboard in both themes at once, split on the diagonal: dark in the
 * top-left half, light in the bottom-right. A phone gets the phone capture,
 * everything wider the desktop one.
 */
export function ThemeSplitShot({ alt }: { alt: string }) {
  return (
    <picture>
      <source
        media="(max-width: 639px)"
        type="image/webp"
        srcSet={srcSet(PHONE)}
        sizes="100vw"
        width={1170}
        height={2532}
      />
      <source
        type="image/webp"
        srcSet={srcSet(DESKTOP)}
        sizes="(max-width: 1200px) 100vw, 1152px"
        width={2400}
        height={1500}
      />
      <img
        src={DESKTOP[0].src}
        alt={alt}
        width={2400}
        height={1500}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="block h-auto w-full"
      />
    </picture>
  );
}

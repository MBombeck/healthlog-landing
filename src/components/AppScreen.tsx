import screens from "@/content/app-screens.json";

export type AppScreenName = keyof typeof screens;

type Variant = { w: number; src: string };

const srcSet = (list: Variant[]) =>
  list.map((v) => `${v.src} ${v.w}w`).join(", ");

/**
 * One app capture, served in the visitor's own colour scheme: the light
 * capture when the system asks for light, the dark one otherwise. AVIF first,
 * WebP as the fallback, each at a few widths so the browser picks the size the
 * layout needs. Files and dimensions come from src/content/app-screens.json,
 * which scripts/optimize-screens.mjs writes.
 */
export function AppScreen({
  name,
  alt,
  sizes,
  priority = false,
  className,
}: {
  name: AppScreenName;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const s = screens[name];
  const fallback = s.dark.webp[Math.min(1, s.dark.webp.length - 1)];
  return (
    <picture>
      <source
        media="(prefers-color-scheme: light)"
        type="image/avif"
        srcSet={srcSet(s.light.avif)}
        sizes={sizes}
      />
      <source
        media="(prefers-color-scheme: light)"
        type="image/webp"
        srcSet={srcSet(s.light.webp)}
        sizes={sizes}
      />
      <source type="image/avif" srcSet={srcSet(s.dark.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(s.dark.webp)} sizes={sizes} />
      <img
        src={fallback.src}
        alt={alt}
        width={s.width}
        height={s.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

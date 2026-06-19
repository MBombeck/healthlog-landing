/**
 * <picture> with AVIF + WebP + JPEG fallback, served from the variants the
 * prebuild generates (scripts/gen-image-variants.mjs). `thumb` uses the 560px
 * crop for hub cards; full size is ~1376×768 (16:9). Dimensions are always set
 * to avoid layout shift.
 */
export function LearnImage({
  base,
  alt,
  thumb = false,
  eager = false,
  className,
}: {
  base: string;
  alt: string;
  thumb?: boolean;
  eager?: boolean;
  className?: string;
}) {
  const s = thumb ? "-thumb" : "";
  const width = thumb ? 560 : 1376;
  const height = thumb ? 313 : 768;
  return (
    <picture>
      <source type="image/avif" srcSet={`${base}${s}.avif`} />
      <source type="image/webp" srcSet={`${base}${s}.webp`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${base}${s}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

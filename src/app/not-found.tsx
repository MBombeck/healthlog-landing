import Link from "next/link";

/**
 * Branded 404 for the marketing site. Self-contained server component that
 * reuses the dark Dracula chrome (noise overlay + aurora) defined in
 * globals.css, so a missing URL never drops the visitor onto an unstyled page.
 */
export default function NotFound() {
  return (
    <div className="bg-void text-text-primary relative flex min-h-dvh flex-col items-center justify-center overflow-x-clip px-4 py-20 text-center">
      <div className="noise-overlay" />
      <div className="aurora" aria-hidden="true" />
      <div className="aurora-pink" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-lg">
        <p
          className="font-display font-extrabold text-7xl sm:text-8xl tracking-[-0.04em] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #bd93f9 0%, #8be9fd 50%, #ff79c6 100%)",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </p>
        <h1 className="font-display text-text-primary mt-6 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
          Page not found
        </h1>
        <p className="text-text-secondary mx-auto mt-4 max-w-md text-base leading-relaxed">
          The page you were looking for has moved or never existed. Let&apos;s
          get you back on track.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="cta-button group">
            <span>Back home</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/learn" className="cta-secondary group">
            <span>Browse the guides</span>
          </Link>
          <a
            href="https://docs.healthlog.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary group"
          >
            <span>Read the docs</span>
          </a>
        </div>
      </div>
    </div>
  );
}

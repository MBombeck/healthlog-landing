"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/desktop-dashboard-opt.webp",
    alt: "HealthLog dashboard showing weight trends, blood pressure, medication compliance, and mood tracking",
    label: "Dashboard",
  },
  {
    src: "/screenshots/desktop-medications-opt.webp",
    alt: "Medication management with compliance rates and intake schedules",
    label: "Medications",
  },
  {
    src: "/screenshots/desktop-measurements-opt.webp",
    alt: "Health measurements list with type badges, values, and dates",
    label: "Measurements",
  },
];

export function AppShowcase() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % screenshots.length);
    }, 5000);
  }, []);

  useEffect(() => {
    if (!isHovering) {
      startAutoplay();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovering, startAutoplay]);

  const handleSelect = (index: number) => {
    setActive(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    if (!isHovering) startAutoplay();
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setIsHovering(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {/* Screenshot selector tabs */}
      <div className="flex justify-center gap-2 mb-8" role="tablist" aria-label="App screenshots">
        {screenshots.map((s, i) => (
          <button
            key={s.label}
            role="tab"
            aria-selected={i === active}
            onClick={() => handleSelect(i)}
            className={`
              px-4 py-2 rounded-full text-xs font-mono transition-all duration-300
              ${i === active
                ? "bg-purple/15 text-purple border border-purple/25"
                : "text-text-tertiary border border-transparent hover:text-text-secondary hover:border-[rgba(98,114,164,0.15)]"
              }
            `}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="relative max-w-[960px] mx-auto">
        {/* Desktop browser frame */}
        <div className="showcase-frame">
          <div className="showcase-frame-inner">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[rgba(98,114,164,0.12)] bg-[#1a1b26]">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5555] opacity-60" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffb86c] opacity-60" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#50fa7b] opacity-60" />
              </div>
              <div className="flex-1 flex justify-center min-w-0">
                <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-md bg-[rgba(68,71,90,0.4)] max-w-[280px] w-full">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-text-tertiary flex-shrink-0 hidden sm:block" aria-hidden="true">
                    <path d="M8 1a4 4 0 0 0-4 4v3H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V5a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  <span className="text-[10px] font-mono text-text-tertiary tracking-wide truncate">health.myserver.com</span>
                </div>
              </div>
            </div>

            {/* Screenshot container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#282a36]">
              {screenshots.map((s, i) => (
                <div
                  key={s.src}
                  className={`
                    absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"}
                  `}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 960px"
                    className="object-cover object-top"
                    priority={i === 0}
                    quality={90}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`
                h-1 rounded-full transition-all duration-500
                ${i === active ? "w-8 bg-purple" : "w-2 bg-[rgba(98,114,164,0.25)]"}
              `}
              aria-label={`Show screenshot ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

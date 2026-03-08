"use client";

import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${scrolled ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-25"}`}
      aria-hidden="true"
    >
      <div className="w-5 h-8 border border-text-tertiary rounded-full flex justify-center pt-1.5">
        <div className="w-1 h-2 bg-text-tertiary rounded-full animate-bounce" />
      </div>
    </div>
  );
}

export function ScrollRevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

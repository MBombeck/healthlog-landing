"use client";

import { useEffect, useRef, useCallback } from "react";

function ecgSample(t: number): number {
  const p = 0.22 * Math.exp(-Math.pow((t - 0.12) / 0.04, 2));
  const q = -0.08 * Math.exp(-Math.pow((t - 0.22) / 0.008, 2));
  const r = 1.0 * Math.exp(-Math.pow((t - 0.25) / 0.013, 2));
  const s = -0.12 * Math.exp(-Math.pow((t - 0.28) / 0.008, 2));
  const tw = 0.3 * Math.exp(-Math.pow((t - 0.42) / 0.045, 2));
  return p + q + r + s + tw;
}

export function EcgMonitor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const baseline = h * 0.55;
    const amp = h * 0.4;

    const totalPx = Math.ceil(w);
    const beatsOnScreen = Math.max(3, Math.round(w / 350));
    const pxPerBeat = totalPx / beatsOnScreen;
    const data = new Float32Array(totalPx);
    for (let i = 0; i < totalPx; i++) {
      data[i] = ecgSample((i % pxPerBeat) / pxPerBeat);
    }

    const sweepSpeed = w / 5000;
    let sweepX = 0;
    let lastTime = -1;
    const gapPx = 60;
    const trailLength = Math.floor((totalPx - gapPx) * 0.45);
    const purple = [189, 147, 249];

    function frame(now: number) {
      if (lastTime < 0) lastTime = now;
      const dt = now - lastTime;
      lastTime = now;
      sweepX = (sweepX + sweepSpeed * dt) % w;

      const cv = canvasRef.current;
      if (!cv || !ctx) return;

      ctx.clearRect(0, 0, w, h);

      const sweepI = Math.floor(sweepX);

      const alphaSteps = 8;
      for (let a = 0; a < alphaSteps; a++) {
        const segStart = Math.floor((a / alphaSteps) * trailLength);
        const segEnd = Math.floor(((a + 1) / alphaSteps) * trailLength);
        const midSeg = (segStart + segEnd) / 2;
        const age = (trailLength - midSeg) / trailLength;
        const alpha = 0.05 + 0.95 * (1 - age);

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${purple[0]},${purple[1]},${purple[2]},${alpha})`;
        ctx.lineWidth = 2;
        let pathStarted = false;
        let prevI = -1;
        for (let seg = segStart; seg < segEnd; seg++) {
          const i = (sweepI - trailLength + seg + totalPx) % totalPx;
          const y = baseline - data[i] * amp;
          const wrapped = prevI >= 0 && i < prevI;
          if (!pathStarted || wrapped) { ctx.moveTo(i, y); pathStarted = true; }
          else { ctx.lineTo(i, y); }
          prevI = i;
        }
        ctx.stroke();
      }

      const glowLen = Math.min(80, trailLength);
      ctx.shadowColor = `rgba(${purple[0]},${purple[1]},${purple[2]},0.8)`;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      let started = false;
      let prevGlowI = -1;
      for (let seg = trailLength - glowLen; seg < trailLength; seg++) {
        const i = (sweepI - trailLength + seg + totalPx) % totalPx;
        const y = baseline - data[i] * amp;
        const wrapped = prevGlowI >= 0 && i < prevGlowI;
        if (!started || wrapped) { ctx.moveTo(i, y); started = true; }
        else { ctx.lineTo(i, y); }
        prevGlowI = i;
      }
      ctx.strokeStyle = `rgba(${purple[0]},${purple[1]},${purple[2]},0.6)`;
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.shadowBlur = 0;

      const headY = baseline - data[sweepI] * amp;
      const grad = ctx.createRadialGradient(sweepX, headY, 0, sweepX, headY, 10);
      grad.addColorStop(0, "rgba(255,255,255,0.9)");
      grad.addColorStop(0.3, `rgba(${purple[0]},${purple[1]},${purple[2]},0.7)`);
      grad.addColorStop(1, `rgba(${purple[0]},${purple[1]},${purple[2]},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(sweepX, headY, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(sweepX, headY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    startAnimation();
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(rafRef.current);
        startAnimation();
      }, 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(resizeTimer);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [startAnimation]);

  return (
    <canvas
      ref={canvasRef}
      className="ecg-canvas"
      aria-hidden="true"
    />
  );
}

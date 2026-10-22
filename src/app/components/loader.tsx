"use client";

import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Loader() {
  const prefersReducedMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, [0, 100], ["0%", "100%"]);
  const progressLabel = useTransform(progress, (value) => `${Math.round(value)}%`);

  useEffect(() => {
    const animation = animate(progress, 100, {
      duration: prefersReducedMotion ? 0 : 0.95,
      ease: "easeInOut",
    });

    return animation.stop;
  }, [prefersReducedMotion, progress]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading Abdul Wahab Tariq's portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
      transition={{ duration: prefersReducedMotion ? 0.12 : 0.3, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#080b10] px-5"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <motion.div
        aria-hidden="true"
        animate={prefersReducedMotion ? undefined : { opacity: [0.1, 0.18, 0.1], scale: [0.95, 1.04, 0.95] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[90px] sm:h-96 sm:w-96"
      />

      <div className="relative w-full max-w-sm">
        <div className="mb-9 flex items-center justify-between border-b border-white/10 pb-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-300">
            AWT<span className="text-emerald-300">.</span>
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            Portfolio <span className="px-1 text-slate-700">/</span> 2026
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
            <motion.div
              aria-hidden="true"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-emerald-200/20 border-t-emerald-200/80 border-r-transparent"
            />
            <motion.div
              aria-hidden="true"
              animate={prefersReducedMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              className="absolute inset-2 rounded-full border border-dashed border-white/10"
            />
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
              className="select-none text-5xl font-light tracking-[-0.1em] text-white sm:text-6xl"
            >
              AW<span className="text-emerald-300">.</span>
            </motion.p>
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
            Abdul Wahab Tariq
          </p>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-200/70">
            Full-Stack Developer
          </p>
        </div>

        <div className="mt-9">
          <div className="mb-2.5 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
            <span>Loading portfolio</span>
            <motion.span aria-hidden="true">{progressLabel}</motion.span>
          </div>
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              aria-hidden="true"
              className="h-full rounded-full bg-gradient-to-r from-emerald-300/70 via-emerald-200 to-cyan-200"
              style={{ width: progressWidth }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

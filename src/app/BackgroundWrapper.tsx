"use client";

import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "./components/loader";

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setIsLoading(false),
      prefersReducedMotion ? 150 : 1050,
    );

    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return (
    <MotionConfig reducedMotion="user">
      {children}
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
    </MotionConfig>
  );
}

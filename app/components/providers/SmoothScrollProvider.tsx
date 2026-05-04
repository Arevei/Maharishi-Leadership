"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

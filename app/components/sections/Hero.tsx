"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { openCalendlyPopup } from "@/app/lib/calendly";

const TRUST_ITEMS = [
  "50+ years of research",
  "Evidence-based",
  "Practised at Google, IBM, Bridgewater, Tata",
  "Endorsed by the American Heart Association",
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const blurLayerRef = useRef<HTMLDivElement>(null);
  const maskRafRef = useRef<number | null>(null);
  const pendingMaskRef = useRef<string>("");
  const appliedMaskRef = useRef<string>("");
  const [ready] = useState(true);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
  });

  // Radial blur mask
  const clearPct = useTransform(smooth, [0, 0.3, 0.65], [55, 55, 22]);
  const blurEdgePct = useTransform(smooth, [0, 0.3, 0.65], [72, 72, 55]);

  useMotionValueEvent(clearPct, "change", (v) => {
    if (!blurLayerRef.current) return;

    const roundedV = Math.round(v * 2) / 2;
    const roundedEdge = Math.round(blurEdgePct.get() * 2) / 2;

    const mask = `radial-gradient(ellipse ${roundedV}% ${
      roundedV * 0.88
    }% at 50% 56%, transparent 0%, transparent ${
      roundedV * 0.95
    }%, rgba(0,0,0,0.55) ${roundedEdge}%, black 100%)`;

    pendingMaskRef.current = mask;
    if (maskRafRef.current !== null) return;

    maskRafRef.current = window.requestAnimationFrame(() => {
      maskRafRef.current = null;
      const nextMask = pendingMaskRef.current;
      if (!blurLayerRef.current || !nextMask || appliedMaskRef.current === nextMask) {
        return;
      }

      blurLayerRef.current.style.maskImage = nextMask;
      (
        blurLayerRef.current.style as CSSStyleDeclaration & {
          webkitMaskImage: string;
        }
      ).webkitMaskImage = nextMask;
      appliedMaskRef.current = nextMask;
    });
  });

  useEffect(() => {
    if (!blurLayerRef.current) return;

    const mask =
      "radial-gradient(ellipse 55% 48% at 50% 56%, transparent 0%, transparent 52%, rgba(0,0,0,0.55) 72%, black 100%)";

    blurLayerRef.current.style.maskImage = mask;
    (
      blurLayerRef.current.style as CSSStyleDeclaration & {
        webkitMaskImage: string;
      }
    ).webkitMaskImage = mask;
    appliedMaskRef.current = mask;
  }, []);

  useEffect(() => {
    return () => {
      if (maskRafRef.current !== null) {
        window.cancelAnimationFrame(maskRafRef.current);
      }
    };
  }, []);

  // Background overlays
  const vignetteOpacity = useTransform(
    smooth,
    [0, 0.35, 0.68, 0.82],
    [0.5, 0.65, 0.88, 0]
  );

  const whiteOverlay = useTransform(smooth, [0.72, 0.97], [0, 1]);

  // Scroll sections
  const s1Opacity = useTransform(smooth, [0, 0.22, 0.45], [1, 1, 0]);
  const s1Y = useTransform(smooth, [0, 0.45], ["0px", "-50px"]);

  const s2Opacity = useTransform(smooth, [0.42, 0.68], [0, 1]);
  const s2Y = useTransform(smooth, [0.42, 0.68], ["50px", "0px"]);

  // Adaptive text colors
  const lightMode = useTransform(smooth, [0.68, 0.95], [0, 1]);

  const h_r = useTransform(lightMode, [0, 1], [255, 15]);
  const h_g = useTransform(lightMode, [0, 1], [255, 44]);
  const h_b = useTransform(lightMode, [0, 1], [255, 77]);
  const headingColor = useMotionTemplate`rgba(${h_r},${h_g},${h_b},0.88)`;

  const b_r = useTransform(lightMode, [0, 1], [255, 87]);
  const b_g = useTransform(lightMode, [0, 1], [255, 83]);
  const b_b = useTransform(lightMode, [0, 1], [255, 74]);
  const bodyColor = useMotionTemplate`rgba(${b_r},${b_g},${b_b},0.9)`;

  const hl_r = useTransform(lightMode, [0, 1], [252, 146]);
  const hl_g = useTransform(lightMode, [0, 1], [211, 64]);
  const hl_b = useTransform(lightMode, [0, 1], [77, 14]);
  const highlightColor = useMotionTemplate`rgba(${hl_r},${hl_g},${hl_b},0.95)`;

  const m_r = useTransform(lightMode, [0, 1], [255, 120]);
  const m_g = useTransform(lightMode, [0, 1], [255, 113]);
  const m_b = useTransform(lightMode, [0, 1], [255, 108]);
  const mutedColor = useMotionTemplate`rgba(${m_r},${m_g},${m_b},0.7)`;

  const dividerOpacity = useTransform(lightMode, [0, 1], [0.35, 0.6]);
  const dividerColor = useMotionTemplate`rgba(217,119,6,${dividerOpacity})`;

  const gb_r = useTransform(lightMode, [0, 1], [255, 15]);
  const gb_g = useTransform(lightMode, [0, 1], [255, 44]);
  const gb_b = useTransform(lightMode, [0, 1], [255, 77]);
  const ghostBorder = useMotionTemplate`rgba(${gb_r},${gb_g},${gb_b},0.28)`;

  const ghostBg = useTransform(
    lightMode,
    [0, 1],
    ["rgba(255,255,255,0.7)", "rgba(15,44,77,0.2)"]
  );

  return (
    <section
      ref={heroRef}
      className="relative bg-white -top-8 isolate h-[185vh] overflow-hidden"
      
    >
      {/* HERO BACKGROUND - only inside hero, not fixed globally */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Sharp base image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/Leader-maharishi.png)",
            backgroundPosition: "center 78%",
          }}
        />

        {/* Blurred copy */}
        <div
          ref={blurLayerRef}
          className="absolute  inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/Leader-maharishi.png)",
            backgroundPosition: "center 78%",
            filter: "blur(26px)",
            transform: "translateZ(0) scale(1.06)",
            willChange: "mask-image, transform",
            backfaceVisibility: "hidden",
          }}
        />

        {/* Warm vignette */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: vignetteOpacity }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 100% 100% at 50% 50%,
                transparent 0%,
                transparent 32%,
                rgba(18,9,2,0.35) 58%,
                rgba(14,7,1,0.72) 80%,
                rgba(10,5,1,0.88) 100%)`,
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 58%,
                rgba(200,120,20,0.18) 0%,
                rgba(160,80,10,0.10) 45%,
                transparent 75%)`,
            }}
          />

          <div
            className="absolute left-0 right-0 top-0"
            style={{
              height: "18%",
              background:
                "linear-gradient(to bottom, rgba(12,6,1,0.55) 0%, transparent 100%)",
            }}
          />

          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "22%",
              background:
                "linear-gradient(to top, rgba(10,5,1,0.65) 0%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* White wash layer */}
        <motion.div
          className="absolute inset-0 bg-white"
          style={{ opacity: whiteOverlay }}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative  top-[10vh] z-10">
        {/* SECTION 1 */}
        <div className="sticky top-0 flex h-screen select-none flex-col items-center justify-start overflow-hidden px-6 pt-24 text-center pointer-events-none sm:px-10 sm:pt-20">
          <motion.div
            className="mx-auto flex max-w-5xl flex-col items-center text-center"
            style={{
              opacity: s1Opacity,
              y: s1Y,
            }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{
                opacity: ready ? 1 : 0,
                y: ready ? 0 : 18,
              }}
              transition={{
                duration: 0.75,
                delay: 0.25,
                ease: "easeOut",
              }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-amber-300/25 bg-amber-950/20 px-5 py-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-amber-200/80 backdrop-blur-sm sm:text-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                Maharishi Center for Leadership
              </span>
            </motion.div>

            <motion.h1
              className="leading-[1.08] text-white "
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.015em",
                textShadow:
                  "0 2px 48px rgba(10,5,1,0.8), 0 0 12px rgba(10,5,1,0.6)",
              }}
              initial={{ opacity: 0, y: 36 }}
              animate={{
                opacity: ready ? 1 : 0,
                y: ready ? 0 : 36,
              }}
              transition={{
                duration: 1.05,
                delay: 0.45,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              World-Class Performance
              <br />
              Is Built on
              <br />
              <motion.span
                className="italic text-white"
                // style={{
                //   background:
                //     "linear-gradient(135deg, #fee685 0%, #d97706 45%, #fde68a 100%)",
                //   WebkitBackgroundClip: "text",
                //   WebkitTextFillColor: "transparent",
                //   backgroundClip: "text",
                // }}
                initial={{ opacity: 0 }}
                animate={{ opacity: ready ? 1 : 0 }}
                transition={{
                  duration: 1,
                  delay: 0.95,
                }}
              >
                World-Class Brain Functioning.
              </motion.span>
            </motion.h1>

            <motion.div
              className="absolute -bottom-20 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: ready ? 1 : 0 }}
              transition={{
                duration: 1,
                delay: 1.9,
              }}
            >
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-primary">
                Scroll
              </span>

              <motion.div
                className="h-9 w-px origin-top bg-gradient-to-b from-primary/35 to-transparent"
                animate={{
                  scaleY: [0, 1, 0],
                }}
                transition={{
                  duration: 1.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* SECTION 2 */}
        <div className="flex h-screen flex-col items-center justify-center px-6 sm:px-10 pb-46 sm:pb-40">
          <motion.div
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
            style={{
              opacity: s2Opacity,
              y: s2Y,
            }}
          >
            <motion.p
              className="mb-5 tracking-wide "
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.4,
                color: headingColor,
        fontFamily: "'Georgia', 'Times New Roman', serif",

              }}
            >
              Lead at a Higher Level.
            </motion.p>

            <motion.div
              className="mb-7 h-px w-10"
              style={{
                background: dividerColor,
              }}
            />

            <motion.p
              className="mb-11 font-sans font-light"
              style={{
                fontSize: "clamp(0.92rem, 1.45vw, 1.08rem)",
                lineHeight: 1.9,
                color: bodyColor,
              }}
            >
              A 4-Month Executive Development Programme backed by{" "}
              <motion.span
                className="font-normal"
                style={{
                  color: highlightColor,
                }}
              >
                480+ Peer-Reviewed Studies
              </motion.span>{" "}
              that provides the neuro-physiological foundation for clarity,
              creativity, resilience, and peak performance.
            </motion.p>

            <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
              <button
              type="button"
              onClick={openCalendlyPopup}
              className="book-pill ml-2 inline-flex tracking-[0.22em] items-center gap-4 rounded-full border bg-primary text-white px-6 py-3 text-[11px] font-semibold uppercase hover:bg-white hover:text-primary shadow-[0_18px_38px_-24px_rgba(7,29,64,0.22)]"
              data-testid="nav-cta"
            >
              <span className="relative z-10">Book an Intro Talk</span>
              <span className="book-pill-dot relative z-10" />
            </button>

              <motion.a
                type="button"
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[11px] uppercase font-light tracking-[0.22em] backdrop-blur-sm transition-all duration-300 text-primary border  "
                href="#science"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: ghostBorder,
                  background: ghostBg,
                }}
                
              >
                Read the Science{" "}
                <motion.span >↓</motion.span>
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center">
              {TRUST_ITEMS.map((item, i) => (
                <span key={item} className="flex items-center">
                  <motion.span
                    className="px-3 font-sans text-xs font-light tracking-wide sm:text-sm"
                    style={{
                      color: mutedColor,
                    }}
                  >
                    {item}
                  </motion.span>

                  {i < TRUST_ITEMS.length - 1 && (
                    <motion.span
                      className="hidden h-3 w-px self-center sm:inline"
                      style={{
                        background: dividerColor,
                      }}
                    />
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

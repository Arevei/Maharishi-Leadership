"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getContactHref } from "@/data/contact";

const heroSlides = [
  {
    image: "/images/hero.jpg",
    alt: "Meditation silhouette against a warm horizon",
    kicker: "Deep Rest",
    title: "Calm the nervous system behind leadership.",
    body: "Train the neurological foundation of clarity, resilience, and cleaner decision-making under pressure.",
    metric: "600+ peer-reviewed studies",
  },
  {
    image: "/images/tm-1.jpg",
    alt: "A meditator sitting quietly at sunrise",
    kicker: "Stress Recovery",
    title: "Recovery that compounds into performance.",
    body: "Create the kind of physiological rest that restores energy, emotional steadiness, and strategic bandwidth.",
    metric: "20 minutes, twice daily",
  },
  {
    image: "/images/tm-2.png",
    alt: "A practitioner meditating at sunset",
    kicker: "Daily Practice",
    title: "Simple enough to sustain. Powerful enough to matter.",
    body: "A personal technique taught one-to-one and designed to integrate naturally into a demanding executive schedule.",
    metric: "Four-month guided journey",
  },
  {
    image: "/images/executive.png",
    alt: "An executive working in a quiet office",
    kicker: "Leadership Application",
    title: "Take it from practice into the boardroom.",
    body: "Bring more presence to meetings, sharper judgement to decisions, and steadier energy to every leadership moment.",
    metric: "Built for founders and C-suites",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.image}
            initial={false}
            animate={{
              opacity: index === activeIndex ? 1 : 0,
              scale: index === activeIndex ? 1 : 1.045,
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--primary) / 0.82) 0%, hsl(var(--primary) / 0.52) 16%, hsl(var(--primary) / 0.2) 34%, hsl(var(--primary) / 0.3) 58%, hsl(var(--primary) / 0.62) 82%, hsl(var(--background) / 0.9) 97%, hsl(var(--background)) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-55"
          style={{
            background:
              "radial-gradient(ellipse 82% 64% at 50% 28%, transparent 0%, hsl(var(--primary) / 0.28) 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 md:pb-24 min-h-[100dvh] flex items-end">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] w-full">
          <div className="max-w-4xl text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-xs uppercase tracking-[0.35em] text-primary-foreground/85 mb-8 font-medium"
            >
              Maharishi Center for Leadership&nbsp;&nbsp;&middot;&nbsp;&nbsp;In
              Partnership with CII
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-primary-foreground font-light"
            >
              Every quality
              <br />
              that makes a great leader
              <br />
              <em className="italic font-light">flows from one source.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-10 text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              A four-month executive development programme that trains the
              neurological foundation of clarity, creativity, and resilience -
              backed by 600+ peer-reviewed studies and endorsed by the American
              Heart Association.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Link
                href={getContactHref("intro-talk")}
                className="px-10 py-4 rounded-full bg-[hsl(var(--peach))] text-primary text-sm uppercase tracking-[0.2em] font-medium hover:bg-[hsl(var(--peach-deep))] hover:text-white transition-colors shadow-sm w-full sm:w-auto text-center"
                data-testid="hero-cta-primary"
              >
                Book a free intro talk
              </Link>
              <a
                href="#science"
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .getElementById("science")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-10 py-4 rounded-full border border-[hsl(var(--peach))] text-primary-foreground text-sm uppercase tracking-[0.2em] font-medium hover:bg-[hsl(var(--peach)/0.15)] transition-colors w-full sm:w-auto text-center"
              >
                Read the science
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="mt-10 text-[11px] uppercase tracking-[0.25em] text-primary-foreground/55 font-light"
            >
              50+ years of research&nbsp;&nbsp;&middot;&nbsp;&nbsp;Evidence-based
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;Practised at Google, IBM,
              Bridgewater, Tata
            </motion.p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="w-full max-w-sm justify-self-center lg:justify-self-end rounded-[2rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl shadow-[0_28px_120px_-40px_rgba(4,18,44,0.95)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -22 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    fill
                    sizes="(min-width: 1024px) 22rem, 100vw"
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 12%, hsl(var(--primary) / 0.1) 48%, hsl(var(--primary) / 0.78) 100%)",
                    }}
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/90 backdrop-blur-sm">
                    {activeSlide.kicker}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-end gap-4">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-primary-foreground/55">
                        {activeSlide.metric}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-primary-foreground leading-tight">
                        {activeSlide.title}
                      </h3>
                      <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">
                        {activeSlide.body}
                      </p>
                    </div>
                    <span className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] font-medium uppercase tracking-[0.24em] text-primary-foreground/85 backdrop-blur-sm">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    className="group inline-flex items-center"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-[hsl(var(--peach))]"
                          : "w-2 bg-white/35 group-hover:bg-white/55"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goToSlide(activeIndex - 1)}
                  aria-label="Previous slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-primary-foreground/85 hover:bg-white/14"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide(activeIndex + 1)}
                  aria-label="Next slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-primary-foreground/85 hover:bg-white/14"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

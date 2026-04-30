"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getContactHref } from "@/data/contact";

const heroSlides = [
  {
    image: "/images/tm-1.jpg",
    alt: "Meditation silhouette against a warm horizon",
    kicker: "Deep Rest",
    title: "World-Class Performance and Resilience Is Built on World-Class Brain Functioning. Lead at a Higher Level.",
    body: "A 4-Month Executive Development Programme backed by 480+ Peer-Reviewed Studies that provides the neuro-physiological foundation for clarity, creativity, resilience, and peak performance.",
    metric: "480+ peer-reviewed studies",
  },
  // {
  //   image: "/images/tm-1.jpg",
  //   alt: "A meditator sitting quietly at sunrise",
  //   kicker: "Stress Recovery",
  //   title: "Recovery that compounds into performance.",
  //   body: "Create the kind of physiological rest that restores energy, emotional steadiness, and strategic bandwidth.",
  //   metric: "20 minutes, twice daily",
  // },
  // {
  //   image: "/images/tm-2.png",
  //   alt: "A practitioner meditating at sunset",
  //   kicker: "Daily Practice",
  //   title: "Simple enough to sustain. Powerful enough to matter.",
  //   body: "A personal technique taught one-to-one and designed to integrate naturally into a demanding executive schedule.",
  //   metric: "Four-month guided journey",
  // },
  // {
  //   image: "/images/executive.png",
  //   alt: "An executive working in a quiet office",
  //   kicker: "Leadership Application",
  //   title: "Take it from practice into the boardroom.",
  //   body: "Bring more presence to meetings, sharper judgement to decisions, and steadier energy to every leadership moment.",
  //   metric: "Built for founders and C-suites",
  // },
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
              scale: index === activeIndex ? 1 : 1.035,
            }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center saturate-[0.9] brightness-[0.76]"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--primary)/0.88)_0%,hsl(var(--primary)/0.68)_22%,hsl(var(--primary)/0.54)_55%,hsl(var(--primary)/0.8)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,hsl(var(--sky)/0.16),transparent_28%),radial-gradient(circle_at_50%_100%,hsl(var(--peach)/0.12),transparent_34%)]" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[100dvh] items-end px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end">
          <div className="max-w-4xl text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mb-7 text-[11px] font-medium uppercase tracking-[0.32em] text-primary-foreground/78 md:text-[12px]"
            >
              Maharishi Center for Leadership
              <span className="block pt-2 text-primary-foreground/58">
                In Partnership with CII
              </span>
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  {/* <span className="rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-primary-foreground/82">
                    {activeSlide.kicker}
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-primary-foreground/56">
                    {activeSlide.metric}
                  </span>
                  */}
                </div> 

                <h1 className="mt-7 mx-auto max-w-3xl font-serif text-[2.75rem] font-light leading-[1.02] text-primary-foreground sm:text-[3.5rem] lg:mx-0 lg:text-[4rem] xl:text-[4.5rem]">
                  {activeSlide.title}
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-[1.85] text-primary-foreground/82 sm:text-lg lg:mx-0 lg:text-xl lg:leading-[1.8]">
                  {activeSlide.body}
                </p>

                <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-[1.8] text-primary-foreground/58 lg:mx-0 lg:text-[15px] lg:leading-[1.85]">
                  A 4-month executive development programme backed by
                  peer-reviewed research and designed to turn deeper recovery,
                  steadier attention, and greater resilience into an everyday
                  leadership advantage.
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="mt-10 flex flex-col items-center gap-4 lg:items-start"
            >
              <Link
                href={getContactHref("intro-talk")}
                className="inline-flex w-[min(20rem,82vw)] items-center justify-center rounded-full bg-[hsl(var(--peach))] px-10 py-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary shadow-sm transition-colors hover:bg-[hsl(var(--peach-deep))] hover:text-white sm:w-auto"
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
                className="inline-flex w-[min(15rem,64vw)] items-center justify-center rounded-full border border-[hsl(var(--peach))] px-10 py-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-[hsl(var(--peach)/0.15)] sm:w-auto"
              >
                Read the science
              </a>
            </motion.div>

            <div className="flex flex-col items-center gap-5 pt-10 sm:flex-row sm:justify-between lg:items-center lg:justify-between">
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
                          : "w-2 bg-white/30 group-hover:bg-white/50"
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-primary-foreground/78 transition-colors hover:bg-white/14"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide(activeIndex + 1)}
                  aria-label="Next slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-primary-foreground/78 transition-colors hover:bg-white/14"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="mx-auto mt-9 max-w-2xl text-[10px] font-light uppercase tracking-[0.22em] text-primary-foreground/50 lg:mx-0"
            >
              50+ years of research&nbsp;&nbsp;&middot;&nbsp;&nbsp;Evidence-based
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;Practised at Google, IBM,
              Bridgewater, Tata&nbsp;&nbsp;&middot;&nbsp;&nbsp;Endorsed by the
              American Heart Association
            </motion.p>
          </div>

          <div className="hidden lg:block mb-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSlide.image}-desktop`}
                initial={{ opacity: 0, x: 24, scale: 0.985 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -24, scale: 0.985 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative ml-auto  max-w-[46rem] rounded-[2.5rem] "
              >
                   <div className="relative  aspect-[4/3.3] overflow-hidden rounded-[1.7rem] bg-[hsl(var(--sky)/0.18)]">
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      fill
                      sizes="(min-width: 1024px) 46rem, 100vw"
                      className="object-cover my-auto"
                    />
                  </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

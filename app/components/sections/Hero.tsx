"use client"
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-end overflow-hidden"
    >
      {/* Background photograph with warm gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="A practitioner in quiet meditation, bathed in warm morning light"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--primary) / 0.7) 0%, hsl(var(--primary) / 0.4) 12%, hsl(var(--primary) / 0.18) 30%, hsl(var(--primary) / 0.28) 55%, hsl(var(--primary) / 0.55) 80%, hsl(var(--background) / 0.85) 96%, hsl(var(--background)) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, transparent 0%, hsl(var(--primary) / 0.25) 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.35em] text-primary-foreground/85 mb-8 font-medium"
        >
          Maharishi Center for Leadership&nbsp;&nbsp;·&nbsp;&nbsp;In Partnership with CII
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-primary-foreground font-light max-w-5xl mx-auto"
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
          className="mt-10 text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto font-light leading-relaxed"
        >
          A four-month executive development programme that trains the
          neurological foundation of clarity, creativity, and resilience —
          backed by 600+ peer-reviewed studies and endorsed by the
          American Heart Association.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="mailto:Debashish.Sarkar@tm.org?subject=Maharishi%20Center%20for%20Leadership%20%E2%80%94%20Free%20Intro%20Talk"
            className="px-10 py-4 rounded-full bg-[hsl(var(--peach))] text-primary text-sm uppercase tracking-[0.2em] font-medium hover:bg-[hsl(var(--peach-deep))] hover:text-white transition-colors shadow-sm w-full sm:w-auto text-center"
            data-testid="hero-cta-primary"
          >
            Book a free intro talk
          </a>
          <a
            href="#science"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("science")?.scrollIntoView({ behavior: "smooth" });
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
          50+ years of research&nbsp;&nbsp;·&nbsp;&nbsp;Evidence-based&nbsp;&nbsp;·&nbsp;&nbsp;Practised at Google, IBM, Bridgewater, Tata
        </motion.p>
      </div>
    </section>
  );
}

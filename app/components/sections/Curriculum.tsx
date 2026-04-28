"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    step: "01",
    title: "The TM Technique & Daily Practice",
    subtitle: "Establish the practice correctly from day one.",
    points: [
      "Learn the authentic technique from a certified teacher",
      "Establish a sustainable daily routine",
      "Natural, effortless - no concentration required",
      "20 minutes twice daily - practised anywhere",
    ],
  },
  {
    step: "02",
    title: "Neuroscience of Peak Performance",
    subtitle: "Understand the physiology behind stronger leadership.",
    points: [
      "Why brain coherence is the foundation of great leadership",
      "How TM develops frontal brain integration",
      "Access the hidden reserves of the brain",
      "How benefits compound over months and years",
    ],
  },
  {
    step: "03",
    title: "Leadership & Well-being Integration",
    subtitle: "Translate the practice into performance, resilience, and health.",
    points: [
      "Higher states of development and their link to performance",
      "Emotional intelligence, resilience, and leadership presence",
      "How TM reduces stress at the physiological level",
      "Long-term health, vitality, and cardiovascular protection",
    ],
  },
];

const factStrip = [
  { value: "4 months", label: "Guided executive journey" },
  { value: "10 sessions", label: "Live learning progression" },
  { value: "1 retreat", label: "Deep-rest capstone day" },
];

export function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-[linear-gradient(180deg,hsl(var(--sky)/0.22)_0%,hsl(var(--background))_100%)] py-24 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at top right, hsl(var(--cream) / 0.75), transparent 28%), linear-gradient(180deg, transparent 0%, hsl(var(--background) / 0.2) 100%)",
        }}
      />

      <div className="container relative mx-auto px-6 md:px-12">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[hsl(var(--peach-deep))]">
              <span className="h-px w-8 bg-[hsl(var(--peach-deep))]" /> The
              Curriculum
            </p>
            <h2 className="font-serif text-4xl font-light leading-[1.08] text-primary md:text-6xl">
              What you will learn{" "}
              <em className="italic text-[hsl(var(--peach-deep))]">
                & master:
              </em>
            </h2>
            <p className="mt-6 max-w-3xl text-base font-light leading-[1.9] text-primary/62 md:text-lg">
              The curriculum is designed to move from authentic technique, to
              measurable brain and physiology change, to the higher-order
              qualities of leadership presence, resilience, and sustainable
              performance.
            </p>
          </motion.div>

        </div>

      

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-[1.9rem] border border-[hsl(var(--sky)/0.8)] bg-[linear-gradient(180deg,white_0%,hsl(var(--background))_100%)] p-7 shadow-[0_26px_60px_-40px_rgba(7,29,64,0.24)] md:p-8"
            >
              <div className="absolute right-5 top-4 font-serif text-6xl leading-none text-[hsl(var(--sky)/0.5)] md:text-7xl">
                {pillar.step}
              </div>

              <div className="relative z-10 max-w-[18rem]">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[hsl(var(--peach-deep))]">
                  Pillar {pillar.step}
                </p>
                <h3 className="mt-5 text-[1.9rem] font-medium leading-[1.18] text-primary md:text-[2rem]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.75] text-primary/60">
                  {pillar.subtitle}
                </p>
              </div>

              <ul className="relative z-10 mt-7 space-y-4">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-4">
                    <span className="mt-1 shrink-0 text-[hsl(var(--peach-deep))]">
                      →
                    </span>
                    <span className="text-[14px] leading-[1.75] text-primary/76">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const quickFacts = [
  { value: "4 months", label: "Guided journey" },
  { value: "10", label: "Live sessions" },
  { value: "1", label: "Immersive retreat" },
  { value: "1:1", label: "Teacher support" },
];

const learningArc = [
  {
    step: "01",
    title: "Establish the practice",
    desc: "Personal instruction, validation, and the mechanics of effortless transcending so the technique is set correctly from day one.",
    tags: ["Personal instruction", "Daily rhythm", "Correct practice"],
  },
  {
    step: "02",
    title: "Stabilise under pressure",
    desc: "Use deep rest to increase resilience, cognitive bandwidth, recovery, and consistency in high-stakes environments.",
    tags: ["Resilience", "Cognitive capacity", "1:1 refinement"],
  },
  {
    step: "03",
    title: "Lead from centeredness",
    desc: "Translate TM into EQ, sharper judgement, stronger presence, and the higher-order leadership capacities that scale across teams.",
    tags: ["Leadership application", "EQ", "Higher states"],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-background py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-[0_24px_70px_-36px_rgba(6,32,63,0.28)]"
          >
            <p className="flex items-center gap-3 text-[hsl(var(--peach-deep))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
              <span className="w-7 h-px bg-[hsl(var(--peach-deep))]" /> Curriculum
              Overview
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05] font-light mb-6">
              The learning arc,{" "}
              <em className="italic text-[hsl(var(--peach-deep))]">
                at a glance.
              </em>
            </h2>
            <p className="text-base sm:text-lg text-primary/60 leading-[1.85] font-light max-w-2xl">
              We have intentionally kept this section high-level. It shows the
              shape of the journey without turning the full teaching into a
              public handout.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[1.35rem] border border-border bg-background px-4 py-4"
                >
                  <p className="font-serif text-2xl text-primary leading-none">
                    {fact.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-primary/55">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:pt-8"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-[hsl(var(--peach-deep))] font-medium mb-5">
              Why this format works
            </p>
            <div className="space-y-5 text-primary/65 leading-[1.9] font-light">
              <p>
                Leaders get a clear sense of the progression: first the
                technique is established, then stabilised under real-world
                pressure, and finally applied to higher-order leadership.
              </p>
              <p>
                It also protects the integrity of the programme. You can speak
                confidently about the experience without publishing every
                session detail in advance.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 mt-12">
          {learningArc.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-border bg-card p-6 md:p-7"
            >
              <p className="font-serif text-3xl text-[hsl(var(--peach-deep))] leading-none">
                {item.step}
              </p>
              <h3 className="mt-5 text-xl text-primary font-medium">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] text-primary/60 leading-[1.8]">
                {item.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-[hsl(var(--sky)/0.6)] text-primary px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

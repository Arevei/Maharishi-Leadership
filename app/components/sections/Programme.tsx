"use client";

import { motion } from "framer-motion";

const phases = [
  {
    num: "I",
    title: "Core Instruction",
    body: "Personal one-to-one TM instruction by a certified teacher. The technique is established correctly and effortlessly from day one. Foundational knowledge of TM's neuroscience and its application to executive performance.",
    tags: ["4 consecutive days", "90 minutes each"],
  },
  {
    num: "II",
    title: "Weekly & Monthly Integration",
    body: "Stabilise the practice under real-world conditions. Refine technique, address consistency, and translate TM into the daily texture of leadership: meetings, decisions, conflict, recovery.",
    tags: ["3 Weekly Sessions", "3 Monthly Sessions", "1 hour each"],
  },
  {
    num: "III",
    title: "Deep-Rest Retreat",
    body: "A full-day immersive experience. Accelerated recovery and renewal. Reinforcement of brain-integration gains. Yoga and advanced TM practice - the capstone of the programme.",
    tags: ["Full-day immersive"],
  },
];

const objectives = [
  "Reduce stress and prevent burnout at the physiological level",
  "Increase energy, vitality, and the capacity to recover quickly",
  "Strengthen creativity, attention, and cognitive performance",
  "Improve the quality of decision-making at every level",
  "Enhance leadership presence, EQ, and team dynamics",
  "Build a measurable, durable high-performance culture",
];

export function Programme() {
  return (
    <section id="programme" className="bg-card py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="flex items-center gap-3 text-[hsl(var(--peach-deep))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
              <span className="w-7 h-px bg-[hsl(var(--peach-deep))]" /> Programme
              Structure
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-primary leading-[1.05] font-light mb-4">
              Four months.{" "}
              <em className="italic text-[hsl(var(--peach-deep))]">
                One transformation.
              </em>
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/55 font-medium mb-12">
              4 Months &middot; 10 Sessions &middot; 1 Transformative Retreat
            </p>

            <div>
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex gap-6 py-8 border-b border-border last:border-b-0"
                >
                  <div className="flex flex-col items-center w-12 shrink-0">
                    <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground font-serif text-xl font-light flex items-center justify-center">
                      {phase.num}
                    </div>
                    {index < phases.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-3 min-h-[40px]" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-primary text-lg mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-primary/65 leading-[1.75] text-[15px]">
                      {phase.body}
                    </p>
                    {phase.tags && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {phase.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] bg-[hsl(var(--sky)/0.6)] text-primary px-3 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:pt-16"
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary leading-tight font-light mb-6">
              Designed for{" "}
              <em className="italic text-[hsl(var(--peach-deep))]">leaders</em>{" "}
              and their teams.
            </h3>
            <p className="text-primary/65 leading-[1.85] mb-4 font-light">
              The Maharishi Center for Leadership delivers this programme - in
              partnership with CII - for senior executives, founders,
              high-potential managers, and entire C-suites who demand
              evidence-based, practical tools that produce measurable results.
            </p>
            <p className="text-primary/65 leading-[1.85] mb-8 font-light">
              Front-loaded for momentum, spaced for stability, and anchored by
              a deep-rest retreat. Each session builds on the last - from
              foundational technique to advanced applications in leadership
              development and organisational culture.
            </p>

            <div className="space-y-2.5">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="flex items-center gap-5 px-5 py-4 bg-background hover:bg-[hsl(var(--sky)/0.5)] transition-colors rounded-md"
                >
                  <span className="font-serif text-2xl text-[hsl(var(--peach-deep))] font-light w-7 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] text-primary">{objective}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

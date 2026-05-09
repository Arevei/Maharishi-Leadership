"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const cards = [
  { val: "4 months", label: "Guided journey", pos: "top-2 right-0" },
  { val: "10", label: "Live sessions", pos: "bottom-6 left-0" },
  {
    val: "1",
    label: "Transformative Retreat",
    pos: "top-20 -translate-y-1/2 -left-4",
  },
];
export function Programme() {
  return (
    <section id="programme" className="bg-card py-18 md:py-30">
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
              Four Months.{" "}
              <em className="italic text-[hsl(var(--peach-deep))]">
                Measurably Sharper.
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
                  className="flex gap-8 py-8 md:py-14 border-b border-border last:border-b-0"
                >
                  <div className="flex flex-col items-center w-12 shrink-0">
                    <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground font-serif text-2xl font-light flex items-center justify-center">
                      {phase.num}
                    </div>
                    {index < phases.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-3 min-h-[40px]" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-primary text-2xl font-semibold mb-2">
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

          <div>
              <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className=" relative h-[440px] md:h-[520px] w-full"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="relative overflow-hidden rounded-full bg-[hsl(var(--sky)/0.4)]"
                          style={{
                            width: 360,
                            height: 360,
                            animation: "breathe 6s ease-in-out infinite",
                          }}
                        ><Image
                                         src="/images/Programme-Structure-Maharishi-Leadership.jpg"
                                         alt=""
                                         fill
                                         sizes="(min-width: 1024px) 26rem, 100vw"
                                         className="object-cover"
                                       /></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="rounded-full border border-primary/15"
                          style={{
                            width: 440,
                            height: 440,
                            animation: "ringPulse 6s ease-in-out 1s infinite",
                          }}
                        />
                      </div>
          
                     
          
                      {cards.map((card, index) => (
                        <motion.div
                          key={card.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                          className={`absolute ${card.pos} bg-background border border-border/70 px-5 py-4 rounded-md shadow-[0_8px_32px_rgba(0,0,0,0.06)] min-w-[160px] z-20`}
                          style={{
                            animation: `float${(index % 2) + 1} ${5 + index}s ease-in-out ${index}s infinite`,
                          }}
                        >
                          <p className=" text-2xl text-primary font-light leading-none">
                            {card.val}
                          </p>
                          <p className="text-[11px] text-primary/60 mt-1.5">
                            {card.label}
                          </p>
                        </motion.div>
                      ))}
          
                      <style>{`
                        @keyframes breathe {
                          0%,100% { transform: scale(1); opacity: 0.7; }
                          50% { transform: scale(1.06); opacity: 1; }
                        }
                        @keyframes ringPulse {
                          0%,100% { transform: scale(1); opacity: 0.4; }
                          50% { transform: scale(1.1); opacity: 0.85; }
                        }
                        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
                        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
                      `}</style>
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
              The Maharishi Center for Leadership delivers this programme for
              senior executives, founders, high-potential managers, and entire
              C-suites who demand evidence-based, practical tools that produce
              measurable results. The programme delivers six outcomes:

            </p>
            

            <div className="space-y-2.5 text-primary/65">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="flex items-center  px-5   transition-colors rounded-md"
                >
                  <span className="font-serif text-2xl text-[hsl(var(--peach-deep))] font-light w-7 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] ">{objective}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}

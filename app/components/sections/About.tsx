"use client";

import { motion } from "framer-motion";

const cards = [
  { val: "20 min", label: "Twice daily practice", pos: "top-2 right-0" },
  { val: "600+", label: "Peer-reviewed studies", pos: "bottom-6 left-0" },
  {
    val: "250+",
    label: "Universities worldwide",
    pos: "top-1/2 -translate-y-1/2 -left-4",
  },
];

export function About() {
  return (
    <section id="about" className="bg-card py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 relative h-[440px] md:h-[520px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="rounded-full bg-[hsl(var(--sky)/0.4)]"
                style={{
                  width: 360,
                  height: 360,
                  animation: "breathe 6s ease-in-out infinite",
                }}
              />
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

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
              <p className="font-serif text-7xl md:text-8xl text-primary leading-none font-light">
                TM
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--peach-deep))] font-medium">
                Effortless Transcending
              </p>
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
                <p className="font-serif text-2xl text-primary font-light leading-none">
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
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <p className="flex items-center gap-3 text-[hsl(var(--peach-deep))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
              <span className="w-7 h-px bg-[hsl(var(--peach-deep))]" /> The
              Practice
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-primary leading-[1.05] font-light mb-8">
              One practice.{" "}
              <em className="italic text-[hsl(var(--peach-deep))]">
                Every benefit.
              </em>{" "}
              For life.
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-primary/70 leading-[1.85] font-light max-w-2xl">
              <p>
                Transcendental Meditation is a{" "}
                <strong className="text-primary font-medium">
                  simple, natural technique
                </strong>{" "}
                practised for twenty minutes, twice a day, sitting comfortably
                with the eyes closed. It is taught one-to-one by a certified
                teacher, and requires no belief, no concentration, and no
                effort to control the mind.
              </p>
              <p>
                During the practice, the mind settles naturally to a state of{" "}
                <strong className="text-primary font-medium">
                  restful alertness
                </strong>{" "}
                - a fourth major state of consciousness, physiologically
                distinct from waking, dreaming, and sleep. The internal
                foundation from which every other capability operates becomes
                verifiably stronger.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
              {[
                {
                  title: "Effortless",
                  desc: "No focus, no control, no monitoring of thoughts. The technique works because it is effortless.",
                },
                {
                  title: "Evidence-based",
                  desc: "600+ peer-reviewed studies. Endorsed by the American Heart Association. Over 50 years of validation.",
                },
                {
                  title: "Transformational",
                  desc: "Clarity returns. Reactivity falls away. A more coherent nervous system, a more composed mind.",
                },
              ].map((point) => (
                <div
                  key={point.title}
                  className="pt-5 border-t-2 border-[hsl(var(--sky))] hover:border-[hsl(var(--peach-deep))] transition-colors"
                >
                  <p className="text-sm font-medium text-primary mb-1.5">
                    {point.title}
                  </p>
                  <p className="text-[13px] text-primary/60 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

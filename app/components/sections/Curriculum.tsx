"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type CurriculumModule = {
  step: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  imageLabel: string;
  imageClassName?: string;
  points: readonly string[];
};

const modules: readonly CurriculumModule[] = [
  {
    step: "01",
    title: "The TM Technique & Daily Practice",
    subtitle: "Establish the practice correctly from day one.",
    image: "/images/Pillar-1-Maharishi.png",
    alt: "Person meditating at sunrise",
    imageLabel: "Technique",
    points: [
      "Learn the authentic technique from a certified teacher",
      "Establish a sustainable daily routine",
      "Natural and effortless, with no concentration required",
      "Twenty minutes twice daily, practised anywhere",
    ],
  },
  {
    step: "02",
    title: "Neuroscience of Peak Performance",
    subtitle: "Understand the physiology behind stronger leadership.",
    image: "/images/Pillar-2-Maharishi.png",
    alt: "Illustration showing increased brain coherence through TM practice",
    imageLabel: "Science",
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
    subtitle:
      "Translate the practice into performance, resilience, and health.",
    image: "/images/Pillar-3-Maharishi.png",
    alt: "Indian executive in a calm and composed professional setting",
    imageLabel: "Application",
    imageClassName: "object-center",
    points: [
      "Higher states of development and their link to performance",
      "Emotional intelligence, resilience, and leadership presence",
      "How TM reduces stress at the physiological level",
      "Long-term health, vitality, and cardiovascular protection",
    ],
  },
] as const;

const factStrip = [
  { value: "4 months", label: "Guided executive journey" },
  { value: "10 sessions", label: "Live learning progression" },
  { value: "1 retreat", label: "Deep-rest capstone day" },
] as const;

export function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-[linear-gradient(180deg,hsl(var(--sky)/0.22)_0%,hsl(var(--background))_100%)] py-18 md:py-30"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at top right, hsl(var(--cream) / 0.8), transparent 26%), linear-gradient(180deg, transparent 0%, hsl(var(--background) / 0.18) 100%)",
        }}
      />

      <div className="container relative mx-auto  md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl px-6"
        >
          <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[hsl(var(--peach-deep))]">
            <span className="h-px w-8 bg-[hsl(var(--peach-deep))]" />
            The Curriculum
          </p>
          <h2 className="font-serif text-4xl font-light leading-[1.08] text-primary md:text-6xl">
            What you will Learn{" "}
            <em className="italic text-[hsl(var(--peach-deep))]">
              & Master
            </em>
          </h2>
          <p className="mt-6 max-w-3xl text-base font-light leading-[1.9] text-primary/62 md:text-lg">
            The curriculum is designed to move from authentic technique, to
            measurable brain and physiology change, to the higher-order
            qualities of leadership presence, resilience, and sustainable
            performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-10 grid gap-4 md:grid-cols-3 px-6"
        >
          {factStrip.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[1.6rem] border border-[hsl(var(--sky)/0.9)] bg-white/70 px-5 py-5 shadow-[0_18px_40px_-34px_rgba(7,29,64,0.4)] backdrop-blur-sm"
            >
              <p className="font-serif text-3xl font-light text-primary">
                {fact.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-primary/60">
                {fact.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-14 ">
          {modules.map((module, index) => {
            const imageOnLeft = index % 2 === 1;

            return (
              <motion.article
                key={module.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                className="grid overflow-hidden lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-[320px] sm:min-h-[380px] lg:min-h-[460px] ${
                    imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={module.image}
                    alt={module.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`object-cover ${
                      module.imageClassName ?? "object-center"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm">
                    {module.imageLabel}
                  </div>
                </div>

                <div
                  className={`relative flex min-h-[320px] flex-col justify-center px-6 py-10 sm:px-8 md:px-10 lg:px-12 ${
                    imageOnLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(var(--plum-soft)) 0%, hsl(var(--primary)) 58%, hsl(var(--plum)) 100%)",
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-90"
                    style={{
                      background:
                        "radial-gradient(circle at 56% 82%, hsl(var(--peach) / 0.38), transparent 24%), radial-gradient(circle at 22% 18%, hsl(var(--sky) / 0.18), transparent 28%)",
                    }}
                  />

                  <div className="relative z-10">
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">
                      Pillar {module.step}
                    </p>

                    <div className="mt-5 flex items-center gap-4">
                      <span className="font-serif text-5xl font-light leading-none text-[hsl(var(--peach))] md:text-6xl">
                        {module.step}
                      </span>
                      <span className="h-px flex-1 bg-white/18" />
                    </div>

                    <h3 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-white md:text-[2.6rem]">
                      {module.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-[15px] font-light leading-[1.9] text-white/70 md:text-base">
                      {module.subtitle}
                    </p>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                      {module.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-[2px]"
                        >
                          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[hsl(var(--peach))]" />
                          <span className="text-sm leading-[1.75] text-white/80">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

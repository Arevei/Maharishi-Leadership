"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const transformationPoints = [
  {
    index: "01",
    title: "Clarity in Decision-Making",
    desc: "Frontal brain coherence restores the mind's ability to see clearly under pressure.",
    image: "/images/Clarity-Maharishi.jpg",
    reference: "https://doi.org/10.1016/j.ijpsycho.2008.09.007",
  },
  {
    index: "02",
    title: "Emotional Intelligence",
    desc: "Deep rest dissolves reactivity — what remains is steadiness, empathy, and presence.",
    image: "/images/Emotional-Intelligence-Maharishi.jpg",
    reference: "https://www.thepermanentejournal.org/doi/10.7812/TPP/17-172",
  },
  {
    index: "03",
    title: "Sustained Focus",
    desc: "Alpha coherence across the brain sustains attention without effort or fatigue.",
    image: "/images/Focus-Maharishi.jpg",
    reference: "https://doi.org/10.1038/s41598-025-14898-w",
  },
] as const;

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-card py-18 md:py-30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="min-w-0"
          >
            <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[hsl(var(--peach-deep))]">
              <span className="h-px w-7 bg-[hsl(var(--peach-deep))]" />
              The Premise
            </p>
            <h2 className=" font-serif text-4xl leading-[1.03] font-light text-primary sm:text-5xl xl:text-6xl">
              One Effortless Practice.{" "}
              <em className="italic text-[hsl(var(--peach-deep))]">
                A Lifetime of Benefits.
              </em>
            </h2>

            <div className="mt-8 max-w-[34rem] overflow-hidden rounded-[2rem] sm:p-5">
              <Image
                src="/images/Premise.png"
                width={600}
                height={400}
                alt="Neuroscience illustration of brain coherence during Transcendental Meditation"
                className="h-auto w-full rounded-[1.35rem] object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="min-w-0 lg:pt-10 xl:pt-14"
          >
            <div className="max-w-none space-y-6 text-base leading-[1.9] font-light text-primary/70 sm:text-lg">
              <p>
                TM is a simple, natural technique practised twice a day for
                twenty minutes, sitting comfortably with the eyes closed. It
                requires no belief, no concentration, and no change in
                lifestyle, which is why it has been learned by CEOs and
                surgeons, soldiers and students, in over one hundred countries
                and across every culture and background.
              </p>
              <p>
                What it does is universal: it allows the mind to settle inward
                to a state of restful alertness, the deepest rest the body can
                take while the mind remains fully awake. From that simple
                experience, the brain and the whole physiology begin to change.
              </p>
              <p>
                Under sustained pressure, the brain&apos;s decision-making centre
                loses efficiency. TM restores it, delivering deep physiological
                rest while keeping the brain fully alert and coherent. The
                result is sharper thinking, faster recovery, and more consistent
                performance.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 rounded-[2rem]   shadow-[0_24px_60px_-44px_rgba(7,29,64,0.22)] ">
          <div className="flex flex-col gap-5 pb-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[hsl(var(--peach-deep))]">
                The Transformation Achieved by TM
              </p>
            </div>

          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {transformationPoints.map((point) => (
              <article
                key={point.title}
                className=" border border-border/60 bg-card/95 p-2 shadow-[0_16px_34px_-30px_rgba(7,29,64,0.18)] sm:p-3 md:p-4"
              >
                <div className="grid grid-cols-[76px_minmax(0,1fr)_auto] gap-4 sm:grid-cols-[95px_minmax(0,1fr)_auto]">
                  <div className="relative h-[100px] width-[100px] my-auto overflow-hidden  bg-muted">
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      sizes="150px"
                      className="object-cover  width-[100px]"
                    />
                  </div>

                  <div className="min-w-0 py-1 ">
                    <h4 className="text-lg text-primary font-bold">
                      <span className=" uppercase  text-[hsl(var(--peach-deep))] font-bold">
                        {point.index}
                      </span>{" "}
                      - {point.title}
                    </h4>
                    <p className="mt-3 text-base text-primary/60 leading-[1.6]">
                      {point.desc}
                    </p>
                  </div>

                  <Link
                    href={point.reference}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={`Open reference for ${point.title}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

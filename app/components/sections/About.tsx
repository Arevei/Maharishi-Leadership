"use client";

import { motion } from "framer-motion";
import Image from "next/image";



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
            <p className="flex items-center gap-3 text-[hsl(var(--peach-deep))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
              <span className="w-7 h-px bg-[hsl(var(--peach-deep))]" /> The
              Programme
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-primary leading-[1.05] font-light mb-8">
              One effortless practice.{" "}
              <em className="italic text-[hsl(var(--peach-deep))]">
                A lifetime of benefits.
              </em>
            </h2>
           <Image src="/images/Headview.png" width={600} height={400} alt="EEG coherence" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            
            <div className="space-y-6 text-base sm:text-lg text-primary/70 leading-[1.85] font-light max-w-2xl">
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
                result is sharper thinking, faster recovery, and more
                consistent performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
              {[
                {
                  title: "Effortless",
                  desc: "No focus, no control, no monitoring of thoughts. The technique works because it is effortless.",
                },
                {
                  title: "Universal",
                  desc: "Learned across cultures, professions, and leadership environments because it does not ask you to adopt a belief system.",
                },
                {
                  title: "Restful alertness",
                  desc: "Deep physiological rest with an awake mind - the state that supports clarity, resilience, and higher-quality performance.",
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

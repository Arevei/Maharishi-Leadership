"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



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

          </motion.div>
        </div>
            <div className="mt-12 rounded-[2rem]  bg-background/80 p-6  md:p-8">
              <div className="flex flex-col gap-5  pb-3 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[hsl(var(--peach-deep))]">
                    The Transformation Achieved by TM
                  </p>
                  
                </div>

                <Link
                  href="/#curriculum"
                  className="inline-flex w-fit items-center justify-center rounded-full border border-primary px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  View Curriculum
                </Link>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    index: "01",
                    title: "Clarity in Decision-Making",
                    desc: "The technique works because it is effortless. ",
                    imag:"/decision-making.avif",
                    reference:"https://doi.org/10.1016/j.ijpsycho.2008.09.007"
                  },
                  {
                    index: "02",
                    title: "Emotional Intelligence",
                    desc: "Stay composed when stakes are high.",
                    imag:"/emotional-intelligence.jpg",
                    reference:"https://www.thepermanentejournal.org/doi/10.7812/TPP/17-172"
                  },
                  {
                    index: "03",
                    title: "Sustained Focus",
                    desc: "Execute with consistency, not just intent.",
                    imag:"/focus.avif",
                    reference:"https://doi.org/10.1038/s41598-025-14898-w"
                  },
                ].map((point) => (
              
                  <div
                    key={point.title}
                    className="relative rounded-[1.45rem] flex  bg-card  shadow-[0_16px_34px_-30px_rgba(7,29,64,0.18)]"
                  >
                    <div className="w-[30%]  px-5">
                      <Image
                                        src={`/images${point.imag}`}
                                        alt={point.imag}
                                        width={320}
                                        height={160}
                                        className=" w-full h-full my-auto object-cover"
                                      />
                    </div>
                    <div className="w-[70%] my-auto">
                   
                    <h4 className=" text-lg font-medium leading-snug text-primary">
                       <span className=" uppercase  text-[hsl(var(--peach-deep))]">
                      {point.index}
                    </span> - {point.title}
                    </h4>
                    <p className="mt-3 text-[14px] leading-[1.8] text-primary/60">
                      {point.desc}
                    </p>
                    </div>
                    <Link href={point.reference} target="_blank" className="p-4 absolute right-0 top-0"><ExternalLink className="text-[#0b2d4d]"/></Link>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </section>
  );
}

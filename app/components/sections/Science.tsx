"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const stats = [
  { num: "480+", label: "Peer-reviewed studies on TM" },
  { num: "250+", label: "Universities and medical institutions" },
  { num: "5 Decades", label: "Of continuous clinical research" },
  { num: "50%", label: "Reduction in healthcare utilisation costs" },
  { num: "48%", label: "Lower risk of heart attack, stroke & death" },
  {
    num: "AHA",
    label:
      "The only meditation technique endorsed by the American Heart Association",
  },
];

const waves = [
  { label: "Frontal", active: 5, total: 5, stat: "+82% coherence" },
  { label: "Parietal", active: 4, total: 5, stat: "+64% coherence" },
  { label: "Occipital", active: 3, total: 5, stat: "+45% coherence" },
  { label: "Temporal", active: 2, total: 5, stat: "+38% coherence" },
];

export function Science() {
  return (
    <section
      id="science"
      className="relative overflow-hidden bg-primary py-18 md:py-30 text-primary-foreground "
    >
      <div
        aria-hidden
        className="absolute  inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--cream)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative mx-auto px-6 md:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[hsl(var(--peach))]">
              <span className="h-px w-7 bg-[hsl(var(--peach))]" /> The Science
            </p>
            <h2 className="mb-8 font-serif text-4xl font-light leading-[1.05] md:text-6xl">
              50 Years of Continuous Clinical{" "}
              <em className="italic text-[hsl(var(--peach))]">Research.</em>
            </h2>
            <p className="text-lg font-light leading-[1.85] text-primary-foreground/60">
              Published across the world&apos;s leading journals of cardiology,
              psychology, neuroscience, and public health, including JAMA,
              Hypertension, The Lancet, and Nature Reviews Cardiology.
            </p>
          </motion.div>

        </div>

        <div className="mb-20 mt-16 grid grid-cols-2 gap-px bg-primary-foreground/[0.08] md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="bg-primary p-8 transition-colors hover:bg-[hsl(var(--peach)/0.08)] md:p-10"
            >
              <p className="mb-4 font-serif text-5xl font-light leading-none text-[hsl(var(--peach))] md:text-6xl">
                {s.num}
              </p>
              <p className="max-w-[220px] text-sm leading-relaxed text-primary-foreground/65">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid items-center gap-6 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8 border border-primary-foreground/10 bg-primary-foreground/[0.03] p-5 md:p-10"
          >
            <div>
              
              <h3 className="mb-5 font-serif text-3xl font-light leading-tight md:text-4xl">
                Peak Performance Is Correlated with {" "}
                <em className="italic text-[hsl(var(--peach))]">
                  Integrated Brain Functioning.
                </em>
              </h3>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[hsl(var(--peach))]">
                Whole-brain coherence — Travis & Shear, 2010 · Consciousness and Cognition
              </p>
             
              <p className="text-[15px] font-light leading-[1.85] text-primary-foreground/55">
                &ldquo;Frontal brain coherence is correlated directly with
                creativity, moral reasoning, practical intelligence, and
                emotional resilience.&rdquo; This is the neural foundation of
                great leadership.
              </p>
              <p className="mb-4 text-[15px] font-light leading-[1.85] text-primary-foreground/55">
                TM activates the hidden reserves of the brain, making higher
                order thinking more available under pressure.
              </p>
               <p className="mb-4 text-[15px] font-light leading-[1.85] text-primary-foreground/55">
                EEG research shows TM uniquely produces high-amplitude alpha coherence across the frontal cortex : the neurophysiological signature of integrated, high-functioning mental performance.
              </p>
              <p className="mb-4 text-[15px] font-light leading-[1.85] text-primary-foreground/55">
                <Link
                  href="https://www.davidlynchfoundation.org/pdf/Research-on-TM.pdf"
                  className="inline-flex items-center gap-2 text-[hsl(var(--peach))] hover:text-primary-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the full research overview
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              {waves.map((w) => (
                <div key={w.label} className="flex items-center gap-4">
                  <span className="w-16 shrink-0 text-[11px] uppercase tracking-widest text-primary-foreground/40">
                    {w.label}
                  </span>
                  <div className="flex flex-1 gap-1">
                    {Array.from({ length: w.total }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-[3px] flex-1 rounded-full ${
                          i < w.active
                            ? "bg-[hsl(var(--peach))]"
                            : "bg-primary-foreground/10"
                        }`}
                        style={
                          i < w.active
                            ? {
                                animation: `waveAnim 3s ease-in-out ${i * 0.2}s infinite`,
                              }
                            : undefined
                        }
                      />
                    ))}
                  </div>
                  <span className="w-24 text-right text-[11px] tabular-nums text-[hsl(var(--peach))]">
                    {w.stat}
                  </span>
                </div>
              ))}
              <style>{`
                @keyframes waveAnim {
                  0%,100% { opacity: 0.5; transform: scaleX(1); }
                  50% { opacity: 1; transform: scaleX(1.1); }
                }
              `}</style>
            </div>
          </motion.div>

          <div className="relative overflow-hidden  border border-primary-foreground/10 bg-primary-foreground/[0.05] ">
            <div className="relative aspect-[4/3] overflow-hidden ">
              <Image
                src="/images/coherence.jpg"
                alt="EEG coherence visual"
                fill
                sizes="(min-width: 1024px) 42rem, 100vw"
                className="object-cover"
              />
             
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}

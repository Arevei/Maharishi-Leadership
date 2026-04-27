"use client"
import { motion } from "framer-motion";
import Image from "next/image";
const stats = [
  { num: "600+", label: "Peer-reviewed studies on TM" },
  { num: "250+", label: "Universities and medical institutions" },
  { num: "50 yr", label: "Of continuous clinical research" },
  { num: "50%", label: "Reduction in healthcare utilisation costs" },
  { num: "48%", label: "Lower risk of heart attack, stroke & death" },
  { num: "AHA", label: "The only meditation technique endorsed by the American Heart Association" },
];

const waves = [
  { label: "Frontal", active: 5, total: 5, stat: "+82% coherence" },
  { label: "Parietal", active: 4, total: 5, stat: "+64% coherence" },
  { label: "Occipital", active: 3, total: 5, stat: "+47% coherence" },
  { label: "Temporal", active: 4, total: 5, stat: "+58% coherence" },
];

const scienceCollage = [
  {
    src: "/images/TM-science.png",
    alt: "A meditator sitting against a warm sunset sky",
    className:
      "absolute -right-30 top-0 h-72 w-72 md:h-80 md:w-80 rounded-full border-[6px] border-[hsl(var(--primary))]",
  },
  {
    src: "/images/tm-1.jpg",
    alt: "A practitioner meditating at sunrise",
    className:
      "absolute left-10 bottom-30 h-36 w-36 md:h-44 md:w-44 rounded-full border-[6px] border-[hsl(var(--primary))]",
  },
  
];

export function Science() {
  return (
    <section
      id="science"
      className="relative bg-primary text-primary-foreground py-24 md:py-36 overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--cream)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mb-20"
        >
          <p className="flex items-center gap-3 text-[hsl(var(--peach))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
            <span className="w-7 h-px bg-[hsl(var(--peach))]" /> The Science
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] font-light mb-8">
            More than 600 peer-reviewed studies{" "}
            <em className="italic text-[hsl(var(--peach))]">
              across five decades.
            </em>
          </h2>
          <p className="text-lg text-primary-foreground/60 leading-[1.85] font-light">
            Published across the world&apos;s leading journals of cardiology,
            psychology, neuroscience, and public health - including JAMA,
            Hypertension, The Lancet, and Nature Reviews Cardiology. The most
            extensively researched mind-body practice in the world.
          </p>
        </motion.div>
          <div className="relative mx-auto h-[430px] w-full max-w-[430px]">
            <div
              className="absolute inset-4 rounded-[2.5rem]"
            />
            <div className="" />

            {scienceCollage.map((item) => (
              <div
                key={item.src}
                className={`${item.className} relative overflow-hidden shadow-[0_18px_44px_-24px_rgba(0,0,0,0.7)]`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 24rem, 100vw"
                  className="object-cover"
                />
              </div>
            ))}

          
          </div>
        
        
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-primary-foreground/[0.08] mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="bg-primary p-8 md:p-10 hover:bg-[hsl(var(--peach)/0.08)] transition-colors"
            >
              <p className="font-serif text-5xl md:text-6xl text-[hsl(var(--peach))] font-light leading-none mb-4">
                {s.num}
              </p>
              <p className="text-sm text-primary-foreground/65 leading-relaxed max-w-[200px]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brain coherence visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="border border-primary-foreground/10 bg-primary-foreground/[0.03] p-10 md:p-16 space-y-8 "
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--peach))] font-medium mb-4">
              Travis &amp; Shear, 2010 · Consciousness and Cognition
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-5">
              Whole-brain{" "}
              <em className="italic text-[hsl(var(--peach))]">coherence.</em>
            </h3>
            <p className="text-primary-foreground/55 leading-[1.85] font-light mb-4 text-[15px]">
              EEG research shows TM uniquely produces high-amplitude alpha
              coherence across the frontal cortex — the neurophysiological
              signature of integrated, high-functioning mental performance.
            </p>
            <p className="text-primary-foreground/55 leading-[1.85] font-light text-[15px]">
              &ldquo;Frontal brain coherence correlated directly with creativity,
              moral reasoning, practical intelligence, and emotional
              resilience.&rdquo; This is the neural foundation of great
              leadership.
            </p>
          </div>
          <div className="space-y-4">
            {waves.map((w) => (
              <div key={w.label} className="flex items-center gap-4">
                <span className="text-[11px] uppercase tracking-widest text-primary-foreground/40 w-16 shrink-0">
                  {w.label}
                </span>
                <div className="flex-1 flex gap-1">
                  {Array.from({ length: w.total }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-[3px] rounded-full ${
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
                <span className="text-[11px] text-[hsl(var(--peach))] tabular-nums w-24 text-right">
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

        <Image src="/images/coherence.jpg" width={600} height={400} alt="EEG coherence" />
        </div>
      </div>
    </section>
  );
}

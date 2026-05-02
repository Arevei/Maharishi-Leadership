"use client"
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useConsultationDrawer } from "../consultation/ConsultationDrawerProvider";

const TRUST_ITEMS = [
  "50+ years of research",
  "Evidence-based",
  "Practised at Google, IBM, Bridgewater, Tata",
  "Endorsed by the American Heart Association",
];

function ParticleOrb({
  delay = 0,
  size = 300,
  x = "50%",
  y = "50%",
  color = "rgba(255,200,80,0.12)",
}: {
  delay?: number;
  size?: number;
  x?: string;
  y?: string;
  color?: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  const bgScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const contentY = useTransform(scrollY, [0, 600], ["0%", "-8%"]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [lineReady, setLineReady] = useState(false);
  const { openConsultationDrawer } = useConsultationDrawer();

  useEffect(() => {
    const t = setTimeout(() => setLineReady(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-[#080604]">
      {/* ── HERO ── */}
      <div
        ref={containerRef}
        className="relative h-[50rem] min-h-[120vh]   w-full overflow-hidden flex flex-col items-center justify-center"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        {/* Background with parallax */}
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ y: bgY, scale: bgScale, backgroundImage: `url(${"/images/hero-meditation-tree.png"})` }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8,6,4,0.95) 0%, rgba(8,6,4,0.55) 38%, rgba(8,6,4,0.15) 65%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(180,110,30,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,5,10,0.60) 0%, transparent 28%)",
            }}
          />
        </div>

        {/* Ambient orbs */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <ParticleOrb delay={0} size={600} x="50%" y="55%" color="rgba(240,180,60,0.10)" />
          <ParticleOrb delay={2} size={400} x="30%" y="70%" color="rgba(100,160,240,0.07)" />
          <ParticleOrb delay={3.5} size={350} x="70%" y="65%" color="rgba(200,140,60,0.08)" />
        </div>

        {/* Top decorative line */}
        {/* <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-6 pointer-events-none">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent"
            initial={{ width: "0%" }}
            animate={{ width: lineReady ? "90%" : "0%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </div> */}

       

        {/* Main content */}
        <motion.div
          className="relative z-20 flex flex-col items-center text-center px-6 sm:px-10 max-w-4xl mx-auto"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-amber-300/25 bg-white/5 backdrop-blur-sm text-amber-200/85 text-xs sm:text-sm tracking-[0.2em] uppercase font-sans font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Maharishi Center for Leadership
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white leading-[1.1] mb-5"
            style={{
              fontSize: "clamp(2.3rem, 5.5vw, 4.4rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            World-Class Performance and{" "}
            <br className="hidden sm:block" />
            Resilience Is Built on{" "}
            <motion.span
              className="italic block sm:inline"
              style={{
                background:
                  "linear-gradient(135deg, #f9d77e 0%, #e8a83a 50%, #f9d77e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
            >
              World-Class Brain Functioning.
            </motion.span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
            className="text-white/55 font-sans font-light mb-4 tracking-wide"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", lineHeight: 1.6 }}
          >
            Lead at a Higher Level.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
            className="text-white/50 font-sans font-light max-w-2xl mb-10"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)", lineHeight: 1.85 }}
          >
            A 4-Month Executive Development Programme backed by{" "}
            <span className="text-amber-300/80 font-normal">480+ Peer-Reviewed Studies</span>{" "}
            that provides the neuro-physiological foundation for clarity, creativity,
            resilience, and peak performance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease: "easeOut" }}
          >
            <motion.div
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans font-medium text-sm tracking-wide overflow-hidden bg-primary text-white"
             
                onClick={openConsultationDrawer}

              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
              <span className="relative z-10">Book the Free Intro Talk</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </motion.div>

            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/18 bg-white/5 backdrop-blur-sm font-sans font-light text-sm tracking-wide text-white/75 hover:border-white/35 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("science")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Read the Science
              <span className="text-white/35">↓</span>
            </motion.button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            {TRUST_ITEMS.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="hidden sm:inline w-1 h-1 rounded-full bg-amber-300/50" />
                )}
                <span className="text-xs sm:text-sm text-white/55 font-light font-sans tracking-wide">
                  {item}
                </span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
        >
          <span className="text-white/25 text-[10px] font-sans tracking-[0.25em] uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      
    </div>
  );
}

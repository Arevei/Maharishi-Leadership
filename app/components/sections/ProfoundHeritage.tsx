"use client";

import { motion } from "framer-motion";

export function ProfoundHeritage() {
  return (
    <section
      id="about"
      style={{
        background: "hsl(var(--background))",
        overflow: "hidden",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 py-16 sm:py-30 text-center border-t">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] tracking-[0.22em] uppercase font-sans mb-8">
            Our Profound Heritage
          </span>

          <h2
            className="leading-[1.08] mb-6"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 400,
              color: "hsl(var(--primary))",
              letterSpacing: "-0.01em",
            }}
          >
            Rooted in 5,000 Years
            <span
              className="block italic mt-2"
              style={{ color: "hsl(var(--peach-deep))" }}
            >
              of Vedic Wisdom.
            </span>
          </h2>

          <p
            className="font-sans font-light leading-[1.9] max-w-2xl mx-auto mb-14"
            style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)", color: "#57534e" }}
          >
            Transcendental Meditation was brought to the modern world in its
            original purity by{" "}
            <span
              className="font-normal"
              style={{ color: "hsl(var(--peach-deep))" }}
            >
              Maharishi Mahesh Yogi
            </span>
            ,
            who drew upon the ancient Vedic tradition of India - one of the
            oldest and most systematically developed bodies of knowledge on
            human consciousness. The technique is effortless, universal, and
            taught one-to-one, preserving an unbroken oral lineage spanning millennia.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mb-16"
          style={{ maxWidth: 820 }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "hsl(var(--primary))",
              border: "1px solid hsl(var(--peach-deep) / 0.22)",
              boxShadow:
                "0 32px 80px rgba(7,29,64,0.22), 0 0 0 1px hsl(var(--peach-deep) / 0.1)",
            }}
          >
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              playsInline
            >
              <source
                src="https://res.cloudinary.com/dycpdti0a/video/upload/v1778245977/WhatsApp_Video_2026-05-08_at_2.36.52_PM_qrnf3h.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        span.inline-flex {
          border-color: hsl(var(--peach-deep) / 0.22);
          background: hsl(var(--sky) / 0.2);
          color: hsl(var(--peach-deep) / 0.9);
        }
        p {
          color: hsl(var(--primary) / 0.7);
        }
      `}</style>
    </section>
  );
}

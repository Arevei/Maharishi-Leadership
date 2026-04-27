"use client"
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="contact"
      className="bg-primary text-primary-foreground py-32 md:py-44 text-center relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(var(--peach) / 0.25) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 100%, hsl(var(--sky) / 0.18) 0%, transparent 70%)",
        }}
      />
      <div className="container relative mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-4xl md:text-6xl lg:text-[4.75rem] leading-[1.08] font-light mb-8"
        >
          The most important upgrade
          <br />
          available to a leader{" "}
          <em className="italic text-[hsl(var(--peach))]">begins here.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-lg text-primary-foreground/60 max-w-2xl mx-auto leading-[1.85] font-light mb-14"
        >
          A 30-minute introductory talk is the simplest way to understand
          whether the programme is right for you, your team, or your
          organisation. No obligation. No follow-up unless you ask for one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="mailto:Debashish.Sarkar@tm.org?subject=Maharishi%20Center%20for%20Leadership%20%E2%80%94%20Free%20Intro%20Talk"
            className="px-10 py-4 rounded-full bg-[hsl(var(--cream))] text-primary text-sm uppercase tracking-[0.2em] font-medium hover:bg-[hsl(var(--sky))] transition-colors w-full sm:w-auto text-center"
            data-testid="cta-primary"
          >
            Book a free intro talk
          </a>
          <a
            href="mailto:Debashish.Sarkar@tm.org?subject=Corporate%20%2F%20Team%20Programme%20%E2%80%94%20Enquiry"
            className="px-10 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground/80 text-sm uppercase tracking-[0.2em] font-medium hover:border-[hsl(var(--peach))] hover:text-[hsl(var(--peach))] transition-colors w-full sm:w-auto text-center"
          >
            Bring this to my organisation
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 text-[11px] uppercase tracking-[0.25em] text-primary-foreground/45"
        >
          In partnership with CII&nbsp;&nbsp;·&nbsp;&nbsp;Trusted by leaders at Google, IBM, Bridgewater, Tata
        </motion.p>
      </div>
    </section>
  );
}

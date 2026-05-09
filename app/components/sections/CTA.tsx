"use client";

import { motion } from "framer-motion";
import { openCalendlyPopup } from "@/app/lib/calendly";

export function CTA() {
  return (
    <section
      id="contact"
      className="bg-primary text-primary-foreground py-26 md:py-36 text-center relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--cream)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
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
          Start with{" "}
          <em className="italic text-[hsl(var(--peach))]">a Conversation.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-lg text-primary-foreground/60 max-w-2xl mx-auto leading-[1.85] font-light mb-14"
        >
          The simplest way to understand how the programme works for you, your
          team, or your organisation is to book a conversation with an expert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
              type="button"
              onClick={openCalendlyPopup}
              className="book-pill ml-2 inline-flex tracking-[0.22em] items-center gap-4 rounded-full border  px-10 py-4 text-sm font-semibold uppercase bg-white text-primary shadow-[0_18px_38px_-24px_rgba(7,29,64,0.22)]"
              data-testid="nav-cta"
            >
              <span className="relative z-10">Book a Intro Talk</span>
              <span className="book-pill-dot relative z-10" />
            </button>
          {/* <Link
            href={getContactHref("corporate-team")}
            className="px-10 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground/80 text-sm uppercase tracking-[0.2em] font-medium hover:border-[hsl(var(--peach))] hover:text-[hsl(var(--peach))] transition-colors w-full sm:w-auto text-center"
          >
            Bring this to my organisation
          </Link> */}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 text-[11px] uppercase tracking-[0.25em] text-primary-foreground/45"
        >
          &nbsp;&nbsp;&middot;&nbsp;&nbsp;Trusted by
          leaders at Google, IBM, Bridgewater, Tata
        </motion.p>
      </div>
    </section>
  );
}

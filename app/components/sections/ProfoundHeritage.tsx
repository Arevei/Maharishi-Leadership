"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const heritageLinks = [
  {
    label: "What is Transcendental Meditation",
    href: "https://www.tm.org/en-gb/what-is-tm",
  },
  {
    label: "Research overview (David Lynch Foundation PDF)",
    href: "https://www.davidlynchfoundation.org/pdf/Research-on-TM.pdf",
  },
  {
    label: "American Heart Association scientific statement",
    href: "https://www.ahajournals.org/doi/10.1161/HYP.0000000000000063",
  },
] as const;

export function ProfoundHeritage() {
  return (
    <section id="heritage" className="bg-card py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[hsl(var(--peach-deep))]">
              <span className="h-px w-7 bg-[hsl(var(--peach-deep))]" />
              Profound Heritage
            </p>
            <h2 className="font-serif text-4xl font-light leading-[1.08] text-primary md:text-5xl">
              Timeless knowledge,{" "}
              <em className="italic text-[hsl(var(--peach-deep))]">
                validated by modern science.
              </em>
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-[1.9] text-primary/65 md:text-lg">
              The Maharishi tradition offers a precise and practical approach to
              inner development. Our leadership work stands at that intersection
              of authentic lineage and evidence-based application.
            </p>

            <div className="mt-8 space-y-3">
              {heritageLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-full border border-border/80 bg-background px-5 py-3 text-sm text-primary transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <span>{item.label}</span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-primary/60" />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto aspect-[4/3] w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-border/70"
          >
            <Image
              src="/images/tm-1.jpg"
              alt="Meditative stillness represented in a professional context"
              fill
              sizes="(min-width: 1024px) 34rem, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

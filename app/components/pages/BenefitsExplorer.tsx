"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { benefitTypes, type BenefitTypeKey } from "@/data/benefits";
import { getContactHref } from "@/data/contact";

export function BenefitsExplorer() {
  const [activeKey, setActiveKey] = useState<BenefitTypeKey>(benefitTypes[0].key);
  const active =
    benefitTypes.find((item) => item.key === activeKey) ?? benefitTypes[0];

  return (
    <section className="py-20 md:py-28" id="benefit-types">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-[hsl(var(--peach-deep))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
            <span className="w-7 h-px bg-[hsl(var(--peach-deep))]" /> Benefit
            Types
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05] font-light">
            Explore the outcomes,
            <br />
            <em className="italic text-[hsl(var(--peach-deep))]">
              by the kind of change you need most.
            </em>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-primary/65 leading-[1.9] max-w-2xl">
            The categories below are inspired by the public TM benefits
            landscape, but written for the realities of leadership: pressure,
            clarity, health, relationships, and the wider system effects of a
            steadier brain.
          </p>
        </div>

        <div className="mt-10 md:hidden">
          <label
            htmlFor="benefit-type-select"
            className="block text-[11px] uppercase tracking-[0.22em] text-primary/55 mb-3"
          >
            Choose a benefit type
          </label>
          <div className="relative">
            <select
              id="benefit-type-select"
              value={activeKey}
              onChange={(event) =>
                setActiveKey(event.target.value as BenefitTypeKey)
              }
              className="w-full appearance-none rounded-full border border-border bg-card px-5 py-4 pr-12 text-primary shadow-[0_16px_40px_-30px_rgba(6,32,63,0.28)]"
            >
              {benefitTypes.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/55" />
          </div>
        </div>

        <div className="mt-10 hidden md:flex flex-wrap gap-3">
          {benefitTypes.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveKey(item.key)}
              className={`rounded-full px-5 py-3 text-sm transition-all ${
                item.key === activeKey
                  ? "bg-primary text-primary-foreground shadow-[0_18px_50px_-28px_rgba(6,32,63,0.55)]"
                  : "bg-card text-primary/65 border border-border hover:text-primary hover:border-primary/25"
              }`}
              data-testid={`benefit-type-${item.key}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42 }}
            className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
          >
            <div className="rounded-[2rem] border border-border bg-card p-7 md:p-10 shadow-[0_24px_80px_-40px_rgba(6,32,63,0.3)]">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[hsl(var(--peach-deep))] font-medium">
                {active.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-3xl md:text-5xl text-primary leading-[1.08] font-light">
                {active.headline}
              </h3>
              <p className="mt-5 text-primary/65 text-base leading-[1.9] max-w-2xl">
                {active.intro}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {active.cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.35rem] border border-border bg-background px-5 py-5"
                  >
                    <p className="text-sm font-medium text-primary">
                      {card.title}
                    </p>
                    <p className="mt-2 text-[14px] text-primary/60 leading-[1.75]">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-primary px-6 py-6 text-primary-foreground">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--peach))] font-medium">
                  Leadership voice
                </p>
                <p className="mt-4 font-serif text-2xl leading-[1.45] italic">
                  &ldquo;{active.quote.text}&rdquo;
                </p>
                <p className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--peach))] font-medium">
                  {active.quote.name}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/55">
                  {active.quote.role}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={getContactHref(active.ctaType)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--peach))] px-7 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary hover:bg-[hsl(var(--peach-deep))] hover:text-primary-foreground"
                >
                  {active.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-[13px] text-primary/50">
                  Selected path: {active.label}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-primary p-5 text-primary-foreground shadow-[0_28px_90px_-46px_rgba(4,18,44,0.9)]">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle at top left, hsl(var(--sky) / 0.2), transparent 32%), radial-gradient(circle at bottom right, hsl(var(--peach) / 0.14), transparent 28%)",
                  }}
                />
                <div className="relative h-[420px]">
                  <div className="absolute left-0 top-10 h-52 w-44 overflow-hidden rounded-[1.6rem] border border-white/12 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.7)]">
                    <Image
                      src={active.visual.secondaryImage}
                      alt={active.visual.secondaryAlt}
                      fill
                      sizes="(min-width: 1280px) 18rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute right-0 top-0 h-64 w-64 overflow-hidden rounded-full border-[6px] border-[hsl(var(--peach))] shadow-[0_18px_50px_-28px_rgba(0,0,0,0.75)]">
                    <Image
                      src={active.visual.primaryImage}
                      alt={active.visual.primaryAlt}
                      fill
                      sizes="(min-width: 1280px) 18rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute right-5 bottom-0 h-40 w-56 overflow-hidden rounded-[1.5rem] border border-white/16 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.75)]">
                    <Image
                      src={active.visual.accentImage}
                      alt={active.visual.accentAlt}
                      fill
                      sizes="(min-width: 1280px) 16rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute left-5 bottom-5 max-w-[15rem] rounded-[1.4rem] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/50">
                      Visual note
                    </p>
                    <p className="mt-2 text-sm leading-[1.7] text-primary-foreground/82">
                      {active.visual.accentLabel}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-7 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--peach-deep))] font-medium">
                  Evidence snapshot
                </p>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-5xl text-primary leading-none">
                      {active.evidence.stat}
                    </p>
                    <p className="mt-3 text-lg text-primary font-medium">
                      {active.evidence.title}
                    </p>
                  </div>
                  <span className="rounded-full bg-[hsl(var(--sky)/0.5)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary">
                    Research-backed
                  </span>
                </div>
                <p className="mt-4 text-primary/65 leading-[1.85]">
                  {active.evidence.body}
                </p>
                <p className="mt-5 text-[12px] text-primary/45 leading-relaxed">
                  {active.evidence.source}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

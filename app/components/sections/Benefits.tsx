"use client"
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TabKey = "mental" | "physical" | "performance";

const tabs: { key: TabKey; label: string }[] = [
  { key: "mental", label: "Individual Performance" },
  { key: "physical", label: "Organisational Impact" },
  { key: "performance", label: "Health & Well-being" },
];

const data: Record<
  TabKey,
  {
    items: { name: string; desc: string }[];
    chart: {
      title: string;
      source: string;
      bars: { name: string; value: number; label: string; tone: "primary" | "deep" | "peach" }[];
    };
  }
> = {
  mental: {
    items: [
      {
        name: "Clearer Thinking, Better Decisions",
        desc: "Statistically significant gains across all eight leadership dimensions after just 12 weeks of TM practice (Valosek et al., 2018).",
      },
      {
        name: "Creativity & innovation",
        desc: "Significant improvement in creative thinking, problem-solving, and the ability to access novel solutions under pressure.",
      },
      {
        name: "Sustained focus & memory",
        desc: "Higher frontal brain coherence correlates directly with attention, working memory, and the capacity to think long-form.",
      },
      {
        name: "Emotional intelligence & resilience",
        desc: "Measurable improvements in EQ, interpersonal communication, and the capacity to recover quickly from stress.",
      },
    ],
    chart: {
      title: "Brain Integration in Managers",
      source:
        "Brain and Cognition, Vol. 125, 2018. Travis et al., randomised controlled trial.",
      bars: [
        { name: "TM Group", value: 88, label: "+0.42", tone: "primary" },
        { name: "Control", value: 12, label: "−0.05", tone: "peach" },
      ],
    },
  },
  physical: {
    items: [
      {
        name: "Reduced burnout & absenteeism",
        desc: "Stress addressed at the physiological level produces measurable reductions in burnout, sick leave, and emotional fatigue across teams.",
      },
      {
        name: "Increased productivity",
        desc: "Reduced reactivity, sustained focus, and faster decision-making compound into significant productivity gains per employee.",
      },
      {
        name: "Stronger leadership at every level",
        desc: "Practised by leaders at Google, IBM, Bridgewater, Tata, Toyota, and JetSynthesys - and by their teams.",
      },
      {
        name: "Reduced turnover",
        desc: "Better cross-team decision-making, improved collaboration, and a measurable lift in culture and retention.",
      },
    ],
    chart: {
      title: "Healthcare Utilisation",
      source: "Orme-Johnson & Herron, 1997 · 5-year insurance claims study.",
      bars: [
        { name: "TM Practitioners", value: 30, label: "−50%", tone: "primary" },
        { name: "Matched Control", value: 90, label: "Baseline", tone: "peach" },
      ],
    },
  },
  performance: {
    items: [
      {
        name: "Reduced cortisol",
        desc: "Significant reduction in the primary biological stress hormone during the practice and across the day.",
      },
      {
        name: "Lower blood pressure",
        desc: "The only meditation technique endorsed by the American Heart Association — Class IIB recommendation, comparable to first-line medication.",
      },
      {
        name: "48% lower cardiac risk",
        desc: "5-year RCT: TM practitioners had 48% lower combined risk of heart attack, stroke, and death (Schneider et al., 2012).",
      },
      {
        name: "Deeper sleep, more energy",
        desc: "Restful alertness during practice produces deeper sleep, greater vitality, and reduced anxiety in the long term.",
      },
    ],
    chart: {
      title: "Anxiety reduction effect size",
      source: "Meta-analysis of 16 RCTs, Orme-Johnson & Barnes, 2013.",
      bars: [
        { name: "TM", value: 90, label: "0.62", tone: "primary" },
        { name: "Other Med.", value: 50, label: "0.32", tone: "deep" },
        { name: "Relaxation", value: 38, label: "0.27", tone: "peach" },
      ],
    },
  },
};

const toneClass: Record<string, string> = {
  primary: "bg-primary",
  deep: "bg-primary/65",
  peach: "bg-[hsl(var(--peach-deep))]",
};

export function Benefits() {
  const [tab, setTab] = useState<TabKey>("mental");
  const tabRefs = useRef<Partial<Record<TabKey, HTMLButtonElement | null>>>({});
  const d = data[tab];
  const activeTabIndex = tabs.findIndex((item) => item.key === tab);
  const previousTab = activeTabIndex > 0 ? tabs[activeTabIndex - 1] : null;
  const nextTab =
    activeTabIndex < tabs.length - 1 ? tabs[activeTabIndex + 1] : null;

  useEffect(() => {
    // activeButton?.scrollIntoView({
    //   behavior: "smooth",
    //   inline: "center",
    //   block: "nearest",
    // });
  }, [tab]);

  return (
    <section id="benefits" className="bg-background pt-24 pb-14 py-18 md:py-30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
        <div>
            <Image src="/images/Benefits-Maharishi.jpg" width={600} height={400} alt="Executive in a boardroom with team members in the background" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl "
        >
          <p className="flex items-center gap-3 text-[hsl(var(--peach-deep))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
            <span className="w-7 h-px bg-[hsl(var(--peach-deep))]" /> The Benefits
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05] font-light mb-8">
            Measurable Change.{" "}
            <em className="italic text-[hsl(var(--peach-deep))]">
              For Each Leader, Every Team, and the Organisation as a Whole.
            </em>
          </h2>
          <p className="text-lg text-primary/60 leading-[1.85] font-light">
            Decades of randomised controlled studies show TM produces consistent,
            replicable benefits across every dimension that matters for
            leadership : from individual cognition to organisational culture to
            cardiovascular health.
          </p>
        </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex items-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => previousTab && setTab(previousTab.key)}
              disabled={!previousTab}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-35 md:hidden"
              aria-label={
                previousTab
                  ? `Show ${previousTab.label.toLowerCase()}`
                  : "No previous tab"
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex overflow-x-auto overflow-y-hidden gap-0 border-b border-border scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    ref={(element) => {
                      tabRefs.current[t.key] = element;
                    }}
                    onClick={() => setTab(t.key)}
                    className={`-mb-px whitespace-nowrap border-b-2 px-5 py-4 text-[12px] uppercase tracking-[0.15em] transition-colors sm:px-6 md:px-7 md:text-[13px] ${
                      tab === t.key
                        ? "border-[hsl(var(--peach-deep))] font-medium text-[hsl(var(--peach-deep))]"
                        : "border-transparent text-primary/55 hover:text-primary"
                    }`}
                    data-testid={`benefits-tab-${t.key}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => nextTab && setTab(nextTab.key)}
              disabled={!nextTab}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-35 md:hidden"
              aria-label={
                nextTab ? `Show ${nextTab.label.toLowerCase()}` : "No next tab"
              }
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            <ul className="divide-y divide-border border-y border-border">
              {d.items.map((it) => (
                <li key={it.name} className="flex gap-5 py-6">
                  <span className="w-7 h-7 rounded-full bg-[hsl(var(--sky))] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7l4 4 6-6"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-primary mb-1">{it.name}</p>
                    <p className="text-[13px] text-primary/60 leading-relaxed">
                      {it.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-md bg-card p-2 md:p-10 text-center">
              <p className="font-serif text-2xl text-primary font-light mb-1">
                {d.chart.title}
              </p>
              <p className="text-[11px] text-primary/55 mb-8 leading-relaxed">
                {d.chart.source}
              </p>
              <div className="space-y-5">
                {d.chart.bars.map((b, i) => (
                  <div key={b.name} className="flex items-center gap-4">
                    <span className="text-[12px] text-primary/60 w-24 text-left shrink-0">
                      {b.name}
                    </span>
                    <div className="flex-1 h-5 bg-[hsl(var(--sky)/0.4)] rounded-sm overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${b.value}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.1 + i * 0.1,
                          ease: [0.4, 0, 0.2, 1] as const,
                        }}
                        className={`h-full ${toneClass[b.tone]} rounded-sm`}
                      />
                    </div>
                    <span className="text-[12px] font-medium text-primary tabular-nums w-12 shrink-0">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


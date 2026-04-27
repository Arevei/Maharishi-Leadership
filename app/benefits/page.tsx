import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BenefitsExplorer } from "@/app/components/pages/BenefitsExplorer";
import { Footer } from "@/app/components/sections/Footer";
import { Navbar } from "@/app/components/sections/Navbar";
import { benefitsProofStats } from "@/data/benefits";
import { getContactHref } from "@/data/contact";

export const metadata: Metadata = {
  title: "Benefits | Maharishi Center for Leadership",
  description:
    "Explore the benefits of Transcendental Meditation for leaders, teams, health, resilience, and organisational performance.",
};

export default function BenefitsPage() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary text-primary-foreground pt-36 md:pt-44 pb-20 md:pb-24">
          <div
            aria-hidden
            className="absolute inset-0 opacity-45"
            style={{
              background:
                "radial-gradient(circle at top left, hsl(var(--sky) / 0.22), transparent 26%), radial-gradient(circle at right center, hsl(var(--peach) / 0.18), transparent 24%), linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--plum-soft)) 100%)",
            }}
          />
          <div className="container relative mx-auto px-6 md:px-12">
            <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1fr)_24rem]">
              <div className="max-w-4xl">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[hsl(var(--peach))] font-medium">
                  Benefits for Leaders and Teams
                </p>
                <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-[5.4rem] leading-[1.03] font-light">
                  Benefits that start
                  <br />
                  in the brain and travel
                  <br />
                  <em className="italic text-[hsl(var(--peach))]">
                    through the whole system.
                  </em>
                </h1>
                <p className="mt-7 max-w-2xl text-base sm:text-lg leading-[1.9] text-primary-foreground/72">
                  This page translates the TM benefits landscape into executive
                  terms: stress recovery, clearer thinking, better health,
                  stronger relationships, and the wider organisational effects
                  of more coherent leadership.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="#benefit-types"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--peach))] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-primary hover:bg-[hsl(var(--peach-deep))] hover:text-primary-foreground"
                  >
                    Explore the categories
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={getContactHref("intro-talk")}
                    className="inline-flex items-center justify-center rounded-full border border-white/18 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground hover:bg-white/10"
                  >
                    Talk with us
                  </Link>
                </div>
              </div>

              <div className="relative h-[23rem] rounded-[2rem] border border-white/12 bg-white/8 p-4 backdrop-blur-xl shadow-[0_30px_100px_-46px_rgba(0,0,0,0.95)]">
                <div className="relative h-full overflow-hidden rounded-[1.55rem]">
                  <Image
                    src="/images/executive.png"
                    alt="Executive in calm focus"
                    fill
                    priority
                    sizes="(min-width: 1280px) 24rem, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 15%, hsl(var(--primary) / 0.22) 50%, hsl(var(--primary) / 0.88) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[hsl(var(--peach))]">
                      Research-led positioning
                    </p>
                    <p className="mt-2 font-serif text-2xl leading-tight">
                      The practice is simple.
                      <br />
                      The effects are systemic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/10 md:grid-cols-4">
              {benefitsProofStats.map((item) => (
                <div
                  key={item.value}
                  className="bg-primary/60 px-6 py-6 md:px-7 md:py-7"
                >
                  <p className="font-serif text-4xl text-[hsl(var(--peach))] leading-none">
                    {item.value}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/55">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsExplorer />

        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="rounded-[2rem] bg-primary px-8 py-10 md:px-12 md:py-12 text-primary-foreground">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--peach))] font-medium">
                    Next step
                  </p>
                  <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.08] font-light">
                    Turn the benefits into a conversation about your context.
                  </h2>
                  <p className="mt-4 max-w-2xl text-primary-foreground/65 leading-[1.85]">
                    If one of these categories feels especially relevant, we can
                    help you translate it into a programme conversation for an
                    individual leader, a senior cohort, or a broader team.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href={getContactHref("intro-talk")}
                    className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--peach))] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-primary hover:bg-[hsl(var(--peach-deep))] hover:text-primary-foreground"
                  >
                    Book a free intro talk
                  </Link>
                  <Link
                    href={getContactHref("corporate-team")}
                    className="inline-flex items-center justify-center rounded-full border border-white/16 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground hover:bg-white/10"
                  >
                    Talk about teams
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

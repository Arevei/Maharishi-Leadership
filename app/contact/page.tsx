import type { Metadata } from "next";
import Link from "next/link";
import { ContactInquiryForm } from "@/app/components/pages/ContactInquiryForm";
import { Footer } from "@/app/components/sections/Footer";
import { Navbar } from "@/app/components/sections/Navbar";
import {
  contactEmail,
  getContactHref,
  getContactInquiryType,
  resolveContactInquiryType,
} from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | Maharishi Center for Leadership",
  description:
    "Start a conversation about intro talks, team programmes, individual instruction, or research enquiries.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialType = resolveContactInquiryType(params.type);
  const selectedInquiry = getContactInquiryType(initialType);

  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary text-primary-foreground pt-36 md:pt-44 pb-20 md:pb-24">
          <div
            aria-hidden
            className="absolute inset-0 opacity-55"
            style={{
              background:
                "radial-gradient(circle at top left, hsl(var(--sky) / 0.22), transparent 26%), radial-gradient(circle at right top, hsl(var(--peach) / 0.16), transparent 24%), linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--plum-soft)) 100%)",
            }}
          />
          <div className="container relative mx-auto px-6 md:px-12">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start">
              <div className="max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[hsl(var(--peach))] font-medium">
                  Contact Maharishi Leadership
                </p>
                <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.03] font-light">
                  Start the right
                  <br />
                  conversation,
                  <br />
                  <em className="italic text-[hsl(var(--peach))]">
                    in the right format.
                  </em>
                </h1>
                <p className="mt-7 text-base sm:text-lg leading-[1.9] text-primary-foreground/72 max-w-2xl">
                  Whether you want a first introduction, a private path into TM,
                  or a conversation about bringing this work to a leadership
                  team, we will help route the enquiry cleanly.
                </p>

                <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/8 px-6 py-6 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[hsl(var(--peach))] font-medium">
                    Current inquiry focus
                  </p>
                  <h2 className="mt-3 font-serif text-2xl">
                    {selectedInquiry.label}
                  </h2>
                  <p className="mt-2 text-sm leading-[1.8] text-primary-foreground/68">
                    {selectedInquiry.description}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/8 px-5 py-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[hsl(var(--peach))]">
                      Who should reach out
                    </p>
                    <p className="mt-3 text-sm leading-[1.8] text-primary-foreground/72">
                      Founders, leadership teams, HR heads, individual
                      executives, researchers, and partners exploring meaningful
                      application.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/8 px-5 py-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[hsl(var(--peach))]">
                      What to expect
                    </p>
                    <p className="mt-3 text-sm leading-[1.8] text-primary-foreground/72">
                      A direct, context-aware response focused on fit, format,
                      timing, and the best next step for your situation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <ContactInquiryForm initialType={initialType} />

                <div className="rounded-[2rem] border border-white/10 bg-white/8 px-6 py-6 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[hsl(var(--peach))] font-medium">
                    Prefer direct contact?
                  </p>
                  <p className="mt-3 text-sm leading-[1.8] text-primary-foreground/72">
                    You can always write directly to{" "}
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-[hsl(var(--peach))] hover:text-primary-foreground"
                    >
                      {contactEmail}
                    </a>
                    . The structured inquiry form simply helps us answer faster
                    and more precisely.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={getContactHref("intro-talk")}
                      className="rounded-full border border-white/12 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/78 hover:bg-white/10"
                    >
                      Intro talk
                    </Link>
                    <Link
                      href={getContactHref("corporate-team")}
                      className="rounded-full border border-white/12 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/78 hover:bg-white/10"
                    >
                      Team programme
                    </Link>
                    <Link
                      href={getContactHref("press-research")}
                      className="rounded-full border border-white/12 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/78 hover:bg-white/10"
                    >
                      Press / research
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-border bg-card p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--peach-deep))]">
                  Intro talk
                </p>
                <h3 className="mt-4 text-xl text-primary font-medium">
                  Start with understanding
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-primary/60">
                  Best for leaders who want a sharp overview before deciding
                  whether the programme is personally or organisationally
                  relevant.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--peach-deep))]">
                  Team dialogue
                </p>
                <h3 className="mt-4 text-xl text-primary font-medium">
                  Talk about the system, not just the individual
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-primary/60">
                  Best for organisations exploring culture, resilience, health,
                  leadership development, or a cohort-based implementation.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--peach-deep))]">
                  Direct access
                </p>
                <h3 className="mt-4 text-xl text-primary font-medium">
                  Email-first and friction-light
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-primary/60">
                  No account creation, no CRM wall, no heavy process. Just a
                  better-framed way to start a serious conversation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

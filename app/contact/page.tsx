import type { Metadata } from "next";
import { ContactInquiryForm } from "@/app/components/pages/ContactInquiryForm";
import { Footer } from "@/app/components/sections/Footer";
import { Navbar } from "@/app/components/sections/Navbar";
import { resolveContactInquiryType } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | Maharishi Center for Leadership",
  description:
    "Book an intro conversation or send an enquiry for individual and team programmes.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialType = resolveContactInquiryType(params.type);

  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-white text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="pt-36 pb-12 md:pt-44 md:pb-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--peach-deep))] font-medium">
                Consultation
              </p>
              <h2
                    id="consultation-drawer-title"
                    className="mt-5 font-serif text-4xl font-light leading-[1.06] text-primary sm:text-5xl"
                  >
                    Connect with{" "}
                    <em className="italic text-[hsl(var(--peach-deep))]">
                      Us
                    </em>
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-sm leading-[1.9] text-primary/68 sm:text-base">
                    Choose a time that works for you and book your consultation
                    directly. 
                  </p>
            </div>

            <div className="mt-8 flex justify-center gap-3 ">
              <a
                href="#enquiry"
                className="rounded-full bg-[hsl(var(--sky)/0.45)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
              >
                Enquire Now
              </a>
              <a
                href="#booking"
                className="rounded-full bg-primary px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
              >
                Book Intro Talk
              </a>
              
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid items-center gap-8 lg:grid-cols-1 lg:gap-10">
              

              <article id="enquiry" className="w-full self-center rounded-[2rem] bg-transparent max-w-4xl mx-auto">
                <ContactInquiryForm initialType={initialType} />
              </article>
              <article
                id="booking"
                className="w-full self-center rounded-[2rem] bg-card p-6 shadow-[0_22px_60px_-40px_rgba(7,29,64,0.28)] md:p-8 max-w-4xl mx-auto"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--peach-deep))] font-medium">
                  Book a Meeting
                </p>
                <h2 className="mt-3 font-serif text-3xl text-primary">
                  Schedule an Intro Talk
                </h2>
                <p className="mt-3 text-sm leading-[1.8] text-primary/65">
                  Select a suitable time from our calendar and we will connect
                  with you directly.
                </p>
                <div className="mt-6 h-[900px] overflow-hidden rounded-[1.5rem] bg-white shadow-[inset_0_0_0_1px_hsl(var(--border))]">
                  <iframe
                    title="Calendly booking"
                    src="https://calendly.com/maharishileadership/30min?hide_gdpr_banner=1"
                    className=" w-full h-full"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

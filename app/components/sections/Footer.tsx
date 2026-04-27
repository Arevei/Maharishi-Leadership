"use client"

const cols = [
  {
    heading: "Explore",
    links: [
      { label: "The Premise", href: "#about" },
      { label: "The Science", href: "#science" },
      { label: "Benefits", href: "#benefits" },
      { label: "Voices", href: "#testimonials" },
    ],
  },
  {
    heading: "The Programme",
    links: [
      { label: "Course Structure", href: "#programme" },
      { label: "Full Curriculum", href: "#curriculum" },
      { label: "Corporate / Team", href: "mailto:Debashish.Sarkar@tm.org?subject=Corporate%20%2F%20Team%20Programme%20%E2%80%94%20Enquiry" },
      { label: "Individual Instruction", href: "mailto:Debashish.Sarkar@tm.org?subject=Individual%20Instruction%20%E2%80%94%20Enquiry" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Free Intro Talk", href: "mailto:Debashish.Sarkar@tm.org?subject=Maharishi%20Center%20for%20Leadership%20%E2%80%94%20Free%20Intro%20Talk" },
      { label: "Press & Research", href: "mailto:Debashish.Sarkar@tm.org?subject=Press%20%2F%20Research%20Enquiry" },
      { label: "tm.org", href: "https://www.tm.org", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="./Maharishi-logo.jpg"
                alt="Maharishi Center for Leadership tree-of-life mark"
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />
              <span className="font-serif text-xl">
                Maharishi{" "}
                <em className="not-italic text-[hsl(var(--peach))]">
                  Leadership
                </em>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/45 leading-[1.8] max-w-sm">
              Maharishi Center for Leadership — A Brain-Based Approach to Peak
              Performance and Resilience. A four-month executive development
              programme in partnership with CII, backed by 600+ peer-reviewed
              studies over five decades.
            </p>
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/35 mb-2">
                Direct Contact
              </p>
              <p className="font-serif text-2xl text-primary-foreground font-light">
                Debashish Sarkar
              </p>
              <a
                href="mailto:Debashish.Sarkar@tm.org"
                className="text-[hsl(var(--peach))] text-sm hover:underline"
              >
                Debashish.Sarkar@tm.org
              </a>
              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--peach))]/80 font-medium">
                In Partnership with CII
              </p>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.heading} className="md:col-span-2 lg:col-span-2 md:col-start-auto">
              <h5 className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/40 mb-5 font-medium">
                {c.heading}
              </h5>
              <div className="space-y-3">
                {c.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    {...("external" in l && l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block text-sm text-primary-foreground/55 hover:text-[hsl(var(--peach))] transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[11px] text-primary-foreground/30 uppercase tracking-widest">
            © {new Date().getFullYear()} Maharishi Center for Leadership.
            All rights reserved.
          </p>
          <p className="text-[11px] text-primary-foreground/30 uppercase tracking-widest">
            Performance is not only what leaders do. It is how their brain functions.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client"
const companies = [
  "Google",
  "IBM",
  "Bridgewater Associates",
  "Hewlett-Packard",
  "Ericsson",
  "General Motors",
  "Toyota",
  "Citi",
  "Citadel",
  "Square",
  "Dropbox",
  "Instagram",
  "Superhuman",
  "Salesforce",
  "Stanford University",
  "Piramal Capital",
  "Wipro Infotech",
  "Tata Tea",
  "Taj Hotels",
  "JetSynthesys",
  "Eveready",
  "Clorox",
];

export function CompaniesMarquee() {
  return (
    <section
      aria-label="Companies and institutions where TM is practiced"
      className="bg-primary text-primary-foreground overflow-hidden border-y border-primary-foreground/10"
    >
      <div className="py-5 relative">
        <div
          className="flex gap-14 whitespace-nowrap animate-[marquee_40s_linear_infinite]"
          style={{ width: "max-content" }}
        >
          {[...companies, ...companies, ...companies].map((c, i) => (
            <div key={i} className="flex items-center gap-5 shrink-0">
              <span className="w-1 h-1 rounded-full bg-[hsl(var(--peach))]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/55 font-medium">
                {c}
              </span>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
        `}</style>
      </div>
    </section>
  );
}

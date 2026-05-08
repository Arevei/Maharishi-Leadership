"use client"

import Image from "next/image";

const companies = [
  { "name": "Google", "logo": "google.png" },
  { "name": "IBM", "logo": "ibm.jpg" },
  { "name": "Bridgewater Associates", "logo": "Bridgewater_Associates.jpg" },
  { "name": "Hewlett-Packard", "logo": "hpe.png" },
  { "name": "Ericsson", "logo": "Ericsson.png" },
  { "name": "General Motors", "logo": "General_Motors.png" },
  { "name": "Toyota", "logo": "Toyota-logo.png" },
  { "name": "Citi", "logo": "Citi.png" },
  { "name": "Citadel", "logo": "citadel.webp" },
  { "name": "Square", "logo": "square.png" },
  { "name": "Dropbox", "logo": "Dropbox.png" },
  { "name": "Instagram", "logo": "instagram.png" },
  { "name": "Superhuman", "logo": "Superhuman.png" },
  { "name": "Salesforce", "logo": "SFDO.webp" },
  { "name": "Piramal Capital", "logo": "Piramal.jpg" },
  { "name": "Wipro Infotech", "logo": "wipro.png" },
  { "name": "Tata Tea", "logo": "tatatea.jpg" },
  { "name": "Taj Hotels", "logo": "taj.jpg" },
  { "name": "JetSynthesys", "logo": "JetSynthesys.jpg" },
  { "name": "Eveready", "logo": "EVEREADY.jpg" },
]
export function CompaniesMarquee() {
  const marqueeCompanies = [...companies, ...companies];

  return (
    <section
      aria-label="Companies and institutions where TM is practiced"
      className="text-primary-foreground overflow-hidden  bg-white"
    >
      <div className="py-5 relative">
        <div
          className="flex gap-6 whitespace-nowrap animate-[marquee_36s_linear_infinite] sm:gap-8 md:gap-10"
          style={{ width: "max-content" }}
        >
          {marqueeCompanies.map((c, i) => (
            <div key={`${c.name}-${i}`} className="flex shrink-0 items-center gap-3">
              <div className="flex h-14 w-28 items-center justify-center rounded-2xl bg-white px-4 shadow-[0_14px_34px_-24px_rgba(4,18,44,0.6)] sm:h-16 sm:w-32 md:h-[4.5rem] md:w-36">
                <Image
                  src={`/logos/${c.logo}`}
                  alt={c.name}
                  width={320}
                  height={160}
                  className="h-auto max-h-12 w-auto max-w-full object-contain sm:max-h-15 md:max-h-18"
                />
              </div>
              {/* <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary-foreground/60 sm:text-[11px]">
                {c.name}
              </span> */}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}

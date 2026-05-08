"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "TM has given me greater creativity, centredness, and the ability to put things in perspective. It has been the single biggest influence on my life.",
    name: "Ray Dalio",
    role: "Founder & Co-CIO, Bridgewater Associates",
    logo: "/logos/Bridgewater_Associates.jpg",
    logoAlt: "Bridgewater Associates logo",
  },
  {
    text: "My creativity improved. I can solve problems faster and more easily. I can focus for longer periods of time - and I am happier.",
    name: "Rahul Vohra",
    role: "Founder & CEO, Superhuman",
    logo: "/logos/Superhuman.png",
    logoAlt: "Superhuman logo",
  },
  {
    text: "It has given a boost to our overall creativity and performance. Health, well-being, clarity of mind, happiness, and calm have all improved. Significant benefits to myself and our team.",
    name: "Rajan Navani",
    role: "Chairman & MD, JetSynthesys Pvt. Ltd.",
    logo: "/logos/JetSynthesys.jpg",
    logoAlt: "JetSynthesys logo",
  },
];

const companies = [
  { name: "Bridgewater Associates", logo: "/logos/Bridgewater_Associates.jpg" },
  { name: "Superhuman", logo: "/logos/Superhuman.png" },
  { name: "JetSynthesys", logo: "/logos/JetSynthesys.jpg" },
  { name: "Google", logo: "/logos/google.png" },
  { name: "IBM", logo: "/logos/ibm.jpg" },
  { name: "Citadel", logo: "/logos/citadel.webp" },
  { name: "Toyota", logo: "/logos/Toyota-logo.png" },
  { name: "Tata Tea", logo: "/logos/tatatea.jpg" },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-primary py-18 md:py-30 text-primary-foreground "
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--cream)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at top left, hsl(var(--sky) / 0.16), transparent 24%), radial-gradient(circle at right bottom, hsl(var(--peach) / 0.16), transparent 24%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mb-16"
        >
          <p className="flex items-center gap-3 text-[hsl(var(--peach))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
            <span className="w-7 h-px bg-[hsl(var(--peach))]" /> Voices
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.05] font-light">
            What <em className="italic text-[hsl(var(--peach))]">Leaders</em>{" "}
            Say After the Practice has Settled In.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/[0.08]">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-primary p-5 md:p-10 transition-colors hover:bg-[hsl(var(--peach)/0.08)]"
            >
              <div className="mb-8 flex h-14 w-32 items-center justify-center rounded-2xl bg-white px-4 shadow-[0_20px_36px_-28px_rgba(255,255,255,0.6)]">
                <Image
                  src={quote.logo}
                  alt={quote.logoAlt}
                  width={180}
                  height={90}
                  className="h-auto max-h-8 w-auto max-w-full object-contain"
                />
              </div>
              <div className="">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[hsl(var(--peach))] leading-none mb-2">
                &ldquo;
              </span>
              <span className="font-serif text-lg sm:text-xl md:text-2xl italic font-light leading-[1.5] text-primary-foreground mb-8">
                {quote.text}
              </span>
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[hsl(var(--peach))] leading-none mb-2">
                &rdquo;
              </span>
              </div>

              <div className="mt-2 sm:mt-4 md:mt-6">
              <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--peach))] font-medium">
                {quote.name}
              </p>
              <p className="text-[12px] text-primary-foreground/45 mt-1">
                {quote.role}
              </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 border-t border-primary-foreground/10 pt-8"
        >
          <div className="mb-5 text-[11px] text-center uppercase tracking-[0.28em] text-primary-foreground/45">
            Leaders and teams from institutions such as
          </div>
          <div className="grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 ">
            {companies.map((company) => (
              <div
                key={company.name}
                className=" flex h-14 w-32 items-center justify-center rounded-2xl bg-white px-4 shadow-[0_20px_36px_-28px_rgba(255,255,255,0.6)] m-auto"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={200}
                  height={100}
                  className="h-auto max-h-10 w-auto max-w-full object-contain "
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

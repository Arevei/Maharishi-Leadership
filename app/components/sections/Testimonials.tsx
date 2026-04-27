"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "TM has given me greater creativity, centredness, and the ability to put things in perspective. It has been the single biggest influence on my life.",
    name: "Ray Dalio",
    role: "Founder & Co-CIO, Bridgewater Associates",
  },
  {
    text: "My creativity improved. I can solve problems faster and more easily. I can focus for longer periods of time - and I am happier.",
    name: "Rahul Vohra",
    role: "Founder & CEO, Superhuman",
  },
  {
    text: "It has given a boost to our overall creativity and performance. Health, well-being, clarity of mind, happiness, and calm have all improved. Significant benefits to myself and our team.",
    name: "Rajan Navani",
    role: "Chairman & MD, JetSynthesys Pvt. Ltd.",
  },
];

const companies = [
  "Bridgewater",
  "Superhuman",
  "JetSynthesys",
  "Google",
  "IBM",
  "Tata",
  "Citadel",
  "Toyota",
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-primary text-primary-foreground py-24 md:py-36 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mb-16"
        >
          <p className="flex items-center gap-3 text-[hsl(var(--peach))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
            <span className="w-7 h-px bg-[hsl(var(--peach))]" /> Voices from
            the Field
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.05] font-light">
            What <em className="italic text-[hsl(var(--peach))]">leaders</em>{" "}
            say after the practice has settled in.
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
              className="bg-primary p-10 hover:bg-primary-foreground/[0.04] transition-colors"
            >
              <div className="font-serif text-6xl text-[hsl(var(--peach))] leading-none mb-2">
                &ldquo;
              </div>
              <p className="font-serif text-lg sm:text-xl md:text-2xl italic font-light leading-[1.5] text-primary-foreground mb-8">
                {quote.text}
              </p>
              <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--peach))] font-medium">
                {quote.name}
              </p>
              <p className="text-[12px] text-primary-foreground/45 mt-1">
                {quote.role}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 border-t border-primary-foreground/10 flex flex-wrap"
        >
          {companies.map((company) => (
            <div
              key={company}
              className="px-6 md:px-9 py-6 text-[13px] font-medium text-primary-foreground/35 hover:text-primary-foreground/85 transition-colors border-r border-primary-foreground/10 last:border-r-0"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

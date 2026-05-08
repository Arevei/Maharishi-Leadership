import Image from "next/image";
import Link from "next/link";
import { contactEmail, contactName } from "@/data/contact";
import { footerColumns } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/Maharishi-logo.jpg"
                alt="Maharishi Center for Leadership tree-of-life mark"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />
              <span className="font-serif text-xl">
                Maharishi Center 
                {" "}
              <em
                className={`not-italic text-primary/60`}
              >
                for Leadership
              </em>
              </span>
            </div>
            <p className="font-semibold text-white leading-[1.8] max-w-sm">
              A Brain-Based Approach 
            </p>
            <p className="font-semibold text-white leading-[1.8] max-w-sm">
               to Peak Performance and Resilience.
            </p>
            <p className="text-sm text-primary-foreground/45 leading-[1.8] max-w-sm">
               A four-month executive development programme backed by 480+ peer-reviewed studies over five decades.
            </p>
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/35 mb-2">
                Direct Contact
              </p>
              <p className="font-serif text-2xl text-primary-foreground font-light">
                {contactName}
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-[hsl(var(--peach))] text-sm hover:underline"
              >
                {contactEmail}
              </a>
              {/* <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--peach))]/80 font-medium">
                In Partnership with CII
              </p> */}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.heading}
              className="md:col-span-2 lg:col-span-2 md:col-start-auto"
            >
              <h5 className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/40 mb-5 font-medium">
                {column.heading}
              </h5>
              <div className="space-y-3">
                {column.links.map((link) =>
                  "external" in link && link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-primary-foreground/55 hover:text-[hsl(var(--peach))] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-sm text-primary-foreground/55 hover:text-[hsl(var(--peach))] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[11px] text-primary-foreground/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Maharishi Center for Leadership.
            All rights reserved.
          </p>
          <p className="text-[11px] text-primary-foreground/30 uppercase tracking-widest">
            Performance is not only what leaders do. It is how their brain
            functions.
          </p>
        </div>
      </div>
    </footer>
  );
}

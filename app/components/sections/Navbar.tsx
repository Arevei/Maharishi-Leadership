"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { getContactHref } from "@/data/contact";
import { primaryNavLinks } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => setIsScrolled(value > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl py-3 border-b border-border/60"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-3 group transition-colors ${
            isScrolled ? "text-primary" : "text-primary-foreground"
          }`}
        >
          <Image
            src="/Maharishi-logo.jpg"
            alt="Maharishi Center for Leadership tree-of-life mark"
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover shadow-sm shrink-0"
          />
          <span className="font-serif text-xl tracking-tight">
            Maharishi{" "}
            <em
              className={`not-italic ${
                isScrolled ? "text-primary/60" : "text-primary-foreground/70"
              }`}
            >
              Leadership
            </em>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {primaryNavLinks.map((link) => {
            const isActive = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-wide transition-colors ${
                  isScrolled
                    ? isActive
                      ? "text-primary"
                      : "text-primary/70 hover:text-primary"
                    : isActive
                      ? "text-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={getContactHref("intro-talk")}
            className={`ml-2 px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-[hsl(var(--cream))] text-primary hover:bg-[hsl(var(--sky))]"
            }`}
            data-testid="nav-cta"
          >
            Free Intro Talk
          </Link>
        </nav>

        <button
          className={`lg:hidden p-2 z-50 ${
            isScrolled ? "text-primary" : "text-primary-foreground"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 pb-10 flex flex-col gap-2 lg:hidden">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-left font-serif text-3xl text-primary py-4 border-b border-border/60"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={getContactHref("intro-talk")}
            onClick={() => setOpen(false)}
            className="mt-8 text-center px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em]"
          >
            Free Intro Talk
          </Link>
        </div>
      )}
    </motion.header>
  );
}

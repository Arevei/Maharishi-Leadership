"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { MobileSidebar } from "@/app/components/sections/MobileSidebar";
import { primaryNavLinks } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => setIsScrolled(value > 40));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? "bg-background/90 py-3 border-b border-border/60 backdrop-blur-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            className={`group flex items-center gap-3 transition-colors ${
              isScrolled || !isHome ? "text-primary" : "text-primary-foreground"
            }`}
          >
            <Image
              src="/Maharishi-logo.jpg"
              alt="Maharishi Center for Leadership tree-of-life mark"
              width={44}
              height={44}
              loading="eager"
              className="h-11 w-11 shrink-0 rounded-full object-cover shadow-sm"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {primaryNavLinks.map((link) => {
              const isActive = link.href === pathname;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={isActive}
                  className={`inline-flex text-[11px] font-semibold uppercase  transition-colors ${
                    isScrolled
                      || !isHome
                      ? isActive
                        ? "text-primary"
                        : "text-primary/70 hover:text-primary"
                      : isActive
                        ? "text-primary-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                  } nav-link-underline`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="book-pill ml-2 inline-flex items-center gap-4 rounded-full border bg-primary text-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] hover:bg-white hover:text-primary shadow-[0_18px_38px_-24px_rgba(7,29,64,0.22)]"
              data-testid="nav-cta"
            >
              <span className="relative z-10">Consult Now</span>
              <span className="book-pill-dot relative z-10" />
            </Link>
          </nav>

          <button
            type="button"
            className={`z-50 rounded-full p-2 transition-colors lg:hidden ${
              isScrolled
                ? "text-primary hover:bg-primary/5"
                : "text-primary-foreground hover:bg-white/10"
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <MobileSidebar
        open={open}
        pathname={pathname}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

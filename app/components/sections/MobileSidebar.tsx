"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { primaryNavLinks } from "@/data/navigation";

type MobileSidebarProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileSidebar({
  open,
  pathname,
  onClose,
}: MobileSidebarProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  return (
    <AnimatePresence initial={false}>
      {open ? (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <motion.button
            type="button"
            aria-label="Close mobile navigation"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 backdrop-blur-[2px]"
            style={{ backgroundColor: "hsl(var(--primary) / 0.42)" }}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-full max-w-[22rem] flex-col border-l border-border/60 bg-background shadow-[0_24px_90px_-35px_rgba(7,29,64,0.45)]"
          >
            <div className="flex items-center justify-between border-b border-border/70 px-5 py-5">
              <Link
                href="/"
                onClick={onClose}
                className="flex min-w-0 items-center gap-3 text-primary"
              >
                <Image
                  src="/Maharishi-logo.jpg"
                  alt="Maharishi Center for Leadership tree-of-life mark"
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 rounded-full object-cover shadow-sm"
                />
                <span className="min-w-0 font-serif text-lg leading-tight tracking-tight">
                  Maharishi{" "}
                  <em className="not-italic text-primary/60">Leadership</em>
                </span>
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-primary/70 transition-colors hover:bg-primary/5 hover:text-primary"
                aria-label="Close mobile navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col px-5 py-4">
              {primaryNavLinks.map((link) => {
                const isActive = link.href === pathname;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    data-active={isActive}
                    className={`block border-b border-border/60 py-4 font-serif text-2xl leading-tight transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-primary/74 hover:text-primary"
                    } nav-link-underline`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-border/70 px-5 py-5">
              <Link
                href="/contact"
                onClick={onClose}
                className="book-pill inline-flex w-full items-center justify-between rounded-full bg-[hsl(var(--cream)/0.96)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_18px_50px_-28px_rgba(7,29,64,0.35)]"
              >
                <span className="relative z-10">Consult Now</span>
                <span className="book-pill-dot relative z-10" />
              </Link>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

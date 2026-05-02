"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const CONSULTATION_IFRAME_SRC =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Ng-fRtiNtTsbeiq0Z6DTkEvGsKYwGcrTeAM1JpxIAg4QjcYwjYD3zwrPPPsm2veTlk_bMSFtz?gv=true";

type ConsultationDrawerContextValue = {
  isOpen: boolean;
  openConsultationDrawer: () => void;
  closeConsultationDrawer: () => void;
};

const ConsultationDrawerContext =
  createContext<ConsultationDrawerContextValue | null>(null);

export function ConsultationDrawerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();
  }, [isOpen]);

  const value = useMemo<ConsultationDrawerContextValue>(
    () => ({
      isOpen,
      openConsultationDrawer: () => setIsOpen(true),
      closeConsultationDrawer: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <ConsultationDrawerContext.Provider value={value}>
      {children}

      <AnimatePresence initial={false}>
        {isOpen ? (
          <div className="fixed inset-0 z-[120]">
            <motion.button
              type="button"
              aria-label="Close consultation drawer"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              className="absolute inset-0"
              style={{ backgroundColor: "hsl(var(--primary) / 0.52)" }}
            />

            <div className="absolute inset-0 p-2 sm:p-4 md:p-5">
              <motion.aside
                role="dialog"
                aria-modal="true"
                aria-labelledby="consultation-drawer-title"
                initial={{ opacity: 0, x: 72 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 72 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="ml-auto flex h-full w-full max-w-[780px] flex-col overflow-y-auto rounded-[2rem] border border-border/70 bg-card shadow-[0_30px_120px_-40px_rgba(7,29,64,0.55)]"
              >
                <div className="sticky top-0 z-10 border-b border-border/70 bg-card/95 px-6 pb-6 pt-6 backdrop-blur-sm sm:px-8 sm:pb-8 sm:pt-8">
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-5 top-5 rounded-full p-3 text-primary/70 hover:bg-primary/6 hover:text-primary sm:right-6 sm:top-6"
                    aria-label="Close consultation drawer"
                  >
                    <X className="h-7 w-7" strokeWidth={1.8} />
                  </button>

                </div>

                <div className="px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
                  <p className=" text-[11px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--peach-deep))]">
                    Consultation
                  </p>
                  <h2
                    id="consultation-drawer-title"
                    className="mt-5 font-serif text-4xl font-light leading-[1.06] text-primary sm:text-5xl"
                  >
                    Connect with{" "}
                    <em className="italic text-[hsl(var(--peach-deep))]">
                      a teacher
                    </em>
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-[1.9] text-primary/68 sm:text-base">
                    Choose a time that works for you and book your consultation
                    directly. We&apos;ve replaced the form with the calendar so
                    the next step feels faster and simpler.
                  </p>
                  <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-border/80 bg-white shadow-[0_18px_50px_-38px_rgba(7,29,64,0.35)]">
                    <iframe
                      src={CONSULTATION_IFRAME_SRC}
                      title="Schedule a meeting with Arevei"
                      className="block min-h-[1100px] w-full bg-white"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        ) : null}
      </AnimatePresence>
    </ConsultationDrawerContext.Provider>
  );
}

export function useConsultationDrawer() {
  const context = useContext(ConsultationDrawerContext);

  if (!context) {
    throw new Error(
      "useConsultationDrawer must be used within ConsultationDrawerProvider",
    );
  }

  return context;
}

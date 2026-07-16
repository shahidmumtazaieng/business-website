"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export function MobileStickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 24, stiffness: 240 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[var(--border)] p-3 shadow-2xl"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <div className="flex gap-2">
            <a
              href="tel:+447735322362"
              className="flex-1 h-12 rounded-lg border border-[var(--brand)]/30 text-[var(--brand-dark)] font-semibold text-sm flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              href="#"
              className="flex-[2] h-12 rounded-lg bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white font-semibold text-sm flex items-center justify-center gap-1.5 shadow-brand"
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

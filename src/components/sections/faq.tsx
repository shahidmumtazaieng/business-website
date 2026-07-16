"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-[var(--cream)]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[var(--brand-dark)] text-xs font-semibold mb-3 shadow-sm">
            FAQ
          </div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight text-[var(--ink)]">
            Questions? <span className="text-gradient-brand">We've got answers.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, idx) => {
            const open = openIdx === idx;
            return (
              <div
                key={f.q}
                className={`bg-white rounded-xl border transition-colors ${
                  open ? "border-[var(--brand)]" : "border-[var(--border)]"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display font-bold text-base lg:text-lg text-[var(--ink)]">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--brand)] shrink-0 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

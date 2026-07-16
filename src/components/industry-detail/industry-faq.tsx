"use client";

import { motion } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import type { IndustryDetail } from "@/lib/industry-detail-data";

export function IndustryFaq({ industry }: { industry: IndustryDetail }) {
  const [open, setOpen] = useState<number | null>(0);
  if (!industry.faqs.length) return null;
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[900px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Frequently asked
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            {industry.name} — the questions we hear most.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {industry.faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
              >
                <Collapsible
                  open={isOpen}
                  onOpenChange={(o) => setOpen(o ? idx : null)}
                  className="bg-white rounded-2xl border border-[var(--border)] hover:border-[var(--brand)]/40 transition-colors overflow-hidden"
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between gap-4 p-5 text-left">
                    <span className="font-display font-bold text-base lg:text-lg text-[var(--ink)]">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-light)]/60 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[var(--brand)]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[var(--brand)]" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="px-5 pb-5 text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {faq.a}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

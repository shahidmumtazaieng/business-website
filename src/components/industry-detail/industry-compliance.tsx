"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import type { IndustryDetail } from "@/lib/industry-detail-data";

export function IndustryCompliance({ industry }: { industry: IndustryDetail }) {
  if (!industry.compliance.length) return null;
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Compliance & Standards
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            The frameworks we work to.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            Every protocol, every checklist, every audit trail — mapped to the standards your
            regulator expects to see.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.compliance.map((c, idx) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-light)]/60 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[var(--brand)]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand)]">{c.code}</div>
                  <div className="font-display font-bold text-[var(--ink)] leading-tight">{c.title}</div>
                </div>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

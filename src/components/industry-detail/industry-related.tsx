"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { IndustryDetail } from "@/lib/industry-detail-data";

export function IndustryRelated({ industry }: { industry: IndustryDetail }) {
  if (!industry.relatedIndustries.length) return null;
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
            Adjacent sectors
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            Related industries we serve.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            Many of our clients operate across multiple sectors. The same protocols, the same
            crews, the same account manager — wherever your sites are.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.relatedIndustries.map((r, idx) => (
            <motion.a
              key={r.name}
              href={r.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand transition-all flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display font-bold text-lg text-[var(--ink)] group-hover:text-[var(--brand)] transition-colors">
                  {r.name}
                </h3>
                <ArrowRight className="w-4 h-4 text-[var(--brand)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{r.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

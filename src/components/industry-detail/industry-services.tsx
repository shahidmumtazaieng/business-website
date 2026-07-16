"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { IndustryDetail } from "@/lib/industry-detail-data";

export function IndustryServices({ industry }: { industry: IndustryDetail }) {
  if (!industry.servicesDelivered.length) return null;
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            What we deliver
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            Services we run for {industry.name.toLowerCase()}.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            A scoped bundle of services tuned to your operating rhythm — not a generic menu
            bolted onto your sector.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.servicesDelivered.map((s, idx) => (
            <motion.a
              key={s.name}
              href={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand transition-all flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display font-bold text-lg text-[var(--ink)] group-hover:text-[var(--brand)] transition-colors">
                  {s.name}
                </h3>
                <ArrowRight className="w-4 h-4 text-[var(--brand)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">{s.description}</p>
              <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-semibold text-[var(--brand)]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Sector-tuned protocol
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

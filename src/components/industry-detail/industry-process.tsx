"use client";

import { motion } from "framer-motion";
import type { IndustryDetail } from "@/lib/industry-detail-data";

export function IndustryProcess({ industry }: { industry: IndustryDetail }) {
  if (!industry.processSteps.length) return null;
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            How we onboard you
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            From first call to first clean in 7 days.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            A structured mobilisation that respects your operational continuity — no gap in
            service, no surprises in scope.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industry.processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand transition-all"
            >
              <div className="absolute -top-4 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center text-white font-display font-extrabold text-lg shadow-brand">
                {step.step}
              </div>
              <div className="pt-6">
                <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{step.description}</p>
                {step.duration && (
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] bg-[var(--brand-light)]/40 px-2.5 py-1 rounded-full">
                    {step.duration}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import type { ServiceDetail } from "@/lib/service-detail-data";

export function ServiceProcess({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            How it works
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            From quote to first clean in 48 hours.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            No pushy sales calls. No multi-week onboarding. Just a clear, four-step path to a cleaner home.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {service.processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="relative bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-brand hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white flex items-center justify-center font-display font-extrabold text-lg shadow-brand">
                    {step.step}
                  </div>
                  {step.duration && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand)] bg-[var(--brand-light)]/60 px-2 py-1 rounded-full">
                      {step.duration}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

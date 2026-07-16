"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-detail-data";

export function ServiceRelated({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Related services
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            Pairs perfectly with.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            Add any of these to your recurring plan, or book as standalone one-off services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.relatedServices.map((r, i) => (
            <motion.a
              key={r.name}
              href={r.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/40 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display font-bold text-lg text-[var(--ink)] leading-tight group-hover:text-[var(--brand)] transition-colors">
                  {r.name}
                </h3>
                <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--brand)] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {r.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

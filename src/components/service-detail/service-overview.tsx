"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-detail-data";

export function ServiceOverview({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            What this service is
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            More than just a tidy-up.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            A genuine baseline reset for your home, delivered by people who actually know it.
          </p>
        </motion.div>

        <div className="prose prose-lg max-w-none">
          {service.overviewParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-6 last:mb-0"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Quick promise strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            "Same PVG-checked crew every visit",
            "Personalised checklist in your portal",
            "Free re-clean within 24h if unhappy",
          ].map((promise) => (
            <div
              key={promise}
              className="flex items-center gap-3 bg-[var(--cream)] rounded-xl p-4 border border-[var(--brand)]/10"
            >
              <CheckCircle2 className="w-5 h-5 text-[var(--brand)] shrink-0" />
              <span className="text-sm font-semibold text-[var(--ink)]">{promise}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

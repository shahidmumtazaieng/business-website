"use client";

import { motion } from "framer-motion";
import type { IndustryDetail } from "@/lib/industry-detail-data";

export function IndustryStats({ industry }: { industry: IndustryDetail }) {
  if (!industry.stats.length) return null;
  return (
    <section className="py-16 lg:py-20 bg-[var(--brand-dark)] relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand)]/30 blur-3xl" />
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {industry.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="text-center text-white"
            >
              <div className="font-display font-extrabold text-4xl lg:text-5xl text-[var(--gold)] tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-white/80 leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

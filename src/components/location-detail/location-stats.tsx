"use client";

import { motion } from "framer-motion";
import type { LocationDetail } from "@/lib/location-detail-data";

export function LocationStats({ location }: { location: LocationDetail }) {
  return (
    <section className="py-12 lg:py-16 bg-[var(--brand-dark)] text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-2 inline-block">
            Maundy Clean in {location.name}
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-4xl tracking-tight">
            Numbers that matter to your postcode.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {location.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--gold)] mb-2">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-white/80 leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

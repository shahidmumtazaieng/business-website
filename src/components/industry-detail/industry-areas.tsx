"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { IndustryDetail } from "@/lib/industry-detail-data";

export function IndustryAreas({ industry }: { industry: IndustryDetail }) {
  if (!industry.serviceAreas.length) return null;
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Where we operate
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            {industry.serviceAreas.length}+ Scottish locations covered.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            From city-centre flagships to remote Highland sites — we mobilise across Scotland
            with the same SLA and the same sector-trained crews.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {industry.serviceAreas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 bg-white border border-[var(--border)] hover:border-[var(--brand)] rounded-full px-4 py-2 text-sm font-medium text-[var(--ink)] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[var(--brand)]" />
              {area}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

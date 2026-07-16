"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { LocationDetail } from "@/lib/location-detail-data";

export function LocationAreas({ location }: { location: LocationDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Postcodes & neighbourhoods
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            Where we clean in {location.name}.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            Our local crews cover every district listed below. If your street isn&apos;t here, give us a call —
            we probably still cover it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {location.areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="group bg-white border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--brand-light)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand)] group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 text-[var(--brand)] group-hover:text-white" />
                </div>
                <div>
                  <div className="font-bold text-[var(--ink)] mb-1">{area.name}</div>
                  <div className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {area.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

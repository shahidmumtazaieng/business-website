"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { LocationDetail } from "@/lib/location-detail-data";

export function LocationNearby({ location }: { location: LocationDetail }) {
  if (!location.nearbyLocations?.length) return null;
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Nearby coverage
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            We also clean near {location.name}.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            Same crews, same standards, same day-of-week availability. Pick your town,
            or <a href="/locations" className="text-[var(--brand)] font-semibold underline underline-offset-2 hover:text-[var(--brand-dark)]">browse all 72 Scottish locations</a>.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {location.nearbyLocations.map((nearby, i) => (
            <motion.a
              key={nearby.href}
              href={nearby.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="group bg-white border border-[var(--border)] rounded-xl p-4 hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--brand-light)] flex items-center justify-center group-hover:bg-[var(--brand)] transition-colors">
                  <MapPin className="w-4 h-4 text-[var(--brand)] group-hover:text-white" />
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--muted-foreground)] group-hover:text-[var(--brand)]" />
              </div>
              <div className="mt-3 font-bold text-[var(--ink)] text-sm">{nearby.name}</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-0.5">{nearby.region}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

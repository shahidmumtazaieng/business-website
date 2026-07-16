"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-detail-data";

export function ServiceAreas({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          {/* Left: copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
              Service areas
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-[var(--ink)] tracking-tight mb-4">
              Across 30 Scottish locations — and growing.
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              {service.name} is available across Scotland's Central Belt, the Highlands, the Borders, and the
              Islands. If your town isn't listed below, give us a call — we add new postcodes every month based on
              client demand, and we'll always try to make a route work for you.
            </p>
            <div className="bg-white rounded-2xl p-5 border border-[var(--brand)]/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[var(--brand)]" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-[var(--ink)]">Not sure if we cover you?</div>
                <div className="text-xs text-[var(--muted-foreground)]">Pop your postcode in — we'll confirm in 1 business hour.</div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
              >
                Check <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right: grid of locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 lg:p-8 border border-[var(--border)] shadow-sm"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2.5">
              {service.serviceAreas.map((area, i) => (
                <motion.a
                  key={area}
                  href="#"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-1.5 px-2 rounded-lg hover:bg-[var(--brand-light)]/40"
                >
                  <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                  {area}
                </motion.a>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-[var(--border)] text-center">
              <a href="#" className="text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] inline-flex items-center gap-1">
                View all 30 Scottish locations <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

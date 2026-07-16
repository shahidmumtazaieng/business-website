"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-detail-data";

export function ServiceWhatsIncluded({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            What's included
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            Every visit, room by room.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            A baseline reset of your home's high-traffic zones — refined after the first three cleans to match your priorities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.whatsIncluded.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand)] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--ink)] leading-tight pt-1">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-[var(--muted-foreground)] mt-8"
        >
          Add-ons available on any visit: oven cleaning, fridge clean-out, inside cabinets, laundry folding,
          ironing, pet area sanitisation, window interiors, and more — all bookable from your client portal.
        </motion.p>
      </div>
    </section>
  );
}

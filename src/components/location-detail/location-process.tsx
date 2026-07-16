"use client";

import { motion } from "framer-motion";
import type { LocationDetail } from "@/lib/location-detail-data";

export function LocationProcess({ location }: { location: LocationDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            How it works in {location.name}
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            From quote to first clean in 48 hours.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            Same simple process everywhere we operate — but with a {location.name}-based crew
            who knows the postcodes, the parking, and the property types.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {location.processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border border-[var(--border)] rounded-2xl p-6"
            >
              <div className="absolute -top-4 -left-2 font-display font-extrabold text-6xl text-[var(--brand)]/10 leading-none select-none">
                {step.step}
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold text-sm mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-[var(--ink)] text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

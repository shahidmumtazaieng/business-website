"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { IndustryDetail } from "@/lib/industry-detail-data";

export function IndustryTestimonials({ industry }: { industry: IndustryDetail }) {
  if (!industry.testimonials.length) return null;
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            What sector clients say
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            Operators who'd recommend us.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.testimonials.map((t, idx) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm flex flex-col"
            >
              <Quote className="w-8 h-8 text-[var(--brand)]/30 mb-3" />
              <blockquote className="text-sm text-[var(--ink)]/85 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex gap-0.5 my-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? "fill-[var(--gold)] text-[var(--gold)]"
                        : "text-[var(--border)]"
                    }`}
                  />
                ))}
              </div>
              <figcaption className="pt-4 border-t border-[var(--border)]">
                <div className="font-display font-bold text-[var(--ink)]">{t.name}</div>
                <div className="text-xs text-[var(--muted-foreground)]">{t.role}</div>
                <div className="text-xs text-[var(--brand)] font-semibold mt-0.5">{t.facility}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

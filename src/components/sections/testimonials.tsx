"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-light)]/60 text-[var(--brand-dark)] text-xs font-semibold mb-3">
              <Star className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" /> 4.9 / 5 · 6,200+ reviews
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight text-[var(--ink)]">
              Loved by{" "}
              <span className="text-gradient-brand">8,000+ homes</span>{" "}
              & 500+ businesses
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <div className="px-3 py-2 bg-[var(--cream)] rounded-lg flex items-center gap-2">
              <span className="font-bold text-[var(--ink)]">Google</span>
              <Star className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              <span className="font-semibold text-[var(--ink)]">4.9</span>
            </div>
            <div className="px-3 py-2 bg-[var(--cream)] rounded-lg flex items-center gap-2">
              <span className="font-bold text-[var(--ink)]">Trustpilot</span>
              <Star className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              <span className="font-semibold text-[var(--ink)]">4.8</span>
            </div>
            <div className="px-3 py-2 bg-[var(--cream)] rounded-lg flex items-center gap-2">
              <span className="font-bold text-[var(--ink)]">Reviews.io</span>
              <Star className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              <span className="font-semibold text-[var(--ink)]">4.9</span>
            </div>
            <div className="px-3 py-2 bg-[var(--cream)] rounded-lg flex items-center gap-2">
              <span className="font-bold text-[var(--ink)]">Checkatrade</span>
              <Star className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              <span className="font-semibold text-[var(--ink)]">4.9</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-6 lg:p-8 rounded-2xl bg-[var(--cream)] border border-[var(--border)] hover:border-[var(--brand)] transition-colors"
            >
              <Quote className="w-8 h-8 text-[var(--brand)]/20 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <p className="text-base lg:text-lg text-[var(--ink)] leading-relaxed font-medium">
                "{t.quote}"
              </p>
              <div className="mt-5 pt-5 border-t border-[var(--border)] flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white flex items-center justify-center font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[var(--ink)] text-sm">{t.name}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

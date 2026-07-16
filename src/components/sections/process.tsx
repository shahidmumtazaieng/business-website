"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--ink)] text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/10 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/85 text-xs font-semibold mb-3">
            Simple 4-step process
          </div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight">
            From "I need a clean" to{" "}
            <span className="text-[var(--gold)]">spotless</span> in 48 hours
          </h2>
          <p className="mt-4 text-white/70 text-base lg:text-lg leading-relaxed">
            No phone tag. No pushy in-home estimates. No 14-day wait for an opening. Here's exactly how
            getting started with Maundy Clean works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="relative"
            >
              {/* Connector */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-[var(--brand)] to-transparent" />
              )}
              <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display font-extrabold text-5xl text-[var(--brand)]/40">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[var(--brand)] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            size="lg"
            className="bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-dark)] hover:text-white shadow-gold gap-2 h-12 text-base px-7"
            asChild
          >
            <a href="#">
              Start step 1 — get my quote <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="text-xs text-white/60 mt-3">60 seconds · No credit card · No obligation</p>
        </div>
      </div>
    </section>
  );
}

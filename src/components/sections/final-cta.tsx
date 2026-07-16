"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand)] to-[var(--brand-dark)] p-10 lg:p-16"
        >
          <div className="absolute inset-0 bg-grain opacity-40" />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--gold)]/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold mb-5">
                <Sparkles className="w-3.5 h-3.5" /> Limited slots — book this week
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight leading-[1.05]">
                Your spotless space is{" "}
                <span className="text-[var(--gold)]">one click away.</span>
              </h2>
              <p className="mt-4 text-white/85 text-base lg:text-lg leading-relaxed max-w-xl">
                Get a personalised quote in 60 seconds. No contracts. Free re-clean guarantee.
                Cancel anytime. Join 8,000+ homes and 500+ businesses across Scotland that trust Maundy Clean.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
                {["No contracts", "Same crew every visit", "Free re-clean guarantee"].map((f) => (
                  <span key={f} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--gold)]" /> {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-dark)] hover:text-white shadow-gold gap-2 h-14 text-base"
                asChild
              >
                <a href="#">
                  Get my free quote <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 gap-2 h-14 text-base"
                asChild
              >
                <a href="tel:+447735322362">
                  <Phone className="w-5 h-5" /> Call +44 7735 322362
                </a>
              </Button>
              <p className="text-center text-xs text-white/70 mt-1">
                Or email <span className="font-semibold text-white">hello@maundyclean.co.uk</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

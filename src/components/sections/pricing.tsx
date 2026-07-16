"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";
import { pricingTiers } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--cream)] relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[var(--brand-dark)] text-xs font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Transparent Pricing
          </div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight text-[var(--ink)]">
            No surprises.{" "}
            <span className="text-gradient-brand">Just clean spaces.</span>
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] text-base lg:text-lg leading-relaxed">
            Flat-rate quotes locked in for 12 months. No hidden fees, no fuel surcharges, no
            "well actually" add-ons. Cancel or pause anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`relative rounded-2xl p-6 border transition-all ${
                tier.highlighted
                  ? "bg-[var(--ink)] text-white border-[var(--gold)] shadow-2xl scale-[1.02]"
                  : "bg-white border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[var(--gold)] text-[var(--ink)] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[var(--ink)]" /> Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mb-1">
                <h3 className={`font-display font-bold text-lg ${tier.highlighted ? "text-white" : "text-[var(--ink)]"}`}>
                  {tier.name}
                </h3>
              </div>
              <p className={`text-xs ${tier.highlighted ? "text-white/70" : "text-[var(--muted-foreground)]"} mb-4`}>
                {tier.tagline}
              </p>

              <div className="flex items-baseline gap-1 mb-5">
                <span className={`font-display font-extrabold text-4xl ${tier.highlighted ? "text-[var(--gold)]" : "text-[var(--ink)]"}`}>
                  {tier.price}
                </span>
                <span className={`text-xs ${tier.highlighted ? "text-white/60" : "text-[var(--muted-foreground)]"}`}>
                  {tier.unit}
                </span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        tier.highlighted ? "text-[var(--gold)]" : "text-[var(--brand)]"
                      }`}
                    />
                    <span className={tier.highlighted ? "text-white/90" : "text-[var(--ink)]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.highlighted
                    ? "bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-dark)] hover:text-white"
                    : "bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white"
                }`}
              >
                {tier.name === "Commercial" ? "Request proposal" : "Get started"}{" "}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--muted-foreground)] mt-8">
          All plans include supplies, equipment, and our 100% satisfaction re-clean guarantee. Sales tax not included.
        </p>
      </div>
    </section>
  );
}

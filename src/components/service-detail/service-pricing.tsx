"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ServiceDetail } from "@/lib/service-detail-data";

export function ServicePricing({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Transparent pricing
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            Flat-rate plans. No surprises.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            All plans include supplies, equipment, your dedicated crew, and our 100% re-clean guarantee.
            Locked-in rate for 12 months — cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {service.pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border-2 transition-all ${
                tier.highlighted
                  ? "bg-gradient-to-br from-[var(--brand-dark)] to-[var(--ink)] text-white border-[var(--brand)] shadow-brand lg:-translate-y-3 lg:scale-[1.02]"
                  : "bg-white text-[var(--ink)] border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-lg"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[var(--gold)] text-[var(--ink)] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-gold">
                  <Star className="w-3 h-3 fill-[var(--ink)]" /> Most popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`font-display font-extrabold text-xl mb-1 ${tier.highlighted ? "text-white" : "text-[var(--ink)]"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.highlighted ? "text-white/70" : "text-[var(--muted-foreground)]"}`}>
                  {tier.tagline}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-end justify-center gap-1">
                  <span className={`font-display font-extrabold text-5xl ${tier.highlighted ? "text-white" : "text-gradient-brand"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm mb-2 ${tier.highlighted ? "text-white/70" : "text-[var(--muted-foreground)]"}`}>
                    {tier.unit}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-7">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlighted ? "text-[var(--gold)]" : "text-[var(--brand)]"}`}
                    />
                    <span className={tier.highlighted ? "text-white/90" : "text-[var(--ink)]/85"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-11 gap-2 ${
                  tier.highlighted
                    ? "bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)]"
                    : "bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white"
                }`}
                asChild
              >
                <a href="#">
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-[var(--muted-foreground)] mt-8 max-w-2xl mx-auto"
        >
          Prices shown are for standard 1–3 bedroom properties. Larger homes, listed buildings, and properties
          with significant clutter may carry a small surcharge — always confirmed in your written quote before booking.
          No credit card required to get a quote.
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Clock, CheckCircle2 } from "lucide-react";
import { contactInfo } from "@/lib/site-data";
import type { ServiceDetail } from "@/lib/service-detail-data";

export function ServiceFinalCta({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand)] to-[var(--brand-dark)] shadow-brand"
        >
          {/* Decorative blurs */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[var(--gold)]/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative px-6 lg:px-12 py-12 lg:py-16 grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-xs font-semibold text-white mb-5"
              >
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--gold)] animate-pulse-ring" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--gold)]" />
                </span>
                Free quote in 60 seconds · No card required
              </motion.div>

              <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white leading-tight tracking-tight">
                Ready for a home that's<br />
                <span className="text-[var(--gold)]">genuinely clean?</span>
              </h2>

              <p className="mt-4 text-white/85 text-base lg:text-lg max-w-xl leading-relaxed">
                Get a personalised quote for {service.name.toLowerCase()} in under a minute. Flat-rate,
                locked-in pricing. Same PVG-checked crew every visit. Cancel anytime.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] px-7 py-3.5 rounded-lg font-bold text-sm shadow-gold transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/80">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[var(--gold)]" /> PVG-checked &amp; insured
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[var(--gold)]" /> Same-day quotes
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold)]" /> 100% re-clean guarantee
                </div>
              </div>
            </div>

            {/* Right: trust card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center mb-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand)] mb-1">
                  What you get
                </div>
                <div className="font-display font-extrabold text-2xl text-[var(--ink)]">
                  Your first clean, sorted
                </div>
              </div>
              <ul className="space-y-2.5 text-sm">
                {[
                  "60-second scoping form",
                  "Quote within 1 business hour",
                  "Crew assigned & walk-through booked",
                  "First clean in as little as 48 hours",
                  "Personalised checklist in your portal",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[var(--ink)]/85">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand)] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-[var(--border)] text-center">
                <div className="text-xs text-[var(--muted-foreground)]">Already a client?</div>
                <a href="#" className="text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] inline-flex items-center gap-1 mt-1">
                  Log in to your portal <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

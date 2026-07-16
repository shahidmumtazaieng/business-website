"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";
import type { IndustryDetail } from "@/lib/industry-detail-data";

export function IndustryFinalCta({ industry }: { industry: IndustryDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--brand-dark)] relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[var(--gold)]/15 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand)]/40 blur-3xl" />
      <div className="max-w-[1100px] mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--gold)] animate-pulse-ring" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--gold)]" />
            </span>
            Site audits within 48 hours · No obligation
          </div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight leading-tight">
            Ready for a sector-led cleaning partner?
          </h2>
          <p className="mt-4 text-white/85 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Book a free 60-minute site audit. We'll walk your {industry.name.toLowerCase()} operation,
            talk to your team, and deliver a written proposal with scoped tasks, frequency,
            and a fixed monthly fee — within 5 business days.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <a href="#">
                Book Free Site Audit
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href={contactInfo.phoneHref}>
                <Phone className="w-4 h-4" />
                {contactInfo.phone}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[var(--gold)]" /> £5m Public Liability
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[var(--gold)]" /> 24/7 emergency response
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[var(--gold)]" /> PVG-checked crews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

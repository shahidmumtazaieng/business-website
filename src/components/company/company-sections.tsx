"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import { contactInfo } from "@/lib/site-data";

export type CompanyFinalCtaProps = {
  headline: string;
  subhead: string;
  primaryLabel?: string;
  primaryHref?: string;
  bullets?: string[];
};

export function CompanyFinalCta({
  headline,
  subhead,
  primaryLabel = "Get a Free Quote",
  primaryHref = "/quote",
  bullets = [
    "98 specialist cleaning services available",
    "Same PVG-checked crew every visit",
    "100% satisfaction guarantee",
    "Same-day quote, 7 days a week",
  ],
}: CompanyFinalCtaProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand)] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold mb-5 uppercase tracking-wide">
              Ready when you are
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl leading-tight">
              {headline}
            </h2>
            <p className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed">
              {subhead}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] font-bold shadow-brand transition-colors text-base"
              >
                {primaryLabel}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold transition-colors text-base"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.phone}
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <div className="text-sm font-bold mb-4">What every client gets</div>
            <ul className="space-y-3 text-sm">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[var(--gold)] text-[var(--ink)] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section header primitive ----------
export function CompanySectionHeader({
  eyebrow,
  title,
  subhead,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subhead?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center max-w-3xl mx-auto mb-12" : "max-w-3xl mb-12"}
    >
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight leading-tight">
        {title}
      </h2>
      {subhead && (
        <p className="mt-4 text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
          {subhead}
        </p>
      )}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight, Phone } from "lucide-react";
import { contactInfo } from "@/lib/site-data";

export type CompanyHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subhead: string;
  breadcrumb: string; // e.g. "About"
  image?: string;
  imageAlt?: string;
  stats?: { value: string; label: string }[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function CompanyPageHero({
  eyebrow,
  title,
  subhead,
  breadcrumb,
  image,
  imageAlt,
  stats,
  ctaPrimary = { label: "Get a Free Quote", href: "/quote" },
  ctaSecondary = { label: "Call Us", href: contactInfo.phoneHref },
}: CompanyHeroProps) {
  return (
    <section className="relative overflow-hidden bg-mesh pt-8 lg:pt-12 pb-16 lg:pb-24">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand)]/10 blur-3xl" />
      <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] mb-6"
        >
          <Link href="/" className="hover:text-[var(--brand)] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--ink)] font-semibold">{breadcrumb}</span>
        </motion.nav>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-light)]/60 border border-[var(--brand)]/20 text-xs font-semibold text-[var(--brand-dark)] mb-5 uppercase tracking-wide"
            >
              {eyebrow}
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-[40px] sm:text-[48px] lg:text-[60px] leading-[1.05] tracking-tight text-[var(--ink)]"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed"
            >
              {subhead}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white font-semibold shadow-brand transition-colors text-base"
              >
                {ctaPrimary.label}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-[var(--brand)]/30 text-[var(--brand-dark)] hover:bg-[var(--brand-light)] font-semibold transition-colors text-base"
              >
                <Phone className="w-4 h-4" />
                {ctaSecondary.label}
              </a>
            </motion.div>
          </motion.div>

          {/* Right: image or stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {image ? (
              <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/5] bg-[var(--brand-dark)]">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/85 via-[var(--brand-dark)]/20 to-transparent" />
                {stats && stats.length > 0 && (
                  <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-2">
                    {stats.slice(0, 4).map((s) => (
                      <div
                        key={s.label}
                        className="bg-white/95 backdrop-blur rounded-xl p-3 text-center"
                      >
                        <div className="text-xl font-extrabold text-[var(--brand-dark)]">
                          {s.value}
                        </div>
                        <div className="text-[10px] text-[var(--muted-foreground)] mt-0.5 uppercase tracking-wide">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : stats && stats.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-2xl p-6 shadow-brand border border-[var(--border)] text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-extrabold text-[var(--brand-dark)]">
                      {s.value}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-1 uppercase tracking-wide">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

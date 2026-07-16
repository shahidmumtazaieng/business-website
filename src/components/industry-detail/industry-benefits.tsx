"use client";

import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Leaf,
  Clock,
  Star,
  Heart,
  Zap,
  Award,
  TrendingUp,
  Building2,
  type LucideIcon,
} from "lucide-react";
import type { IndustryDetail } from "@/lib/industry-detail-data";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Shield,
  Leaf,
  Clock,
  Star,
  Heart,
  Zap,
  Award,
  TrendingUp,
  Building2,
};

export function IndustryBenefits({ industry }: { industry: IndustryDetail }) {
  if (!industry.benefits.length) return null;
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Why Maundy Clean
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            The difference is operational.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            We don't win contracts on price. We win them on the things that show up in your
            audit scores, your staff feedback, and your bottom line.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.benefits.map((b, idx) => {
            const Icon = iconMap[b.icon] ?? Award;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)]/60 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--brand)]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-2">{b.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

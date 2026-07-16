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

export function IndustryChallenges({ industry }: { industry: IndustryDetail }) {
  if (!industry.challenges.length) return null;
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
            Challenges we solve
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            The pain points you stop worrying about.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            We've spent years inside {industry.name.toLowerCase()} operations. These are the
            issues we get called about most — and the protocols we've built to eliminate them.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.challenges.map((c, idx) => {
            const Icon = iconMap[c.icon] ?? Award;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-light)] to-[var(--brand)]/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--brand-dark)]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-2">{c.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{c.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

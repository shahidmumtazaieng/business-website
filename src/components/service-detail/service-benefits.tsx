"use client";

import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Leaf,
  Clock,
  Star,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-detail-data";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Shield,
  Leaf,
  Clock,
  Star,
  Smartphone,
};

export function ServiceBenefits({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--ink)] text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-3 inline-block">
            Why Maundy Clean
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight">
            The standards that earned 6,200 five-star reviews.
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            Six commitments we make to every recurring client — written into your service agreement, not just our marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.benefits.map((b, i) => {
            const Icon = iconMap[b.icon] ?? Star;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group bg-white/[0.04] backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-[var(--brand)]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">
                  {b.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

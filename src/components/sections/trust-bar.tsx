"use client";

import { motion } from "framer-motion";
import { Shield, Star, Leaf, Award, Users, Clock } from "lucide-react";

const items = [
  { icon: Shield, label: "Insured & PVG-Checked", sub: "£5m Public Liability" },
  { icon: Users, label: "PAYE Employees", sub: "Never contractors" },
  { icon: Star, label: "4.9/5 Rating", sub: "6,200+ reviews" },
  { icon: Leaf, label: "Eco-Labelled", sub: "Low-VOC supplies" },
  { icon: Award, label: "Trustpilot Excellent", sub: "Verified service" },
  { icon: Clock, label: "24/7 Response", sub: "Emergency dispatch" },
];

export function TrustBar() {
  return (
    <section className="border-y border-[var(--border)] bg-white py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)]/60 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[var(--brand)]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--ink)] leading-tight">
                    {it.label}
                  </div>
                  <div className="text-[11px] text-[var(--muted-foreground)]">{it.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

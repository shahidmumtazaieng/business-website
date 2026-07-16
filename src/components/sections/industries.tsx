"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Utensils,
  GraduationCap,
  Building2,
  Factory,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { industryCategories } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  utensils: Utensils,
  "graduation-cap": GraduationCap,
  building: Building2,
  factory: Factory,
  sparkles: Sparkles,
};

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--cream)] relative overflow-hidden">
      <div className="absolute -top-32 right-1/4 w-72 h-72 rounded-full bg-[var(--brand)]/5 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[var(--brand-dark)] text-xs font-semibold mb-3 shadow-sm">
            <Building2 className="w-3.5 h-3.5" /> 24 Industries Served
          </div>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight text-[var(--ink)]">
            Specialised protocols for{" "}
            <span className="text-gradient-brand">your industry</span>
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] text-base lg:text-lg leading-relaxed">
            A gym is not an office. A restaurant is not a clinic. We bring industry-specific
            compliance, equipment, and checklists to every account — not a one-size-fits-all template.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industryCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon ?? ""] ?? Sparkles;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white rounded-2xl border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand transition-all overflow-hidden flex flex-col"
              >
                {/* Image header */}
                <div className="relative h-36 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={`${cat.title} cleaning services`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white">
                    <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg">{cat.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-1.5 flex-1">
                    {cat.children.map((c) => (
                      <li key={c.name}>
                        <a
                          href={c.href}
                          className="group/item flex items-center justify-between gap-2 py-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--brand)] transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand)]/60 group-hover/item:text-[var(--brand)]" />
                            {c.name}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <a
                      href="#"
                      className="text-xs font-semibold text-[var(--brand)] hover:underline flex items-center gap-1"
                    >
                      Explore {cat.title.toLowerCase()} cleaning <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] shadow-brand gap-2" asChild>
            <a href="#">
              See all 24 industries <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

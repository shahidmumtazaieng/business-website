"use client";

import { motion } from "framer-motion";
import {
  Home, Building, ClipboardList, Sparkles, Stethoscope,
  Factory, Trees, PlusCircle, ArrowUpRight,
} from "lucide-react";
import type { LocationDetail } from "@/lib/location-detail-data";
import type { SharedServiceCategory } from "@/lib/shared-services-catalog";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  building: Building,
  "clipboard-list": ClipboardList,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  factory: Factory,
  trees: Trees,
  "plus-circle": PlusCircle,
};

export function LocationServices({ location }: { location: LocationDetail }) {
  const categories = location.servicesByCategory;
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]/40">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Every service we offer · {location.name}
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            All 98 services. One local crew.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            Whether you need a one-off deep clean, a recurring home service, or a fully-managed
            commercial contract — our {location.name} branch covers the lot.
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat: SharedServiceCategory, catIdx: number) => {
            const Icon = iconMap[cat.icon] ?? Sparkles;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                className="bg-white rounded-3xl border border-[var(--border)] p-6 lg:p-8 shadow-sm"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-[var(--border)]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-xl lg:text-2xl text-[var(--ink)]">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] mt-0.5">{cat.blurb}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] bg-[var(--brand-light)]/60 px-3 py-1.5 rounded-full">
                    {cat.services.length} services
                  </div>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {cat.services.map((svc) => (
                    <a
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="group flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg border border-transparent hover:border-[var(--brand)]/30 hover:bg-[var(--brand-light)]/40 transition-colors"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-[var(--ink)] group-hover:text-[var(--brand-dark)]">
                        {svc.popular && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                        )}
                        <span className={svc.popular ? "" : "ml-3.5"}>{svc.name}</span>
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--muted-foreground)] group-hover:text-[var(--brand)] shrink-0" />
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

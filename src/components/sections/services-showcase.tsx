"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Home,
  Building2,
  ClipboardList,
  Sparkles,
  Stethoscope,
  Factory,
  Trees,
  PlusCircle,
  CheckCircle2,
} from "lucide-react";
import { serviceCategories } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  building: Building2,
  "clipboard-list": ClipboardList,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  factory: Factory,
  trees: Trees,
  "plus-circle": PlusCircle,
};

export function ServicesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = serviceCategories[activeIdx];
  const Icon = iconMap[active.icon ?? ""] ?? Sparkles;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-light)]/60 text-[var(--brand-dark)] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> 117 Services · 8 Categories
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight text-[var(--ink)]">
              Every kind of clean.
              <br />
              <span className="text-gradient-brand">All under one roof.</span>
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] text-base lg:text-lg leading-relaxed">
              From weekly recurring home cleaning to FSA-compliant food plant sanitation, we've built
              specialised crews, checklists, and equipment for every kind of space. Pick a category to explore.
            </p>
          </div>
          <Button variant="outline" className="gap-2 shrink-0" asChild>
            <a href="#">
              Browse all 117 services <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {serviceCategories.map((cat, i) => {
            const CatIcon = iconMap[cat.icon ?? ""] ?? Sparkles;
            const isActive = i === activeIdx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveIdx(i)}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[var(--brand)] text-white shadow-brand"
                    : "bg-[var(--cream)] text-[var(--ink)] hover:bg-[var(--brand-light)]/50"
                }`}
              >
                <CatIcon className="w-4 h-4" />
                {cat.title}
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-white text-[var(--brand)]"
                  }`}
                >
                  {cat.children.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active category panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid lg:grid-cols-[1fr_2fr] gap-6"
          >
            {/* Left intro card with real image */}
            <div className="relative rounded-3xl overflow-hidden min-h-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.image}
                alt={`${active.title} by Maundy Clean`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)] via-[var(--brand-dark)]/80 to-[var(--brand-dark)]/40" />
              <div className="absolute inset-0 bg-grain opacity-20" />
              <div className="relative p-8 text-white h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">{active.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  {active.children.length} specialised services delivered by trained, PVG-checked
                  crews using eco-labelled supplies and commercial-grade equipment.
                </p>
                <div className="space-y-2.5 text-sm">
                  {[
                    "Same crew every visit",
                    "Photo-verified arrival",
                    "Customisable checklist",
                    "Free re-clean guarantee",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold)]" />
                      {f}
                    </div>
                  ))}
                </div>
                <Button className="mt-auto self-start bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-dark)] hover:text-white">
                  Get quote for this category <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right: services grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {active.children.map((svc, idx) => (
                <motion.a
                  key={svc.name}
                  href={svc.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.02 }}
                  className="group relative p-5 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--brand)] hover:shadow-brand transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] group-hover:scale-150 transition-transform" />
                        <h4 className="font-semibold text-[var(--ink)] group-hover:text-[var(--brand)] transition-colors">
                          {svc.name}
                        </h4>
                      </div>
                      {svc.description && (
                        <p className="text-xs text-[var(--muted-foreground)] mt-2 leading-relaxed">
                          {svc.description}
                        </p>
                      )}
                    </div>
                    {svc.popular && (
                      <span className="text-[9px] font-bold uppercase tracking-wide text-[var(--gold-dark)] bg-[var(--gold)]/20 px-1.5 py-0.5 rounded shrink-0">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[var(--brand)] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    View details <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

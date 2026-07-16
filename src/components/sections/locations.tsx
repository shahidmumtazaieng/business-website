"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Search } from "lucide-react";
import { locationCategories } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function LocationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Left intro */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-light)]/60 text-[var(--brand-dark)] text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5" /> 30 Scottish Locations · 6 Regions
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight text-[var(--ink)]">
              Local crews.
              <br />
              <span className="text-gradient-brand">Local dispatch.</span>
              <br />
              Same Maundy standard.
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] text-base lg:text-lg leading-relaxed">
              We staff crews that actually live in your area. No cross-region dispatch, no
              traffic-driven delays. Same training, same supplies, same 4.9-star guarantee —
              from the Borders to the Highlands.
            </p>

            {/* Faux postcode lookup */}
            <div className="mt-6 p-4 rounded-xl bg-[var(--cream)] border border-[var(--border)]">
              <div className="text-xs font-semibold text-[var(--ink)] mb-2">
                Check if we serve your postcode
              </div>
              <div className="flex gap-2">
                <div className="flex-1 flex items-center gap-2 bg-white rounded-lg border border-[var(--border)] px-3 h-10">
                  <Search className="w-4 h-4 text-[var(--muted-foreground)]" />
                  <input
                    placeholder="G12 8AS"
                    className="flex-1 outline-none text-sm bg-transparent"
                  />
                </div>
                <Button className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] h-10">
                  Check
                </Button>
              </div>
              <div className="mt-2 text-xs text-[var(--brand)] font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Glasgow's West End is in our service area!
              </div>
            </div>
          </div>

          {/* Right: regions grid with city images */}
          <div className="space-y-6">
            {locationCategories.map((region, idx) => (
              <motion.div
                key={region.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[var(--cream)] rounded-2xl overflow-hidden border border-[var(--border)]"
              >
                <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr]">
                  {/* Region image */}
                  <div className="relative h-full min-h-[140px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={region.image}
                      alt={`${region.title}, Scotland`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--cream)]/80" />
                  </div>
                  {/* Cities list */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display font-bold text-base lg:text-lg text-[var(--ink)] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[var(--brand)]" />
                        {region.title}
                      </h3>
                      <span className="text-xs font-semibold text-[var(--brand)] bg-white px-2 py-1 rounded-full">
                        {region.children.length} locations
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {region.children.map((c) => (
                        <a
                          key={c.name}
                          href={c.href}
                          className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-[var(--border)] hover:border-[var(--brand)] hover:bg-[var(--brand-light)]/30 transition-all text-xs"
                        >
                          <MapPin className="w-3 h-3 text-[var(--brand)]" />
                          <span className="font-medium text-[var(--ink)] group-hover:text-[var(--brand)]">
                            {c.name}
                          </span>
                          {c.popular && (
                            <span className="text-[9px] font-bold uppercase text-[var(--gold-dark)] bg-[var(--gold)]/20 px-1 py-0.5 rounded">
                              Hub
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="text-center pt-2">
              <Button variant="outline" className="gap-2" asChild>
                <a href="#">
                  View full coverage map <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

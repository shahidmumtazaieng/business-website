"use client";

import { motion } from "framer-motion";
import { ChevronRight, Star, Shield, Leaf, Clock, ArrowRight, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LocationDetail } from "@/lib/location-detail-data";
import { contactInfo } from "@/lib/site-data";

function slugifyRegion(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function LocationHero({ location }: { location: LocationDetail }) {
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
          <a href="/" className="hover:text-[var(--brand)] transition-colors">Home</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/locations" className="hover:text-[var(--brand)] transition-colors">Locations</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/locations#region-${slugifyRegion(location.region)}`} className="hover:text-[var(--brand)] transition-colors">{location.region}</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--ink)] font-semibold">{location.name}</span>
        </motion.nav>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-light)]/60 border border-[var(--brand)]/20 text-xs font-semibold text-[var(--brand-dark)] mb-5"
            >
              <MapPin className="w-3.5 h-3.5" />
              {location.populationNote} · Same-day quotes
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-[40px] sm:text-[48px] lg:text-[60px] leading-[1.05] tracking-tight text-[var(--ink)] whitespace-pre-line"
            >
              {location.heroHeadline}
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed"
            >
              {location.heroSubhead}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <Button
                size="lg"
                className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 px-7 h-12 text-base"
                asChild
              >
                <a href="#">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand-dark)] hover:bg-[var(--brand-light)]"
                asChild
              >
                <a href={contactInfo.phoneHref}>
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <span className="font-semibold text-[var(--ink)]">4.9/5</span>
                <span className="text-[var(--muted-foreground)]">· 6,200+ reviews</span>
              </div>
              <div className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                <Shield className="w-4 h-4 text-[var(--brand)]" /> PVG-Checked & Insured
              </div>
              <div className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                <Leaf className="w-4 h-4 text-[var(--brand)]" /> Eco-Friendly
              </div>
              <div className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" /> Same crew every visit
              </div>
            </motion.div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/5] bg-[var(--brand-dark)]">
              <img
                src={location.heroImage}
                alt={location.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/85 via-[var(--brand-dark)]/20 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold">{location.name}</div>
                      <div className="text-white/80 text-[10px]">{location.region}</div>
                    </div>
                  </div>
                  <div className="text-[10px] bg-[var(--gold)] text-[var(--ink)] font-bold px-2 py-1 rounded-full">
                    100% GUARANTEE
                  </div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto bg-white rounded-2xl p-5 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-bold text-[var(--ink)]">Now serving {location.name}</div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-[var(--gold)] text-[var(--gold)]" />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                    {location.stats.slice(0, 3).map((stat) => (
                      <div key={stat.label} className="bg-[var(--cream)] rounded-lg p-2">
                        <div className="text-sm font-bold text-[var(--ink)]">{stat.value}</div>
                        <div className="text-[10px] text-[var(--muted-foreground)]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 lg:-left-6 top-1/4 bg-white rounded-xl shadow-xl p-3 border border-[var(--border)] w-44"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--brand-light)] flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[var(--brand)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Response time</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&lt; 1 business hour</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 lg:-right-6 bottom-1/4 bg-white rounded-xl shadow-xl p-3 border border-[var(--border)] w-44"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[var(--gold-dark)] fill-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Client retention</div>
                  <div className="text-xs font-bold text-[var(--ink)]">98%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

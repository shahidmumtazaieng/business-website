"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Star,
  ArrowRight,
  Play,
  CheckCircle2,
  Shield,
  Clock,
  Users,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats, IMG } from "@/lib/site-data";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-mesh pt-12 pb-20 lg:pt-16 lg:pb-28"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand)]/10 blur-3xl" />
      <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center relative">
        <motion.div
          style={{ y, opacity }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-light)]/60 border border-[var(--brand)]/20 text-xs font-semibold text-[var(--brand-dark)] mb-5"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--brand)] animate-pulse-ring" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--brand)]" />
            </span>
            Now serving 30 Scottish locations · Same-day quotes
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-display font-extrabold text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.04] tracking-tight text-[var(--ink)]"
          >
            A spotless space.
            <br />
            <span className="text-gradient-brand">Zero effort.</span>
            <br />
            Every single visit.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-5 text-base lg:text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed"
          >
            Premium residential & commercial cleaning crews trusted by 8,000+ homes and 500+ businesses across Scotland.
            Same team every visit. PAYE employees. Eco-labelled supplies. Free re-clean if you're not thrilled.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
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
              <a href="#">
                <Play className="w-4 h-4 fill-[var(--brand)]" />
                See how it works
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          {/* Real image of cleaning crew with overlay dashboard card */}
          <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/5] bg-[var(--brand-dark)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.heroCrew}
              alt="Professional Maundy Clean crew cleaning a modern living room"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/85 via-[var(--brand-dark)]/30 to-transparent" />

            <div className="absolute inset-0 p-6 flex flex-col">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold">Next Clean</div>
                    <div className="text-white/80 text-[10px]">Tue, 15 Jul · 9:00 AM</div>
                  </div>
                </div>
                <div className="text-[10px] bg-[var(--gold)] text-[var(--ink)] font-bold px-2 py-1 rounded-full">
                  CONFIRMED
                </div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto bg-white rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[var(--ink)]">Mairi's Team</div>
                    <div className="text-xs text-[var(--muted-foreground)]">Lead · 4 yrs with Maundy</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div className="bg-[var(--cream)] rounded-lg p-2">
                    <div className="text-[10px] text-[var(--muted-foreground)]">Crew</div>
                    <div className="text-sm font-bold text-[var(--ink)]">3 pros</div>
                  </div>
                  <div className="bg-[var(--cream)] rounded-lg p-2">
                    <div className="text-[10px] text-[var(--muted-foreground)]">Time</div>
                    <div className="text-sm font-bold text-[var(--ink)]">2.5 hrs</div>
                  </div>
                  <div className="bg-[var(--cream)] rounded-lg p-2">
                    <div className="text-[10px] text-[var(--muted-foreground)]">Tasks</div>
                    <div className="text-sm font-bold text-[var(--ink)]">22/22</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                    <Clock className="w-3.5 h-3.5" /> Arriving in 2 days
                  </div>
                  <Button size="sm" className="h-7 text-xs bg-[var(--brand)] hover:bg-[var(--brand-dark)]">
                    View checklist
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 lg:-left-8 top-1/4 bg-white rounded-xl shadow-xl p-3 border border-[var(--border)] w-44"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--brand-light)] flex items-center justify-center">
                <Users className="w-4 h-4 text-[var(--brand)]" />
              </div>
              <div>
                <div className="text-[10px] text-[var(--muted-foreground)]">PVG-Checked</div>
                <div className="text-xs font-bold text-[var(--ink)]">PAYE Crews Only</div>
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
                <CheckCircle2 className="w-4 h-4 text-[var(--gold-dark)]" />
              </div>
              <div>
                <div className="text-[10px] text-[var(--muted-foreground)]">Satisfaction</div>
                <div className="text-xs font-bold text-[var(--ink)]">98% Retention</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2 bg-white rounded-2xl border border-[var(--border)] shadow-sm p-6 lg:p-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display font-extrabold text-3xl lg:text-4xl text-gradient-brand">
                {s.value}
              </div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1 font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

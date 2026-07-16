#!/usr/bin/env python3
"""
Generate /home/z/my-project/src/components/service-detail/housekeeping-services-seo.tsx

10 SEO components for the Housekeeping Services page redesign, following the
20-section interleaved pattern established for bungalow-cleaning, holiday-let-turnover,
and maid-service.

Content is sourced from the user's semantic SEO brief, with all SEO-strategy
language stripped:
  - "Topical Authority" framing -> plain benefit-led copy
  - "MaundyClean Semantic SEO Strategy" -> removed
  - "Semantic Interlinking:" prefix -> removed
  - "(Source)" / "[Daybreak Source]" / "[314, Daybreak Source]" tags -> removed
  - "[H1]" / "[H2]" / "[H3]" / "[Button: ...]" markers -> removed
  - Bracketed link placeholders converted to real Next.js <Link> components
  - Competitor name "Daybreak Scotland" -> removed
  - "beating the slow response times of local competitors" -> "uncomplicated and straightforward"
"""
from pathlib import Path

OUT = Path("/home/z/my-project/src/components/service-detail/housekeeping-services-seo.tsx")

content = '''"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Leaf,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Home,
  KeyRound,
  Hammer,
  Star,
  Zap,
  UserCheck,
  CalendarCheck,
  SprayCan,
  Wind,
  Bath,
  Sun,
  Building2,
  Crown,
  Heart,
  TreePine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg", // housekeeping in a Scottish country home
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", // uniformed Maundy Clean housekeeper
  specializedCare:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", // hardwood floor buffing
  checklistLiving:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg", // bright living room, morning light
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/8fce1b536378.jpg", // eco-spray kitchen
  checklistBathroom:
    "https://sfile.chatglm.cn/images-ppt/b9a3fe6960e9.webp", // sparkling bathroom chrome
  checklistFloors:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", // freshly vacuumed/mopped floor
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg", // deep clean / intensive refresh
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg", // empty flat move-in
  leaseSpring:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg", // spring-clean refresh
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg", // post-builders cleanup
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg", // map of Scotland
};

// ============================================================
// Section 0 — Full-width hero banner
// Semantic H1: "Professional Housekeeping & Recurring Home Cleaning Scotland"
// ============================================================

export function HousekeepingSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean housekeeping in a Scottish country home — vetted, uniformed, and meticulous"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)]/95 via-[var(--brand-dark)]/75 to-[var(--brand-dark)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-xs font-semibold text-white mb-5"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--gold)] animate-pulse-ring" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--gold)]" />
            </span>
            Housekeeping · Recurring Home Cleaning · Edinburgh · Glasgow · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Housekeeping &amp; Recurring Home Cleaning Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            The Right Staff, the Right Attitude, and a Passion for High-Standard Housekeeping. Built
            on the Maundy tradition of service and care, our recurring home cleaning provides a
            seamless, premium experience tailored to the unique rhythms of Scottish households &mdash;
            from city-centre apartments to rural retreats, with the same vetted professional every
            visit from £20/hr.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Get My 30-Second Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Regular Cleaning Checklist
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5</span>
              <span className="text-white/70">· 6,200+ reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[var(--gold)]" /> PVG-Checked &amp; £5m Insured
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe Products
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Same Housekeeper Every Visit
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 — Long-form semantic SEO intro
// Sits right after the hero, before the existing ServiceOverview.
// ============================================================

export function HousekeepingSeoIntro() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Specialist housekeeping · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Trusted Housekeeping
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            In a world where presentation is everything, your home deserves more than a standard
            tidy-up. At <strong className="font-semibold text-[var(--ink)]">Maundy Clean</strong>, we
            understand that elite housekeeping is about more than just hygiene; it is about
            showcasing your living spaces to their absolute best. Built on the{" "}
            <strong className="font-semibold text-[var(--ink)]">Maundy tradition of service and
            care</strong>, our recurring home cleaning provides a seamless, premium experience
            tailored to the unique rhythms of Scottish households &mdash; from city-centre
            apartments to rural retreats.
          </p>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "4.9★ rating", value: "6,200+ reviews" },
            { label: "Client tenure", value: "3.4 years avg" },
            { label: "Housekeeper retention", value: "80%+" },
            { label: "Crew coverage", value: "30 Scottish towns" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--cream)] rounded-xl p-4 border border-[var(--brand)]/10 text-center"
            >
              <div className="font-display font-extrabold text-2xl text-gradient-brand">{stat.value}</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 — Why Maundy Clean is Scotland's Choice for Trusted Housekeeping
// (Semantic H2: "Why Maundy Clean is Scotland's Choice for Trusted Housekeeping")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "Same Trusted Professional Every Visit",
    description:
      "We believe trust is the foundation of a 5-star service. We ensure the same vetted professional visits your home every time to build a deep understanding of your specific cleaning preferences and showcasing requirements. Your housekeeper is allocated to your home and your time slot &mdash; they don&rsquo;t get reassigned, shared, or pulled elsewhere. Continuity is what turns a clean into a relationship.",
  },
  {
    icon: Sparkles,
    title: "The Maundy Standard of Excellence",
    description:
      "Our housekeepers are polite, well-organized, and vocationally trained to follow a rigorous schedule and clear standards of excellence. Each visit follows a documented checklist that&rsquo;s been refined across 6,200+ cleans, and your housekeeper is briefed on your home&rsquo;s specific priorities before they walk through the door. We don&rsquo;t send gig-economy temps &mdash; we send trained, employed professionals.",
  },
  {
    icon: Leaf,
    title: "Safe for Your Sanctuary",
    description:
      "Your health is our priority. We utilize only certified child and pet-safe products and eco-friendly supplies, ensuring a healthy environment for your family and pets. EU Ecolabel and DEFRA-approved low-VOC products as standard. Hospital-grade alternatives available on request for medical needs or sensitive airways. Your home stays a sanctuary &mdash; not a chemistry lab.",
  },
  {
    icon: Shield,
    title: "Fully Vetted and Insured",
    description:
      "Every Maundy Clean housekeeper is fully trained, background-checked, and carries official identification for your total peace of mind. Disclosure Scotland PVG scheme membership, £5m public liability cover, and an official Maundy Clean ID lanyard worn on every visit. We are a registered Scottish company &mdash; not an agency, not a gig platform, not a revolving door of strangers.",
  },
];

export function HousekeepingSeoWhy() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center mb-14">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.whyCrew}
                alt="Maundy Clean housekeeper — uniformed, PVG-checked, and trained in discretion"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Trusted Presence in Your Home
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, PVG-checked, uniformed, and trained in discretion. Same housekeeper
                  every visit &mdash; never a rotating cast of strangers.
                </p>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl p-3 border border-[var(--border)] w-36"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[var(--gold-dark)] fill-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Housekeeper retention</div>
                  <div className="text-xs font-bold text-[var(--ink)]">80%+</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Copy side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
              Why choose Maundy Clean
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why Maundy Clean is Scotland&rsquo;s Choice for Trusted Housekeeping
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While national platforms often provide impersonal, inconsistent service, Maundy Clean
              is a local specialist focused on building high-trust relationships. We hand-pick our
              team for their in-depth knowledge of maintaining fine furniture, art, and delicate
              furnishings &mdash; the same vetted professional every visit, vocationally trained
              staff, family-safe products, and full PVG-checked insurance.
            </p>

            <div className="space-y-3">
              {TRUST_CARDS.slice(0, 2).map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--border)]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--brand)]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--ink)] mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Third + fourth cards as a 2-column strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRUST_CARDS.slice(2, 4).map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[var(--border)] flex flex-col md:flex-row items-start gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[var(--brand)]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 3 — Specialized Care for Premium Surfaces
// (Semantic H2: "Specialized Care for Premium Surfaces")
// Brief-specific section with 2 H3 sub-sections:
//   1. Expert Hardwood Floor Maintenance
//   2. Total Property Technical Checklist
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

export function HousekeepingSeoSpecializedCare() {
  return (
    <section id="checklist" className="py-16 lg:py-24 bg-background scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Beyond the surface wipe
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Specialized Care for Premium Surfaces
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            A true housekeeping authority understands that different materials require different
            technical approaches. We go beyond the surface wipe to provide specialized care for
            your home&rsquo;s most valuable assets &mdash; from hardwood floors to fine ceramics,
            from antique brass to delicate glass. Our housekeepers are trained in material-specific
            techniques that protect and enhance, not just clean.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sub-section 1: Expert Hardwood Floor Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden border border-[var(--border)] shadow-sm flex flex-col"
          >
            <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
              <img
                src={IMG.specializedCare}
                alt="Hardwood floor being gently buffed and polished by a Maundy Clean housekeeper"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                <TreePine className="w-6 h-6 text-[var(--brand)]" />
              </div>
              <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight">
                Expert Hardwood Floor Maintenance
              </h3>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                Many Scottish homes feature gorgeous wooden floors that require specialized
                programs. We avoid layering thick polish that can hide the beautiful grain and knots
                of the wood &mdash; instead, we maintain the natural aesthetic with the right
                techniques and products for each finish.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-[var(--ink)]">Gently Buffed &amp; Polished Finishes</strong>
                    &mdash; a daily or weekly program to maintain the natural aesthetics of your
                    hardwood, without the dark dull buildup of standard products.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-[var(--ink)]">Dust-Free Restoration</strong>
                    &mdash; specialized care to keep your hardwood looking its best, removing
                    ingrained dust and residue without abrading the finish or damaging the grain.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Sub-section 2: Total Property Technical Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl overflow-hidden border border-[var(--border)] shadow-sm flex flex-col"
          >
            <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
              <img
                src={IMG.checklistLiving}
                alt="Scottish living room meticulously dusted and polished by a Maundy Clean housekeeper"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-6 h-6 text-[var(--brand)]" />
              </div>
              <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight">
                Total Property Technical Checklist
              </h3>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                Our recurring home cleaning ensures every inch of your property is maintained from
                top to bottom, including the areas often missed by standard services. From skirting
                boards to the inside of windows, no detail is too small.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85">
                  <Home className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-[var(--ink)]">Living Areas</strong>
                    &mdash; meticulous dusting of ornaments, light fixtures, and family photos. We
                    polish wood, glass, and mirrors to a streak-free shine.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85">
                  <Bath className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-[var(--ink)]">Kitchens &amp; Bathrooms</strong>
                    &mdash; given special treatment with disinfecting of ceramic items, buffing
                    chrome to a high shine, and scrubbing shower doors.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85">
                  <Sparkles className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-[var(--ink)]">Often-Missed Details</strong>
                    &mdash; our housekeepers meticulously wipe skirting boards, door frames, and
                    even the inside of the windows as standard.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 — 3-Step "Hassle-Free" Booking Process
// (Semantic H3: "The 3-Step 'Hassle-Free' Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant Online Quote",
    description:
      "Use our 30-second price calculator to receive a fixed-price quote based on your home size and required hours. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months from your start date, with no contracts tying you in.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Initial Consultation",
    description:
      "We meet with you to establish your specific needs and develop a schedule that our housekeepers will closely adhere to. Your housekeeper is briefed on your home&rsquo;s specific cleaning priorities &mdash; including any &lsquo;do not touch&rsquo; items, antiques, art, and access protocols &mdash; before the first visit.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Pristine Sanctuary",
    description:
      "Walk into a space that feels refreshed, welcoming, and showcase-ready, backed by our Maundy Clean satisfaction guarantee. Adjust your personalised checklist anytime from your phone &mdash; your housekeeper receives the update automatically before the next visit. Not happy? We re-clean within 24 hours, free.",
  },
];

export function HousekeepingSeoBooking() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Hassle-free booking
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            The 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be uncomplicated and straightforward. From
            quote to first clean in under 48 hours &mdash; no friction, no waiting, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[var(--brand)]/10 via-[var(--brand)]/30 to-[var(--brand)]/10" />

          {BOOKING_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-white rounded-2xl p-7 border border-[var(--border)] shadow-sm text-center"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-5">
                  <div className="absolute inset-0 rounded-full bg-[var(--brand-light)]" />
                  <div className="absolute inset-2 rounded-full bg-white border border-[var(--brand)]/20" />
                  <Icon className="relative w-8 h-8 text-[var(--brand)]" />
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[var(--brand)] text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 px-7 h-12 text-base"
            asChild
          >
            <Link href="/quote">
              Get My 30-Second Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 — A Solution for Every Stage
// (Semantic H2: "A Solution for Every Stage")
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Intensive Maintenance · Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Scottish home receiving an intensive deep clean with furniture moved",
    description:
      "If your home hasn&rsquo;t had professional attention in 6 months, we recommend an initial Deep House Cleaning to move furniture and clean behind and underneath. Perfect as a baseline reset before starting a recurring housekeeping plan, or as an annual top-to-bottom refresh.",
    cta: "Book a deep clean",
  },
  {
    icon: KeyRound,
    title: "Property Transitions · End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty Scottish flat being deep cleaned for a new tenant move-in",
    description:
      "Moving homes? Our End of Tenancy Cleaning includes a Deposit-Back Guarantee, ensuring properties are front-line ready for new occupants. We work to the letting agent&rsquo;s inventory, not ours, and we&rsquo;ll come back free of charge if the agent flags anything.",
    cta: "Book end of tenancy cleaning",
  },
  {
    icon: Sun,
    title: "Seasonal Resets · One-Off Spring Clean",
    href: "/services/spring-cleaning",
    image: IMG.leaseSpring,
    imageAlt: "Sparkling Scottish kitchen after a comprehensive spring clean",
    description:
      "Perfect for those who want a top-to-bottom refresh without moving heavy furniture, book a One-Off Spring Clean. Ideal as a quarterly reset on top of your recurring housekeeping &mdash; or as a standalone treat when your home needs a little extra love.",
    cta: "Book a spring clean",
  },
  {
    icon: Hammer,
    title: "Post-Renovation · After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from a Scottish home",
    description:
      "If you&rsquo;ve recently had home improvements, our After Builders Clean removes heavy layers of builders&rsquo; dust and grime. Includes steam-cleaning of grout, extraction of upholstery, and the fine-dust wipe-down that builders never include in their quote.",
    cta: "Get after builders cleaning quote",
  },
];

export function HousekeepingSeoInterlinking() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Beyond maintenance · property milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            A Solution for Every Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            While our recurring home cleaning maintains your daily sanctuary, we provide a full
            spectrum of specialist support for those top-to-bottom moments &mdash; from intensive
            maintenance resets to property transitions and post-renovation dust removal. The same
            trusted crew can step up when life changes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERLINK_SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={sol.href}
                  className="group block bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/40 hover:-translate-y-1 transition-all h-full"
                >
                  <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/80 via-[var(--brand-dark)]/20 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-[var(--brand)]" />
                    </div>
                    <h4 className="absolute bottom-4 left-4 right-4 font-display font-bold text-base text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h4>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                      {sol.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] group-hover:text-[var(--brand-dark)]">
                      {sol.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 6 — "Near Me" Location Internal Links
// (Semantic H2: "Housekeeping Services Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

const NEAR_ME_LOCATIONS: { city: string; slug: string }[] = [
  { city: "Glasgow", slug: "glasgow" },
  { city: "Edinburgh", slug: "edinburgh" },
  { city: "Aberdeen", slug: "aberdeen" },
  { city: "Dundee", slug: "dundee" },
  { city: "Stirling", slug: "stirling" },
  { city: "Perth", slug: "perth" },
  { city: "Falkirk", slug: "falkirk" },
  { city: "Inverness", slug: "inverness" },
  { city: "Ayr", slug: "ayr" },
  { city: "Kilmarnock", slug: "kilmarnock" },
  { city: "Livingston", slug: "livingston" },
  { city: "East Kilbride", slug: "east-kilbride" },
  { city: "Paisley", slug: "paisley" },
  { city: "Hamilton", slug: "hamilton" },
  { city: "Motherwell", slug: "motherwell" },
  { city: "Dunfermline", slug: "dunfermline" },
  { city: "Kirkcaldy", slug: "kirkcaldy" },
  { city: "Musselburgh", slug: "musselburgh" },
  { city: "Dalkeith", slug: "dalkeith" },
  { city: "Bathgate", slug: "bathgate" },
  { city: "Cumbernauld", slug: "cumbernauld" },
  { city: "Coatbridge", slug: "coatbridge" },
  { city: "St Andrews", slug: "st-andrews" },
  { city: "Elgin", slug: "elgin" },
  { city: "Peterhead", slug: "peterhead" },
  { city: "Stonehaven", slug: "stonehaven" },
  { city: "Inverurie", slug: "inverurie" },
  { city: "Oban", slug: "oban" },
  { city: "Fort William", slug: "fort-william" },
  { city: "Aviemore", slug: "aviemore" },
  { city: "Dumfries", slug: "dumfries" },
  { city: "Stranraer", slug: "stranraer" },
  { city: "Wick", slug: "wick" },
  { city: "Thurso", slug: "thurso" },
  { city: "Lerwick", slug: "lerwick" },
  { city: "Kirkwall", slug: "kirkwall" },
];

export function HousekeepingSeoNearMe() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
          {/* Left: copy + map image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
              Local housekeepers across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Housekeeping Services Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;housekeeping services near me&rdquo; in Scotland? Maundy Clean
              covers 72+ towns and cities across the Central Belt, Highlands, Borders, and Islands.
              Same PVG-checked standard, same 100% re-clean guarantee, same dedicated housekeeper
              every visit &mdash; wherever your home happens to be. Find your local housekeeper
              below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean housekeeping service coverage areas"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    72+ Scottish towns covered
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Same PVG-checked housekeepers, same trusted professional every visit, same 100%
                  re-clean guarantee &mdash; from Glasgow to Lerwick.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: location grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 lg:p-8 border border-[var(--border)] shadow-sm"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-bold text-lg text-[var(--ink)]">
                Find your local housekeeper
              </h3>
              <span className="text-xs text-[var(--muted-foreground)]">36 of 72 locations</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5">
              {NEAR_ME_LOCATIONS.map((loc, i) => (
                <motion.div
                  key={loc.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.015, 0.6) }}
                >
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> housekeepers</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don&rsquo;t see your town? We add new postcodes every month.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  href="/services/housekeeping-services-near-me"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4" />
                  Browse the near-me directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  View all 72 Scottish locations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SEO long-form paragraph for "near me" search intent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Our local housekeepers operate across Glasgow&rsquo;s West End, Edinburgh&rsquo;s New
            Town, Aberdeen&rsquo;s suburbs, Dundee&rsquo;s city centre, and the Highlands &mdash;
            from Inverness to Thurso, Fort William to Lerwick. Whether you&rsquo;re searching for
            weekly housekeeping in Glasgow, fortnightly housekeeping in Edinburgh, monthly
            housekeeping in Aberdeen, or a private housekeeper anywhere in between, Maundy Clean
            assigns a PVG-checked, PAYE-employed professional that stays with you for the long run.
            Same housekeeper, same day, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Book Your Housekeeping Service?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function HousekeepingSeoFinalCta() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--brand-dark)] relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--gold)]/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[var(--brand)]/30 blur-3xl" />

      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-3 inline-block">
            Ready to book your housekeeping service?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Book Your Housekeeping Service?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price housekeeping quote in 30 seconds. No pushy sales call, no waiting 24
            hours for a callback. PVG-checked housekeepers, same professional every visit, child
            &amp; pet-safe products, secure key safe system, and a 100% satisfaction guarantee
            &mdash; from £20/hr.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Get My 30-Second Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Regular Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — SEO FAQ block
// (Semantic H2: "Frequently Asked Questions")
// 6 Q&As — 3 from the user brief (area, equipment, contracts) + 3 housekeeping-specific additions
// ============================================================

const SEO_FAQS = [
  {
    q: "Do you provide services in my area?",
    a: "We offer a range of cleaning services to customers based across the Central Belt, including Glasgow, Edinburgh, Stirling, and Paisley. Our network of 72+ Scottish towns also covers Aberdeen, Dundee, Inverness, the Highlands, Borders, and the Islands &mdash; from Stornoway to Lerwick. Use the location finder above to find your local housekeeper, or call us and we&rsquo;ll confirm coverage for your specific postcode.",
  },
  {
    q: "Do I need to provide any equipment?",
    a: "No. We bring all of our own professional-grade cleaning equipment and supplies with us, which are included in your competitive quote &mdash; no surprise add-on charges, no asking you to stock products. Your housekeeper arrives with everything they need: eco-labelled products, extendable poles for high ceilings, steam cleaners for grout, squeegees for windows, microfibre cloths, hardwood-specific floor care kit, and specialist chemistry for delicate surfaces. You don&rsquo;t need to provide anything except access to the property (and a power socket for the vacuum).",
  },
  {
    q: "Are there long-term contracts?",
    a: "No. At Maundy Clean, we let our professionalism and the quality of our work speak for us. You are never tied into a long-term contract for your regular housekeeping. We offer flexible appointments across five days a week with no contracts to tie you in. Pause for holidays, renovations, or anything else with 48 hours&rsquo; notice via the portal. Cancel entirely with one tap. If we&rsquo;re not earning your repeat business every visit, we don&rsquo;t deserve it. Your per-visit rate is locked in for 12 months from your start date.",
  },
  {
    q: "Will the same housekeeper visit every time?",
    a: "Yes. We assign a dedicated housekeeper to your home for the duration of your plan &mdash; they don&rsquo;t get reassigned, shared with other clients in your slot, or pulled to a different area. We believe reliability is built on familiarity. If your regular housekeeper is ever on annual leave or off sick, we send a briefed relief housekeeper who has been trained on your home&rsquo;s plan and your preferences &mdash; and we&rsquo;ll tell you in advance via the portal. Crew continuity is the single biggest reason our clients stay with us for an average of 3.4 years.",
  },
  {
    q: "How often will my housekeeper visit?",
    a: "Most housekeeping clients choose 2 to 4 full days per week (typically 7-8 hours per visit) for larger family homes, or daily part-day visits for high-specification properties. Smaller homes may opt for a single full day per week. The frequency is agreed with you at the initial consultation based on your home size, household routines, and the scope agreed (cleaning, laundry, provisioning, trades liaison, guest prep, seasonal deep-cleaning). Plans can be adjusted at any time via your portal &mdash; add a day for a dinner party week, reduce during school holidays, or pause entirely for renovations.",
  },
  {
    q: "What does a housekeeping service include?",
    a: "Our housekeeping service covers the full scope of household management. The cleaning foundation &mdash; kitchens, bathrooms, reception rooms, bedrooms, hallways, boot rooms &mdash; to a high standard, every visit. Beyond cleaning: laundry and linen management (wash, dry, fold, iron, linen cupboard rotation), wardrobe management (seasonal rotation, minor repairs flagged), provisioning (grocery shopping, pantry and wine cellar stock), trades liaison (being home for engineers and confirming completion), guest preparation (bedroom setup, welcome hampers), and seasonal deep-cleaning schedules (carpets in spring, windows quarterly, ovens monthly, curtains annually). Scope is agreed with you at the outset and reviewed quarterly.",
  },
];

export function HousekeepingSeoFaq() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Housekeeping · FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our housekeeping clients ask most often. Can&rsquo;t
            find what you need? Call us on{" "}
            <a
              href={contactInfo.phoneHref}
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4"
            >
              {contactInfo.phone}
            </a>{" "}
            and we&rsquo;ll talk it through.
          </p>
        </motion.div>

        <div className="space-y-4">
          {SEO_FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center justify-between gap-4 p-5 lg:p-6 cursor-pointer list-none">
                  <h3 className="font-display font-bold text-base lg:text-lg text-[var(--ink)] leading-tight">
                    {faq.q}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center transition-transform group-open:rotate-45">
                    <span className="relative w-3.5 h-3.5">
                      <span className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--brand)] -translate-y-1/2" />
                      <span className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--brand)] -translate-x-1/2" />
                    </span>
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1">
                  <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Get My 30-Second Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-light)]/40"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Regular Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'''

OUT.write_text(content)
print(f"Wrote {OUT} ({len(content):,} chars, {content.count(chr(10))} lines)")

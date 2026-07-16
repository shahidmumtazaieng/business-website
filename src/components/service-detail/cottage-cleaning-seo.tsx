"use client";

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
  Star,
  Zap,
  UserCheck,
  CalendarCheck,
  SprayCan,
  Brush,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// All images reused from the cottage-cleaning & recurring-cleaning pools for consistency.
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg", // Highland cottage kitchen (matches cottageCleaning.heroImage)
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/0ba2e6837712.jpg", // uniformed cleaning crew
  checklistLiving:
    "https://sfile.chatglm.cn/images-ppt/8c109fd7dbba.jpg", // spotless living room sunlight
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/8fce1b536378.jpg", // eco-spray kitchen
  checklistWindows:
    "https://sfile.chatglm.cn/images-ppt/0ae5e527798e.jpg", // squeegee window cleaning
  checklistRural:
    "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg", // coastal cottage living room — rural character
  stageDeep:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg", // empty cottage being deep cleaned
  stageAirbnb:
    "https://sfile.chatglm.cn/images-ppt/2353ab471a3d.jpg", // bright holiday-let cottage
  stageSpring:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg", // spring cleaning refresh
  stageCarpet:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg", // cottage bathroom / soft-furnishing care
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg", // map of Scotland
};

// ============================================================
// Section 0 — Full-width hero banner
// H1: "Expert Recurring Cottage Cleaning Services in Scotland"
// ============================================================

export function CottageSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Bright, well-cared-for Scottish Highland cottage kitchen maintained by Maundy Clean"
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
            Cottage Cleaning · Highlands · Central Belt · Coast · Islands
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Expert Recurring Cottage Cleaning Services in Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Meticulous care, trusted consistency, and a fresh start for your Scottish retreat.
            The same PVG-checked cottage specialist every visit, original-feature care for stone,
            hardwood and brass, and a 100% re-clean guarantee. Weekly, fortnightly and monthly
            cottage plans from £20/hr.
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
              <a href={contactInfo.phoneHref}>
                <Zap className="w-4 h-4" />
                Same-day quote
              </a>
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
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Pet-safe &amp; septic-safe
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Same specialist every visit
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 — Long-form SEO intro
// Sits right after the hero, before the existing ServiceOverview.
// ============================================================

export function CottageSeoIntro() {
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
            Professional cottage cleaning · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Cottage Care
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Whether your cottage is a historic stone-built sanctuary in the Highlands or a modern
            rural retreat in the Central Belt, maintaining its unique character requires a
            specialist touch. At Maundy Clean, we understand that cottage living presents specific
            challenges — from managing wood-burning stove soot and rural dust to caring for
            traditional flooring and fixtures. Our recurring home cleaning service is designed to
            provide a premium housekeeping experience, ensuring your property remains a pristine
            sanctuary for you and your family. We move beyond the standard surface wipe of generic
            agencies to deliver a level of technical excellence built on the Maundy tradition of
            service and attention to detail.
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
            { label: "Cottage clients served", value: "Hundreds of homes" },
            { label: "Typical 2-bed recurring clean", value: "3 hrs · £60" },
            { label: "Re-clean rate", value: "1.2% of visits" },
            { label: "Crew retention", value: "4.2 years avg" },
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
// Section 2 — Why Maundy Clean is Scotland's Authority in Cottage Maintenance
// (H2: "Why Maundy Clean is Scotland's Authority in Cottage Maintenance")
// Image+copy split layout
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "The Same Trusted Professional Every Visit",
    description:
      "We believe trust is the foundation of cottage care. Unlike gig-economy apps with high turnover, we ensure the same vetted professional visits your property every time — building a deep understanding of your cottage's specific layouts, original features, and cleaning preferences. Our specialists stay with us an average of 4.2 years, so they get to know your home as well as you do.",
  },
  {
    icon: Home,
    title: "Specialist Traditional Home Knowledge",
    description:
      "Our staff are trained to care for the unique materials found in Scottish cottages — natural stone floors, hardwood and pitch-pine surfaces, slate hearths, brass and chrome fixtures, and traditional plasterwork. We never use the wrong chemistry on the wrong surface: pH-neutral cleaner on stone, tack-cloth and oil on hardwood, specialist soot remover on soft furnishings near the wood burner.",
  },
  {
    icon: Shield,
    title: "Fully Vetted & Uniformed Technicians",
    description:
      "We only recruit the best. Every member of our team is fully trained, Disclosure Scotland PVG-checked, insured with £5m public liability cover, and arrives in professional Maundy Clean uniform with official identification. You will never wonder who is in your cottage — the same trusted face, every visit.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Pet Safe",
    description:
      "We utilize only certified child and pet-safe products as standard. Our non-toxic, environmentally friendly supplies are EU Ecolabel and DEFRA-approved — safe for your loved ones and the surrounding Scottish landscape. For cottages on a septic tank or private water supply, we switch to septic-safe formulations that protect the bacterial balance of your system.",
  },
];

export function CottageSeoWhy() {
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
                alt="Maundy Clean cottage cleaning specialist in uniform arriving at a Scottish rural cottage"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Same Specialist · Every Visit
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  PVG-checked, PAYE-employed, uniformed, and trained on natural stone, hardwood,
                  brass, slate, and traditional plasterwork. Specialists stay 4.2 years on average.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Client retention</div>
                  <div className="text-xs font-bold text-[var(--ink)]">98%</div>
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
              Why Maundy Clean is Scotland&apos;s Authority in Cottage Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While many cleaning companies operate as impersonal booking platforms, Maundy Clean
              is a local specialist focused on building high-trust relationships. We provide a
              personal, reliable service tailored to the realities of Scottish cottage living —
              from rural dust and stove soot to private water supplies and septic tanks.
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

        {/* Last two cards as full-width strips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRUST_CARDS.slice(2).map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
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
// Section 3 — 3-Step "Hassle-Free" Booking Process
// (Semantic H2: "Our 3-Step 'Hassle-Free' Booking Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant 30-Second Quote",
    description:
      "Use our online price calculator to tell us about your cottage — property type, bedrooms, bathrooms, frequency — and receive a simple, fixed-price quote based on your cottage size in under a minute. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We match your property with a local professional who fits your schedule and understands cottage living. Your dedicated specialist is briefed on your priority zones and any original features before the first visit. If you are not home, we operate a secure key safe system to protect your property.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Spotless Sanctuary",
    description:
      "Walk into a space that looks, smells, and feels fresh — backed by our Maundy Clean satisfaction guarantee. Your specialist follows a personalised, agency-approved checklist, ensuring your cottage is treated with our 5-star standard every visit. Adjust the checklist anytime from your phone.",
  },
];

export function CottageSeoBooking() {
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
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our 3-Step &ldquo;Hassle-Free&rdquo; Booking Process
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimised our system to be uncomplicated and straightforward. From quote to
            first clean in under 48 hours, with the same cottage specialist every visit.
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
              Get an Instant Quote Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 — Detailed What's Included (4 categories)
// (Semantic H2: "Our Comprehensive Recurring Cleaning Checklist")
// Image-per-card layout
// ============================================================

const INCLUDED_DETAIL = [
  {
    icon: Home,
    title: "Living Areas & Bedrooms",
    image: IMG.checklistLiving,
    imageAlt: "Spotless cottage living room maintained by Maundy Clean recurring service",
    description:
      "Meticulous dusting of all surfaces, including fixtures, fittings, and ornaments. We polish wood, glass, and mirrors to a streak-free shine. Door frames, handles, and visible skirting boards are cleaned during every visit, and cobwebs are removed from ceiling edges and light fixtures — essential for properties with traditional high ceilings or beams.",
    points: [
      "Dust & polish all surfaces and ornaments",
      "Polish wood, glass, and mirrors streak-free",
      "Clean door frames, handles, and skirting boards",
      "Remove cobwebs from ceiling edges and beams",
      "Intensive vacuum of carpets and upholstery",
    ],
  },
  {
    icon: SprayCan,
    title: "Kitchen & Bathroom Hygiene",
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean technician wiping down a cottage kitchen with eco-friendly spray",
    description:
      "Deep sanitation of worktops, splashbacks, and ceramic items. Professional buffing of chrome taps and fixtures to remove water spots and limescale — particularly important in cottages on private water supplies. We wipe down the exterior of your oven, hob, fridge, and microwave as part of our regular routine, with no add-on fees.",
    points: [
      "Disinfect worktops, splashbacks, and ceramics",
      "Buff chrome taps and remove limescale",
      "Clean appliance exteriors (oven, hob, fridge)",
      "Descale toilets and shower heads",
      "Scrub shower doors streak-free",
    ],
  },
  {
    icon: Sparkles,
    title: "Window Interiors — The Cottage Extra",
    image: IMG.checklistWindows,
    imageAlt: "Professional cleaner using a squeegee on the interior of cottage window glass",
    description:
      "Unlike many standard services, we include the cleaning of the inside of your windows as part of our regular routine to maximise natural light. Streak-free, chemical-free, and finished with a squeegee — the difference is immediately visible when the Scottish sun comes through. For coastal cottages, more frequent interior window cleaning helps stop salt etching the glass.",
    points: [
      "Interior window glass cleaned",
      "Window sills wiped down",
      "Window tracks vacuumed",
      "Streak-free squeegee finish",
      "Frames and handles wiped",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Floor Care & Cottage Specifics",
    image: IMG.checklistRural,
    imageAlt: "Coastal cottage living room showing traditional flooring and rural character",
    description:
      "Intensive vacuuming of all carpets and upholstery, followed by mopping and sanitizing of hard floors. For cottages, we pay particular attention to traditional flooring — pH-neutral cleaner on natural stone, tack-cloth and oil on hardwood, gentle scrub on slate hearths. Boot room and porch areas get extra attention to manage rural mud and pet hair.",
    points: [
      "Intensive carpet vacuuming edge-to-edge",
      "Mop and sanitize all hard floors",
      "pH-neutral care for natural stone",
      "Tack-cloth and oil for hardwood",
      "Boot room and porch mud management",
    ],
  },
];

export function CottageSeoIncludedDetail() {
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
            What&apos;s included · the detail
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Recurring Cleaning Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our regular house cleaning ensures your cottage is maintained from top to bottom. We
            follow a rigorous, agency-approved checklist to ensure no detail is overlooked,
            focusing on the areas often missed by standard services — and on the cottage-specific
            extras that matter most for Scottish rural homes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INCLUDED_DETAIL.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/30 transition-all flex flex-col"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] bg-[var(--brand-dark)] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-lg text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-auto">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-[var(--ink)]/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
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
// Section 5 — Specialized Solutions for Every Stage
// (H2: "Specialized Solutions for Every Stage")
// Image-topped cards with internal links
// ============================================================

const STAGE_SOLUTIONS = [
  {
    icon: KeyRound,
    title: "Starting Your Service — Deep Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.stageDeep,
    imageAlt: "Empty Scottish cottage being deep cleaned before a recurring schedule begins",
    description:
      "If your cottage hasn't had a professional clean in 6 months, we recommend an initial Deep Cleaning Service to clean behind and underneath furniture before your regular schedule begins. This sets a clean baseline so your recurring specialist can maintain — rather than chase — the standard. Full 64-point checklist, appliance interiors, inside cabinets, and skirting board detail.",
    cta: "Explore deep cleaning service",
  },
  {
    icon: Home,
    title: "Holiday Let Management — Airbnb Turnover",
    href: "/services/holiday-let-turnover",
    image: IMG.stageAirbnb,
    imageAlt: "Bright, guest-ready Scottish holiday-let cottage after a Maundy Clean turnover",
    description:
      "For owners of short-term rentals, our Holiday Let Turnover service ensures your cottage is guest-ready to a 5-star standard. Full property clean, linen change, towel change, welcome hamper restock, guest book check, heating check, and key safe coordination — every changeover, on schedule. The same attention to detail, scaled to your letting calendar.",
    cta: "Explore holiday let turnover",
  },
  {
    icon: Sparkles,
    title: "Seasonal Resets — One-Off Spring Clean",
    href: "/services/spring-cleaning",
    image: IMG.stageSpring,
    imageAlt: "Spring-cleaned Scottish cottage living room refreshed top-to-bottom",
    description:
      "Book a One-Off Spring Clean for a comprehensive top-to-bottom refresh of your cottage and outbuildings. The perfect seasonal reset — particularly valuable after a long Highland winter of wood-burner soot, mud, and condensation. Includes paint-spot removal, deep-clean of kitchen and bathroom, fresh oil on hardwood floors, and a thorough dust of high beams and cornicing.",
    cta: "Book a one-off spring clean",
  },
  {
    icon: Brush,
    title: "Fabric & Appliance Care — Add-Ons",
    href: "/services/carpet-rug-cleaning",
    image: IMG.stageCarpet,
    imageAlt: "Cottage carpet and soft furnishings being deep cleaned by Maundy Clean",
    description:
      "Add a Deep Oven Clean or Carpet Cleaning to your regular schedule to remove deep-seated grime and odours. Hot-water extraction for cottage carpets and rugs — essential for soot removal and pet hair. Specialist oven cleaning for Agas, range cookers, and standard ovens — non-caustic, fume-free, and finished to a showroom standard. Build the add-ons into your recurring plan or book as a one-off.",
    cta: "Explore carpet & rug cleaning",
  },
];

export function CottageSeoInterlinking() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Beyond recurring · milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Specialized Solutions for Every Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            While our recurring home cleaning maintains your daily environment, we offer specialized
            support for major property milestones — so the same trusted specialist can step up
            when life changes. From a deep clean before you start, to holiday-let turnovers,
            seasonal resets, and fabric and appliance add-ons, every service is delivered to the
            same Maundy Clean standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGE_SOLUTIONS.map((sol, i) => {
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
                    <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-base text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
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
// Section 6 — SEO FAQ (Schema-ready Q&A)
// (H2: "Frequently Asked Questions")
// ============================================================

const SEO_FAQS = [
  {
    q: "Do I need to provide cleaning equipment?",
    a: "No. Maundy Clean supplies all of our own professional-grade equipment and eco-friendly products, which are included in your competitive price. We arrive with HEPA-filtered vacuums, microfibre systems, specialist sash-window track kits, horsehair brushes for cornicing, pH-neutral cleaners for natural stone, and EU Ecolabel low-VOC products throughout. For cottages on a septic tank or private water supply, we switch to septic-safe formulations as standard — you never need to buy, store, or supply anything.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. At Maundy Clean, we let the quality of our work speak for itself. You are never tied into a long-term contract for your regular cottage cleaning. Our recurring plans run week-to-week, fortnight-to-fortnight, or month-to-month — you can pause, reschedule, or cancel with a single message to your account manager. We earn your loyalty every visit, not with paperwork.",
  },
  {
    q: "What happens if I'm not satisfied?",
    a: "We take pride in our standards. If you are not 100% happy with your clean, contact us within 24 hours and we will provide a free re-clean to make it right — no quibbles, no awkward conversations, no charge. Our re-clean rate sits at just 1.2% of visits, and we use every re-clean as a coaching opportunity for the specialist so the issue never recurs. Your satisfaction is the whole point of the service.",
  },
  {
    q: "Can you care for traditional cottage materials — natural stone, hardwood, brass, and chrome?",
    a: "Yes — this is one of our specialities. Our specialists are trained to use the correct chemistry for each surface. Natural stone floors (flagstone, sandstone, slate) are cleaned with pH-neutral cleaner, never acid or alkaline. Hardwood and pitch-pine floors are tack-clothed to lift dry dust and replenished with a thin coat of Danish or linseed oil — never wet-mopped, which raises the grain. Brass and chrome fixtures are buffed with specialist metal polish, and we never use abrasive pads on plated finishes. Your cottage's original features are preserved, not worn away.",
  },
  {
    q: "How do you handle rural dust and seasonal cleaning adjustments?",
    a: "Rural dust is a real issue for Scottish cottages — fine particulate from farms, tracks, and pollen that works into every surface. We tackle it with HEPA-filtered vacuums, microfibre systems that capture rather than redistribute dust, and a top-down cleaning protocol (ceilings and high surfaces first, floors last). We also adjust your schedule seasonally: more frequent visits in winter when mud and wood-burner soot are worse, less frequent in summer. Your specialist will flag seasonal issues — a blocked gutter, a wasp nest, salt build-up on a window — before they become problems.",
  },
  {
    q: "Do you include the inside of windows as part of the regular clean?",
    a: "Yes. Unlike many standard services, we include the cleaning of the inside of your windows as part of our regular routine — at no extra charge. Streak-free, chemical-free, and finished with a squeegee. For coastal cottages, more frequent interior window cleaning helps stop salt etching the glass over time. Exterior window cleaning is available as an add-on using our pure-water reach-and-wash system, which is particularly valuable for cottages with hard-to-reach upper floors or dormer windows.",
  },
];

export function CottageSeoFaq() {
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
            Cottage cleaning · FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our cottage clients ask most often. Can&apos;t find
            what you need? Call us on{" "}
            <a
              href={contactInfo.phoneHref}
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4"
            >
              {contactInfo.phone}
            </a>{" "}
            and we&apos;ll talk it through.
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
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — "Near Me" Location Internal Links
// (H2: "Cottage Cleaning Near Me in Scotland")
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
  { city: "Paisley", slug: "paisley" },
  { city: "Ayr", slug: "ayr" },
  { city: "Kilmarnock", slug: "kilmarnock" },
  { city: "Livingston", slug: "livingston" },
  { city: "East Kilbride", slug: "east-kilbride" },
  { city: "Hamilton", slug: "hamilton" },
  { city: "Motherwell", slug: "motherwell" },
  { city: "Dunfermline", slug: "dunfermline" },
  { city: "Kirkcaldy", slug: "kirkcaldy" },
  { city: "St Andrews", slug: "st-andrews" },
  { city: "Oban", slug: "oban" },
  { city: "Fort William", slug: "fort-william" },
  { city: "Aviemore", slug: "aviemore" },
  { city: "Elgin", slug: "elgin" },
  { city: "Peterhead", slug: "peterhead" },
  { city: "Stonehaven", slug: "stonehaven" },
  { city: "Inverurie", slug: "inverurie" },
  { city: "Dumfries", slug: "dumfries" },
  { city: "Stranraer", slug: "stranraer" },
  { city: "Wick", slug: "wick" },
  { city: "Thurso", slug: "thurso" },
  { city: "Lerwick", slug: "lerwick" },
  { city: "Kirkwall", slug: "kirkwall" },
  { city: "Portree", slug: "portree" },
  { city: "Stornoway", slug: "stornoway" },
  { city: "Peebles", slug: "peebles" },
  { city: "Galashiels", slug: "galashiels" },
  { city: "Ballater", slug: "ballater" },
];

export function CottageSeoNearMe() {
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
              Local cottage specialists across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Cottage Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;cottage cleaning near me&rdquo; in Scotland? Maundy Clean covers
              72+ towns and villages across the Central Belt, Highlands, Borders, and Islands —
              from Highland stone sanctuaries to coastal Fife retreats, Argyll sea-loch cottages to
              Borders farmhouses. Same PVG-checked standard, same 100% re-clean guarantee, same
              dedicated cottage specialist every visit — wherever your retreat is. Find your local
              crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean cottage cleaning coverage areas"
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
                  Same PVG-checked specialists, same dedicated crew every visit, same 100% re-clean
                  guarantee — from Glasgow to Lerwick, Aberdeen to Portree.
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
                Find your local cottage specialist
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
                      <span className="text-[var(--muted-foreground)]"> cottage</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don&apos;t see your village? We add new postcodes every month.</span>
              </div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
              >
                View all 72 Scottish locations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Long-form paragraph for "near me" search intent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Our local cottage specialists operate across the Highland villages of Aviemore,
            Ballater, Inverurie, and Inverness; the coastal retreats of Fife, Argyll, Aberdeenshire,
            and Ayrshire; the Borders farmhouses around Peebles, Galashiels, and Melrose; and the
            Islands from Portree to Stornoway, Lerwick to Kirkwall &mdash; from Oban to Thurso, Fort
            William to Dunbar. Whether you&apos;re searching for recurring cottage cleaning in
            Perth, holiday-let turnover in St Andrews, wood-burner soot management in Aviemore, or
            coastal cottage maintenance in Ayr, Maundy Clean assigns a PVG-checked, PAYE-employed
            specialist who stays with you for the long run. Same specialist, same day, same
            locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — Final CTA strip (companion to ServiceFinalCta)
// (H3: "Ready to Refresh Your Cottage?")
// ============================================================

export function CottageSeoFinalCta() {
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
            Ready to refresh your cottage?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Refresh Your Cottage?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price cottage cleaning quote in 30 seconds. No pushy sales call, no waiting
            24 hours for a callback. PVG-checked specialists, original-feature care (natural stone,
            hardwood, brass, chrome), septic-safe and pet-safe products, and a 100% re-clean
            guarantee — recurring cottage plans from £20/hr, one-off specialist cleans from £145.
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
              <a href={contactInfo.phoneHref}>
                <Zap className="w-4 h-4" />
                {contactInfo.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

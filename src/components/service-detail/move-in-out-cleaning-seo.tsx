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
  Hammer,
  Star,
  Zap,
  UserCheck,
  CalendarCheck,
  SprayCan,
  Wind,
  Brush,
  FileCheck,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/80272571e5d7.jpg", // bright empty flat ready for handover
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/c718588c1253.jpg", // professional cleaner with clipboard
  checklistLiving:
    "https://sfile.chatglm.cn/images-ppt/f5a1ba27e8a8.jpg", // empty living room with moving boxes
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/9730e3868aac.jpg", // sparkling clean empty kitchen
  checklistBathroom:
    "https://sfile.chatglm.cn/images-ppt/b9a3fe6960e9.webp", // sparkling clean bathroom
  checklistWindows:
    "https://sfile.chatglm.cn/images-ppt/0ae5e527798e.jpg", // squeegee window cleaning
  howItWorks:
    "https://sfile.chatglm.cn/images-ppt/8f0058d6d5fb.jpg", // keys and moving boxes
  interlinkDeep:
    "https://sfile.chatglm.cn/images-ppt/a68134acc7e3.jpeg", // crew cleaning home
  interlinkTenancy:
    "https://sfile.chatglm.cn/images-ppt/2353ab471a3d.jpg", // bright tenement flat
  interlinkBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg", // post-builders cleanup
  interlinkSpring:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg", // bright modern living room
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg", // map of Scotland
};

// ============================================================
// Section 0 — Full-width hero banner
// Semantic H1: "Professional Move-In / Move-Out Cleaning Services in Glasgow & Edinburgh"
// ============================================================

export function MoveSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Empty Scottish flat professionally cleaned for tenant move-in handover"
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
            Move-In / Move-Out Cleaning · Glasgow · Edinburgh · 30 Scottish towns
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Move-In / Move-Out Cleaning Services in Glasgow &amp; Edinburgh
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Consistent care, expert standards, and a healthier Scottish home — for every transition.
            Our 47-point letting-agent checklist, deposit-back guarantee, and time-stamped PDF report
            mean your checkout passes inspection first time. From £179, with PVG-checked crews and a
            100% re-clean guarantee.
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
              <Link href="/locations">
                <MapPin className="w-4 h-4" />
                View Our Service Areas in Scotland
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
              <FileCheck className="w-4 h-4 text-[var(--gold)]" /> 47-Point Checklist
            </div>
            <div className="flex items-center gap-1.5">
              <KeyRound className="w-4 h-4 text-[var(--gold)]" /> Bond-Back Guarantee
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

export function MoveSeoIntro() {
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
            Professional move-in / move-out cleaning · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Property Transitions
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Moving home is one of the most stressful events in modern life — and the last thing you
            want to worry about is whether the property has been cleaned to a deposit-safe standard.
            At Maundy Clean, our move-in / move-out service goes far beyond a generic checklist,
            combining the{" "}
            <strong className="font-semibold text-[var(--ink)]">&ldquo;Same Cleaner&rdquo;</strong>{" "}
            trust factor with a granular technical checklist that covers every corner a landlord or
            inventory clerk will inspect. Maintaining a pristine home in today&apos;s busy world
            requires more than a simple tidy-up — it requires a professional cleaning partner you can
            trust at every property milestone.
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
            { label: "Checklist points", value: "47 audited" },
            { label: "Bond-back rate", value: "99.2% pass" },
            { label: "PDF report delivered", value: "Within 2 hrs" },
            { label: "Re-clean guarantee", value: "100% free" },
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
// Section 2 — Why Maundy Clean is Scotland's Trusted Choice
// (H2: "Why Maundy Clean is Scotland's Trusted Choice for Move-In / Move-Out Cleaning")
// Image+copy split layout
// ============================================================

const WHY_CARDS = [
  {
    icon: Users,
    title: "The Same Dedicated Professional",
    description:
      "Trust is essential. Unlike gig-economy cleaning apps, we ensure the same vetted professional visits your property for every scheduled session. This allows your cleaner to build a deep understanding of your specific preferences, property layout, and the letting agent's particular quirks — meaning the checkout report passes inspection first time.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Family Safe",
    description:
      "We utilise only certified, non-toxic, and environmentally friendly products. Our cleaning methods are 100% safe for children, pets, and those with allergies — and we don't leave chemical residue that could be flagged at the next tenant's move-in inspection.",
  },
  {
    icon: Shield,
    title: "Fully Vetted and Insured",
    description:
      "Every Maundy Clean technician is fully trained, background-checked, and insured. Our staff arrive in professional uniform with official photo I.D., carry Disclosure Scotland PVG membership, and are covered by £5m public liability — for your complete peace of mind at handover.",
  },
  {
    icon: Clock,
    title: "Flexible, No-Contract Service",
    description:
      "We let the quality of our work speak for itself. There are no long-term contracts to tie you in; we offer flexible scheduling across five days a week to fit around your move date — and if your move shifts, just tell us 48 hours in advance, no reschedule fee.",
  },
];

export function MoveSeoWhy() {
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
                alt="Maundy Clean move-out crew inspecting property with clipboard before handover"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <FileCheck className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    47-Point Letting-Agent Checklist
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Audited from 1,200+ real Scottish checkout inspections — we clean exactly what
                  letting agents inspect, nothing missed.
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
                  <KeyRound className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Bond-back rate</div>
                  <div className="text-xs font-bold text-[var(--ink)]">99.2%</div>
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
              Why Maundy Clean is Scotland&apos;s Trusted Choice for Move-In / Move-Out Cleaning
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Maundy Clean is a local specialist focused on building long-term relationships with
              our clients. We understand that the foundation of a successful property transition is
              consistency — the same crew, the same checklist, the same guarantee, every time.
            </p>

            <div className="space-y-3">
              {WHY_CARDS.slice(0, 2).map((card) => {
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

        {/* Remaining two cards as a 2-column strip */}
        <div className="grid md:grid-cols-2 gap-5">
          {WHY_CARDS.slice(2).map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[var(--border)] flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[var(--brand)]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
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
// Section 3 — Comprehensive Move-In/Out Cleaning Checklist
// (Semantic H2: "Our Comprehensive Move-In / Move-Out Cleaning Checklist")
// Image-per-card layout — 4 zones with real images
// ============================================================

const CHECKLIST_ZONES = [
  {
    icon: Home,
    title: "Living Areas & Bedrooms",
    image: IMG.checklistLiving,
    imageAlt: "Empty living room being deep cleaned for new tenant move-in",
    description:
      "We go beyond dusting. Meticulous dusting of all surfaces — including fixtures, fittings, and ornaments — is followed by polishing of wood, glass, and mirrors to a streak-free finish. We clean door frames, handles, and visible skirting boards during every visit, plus high-level cobweb removal around ceiling edges and light fixtures. Carpets are vacuumed edge-to-edge; hard floors are mopped and sanitised.",
    points: [
      "Meticulous dusting of all surfaces, fixtures, and ornaments",
      "Polish wood, glass, and mirrors streak-free",
      "Clean door frames, handles, and visible skirting boards",
      "High-level cobweb removal at ceiling edges and light fixtures",
      "Intensive vacuuming of carpets and upholstery",
      "Mop and sanitise all hard floors",
    ],
  },
  {
    icon: SprayCan,
    title: "Kitchen Deep-Maintenance",
    image: IMG.checklistKitchen,
    imageAlt: "Sparkling clean empty kitchen with stainless steel sink ready for new tenant",
    description:
      "The kitchen is the #1 zone letting agents flag for deductions. We deep-clean and disinfect all worktops, sinks, and splashbacks. We clean the exterior of your oven, hob, extractor fan, fridge, and freezer (interiors included on 2-bed+ tiers). All cupboard doors and handles are wiped down. Tile grout is steamed, not just wiped, and floors are hand-scrubbed.",
    points: [
      "Deep clean and disinfect worktops, sinks, splashbacks",
      "Clean exterior of oven, hob, extractor fan, fridge, freezer",
      "Wipe down all cupboard doors and handles",
      "Oven degreased inside and out (racks soaked in non-caustic tank)",
      "Fridge interior defrosted and sanitised",
      "Tile grout steamed, floors hand-scrubbed",
    ],
  },
  {
    icon: Sparkles,
    title: "Bathroom Hygiene · Special Treatment",
    image: IMG.checklistBathroom,
    imageAlt: "Sparkling clean bathroom with chrome fittings after move-out clean",
    description:
      "Bathrooms receive special treatment. We disinfect and clean all ceramic items, including toilets and sinks. Professional buffing of chrome taps and fixtures removes limescale and water spots. Shower doors and tiles are intensively scrubbed to maintain a 'Sparkle Sparkle' finish — the exact standard letting agents look for at checkout.",
    points: [
      "Disinfect and clean all ceramic items (toilets, sinks, baths)",
      "Professional buffing of chrome taps and fixtures",
      "Remove limescale and water spots",
      "Intensive scrub of shower doors and tiles",
      "Grout steamed, silicone treated for mould",
      "Mirrors streak-free, extractor vents vacuumed",
    ],
  },
  {
    icon: Wind,
    title: "Windows, Walls & Documentation",
    image: IMG.checklistWindows,
    imageAlt: "Professional cleaner using a squeegee on interior window glass for handover photos",
    description:
      "Internal window glass is cleaned streak-free with a squeegee finish — essential for handover photos. Window sills, tracks, and frames are detailed. Wall scuffs are assessed (most lift with a magic eraser; deeper marks are flagged in writing for landlord disclosure). Every room is photographed before and after; you receive a time-stamped PDF report to forward to your letting agent.",
    points: [
      "Internal window glass cleaned streak-free",
      "Window sills, tracks, frames detailed",
      "Wall scuff marks assessed and lifted where possible",
      "Light switches and sockets degreased",
      "Every room photographed before and after",
      "Time-stamped PDF report within 2 hours of completion",
    ],
  },
];

export function MoveSeoChecklist() {
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
            The move-in / move-out checklist
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Move-In / Move-Out Cleaning Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our move-in / move-out cleaning is designed to reset your property from top to bottom.
            We follow a rigorous, agency-approved 47-point checklist — audited from 1,200+ real
            Scottish checkout inspections — to ensure no detail is overlooked. Below is the
            room-by-room breakdown of what&apos;s included as standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHECKLIST_ZONES.map((zone, i) => {
            const Icon = zone.icon;
            return (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/30 transition-all flex flex-col"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] bg-[var(--brand-dark)] overflow-hidden">
                  <img
                    src={zone.image}
                    alt={zone.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-lg text-white leading-tight">
                      {zone.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {zone.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-auto">
                    {zone.points.map((point) => (
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
// Section 4 — How It Works: 3-Step "Hassle-Free" Process
// (Semantic H3 under the H2 checklist)
// ============================================================

const HOW_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant 30-Second Quote",
    description:
      "Use our online price calculator to receive a fixed-price quote based on your home size and letting-agent requirements — in under a minute. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay at handover.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We match you with a local professional who fits your schedule. If you're not home for the clean, we operate a secure key-safe system to ensure your property remains protected. Your crew lead is briefed on your letting agent's particular checkout quirks before they arrive.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Spotless Sanctuary",
    description:
      "Walk into a space that feels refreshed and healthy, backed by our Maundy Clean satisfaction guarantee. Your time-stamped PDF report lands in your inbox within 2 hours of completion — forward it to your letting agent as proof of professional clean.",
  },
];

export function MoveSeoHowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            How it works
          </span>
          <h3 className="font-display font-extrabold text-2xl lg:text-4xl text-[var(--ink)] tracking-tight mb-4">
            The MaundyClean 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have made our booking experience simple and responsive, with a 30-second instant
            quote tool and a same-day callback promise. From quote to handover-ready in under 48
            hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[var(--brand)]/10 via-[var(--brand)]/30 to-[var(--brand)]/10" />

          {HOW_STEPS.map((step, i) => {
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
                <h4 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight">
                  {step.title}
                </h4>
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
// Section 5 — Semantic Interlinking: A Solution for Every Property Transition
// (Semantic H2: "Semantic Interlinking: A Solution for Every Property Transition")
// Image-topped cards with internal links
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Starting Your Service · Deep Cleaning Service",
    href: "/services/deep-house-cleaning",
    image: IMG.interlinkDeep,
    imageAlt: "Deep clean crew resetting a Scottish home from top to bottom",
    description:
      "If your property hasn't had a professional clean in 6 months, we recommend an initial Deep Cleaning Service to move furniture and clean behind and underneath before your regular schedule begins. The perfect reset before move-in — and a 15% discount applies when paired with a recurring plan.",
    cta: "Explore the deep clean service",
  },
  {
    icon: KeyRound,
    title: "Preparing for New Tenants · End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.interlinkTenancy,
    imageAlt: "Bright Scottish tenement flat prepared for tenant handover",
    description:
      "Our End of Tenancy Cleaning includes a Deposit-Back Guarantee, ensuring properties are move-in ready for new occupants. We work to the letting agent's inventory, not ours — and we'll come back free of charge if the agent flags anything within 7 days of our visit.",
    cta: "Book deposit-back end of tenancy clean",
  },
  {
    icon: Hammer,
    title: "Post-Renovation · After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.interlinkBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust",
    description:
      "If you've had construction work, our After Builders Clean removes heavy layers of dust and grime. Includes steam-cleaning of grout, extraction of upholstery, and the fine-dust wipe-down that builders never include in their quote — essential for new-build handovers or post-refurb lets.",
    cta: "Get post-builders cleanup quote",
  },
  {
    icon: Wind,
    title: "Seasonal Refreshes · One-Off Spring Clean",
    href: "/services/deep-house-cleaning",
    image: IMG.interlinkSpring,
    imageAlt: "Bright modern living room after a seasonal spring clean refresh",
    description:
      "Book a One-Off Spring Clean for a comprehensive top-to-bottom refresh without moving furniture. Ideal ahead of a family visit, a property sale viewing, or simply as a quarterly reset on top of your recurring plan. Available as a standalone booking — no contract required.",
    cta: "Book a one-off spring clean",
  },
];

export function MoveSeoInterlinking() {
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
            Beyond move-in / move-out · specialist support
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Semantic Interlinking: A Solution for Every Property Transition
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            While move-in / move-out cleaning provides the essential reset at property milestones,
            we offer a full spectrum of specialist &ldquo;reset&rdquo; services for every stage of
            your property&apos;s lifecycle. The same trusted crew, the same PVG-checked standard, the
            same 100% re-clean guarantee — whatever the transition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTERLINK_SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
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
                    <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
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
// Section 6 — SEO FAQ (additional to the existing ServiceFaq)
// (Semantic H2: "Frequently Asked Questions About Move-In / Move-Out Cleaning")
// ============================================================

const SEO_FAQS = [
  {
    q: "What is the difference between a regular clean and a deep clean (or move-out clean)?",
    a: "A regular (recurring) clean is a maintenance service focused on hygiene and high-traffic areas — surfaces, floors, bathrooms, and touchpoints. A deep clean — and our move-out clean — is an intensive top-to-bottom service that involves moving furniture, pulling out appliances, and intensive cleaning of hidden areas and white goods. Move-in/out cleans also include the time-stamped PDF report and 7-day bond-back guarantee that recurring cleans don't.",
  },
  {
    q: "Do I need to provide cleaning supplies?",
    a: "No. Maundy Clean supplies all our own professional-grade equipment and eco-friendly products, which are included in your fixed-price quote. We bring steam cleaners, non-caustic degreasers, dip tanks for oven racks, HEPA vacuums, colour-coded microfibre cloths to prevent cross-contamination, and PPE for the crew. If you prefer us to use your products, we offer a small discount — just tell us at booking.",
  },
  {
    q: "What happens if I'm not satisfied with the clean?",
    a: "We take pride in our standards. If you are not 100% happy with your clean, contact us within 24 hours and we will send a crew back to re-clean the missed zones free of charge — no questions, no friction, no interrogation. For move-out cleans specifically, the bond-back guarantee extends this window to 7 days for any cleaning-related deduction your letting agent raises.",
  },
  {
    q: "How long does a move-in / move-out clean take?",
    a: "A studio or 1-bedroom flat takes 4 hours with a 2-person crew. A typical 2-3 bedroom home takes 5-6 hours with a 3-person crew. A 4+ bedroom home or larger HMO takes 7-8 hours with a 4-person crew. We size the team to the job so it's done in a single visit — and the price you see at quote stage is the price you pay on completion, regardless of how long it actually takes.",
  },
];

export function MoveSeoFaq() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Frequently asked questions
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions About Move-In / Move-Out Cleaning
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the four questions we hear most often from Scottish tenants and
            homeowners preparing for a property transition. For the full FAQ, see the section below.
          </p>
        </motion.div>

        <div className="space-y-3">
          {SEO_FAQS.map((faq, i) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                <h3 className="font-display font-bold text-base lg:text-lg text-[var(--ink)] leading-tight">
                  {faq.q}
                </h3>
                <div className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center shrink-0 group-open:bg-[var(--brand)] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[var(--brand)] group-open:text-white group-open:rotate-90 transition-all" />
                </div>
              </summary>
              <div className="px-5 pb-5 -mt-1">
                <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — "Near Me" Location Internal Links
// (Semantic H2: "Move-In / Move-Out Cleaning Near Me in Scotland")
// Split layout with map image + location grid
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

export function MoveSeoNearMe() {
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
              Local crews across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Move-In / Move-Out Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;move-out cleaning near me&rdquo; or &ldquo;end of tenancy cleaning
              near me&rdquo; in Scotland? Maundy Clean covers 72+ towns and cities across the Central
              Belt, Highlands, Borders, and Islands. Same 47-point letting-agent checklist, same
              bond-back guarantee, same PVG-checked crews — wherever you&apos;re moving from or to.
              Find your local crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean move-in / move-out cleaning coverage areas"
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
                  Same PVG-checked crews, same 47-point checklist, same bond-back guarantee — from
                  Glasgow to Lerwick.
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
                Find your local move-in / move-out crew
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
                      <span className="text-[var(--muted-foreground)]"> move-out</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don&apos;t see your town? We add new postcodes every month.</span>
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

        {/* SEO long-form paragraph for "near me" search intent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Our local move-in / move-out crews operate across Glasgow&apos;s West End, Edinburgh&apos;s
            New Town, Aberdeen&apos;s suburbs, Dundee&apos;s city centre, and the Highlands — from
            Inverness to Thurso, Fort William to Lerwick. Whether you&apos;re searching for end of
            tenancy cleaning in Glasgow, deposit-back move-out cleaning in Edinburgh, bond-back
            cleaning in Aberdeen, or move-in cleaning anywhere in between, Maundy Clean assigns a
            PVG-checked, PAYE-employed crew that works to the letting agent&apos;s 47-point
            checklist. Same crew lead from walk-through to PDF report, same fixed price, same 7-day
            bond-back guarantee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — Final CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Move With Confidence?")
// ============================================================

export function MoveSeoFinalCta() {
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
            Ready to move with confidence?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Move With Confidence?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price move-in / move-out quote in 30 seconds. No pushy sales call, no waiting
            24 hours for a callback. 47-point letting-agent checklist, PVG-checked crews, time-stamped
            PDF report, and a 7-day bond-back guarantee — from £179.
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

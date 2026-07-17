"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Crown,
  Hammer,
  UserCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Building2,
  Leaf,
  KeyRound,
  Home,
  Droplets,
  SprayCan,
  Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (Glass-partition-specific imagery, drawn from the existing
// glass-partition gallery plus the dedicated glass hero image)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistInternal:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  checklistHighReach:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.12.26%20PM.jpeg",
  checklistDetails:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseAntiviral:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
// (city-centre + neighbourhood coverage across Scotland)
// ============================================================
const NEAR_ME_LOCATIONS: { city: string; slug: string }[] = [
  { city: "Glasgow", slug: "glasgow" },
  { city: "Edinburgh", slug: "edinburgh" },
  { city: "Aberdeen", slug: "aberdeen" },
  { city: "Dundee", slug: "dundee" },
  { city: "Stirling", slug: "stirling" },
  { city: "Inverness", slug: "inverness" },
  { city: "Perth", slug: "perth" },
  { city: "Falkirk", slug: "falkirk" },
  { city: "Paisley", slug: "paisley" },
  { city: "East Kilbride", slug: "east-kilbride" },
  { city: "Livingston", slug: "livingston" },
  { city: "Hamilton", slug: "hamilton" },
  { city: "Ayr", slug: "ayr" },
  { city: "Kilmarnock", slug: "kilmarnock" },
  { city: "Greenock", slug: "greenock" },
  { city: "Coatbridge", slug: "coatbridge" },
  { city: "Airdrie", slug: "airdrie" },
  { city: "Motherwell", slug: "motherwell" },
  { city: "Wishaw", slug: "wishaw" },
  { city: "Dunfermline", slug: "dunfermline" },
  { city: "Kirkcaldy", slug: "kirkcaldy" },
  { city: "Glenrothes", slug: "glenrothes" },
  { city: "Dundonald", slug: "dundonald" },
  { city: "Bearsden", slug: "bearsden" },
  { city: "Milngavie", slug: "milngavie" },
  { city: "Bishopbriggs", slug: "bishopbriggs" },
  { city: "Lenzie", slug: "lenzie" },
  { city: "Giffnock", slug: "giffnock" },
  { city: "Newton Mearns", slug: "newton-mearns" },
  { city: "Clarkston", slug: "clarkston" },
  { city: "Barrhead", slug: "barrhead" },
  { city: "Johnstone", slug: "johnstone" },
  { city: "Renfrew", slug: "renfrew" },
  { city: "Rutherglen", slug: "rutherglen" },
  { city: "Cambuslang", slug: "cambuslang" },
  { city: "Bellshill", slug: "bellshill" },
];

// ============================================================
// Section 0 - Full-width hero banner
// Semantic H1: "Professional Glass Partition & Internal Glazing Cleaning Scotland"
// ============================================================

export function GlassPartitionCleaningSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean glass partition cleaning specialist squeegeeing a frameless internal glass partition to a streak-free crystal-clear finish in a Scottish commercial office"
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
            Glass Partition &amp; Internal Glazing Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Glass Partition &amp; Internal Glazing Cleaning Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Streak-Free Precision, Technical Glass Restoration, and the
            Maundy Tradition of Excellence for Scottish Workspaces.
            MaundyClean brings vetted glazing specialists, pure-water
            de-ionised systems, Reach-and-Wash telescopic poles, Rope
            Access and Mobile Platform teams, squeegee-buff finishing,
            frame and track detailing, mirror restoration, fascia and
            gutter refresh, ISO 14001 environmental compliance, and a
            &ldquo;speechlessly spotless&rdquo; finish to every internal
            partition we serve &mdash; from Glasgow IFSD corporate towers
            and Edinburgh New Town hotel screens to Aberdeen office
            receptions and Dundee retail atria.
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
                Request Your Bespoke Glass Quote Today
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
                View Our Commercial Cleaning Checklist
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
              <span className="text-white/70">&middot; 6,200+ reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> Fully Insured &amp; PVG-Checked
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Glazing Crew Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Pure-Water Streak-Free Finish
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 - Long-form semantic SEO intro
// Sits right after the hero, before the existing ServiceOverview.
// Split-layout with aspect-[4/3] image on the left and the
// verbatim intro paragraphs on the right. Paragraph 2 contains
// TWO inline <Link>s: /services/move-in-out-cleaning for
// "End of Tenancy Cleaning" and /services/deep-house-cleaning
// for "Deep Cleaning Services". The brief gives two intro
// paragraphs (p1 + p2-with-two-links).
// ============================================================

export function GlassPartitionCleaningSeoIntro() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
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
                src={IMG.introSplit}
                alt="Maundy Clean glass partition cleaning specialist applying pure-water squeegee technique to a frameless internal glass partition in a Scottish commercial office"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Motivated Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy, &ldquo;same-staff&rdquo; consistency, and
                  &ldquo;showcase&rdquo; care we bring to Scotland&rsquo;s finest properties
                  &mdash; applied to your office partitions, hotel screens, retail balustrades,
                  mirror walls, and high-reach internal glazing.
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
                  <ShieldCheck className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m</div>
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
              Glass partition &amp; internal glazing cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Internal Glazing
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In modern architectural design across Glasgow, Edinburgh, and
              the Central Belt, glass partitions are more than just dividers;
              they are essential for maximizing natural light and maintaining
              an open, professional atmosphere. However, internal glazing is
              a magnet for fingerprints, smudges, and city-center dust that
              can quickly diminish your facility&rsquo;s &ldquo;showcase&rdquo;
              appeal. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we provide a premium glass partition cleaning service that
              delivers a &ldquo;speechlessly spotless&rdquo; finish, ensuring
              your office or commercial space remains bright and welcoming.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While we are the recognized authority in{" "}
              <Link
                href="/services/move-in-out-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                End of Tenancy Cleaning
              </Link>{" "}
              and{" "}
              <Link
                href="/services/deep-house-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Deep Cleaning Services
              </Link>{" "}
              for Scotland&rsquo;s most prestigious properties, we bring that
              same level of technical intimacy and meticulous care to internal
              glass maintenance. We act as your strategic partner, offering a
              system for every situation to ensure your glazing remains
              crystal clear.
            </p>

            {/* Compact trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7"
            >
              {[
                { icon: UserCheck, label: "Same crew every visit" },
                { icon: Droplets, label: "Pure-water de-ionised" },
                { icon: Leaf, label: "Non-toxic & safe" },
                { icon: ShieldCheck, label: "ISO 14001 compliant" },
              ].map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 bg-white rounded-lg p-2.5 border border-[var(--border)]"
                  >
                    <Icon className="w-4 h-4 text-[var(--brand)] shrink-0" />
                    <span className="text-xs font-semibold text-[var(--ink)] leading-tight">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why MaundyClean is the Expert in Scottish Internal Glazing
// (Semantic H2: "Why MaundyClean is the Expert in Scottish Internal Glazing")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / Droplets / FileText / Leaf
// (icons chosen to reflect the brief's pillar themes: same trusted
// team every visit / pure water technology / safety & compliance /
// safe for your environment).
// ALL 4 pillar bodies start with the brief sentence verbatim and
// are extended with glass-specific prose (no inline Links),
// but typed as ReactNode for codebase consistency with
// vct-floor-care-seo.tsx and floor-care-stripping-seo.tsx
// (which use ReactNode so a pillar can support an inline Link
// when needed).
// ============================================================

type TrustCard = {
  icon: typeof ShieldCheck;
  title: string;
  description: ReactNode;
};

const TRUST_CARDS: TrustCard[] = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is built on familiarity. We ensure the same vetted professionals manage your account, allowing our team to build a deep understanding of your specific office layout and &ldquo;risky&rdquo; high-traffic glass zones. The same PVG-checked glazing specialists return every visit &mdash; learning your glass type (annealed, toughened, laminated, mirrored, low-E coated, anti-reflective coated, privacy-filmed), your smudge-pattern map (meeting-room door handles, lift-lobby push-plates, reception entry doors, partition corners in busy corridors), your frame material (aluminium, steel, frameless, timber), your access constraints (mezzanine balustrades, atrium high-reach glazing, basement glazing), and your inspection regime. When your regular crew is on annual leave, we send a trained backup who has been briefed on your partitions &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking a Scottish corporate glass wall.",
  },
  {
    icon: Droplets,
    title: "Pure Water Technology",
    description:
      "For internal and external glazing, we utilize pure (de-ionised) water systems. This specialized method produces a streak-free finish without the use of harmful chemicals, making it ideal for a sustainable maintenance program. De-ionised water has had all dissolved minerals (calcium, magnesium, sodium) removed by ion-exchange resin &mdash; the minerals that cause spotting and streaking when tap water dries on glass. We apply it with a T-bar applicator, squeegee off with a professional Ettore or Unger squeegee, and detail the edges with a lint-free microfibre cloth. The result is genuinely streak-free glass &mdash; not &lsquo;looks clean until the sun hits it&rsquo;. For high-reach external glazing, our Reach-and-Wash system uses the same de-ionised water fed through telescopic carbon-fibre poles with a brush-head &mdash; we can clean up to 65 feet from ground level with no ladders, no MEWP, and no chemical residue. The chemistry is HACCP-compliant, food-safe, and leaves zero VOC off-gassing in occupied offices.",
  },
  {
    icon: FileText,
    title: "Safety & Compliance",
    description:
      "We are fully trained in the most appropriate equipment for every job, including Water Fed Poles for high-reach areas up to 65 feet and conventional methods for accessible ground-level partitions. We strictly adhere to working at height regulations and ISO 14001 environmental standards. Risk Assessment &amp; Method Statement prepared for every site &mdash; covering access method (ground-level, step-ladder, scaffold-tower, MEWP, Rope Access), glass type (toughened Grade-A safety glass per BS EN 12150, laminated per BS EN ISO 12543), frame material, occupancy constraints, and operational hours. COSHH datasheets on file for every chemistry we use (none &mdash; de-ionised water is COSHH-exempt). Full employer&rsquo;s liability and &pound;5m public liability insurance. PVG-checks on every operative (essential for occupied offices, hotels, retail, and any building where the public is present). IRATA-trained rope-access technicians for atrium high-reach work. IPAF-certified MEWP operators for cherry-picker and scissor-lift access. Working-at-height rescue plans. Audit-ready documentation for your compliance file &mdash; we can name your business on our policy as additional insured.",
  },
  {
    icon: Leaf,
    title: "Safe for Your Environment",
    description:
      "We utilize only certified non-toxic and child-safe products. This is essential for professional environments where staff health is a priority, providing a fresh atmosphere without harsh odors. The cardinal rule of internal glass cleaning: nothing that off-gasses into an occupied workspace. No ammonia-based domestic glass cleaner (it leaves streaks and the smell lingers for hours &mdash; a known trigger for asthma and chemical sensitivity). No solvent-based degreasers. No aerosol propellants. We use de-ionised water as the primary cleaning medium &mdash; the purest, safest, most environmentally responsible glass-cleaning chemistry available. For stubborn fingerprints and oily residues on door handles and push-plates, a pH-neutral plant-derived degreaser (citrus-oil based, biodegradable, food-safe). For mineral deposits on hard-water-stained external glazing, a mild acid-based limescale remover (used only on external glass, never on internal partitions). Every chemistry is REACH-compliant, biodegradable, and safe for staff and visitors to walk past mid-clean. The finishes you&rsquo;ve invested in are protected &mdash; and the staff who walk past the partition the morning after are not walking into chemical fumes.",
  },
];

export function GlassPartitionCleaningSeoWhy() {
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
                alt="Maundy Clean glass partition cleaning crew &mdash; PVG-checked, uniformed, trained in squeegee technique, pure-water systems, Reach-and-Wash poles, Rope Access, and ISO 14001 environmental compliance for Scottish commercial glass"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Motivated Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, PVG-checked, uniformed, and trained in
                  glass-specific protocols &mdash; pure-water de-ionised
                  systems, Reach-and-Wash telescopic poles, Rope Access,
                  Mobile Platforms, squeegee-buff finishing, frame and track
                  detailing, mirror restoration, and ISO 14001 environmental
                  methodology. Same crew every visit &mdash; never a
                  rotating cast of agency strangers walking a Scottish
                  corporate glass wall.
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
                  <ShieldCheck className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m</div>
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
              Why choose Maundy Clean for glass
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why MaundyClean is the Expert in Scottish Internal Glazing
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many commercial cleaners use generic sprays that leave behind
              chemical residues and streaks. MaundyClean addresses these
              exploitable weaknesses by utilizing professional-grade
              technology and vocational excellence &mdash; pure-water
              de-ionised systems, Reach-and-Wash telescopic poles, Rope
              Access and Mobile Platform teams, professional squeegee
              technique, frame and track detailing, mirror restoration,
              fascia and gutter refresh, ISO 14001 environmental compliance,
              and a streak-free guarantee backed by our &pound;5m public
              liability cover.
            </p>
          </motion.div>
        </div>

        {/* 4 trust pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRUST_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[var(--border)] shadow-sm flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[var(--brand)]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {typeof card.description === "string" ? (
                      <span dangerouslySetInnerHTML={{ __html: card.description }} />
                    ) : (
                      card.description
                    )}
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
// Section 3 - Our Total Glass & Partition Maintenance Checklist
// (Semantic H2: "Our Total Glass & Partition Maintenance Checklist")
// Brief-specific section with 3 H3 sub-sections (like VCT pattern):
//   1. Internal Partition & Glazing Care (3 items)
//   2. Specialized High-Reach & External Systems (3 items)
//   3. Often-Missed Technical Details (2 items)
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO intro paragraphs on the 3 checklist cards
// (just H3 title + sub-points). ALL sub-point bodies in ALL 3
// cards are plain strings per the brief (no inline Links), but
// typed as ReactNode (via ChecklistPoint.text) for codebase
// consistency.
// ============================================================

type ChecklistPoint = {
  title: string;
  text: ReactNode;
};

const CHECKLIST_ITEMS: {
  icon: typeof Building2;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  points: ChecklistPoint[];
}[] = [
  {
    icon: SprayCan,
    image: IMG.checklistInternal,
    imageAlt:
      "Maundy Clean glass partition cleaning specialist squeegeeing a frameless internal glass partition to a streak-free crystal-clear finish in a Scottish commercial office using pure-water de-ionised technique",
    title: "1. Internal Partition & Glazing Care",
    description: "",
    points: [
      {
        title: "Fingerprint & Smudge Removal",
        text: "Meticulous wiping of all glass surfaces to remove oils and build-up. Meeting-room door handles, lift-lobby push-plates, reception entry doors, partition corners in busy corridors &mdash; every high-touch glass surface in a Scottish commercial office accumulates a film of human sebum (the natural oil on skin) that bonds to glass within hours and turns cloudy grey within days. We use pure-water de-ionised application with a professional T-bar, squeegee off with an Ettore or Unger squeegee, and detail the edges with a lint-free microfibre cloth. The result is genuinely streak-free glass &mdash; not the &ldquo;spray-and-wipe&rdquo; smearing that most cleaning contractors deliver. For stubborn oily residues on door handles and push-plates, a pH-neutral plant-derived degreaser (citrus-oil based, biodegradable, food-safe) cuts the oil without leaving a chemical film. The fingerprint removal that restores the &ldquo;showcase&rdquo; impression your interior designer specified the glass for.",
      },
      {
        title: "Frame & Track Detailing",
        text: "Meticulously wiping all visible skirting boards, door frames, and glass tracks as standard. Frames and tracks are the most-neglected surfaces in commercial glass cleaning &mdash; the contractor cleans the glass, leaves the dust in the track, and the dust blows back onto the glass the moment the door slides open. We vacuum aluminium partition tracks (the sliding-door channels that collect grit, dust, and debris), wipe down all visible skirting boards and door frames (aluminium, steel, or timber &mdash; each with the right chemistry), detail the hinges and pivots on swing doors (dust traps), and hand-wipe every linear metre of frame edge. Stainless-steel fittings (handles, hinges, brackets) polished with stainless-steel cleaner (not glass cleaner &mdash; it smears). The perimeter work that separates a &ldquo;glass clean&rdquo; from a &ldquo;partition reset&rdquo; &mdash; and the work your facilities manager notices first on the snagging walk.",
      },
      {
        title: "Streak-Free Polishing",
        text: "Professional buffing of glass to ensure a crystal-clear appearance that maximizes natural light. The final stage of every glass-clean is the polish. After squeegeeing, we inspect each pane with a flashlight at an angle (the same test your facilities manager uses) to flag any remaining streaks, smears, or drip marks. Streaks are buffed out with a fresh lint-free microfibre cloth and a fine mist of de-ionised water. Smears are re-squeegeed. Drip marks (where solution pooled at the bottom of the pane) are detailed and dried. The result is glass that maximizes the natural light transmission the partition was installed for &mdash; the showcase impression that signals &ldquo;this business is cared for&rdquo; to every visitor, tenant, and inspector who walks in. The level of finish that most contractors skip because it&rsquo;s &ldquo;too time-consuming&rdquo; &mdash; at MaundyClean, it&rsquo;s in every brief.",
      },
    ],
  },
  {
    icon: Mountain,
    image: IMG.checklistHighReach,
    imageAlt:
      "Maundy Clean glass partition cleaning specialist using Reach-and-Wash telescopic carbon-fibre poles and Rope Access to clean high-reach internal and external glazing in a Scottish commercial property",
    title: "2. Specialized High-Reach & External Systems",
    description: "",
    points: [
      {
        title: "Reach and Wash System",
        text: "Using lightweight telescopic poles to reach difficult areas safely and effectively from the ground. Our Reach-and-Wash system uses carbon-fibre telescopic poles up to 65 feet (20m) in length, fed with pure de-ionised water from a vehicle-mounted tank, with a brush-head at the top that agitates the dirt while the pure water rinses it away. No ladders, no MEWP, no scaffolding &mdash; we clean high-reach internal atrium glazing and external curtain-walling from the safety of the ground. The pure water dries spot-free (no mineral residue), the brush-head is the only thing that touches the glass (no metal squeegee blades on coated or solar-control glass), and the system is HSE-compliant for working at height without the cost and disruption of MEWP hire. Especially valuable for Glasgow IFSD corporate towers, Edinburgh New Town atria, and Aberdeen harbour-side offices where ground-level access is constrained.",
      },
      {
        title: "Complex Access Solutions",
        text: "For surfaces exceeding standard heights, we provide specialist teams trained in Rope Access, Mobile Platforms, and Cradles. Atrium high-reach glazing above 20m, curtain-walling above 65 feet, sloped skylights, glass roofs, and building-perimeter glazing where Reach-and-Wash poles cannot reach &mdash; we deploy IRATA-trained Rope Access technicians (the same qualification used by steeplejacks and offshore maintenance crews), IPAF-certified Mobile Platform operators (cherry-picker and scissor-lift), and BMU (Building Maintenance Unit) cradle operators for buildings with permanent cradle systems. Every complex-access job starts with a site survey and Risk Assessment &amp; Method Statement &mdash; the access method is engineered for the specific glass, the specific building, and the specific operational window. Rope Access is often the most cost-effective solution for high-reach glass &mdash; no MEWP hire, no road closures, no scaffolding, and a smaller team on site. We hold &pound;5m public liability covering all access methods.",
      },
      {
        title: "Fascia & Gutter Refresh",
        text: "We can extend our services to include the cleaning of external fascias and gutter cleaning to maintain your building&rsquo;s total curb appeal. The external fascia (the band of cladding between the roofline and the top of the wall) and the gutters (the channels that carry rainwater off the roof) are the building&rsquo;s first impression &mdash; and they collect the same city-centre dust, traffic film, and biological growth (algae, moss, lichen) that coats your glazing. We refresh external fascias (PVC, aluminium, timber, render &mdash; each with the right chemistry), clear and clean gutters (hand-cleared of leaves and debris, then flushed with low-pressure water to confirm flow), and clean downpipes externally. The result is a building perimeter that looks as cared-for as the interior &mdash; the curb-appeal refresh that signals &ldquo;this business is cared for top-to-bottom&rdquo; to every visitor, tenant, and prospective client who walks in.",
      },
    ],
  },
  {
    icon: FileText,
    image: IMG.checklistDetails,
    imageAlt:
      "Maundy Clean glass partition cleaning specialist detailing entry phone systems, internal glass signage, and mirror restoration in a Scottish commercial reception and washroom area",
    title: "3. Often-Missed Technical Details",
    description: "",
    points: [
      {
        title: "Entry Phone & Signage",
        text: "Cleaning glass entry systems and internal glass signage to ensure a professional first impression. The first thing a visitor touches at your reception is the glass entry phone &mdash; and the first thing they read is the internal glass signage (your logo etched onto the partition, your meeting-room name vinyl-applied to the door). These are the highest-touch and highest-visibility surfaces in your entire premises, and they are almost never in a standard cleaning contract. We clean glass entry phone keypads (sanitised, not just wiped &mdash; cold and flu viruses survive on glass for up to 24 hours), intercom speaker grilles (vacuumed, then damp-wiped), door-release buttons (sanitised), and the surrounding glass on the entry door (the smudge-zone where every visitor puts their hand to push the door open). Internal glass signage &mdash; vinyl-applied logos, etched meeting-room names, frosted privacy panels &mdash; detailed with the right chemistry (vinyl and etched glass need a gentler chemistry than annealed glass). The first-impression detail that most contractors skip.",
      },
      {
        title: "Mirror Restoration",
        text: "Deep cleaning and polishing of all mirrors in communal and washroom areas to a high shine. Mirrors are technically glass &mdash; but they require a different cleaning protocol. The silvering on the back of a mirror is delicate (aggressive chemistry or excess water at the edges can seep behind the frame and oxidise the silvering, producing black edges within months). We clean mirrors with a minimal-liquid technique: de-ionised water applied to the cloth (not sprayed onto the glass), wiped in one direction (not circular &mdash; circular marks the silvering), and buffed dry with a lint-free cloth. Edges detailed with a dry microfibre (no liquid near the frame). Particularly critical for hotel bathrooms, restaurant washrooms, gym changing rooms, and corporate reception feature-walls &mdash; the mirrored surfaces that visitors inspect closely and that signal the standard of care throughout the building. The detail work that separates a &ldquo;mirror wipe&rdquo; from a &ldquo;mirror restoration&rdquo; &mdash; and the work that extends mirror life by years.",
      },
    ],
  },
];

export function GlassPartitionCleaningSeoChecklist() {
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
            Beyond the standard spray-and-wipe
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Glass &amp; Partition Maintenance Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning for internal glass follows a rigorous,
            agency-approved checklist designed to address every situation
            from basement windows to high-reach office glazing. From internal
            partition and glazing care through specialized high-reach and
            external systems to the often-missed technical details that
            separate a &ldquo;glass clean&rdquo; from a &ldquo;partition
            reset&rdquo; &mdash; below is the scope we deliver as standard,
            regardless of building type, footprint, or occupancy schedule.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {CHECKLIST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[var(--border)] shadow-sm flex flex-col"
              >
                <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  {item.description ? (
                    <p
                      className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  ) : null}
                  <ul className="space-y-3 mt-auto">
                    {item.points.map((point) => {
                      const PointIcon = CheckCircle2;
                      return (
                        <li
                          key={point.title}
                          className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85"
                        >
                          <PointIcon className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                          <span>
                            <strong className="font-semibold text-[var(--ink)]">{point.title}</strong>
                            &mdash;{" "}
                            {typeof point.text === "string" ? (
                              <span dangerouslySetInnerHTML={{ __html: point.text }} />
                            ) : (
                              point.text
                            )}
                          </span>
                        </li>
                      );
                    })}
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
// Section 4 - 3-Step "Hassle-Free" Booking Process
// (Semantic H2: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// (FileText imported for safety/template parity even if not used.)
// Brief HAS NO [H3] marker on this heading, so we use <h2>
// (matches the VCT pattern when no [H3] marker is present).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Assessment & Quote",
    description:
      "Contact us to organize a visit. We will assess your glazing shapes and sizes to determine the most appropriate cleaning methods. On-site glass audit: every glass zone mapped (meeting-room partitions, lift-lobby glazing, reception entry doors, atrium high-reach glazing, balustrades, mirror walls, internal signage, external curtain-walling, fascias and gutters), glass type identified (annealed, toughened BS EN 12150, laminated BS EN ISO 12543, mirrored, low-E coated, anti-reflective coated, privacy-filmed), frame material assessed (aluminium, steel, frameless, timber), access method assessed per zone (ground-level squeegee, step-ladder, scaffold-tower, Reach-and-Wash telescopic pole up to 65 feet, MEWP cherry-picker or scissor-lift, Rope Access), occupancy constraints reviewed (in-hours presence, after-hours unsupervised, key-safes and alarm codes), operational window confirmed (overnight, weekend, holiday closure). Risk Assessment &amp; Method Statement prepared. HSE working-at-height compliance check. ISO 14001 environmental compliance confirmed. Fixed-price quote within 2 business days &mdash; no on-the-day upsells.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians who follow strict safety protocols and regular check-ins. Your allocated glazing crew is PVG-checked, uniformed, and trained in glass-specific protocols &mdash; pure-water de-ionised systems, Reach-and-Wash telescopic pole use, Rope Access (IRATA-certified), Mobile Platform operation (IPAF-certified cherry-picker and scissor-lift), professional squeegee technique (Ettore or Unger), frame and track detailing, mirror restoration, fascia and gutter refresh, and ISO 14001 environmental methodology. We brief the crew on your glass audit (glass type per zone, frame material, coating register, access map), your access window (overnight, weekend, holiday closure), your occupancy constraints (occupied office, hotel with guests in the building, retail with trading hours), your premium finishes (mirror walls, etched signage, frosted privacy panels, vinyl-applied logos), and any operational constraints on chemistry or method. The same crew returns every visit, building real knowledge of your premises and your inspection regime.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Workplace",
    description:
      "Experience glass that looks, smells, and feels fresh every single day, backed by our MaundyClean satisfaction guarantee. You receive a signed glass-care log after every visit (crew name, time in/out, areas treated, glass type per zone, access method per zone, chemistry used, defects flagged), arrival and departure times, before-and-after photographs for major work, and issue-flagging for coating degradation, seal failure, frame corrosion, hinge wear, or scratched glass &mdash; before they undermine a client visit, an environmental health inspection, or a guest impression. From &pound;14 per hour for routine partition maintenance through to &pound;395 per visit for a full atrium high-reach clean with Rope Access. POA for external curtain-walling programmes with Reach-and-Wash or BMU cradle access. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function GlassPartitionCleaningSeoBooking() {
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
            The MaundyClean 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be uncomplicated and
            straightforward, providing the responsive management support
            Scottish business owners demand. From free site assessment and
            quote through specialist crew matching to a pristine workplace
            &mdash; no friction, no waiting, no surprises. Just streak-free
            glass, every partition, every door, every balustrade, and a
            compliance file that&rsquo;s audit-ready the day a facilities
            director, insurer, or operations manager walks in.
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
                <p
                  className="text-sm text-[var(--muted-foreground)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
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
              Request Your Bespoke Glass Quote Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Property Need
// (Semantic H2: "Solutions for Every Property Need")
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services.
// All 4 card descriptions are ReactNode values (each contains an
// inline <Link> per the brief) - rendered via the
// typeof sol.description === "string" check.
// ============================================================

type InterlinkSolution = {
  icon: typeof Sparkles;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  description: ReactNode;
  cta: string;
};

const INTERLINK_SOLUTIONS: InterlinkSolution[] = [
  {
    icon: Home,
    title: "Maintaining the Sanctuary",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt:
      "Recurring home cleaning bringing glass-partition-cleaning standards of meticulous pure-water maintenance to a Scottish private residence on a weekly or fortnightly basis",
    description: (
      <>
        For your personal residence, our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        brings this same level of meticulous glass care to your private
        sanctuary. The same vetted uniformed crew, the same pure-water
        de-ionised technique, the same child-safe eco chemistry, and the
        same signed cleaning log after every visit &mdash; so the
        &ldquo;Maundy&rdquo; standard you see at work follows you home.
      </>
    ),
    cta: "Explore recurring home cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy cleaning combined with internal glass partition cleaning to ensure a Scottish commercial office unit passes final inspection and lease handover",
    description: (
      <>
        Moving offices? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        ensures all glazing and partitions are front-line ready for handover
        and pass all final inspections. Every glass surface detailed
        top-to-bottom, deposit-back guarantees met, and the same trusted
        vetted crew your glass-partition team knows &mdash; so your unit
        handover starts from a &ldquo;speechlessly spotless&rdquo; baseline.
      </>
    ),
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt:
      "After builders clean removing heavy layers of builders dust from internal glass partitions and frames in a Scottish post-construction commercial office fit-out",
    description: (
      <>
        If your workspace has undergone refitting, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is essential for removing heavy layers of builders&rsquo; dust from
        glass surfaces. Construction dust on internal partitions and frames
        re-enters the air for months after a fit-out &mdash; we capture it
        at source before it becomes a long-term air-quality problem.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Intensive Hygiene Resets",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt:
      "Antiviral sanitisation and electrostatic disinfection of high-touch glass doors and entry systems in a Scottish commercial reception alongside routine glass partition cleaning",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        for high-touch points on glass doors and entry systems.
        Electrostatic disinfection of door handles, push-plates, and entry
        phone keypads, EN 14476 virucidal chemistry, and the same
        &ldquo;Maundy&rdquo; standard applied to every glass surface your
        staff and visitors touch.
      </>
    ),
    cta: "Explore antiviral sanitisation",
  },
];

export function GlassPartitionCleaningSeoInterlinking() {
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
            Beyond the glass clean &middot; property lifecycle
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Need
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our glass partition cleaning is the heartbeat of your
            office&rsquo;s presentation, but we offer specialized resets for
            major property milestones. From recurring home cleaning that
            maintains your sanctuary standard through end-of-tenancy
            handovers, post-renovation dust clear-outs, and antiviral
            sanitisation for high-touch glass entry systems &mdash; the same
            trusted, vetted crew can step up whenever your property needs
            more than a standard glass-partition visit.
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
                    <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-base text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                      {typeof sol.description === "string" ? (
                        <span dangerouslySetInnerHTML={{ __html: sol.description }} />
                      ) : (
                        sol.description
                      )}
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
// Section 6 - "Near Me" Location Internal Links
// (Semantic H2: "Glass Partition Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/glass-partition-cleaning-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function GlassPartitionCleaningSeoNearMe() {
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
              Local glass partition &amp; internal glazing cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Glass Partition Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;glass partition cleaning near me&rdquo; or
              &ldquo;commercial glass cleaning near me&rdquo; in Scotland?
              Maundy Clean covers office managers, facilities managers,
              hotel general managers, retail operations leads, restaurant
              owners, and corporate estates teams across the Central Belt,
              Highlands, Borders, and Islands &mdash; from Glasgow&rsquo;s
              IFSD corporate towers and Edinburgh&rsquo;s New Town hotel
              screens to Aberdeen&rsquo;s energy-corridor offices and
              Dundee&rsquo;s Waterfront retail atria, plus commercial
              estates in Stirling, Perth, Inverness, and Ayr. Same
              PVG-checked, uniformed glazing specialists, same dedicated
              crew every visit, same rapid response to streak-emergency
              callouts ahead of client visits and tenant inspections
              &mdash; wherever your property happens to be. Find your local
              glass-partition cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean glass partition &amp; internal glazing cleaning coverage areas"
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
                  Same PVG-checked glass partition cleaning crews, same 100% satisfaction guarantee &mdash; from
                  Glasgow to Inverness.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                asChild
              >
                <Link href="/services/glass-partition-cleaning-near-me#locations">
                  <MapPin className="w-4 h-4" />
                  Browse the near-me directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
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
                Find your local glass-partition crew
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
                    href={`/services/glass-partition-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> glass care</span>
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
            Our local glass partition cleaning crews operate across Glasgow&rsquo;s
            International Financial Services District, Merchant City and West
            End (corporate towers, boutique hotels, and Grade-A offices with
            frameless meeting-room partitions), Edinburgh&rsquo;s Exchange
            District, New Town and Quartermile (5-star hotels, retail
            flagships, and listed heritage buildings with period sash-and-case
            glazing), Aberdeen&rsquo;s energy-corridor West End and Tullos
            industrial estates (energy operators, corporate headquarters, and
            harbour-side curtain-walling), Dundee&rsquo;s Waterfront and City
            Centre professional services buildings (facilities teams and
            boutique retail with atrium high-reach glazing), and Scottish
            commercial and residential districts across the Central Belt
            &mdash; from Inverness to Perth, Falkirk to Ayr. Whether
            you&rsquo;re searching for an office glass partition clean in
            Glasgow, a hotel-lobby balustrade restoration in Edinburgh, a
            high-reach atrium curtain-walling programme in Aberdeen, or a
            retail mirrored-feature-wall restoration in Dundee, Maundy Clean
            assigns a vetted, PAYE-employed, PVG-checked glazing crew that
            stays with you for the long run. Same crew, same standard, same
            locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Glass Quote Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function GlassPartitionCleaningSeoFinalCta() {
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
            Ready to book your bespoke glass quote?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Bespoke Glass Quote Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Office managers, facilities managers, hotel general managers,
            retail operations leads, restaurant owners, and corporate estates
            teams &mdash; book a free, no-obligation glass survey with our
            management team and receive an itemised proposal within 2
            business days. Pure-water de-ionised systems, Reach-and-Wash
            telescopic poles up to 65 feet, IRATA-certified Rope Access,
            IPAF-certified Mobile Platform operation, professional squeegee
            technique, frame and track detailing, mirror restoration,
            fascia and gutter refresh, ISO 14001 environmental compliance,
            HSE working-at-height methodology, PVG-checked uniformed
            professionals who become part of your team, out-of-hours
            scheduling to avoid operational disruption, defect reporting,
            and the multi-site one-invoice convenience that lets you
            consolidate every Scottish property on a single audit-ready
            compliance file. From &pound;14 per hour for routine partition
            maintenance through to &pound;395 per visit for a full atrium
            high-reach clean with Rope Access. POA for external
            curtain-walling programmes. No pushy sales call, no waiting 24
            hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Glass Quote Today
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
                View Our Commercial Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 - SEO FAQ block
// (Semantic H2: "Frequently Asked Questions")
// 3 Q&As from the brief (insured for working at height, harmful
// chemicals on internal glass, windows of all shapes and sizes)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for working at height?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with technicians trained to comply with all working at height regulations. We carry &pound;5m public liability as standard &mdash; covering glass partition cleaning across offices, hotels, restaurants, retail, corporate atria, and listed heritage buildings &mdash; and every high-reach operative is IRATA-certified (Rope Access), IPAF-certified (cherry-picker and scissor-lift Mobile Platforms), and PVG-checked (essential for occupied offices, hotels, retail, and any building where the public, guests, or staff are present). We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, retail-chain compliance, and corporate insurance files. Our documentation is audit-ready for environmental health inspection, HSE working-at-height review, and operations director review; we provide signed glass-care logs, before/after photos, IRATA and IPAF certificates, RAMS, COSHH datasheets (where applicable &mdash; pure-water de-ionised cleaning is COSHH-exempt), training records, working-at-height rescue plans, and vetting records (PVG) for your compliance file.",
  },
  {
    q: "Do you use harmful chemicals on internal glass?",
    a: "No. We prioritize your health and the environment by using de-ionised water and certified non-toxic supplies that produce a superior, streak-free finish without chemical odors. De-ionised water has had all dissolved minerals (calcium, magnesium, sodium) removed by ion-exchange resin &mdash; the minerals that cause spotting and streaking when tap water dries on glass. We apply it with a professional T-bar applicator, squeegee off with an Ettore or Unger squeegee, and detail the edges with a lint-free microfibre cloth. For stubborn oily residues on door handles and push-plates, a pH-neutral plant-derived degreaser (citrus-oil based, biodegradable, food-safe, REACH-compliant). For mineral deposits on hard-water-stained external glazing only, a mild acid-based limescale remover (never used on internal partitions). No ammonia-based domestic glass cleaner (it leaves streaks and the smell lingers for hours &mdash; a known trigger for asthma and chemical sensitivity). No solvent-based degreasers. No aerosol propellants. Every chemistry is biodegradable, child-safe, pet-safe, and safe for staff and visitors to walk past mid-clean. The finishes you&rsquo;ve invested in are protected &mdash; and the staff who walk past the partition the morning after are not walking into chemical fumes.",
  },
  {
    q: "Can you clean windows of all shapes and sizes?",
    a: "Yes. No window is too small or too tall. We handle everything from high-reach office windows to basement glazing across Scotland. For ground-level and accessible partitions (meeting-room doors, lift-lobby push-plates, reception entry doors) we use professional squeegee technique with pure-water de-ionised application. For high-reach internal atrium glazing (up to 65 feet / 20m) we use the Reach-and-Wash system &mdash; carbon-fibre telescopic poles fed with pure water from a vehicle-mounted tank, with a brush-head at the top, all from the safety of the ground. For surfaces exceeding 65 feet (atrium high-reach glazing above 20m, curtain-walling, sloped skylights, glass roofs, building-perimeter glazing) we deploy IRATA-trained Rope Access technicians, IPAF-certified Mobile Platform operators (cherry-picker and scissor-lift), and BMU (Building Maintenance Unit) cradle operators for buildings with permanent cradle systems. For basement glazing and confined-area partitions we use hand-tools, step-ladders, and scaffold-tower access. Every shape and size is covered &mdash; from a single etched vinyl meeting-room door in a Glasgow boutique office to a full Edinburgh New Town hotel atrium with curtain-walling, sloped skylight, balustrade, and mirrored feature-wall. We have worked in Aberdeen harbour-side towers, Dundee Waterfront retail atria, and Inverness boutique hotels &mdash; the same standard, the same care, every property.",
  },
];

export function GlassPartitionCleaningSeoFaq() {
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
            Glass partition &amp; internal glazing cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our glass partition cleaning
            clients ask most often. Can&rsquo;t find what you need? Call us
            on{" "}
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
                  <p
                    className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
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
                Request Your Bespoke Glass Quote Today
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
                View Our Commercial Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

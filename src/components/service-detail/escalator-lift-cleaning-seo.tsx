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
  Gem,
  Droplets,
  Wrench,
  SprayCan,
  Mountain,
  Cog,
  Settings,
  Layers,
  Award,
  Lock,
  Wind,
  Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (Escalator & lift-specific imagery, drawn from the existing
// escalator-lift-cleaning gallery plus the dedicated escalator
// hero image)
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-22%20at%205.57.17%20PM.jpeg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-22%20at%205.57.17%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_h014vsh014vsh014.png",
  checklistEscalator:
    "https://sfile.chatglm.cn/images-ppt/escalator-lift-cleaning.jpg",
  checklistLift:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistDetails:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseMarble:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.28.09%20PM.jpeg",
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
// Semantic H1: "Professional Escalator & Lift Cleaning Services Scotland"
// ============================================================

export function EscalatorLiftCleaningSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean escalator and lift cleaning specialist deep-cleaning an escalator step tread with a rotary brush machine in a Scottish shopping centre"
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
            Escalator &amp; Lift Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Escalator &amp; Lift Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Pristine Vertical Transportation, Technical Safety Compliance, and
            the Maundy Tradition of Excellence for Scottish Commercial
            Facilities. MaundyClean brings SafeContractor-approved crews,
            purpose-built Rosemor Rotomatic escalator cleaners, full RAMS
            packages, EN 14476 handrail virucidal sanitisation, HEPA dry
            mechanism vacuuming, LOLER-compliant lift-engineer support, HTM
            01-05 clinical chemistry, out-of-hours scheduling, and a
            &ldquo;speechlessly spotless&rdquo; finish to every escalator
            bank, travelator, and lift car we serve &mdash; from Glasgow
            shopping centres and Edinburgh corporate towers to Aberdeen
            transport hubs and Dundee retail atria.
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
                Request Your Free Site Assessment Today
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
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> SafeContractor Approved
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Crew Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> LOLER-Compliant Support
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

export function EscalatorLiftCleaningSeoIntro() {
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
                alt="Maundy Clean escalator and lift cleaning specialist using a Rosemor Rotomatic escalator deep-cleaning machine with rotary brush and vacuum pickup on step treads in a Scottish shopping centre"
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
                  &ldquo;showcase&rdquo; care we bring to Scotland&rsquo;s finest property
                  transitions &mdash; applied to your escalator banks, travelators, glass lift
                  shafts, and corporate lift cars across Scotland&rsquo;s commercial estate.
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
              Escalator &amp; lift cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Vertical Transportation
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In high-traffic environments &mdash; from shopping centres in
              Glasgow to corporate hubs in Edinburgh &mdash; clean escalators
              and lifts are essential for projecting a positive image of your
              property. Beyond aesthetics, built-up dirt, grease, and grit are
              more than just unsightly; they are harmful pollutants that
              increase maintenance costs and can jeopardize the efficient
              operation of your equipment. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we provide a premium escalator and lift cleaning service that
              ensures your facility remains safe, functional, and
              &ldquo;speechlessly spotless.&rdquo;
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
              for Scotland&rsquo;s most prestigious property transitions, we
              bring that same level of technical intimacy and meticulous care
              to the specialized maintenance of vertical transportation. We act
              as your strategic partner, helping you meet health and safety
              regulations while ensuring the welfare of the public and your
              staff.
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
                { icon: Cog, label: "Rosemor Rotomatic" },
                { icon: Leaf, label: "Non-toxic & safe" },
                { icon: ShieldCheck, label: "RAMS & SafeContractor" },
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
// Section 2 - Why MaundyClean is Scotland's Authority in
// Escalator & Lift Hygiene
// (Semantic H2: "Why MaundyClean is Scotland's Authority in Escalator & Lift Hygiene")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars Cog (industry-leading technical equipment) /
// FileText (total regulatory compliance & RAMS) /
// UserCheck (the same trusted team every visit) /
// Leaf (eco-friendly & safe).
// ALL 4 pillar bodies start with the brief sentence verbatim and
// are extended with escalator-specific prose (no inline Links),
// but typed as ReactNode for codebase consistency with
// vct-floor-care-seo.tsx and glass-partition-cleaning-seo.tsx
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
    icon: Cog,
    title: "Industry-Leading Technical Equipment",
    description:
      "We utilize purpose-built equipment, such as the Rosemor Rotomatic Escalator Cleaner, which delivers a thorough and efficient deep clean by removing debris from every step and tread. The Rotomatic is a self-contained rotary brush machine with integral chemistry feed and vacuum pickup &mdash; the brush agitates the tread grooves, the alkaline low-foam rubber-safe chemistry lifts the black grime, and the vacuum picks up the slurry in a single pass. Each step is cleaned individually &mdash; comb plate to comb plate &mdash; with risers (the vertical part of each step) wiped by hand and skirt guards polished. The same purpose-built discipline applies to lift cars: specialist stainless-steel polishers (grain-aligned, never cross-grained), microfibre mirror cloths, EN 14476 virucidal applicators for high-touch buttons and handrails, and HEPA vacuums (CRN-rated for confined spaces) for mechanism-zone dry cleaning. We bring the right machine for every surface &mdash; never a generic mop-and-bucket crew improvising on specialist equipment they do not understand.",
  },
  {
    icon: FileText,
    title: "Total Regulatory Compliance & RAMS",
    description:
      "Every technical clean begins with a full risk assessment of your systems by an approved assessor. We provide a comprehensive RAMS package (Risk Assessments and Method Statements) to ensure all work meets strict health and safety standards. The RAMS covers: access method (ground-level, step-ladder, scaffold-tower, MEWP, Rope Access, BMU cradle), surface type per zone (escalator step rubber, comb plate aluminium, balustrade glass, handrail rubber, lift-car stainless steel, mirror, control panel), occupancy constraints (in-hours presence, after-hours unsupervised, key-safes and alarm codes), operational window (overnight, weekend, holiday closure), chemistry register (EN 14476 virucidal, neutral pH, HTM 01-05 clinical), and LOLER (Lifting Operations and Lifting Equipment Regulations) alignment with your lift engineer. We are SafeContractor-approved, hold full employer&rsquo;s liability and &pound;5m public liability, can name your business on our policy as additional insured, and provide audit-ready documentation &mdash; COSHH datasheets, training records, working-at-height rescue plans, IRATA / IPAF certificates, and PVG vetting records &mdash; for your compliance file.",
  },
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is built on familiarity. We ensure the same vetted professionals manage your facility to build a deep understanding of your operational requirements and technical specifications. The same PAYE-employed, PVG-checked, uniformed escalator and lift cleaning specialists return every visit &mdash; learning your equipment register (escalator bank count, travelator lengths, lift car count, glass shaft type, control panel type, button type, handrail type), your smudge-pattern map (which lift-lobby call buttons get touched most, which escalator handrails get the heaviest traffic at which hours, which entry doors get the most fingerprints), your access constraints (after-hours window, shift-change lulls, 24/7 transport operations, holiday closures, retail trading hours, hotel guest presence), and your inspection regime (LOLER 6-monthly lift inspection, EHO environmental health inspection, insurer audit, HSE working-at-height review). When your regular crew is on annual leave, we send a trained backup who has been briefed on your equipment &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking a Scottish commercial escalator bank.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "We utilize only certified non-toxic and environmentally friendly products. This ensures a fresh environment for passengers without the harsh chemical odors common in industrial cleaning, protecting the health of your visitors. The cardinal rule of escalator and lift cleaning: nothing that off-gasses into an occupied public space. No ammonia-based domestic glass cleaner (it leaves streaks and the smell lingers for hours &mdash; a known trigger for asthma and chemical sensitivity, unacceptable in shopping centres and transport hubs). No solvent-based degreasers. No aerosol propellants. We use a rubber-safe alkaline low-foam chemistry for step-tread deep cleaning (REACH-compliant, biodegradable, does not damage the step rubber), a pH-neutral plant-derived degreaser for handrail oily residues (citrus-oil based, food-safe), EN 14476 virucidal disinfectant for high-touch surfaces (proven effective against enveloped viruses including flu, coronavirus, norovirus &mdash; essential for public health in confined lift spaces), and pure de-ionised water for glass panel polish. Every chemistry is biodegradable, child-safe, pet-safe, and safe for passengers to walk past mid-clean. The finishes you&rsquo;ve invested in are protected &mdash; and the visitors who ride the escalator the morning after are not walking into chemical fumes.",
  },
];

export function EscalatorLiftCleaningSeoWhy() {
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
                alt="Maundy Clean escalator and lift cleaning crew &mdash; SafeContractor-approved, uniformed, trained in Rosemor Rotomatic operation, EN 14476 virucidal sanitisation, HEPA dry mechanism vacuuming, and LOLER-compliant support for Scottish commercial facilities"
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
                  escalator-specific protocols &mdash; Rosemor Rotomatic
                  operation, EN 14476 virucidal sanitisation, HEPA dry
                  mechanism vacuuming, LOLER-compliant lift-engineer support,
                  HTM 01-05 clinical chemistry, and SafeContractor
                  methodology. Same crew every visit &mdash; never a rotating
                  cast of agency strangers walking a Scottish commercial
                  escalator bank.
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
              Why choose Maundy Clean for escalators &amp; lifts
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why MaundyClean is Scotland&rsquo;s Authority in Escalator &amp; Lift Hygiene
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Vertical transportation requires a level of technical depth that
              standard janitorial crews cannot provide. MaundyClean addresses
              these challenges through vocational excellence and the use of
              industry-leading technology &mdash; Rosemor Rotomatic escalator
              cleaners, EN 14476 virucidal handrail sanitisation, HEPA dry
              mechanism vacuuming, LOLER-compliant lift-engineer support,
              HTM 01-05 clinical chemistry, SafeContractor methodology, full
              RAMS documentation, and out-of-hours scheduling that respects
              your operational rhythm.
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
// Section 3 - Our Total Escalator & Lift Maintenance Checklist
// (Semantic H2: "Our Total Escalator & Lift Maintenance Checklist")
// Brief-specific section with 3 H3 sub-sections (like VCT pattern):
//   1. Escalator & Walkway Deep Cleaning (3 items)
//   2. Lift & Elevator Sanitation (3 items)
//   3. Often-Missed Technical Details (2 items — incl. inline Link to Marble Polishing)
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO intro paragraphs on the 3 checklist cards
// (just H3 title + sub-points). Card 3, point 2 (Floor Restoration)
// contains an inline <Link> to /services/marble-polishing — that
// makes ALL point bodies in the array ReactNode-typed.
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
    icon: Cog,
    image: IMG.checklistEscalator,
    imageAlt:
      "Maundy Clean escalator cleaning specialist using a Rosemor Rotomatic rotary brush machine with vacuum pickup to deep-clean escalator step treads, comb plates, and balustrade glass in a Scottish shopping centre",
    title: "1. Escalator & Walkway Deep Cleaning",
    description: "",
    points: [
      {
        title: "Step & Tread Restoration",
        text: "Removing built-up dirt, grease, and grit from the grooves of every step and riser. The Rosemor Rotomatic escalator cleaner &mdash; a purpose-built rotary brush machine with integral chemistry feed and vacuum pickup &mdash; agitates the tread grooves, applies a rubber-safe alkaline low-foam chemistry that lifts the black grime bonded to the rubber, and vacuums the slurry in a single pass. Each step cleaned individually &mdash; comb plate to comb plate. Risers (the vertical part of each step) wiped by hand. Side panels (skirt guards) wiped and polished. Process takes 30&ndash;45 minutes per escalator. Result: step treads visibly cleaner, gripper surface restored, and the friction coefficient that protects passenger safety returned to specification. Quarterly for high-traffic (shopping centres, transport hubs), semi-annual for medium-traffic (corporate HQs, hotels).",
      },
      {
        title: "Balustrade & Handrail Sanitization",
        text: "Meticulous cleaning and disinfecting of high-touch handrails to prevent the spread of germs. Handrails are the highest-touch surface on any escalator &mdash; bacteria and viruses accumulate within hours and reach dangerous concentrations within days on high-traffic units. We sanitise with EN 14476 virucidal chemistry (proven effective against enveloped viruses including flu, coronavirus, and norovirus), applied by microfibre cloth the full length of the handrail on both sides. The handrail inlet (where the handrail enters the mechanism) is deep-cleaned &mdash; this is where bacteria accumulate unseen. The handrail underside is wiped. The surface is dried lint-free. Balustrade glass (the glass panels on either side of the escalator) polished streak-free with pure de-ionised water, microfibre cloth, and squeegee. Daily for high-traffic (shopping centres, transport hubs, hospitals); weekly for medium-traffic (offices, hotels).",
      },
      {
        title: "Landing Plate Detailing",
        text: "Intensive cleaning of comb plates and landing areas to ensure safe passenger transitions. The comb plate is the metal comb at the top and bottom of every escalator that meshes with the step treads &mdash; it is the transition zone where passengers step on and off, and it accumulates a hazardous mix of grit, debris, and spilled liquids that can cause slips, trips, and falls. We soft-brush dislodge debris from the comb teeth, vacuum the dislodged material, wipe the comb plate surface with a pH-neutral degreaser, and dry it. The landing area (the flat metal floor on either side of the comb plate) is mopped with a slip-resistant neutral cleaner. Side guide rails wiped. Comb plate brush (the brush strip at the bottom of each step, sometimes called the skirt guard brush) inspected and cleaned. Quarterly for high-traffic, semi-annual for medium. A clean comb plate is the single most important safety detail on an escalator &mdash; we never skip it.",
      },
    ],
  },
  {
    icon: Building2,
    image: IMG.checklistLift,
    imageAlt:
      "Maundy Clean lift cleaning specialist polishing a lift car interior &mdash; stainless steel walls, mirror, control panel buttons, and door tracks &mdash; to a streak-free showcase finish in a Scottish corporate HQ",
    title: "2. Lift & Elevator Sanitation",
    description: "",
    points: [
      {
        title: "Internal Surface Polishing",
        text: "Meticulous wiping and polishing of stainless steel, mirrors, and glass partitions to a streak-free &ldquo;showcase&rdquo; shine. The lift car is the most-scrutinised interior in any commercial building &mdash; passengers stand centimetres from every surface for the duration of the ride, and a single smear or fingerprint is visible to every passenger who follows. We polish stainless steel walls (grain-aligned with specialist stainless-steel cleaner &mdash; never cross-grained, never with glass cleaner which smears), mirrors polished lint-free (de-ionised water applied to the cloth, never sprayed onto the glass &mdash; excess water at the edges can seep behind the frame and oxidise the silvering), glass partitions polished streak-free with a squeegee and microfibre detail cloth. Ceiling light diffusers cleaned with an anti-static cloth (no liquid near electrics). The &ldquo;showcase&rdquo; finish that signals &ldquo;this building is cared for&rdquo; to every passenger &mdash; daily for high-traffic, weekly for medium.",
      },
      {
        title: "Button & Entry System Disinfecting",
        text: "Intensive cleaning of entry phone systems and control panels. Lift call buttons, in-car floor buttons, door-open and door-close buttons, alarm buttons, intercom speakers, and entry phone keypads are the highest-touch surfaces in any commercial building &mdash; touched by every passenger, every journey, and a known vector for cross-contamination. We sanitise with EN 14476 virucidal chemistry (proven effective against flu, coronavirus, and norovirus &mdash; cold and flu viruses survive on stainless steel for up to 24 hours). Buttons wiped individually with a microfibre applicator. Intercom speaker grilles vacuumed (dust traps) then damp-wiped. Door-release buttons sanitised. The surrounding control panel plate detailed. Card readers and biometric scanners wiped with the manufacturer-approved chemistry. Daily for high-traffic (hospitals, transport hubs, shopping centres); weekly for medium-traffic (offices, hotels).",
      },
      {
        title: "Track & Door Maintenance",
        text: "Removing debris from door tracks to ensure smooth operation and prevent mechanical failure. Lift door tracks (the grooves in the floor that the door slides along) accumulate grit, dust, hair, and debris that causes door stutter, slow operation, and eventually mechanical failure &mdash; one of the most common lift breakdown callouts and a £500+ engineer visit every time. We vacuum the full length of the door track (HEPA vacuum with a crevice tool), dislodge compacted debris with a soft brush, wipe the track sides with a pH-neutral degreaser, and dry it. The door sill (the threshold passengers step over) is wiped and dried. The door runner (the wheel mechanism at the top of the door) inspected and wiped &mdash; dust here causes the door to stick. Door hinges (where present) inspected and wiped. Quarterly for high-traffic, semi-annual for medium. A clean track is the single most cost-effective lift-maintenance intervention &mdash; we never skip it.",
      },
    ],
  },
  {
    icon: FileText,
    image: IMG.checklistDetails,
    imageAlt:
      "Maundy Clean escalator and lift cleaning specialist detailing often-missed technical surfaces &mdash; skirting boards at the base of lift cars, escalator side panels, and lift car floor restoration &mdash; in a Scottish commercial facility",
    title: "3. Often-Missed Technical Details",
    description: "",
    points: [
      {
        title: "Visible Skirting Boards",
        text: "Wiping down the base of lift cars and escalator side panels as standard. The skirting boards at the base of a lift car (the strip where the wall meets the floor) and the side panels of an escalator (the skirt guards next to the steps) are the most-neglected surfaces in commercial vertical-transport cleaning &mdash; the contractor cleans the visible surfaces at eye level, leaves the dust at floor level, and the dust blows back onto the polished surfaces within hours. We wipe every linear metre of skirting board in the lift car (aluminium, steel, or timber &mdash; each with the right chemistry), detail the skirt guards on the escalator (rubber-safe chemistry, polished), wipe the base of the escalator side panels, and clean the kick-plates at the bottom of lift doors. The perimeter work that separates a &ldquo;lift wipe&rdquo; from a &ldquo;lift reset&rdquo; &mdash; and the work your facilities manager notices first on the snagging walk. Included as standard on every visit, never as an upsell.",
      },
      {
        title: "Floor Restoration",
        text: (
          <>
            Deep cleaning of lift car flooring, whether it be{" "}
            <Link
              href="/services/marble-polishing"
              className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
            >
              Marble Polishing
            </Link>
            , technical vinyl care, or carpet shampooing. The lift car floor is
            the most-abused floor surface in any commercial building &mdash;
            thousands of shoes per day, grit ground in by every passenger, and
            chemical spills from coffee cups and shopping bags. We tailor the
            floor care to the floor type: marble floors diamond-honed and
            polished (grit progression 50/100/200/400/800/1500/3000 with a
            final powder polish, finished with a slip-resistant impregnating
            sealer), technical vinyl (VCT) floors stripped, scrubbed, and
            re-finished with a slip-resistant polish (R10 rating for lift cars
            in commercial buildings), and carpet floors vacuumed, spot-cleaned,
            and low-moisture encapsulation cleaned. The result is a lift car
            floor that matches the standard of the lobby floor it opens onto
            &mdash; the showcase impression that signals &ldquo;this building
            is cared for top-to-bottom&rdquo; to every passenger who steps in.
          </>
        ),
      },
    ],
  },
];

export function EscalatorLiftCleaningSeoChecklist() {
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
            Beyond the standard wipe-and-go
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Escalator &amp; Lift Maintenance Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for escalators and lifts follow a
            rigorous, agency-approved checklist designed to restore your
            equipment to optimal cleanliness and functionality. From escalator
            step-tread restoration and handrail virucidal sanitisation through
            lift-car interior polishing and door-track maintenance to the
            often-missed technical details that separate a &ldquo;wipe&rdquo;
            from a &ldquo;reset&rdquo; &mdash; below is the scope we deliver
            as standard, regardless of building type, footprint, or occupancy
            schedule.
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
// (matches the VCT/Glass-Partition pattern when no [H3] marker
// is present).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Risk Assessment",
    description:
      "Contact us to arrange a visit. We will assess your systems and perform a full risk assessment to determine the most effective cleaning method. On-site escalator and lift audit: every escalator bank and travelator mapped (length, step count, handrail type, comb plate condition, glass balustrade type), every lift car mapped (interior material, mirror type, control panel type, button type, floor type, door track type), traffic pattern assessed (high/medium/low footfall), operational window confirmed (overnight, weekend, holiday closure, 24/7 transport shift-change lulls), occupancy constraints reviewed (in-hours presence, after-hours unsupervised, key-safes and alarm codes), and LOLER alignment confirmed with your lift engineer (we support LOLER inspection, we do not perform it). Risk Assessment &amp; Method Statement prepared &mdash; covering access method, surface type per zone, chemistry register (EN 14476 virucidal, neutral pH, HTM 01-05 clinical), and HSE working-at-height compliance. SafeContractor-aligned documentation. Fixed-price quote within 2 business days &mdash; no on-the-day upsells.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Bespoke Scheduling",
    description:
      "We arrange cleans at a time that suits your operational requirements &mdash; whether quarterly, bi-annual, annual, or ad-hoc. Your allocated escalator and lift cleaning crew is PAYE-employed, PVG-checked, uniformed, and trained in vertical-transport-specific protocols &mdash; Rosemor Rotomatic escalator cleaner operation, EN 14476 virucidal handrail sanitisation, HEPA dry mechanism vacuuming (CRN-rated for confined spaces), LOLER-compliant lift-engineer support, specialist stainless-steel polish (grain-aligned), mirror restoration (minimal-liquid technique to protect silvering), HTM 01-05 clinical chemistry for hospital environments, and SafeContractor methodology. We brief the crew on your equipment audit (escalator bank register, lift car register, control panel type, button type, floor type per car), your access window (overnight, weekend, holiday closure, shift-change lulls), your occupancy constraints (occupied shopping centre, transport hub with 24/7 operation, hospital with clinical zones, hotel with guests in the building, corporate HQ with executive traffic), and any operational constraints on chemistry or method. The same crew returns every visit, building real knowledge of your premises and your inspection regime.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy Pristine Equipment",
    description:
      "Experience vertical transportation that looks and operates like new, backed by our MaundyClean 100% satisfaction guarantee. You receive a signed cleaning log after every visit (crew name, time in/out, areas treated, escalator bank serviced, lift cars serviced, chemistry used, defects flagged), arrival and departure times, before-and-after photographs for major work, and issue-flagging for step wear, handrail degradation, glass panel damage, control panel fault, door track obstruction, mechanism noise, or LOLER inspection due &mdash; before they undermine a passenger safety event, an environmental health inspection, or a LOLER audit. From &pound;180 per visit for a single escalator or lift car through to &pound;POA for multi-site shopping-centre and transport-hub contracts with 24/7 coverage. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function EscalatorLiftCleaningSeoBooking() {
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
            Scottish business owners demand. From free site survey and risk
            assessment through bespoke scheduling to pristine equipment
            &mdash; no friction, no waiting, no surprises. Just
            &ldquo;speechlessly spotless&rdquo; escalators, travelators, and
            lift cars, every visit, and a compliance file that&rsquo;s
            audit-ready the day a facilities director, insurer, LOLER
            engineer, or operations manager walks in.
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
              Request Your Free Site Assessment Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Property Milestone
// (Semantic H2: "Solutions for Every Property Milestone")
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
    icon: KeyRound,
    title: "Move-In/Move-Out",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy cleaning combined with escalator and lift cleaning to ensure a Scottish commercial unit passes final inspection and lease handover",
    description: (
      <>
        Moving into a new commercial unit? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        ensures every part of the facility, including the lifts, is
        front-line ready. Every escalator step tread deep-cleaned, every
        lift car interior polished to a &ldquo;showcase&rdquo; shine, every
        handrail virucidal-sanitised, every door track vacuumed, and every
        control panel disinfected &mdash; deposit-back guarantees met, lease
        handover starts from a &ldquo;speechlessly spotless&rdquo; baseline,
        and the new tenant walks into a building that signals &ldquo;cared
        for&rdquo; from the moment they press the lift call button.
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
      "After builders clean removing heavy layers of builders dust from escalator step treads, lift car interiors, and door tracks in a Scottish post-construction commercial fit-out",
    description: (
      <>
        If your building has undergone home or office improvements, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is essential for removing heavy layers of builders&rsquo; dust from
        elevator shafts and tracks. Construction dust on escalator step
        treads, in lift door tracks, on mechanism zones, and inside lift car
        interiors re-enters the air for months after a fit-out &mdash; we
        capture it at source with HEPA vacuuming (dry only in mechanism
        zones &mdash; never wet, electrical risk), specialist stainless-steel
        polishing, and EN 14476 virucidal sanitisation of high-touch
        surfaces before the building re-opens to the public.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: Gem,
    title: "Floor Preservation",
    href: "/services/marble-polishing",
    image: IMG.leaseMarble,
    imageAlt:
      "Marble polishing service paired with escalator and lift cleaning to restore the original splendour of a Scottish commercial lobby's natural stone floor and lift car marble interior",
    description: (
      <>
        Pair your escalator clean with our{" "}
        <Link
          href="/services/marble-polishing"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Marble Polishing
        </Link>{" "}
        service to restore the original splendour of your lobby&rsquo;s
        natural stone. The lift car marble floor, the lobby marble that
        surrounds the escalator bank, and the marble feature walls in the
        lift lobby all benefit from diamond-honing (grit progression
        50/100/200/400/800/1500/3000 with a final powder polish), slip-resistant
        impregnating sealer, and a finish that matches the &ldquo;showcase&rdquo;
        standard of the freshly-cleaned escalator and lift car it sits next
        to &mdash; the cohesive top-to-bottom finish that signals &ldquo;this
        building is cared for&rdquo;.
      </>
    ),
    cta: "Explore marble polishing",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt:
      "Antiviral sanitisation and electrostatic disinfection of high-touch lift buttons, escalator handrails, and entry systems in a Scottish commercial reception alongside routine escalator and lift cleaning",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        for total biological security in confined lift spaces. EN 14476
        virucidal chemistry (proven effective against enveloped viruses
        including flu, coronavirus, and norovirus), electrostatic
        disinfection of every high-touch surface (lift buttons, handrails,
        entry phones, control panels, door handles), and a biological-reset
        protocol that complements routine escalator and lift cleaning &mdash;
        essential for hospitals, care homes, food-service buildings, and any
        commercial facility where biological security is a compliance
        requirement, not a nice-to-have.
      </>
    ),
    cta: "Explore antiviral sanitisation",
  },
];

export function EscalatorLiftCleaningSeoInterlinking() {
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
            Beyond the escalator clean &middot; property lifecycle
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Milestone
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our escalator maintenance is the heartbeat of your
            facility&rsquo;s health, but we offer specialized &ldquo;resets&rdquo;
            for major property milestones. From end-of-tenancy handovers and
            post-renovation dust clear-outs through marble floor preservation
            and antiviral sanitisation for biological security &mdash; the
            same trusted, vetted crew can step up whenever your property needs
            more than a standard escalator and lift visit.
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
// (Semantic H2: "Escalator & Lift Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/escalator-lift-cleaning-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function EscalatorLiftCleaningSeoNearMe() {
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
              Local escalator &amp; lift cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Escalator &amp; Lift Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;escalator cleaning near me&rdquo; or
              &ldquo;lift cleaning near me&rdquo; in Scotland? Maundy Clean
              covers shopping-centre facilities managers, transport-hub
              operations leads, hospital estates teams, hotel general
              managers, corporate-HQ facilities directors, and retail-chain
              operations leads across the Central Belt, Highlands, Borders,
              and Islands &mdash; from Glasgow&rsquo;s shopping centres and
              Edinburgh&rsquo;s corporate towers to Aberdeen&rsquo;s transport
              hubs and Dundee&rsquo;s retail atria, plus commercial estates in
              Stirling, Perth, Inverness, and Ayr. Same SafeContractor-approved,
              PVG-checked, uniformed escalator and lift specialists, same
              dedicated crew every visit, same rapid response to
              streak-emergency callouts ahead of client visits, LOLER
              inspections, and EHO audits &mdash; wherever your property
              happens to be. Find your local escalator and lift cleaning
              specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean escalator and lift cleaning coverage areas"
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
                  Same SafeContractor-approved escalator and lift cleaning crews, same 100% satisfaction guarantee &mdash; from
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
                <Link href="/services/escalator-lift-cleaning-near-me#locations">
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
                Find your local escalator &amp; lift crew
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
                    href={`/services/escalator-lift-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> escalator care</span>
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
            Our local escalator and lift cleaning crews operate across Glasgow&rsquo;s
            International Financial Services District, Merchant City, Sauchiehall
            Street shopping centres, and Silverburn retail parks (corporate
            towers, shopping-centre escalator banks, hotel glass lift shafts,
            and transport-hub travelators), Edinburgh&rsquo;s Exchange District,
            New Town, Quartermile, and St James Quarter (5-star hotels, retail
            flagships, listed heritage buildings with period lift cars, and
            tram-interchange escalators), Aberdeen&rsquo;s energy-corridor West
            End, Union Square transport hub, and Tullos industrial estates
            (energy operators, corporate headquarters, harbour-side curtain-walling),
            Dundee&rsquo;s Waterfront, Overgate shopping centre, and City
            Centre professional services buildings (facilities teams and
            boutique retail with atrium escalator banks), and Scottish
            commercial and residential districts across the Central Belt &mdash;
            from Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re
            searching for a shopping-centre escalator deep clean in Glasgow, a
            hotel glass lift shaft polish in Edinburgh, a transport-hub
            travelator sanitisation in Aberdeen, or a corporate-HQ lift car
            restoration in Dundee, Maundy Clean assigns a vetted,
            PAYE-employed, PVG-checked, SafeContractor-approved escalator and
            lift cleaning crew that stays with you for the long run. Same crew,
            same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Free Site Assessment Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function EscalatorLiftCleaningSeoFinalCta() {
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
            Ready to book your free site assessment?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Free Site Assessment Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Shopping-centre facilities managers, transport-hub operations
            leads, hospital estates teams, hotel general managers,
            corporate-HQ facilities directors, and retail-chain operations
            leads &mdash; book a free, no-obligation site survey with our
            management team and receive an itemised proposal within 2
            business days. Rosemor Rotomatic escalator deep cleaning, EN 14476
            virucidal handrail sanitisation, HEPA dry mechanism vacuuming,
            LOLER-compliant lift-engineer support, HTM 01-05 clinical
            chemistry for hospital environments, specialist stainless-steel
            polish (grain-aligned), mirror restoration, door-track
            maintenance, SafeContractor methodology, full RAMS documentation,
            PVG-checked uniformed professionals who become part of your team,
            out-of-hours scheduling to avoid operational disruption, defect
            reporting, and the multi-site one-invoice convenience that lets
            you consolidate every Scottish property on a single audit-ready
            compliance file. From &pound;180 per visit for a single escalator
            or lift car through to &pound;POA for multi-site shopping-centre
            and transport-hub contracts with 24/7 coverage. No pushy sales
            call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Free Site Assessment Today
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
// 3 Q&As from the brief (SafeContractor approved, provide own
// equipment, work out-of-hours)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners SafeContractor approved?",
    a: "Yes. MaundyClean follows all industry safety best practices and provides professional services that help businesses meet strict health and safety regulations. We are SafeContractor-approved, hold full employer&rsquo;s liability insurance, &pound;5m public liability insurance, and professional indemnity cover, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, retail-chain compliance, and corporate insurance files. Every escalator and lift cleaning operative is PAYE-employed (no agency subs), PVG-checked (essential for occupied shopping centres, transport hubs, hospitals, hotels, retail, and any building where the public, guests, patients, or staff are present), uniformed, photo-ID badged, and trained in vertical-transport-specific protocols &mdash; Rosemor Rotomatic escalator cleaner operation, EN 14476 virucidal sanitisation, HEPA dry mechanism vacuuming (CRN-rated for confined spaces), LOLER-compliant lift-engineer support, HTM 01-05 clinical chemistry for hospital environments, IRATA-certified Rope Access (where required for atrium high-reach), IPAF-certified Mobile Platform operation, and working-at-height rescue plans. Our documentation is audit-ready for environmental health inspection, HSE working-at-height review, LOLER engineer review, and operations director review; we provide signed cleaning logs, before/after photos, training records, COSHH datasheets, RAMS, IRATA and IPAF certificates, and vetting records (PVG) for your compliance file.",
  },
  {
    q: "Do you provide your own cleaning equipment?",
    a: "Absolutely. We supply all our own purpose-built machinery and non-toxic materials, which are included in your competitive quote. The Rosemor Rotomatic Escalator Cleaner (our primary escalator deep-cleaning machine &mdash; a self-contained rotary brush with integral chemistry feed and vacuum pickup) is owned and maintained by MaundyClean, deployed from our Glasgow and Edinburgh depots, and operated only by trained, certified operatives. We never hire escalator cleaning equipment from a third party on the day (the hire fleet may not be available, may be poorly maintained, or may be the wrong specification for your escalator). Our full equipment register includes: HEPA vacuums (CRN-rated for confined-space mechanism zones), specialist stainless-steel polishers, microfibre mirror cloths, EN 14476 virucidal applicators, Reach-and-Wash telescopic poles (carbon-fibre, up to 65 feet / 20m for high-reach glass), squeegees (Ettore and Unger), IPAF-certified Mobile Platforms (cherry-picker and scissor-lift, hired on contract when required &mdash; with our own certified operators), IRATA-certified Rope Access kits, and HTM 01-05 chemistry sets for hospital environments. All chemistry is REACH-compliant, biodegradable, non-toxic, and safe for staff, visitors, patients, and guests to walk past mid-clean. No hidden hire fees, no on-the-day equipment upsells &mdash; the price we quote is the price you pay.",
  },
  {
    q: "Can you work out-of-hours?",
    a: "Yes. We perform services at times that suit your unique operational requirements, including early mornings or late evenings, to minimize disruption to passenger flow. Shopping centres typically require cleans between 22:00 and 06:00 (after the centre closes and before the early-bird staff arrive &mdash; we hold your alarm code and key-safe access under a documented confidentiality protocol). Transport hubs typically require shift-change lulls (04:00&ndash;06:00 or 23:00&ndash;01:00 &mdash; the natural gaps in 24/7 operation when passenger flow is lowest). Hospitals typically require cleans in clinical-zone quiet hours (often 20:00&ndash;06:00, with HTM 01-05 chemistry and infection-control nurse sign-off). Hotels typically require cleans between 09:00 and 16:00 (after the morning check-out rush and before the evening check-in rush &mdash; guests in the building, but lift traffic is low). Corporate HQs typically require cleans between 18:00 and 06:00 (after the corporate workforce goes home &mdash; or over a weekend closure). Retail with trading hours typically requires Sunday late-evening or early-Monday-morning cleans. We document the access window in your RAMS, we brief the crew on the access protocol, and we hold your alarm code and key-safe under the same confidentiality protocol every visit. The same crew returns every visit &mdash; so they know your access protocol as well as your facilities team does.",
  },
];

export function EscalatorLiftCleaningSeoFaq() {
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
            Escalator &amp; lift cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our escalator and lift cleaning
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
                Request Your Free Site Assessment Today
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

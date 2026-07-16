"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Shield,
  ShieldCheck,
  Leaf,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Wind,
  SprayCan,
  Crown,
  Users,
  Home,
  KeyRound,
  Hammer,
  UserCheck,
  CalendarCheck,
  Award,
  Gem,
  ShoppingBag,
  Store,
  Tag,
  Phone,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Microscope,
  FlaskConical,
  Biohazard,
  AirVent,
  Lightbulb,
  Boxes,
  DoorOpen,
  Wrench,
  Bug,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// Re-using the disinfection-service image set (clinical/
// technical cleaning aesthetic applies equally to pest prep)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/8a7c4d6e0b51.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistHighTouch:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistFogging:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  checklistDetails:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseTrauma:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
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
// Semantic H1: "Professional Pest Control Prep & Infestation Cleaning Scotland"
// ============================================================

export function PestControlPrepSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean pest control prep technician in full PPE HEPA-vacuuming a Scottish residential kitchen before professional extermination treatment"
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
            Pest Control Prep &amp; Infestation Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Pest Control Prep &amp; Infestation Cleaning Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Strategic Technical Preparation, Absolute Hygiene Compliance, and the Maundy Tradition of
            Excellence for Effective Treatment. In the battle against household or commercial pests, the
            most effective insecticide or heat treatment is only as successful as the preparation that
            precedes it. At MaundyClean, we provide a premium pest control prep service designed to ensure
            your premises meet the exceptionally high cleaning criteria required for professional extermination.
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
                Request Your Bespoke Prep Survey Today
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
                View Our Technical Cleaning Checklist
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
              <Bug className="w-4 h-4 text-[var(--gold)]" /> BPCA-Contractor Trusted
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe Supplies
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> 7-Day Flexible Scheduling
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
// an inline <Link> to Recurring Home Cleaning. Three intro
// paragraphs: p1 + p2-with-link + p3.
// ============================================================

export function PestControlPrepSeoIntro() {
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
                alt="Maundy Clean pest control prep specialist using HEPA vacuum and industrial degreasers to prepare a Scottish property for professional extermination"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Speechlessly Spotless &mdash; Treatment-Ready
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy and &ldquo;same-staff&rdquo; consistency we bring
                  to Scotland&rsquo;s finest residences &mdash; applied to the high-stakes world of
                  infestation cleaning.
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
                  <Bug className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Prep Efficacy</div>
                  <div className="text-xs font-bold text-[var(--ink)]">100%</div>
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
              Pest control prep &amp; infestation cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Treatment-Ready Preparation
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              Pest control professionals across Glasgow and Edinburgh often cannot treat properties that
              are cluttered or heavily soiled, as debris provides hiding spots and reduces the efficacy of
              chemical applications. At MaundyClean, we provide a premium pest control prep service designed
              to ensure your premises meet the exceptionally high cleaning criteria required for professional
              extermination. We are not the pest controller &mdash; we are the preparation partner that
              determines whether their treatment succeeds or fails.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While we are the recognised authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s most prestigious residences, we bring that same level of technical
              intimacy and &ldquo;same-staff&rdquo; consistency to the high-stakes world of infestation
              cleaning. We act as your strategic partner, delivering a &ldquo;speechlessly spotless&rdquo;
              environment that allows your pest control technician to work with 100% efficiency &mdash; no
              clutter to work around, no harbourages untreated, no rework on the day.
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
                { icon: Bug, label: "BPCA-contractor trusted" },
                { icon: Leaf, label: "Child & pet-safe" },
                { icon: ShieldCheck, label: "99.99% pathogen control" },
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
// Section 2 - Why MaundyClean is Scotland's Choice for Technical Pest Prep
// (Semantic H2: "Why MaundyClean is Scotland's Choice for Technical Pest Prep")
// Image+copy split layout with 4 trust pillars per the brief:
//   UserCheck (same trusted team) /
//   FileText (total regulatory compliance) /
//   ShieldCheck (99.99% pathogen & bacteria control) /
//   Leaf (safe for families & pets).
// ALL 4 pillar bodies typed as ReactNode for codebase consistency.
// ============================================================

type TrustCard = {
  icon: typeof ShieldCheck;
  title: string;
  description: ReactNode;
};

const TRUST_CARDS: TrustCard[] = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team",
    description:
      "Discretion and reliability are paramount during an infestation. We ensure the same vetted, background-checked professionals manage your prep to maintain privacy and build a deep understanding of your property&rsquo;s &ldquo;risky&rdquo; hotspots. The same PAYE-employed, PVG-checked, uniformed pest-prep technicians return every visit &mdash; learning your property&rsquo;s harbourage map (which kitchen voids the mice trail through, which skirting gaps the bedbugs hide behind, which loft eaves the squirrels enter from, which pipe casings the cockroaches cluster in), your pest controller&rsquo;s specific prep instructions, your access constraints (occupied home, commercial premises trading hours, HMO tenant coordination), and your inspection regime (landlord, EHO, Environmental Health, Care Inspectorate). When your regular crew is on annual leave, we send a trained backup who has been briefed on your property &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking your property during an active infestation.",
  },
  {
    icon: FileText,
    title: "Total Regulatory Compliance",
    description:
      "We support businesses and homeowners throughout Scotland to uphold required health and safety standards. Our teams follow robust decontamination protocols and provide full RAMS (Risk Assessments and Method Statements) for every site survey. The RAMS covers: pest type (rodents, insects, bedbugs, fleas, wasps, birds), property type (residential, HMO, commercial, food business, healthcare), contamination classification (droppings, urine, hair, egg cases, webbing, biological residue), removal protocol (HEPA-negative-air containment, sealed bagging, licensed waste carrier), chemistry register (EN 14476 virucidal, EN 1276 bactericidal, EN 1650 fungicidal, HSE-approved, food-safe, REACH-compliant), PPE protocol (Tyvek suit, FFP3 respirator, nitrile gloves, eye protection), and waste-water disposal. We are SafeContractor-approved, hold full employer&rsquo;s liability and &pound;5m public liability, can name your business on our policy as additional insured, and provide audit-ready documentation &mdash; COSHH datasheets, training records, Treatment Certificates, and licensed waste-transfer notes &mdash; for your compliance file.",
  },
  {
    icon: ShieldCheck,
    title: "99.99% Pathogen & Bacteria Control",
    description:
      "Beyond clearing clutter, we provide a disinfection service that ensures equipment and surfaces are 99.99% virus and bacteria-free. This is critical after an infestation to remove health risks like salmonella or hantavirus often carried by pests. The chemistry is certified to EN 14476 (virucidal &mdash; proven effective against enveloped viruses), EN 1276 (bactericidal &mdash; including MRSA, E. coli, Salmonella, and Listeria), and EN 1650 (fungicidal). The 30-day residual protection from our antimicrobial surface coating bonds to treated surfaces and continues to kill pathogens on contact between visits &mdash; ideal for the post-treatment window when biological residue from dead pests is the highest-risk contamination source. ATP swab verification available on request &mdash; we prove the result, we don&rsquo;t just claim it.",
  },
  {
    icon: Leaf,
    title: "Safe for Families & Pets",
    description:
      "Following treatment, your home must remain a sanctuary. We utilise only certified child-safe and pet-safe products, ensuring a fresh, non-toxic environment without the harsh chemical odors common with industrial cleaning agencies. The cardinal rule of our pest prep service: nothing that off-gasses into an occupied space. No chlorine-based bleach (off-gasses for hours, triggers asthma, unacceptable in homes with children or pets). No quaternary-ammonium compounds at high concentration (residue risk on food-contact surfaces). No VOC-heavy aerosols. We use a hydrogen-peroxide-based virucide (decomposes to water and oxygen, no residue), a plant-derived biocidal surfactant for pre-cleaning, and an antimicrobial surface coating that is EPA-approved for use in occupied buildings. Every chemistry is biodegradable, food-safe (no rinse required on food-contact surfaces), child-safe, pet-safe, and safe for occupants to re-enter after the 8-minute dry time. The finishes you&rsquo;ve invested in are protected &mdash; and the family who returns the morning after treatment is not walking into chemical fumes.",
  },
];

export function PestControlPrepSeoWhy() {
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
                alt="Maundy Clean pest prep crew in full PPE preparing a Scottish property for professional extermination treatment"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Vetted, uniformed, PAYE-employed
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same trusted crew, every visit, building real knowledge of your property&rsquo;s
                  harbourage map and your pest controller&rsquo;s prep brief.
                </p>
              </div>
            </div>
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
              Why MaundyClean for technical pest prep
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why MaundyClean is Scotland&rsquo;s Choice for Technical Pest Prep
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              Effective pest preparation requires more than a surface-level wipe; it demands a technical
              &ldquo;reset&rdquo; of the environment. MaundyClean addresses these challenges through
              vocational excellence and a high-trust model &mdash; the same vetted crew, the same
              regulatory discipline, the same pathogen-control chemistry, and the same child-safe
              standard we bring to Scotland&rsquo;s most prestigious homes.
            </p>
          </motion.div>
        </div>

        {/* First two cards as a 2-column strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {TRUST_CARDS.slice(0, 2).map((card) => {
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

        {/* Third + fourth cards as a 2-column strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRUST_CARDS.slice(2, 4).map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
// Section 3 - Our Comprehensive Pest Control Prep Checklist
// (Semantic H2: "Our Comprehensive Pest Control Prep Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Kitchen & Food Area Neutralisation (3 items)
//   2. Living & Sleeping Area "Reset" (3 items)
//   3. Often-Missed Technical Details (2 items)
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO intro paragraphs on the 3 checklist cards
// (just H3 title + sub-points).
// ============================================================

type ChecklistPoint = {
  icon: typeof Sparkles;
  title: string;
  text: string;
};

const CHECKLIST_ITEMS: {
  icon: typeof ShieldCheck;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  points: ChecklistPoint[];
}[] = [
  {
    icon: HeartPulse,
    image: IMG.checklistHighTouch,
    imageAlt:
      "Maundy Clean pest control prep specialist removing all items from a Scottish kitchen cupboard and wiping interiors to remove crumbs and grease that attract pests",
    title: "1. Kitchen & Food Area Neutralisation",
    description:
      "The kitchen is the highest-activity zone for most infestations &mdash; rodents trail along kickplates, cockroaches cluster behind appliances, pantry pests breed in forgotten cereal packets. Our kitchen neutralisation protocol removes every food source, every harbourage, and every grease trap that supports pest life &mdash; so the pest controller&rsquo;s chemistry reaches every surface that matters.",
    points: [
      {
        icon: Boxes,
        title: "Technical Cupboard Clearing",
        text: "Removing all items from units and meticulously wiping interiors to remove crumbs and grease that attract pests. Every cupboard emptied &mdash; food cupboards, under-sink cupboards, pantries, wall units, base units. Contents staged on the counter or in sealed bins. Interiors vacuumed with a HEPA crevice tool (captures eggs and larvae, not just visible debris), then damp-wiped with a general cleaner to remove grease film and spillage residue. Edges and corner joints detailed (where flour weevils and pantry moths lay eggs). Expired or infested food bagged and disposed of. Cupboards left empty and treatment-ready &mdash; the pest controller can apply chemistry to every interior surface, then we re-stock after the contact time has elapsed.",
      },
      {
        icon: SprayCan,
        title: "Industrial Degreasing",
        text: "Removing heavy grime from behind appliances (cookers, fridges) where pests often nest. Cooker pulled forward, plinth removed, the full grease-load behind and underneath removed with an industrial caustic-free degreaser. Fridge pulled out, drip tray emptied and disinfected, condenser coils vacuumed (cockroach harbourage). Washing machine and dishwasher pulled out, supply hoses inspected, the lint and soap-scum accumulation underneath removed. Extractor hood filter removed, soaked, and refitted. Wall tiles behind the cooker degreased. The surfaces generic cleaners never reach &mdash; the nesting sites that support the infestation.",
      },
      {
        icon: CheckCircle2,
        title: "Sanitisation of High-Touch Points",
        text: "Meticulous disinfecting of all door handles, kickplates, and counter surfaces to prevent cross-contamination. Door handles (both sides of every kitchen door), drawer pulls, fridge handle, oven handle, microwave handle, kettle handle &mdash; all damp-wiped with EN 1276 bactericidal chemistry. Kickplates removed, cleaned behind, refitted. Counter surfaces sanitised (food-safe chemistry, no rinse required). Sink and drainer sanitised. Bin area deep-cleaned and deodorised. The high-touch surfaces that rodents trail along and that insects traverse &mdash; sanitised so the pest controller&rsquo;s chemistry adheres properly and your post-treatment re-occupancy is biologically safe.",
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistFogging,
    imageAlt:
      "Maundy Clean pest prep technician using industrial-grade HEPA vacuum on a Scottish living-room carpet to remove pest eggs, larvae, and debris before extermination treatment",
    title: "2. Living & Sleeping Area \u201cReset\u201d",
    description:
      "Living rooms, bedrooms, and hallways are the perimeter zones the pest controller needs for their barrier treatment. Furniture migration, floor restoration, and window/frame care are the three sub-tasks &mdash; every one of them designed to expose the harbourages the pest controller has to treat. Get any of these wrong and the perimeter barrier fails.",
    points: [
      {
        icon: DoorOpen,
        title: "Furniture Migration",
        text: "Moving all furniture away from skirting boards to allow for a full perimeter barrier treatment. Sofas pulled 60cm from the wall. Beds pulled out and (for bedbug protocol) frames dismantled. Wardrobes pulled forward where safe (heavy or fitted units cleaned around, not moved). Bookcases and side tables pulled out. Rugs rolled and removed. Curtains taken down where the pest controller has requested it (bedbug and moth protocol). Every piece of furniture moved, the void behind it vacuumed (HEPA), the skirting board wiped down, and the furniture left in its migrated position for the treatment visit. The pest controller walks in and applies a continuous perimeter barrier &mdash; no gaps, no untreated voids.",
      },
      {
        icon: Droplets,
        title: "Intensive Floor & Carpet Restoration",
        text: "Using industrial-grade vacuums to remove eggs, larvae, and debris from high-traffic floor surfaces. Miele Compressed Air or equivalent HEPA vacuum (filters to 0.3 micron &mdash; captures pest eggs, not just visible debris). All carpets vacuumed in two directions (pile and against pile) to lift embedded contamination. Hard floors vacuumed then damp-mopped. Edge tool run along every skirting. Stair carpet vacuumed edge-to-edge. Under-bed and under-sofa areas vacuumed (the highest-egg-load zones in any bedroom). Rug corners turned back and vacuumed underneath. The floor prep that determines whether the pest controller&rsquo;s residual chemistry bonds to a clean substrate or sits on a layer of biological contamination.",
      },
      {
        icon: Wind,
        title: "Window & Frame Care",
        text: "Cleaning the inside of windows and frames to remove any traces of spider webs or insect debris. Internal glass squeegeed with pure de-ionised water. Window frames detailed (the tracks where flies cluster, the corners where spiders build). Window sills wiped down. Spider webbing removed from corners, light fittings, and curtain pelmets. Insect debris (fly spots, wasp traces, ladybird staining) removed from glass and frames. The perimeter detailing that signals to the pest controller (and to you) that every void has been addressed &mdash; not just the obvious ones.",
      },
    ],
  },
  {
    icon: FileText,
    image: IMG.checklistDetails,
    imageAlt:
      "Maundy Clean pest prep specialist wiping skirting boards and door frames in a Scottish property to ensure pest-control treatment chemicals adhere properly to every perimeter surface",
    title: "3. Often-Missed Technical Details",
    description:
      "The perimeter work that separates a genuine pest-prep reset from a \u201cdeep clean with extra vacuuming.\u201d Skirting boards, door frames, and waste management are the three surfaces generic contractors skip &mdash; and the three surfaces that determine whether the pest controller\u2019s chemistry bonds to a clean substrate or sits on a layer of biological contamination.",
    points: [
      {
        icon: AirVent,
        title: "Visible Skirting Boards",
        text: "Our cleaners meticulously wipe all skirting boards, door frames, and surrounding fixtures as standard to ensure treatment chemicals adhere properly. Skirting boards hand-wiped the full perimeter of every room (the primary barrier-treatment surface &mdash; if chemistry can\u2019t bond, the barrier fails). Door frames detailed top-to-bottom (the vertical surfaces rodents trail along). Architraves and picture rails wiped. Plug sockets and light-switch backplates wiped (cockroach harbourage). Radiator backs vacuumed with a HEPA crevice tool. Pipe casings wiped down (the vertical runs that rodents and insects use to move between floors). The perimeter work your pest controller notices first on the pre-treatment walk &mdash; included as standard, never as an upsell.",
      },
      {
        icon: Trash2,
        title: "Waste & Debris Management",
        text: "Efficient handling and removal of infested materials to maintain a clutter-free environment. Droppings, urine, hair, egg cases, webbing, and shed cuticle removed using HEPA-filtered vacuums (no airborne recontamination). Contaminated soft materials (heavily-soiled rugs, contaminated cardboard, infested food packaging) bagged, sealed, and disposed of as soft clinical waste via licensed carrier. Waste-transfer notes provided for your compliance file. Bin areas deep-cleaned and deodorised. Stored items (cardboard boxes, paper archives) flagged for relocation or disposal. The debris-removal work that turns \u201cthe pests are dead\u201d into \u201cthe property is genuinely safe to reoccupy.\u201d",
      },
    ],
  },
];

export function PestControlPrepSeoChecklist() {
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
            Beyond the standard deep clean
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Pest Control Prep Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for pest preparation follow a rigorous, agency-approved checklist
            designed to address the specific requirements of professional exterminators. From kitchen
            neutralisation through living-area reset to the often-missed technical details &mdash; below
            is the scope we deliver as standard, regardless of pest type or property type.
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
                  <p
                    className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <ul className="space-y-3 mt-auto">
                    {item.points.map((point) => {
                      const PointIcon = point.icon;
                      return (
                        <li
                          key={point.title}
                          className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85"
                        >
                          <PointIcon className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                          <span>
                            <strong className="font-semibold text-[var(--ink)]">{point.title}</strong>
                            &mdash; <span dangerouslySetInnerHTML={{ __html: point.text }} />
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
// Section 4 - 3-Step "Hassle-Free" Process
// (Semantic H2: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Bespoke Plan",
    description:
      "Contact us to organise a free site survey. We will assess the level of preparation required based on your pest controller&rsquo;s specific instructions. On-site survey covers: pest type (rodents, insects, bedbugs, fleas, wasps, birds), property type (residential, HMO, commercial, food business), contamination load (droppings, urine, biological residue), harbourage map (kitchen voids, skirting gaps, loft eaves, pipe casings), access constraints (occupied home, trading hours, HMO tenant coordination), and your pest controller&rsquo;s prep brief. We coordinate directly with your pest controller where you want us to. Risk Assessment &amp; Method Statement prepared. Fixed-price quote within 2 business days &mdash; no on-the-day upsells.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians with in-depth knowledge of &ldquo;beyond clean&rdquo; hygiene and infestation protocols. Your allocated prep crew is PAYE-employed, PVG-checked, uniformed, and trained in pest-prep-specific protocols &mdash; HEPA vacuum operation, contaminant removal under negative-air containment, EN 14476 virucidal application, EN 1276 bactericidal wipe-down, licensed biohazard waste handling, HSE Biological Agents Code of Practice, and SafeContractor methodology. We brief the crew on your pest controller&rsquo;s prep brief, your harbourage map, your access window (overnight, weekend, pre-treatment-day, post-treatment-day), and any operational constraints (occupied home, commercial premises trading hours, food-business shutdown window). The same crew returns for the post-treatment disinfection &mdash; building real knowledge of your property.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Treatment-Ready Facility",
    description:
      "Experience a workspace or home that looks, smells, and feels fresh, backed by our MaundyClean satisfaction guarantee. You receive a signed Treatment Certificate after every visit (technician name, time in/out, rooms prepped, contaminants removed, chemistry used with batch numbers, photo evidence of pre-prep and post-prep condition), arrival and departure times, before-and-after photos, and issue-flagging for harbourage access gaps, contamination spread, or structural pest-entry points &mdash; before they undermine the pest controller&rsquo;s treatment. From &pound;245 per visit for a single-room prep through to &pound;POA for multi-site commercial contracts with 7-day scheduling. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function PestControlPrepSeoBooking() {
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
            We have optimised our booking experience to be uncomplicated and straightforward, providing
            the responsive management support Scottish property owners demand. From free site survey and
            bespoke prep plan through professional matching to a treatment-ready facility &mdash; no
            friction, no waiting, no surprises. Just a &ldquo;speechlessly spotless&rdquo; property,
            ready for your pest controller&rsquo;s treatment with 100% efficacy.
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
              Request Your Bespoke Prep Survey Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Long-Term Protection
// (Semantic H2: "Solutions for Long-Term Protection")
// Image-topped cards with internal links to specialist services.
// All 4 card descriptions are ReactNode values (each contains an
// inline <Link> per the brief) - rendered via the
// typeof sol.description === "string" check.
// Card 4 (Hygiene Resets) has TWO inline links: Antiviral Sanitisation
// AND Disinfection Services.
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
    title: "Maintaining the Standard",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt:
      "Recurring home cleaning service paired with pest control prep to maintain a Scottish residential property to a 5-star standard after extermination",
    description: (
      <>
        After successful extermination, our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        service is designed to keep your home maintained to a 5-star standard, preventing future buildup
        that attracts pests. The same PAYE-employed, PVG-checked crew that prepped your property returns
        weekly or fortnightly &mdash; with real knowledge of your harbourage map, your pest controller&rsquo;s
        follow-up schedule, and the high-risk zones in your home. Recurring visits catch the early signs
        (droppings under the sink, gnaw marks on pipe casings, rub marks on skirtings) before they become
        another infestation. The single most cost-effective pest-prevention step you can take after a
        treatment.
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
      "End of tenancy cleaning combined with pest control prep to ensure a Scottish property is fully sanitised and treatment-ready for lease handover",
    description: (
      <>
        Moving in or out of a property that had a history of pests? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        ensures units are front-line ready and fully sanitised for handover. We work to the letting
        agent&rsquo;s inventory, restore the unit to its original condition, deep-clean every surface
        from ceiling vents to floor edges, then apply a full EN 14476 virucidal treatment before key
        handover &mdash; the new tenant walks into a space that is not just visually clean but
        biologically safe and pest-history neutralised. Deposit-back guarantees met, lease handover
        starts from a &ldquo;speechlessly spotless&rdquo; baseline.
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
      "After builders clean removing heavy construction dust and disturbed wall-cavity debris from a Scottish property before pest control treatment",
    description: (
      <>
        If your home improvements have disturbed wall cavities, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is essential for removing heavy construction dust and debris. Renovation disturbs existing
        harbourages &mdash; rodents nesting in loft insulation, wasps in cavity walls, carpet beetles in
        lifted floorboards &mdash; and the displaced pests often relocate into the lived-in areas of the
        property. We HEPA-vacuum every surface, damp-wipe with a general cleaner, then coordinate
        directly with your pest controller to time the treatment correctly. The two-stage protocol
        (builders clean &rarr; pest prep &rarr; pest controller treatment &rarr; post-treatment disinfection)
        is the only way to handle a renovation-triggered infestation properly.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: Biohazard,
    title: "Hygiene Resets",
    href: "/services/disinfection-services",
    image: IMG.leaseTrauma,
    imageAlt:
      "Antiviral sanitisation and disinfectant spraying service for a Scottish property after pest control treatment to ensure the home remains biologically safe",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        and disinfectant spraying to ensure your home remains biologically safe for up to 30 days
        following treatment. The post-treatment window is the highest-risk contamination period &mdash;
        dead pests, droppings, urine, and shed cuticle remain on every surface the pests traversed,
        each one a pathogen reservoir (salmonella from rodents, hantavirus from mouse urine,
        allergenic proteins from cockroach cuticle, leptospirosis from rat urine). Our EN 14476
        virucidal / EN 1276 bactericidal treatment removes the biological residue and applies a
        30-day antimicrobial surface coating that continues to kill pathogens between visits. Pair
        with our{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Disinfection Services
        </Link>{" "}
        for the full biological reset.
      </>
    ),
    cta: "Explore hygiene reset services",
  },
];

export function PestControlPrepSeoInterlinking() {
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
            Beyond the prep visit &middot; long-term protection
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Long-Term Protection
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our pest prep services ensure successful treatment, but we offer specialised &ldquo;resets&rdquo;
            to maintain your property&rsquo;s health thereafter &mdash; from bringing the same
            pest-prevention standard home with a recurring schedule, through tenancy transitions and
            post-renovation dust clear-outs, to the 30-day biological-reset that turns &ldquo;the pests
            are dead&rdquo; into &ldquo;the property is genuinely safe to reoccupy.&rdquo; The same
            trusted, vetted crew can step up whenever your property needs more than a standard prep visit.
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
// (Semantic H2: "Pest Control Prep & Infestation Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid.
// Links to /services/pest-control-prep-near-me#<slug> which
// is the dedicated near-me page (created in tandem with this
// service page).
// ============================================================

export function PestControlPrepSeoNearMe() {
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
              Local pest control prep across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Pest Control Prep &amp; Infestation Cleaning Near Me, Across Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;pest control prep near me&rdquo; or &ldquo;infestation cleaning near
              me&rdquo; in Scotland? Maundy Clean covers homes, HMOs, restaurants, food businesses, and
              commercial properties across the Central Belt, Highlands, Borders, and Islands. Same vetted
              uniformed crews, same BPCA-contractor-trusted prep protocols, same 7-day scheduling &mdash;
              wherever your property happens to be. Find your local pest-prep specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean pest control prep & infestation cleaning service coverage areas"
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
                  Same vetted uniformed crews, same BPCA-contractor-trusted prep &mdash; from Glasgow to
                  Inverness.
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
                Find your local pest-prep crew
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
                    href={`/services/pest-control-prep-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> pest prep</span>
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
                  href="/services/pest-control-prep-near-me#locations"
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
            Our local pest-prep crews operate across Glasgow&rsquo;s residential West End, Edinburgh&rsquo;s
            New Town tenements, Aberdeen&rsquo;s energy-sector HMOs, Dundee&rsquo;s student flats, and the
            Highlands &mdash; from Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re searching for
            bedbug prep in a Glasgow flat, rodent prep for an Edinburgh restaurant, cockroach prep for an
            Aberdeen takeaway, or flea prep for a Dundee HMO, Maundy Clean assigns a vetted,
            PAYE-employed crew that stays with you for the long run. Same crew, same BPCA-contractor-trusted
            standard, same 7-day scheduling across the entire property lifecycle.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Prep Survey Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function PestControlPrepSeoFinalCta() {
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
            Ready to book your prep survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Bespoke Prep Survey Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted uniformed crews, BPCA-contractor-trusted prep
            protocols, 99.99% pathogen control with 30-day residual protection, full RAMS compliance,
            signed Treatment Certificates, and a 100% satisfaction guarantee &mdash; from &pound;245 per
            visit for a single-room prep through to a fully bespoke multi-site commercial contract with
            7-day scheduling. No pushy sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Prep Survey Today
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
                View Our Technical Cleaning Checklist
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
// 3 Q&As from the brief (own equipment, insured for infestation, out-of-hours)
// ============================================================

const SEO_FAQS = [
  {
    q: "Do you provide your own professional equipment?",
    a: "Yes. We supply all our own professional-grade equipment, including HEPA vacuums and non-toxic materials required for deep sanitisation, which are included in your competitive quote. Every crew arrives in a liveried van with Miele Compressed Air (or equivalent) HEPA-filtered vacuums (filters to 0.3 micron &mdash; captures pest eggs, larvae, and biological residue, not just visible debris), industrial caustic-free degreasers, EN 14476 virucidal chemistry with batch tracking, EN 1276 bactericidal wipes for touchpoint wipe-downs, full PPE (Tyvek suit, FFP3 respirator, nitrile gloves, eye protection), colour-coded microfibre cloths to prevent cross-contamination between zones, sealed biohazard bags and licensed waste-carrier documentation for any contaminated material we remove, and ATP swab readers for real-time pathogen-load verification on request. You provide access and a point of contact &mdash; we bring everything else. Equipment is PAT-tested, calibrated quarterly, and serviced by the manufacturer.",
  },
  {
    q: "Are your cleaners insured for infestation environments?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience serving Scotland&rsquo;s commercial and residential sectors in sensitive hygiene scenarios. We hold &pound;5m public liability, &pound;10m employer&rsquo;s liability, are SafeContractor-approved, and can name your business on our policy as additional insured. Our technicians are Disclosure Scotland PVG-checked, vaccinated against hepatitis B (relevant for rodent-borne pathogen exposure), and occupational-health monitored. We provide COSHH datasheets, training records, insurance certificates, licensed waste-transfer notes, and signed Treatment Certificates for every visit &mdash; suitable evidence for EHO inspection, landlord/letting-agent handover, insurer audit, and Care Inspectorate review where applicable. References from BPCA pest-control contractors across Glasgow, Edinburgh, Aberdeen, and Dundee available on request.",
  },
  {
    q: "Can you work out-of-hours to meet a pest control appointment?",
    a: "Yes. We offer flexible scheduling 7 days a week, including early morning or late evening shifts, to ensure your property is ready exactly when your treatment specialist arrives. The most common windows are pre-treatment-day evening (prep completed the night before the pest controller attends), pre-open (5am-7am) for a treatment-ready reset before staff arrive, post-close (7pm-10pm) for a full prep turnover after the building empties, overnight (10pm-6am) for commercial properties with trading-hours constraints, or weekend for a full-property prep with zero occupancy constraints. For commercial food businesses, we work around your shutdown window &mdash; the prep is timed so the pest controller can treat immediately after, with no trading-day loss. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols &mdash; keys stored in a coded safe, alarm codes encrypted, never labelled with your address.",
  },
];

export function PestControlPrepSeoFaq() {
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
            Pest control prep &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our pest control prep clients ask most often.
            Can&rsquo;t find what you need? Call us on{" "}
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
                Request Your Bespoke Prep Survey Today
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
                View Our Technical Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

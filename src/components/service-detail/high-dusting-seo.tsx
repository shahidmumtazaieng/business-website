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
  Layers,
  Brush,
  Home,
  Wind,
  Wrench,
  Warehouse,
  Hotel,
  Store,
  Lightbulb,
  AirVent,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (High-dusting-specific imagery, drawn from the existing
// high-dusting gallery plus the dedicated hero image)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistStructural:
    "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  checklistTechnical:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistSpecialised:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseAntiviral:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
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
// Semantic H1: "Professional High-Level Dusting & Commercial Dusting Services Scotland"
// ============================================================

export function HighDustingSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean high-level dusting specialist using MEWP cherry-picker access and HEPA H-class vacuum to remove dust from ceiling beams, ductwork, and high-mounted light fittings in a Scottish commercial property"
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
            High-Level Dusting &amp; Commercial Dusting &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional High-Level Dusting &amp; Commercial Dusting Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Technical Elevated Cleaning, Improved Air Quality, and the Maundy
            Tradition of Excellence for Your Commercial Heights. MaundyClean
            brings IPAF-certified high-reach operatives, MEWP cherry-picker
            and scissor-lift access, carbon-fibre telescopic poles for
            delicate surfaces, HEPA H-class vacuum capture at source,
            ductwork and pipe-run dust removal, beam &amp; truss cleaning,
            high-mounted light fixture detailing, extractor-fan restoration,
            eco-friendly non-toxic chemistry, HSE-compliant methodology,
            out-of-hours scheduling, defect reporting, and a
            &ldquo;speechlessly spotless&rdquo; elevated clean to every
            Scottish commercial property we serve &mdash; from Glasgow
            warehouses and Edinburgh hotel lobbies to Aberdeen retail units
            and Dundee food-processing facilities.
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
                Request Your Free High-Level Survey
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
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> IPAF-Certified &amp; HSE-Compliant
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted High-Reach Crew Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> HEPA H-Class Dust Capture
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
// ONE inline <Link>: /services/recurring-home-cleaning for
// "Recurring Home Cleaning". The brief gives three intro
// paragraphs (p1, p2-with-link, p3 geographic).
// ============================================================

export function HighDustingSeoIntro() {
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
                alt="Maundy Clean high-level dusting specialist using a HEPA H-class vacuum with soft horsehair brush attachment to remove dust from beams, ductwork, and high-mounted light fittings in a Scottish commercial property"
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
                  &ldquo;sanctuary&rdquo; care we bring to Scotland&rsquo;s finest properties
                  &mdash; applied to your commercial ceilings, beams, ductwork, light
                  fittings, extractor fans, high walls, and architectural features.
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
              High-level dusting &amp; commercial dusting &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish High-Level Dusting
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While regular cleaning addresses surface-level dirt and grime,
              high-level dusting is a specialised technical service designed
              to remove dust and debris from the high, hard-to-reach areas
              that are often neglected in standard maintenance cycles. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we understand that accumulated buildup in ceiling corners,
              ductwork, and light fixtures can harbour allergens, pathogens,
              and pollutants that pose significant health risks to occupants.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While we are the recognised authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s finest residences, we bring that same level
              of technical intimacy and &ldquo;speechlessly spotless&rdquo;
              finishing to the elevated surfaces of your business. Serving
              Glasgow, Edinburgh, and across Central Scotland, our goal is to
              take the stress out of arranging complex cleaning, allowing you
              to focus on what is important to you.
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
                { icon: Wind, label: "HEPA H-class capture" },
                { icon: Leaf, label: "Eco-friendly chemistry" },
                { icon: ShieldCheck, label: "IPAF-certified" },
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
// Section 2 - Why MaundyClean is Scotland's Expert in High-Level Maintenance
// (Semantic H2: "Why MaundyClean is Scotland's Expert in High-Level Maintenance")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / Wind / FileText / Leaf
// (icons chosen to reflect the brief's pillar themes: same trusted
// team every visit / enhanced indoor air quality / total regulatory
// compliance / eco-friendly & safe).
// ALL 4 pillar bodies start with the brief sentence verbatim and
// are extended with high-dusting-specific prose (no inline Links),
// but typed as ReactNode for codebase consistency with
// vct-floor-care-seo.tsx and marble-polishing-seo.tsx
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
      "Reliability is built on familiarity. We ensure the same highly trained professional or individual manages your project, allowing them to get to know the unique architectural nuances and safety requirements of your premises. The same IPAF-certified high-reach operatives return every visit &mdash; learning your access map (which ceiling zones need cherry-picker, which need scissor-lift, which need carbon-fibre pole, which need scaffold-tower), your building&rsquo;s weight-loading constraints (mezzanine floors, raised computer-room floors, heritage suspended ceilings), your operational hours (overnight window, weekend shutdown, holiday closures), your HVAC shutdown protocol (critical for ductwork cleaning), your fragile-surface register (marble lobbies, listed cornicing, glass balustrades), and your inspection regime. When your regular crew is on annual leave, we send a trained backup who has been briefed on your premises &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking a Scottish commercial high-reach environment.",
  },
  {
    icon: Wind,
    title: "Enhanced Indoor Air Quality",
    description:
      "High dusting isn&rsquo;t just about aesthetics; it&rsquo;s about health. By eliminating debris from beams and elevated surfaces, we create a safer, healthier environment for your staff and customers. Every time the heating cycles or a door opens, a portion of accumulated high dust re-enters the air you breathe &mdash; carrying allergens, particulate matter, mould spores, and (in industrial environments) process contaminants. Removing the dust at source eliminates the re-entry cycle. Typical commercial environments see a 15-30% reduction in staff sickness absence after a high-dusting programme, a measurable drop in respiratory-related HR complaints, and a cleaner lower-surface environment that holds daily cleaning standards for longer between visits. We don&rsquo;t just clean what you can see &mdash; we clean what you breathe.",
  },
  {
    icon: FileText,
    title: "Total Regulatory Compliance",
    description:
      "We understand that dust buildup can be detrimental to product safety and equipment. Our teams follow rigorous safety protocols and use professional-grade equipment suited for high-footfall and sensitive commercial environments. HSE HSG272 compliance for working at height, full Risk Assessment &amp; Method Statement (RAMS) prepared before work commences, IPAF certification for every operative on cherry-picker and scissor lift, working-at-height rescue plan in place for every job, Permit to Work documentation for occupied buildings, COSHH datasheets for every chemistry on site, HACCP-compliant documentation pack for food processing and pharmaceutical clients, FSA-inspector-ready evidence files, BRC audit support, and a written defect report flagging any maintenance issues identified during the work (damaged ductwork insulation, loose beam clips, corroded light fittings, water staining). Audit-ready documentation for environmental health inspection, insurer review, and operations director review &mdash; we provide signed high-dusting logs, before/after photos, IPAF certificates, and rescue plans for your compliance file.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "We utilise only certified non-toxic and child-safe products. This ensures your premises are safe for immediate use following a clean, without the harsh chemical residues common with industrial-only contractors. pH-neutral maintenance chemistry for surface wiping, biodegradable ductwork-cleaning chemistry, low-VOC formulations for occupied buildings (essential for hotels, retail, and offices that re-open the morning after a clean), EN 14476 virucidal disinfectant for high-touch high-mounted surfaces (door sensors, exit signs, fire-alarm pulls), fragrance-free cleaners by default for hospitality environments, food-safe chemistry for food-processing facilities, and HEPA H-class vacuum filtration that captures 99.995% of particles at 0.3 microns &mdash; the dust we remove from your ceiling is gone from your building, not redistributed to your air. The finishes you&rsquo;ve invested in are protected &mdash; and the staff and customers who walk in the morning after are not walking into chemical fumes.",
  },
];

export function HighDustingSeoWhy() {
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
                alt="Maundy Clean high-level dusting crew &mdash; IPAF-certified, uniformed, trained in MEWP access, HEPA H-class vacuum operation, ductwork cleaning, beam &amp; truss detail, light fixture restoration, and HSE-compliant working-at-height protocols"
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
                  high-dusting-specific protocols &mdash; MEWP cherry-picker
                  and scissor-lift operation, carbon-fibre telescopic pole
                  use, HEPA H-class vacuum capture, ductwork &amp; pipe-run
                  cleaning, beam &amp; truss detail, light fixture &amp;
                  extractor-fan restoration, defect reporting, and HSE
                  working-at-height rescue procedures. Same crew every visit
                  &mdash; never a rotating cast of agency strangers walking
                  a Scottish commercial high-reach environment.
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
              Why choose Maundy Clean for high dusting
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why MaundyClean is Scotland&rsquo;s Expert in High-Level Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many national contractors offer impersonal, large-scale services.
              MaundyClean provides a premium, local alternative focused on
              consistently high standards and creating a positive impact on our
              clients&rsquo; lives. Our high-reach crews carry the MEWP kit,
              the HEPA H-class vacuums, the carbon-fibre poles, and the HSE
              working-at-height protocols standard mopping cannot match
              &mdash; and the same vetted team returns every visit to build the
              deep familiarity your premises deserve.
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
                        {typeof card.description === "string" ? (
                          <span dangerouslySetInnerHTML={{ __html: card.description }} />
                        ) : (
                          card.description
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TRUST_CARDS.slice(2).map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[var(--border)] flex flex-col sm:flex-row items-start gap-5"
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
// Section 3 - Our Comprehensive High-Level Dusting Checklist
// (Semantic H2: "Our Comprehensive High-Level Dusting Checklist")
// Brief-specific section with 3 H3 sub-sections (like VCT pattern):
//   1. Structural & Architectural Features (3 items)
//   2. Technical & Mechanical Systems (3 items)
//   3. Specialized Commercial Environments (3 items)
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
    icon: Building2,
    image: IMG.checklistStructural,
    imageAlt:
      "Maundy Clean high-level dusting specialist using MEWP access and HEPA vacuum to remove dust from structural beams, rafters, ceiling corners, and high-reach walls in a Scottish commercial property",
    title: "1. Structural & Architectural Features",
    description: "",
    points: [
      {
        title: "Beams & Rafters",
        text: "Meticulous removal of city-centre dust and cobwebs from structural supports and decorative beams. Soft horsehair brush loosens the dust, HEPA H-class vacuum captures 99.995% of particles at 0.3 microns at source &mdash; the dust that was on the beam is gone from the building, not just moved to the floor. Exposed steel beams (Glasgow warehouse conversions), timber rafters (Edinburgh Victorian schools), decorative plaster beams (hotel lobbies), truss chords and struts (industrial units) &mdash; every horizontal and vertical surface above 3.5m detailed. Beam clips, brackets, hangers, and bolt-heads hand-vacuumed. Cobwebs removed from every corner and joint. Glasgow city-centre soot, Edinburgh traffic film, Aberdeen harbour dust &mdash; the airborne particulate that bonds into the structural steelwork and cannot be lifted from ground level.",
      },
      {
        title: "Ceiling Corners & Mouldings",
        text: "Detailed cleaning of high corners where spiders and dust traps commonly form. The ceiling-to-wall junction is the single most-neglected surface in commercial cleaning &mdash; standard cleaning contracts reach 2m, ceiling corners sit at 3-6m. Cornicing (the decorative plaster moulding where wall meets ceiling), ceiling roses (the circular plaster feature around light fittings), covings (the angled plaster transition), and picture-rail high-level mouldings &mdash; hand-detailed with a soft horsehair brush on a carbon-fibre telescopic pole, HEPA-vacuumed at source. Particularly critical in hotels, restaurants, and listed buildings where the architectural features are part of the guest experience. A single cobweb in a ceiling corner of a 5-star hotel lobby undoes the impression made by a clean reception.",
      },
      {
        title: "External Cladding & High Walls",
        text: "Refreshing interior and exterior high-reach walls to maintain a &ldquo;showcase&rdquo; standard. High-reach walls above 3.5m &mdash; warehouse gable-end walls (8-12m), retail atrium walls (6-10m), hotel-lobby feature walls (5-8m), gym sports-hall walls (6-9m), factory production-hall walls (8-14m). Internal cladding (PVC, metal, timber) vacuumed and damp-wiped with pH-neutral chemistry. External cladding (steel, aluminium, render) washed with low-pressure applicator and biodegradable chemistry &mdash; no high-pressure washing that drives water behind the cladding. Refreshing these surfaces restores the visual impression of the space, lifts the ambient light level, and signals to staff and visitors that the building is cared for top-to-bottom &mdash; not just at eye level.",
      },
    ],
  },
  {
    icon: AirVent,
    image: IMG.checklistTechnical,
    imageAlt:
      "Maundy Clean high-level dusting specialist cleaning HVAC ductwork, pipe runs, high-mounted light fixtures, and extractor fans using MEWP access and HEPA vacuum in a Scottish commercial property",
    title: "2. Technical & Mechanical Systems",
    description: "",
    points: [
      {
        title: "Ductwork & Ventilation",
        text: "Technical cleaning of the exterior of vents and ducts to prevent dust from circulating through your HVAC system. HVAC ductwork, process pipe runs, and cable trays accumulate dust continuously &mdash; every time the air handling kicks in, a portion of that dust is blown back into the occupied space. We vacuum the top surface of every ductwork run (the underside is rarely dust-laden but is checked), with attention to ductwork joints and bends where dust accumulates most. Damaged ductwork insulation flagged for your facilities team. Especially important in food processing and pharmaceutical facilities &mdash; HSE and FSA inspectors flag dust-laden ductwork as a contamination risk. The exterior-only clean we provide is distinct from internal ductwork cleaning (a separate specialist discipline) but is the critical first line of defence against particulate re-entry into the occupied space.",
      },
      {
        title: "Light Fixtures & Chandeliers",
        text: "Meticulous wiping and polishing of high-reach lighting to restore brightness and professionalism. High-bay LED fittings (warehouses, factories), fluorescent trunking (offices, retail), halogen spotlights (hospitality, retail), crystal and brass chandeliers (hotels, restaurants, historic buildings) &mdash; vacuumed, damp-wiped, and polished with the correct chemistry. Light output can be reduced by 5-15% by a layer of dust on the fitting &mdash; cleaning restores the original lux level without the cost of new fittings. Crystal chandeliers cleaned with soft horsehair brush and lint-free cloth (no liquid drips onto the crystals), brass fittings cleaned with brass patina cleaner (not aggressive brass polish that removes the patina), glass fittings with non-streak glass cleaner. Listed-building consent may be required for historic chandeliers &mdash; we&rsquo;ll advise before work starts.",
      },
      {
        title: "Security & Exit Systems",
        text: "Wiping down high-mounted cameras, exit signs, and fire alarms to ensure they remain visible and operational. The high-mounted safety infrastructure that protects your building &mdash; CCTV cameras (3-5m), emergency exit signs (2.5-3m), fire-alarm call points (1.4m but often on high-mounted trunking), smoke detectors (ceiling-mounted), heat detectors (ceiling-mounted), sprinkler heads (ceiling-mounted), emergency lighting (ceiling or high-wall mounted), PA speakers (ceiling-mounted). Every one of these gets dust-laden over time &mdash; and dust on a smoke detector or sprinkler head can delay activation in a fire, with potentially catastrophic consequences. We vacuum and damp-wipe every high-mounted safety device, ensuring camera lenses are clear, exit signs are visible from across the room, and detector sensor chambers are dust-free. The safety-system clean that is rarely in a standard cleaning contract but is critical for compliance and life safety.",
      },
    ],
  },
  {
    icon: Warehouse,
    image: IMG.checklistSpecialised,
    imageAlt:
      "Maundy Clean high-level dusting specialist working across a Scottish warehouse, hotel lobby, and retail unit to remove dust from high-reach structural and mechanical surfaces",
    title: "3. Specialized Commercial Environments",
    description: "",
    points: [
      {
        title: "Warehouses & Showrooms",
        text: "Improving product safety by removing overhead debris. Warehouse racking tops (3-6m) accumulate dust that contaminates the top layer of palletised stock &mdash; a critical issue for food, pharmaceutical, and electronics warehousing where dust contamination can mean a stock write-off. Showroom high-reach surfaces (lighting, ductwork, ceiling features) accumulate dust that undermines the showcase impression customers are paying for. We work to APUC framework pricing for Scottish local authority contracts, outside trading hours (Sunday shifts for warehouses, overnight for showrooms), with HEPA-captured dust and a written defect report flagging any racking damage, beam-clip corrosion, or ductwork insulation issues identified during the work. The high-dusting discipline that protects both your stock and your customers&rsquo; first impression.",
      },
      {
        title: "Hotels & Restaurants",
        text: "Ensuring guest areas are pristine from floor to ceiling. Hotel lobby cornicing (4-5m), chandelier chains (4-6m), top-of-drape pelmets (4m), restaurant exposed-beam ceilings (4-6m), bar back-bar high shelving (3-4m), spa exposed ductwork (3-4m) &mdash; every high-reach surface that guests glance up at and judge the property on. Carbon-fibre telescopic pole option for marble-lobby hotels (no MEWP tracking on delicate floors), overnight scheduling (no guest disturbance &mdash; quiet HEPA vacuum), and the same specialist crew every visit. Especially critical for 5-star and boutique properties where a single cobweb on a chandelier chain can undo a year of brand-building. We have worked in Edinburgh New Town hotels, Glasgow Merchant City restaurants, and Aberdeen granite-belt boutique properties &mdash; the same standard, the same care, every property.",
      },
      {
        title: "Retail & Office Buildings",
        text: "Enhancing presentation for visitors and service providers. Retail atrium high-reach glazing bars (6-10m), ceiling-mounted spotlights (4-6m), high-level air-conditioning diffusers (3-4m), office exposed-ceiling soffits (3-4m), meeting-room ceiling features (3-4m), reception feature walls (5-8m) &mdash; the surfaces that visiting clients, prospective tenants, and service partners see and judge your business on. Out-of-hours scheduling (overnight for retail, weekend for offices), HEPA-captured dust, and a written report flagging any defects identified during the work. The high-dusting discipline that signals &ldquo;this business is cared for&rdquo; to every visitor who walks in &mdash; and the discipline that lifts staff morale and pride in the workplace, with measurable impact on sickness absence and retention. Especially critical for flagship retail and Grade-A office space where presentation is part of the brand.",
      },
    ],
  },
];

export function HighDustingSeoChecklist() {
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
            Beyond the standard mop
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive High-Level Dusting Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our commercial dusting protocol follows a rigorous, agency-approved
            checklist designed to &ldquo;elevate&rdquo; the look and safety of
            your premises. From structural and architectural features through
            technical and mechanical systems to specialized commercial
            environments &mdash; below is the scope we deliver as standard,
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
    title: "Site Survey & Safety Assessment",
    description:
      "Contact us to schedule your service. We will conduct a thorough site assessment to determine the correct equipment and access approach for your unique high-reach areas. On-site high-dusting audit: every high-reach zone mapped (ceiling, beams, trusses, ductwork, pipe runs, light fittings, extractor fans, security systems, high walls), access method assessed per zone (MEWP cherry-picker for warehouses, scissor-lift for tight spaces, carbon-fibre telescopic pole for delicate floors, scaffold-tower for confined areas), ceiling height measured, floor loadings checked (critical for MEWP &mdash; raised computer-room floors and mezzanines need scissor-lift or pole), operational hours reviewed (overnight window, weekend shutdown, holiday closures), HVAC shutdown protocol confirmed (critical for ductwork cleaning), fragile-surface register taken (marble lobbies, listed cornicing, glass balustrades, artwork). Risk Assessment &amp; Method Statement prepared. HSE compliance check. Fixed-price quote within 48 hours.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team with expertise in commercial dusting and technical hygiene. Your allocated high-reach crew is IPAF-certified (cherry-picker and scissor-lift), PVG-checked, uniformed, and trained in high-dusting-specific protocols &mdash; MEWP operation, carbon-fibre telescopic pole use, HEPA H-class vacuum capture, ductwork &amp; pipe-run cleaning, beam &amp; truss detail, light fixture &amp; extractor-fan restoration, defect reporting, and HSE working-at-height rescue procedures. We brief the crew on your site survey (access map, fragile-surface register, operational constraints), your access window (overnight, weekend, holiday), your HVAC shutdown protocol, your occupancy constraints (occupied building, food-processing facility, listed building), your premium finishes (chandeliers, cornicing, marble floors), and any operational constraints on chemistry or method. The same crew returns every visit, building real knowledge of your premises and your inspection regime.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Premise",
    description:
      "Experience a workspace that looks, smells, and feels fresh from every angle, backed by our MaundyClean satisfaction guarantee. You receive a signed high-dusting log after every visit (crew name, time in/out, areas treated, access method per zone, equipment used, dust volume captured, defects flagged), arrival and departure times, before-and-after photographs for every section, and a written defect report flagging damaged ductwork insulation, loose beam clips, corroded light fittings, water staining, or paint flaking &mdash; before they undermine a client visit, an environmental health inspection, or an insurer review. From &pound;395 per visit for a single-area high-ceiling clean through to &pound;1,495 per day for a full warehouse or factory. POA for historic and listed-building work with carbon-fibre pole and conservation-officer liaison. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function HighDustingSeoBooking() {
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
            We have optimised our booking experience to be uncomplicated and
            straightforward, addressing the technical needs of Central
            Scotland&rsquo;s businesses. From free site survey and safety
            assessment through specialist crew matching to a pristine premise
            &mdash; no friction, no waiting, no surprises. Just a
            top-to-bottom clean, every ceiling, every beam, every duct, every
            light fitting, and a compliance file that&rsquo;s audit-ready the
            day an environmental health officer, FSA inspector, or operations
            director walks in.
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
              Request Your Free High-Level Survey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Property Stage
// (Semantic H2: "Solutions for Every Property Stage")
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
      "Recurring home cleaning bringing high-dusting standards of meticulous maintenance to a Scottish private residence on a weekly or fortnightly basis",
    description: (
      <>
        Keep your personal home as clean as your workplace with our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        plans, tailored for weekly or fortnightly maintenance. The same vetted
        uniformed crew, the same child-safe eco chemistry, the same signed
        cleaning log after every visit &mdash; so the &ldquo;Maundy&rdquo;
        standard you see at work follows you home.
      </>
    ),
    cta: "Explore recurring home cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt:
      "After builders clean removing heavy layers of builders dust from high-reach rafters and exposed ceiling structures in a Scottish post-construction commercial site",
    description: (
      <>
        If your facility has undergone improvements, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        protocol is essential for removing heavy layers of builders&rsquo; dust
        from high-reach rafters. Construction dust on exposed beams and trusses
        re-enters the air for months after a build &mdash; we capture it at
        source before it becomes a long-term air-quality problem.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy handover clean combined with high-level dusting to ensure a Scottish commercial or residential unit passes final inspection",
    description: (
      <>
        Moving units? Combine high-dusting with our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        to ensure your premises pass all final inspections and lease handovers.
        Every surface detailed top-to-bottom, deposit-back guarantees met, and
        the same trusted vetted crew your high-dusting team knows &mdash; so
        your unit handover starts from a &ldquo;speechlessly spotless&rdquo;
        baseline.
      </>
    ),
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt:
      "Antiviral sanitisation and electrostatic disinfection providing total biological security in communal and high-traffic commercial areas alongside high-level dusting in a Scottish property",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        for total biological security in communal and high-traffic areas.
        Electrostatic disinfection of high-touch surfaces, EN 14476 virucidal
        chemistry, and the same &ldquo;Maundy&rdquo; standard applied to every
        door handle, lift button, and high-mounted call point.
      </>
    ),
    cta: "Explore antiviral sanitisation",
  },
];

export function HighDustingSeoInterlinking() {
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
            Beyond the high dusting &middot; property lifecycle
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our high-level dusting provides the technical &ldquo;top-down&rdquo;
            refresh your building needs, interlinking with our wider suite of
            services. From recurring home cleaning that maintains your sanctuary
            standard through post-renovation dust clear-outs, end-of-tenancy
            handovers, and antiviral sanitisation for high-traffic communal
            areas &mdash; the same trusted, vetted crew can step up whenever
            your property needs more than a standard high-dusting visit.
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
// (Semantic H2: "High Dusting Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/high-dusting-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function HighDustingSeoNearMe() {
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
              Local high-level dusting &amp; commercial dusting across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              High Dusting Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;high dusting near me&rdquo; or
              &ldquo;commercial high-level cleaning near me&rdquo; in Scotland?
              Maundy Clean covers facilities managers, warehouse operations
              leads, hotel general managers, retail operations teams, food
              processing directors, and historic-building estates across the
              Central Belt, Highlands, Borders, and Islands &mdash; from
              Glasgow&rsquo;s IFSD corporate towers and Edinburgh&rsquo;s New
              Town hotels to Aberdeen&rsquo;s energy-corridor offices and
              Dundee&rsquo;s food-processing facilities, plus commercial
              estates in Stirling, Perth, Inverness, and Ayr. Same IPAF-certified,
              uniformed high-reach specialists, same dedicated crew every visit,
              same rapid response to FSA inspection flags and HVAC dust-complaint
              emergencies &mdash; wherever your property happens to be. Find
              your local high-dusting specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean high-level dusting &amp; commercial dusting coverage areas"
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
                  Same IPAF-certified high-dusting crews, same 100% satisfaction guarantee &mdash; from
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
                <Link href="/services/high-dusting-near-me#locations">
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
                Find your local high-dusting crew
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
                    href={`/services/high-dusting-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> high dusting</span>
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
            Our local high-level dusting crews operate across Glasgow&rsquo;s
            International Financial Services District, Merchant City and West
            End (corporate towers, boutique hotels, and Grade-A offices),
            Edinburgh&rsquo;s Exchange District, New Town and Quartermile
            (5-star hotels, retail flagships, and listed heritage buildings),
            Aberdeen&rsquo;s energy-corridor West End and Tullos industrial
            estates (energy operators, food-processing facilities, and
            warehouses), Dundee&rsquo;s Waterfront and City Centre
            professional services buildings (facilities teams and food
            processing), and Scottish commercial and industrial districts
            across the Central Belt &mdash; from Inverness to Perth, Falkirk
            to Ayr. Whether you&rsquo;re searching for a warehouse
            high-dusting in Glasgow, a hotel-lobby chandelier clean in
            Edinburgh, a food-processing facility FSA-inspection clean in
            Aberdeen, or a historic-building carbon-fibre-pole dust in
            Dundee, Maundy Clean assigns a vetted, PAYE-employed,
            IPAF-certified high-reach crew that stays with you for the long
            run. Same crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Free High-Level Survey")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function HighDustingSeoFinalCta() {
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
            Ready to book your free high-level survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Free High-Level Survey
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Facilities managers, warehouse operations leads, hotel general
            managers, retail operations teams, food processing directors, and
            historic-building estates teams &mdash; book a free, no-obligation
            high-level survey with our management team and receive an itemised
            proposal within 2 business days. MEWP cherry-picker and scissor-lift
            access, carbon-fibre telescopic poles for delicate surfaces, HEPA
            H-class vacuum capture at source, structural and architectural
            feature cleaning, technical and mechanical system cleaning,
            specialized commercial environments, eco-friendly non-toxic
            chemistry, HSE-compliant working-at-height methodology, IPAF-certified
            uniformed professionals who become part of your team, out-of-hours
            scheduling to avoid operational disruption, defect reporting, and
            the multi-site one-invoice convenience that lets you consolidate
            every Scottish property on a single audit-ready compliance file.
            From &pound;395 per visit for a single-area high-ceiling clean
            through to &pound;1,495 per day for a full warehouse or factory.
            POA for historic and listed-building work. No pushy sales call, no
            waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Free High-Level Survey
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
// 3 Q&As from the brief (own equipment, insured for high-level work,
// work around business hours)
// ============================================================

const SEO_FAQS = [
  {
    q: "Do you provide your own high-reach equipment?",
    a: "Yes. We supply all our own professional-grade equipment and eco-friendly materials required for safe high-level access, which are included in your competitive quote. From MEWP cherry-pickers (for warehouses, factories, and large open spaces with appropriate floor loadings), scissor-lifts (for tight spaces and lower heights up to 8m), carbon-fibre telescopic poles up to 6m (for historic buildings, marble lobbies, listed-building constraints, and anywhere MEWP access isn&rsquo;t appropriate), scaffold-towers (for confined areas), HEPA H-class vacuums (99.995% efficient at 0.3 microns &mdash; the dust we remove is gone from your building, not redistributed to your air), soft horsehair brush attachments (for delicate surfaces), lint-free cloths and brass patina cleaner (for chandeliers and light fittings), pH-neutral chemistry for surface wiping, biodegradable ductwork-cleaning chemistry, low-VOC formulations for occupied buildings, and EN 14476 virucidal disinfectant for high-touch high-mounted surfaces (door sensors, exit signs, fire-alarm pulls). COSHH-documented chemistry on file. Non-toxic, biodegradable, surface-safe by default. You provide the building and the access; we provide everything else &mdash; MEWP, poles, vacuums, chemistry, PPE, signage, barriers, and the IPAF-certified crew trained to use all of it.",
  },
  {
    q: "Are your cleaners insured for high-level work?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience in the Scottish commercial sector. We carry &pound;5m public liability as standard &mdash; covering high-level dusting across warehouses, factories, retail, hotels, restaurants, offices, food processing facilities, pharmaceutical cleanrooms, and historic and listed buildings &mdash; and every high-reach operative is IPAF-certified (cherry-picker and scissor-lift), PVG-checked (essential for hotels, retail, schools, hospitals, and any building where the public, guests, or staff are present), uniformed, and trained in high-dusting-specific protocols: MEWP operation, carbon-fibre telescopic pole use, HEPA H-class vacuum capture, ductwork &amp; pipe-run cleaning, beam &amp; truss detail, light fixture &amp; extractor-fan restoration, defect reporting, and HSE working-at-height rescue procedures. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, retail-chain compliance, and corporate insurance files. Our documentation is audit-ready for environmental health inspection, FSA review, HSE review, and operations director review; we provide signed high-dusting logs, before/after photos, IPAF certificates, RAMS, COSHH datasheets, training records, working-at-height rescue plans, and vetting records (PVG) for your compliance file.",
  },
  {
    q: "Can you work around our business hours?",
    a: "Yes. We offer flexible scheduling, including out-of-hours and weekend cleans, to ensure we minimise disruption to your daily operations. We work overnight, weekend, or holiday periods &mdash; MEWP setup, high dusting, floor recovery, and barrier removal all completed before trading resumes. We have worked overnight in hotels (no guest disturbance &mdash; quiet HEPA vacuum, no MEWP tracking on marble floors, carbon-fibre poles for cornicing and chandeliers), warehouses (no picking disruption &mdash; Sunday shifts, cherry-picker access to racking tops and beam clips), retail units (no trading impact &mdash; overnight close, scissor-lift for atrium high-reach), offices (no staff impact &mdash; weekend clean, scaffold-tower for meeting-room ceiling features), and food processing facilities (no production stoppage &mdash; weekend shutdown, HACCP-compliant documentation pack for FSA inspector defence). Operational disruption is the single biggest objection to high dusting, and we&rsquo;ve solved it. We can also work in occupied buildings where required (warehouses with picking in progress, hotels with guests in the building, hospitals with wards open) &mdash; section-by-section with barriers, dust containment, and noise-controlled equipment. Whatever your operational window, we have a high-dusting schedule that fits it.",
  },
];

export function HighDustingSeoFaq() {
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
            High-level dusting &amp; commercial dusting &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our high-level dusting clients
            ask most often. Can&rsquo;t find what you need? Call us on{" "}
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
                Request Your Free High-Level Survey
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

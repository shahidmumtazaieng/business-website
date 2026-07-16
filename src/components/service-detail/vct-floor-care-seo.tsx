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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (VCT-specific imagery, drawn from the existing floor-care
// image pool plus the dedicated VCT hero image)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/vct-floor-care.jpg",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistStrip:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistFinish:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  checklistDetail:
    "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseUpholstery:
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
// Semantic H1: "Professional VCT Floor Care & Stripping Services Scotland"
// ============================================================

export function VctFloorCareSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean VCT floor care specialist stripping, refinishing and burnishing a commercial vinyl composition tile floor to a wet-look high-gloss shine in a Scottish property"
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
            VCT Floor Care &amp; Stripping &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional VCT Floor Care &amp; Stripping Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Restore, Maintain, and Preserve: Technical Surface Resets,
            High-Gloss Buffing, and the Maundy Tradition of Excellence.
            MaundyClean brings vetted VCT specialists, technical stripping
            and re-sealing, high-solids metal-interlock polish, multi-layer
            waxing, high-speed burnishing, deep soil extraction, edge &amp;
            corner detailing, eco-friendly non-toxic chemistry, colour-coded
            pad systems, manufacturer-standard care, and a
            &ldquo;speechlessly spotless&rdquo; wet-look finish to every VCT
            floor we serve &mdash; from Glasgow corporate receptions to
            Edinburgh retail entrances and Aberdeen school corridors.
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
                Request Your Free Floor Survey Today
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
                View Our Hard Floor Care Checklist
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
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Floor Crew Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> High-Gloss &ldquo;Wet-Look&rdquo; Burnish
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
// "Recurring Home Cleaning". The brief gives two intro
// paragraphs (p1 + p2-with-link).
// ============================================================

export function VctFloorCareSeoIntro() {
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
                alt="Maundy Clean VCT floor care specialist stripping old wax and refinishing a commercial vinyl composition tile floor with high-solids metal-interlock polish in a Scottish commercial property"
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
                  &mdash; applied to your VCT entrances, corridors, retail aisles, school halls,
                  and clinical zones.
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
              VCT floor care &amp; stripping &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish VCT Restoration
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In high-traffic commercial environments across Glasgow, Edinburgh,
              and the Central Belt, your Vinyl Composition Tile (VCT) is the
              workhorse of your facility. However, even the most durable floors
              eventually lose their luster. When a quick mop won&rsquo;t cut it,
              our specialist commercial and industrial floor cleaning services
              provide the technical reset your business needs. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we provide an advanced VCT floor care service designed to breathe
              life and beauty back into your floors, restoring even heavily
              soiled tiles to a &ldquo;like new&rdquo; brilliance.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s finest residences, we bring that same level of
              technical intimacy, &ldquo;same-staff&rdquo; consistency, and meticulous
              attention to detail to the commercial sector. We act as your
              strategic partner, ensuring your floors look immediately cleaner,
              polished, and professional.
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
                { icon: Hammer, label: "Heavy-duty machinery" },
                { icon: Leaf, label: "Sustainable chemistry" },
                { icon: ShieldCheck, label: "Manufacturer-standard" },
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
// Section 2 - Why MaundyClean is Scotland's Authority in VCT Maintenance
// (Semantic H2: "Why MaundyClean is Scotland's Authority in VCT Maintenance")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / Hammer / Leaf / Building2
// (icons chosen to reflect the brief's pillar themes: same trusted
// team every visit / heavy-duty technical machinery / sustainable &
// safe products / manufacturer-standard care).
// ALL 4 pillar bodies start with the brief sentence verbatim and
// are extended with VCT-specific prose (no inline Links),
// but typed as ReactNode for codebase consistency with
// restroom-sanitation-seo.tsx and floor-care-stripping-seo.tsx
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
      "Reliability is the foundation of our service. We ensure the same vetted professionals manage your floor maintenance, allowing them to build a deep understanding of your facility&rsquo;s layout and specific high-traffic wear patterns. The same PVG-checked VCT specialists return every visit &mdash; learning your traffic-flow map (entrance grind zones here, lift-lobby scuffing there, warehouse-aisle forklift tyre tracks, washroom-edge moisture damage), your polish spec, your access window, and your inspection regime. When your regular crew is on annual leave, we send a trained backup who has been briefed on your floors &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking a Scottish commercial VCT floor.",
  },
  {
    icon: Hammer,
    title: "Heavy-Duty Technical Machinery",
    description:
      "We utilize a variety of heavy-duty cleaning machines and high-speed buffers designed to remove stains, dirt, and debris from every floor surface. Low-speed rotary machines (175 RPM) for stripping and deep scrubbing, high-speed burnishers (1500-2000 RPM) for the &ldquo;wet-look&rdquo; high-gloss shine that reflects your brand&rsquo;s quality, HEPA-filtered wet/dry vacuums for slurry pickup, air movers for fast curing between polish coats, gloss meters for objective 60-degree GU measurement, and colour-coded pad systems (black strip, green heavy scrub, red light scrub, white polish, hogs-hair burnish) to prevent the cross-contamination mistakes that ruin commercial VCT. The kit standard mop-and-bucket contractors cannot match &mdash; because VCT is a specialist discipline, not a chore.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Safe Products",
    description:
      "We use only sustainable, safe cleaning products that are certified non-toxic. This is essential for maintaining a healthy environment for your staff and customers while preserving the longevity of your floor coverings. pH-neutral maintenance chemistry between strips (alkaline-sensitive VCT binder degrades under repeated heavy-alkaline exposure), biodegradable strippers where the floor schedule allows the longer dwell time, low-VOC polish formulations for occupied buildings, EN 14476 virucidal disinfectant for clinical VCT zones, fragrance-free and child-safe surface cleaners by default for schools and nurseries, COSHH-documented biodegradable chemistry, and impregnating sealers (penetrating, not film-forming) where substrate requires. The finishes you&rsquo;ve invested in are protected &mdash; and the staff who walk on the floor the morning after are not walking into chemical fumes.",
  },
  {
    icon: Building2,
    title: "Manufacturer-Standard Care",
    description:
      "Our approach follows both contemporary and traditional cleaning methodologies, ensuring your VCT is maintained to the highest architectural standards. We work to manufacturer specification on strip chemistry, polish solids content (25% commercial, 30% premium), coat count (4-6 standard, 6-8 high-traffic), cure time (30-45 min between coats, 24-hour final cure), and burnish programme (daily/weekly/monthly per traffic pattern). Where the floor falls under a regulatory regime &mdash; HTM 01-05 for clinical VCT, HSE HSG272 for slip resistance, BS 7976 for pendulum testing &mdash; we follow the regulation to the letter. The result: polish that lasts 12-18 months on high-traffic, 24-36 months on medium-traffic, with audit-ready documentation for your compliance file.",
  },
];

export function VctFloorCareSeoWhy() {
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
                alt="Maundy Clean VCT floor care crew &mdash; PVG-checked, uniformed, trained in stripping, refinishing, burnishing, sealing, and finishing for commercial vinyl composition tile floors"
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
                  VCT-specific protocols &mdash; stripping, refinishing,
                  burnishing, multi-layer waxing, high-solids sealing,
                  high-speed buffing, edge &amp; corner detailing, slip-resistant
                  treatment, and stain removal. Same crew every visit &mdash;
                  never a rotating cast of agency strangers walking a Scottish
                  commercial VCT floor.
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
              Why choose Maundy Clean for VCT
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why MaundyClean is Scotland&rsquo;s Authority in VCT Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many commercial contractors provide a generic &ldquo;wash and wax&rdquo;
              that leads to yellowing and wax build-up. MaundyClean addresses these
              exploitable weaknesses by focusing on specialist knowledge and
              vocational excellence. Our VCT crews carry the technical kit, the
              chemistry, and the protocols standard mopping cannot match
              &mdash; and the same vetted team returns every visit to build the
              deep familiarity your floors deserve.
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
// Section 3 - Our Total VCT Maintenance & Stripping Checklist
// (Semantic H2: "Our Total VCT Maintenance & Stripping Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Professional Stripping & Deep Cleaning
//   2. Technical Sealing & Finishing
//   3. Often-Missed Technical Details
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
    icon: Hammer,
    image: IMG.checklistStrip,
    imageAlt:
      "Maundy Clean VCT floor care specialist stripping old yellowed wax from a commercial vinyl composition tile floor with a low-speed rotary machine and chemical stripper in a Scottish property",
    title: "1. Professional Stripping & Deep Cleaning",
    description: "",
    points: [
      {
        title: "Old Finish Removal",
        text: "Technical stripping of old, yellowed, or damaged wax layers to reach the original tile surface. Chemical stripper (alkaline-based, formulated specifically for VCT) applied at the correct dilution, allowed to dwell per manufacturer spec (typically 8-12 minutes), then aggressively worked with a black pad under a low-speed (175 RPM) rotary machine. Slurry picked up immediately by wet vacuum &mdash; never re-spread. Double-rinse with clean water. Neutraliser rinse to bring floor back to pH 7 (critical &mdash; alkaline residue prevents polish bonding and causes the new finish to peel within weeks). Floor dried thoroughly with air movers before any new chemistry is applied. The technical reset your VCT needs &mdash; not a &ldquo;top-up&rdquo; that traps the old yellowing under fresh polish.",
      },
      {
        title: "Deep Soil Extraction",
        text: "Removing ingrained city-center dust and traffic film using revolutionary cleaning and restoration techniques. Glasgow city-centre soot, Edinburgh traffic film, Aberdeen harbour dust &mdash; the airborne soil that bonds into the polish layer and cannot be lifted by daily mopping. Alkaline degreaser pre-spray on high-soil zones (entrances, lift lobbies, warehouse-to-office transitions), agitation with a green pad to break the soil-to-polish bond, wet vacuum pickup, then double-rinse. Stain-specific treatment where required: gum remover, scuff-mark eraser, rust remover for steel-trolley marks, poultice for deep organic stains. The detail work that lifts the floor from &lsquo;stripped&rsquo; to &lsquo;speechlessly spotless&rsquo;.",
      },
      {
        title: "Edge & Corner Detailing",
        text: "Hand-scrubbing edges and corners where machines can&rsquo;t reach to ensure a &ldquo;speechlessly spotless&rdquo; finish. The 5-10cm perimeter strip where the rotary machine can&rsquo;t reach &mdash; under radiators, behind pipework, around floor-box electrics, along skirting-board bottoms, in door-sweep tracks, inside lift-lobby trims. Hand-scrubbed with the same chemistry and the same pad grade as the machine work, then hand-rinsed and hand-dried. Polish applied by hand with a microfibre applicator to match the machine-applied polish depth. The detail most contractors skip &mdash; and the detail every facilities manager notices on the snagging walk.",
      },
    ],
  },
  {
    icon: Layers,
    image: IMG.checklistFinish,
    imageAlt:
      "Maundy Clean VCT floor care specialist applying high-solids sealer and multi-layer floor finish to a stripped commercial vinyl composition tile floor in a Scottish retail or office space",
    title: "2. Technical Sealing & Finishing",
    description: "",
    points: [
      {
        title: "High-Solids Sealer",
        text: "Applying premium-grade sealers to protect the VCT from moisture and future staining. The sealer is the foundation &mdash; it penetrates the porous limestone filler in VCT, blocks moisture and stain pathways, and creates the bonding layer the polish needs. Premium-grade high-solids sealer applied in 1-2 thin coats (not thick &mdash; thick sealer pools, cracks, and fails), each coat dried 20-30 minutes before the next. The right sealer for the right environment: standard acrylic sealer for general commercial, water-based low-VOC sealer for occupied buildings, alkali-resistant sealer for concrete-substrate VCT, and slip-resistant sealer additive for wet zones. Without the right sealer, polish peels within months &mdash; with the right sealer, polish lasts years.",
      },
      {
        title: "Multi-Layer Waxing",
        text: "Applying multiple coats of high-quality floor finish to create a durable, slip-resistant barrier. 4-6 coats of high-solids metal-interlock polish (25% solids commercial, 30% premium for high-traffic), each coat dried 30-45 minutes before the next, applied in a figure-8 pattern with a clean microfibre mop. Coat count tailored to traffic: 4 coats for low-traffic offices, 5 for medium-traffic retail, 6 for high-traffic entrances and corridors, 8 for school halls and hospital corridors. Final coat cured 24 hours before traffic (the cure is what gives the polish its hardness &mdash; traffic too soon relevels the polish and ruins the gloss). The depth of polish is the depth of protection &mdash; and the depth of the wet-look shine.",
      },
      {
        title: "High-Speed Buffing",
        text: "Utilizing industrial burnishers to achieve a &ldquo;wet look&rdquo; high-gloss shine that reflects your brand&rsquo;s quality. High-speed burnish (1500-2000 RPM) with a hogs-hair pad and burnish cream where required. Heat from the burnisher softens the top microns of polish, the pad relevels it, restoring the wet-look gloss that signals &ldquo;this floor is cared for&rdquo;. Burnishing does not remove polish &mdash; it relevels it. 15-30 minutes per 100m&sup2;. Daily for premium floors (hotel lobbies, retail entrances, corporate reception), weekly for medium-traffic, monthly for low-traffic. Burnish programme extends polish life significantly &mdash; and the gloss readings on a gloss meter prove it.",
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistDetail,
    imageAlt:
      "Maundy Clean VCT floor care specialist meticulously wiping skirting boards and cleaning internal window partitions after a commercial VCT strip and refinish in a Scottish property",
    title: "3. Often-Missed Technical Details",
    description: "",
    points: [
      {
        title: "Visible Skirting Boards",
        text: "Our technicians meticulously wipe all skirting boards and door frames to remove any splash-back from the stripping process. Stripper slurry splashes 10-20cm up the skirting during the rotary machine work &mdash; if left, it dries to a chalky alkaline residue that discolours paint and damages varnish. We hand-wipe every linear metre of skirting with a neutraliser-dampened microfibre cloth, then dry-buff to a clean finish. Door frames, architraves, radiator backs, and pipework collars get the same treatment. The perimeter work that separates a &ldquo;floor clean&rdquo; from a &ldquo;floor reset&rdquo; &mdash; and the work your facilities manager will inspect first on the snagging walk.",
      },
      {
        title: "Inside Window Care",
        text: "Cleaning internal glass partitions to maximize natural light and enhance the reflective beauty of your newly polished floors. The gloss of a freshly burnished VCT floor is wasted if the internal glass partitions are smeared &mdash; the floor reflects the smears, not the light. We squeegee internal glass partitions, low-level internal glazing, and glass balustrades with a non-streak glass cleaner. Frame tracks vacuumed. Handles and push-plates sanitised. The finishing touch that makes the floor look as good as it is &mdash; and the touch most contractors skip because it&rsquo;s &ldquo;not in the brief&rdquo;. At MaundyClean, it&rsquo;s in every brief.",
      },
    ],
  },
];

export function VctFloorCareSeoChecklist() {
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
            Our Total VCT Maintenance &amp; Stripping Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for floors move beyond the surface to deliver
            a complete restoration of the tile&rsquo;s protective layers. From
            technical stripping of old wax through multi-layer refinishing and
            high-speed burnishing to the often-missed perimeter details that
            separate a &ldquo;floor clean&rdquo; from a &ldquo;floor reset&rdquo;
            &mdash; below is the scope we deliver as standard, regardless of
            building type, footprint, or occupancy schedule.
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
// (Semantic H3: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// (FileText imported for safety/template parity even if not used.)
// Brief HAS a [H3] marker on this heading, so we use <h3>
// (matches the day-porter pattern; restroom-sanitation had
// no [H3] marker so it used <h2>).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Floor Analysis",
    description:
      "Contact us for a free site survey. We will assess the condition of your VCT and develop a bespoke plan &mdash; the larger your floor, the better. On-site VCT audit: every VCT zone mapped (entrances, corridors, lift lobbies, warehouse-to-office transitions, washroom edges, canteen zones), traffic pattern assessed (high/medium/low), existing polish depth measured, gloss meter reading taken (60-degree GU), floor condition assessed (yellowing, scuffing, scratching, staining, polish pop, edge build-up). Existing chemistry checked (if any). Polish type, seal type, and finishing schedule recommended per zone per traffic pattern. Strip/refinish schedule designed (annual for high-traffic, biennial for medium, quarterly scrub-and-recoat for top-up, daily/weekly burnish programme scoped if required). Priced per m&sup2; per protocol. Itemised proposal within 2 business days.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians with the necessary certifications to handle commercial and industrial floor restoration. Your allocated VCT crew is PVG-checked, uniformed, and trained in VCT-specific protocols &mdash; stripping, refinishing, multi-layer waxing, high-speed burnishing, high-solids sealing, edge &amp; corner detailing, slip-resistant treatment, and stain removal. We brief the crew on your VCT zone map, your polish spec (25% commercial / 30% premium / coat count per zone), your access window (in-hours presence, after-hours unsupervised, key-safes and alarm codes), your staff communications protocol, your premium finishes, and any operational constraints on chemistry or method. The same crew returns every visit, building real knowledge of your floors and your inspection regime.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Foundation",
    description:
      "Experience a floor that feels fresh, safe, and professional, backed by our MaundyClean satisfaction guarantee. You receive a signed VCT care log after every visit (crew name, time in/out, areas treated, products used, gloss meter reading, polish depth, and any issues flagged), arrival and departure times, before-and-after photographs for major restoration work, and issue-flagging for low-gloss zones, scratch patterns, stain build-up, or polish pop &mdash; before they undermine a client visit, an environmental health inspection, or a guest impression. From &pound;4 per m&sup2; for quarterly scrub-and-recoat through to &pound;18 per m&sup2; for full strip and refinish with premium 30% solids polish. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function VctFloorCareSeoBooking() {
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
            The MaundyClean 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be uncomplicated and
            straightforward, providing the responsive expertise Scottish business
            owners demand. From free site survey and floor analysis through
            specialist crew matching to a pristine foundation &mdash; no friction,
            no waiting, no surprises. Just a restored VCT floor, every entrance,
            every corridor, every lift lobby, and a compliance file that&rsquo;s
            audit-ready the day an environmental health officer, insurer, or
            operations director walks in.
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
              Request Your Free Floor Survey Today
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
// Card 4 (Total Surface Care) has TWO inline <Link>s per the brief
// ("Ask about our [Carpet Cleaning] or [Upholstery Cleaning]").
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
      "Recurring home cleaning bringing VCT-care standards of meticulous maintenance to a Scottish private residence on a weekly or fortnightly basis",
    description: (
      <>
        Enjoy the same technical excellence in your personal home with our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        service, keeping your private sanctuary maintained to a 5-star standard.
        The same vetted uniformed crew, the same child-safe eco chemistry, the
        same signed cleaning log after every visit &mdash; so the standard you
        see in your commercial space follows you home.
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
      "End of tenancy handover clean including hard floor reset for a Scottish commercial or residential unit being vacated",
    description: (
      <>
        Moving units? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        protocol includes hard floor resets to ensure properties are front-line
        ready for the next occupant. Every surface detailed top-to-bottom,
        deposit-back guarantees met, and the same trusted vetted crew your VCT
        care team knows &mdash; so your unit handover starts from a
        &ldquo;speechlessly spotless&rdquo; baseline.
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
      "After builders clean removing heavy layers of builders dust and plaster from newly laid VCT floors in a Scottish post-construction site",
    description: (
      <>
        If your facility has undergone shopfitting, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is designed to remove heavy layers of builders&rsquo; dust and plaster
        from your floors. Fine dust left on a freshly laid VCT floor acts like
        sandpaper under foot traffic &mdash; we vacuum, damp-wipe, and protect
        the finish before the dust causes permanent scratches.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Total Surface Care",
    href: "/services/carpet-rug-cleaning",
    image: IMG.leaseUpholstery,
    imageAlt:
      "Carpet cleaning and upholstery cleaning refreshing soft floors and furniture alongside a newly restored VCT floor in a Scottish commercial space",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/carpet-rug-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Carpet Cleaning
        </Link>{" "}
        or{" "}
        <Link
          href="/services/upholstery-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Upholstery Cleaning
        </Link>{" "}
        to refresh your entire interior environment alongside your VCT.
        Stain-specific chemistry for fabric, leather, and microfibre suites,
        hot-water extraction for deep soil, and the same &ldquo;Maundy&rdquo;
        standard applied to every fibre and every cushion.
      </>
    ),
    cta: "Explore carpet & upholstery cleaning",
  },
];

export function VctFloorCareSeoInterlinking() {
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
            Beyond the VCT &middot; property lifecycle
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Need
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our VCT floor care is a critical part of your building&rsquo;s
            preservation, but we offer specialized resets for major property
            milestones: from recurring home cleaning that maintains your
            sanctuary standard through end-of-tenancy handovers and
            post-renovation dust clear-outs to soft-floor and upholstery refreshes
            that complete the picture. The same trusted, vetted crew can step up
            whenever your property needs more than a standard VCT care visit.
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
// (Semantic H2: "VCT Floor Care Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/vct-floor-care-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function VctFloorCareSeoNearMe() {
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
              Local VCT floor care &amp; stripping across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              VCT Floor Care Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;VCT floor care near me&rdquo; or &ldquo;VCT
              stripping and refinishing near me&rdquo; in Scotland? Maundy Clean
              covers facilities managers, office managers, retail operations
              leads, school estates teams, and commercial estates across the
              Central Belt, Highlands, Borders, and Islands &mdash; from
              Glasgow&rsquo;s IFSD and Edinburgh&rsquo;s New Town to
              Aberdeen&rsquo;s granite-built West End and Dundee&rsquo;s
              Waterfront, plus commercial estates in Stirling, Perth, Inverness,
              and Ayr. Same PVG-checked, uniformed VCT specialists, same
              dedicated crew every visit, same rapid response to spills and
              finish failures &mdash; wherever your property happens to be. Find
              your local VCT floor care specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean VCT floor care &amp; stripping coverage areas"
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
                  Same PVG-checked VCT floor care crews, same 100% satisfaction guarantee &mdash; from
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
                <Link href="/services/vct-floor-care-near-me#locations">
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
                Find your local VCT floor care crew
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
                    href={`/services/vct-floor-care-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> VCT care</span>
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
            Our local VCT floor care crews operate across Glasgow&rsquo;s
            International Financial Services District, Merchant City and West End
            corporate towers (facilities managers, office managers and retail
            operations leads), Edinburgh&rsquo;s Exchange District, New Town and
            Quartermile business quarters (commercial estates and retail chains),
            Aberdeen&rsquo;s energy-corridor West End and Tullos industrial
            offices (energy operators and service companies), Dundee&rsquo;s
            Waterfront and City Centre professional services buildings
            (facilities teams and office managers), and Scottish commercial
            districts across the Central Belt &mdash; from Inverness to Perth,
            Falkirk to Ayr. Whether you&rsquo;re searching for a VCT
            strip-and-refinish in Glasgow, a high-speed burnish programme in
            Edinburgh, a school-holiday VCT strip in Aberdeen, or a
            retail-entrance polish restoration anywhere in between, Maundy Clean
            assigns a vetted, PAYE-employed, PVG-checked VCT care crew that
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
// (Semantic H2: "Request Your Free Floor Survey Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function VctFloorCareSeoFinalCta() {
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
            Ready to book your free floor survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Free Floor Survey Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Facilities managers, office managers, retail operations leads and
            building operations teams &mdash; book a free, no-obligation VCT
            floor survey with our management team and receive an itemised
            proposal within 2 business days. Technical stripping and
            re-sealing, high-solids metal-interlock polish, multi-layer waxing,
            high-speed burnishing, deep soil extraction, edge &amp; corner
            detailing, slip-resistant treatment, colour-coded pad systems,
            eco-friendly non-toxic chemistry, manufacturer-standard care
            methodologies, a fixed per-m&sup2; rate that locks for 12 months,
            PVG-checked uniformed professionals who become part of your team,
            and the multi-site one-invoice convenience that lets you consolidate
            every Scottish property on a single audit-ready compliance file.
            From &pound;4 per m&sup2; for quarterly scrub-and-recoat through to
            &pound;18 per m&sup2; for full strip and refinish with premium 30%
            solids polish. No pushy sales call, no waiting 24 hours for a
            callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Free Floor Survey Today
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
                View Our Hard Floor Care Checklist
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
// 3 Q&As from the brief (stripping frequency, insured technicians,
// provide own machinery)
// ============================================================

const SEO_FAQS = [
  {
    q: "How often should VCT floors be stripped and waxed?",
    a: "This depends on foot traffic, but typically high-traffic commercial spaces require a full strip and seal every 12 to 18 months, with regular buffing in between to maintain the shine. We tailor the schedule to your specific environment: annual full strip for entrances, lift lobbies, retail aisles, school corridors, and hospital wards; biennial strip for medium-traffic office corridors and meeting rooms; quarterly scrub-and-recoat top-up to extend polish life by 6-12 months between full strips; and daily, weekly, or monthly burnish programmes (high-speed 1500-2000 RPM with hogs-hair pad) to keep the &ldquo;wet-look&rdquo; gloss between maintenance visits. Gloss meter readings taken every quarter tell us when polish depth is dropping and a top-up is needed &mdash; before yellowing or scuffing becomes visible to your staff or visitors. We never strip before it is needed (over-stripping shortens VCT life) and we never delay a strip past the point where polish failure would damage the bare tile.",
  },
  {
    q: "Are your floor technicians insured?",
    a: "Absolutely. MaundyClean is a fully insured and certified professional cleaning company with extensive experience in both residential and commercial flooring sectors. We carry &pound;5m public liability as standard &mdash; covering VCT, linoleum, rubber, terrazzo, sealed concrete, natural stone, and resilient surface floors &mdash; and every VCT specialist is PVG-checked (essential for schools, nurseries, hospitals, GP surgeries, dental practices, and any building where staff, patients, or visitors are present), uniformed, and trained in VCT-specific protocols: stripping, refinishing, multi-layer waxing, high-speed burnishing, high-solids sealing, edge &amp; corner detailing, slip-resistant treatment, and stain removal. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, retail-chain compliance, and corporate insurance files. Our documentation is audit-ready for environmental health inspection, HSE review, and operations director review; we provide signed VCT care logs, gloss meter readings, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file.",
  },
  {
    q: "Do you provide your own cleaning machinery?",
    a: "Yes. We supply all our own heavy-duty cleaning machines and professional-grade stripping chemicals, which are included in your competitive quote. From low-speed rotary machines (175 RPM) for stripping and deep scrubbing, high-speed burnishers (1500-2000 RPM) for the &ldquo;wet-look&rdquo; high-gloss shine, HEPA-filtered wet/dry vacuums for slurry pickup, air movers for fast curing between polish coats, gloss meters for objective 60-degree GU measurement, and colour-coded pad systems (black strip, green heavy scrub, red light scrub, white polish, hogs-hair burnish) to prevent cross-contamination between zones. Chemistry is matched to floor type and environment &mdash; alkaline stripper for VCT, low-VOC polish formulations for occupied buildings, EN 14476 virucidal disinfectant for clinical VCT zones, slip-resistant polish additives for wet zones, and fragrance-free child-safe maintenance cleaners for schools and nurseries. COSHH-documented chemistry on file. Non-toxic, biodegradable, surface-safe by default. You provide the floor and the access; we provide everything else &mdash; machinery, chemistry, pads, PPE, signage, and the crew trained to use all of it.",
  },
];

export function VctFloorCareSeoFaq() {
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
            VCT floor care &amp; stripping &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our VCT floor care clients ask most
            often. Can&rsquo;t find what you need? Call us on{" "}
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
                Request Your Free Floor Survey Today
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
                View Our Hard Floor Care Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

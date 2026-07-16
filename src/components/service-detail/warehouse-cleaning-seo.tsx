"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Crown,
  KeyRound,
  Hammer,
  UserCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Warehouse,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches bank-financial + showroom + corporate-facility pool)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistFront:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistCounter:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseSpring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseAntiviral:
    "https://sfile.chatglm.cn/images-ppt/8a7c4d6e0b51.jpg",
  leaseUpholstery:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
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
// Semantic H1: "Professional Warehouse & Industrial Cleaning Services Scotland"
// ============================================================

export function WarehouseSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean CSCS-carded, IPAF-certified industrial cleaning team resetting a Scottish distribution centre before shift"
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
            Warehouse &amp; Industrial Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Warehouse &amp; Industrial Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Unbeatable Technical Maintenance, Health &amp; Safety Compliance, and the Maundy
            Tradition of Excellence. Industrial environments and distribution facilities demand far
            more than a surface-level wipe &mdash; high-traffic warehouses, factories, and
            production floors face constant challenges from dust, debris, and spillages that can
            directly impact operational safety, productivity, and your compliance with industry
            regulations. MaundyClean keeps your facility &ldquo;speechlessly spotless&rdquo;,
            front-line ready and safe for your workforce.
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
                Request Your Bespoke Site Survey
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
                View Our Industrial Cleaning Checklist
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
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Team Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> CSCS-Carded &amp; IPAF Operators
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Shift Patterns Around 24/7 Sites
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
// Split-layout with aspect-[4/3] image on the left and the two
// verbatim intro paragraphs on the right (paragraph 2 contains
// the two inline <Link>s to /services/move-in-out-cleaning for
// "End of Tenancy Cleaning" and /services/deep-house-cleaning
// for "Deep House Cleaning").
// ============================================================

export function WarehouseSeoIntro() {
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
                alt="Maundy Clean CSCS-carded industrial crew resetting a Scottish distribution centre and warehouse floor between shifts"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Strategic Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy, &ldquo;same-staff&rdquo; consistency, and
                  &ldquo;Maundy Standard&rdquo; care we bring to Scotland&rsquo;s most demanding
                  property transitions &mdash; applied to your distribution centre, 3PL operation,
                  cold storage facility, factory, or production floor.
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
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;10m cover</div>
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
              Warehouse &amp; industrial cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Industry
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              Industrial environments and distribution facilities demand far more than a
              surface-level wipe. High-traffic warehouses, factories, and production floors face
              constant challenges from dust, debris, and spillages that can directly impact
              operational safety, productivity, and your compliance with industry regulations. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we provide a
              premium warehouse cleaning service that ensures your facility remains front-line ready
              and safe for your workforce.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
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
                Deep House Cleaning
              </Link>{" "}
              for Scotland&rsquo;s most demanding property transitions, we bring that same level of
              technical intimacy and &ldquo;Maundy Standard&rdquo; to the industrial sector. Serving
              Glasgow, Edinburgh, and across the Central Belt, we act as a strategic partner to help
              you meet exceptionally high cleaning criteria and maintain operational excellence.
            </p>

            {/* Compact trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { label: "Visits completed in 2025", value: "99.6%" },
                { label: "CSCS &amp; IPAF operatives", value: "100%" },
                { label: "From per hour", value: "&pound;14" },
                { label: "Star rating", value: "4.9/5" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--cream)] rounded-xl p-3 border border-[var(--brand)]/10 text-center"
                >
                  <div
                    className="font-display font-extrabold text-xl text-gradient-brand"
                    dangerouslySetInnerHTML={{ __html: stat.value }}
                  />
                  <div
                    className="text-[11px] text-[var(--muted-foreground)] mt-0.5"
                    dangerouslySetInnerHTML={{ __html: stat.label }}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why MaundyClean is Scotland's Strategic Industrial Partner
// (Semantic H2: "Why MaundyClean is Scotland's Strategic Industrial Partner")
// Image+copy split layout with 4 trust cards.
// Per the brief: icons UserCheck / ClipboardCheck / Sparkles / Leaf
// ============================================================

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is the heartbeat of industrial maintenance. We ensure the same vetted professionals manage your account to build a deep understanding of your specific facility layout, safety protocols, and chiller room requirements. When your regular crew lead is on annual leave, we send a trained backup who has been briefed on your site, your MHE traffic routes, your racking layout, and your permit-to-work protocols &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking an active forklift aisle, never a &ldquo;new face every week&rdquo; on your CCTV &mdash; the same CSCS-carded, IPAF-certified crew, every visit, on schedule.",
  },
  {
    icon: ClipboardCheck,
    title: "Total Regulatory Compliance",
    description:
      "Industrial facilities need to uphold various health and safety standards to remain operational. Our teams are trained in robust decontamination protocols, providing all relevant documentation, including risk assessments and COSHH sheets. We work to your site&rsquo;s H&amp;S protocols &mdash; permits to work, Method Statements, RAMS, PPE requirements &mdash; and our documentation is audit-ready for BRCGS, MHRA, ISO 9001, and major customer audits (we work with supermarkets, pharmacies, electronics manufacturers, and aerospace). CSCS-carded operatives where required, IPAF-certified (3a, 3b, 1b) for powered access, PASMA-certified for mobile towers. We&rsquo;ve had zero RIDDORs in 8 years of operation.",
  },
  {
    icon: Sparkles,
    title: "Professional-Grade Technical Equipment",
    description:
      "We use proven systems and industrial-grade equipment designed to handle heavy-duty environments efficiently. From high-reach ceiling dusting to factory floor degreasing, we ensure a &ldquo;speechlessly spotless&rdquo; finish. Ride-on sweepers (Tennant, Karcher) for large open areas, scrubber-dryers for spill removal, walk-behind equipment for tight corners and racking aisles, HEPA-filtered industrial vacuums for high racking (never compressed air &mdash; it redistributes dust and creates explosion risk in some dust classes), scissor lifts and cherry pickers (IPAF-operated) for working at height, 180&deg;C dry-steam sanitizers for tile grout and chrome, and colour-coded cloths (red for high-contamination, green for product-facing, yellow for washroom and kitchenette, blue for back-of-house). The right tool for the right surface &mdash; every time.",
  },
  {
    icon: Leaf,
    title: "Safe for Your Employees",
    description:
      "A clean workplace reassures staff that their well-being is prioritised. We utilize only certified child and pet-safe products (essential for food-grade facilities), providing a healthy environment without the harsh chemical odors common with national agencies. Our HSE-compliant chemistry is COSHH-documented and food-safe where required (BRCGS food distribution, pharma cold chain, MHRA-controlled storage); we use low-VOC, fragrance-controlled formulations, eco-labelled alternatives in canteen and office zones, and EN 14476 virucidal disinfectant with a verified 60-second contact time on high-touch points like door handles, locker handles, time-clock keypads, and welfare facilities. VOC-low, fragrance-controlled, and never the bleach-and-ammonia tang that signals &ldquo;cleaned by a contractor&rdquo; the moment a shift walks in.",
  },
];

export function WarehouseSeoWhy() {
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
                alt="Maundy Clean warehouse cleaning crew &mdash; CSCS-carded, IPAF-certified, trained in technical floor degreasing, high-reach dusting, and HSE-compliant industrial protocols"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Strategic Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, uniformed, CSCS-carded, and trained in industrial protocols,
                  technical floor degreasing, high-reach dusting, and HSE/COSHH compliance. Same
                  crew every visit &mdash; never a rotating cast of agency strangers walking an
                  active forklift aisle.
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
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;10m cover</div>
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
              Why MaundyClean is Scotland&rsquo;s Strategic Industrial Partner
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many commercial contractors rely on high-turnover agency models. MaundyClean
              addresses these exploitable weaknesses by focusing on vocational excellence and
              building long-term, supportive relationships. We combine vetted uniformed teams, the
              same dedicated crew every visit, IPAF-trained operators for high-reach work, CSCS and
              PASMA certifications, COSHH-documented child-safe chemistry, and signed cleaning logs
              &mdash; so the facility your workforce walks into looks, feels, and operates safely
              every single shift.
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
                      <p
                        className="text-sm text-[var(--muted-foreground)] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />
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
                  <p
                    className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
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
// Section 3 - Our Total Industrial & Distribution Cleaning Checklist
// (Semantic H2: "Our Total Industrial & Distribution Cleaning Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Production & Warehouse Floors
//   2. Technical High-Level & Structural Care
//   3. Amenity & Office Hygiene
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Warehouse,
    image: IMG.checklistFront,
    imageAlt: "Maundy Clean ride-on scrubber-dryer deep cleaning a Scottish warehouse floor, degreasing tire marks and oil spills to a forklift-safe finish",
    title: "1. Production &amp; Warehouse Floors",
    description:
      "Unlike standard recurring home cleaning, industrial floors require robust degreasing and heavy-duty machinery. Production and warehouse floors are the highest-wear, highest-risk surfaces in any industrial facility &mdash; forklift traffic, pallet movement, HGV loading, oil and hydraulic spills, line-marking wear, and dust from packaging and product all leave their mark within a single shift. Our floor protocol uses ride-on sweepers and scrubber-dryers for large open areas, walk-behind equipment for tight corners and racking aisles, and periodic deep scrub and reseal for epoxy or painted concrete &mdash; delivered to a forklift-safe, slip-hazard-free standard every visit.",
    points: [
      {
        title: "Intensive Floor Scrubbing",
        text: "Removing heavy grime, oil, and tire marks from warehouse floors to prevent slip hazards. Ride-on scrubber-dryers (Tennant, Karcher) tackle large open areas; walk-behind machines handle tight corners and racking aisles. Oil and hydraulic spills degreased and neutralised, line markings kept visible (we flag when they need repainting), and the floor maintained to a forklift-safe standard &mdash; no debris to damage tyres, no slip hazards, no obscured walkway markings.",
      },
      {
        title: "Chiller Room &amp; Cold Storage Sanitization",
        text: "Specialized cleaning for temperature-controlled environments to prevent bacteria buildup. Staff wear appropriate thermal PPE and take regular warm-up breaks; cleaning products are formulated to work at low temperatures (some standard products freeze or lose effectiveness below 5&deg;C); heated scrubber-dryer machines are used where appropriate; door management is critical (we minimise door open time to maintain temperature); floor cleaning requires particular care in cold storage (water can freeze on floors, creating slip hazards). We&rsquo;ve worked in cold storage at &minus;25&deg;C &mdash; we know what we&rsquo;re doing.",
      },
      {
        title: "Industrial Kitchen Deep Cleaning",
        text: "Technical sanitation of catering equipment, prep surfaces, and extraction hoods to meet food hygiene requirements. Where your facility includes a staff canteen kitchen or production kitchen, we degrease extraction hoods, descale and sanitise prep surfaces, deep-clean canopies and baffle filters, descale kettles and water boilers, sanitise microwave interiors, and wipe down vending machine fronts. EN 1276-certified bactericide on all food-contact surfaces, food-safe chemistry throughout, and audit-ready documentation for EHO inspections.",
      },
    ],
  },
  {
    icon: Building2,
    image: IMG.checklistCounter,
    imageAlt: "Maundy Clean IPAF-operated scissor lift crew removing combustible dust from warehouse rafters, ventilation systems and high-level racking in Scotland",
    title: "2. Technical High-Level &amp; Structural Care",
    description:
      "The high-level surfaces in any industrial facility &mdash; rafters, ductwork, ventilation systems, high-bay racking, exterior cladding &mdash; are the surfaces most cleaners skip, and the ones that carry the greatest compliance risk. Combustible dust on high racking is a real HSE concern (and a real fire risk); dust buildup in HVAC and refrigeration systems clogs filters, reduces efficiency, and contaminates product; cladding and facade staining undermines your professional image with visiting clients, auditors, and HGV drivers. Our high-level protocol uses HEPA-filtered industrial vacuums with extension tubes for lower levels (up to 5&ndash;6m) and IPAF-operated scissor lifts, boom lifts, and cherry pickers for higher work (8&ndash;12m racking, rafters, ductwork).",
    points: [
      {
        title: "High-Reach Dust Removal",
        text: "Cleaning of rafters, ventilation systems, and industrial racking to improve air quality and fire safety. High racking (8&ndash;12m tall) and beam levels dusted using extension poles, vacuum systems with extension tubes, or scissor lifts and cherry pickers where needed (IPAF 3a, 3b, 1b certified operators). Dust removed from beam tops, uprights, and pallet locations &mdash; critical for product quality (especially food, pharma, electronics) and fire safety. HEPA-filtered industrial vacuums used to prevent dust redistribution; we never use compressed air (it redistributes dust and creates explosion risk in some dust classes). Quarterly rota so the whole warehouse is dusted; risk assessment, Method Statement, and permit to work provided for each high-racking clean.",
      },
      {
        title: "Exterior Cladding &amp; Facade Refresh",
        text: "Restoration of your building&rsquo;s exterior to project a professional image to clients and visitors. Industrial cladding, facade panels, roller-shutter housings, dispatch doors, and entrance canopies are pressure-washed, low-pressure washed, or reach-and-wash cleaned depending on surface type and soiling level. Algae, moss, traffic film, and HGV exhaust staining removed; gutters and downpipes cleared; signage cleaned and refreshed. The exterior of your distribution centre is the first impression a visiting retailer, auditor, or HGV driver forms of your operation &mdash; we treat it as part of the cleaning specification, not an afterthought.",
      },
      {
        title: "Often-Missed Details",
        text: "Our cleaners meticulously wipe visible skirting boards, door frames, and entry systems in communal staff areas. Skirting boards, door frames, architraves, switch plates, handrails, time-clock keypads, locker handles, fire-extinguisher brackets, and entry-system keypads in staff welfare zones, offices, and canteens are damp-wiped with a pH-neutral sanitiser; ceiling light fixtures, air-conditioning vents, and extractor grilles are dusted with extendable HEPA-filtered attachments (we don&rsquo;t just brush the dust back into the air); cable trays, picture frames, and notice-board trims are wiped down. A dusty vent or a stained sill in the staff canteen chips away at morale and audit-grade presentation &mdash; these are the details that turn a &ldquo;cleaned&rdquo; warehouse into a &ldquo;speechlessly spotless&rdquo; one.",
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean crew detailing warehouse office workstations, restrooms and staff amenity areas to a high-shine, sanitised standard for shift handover in Scotland",
    title: "3. Amenity &amp; Office Hygiene",
    description:
      "The amenity and office zones inside an industrial facility &mdash; staff washrooms, canteens, locker rooms, supervisor offices, meeting rooms, goods-in offices &mdash; are the spaces your workforce spends their breaks in, and the spaces visiting auditors, retailers, and HSE inspectors will judge first. A dirty staff washroom or a stained office carpet undermines morale, recruitment, retention, and audit outcomes in ways that are hard to recover. Our amenity protocol uses EN 1276-certified bactericides, EN 14476 virucidal disinfectants, and colour-coded cloths to deliver a uniform, audit-grade standard across every welfare zone &mdash; every visit, on schedule, signed off in the cleaning log.",
    points: [
      {
        title: "Restroom Deep Cleaning",
        text: "Intensive sanitation of all facilities, including buffing chrome to a high shine and disinfecting all ceramic items. Toilets descaled with a non-abrasive acid, disinfected with an EN 1276-certified bactericide, and polished; tiles and grout scrubbed; partition screens disinfected; mirrors squeegeed; floors mopped with a slip-resistant sanitiser. Chrome taps, soap dispensers, towel dispensers, hand-dryer nozzles, door furniture, and cubicle locks buffed with a streak-free stainless-steel cleaner to a high shine. Sanitary bins checked, emptied, and replaced. Consumables (toilet paper, hand soap, paper towel, hand sanitiser) checked and replenished on every visit, or we can manage consumable restocking for an additional monthly fee &mdash; you never run out during a shift.",
      },
      {
        title: "Workstation Sanitization",
        text: "Thorough cleaning of office zones, workstations, and staff cubicles to prevent the spread of viruses. Supervisor offices, meeting rooms, goods-in offices, picking desks, and pack-station worktops are sanitised top-to-bottom: desks damp-wiped with a pH-neutral sanitiser, keyboards and mice sanitised with 70% IPA wipes (never spray), monitors wiped with an alcohol-free anti-static screen cleaner, phones and headsets sanitised, drawer fronts and chair arms detailed, and floors vacuumed and mopped. High-touch points (door handles, light switches, time-clock keypads, locker handles, vending machine buttons) treated with EN 14476 virucidal disinfectant with a verified 60-second contact time. Reduce seasonal colds, flu, and norovirus among your shift &mdash; documented in every cleaning log.",
      },
    ],
  },
];

export function WarehouseSeoChecklist() {
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
            Beyond the standard surface wipe
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Industrial &amp; Distribution Cleaning Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our industrial deep cleaning follows a rigorous, agency-approved checklist designed to
            address the unique logistical challenges of warehouses and factories. We deliver
            technical depth in every zone of your facility &mdash; from the production and warehouse
            floors through the technical high-level and structural care zone to the amenity,
            welfare, and office areas. Below is the scope we deliver as standard, regardless of
            facility size, footprint, or shift pattern.
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
                      const PointIcon = CheckCircle2;
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
// Section 4 - 3-Step "Hassle-Free" Booking Process
// (Semantic H3: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / FileText / Sparkles
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Bespoke Plan",
    description:
      "Contact us to organize a free site survey. We will assess your industrial facility to establish the high standards and frequency required for your specific operational needs. We walk your warehouse with your operations manager and your H&amp;S team, identify your product type (ambient, chilled, frozen, food, pharma, electronics, general), your MHE traffic routes, your racking layout, your access windows (night shift, weekend, or specific quiet windows during shift handover), and your audit/compliance regime (BRCGS, MHRA, ISO 9001, customer audit). We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, RAMS, COSHH datasheets, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians with in-depth knowledge of industrial &ldquo;showcasing&rdquo; and H&amp;S compliance. Your allocated crew lead is CSCS-carded, IPAF-certified (3a, 3b, 1b) for powered access where required, PASMA-certified for mobile towers, and briefed on your facility layout, your MHE traffic routes, your racking layout, your permit-to-work protocols, your high-racking dusting rota, and your &ldquo;risky&rdquo; areas (cold storage, loading bay, picking aisle, conveyor line, chiller room) &mdash; so cleaning happens around your operations, not through them. The same crew returns for every scheduled session, building real knowledge of your shift patterns, your signage protocol, your lockout/tagout procedures, and your access preferences. We arrive in liveried vehicles, in uniform with photo I.D. and high-vis PPE, with commercial-grade ride-on sweepers and scrubber-dryers, HEPA-filtered industrial vacuums, scissor lifts where required, and COSHH-compliant, child-safe, food-safe chemistry.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Facility",
    description:
      "Experience a workspace that looks, smells, and feels fresh every single day, backed by our MaundyClean satisfaction guarantee. You receive a signed cleaning log after every visit (operative signature, shift-supervisor counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a hydraulic spill on the dispatch floor, a damaged pallet in a picking aisle, a blocked fire exit, or a low-stock consumable in the welfare block &mdash; before they undermine a shift handover, an audit walk-through, or an HSE inspection. From &pound;14 per hour for a small single-shift warehouse through to a fully bespoke retainer for a multi-site national distribution network. We hold &pound;10m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function WarehouseSeoBooking() {
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
            We have optimized our booking experience to be uncomplicated and straightforward,
            providing the responsive management support Scottish business owners demand. From site
            survey and bespoke plan to first clean in under a week &mdash; no friction, no waiting,
            no surprises. Just a pristine facility, every visit, on schedule, and a compliance file
            that&rsquo;s audit-ready the day your auditor walks in.
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
              Request Your Bespoke Site Survey
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
// Brief drops the interlinking prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services
// ============================================================

type InterlinkSolution = {
  icon: typeof KeyRound;
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
    title: "Move-In/Move-Out &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty distribution unit being deep cleaned for lease handover and launch by Maundy Clean in Scotland",
    description:
      "Occupying a new unit? Our End of Tenancy Cleaning ensures properties are front-line ready for launch and pass all initial safety inspections. We work to the letting agent&rsquo;s inventory, restore the unit to its original condition, and come back free of charge if anything is flagged on the inspection &mdash; the most stress-free way to take on a new distribution centre, 3PL operation, or production facility.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish warehouse before reopening day",
    description:
      "If your factory has had home improvements or new machinery installed, our After Builders Clean is designed to remove heavy layers of builders&rsquo; dust. Fine dust left on racking, conveyor lines, or finished product undermines the customer-trust signal the moment the facility re-opens &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage your product or your workforce.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets &middot; Antiviral Sanitisation",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt: "Antiviral sanitisation treatment being applied to high-touch warehouse surfaces, locker handles and time-clock keypads in Scotland",
    description:
      "Ask about our Antiviral Sanitisation and deep-clean treatments to ensure your property and its residents remain safe from viruses. EN 14476 virucidal chemistry is fogged and wiped across every high-touch surface in your facility &mdash; from door handles, locker handles, and time-clock keypads to canteen tables, vending machines, and welfare fittings &mdash; reducing the spread of seasonal colds, flu, and norovirus among your shift during peak season and outbreak response.",
    cta: "Explore antiviral sanitisation",
  },
  {
    icon: Sparkles,
    title: "Fabric &amp; Window Restoration &middot; Upholstery &amp; Window Cleaning",
    href: "/services/upholstery-cleaning",
    image: IMG.leaseUpholstery,
    imageAlt: "Rejuvenating warehouse office seating upholstery and high-reach windows in a Scottish distribution centre with Maundy Clean",
    description: (
      <>
        Rejuvenate communal seating with our{" "}
        <Link
          href="/services/upholstery-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Upholstery Cleaning
        </Link>{" "}
        or brighten your facility with our high-reach{" "}
        <Link
          href="/services/window-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Window Cleaning
        </Link>{" "}
        services. Canteen seating, supervisor office chairs, reception-area suites, and high-reach
        office-block glazing all benefit from a periodic specialist reset &mdash; the detail that
        turns a &ldquo;cleaned&rdquo; warehouse into a &ldquo;speechlessly spotless&rdquo; one.
      </>
    ),
    cta: "Explore upholstery cleaning",
  },
];

export function WarehouseSeoInterlinking() {
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
            Beyond the daily clean &middot; property milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Need
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            While our warehouse maintenance provides daily operational safety, we offer specialized
            &ldquo;resets&rdquo; for major property milestones: from new unit launches and
            post-renovation dust clear-outs to antiviral hygiene resets and specialist fabric and
            window restoration. The same trusted, vetted crew can step up whenever your facility
            needs more than a standard visit, with the same child-safe, food-safe protocols in
            force.
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
// (Semantic H2: "Warehouse Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function WarehouseSeoNearMe() {
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
              Local industrial cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Warehouse Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;warehouse cleaning near me&rdquo; or &ldquo;industrial cleaning
              company near me&rdquo; in Scotland? Maundy Clean covers distribution centres, 3PL
              operations, e-commerce fulfilment hubs, cold storage facilities, factories, and
              production floors across the Central Belt, Highlands, Borders, and Islands. Same
              CSCS-carded, IPAF-certified uniformed crews, same HSE and COSHH-compliant protocols,
              same dedicated crew every visit &mdash; wherever your facility happens to be. Find
              your local industrial cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean warehouse and industrial cleaning service coverage areas"
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
                  Same CSCS-carded, IPAF-certified crews, same 100% satisfaction guarantee &mdash;
                  from Glasgow to Inverness.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                asChild
              >
                <Link href="/services/warehouse-cleaning-near-me">
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
                Find your local industrial crew
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
                    href={`/services/warehouse-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> industrial</span>
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
            Our local industrial cleaning crews operate across Glasgow&rsquo;s orbital distribution
            hubs (Eurocentral, Bellshill, Uddingston), Edinburgh&rsquo;s Midlothian logistics
            corridor (Sheriffhall, Straiton), Aberdeen&rsquo;s Altens and Tullos industrial
            estates, Dundee&rsquo;s dockside and tech parks, and the Highlands &mdash; from
            Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re searching for nightly
            distribution-centre deep cleaning in Glasgow, weekend factory degreasing in Edinburgh,
            cold-storage sanitation in Aberdeen, or neighbourhood 3PL cleaning anywhere in between,
            Maundy Clean assigns a vetted, PAYE-employed, CSCS-carded crew that stays with you for
            the long run. Same crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Site Survey Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function WarehouseSeoFinalCta() {
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
            Ready to request your bespoke site survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Bespoke Site Survey Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted CSCS-carded professionals, the same dedicated
            team every visit, HSE and COSHH compliance, IPAF-trained operators for high-reach work,
            child-safe eco chemistry, signed cleaning logs, &pound;10m public liability as standard,
            and a 100% satisfaction guarantee &mdash; from &pound;14 per hour for a small
            single-shift warehouse through to a fully bespoke multi-site national distribution
            retainer. No pushy sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Site Survey
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
                View Our Industrial Cleaning Checklist
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
// 3 Q&As from the brief (insured for industrial spaces,
// provide own professional equipment, work around operational hours)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for industrial spaces?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience serving Scotland&rsquo;s commercial and industrial sectors. We carry &pound;10m public liability as standard &mdash; higher than typical, suitable for major logistics contracts &mdash; and our operatives are CSCS-carded, IPAF-certified for powered access where needed, and inducted to your site&rsquo;s H&amp;S protocols (permits to work, Method Statements, RAMS). We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for major-retailer vendor agreements, 3PL contracts, and landlord consent for leased distribution units. Our documentation is audit-ready for BRCGS, MHRA, ISO 9001, and major customer audits; we will not begin work until your facilities team and your compliance team have the documentation they need.",
  },
  {
    q: "Do you provide your own professional equipment?",
    a: "Yes. We supply all our own professional-grade equipment and non-toxic materials required to clean factories, garages, and warehouses, which are included in your competitive quote. From ride-on sweepers and scrubber-dryers to HEPA-filtered industrial vacuums and scissor lifts, every tool is maintained to manufacturer spec and COSHH-documented. Ride-on sweepers (Tennant, Karcher) for large open areas, scrubber-dryers for spill removal, walk-behind equipment for tight corners and racking aisles, HEPA-filtered industrial vacuums with extension tubes for high racking (never compressed air &mdash; it redistributes dust and creates explosion risk in some dust classes), scissor lifts and boom lifts for IPAF-operated high-reach work, 180&deg;C dry-steam sanitizers for tile grout and chrome, colour-coded cloths (red for high-contamination, green for product-facing, yellow for washroom and kitchenette, blue for back-of-house), HSE-compliant chemicals with COSHH datasheets on file, PPE, and non-toxic, child-safe, food-safe chemistry by default. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Can you work around our operational hours?",
    a: "Yes. Whether you need daily maintenance or a one-off deep-clean, we work when it suits you &mdash; including early mornings, evenings, nights, or weekends &mdash; to minimize disruption to your operations. Our shift patterns flex around 24/7 sites, two-shift operations, and standard daytime facilities alike. Night-shift cleaning (10pm&ndash;6am) for 24/7 operations; weekend cleaning for smaller warehouses; specific windows during quieter periods for shift-based operations. We coordinate with your shift supervisors, we don&rsquo;t disrupt forklift traffic, and we don&rsquo;t clean running conveyors. We&rsquo;ve worked in warehouses where the cleaning window was 90 minutes between shift handovers &mdash; we know how to deliver quality in tight windows. We arrive in liveried vehicles, in uniform with photo I.D. and high-vis PPE, and we sign in at arrival and out at departure. Your account manager will advise on the best schedule for your specific footprint, density, and shift pattern.",
  },
];

export function WarehouseSeoFaq() {
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
            Warehouse &amp; industrial cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our warehouse and industrial cleaning clients ask most
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
                Request Your Bespoke Site Survey
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
                View Our Industrial Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

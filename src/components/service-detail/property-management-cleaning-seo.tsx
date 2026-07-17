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
  Scissors,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches auto-dealership + salon-spa + event-venue pool)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.12.26%20PM.jpeg",
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
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseAntiviral:
    "https://sfile.chatglm.cn/images-ppt/8a7c4d6e0b51.jpg",
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
// Semantic H1: "Professional Property Management & Landlord Cleaning Services Scotland"
// ============================================================

export function PropertyManagementSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean PVG-checked, vetted property management cleaning crew maintaining communal areas, stairwells and bin stores in a Scottish residential block before residents arrive home"
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
            Property Management Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Property Management &amp; Landlord Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Meticulous Block Maintenance, Technical Unit Resets, and the Maundy
            Tradition of Excellence for Leading Property Managers. Factors,
            landlords, housing associations, and property management companies
            operate in a uniquely demanding cleaning environment &mdash; every
            communal close reflects your management fee, every stairwell tells
            residents how much you care, and every tenancy transition makes or
            breaks a deposit return. MaundyClean brings vetted PVG-checked crews,
            communal-area consistency, end of tenancy resets, forecourt
            power-washing, tenement close cleaning, a reactive mobile team for
            last-minute VIP visits and emergency scenarios, 24/7 emergency
            response, and flexible out-of-hours scheduling to every block we serve.
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
                Request Your Bespoke Portfolio Quote
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
                View Our Property Management Checklist
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
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Team Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Reactive Mobile Team &middot; 24/7
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
// ONE inline <Link> to /services/recurring-home-cleaning for
// "Recurring Home Cleaning").
// ============================================================

export function PropertyManagementSeoIntro() {
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
                alt="Maundy Clean property management cleaning crew maintaining communal stairwells, entryways and bin stores in a Scottish residential block to a showcase standard"
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
                  &ldquo;Maundy Standard&rdquo; care we bring to Scotland&rsquo;s finest properties
                  &mdash; applied to your residential blocks, tenement closes, communal
                  lounges, bin stores, and tenancy transitions.
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
              Property management &amp; landlord cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Property Managers
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the competitive Scottish rental and real estate markets, a
              building&rsquo;s cleanliness is the ultimate retention and attraction
              tool. Whether managing a high-end residential block in Edinburgh or a
              commercial portfolio in Glasgow, property managers and landlords
              understand that first impressions are critical. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we provide a premium property management cleaning service designed to
              handle the logistical challenges of maintaining multiple sites while
              ensuring every building reflects a &ldquo;showcase&rdquo; standard.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for individual residences, we bring that same level of technical
              intimacy and &ldquo;same-staff&rdquo; consistency to professional property
              management. We act as a reactive, strategic partner, ensuring your
              buildings always make a positive and lasting impression on potential
              tenants, existing residents, and their guests.
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
                { label: "PVG-checked operatives", value: "100%" },
                { label: "From per hour", value: "&pound;15" },
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
// Section 2 - Why MaundyClean is Scotland's Authority in Property Maintenance
// (Semantic H2: "Why MaundyClean is Scotland's Authority in Property Maintenance")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / Sparkles / KeyRound / Leaf
// (icons chosen to reflect the brief's pillar themes: same-team /
// reactive mobile / total landlord support / eco-friendly).
// Pillar 3 description contains an inline <Link> to
// /services/move-in-out-cleaning, so ALL 4 pillar bodies are
// typed as ReactNode and rendered via the typeof check.
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
      "Reliability is the anchor of building management. We ensure the same vetted professionals manage your communal areas to build a deep understanding of your building&rsquo;s specific access points and high-traffic &ldquo;risky&rdquo; zones. From the entry phone system at the close door to the bin store keypad and the lift motor room, the crew that knows your block is the crew that returns every week &mdash; never a rotating cast of agency strangers walking an active stairwell.",
  },
  {
    icon: Sparkles,
    title: "Reactive Mobile Team",
    description:
      "We understand the challenges of unforeseen situations. Our reactive mobile team can be deployed for last-minute VIP visits or emergency scenarios like flooding, ensuring minimal disruption to your operations. A burst pipe in a top-floor flat at 2am, a tenant abandoned-property handover at short notice, a factor inspection tomorrow morning &mdash; we mobilise a vetted, uniformed crew within hours, not days, with the right chemistry and equipment to make the building safe, dry, and presentable again.",
  },
  {
    icon: KeyRound,
    title: "Total Landlord Support",
    description: (
      <>
        We take the headache out of property transitions. Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        and &ldquo;Sale Ready Services&rdquo; ensure units are thoroughly cleaned from
        top to bottom, ready for the next tenant to move in immediately. Ovens
        degreased, hobs descaled, bathrooms sanitised top-to-bottom, kitchens
        degreased edge-to-edge, carpets shampooed, hard floors restored, internal
        windows cleaned, and a signed cleaning log emailed to your factor or
        property manager the same day &mdash; the deposit-back guarantee your
        departing tenant needs and the front-line-ready finish your incoming
        tenant expects.
      </>
    ),
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "Your tenants&rsquo; health is paramount. We utilize only certified child and pet-safe products, ensuring a fresh, non-toxic environment that is safe for families and residents without harsh chemical residues. pH-neutral stone-safe cleaner on tenement stairs (no acid, no bleach &mdash; acid etches sandstone), COSHH-documented chemistry on file for every block, fragrance-free sanitiser on high-touch handrails and entry phone systems, and non-toxic degreaser in bin stores that won&rsquo;t harm pets who walk through the close afterwards.",
  },
];

export function PropertyManagementSeoWhy() {
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
                alt="Maundy Clean property management cleaning crew &mdash; PVG-checked, uniformed, trained in communal area cleaning, end of tenancy resets, forecourt power-washing and tenement close cleaning"
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
                  property-management-specific protocols &mdash; communal area
                  cleaning, end of tenancy resets, forecourt power-washing,
                  tenement close cleaning, stairwell sanitisation, bin store
                  hygiene, and reactive emergency response. Same crew every visit
                  &mdash; never a rotating cast of agency strangers walking an
                  active residential block.
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
              Why choose Maundy Clean
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why MaundyClean is Scotland&rsquo;s Authority in Property Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Property management requires a careful balance of proactive recurring
              cleaning and reactive technical support. MaundyClean addresses the
              exploitable weaknesses of impersonal national agencies by providing a
              local, high-trust alternative.
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
// Section 3 - Our Total Property Management & Block Maintenance Checklist
// (Semantic H2: "Our Total Property Management & Block Maintenance Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Communal & Block Maintenance (Recurring)
//   2. Technical Unit Resets (Deep Cleans)
//   3. Often-Missed Technical Details
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO intro paragraphs on the 3 checklist cards
// (just H3 title + sub-points). Card 2 sub-point 3 contains an
// inline <Link> to /services/car-park-cleaning ("Car Park Cleaning"),
// so all 3 sub-point bodies in Card 2 are typed as ReactNode
// (which the ChecklistPoint type already supports via ReactNode).
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
    image: IMG.checklistFront,
    imageAlt:
      "Maundy Clean crew maintaining entryways, hallways, stairwells and high-touch surfaces in a Scottish residential block to a showcase standard",
    title: "1. Communal & Block Maintenance (Recurring)",
    description: "",
    points: [
      {
        title: "Daily/Weekly Communal Cleaning",
        text: "Meticulous maintenance of entryways, hallways, and stairwells to keep the building looking its best. Stone stairs mopped with stone-safe pH-neutral cleaner (no acid, no bleach), banisters and handrails sanitised as a high-touch surface, close glazing cleaned where reachable, dusting of window sills and door surrounds, door furniture polished, close matting shaken or vacuumed, and cobwebs removed from ceiling corners &mdash; the close left fresh and clean for every resident coming home.",
      },
      {
        title: "High-Touch Sanitization",
        text: "Disinfecting entry phone systems, lift buttons, and handrails to keep germs and bugs at bay. Entry phone handsets, call buttons, keypad entry systems, lift call panels, lift car buttons, handrails on every flight, light switches in the close, door handles on the close door and bin store door, and letter box flaps &mdash; all wiped with a fragrance-free EN 1276 bactericide with the correct contact time, every visit.",
      },
      {
        title: "Window Cleaning",
        text: "Professional cleaning of the inside and outside of windows to maximize natural light and street-level curb appeal. Internal close glazing cleaned where reachable, entrance door side panels squeegeed, stairwell window internals wiped, and external street-facing windows scheduled on a rotating basis &mdash; the natural light and curb appeal that signals a well-managed block from the pavement.",
      },
    ],
  },
  {
    icon: Hammer,
    image: IMG.checklistCounter,
    imageAlt:
      "Maundy Clean crew performing end of tenancy deep cleans, floor restoration and external power-washing for a Scottish letting portfolio",
    title: "2. Technical Unit Resets (Deep Cleans)",
    description: "",
    points: [
      {
        title: "End of Tenancy Deep Clean",
        text: "Intensive sanitation of individual units, including ovens, hobs, and bathrooms, to ensure the next tenant&rsquo;s first impression is perfect. Oven degreased (racks soaked, door split, glass polished), hob descaled and polished, extractor hood degreased, kitchen units fronted and topped, bathroom descaled (tiles, screen, shower head, taps), sanitaryware polished, mirrors squeegeed, skirting boards and door frames damp-wiped, hard floors mopped, and carpets vacuumed edge-to-edge &mdash; the front-line-ready finish your incoming tenant expects on day one.",
      },
      {
        title: "Floor Restoration",
        text: "Specialist care for marble floors, hardwood, and deep carpet shampooing to remove city-center dust and traffic film. Periodic machine-scrub and neutral cleaner on stone stairs and communal tiling, hardwood floor clean-and-refresh for amenity blocks, hot-water extraction for communal carpet runners and unit carpets at tenancy change, and high-speed buff on polished concrete forecourts &mdash; the technical reset that protects the substrate and the building&rsquo;s value.",
      },
      {
        title: "External Care",
        text: (
          <>
            Power-washing of forecourts, walkways, and{" "}
            <Link
              href="/services/car-park-cleaning"
              className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
            >
              Car Park Cleaning
            </Link>{" "}
            to remove algae, oil stains, and graffiti. Pressure-washed forecourts
            and entrance walkways to lift winter algae and slip hazards, bin store
            surrounds degreased and deodorised, and resident car parks swept,
            degreased, and line-marked where required &mdash; the external finish
            that tells residents and visitors the block is professionally managed.
          </>
        ),
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistKitchen,
    imageAlt:
      "Maundy Clean crew detailing skirting boards, door frames, ceiling fixtures and janitorial restrooms across a Scottish managed property portfolio",
    title: "3. Often-Missed Technical Details",
    description: "",
    points: [
      {
        title: "Visible Skirting Boards & Sills",
        text: "Our cleaners meticulously wipe all skirting boards, door frames, and ceiling fixtures as part of our standard service. Skirting boards, door frames, architraves, switch plates, picture rails, window sills, fire-extinguisher brackets, signage housings, and ceiling light fixtures in communal closes, landings, lounges, and lift lobbies damp-wiped with a pH-neutral sanitiser. Ceiling light fixtures, air-conditioning vents, and extractor grilles dusted with extendable HEPA-filtered attachments. These are the details residents notice first &mdash; and the details most cleaners skip.",
      },
      {
        title: "Washroom & Janitorial Services",
        text: "Managing supplies and deep-sanitizing facility restrooms to the highest industry standards. Communal WC blocks in sheltered housing and amenity buildings descaled, disinfected, and polished; tiles and grout scrubbed; partition screens disinfected; mirrors squeegeed; floors mopped edge-to-edge with a slip-resistant sanitiser; chrome taps, soap dispensers, towel dispensers, and hand-dryer nozzles buffed; sanitary bins checked and emptied; consumables (paper towel, toilet paper, hand soap, sanitiser wipes) restocked every visit or managed by us on a monthly retainer.",
      },
    ],
  },
];

export function PropertyManagementSeoChecklist() {
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
            Our Total Property Management &amp; Block Maintenance Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning for property managers follows a rigorous,
            agency-approved checklist designed to maintain a &ldquo;speechlessly
            spotless&rdquo; finish across communal and private spaces. We deliver
            technical depth in every zone of your portfolio &mdash; from the
            communal close and stairwell through the technical unit reset at tenancy
            change to the often-missed technical details that signal a
            well-managed block. Below is the scope we deliver as standard,
            regardless of building type, footprint, or tenancy schedule.
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
// Brief has NO [H3] marker on this heading, so we use <h2>
// (matches the standard section-title pattern used elsewhere).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Strategy",
    description:
      "Contact us for a free site survey. We will assess your portfolio and develop a bespoke maintenance plan that fits your budget and frequency requirements. We walk every block with your factor or property manager, identify your building types (tenement close, four-in-a-block, sheltered housing, mixed-use block), capacity (number of closes, stairwells, communal lounges, bin stores, shared gardens), tenancy profile (long-let, short-let, student, sheltered), turnaround windows (between-tenancy resets, factor inspection prep, end-of-day touch-ups), and any specific cleaning challenges (bin juice in bin stores, algae on forecourts, graffiti on stairwells, listed-building constraints on stone stairs). We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, RAMS, COSHH datasheets, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team with experience in block management and unit &ldquo;showcasing&rdquo;. Your allocated crew lead is PVG-checked (essential for buildings where residents may be present), uniformed, and trained in property-management-specific protocols &mdash; communal area cleaning, end of tenancy resets, forecourt power-washing, tenement close cleaning, stairwell sanitisation, bin store hygiene, and reactive emergency response. We brief the crew on your close layout, your access protocols (key safes, alarm codes, entry phone), your bin collection schedule, your resident communications protocol, and your premium finishes &mdash; so cleaning happens around your residents&rsquo; lives, not through them. The same crew returns for every scheduled session, building real knowledge of your high-traffic zones, your tenancy calendar, and your quiet periods.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Portfolio",
    description:
      "Experience buildings that look, smell, and feel fresh every single day, backed by our MaundyClean 100% satisfaction guarantee. You receive a signed cleaning log after every visit (operative signature, factor or property-manager counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a fly-tipping incident, a damaged fixture, a failed close light, a leaking pipe, or a bin store pest sighting &mdash; before they undermine a resident complaint, a factor inspection, or a tribunal hearing. From &pound;15 per hour for a single block through to a fully bespoke retainer for a multi-site portfolio. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function PropertyManagementSeoBooking() {
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
            straightforward, providing the responsive management support Scottish
            business owners demand. From free site survey and itemised proposal to
            first clean in under a week &mdash; no friction, no waiting, no
            surprises. Just a pristine portfolio, every close, every stairwell, and
            a compliance file that&rsquo;s dispute-proof the day a resident
            questions the service charge.
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
              Request Your Bespoke Portfolio Quote
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
    icon: KeyRound,
    title: "Property Transitions",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseSpring,
    imageAlt:
      "End of tenancy handover clean for a Scottish residential unit being vacated, ensuring the property is front-line ready for the next tenant to move in immediately",
    description: (
      <>
        Moving a tenant out? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        ensures properties are front-line ready and your deposit-back guarantees
        are met. Every surface detailed top-to-bottom &mdash; the same trusted,
        vetted crew, the same child-safe eco chemistry, the same signed cleaning
        log after every visit &mdash; so your handover inspection, your
        deposit-return negotiation, and your next tenant&rsquo;s first walk-through
        all start from a &ldquo;speechlessly spotless&rdquo; baseline.
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
      "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish residential unit before the new tenant moves in",
    description: (
      <>
        If a unit has undergone improvements, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is designed to remove heavy construction dust and debris. Fine dust left
        on stairwells, communal floors, freshly-painted finishes, or newly-fitted
        kitchens undermines the resident-trust signal the moment the unit is
        handed back &mdash; we vacuum, damp-wipe, and protect every surface
        before the dust has a chance to damage your residents&rsquo; experience or
        your freshly-painted finishes.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: Sparkles,
    title: "Seasonal Resets",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "Seasonal deep clean of a Scottish residential communal lobby and amenity room to maintain building value and resident satisfaction",
    description: (
      <>
        Schedule a{" "}
        <Link
          href="/services/deep-house-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Deep House Cleaning
        </Link>{" "}
        for communal lobbies and amenity rooms twice a year to maintain building
        value. The twice-yearly reset that lifts the cumulative contamination load
        the daily clean can&rsquo;t reach &mdash; high-level dusting of ceiling
        fixtures and vents, deep carpet extraction in communal lounges, hard floor
        machine-scrub and buff, and a full sanitiser fog of lift cars and amenity
        WCs.
      </>
    ),
    cta: "Explore deep house cleaning",
  },
  {
    icon: HeartPulse,
    title: "Specialist Fabric Care",
    href: "/services/upholstery-cleaning",
    image: IMG.leaseAntiviral,
    imageAlt:
      "Professional upholstery cleaning of communal seating and carpets in a Scottish residential block with Maundy Clean using certified fabric-safe chemistry",
    description: (
      <>
        Rejuvenate communal seating and carpets with our professional{" "}
        <Link
          href="/services/upholstery-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Upholstery Cleaning
        </Link>{" "}
        to remove odors and stains. Hot-water extraction for cloth lounge seating
        in sheltered-housing communal rooms; leather conditioning for executive
        amenity blocks; stain treatment for coffee, juice, and pet marks from
        residents; odour neutralisation for lingering cooking and tobacco. The
        detail that keeps your communal lounges feeling premium visit after
        visit, year after year.
      </>
    ),
    cta: "Explore upholstery cleaning",
  },
];

export function PropertyManagementSeoInterlinking() {
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
            Our property management cleaning is the heartbeat of your
            building&rsquo;s health, but we offer specialized support for major
            milestones: from property transitions that need rapid-response
            end-of-tenancy resets, through post-renovation dust clear-outs and
            seasonal deep cleans, to specialist fabric care for communal seating
            and carpets. The same trusted, vetted crew can step up whenever your
            portfolio needs more than a standard visit, with the same child-safe,
            surface-safe protocols in force.
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
// (Semantic H2: "Property Management & Landlord Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/property-management-cleaning-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function PropertyManagementSeoNearMe() {
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
              Local property management &amp; block maintenance cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Property Management &amp; Landlord Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;property management cleaning near me&rdquo; or
              &ldquo;factor cleaning near me&rdquo; in Scotland? Maundy Clean covers
              factors, private landlords, housing associations, and property
              management companies across the Central Belt, Highlands, Borders, and
              Islands &mdash; from Glasgow&rsquo;s West End tenements and
              Edinburgh&rsquo;s New Town crescents to Aberdeen&rsquo;s granite
              four-in-a-blocks and Dundee&rsquo;s Victorian terraces, plus
              independent factors in Stirling, Perth, Inverness, and Ayr. Same
              PVG-checked, uniformed crews, same dedicated crew every visit, same
              reactive mobile team for last-minute VIP visits and emergency
              scenarios &mdash; wherever your block happens to be. Find your local
              property management cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean property management &amp; block maintenance cleaning service coverage areas"
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
                  Same PVG-checked crews, same 100% satisfaction guarantee &mdash; from
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
                <Link href="/services/property-management-cleaning-near-me#locations">
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
                Find your local property crew
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
                    href={`/services/property-management-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> factor crew</span>
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
            Our local property management cleaning crews operate across
            Glasgow&rsquo;s West End, Southside and Merchant City tenement blocks
            (factors, housing associations and private landlords), Edinburgh&rsquo;s
            New Town, Marchmont and Morningside crescents (factors and property
            management companies), Aberdeen&rsquo;s West End and Rosemount granite
            four-in-a-blocks (factors and private landlords), Dundee&rsquo;s West
            End and City Centre Victorian terraces (factors and student
            accommodation operators), and Scottish property management districts
            across the Central Belt &mdash; from Inverness to Perth, Falkirk to
            Ayr. Whether you&rsquo;re searching for early-morning close resets in
            Glasgow, evening bin store hygiene in Edinburgh, weekend turnover
            support in Aberdeen, or end-of-tenancy resets anywhere in between,
            Maundy Clean assigns a vetted, PAYE-employed, PVG-checked crew that
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
// (Semantic H2: "Request Your Bespoke Portfolio Quote")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function PropertyManagementSeoFinalCta() {
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
            Ready to book your portfolio survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Bespoke Portfolio Quote
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free portfolio site survey with our management team and receive
            an itemised proposal within 2 business days. Communal-area consistency
            across every close and stairwell, a reactive mobile team for last-minute
            VIP visits and emergency scenarios, 24/7 emergency response, end of
            tenancy resets, forecourt power-washing, multi-site retainer options,
            signed cleaning logs, &pound;5m public liability as standard, and a
            100% satisfaction guarantee &mdash; from &pound;15 per hour for a single
            block through to a fully bespoke multi-site portfolio retainer. No pushy
            sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Portfolio Quote
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
                View Our Property Management Checklist
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
// 3 Q&As from the brief (insured for commercial and block
// management, provide own cleaning supplies, 24/7 emergency
// response)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for commercial and block management?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience serving Scotland&rsquo;s landlords and property managers. We carry &pound;5m public liability as standard &mdash; covering communal areas, bin stores, forecourts, and tenant-occupied units &mdash; and every operative is PVG-checked (essential for buildings where residents may be present), uniformed, and trained in property-management-specific protocols: communal area cleaning, end of tenancy resets, forecourt power-washing, tenement close cleaning, stairwell sanitisation, bin store hygiene, and reactive emergency response. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for factor agreements, housing association insurance terms, landlord insurance, and mortgage lender compliance files. Our documentation is audit-ready for factor inspection, environmental health inspection, and HSE review; we provide signed cleaning logs, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file. We will not begin work until your factor or property manager has the documentation they need.",
  },
  {
    q: "Do you provide your own cleaning supplies?",
    a: "Yes. We supply all our own professional-grade equipment and eco-friendly products, which are included in your competitive quote. From HEPA-filtered vacuums for communal carpets and stone-safe pH-neutral cleaner for tenement stairs (no acid, no bleach), to industrial scrubber-driers for polished concrete forecourt restoration, hot-water extraction for communal lounge carpets, professional pressure-washers for forecourts and bin store surrounds, and COSHH-documented, child-safe, surface-safe chemistry by default &mdash; every tool is maintained to manufacturer spec. HEPA-filtered vacuums with extension tubes for close dust and cobwebs; industrial scrubber-driers for polished concrete and tiled communal floors; hot-water extraction for communal lounge carpets and unit carpets at tenancy change; pressure-washers for forecourts, walkways, and bin store surrounds; pH-neutral stone-safe cleaner for tenement stairs; fragrance-free sanitiser for high-touch handrails and entry phone systems; non-toxic degreaser for bin stores; HSE-compliant chemicals with COSHH datasheets on file; PPE; and non-toxic, child-safe, surface-safe chemistry by default. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Can you handle 24/7 emergency responses?",
    a: "Yes. We offer emergency response services to ensure minimal disruption to your business should unforeseen situations arise. A burst pipe in a top-floor flat at 2am, a tenant abandoned-property handover at short notice, a flood in a communal basement, a factor inspection tomorrow morning, a VIP viewing of a vacant unit, or a deliberate-damage incident overnight &mdash; our reactive mobile team mobilises a vetted, uniformed, PVG-checked crew within hours, not days, with the right chemistry and equipment to make the building safe, dry, and presentable again. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. From &pound;15 per hour for a single block through to a fully bespoke retainer for a multi-site portfolio. Same trusted crew, same standard, same locked-in rate &mdash; the reactive partner your factor desk can call at any hour.",
  },
];

export function PropertyManagementSeoFaq() {
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
            Property management &amp; landlord cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our property management &amp;
            landlord cleaning clients ask most often. Can&rsquo;t find what you
            need? Call us on{" "}
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
                Request Your Bespoke Portfolio Quote
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
                View Our Property Management Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

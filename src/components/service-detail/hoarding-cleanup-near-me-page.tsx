"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Leaf,
  Star,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  Zap,
  UserCheck,
  CalendarCheck,
  Home,
  KeyRound,
  Hammer,
  HeartPulse,
  Award,
  Phone,
  Layers,
  Droplets,
  Mountain,
  BookOpen,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  scotlandMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
  localCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  homeClean:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
};

// ============================================================
// 36 Scottish locations covered by the near-me page
// ============================================================
const LOCATIONS: { city: string; slug: string; region: string }[] = [
  // Central Belt
  { city: "Glasgow", slug: "glasgow", region: "Central Belt" },
  { city: "Edinburgh", slug: "edinburgh", region: "Central Belt" },
  { city: "Stirling", slug: "stirling", region: "Central Belt" },
  { city: "Falkirk", slug: "falkirk", region: "Central Belt" },
  { city: "Livingston", slug: "livingston", region: "Central Belt" },
  { city: "East Kilbride", slug: "east-kilbride", region: "Central Belt" },
  { city: "Paisley", slug: "paisley", region: "Central Belt" },
  { city: "Hamilton", slug: "hamilton", region: "Central Belt" },
  { city: "Motherwell", slug: "motherwell", region: "Central Belt" },
  { city: "Cumbernauld", slug: "cumbernauld", region: "Central Belt" },
  { city: "Coatbridge", slug: "coatbridge", region: "Central Belt" },
  { city: "Ayr", slug: "ayr", region: "Central Belt" },
  { city: "Kilmarnock", slug: "kilmarnock", region: "Central Belt" },
  { city: "Dunfermline", slug: "dunfermline", region: "Central Belt" },
  { city: "Kirkcaldy", slug: "kirkcaldy", region: "Central Belt" },
  { city: "Musselburgh", slug: "musselburgh", region: "Central Belt" },
  { city: "Dalkeith", slug: "dalkeith", region: "Central Belt" },
  { city: "Bathgate", slug: "bathgate", region: "Central Belt" },
  // East
  { city: "Dundee", slug: "dundee", region: "East" },
  { city: "Perth", slug: "perth", region: "East" },
  { city: "St Andrews", slug: "st-andrews", region: "East" },
  // North East
  { city: "Aberdeen", slug: "aberdeen", region: "North East" },
  { city: "Elgin", slug: "elgin", region: "North East" },
  { city: "Peterhead", slug: "peterhead", region: "North East" },
  { city: "Stonehaven", slug: "stonehaven", region: "North East" },
  { city: "Inverurie", slug: "inverurie", region: "North East" },
  // Highlands & Islands
  { city: "Inverness", slug: "inverness", region: "Highlands & Islands" },
  { city: "Oban", slug: "oban", region: "Highlands & Islands" },
  { city: "Fort William", slug: "fort-william", region: "Highlands & Islands" },
  { city: "Aviemore", slug: "aviemore", region: "Highlands & Islands" },
  { city: "Wick", slug: "wick", region: "Highlands & Islands" },
  { city: "Thurso", slug: "thurso", region: "Highlands & Islands" },
  { city: "Lerwick", slug: "lerwick", region: "Highlands & Islands" },
  { city: "Kirkwall", slug: "kirkwall", region: "Highlands & Islands" },
  // South
  { city: "Dumfries", slug: "dumfries", region: "South" },
  { city: "Stranraer", slug: "stranraer", region: "South" },
];

// Group by region for cleaner display
const REGION_ORDER = ["Central Belt", "East", "North East", "Highlands & Islands", "South"];
const locationsByRegion = REGION_ORDER.map((region) => ({
  region,
  cities: LOCATIONS.filter((l) => l.region === region),
}));

// ============================================================
// Trust badges for the hero
// ============================================================
const HERO_BADGES = [
  { icon: Star, label: "4.9/5 \u00b7 6,200+ reviews" },
  { icon: Shield, label: "Fully Insured & PVG-Checked" },
  { icon: Leaf, label: "Sanctuary-Safe Supplies" },
  { icon: HeartPulse, label: "Compassion-First Crews" },
];

// ============================================================
// The 4 trust pillars
// ============================================================
const TRUST_PILLARS = [
  {
    icon: Users,
    title: "The Same Trusted Hoarding Cleanup Crew Every Time",
    description:
      "Unlike gig-economy cleaning apps, we only employ our own staff. The same vetted, PVG-checked, mental-health-trained, safeguarding-aware technicians who manage your initial compassionate assessment are the ones performing your sorting, clearance, deep clean, and odour-neutralisation visits. Continuity matters when the stakes are a Glasgow family home with 20 years of accumulated possessions, an Edinburgh social-work referral for a vulnerable adult, or an Aberdeen deceased-estate clearance &mdash; we don&rsquo;t send rotating crews of strangers to a vulnerable client&rsquo;s home during a sensitive restoration.",
  },
  {
    icon: BookOpen,
    title: "Compassionate Sorting, Donation Streams & Specialised Training",
    description:
      "Our hoarding-restoration specialists understand every variety of hoarding scenario &mdash; from disorganised clutter through extreme unsanitary conditions, living and deceased estates, social-work and NHS referrals, housing-association notices, and private guardian cases. We pace the work to the individual&rsquo;s readiness, with consent at every step, and a &ldquo;reuse-first&rdquo; mindset that maximises donation (charity shops, food banks, animal shelters, homeless charities) and recycling while minimising landfill. Every crew member is trained in hoarding disorder awareness, Adult Support and Protection Scotland Act 2007 protocols, and mental-health-aware communication &mdash; including the &ldquo;pause-and-stop&rdquo; rule if the client becomes distressed.",
  },
  {
    icon: FileText,
    title: "RAMS Compliance, Licensed Waste & Multi-Agency Documentation",
    description:
      "For safeguarding cases requiring specialist coordination, we work directly with your social worker, NHS mental health team, housing association, or private guardian &mdash; timing the clearance to the case plan and providing documentation suitable for case-file audit. We hold SafeContractor approval, full COSHH documentation, licensed waste-carrier registration for clinical and contaminated waste streams, and provide court-ready evidence packages on request (photographic condition records, donation receipts, waste-transfer notes, safeguarding logs). All chemistry is REACH-compliant, child-safe, pet-safe, and fragrance-free variants are available for chemically-sensitive residents. Audit-ready for Care Inspectorate, EHO, or insurer review.",
  },
  {
    icon: Award,
    title: "Fully Insured & 100% Satisfaction Guaranteed",
    description:
      "Every hoarding-restoration specialist is Disclosure Scotland PVG-checked, hepatitis-B vaccinated, and occupational-health monitored. We hold &pound;5m public liability and &pound;10m employer&rsquo;s liability cover, and we offer a free re-clean within 24 to 48 hours if you are not 100% satisfied. We are a registered Scottish company &mdash; not a gig-economy agency &mdash; and the Maundy Clean standard applies on every visit. From &pound;22/hr (minimum 6 hours) for a single-room clearance through to &pound;POA for complex multi-agency safeguarding cases with court-ready documentation, with a written restoration report on every visit and 12-month rate-lock on every contract.",
  },
];

// ============================================================
// The 3-step booking process
// ============================================================
const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Free Sensitive Site Survey & Compassionate Quote",
    description:
      "Tell us about the property condition, the individual&rsquo;s situation, and any supporting agencies involved &mdash; and receive a fixed-price restoration quote within 2 business days. Our management team will visit the property (with consent) to assess contamination load, structural risk, safeguarding status, and pace requirements, then provide a detailed, sensitive proposal. No pushy sales call, no &ldquo;clearance-only&rdquo; pressure tactics. The price you see is the price you pay &mdash; locked in for 12 months, with no on-the-day upsells for chemistry, waste disposal, or donation transport.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Local Compassionate Crew Matching",
    description:
      "We match you with a vetted, mental-health-trained, safeguarding-aware crew in your postcode. They confirm the property&rsquo;s history map, the individual&rsquo;s communication preferences, the agreed pace, and any safeguarding protocols in place, flag any structural risks (fire, floor loading, blocked exits, mould, pest activity), and walk you through the restoration plan before any work starts &mdash; so there are no surprises on the day. The same crew returns for every visit, building genuine trust with the client.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "A Sanctuary-Restored Property",
    description:
      "Walk into a property that looks, smells, and feels brand new, backed by our 100% satisfaction guarantee. We finish every visit with a signed Treatment Certificate (crew names, time in/out, rooms cleared, items donated/recycled/disposed with receipts, chemistry used with batch numbers, photo evidence of pre-and-post condition), a defect-flagging report (structural pest-entry points, mould contamination, items needing specialist disposal), and a re-visit reminder if a multi-stage restoration is in progress. From &pound;22/hr (minimum 6 hours) for single-room clearance through to &pound;POA for complex safeguarding cases.",
  },
];

// ============================================================
// FAQ for the near-me page
// ============================================================
const NEAR_ME_FAQS = [
  {
    q: "How do I know if you cover my area for hoarding cleanup?",
    a: "We cover 72+ towns and cities across Scotland &mdash; from Glasgow and Edinburgh in the Central Belt to Lerwick in Shetland and everywhere in between. Use the location grid above to find your town. If you don&rsquo;t see your postcode listed, call us &mdash; we add new coverage areas every month and may already have a hoarding-restoration specialist near you. Scottish local authority social work departments, NHS mental health teams, and housing associations across Scotland refer their clients to us for hoarding cleanup &mdash; we can usually coordinate with your existing support team regardless of location.",
  },
  {
    q: "How quickly can a local hoarding cleanup specialist start?",
    a: "From quote to clearance in under 5 working days for most postcodes in the Central Belt. For more remote areas (Highlands, Islands, Borders), allow 7-10 working days for crew routing and travel planning. Same-week starts are occasionally possible in Glasgow, Edinburgh, Stirling, and Dundee &mdash; call us to check availability. For safeguarding cases with multi-agency involvement, we typically schedule the first visit 1-2 weeks out to allow for case-plan alignment. Emergency cases (housing-association notices, Environmental Health enforcement, deceased-estate time pressure) can often be fast-tracked &mdash; call us and explain the urgency.",
  },
  {
    q: "Will the crew travel to me, or do I need to bring anything to you?",
    a: "All hoarding cleanup work is performed on-site at the property &mdash; we never transport your possessions anywhere. Our crews arrive in unmarked vans (discretion is part of our service &mdash; no neighbourhood signage) with HEPA-filtered vacuums, full PPE (Tyvek suits, FFP3 respirators, nitrile gloves, eye protection), sealed biohazard bags, EN 1276 bactericidal and EN 14476 virucidal chemistry, donation-stream labels and bags, recycling segregation containers, and licensed waste-carrier documentation. The only items we may need from you are: access to the property, any key-safe codes or alarm fobs, a brief on the individual&rsquo;s preferences and any safeguarding protocols, and (where applicable) contact details for any supporting agencies.",
  },
  {
    q: "Do you have hoarding cleanup specialists available in rural Scotland?",
    a: "Yes. We cover rural Scotland including Perthshire, Angus, Fife, the Borders, Argyll, Aberdeenshire, and parts of the Highlands. For very remote properties (Islands, far North), we may operate on a minimum-visit basis (typically 2-3 days) or schedule combined visits with neighbouring properties to keep travel costs down. Call us to discuss your specific location &mdash; we&rsquo;ll always give you a straight answer on coverage and lead time. For rural agricultural properties (farm outbuildings, croft houses, estates), we have specific protocols &mdash; ask us about rural hoarding cleanup.",
  },
  {
    q: "Can you do the hoarding cleanup discreetly in my Glasgow neighbourhood?",
    a: "Absolutely &mdash; discretion is one of our core principles, particularly across Glasgow&rsquo;s residential West End, Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s energy-sector HMOs, and Dundee&rsquo;s student flats where neighbours notice everything. We arrive in unmarked vans (no Maundy Clean signage, no &ldquo;hoarding cleanup&rdquo; branding), our crew wear plain uniforms (no high-vis), and we never discuss a case outside the team. We can schedule visits during school hours (when fewer neighbours are around), use side or rear entrances where available, and remove waste in sealed, unmarked bags. The cardinal rule: a vulnerable client&rsquo;s privacy is non-negotiable.",
  },
  {
    q: "What&rsquo;s the difference between single-room clearance, whole-property clearance, and complex safeguarding cases near me?",
    a: "Single-room clearance (&pound;22/hr, minimum 6 hours) is the targeted response for one affected room &mdash; typically a kitchen, living room, or bedroom with manageable clutter and contamination. Whole-property clearance (&pound;22/hr, minimum 20 hours) is the full multi-day or multi-week restoration for a residential property &mdash; all rooms cleared, full deep clean, ozone and thermal-fog odour removal, donation and recycling documentation. Complex / safeguarding cases (POA) are the multi-agency cases for social work, NHS, housing association, or private guardian referrals &mdash; multi-agency partnership, safeguarding-trained team, full case documentation, court-ready evidence if needed, dedicated case manager. We&rsquo;ll recommend the right approach at the free site survey &mdash; no upselling, no &ldquo;clearance-only&rdquo; pressure.",
  },
];

// ============================================================
// Main page component
// ============================================================

export function HoardingCleanupNearMeHero() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                                */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.heroWide}
            alt="Maundy Clean hoarding cleanup specialist in full PPE carrying out a compassionate property reset at a Scottish home"
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
              Hoarding Cleanup Near Me &middot; Compassionate Property Resets Across Scotland
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
            >
              Hoarding Cleanup &amp; Technical Property Resets Near Me in Scotland
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
            >
              Find local compassionate hoarding cleanup crews across Scotland. Same trusted team every
              visit, PVG-checked and mental-health-trained, safeguarding-aware, RAMS compliance,
              donation &amp; recycling streams, ozone odour neutralisation, child-safe eco supplies,
              100% satisfaction guarantee. 72+ Scottish towns covered. From &pound;22/hr.
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
                  Request Your Sensitive Site Survey Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
                asChild
              >
                <Link href="#locations">
                  <MapPin className="w-4 h-4" />
                  Find Your Local Crew
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85"
            >
              {HERO_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-[var(--gold)]" />
                    {badge.label}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. INTRO + STATS                                              */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
                Local hoarding cleanup &middot; Scotland-wide coverage
              </span>
              <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
                Compassionate Hoarding Restoration, Wherever You Are in Scotland
              </h2>
              <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
                Searching for &ldquo;hoarding cleanup near me&rdquo; or &ldquo;hoarder house clearance
                near me&rdquo; in Scotland? Maundy Clean assigns a local, vetted, PVG-checked crew to
                your property &mdash; the same team every visit, building genuine trust with the
                individual and a real understanding of the property&rsquo;s history. We cover 72+
                Scottish towns across the Central Belt, the East, the North East, the Highlands and
                Islands, and the Borders and South-West.
              </p>
              <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
                Our local crews bring the same compassion-first standard, the same safeguarding
                protocols, and the same multi-agency partnership capability &mdash; whether
                you&rsquo;re in a Glasgow West End tenement, an Edinburgh New Town flat, an Aberdeen
                HMO, a Dundee student property, a rural Highland cottage, or an island croft. Discretion
                is absolute: unmarked vans, plain uniforms, no neighbourhood signage, and absolute
                confidentiality. The vulnerable client&rsquo;s privacy is non-negotiable, wherever
                they happen to live.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[var(--cream)] rounded-3xl p-7 lg:p-8 border border-[var(--border)]"
            >
              <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-5">
                Why local matters for hoarding cleanup
              </h3>
              <ul className="space-y-3 text-sm text-[var(--ink)]/85">
                {[
                  { icon: UserCheck, label: "Same crew every visit", text: "Continuity builds trust with vulnerable clients" },
                  { icon: Clock, label: "Faster response", text: "Central Belt quote-to-clearance in under 5 days" },
                  { icon: HeartPulse, label: "Local safeguarding knowledge", text: "Established relationships with Scottish local authorities" },
                  { icon: Leaf, label: "Local donation streams", text: "Charity shops, food banks, shelters in your town" },
                  { icon: Shield, label: "Discreet local presence", text: "Unmarked vans, plain uniforms, no signage" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 border border-[var(--border)]">
                        <Icon className="w-4 h-4 text-[var(--brand)]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--ink)]">{item.label}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">{item.text}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 pt-5 border-t border-[var(--border)]">
                <div className="text-3xl font-bold text-[var(--brand)]">72+</div>
                <div className="text-xs text-[var(--muted-foreground)]">Scottish towns actively covered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. LOCATION GRID                                              */}
      {/* ============================================================ */}
      <section id="locations" className="py-16 lg:py-24 bg-[var(--cream)] scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
              Find your local crew
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Hoarding Cleanup Across Scotland &mdash; 72+ Towns Covered
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              Click your town to find your local Maundy Clean hoarding-restoration crew. Each
              location is served by a vetted, PVG-checked team with the same compassion-first
              standard, the same safeguarding protocols, and the same multi-agency partnership
              capability.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
            {/* Map image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)] lg:sticky lg:top-6"
            >
              <img
                src={IMG.scotlandMap}
                alt="Map of Scotland showing Maundy Clean hoarding cleanup service coverage areas by region"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    5 regions &middot; 72+ towns
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  From Glasgow to Lerwick. Same compassion-first standard everywhere.
                </p>
              </div>
            </motion.div>

            {/* Region-grouped location grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 lg:p-8 border border-[var(--border)] shadow-sm"
            >
              {locationsByRegion.map((regionGroup, ri) => (
                <div key={regionGroup.region} className={ri === 0 ? "" : "mt-7"}>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-[var(--brand)]" />
                    <h3 className="font-display font-bold text-base text-[var(--ink)]">
                      {regionGroup.region}
                    </h3>
                    <span className="text-xs text-[var(--muted-foreground)]">
                      ({regionGroup.cities.length} towns)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5">
                    {regionGroup.cities.map((loc, i) => (
                      <motion.div
                        key={loc.slug}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: Math.min((ri * 5 + i) * 0.015, 0.6) }}
                      >
                        <Link
                          href={`#locations`}
                          className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                          <span>
                            <span className="font-medium">{loc.city}</span>
                            <span className="text-[var(--muted-foreground)]"> hoarding cleanup</span>
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-7 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
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
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WHY PILLARS                                                */}
      {/* ============================================================ */}
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
              The Maundy Clean standard &middot; Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why Scottish Families Choose Our Local Hoarding Cleanup Crews
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              The same vetted standard, the same compassion-first protocols, the same multi-agency
              partnership capability &mdash; whether your property is in Glasgow&rsquo;s West End or
              a remote Highland croft. Local crews, national standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRUST_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-7 border border-[var(--border)] flex flex-col md:flex-row items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-[var(--brand)]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-2">
                      {pillar.title}
                    </h3>
                    <p
                      className="text-sm text-[var(--muted-foreground)] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: pillar.description }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. 3-STEP BOOKING                                             */}
      {/* ============================================================ */}
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
              Hassle-free booking &middot; Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              The MaundyClean 3-Step &ldquo;Hassle-Free&rdquo; Process
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              From free sensitive site survey through local crew matching to a sanctuary-restored
              property &mdash; no friction, no waiting, no surprises. The same process, wherever your
              property is in Scotland.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
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
                Request Your Sensitive Site Survey Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SPECIALIST CROSS-LINKS                                     */}
      {/* ============================================================ */}
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
              Long-term sanctuary &middot; Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Specialist Cross-Links for Hoarding Restoration Clients
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              A hoarding cleanup is a total property reset, but the true goal is long-term health.
              These specialist services are available from the same trusted Maundy Clean crews
              across Scotland &mdash; wherever your property is located.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: "Recurring Home Cleaning",
                href: "/services/recurring-home-cleaning",
                description:
                  "Once the property is restored, our recurring service keeps it manageable &mdash; the same crew returns weekly or fortnightly to maintain the sanctuary.",
              },
              {
                icon: KeyRound,
                title: "End of Tenancy Cleaning",
                href: "/services/move-in-out-cleaning",
                description:
                  "Preparing the restored property for sale or new tenants? Our end-of-tenancy protocol ensures it passes all final inspections with deposit-back guarantee.",
              },
              {
                icon: Hammer,
                title: "After Builders Clean",
                href: "/services/post-construction-cleaning",
                description:
                  "If hoarding caused structural damage requiring renovation, our after-builders clean removes heavy construction dust once improvements are finished.",
              },
              {
                icon: Shield,
                title: "Disinfection Services",
                href: "/services/disinfection-services",
                description:
                  "For a total biological &ldquo;reset&rdquo; after restoration &mdash; EN 14476 virucidal treatment with 30-day antimicrobial surface coating for high-touch points.",
              },
            ].map((cross, i) => {
              const Icon = cross.icon;
              return (
                <motion.div
                  key={cross.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={cross.href}
                    className="group block bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/40 hover:-translate-y-1 transition-all h-full"
                  >
                    <div className="p-5">
                      <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[var(--brand)]" />
                      </div>
                      <h3 className="font-display font-bold text-base text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                        {cross.title}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-3">
                        {cross.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] group-hover:text-[var(--brand-dark)]">
                        Explore service
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

      {/* ============================================================ */}
      {/* 7. FINAL CTA                                                  */}
      {/* ============================================================ */}
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
              Ready to book your sensitive site survey?
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
              Request Your Sensitive Site Survey Today
            </h2>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a free, no-obligation site survey with our management team and receive an itemised,
              sensitive proposal within 2 business days. Vetted PVG-checked uniformed crews,
              mental-health-trained and safeguarding-aware, full RAMS compliance, signed Treatment
              Certificates, &pound;5m public liability, and a 100% satisfaction guarantee &mdash;
              from &pound;22/hr (minimum 6 hours) through to fully bespoke multi-agency safeguarding
              cases. No pushy sales call, no &ldquo;clearance-only&rdquo; pressure tactics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
                asChild
              >
                <Link href="/quote">
                  Request Your Sensitive Site Survey Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
                asChild
              >
                <Link href={`tel:${contactInfo.phoneHref.replace("tel:", "")}`}>
                  <Phone className="w-4 h-4" />
                  Call {contactInfo.phone}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. NEAR-ME FAQ                                                */}
      {/* ============================================================ */}
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
              Hoarding cleanup near me &middot; FAQ
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Frequently Asked Questions About Hoarding Cleanup in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              Straight answers to the questions our local hoarding cleanup clients ask most often.
              Can&rsquo;t find what you need? Call us on{" "}
              <a
                href={contactInfo.phoneHref}
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4"
              >
                {contactInfo.phone}
              </a>{" "}
              &mdash; sensitively, confidentially, at your pace.
            </p>
          </motion.div>

          <div className="space-y-4">
            {NEAR_ME_FAQS.map((faq, i) => (
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
                  Request Your Sensitive Site Survey Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-light)]/40"
                asChild
              >
                <Link href="/services/hoarding-cleanup">
                  View Full Hoarding Cleanup Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

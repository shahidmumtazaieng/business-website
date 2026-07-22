"use client";

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
  Warehouse,
  Users,
  UserCheck,
  CalendarCheck,
  KeyRound,
  Hammer,
  Award,
  Phone,
  HeartPulse,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%2010.13.19%20PM.jpeg",
  scotlandMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
  localCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  warehouseClean:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
};

// ============================================================
// 36 Scottish locations covered by the near-me page
// (city-centre + neighbourhood coverage)
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
  { city: "Wishaw", slug: "wishaw", region: "Central Belt" },
  { city: "Coatbridge", slug: "coatbridge", region: "Central Belt" },
  { city: "Airdrie", slug: "airdrie", region: "Central Belt" },
  { city: "Dunfermline", slug: "dunfermline", region: "Central Belt" },
  { city: "Kirkcaldy", slug: "kirkcaldy", region: "Central Belt" },
  { city: "Glenrothes", slug: "glenrothes", region: "Central Belt" },
  { city: "Dundonald", slug: "dundonald", region: "Central Belt" },
  { city: "Bearsden", slug: "bearsden", region: "Central Belt" },
  { city: "Milngavie", slug: "milngavie", region: "Central Belt" },
  { city: "Bishopbriggs", slug: "bishopbriggs", region: "Central Belt" },
  { city: "Lenzie", slug: "lenzie", region: "Central Belt" },
  { city: "Giffnock", slug: "giffnock", region: "Central Belt" },
  { city: "Newton Mearns", slug: "newton-mearns", region: "Central Belt" },
  { city: "Clarkston", slug: "clarkston", region: "Central Belt" },
  { city: "Barrhead", slug: "barrhead", region: "Central Belt" },
  { city: "Johnstone", slug: "johnstone", region: "Central Belt" },
  { city: "Renfrew", slug: "renfrew", region: "Central Belt" },
  { city: "Rutherglen", slug: "rutherglen", region: "Central Belt" },
  { city: "Cambuslang", slug: "cambuslang", region: "Central Belt" },
  { city: "Bellshill", slug: "bellshill", region: "Central Belt" },
  { city: "Ayr", slug: "ayr", region: "Central Belt" },
  { city: "Kilmarnock", slug: "kilmarnock", region: "Central Belt" },
  { city: "Greenock", slug: "greenock", region: "Central Belt" },
  // East
  { city: "Dundee", slug: "dundee", region: "East" },
  { city: "Perth", slug: "perth", region: "East" },
  // North East
  { city: "Aberdeen", slug: "aberdeen", region: "North East" },
  // Highlands & Islands
  { city: "Inverness", slug: "inverness", region: "Highlands & Islands" },
];

// Group by region for cleaner display
const REGION_ORDER = ["Central Belt", "East", "North East", "Highlands & Islands"];
const locationsByRegion = REGION_ORDER.map((region) => ({
  region,
  cities: LOCATIONS.filter((l) => l.region === region),
}));

// ============================================================
// Trust badges for the hero
// ============================================================
const HERO_BADGES = [
  { icon: Star, label: "4.9/5 \u00b7 6,200+ reviews" },
  { icon: UserCheck, label: "Same Trusted Team Every Visit" },
  { icon: ShieldCheck, label: "MHE-Aware & IPAF Operators" },
  { icon: Clock, label: "Night & Weekend Shifts Available" },
];

// ============================================================
// The 4 trust pillars
// ============================================================
const TRUST_PILLARS = [
  {
    icon: Warehouse,
    title: "Local Logistics Specialists, Not an Impersonal Agency",
    description:
      "Maundy Clean is a Scottish distribution centre cleaning company built on the Maundy tradition of service and care. We don&rsquo;t operate as an impersonal national franchise &mdash; we&rsquo;re a local specialist with vetted, uniformed, MHE-aware crews living and working in your area. Whether you&rsquo;re searching for nightly distribution-centre cleaning on Glasgow&rsquo;s Eurocentral and the Bellshill and Uddingston distribution corridor, weekend dispatch-floor degreasing on Edinburgh&rsquo;s Midlothian logistics belt (Sheriffhall, Straiton), cold-store sanitation on Aberdeen&rsquo;s Altens and Tullos industrial estates, or dockside and tech-park 3PL cleaning on Dundee&rsquo;s dockside anywhere in between, we assign a vetted, PAYE-employed crew that stays with you for the long run. Same team, same standard, same locked-in rate for 12 months.",
  },
  {
    icon: Users,
    title: "The Same Trusted Crew Every Visit",
    description:
      "Unlike gig-economy cleaning apps, we only employ our own staff. The same vetted, uniformed, MHE-aware, IPAF-certified crew that manages your first clean is the crew that returns for every scheduled session. Continuity matters when the stakes are 18,000 sqm distribution floors, 8&ndash;12m high-bay racking, combustible-dust HSE compliance, BRCGS audit-readiness, and forklift-aware MHE safety protocols &mdash; we don&rsquo;t send rotating crews of agency strangers walking an active picking aisle. When your regular crew lead is on annual leave, we send a trained backup who has been briefed on your facility layout, your MHE traffic routes, your racking layout, your permit-to-work protocols, and your access preferences &mdash; and we tell you in advance.",
  },
  {
    icon: ShieldCheck,
    title: "MHE-Aware, IPAF-Certified & £5m–£10m Public Liability",
    description:
      "Every technician is MHE-aware trained (counterbalance, reach truck, picker awareness &mdash; not certified to drive, but trained to work safely around), IPAF-certified (3a, 3b) for powered access, and is trained on logistics-specific protocols before stepping foot on site: HSE and BRCGS compliance, RAMS as standard, Safe Systems of Work, COSHH-documented chemistry, combustible-dust management (HEPA-filtered industrial vacuums &mdash; never compressed air, which redistributes dust and creates explosion risk in some dust classes), high-reach dusting on racking and rafters, dispatch-floor degreasing, chiller room and cold storage sanitisation (thermal PPE, low-temp chemistry, heated scrubber-dryers, working at &minus;25&deg;C), confined-space entry for silo cleans (CRN-trained operatives with standalone atmospheric monitoring), and audit-ready documentation for BRCGS, MHRA, ISO 9001, and major customer audits. We use non-toxic, child-safe, food-safe chemistry by default in canteen, office, and welfare zones. We hold &pound;5m public liability as standard, increased to &pound;10m for BRCGS-grocery contracts &mdash; full employer&rsquo;s liability, professional indemnity, and can name your business on our policy as additional insured.",
  },
  {
    icon: Award,
    title: "Signed Cleaning Logs & 100% Satisfaction Guarantee",
    description:
      "Every distribution centre client gets a dedicated account manager who knows your facility, your operations team, your shift patterns, and your audit regime &mdash; direct mobile number, 24-hour response, monthly compliance walk-throughs alongside your operations manager. After every visit you receive a signed cleaning log (operative signature, shift-supervisor counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a hydraulic spill on the dispatch floor, a damaged pallet in a picking aisle, a blocked fire exit, or a low-stock consumable in the welfare block &mdash; before they undermine a shift handover, an audit walk-through, or an HSE inspection. We offer a free re-clean within 24 to 48 hours if you are not 100% satisfied, and our visit-completion rate in 2025 was 99.6%. From &pound;17 per hour for a small single-shift distribution centre through to a fully bespoke retainer for a multi-site national distribution network.",
  },
];

// ============================================================
// The 3-step booking process
// ============================================================
const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Safe Systems",
    description:
      "Contact us for a free, no-obligation site survey with our management team. We walk your distribution centre with your operations manager and your H&amp;S team, identify your product type (ambient, chilled, frozen, food, pharma, electronics, general), your MHE traffic routes, your racking layout, your access windows (night shift, weekend, or specific quiet windows during shift handover), and your audit/compliance regime (BRCGS, MHRA, ISO 9001, customer audit). We develop a tailored RAMS package (Risk Assessments and Method Statements) and Safe Systems of Work for your facility&rsquo;s unique operational needs. We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, RAMS, COSHH datasheets, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Local Crew Matching & Onboarding",
    description:
      "We hand-pick a team with dedicated on-site managers who constantly monitor quality control and safety procedures. Your allocated crew lead is MHE-aware trained, IPAF-certified (3a, 3b) for powered access where required, and briefed on your facility layout, your MHE traffic routes, your racking layout, your permit-to-work protocols, your high-racking dusting rota, and your &ldquo;risky&rdquo; areas (cold storage, loading bay, picking aisle, conveyor line, charging zone) &mdash; so cleaning happens around your operations, not through them. The same crew returns for every scheduled session, building real knowledge of your shift patterns, your signage protocol, your lockout/tagout procedures, and your access preferences. We arrive in liveried vehicles, in uniform with photo I.D. and high-vis PPE, with commercial-grade ride-on sweepers and scrubber-dryers, HEPA-filtered industrial vacuums, scissor lifts where required, confined-space entry kits for silo cleans, and COSHH-compliant, child-safe, food-safe chemistry.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Verifiable Results, Every Visit",
    description:
      "Receive pre and post-clean reports to ensure every technical specification was met, backed by our MaundyClean satisfaction guarantee. You receive a signed cleaning log after every visit, arrival and departure times, tasks completed, and any issues flagged. Your dedicated account manager visits monthly for a compliance walk-through with your operations manager, and proactively raises concerns before they undermine a shift handover, an audit walk-through, or an HSE inspection. From &pound;17 per hour for a small single-shift distribution centre through to a fully bespoke multi-site national distribution retainer. We hold &pound;5m public liability as standard (&pound;10m for BRCGS-grocery contracts) and can name your business on our policy as additional insured.",
  },
];

// ============================================================
// FAQ for the near-me page
// ============================================================
const NEAR_ME_FAQS = [
  {
    q: "How do I know if you cover my area?",
    a: "We cover 72+ towns and cities across Scotland &mdash; from Glasgow and Edinburgh in the Central Belt to Inverness in the Highlands and everywhere in between. Use the location grid above to find your town. If you don&rsquo;t see your postcode listed, call us &mdash; we add new distribution-centre coverage areas every month and may already have a vetted uniformed MHE-aware crew near you. Our local DC cleaning crews operate across Glasgow&rsquo;s Eurocentral and the Bellshill and Uddingston distribution corridor, Edinburgh&rsquo;s Midlothian logistics belt (Sheriffhall, Straiton), Aberdeen&rsquo;s Altens and Tullos industrial estates, Dundee&rsquo;s dockside cold-store and tech parks, and the Central Belt&rsquo;s national RDC cluster.",
  },
  {
    q: "How quickly can a local distribution centre cleaning crew start?",
    a: "From site survey and tailored RAMS package to first clean in 5&ndash;7 working days for most postcodes in the Central Belt. For more remote areas (Highlands, Islands, Borders), allow 7&ndash;10 working days for crew routing, IPAF equipment mobilisation, and travel planning. Same-week starts are occasionally possible in Glasgow, Edinburgh, Stirling, and Dundee &mdash; call us to check availability. Large multi-site national distribution and 3PL contracts typically schedule 3&ndash;4 weeks out to allow for full site survey, proposal, mobilisation, ride-on equipment delivery, and crew onboarding across every site.",
  },
  {
    q: "Will the crew travel to my facility, or do I need to bring anything to you?",
    a: "All distribution centre cleaning is performed on-site at your premises &mdash; we never transport anything off-site. Our crews arrive in liveried vans with commercial-grade ride-on sweepers (Tennant, Karcher) and scrubber-dryers rated for 24/7 dock-floor use, walk-behind equipment for tight corners and racking aisles, HEPA-filtered industrial vacuums with extension tubes for high racking (never compressed air &mdash; it redistributes dust and creates explosion risk in some dust classes), scissor lifts and boom lifts for IPAF-operated high-reach work (8&ndash;12m racking, rafters, ductwork), confined-space entry kits with standalone atmospheric monitoring for silo cleans, 180&deg;C dry-steam sanitizers for tile grout and chrome, colour-coded cloths (red for high-contamination, green for product-facing, yellow for washroom and kitchenette, blue for back-of-house), HSE-compliant chemicals with COSHH datasheets, PPE, and non-toxic, child-safe, food-safe chemistry. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Do you have distribution centre cleaning crews experienced with HSE compliance, BRCGS audit, and high-reach work?",
    a: "Yes. Our crews are trained specifically on logistics protocols &mdash; HSE and BRCGS compliance, RAMS as standard, Safe Systems of Work, combustible-dust management (HEPA-filtered industrial vacuums &mdash; never compressed air), high-reach dusting on racking and rafters using IPAF-operated scissor lifts and boom lifts (3a, 3b certified), dispatch-floor degreasing, chiller room and cold storage sanitisation (thermal PPE, low-temp chemistry, heated scrubber-dryers, working at &minus;25&deg;C), confined-space entry for silo cleans (CRN-trained operatives with standalone atmospheric monitoring), and audit-ready documentation for BRCGS, MHRA, ISO 9001, and major customer audits (we work with supermarkets, pharmacies, electronics manufacturers, and aerospace). We provide audit-ready signed cleaning logs, COSHH datasheets, RAMS, training records, vetting records (DBS/PVG), and &pound;5m public liability certificates (&pound;10m for BRCGS-grocery contracts) for your compliance file. We currently service 18,000 sqm BRCGS-audited food distribution centres, 12,000 sqm e-commerce fulfilment hubs, cold storage at &minus;22&deg;C, 3PL operations, and major-retailer vendor-compliant facilities across Scotland.",
  },
  {
    q: "Can you handle secure access, alarm systems, and out-of-hours cleaning at my distribution centre?",
    a: "Absolutely. We&rsquo;re trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys stored in a coded safe between visits, alarm codes encrypted and only released to your assigned crew lead, never labelled with your address. We hold &pound;5m public liability as standard (increased to &pound;10m for BRCGS-grocery contracts) &mdash; full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, suitable for distribution centres, 3PL operations, cold storage facilities, and national distribution networks. The most common windows are night-shift cleaning (10pm&ndash;6am) for 24/7 operations, weekend cleaning for smaller DCs, or specific windows during quieter periods for shift-based operations. We coordinate with your shift supervisors, we don&rsquo;t disrupt forklift traffic, and we don&rsquo;t clean running conveyors. We can also support day-porter service for high-traffic welfare areas, spill response, and continuous presentation during operations.",
  },
  {
    q: "What&rsquo;s the difference between nightly, weekly, and after-hours distribution centre cleaning near me?",
    a: "Nightly cleaning (typically 10pm&ndash;6am, 7 nights a week) is the right choice for 24/7 operations, BRCGS-audited food distribution, and high-throughput e-commerce fulfilment where the cumulative forklift traffic, dust load, and welfare-zone contamination is too high for less frequent visits &mdash; the crew becomes part of your overnight shift. Weekly cleaning suits smaller single-shift distribution centres, low-traffic storage facilities, or ambient-only operations where the daily contamination load is manageable. After-hours cleaning means your crew works when your operations aren&rsquo;t running &mdash; typically weekend, night shift, or specific quiet windows during shift handover &mdash; giving them the empty DC they need to do a proper job: ride-on scrubber-dryer runs without forklift interaction, high-reach dusting on racking without disrupting pickers, conveyor-line wipe-down with lockout/tagout. We can also split: light touch during the day (welfare checks, spill response, touchpoint wipes every couple of hours), deep clean after hours. Your account manager will advise on the best schedule for your specific footprint, density, and shift pattern.",
  },
];

// ============================================================
// Main page component
// ============================================================

export function DistributionCentreCleaningNearMeHero() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 - Hero */}
      {/* H1: Distribution Centre Cleaning Near Me in Scotland */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.heroWide}
            alt="Maundy Clean MHE-aware, IPAF-certified logistics cleaning crew resetting a Scottish distribution centre before shift"
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
              72+ Scottish towns &middot; MHE-aware &amp; IPAF crews &middot; Same team every visit
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
            >
              Distribution Centre Cleaning Near Me in Scotland
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
            >
              Searching for &ldquo;distribution centre cleaning near me&rdquo; or &ldquo;DC cleaning
              company near me&rdquo; in Scotland? Maundy Clean covers grocery RDCs, e-commerce
              fulfilment hubs, 3PL operations, cold-storage facilities, and national distribution
              centres across the Central Belt, Highlands, Borders, and Islands. Same MHE-aware,
              IPAF-certified uniformed crews, same HSE and BRCGS-compliant protocols, same dedicated
              crew every visit &mdash; wherever your facility happens to be. From &pound;17 per hour
              for a small single-shift distribution centre through to a fully bespoke retainer for a
              multi-site national distribution network.
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
                  Request Your Detailed Proposal Today
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
                  Find Your Local DC Crew
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
                    <Icon className="w-4 h-4 text-[var(--gold)]" /> {badge.label}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 - Intro + stats */}
      {/* H2: Local Distribution Centre Cleaning You Can Trust */}
      {/* ============================================================ */}
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
              Local distribution centre cleaning &middot; Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              Local Distribution Centre Cleaning You Can Trust
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              Maundy Clean is a Scottish distribution centre cleaning company built on the Maundy
              tradition of service and care. We don&rsquo;t operate as an impersonal national
              franchise &mdash; we&rsquo;re a local specialist with vetted, uniformed, MHE-aware
              crews living and working in your area. Whether you&rsquo;re searching for nightly
              distribution-centre cleaning on Glasgow&rsquo;s Eurocentral and the Bellshill and
              Uddingston distribution corridor, weekend dispatch-floor degreasing on
              Edinburgh&rsquo;s Midlothian logistics belt (Sheriffhall, Straiton), cold-store
              sanitation on Aberdeen&rsquo;s Altens and Tullos industrial estates, or dockside and
              tech-park 3PL cleaning on Dundee&rsquo;s dockside anywhere in between, we assign a
              vetted, PAYE-employed crew that stays with you for the long run. Same crew, same
              standard, same locked-in rate for 12 months.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { label: "Visits completed in 2025", value: "99.6%" },
              { label: "MHE-aware &amp; IPAF operatives", value: "100%" },
              { label: "From per hour", value: "&pound;17" },
              { label: "Star rating", value: "4.9/5" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--cream)] rounded-xl p-4 border border-[var(--brand)]/10 text-center"
              >
                <div
                  className="font-display font-extrabold text-2xl text-gradient-brand"
                  dangerouslySetInnerHTML={{ __html: stat.value }}
                />
                <div
                  className="text-xs text-[var(--muted-foreground)] mt-1"
                  dangerouslySetInnerHTML={{ __html: stat.label }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 - Location grid (id="locations" anchor target) */}
      {/* H2: Find Your Local Distribution Centre Cleaning Crew */}
      {/* ============================================================ */}
      <section id="locations" className="py-16 lg:py-24 bg-[var(--cream)] scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14 items-start">
            {/* Left: copy + map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
                Coverage across Scotland
              </span>
              <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
                Find Your Local Distribution Centre Cleaning Crew
              </h2>
              <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
                Our network of vetted, MHE-aware, IPAF-certified distribution centre cleaning crews
                spans the entire country. From the grocery RDCs and e-commerce fulfilment hubs of
                the Central Belt to the cold stores and 3PL operations of the Highlands, we have a
                local team ready to care for your facility. Browse by region below, or call us to
                confirm coverage for your specific postcode.
              </p>

              <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
                <img
                  src={IMG.scotlandMap}
                  alt="Map of Scotland showing Maundy Clean distribution centre and logistics cleaning coverage areas"
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
                    Same MHE-aware, IPAF-certified crews, same 100% satisfaction guarantee
                    &mdash; from Glasgow to Inverness.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                  asChild
                >
                  <Link href="/quote">
                    <ClipboardCheck className="w-4 h-4" />
                    Request Your Detailed Proposal Today
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-light)]/40"
                  asChild
                >
                  <a href={contactInfo.phoneHref}>
                    <Phone className="w-4 h-4" />
                    {contactInfo.phone}
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right: regional location grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 lg:p-8 border border-[var(--border)] shadow-sm"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold text-lg text-[var(--ink)]">
                  Browse by region
                </h3>
                <span className="text-xs text-[var(--muted-foreground)]">36 of 72 locations shown</span>
              </div>

              <div className="space-y-6">
                {locationsByRegion.map((regionGroup) => (
                  <div key={regionGroup.region} id={regionGroup.region.toLowerCase().replace(/[^a-z]+/g, "-")}>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-[var(--brand)]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand)]">
                        {regionGroup.region}
                      </span>
                      <div className="flex-1 h-px bg-[var(--border)]" />
                      <span className="text-[10px] text-[var(--muted-foreground)]">
                        {regionGroup.cities.length} towns
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5">
                      {regionGroup.cities.map((loc) => (
                        <Link
                          key={loc.slug}
                          id={loc.slug}
                          href={`/services/distribution-centre-cleaning-near-me#${loc.slug}`}
                          className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40 scroll-mt-24"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                          <span>
                            <span className="font-medium">{loc.city}</span>
                            <span className="text-[var(--muted-foreground)]"> DC</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
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
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 - Why Maundy Clean for your local distribution centre cleaning */}
      {/* H2: Why Scottish Logistics Chooses Maundy Clean */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
              The Maundy Clean difference
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why Scottish Logistics Chooses Maundy Clean
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              We&rsquo;re a local specialist, not an impersonal national franchise. Our vetted,
              uniformed, MHE-aware, IPAF-certified distribution centre crews live in your area, know
              your city&rsquo;s logistics scene, and stay with you for the long run. Here&rsquo;s
              what sets us apart from the gig-economy apps and high-turnover agencies operating in
              Scotland.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRUST_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
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
                      {pillar.title}
                    </h3>
                    <p
                      className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed"
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
      {/* SECTION 5 - 3-step booking */}
      {/* H2: From Site Survey to First Clean in Under a Week */}
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
              Hassle-free booking
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              From Site Survey to First Clean in Under a Week
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              We have optimized our booking experience to be uncomplicated and straightforward,
              providing the responsive support Scottish business owners demand. Book a free site
              survey, get matched with a local vetted MHE-aware, IPAF-certified crew, and enjoy a
              pristine facility &mdash; no friction, no waiting, no surprises.
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
                Request Your Detailed Proposal Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 - Cross-links to specialist pages */}
      {/* H2: Specialist Services for Every Logistics Milestone */}
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
              Beyond the daily clean &middot; property milestones
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Specialist Services for Every Logistics Milestone
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              Our daily distribution centre cleaning is the heartbeat of your facility&rsquo;s
              operational safety, but we provide specialized support for major milestones &mdash;
              from new unit launches and post-refurbishment dust clear-outs to exterior facade
              restoration and antiviral hygiene resets. The same trusted, vetted crew can step up
              whenever your facility needs more than a standard visit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: KeyRound,
                title: "End of Tenancy Cleaning",
                href: "/services/move-in-out-cleaning",
                description:
                  "Occupying a new warehouse? Our End of Tenancy Cleaning protocol ensures properties are front-line ready and pass all initial safety inspections. We work to the letting agent&rsquo;s inventory and come back free of charge if anything is flagged on the inspection.",
                cta: "Explore end of tenancy",
              },
              {
                icon: Hammer,
                title: "After Builders Clean",
                href: "/services/post-construction-cleaning",
                description:
                  "If your facility has undergone extension or refitting, our After Builders Clean is designed to remove heavy layers of builders&rsquo; dust and construction debris. Fine dust acts like sandpaper under forklift traffic &mdash; we vacuum, damp-wipe, and protect every surface.",
                cta: "Explore after builders cleaning",
              },
              {
                icon: HeartPulse,
                title: "Antiviral Sanitisation",
                href: "/services/disinfection-services",
                description:
                  "Ask about our Antiviral Sanitisation and electrostatic fogging treatments to keep your workforce healthy and operational. EN 14476 virucidal chemistry is fogged and wiped across every high-touch surface &mdash; reducing seasonal colds, flu, and norovirus among your shift.",
                cta: "Explore antiviral sanitisation",
              },
              {
                icon: Sparkles,
                title: "Window Cleaning",
                href: "/services/window-cleaning",
                description:
                  "Enhance your professional image with our high-reach Window Cleaning or Pressure Washing for exterior cladding. Cladding panels, dispatch-door canopies, and signage all benefit from a periodic specialist reset &mdash; the detail that turns a &ldquo;cleaned&rdquo; DC into a &ldquo;speechlessly spotless&rdquo; one.",
                cta: "Explore window cleaning",
              },
            ].map((sol, i) => {
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
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[var(--brand)]" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-2 leading-tight group-hover:text-[var(--brand)] transition-colors">
                        {sol.title}
                      </h3>
                      <p
                        className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: sol.description }}
                      />
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <Link
              href="/services/distribution-centre-cleaning"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] bg-[var(--brand-light)]/40 hover:bg-[var(--brand-light)]/70 transition-colors px-5 py-3 rounded-full"
            >
              <Warehouse className="w-4 h-4" />
              Explore the full distribution centre &amp; logistics cleaning service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 - Final CTA */}
      {/* H2: Ready for a Distribution Centre Cleaning Crew Near You? */}
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
              Ready to book your local DC crew?
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
              Ready for a Distribution Centre Cleaning Crew Near You?
            </h2>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a free, no-obligation site survey with our management team and receive an itemised
              proposal within 2 business days. Vetted MHE-aware crews, the same dedicated team every
              visit, RAMS as standard, HSE and BRCGS compliance, IPAF-trained high-reach operatives,
              child-safe eco chemistry, signed cleaning logs, &pound;5m public liability standard
              (&pound;10m for BRCGS-grocery contracts), and a 100% satisfaction guarantee &mdash;
              from &pound;17 per hour for a small single-shift distribution centre through to a
              fully bespoke multi-site national distribution retainer. Coverage across 72+ Scottish
              towns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
                asChild
              >
                <Link href="/quote">
                  Request Your Detailed Proposal Today
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
                  <Phone className="w-4 h-4" />
                  Call {contactInfo.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8 - Near-me FAQ */}
      {/* H2: Frequently Asked Questions */}
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
              Distribution centre cleaning near me &middot; FAQ
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              Straight answers to the questions our local distribution centre cleaning clients ask
              most often. Can&rsquo;t find what you need? Call us on{" "}
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
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Detailed Proposal Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

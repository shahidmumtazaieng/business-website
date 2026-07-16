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
  Users,
  UserCheck,
  CalendarCheck,
  Hammer,
  Award,
  Phone,
  HeartPulse,
  ClipboardCheck,
  KeyRound,
  Building2,
  Recycle,
  Trash2,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  scotlandMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
  localCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  blockClean:
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
  { icon: Recycle, label: "Zero Waste to Landfill Strategies" },
  { icon: ShieldCheck, label: "SEPA-Licensed Carriers" },
  { icon: Clock, label: "Same Crew Every Collection" },
];

// ============================================================
// The 4 trust pillars
// ============================================================
const TRUST_PILLARS = [
  {
    icon: Building2,
    title: "Local Rubbish & Recycling Specialists, Not an Impersonal Agency",
    description:
      "Maundy Clean is a Scottish rubbish &amp; recycling &amp; sustainable waste management company built on the Maundy tradition of service and care. We don&rsquo;t operate as an impersonal national franchise &mdash; we&rsquo;re a local specialist with vetted, uniformed, PVG-checked waste crews living and working in your area. Whether you&rsquo;re searching for commercial waste collection at a Glasgow IFSD corporate tower, segregated recycling uplift at an Edinburgh Exchange District office, food waste to energy at an Aberdeen energy-corridor HQ, or end-of-tenancy clearance at a Dundee Waterfront professional services building, we assign a vetted, PAYE-employed waste crew that stays with you for the long run. Same crew, same standard, same locked-in rate for 12 months.",
  },
  {
    icon: Users,
    title: "The Same Trusted Team Every Collection",
    description:
      "Unlike gig-economy waste apps, we only employ our own staff. The same vetted, uniformed, PVG-checked waste crew that handles your first collection is the crew that returns every week. Continuity matters when the stakes are SEPA compliance, GDPR chain-of-custody, and audit-defensible diversion rates &mdash; waste segregation, hazardous waste handling, bin-store hygiene, contamination flagging &mdash; we don&rsquo;t send rotating crews of agency strangers walking your facility&rsquo;s waste routes. When your regular crew is on annual leave, we send a trained backup who has been briefed on your waste streams, your bin-store layout, your access protocols (gate codes, fobs, key safes), your carrier collection schedule, and your waste audit reporting requirements &mdash; and we tell you in advance.",
  },
  {
    icon: ShieldCheck,
    title: "PVG-Checked, Fully Insured & £5m Public Liability",
    description:
      "Every waste crew member is PVG-checked (essential for buildings with public access), trained in waste-and-recycling-specific protocols &mdash; waste segregation at source, hazardous waste handling (WEEE, batteries, tubes, toner, chemicals), GDPR chain-of-custody for confidential paper, bin-store hygiene, spill response, manual handling (1- and 2-person lifts for 240L/660L/1100L bins), confined-space entry (where applicable), and issue flagging (overflowing bins, contamination in recycling streams, broken containers, pest activity) &mdash; and is trained on waste-specific protocols before stepping foot on site: HSE compliance, RAMS as standard, Safe Systems of Work, COSHH-documented chemistry, EN 1276 bactericide for bin-store sanitisation, pressure-washer for bin exteriors, and audit-ready documentation for SEPA inspection and environmental health review. We use non-toxic, surface-safe chemistry by default. We hold &pound;5m public liability as standard &mdash; full employer&rsquo;s liability, professional indemnity, and can name your business on our policy as additional insured.",
  },
  {
    icon: Award,
    title: "Monthly Compliance Pack & 100% Satisfaction Guarantee",
    description:
      "Every rubbish &amp; recycling client gets a dedicated account manager who knows your facility, your facilities or office manager, your waste generation pattern, and your inspection regime &mdash; direct mobile number, 24-hour response, monthly compliance walk-throughs alongside your facilities or office manager. After every collection cycle you receive waste transfer notes (2-year retention), hazardous waste consignment notes (3-year retention), GDPR chain-of-custody certificates for confidential paper, recycling rate report with month-on-month and year-on-year comparison, carbon saving calculation per tonne diverted, and any issue-flagging (overflowing bins, contamination incidents, missed collections, carrier-side delays) &mdash; before they undermine a SEPA inspection, environmental health visit, or B Corp certification audit. We offer a free re-clean within 24 to 48 hours if you are not 100% satisfied, and our collection-completion rate in 2025 was 99.6%. From &pound;8 per collection for a single-stream low-volume site through to a fully bespoke retainer for a multi-site commercial estate.",
  },
];

// ============================================================
// The 3-step booking process
// ============================================================
const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey &amp; Waste Audit",
    description:
      "Contact us for a free, no-obligation site survey. We conduct a thorough facility assessment to determine the most effective waste-and-recycling schedule for your specific building. Our account manager walks your facility with your facilities or office manager, maps your waste generation points (desks, kitchens, washrooms, bin store, delivery bay), identifies your current stream composition (we weigh a 2-week sample if needed), reviews your existing carrier contracts and bin-store layout, and benchmarks your current diversion rate against PAS 402. We develop a tailored RAMS package (Risk Assessments and Method Statements) and Safe Systems of Work for your facility&rsquo;s unique operational needs. We send an itemised proposal within 2 business days: stream-by-stream collection schedule, container sizing, fixed monthly retainer, SEPA-licensed carrier partners named, RAMS, COSHH datasheets, and a draft 90-day diversion-rate target. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Local Crew Matching &amp; Onboarding",
    description:
      "We hand-pick a vetted waste crew with the necessary qualifications and &ldquo;Maundy&rdquo; mindset for your specific facility. Your allocated waste &amp; recycling crew is PVG-checked, trained in waste-and-recycling-specific protocols (waste segregation at source, hazardous waste handling, GDPR chain-of-custody for confidential paper, bin-store hygiene, spill response, manual handling, confined-space entry where applicable, issue flagging), and briefed on your waste streams, your bin-store layout, your access protocols (gate codes, fobs, key safes), your carrier collection schedule, and your waste audit reporting requirements &mdash; so waste handling happens efficiently, not as a disruption to your operations. The same crew returns every collection, building real knowledge of your facility&rsquo;s waste patterns and your bin-store regime. We arrive in liveried vehicles, in uniform with photo I.D. and PPE, with 240L/660L/1100L wheeled bins (where supplied), lockable consoles for confidential paper, food waste caddies, WEEE boxes, battery tubes, EN 1276 bactericide for bin-store sanitisation, pressure-washer for bin exteriors, and COSHH-compliant, surface-safe chemistry.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Verifiable Results, Every Collection",
    description:
      "Receive pre and post-collection reports to ensure every technical specification was met, backed by our MaundyClean satisfaction guarantee. You receive a monthly compliance pack: waste transfer notes (2-year retention), hazardous waste consignment notes (3-year retention), GDPR chain-of-custody certificates, recycling rate report with month-on-month and year-on-year comparison, carbon saving calculation per tonne diverted, and any issue-flagging. Your dedicated account manager visits monthly for a compliance walk-through with your facilities or office manager, and proactively raises concerns before they undermine a SEPA inspection, environmental health visit, or B Corp certification audit. From &pound;8 per collection for a single-stream low-volume site through to a fully bespoke retainer for a multi-site commercial estate. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured.",
  },
];

// ============================================================
// FAQ for the near-me page
// ============================================================
const NEAR_ME_FAQS = [
  {
    q: "How do I know if you cover my area?",
    a: "We cover 72+ towns and cities across Scotland &mdash; from Glasgow and Edinburgh in the Central Belt to Inverness in the Highlands and everywhere in between. Use the location grid above to find your town. If you don&rsquo;t see your postcode listed, call us &mdash; we add new rubbish &amp; recycling coverage areas every month and may already have a vetted uniformed PVG-checked waste crew near you. Our local waste crews operate across Glasgow&rsquo;s International Financial Services District, Merchant City and West End corporate towers (facilities managers, office managers and retail operators), Edinburgh&rsquo;s Exchange District, New Town and Quartermile business quarters (corporate estates and property management companies), Aberdeen&rsquo;s energy-corridor West End and Tullos industrial offices (energy operators and service companies), Dundee&rsquo;s Waterfront and City Centre professional services buildings (facilities teams and office managers), and Scottish commercial districts across the Central Belt.",
  },
  {
    q: "How quickly can a local waste crew start?",
    a: "From free site survey and itemised quote to first collection in 5&ndash;7 working days for most postcodes in the Central Belt. For more remote areas (Highlands, Islands, Borders), allow 7&ndash;10 working days for crew routing, equipment mobilisation, container delivery, and travel planning. Same-week starts are occasionally possible in Glasgow, Edinburgh, Stirling, and Dundee &mdash; call us to check availability. New commercial estate handovers, post-refurbishment reopens, head-lease landlord approval renewals, and unplanned seasonal occupancy changes typically schedule 2&ndash;3 weeks out to allow for full site survey, proposal, mobilisation, crew onboarding, and container delivery across every facility in your estate.",
  },
  {
    q: "Will the waste crew travel to my facility, or do I need to bring anything to you?",
    a: "All rubbish &amp; recycling services are performed on-site at your premises &mdash; we never transport anything off-site except the waste we collect (which goes to a SEPA-licensed transfer station or reprocessor). Our crews arrive in liveried vans with 240L, 660L and 1100L wheeled bins (where supplied), lockable consoles for confidential paper, food waste caddies (5L, 25L, 240L), WEEE boxes, battery collection tubes, long-line boxes for fluorescent tubes, sealed bags for toner cartridges, EN 1276 bactericide for bin-store sanitisation, pressure-washer for bin exteriors, COSHH-documented chemistry, PPE, and non-toxic, surface-safe chemistry. Containers are typically leased as part of the monthly retainer (no upfront capital outlay) &mdash; or capital-purchased if you prefer to own them outright.",
  },
  {
    q: "Do you have waste crews experienced with hazardous waste, WEEE, batteries, fluorescent tubes, and chemicals?",
    a: "Yes. Our crews are trained specifically on waste-and-recycling protocols &mdash; HSE compliance, RAMS as standard, Safe Systems of Work, waste segregation at source (paper, card, glass, metals, plastics, food), hazardous waste handling (WEEE, batteries, fluorescent tubes, toner cartridges, chemicals under SEPA Hazardous Waste (Scotland) Regulations), GDPR chain-of-custody for confidential paper (lockable consoles, certificate of destruction per uplift), bin-store hygiene (weekly wash-down with EN 1276 bactericide, quarterly internal pressure-wash), spill response (broken glass, leaking food waste, split bin bags), manual handling (1- and 2-person lifts for 240L/660L/1100L bins), confined-space entry (where applicable, with atmospheric monitoring and rescue plan), issue flagging (overflowing bins, contamination in recycling streams, broken containers, pest activity), and audit-ready waste transfer notes (2-year retention) and hazardous waste consignment notes (3-year retention). We provide audit-ready documentation, COSHH datasheets, RAMS, training records, vetting records (PVG), and &pound;5m public liability certificates for your compliance file. We currently service commercial estates in Glasgow&rsquo;s IFSD and Merchant City, office towers in Edinburgh&rsquo;s Exchange District, energy operators in Aberdeen&rsquo;s West End, and professional services firms in Dundee&rsquo;s Waterfront.",
  },
  {
    q: "Can you handle secure access, gate codes, and out-of-hours waste collection at my facility?",
    a: "Absolutely. We&rsquo;re trained on all major access-control systems and follow strict key-handling protocols: keys stored in a coded safe between shifts, gate codes encrypted and only released to your assigned waste crew, never labelled with your address. We hold &pound;5m public liability as standard &mdash; full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, suitable for corporate offices, retail environments, hospitality venues, schools, public-sector buildings, and mixed-use buildings. The most common windows are early-morning collections (6&ndash;8am) for facilities that need waste gone before staff arrive, mid-morning collections (9am&ndash;12pm) for facilities with flexible access, and afternoon collections (1&ndash;5pm) for retail and hospitality with later opening hours. We can also split: pre-opening bin-store check (overflowing bins flagged before staff arrive), scheduled collection (your allocated time slot), and post-collection bin-store sanitisation (wash-down with EN 1276 bactericide).",
  },
  {
    q: "What&rsquo;s the difference between general waste, DMR, mixed recycling, and co-mingled recycling near me?",
    a: "General waste (also called residual waste or black-bag waste) is the non-recyclable fraction that goes to energy-from-waste or landfill &mdash; it carries the highest landfill tax (&pound;103.40/tonne in 2024/25) and the highest carbon cost. DMR (Dry Mixed Recycling) is paper, card, plastic bottles, and cans collected together in one bin and segregated later at a Materials Recovery Facility &mdash; convenient for low-volume sites but 15&ndash;25% is rejected to landfill due to contamination. Mixed recycling is sometimes used interchangeably with DMR, sometimes includes glass &mdash; check your carrier&rsquo;s definition. Co-mingled recycling is similar to DMR but typically includes more streams (glass, cartons) and is sorted at a MRF &mdash; higher rejection rate than source-segregated. Source-segregated recycling (paper in one bin, glass in another, food in a caddy) is the gold standard for highest diversion rate and lowest contamination &mdash; we recommend this wherever space allows. Your account manager will advise on the best stream structure for your specific building type, footprint, and waste volume.",
  },
];

// ============================================================
// Main page component
// ============================================================

export function RubbishRecyclingNearMeHero() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 - Hero */}
      {/* H1: Rubbish & Recycling Services Near Me in Scotland */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.heroWide}
            alt="Maundy Clean vetted, PVG-checked waste & recycling operatives collecting segregated commercial waste streams — paper, glass, food, DMR and general — from a Scottish business premises"
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
              72+ Scottish towns &middot; SEPA-licensed carriers &middot; Same crew every collection
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
            >
              Rubbish &amp; Recycling Services Near Me in Scotland
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
            >
              Searching for &ldquo;rubbish and recycling services near me&rdquo;
              or &ldquo;commercial waste collection near me&rdquo; in Scotland?
              Maundy Clean covers facilities managers, office managers, retail
              operators, hospitality groups, and commercial estates across the
              Central Belt, Highlands, Borders, and Islands &mdash; from
              Glasgow&rsquo;s IFSD and Edinburgh&rsquo;s Exchange District to
              Aberdeen&rsquo;s energy corridor and Dundee&rsquo;s Waterfront.
              Same SEPA-licensed carriers, same dedicated crew every collection,
              commercial recycling, specialist rubbish clearance, food waste to
              energy, bin store sanitisation, waste audit reporting, PAS
              402-aligned recycling rates, zero waste to landfill strategies,
              fixed monthly retainer, audit-ready compliance file every month.
              From &pound;8 per collection for a single-stream low-volume site
              through to a fully bespoke multi-site commercial estate retainer.
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
                  Request Your Bespoke Waste Audit Today
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
                  Find Your Local Waste Crew
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
      {/* H2: Local Rubbish & Recycling Services You Can Trust */}
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
              Local rubbish &amp; recycling services &amp; sustainable waste management &middot; Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              Local Rubbish &amp; Recycling Services You Can Trust
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              Maundy Clean is a Scottish rubbish &amp; recycling &amp;
              sustainable waste management company built on the Maundy tradition
              of service and care. We don&rsquo;t operate as an impersonal
              national franchise &mdash; we&rsquo;re a local specialist with
              vetted, uniformed, PVG-checked waste crews living and working in
              your area. Whether you&rsquo;re searching for commercial waste
              collection at a Glasgow IFSD corporate tower, segregated recycling
              uplift at an Edinburgh Exchange District office, food waste to
              energy at an Aberdeen energy-corridor HQ, or end-of-tenancy
              clearance at a Dundee Waterfront professional services building,
              we assign a vetted, PAYE-employed waste crew that stays with you
              for the long run. Same crew, same standard, same locked-in rate
              for 12 months.
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
              { label: "Waste diverted from landfill", value: "92%" },
              { label: "SEPA-licensed carriers", value: "100%" },
              { label: "From per collection", value: "&pound;8" },
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
      {/* H2: Find Your Local Waste Crew */}
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
                Find Your Local Waste Crew
              </h2>
              <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
                Our network of vetted, PVG-checked, uniformed waste crews spans
                the entire country. From the corporate towers and professional
                services firms of Glasgow and Edinburgh to the energy operators
                of Aberdeen and the Waterfront professional services of Dundee,
                and the commercial estates of the Central Belt, we have a local
                waste crew ready to care for your facility. Browse by region
                below, or call us to confirm coverage for your specific postcode.
              </p>

              <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
                <img
                  src={IMG.scotlandMap}
                  alt="Map of Scotland showing Maundy Clean rubbish &amp; recycling services &amp; commercial waste collection coverage areas"
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
                    Same SEPA-licensed carriers, same 100% satisfaction guarantee
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
                    Request Your Bespoke Waste Audit Today
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
                          href={`/services/rubbish-recycling-near-me#${loc.slug}`}
                          className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40 scroll-mt-24"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                          <span>
                            <span className="font-medium">{loc.city}</span>
                            <span className="text-[var(--muted-foreground)]"> waste crew</span>
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
      {/* SECTION 4 - Why Maundy Clean for your local rubbish & recycling service */}
      {/* H2: Why Scottish Facilities Managers Choose Maundy Clean */}
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
              Why Scottish Facilities Managers Choose Maundy Clean
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              We&rsquo;re a local specialist, not an impersonal national franchise.
              Our vetted, uniformed, PVG-checked waste crews live in your area,
              know your city&rsquo;s commercial property stock, and stay with you
              for the long run. Here&rsquo;s what sets us apart from the
              gig-economy apps and high-turnover agencies operating in Scotland.
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
      {/* H2: From Free Waste Audit to First Collection in Under a Week */}
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
              From Free Waste Audit to First Collection in Under a Week
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              We have optimised our booking experience to be uncomplicated and
              straightforward, providing the responsive management support
              Scottish business owners demand. Get a free waste audit and
              itemised proposal, get matched with a local vetted PVG-checked
              waste crew, and enjoy a cleaner, greener, more compliant facility
              every month &mdash; no friction, no waiting, no surprises.
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
                  <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight" dangerouslySetInnerHTML={{ __html: step.title }} />
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
                Request Your Bespoke Waste Audit Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 - Cross-links to specialist pages */}
      {/* H2: Specialist Services for Every Property Cycle */}
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
              Beyond the bin collection &middot; property milestones
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Specialist Services for Every Property Cycle
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              Our rubbish &amp; recycling services are the heartbeat of your
              property&rsquo;s environmental health, but we provide specialised
              support for every property milestone &mdash; from end-of-tenancy
              clearances paired with end-of-tenancy cleaning, through antiviral
              sanitisation of bin stores and communal areas, event-venue
              post-event rubbish removal, and external car-park pressure washing.
              The same trusted, vetted crew can step up whenever your facility
              needs more than a standard waste collection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: KeyRound,
                title: "End of Tenancy Cleaning",
                href: "/services/move-in-out-cleaning",
                description:
                  "Moving offices or vacating a unit? Our End of Tenancy Cleaning pairs with end-of-tenancy waste clearance to ensure units are front-line ready for handover. Every surface detailed top-to-bottom, deposit-back guarantees met, and the same trusted vetted crew your waste team knows &mdash; so your unit handover starts from a &ldquo;speechlessly spotless&rdquo; baseline.",
                cta: "Explore end of tenancy cleaning",
              },
              {
                icon: HeartPulse,
                title: "Antiviral Sanitisation",
                href: "/services/disinfection-services",
                description:
                  "After clearing waste, book an Antiviral Sanitisation session to ensure your bin stores and communal areas are biologically safe. EN 14476 virucidal ULV fogging of every surface, every bin-store corner, every communal touchpoint &mdash; the periodic deep biological reset that lifts the cumulative contamination load a standard clean can&rsquo;t reach.",
                cta: "Explore antiviral sanitisation",
              },
              {
                icon: Sparkles,
                title: "Event Venue Cleaning",
                href: "/services/event-venue-cleaning",
                description:
                  "For high-traffic venues, our Event Venue Cleaning includes meticulous post-event rubbish removal and site restoration. From conference centres and stadia to exhibition halls and concert venues &mdash; the same trusted crew that handles your regular waste collection steps up for event-night clearance and next-day restoration.",
                cta: "Explore event venue cleaning",
              },
              {
                icon: Hammer,
                title: "Car Park Cleaning",
                href: "/services/car-park-cleaning",
                description:
                  "Pair your rubbish collection with our Car Park Cleaning to remove oil stains and traffic film from your forecourts. SEPA-compliant oily-water capture, scrubber discharge via licensed waste contractors, and waste transfer notes for your records &mdash; the full external-care package under one contract.",
                cta: "Explore car park cleaning",
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
              href="/services/rubbish-recycling"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] bg-[var(--brand-light)]/40 hover:bg-[var(--brand-light)]/70 transition-colors px-5 py-3 rounded-full"
            >
              <Sparkles className="w-4 h-4" />
              Explore the full rubbish &amp; recycling services page
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 - Final CTA */}
      {/* H2: Ready for a Waste Crew Near You? */}
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
              Ready to book your local waste crew?
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
              Ready for a Waste Crew Near You?
            </h2>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a free, no-obligation site survey with our management team and
              receive an itemised proposal within 2 business days. Vetted
              PVG-checked uniformed waste crews, the same dedicated crew every
              collection, commercial recycling, specialist rubbish clearance,
              food waste to energy, bin store sanitisation, waste audit
              reporting, PAS 402-aligned recycling rates, zero waste to landfill
              strategies, fixed monthly retainer, multi-site one-invoice
              convenience, child-safe eco chemistry, monthly compliance pack,
              &pound;5m public liability as standard, audit-ready documentation,
              and a 100% satisfaction guarantee &mdash; from &pound;8 per
              collection for a single-stream low-volume site through to a fully
              bespoke multi-site commercial estate retainer. Coverage across 72+
              Scottish towns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
                asChild
              >
                <Link href="/quote">
                  Request Your Bespoke Waste Audit Today
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
              Rubbish &amp; recycling services near me &middot; FAQ
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              Straight answers to the questions our local rubbish &amp; recycling
              clients ask most often. Can&rsquo;t find what you need? Call us on{" "}
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
                Request Your Bespoke Waste Audit Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

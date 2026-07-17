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
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
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
  { icon: ShieldCheck, label: "PVG-Checked & Vetted Crews" },
  { icon: Clock, label: "Reactive Mobile Team \u00b7 24/7" },
];

// ============================================================
// The 4 trust pillars
// ============================================================
const TRUST_PILLARS = [
  {
    icon: Building2,
    title: "Local Property Management Specialists, Not an Impersonal Agency",
    description:
      "Maundy Clean is a Scottish property management &amp; block maintenance cleaning company built on the Maundy tradition of service and care. We don&rsquo;t operate as an impersonal national franchise &mdash; we&rsquo;re a local specialist with vetted, uniformed, PVG-checked crews living and working in your area. Whether you&rsquo;re searching for early-morning close resets at a Glasgow West End tenement factor, evening bin store hygiene at an Edinburgh New Town property management company, weekend turnover support at an Aberdeen granite four-in-a-block housing association, or end-of-tenancy resets at a Dundee student accommodation operator, we assign a vetted, PAYE-employed crew that stays with you for the long run. Same team, same standard, same locked-in rate for 12 months.",
  },
  {
    icon: Users,
    title: "The Same Trusted Crew Every Visit",
    description:
      "Unlike gig-economy cleaning apps, we only employ our own staff. The same vetted, uniformed, PVG-checked crew that manages your first clean is the crew that returns for every scheduled session. Continuity matters when the stakes are factor inspection compliance, tenant retention, and dispute-proof evidence &mdash; communal area cleaning, end of tenancy resets, forecourt power-washing, tenement close cleaning, stairwell sanitisation, bin store hygiene, reactive emergency response &mdash; we don&rsquo;t send rotating crews of agency strangers walking an active residential block. When your regular crew lead is on annual leave, we send a trained backup who has been briefed on your close layout, your access protocols, your bin collection schedule, your resident communications protocol, and your premium finishes &mdash; and we tell you in advance.",
  },
  {
    icon: ShieldCheck,
    title: "PVG-Checked, Fully Insured & £5m Public Liability",
    description:
      "Every technician is PVG-checked (essential for buildings where residents may be present), trained in property-management-specific protocols &mdash; communal area cleaning, end of tenancy resets, forecourt power-washing, tenement close cleaning, stairwell sanitisation, bin store hygiene, reactive emergency response &mdash; and is trained on property-management-specific protocols before stepping foot on site: HSE compliance, RAMS as standard, Safe Systems of Work, COSHH-documented chemistry, HEPA-filtered vacuums for close dust, pH-neutral stone-safe cleaner for tenement stairs, industrial scrubber-driers for polished concrete forecourt restoration, hot-water extraction for communal lounge carpets, professional pressure-washers for forecourts and bin store surrounds, non-toxic degreaser for bin stores, and audit-ready documentation for factor inspection and environmental health review. We use non-toxic, child-safe, surface-safe chemistry by default. We hold &pound;5m public liability as standard &mdash; full employer&rsquo;s liability, professional indemnity, and can name your business on our policy as additional insured.",
  },
  {
    icon: Award,
    title: "Signed Cleaning Logs & 100% Satisfaction Guarantee",
    description:
      "Every property management client gets a dedicated account manager who knows your portfolio, your factor or property manager, your tenancy calendar, and your inspection regime &mdash; direct mobile number, 24-hour response, monthly compliance walk-throughs alongside your factor or property manager. After every visit you receive a signed cleaning log (operative signature, factor or property-manager counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a fly-tipping incident, a damaged fixture, a failed close light, a leaking pipe, or a bin store pest sighting &mdash; before they undermine a resident complaint, a factor inspection, or a tribunal hearing. We offer a free re-clean within 24 to 48 hours if you are not 100% satisfied, and our visit-completion rate in 2025 was 99.6%. From &pound;15 per hour for a single block through to a fully bespoke retainer for a multi-site portfolio.",
  },
];

// ============================================================
// The 3-step booking process
// ============================================================
const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey &amp; Bespoke Plan",
    description:
      "Contact us for a free, no-obligation site survey. We conduct a thorough portfolio assessment to determine the most effective cleaning method for your specific blocks. We walk every block with your factor or property manager, identify your building types (tenement close, four-in-a-block, sheltered housing, mixed-use block), capacity (number of closes, stairwells, communal lounges, bin stores, shared gardens), tenancy profile (long-let, short-let, student, sheltered), turnaround windows (between-tenancy resets, factor inspection prep, end-of-day touch-ups), and any specific cleaning challenges (bin juice in bin stores, algae on forecourts, graffiti on stairwells, listed-building constraints on stone stairs). We develop a tailored RAMS package (Risk Assessments and Method Statements) and Safe Systems of Work for your portfolio&rsquo;s unique operational needs. We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, RAMS, COSHH datasheets, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Local Crew Matching &amp; Onboarding",
    description:
      "We hand-pick a team of trained technicians with experience in block management and unit &ldquo;showcasing&rdquo;. Your allocated crew lead is PVG-checked, trained in property-management-specific protocols (communal area cleaning, end of tenancy resets, forecourt power-washing, tenement close cleaning, stairwell sanitisation, bin store hygiene, reactive emergency response), and briefed on your close layout, your access protocols, your bin collection schedule, your resident communications protocol, and your premium finishes &mdash; so cleaning happens around your residents&rsquo; lives, not through them. The same crew returns for every scheduled session, building real knowledge of your high-traffic zones, your tenancy calendar, and your quiet periods. We arrive in liveried vehicles, in uniform with photo I.D. and PPE, with HEPA-filtered vacuums, pH-neutral stone-safe cleaner for tenement stairs, industrial scrubber-driers for polished concrete forecourt restoration, hot-water extraction for communal lounge carpets, professional pressure-washers for forecourts and bin store surrounds, non-toxic degreaser for bin stores, and COSHH-compliant, child-safe, surface-safe chemistry.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Verifiable Results, Every Visit",
    description:
      "Receive pre and post-clean reports to ensure every technical specification was met, backed by our MaundyClean satisfaction guarantee. You receive a signed cleaning log after every visit, arrival and departure times, tasks completed, and any issues flagged. Your dedicated account manager visits monthly for a compliance walk-through with your factor or property manager, and proactively raises concerns before they undermine a resident complaint, a factor inspection, or a tribunal hearing. From &pound;15 per hour for a single block through to a fully bespoke retainer for a multi-site portfolio. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured.",
  },
];

// ============================================================
// FAQ for the near-me page
// ============================================================
const NEAR_ME_FAQS = [
  {
    q: "How do I know if you cover my area?",
    a: "We cover 72+ towns and cities across Scotland &mdash; from Glasgow and Edinburgh in the Central Belt to Inverness in the Highlands and everywhere in between. Use the location grid above to find your town. If you don&rsquo;t see your postcode listed, call us &mdash; we add new property management coverage areas every month and may already have a vetted uniformed PVG-checked crew near you. Our local property management cleaning crews operate across Glasgow&rsquo;s West End, Southside and Merchant City (factors, housing associations and private landlords), Edinburgh&rsquo;s New Town, Marchmont and Morningside (factors and property management companies), Aberdeen&rsquo;s West End and Rosemount (factors and private landlords), Dundee&rsquo;s West End and City Centre (factors and student accommodation operators), and Scottish property management districts across the Central Belt.",
  },
  {
    q: "How quickly can a local property management cleaning crew start?",
    a: "From free site survey and itemised quote to first clean in 5&ndash;7 working days for most postcodes in the Central Belt. For more remote areas (Highlands, Islands, Borders), allow 7&ndash;10 working days for crew routing, equipment mobilisation, and travel planning. Same-week starts are occasionally possible in Glasgow, Edinburgh, Stirling, and Dundee &mdash; call us to check availability. New factor handovers, between-tenancy resets, post-refurbishment reopens, and tenant abandoned-property handovers typically schedule 2&ndash;3 weeks out to allow for full site survey, proposal, mobilisation, crew onboarding, and equipment delivery across every close in your portfolio.",
  },
  {
    q: "Will the crew travel to my block, or do I need to bring anything to you?",
    a: "All property management &amp; block maintenance cleaning is performed on-site at your premises &mdash; we never transport anything off-site. Our crews arrive in liveried vans with HEPA-filtered vacuums for close dust, industrial scrubber-driers (Karcher, Truvox) for polished concrete and tiled communal floor restoration, hot-water extraction for communal lounge carpets and unit carpets at tenancy change, professional pressure-washers for forecourts, walkways, and bin store surrounds, pH-neutral stone-safe cleaner for tenement stairs (no acid, no bleach), fragrance-free sanitiser for high-touch handrails and entry phone systems, non-toxic degreaser for bin stores, HSE-compliant chemicals with COSHH datasheets, PPE, and non-toxic, child-safe, surface-safe chemistry. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Do you have property management crews experienced with tenement close cleaning, end of tenancy resets, and reactive emergency response?",
    a: "Yes. Our crews are trained specifically on property management &amp; block maintenance protocols &mdash; HSE compliance, RAMS as standard, Safe Systems of Work, communal area cleaning (close, stairwell, landing, bin store, communal lounge), end of tenancy resets (oven, hob, bathroom, kitchen, carpets, hard floors), forecourt power-washing and bin store degreasing, tenement close cleaning (stone-safe pH-neutral cleaner, no acid, no bleach), stairwell sanitisation of high-touch handrails and entry phone systems, bin store hygiene with non-toxic degreaser, reactive emergency response (burst pipe, flood, abandoned-property handover, VIP viewing, deliberate-damage incident), and audit-ready signed cleaning logs. We provide audit-ready signed cleaning logs, COSHH datasheets, RAMS, training records, vetting records (PVG), and &pound;5m public liability certificates for your compliance file. We currently service factor portfolios in Glasgow&rsquo;s West End and Southside, property management companies in Edinburgh&rsquo;s New Town, housing associations across the Central Belt, private landlords in Aberdeen&rsquo;s West End, and student accommodation operators in Dundee&rsquo;s West End.",
  },
  {
    q: "Can you handle secure access, alarm systems, and out-of-hours cleaning at my block?",
    a: "Absolutely. We&rsquo;re trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys stored in a coded safe between visits, alarm codes encrypted and only released to your assigned crew lead, never labelled with your address. We hold &pound;5m public liability as standard &mdash; full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, suitable for tenement closes, four-in-a-blocks, sheltered housing, mixed-use blocks, and student accommodation. The most common windows are early-morning close resets (typically 6&ndash;8am before residents leave for work) for closes, stairwells, landings, and bin stores; between-tenancy touch-ups for high-traffic close areas during the day; and end-of-day deep cleans (typically 7&ndash;11pm after the last resident is home) for bin stores, communal lounges, amenity WCs, and back-of-house. We can also split: light touch during the day (between-tenancy touch-ups on high-traffic welfare areas), full deep clean after hours.",
  },
  {
    q: "What&rsquo;s the difference between early-morning close resets, between-tenancy touch-ups, and end-of-day deep cleans near me?",
    a: "Early-morning close resets (typically 6&ndash;8am before residents leave for work) are the right choice for closes, stairwells, landings, and bin stores where the cumulative load from the previous day is too high for less frequent visits &mdash; the crew becomes part of your residents&rsquo; morning routine. Between-tenancy touch-ups suit high-traffic close areas where the daily contamination load is manageable but steady &mdash; close glazing refreshed, entry phone wiped, handrails sanitised, close matting shaken, bin store lids closed. End-of-day deep cleans (typically 7&ndash;11pm after the last resident is home) cover bin stores, communal lounges, amenity WCs, and back-of-house &mdash; the full reset that protects your finishes, your air quality, and your compliance file. We can also split: light touch during the day (between-tenancy touch-ups on high-traffic welfare areas), full deep clean after hours. We&rsquo;ve handled turnaround windows as tight as 2 hours between tenancy handovers and surge mobilisations for new factor handovers, post-refurbishment reopens, and tenant abandoned-property clearances. Your account manager will advise on the best schedule for your specific building types, capacity, and tenancy calendar.",
  },
];

// ============================================================
// Main page component
// ============================================================

export function PropertyManagementCleaningNearMeHero() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 - Hero */}
      {/* H1: Property Management & Landlord Cleaning Near Me in Scotland */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.heroWide}
            alt="Maundy Clean PVG-checked, vetted property management cleaning crew maintaining communal stairwells and bin stores in a Scottish residential block overnight"
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
              72+ Scottish towns &middot; PVG-checked crews &middot; Same team every visit
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
            >
              Property Management &amp; Landlord Cleaning Near Me in Scotland
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
            >
              Searching for &ldquo;property management cleaning near me&rdquo; or
              &ldquo;factor cleaning near me&rdquo; in Scotland? Maundy Clean covers
              factors, private landlords, housing associations, and property
              management companies across the Central Belt, Highlands, Borders, and
              Islands &mdash; from Glasgow&rsquo;s West End tenements and
              Edinburgh&rsquo;s New Town crescents to Aberdeen&rsquo;s granite
              four-in-a-blocks and Dundee&rsquo;s Victorian terraces. Same
              PVG-checked, uniformed crews, communal area cleaning, end of tenancy
              resets, forecourt power-washing, tenement close cleaning, reactive
              mobile team, 24/7 emergency response, child-safe eco chemistry. From
              &pound;15 per hour for a single block through to a fully bespoke
              multi-site portfolio retainer.
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
                <Link href="#locations">
                  <MapPin className="w-4 h-4" />
                  Find Your Local Property Crew
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
      {/* H2: Local Property Management Cleaning You Can Trust */}
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
              Local property management &amp; block maintenance cleaning &middot; Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              Local Property Management Cleaning You Can Trust
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              Maundy Clean is a Scottish property management &amp; block maintenance
              cleaning company built on the Maundy tradition of service and care.
              We don&rsquo;t operate as an impersonal national franchise &mdash;
              we&rsquo;re a local specialist with vetted, uniformed, PVG-checked
              crews living and working in your area. Whether you&rsquo;re searching
              for early-morning close resets at a Glasgow West End tenement factor,
              evening bin store hygiene at an Edinburgh New Town property management
              company, weekend turnover support at an Aberdeen granite
              four-in-a-block housing association, or end-of-tenancy resets at a
              Dundee student accommodation operator, we assign a vetted,
              PAYE-employed crew that stays with you for the long run. Same crew,
              same standard, same locked-in rate for 12 months.
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
              { label: "PVG-checked operatives", value: "100%" },
              { label: "From per hour", value: "&pound;15" },
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
      {/* H2: Find Your Local Property Management & Landlord Cleaning Crew */}
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
                Find Your Local Property Management &amp; Landlord Cleaning Crew
              </h2>
              <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
                Our network of vetted, PVG-checked, uniformed property management
                &amp; block maintenance cleaning crews spans the entire country.
                From the factor portfolios and housing associations of Glasgow and
                Edinburgh to the private landlord blocks and student accommodation
                operators of Aberdeen and Dundee, and the property management
                companies of the Central Belt, we have a local team ready to care
                for your portfolio. Browse by region below, or call us to confirm
                coverage for your specific postcode.
              </p>

              <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
                <img
                  src={IMG.scotlandMap}
                  alt="Map of Scotland showing Maundy Clean property management &amp; block maintenance cleaning coverage areas"
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

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                  asChild
                >
                  <Link href="/quote">
                    <ClipboardCheck className="w-4 h-4" />
                    Request Your Bespoke Portfolio Quote
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
                          href={`/services/property-management-cleaning-near-me#${loc.slug}`}
                          className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40 scroll-mt-24"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                          <span>
                            <span className="font-medium">{loc.city}</span>
                            <span className="text-[var(--muted-foreground)]"> factor crew</span>
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
      {/* SECTION 4 - Why Maundy Clean for your local property management cleaning */}
      {/* H2: Why Scottish Property Managers Choose Maundy Clean */}
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
              Why Scottish Property Managers Choose Maundy Clean
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              We&rsquo;re a local specialist, not an impersonal national franchise.
              Our vetted, uniformed, PVG-checked property management &amp; block
              maintenance crews live in your area, know your city&rsquo;s housing
              stock, and stay with you for the long run. Here&rsquo;s what sets us
              apart from the gig-economy apps and high-turnover agencies operating
              in Scotland.
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
      {/* H2: From Free Site Survey to First Clean in Under a Week */}
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
              From Free Site Survey to First Clean in Under a Week
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              We have optimised our booking experience to be uncomplicated and
              straightforward, providing the responsive management support Scottish
              business owners demand. Get a free site survey and itemised proposal,
              get matched with a local vetted PVG-checked crew, and enjoy a pristine
              portfolio &mdash; no friction, no waiting, no surprises.
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
                Request Your Bespoke Portfolio Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 - Cross-links to specialist pages */}
      {/* H2: Specialist Services for Every Property Need */}
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
              Specialist Services for Every Property Need
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              Our daily property management &amp; block maintenance cleaning is the
              heartbeat of your building&rsquo;s health, but we provide specialised
              support for major milestones &mdash; from property transitions that
              need rapid-response end-of-tenancy resets, through post-renovation
              dust clear-outs and seasonal deep cleans, to specialist fabric care
              for communal seating and carpets. The same trusted, vetted crew can
              step up whenever your portfolio needs more than a standard visit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: KeyRound,
                title: "End of Tenancy Cleaning",
                href: "/services/move-in-out-cleaning",
                description:
                  "Moving a tenant out? Our End of Tenancy Cleaning ensures properties are front-line ready and your deposit-back guarantees are met. Ovens degreased, hobs descaled, bathrooms sanitised, carpets shampooed, hard floors restored, and a signed cleaning log emailed to your factor the same day.",
                cta: "Explore end of tenancy cleaning",
              },
              {
                icon: Hammer,
                title: "After Builders Clean",
                href: "/services/post-construction-cleaning",
                description:
                  "If a unit has undergone improvements, our After Builders Clean is designed to remove heavy construction dust and debris from stairwells, communal floors, and freshly-fitted kitchens before the unit is handed back to a tenant.",
                cta: "Explore after builders cleaning",
              },
              {
                icon: Sparkles,
                title: "Deep House Cleaning",
                href: "/services/deep-house-cleaning",
                description:
                  "Schedule a Deep House Cleaning for communal lobbies and amenity rooms twice a year to maintain building value. High-level dusting, deep carpet extraction, hard floor machine-scrub and buff, and a full sanitiser fog of lift cars and amenity WCs.",
                cta: "Explore deep house cleaning",
              },
              {
                icon: HeartPulse,
                title: "Upholstery Cleaning",
                href: "/services/upholstery-cleaning",
                description:
                  "Rejuvenate communal seating and carpets with our professional Upholstery Cleaning to remove odors and stains. Hot-water extraction for cloth lounge seating, leather conditioning for executive amenity blocks, and odour neutralisation for lingering cooking and tobacco.",
                cta: "Explore upholstery cleaning",
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
              href="/services/property-management-cleaning"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] bg-[var(--brand-light)]/40 hover:bg-[var(--brand-light)]/70 transition-colors px-5 py-3 rounded-full"
            >
              <Sparkles className="w-4 h-4" />
              Explore the full property management &amp; landlord cleaning service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 - Final CTA */}
      {/* H2: Ready for a Property Management Cleaning Crew Near You? */}
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
              Ready to book your local property crew?
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
              Ready for a Property Management Cleaning Crew Near You?
            </h2>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a free, no-obligation portfolio site survey with our management
              team and receive an itemised proposal within 2 business days. Vetted
              PVG-checked crews, the same dedicated team every visit, communal area
              cleaning, end of tenancy resets, forecourt power-washing, tenement
              close cleaning, reactive mobile team for last-minute VIP visits and
              emergency scenarios, 24/7 emergency response, flexible out-of-hours
              scheduling around your residents&rsquo; lives, child-safe eco
              chemistry, signed cleaning logs, &pound;5m public liability as
              standard, and a 100% satisfaction guarantee &mdash; from &pound;15 per
              hour for a single block through to a fully bespoke multi-site
              portfolio retainer. Coverage across 72+ Scottish towns.
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
              Property management &amp; landlord cleaning near me &middot; FAQ
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              Straight answers to the questions our local property management &amp;
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
                Request Your Bespoke Portfolio Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

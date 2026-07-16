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
  Droplets,
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
  { icon: Droplets, label: "Same Trusted Washroom Crew Every Visit" },
  { icon: ShieldCheck, label: "PVG-Checked & Vetted Crews" },
  { icon: Sparkles, label: "Superheated Steam Sanitation" },
];

// ============================================================
// The 4 trust pillars
// ============================================================
const TRUST_PILLARS = [
  {
    icon: Building2,
    title: "Local Restroom Sanitation Specialists, Not an Impersonal Agency",
    description:
      "Maundy Clean is a Scottish restroom sanitation &amp; washroom cleaning company built on the Maundy tradition of service and care. We don&rsquo;t operate as an impersonal national franchise &mdash; we&rsquo;re a local specialist with vetted, uniformed, PVG-checked washroom crews living and working in your area. Whether you&rsquo;re searching for a washroom deep clean at a Glasgow IFSD commercial tower, a restroom sanitation service at an Edinburgh Exchange District office, a chrome buffing reset at an Aberdeen energy-corridor HQ, or a public restroom cleaning at a Dundee Waterfront professional services building, we assign a vetted, PAYE-employed washroom crew that stays with you for the long run. Same crew, same standard, same locked-in rate for 12 months.",
  },
  {
    icon: Users,
    title: "The Same Trusted Washroom Crew Every Visit",
    description:
      "Unlike gig-economy cleaning apps, we only employ our own staff. The same vetted, uniformed, PVG-checked washroom crew that handles your first visit is the crew that returns every time. Continuity matters when the stakes are customer impressions, staff retention, and dispute-proof evidence &mdash; toilet &amp; urinal restoration, deep grout cleaning, chrome buffing, sanitary disposal, consumables restocking, infection control, high-touch sanitisation &mdash; we don&rsquo;t send rotating crews of agency strangers walking a Scottish commercial washroom. When your regular crew is on annual leave, we send a trained backup who has been briefed on your washroom count, your dispenser types, your sanitary bin contractor, your access protocols (key safes, alarm codes, entry phone), your staff communications protocol, and your premium finishes &mdash; and we tell you in advance.",
  },
  {
    icon: ShieldCheck,
    title: "PVG-Checked, Fully Insured & £5m Public Liability",
    description:
      "Every washroom crew member is PVG-checked (essential for buildings that may have staff, customers, or vulnerable users present), trained in restroom-sanitation-specific protocols &mdash; superheated steam sanitation, descaling, chrome buffing, grout treatment, sanitary disposal, consumables restocking, infection control, bodily-fluid cleanup, issue flagging, high-touch sanitisation, operational support for your facilities team &mdash; and is trained on restroom-sanitation-specific protocols before stepping foot on site: HSE compliance, RAMS as standard, Safe Systems of Work, COSHH-documented chemistry, superheated dry-steam vapor (175&deg;C) on toilet seats and urinal surrounds, professional descaling agents for Scottish hard-water limescale, microfibre glass-cleaning systems for streak-free mirrors and partitions, EN 1276 bactericide and EN 14476 virucide for high-touch touchpoints, anti-fungal grout treatment, enzymatic drain sanitisers, professional carpet spot-and-extract for spill stains, and audit-ready documentation for environmental health inspection and HSE review. We use non-toxic, child-safe, surface-safe chemistry by default. We hold &pound;5m public liability as standard &mdash; full employer&rsquo;s liability, professional indemnity, and can name your business on our policy as additional insured.",
  },
  {
    icon: Award,
    title: "Signed Washroom Logs & 100% Satisfaction Guarantee",
    description:
      "Every restroom sanitation client gets a dedicated account manager who knows your facility, your facilities or office manager, your occupancy calendar, and your inspection regime &mdash; direct mobile number, 24-hour response, monthly compliance walk-throughs alongside your facilities or office manager. After every visit you receive a signed washroom log (cleaner name, time in/out, areas cleaned, tasks actioned, consumables restocked, and any issues flagged), arrival and departure times, and issue-flagging for low-stock paper towel, damaged fixtures, leaking taps, light failures, security concerns, or pest sightings &mdash; before they undermine a client visit, an environmental health inspection, or a staff complaint. We offer a free re-clean within 24 to 48 hours if you are not 100% satisfied, and our visit-completion rate in 2025 was 99.6%. From &pound;14 per hour for a single-site restroom sanitation through to a fully bespoke retainer for a multi-site commercial estate.",
  },
];

// ============================================================
// The 3-step booking process
// ============================================================
const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey &amp; Bespoke Schedule",
    description:
      "Contact us for a free, no-obligation site survey. We conduct a thorough facility assessment to determine the most effective restroom-sanitation schedule for your specific building. We walk your washrooms with your facilities or office manager, count your toilets, urinals, basins, mirrors, partitions, dispensers, and sanitary bins, identify your traffic patterns (corporate 9&ndash;5, retail peak, hospitality evening, venue event-led, public-sector office hours), your turnaround windows (end-of-day washroom reset, full deep clean, rapid response), your access protocols (key safes, alarm codes, entry phone), and any specific cleaning challenges (limescale build-up, persistent grout odour, listed-building constraints on finishes, bodily-fluid cleanup protocols). We develop a tailored RAMS package (Risk Assessments and Method Statements) and Safe Systems of Work for your facility&rsquo;s unique operational needs. We send an itemised proposal within 2 business days: shift pattern, scope of work, fixed monthly retainer, RAMS, COSHH datasheets, and a draft washroom task schedule. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Local Washroom Crew Matching &amp; Onboarding",
    description:
      "We hand-pick a vetted washroom crew with the necessary qualifications and &ldquo;Maundy&rdquo; mindset for your specific facility. Your allocated washroom crew is PVG-checked, trained in restroom-sanitation-specific protocols (superheated steam sanitation, descaling, chrome buffing, grout treatment, sanitary disposal, consumables restocking, infection control, bodily-fluid cleanup, issue flagging, high-touch sanitisation, operational support for your facilities team), and briefed on your washroom count, your dispenser types, your sanitary bin contractor, your access protocols (key safes, alarm codes, entry phone), your staff communications protocol, and your premium finishes &mdash; so cleaning happens during or after hours, not around your working day. The same crew returns every visit, building real knowledge of your facility&rsquo;s traffic patterns and your inspection regime. We arrive in liveried vehicles, in uniform with photo I.D. and PPE, with superheated dry-steam vapor equipment, professional descaling agents, EN 1276 bactericide, EN 14476 virucide, microfibre glass-cleaning systems, anti-fungal grout treatment, enzymatic drain sanitisers, and COSHH-compliant, child-safe, surface-safe chemistry.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Verifiable Results, Every Visit",
    description:
      "Receive pre and post-visit reports to ensure every technical specification was met, backed by our MaundyClean satisfaction guarantee. You receive a signed washroom log after every visit, arrival and departure times, areas cleaned, tasks actioned, consumables restocked, and any issues flagged. Your dedicated account manager visits monthly for a compliance walk-through with your facilities or office manager, and proactively raises concerns before they undermine a client visit, an environmental health inspection, or a staff complaint. From &pound;14 per hour for a single-site restroom sanitation through to a fully bespoke retainer for a multi-site commercial estate. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured.",
  },
];

// ============================================================
// FAQ for the near-me page
// ============================================================
const NEAR_ME_FAQS = [
  {
    q: "How do I know if you cover my area?",
    a: "We cover 72+ towns and cities across Scotland &mdash; from Glasgow and Edinburgh in the Central Belt to Inverness in the Highlands and everywhere in between. Use the location grid above to find your town. If you don&rsquo;t see your postcode listed, call us &mdash; we add new restroom sanitation coverage areas every month and may already have a vetted uniformed PVG-checked washroom crew near you. Our local restroom sanitation crews operate across Glasgow&rsquo;s International Financial Services District, Merchant City and West End commercial towers (facilities managers, office managers and building operations leads), Edinburgh&rsquo;s Exchange District, New Town and Quartermile business quarters (corporate estates and property management companies), Aberdeen&rsquo;s energy-corridor West End and Tullos industrial offices (energy operators and service companies), Dundee&rsquo;s Waterfront and City Centre professional services buildings (facilities teams and office managers), and Scottish commercial districts across the Central Belt.",
  },
  {
    q: "How quickly can a local washroom crew start?",
    a: "From free site survey and itemised quote to first washroom crew on-site in 5&ndash;7 working days for most postcodes in the Central Belt. For more remote areas (Highlands, Islands, Borders), allow 7&ndash;10 working days for crew routing, equipment mobilisation, and travel planning. Same-week starts are occasionally possible in Glasgow, Edinburgh, Stirling, and Dundee &mdash; call us to check availability. New commercial estate handovers, post-refurbishment reopens, head-lease landlord approval renewals, and unplanned seasonal occupancy changes typically schedule 2&ndash;3 weeks out to allow for full site survey, proposal, mobilisation, crew onboarding, and equipment delivery across every facility in your estate.",
  },
  {
    q: "Will the washroom crew travel to my facility, or do I need to bring anything to you?",
    a: "All restroom sanitation services are performed on-site at your premises &mdash; we never transport anything off-site (sanitary waste is handled by your licensed sanitary waste contractor; we manage the on-site side of that relationship). Our crews arrive in liveried vans with superheated dry-steam vapor equipment, professional descaling agents for Scottish hard-water limescale, EN 1276 bactericide for high-touch touchpoints, EN 14476 virucide for outbreak response, microfibre glass-cleaning systems for streak-free mirrors and partitions, anti-fungal grout treatment, enzymatic drain sanitisers, professional carpet spot-and-extract for spill stains, pH-neutral sanitiser for surrounding fixtures, COSHH-documented chemistry, PPE, and non-toxic, child-safe, surface-safe chemistry. You provide consumables (paper towel, toilet paper, hand soap, sanitiser wipes, bin liners) or we can manage consumables restocking for an additional monthly fee.",
  },
  {
    q: "Do you have washroom crews experienced with toilet & urinal restoration, deep grout cleaning, chrome buffing, sanitary disposal, and consumables restocking?",
    a: "Yes. Our crews are trained specifically on restroom-sanitation &amp; washroom cleaning protocols &mdash; HSE compliance, RAMS as standard, Safe Systems of Work, superheated dry-steam vapor (175&deg;C) on toilet seats, urinal surrounds, and tile grout (the only way to lift embedded biological load a spray-and-wipe leaves behind), toilet &amp; urinal restoration (acidic descaler for hard-water limescale under the rim and inside the bowl, enzymatic drain sanitiser to break down organic matter at the source of drain odour, urinal slab or trough cleaned, surround degreased, screen sanitised, flush handle and high-touch touchpoints treated with EN 1276 bactericide), deep grout cleaning (anti-fungal treatment on tile joints &mdash; the main odour reservoir in any washroom, rotary-machine deep scrub quarterly for ingrained dirt), chrome buffing (chrome taps polished to a uniform sheen, stainless steel partitions and grab rails buffed, splashbacks wiped, mirrors squeegeed with professional technique), sanitary disposal (sanitary bins checked, replaced if full, coordinated with your licensed sanitary waste contractor, bin exteriors wiped and sanitised, foot-pedals treated with EN 1276 bactericide, full audit-trail documentation for environmental health inspection), consumables restocking (toilet paper, paper towels, hand soap, sanitiser, air-freshener stock levels checked and replenished every visit, dispensers refilled and inspected for damage), high-touch sanitisation (door handles on every stall and entrance, locks and latches, cubicle door edges, tap levers, soap dispenser buttons, paper towel dispenser cranks, hand-dryer buttons, sanitary bin foot-pedals, light switches, baby-change table surfaces, and disabled-access grab rails), issue flagging (low-stock paper towel, damaged fixtures, leaking taps, light failures, security concerns, pest activity, bodily-fluid incidents), and audit-ready signed washroom logs. We provide audit-ready signed washroom logs, COSHH datasheets, RAMS, training records, vetting records (PVG), and &pound;5m public liability certificates for your compliance file. We currently service commercial estates in Glasgow&rsquo;s IFSD and Merchant City, office towers in Edinburgh&rsquo;s Exchange District, energy operators in Aberdeen&rsquo;s West End, and professional services firms in Dundee&rsquo;s Waterfront.",
  },
  {
    q: "Can you handle secure access, alarm systems, and after-hours washroom cleaning at my facility?",
    a: "Absolutely. We&rsquo;re trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys stored in a coded safe between shifts, alarm codes encrypted and only released to your assigned washroom crew, never labelled with your address. We hold &pound;5m public liability as standard &mdash; full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, suitable for commercial offices, retail environments, hospitality venues, schools, public-sector buildings, healthcare ancillary zones, and mixed-use buildings. The most common windows are early-morning shifts (6&ndash;9am) for washroom resets before staff arrive; mid-morning maintenance shifts (10am&ndash;2pm) for retail and hospitality washrooms during opening hours; evening shifts (5&ndash;9pm) for end-of-day washroom deep cleans after closing; and through-the-night shifts (10pm&ndash;6am) for buildings that empty completely and require an alarm-set after-hours window. We can also split: light touch during the working day (restock and rapid response), fuller presence in the evening (toilet &amp; urinal restoration and chrome buffing), through-the-night reset (deep grout treatment and full sanitisation).",
  },
  {
    q: "What&rsquo;s the difference between a daily, weekly, and fortnightly restroom sanitation schedule near me?",
    a: "A daily restroom sanitation schedule (typically 5&ndash;7 visits per week, 1&ndash;2 hours per visit) is the right choice for high-traffic facilities where the cumulative contamination load across the working day needs to be lifted before the next morning &mdash; corporate offices of 100+ staff, public buildings, retail and hospitality venues, event-driven facilities. A weekly restroom sanitation schedule (typically 1&ndash;3 visits per week, 2&ndash;4 hours per visit) suits medium-traffic facilities where a daily presence isn&rsquo;t justified but weekly deep cleaning keeps standards high &mdash; smaller offices, professional services firms, low-tenant commercial buildings. A fortnightly restroom sanitation schedule (typically 1 visit per fortnight, 3&ndash;5 hours per visit) suits low-traffic facilities where the contamination load is light &mdash; small offices, low-occupancy units, ancillary facilities. We&rsquo;ve handled turnaround windows as tight as 4 hours between late-working staff departure and early-opening retail arrival, and surge mobilisations for new commercial estate handovers, post-refurbishment reopens, and unplanned seasonal occupancy changes. Your account manager will advise on the best schedule for your specific building type, capacity, and occupancy calendar.",
  },
];

// ============================================================
// Main page component
// ============================================================

export function RestroomSanitationNearMeHero() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 - Hero */}
      {/* H1: Restroom Sanitation & Washroom Cleaning Near Me in Scotland */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.heroWide}
            alt="Maundy Clean PVG-checked, vetted washroom crew restoring toilets, urinals, dispensers and chrome fixtures to a showcase shine in a Scottish commercial restroom"
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
              72+ Scottish towns &middot; PVG-checked washroom crews &middot; Same crew every visit
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
            >
              Restroom Sanitation &amp; Washroom Cleaning Near Me in Scotland
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
            >
              Searching for &ldquo;restroom sanitation near me&rdquo; or
              &ldquo;washroom cleaning near me&rdquo; in Scotland? Maundy Clean
              covers facilities managers, office managers, building operations
              leads, and commercial estates across the Central Belt, Highlands,
              Borders, and Islands &mdash; from Glasgow&rsquo;s IFSD and
              Edinburgh&rsquo;s Exchange District to Aberdeen&rsquo;s energy corridor
              and Dundee&rsquo;s Waterfront. Same PVG-checked, uniformed washroom
              crews, toilet &amp; urinal restoration, deep grout cleaning, chrome
              buffing, sanitary disposal, consumables restocking, infection
              control, superheated steam technology, eco-friendly non-toxic
              products, fixed monthly retainer, and a &ldquo;showcase&rdquo; shine.
              From &pound;14 per hour for a single-site restroom sanitation through
              to a fully bespoke multi-site commercial estate retainer.
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
                  Request Your Bespoke Hygiene Quote Today
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
                  Find Your Local Washroom Crew
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
      {/* H2: Local Restroom Sanitation Services You Can Trust */}
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
              Local restroom sanitation &amp; washroom cleaning &middot; Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              Local Restroom Sanitation Services You Can Trust
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              Maundy Clean is a Scottish restroom sanitation &amp; washroom
              cleaning company built on the Maundy tradition of service and care.
              We don&rsquo;t operate as an impersonal national franchise &mdash;
              we&rsquo;re a local specialist with vetted, uniformed, PVG-checked
              washroom crews living and working in your area. Whether you&rsquo;re
              searching for a washroom deep clean at a Glasgow IFSD commercial
              tower, a restroom sanitation service at an Edinburgh Exchange
              District office, a chrome buffing reset at an Aberdeen
              energy-corridor HQ, or a public restroom cleaning at a Dundee
              Waterfront professional services building, we assign a vetted,
              PAYE-employed washroom crew that stays with you for the long run. Same
              crew, same standard, same locked-in rate for 12 months.
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
              { label: "From per hour", value: "&pound;14" },
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
      {/* H2: Find Your Local Washroom Crew */}
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
                Find Your Local Washroom Crew
              </h2>
              <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
                Our network of vetted, PVG-checked, uniformed washroom crews spans
                the entire country. From the commercial towers and professional
                services firms of Glasgow and Edinburgh to the energy operators of
                Aberdeen and the Waterfront professional services of Dundee, and
                the commercial estates of the Central Belt, we have a local
                washroom crew ready to care for your facility. Browse by region
                below, or call us to confirm coverage for your specific postcode.
              </p>

              <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
                <img
                  src={IMG.scotlandMap}
                  alt="Map of Scotland showing Maundy Clean restroom sanitation &amp; washroom cleaning coverage areas"
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
                    Same PVG-checked washroom crews, same 100% satisfaction guarantee &mdash; from
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
                    Request Your Bespoke Hygiene Quote Today
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
                          href={`/services/restroom-sanitation-near-me#${loc.slug}`}
                          className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40 scroll-mt-24"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                          <span>
                            <span className="font-medium">{loc.city}</span>
                            <span className="text-[var(--muted-foreground)]"> washroom cleaning</span>
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
      {/* SECTION 4 - Why Maundy Clean for your local restroom sanitation */}
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
              Our vetted, uniformed, PVG-checked washroom crews live in your area,
              know your city&rsquo;s commercial property stock, and stay with you for
              the long run. Here&rsquo;s what sets us apart from the gig-economy apps
              and high-turnover agencies operating in Scotland.
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
      {/* H2: From Free Site Survey to First Washroom Crew in Under a Week */}
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
              From Free Site Survey to First Washroom Crew in Under a Week
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              We have optimised our booking experience to be uncomplicated and
              straightforward, providing the responsive management support Scottish
              business owners demand. Get a free site survey and itemised proposal,
              get matched with a local vetted PVG-checked washroom crew, and enjoy a
              pristine washroom every visit &mdash; no friction, no waiting, no
              surprises.
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
                Request Your Bespoke Hygiene Quote Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 - Cross-links to specialist pages */}
      {/* H2: Specialist Services for Every Property Stage */}
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
              Beyond the washroom deep clean &middot; property milestones
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Specialist Services for Every Property Stage
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              Our restroom sanitation services are the heartbeat of your
              washroom&rsquo;s health, but we provide specialised support for every
              property stage &mdash; from recurring home cleaning that brings
              washroom-crew standards into your residence, through end-of-tenancy
              resets for unit handovers, post-renovation dust clear-outs, and
              periodic antiviral sanitisation biological resets. The same trusted,
              vetted crew can step up whenever your facility needs more than a
              standard restroom-sanitation visit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: KeyRound,
                title: "Recurring Home Cleaning",
                href: "/services/recurring-home-cleaning",
                description:
                  "For your personal residence, our Recurring Home Cleaning brings the same meticulous restroom-sanitation standards into your home on a weekly or fortnightly basis. The same vetted uniformed crew, the same child-safe eco chemistry, the same signed cleaning log after every visit &mdash; so the standard you see at work follows you home.",
                cta: "Explore recurring home cleaning",
              },
              {
                icon: Hammer,
                title: "End of Tenancy Cleaning",
                href: "/services/move-in-out-cleaning",
                description:
                  "Preparing to move offices? Our End of Tenancy Cleaning ensures washrooms are front-line ready for the next occupant. Every surface detailed top-to-bottom, deposit-back guarantees met, and the same trusted vetted crew your washroom team knows &mdash; so your unit handover starts from a &ldquo;speechlessly spotless&rdquo; baseline.",
                cta: "Explore end of tenancy cleaning",
              },
              {
                icon: Sparkles,
                title: "After Builders Clean",
                href: "/services/post-construction-cleaning",
                description:
                  "If your facility has had home improvements or plumbing work, our After Builders Clean is designed to remove heavy construction dust. Fine plaster and MDF dust on every horizontal surface, paint overspray on chrome fixtures, adhesive residue on new flooring &mdash; lifted in full before your washroom crew picks up the ongoing maintenance brief.",
                cta: "Explore after builders cleaning",
              },
              {
                icon: HeartPulse,
                title: "Antiviral Sanitisation",
                href: "/services/disinfection-services",
                description:
                  "Book an Antiviral Sanitisation session for a total biological &ldquo;reset&rdquo; of your environment. EN 14476 virucidal ULV fogging of every surface, every washroom, every communal zone &mdash; the periodic deep biological reset that lifts the cumulative contamination load a standard restroom clean can&rsquo;t reach.",
                cta: "Explore antiviral sanitisation",
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
              href="/services/restroom-sanitation"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] bg-[var(--brand-light)]/40 hover:bg-[var(--brand-light)]/70 transition-colors px-5 py-3 rounded-full"
            >
              <Sparkles className="w-4 h-4" />
              Explore the full restroom sanitation services page
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 - Final CTA */}
      {/* H2: Ready for a Washroom Crew Near You? */}
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
              Ready to book your local washroom crew?
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
              Ready for a Washroom Crew Near You?
            </h2>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a free, no-obligation site survey with our management team and
              receive an itemised proposal within 2 business days. Vetted
              PVG-checked uniformed washroom crews, the same dedicated crew every
              visit, toilet &amp; urinal restoration, deep grout cleaning, chrome
              buffing, sanitary disposal, consumables restocking, infection
              control, superheated steam technology, eco-friendly non-toxic
              products, fixed monthly retainer, multi-site one-invoice
              convenience, signed washroom logs, &pound;5m public liability as
              standard, &ldquo;showcase&rdquo; shine every visit, and a 100%
              satisfaction guarantee &mdash; from &pound;14 per hour for a
              single-site restroom sanitation through to a fully bespoke multi-site
              commercial estate retainer. Coverage across 72+ Scottish towns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
                asChild
              >
                <Link href="/quote">
                  Request Your Bespoke Hygiene Quote Today
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
              Restroom sanitation near me &middot; FAQ
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              Straight answers to the questions our local restroom sanitation
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
                Request Your Bespoke Hygiene Quote Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

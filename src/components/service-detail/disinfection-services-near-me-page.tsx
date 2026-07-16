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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/disinfection-services.jpg",
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
  { icon: Leaf, label: "Pure-Water Non-Toxic Products" },
  { icon: Clock, label: "100% Satisfaction Guarantee" },
];

// ============================================================
// The 4 trust pillars
// ============================================================
const TRUST_PILLARS = [
  {
    icon: Users,
    title: "The Same Trusted Disinfection Care Crew Every Time",
    description:
      "Unlike gig-economy cleaning apps, we only employ our own staff. The same vetted, uniformed, and background-checked disinfection specialists who manage your regular disinfection & sanitisation are the ones performing your electrostatic sprayer surface deep cleaning, EN 14476 virucidal high-touch rail sanitisation, and ULV fogging full-room programmes. Continuity matters when the stakes are a Glasgow IFSD corporate facility, an Edinburgh retail-chain facility, or an Aberdeen hotel-lobby reception &mdash; we don&rsquo;t send rotating crews of strangers to your property.",
  },
  {
    icon: Droplets,
    title: "Pure-Water De-Ionised Systems & Reach-and-Wash Poles",
    description:
      "Our disinfection specialists understand every variety of commercial disinfection equipment &mdash; from surface rubber, threshold aluminium, and partition glass through high-touch rail rubber, stainless steel surfaces, mirror, and control panel. We identify the equipment type, the surface material, and the access constraints before we touch the surface, then apply the right protocol: electrostatic sprayer, EN 14476 virucidal high-touch rail applicator, lint-free microfibre edge detailing, EN 14476 virucidal high-touch rail sanitisation up to 65 feet for full-room environmental pathogen control, and ULV fogging or Mobile Platform operation for surfaces exceeding 65 feet. Wrong chemistry on disinfection rubber equals permanent damage &mdash; we refuse to clean what we cannot safely treat.",
  },
  {
    icon: Mountain,
    title: "ULV fogging, HSE Biological Agents compliance & Cradle Systems",
    description:
      "For surfaces exceeding standard heights, we provide specialist teams trained in ULV fogging (HSE-certified), HSE Biological Agents compliance (HSE-certified cherry-picker and scissor-lift), and BMU (Building Maintenance Unit) cradle operation for buildings with permanent cradle systems. Carbon-fibre telescopic poles for full-room internal atrium pathogen control up to 65 feet from ground level &mdash; no ladders, no MEWP, no scaffolding. All cleaning solutions are certified non-toxic, biodegradable, child-safe, and surface-safe &mdash; EN 14476 virucidal chemistry is REACH-compliant. The equipment is safe for staff and visitors to walk past mid-clean.",
  },
  {
    icon: Award,
    title: "Fully Insured & 100% Satisfaction Guaranteed",
    description:
      "Every disinfection specialist is Disclosure Scotland PVG-checked, we hold &pound;5m public liability cover, and we offer a free re-clean within 24 to 48 hours if you are not 100% satisfied. We are a registered Scottish company &mdash; not a gig-economy agency &mdash; and the Maundy Clean standard applies on every visit. From &pound;180 per visit for a single disinfection or treatment zone through to &pound;POA for multi-site commercial facility contracts with 24/7 coverage, with a written defect report on every visit and 12-month rate-lock on every contract.",
  },
];

// ============================================================
// The 3-step booking process
// ============================================================
const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Free Site Survey & Equipment Audit",
    description:
      "Tell us about your disinfection zones, treatment zones, and access constraints &mdash; and receive a fixed-price equipment-care quote in under a minute. Our team will advise on the best electrostatic sprayer, EN 14476 virucidal sanitisation, or ULV fogging options for your unique pathogen control. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months, with no on-the-day upsells for chemistry or access equipment.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Local Technician Matching",
    description:
      "We match you with a vetted, disinfection-trained specialist in your postcode. They confirm the equipment type, frame material, coating register, and access constraints of your treatment zones, flag any permanent scratches, coating degradation, or seal failure, and walk you through the pure-water and squeegee plan before any chemistry touches the surface &mdash; so there are no surprises on the day.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "A Pristine Workplace",
    description:
      "Walk into a workplace that looks, feels, and stays fresh, backed by our 100% satisfaction guarantee. We finish every visit with a signed cleaning log, a defect-flagging report (step wear, high-touch rail degradation, mechanism noise), a care-card update, and a re-clean reminder for the next visit. From &pound;180 per visit for a single disinfection or treatment zone through to &pound;POA for multi-site commercial facility contracts with 24/7 coverage.",
  },
];

// ============================================================
// FAQ for the near-me page
// ============================================================
const NEAR_ME_FAQS = [
  {
    q: "How do I know if you cover my area?",
    a: "We cover 72+ towns and cities across Scotland &mdash; from Glasgow and Edinburgh in the Central Belt to Lerwick in Shetland and everywhere in between. Use the location grid above to find your town. If you don&rsquo;t see your postcode listed, call us &mdash; we add new coverage areas every month and may already have a disinfection & sanitisation specialist near you.",
  },
  {
    q: "How quickly can a local disinfection specialist start?",
    a: "From quote to clean in under 48 hours for most postcodes in the Central Belt. For more remote areas (Highlands, Islands, Borders), allow 5-7 working days for technician routing and travel planning. Same-day starts are occasionally possible in Glasgow, Edinburgh, Stirling, and Dundee &mdash; call us to check availability. Full atrium full-room programmes with ULV fogging typically schedule 1-2 weeks out to allow for HSE technician routing; multi-site estate programmes with BMU cradle access typically schedule 2-3 weeks out to align with building cradle availability.",
  },
  {
    q: "Will the technician travel to me, or do I need to bring the equipment to you?",
    a: "All disinfection and disinfection and antiviral sanitisation is performed on-site at your property &mdash; we never transport your treatment zones anywhere. Our crews arrive in fully-equipped vans with electrostatic sprayers, EN 14476 virucidal high-touch rail sanitisation, professional ULV fogging machines, UV-C cabinets, lint-free microfibre cloths, touchpoint maintenance kit, mirror restoration (treatment zone) chemistry, and HSE Biological Agents certification where required. The only items we may need from you are: access to the building, any key-safe codes or alarm fobs, and a brief on operational hours and occupancy constraints.",
  },
  {
    q: "Do you have disinfection specialists available in rural Scotland?",
    a: "Yes. We cover rural Scotland including Perthshire, Angus, Fife, the Borders, Argyll, Aberdeenshire, and parts of the Highlands. For very remote properties (Islands, far North), we may operate on a minimum-area basis or schedule combined visits with neighbouring properties to keep travel costs down. Call us to discuss your specific location &mdash; we&rsquo;ll always give you a straight answer on coverage and lead time.",
  },
  {
    q: "Can you clean the disinfections in my Glasgow office out-of-hours?",
    a: "Absolutely &mdash; out-of-hours disinfection & sanitisation is one of our specialities, particularly across Glasgow IFSD, Edinburgh Exchange District, Aberdeen West End, and Dundee Waterfront corporate estates. We work overnight, weekend, or holiday periods &mdash; squeegee, dry-buff, frame detailing, and barrier removal all completed before trading resumes. We have worked overnight in occupied hotels (no guest disturbance &mdash; quiet pure-water technique, no chemical odour), retail units (no trading impact &mdash; overnight close), and offices (no staff impact &mdash; weekend clean). Operational disruption is the single biggest objection to disinfection & sanitisation, and we&rsquo;ve solved it.",
  },
  {
    q: "What&rsquo;s the difference between routine disinfection maintenance, full disinfection zone deep clean, and multi-site estate programmes near me?",
    a: "Routine disinfection maintenance (&pound;180-&pound;280/visit) is the weekly or fortnightly top-up &mdash; squeegee of all internal treatment zones, door handles sanitised, frames and tracks detailed, mirror restoration (treatment zone) if required. Full atrium full-room clean (&pound;POA for multi-site) is the quarterly or annual cycle for full-room pathogen control above 4m &mdash; EN 14476 virucidal high-touch rail sanitisation for ground-to-65-feet access, ULV fogging for surfaces above 65 feet, full frame and track detail, and a written defect report. External curtain-walling programmes (POA) are the annual cycle for multi-site estates &mdash; multi-team mobilisation, 24/7 coverage option, HTM 01-05 chemistry (clinical), specialist disinfection machine, annual rate review, and performance bonus structure. We&rsquo;ll recommend the right approach at the free site survey.",
  },
];

// ============================================================
// Main page component
// ============================================================

export function DisinfectionServicesNearMeHero() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 - Hero */}
      {/* H1: Disinfection & Antiviral Sanitisation Services Near Me in Scotland */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.heroWide}
            alt="Maundy Clean disinfection & sanitisation specialist squeegeeing a frameless internal disinfection to a speechlessly spotless finish in a Scottish commercial office"
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
              72+ Scottish towns &middot; Local PVG-checked specialists &middot; Same crew every visit
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
            >
              Disinfection & Antiviral Sanitisation Services Near Me in Scotland
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
            >
              Searching for &ldquo;disinfection & sanitisation near me&rdquo; or
              &ldquo;commercial disinfection & sanitisation near me&rdquo; in Scotland? Maundy
              Clean covers 72+ towns and cities across the Central Belt,
              Highlands, Borders, and Islands. Same PVG-checked standard, same
              pure-water de-ionised technology, same dedicated pathogen control
              specialist &mdash; wherever your property happens to be. From
              &pound;180 per visit for a single disinfection or treatment zone through to
              &pound;POA per multi-site contract for a full disinfection zone deep clean with
              ULV fogging.
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
                  Request Your Free Site Assessment Today
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
                  Find Your Local Disinfection & Crew
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
      {/* H2: Local Disinfection & Cleaning You Can Trust */}
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
              Local disinfection &amp; sanitisation &middot; Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              Local Disinfection & Cleaning You Can Trust
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              Maundy Clean is a Scottish disinfection & sanitisation company built
              on the Maundy tradition of service and care. We don&rsquo;t
              operate as an impersonal national agency &mdash; we&rsquo;re a
              local specialist with PVG-checked disinfection crews living and
              working in your area. Whether you&rsquo;re searching for a
              disinfection programme in Glasgow&rsquo;s IFSD, a hotel-lobby
              partition restoration in Edinburgh&rsquo;s New Town, a
              full-room atrium curtain-walling programme in Aberdeen, or a
              retail mirrored-feature-wall restoration in Dundee, we assign a
              vetted, PAYE-employed professional that stays with you for the
              long run. Same crew, same standard, same locked-in rate for 12
              months.
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
              { label: "Equipment covered", value: "All types" },
              { label: "Reach-and-Wash height", value: "65 feet" },
              { label: "Public liability", value: "&pound;5m" },
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
      {/* H2: Find Your Local Disinfection & Crew */}
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
                Find Your Local Disinfection & Crew
              </h2>
              <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
                Our network of vetted, PVG-checked disinfection specialists
                spans the entire country. From the Central Belt to the
                Highlands and Islands, we have a local professional ready to
                care for your commercial pathogen control. Browse by region below, or
                call us to confirm coverage for your specific postcode.
              </p>

              <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
                <img
                  src={IMG.scotlandMap}
                  alt="Map of Scotland showing Maundy Clean disinfection &amp; sanitisation coverage areas"
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
                    Same PVG-checked disinfection specialists, same 100% satisfaction
                    guarantee &mdash; from Glasgow to Lerwick.
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
                    <Zap className="w-4 h-4" />
                    Request Your Free Site Assessment
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
                          href={`/services/disinfection-services-near-me#${loc.slug}`}
                          className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40 scroll-mt-24"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                          <span>
                            <span className="font-medium">{loc.city}</span>
                            <span className="text-[var(--muted-foreground)]"> disinfection care</span>
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
      {/* SECTION 4 - Why Maundy Clean for your local disinfection-treatment zonee */}
      {/* H2: Why Scottish Property Owners Choose Maundy Clean */}
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
              Why Scottish Property Owners Choose Maundy Clean
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              We&rsquo;re a local specialist, not an impersonal national agency. Our
              SafeContractor-approved disinfection specialists live in your area, know your
              neighbourhood, and stay with you for the long run. Here&rsquo;s what sets
              us apart from the gig-economy apps and high-turnover agencies operating
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
                    <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 - 3-step booking */}
      {/* H2: From Quote to Clean in 48 Hours */}
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
              From Quote to Clean in 48 Hours
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              We have optimized our booking experience to be uncomplicated and
              straightforward. Tell us about your disinfection zones, equipment types,
              and access constraints, get matched with a local PVG-checked
              disinfection specialist, and enjoy a pristine workplace
              &mdash; no friction, no waiting, no surprises.
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
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {step.description}
                  </p>
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
                Request Your Free Site Assessment Today
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
              Beyond the disinfection clean &middot; property cycles
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Specialist Services for Every Property Cycle
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              Our disinfection & sanitisation is the perfect reset to combine with
              our other specialist services. Restore the pathogen control today, then
              keep the interior pristine with the right ongoing routine for
              your office, your tenancy cycle, your post-refurb timeline, or
              your high-touch hygiene programme &mdash; the same trusted crew
              can step up whenever life changes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CalendarCheck,
                title: "Recurring Home Cleaning",
                href: "/services/recurring-home-cleaning",
                description:
                  "After your treatment zones are restored, keep them pristine with a recurring home cleaning schedule &mdash; weekly or fortnightly. Our same trusted crew maintains your pathogen control with pure-water, surface-safe products as part of every visit, catching wear patterns early and extending the life of the finish.",
                cta: "Explore recurring cleaning",
              },
              {
                icon: KeyRound,
                title: "End of Tenancy Cleaning",
                href: "/services/move-in-out-cleaning",
                description:
                  "Moving commercial or residential units? Our End of Tenancy Cleaning includes a Deposit-Back Guarantee and professional disinfection restoration to ensure you PASS your inspection. We work to the letting agent&rsquo;s inventory, restore the pathogen control to its original appearance, and come back free of charge if anything is flagged.",
                cta: "Explore end of tenancy",
              },
              {
                icon: Hammer,
                title: "After Builders Clean",
                href: "/services/post-construction-cleaning",
                description:
                  "If you&rsquo;ve recently had construction work, our After Builders Clean removes the fine dust that settles on internal treatment zones and disinfection treads. Fine construction dust left on a freshly-cleaned disinfection zone re-enters the air for months &mdash; we capture it at source before it becomes a long-term air-quality problem.",
                cta: "Explore after builders cleaning",
              },
              {
                icon: HeartPulse,
                title: "Antiviral Sanitisation",
                href: "/services/disinfection-services",
                description:
                  "Refresh your high-touch hygiene alongside your disinfection cleaning for a comprehensive workplace refresh. Electrostatic disinfection of door handles, push-plates, and entry phone keypads, EN 14476 virucidal chemistry, and the same &ldquo;Maundy&rdquo; standard applied to every vertical-transport surface your staff and visitors touch.",
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
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                        {sol.description}
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <Link
              href="/services/disinfection-services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] bg-[var(--brand-light)]/40 hover:bg-[var(--brand-light)]/70 transition-colors px-5 py-3 rounded-full"
            >
              <Layers className="w-4 h-4" />
              Explore the full disinfection &amp; sanitisation service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 - Final CTA */}
      {/* H2: Ready for an Disinfection & Crew Near You? */}
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
              Ready to book your local disinfection crew?
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
              Ready for an Disinfection & Crew Near You?
            </h2>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Get a fixed-price disinfection & sanitisation quote in 30 seconds.
              No pushy sales call, no waiting 24 hours for a callback.
              SafeContractor-approved disinfection specialists, electrostatic sprayers,
              EN 14476 virucidal high-touch rail sanitisation, HSE-certified ULV fogging,
              HSE-certified Mobile Platform operation, ISO 14001 environmental
              compliance, and a 100% satisfaction guarantee on every visit
              &mdash; from &pound;14 per hour for routine disinfection maintenance
              through to &pound;POA per multi-site contract for a full atrium full-room
              clean with ULV fogging. Coverage across 72+ Scottish towns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
                asChild
              >
                <Link href="/quote">
                  Request Your Free Site Assessment Today
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
              disinfection & sanitisation near me &middot; FAQ
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              Straight answers to the questions our local disinfection
              cleaning clients ask most often. Can&rsquo;t find what you need?
              Call us on{" "}
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
                    <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                      {faq.a}
                    </p>
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
                Request Your Free Site Assessment Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

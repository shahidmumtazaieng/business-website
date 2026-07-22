"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Leaf,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  UserCheck,
  CalendarCheck,
  Home,
  Crown,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%207.16.43%20PM.jpeg",
  scotlandMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
  localCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  homeClean:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
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
  { icon: Star, label: "4.9/5 · 6,200+ reviews" },
  { icon: Shield, label: "PVG-Checked & £5m Insured" },
  { icon: Leaf, label: "Child & Pet-Safe Products" },
  { icon: Clock, label: "Same Housekeeper Every Visit" },
];

// ============================================================
// The 4 trust pillars
// ============================================================
const TRUST_PILLARS = [
  {
    icon: Users,
    title: "Same Trusted Professional Every Visit",
    description:
      "We assign a dedicated housekeeper to your home for the duration of your plan. They don't get reassigned, shared with other clients in your slot, or pulled to a different area. Continuity is what turns a clean into a relationship.",
  },
  {
    icon: Crown,
    title: "Vocationally Trained & Fully Insured",
    description:
      "Every housekeeper is fully trained, background-checked through Disclosure Scotland's PVG scheme, and carries official Maundy Clean identification. £5m public liability cover as standard on every visit.",
  },
  {
    icon: Leaf,
    title: "Safe for Families and Pets",
    description:
      "We use only certified child and pet-safe products and eco-friendly supplies. EU Ecolabel and DEFRA-approved low-VOC products as standard. Your home stays a sanctuary — not a chemistry lab.",
  },
  {
    icon: Clock,
    title: "Total Flexibility — No Contracts",
    description:
      "You are never tied into a long-term contract. We offer flexible appointments across five days a week. Pause for holidays or renovations with 48 hours' notice. Cancel entirely with one tap. Your rate is locked in for 12 months.",
  },
];

// ============================================================
// The 3-step booking process
// ============================================================
const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "30-Second Instant Quote",
    description:
      "Tell us about your home and receive a fixed-price quote in under a minute. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Local Housekeeper Matching",
    description:
      "We match you with a vetted housekeeper in your postcode. They're briefed on your home's specific cleaning priorities before the first visit. Secure key safe system available if you're at work.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Pristine Sanctuary",
    description:
      "Walk into a home that feels refreshed, welcoming, and showcase-ready — backed by our 100% satisfaction guarantee. Adjust your checklist anytime from your phone. Not happy? We re-clean within 24 hours, free.",
  },
];

// ============================================================
// FAQ for the near-me page
// ============================================================
const NEAR_ME_FAQS = [
  {
    q: "How do I know if you cover my area?",
    a: "We cover 72+ towns and cities across Scotland — from Glasgow and Edinburgh in the Central Belt to Lerwick in Shetland and everywhere in between. Use the location grid above to find your town. If you don't see your postcode listed, call us — we add new coverage areas every month and may already have a housekeeper near you.",
  },
  {
    q: "How quickly can a local housekeeper start?",
    a: "From quote to first clean in under 48 hours for most postcodes in the Central Belt. For more remote areas (Highlands, Islands, Borders), allow 5-7 working days for housekeeper matching and travel planning. Same-day starts are occasionally possible in Glasgow, Edinburgh, Stirling, and Dundee — call us to check availability.",
  },
  {
    q: "Will the housekeeper travel to me, or do I need to come to you?",
    a: "Our housekeepers travel to your home. We assign housekeepers based on postcode proximity to minimise travel time and keep your rates low. Your housekeeper typically lives within 30 minutes of your home — which means reliable attendance, no travel surcharges, and a genuine local who knows your area.",
  },
  {
    q: "Do you have housekeepers available in rural Scotland?",
    a: "Yes. We cover rural Scotland including Perthshire, Angus, Fife, the Borders, Argyll, Aberdeenshire, and parts of the Highlands. For very remote properties (Islands, far North), we may operate on a minimum-hours-per-visit basis or schedule fortnightly rather than weekly visits. Call us to discuss your specific location.",
  },
  {
    q: "Can I get a housekeeper for my holiday let or second home?",
    a: "Absolutely. Many of our clients use us for holiday lets, second homes, and pieds-à-terre across Scotland. We provide turnover cleaning between guests, periodic deep cleans during void periods, and full housekeeping management for premium short-term lets. Visit our Holiday Let Turnover page for more detail.",
  },
  {
    q: "What's the difference between a housekeeper and a cleaner near me?",
    a: "A cleaner cleans — they visit on a schedule, do the cleaning tasks agreed, and leave. A housekeeper manages a household — they clean, but also handle laundry and linen, provisioning and supplier relationships, trades liaison, guest preparation, household admin, and seasonal deep-cleaning schedules. If you want someone to take ownership of your home's presentation and routines, you want a housekeeper. If you just want the cleaning done, our Maid Service or Recurring Home Cleaning pages cover that.",
  },
];

// ============================================================
// Main page component
// ============================================================

export function HousekeepingNearMeHero() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 — Hero */}
      {/* H1: Housekeeping Services Near Me in Scotland */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.heroWide}
            alt="Maundy Clean local housekeeper arriving at a Scottish family home"
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
              72+ Scottish towns · Local PVG-checked housekeepers · Same crew every visit
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
            >
              Housekeeping Services Near Me in Scotland
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
            >
              Searching for &ldquo;housekeeping services near me&rdquo; in Scotland? Maundy Clean
              covers 72+ towns and cities across the Central Belt, Highlands, Borders, and Islands.
              Same PVG-checked standard, same 100% re-clean guarantee, same dedicated housekeeper
              every visit &mdash; wherever your home happens to be. From £20/hr.
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
                  Get My 30-Second Instant Quote
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
                  Find Your Local Housekeeper
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
      {/* SECTION 2 — Intro + stats */}
      {/* H2: Local Housekeepers You Can Trust */}
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
              Local housekeeping · Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              Local Housekeepers You Can Trust
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              Maundy Clean is a Scottish housekeeping company built on the Maundy tradition of
              service and care. We don&rsquo;t operate as an impersonal national agency &mdash;
              we&rsquo;re a local specialist with vetted housekeepers living and working in your
              area. Whether you&rsquo;re searching for weekly housekeeping in Glasgow&rsquo;s West
              End, fortnightly housekeeping in Edinburgh&rsquo;s New Town, monthly housekeeping in
              Aberdeen&rsquo;s suburbs, or a private housekeeper anywhere in between, we assign a
              PVG-checked, PAYE-employed professional that stays with you for the long run. Same
              housekeeper, same day, same locked-in rate for 12 months.
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
              { label: "Scottish towns covered", value: "72+" },
              { label: "Client tenure", value: "3.4 yrs avg" },
              { label: "Housekeeper retention", value: "80%+" },
              { label: "Star rating", value: "4.9/5" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--cream)] rounded-xl p-4 border border-[var(--brand)]/10 text-center"
              >
                <div className="font-display font-extrabold text-2xl text-gradient-brand">{stat.value}</div>
                <div className="text-xs text-[var(--muted-foreground)] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — Location grid (id="locations" anchor target) */}
      {/* H2: Find Your Local Housekeeper */}
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
                Find Your Local Housekeeper
              </h2>
              <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
                Our network of vetted, PVG-checked housekeepers spans the entire country. From the
                Central Belt to the Highlands and Islands, we have a local professional ready to
                take ownership of your home. Browse by region below, or call us to confirm coverage
                for your specific postcode.
              </p>

              <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
                <img
                  src={IMG.scotlandMap}
                  alt="Map of Scotland showing Maundy Clean housekeeping service coverage areas"
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
                    Same PVG-checked housekeepers, same trusted professional every visit, same 100%
                    re-clean guarantee &mdash; from Glasgow to Lerwick.
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
                    Get My Instant Quote
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
                  <div key={regionGroup.region}>
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
                          href={`/locations/${loc.slug}`}
                          className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                          <span>
                            <span className="font-medium">{loc.city}</span>
                            <span className="text-[var(--muted-foreground)]"> housekeepers</span>
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
      {/* SECTION 4 — Why Maundy Clean for your local housekeeping */}
      {/* H2: Why Scottish Households Choose Maundy Clean */}
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
              Why Scottish Households Choose Maundy Clean
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              We&rsquo;re a local specialist, not an impersonal national agency. Our housekeepers
              live in your area, know your neighbourhood, and stay with you for the long run. Here&rsquo;s
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
      {/* SECTION 5 — 3-step booking */}
      {/* H2: From Quote to First Clean in 48 Hours */}
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
              From Quote to First Clean in 48 Hours
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              We have optimized our booking experience to be uncomplicated and straightforward.
              Tell us about your home, get matched with a local housekeeper, and enjoy a pristine
              sanctuary &mdash; no friction, no waiting, no surprises.
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
                Get My 30-Second Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — Cross-links to specialist pages */}
      {/* H2: Specialist Services for Every Property Milestone */}
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
              Beyond recurring housekeeping
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Specialist Services for Every Property Milestone
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              While our recurring housekeeping service maintains your daily sanctuary, we provide a
              full spectrum of specialist support for those top-to-bottom moments &mdash; from
              intensive maintenance resets to property transitions and post-renovation dust removal.
              The same trusted crew can step up when life changes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Deep House Cleaning",
                href: "/services/deep-house-cleaning",
                description:
                  "If your home hasn&rsquo;t had professional attention in 6 months, our Deep House Cleaning moves furniture and cleans behind and underneath. Perfect as a baseline reset before recurring housekeeping.",
                cta: "Explore deep cleaning",
              },
              {
                icon: Home,
                title: "End of Tenancy Cleaning",
                href: "/services/move-in-out-cleaning",
                description:
                  "Moving homes? Our End of Tenancy Cleaning includes a Deposit-Back Guarantee, ensuring properties are front-line ready for new occupants. We work to the letting agent&rsquo;s inventory.",
                cta: "Explore end of tenancy",
              },
              {
                icon: Crown,
                title: "Full Housekeeping Service",
                href: "/services/housekeeping-services",
                description:
                  "Beyond cleaning &mdash; laundry and linen management, provisioning, trades liaison, guest preparation, household admin. The full housekeeping scope for larger homes and busy lives.",
                cta: "Explore full housekeeping",
              },
              {
                icon: Users,
                title: "Maid Service",
                href: "/services/maid-service",
                description:
                  "Lighter-touch recurring maid service &mdash; same cleaner every visit, with laundry and bed-making, but without the full household management scope of housekeeping.",
                cta: "Explore maid service",
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
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — Final CTA */}
      {/* H2: Ready for a Housekeeper Near You? */}
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
              Ready to book your local housekeeper?
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
              Ready for a Housekeeper Near You?
            </h2>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Get a fixed-price housekeeping quote in 30 seconds. No pushy sales call, no waiting 24
              hours for a callback. PVG-checked housekeepers, same professional every visit, child
              &amp; pet-safe products, secure key safe system, and a 100% satisfaction guarantee
              &mdash; from £20/hr. Coverage across 72+ Scottish towns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
                asChild
              >
                <Link href="/quote">
                  Get My 30-Second Instant Quote
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
      {/* SECTION 8 — Near-me FAQ */}
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
              Housekeeping near me · FAQ
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              Straight answers to the questions our local housekeeping clients ask most often.
              Can&rsquo;t find what you need? Call us on{" "}
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
                Get My 30-Second Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

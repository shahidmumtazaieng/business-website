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
  CheckCircle2,
  Crown,
  Layers,
  Users,
  Zap,
  Truck,
  CalendarCheck,
  Home,
  KeyRound,
  Hammer,
  Award,
  Phone,
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
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  scotlandMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
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
  { icon: Leaf, label: "Child & Pet-Safe Products" },
  { icon: Clock, label: "100% Satisfaction Guarantee" },
];

// ============================================================
// The 4 trust pillars
// ============================================================
const TRUST_PILLARS = [
  {
    icon: Layers,
    title: "Specialist Material Knowledge on Every Visit",
    description:
      "Our material-trained technicians understand every variety of Scottish window treatment &mdash; from aluminium and faux-wood Venetian blinds to fabric Roman shades, real wood plantation shutters, paper pleated blinds, and delicate honeycomb cellular shades. We match the cleaning method to the material: ultrasonic for aluminium and faux-wood, low-moisture hand-clean for fabric, wood-safe products for real timber, delicate hand-clean only for pleated and honeycomb. Wrong chemistry on wrong material equals permanent damage &mdash; we refuse to clean what we cannot safely treat.",
  },
  {
    icon: Users,
    title: "The Same Trusted Professionals Every Time",
    description:
      "Unlike gig-economy cleaning apps, we only employ our own staff. The same vetted, uniformed, and background-checked technicians who manage your regular house cleaning are the ones performing your blind and shade restoration. Continuity matters when the stakes are original Edinburgh tenement shutters or delicate Roman shades &mdash; we don&rsquo;t send rotating crews of strangers to your property.",
  },
  {
    icon: Droplets,
    title: "Ultrasonic Technology & Eco-Friendly Products",
    description:
      "Ultrasonic cleaning is the gold standard for Venetian and vertical blinds &mdash; microscopic bubbles lift dirt from every slat, cord, and mechanism that hand-cleaning simply cannot reach. For fabric and delicate blinds we use low-moisture hand-cleaning with specialist fabric-safe products. All cleaning solutions are certified child-safe, pet-safe, and food-safe &mdash; no harsh solvents, no optical brighteners, no perfume. Blinds are safe for crawling babies and pets once dry &mdash; no compromise, ever.",
  },
  {
    icon: Award,
    title: "Fully Insured & 100% Satisfaction Guaranteed",
    description:
      "Every technician is Disclosure Scotland PVG-checked, we hold &pound;5m public liability cover, and we offer a free re-clean within 30 days if you are not 100% satisfied. We are a registered Scottish company &mdash; not a gig-economy agency &mdash; and the Maundy Clean standard applies on every visit. From &pound;15 per blind on-site, &pound;10 per blind for whole-house (min 6 blinds), &pound;18 per plantation shutter, with free collection and delivery included as standard.",
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
      "Tell us how many blinds, what type (Venetian, roller, vertical, Roman, pleated, honeycomb, plantation shutters), what material, and any specific issues. Receive a fixed-price quote in under a minute &mdash; from &pound;15 per blind. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months, with no on-the-day upsells and no hidden extras for collection or delivery.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Local Technician Matching & Free Collection",
    description:
      "We match you with a vetted material-trained technician in your postcode and offer FREE collection and delivery, or on-site cleaning depending on your preference. On-site takes 60-90 minutes per blind with no blinds down overnight; workshop cleaning takes the blind for 24 hours for a more thorough process using larger ultrasonic equipment. We&rsquo;ll recommend the right option for your blinds and your timeline.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "A Fresh View & 30-Day Guarantee",
    description:
      "Walk back into a home with blinds that look like new and a room that feels significantly healthier, backed by our 30-day satisfaction guarantee. We rehang each blind, test the operating mechanisms, and walk the property with you at completion. Re-clean reminder at 12 months at the locked-in rate. From &pound;15 per blind on-site through to &pound;18 per plantation shutter with beeswax polish finish.",
  },
];

// ============================================================
// FAQ for the near-me page
// ============================================================
const NEAR_ME_FAQS = [
  {
    q: "How do I know if you cover my area?",
    a: "We cover 72+ towns and cities across Scotland &mdash; from Glasgow and Edinburgh in the Central Belt to Lerwick in Shetland and everywhere in between. Use the location grid above to find your town. If you don&rsquo;t see your postcode listed, call us &mdash; we add new coverage areas every month and may already have a blind and shade cleaning technician near you.",
  },
  {
    q: "How quickly can a local blind cleaning technician start?",
    a: "From quote to clean in under 48 hours for most postcodes in the Central Belt. For more remote areas (Highlands, Islands, Borders), allow 5-7 working days for technician routing and travel planning. Same-day starts are occasionally possible in Glasgow, Edinburgh, Stirling, and Dundee &mdash; call us to check availability. Whole-house blind cleans typically schedule 1-2 weeks out to allow for proper equipment allocation.",
  },
  {
    q: "Will the technician travel to me, or do I need to bring the blinds to you?",
    a: "All blind and shade cleaning is performed either on-site at your property (we bring a portable ultrasonic tank for Venetian and vertical blinds) or at our workshop (we collect, clean, and return the next day &mdash; free collection and delivery included). You never need to bring blinds to us. The only exception is specialist Victorian shutter restoration, which can occasionally benefit from workshop time &mdash; we&rsquo;ll discuss this at quote stage if it applies.",
  },
  {
    q: "Do you have blind cleaning technicians available in rural Scotland?",
    a: "Yes. We cover rural Scotland including Perthshire, Angus, Fife, the Borders, Argyll, Aberdeenshire, and parts of the Highlands. For very remote properties (Islands, far North), we may operate on a minimum-visit basis or schedule combined visits with neighbouring properties to keep travel costs down. Call us to discuss your specific location &mdash; we&rsquo;ll always give you a straight answer on coverage and lead time.",
  },
  {
    q: "Can you clean the original plantation shutters in my Edinburgh tenement?",
    a: "Absolutely &mdash; original tenement plantation shutter restoration is one of our specialities, particularly in Edinburgh&rsquo;s Marchmont, Bruntsfield, Stockbridge, New Town, and Trinity areas. These shutters are typically 100-150 years old, often with original hardware, and require careful wood-safe hand-cleaning with each louvre individually wiped. We never use water (warps the wood), never ammonia-based cleaners (strips the finish), and we offer an optional beeswax polish finish (never silicone sprays which build up over time). References and before-and-after photos from recent Edinburgh tenement projects available on request.",
  },
  {
    q: "What&rsquo;s the difference between on-site and workshop blind cleaning near me?",
    a: "On-site blind cleaning takes place at your property &mdash; our technician brings a portable ultrasonic tank and hand-cleaning equipment, takes each blind down, cleans it (60-90 minutes per blind), dries it, and rehangs it the same visit. Workshop blind cleaning means we collect the blinds (free), take them to our workshop where we can use larger ultrasonic equipment and longer cleaning cycles, and return them the next day for rehanging. On-site is more convenient (no blinds down overnight); workshop is more thorough (better for very dirty blinds or whole-house jobs). We&rsquo;ll recommend the right option at quote stage.",
  },
];

// ============================================================
// Main page component
// ============================================================

export function BlindShadeNearMeHero() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 - Hero */}
      {/* H1: Blind & Shade Cleaning Services Near Me in Scotland */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.heroWide}
            alt="Maundy Clean blind & shade technician restoring Venetian blinds in a Scottish home"
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
              72+ Scottish towns &middot; Local material-trained technicians &middot; Same crew every visit
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
            >
              Blind &amp; Shade Cleaning Services Near Me in Scotland
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
            >
              Searching for &ldquo;blind cleaning near me&rdquo; or &ldquo;Venetian blind
              restoration near me&rdquo; in Scotland? Maundy Clean covers 72+ towns and cities across
              the Central Belt, Highlands, Borders, and Islands. Same material-trained standard, same
              ultrasonic technology, same dedicated technician &mdash; wherever your property happens
              to be. From &pound;15 per blind on-site, &pound;10 per blind for whole-house, with free
              collection and delivery included.
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
                  Find Your Local Blind Crew
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
      {/* H2: Local Blind & Shade Cleaning You Can Trust */}
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
              Local blind &amp; shade restoration &middot; Scotland-wide
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              Local Blind &amp; Shade Cleaning You Can Trust
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              Maundy Clean is a Scottish blind and shade cleaning company built on the Maundy
              tradition of service and care. We don&rsquo;t operate as an impersonal national agency
              &mdash; we&rsquo;re a local specialist with material-trained technicians living and
              working in your area. Whether you&rsquo;re searching for Venetian blind ultrasonic
              cleaning in Glasgow&rsquo;s West End, Roman blind hand-cleaning in Edinburgh&rsquo;s
              New Town, plantation shutter restoration in Aberdeen&rsquo;s granite-built suburbs, or
              commercial blind contracts anywhere in between, we assign a vetted, PAYE-employed
              professional that stays with you for the long run. Same technician, same standard, same
              locked-in rate for 12 months.
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
              { label: "Blind types handled", value: "6+" },
              { label: "Per-blind price from", value: "\u00a315" },
              { label: "Same-day on-site", value: "60-90 min" },
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
      {/* SECTION 3 - Location grid (id="locations" anchor target) */}
      {/* H2: Find Your Local Blind & Shade Crew */}
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
                Find Your Local Blind &amp; Shade Crew
              </h2>
              <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
                Our network of vetted, material-trained blind and shade technicians spans the entire
                country. From the Central Belt to the Highlands and Islands, we have a local
                professional ready to restore your window treatments. Browse by region below, or call
                us to confirm coverage for your specific postcode.
              </p>

              <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
                <img
                  src={IMG.scotlandMap}
                  alt="Map of Scotland showing Maundy Clean blind and shade cleaning coverage areas"
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
                    Same material-trained technicians, same 100% satisfaction guarantee &mdash; from
                    Glasgow to Lerwick.
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
                          href={`/services/blind-shade-cleaning-near-me#${loc.slug}`}
                          className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40 scroll-mt-24"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                          <span>
                            <span className="font-medium">{loc.city}</span>
                            <span className="text-[var(--muted-foreground)]"> blinds</span>
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
      {/* SECTION 4 - Why Maundy Clean for your local blind cleaning */}
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
              We&rsquo;re a local specialist, not an impersonal national agency. Our material-trained
              technicians live in your area, know your neighbourhood, and stay with you for the long
              run. Here&rsquo;s what sets us apart from the gig-economy apps and high-turnover
              agencies operating in Scotland.
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
              We have optimized our booking experience to be uncomplicated and straightforward.
              Tell us how many blinds and what type, get matched with a local material-trained
              technician, and enjoy a fresh view &mdash; no friction, no waiting, no surprises.
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
              Beyond the reset &middot; property cycles
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Specialist Services for Every Property Cycle
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              Our blind and shade cleaning is the perfect reset to combine with our other specialist
              services. Restore the window treatments today, then keep the interior pristine with the
              right ongoing routine for your household, your tenancy cycle, or your sale timeline
              &mdash; the same trusted crew can step up whenever life changes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CalendarCheck,
                title: "Recurring Home Cleaning",
                href: "/services/recurring-home-cleaning",
                description:
                  "After your blinds are restored, keep them pristine with a recurring home cleaning schedule &mdash; weekly or fortnightly. Light dusting of blinds is included as standard in every recurring clean, preventing dust build-up between specialist deep cleans.",
                cta: "Explore recurring cleaning",
              },
              {
                icon: KeyRound,
                title: "End of Tenancy Cleaning",
                href: "/services/move-in-out-cleaning",
                description:
                  "Moving homes? Our End of Tenancy Cleaning includes a Deposit-Back Guarantee and professional blind and window treatment care to ensure you PASS your inspection. We work to the letting agent&rsquo;s inventory and come back free of charge if anything is flagged.",
                cta: "Explore end of tenancy",
              },
              {
                icon: Home,
                title: "Deep House Cleaning",
                href: "/services/deep-house-cleaning",
                description:
                  "If you&rsquo;re putting a house up for sale, a Deep House Cleaning combined with blind and shade restoration creates the WOW factor that attracts buyers and lifts offers. Stale odours and dusty blinds are the single biggest turn-off at viewings &mdash; we fix both.",
                cta: "Explore deep house cleaning",
              },
              {
                icon: Hammer,
                title: "After Builders Clean",
                href: "/services/post-construction-cleaning",
                description:
                  "If you&rsquo;ve recently had construction work, our After Builders Clean removes the fine abrasive dust that settles on every slat and into every pleat. Left untreated, construction dust acts as an abrasive every time you open or close the blind, wearing the finish prematurely.",
                cta: "Explore after builders cleaning",
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
              href="/services/blind-shade-cleaning"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] bg-[var(--brand-light)]/40 hover:bg-[var(--brand-light)]/70 transition-colors px-5 py-3 rounded-full"
            >
              <Layers className="w-4 h-4" />
              Explore the full blind &amp; shade cleaning service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 - Final CTA */}
      {/* H2: Ready for a Blind & Shade Crew Near You? */}
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
              Ready to book your local blind crew?
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
              Ready for a Blind &amp; Shade Crew Near You?
            </h2>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Get a fixed-price blind and shade cleaning quote in 30 seconds. No pushy sales call,
              no waiting 24 hours for a callback. Material-trained technicians, ultrasonic and
              hand-clean methods, free collection and delivery, child &amp; pet-safe products, a
              100% satisfaction guarantee, and a 30-day re-clean promise &mdash; from &pound;15 per
              blind on-site through to &pound;18 per plantation shutter with beeswax polish finish.
              Coverage across 72+ Scottish towns.
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
              Blind &amp; shade cleaning near me &middot; FAQ
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
              Straight answers to the questions our local blind and shade cleaning clients ask most
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

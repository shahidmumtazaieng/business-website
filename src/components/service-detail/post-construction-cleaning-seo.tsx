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
  Home,
  KeyRound,
  Hammer,
  Star,
  Zap,
  UserCheck,
  CalendarCheck,
  SprayCan,
  Wind,
  Brush,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_vd6irgvd6irgvd6i.png", // post-construction HEPA vacuum (matches ServiceDetail heroImage)
  whyCrew:
    "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_vd6irgvd6irgvd6i.png", // uniformed cleaning crew
  checklistLiving:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", // handed-over new build interior
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg", // tack-cloth wipe of new kitchen cabinets
  checklistBathroom:
    "https://sfile.chatglm.cn/images-ppt/b9a3fe6960e9.webp", // sparkling bathroom chrome
  checklistWindows:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", // paint removal from new window glass
  stageDeep:
    "https://sfile.chatglm.cn/images-ppt/a68134acc7e3.jpeg", // crew cleaning home (deep clean)
  stageMoveInOut:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg", // empty flat move-in (tenancy)
  stageSpring:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.28.09%20PM.jpeg", // bright spring-cleaned living room
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg", // map of Scotland
};

// ============================================================
// Section 0 — Full-width hero banner
// Semantic H1: "Professional Post-Construction Cleaning Services in Glasgow & Edinburgh"
// ============================================================

export function PostConstructionSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Post-construction HEPA vacuum cleaning in a Scottish property after building work"
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
            Post-Construction Cleaning · Glasgow · Edinburgh · 30 Scottish towns
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Post-Construction Cleaning Services in Glasgow &amp; Edinburgh
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Consistent, trusted, and meticulous builder-dust removal tailored to your Scottish
            property. Our post-construction protocol uses commercial HEPA H-class vacuums
            (99.995% efficient at 0.3 microns), tack-cloth wiping, and a top-down, room-by-room
            methodology. New builds, extensions, renovations &amp; refits — handed over ready to
            furnish. From £295 with a 7-day re-clean guarantee.
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
              <a href={contactInfo.phoneHref}>
                <Zap className="w-4 h-4" />
                Same-day quote
              </a>
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
              <span className="text-white/70">· 6,200+ reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[var(--gold)]" /> PVG-Checked &amp; £5m Insured
            </div>
            <div className="flex items-center gap-1.5">
              <Wind className="w-4 h-4 text-[var(--gold)]" /> HEPA H-class vacuums
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> 7-day re-clean guarantee
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 — Long-form semantic SEO intro
// Sits right after the hero, before the existing ServiceOverview.
// ============================================================

export function PostConstructionSeoIntro() {
  return (
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
            Professional post-construction cleaning · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Post-Construction Cleaning
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            After builders, tradespeople, or a renovation project, your home is often left coated in
            fine plaster dust, silica particles, and paint overspray that ordinary vacuuming simply
            spreads around. At Maundy Clean, our post-construction cleaning service goes far beyond a
            quick &ldquo;hoover and mop&rdquo; — we use{" "}
            <strong className="font-semibold text-[var(--ink)]">HEPA H-class filtration</strong> (the
            same standard used in asbestos removal), tack-cloth particulate capture, and a strict
            top-down, room-sealed protocol to lift every trace of construction debris from your home.
            In a world where everyone is living busy lives, the thought of removing fine plaster and
            silica dust from every drawer, duct, and light fitting in your limited spare time can be
            overwhelming. Our vetted 2-person HEPA-trained team transforms the necessity of post-build
            cleanup into a seamless, premium experience — built on the Maundy tradition of care,
            meticulous service, and a higher standard of hygiene for the Scottish home.
          </p>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "HEPA filtration", value: "99.995% @ 0.3µm" },
            { label: "Typical duration", value: "1–2 days" },
            { label: "Re-clean rate", value: "2.1% of jobs" },
            { label: "Handover guarantee", value: "7-day re-clean" },
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
  );
}

// ============================================================
// Section 2 — Why Maundy Clean is Scotland's Trusted Choice
// (H2: "Why Homeowners Across Scotland Trust Maundy Clean After Building Work")
// Image+copy split layout
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "Fully Vetted & Uniformed Technicians",
    description:
      "We are a professional company that employs our own staff; we are not an agency. Every post-construction cleaner is fully trained in our HEPA H-class protocol, Disclosure Scotland PVG-checked, £5m public-liability insured, and carries official Maundy Clean identification for your total peace of mind. They arrive in uniform, on time, with a team leader who runs the handover inspection with you.",
  },
  {
    icon: Wind,
    title: "HEPA H-Class Vacuums — The Asbestos Standard",
    description:
      "Unlike standard vacuums that blow fine construction dust back through the exhaust, our commercial HEPA H-class vacuums capture 99.995% of particles down to 0.3 microns — the same standard used for asbestos removal. Plaster dust, cement dust, timber dust, and silica dust are all captured, not redistributed. The difference is immediately visible when sunlight hits the room.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Family Safe",
    description:
      "Your family's health is paramount. We supply all our own professional-grade equipment and use only certified child-safe and pet-safe products where wet-cleaning is required — plant-based degreasers, food-safe sanitisers, and pH-neutral stone cleaners. Tack-cloth particulate capture replaces wet-wiping wherever possible, preventing the dust-to-paste conversion that smears construction dust across surfaces.",
  },
];

export function PostConstructionSeoWhy() {
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
                alt="Maundy Clean post-construction cleaning crew in uniform arriving at a Scottish building site"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    HEPA H-Class · Top-Down · Room-Sealed
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  PVG-checked team, £5m public liability, and a 7-day re-clean guarantee on every
                  post-construction clean we complete.
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
                  <Star className="w-4 h-4 text-[var(--gold-dark)] fill-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Developer repeat</div>
                  <div className="text-xs font-bold text-[var(--ink)]">14+ projects</div>
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
              Why Homeowners Across Scotland Trust Maundy Clean After Building Work
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Maundy Clean is a local, premium cleaning specialist focused on building high-trust
              relationships with our clients across the Central Belt. Every post-construction job is
              delivered by a vetted, uniformed, PAYE-employed crew — not subcontracted out — and is
              built on{" "}
              <em className="text-[var(--ink)] not-italic font-semibold">&ldquo;local, personal,
              and affordable&rdquo;</em> care, alongside a technical protocol that genuinely captures
              construction dust rather than redistributing it around your home.
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
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Third card as full-width strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-7 border border-[var(--border)] flex flex-col md:flex-row items-start gap-5"
        >
          <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
            <Leaf className="w-7 h-7 text-[var(--brand)]" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
              {TRUST_CARDS[2].title}
            </h3>
            <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
              {TRUST_CARDS[2].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 3 — 3-Step "Hassle-Free" Booking Process
// (Semantic H2: "The MaundyClean 3-Step 'Hassle-Free' Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant 30-Second Quote",
    description:
      "Use our online price calculator to receive a simple, fixed-price quote based on your property size and construction type — new build, extension, renovation, or refit. From £295 for a single room, £595 for a typical 3-bed property. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Site Preparation",
    description:
      "We match you with a local 2-person HEPA-trained team who fits your schedule. On arrival, each room is sealed with polythene sheeting over the doorway (taped top and sides, weighted bottom) to prevent dust migrating to cleaned rooms. Furniture and fittings in adjacent rooms covered with dust sheets. We operate a secure key-safe system if you can't be on site.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Spotless Sanctuary",
    description:
      "Walk into a space that looks, smells, and feels genuinely clean — not just &lsquo;builder-cleaned&rsquo;. We hand over with a room-by-room inspection walk-through together: any missed areas re-cleaned on the spot. Backed by our 7-day re-clean guarantee — if you find anything within 7 days, we return free of charge.",
  },
];

export function PostConstructionSeoBooking() {
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
            We have made our booking experience straightforward and helpful, with a 30-second instant
            quote tool and a same-day callback promise. From quote to handover in under a week.
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
              Get an Instant Quote Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 — Detailed What's Included (4 categories)
// (Semantic H2: "Our Comprehensive Post-Construction Cleaning Checklist")
// Image-per-card layout
// ============================================================

const INCLUDED_DETAIL = [
  {
    icon: Home,
    title: "Living Areas & Bedrooms",
    image: IMG.checklistLiving,
    imageAlt: "Handed-over new-build living room in Scotland after Maundy Clean post-construction protocol",
    description:
      "Top-down HEPA vacuum of ceilings, light fittings, walls, windows, frames, sills, doors, and skirtings. Cobweb removal from ceiling edges and light fixtures. Tack-cloth wipe-down of all non-porous surfaces to capture fine particulate without water. Intensive vacuuming of all carpets and final dry-buff of hard floors to reveal the finish.",
    points: [
      "Top-down HEPA H-class vacuum",
      "Tack-cloth wipe of all surfaces",
      "Cobweb removal from ceiling edges",
      "Door frames, handles, light fixtures detailed",
      "Visible skirting boards wiped down",
    ],
  },
  {
    icon: SprayCan,
    title: "Kitchen Deep-Maintenance",
    image: IMG.checklistKitchen,
    imageAlt: "Tack-cloth wipe-down of brand-new kitchen cabinets during a post-construction clean",
    description:
      "Inside every cabinet and drawer vacuumed and tack-wiped — where ordinary wet-wiping turns dust to paste. Deep cleaning and disinfecting of all ceramic items, worktops, sinks, and splashbacks. Cleaning the exterior of your oven, hob, extractor fan, fridge, and freezer. Wiping down the exterior of all cupboard doors and handles. Adhesive residue removed with the correct solvent for each surface.",
    points: [
      "Inside every cabinet vacuumed & tack-wiped",
      "Worktops, sinks, splashbacks sanitised",
      "Appliance exteriors cleaned (oven, hob, fridge)",
      "Cupboard doors & handles wiped",
      "Adhesive residue removed with correct solvent",
    ],
  },
  {
    icon: Sparkles,
    title: "Bathroom Hygiene",
    image: IMG.checklistBathroom,
    imageAlt: "Sparkling bathroom chrome and tiles after Maundy Clean post-construction cleaning",
    description:
      "Disinfecting and cleaning all ceramic items, including toilets and sinks, and buffing chrome fixtures to a high shine. Intensive scrubbing of shower doors and tiles to remove limescale, grout haze, and silicone overspray — maintaining a &lsquo;Sparkle Sparkle&rsquo; finish. Sink, taps, and waste detail-cleaned. Mirror edges detailed — adhesive and silicone residue common here.",
    points: [
      "Ceramic items disinfected & chrome buffed",
      "Shower doors scrubbed streak-free",
      "Silicone overspray removed from glass",
      "Grout haze removed from new tile",
      "Mirror edges detailed for adhesive residue",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Window, Frame & Floor Restoration",
    image: IMG.checklistWindows,
    imageAlt: "Paint removal from new window glass with a razor scraper during post-construction cleaning",
    description:
      "Windows cleaned inside and out with a squeegee and pure-water system (no chemical haze). Frames detailed — paint spots, plaster, and adhesive removed from every corner. Sills vacuumed and wet-wiped. Paint removed from glass with a razor scraper at 30° angle (won't scratch). Floors: hardwood tack-wiped and dry-buffed; tile & stone wet-mopped with pH-neutral cleaner; new carpets HEPA-vacuumed in two directions.",
    points: [
      "Paint removed from glass at 30° angle",
      "Frames detailed — plaster & adhesive removed",
      "Sills vacuumed and wet-wiped",
      "Hardwood tack-wiped and dry-buffed",
      "New carpets HEPA-vacuumed in two directions",
    ],
  },
];

export function PostConstructionSeoIncludedDetail() {
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
            What&apos;s included · the detail
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Post-Construction Cleaning Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our post-construction cleaning ensures your property is handed over genuinely clean, not
            just &ldquo;builder-cleaned.&rdquo; We follow a rigorous, agency-approved checklist to
            ensure no detail is overlooked — including the technical extras that regular cleaners
            often ignore. Every item below is included as standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INCLUDED_DETAIL.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/30 transition-all flex flex-col"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] bg-[var(--brand-dark)] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-lg text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-auto">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-[var(--ink)]/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
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
// Section 5 — Semantic Interlinking: Specialist Solutions for Every Stage
// (Semantic H2: "Semantic Interlinking: Specialist Solutions for Every Stage")
// Image-topped cards with internal links
// ============================================================

const STAGE_SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Deep Cleaning Service",
    href: "/services/deep-house-cleaning",
    image: IMG.stageDeep,
    imageAlt: "Maundy Clean crew performing a comprehensive deep clean of a Scottish home",
    description:
      "Starting your cycle? If your property hasn't had a professional clean in 6 months, we recommend an initial Deep Cleaning Service to clean &lsquo;behind and underneath&rsquo; furniture before your regular schedule begins. The perfect partner after a post-construction clean to ensure the property is genuinely move-in ready — not just dust-free but deep-cleaned top to bottom.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: KeyRound,
    title: "End of Tenancy · Deposit-Back Guarantee",
    href: "/services/move-in-out-cleaning",
    image: IMG.stageMoveInOut,
    imageAlt: "Bright Scottish tenement flat prepared for tenant handover by Maundy Clean",
    description:
      "Moving homes? Our End of Tenancy Cleaning includes a Deposit-Back Guarantee, ensuring you pass your final inspection with flying colours. We work to the letting agent's inventory, not ours — and we'll come back free of charge if the agent flags anything. Book alongside post-construction cleaning for new-build move-ins: dust removed, then full tenancy-standard reset.",
    cta: "Book deposit-back end of tenancy clean",
  },
  {
    icon: Hammer,
    title: "One-Off Spring Clean",
    href: "/services/spring-cleaning",
    image: IMG.stageSpring,
    imageAlt: "Bright, freshly spring-cleaned Scottish living room after a seasonal reset",
    description:
      "Book a One-Off Spring Clean for a comprehensive top-to-bottom refresh without moving heavy furniture. Many clients schedule a spring clean 6–12 months after their post-construction clean to reset the property once the last of the construction dust has fully settled. Uses our 64-point checklist per room and includes a photo report of any issues found.",
    cta: "Book a one-off spring clean",
  },
];

export function PostConstructionSeoLeaseStages() {
  return (
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
            Beyond post-construction · specialist support
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Semantic Interlinking: Specialist Solutions for Every Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            While our post-construction cleaning hands your property over genuinely clean, Maundy
            Clean offers specialized &ldquo;reset&rdquo; services for major property milestones. The
            same trusted, PVG-checked team can step up when life changes — from a deep clean before
            moving in to a seasonal refresh months later.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAGE_SOLUTIONS.map((sol, i) => {
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
                    <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
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
  );
}

// ============================================================
// Section 6 — "Near Me" Location Internal Links
// (Semantic H2: "Post-Construction Cleaning Near Me in Scotland")
// Split layout with map image + location grid
// ============================================================

const NEAR_ME_LOCATIONS: { city: string; slug: string }[] = [
  { city: "Glasgow", slug: "glasgow" },
  { city: "Edinburgh", slug: "edinburgh" },
  { city: "Aberdeen", slug: "aberdeen" },
  { city: "Dundee", slug: "dundee" },
  { city: "Stirling", slug: "stirling" },
  { city: "Perth", slug: "perth" },
  { city: "Falkirk", slug: "falkirk" },
  { city: "Inverness", slug: "inverness" },
  { city: "Ayr", slug: "ayr" },
  { city: "Kilmarnock", slug: "kilmarnock" },
  { city: "Livingston", slug: "livingston" },
  { city: "East Kilbride", slug: "east-kilbride" },
  { city: "Paisley", slug: "paisley" },
  { city: "Hamilton", slug: "hamilton" },
  { city: "Motherwell", slug: "motherwell" },
  { city: "Dunfermline", slug: "dunfermline" },
  { city: "Kirkcaldy", slug: "kirkcaldy" },
  { city: "Musselburgh", slug: "musselburgh" },
  { city: "Dalkeith", slug: "dalkeith" },
  { city: "Bathgate", slug: "bathgate" },
  { city: "Cumbernauld", slug: "cumbernauld" },
  { city: "Coatbridge", slug: "coatbridge" },
  { city: "St Andrews", slug: "st-andrews" },
  { city: "Elgin", slug: "elgin" },
  { city: "Peterhead", slug: "peterhead" },
  { city: "Stonehaven", slug: "stonehaven" },
  { city: "Inverurie", slug: "inverurie" },
  { city: "Oban", slug: "oban" },
  { city: "Fort William", slug: "fort-william" },
  { city: "Aviemore", slug: "aviemore" },
  { city: "Dumfries", slug: "dumfries" },
  { city: "Stranraer", slug: "stranraer" },
  { city: "Wick", slug: "wick" },
  { city: "Thurso", slug: "thurso" },
  { city: "Lerwick", slug: "lerwick" },
  { city: "Kirkwall", slug: "kirkwall" },
];

export function PostConstructionSeoNearMe() {
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
              Local crews across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Post-Construction Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;post-construction cleaning near me&rdquo; in Scotland? Maundy
              Clean covers 72+ towns and cities across the Central Belt, Highlands, Borders, and
              Islands. Same HEPA H-class protocol, same top-down room-sealed methodology, same
              7-day re-clean guarantee — wherever your build is. Find your local crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean post-construction cleaning coverage areas"
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
                  Same HEPA H-class protocol, same PVG-checked crews, same 7-day re-clean guarantee
                  — from Glasgow to Lerwick.
                </p>
              </div>
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
                Find your local post-build crew
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
                    href={`/locations/${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> post-build</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don&apos;t see your town? We add new postcodes every month.</span>
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
            Our local post-construction crews operate across Glasgow&rsquo;s West End,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s granite suburbs, Dundee&rsquo;s waterfront
            developments, and the Highlands &mdash; from Inverness to Thurso, Fort William to
            Lerwick. Whether you&rsquo;re searching for post-construction cleaning in Glasgow,
            builder dust removal in Edinburgh, new-build handover cleaning in Aberdeen, renovation
            cleaning anywhere in between, or developer cleaning across a multi-unit site, Maundy
            Clean assigns a PVG-checked, PAYE-employed team equipped with commercial HEPA H-class
            vacuums and the same top-down, room-sealed protocol — wherever in Scotland your build is.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — Final CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Hand Over a Genuinely Clean Property?")
// ============================================================

export function PostConstructionSeoFinalCta() {
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
            Ready to hand over?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Hand Over a Genuinely Clean Property?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price post-construction quote in 30 seconds. No pushy sales call, no waiting
            24 hours for a callback. PVG-checked crews of 2, commercial HEPA H-class vacuums,
            tack-cloth particulate capture, top-down room-sealed protocol, and a 7-day re-clean
            guarantee — from £295.
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
                <Zap className="w-4 h-4" />
                {contactInfo.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — SEO FAQ (Schema-ready Q&A)
// (Semantic H2: "Frequently Asked Questions")
// ============================================================

const SEO_FAQS = [
  {
    q: "Are windows included in a post-construction clean?",
    a: "Yes — and they need specialist attention after building work. We clean the inside and outside of every window with a squeegee and pure-water system (no chemical haze), detail every frame to remove paint spots and plaster, vacuum and wet-wipe every sill, and vacuum window tracks (the channel the window slides in) with a crevice tool — a magnet for construction dust. Paint spots on glass are removed with a razor scraper at 30° angle, which won't scratch the glass.",
  },
  {
    q: "Do I need to provide cleaning supplies or equipment?",
    a: "No. MaundyClean supplies all of our own professional-grade equipment — including commercial HEPA H-class vacuums (99.995% efficient at 0.3 microns), tack-cloths, razor scrapers, pure-water window system, and eco-friendly solvents. These are already included in your fixed-price quote. You don't need to supply anything; we bring everything required to capture construction dust properly.",
  },
  {
    q: "What happens if I'm not satisfied with the post-construction clean?",
    a: "We take pride in our standards. Before we leave site, we walk through every room with you in a handover inspection — any missed areas are re-cleaned on the spot, no return visit, no argument. If you are dissatisfied with any area of your clean, contact us within 7 days and we will provide a free re-clean to make it right. We also provide a written handover checklist signed by both parties confirming each room has been inspected.",
  },
  {
    q: "When should post-construction cleaning be scheduled?",
    a: "5–7 days after the final fixings (sockets, light switches, taps). This allows the construction dust to settle completely — scheduling earlier means more dust will appear after we clean. For new builds, we come in just before furniture arrives. For extensions and refits, we clean the affected rooms plus a 5-metre buffer zone to capture dust tracked into adjacent areas. We coordinate with your builder — they'll know when the site is ready.",
  },
  {
    q: "Do you handle hazardous construction waste?",
    a: "No. Hazardous waste — asbestos, lead paint, treated timber offcuts, chemical solvent containers — requires a licensed hazardous waste contractor. We handle the cleaning of non-hazardous construction dust, plaster, cement, paint, and adhesive residue. If hazardous materials are present, we will flag them on the site survey and recommend a specialist contractor before scheduling our clean. Safety first, always.",
  },
];

export function PostConstructionSeoFaq() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Post-construction · frequently asked
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know before booking a Maundy Clean post-construction clean in
            Scotland. Still unsure? Call us on {contactInfo.phone} — we answer every enquiry
            personally.
          </p>
        </motion.div>

        <div className="space-y-4">
          {SEO_FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 lg:p-7 border border-[var(--border)] shadow-sm hover:shadow-brand hover:border-[var(--brand)]/20 transition-all"
            >
              <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight">
                {faq.q}
              </h3>
              <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-light)]/40"
              asChild
            >
              <Link href="#whats-included">View Our Post-Construction Checklist</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Leaf,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Wind,
  SprayCan,
  Crown,
  Users,
  Home,
  KeyRound,
  Hammer,
  Zap,
  UserCheck,
  CalendarCheck,
  Award,
  Gem,
  Building2,
  Brush,
  Layers,
  Palette,
  Wrench,
  Trees,
  Footprints,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%208.04.13%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%208.04.45%20PM.jpeg",
  checklistEngineered:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistLaminate:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistSafety:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
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

// ============================================================
// Section 0 - Full-width hero banner
// Semantic H1: "Professional Hardwood Floor Care & Recurring Home Cleaning Scotland"
// ============================================================

export function HardwoodFloorSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean hardwood floor technician restoring an oak floor with a low-moisture rotary machine in a Scottish tenement"
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
            Hardwood &amp; Laminate Floor Care · Glasgow · Edinburgh · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Hardwood Floor Care &amp; Recurring Home Cleaning Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Meticulous Maintenance, Technical Surface Restoration, and the Maundy Tradition of
            Excellence. Your hardwood floors are the soul of your home, defining its character and
            value. In the variable Scottish climate, premium surfaces like Engineered Wood, Solid
            Timber, and Laminate require more than a standard mop to maintain their luster and
            structural integrity. At Maundy Clean, we provide a specialist hardwood floor care
            service that integrates seamlessly into your{" "}
            <Link
              href="/services/recurring-home-cleaning"
              className="font-semibold text-[var(--gold)] hover:text-white underline underline-offset-4"
            >
              recurring home cleaning schedule
            </Link>
            , ensuring your floors remain &ldquo;showcase&rdquo; ready while preventing the need for
            costly resurfacing or replacements.
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
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Regular Cleaning Checklist
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
              <Shield className="w-4 h-4 text-[var(--gold)]" /> Fully Insured &amp; Vetted
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe Products
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Same Crew Every Visit
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
// ============================================================

export function HardwoodFloorSeoIntro() {
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
            Specialist hardwood &amp; laminate care &middot; Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Timber Surface Care
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Built on the <strong className="font-semibold text-[var(--ink)]">Maundy tradition of
            service and care</strong>, we provide a premium alternative to impersonal national
            agencies. Whether you reside in a traditional Edinburgh townhouse with original pine
            boards or a modern Glasgow apartment with engineered oak, our service is built on trust,
            consistency, and a deep understanding of floor technology. Every visit blends ultra-low
            moisture cleaning, specialist material knowledge, and a 100% satisfaction guarantee
            &mdash; treating your floors with the meticulous care they deserve.
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
            { label: "Floor types covered", value: "3+" },
            { label: "Ultra-low moisture", value: "ULM Tech" },
            { label: "Refinish guarantee", value: "5-10 yrs" },
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
  );
}

// ============================================================
// Section 2 - Why MaundyClean is the Authority in Scottish Floor Maintenance
// (Semantic H2: "Why Maundy Clean is the Authority in Scottish Floor Maintenance")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "The Same Trusted Professional Every Visit",
    description:
      "Reliability is our anchor. Unlike gig-economy apps, we ensure the same vetted professional visits your home for every scheduled session. This allows your cleaner to build a deep understanding of your floor&rsquo;s specific finishes and high-traffic &ldquo;risky&rdquo; areas &mdash; the spots where grit collects, where UV fades the finish, where the dog runs in from the garden. Continuity is what turns routine maintenance into a real protection plan.",
  },
  {
    icon: Trees,
    title: "Specialist Material Knowledge",
    description:
      "We understand that Engineered Wood (made of multiple layers with a hardwood veneer) and Laminate (pressed wood board with a resin wear layer) have vastly different requirements. Our technicians are trained to identify these surfaces and apply the correct technical protocol &mdash; pH-neutral cleaners for lacquer, oil-replenishing products for oiled finishes, dry-only methods for laminate joins. Wrong chemistry on wrong material equals permanent damage.",
  },
  {
    icon: Droplets,
    title: "Ultra-Low Moisture (ULM) Technology",
    description:
      "Hardwood and laminate are susceptible to damage through over-wetting. We utilize low-moisture and low-abrasion equipment specifically designed for timber, removing dirt and grime without the risk of warping, swelling, or cupping. Steam mops and wet mops force water into the joints &mdash; our ULM approach uses a barely-damp microfibre system that lifts soil while protecting the structural integrity of the floor.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Family Safe",
    description:
      "Your health is paramount. We supply all our own professional-grade, non-toxic cleaning solutions that are 100% safe for children and pets while protecting the natural aesthetics of your timber. No harsh solvents, no optical brighteners, no perfume. The floor is safe for crawling babies and pets once dry &mdash; just a clean, natural wood scent and a finish that&rsquo;s been cared for, not stripped.",
  },
];

export function HardwoodFloorSeoWhy() {
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
                alt="Maundy Clean hardwood floor technician &mdash; uniformed, vetted, and material-trained"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Trusted Presence in Your Home
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, uniformed, and trained in timber-specific chemistry.
                  Same crew every visit &mdash; never a rotating cast of strangers.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Refinish guarantee</div>
                  <div className="text-xs font-bold text-[var(--ink)]">5-10 yrs</div>
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
              Why Maundy Clean is the Authority in Scottish Floor Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While most domestic cleaners use generic chemicals that can damage wood fibers or leave
              dark, dull buildups, Maundy Clean focuses on the topic of total surface health. We
              address the technical requirements of high-value flooring to extend its durability and
              enhance its appearance &mdash; combining specialist material knowledge, ultra-low
              moisture technology, eco-friendly products, and the same trusted professional every
              visit.
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

        {/* Third + fourth cards as a 2-column strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRUST_CARDS.slice(2, 4).map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
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
                    {card.title}
                  </h3>
                  <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                    {card.description}
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
// Section 3 - Our Comprehensive Hard Floor Technical Checklist
// (Semantic H2: "Our Comprehensive Hard Floor Technical Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Engineered Wood & Solid Timber Care
//   2. Laminate Floor Preservation
//   3. Safety & Hygiene Standards
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Trees,
    image: IMG.checklistEngineered,
    imageAlt: "Engineered oak floor being deep cleaned with a low-moisture rotary machine in a Scottish living room",
    title: "Engineered Wood & Solid Timber Care",
    description:
      "The technical core of every visit. Solid timber and engineered wood are natural materials that respond to chemistry, moisture, and mechanical action differently than synthetic surfaces. We use a low-moisture, low-abrasion protocol that lifts embedded city-centre dust without swelling the joints, dulling the lacquer, or stripping the oil.",
    points: [
      {
        icon: Droplets,
        title: "Low Moisture Extraction",
        text: "Deep cleaning of the grain using specialized extraction equipment to remove embedded city-centre dust. A barely-damp rotary head lifts soil from the micro-pores of the finish while a HEPA vacuum captures the suspended particulate &mdash; no pooling water, no swelling, no cupping.",
      },
      {
        icon: Sparkles,
        title: "Polishing & Buffing",
        text: "Use of professional machinery to maintain your choice of finish &mdash; from natural oils and UV waxes to water-based acrylic resins. A periodic buff reactivates the existing topcoat, removes micro-scratches from traffic areas, and restores the depth of colour without the cost of a full recoat.",
      },
      {
        icon: Brush,
        title: "Surface Restoration",
        text: "Meticulous wiping of visible skirting boards, door frames, and surrounding fixtures as part of the standard service. The most common complaint with cheaper floor cleaners is that they leave dirty edges &mdash; we hand-detail every perimeter surface so the room feels genuinely reset, not just the centre of the floor.",
      },
    ],
  },
  {
    icon: Layers,
    image: IMG.checklistLaminate,
    imageAlt: "Laminate floor being detail-cleaned along edges and corners in a Scottish tenement flat",
    title: "Laminate Floor Preservation",
    description:
      "Laminate is a pressed-wood board with a photographic wear layer and a resin topcoat &mdash; it cannot be sanded, it cannot be refinished, and it is uniquely vulnerable to moisture at the joins. Our laminate protocol is dry-first, low-moisture second, and never wet. The goal is to extend the life of the wear layer and protect the click-lock joins.",
    points: [
      {
        icon: Shield,
        title: "Wear-Layer Protection",
        text: "Gentle cleaning that preserves the protective resin layer without leaving sticky spots or tripping hazards. We use a pH-neutral laminate-safe cleaner applied with a barely-damp microfibre pad &mdash; never a spray mop, never a steam mop, never a soaking wet string mop. The resin layer is thin and irreplaceable.",
      },
      {
        icon: CheckCircle2,
        title: "Detail Cleaning",
        text: "Reaching into corners and edges where dirt typically accumulates in tenement or bungalow layouts. The click-lock joins are the weakest point in any laminate floor &mdash; grit in the join causes edge swelling, which causes irreversible lifting. We vacuum the joins first, then detail-clean with a soft brush attachment.",
      },
    ],
  },
  {
    icon: Shield,
    image: IMG.checklistSafety,
    imageAlt: "Antiviral sanitation being applied to high-traffic hardwood floor area in a Scottish family home",
    title: "Safety & Hygiene Standards",
    description:
      "Floor safety is not just about appearance &mdash; it is about preventing accidents and protecting the health of the household. Sticky residues, food spills, and pet accidents create both slip hazards and bacterial growth sites. Our safety pass treats high-traffic areas with certified antiviral sanitation as standard, not as an add-on.",
    points: [
      {
        icon: Footprints,
        title: "Hazard Removal",
        text: "Eliminating sticky spots and spills that can cause accidents, ensuring a safer environment for your family. We treat kitchen transitions, hallway traffic paths, and the area around high chairs &mdash; the three spots where food and drink spills are most likely to create a slip risk for children, pets, and older residents.",
      },
      {
        icon: Flame,
        title: "Antiviral Sanitation",
        text: "Treating high-traffic floor areas with certified cleaners to maintain a healthy living environment. Our food-safe, child-safe, pet-safe sanitiser is applied as a fine mist and buffed off &mdash; it kills 99.9% of common household viruses and bacteria without leaving residue, perfume, or sticky film on the timber.",
      },
    ],
  },
];

export function HardwoodFloorSeoChecklist() {
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
            Beyond the basic mop
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Hard Floor Technical Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring home cleaning for hardwood floors follows a rigorous, agency-approved
            checklist designed to maintain a &ldquo;speechlessly spotless&rdquo; finish every time.
            Below is the scope we deliver as standard on every visit &mdash; from the technical core
            of low-moisture extraction, through to wear-layer preservation for laminate, to the
            antiviral safety pass that protects your household.
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
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {item.points.map((point) => {
                      const PointIcon = point.icon;
                      return (
                        <li
                          key={point.title}
                          className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85"
                        >
                          <PointIcon className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                          <span>
                            <strong className="font-semibold text-[var(--ink)]">{point.title}</strong>
                            &mdash; {point.text}
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
// (Semantic H3: "The MaundyClean 3-Step 'Hassle-Free' Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant 30-Second Quote",
    description:
      "Use our online price calculator to receive a simple, fixed-price quote based on your room dimensions and floor type &mdash; solid timber, engineered wood, or laminate. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months, with no contracts tying you in and no on-the-day upsells for sealer or polish.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We match you with a local specialist who fits your schedule, offering flexible appointments across five days a week. Your allocated technician arrives with all professional-grade ULM equipment and eco-friendly timber solutions included &mdash; and the same technician returns for every scheduled session, building real knowledge of your floor&rsquo;s finishes and traffic patterns.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "A Consistent 5-Star Result",
    description:
      "Enjoy floors that look, feel, and smell fresh, backed by our Maundy Clean 100% satisfaction guarantee. We finish every visit with a wear-pattern inspection, a care card update, and a re-clean reminder for the next quarter. From &pound;18/hr for maintenance cleaning, &pound;12/sqm for deep clean or screen-and-recoat, &pound;35/sqm for full sand and refinish.",
  },
];

export function HardwoodFloorSeoBooking() {
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
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            The 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be straightforward and helpful, beating the
            slow response times common in the Scottish market. From quote to first clean in under 48
            hours &mdash; no friction, no waiting, no surprises.
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
              Get My 30-Second Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - A Solution for Every Stage
// (Semantic H2: "A Solution for Every Stage")
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: CalendarCheck,
    title: "Maintaining the Standard &middot; Recurring Home Cleaning",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt: "Scottish home receiving recurring interior cleaning alongside hardwood floor maintenance",
    description:
      "After your hardwood floors are professionally restored, keep them pristine with a Recurring Home Cleaning plan &mdash; weekly or fortnightly. Our same trusted technician maintains your timber with pH-neutral, wood-safe products as part of every visit, catching wear patterns early and extending the life of the finish between deep cleans.",
    cta: "Explore recurring cleaning",
  },
  {
    icon: Home,
    title: "The Move-In Reset &middot; Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Scottish home receiving an intensive deep clean alongside hardwood floor restoration for sale prep",
    description:
      "Preparing a home for sale? Professional floor care creates the &ldquo;aspirational dream&rdquo; for buyers. Combine your hardwood restoration with our Deep House Cleaning for the ultimate WOW factor &mdash; clean floors, spotless surfaces, fresh scent, and a viewing-ready property from the moment the agent opens the door.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty Scottish flat being deep cleaned with hardwood floor care included for tenancy handover",
    description:
      "Our End of Tenancy Cleaning includes technical floor care to ensure you fulfill your lease requirements and get your deposit back in full. We work to the letting agent&rsquo;s inventory, restore the hardwood to its original appearance, and come back free of charge if anything is flagged on the inspection.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from a freshly laid hardwood floor in Scotland",
    description:
      "If you have recently had construction work, our After Builders Clean is essential to remove abrasive builders&rsquo; dust from your hardwood surfaces. Fine dust left on a timber floor acts like sandpaper under foot traffic &mdash; we vacuum, damp-wipe, and protect the finish before the dust has a chance to cause permanent scratches.",
    cta: "Explore after builders cleaning",
  },
];

export function HardwoodFloorSeoInterlinking() {
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
            Beyond the reset &middot; property milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            A Solution for Every Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            While our recurring home cleaning provides daily maintenance, we offer specialized
            &ldquo;reset&rdquo; services for major property milestones &mdash; from intensive
            restoration for floors beyond the cleaning stage, through to the move-in reset, end of
            tenancy handover, and the post-builders dust clear-out. The same trusted crew can step up
            whenever life changes.
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
// Section 6 - "Near Me" Location Internal Links
// (Semantic H2: "Hardwood Floor Care Services Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function HardwoodFloorSeoNearMe() {
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
              Local hardwood &amp; laminate care across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Hardwood Floor Care Services Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;hardwood floor cleaning near me&rdquo; or &ldquo;wood floor
              restoration near me&rdquo; in Scotland? Maundy Clean covers 72+ towns and cities
              across the Central Belt, Highlands, Borders, and Islands. Same material-trained
              standard, same ultra-low moisture technology, same dedicated technician &mdash;
              wherever your property happens to be. Find your local hardwood floor care specialist
              below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean hardwood floor care service coverage areas"
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
                Find your local hardwood crew
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
                    href={`/services/hardwood-floor-care-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> floor care</span>
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
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  href="/services/hardwood-floor-care-near-me"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4" />
                  Browse the near-me directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  View all 72 Scottish locations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
            Our local hardwood and laminate care crews operate across Glasgow&rsquo;s West End,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s granite-built suburbs, Dundee&rsquo;s city
            centre, and the Highlands &mdash; from Inverness to Thurso, Fort William to Lerwick.
            Whether you&rsquo;re searching for engineered oak cleaning in Glasgow, original pine
            board restoration in Edinburgh, herringbone parquet sanding in Aberdeen, or laminate
            preservation anywhere in between, Maundy Clean assigns a vetted, PAYE-employed
            technician that stays with you for the long run. Same crew, same standard, same locked-in
            rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Book Your Hardwood Floor Care?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function HardwoodFloorSeoFinalCta() {
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
            Ready to book your hardwood floor care?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Book Your Hardwood Floor Care?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price hardwood floor care quote in 30 seconds. No pushy sales call, no
            waiting 24 hours for a callback. Material-trained technicians, ultra-low moisture
            technology, child &amp; pet-safe products, and a 100% satisfaction guarantee &mdash; from
            &pound;18/hr for maintenance, &pound;35/sqm for a full sand and refinish with a 5-10 year
            guarantee.
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
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Regular Cleaning Checklist
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
// 6 Q&As - 3 from the user brief (own equipment, how often, insured)
// + 3 hardwood-specific additions (sanding engineered wood, dust-free, finish choice)
// ============================================================

const SEO_FAQS = [
  {
    q: "Do you provide your own equipment?",
    a: "Yes. Maundy Clean supplies all professional-grade ULM equipment and eco-friendly timber solutions, which are included in your competitive quote. Every technician arrives with a soft-brush HEPA vacuum, a low-moisture rotary head, microfibre mop system, pH-neutral wood-safe cleaner, and &mdash; for refinishing work &mdash; L&auml;gler drum sanders, Bona edge sanders, and Festool dust extractors. You don&rsquo;t need to provide anything except access to the property and a tap for clean water.",
  },
  {
    q: "How often should hardwood floors be professionally cleaned?",
    a: "For residential properties, we recommend a regular cleaning schedule (weekly or fortnightly) to prevent abrasive dust from scratching the surface finish. The fine grit that lands on a timber floor every day acts like sandpaper under foot traffic &mdash; left for a month, it dulls the finish in traffic lanes and creates visible wear paths. A professional maintenance clean every quarter, plus a screen-and-recoat every 3-5 years, extends the life of the floor by a decade or more versus mop-only maintenance.",
  },
  {
    q: "Are your cleaners insured?",
    a: "Absolutely. Maundy Clean is a fully insured professional cleaning company with years of experience serving Glasgow, Edinburgh, Aberdeen, and the Central Belt. We hold &pound;5m public liability cover, every technician is Disclosure Scotland PVG-checked, and all staff are PAYE-employed &mdash; we never use subcontractors or gig-economy labour. The same standard applies whether you&rsquo;re a one-off client or a recurring customer: vetted, uniformed, and accountable to the Maundy Clean name.",
  },
  {
    q: "Can you sand engineered wood floors?",
    a: "It depends on the veneer thickness. Engineered wood is a real wood veneer (typically 4-6mm) over a plywood base, and it can be sanded 2-3 times in its life &mdash; removing 1-1.5mm each time. We assess the veneer thickness before recommending any sanding; if it has already been sanded twice or is less than 2mm thick, we recommend screening and recoating instead (which removes only the finish, not the wood). If you have the original installation documentation, please share it when booking &mdash; the veneer thickness will be specified there.",
  },
  {
    q: "How dusty will the sanding be?",
    a: "With our equipment (L&auml;gler Hummel drum sander, Bona edge sander, Festool CT 36/48 dust extractors with HEPA filtration), sanding is virtually dust-free. You can be in the next room without noticing. We still seal adjacent rooms with dust sheeting as a belt-and-braces measure and clean up thoroughly at the end of each day, but the dust extraction means your soft furnishings, curtains, and electronics are protected. Cheap sanding companies without proper dust extraction are very dusty &mdash; we are not those companies.",
  },
  {
    q: "What finish should I choose &mdash; lacquer, oil, or wax?",
    a: "It depends on your priorities. Lacquer (Bona Traffic HD, Junckers) is the most durable &mdash; 7-10 years of wear, low maintenance, but harder to spot-repair. Oil (Osmo Polyx-Oil, WOCA) is more natural-feeling, easier to spot-repair, but needs reapplication every 2-3 years. Wax is the most traditional &mdash; beautiful patina but high maintenance (annual rewaxing). For family homes with dogs and children, we usually recommend lacquer. For aesthetic clients who want the natural wood feel, oil. We&rsquo;ll discuss the trade-offs at the free assessment.",
  },
];

export function HardwoodFloorSeoFaq() {
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
            Hardwood floor care &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our hardwood floor care clients ask most often.
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
              className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-light)]/40"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Regular Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

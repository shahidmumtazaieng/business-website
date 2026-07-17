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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/3a42ddb8ccec.jpg", // wide panoramic clean flat
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/0ba2e6837712.jpg", // cleaning crew uniform
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/8fce1b536378.jpg", // eco-spray kitchen
  checklistBathroom:
    "https://sfile.chatglm.cn/images-ppt/b9a3fe6960e9.webp", // sparkling bathroom chrome
  checklistLiving:
    "https://sfile.chatglm.cn/images-ppt/8c109fd7dbba.jpg", // spotless living room sunlight
  checklistWindows:
    "https://sfile.chatglm.cn/images-ppt/0ae5e527798e.jpg", // squeegee window cleaning
  howItWorks:
    "https://sfile.chatglm.cn/images-ppt/e74fc796b9d5.jpg", // cleaner wiping counter
  interlinkDeep:
    "https://sfile.chatglm.cn/images-ppt/a68134acc7e3.jpeg", // crew cleaning home
  interlinkTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg", // empty flat move-in
  interlinkBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg", // post-builders cleanup
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg", // map of Scotland
  groutSteam:
    "https://sfile.chatglm.cn/images-ppt/58c24e1cda0f.jpg", // grout steam cleaning
  ovenDeep:
    "https://sfile.chatglm.cn/images-ppt/410267f9661b.jpg", // oven deep cleaning
};

// ============================================================
// Section 0 — Full-width hero banner (sits ABOVE the standard
// ServiceHero or as the lead banner on the page)
// Semantic H1: "Professional Deep House Cleaning Services in Glasgow & Edinburgh"
// ============================================================

export function DeepSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Spotless living room after a Maundy Clean deep clean in Scotland"
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
            Deep House Cleaning · Glasgow · Edinburgh · 30 Scottish towns
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Deep House Cleaning Services in Glasgow &amp; Edinburgh
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Experience the Maundy Clean Standard: consistent, trusted, and thoroughly deep. We
            don\'t just wipe surfaces — we move furniture, steam grout, degrease appliances
            inside and out, and reset the zones regular cleaners skip. From £179, with PVG-checked
            crews and a 100% re-clean guarantee.
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
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Non-caustic &amp; eco-labelled
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> 100% re-clean guarantee
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 — Long-form semantic SEO intro (sits between hero
// and ServiceOverview). Sets up topical authority.
// Semantic H2: "The Maundy Clean Standard for Deep House Cleaning"
// ============================================================

export function DeepSeoIntro() {
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
            Professional deep cleaning · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Deep House Cleaning
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            A true deep clean goes far beyond surface-level &ldquo;housekeeping&rdquo; — it reaches
            the grease behind the oven, the limescale inside the shower head, the dust on top of the
            kitchen units, and the allergens trapped in your soft furnishings. At Maundy Clean, our
            deep house cleaning service is built on{" "}
            <strong className="font-semibold text-[var(--ink)]">technical thoroughness</strong> and
            consistent local trust, with an uncomplicated and straightforward approach that respects
            your time. We understand that your home is your sanctuary — which is why our deep clean
            service is built on the Maundy tradition of care, meticulous service, and a premium
            standard at a fair price.
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
            { label: "Avg deep clean duration", value: "5–8 hrs" },
            { label: "Crew size", value: "3–4 pros" },
            { label: "Before/after photos", value: "Every zone" },
            { label: "Re-clean guarantee", value: "100% free" },
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
// Section 2 — Why Our Deep Housekeeping Outperforms the Rest
// (Semantic H2: "Why Our Deep Housekeeping Outperforms the Rest")
// Image-supported card layout
// ============================================================

const WHY_CARDS = [
  {
    icon: Users,
    title: "Specialist Deep-Clean Crews",
    description:
      "Trust and understanding are the foundations of a great deep clean. Our deep-clean teams are not generalists pulled off a roster — they're trained specialists who carry Disclosure Scotland PVG membership, £5m public liability cover, and arrive in professional Maundy Clean uniforms with photo I.D. The same crew lead stays with your booking from walk-through to completion.",
  },
  {
    icon: Shield,
    title: "Fully Vetted & Uniformed Professionals",
    description:
      "We do not use gig-economy cleaners or self-employed contractors. Every member of our deep-clean team is a PAYE employee on a full Scottish employment contract, background-checked, insured, and trained on specialist equipment — steam cleaners, rotary brushes, HEPA upholstery vacuums, and a non-caustic dip tank for oven racks. No contractor grey areas, ever.",
  },
  {
    icon: Leaf,
    title: "Non-Caustic, Child & Pet Safe Products",
    description:
      "Your family's health is paramount. We supply all our own equipment and use only certified non-caustic, EU Ecolabel and DEFRA-approved low-VOC products that are safe for children, pets, sensitive airways, and septic tanks. Hospital-grade alternatives are available on request for post-illness or pre-sale deep cleans.",
  },
];

export function DeepSeoWhy() {
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
                alt="Maundy Clean deep-clean crew in uniform arriving at a Scottish home"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    PVG-Checked Deep-Clean Specialists
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  PAYE-employed, uniformed, and trained on steam cleaners, rotary brushes, and
                  non-caustic dip tanks — not gig workers.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Crew tenure</div>
                  <div className="text-xs font-bold text-[var(--ink)]">4.2 yrs avg</div>
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
              Why Maundy Clean is Scotland\'s Trusted Choice for Deep Cleaning
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Most cleaning companies focus on the visible surfaces — we focus on{" "}
              <strong className="font-semibold text-[var(--ink)]">total home hygiene</strong>, from
              the extractor hood filter to the skirting board gap. Our deep clean service is designed
              to bridge the gap between a standard tidy-up and the kind of intensive, top-to-bottom
              reset that genuinely transforms a property. We bring the kit, the chemistry, and the
              crew that regular cleaners don\'t carry.
            </p>

            <div className="space-y-3">
              {WHY_CARDS.slice(0, 2).map((card) => {
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
              {WHY_CARDS[2].title}
            </h3>
            <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
              {WHY_CARDS[2].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 3 — The Deep Cleaning Checklist: Standard Excellence
// (Semantic H2: "The Deep Cleaning Checklist: Standard Excellence in Every Room")
// Image-per-card layout — 4 rooms, each with a real image
// ============================================================

const CHECKLIST_ROOMS = [
  {
    icon: SprayCan,
    title: "Kitchens & Bathrooms · Special Treatment",
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean technician deep cleaning a kitchen with eco-friendly spray",
    description:
      "These areas receive special treatment. We disinfect all ceramic items, buff and polish chrome fittings to a streak-free finish, descale shower heads and taps, and clean the fronts of all appliances — including the oven, range hood filter, and fridge interior. Grout lines are steamed, not just wiped.",
    points: [
      "Disinfect all ceramic items",
      "Buff and polish chrome fittings",
      "Descale shower heads, taps, and glass",
      "Oven degreased inside and out (non-caustic dip tank)",
      "Fridge interior sanitised, shelves removed",
      "Grout lines steamed with specialist tool",
    ],
  },
  {
    icon: Home,
    title: "General Living Areas · Top-to-Bottom",
    image: IMG.checklistLiving,
    imageAlt: "Spotless living room after deep clean with sunlight through window",
    description:
      "We go beyond dusting. We clean from top to bottom — removing cobwebs where ceilings meet walls, cleaning light fixtures and lampshades, wiping down doors, handles, and skirting boards. Furniture is moved where safe to clean beneath and behind. Cornicing and picture rails are hand-wiped, not brushed over.",
    points: [
      "Remove cobwebs at ceiling-wall junctions",
      "Clean light fixtures and lampshades",
      "Wipe doors, handles, and skirting boards",
      "Hand-wipe cornicing and picture rails",
      "Move lighter furniture to clean beneath",
      "HEPA-vacuum upholstery and mattresses",
    ],
  },
  {
    icon: Sparkles,
    title: "Surface Restoration · Polish Everything",
    image: IMG.checklistWindows,
    imageAlt: "Professional cleaner using a squeegee on interior window glass",
    description:
      "We don\'t just wipe surfaces — we polish wood, chrome, glass, and mirrors to keep them shining. Internal windows are cleaned with a squeegee finish, frames and sills are wiped down, and tracks are vacuumed. Technical uPVC cleaning brings yellowed sills and switches back to a like-new white.",
    points: [
      "Polish wood, chrome, glass, and mirrors",
      "Interior window glass squeegeed streak-free",
      "Window sills, frames, and tracks detailed",
      "Technical uPVC restoration for yellowed plastics",
      "Light switches and sockets degreased",
      "Door hinges and handles detailed",
    ],
  },
  {
    icon: Brush,
    title: "Comprehensive Floor Care · Edge-to-Edge",
    image: IMG.checklistBathroom,
    imageAlt: "Deep-cleaned bathroom floor with chrome fittings shining",
    description:
      "Carpets are vacuumed edge-to-edge including under beds and sofas. Hard flooring is both vacuumed and mopped with a pH-neutral cleaner — not just damp-wiped. Tile and grout are scrubbed with a rotary brush in high-traffic zones. Rugs are beaten where small enough, and visible stains are pre-treated.",
    points: [
      "Carpets vacuumed edge-to-edge (including under furniture)",
      "Hard floors vacuumed then mopped with pH-neutral cleaner",
      "Tile and grout scrubbed with rotary brush",
      "Rugs beaten where small enough",
      "Stain pre-treatment on visible marks",
      "Hardwood edge-detailing by hand",
    ],
  },
];

export function DeepSeoChecklist() {
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
            The deep cleaning checklist
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            The Deep Cleaning Checklist: Standard Excellence in Every Room
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Following our agency-approved checklist, we ensure that every &ldquo;risky&rdquo; or
            often-missed area is treated with professional care during every deep clean. Below is
            the room-by-room breakdown of what\'s included as standard — no add-on fees, no
            surprise charges, no skipped zones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHECKLIST_ROOMS.map((room, i) => {
            const Icon = room.icon;
            return (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/30 transition-all flex flex-col"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] bg-[var(--brand-dark)] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-lg text-white leading-tight">
                      {room.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {room.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-auto">
                    {room.points.map((point) => (
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
// Section 4 — How It Works: 3 Simple Steps to a Dazzling Home
// (Semantic H3 under the H2 checklist)
// ============================================================

const HOW_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Book Your Instant Quote",
    description:
      "Use our 30-second online tool to tell us about your property — type, bedrooms, bathrooms, priority zones — and receive a fixed-price deep clean quote instantly. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Meet Your Technician",
    description:
      "An experienced, fully equipped 3- or 4-person deep-clean crew arrives at your door — uniformed, PVG-checked, and carrying specialist equipment. Your crew lead walks through the property with you, confirms priorities, and photographs every before shot.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy Your Sanctuary",
    description:
      "Walk into a space that feels like the dream home you've always wanted — backed by our Maundy Clean quality guarantee. Before/after photos of every priority zone land in your client portal within 2 hours of completion. Not happy? We re-clean free.",
  },
];

export function DeepSeoHowItWorks() {
  return (
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
            How it works
          </span>
          <h3 className="font-display font-extrabold text-2xl lg:text-4xl text-[var(--ink)] tracking-tight mb-4">
            How It Works: 3 Simple Steps to a Dazzling Home
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            From quote to deep-clean complete in under 48 hours, with a 30-second instant quote tool
            and a same-day callback promise. We&rsquo;ve optimised every step so your home gets the
            attention it needs without the wait.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[var(--brand)]/10 via-[var(--brand)]/30 to-[var(--brand)]/10" />

          {HOW_STEPS.map((step, i) => {
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
                <h4 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight">
                  {step.title}
                </h4>
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
// Section 5 — Semantic Interlinking: Specialized Solutions
// (Semantic H2: "Semantic Interlinking: Specialized Solutions for Every Need")
// Image-supported cards with internal links
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Starting Your Cycle · Deep Cleaning Service",
    href: "/services/deep-house-cleaning",
    image: IMG.interlinkDeep,
    imageAlt: "Deep clean crew resetting a Scottish home from top to bottom",
    description:
      "If your home hasn't had a professional clean in 6 months, we recommend an initial Deep Cleaning Service to move furniture and clean behind and underneath before your regular schedule begins. This is the same page you're reading — bookmark it, share it, or book directly from here.",
    cta: "Explore the deep clean service",
  },
  {
    icon: KeyRound,
    title: "Transitioning Homes · End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.interlinkTenancy,
    imageAlt: "Empty flat being deep cleaned for new tenant move-in",
    description:
      "For those moving, our End of Tenancy Cleaning includes a Deposit-Back Guarantee, ensuring you pass your final inspection with flying colours. We work to the letting agent's inventory, not ours — and we'll come back free of charge if the agent flags anything.",
    cta: "Book deposit-back end of tenancy clean",
  },
  {
    icon: Hammer,
    title: "Post-Renovation · After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.interlinkBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust",
    description:
      "If you've had construction work, our After Builders Clean is our most intensive service, designed to remove heavy layers of dust and grime. Includes steam-cleaning of grout, extraction of upholstery, and the fine-dust wipe-down that builders never include in their quote.",
    cta: "Get post-builders cleanup quote",
  },
  {
    icon: Wind,
    title: "Fabric & Appliance Care · Oven & Carpet Add-ons",
    href: "/services/oven-cleaning",
    image: IMG.ovenDeep,
    imageAlt: "Non-caustic dip-tank oven deep cleaning",
    description:
      "Add a Deep Oven Clean or Carpet Cleaning to your recurring visit to remove deep-seated stains, germs, and unwanted odours. Our non-caustic dip tank restores ovens to near-showroom condition; our hot-water extraction lifts ground-in soil from carpets, rugs, and upholstery.",
    cta: "Add oven or carpet care to your clean",
  },
];

export function DeepSeoInterlinking() {
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
            Beyond the deep clean · specialist support
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Semantic Interlinking: Specialized Solutions for Every Need
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep house cleaning is the most thorough reset your property can receive, but we
            provide a full spectrum of specialist support when your home requires extra attention.
            The same trusted crew, the same PVG-checked standard, the same 100% re-clean guarantee —
            whatever stage your home is at.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTERLINK_SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
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
// Section 6 — SEO FAQ (additional to the existing ServiceFaq)
// (Semantic H2: "Frequently Asked Questions About Deep Cleaning")
// ============================================================

const SEO_FAQS = [
  {
    q: "Are windows included in a deep clean?",
    a: "Yes. Interior window glass, sills, frames, and tracks are cleaned as standard on every deep clean — finished with a squeegee for a streak-free result. External window cleaning is available as an add-on via our pure-water fed-pole system; just flag it at the scoping stage and we'll include it in your fixed-price quote.",
  },
  {
    q: "Do I need a deep clean or a regular clean?",
    a: "A regular (recurring) clean is for ongoing maintenance — surfaces, floors, bathrooms, and touchpoints. A deep clean is an intense top-to-bottom service recommended for properties that need to be brought back to their best, are being prepared for sale or new tenants, or haven't had a professional clean in 6+ months. Most Scottish households book a deep clean quarterly or bi-annually as a reset on top of their recurring plan.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We let our professionalism and the quality of our work speak for us. You are never tied into a long-term contract — every deep clean is a standalone booking. If you decide to add a recurring plan afterwards, we'll waive the first month's deep-clean surcharge on your weekly or fortnightly visits. Cancel, pause, or skip with 48 hours' notice, no fees.",
  },
  {
    q: "How long does a deep clean take?",
    a: "A studio or 1-bedroom flat takes 3-4 hours with a 2-person crew. A typical 2-3 bedroom home takes 5-6 hours with a 3-person crew. A 4+ bedroom home or larger tenement flat takes 7-8 hours with a 4-person crew. We size the team to the job so you're not paying for idle hands — and the price you see at quote stage is the price you pay on completion, regardless of how long it actually takes.",
  },
];

export function DeepSeoFaq() {
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
            Frequently asked questions
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions About Deep Cleaning
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the four questions we hear most often from Scottish homeowners
            considering a deep clean. For the full FAQ, see the section below.
          </p>
        </motion.div>

        <div className="space-y-3">
          {SEO_FAQS.map((faq, i) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                <h3 className="font-display font-bold text-base lg:text-lg text-[var(--ink)] leading-tight">
                  {faq.q}
                </h3>
                <div className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center shrink-0 group-open:bg-[var(--brand)] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[var(--brand)] group-open:text-white group-open:rotate-90 transition-all" />
                </div>
              </summary>
              <div className="px-5 pb-5 -mt-1">
                <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — "Near Me" Location Internal Links
// (Semantic H2: "Deep House Cleaning Near Me in Scotland")
// 36 Scottish locations + supporting map image
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

export function DeepSeoNearMe() {
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
              Deep House Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;deep house cleaning near me&rdquo; in Scotland? Maundy Clean
              covers 72+ towns and cities across the Central Belt, Highlands, Borders, and Islands.
              Same PVG-checked standard, same 100% re-clean guarantee, same specialist equipment —
              wherever you are. Find your local crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean deep cleaning coverage areas"
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
                  Same PVG-checked crews, same specialist equipment, same 100% re-clean guarantee —
                  from Glasgow to Lerwick.
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
                Find your local deep-clean crew
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
                      <span className="text-[var(--muted-foreground)]"> deep clean</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don\'t see your town? We add new postcodes every month.</span>
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
            Our local deep-clean crews operate across Glasgow\'s West End, Edinburgh\'s New
            Town, Aberdeen\'s suburbs, Dundee\'s city centre, and the Highlands — from
            Inverness to Thurso, Fort William to Lerwick. Whether you\'re searching for a
            one-off deep clean in Glasgow, a quarterly deep clean in Edinburgh, an end-of-tenancy
            reset in Aberdeen, or a post-builders deep clean anywhere in between, Maundy Clean
            assigns a PVG-checked, PAYE-employed crew with specialist equipment and a 100% re-clean
            guarantee. Same crew lead from walk-through to completion, same fixed price, same
            before/after photo report delivered within 2 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — Final CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Reset Your Home?")
// ============================================================

export function DeepSeoFinalCta() {
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
            Ready to refresh your home?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Reset Your Home?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price deep clean quote in 30 seconds. No pushy sales call, no waiting 24
            hours for a callback. PVG-checked crews, eco-labelled supplies, before/after photos, and
            a 100% re-clean guarantee — from £179.
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

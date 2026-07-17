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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistResidential:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistReach:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  checklistCommercial:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  checklistFrames:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leasePostBuild:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
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
// Semantic H1: "Professional Window Cleaning Services in Glasgow & Edinburgh"
// ============================================================

export function WindowSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean technician using a pure-water reach-and-wash pole on a Scottish property"
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
            Pure-Water Window Cleaning · Glasgow · Edinburgh · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Window Cleaning Services in Glasgow &amp; Edinburgh
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Brighten your view with Scotland&rsquo;s trusted high-reach cleaning specialists.
            Combining 25+ years of industry knowledge with modern, safe-contractor-accredited
            techniques &mdash; pure-water Reach &amp; Wash technology, deionised water that dries
            spotless, and a Maundy tradition of meticulous service from £14/visit.
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
              <Link href="/locations">
                <MapPin className="w-4 h-4" />
                View Our Service Areas in Scotland
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
              <span className="text-white/70">· 6,200+ reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[var(--gold)]" /> Fully Qualified &amp; Insured
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Pure Deionised Water
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> 100% Satisfaction Guarantee
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

export function WindowSeoIntro() {
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
            Specialist window cleaning · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Glass Care
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            In the often unpredictable Scottish weather, maintaining clear, streak-free windows is
            essential for both the well-being of your home and the professional image of your
            business. At Maundy Clean, we provide a superior{" "}
            <strong className="font-semibold text-[var(--ink)]">window cleaning service</strong>{" "}
            that combines 25+ years of industry knowledge with modern, safe-contractor-accredited
            techniques. Built on the{" "}
            <strong className="font-semibold text-[var(--ink)]">Maundy tradition of meticulous
            service</strong>, we offer more than a simple splash and dash &mdash; we provide a
            comprehensive glass restoration service that ensures your property reflects the high
            standards you keep.
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
            { label: "Reach-and-wash height", value: "Up to 65ft" },
            { label: "Water purity", value: "0 ppm TDS" },
            { label: "Re-clean guarantee", value: "48 hrs" },
            { label: "Industry experience", value: "25+ yrs" },
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
// Section 2 - Why MaundyClean is the Authority in Scottish Window Maintenance
// (Semantic H2: "Why MaundyClean is the Authority in Scottish Window Maintenance")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "The Same Trusted Professionals",
    description:
      "Reliability is paramount. Whether you are part of our recurring home cleaning schedule or a commercial contract, we ensure the same vetted, uniformed technicians visit your property every time. Continuity matters when the stakes are a listed tenement facade or a high-street shopfront &mdash; your technician learns the quirks of your building and stays with you for the long run.",
  },
  {
    icon: Wind,
    title: "Advanced Reach & Wash Technology",
    description:
      "We utilise the latest Water Fed Pole technology, allowing external glass to be cleaned up to 65ft from the safety of the ground. This system complies with all working-at-height regulations &mdash; no ladders, no scaffolding, no risk to operatives or passers-by. Carbon-fibre poles reach up to six storeys, making tenement and new-block cleans safe, fast, and fully HSE-compliant.",
  },
  {
    icon: Droplets,
    title: "Pure Deionized Water",
    description:
      "We use only deionised, 100% pure water at 0 ppm total dissolved solids. This ensures your windows are not just clean but sparkling and non-streaky &mdash; the lack of minerals prevents spots from forming after drying. No detergents, no surfactants, no chemical smell. Safer for your garden, your pets, and the rainwater that runs off your windows.",
  },
  {
    icon: Shield,
    title: "Fully Qualified & Insured",
    description:
      "Our staff are highly trained and fully insured to use specialised equipment, including mobile platforms and rope access for more complex commercial cleans. Every technician carries Disclosure Scotland PVG membership, we hold &pound;5m public liability cover, and our IRATA-certified rope teams handle high-rise work that ground-level poles cannot reach.",
  },
];

export function WindowSeoWhy() {
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
                alt="Maundy Clean technician operating a pure-water reach-and-wash pole on a Scottish property"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Safe-Contractor Accredited on Every Clean
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, PVG-checked, uniformed, and trained on Reach &amp; Wash, rope access,
                  and mobile platforms &mdash; we never cut corners on safety.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Re-clean rate</div>
                  <div className="text-xs font-bold text-[var(--ink)]">1.2% only</div>
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
              Why MaundyClean is the Authority in Scottish Window Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While many local cleaners use outdated methods, Maundy Clean utilises state-of-the-art
              technology to handle windows of all shapes and sizes, even in the most
              difficult-to-reach places. We pair modern Reach &amp; Wash equipment with the Maundy
              tradition of meticulous service &mdash; the same trusted crew, the same chemistry
              discipline, the same guarantee on every visit.
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
// Section 3 - Comprehensive Cleaning for Homes & Businesses
// (Semantic H2: "Comprehensive Cleaning for Homes & Businesses")
// Image-per-card layout - 4 service categories
// ============================================================

const CHECKLIST_DETAIL = [
  {
    icon: Home,
    title: "Residential & Domestic Window Care",
    image: IMG.checklistResidential,
    imageAlt: "Maundy Clean technician cleaning residential windows with a pure-water pole",
    description:
      "For our residential clients, window cleaning is often the finishing touch of a recurring home cleaning plan. We don&rsquo;t just clean the glass; we provide a top-to-bottom service that refreshes the whole frame. Frames and sills are meticulously wiped down to remove city-centre grime as standard, and interior windows are offered as part of every professional quote.",
    points: [
      "Frames & sills wiped down as standard",
      "Interior window cleaning available",
      "Conservatories & skylights specialist care",
      "Listed-building sash window detailing",
      "Recurring 4-weekly or 8-weekly schedules",
    ],
  },
  {
    icon: Wind,
    title: "Reach & Wash High-Reach Cleans",
    image: IMG.checklistReach,
    imageAlt: "Carbon-fibre reach-and-wash pole cleaning external glass up to 65ft",
    description:
      "We utilise the latest Water Fed Pole technology, allowing external glass to be cleaned up to 65ft from the safety of the ground. This system complies with all working-at-height regulations. Carbon-fibre poles reach up to six storeys, making tenement and new-build block cleans safe, fast, and fully HSE-compliant &mdash; no ladders, no scaffolding, no risk.",
    points: [
      "Carbon-fibre poles reach up to 65ft (6 storeys)",
      "Fully HSE and working-at-height compliant",
      "No ladders needed on 90% of jobs",
      "Frames, sills & UPVC detailed as standard",
      "Safer for crew, cheaper for you",
    ],
  },
  {
    icon: Building2,
    title: "Commercial & High-Reach Specialist Cleans",
    image: IMG.checklistCommercial,
    imageAlt: "Commercial window cleaning team working on a Scottish high-street shopfront",
    description:
      "We offer full window cleaning services to offices, retail units, and industrial warehouses across the Central Belt. For traditional storefronts or complex high-rise structures we use conventional and rope access. For heights exceeding 65ft, mobile platforms (cradles) are utilised. Monthly invoicing with NET 30 terms and a dedicated account manager on every contract.",
    points: [
      "Offices, retail units & industrial warehouses",
      "Conventional & IRATA rope access",
      "Mobile platforms (cradles) for 65ft+",
      "Out-of-hours scheduling available",
      "Risk assessment & method statement",
    ],
  },
  {
    icon: Droplets,
    title: "Frames, Sills & Gutter Integration",
    image: IMG.checklistFrames,
    imageAlt: "Window frames and sills being detailed alongside a gutter clear-out",
    description:
      "At MaundyClean, we believe a window isn&rsquo;t clean until the frames and sills are spotless too. We meticulously wipe down all frames and window sills to remove city-center grime as standard. We also recommend combining your window service with a gutter clean to prevent water damage and maintain your building&rsquo;s integrity &mdash; the same reach, the same crew, the same visit.",
    points: [
      "Frames & sills wiped on every clean",
      "Cobwebs cleared from corners",
      "Biocidal wash for green algae (6-9 months)",
      "Combine with gutter clear in same visit",
      "UPVC, timber & aluminium detailing",
    ],
  },
];

export function WindowSeoChecklist() {
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
            Comprehensive cleaning · the detail
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Comprehensive Cleaning for Homes &amp; Businesses
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our window cleaning is a vital component of a healthy property cycle. We tailor our
            methods to the specific needs of your building &mdash; from residential sash windows in
            a Glasgow tenement to a high-rise commercial block in Edinburgh&rsquo;s Exchange
            district. Every stage is documented in your post-clean care card.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHECKLIST_DETAIL.map((item, i) => {
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
                <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
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

        {/* Inline interlink to gutter cleaning service */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/services/gutter-cleaning"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]"
          >
            Combine your window clean with a professional Gutter Cleaning service
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 - The MaundyClean 3-Step "Hassle-Free" Process
// (Semantic H3: "The 3-Step 'Hassle-Free' Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant 30-Second Quote",
    description:
      "Use our online tool to receive a simple, fixed-price quote based on your property type and number of windows. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in, fully transparent, with no on-the-day upsells for frames or sills.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Execution",
    description:
      "Our experienced team arrives at a time that fits your schedule, fully equipped with specialised Reach &amp; Wash systems and pure deionised water &mdash; already included in your fair, transparent price. The technician confirms access, photographs any pre-existing glass damage, and walks you through the cleaning plan.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Spotless Results Guaranteed",
    description:
      "Enjoy a fresh, bright view backed by our MaundyClean 100% satisfaction guarantee. If you see streaks or spots within 48 hours, we&rsquo;ll come back and re-clean the affected panes free. You receive a written care card and a 12-month re-clean reminder at the locked-in rate &mdash; the Maundy Clean promise.",
  },
];

export function WindowSeoBooking() {
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
            The MaundyClean 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be straightforward and helpful, addressing
            the slow response times of local competitors. From quote to clean in under 48 hours for
            most postcodes in the Central Belt &mdash; no friction, no waiting, no surprises.
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
// Section 5 - A Solution for Every Property Stage (interlinking)
// (Semantic H2: "A Solution for Every Property Stage")
// Image-topped cards with internal links
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: CalendarCheck,
    title: "Maintaining the Standard · Recurring Home Cleaning",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt: "Recurring home cleaning at a Scottish family home with freshly cleaned windows",
    description:
      "After your windows are restored, keep them pristine with a recurring home cleaning schedule &mdash; weekly or fortnightly. Window cleaning is often the finishing touch of a recurring home cleaning plan. 15% member discount for existing window cleaning clients.",
    cta: "Explore recurring home cleaning",
  },
  {
    icon: KeyRound,
    title: "The Move-Out Polish · End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty Scottish flat being deep cleaned for a new tenant move-in with window cleaning",
    description:
      "Our End of Tenancy Cleaning includes professional window cleaning to ensure you fulfill your lease and get your full deposit back. We work to the letting agent&rsquo;s inventory and come back free of charge if anything is flagged at the check-out inspection.",
    cta: "Book end of tenancy cleaning",
  },
  {
    icon: Home,
    title: "Intensive Maintenance · Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Deep house cleaning team refreshing a Scottish property with window cleaning included",
    description:
      "If your property hasn&rsquo;t been cleaned in months, combine window care with a Deep House Cleaning to bring the whole building back to its best. Top-to-bottom reset including internal window glass as standard &mdash; a genuine fresh start for tired properties.",
    cta: "Book a deep house cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation · After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leasePostBuild,
    imageAlt: "Post-construction window cleaning removing paint specks and builder dust from glass",
    description:
      "If you&rsquo;ve had home improvements, our After Builders Clean is designed to remove heavy construction dust and paint specks from glass surfaces. We combine pure-water Reach &amp; Wash with traditional scraper detailing for a flawless finish on newly renovated properties.",
    cta: "Book an after builders clean",
  },
];

export function WindowSeoInterlinking() {
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
            Beyond the reset · property stages
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            A Solution for Every Property Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our window cleaning provides the WOW factor, but we offer specialised resets for major
            property milestones. Restore the glass today, then keep it pristine with the right
            ongoing routine for your household, your tenancy cycle, or your renovation timeline
            &mdash; the same trusted crew can step up whenever life changes.
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
                    <h4 className="absolute bottom-4 left-4 right-4 font-display font-bold text-base text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h4>
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
// (Semantic H2: "Window Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function WindowSeoNearMe() {
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
              Local window cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Window Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;window cleaning near me&rdquo; or &ldquo;window cleaners near
              me&rdquo; in Scotland? Maundy Clean covers 72+ towns and cities across the Central
              Belt, Highlands, Borders, and Islands. Same pure-water Reach &amp; Wash standard, same
              100% satisfaction guarantee, same dedicated technician &mdash; wherever your property
              happens to be. Find your local window cleaning crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean window cleaning coverage areas"
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
                  Same Reach &amp; Wash technicians, same 100% satisfaction guarantee &mdash; from
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
                Find your local window cleaner
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
                    href={`/services/window-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> windows</span>
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
                href="/services/window-cleaning-near-me"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
              >
                View the full near-me page
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
            Our local window cleaning crews operate across Glasgow&rsquo;s West End,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s granite city centre, Dundee&rsquo;s
            waterfront, and the Highlands &mdash; from Inverness to Thurso, Fort William to Lerwick.
            Whether you&rsquo;re searching for tenement window cleaning in Glasgow, listed-building
            sash window care in Edinburgh, commercial shopfront cleans in Aberdeen, or conservatory
            roof cleaning anywhere in between, Maundy Clean assigns a Reach &amp; Wash-trained,
            PAYE-employed technician that stays with you for the long run. Same technician, same
            standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Book Your Window Cleaning?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function WindowSeoFinalCta() {
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
            Ready to book your window cleaning?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Book Your Window Cleaning?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price quote in 30 seconds. No pushy sales call, no waiting 24 hours for a
            callback. Pure-water Reach &amp; Wash technology, fully qualified and insured
            technicians, a 100% satisfaction guarantee, and a written care card with every visit
            &mdash; from £14/visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Get My Instant Quote Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
              asChild
            >
              <Link href="/locations">
                <MapPin className="w-4 h-4" />
                View Our Service Areas in Scotland
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
// 6 Q&As - 3 from the user brief + 3 window-specific additions
// ============================================================

const SEO_FAQS = [
  {
    q: "How often should I have my windows cleaned?",
    a: "For residential properties, we recommend a recurring cleaning schedule every 4 to 8 weeks to prevent environmental buildup. Every 4 weeks for city-centre properties exposed to traffic film, every 8 weeks for suburban homes, and every 12 weeks for rural properties. Coastal properties in Ayrshire and the Highlands benefit from 4-weekly cleans due to salt spray. We&rsquo;ll recommend a frequency based on your location at quote stage.",
  },
  {
    q: "Do you clean the frames and sills?",
    a: "Yes. At MaundyClean, we believe a window isn&rsquo;t clean until the frames and sills are spotless too. This is included in every professional quote &mdash; we meticulously wipe down all frames (timber, UPVC, or aluminium) and window sills to remove city-centre grime as standard. Cobwebs are cleared from corners, and stubborn green algae is treated with a biocidal wash that keeps regrowth away for 6 to 9 months.",
  },
  {
    q: "Can you clean windows in the rain?",
    a: "Yes. Because we use deionised pure water at 0 ppm total dissolved solids, rain does not affect the finish. We work 7 days a week to ensure your property remains pristine regardless of the Scottish weather. The only conditions that pause cleaning are high winds (unsafe for pole work above 4 storeys) and lightning. If we&rsquo;re rained off mid-clean, we return the next dry day to finish at no extra charge.",
  },
  {
    q: "Why do you use pure water instead of detergent?",
    a: "Tap water in Scotland runs at 30 to 80 ppm dissolved solids (mostly calcium and magnesium). When it evaporates, those minerals stay on the glass as limescale spots. Our deionised water runs at 0 ppm &mdash; so when it dries, there&rsquo;s literally nothing left to streak. It&rsquo;s also chemical-free, which is better for your garden, your pets, and our technicians&rsquo; hands. No detergents, no surfactants, no chemical smell.",
  },
  {
    q: "Can you clean tenement flats above the ground floor?",
    a: "Yes, up to 65ft (roughly six storeys) using carbon-fibre reach-and-wash poles from the close or back green. This complies with all working-at-height regulations &mdash; no ladders, no scaffolding, no risk. For taller buildings we&rsquo;ll quote a cherry-picker or IRATA-rope-access solution. Internal tenement sash windows are cleaned by hand from inside with traditional squeegee and lint-free microfibre.",
  },
  {
    q: "Are you insured for listed buildings?",
    a: "Yes. We carry &pound;5m public liability cover and have specific experience with Category A and B listed properties in Edinburgh&rsquo;s New Town, Glasgow&rsquo;s West End, and St Andrews. We never use scrapers on historic glass, never use harsh chemicals on original putty, and we&rsquo;ll work with your conservation officer if a method statement is required. Our technicians are trained on sash window detailing, leaded lights, and stained glass.",
  },
];

export function WindowSeoFaq() {
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
            Window cleaning · FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our window cleaning clients ask most often.
            Can\'t find what you need? Call us on{" "}
            <a
              href={contactInfo.phoneHref}
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4"
            >
              {contactInfo.phone}
            </a>{" "}
            and we\'ll talk it through.
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
                Get My Instant Quote Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-light)]/40"
              asChild
            >
              <Link href="/locations">
                <MapPin className="w-4 h-4" />
                View Our Service Areas
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
  TreePine,
  Car,
  Sun,
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
  checklistDriveway:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  checklistPatio:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  checklistFacade:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistProtect:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
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
// Semantic H1: "Professional Pressure Washing & Exterior Cleaning Scotland"
// ============================================================

export function PressureWashingSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean pressure washing technician restoring a Scottish driveway with a rotary surface cleaner"
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
            Pressure Washing · Exterior Cleaning · Glasgow · Edinburgh · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Pressure Washing &amp; Exterior Cleaning Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Restoring Curb Appeal and Safety with High-Standard Technical Cleaning. A truly healthy
            home or business environment begins before you even step through the door. While our{" "}
            <Link
              href="/services/recurring-home-cleaning"
              className="font-semibold text-[var(--gold)] hover:text-white underline underline-offset-4"
            >
              Recurring Home Cleaning
            </Link>{" "}
            ensures your interior remains a sanctuary, our professional pressure washing service
            provides the essential &ldquo;exterior reset&rdquo; required to protect your property
            from the harsh Scottish elements. At Maundy Clean, we move beyond simple power washing
            to offer a precise, reliable, and &ldquo;speechlessly spotless&rdquo; finish for your
            driveways, patios, and facades across Glasgow, Edinburgh, and the Central Belt.
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
              <Shield className="w-4 h-4 text-[var(--gold)]" /> PVG-Checked &amp; &pound;5m Insured
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

export function PressureWashingSeoIntro() {
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
            Specialist exterior cleaning &middot; Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Exterior Maintenance
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Built on the <strong className="font-semibold text-[var(--ink)]">Maundy tradition of
            service and care</strong>, we provide a premium alternative to impersonal agencies,
            ensuring your exterior maintenance is handled with the same meticulous attention as your
            weekly housekeeping. Our pressure washing service is the essential &ldquo;exterior
            reset&rdquo; required to protect your property from the harsh Scottish elements &mdash;
            combining specialist surface knowledge, certified child-safe products, and a
            100% satisfaction guarantee on every visit.
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
            { label: "Scottish towns covered", value: "72+" },
            { label: "Max rotary pressure", value: "200 bar" },
            { label: "Regrowth inhibition", value: "18 months" },
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
// Section 2 - Why MaundyClean is the Authority in Scottish Exterior Maintenance
// (Semantic H2: "Why Maundy Clean is the Authority in Scottish Exterior Maintenance")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "The Same Trusted Professionals",
    description:
      "Reliability is our anchor. Whether you are a residential client on a recurring cleaning schedule or a commercial business, we ensure the same vetted, uniformed technicians manage your exterior care to build a deep understanding of your property&rsquo;s needs. Your crew is allocated to your property and your time slot &mdash; they don&rsquo;t get reassigned, shared, or pulled elsewhere. Continuity is what turns an annual clean into a relationship.",
  },
  {
    icon: Gem,
    title: "Specialist Surface Knowledge",
    description:
      "Different materials require different pressures. Our staff are trained to handle a wide range of surfaces, including brick, natural stone, cladding, and render cleaning, ensuring a thorough clean without damaging the substrate. We cap pressure by surface &mdash; 200 bar for concrete and block paving, 120 bar for natural stone, 80 bar for timber, and 40 bar for render &mdash; a fraction of what a hire-shop machine will push out.",
  },
  {
    icon: Shield,
    title: "Safety-First Approach",
    description:
      "We are a professional company that takes responsibility seriously. Our employees are fully trained, insured, and vetted, following rigorous safety protocols for high-level and industrial cleaning. Disclosure Scotland PVG scheme membership, &pound;5m public liability cover, and full SEPA-compliant wastewater handling come as standard on every job &mdash; domestic or commercial.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Family Safe",
    description:
      "We utilize only certified child and pet-safe products. Our non-toxic cleaning agents effectively remove moss, algae, and grime while protecting your surrounding landscaping and the local environment. EU Ecolabel and DEFRA-approved low-VOC biocides as standard. Runoff is contained, directed to drainage, and never discharged into storm drains or neighbouring properties.",
  },
];

export function PressureWashingSeoWhy() {
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
                alt="Maundy Clean pressure washing technician &mdash; uniformed, PVG-checked, and substrate-trained"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Trusted Presence on Your Property
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, PVG-checked, uniformed, and trained in substrate-specific pressure.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Crew retention</div>
                  <div className="text-xs font-bold text-[var(--ink)]">80%+</div>
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
              Why Maundy Clean is the Authority in Scottish Exterior Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While many local businesses offer basic pressure washing, Maundy Clean provides a
              first-class post-renovation and maintenance service that prioritizes both aesthetics
              and long-term property health. We combine specialist surface knowledge with a
              safety-first approach, certified eco-friendly products, and the same trusted
              professionals every visit &mdash; the same standard we apply to your weekly
              housekeeping, applied to your exterior surfaces.
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
// Section 3 - Our Total Exterior Maintenance Checklist
// (Semantic H2: "Our Total Exterior Maintenance Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Driveways & Pathways
//   2. Patios & Decking Revitalisation
//   3. Facade & Wall Cleaning
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Car,
    image: IMG.checklistDriveway,
    imageAlt: "Scottish driveway being cleaned with a rotary surface cleaner at 200 bar",
    title: "Driveways & Pathways",
    description:
      "Our rotary surface cleaner lifts years of build-up in a single visit &mdash; without etching the stone, gouging the pointing, or stripping the seal. We re-sand, re-seal, and protect as standard, never pressure-washing and leaving the surface exposed to the next Scottish winter.",
    points: [
      {
        icon: Droplets,
        title: "Intensive Grime Removal",
        text: "We target deep-seated city-center dust, oil stains, and tyre marks using a 200 bar rotary head on concrete, tarmac, block paving, and resin-bound surfaces. Pre-treatment with alkaline degreaser for stubborn oil, followed by a containment-and-drainage check.",
      },
      {
        icon: Shield,
        title: "Slip Prevention",
        text: "Removing moss and algae buildup to ensure safe passage for your family and visitors. We finish with a benzalkonium biocide that kills the root structure &mdash; without it, the green returns within 6 months on most Scottish driveways.",
      },
    ],
  },
  {
    icon: TreePine,
    image: IMG.checklistPatio,
    imageAlt: "Indian sandstone patio restored to its original colour after a rotary wash and siloxane seal",
    title: "Patios & Decking Revitalisation",
    description:
      "Different surfaces, different pressures. Indian sandstone gets 120 bar with a rotary head; timber decking gets 80 bar with a fan jet and a water-repellent oil finish. We never use high pressure on timber &mdash; it lifts the grain and splinters the surface.",
    points: [
      {
        icon: Sparkles,
        title: "Surface Restoration",
        text: "Meticulous cleaning of stone, timber, or composite decking to restore its original vibrant appearance. Black spot algae (lichen) on sandstone is pre-treated with a benzalkonium biocide that kills the root structure, then washed and sealed with a fluoro-siloxane impregnator.",
      },
      {
        icon: CheckCircle2,
        title: "Detailed Finishing",
        text: "Wiping down surrounding skirting boards and exterior fixtures as part of our standard professional service. We never leave a job with dirty adjacent surfaces &mdash; the protective finish is part of the job, not a &pound;150 add-on tacked on at the end.",
      },
    ],
  },
  {
    icon: Building2,
    image: IMG.checklistFacade,
    imageAlt: "Scottish tenement facade being washed with a low-pressure biocidal treatment to protect the sandstone",
    title: "Facade & Wall Cleaning",
    description:
      "Full house washes including brickwork and stone facades to remove environmental pollutants and add real value for potential buyers. Render gets a low-pressure (40 bar) biocidal wash &mdash; never a high-pressure jet that forces water past the render and into the wall cavity.",
    points: [
      {
        icon: Home,
        title: "Building Wash",
        text: "Full house washes including brickwork and stone facades to remove environmental pollutants and deliver the &lsquo;WOW&rsquo; factor for potential buyers. Red algae, green algae, and pollution staining removed with method-matched pressure and chemistry.",
      },
      {
        icon: Hammer,
        title: "Technical Reach",
        text: "For more complex commercial cleans, we utilize specialized access equipment to ensure every inch is covered. IRATA-certified rope access, cherry-picker, or telescopic fed-pole systems &mdash; whatever the building height, we have a safe, compliant method to reach it.",
      },
    ],
  },
];

export function PressureWashingSeoChecklist() {
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
            Beyond the basic blast
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Exterior Maintenance Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring home cleaning philosophy extends to your outdoor spaces. We follow a
            technical checklist designed to bring your property &ldquo;back to life&rdquo; and add
            significant value &mdash; combining the right pressure, the right chemistry, and the
            right protective finish for every surface. Below is the scope we deliver as standard on
            every pressure washing visit.
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
      "Use our online tool to receive a simple, fixed-price quote based on your surface area and requirements. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months, with no contracts tying you in and no on-the-day upsells for spotters or air-movers.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Execution",
    description:
      "Our experienced team arrives fully equipped with professional-grade materials &mdash; already included in your fair price. We pre-treat stubborn stains, protect adjacent plants and fixtures, then wash with method-matched pressure using a rotary surface cleaner. No zebra stripes, no etched stone, no flood of dirty water.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Spotless Results Guaranteed",
    description:
      "Experience a property that feels fresh, welcoming, and &ldquo;showcase&rdquo; ready, backed by our 100% satisfaction guarantee. We finish with re-sanding, sealing, or biocidal inhibitor as appropriate, walk the property with you at completion, and re-treat on the spot if anything is flagged. Care card and re-clean reminder at 18 months.",
  },
];

export function PressureWashingSeoBooking() {
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
            We have optimized our booking system to be uncomplicated and straightforward,
            addressing the slow response times common in the Scottish market. From quote to first
            clean in under 48 hours &mdash; no friction, no waiting, no surprises.
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
// Section 5 - A Solution for Every Property Cycle
// (Semantic H2: "A Solution for Every Property Cycle")
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: CalendarCheck,
    title: "Maintaining the Standard &middot; Recurring Home Cleaning",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt: "Scottish home receiving recurring interior cleaning alongside annual pressure washing",
    description:
      "After your exterior is restored, keep your interior pristine with a Recurring Home Cleaning plan &mdash; weekly or fortnightly. Edge-to-edge vacuuming, immediate spill response, and quarterly deep cleans are the single biggest factors in how long an exterior reset lasts.",
    cta: "Explore recurring cleaning",
  },
  {
    icon: Home,
    title: "The Move-In Reset &middot; Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Scottish home receiving an intensive deep clean alongside a building wash for sale prep",
    description:
      "Preparing a home for sale? Combine a building wash with a Deep House Cleaning to create the &ldquo;aspirational dream&rdquo; for potential buyers. Stale odours, tired exteriors, and marked interiors are the single biggest turn-off at viewings &mdash; we fix all three.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty Scottish flat being deep cleaned with optional exterior patio and window cleaning",
    description:
      "Our End of Tenancy Cleaning includes the option for exterior patio and window cleaning to ensure you PASS your inspection and get your deposit back in full. We work to the letting agent&rsquo;s inventory and come back free of charge if anything is flagged.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "The Heavy-Duty Reset &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from inside and outside a Scottish home",
    description:
      "If you have recently had construction work, our After Builders Clean removes the heavy layers of builders&rsquo; dust and debris from both inside and out. Includes steam-cleaning of grout, fine-dust wipe-down, and pressure washing of the driveway the builders left covered in cement.",
    cta: "Explore after builders cleaning",
  },
];

export function PressureWashingSeoInterlinking() {
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
            A Solution for Every Property Cycle
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our pressure washing service is the perfect complement to your property&rsquo;s wider
            hygiene schedule. From maintaining the standard after an exterior restore, to a sale-prep
            reset, to the heavy-duty post-builders clear-out &mdash; the same trusted crew can step
            up whenever life changes.
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
// (Semantic H2: "Pressure Washing Services Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function PressureWashingSeoNearMe() {
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
              Local pressure washing across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Pressure Washing Services Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;pressure washing near me&rdquo; or &ldquo;driveway cleaning near
              me&rdquo; in Scotland? Maundy Clean covers 72+ towns and cities across the Central
              Belt, Highlands, Borders, and Islands. Same PVG-checked standard, same 100% re-clean
              guarantee, same substrate-trained crew every visit &mdash; wherever your property
              happens to be. Find your local pressure washing technician below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean pressure washing service coverage areas"
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
                  Same substrate-trained technicians, same 100% re-clean guarantee &mdash; from
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
                Find your local pressure washing crew
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
                    href={`/services/pressure-washing-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> pressure washing</span>
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
                  href="/services/pressure-washing-near-me"
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
            Our local pressure washing crews operate across Glasgow&rsquo;s West End,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s suburbs, Dundee&rsquo;s city centre, and
            the Highlands &mdash; from Inverness to Thurso, Fort William to Lerwick. Whether
            you&rsquo;re searching for driveway cleaning in Glasgow, patio restoration in Edinburgh,
            render cleaning in Aberdeen, or commercial pressure washing anywhere in between, Maundy
            Clean assigns a PVG-checked, PAYE-employed technician that stays with you for the long
            run. Same crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Book Your Pressure Washing Service?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function PressureWashingSeoFinalCta() {
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
            Ready to book your pressure washing service?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Book Your Pressure Washing Service?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price pressure washing quote in 30 seconds. No pushy sales call, no waiting
            24 hours for a callback. PVG-checked technicians, substrate-trained pressure selection,
            child &amp; pet-safe products, secure key system, and a 100% satisfaction guarantee
            &mdash; from &pound;3.50/m&sup2;.
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
// 6 Q&As - 3 from the user brief (frequency, commercial, need to be home)
// + 3 pressure-washing-specific additions (substrate damage, regrowth, runoff)
// ============================================================

const SEO_FAQS = [
  {
    q: "How often should I have my driveway pressure washed?",
    a: "For most Scottish properties, we recommend an annual exterior clean to prevent the buildup of slippery moss and environmental grime. Horizontal surfaces (drives, patios) typically need a clean every 12-18 months; vertical surfaces (render, walls) every 18-24 months. Properties under heavy tree cover or with poor drainage may need 9-monthly cycles. We send a no-pressure reminder at the 11-month mark so you never have to remember &mdash; the locked-in rate applies for 12 months from your start date.",
  },
  {
    q: "Do you provide commercial exterior cleaning?",
    a: "Yes. We offer an extensive range of pressure washing services for industrial and commercial clients throughout Glasgow and central Scotland. Car parks, forecourts, retail frontages, restaurant patios, and trade premises are all in scope. We work out-of-hours, handle SEPA-compliant wastewater containment with vacuum-recovery systems, sign off slip-risk assessments, and invoice monthly on NET 30 terms with a dedicated account manager. Commercial enquiries get a same-day response.",
  },
  {
    q: "Do I need to be home during the clean?",
    a: "No. We operate a safe key system and can perform external cleaning efficiently while you are at work. Many of our clients leave a key with a neighbour, in a coded key safe, or with our office &mdash; the crew arrives, completes the exterior work, contains and disposes of all wastewater, sends you before &amp; after photos by SMS, and locks up on the way out. You only need to be on-site for the initial walk-through at quote stage, and we can do that on a Saturday if needed.",
  },
  {
    q: "Will pressure washing damage my sandstone patio or render?",
    a: "Not if it is done correctly &mdash; and that&rsquo;s exactly why we don&rsquo;t use hire-shop machines. We cap pressure by surface: 200 bar for concrete and block paving, 120 bar for Indian sandstone and limestone, 80 bar for timber, and 40 bar for render and limewash. We use a rotary surface cleaner with a 50cm head that delivers consistent pressure, never a bare wand that can etch the surface. Hire-shop machines push 200+ bar regardless of substrate &mdash; that&rsquo;s how sandstone gets etched and pointing gets gouged. Our technicians are substrate-trained.",
  },
  {
    q: "How long will the surface stay clean after washing?",
    a: "12-18 months on horizontal surfaces (drives, patios) and 18-24 months on vertical surfaces (render, walls) &mdash; provided the sealing and biocidal pre-treatment are done. We never pressure-wash and leave: block paving gets re-sanded with kiln-dried jointing sand, natural stone gets a fluoro-siloxane sealer, decking gets a water-repellent oil, and render gets a biocidal inhibitor. Properties under heavy tree cover or with poor drainage may need 9-monthly cycles. We&rsquo;ll flag this at quote stage rather than promise 18 months on a shaded, north-facing patio.",
  },
  {
    q: "How do you handle the dirty water runoff?",
    a: "All our work is SEPA-compliant. We check your drainage before starting, contain runoff with polythene bunds where needed, and never discharge oily or chemical-laden water into storm drains. For commercial jobs we use a vacuum-recovery system that captures the water for off-site disposal. Domestic jobs typically discharge to standard drains after the pre-treatment chemistry has done its work. Light rain is fine for cleaning; heavy rain is not &mdash; we monitor the forecast and reschedule free of charge if heavy rain is forecast.",
  },
];

export function PressureWashingSeoFaq() {
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
            Pressure washing &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our pressure washing clients ask most often.
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

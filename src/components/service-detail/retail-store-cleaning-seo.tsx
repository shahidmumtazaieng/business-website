"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
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
  UserCheck,
  CalendarCheck,
  Award,
  Gem,
  ShoppingBag,
  Store,
  Tag,
  Phone,
  ClipboardCheck,
  FileText,
  UtensilsCrossed,
  HeartPulse,
  Microwave,
  DoorOpen,
  Trees,
  Flame,
  Wrench,
  Lightbulb,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches corporate-facility + housekeeping image pool)
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%209.33.26%20PM.jpeg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%209.33.26%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_duq67wduq67wduq6.png",
  checklistShopFloor:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistWashroom:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  checklistDisplay:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistBackOffice:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseSpring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseDisinfection:
    "https://sfile.chatglm.cn/images-ppt/8a7c4d6e0b51.jpg",
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
// (high-street + retail-park coverage across Scotland)
// ============================================================
const NEAR_ME_LOCATIONS: { city: string; slug: string }[] = [
  { city: "Glasgow", slug: "glasgow" },
  { city: "Edinburgh", slug: "edinburgh" },
  { city: "Aberdeen", slug: "aberdeen" },
  { city: "Dundee", slug: "dundee" },
  { city: "Stirling", slug: "stirling" },
  { city: "Inverness", slug: "inverness" },
  { city: "Perth", slug: "perth" },
  { city: "Falkirk", slug: "falkirk" },
  { city: "Paisley", slug: "paisley" },
  { city: "East Kilbride", slug: "east-kilbride" },
  { city: "Livingston", slug: "livingston" },
  { city: "Hamilton", slug: "hamilton" },
  { city: "Ayr", slug: "ayr" },
  { city: "Kilmarnock", slug: "kilmarnock" },
  { city: "Greenock", slug: "greenock" },
  { city: "Coatbridge", slug: "coatbridge" },
  { city: "Airdrie", slug: "airdrie" },
  { city: "Motherwell", slug: "motherwell" },
  { city: "Wishaw", slug: "wishaw" },
  { city: "Dunfermline", slug: "dunfermline" },
  { city: "Kirkcaldy", slug: "kirkcaldy" },
  { city: "Glenrothes", slug: "glenrothes" },
  { city: "Dundonald", slug: "dundonald" },
  { city: "Bearsden", slug: "bearsden" },
  { city: "Milngavie", slug: "milngavie" },
  { city: "Bishopbriggs", slug: "bishopbriggs" },
  { city: "Lenzie", slug: "lenzie" },
  { city: "Giffnock", slug: "giffnock" },
  { city: "Newton Mearns", slug: "newton-mearns" },
  { city: "Clarkston", slug: "clarkston" },
  { city: "Barrhead", slug: "barrhead" },
  { city: "Johnstone", slug: "johnstone" },
  { city: "Renfrew", slug: "renfrew" },
  { city: "Rutherglen", slug: "rutherglen" },
  { city: "Cambuslang", slug: "cambuslang" },
  { city: "Bellshill", slug: "bellshill" },
];

// ============================================================
// Section 0 - Full-width hero banner
// Semantic H1: "Professional Retail & Shop Cleaning Services Scotland"
// ============================================================

export function RetailStoreSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean uniformed retail cleaning team resetting a Glasgow high-street shop before opening"
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
            Retail &amp; Shop Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Retail &amp; Shop Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Meticulous Display Presentation, Technical Hygiene, and the Maundy Tradition of
            Excellence for Scottish Retailers. In the competitive Scottish retail landscape&mdash;from
            the boutiques of Edinburgh&rsquo;s New Town to the high-traffic outlets of Glasgow&rsquo;s
            Style Mile&mdash;your shop floor is your most powerful marketing tool. A pristine
            environment doesn&rsquo;t just showcase your products; it builds immediate trust with your
            customers. At MaundyClean, we provide a premium retail cleaning service designed to ensure
            your premises are &ldquo;speechlessly spotless&rdquo; and front-line ready every single
            morning.
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
                Request Your Bespoke Retail Quote Today
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
                View Our Commercial Cleaning Checklist
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
              <Shield className="w-4 h-4 text-[var(--gold)]" /> Fully Insured &amp; PVG-Checked
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe Supplies
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Flexible Hours, 7 Days a Week
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
// Split-layout with aspect-[4/3] image on the left and the
// second intro paragraph on the right (contains the inline
// <Link> to /services/recurring-home-cleaning).
// ============================================================

export function RetailStoreSeoIntro() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
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
                src={IMG.introSplit}
                alt="Maundy Clean uniformed retail cleaning crew polishing a high-street storefront before opening in Scotland"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Display-Aware, Front-Line Ready
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy and &ldquo;same-staff&rdquo; consistency we
                  bring to Scotland&rsquo;s finest residences &mdash; applied to your retail
                  environment.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Visit completion</div>
                  <div className="text-xs font-bold text-[var(--ink)]">99.6% in 2025</div>
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
              Retail &amp; shop care &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The Maundy Clean Standard for Retail &amp; Shop Care
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s most prestigious residences, we bring that same level of technical
              intimacy and &ldquo;same-staff&rdquo; consistency to the retail sector. We act as your
              strategic partner, allowing your sales team to focus on core business activities while we
              manage the meticulous details of your property&rsquo;s presentation.
            </p>

            {/* Compact trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { label: "Visits completed in 2025", value: "99.6%" },
                { label: "Vetted, uniformed crews", value: "100%" },
                { label: "From per hour", value: "&pound;16" },
                { label: "Star rating", value: "4.9/5" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--cream)] rounded-xl p-3 border border-[var(--brand)]/10 text-center"
                >
                  <div
                    className="font-display font-extrabold text-xl text-gradient-brand"
                    dangerouslySetInnerHTML={{ __html: stat.value }}
                  />
                  <div className="text-[11px] text-[var(--muted-foreground)] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why MaundyClean is Scotland's Choice for Retail Excellence
// (Semantic H2: "Why MaundyClean is Scotland's Choice for Retail Excellence")
// Image+copy split layout with 4 trust cards
// All 4 card descriptions are ReactNode values (per the new brief
// content) - rendered via the typeof card.description === "string" check.
// ============================================================

type TrustCard = {
  icon: typeof UserCheck;
  title: string;
  description: ReactNode;
};

const TRUST_CARDS: TrustCard[] = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is the bedrock of retail maintenance. We ensure the same vetted professionals manage your shop to build a deep understanding of your specific display layouts, lighting fixtures, and high-value inventory. When the regular crew is on annual leave, we send a trained backup who has been briefed on your site and we tell you in advance. The same faces, every visit, building real accountability to your store&rsquo;s presentation standard and a cleaner who knows exactly which display stacks are fragile, which aisles see the heaviest foot traffic, and which fitting-room mirrors smudge easiest.",
  },
  {
    icon: Clock,
    title: "Flexible Operational Hours",
    description:
      "We recognize that retail never truly stops. We work around your unique trading hours&mdash;whether you require pre-opening resets, post-closing deep cleans, or out-of-hours service 7 days a week. The most common windows are pre-open (6am-8am) for a front-line ready reset, post-close (7pm-10pm) for a full deep turnover, or split schedules (light touch during trading, deep clean after hours). We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols &mdash; keys stored in a coded safe, alarm codes encrypted, never labelled with your address.",
  },
  {
    icon: SprayCan,
    title: "Specialist Surface & Glass Care",
    description:
      "Retail spaces often feature high-end materials. Our teams are trained in glass partition cleaning and the maintenance of delicate finishes, ensuring your storefront reflects the quality of your brand. We polish wood with pH-neutral chemistry (no water marks), detail chrome and brass with specialist metal polish (no micro-scratches), squeegee glass doors and display cases streak-free with pure de-ionised water, and care for premium stone, acrylic, and laminate surfaces with the correct method for each material. Your VM team will never arrive to a damaged display or a smeared showcase.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Customer Safe",
    description:
      "Your shoppers&rsquo; health is our priority. We utilize only certified child-safe and pet-safe products. This ensures a fresh, non-toxic environment that is welcoming for families and pets, without the harsh chemical odors common in industrial cleaning. COSHH datasheets are available for every product we use, and we default to eco-labelled chemicals with food-safe alternatives for deli counters, bakery displays, and in-store caf&eacute;s. Colour-coded microfibre cloths prevent cross-contamination between fitting rooms, washrooms, and food-prep areas, and your sustainability team will love the audit-ready monthly logs.",
  },
];

export function RetailStoreSeoWhy() {
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
                alt="Maundy Clean retail cleaning crew &mdash; uniformed, PVG-checked, and trained for display-aware shop-floor service"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Local Specialist, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, uniformed, and trained in display-aware retail etiquette. Same
                  crew every visit &mdash; never a rotating cast of strangers.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m cover</div>
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
              Why MaundyClean is Scotland&rsquo;s Choice for Retail Excellence
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Retail environments face unique challenges, including heavy foot traffic and the rapid
              accumulation of city-center dust. MaundyClean addresses the exploitable weaknesses of
              national agencies by focusing on vocational reliability and local accountability &mdash;
              combining vetted uniformed teams, the same dedicated crew every visit, flexible 7-day
              scheduling, specialist surface and glass care, and child-safe eco-friendly supplies as
              standard.
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
                        {typeof card.description === "string" ? (
                          <span dangerouslySetInnerHTML={{ __html: card.description }} />
                        ) : (
                          card.description
                        )}
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
                    {typeof card.description === "string" ? (
                      <span dangerouslySetInnerHTML={{ __html: card.description }} />
                    ) : (
                      card.description
                    )}
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
// Section 3 - Our Total Retail Maintenance & Hygiene Checklist
// (Semantic H2: "Our Total Retail Maintenance & Hygiene Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Shop Floor & Customer Facing Areas (3 items)
//   2. Fitting Rooms & Specialized Zones (3 items)
//   3. Back Office & Staff Amenities (2 items)
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

type ChecklistPoint = {
  icon: typeof Sparkles;
  title: string;
  text: string;
};

const CHECKLIST_ITEMS: {
  icon: typeof ShoppingBag;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  points: ChecklistPoint[];
}[] = [
  {
    icon: ShoppingBag,
    image: IMG.checklistShopFloor,
    imageAlt: "Maundy Clean retail crew polishing shop floor displays and mirrors in a Scottish high-street store",
    title: "1. Shop Floor & Customer Facing Areas",
    description:
      "The technical core of every retail visit. The shop floor is the highest-impact zone for customer perception &mdash; a streaked mirror, a dusty display shelf, or a smudged glass door chips at the customer&rsquo;s impression of your brand within seconds. We follow a display-aware protocol: clean around the visual merchandising, not through it. Then we get to work on the high-touch surfaces, the glass and mirrors, and the floors that take the brunt of Scottish foot traffic.",
    points: [
      {
        icon: HeartPulse,
        title: "High-Touch Point Disinfecting",
        text: "Intensive cleaning of payment terminals, door handles, and handrails to prevent the spread of germs. The till zone gets full high-touch-point disinfection on every close: PIN pad, card terminal, counter surface, pen, receipt printer, keyboard, phone. Door handles, light switches, lift buttons, stair handrails, and entry phones are also disinfected on every close. EN 1276 food-safe bactericidal chemistry &mdash; no taint, no perfume, no residue &mdash; critical for both customer perception and staff health.",
      },
      {
        icon: Sparkles,
        title: "Glass & Mirror Restoration",
        text: "Meticulous cleaning of all display cases, internal glazing, and mirrors to a streak-free shine as part of our &ldquo;showcase&rdquo; standards. We squeegee the inside of all glass doors and shopfront windows with pure de-ionised water (no chemical haze, no streaks). Display cases polished with lint-free cloths. Mirrors in fitting rooms are squeegeed, never wiped &mdash; the fitting room is where the purchase decision happens, and a streaked mirror kills the sale.",
      },
      {
        icon: Wind,
        title: "Floor Care & Maintenance",
        text: "Intensive vacuuming of carpets and deep mopping of hard floors to remove environmental pollutants brought in by heavy foot traffic. We use the right method for the right surface &mdash; hot-water extraction for entrance matting and carpeted zones, low-moisture scrubbing for vinyl and LVT, dry-only methods for laminate joins. Heel marks and chewing gum are spot-treated. A polished floor reflects the display lighting and makes the whole store look premium.",
      },
    ],
  },
  {
    icon: DoorOpen,
    image: IMG.checklistDisplay,
    imageAlt: "Maundy Clean retail cleaning specialist detailing fitting room mirrors, benches, and display pedestals in a Scottish boutique",
    title: "2. Fitting Rooms & Specialized Zones",
    description:
      "Fitting rooms are where the purchase decision happens, and a dirty fitting room kills the sale. Mirror streak-free, floor swept and mopped, hooks and seat wiped, curtain or door detail. Display pedestals, track lighting, and signage all detailed so your products are always shown in the best light. The perimeter work that separates a &ldquo;quick wipe&rdquo; from a &ldquo;retail reset.&rdquo;",
    points: [
      {
        icon: SprayCan,
        title: "Deep Sanitization",
        text: "Meticulous wiping of fitting room mirrors, benches, and hooks. Mirrors squeegeed streak-free with pure de-ionised water. Benches wiped with EN 1276 food-safe disinfectant. Hooks and curtain rails detailed. Floor swept and mopped. Discarded hangers and tags returned to the till zone. Fitting rooms checked hourly during trading &mdash; the fitting room is the highest-leverage cleaning zone in any apparel store, and we treat it that way.",
      },
      {
        icon: Lightbulb,
        title: "Lighting & Fixture Dusting",
        text: "Removing city-center dust from track lighting and display pedestals to ensure your products are always shown in the best light. Track lighting dusted with an anti-static cloth (no liquid near electrics). Display pedestals and plinths wiped with the correct chemistry for each material. Signage and price-tag holders polished. Ceiling light fixtures and air-conditioning vents dusted &mdash; the perimeter work that stops dust blowing back onto polished surfaces within hours.",
      },
      {
        icon: CheckCircle2,
        title: "Often-Missed Details",
        text: "Our cleaners meticulously wipe visible skirting boards, door frames, and ceiling fixtures as standard. These are the surfaces that customers notice subconsciously &mdash; a dusty skirting board undermines a polished shopfront. We hand-detail every perimeter surface, dust ceiling light fixtures and air-conditioning vents, and wipe down the inside of the windows so the room feels genuinely reset, not just the centre of the floor.",
      },
    ],
  },
  {
    icon: FileText,
    image: IMG.checklistBackOffice,
    imageAlt: "Maundy Clean retail cleaning crew sanitising staff washroom and tidying stockroom shelving in a Scottish retail back-of-house area",
    title: "3. Back Office & Staff Amenities",
    description:
      "The back-of-house zones your customers don&rsquo;t see but your staff rely on every shift. A spotless shop floor with a smelly staff washroom is a failure &mdash; the staff member who sees it tells their friends, and staff morale drops. Our hygiene protocol for these zones uses hospital-grade disinfectants, separate colour-coded cloths, and a final-fragrance pass that leaves the space genuinely fresh.",
    points: [
      {
        icon: Droplets,
        title: "Restroom Hygiene",
        text: "Intensive sanitation of all facilities, including buffing chrome to a high shine and disinfecting all ceramic items. We descale toilets with a non-abrasive acid, disinfect with an EN 1276-certified bacteriacide, and polish chrome fittings to a streak-free shine. Mirrors are squeegeed, never wiped. Sanitary bins are checked, emptied, and replaced. Floors are mopped with a slip-resistant sanitiser &mdash; the standard your staff deserve and your customers expect when they ask to use the facilities.",
      },
      {
        icon: Boxes,
        title: "Stockroom Organization",
        text: "Basic tidying and dusting of shelving units to improve air quality and prevent stock contamination. We dust shelving units, wipe down stockroom workbenches, sweep and mop the stockroom floor, and ensure walkways are clear for safe access. Cardboard and packaging broken down and staged for recycling. A clean stockroom reduces dust transfer to the shop floor, protects your stock from contamination, and makes your stockroom team more efficient &mdash; included as standard on every visit.",
      },
    ],
  },
];

export function RetailStoreSeoChecklist() {
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
            Beyond the basic surface wipe
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Retail Maintenance &amp; Hygiene Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for shops move beyond a standard surface wipe to address the
            high-touch sanitation requirements of modern retail. From the shop floor and customer-facing
            areas through fitting rooms and specialized zones to the back office and staff amenities &mdash;
            below is the scope we deliver as standard on every visit, regardless of store size.
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
                  <p
                    className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
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
                            &mdash; <span dangerouslySetInnerHTML={{ __html: point.text }} />
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
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Presentation Plan",
    description:
      "Contact us to organize a free site survey. We will assess your unique shop layout and develop a bespoke cleaning schedule tailored to your footfall and budget. We walk the floor with your duty manager, identify priority zones (fitting rooms, till area, entrance matting, customer WC), review trading hours and access windows, capture your brand-standard SOP (yours or co-written with you), and send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians who follow strict standards of excellence and security protocols. Your allocated crew lead is briefed on your floor plan, your display stacks, your fitting-room configuration, and your visual merchandising rota &mdash; so cleaning happens around the VM, not through it. The same crew returns for every scheduled session, building real knowledge of your store&rsquo;s high-traffic aisles, screen-sensitive surfaces, and access preferences. We arrive in liveried vehicles, in uniform with photo I.D., with commercial-grade equipment and COSHH-compliant supplies.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Shop",
    description:
      "Experience a retail environment that looks, smells, and feels premium every day, backed by our MaundyClean satisfaction guarantee. You receive a signed daily checklist after every visit (cleaner signature, duty manager counter-signature), arrival and departure times, tasks completed, and any issues flagged &mdash; like a damaged display or a leaky fitting-room tap &mdash; before they become complaints. From &pound;16 per hour for a small boutique through to a fully bespoke retainer for a multi-site retail portfolio. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function RetailStoreSeoBooking() {
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
            We have optimized our booking experience to be uncomplicated and straightforward,
            providing the responsive management support Scottish business owners demand. From site
            survey to first clean in under a week &mdash; no friction, no waiting, no surprises. Just a
            front-line ready storefront, every visit, on schedule.
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
              Request Your Bespoke Retail Quote Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Retail Milestone
// (Semantic H2: "Solutions for Every Retail Milestone")
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services.
// All 4 card descriptions are ReactNode values (each contains an
// inline <Link> per the brief) - rendered via the
// typeof sol.description === "string" check.
// ============================================================

type InterlinkSolution = {
  icon: typeof Sparkles;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  description: ReactNode;
  cta: string;
};

const INTERLINK_SOLUTIONS: InterlinkSolution[] = [
  {
    icon: KeyRound,
    title: "New Store Launch",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy cleaning combined with retail shop cleaning to ensure a Scottish store is front-line ready for its grand opening",
    description: (
      <>
        Moving into a new unit? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        protocol ensures your premises are front-line ready for your grand opening. We work to the
        letting agent&rsquo;s inventory, restore the unit to its original condition, deep-clean every
        surface from ceiling vents to floor edges, and come back free of charge if anything is flagged
        on the inspection &mdash; the most stress-free way to open a new store on schedule and on
        budget.
      </>
    ),
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt:
      "After builders clean removing heavy layers of builders dust from a refurbished Scottish retail store before reopening",
    description: (
      <>
        If your shop has undergone refitting or home improvements, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is designed to remove heavy layers of builders&rsquo; dust. Fine dust left on a retail floor
        acts like sandpaper under foot traffic &mdash; we vacuum, damp-wipe, and protect every surface
        before the dust has a chance to damage stock, soft furnishings, or your customers&rsquo; first
        impression on reopening day. HEPA filtration throughout, and a final detail pass before
        handover.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: Sparkles,
    title: "Seasonal Resets",
    href: "/services/spring-cleaning",
    image: IMG.leaseSpring,
    imageAlt:
      "Top-to-bottom seasonal spring clean of a Scottish retail store before the Christmas or peak trading rush",
    description: (
      <>
        Prepare for peak sales periods with a{" "}
        <Link
          href="/services/spring-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          One-Off Spring Clean
        </Link>{" "}
        for a comprehensive top-to-bottom refresh. We pull units forward, clean behind and under
        fixtures, detail ceiling vents and high shelving, and reset the entire store to a
        &ldquo;like-new&rdquo; baseline. The single most effective way to start a new trading season
        with a spotless storefront &mdash; ideal before Christmas, January sales, Spring collection
        launches, or any peak trading window.
      </>
    ),
    cta: "Explore spring cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets",
    href: "/services/disinfection-services",
    image: IMG.leaseDisinfection,
    imageAlt:
      "Antiviral fogging and electrostatic disinfection being applied to a Scottish retail store during flu season",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        and deep-disinfection treatments to keep your staff and shoppers safe from viruses. Our
        electrostatic disinfection service covers every surface &mdash; including the underside of
        shelves, the back of mannequins, and the inside of fitting-room curtains &mdash; with an EN
        14476-certified virucide. Ideal for flu season, post-illness, or as a quarterly compliance
        reset for food-prep areas and customer washrooms.
      </>
    ),
    cta: "Explore disinfection services",
  },
];

export function RetailStoreSeoInterlinking() {
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
            Beyond the daily clean &middot; retail milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Retail Milestone
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring retail cleaning provides daily presentation excellence, but we offer
            specialized &ldquo;resets&rdquo; for major property milestones &mdash; from new store
            launches and post-renovation dust clear-outs through seasonal peak-trading refreshes to
            antiviral hygiene resets for biological security. The same trusted crew can step up
            whenever your store needs more than a standard visit.
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
                      {typeof sol.description === "string" ? (
                        <span dangerouslySetInnerHTML={{ __html: sol.description }} />
                      ) : (
                        sol.description
                      )}
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
// (Semantic H2: "Retail & Shop Cleaning Near Me, Across Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function RetailStoreSeoNearMe() {
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
              Local retail &amp; shop cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Retail &amp; Shop Cleaning Near Me, Across Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;retail store cleaning near me&rdquo; or &ldquo;shop cleaning
              company near me&rdquo; in Scotland? Maundy Clean covers high streets, retail parks,
              and shopping centres across the Central Belt, Highlands, Borders, and Islands. Same
              vetted uniformed crews, same child-safe eco-friendly supplies, same dedicated crew
              every visit &mdash; wherever your store happens to be. Find your local retail cleaning
              specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean retail and shop cleaning service coverage areas"
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
                  Same vetted uniformed crews, same 100% satisfaction guarantee &mdash; from Glasgow
                  to Inverness.
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
                Find your local retail crew
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
                    href={`/services/retail-store-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> retail cleaning</span>
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
                  href="/services/retail-store-cleaning-near-me#locations"
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
            Our local retail cleaning crews operate across Glasgow&rsquo;s Style Mile, Edinburgh&rsquo;s
            Princes Street, Aberdeen&rsquo;s Union Street, Dundee&rsquo;s Overgate, and the Highlands
            &mdash; from Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re searching for daily
            shop-front cleaning in Glasgow, after-hours retail turnover in Edinburgh, display-aware
            boutique cleaning in Aberdeen, or shopping-centre unit cleaning anywhere in between,
            Maundy Clean assigns a vetted, PAYE-employed crew that stays with you for the long run.
            Same crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Retail Quote Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function RetailStoreSeoFinalCta() {
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
            Ready to book your site survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Bespoke Retail Quote Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted uniformed crews, display-aware shop-floor care,
            child-safe eco-friendly supplies, signed daily checklists, and a 100% satisfaction
            guarantee &mdash; from &pound;16 per hour for a small boutique through to a fully
            bespoke multi-site retail retainer. No pushy sales call, no waiting 24 hours for a
            callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Retail Quote Today
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
                View Our Commercial Cleaning Checklist
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
// 3 Q&As from the brief (insured for retail, own equipment, key handovers)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for retail environments?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience serving both the residential and commercial sectors across Scotland. We hold &pound;5m public liability cover (suitable for high-street units, shopping centre tenancies, and retail park stores), &pound;5m employer&rsquo;s liability cover, and contingent employers&rsquo; liability. Every crew member carries Disclosure Scotland PVG scheme membership and wears an official uniform with photo I.D. We can name your store on our policy as additional insured &mdash; a common requirement for shopping centre and retail park leases &mdash; and provide enhanced background checks for stores handling high-value stock. Certificates of insurance are available on request; we will not begin work until your facilities team has the documentation they need.",
  },
  {
    q: "Do you provide your own professional equipment?",
    a: "Yes. We supply all our own professional-grade equipment and non-toxic supplies, which are included in your competitive quote. Every crew arrives in a liveried van with commercial-grade vacuums (Sebo BS36/BS46, Henry HVR200), microfibre flat-mop systems with separate dirty-water extraction, colour-coded cloths (red for toilets, blue for sinks, green for staff kitchen, yellow for shop floor), HSE-compliant chemicals with COSHH datasheets on file, PPE, squeegees for windows and mirrors, and EN 1276 food-safe bactericidal chemistry for till-zone disinfection. You provide consumables &mdash; bin liners, paper towel, toilet paper, hand soap &mdash; or we can manage consumable restocking for an additional monthly fee so you never run out during trading hours.",
  },
  {
    q: "Can you handle key handovers for out-of-hours cleaning?",
    a: "Yes. We operate a secure safe key system to ensure your property remains protected while we deliver a 5-star clean before your team arrives for work. Keys are stored in a coded safe at our secured premises, alarm codes are encrypted and never labelled with your address, and key-handover protocols are audited quarterly. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-sign-out and key-sign-in procedures with a dual-signature audit trail. Whether you need pre-opening resets at 6am, post-closing deep cleans at 10pm, or full out-of-hours service 7 days a week, your keys and your property are protected to the standard your insurer and your duty manager expect.",
  },
];

export function RetailStoreSeoFaq() {
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
            Retail &amp; shop cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our retail store cleaning clients ask most often.
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Retail Quote Today
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
                View Our Commercial Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

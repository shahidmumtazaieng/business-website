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
  Crown,
  Users,
  KeyRound,
  Hammer,
  UserCheck,
  Phone,
  ClipboardCheck,
  FileText,
  UtensilsCrossed,
  HeartPulse,
  Flame,
  SprayCan,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches retail-store + corporate-facility image pool)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistFront:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistWashroom:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseUpholstery:
    "https://sfile.chatglm.cn/images-ppt/8a7c4d6e0b51.jpg",
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
// (city-centre + neighbourhood coverage across Scotland)
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
// Semantic H1: "Professional Restaurant Cleaning & Recurring Commercial Maintenance Scotland"
// ============================================================

export function RestaurantSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean uniformed restaurant cleaning team resetting a Glasgow bar and pub before opening"
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
            Restaurant &amp; Bar Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Restaurant Cleaning &amp; Recurring Commercial Maintenance Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Consistent Hygiene, Technical Compliance, and the Maundy Tradition of Excellence for the
            Scottish Independent Bar and Pub Scene. In the fast-paced world of Scottish hospitality,
            your customers&rsquo; passion is great food and drink, but their priority is hygiene.
            Within seconds of entering your establishment in Glasgow or Edinburgh, patrons decide if
            they want to stay based on the perceived standard of cleanliness. At MaundyClean, we
            understand that for bar and pub owners, restaurant cleaning is not just a daily chore
            &mdash; it is a <strong className="text-white">CRUCIAL</strong> component of your
            reputation and business success.
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
                Book Your Free Consultation Today
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
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Guest-Safe, Non-Toxic Supplies
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Out-of-Hours, 7 Days a Week
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
// Split-layout with aspect-[4/3] image on the left and the two
// verbatim intro paragraphs on the right (the second paragraph
// contains the inline <Link> to /services/recurring-home-cleaning).
// ============================================================

export function RestaurantSeoIntro() {
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
                alt="Maundy Clean uniformed restaurant cleaning crew resetting a Scottish bar and pub before opening"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Sanctuary Care for the Catering World
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy and &ldquo;sanctuary&rdquo; care we bring to
                  Scotland&rsquo;s finest residences &mdash; applied to your bar, pub, or restaurant.
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
              Restaurant &amp; bar care &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The Maundy Clean Standard for Scottish Hospitality
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the fast-paced world of Scottish hospitality, your customers&rsquo; passion is great
              food and drink, but their priority is hygiene. Within seconds of entering your
              establishment in Glasgow or Edinburgh, patrons decide if they want to stay based on the
              perceived standard of cleanliness. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we understand
              that for bar and pub owners, restaurant cleaning is not just a daily chore &mdash; it is
              a CRUCIAL component of your reputation and business success.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s finest residences, we bring that same level of technical intimacy
              and &ldquo;sanctuary&rdquo; care to the commercial catering world. We provide a
              premium, local alternative to impersonal agencies, acting as a motivated partner that
              supports your specific operational requirements.
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
// Section 2 - Why MaundyClean is the Authority in Scottish Pub & Restaurant Cleaning
// (Semantic H2: "Why MaundyClean is the Authority in Scottish Pub & Restaurant Cleaning")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Time",
    description:
      "Reliability is built on familiarity. We ensure the same highly trained team or individual manages your account every time. This allows our professionals to get to know your specific requirements and the nuances of your venue &mdash; from your fryer boil-out rota and your grease-trap location, through your canopied extraction layout, to your glass-wash protocols and your front-of-house floor plan. When the regular crew lead is on annual leave, we send a trained backup who has been briefed on your site and we tell you in advance. The same faces, every visit, building real accountability to your kitchen&rsquo;s hygiene standard and your EHO inspection readiness.",
  },
  {
    icon: Shield,
    title: "Total Regulatory Compliance",
    description:
      "We take health and safety seriously. We are fully compliant with all current legislation and provide all relevant documentation, including risk assessments and COSHH sheets, as standard. Every product we use has a current COSHH datasheet on file, every method is mapped to your HACCP plan, and every crew member is trained on food-safety protocols (allergen-aware, colour-coded microfibre to prevent cross-contamination between raw-meat, cooked-food, salad, and washroom zones). We hold &pound;5m public liability cover and &pound;5m employer&rsquo;s liability cover &mdash; suitable for independent bars, restaurant groups, and leased pub tenancies alike. Audit-ready documentation is provided every visit.",
  },
  {
    icon: Clock,
    title: "Flexible Out-of-Hours Support",
    description:
      "We know that restaurant cycles are demanding. Our teams are committed to working whatever hours are necessary &mdash; including early mornings, late evenings, or weekends &mdash; to suit your venue&rsquo;s schedule. The most common windows are pre-open (7am-9am) for a front-line ready reset, post-close (10pm-1am) for a full deep turnover, or split shifts (light touch during service, deep clean after hours). We can also support day-porter service for high-traffic FOH areas and washrooms during peak trading. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols &mdash; keys stored in a coded safe, alarm codes encrypted, never labelled with your address.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Guest Safe",
    description:
      "We supply all our own professional-grade equipment and use only certified non-toxic products. This ensures a healthy environment for your staff and customers without leaving harsh chemical odours in dining areas. COSHH datasheets are available for every product we use, and we default to eco-labelled chemicals with food-safe alternatives (EN 1276 bactericide, EN 14476 virucide) for prep surfaces, bar tops, and glassware zones. All PPE is provided. Colour-coded microfibre cloths prevent cross-contamination between kitchen, bar, FOH, and washroom. Your sustainability team will love the audit-ready monthly logs (cleaning product use, water use, waste segregation) that feed directly into your ESG and Food Standards Scotland reporting.",
  },
];

export function RestaurantSeoWhy() {
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
                alt="Maundy Clean restaurant cleaning crew &mdash; uniformed, PVG-checked, and trained for kitchen and bar service"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Local Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, uniformed, and trained in food-safe catering etiquette. Same crew
                  every visit &mdash; never a rotating cast of strangers.
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
              Why MaundyClean is the Authority in Scottish Pub &amp; Restaurant Cleaning
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While national franchises often provide inconsistent staff, MaundyClean focuses on
              high-trust relationships. We address the primary priorities of bar managers:
              reliability, flexibility, and value for money. By combining vetted uniformed teams, the
              same dedicated crew every visit, out-of-hours 7-day scheduling, and guest-safe
              eco-friendly supplies as standard, we project the high standards your customers expect
              &mdash; and the audit-ready documentation your EHO inspector demands.
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
                      <p
                        className="text-sm text-[var(--muted-foreground)] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />
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
                  <p
                    className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
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
// Section 3 - Our Comprehensive Restaurant Maintenance & Deep Cleaning Checklist
// (Semantic H2: "Our Comprehensive Restaurant Maintenance & Deep Cleaning Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Kitchen Deep Cleaning (The Technical Heart)
//   2. Front of House & Public Areas
//   3. Washroom & Facility Hygiene
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: UtensilsCrossed,
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean restaurant crew deep cleaning a commercial kitchen extraction canopy and cooking line in Scotland",
    title: "1. Kitchen Deep Cleaning (The Technical Heart)",
    description:
      "As a &ldquo;breakout&rdquo; niche in Scottish cleaning trends, our kitchen care is unmatched. The technical heart of every restaurant visit &mdash; the kitchen is the highest-risk zone for fire safety, food-safety compliance, and EHO inspection outcomes. Heavy grease load, high temperatures, and constant food debris mean a single missed deep clean can result in a TR19 canopy failure, a HACCP non-conformance, or a Food Standards Scotland enforcement letter. Our kitchen protocol uses non-damaging formulas and food-safe chemistry &mdash; no chlorine on stainless steel, no caustic on aluminium &mdash; applied by trained catering-experienced crews.",
    points: [
      {
        icon: Flame,
        title: "Extraction & Canopy Care",
        text: "Removing heavy layers of grease and grime to ensure fire safety and hygiene compliance. We degrease canopy filters weekly, deep clean the full extraction system (canopy, plenum, ductwork) to TR19 standard every 3 to 6 months depending on volume, and inspect grease traps as standard. Insurance-compliant post-clean certification is provided &mdash; critical for your fire-safety audit and your landlord&rsquo;s compliance file.",
      },
      {
        icon: SprayCan,
        title: "Appliance Sanitization",
        text: "Deep cleaning of ovens, hobs, and fryers using non-damaging formulas. We boil out fryers, descale combi-ovens, degrease gas hob grates, and detail the seals, handles, and control panels of every appliance in the line. Non-caustic food-safe chemistry on aluminium and stainless steel; no pitting, no taint, no residue. Oven doors polished inside and out, fryer tanks descaled and rinsed, and the gas/electric supply zone behind the line hand-detailed every deep-clean visit.",
      },
      {
        icon: Sparkles,
        title: "Surface Restoration",
        text: "Disinfecting all ceramic items, worktops, and splashbacks to a &ldquo;speechlessly spotless&rdquo; finish. Colour-coded microfibre (red for raw-meat prep, blue for cooked-food prep, green for salad/fruit) prevents cross-contamination. Stainless-steel worktops are sanitised with food-safe EN 1276 bactericide and polished to a streak-free shine. Walls behind the line and splashbacks are degreased, floors are machine-scrubbed with a non-slip sanitiser, and the prep sink is descaled and disinfected every visit.",
      },
    ],
  },
  {
    icon: Crown,
    image: IMG.checklistFront,
    imageAlt: "Maundy Clean crew polishing a restaurant front-of-house dining area, bar, and fixtures in a Scottish bar",
    title: "2. Front of House & Public Areas",
    description:
      "The dining room and bar are where the customer decides whether to come back. A streaked glass door, a sticky table, or a smudged mirror chips at the customer&rsquo;s impression of your brand within seconds &mdash; and a single Tripadvisor review mentioning &ldquo;dirty&rdquo; can cost you 30 covers a week. Our FOH protocol protects the customer experience without disrupting service: light touch during trading (table-tops sanitised between covers, glass polished, floors swept), full reset after close. The bar gets full high-touch disinfection on every close: tap handles, optic nozzles, glass-rail, POS terminal, card reader, menus.",
    points: [
      {
        icon: Droplets,
        title: "Floor & Carpet Shampooing",
        text: "Intensive vacuuming and shampooing to remove city-center dust and high-traffic stains. We use the right method for the right surface &mdash; hot-water extraction for carpeted dining zones and entrance matting, low-moisture scrubbing for vinyl and LVT bar floors, dry-only methods for laminate joins. Heel marks, chewing gum, and spilled-beer residues are spot-treated. A polished bar floor reflects the lighting and makes the whole room feel premium.",
      },
      {
        icon: Sparkles,
        title: "Surface Polishing",
        text: "Meticulous dusting of furniture, bars, and fixtures. We polish wood, glass, and mirrors to a streak-free shine. Bar tops, table-tops, condiment caddies, light fixtures, signage, and beer-glass shelving are detailed with the correct chemistry &mdash; pH-neutral for premium wood, lint-free cloths for glass and chrome, anti-static for acrylic menu boards. Your bartender will never arrive to a smudged optic or a sticky well.",
      },
      {
        icon: Wind,
        title: "Window Cleaning",
        text: "Professional cleaning of the inside and outside of your windows to maximize natural light and street-level curb appeal. We squeegee the inside of all glass doors, storefront windows, and internal partitions on every visit, and schedule external window cleaning weekly (or daily for high-street units exposed to bus-stop and traffic grime). Mirrors in washrooms and behind bars are squeegeed, never wiped &mdash; a streaked mirror kills the room&rsquo;s perception of cleanliness.",
      },
    ],
  },
  {
    icon: Shield,
    image: IMG.checklistWashroom,
    imageAlt: "Restaurant customer washroom being deep sanitised by Maundy Clean crew in a Scottish bar and pub",
    title: "3. Washroom & Facility Hygiene",
    description:
      "Customer washrooms make or break the dining experience. A spotless dining room with a smelly customer washroom is a failure &mdash; and the customer who sees it tells their friends, leaves a Tripadvisor review, and never comes back. Our hygiene protocol for these zones uses hospital-grade disinfectants, separate colour-coded cloths (red for toilets, blue for sinks, green for staff areas), and a final-fragrance pass that leaves the space genuinely fresh &mdash; not masked with cheap air freshener.",
    points: [
      {
        icon: HeartPulse,
        title: "Deep Sanitization",
        text: "Intensive cleaning of toilets and sinks, buffing chrome to a high shine, and disinfecting all high-touch points to keep germs and bugs at bay. We descale toilets with a non-abrasive acid, disinfect with an EN 1276-certified bactericide, and polish chrome fittings to a streak-free shine. Mirrors are squeegeed, never wiped. Sanitary bins are checked, emptied, and replaced. Chrome taps, soap dispensers, and door handles are disinfected every visit &mdash; the touch-points your customers actually notice.",
      },
      {
        icon: CheckCircle2,
        title: "High-Touch Point Care",
        text: "Disinfecting door handles, light switches, hand-dryer buttons, baby-changing stations, and cubicle locks to keep germs and bugs at bay. EN 1276 food-safe bactericidal chemistry &mdash; no taint, no perfume, no residue &mdash; critical for both customer perception and staff health. We also disinfect the entry phone, the alarm keypad, and the staff entrance handle on every close: every surface a hand touches between the street and the dining room.",
      },
      {
        icon: SprayCan,
        title: "Often-Missed Details",
        text: "Our cleaners meticulously wipe visible skirting boards, door frames, tile grout, and even ceiling fixtures as standard. These are the surfaces that customers notice subconsciously &mdash; a dusty vent or a stained grout line undermines a polished dining room. We hand-detail every perimeter surface, dust ceiling light fixtures and air-conditioning vents, and wipe down the inside of the windows so the room feels genuinely reset, not just the centre of the floor.",
      },
    ],
  },
];

export function RestaurantSeoChecklist() {
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
            Beyond the standard surface wipe
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Restaurant Maintenance &amp; Deep Cleaning Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our restaurant cleaning services move beyond the standard surface wipe to deliver
            technical depth in every area of your establishment. We follow a rigorous, agency-approved
            checklist designed to ensure every inch of your venue is maintained from top to bottom
            &mdash; from the kitchen extraction canopy through the dining-room floor to the washroom
            high-touch points. Below is the scope we deliver as standard, regardless of venue size.
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
    title: "Initial Consultation & Site Survey",
    description:
      "Contact us to establish how many staff and hours you need. We walk the venue with your duty manager, identify priority zones (kitchen line, extraction canopy, FOH dining room, bar, customer WC), review trading hours and access windows, capture your HACCP plan and COSHH file, and develop a bespoke schedule and standards of excellence that our team will closely adhere to. We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team with in-depth knowledge of catering environments and &ldquo;showcasing&rdquo; requirements. Your allocated crew lead is briefed on your kitchen layout, your extraction system, your fryer boil-out rota, your glass-wash protocols, and your front-of-house floor plan &mdash; so cleaning happens around the service, not through it. The same crew returns for every scheduled session, building real knowledge of your high-traffic zones, your screen-sensitive surfaces, and your access preferences. We arrive in liveried vehicles, in uniform with photo I.D., with commercial-grade equipment and COSHH-compliant food-safe chemistry.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Venue",
    description:
      "Experience a space that looks, smells, and feels fresh every single day, backed by our MaundyClean satisfaction guarantee. You receive a signed daily checklist after every visit (cleaner signature, duty manager counter-signature), arrival and departure times, tasks completed, and any issues flagged &mdash; like a leaking tap, a blown bulb, or a canopy filter due for TR19 deep clean &mdash; before they become complaints. From &pound;16 per hour for a small independent bar through to a fully bespoke retainer for a multi-site restaurant group. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function RestaurantSeoBooking() {
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
            addressing the fast-paced needs of the independent bar scene. From site survey to first
            clean in under a week &mdash; no friction, no waiting, no surprises. Just a pristine
            venue, every visit, on schedule.
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
              Book Your Free Consultation Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Commercial Solutions for Every Stage
// (Semantic H2: "Commercial Solutions for Every Stage")
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Seasonal Resets &middot; Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Top-to-bottom seasonal deep clean of a Scottish restaurant before the Christmas or Spring rush",
    description:
      "Prepare for the busy Christmas or Spring rush with a top-to-bottom Deep House Cleaning protocol applied to your commercial space. We pull equipment away from walls, detail ceiling vents and high shelving, degrease extraction ductwork, machine-scrub kitchen floors, and reset the entire venue to a &ldquo;like-new&rdquo; baseline. The single most effective way to start a new trading season with a spotless, EHO-ready venue.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty restaurant unit being deep cleaned for lease handover by Maundy Clean in Scotland",
    description:
      "Opening a new site? Our End of Tenancy Cleaning ensures the property is front-line ready for your launch. We work to the letting agent&rsquo;s inventory, restore the unit to its original condition, and come back free of charge if anything is flagged on the inspection &mdash; the most stress-free way to close out a restaurant lease or open a new bar.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish bar and restaurant",
    description:
      "If your venue has recently had home improvements or shopfitting, our After Builders Clean is designed to remove heavy construction dust. Fine dust left on a kitchen floor acts like sandpaper under foot traffic &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage equipment, soft furnishings, or your customers&rsquo; first impression on reopening day.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Specialist Fabric Care &middot; Upholstery Cleaning",
    href: "/services/upholstery-cleaning",
    image: IMG.leaseUpholstery,
    imageAlt: "Booth seating and banquettes being deep cleaned to remove food and drink odours in a Scottish restaurant",
    description:
      "Rejuvenate your seating with our Upholstery Cleaning service to remove unwanted odours and stains. Booth banquettes, bar stools, and soft furnishings absorb food, drink, and grease odours over months of trading &mdash; our hot-water extraction process lifts the soil and the smell, extending the life of your investment and refreshing the dining-room ambience before a busy service.",
    cta: "Explore upholstery cleaning",
  },
];

export function RestaurantSeoInterlinking() {
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
            Beyond the daily clean &middot; restaurant milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Commercial Solutions for Every Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning keeps your business running, but we offer specialized
            &ldquo;resets&rdquo; for major property milestones &mdash; from seasonal refreshes before
            peak trading, through lease handovers and post-shopfitting dust clear-outs, to specialist
            fabric care that rejuvenates your seating. The same trusted crew can step up whenever your
            venue needs more than a standard visit.
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
      </div>
    </section>
  );
}

// ============================================================
// Section 6 - "Near Me" Location Internal Links
// (Semantic H2: "Restaurant Cleaning Near Me, Across Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function RestaurantSeoNearMe() {
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
              Local restaurant &amp; bar cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Restaurant Cleaning Near Me, Across Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;restaurant cleaning near me&rdquo; or &ldquo;bar cleaning company
              near me&rdquo; in Scotland? Maundy Clean covers city-centre bars, neighbourhood pubs,
              and standalone restaurants across the Central Belt, Highlands, Borders, and Islands.
              Same vetted uniformed crews, same guest-safe eco-friendly supplies, same dedicated crew
              every visit &mdash; wherever your venue happens to be. Find your local restaurant
              cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean restaurant and bar cleaning service coverage areas"
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
                Find your local restaurant crew
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
                    href={`/services/restaurant-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> restaurant</span>
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
                  href="/services/restaurant-cleaning-near-me"
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
            Our local restaurant and bar cleaning crews operate across Glasgow&rsquo;s Merchant City,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s Union Street, Dundee&rsquo;s West End, and
            the Highlands &mdash; from Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re
            searching for daily FOH reset in Glasgow, after-hours BOH turnover in Edinburgh,
            kitchen-extraction TR19 deep cleans in Aberdeen, or neighbourhood pub cleaning anywhere
            in between, Maundy Clean assigns a vetted, PAYE-employed crew that stays with you for the
            long run. Same crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Book Your Free Consultation Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function RestaurantSeoFinalCta() {
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
            Ready to book your consultation?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Book Your Free Consultation Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted uniformed crews, kitchen-deep-clean expertise,
            EHO-ready compliance documentation, signed daily checklists, and a 100% satisfaction
            guarantee &mdash; from &pound;16 per hour for a small independent bar through to a fully
            bespoke multi-site restaurant retainer. No pushy sales call, no waiting 24 hours for a
            callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Book Your Free Consultation Today
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
// 3 Q&As from the brief (insured for hospitality, all supplies, quality control)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for hospitality venues?",
    a: "Yes. MaundyClean is a fully insured professional cleaning company with years of experience in both residential and commercial sectors. We hold &pound;5m public liability cover (suitable for independent bars, leased pub tenancies, restaurant groups, and licensed premises), &pound;5m employer&rsquo;s liability cover, and contingent employers&rsquo; liability. Every crew member carries Disclosure Scotland PVG scheme membership, wears an official uniform with photo I.D., and is trained on food-safety protocols (HACCP-aware, allergen-aware, colour-coded microfibre). We can name your venue on our policy as additional insured &mdash; a common requirement for licensed premises, brewery-tied leases, and shopping-centre restaurant units &mdash; and provide enhanced background checks for staff handling high-value stock or operating in sensitive locations. Certificates of insurance and our full compliance file (COSHH datasheets, risk assessments, method statements, training records) are available on request; we will not begin work until your facilities team and your EHO inspector have the documentation they need.",
  },
  {
    q: "Do you provide all cleaning supplies?",
    a: "Absolutely. We supply all of our own professional-grade equipment and eco-friendly supplies, which are included in your competitive quote. Every crew arrives in a liveried van with commercial-grade vacuums (Sebo BS36/BS46, Henry HVR200), microfibre flat-mop systems with separate dirty-water extraction, colour-coded cloths (red for raw-meat prep, blue for cooked-food prep, green for salad and fruit, yellow for bar and washroom), HSE-compliant chemicals with COSHH datasheets on file, PPE, squeegees for windows and mirrors, and EN 1276 food-safe bactericidal chemistry for kitchen surfaces and prep zones. We use non-toxic, guest-safe products by default &mdash; no harsh chemical odours left in dining areas &mdash; with eco-labelled alternatives for kitchens, bars, and FOH. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser tablets) or we can manage consumable restocking for an additional monthly fee so you never run out during service.",
  },
  {
    q: "Can you provide regular quality control inspections?",
    a: "Yes. We perform regular inspections to ensure our high standards are consistently maintained and that there are no issues with reliability. Every restaurant client gets a dedicated account manager who knows your venue, your team, your access protocols, and your HACCP plan &mdash; direct mobile number, 24-hour response, quarterly on-site walk-throughs alongside your duty manager. After every visit you receive a signed daily checklist (cleaner signature, duty manager counter-signature), arrival and departure times, tasks completed, and any issues flagged &mdash; like a leaking tap, a blown bulb, or a canopy filter due for TR19 deep clean &mdash; before they become complaints. We also conduct unannounced quality audits (typically monthly for high-volume venues, quarterly for low-volume sites) using our internal scoring rubric, share the results with you, and trigger a free re-clean within 24 to 48 hours if any line item drops below standard. Our visit-completion rate in 2025 was 99.6%.",
  },
];

export function RestaurantSeoFaq() {
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
            Restaurant cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our restaurant and bar cleaning clients ask most often.
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
                Book Your Free Consultation Today
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

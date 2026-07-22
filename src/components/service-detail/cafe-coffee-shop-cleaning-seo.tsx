"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Crown,
  KeyRound,
  Hammer,
  UserCheck,
  ClipboardCheck,
  FileText,
  UtensilsCrossed,
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches restaurant-cleaning + retail-store image pool)
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%209.44.32%20PM.jpeg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%209.44.32%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_1on43k1on43k1on4.png",
  checklistFront:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistCounter:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseAntiviral:
    "https://sfile.chatglm.cn/images-ppt/8a7c4d6e0b51.jpg",
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
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
// Semantic H1: "Professional Café & Coffee Shop Cleaning Services Scotland"
// ============================================================

export function CafeCoffeeShopSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean uniformed café and coffee shop cleaning team resetting a Scottish speciality coffee bar before opening"
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
            Café &amp; Coffee Shop Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Café &amp; Coffee Shop Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Consistent Hygiene, Food Safety Compliance, and the Maundy Tradition of Excellence for
            Your Urban Sanctuary. In Scotland&rsquo;s vibrant coffee culture &mdash; from the
            bustling streets of Glasgow and Edinburgh to the eateries of the Highlands &mdash; your
            customers&rsquo; first impression is defined by your standard of cleanliness. A sparkling
            café is not just a &ldquo;nice to have&rdquo;; it is a{" "}
            <strong className="text-white">CRUCIAL</strong> component of your brand that ensures your
            premises remain compliant and ready for inspection.
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
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> Fully Insured &amp; PVG-Checked
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe, Non-Toxic Supplies
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Pre-Open &amp; Post-Close, 7 Days
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

export function CafeCoffeeShopSeoIntro() {
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
                alt="Maundy Clean uniformed café cleaning crew resetting a Scottish speciality coffee bar before opening"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Sanctuary Care for the Coffee World
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy and &ldquo;sanctuary&rdquo; care we bring to
                  Scotland&rsquo;s finest residences &mdash; applied to your café, espresso bar, or
                  coffee shop.
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
              Café &amp; coffee shop care &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The Maundy Clean Standard for Scottish Coffee Culture
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In Scotland&rsquo;s vibrant coffee culture &mdash; from the bustling streets of Glasgow
              and Edinburgh to the eateries of the Highlands &mdash; your customers&rsquo; first
              impression is defined by your standard of cleanliness. A sparkling café is not just a
              &ldquo;nice to have&rdquo;; it is a CRUCIAL component of your brand that ensures your
              premises remain compliant and ready for inspection. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we understand
              that hospitality cleaning requires a technical, food-hygiene-focused approach that goes
              beyond the basic surface wipe.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s finest residences, we bring that same level of technical detail,
              intimacy, and &ldquo;sanctuary&rdquo; care to the commercial world. We provide a
              premium, local alternative to impersonal national agencies, acting as a motivated
              partner that &ldquo;showcases&rdquo; your business to its absolute best.
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
// Section 2 - Why MaundyClean is Scotland's Authority in Café Maintenance
// (Semantic H2: "Why MaundyClean is Scotland's Authority in Café Maintenance")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is built on familiarity. We ensure the same highly trained professional or individual manages your account every time. This allows our staff to get to know your specific requirements and the nuances of your venue &mdash; from your espresso machine&rsquo;s group-head backflush routine and your milk-wand purge schedule, through your pastry-display rotation and your under-counter fridge layout, to your front-of-house floor plan and your customer WC refresh rhythm. When the regular crew lead is on annual leave, we send a trained backup who has been briefed on your site and we tell you in advance. The same faces, every visit, building real accountability to your café&rsquo;s hygiene standard and your EHO inspection readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Total Food Hygiene Compliance",
    description:
      "We take hospitality standards seriously. Our teams are trained in food hygiene cleaning protocols, ensuring every inch of your front-of-house and back-of-house areas meets rigorous requirements. We are fully compliant with all current legislation and provide all relevant documentation, including risk assessments and COSHH sheets, as standard. Every product we use has a current COSHH datasheet on file, every method is mapped to your HACCP plan, and every crew member is trained on food-safety protocols (allergen-aware, colour-coded microfibre to prevent cross-contamination between raw-pastry, dairy, customer, and washroom zones). We hold &pound;5m public liability cover and &pound;5m employer&rsquo;s liability cover &mdash; suitable for independent cafés, multi-site specialty groups, and franchise operators alike. Audit-ready documentation is provided every visit.",
  },
  {
    icon: Clock,
    title: "Flexible Operational Hours",
    description:
      "We know that café cycles are demanding. We offer motivated and flexible support that works around your business &mdash; whether you need pre-opening or post-closing cleans, out-of-hours, or weekend turnovers. The most common windows are pre-open (6am-8am) for a front-line ready reset before the morning rush, post-close (4pm-6pm or 6pm-8pm) for a full deep turnover after the afternoon trade, or split shifts (light touch during service, deep clean after hours). We can also support day-porter service for high-traffic FOH areas, bar stations, and washrooms during peak trading. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols &mdash; keys stored in a coded safe, alarm codes encrypted, never labelled with your address.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "We supply all our own professional-grade equipment and use only certified non-toxic, child-safe, and pet-safe products. This ensures a healthy environment for your staff and customers without leaving harsh chemical residues in dining areas. COSHH datasheets are available for every product we use, and we default to eco-labelled chemicals with food-safe alternatives (EN 1276 bactericide, EN 14476 virucide) for prep surfaces, bar tops, and pastry-display zones. All PPE is provided. Colour-coded microfibre cloths prevent cross-contamination between kitchen, bar, FOH, and washroom. Your sustainability team will love the audit-ready monthly logs (cleaning product use, water use, waste segregation) that feed directly into your ESG and Food Standards Scotland reporting.",
  },
];

export function CafeCoffeeShopSeoWhy() {
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
                alt="Maundy Clean café cleaning crew &mdash; uniformed, PVG-checked, and trained for espresso machine and bar service"
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
              Why MaundyClean is Scotland&rsquo;s Authority in Café Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While national franchises often provide inconsistent staff, MaundyClean focuses on
              building high-trust, long-term relationships. We address the primary priorities of
              business owners: reliability, flexibility, and impeccable standards. By combining
              vetted uniformed teams, the same dedicated crew every visit, flexible out-of-hours
              scheduling, and child-safe eco-friendly supplies as standard, we project the high
              standards your customers expect &mdash; and the audit-ready documentation your EHO
              inspector demands.
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
// Section 3 - Our Comprehensive Café & Coffee Shop Cleaning Checklist
// (Semantic H2: "Our Comprehensive Café & Coffee Shop Cleaning Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Front-of-House & Customer Areas
//   2. Counter & Service Areas (The Technical Hub)
//   3. Back-of-House & Kitchen Hygiene
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Crown,
    image: IMG.checklistFront,
    imageAlt: "Maundy Clean crew polishing a café front-of-house dining area, espresso bar, and fixtures in Scotland",
    title: "1. Front-of-House & Customer Areas",
    description:
      "The seating zone and shopfront are where the customer decides whether to stay &mdash; or walk past. A sticky table, a smudged glass door, or a streaked mirror chips at the customer&rsquo;s impression of your brand within seconds &mdash; and a single Tripadvisor review mentioning &ldquo;dirty&rdquo; can cost you 30 covers a day. Our FOH protocol protects the customer experience without disrupting service: light touch during trading (table-tops sanitised between covers, glass polished, floors swept), full reset after close. The barista zone gets full high-touch disinfection on every close: portafilter handles, group-head spouts, steam-wand tips, POS terminal, card reader, menus, and condiment caddies.",
    points: [
      {
        title: "Seating & Table Sanitization",
        text: "Meticulous disinfecting of all surfaces to ensure a safe and inviting dining experience. Table-tops, chair arms, booth banquettes, high-chair trays, and condiment caddies are sanitised with EN 1276 food-safe bactericide between every cover &mdash; no perfume, no taint, no residue. Customer-facing touch-points (door handles, light switches, POS terminal, card reader, menus) are disinfected on every visit. The customer&rsquo;s first 30 seconds set the tone of the whole visit.",
      },
      {
        title: "Surface Polishing",
        text: "Dusting and wiping of displays, fixtures, and ornaments. We polish wood, glass, and mirrors to a streak-free shine. Pastry-display glass, cake domes, light fixtures, signage, and shelving are detailed with the correct chemistry &mdash; pH-neutral for premium wood, lint-free cloths for glass and chrome, anti-static for acrylic menu boards. Your barista will never arrive to a smudged portafilter handle or a sticky grinder collar.",
      },
      {
        title: "Floor Care & Degreasing",
        text: "Intensive vacuuming and mopping of high-traffic flooring, with specialized degreasing to remove coffee spills and footfall grime. We use the right method for the right surface &mdash; low-moisture scrubbing for vinyl and LVT, dry-only methods for laminate joins, machine-scrubbing for tile grout. Coffee-oil spills, milk-splash residue, sugar-stickiness, and heel marks are spot-treated. A polished café floor reflects the lighting and makes the whole room feel premium.",
      },
      {
        title: "Inside Window Care",
        text: "Meticulous cleaning of internal glass to maximize natural light and street-side appeal. We squeegee the inside of all glass doors, storefront windows, internal partitions, and pastry-display glass on every visit, and schedule external window cleaning weekly (or daily for high-street units exposed to bus-stop and traffic grime). Mirrors in washrooms and behind bars are squeegeed, never wiped &mdash; a streaked mirror kills the room&rsquo;s perception of cleanliness.",
      },
    ],
  },
  {
    icon: UtensilsCrossed,
    image: IMG.checklistCounter,
    imageAlt: "Maundy Clean café crew deep cleaning an espresso machine, grinder, and barista service counter in Scotland",
    title: "2. Counter & Service Areas (The Technical Hub)",
    description:
      "The counter and barista zone are the highest-risk, highest-visibility area in any café &mdash; the &ldquo;technical hub&rdquo; where customers stand to order, watch the espresso shot pull, and judge the standard of your operation. Coffee oils oxidise into a sticky residue within hours; milk residue cultures bacteria in minutes. Our counter protocol uses food-safe, non-taint chemistry and colour-coded microfibre (blue for bar-zone, green for customer-facing, yellow for washroom) &mdash; applied by trained catering-experienced crews who know the difference between a portafilter and a steam wand.",
    points: [
      {
        title: "Equipment Maintenance",
        text: "Wiping down coffee machines, grinders, and service counters to professional standards. Espresso machine group-heads are backflushed with food-safe detergent, portafilter baskets are soaked in Cafiza, steam-wand tips are soaked in milk-frother cleaner, drip trays are descaled, and the machine housing is polished with a food-safe stainless-steel cleaner. The grinder collar, dosing chamber, and bean hopper are vacuumed and wiped. Counter surfaces, bar-tops, and glass-rails are sanitised with EN 1276 bactericide.",
      },
      {
        title: "Sanitary Dispensing",
        text: "Cleaning bar and drinks stations, ensuring all high-touch points are bacteria-free. The barista zone gets full high-touch disinfection on every close: portafilter handles, group-head spouts, steam-wand tips, knock-box, grinder collar, scales, tamper, and distribution tools. The cold-drink station, ice-machine scoop, syrup-pump nozzles, and water-dispenser spouts are sanitised. POS terminal, card reader, receipt printer, and menu tablets are disinfected with electronics-safe wipes &mdash; critical for both customer perception and staff health.",
      },
      {
        title: "Washroom Deep Cleaning",
        text: "Intensive sanitation of ceramic items, toilets, and sinks to the highest industry standards. We descale toilets with a non-abrasive acid, disinfect with an EN 1276-certified bactericide, and polish chrome fittings to a streak-free shine. Mirrors are squeegeed, never wiped. Sanitary bins are checked, emptied, and replaced. Chrome taps, soap dispensers, and door handles are disinfected every visit &mdash; the touch-points your customers actually notice. A dirty café WC = no return visit, full stop.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    image: IMG.checklistKitchen,
    imageAlt: "Café back-of-house kitchenette being deep sanitised by Maundy Clean crew in Scotland",
    title: "3. Back-of-House & Kitchen Hygiene",
    description:
      "The back-of-house kitchenette is where EHO inspectors look first &mdash; and where most cleaning failures are found. A 60-cover café generates the same cleaning load per square metre as a 150-cover restaurant &mdash; coffee grounds, milk residue, pastry crumbs, condiments, and the constant turnover of fridges and prep surfaces. Our kitchen protocol uses non-damaging formulas and food-safe chemistry &mdash; no chlorine on stainless steel, no caustic on aluminium &mdash; applied by trained catering-experienced crews who know the difference between a defrost cycle and a descale cycle.",
    points: [
      {
        title: "Surface Restoration",
        text: "Deep cleaning of kitchen equipment, prep surfaces, and splashbacks. Under-counter fridges are degreased inside and out, with seals and drip-trays detailed. Prep surfaces are sanitised with food-safe EN 1276 bactericide; splashbacks are degreased; walls behind the prep zone are wiped down. Stainless-steel worktops are polished to a streak-free shine. Microwave interiors are steam-cleaned, oven interiors are degreased, and the toaster crumb-tray is emptied and washed.",
      },
      {
        title: "Waste Management",
        text: "Efficient handling of waste and recycling to maintain a clear and hygienic workspace. Coffee grounds are separated for composting or specialist recycling, glass is segregated, food waste is bagged and removed, and the bin area is degreased and sanitised after every close. Recycling stations are audited for compliance with your local authority&rsquo;s segregation rules &mdash; reducing your waste-disposal cost and your environmental footprint. The waste area is the #1 source of fruit-fly infestations in a café &mdash; we eliminate the source.",
      },
      {
        title: "Often-Missed Details",
        text: "Our cleaners meticulously wipe visible skirting boards, door frames, and even ceiling fixtures as standard. These are the surfaces that customers notice subconsciously &mdash; a dusty vent or a stained grout line undermines a polished counter. We hand-detail every perimeter surface, dust ceiling light fixtures and air-conditioning vents, and wipe down the inside of the windows so the room feels genuinely reset, not just the centre of the floor. Ceiling fixtures, extractor-fan grilles, and light switches are detailed weekly as standard.",
      },
    ],
  },
];

export function CafeCoffeeShopSeoChecklist() {
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
            Our Comprehensive Café &amp; Coffee Shop Cleaning Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning for hospitality venues follows a rigorous, agency-approved
            checklist designed to deliver a &ldquo;speechlessly spotless&rdquo; finish that attracts
            repeat business. We move beyond the basic surface wipe to deliver technical depth in
            every area of your café &mdash; from the espresso machine zone through the customer WC
            to the back-of-house kitchenette. Below is the scope we deliver as standard, regardless
            of venue size or footfall.
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
                      const PointIcon = CheckCircle2;
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
      "Contact us to establish your specific requirements and hours. We walk the venue with your duty manager, identify priority zones (espresso machine zone, barista counter, customer WC, kitchenette, FOH seating), review trading hours and access windows, capture your HACCP plan and COSHH file, and develop a bespoke schedule and standards of excellence that our team will closely adhere to. We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team or individual with in-depth knowledge of &ldquo;showcasing&rdquo; requirements and catering hygiene. Your allocated crew lead is briefed on your espresso machine layout, your group-head backflush routine, your milk-wand purge schedule, your pastry-display rotation, and your front-of-house floor plan &mdash; so cleaning happens around the service, not through it. The same crew returns for every scheduled session, building real knowledge of your high-traffic zones, your screen-sensitive surfaces, and your access preferences. We arrive in liveried vehicles, in uniform with photo I.D., with commercial-grade equipment and COSHH-compliant food-safe chemistry.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Venue",
    description:
      "Experience a space that looks, smells, and feels fresh every single day, backed by our MaundyClean satisfaction guarantee. You receive a signed daily checklist after every visit (cleaner signature, duty manager counter-signature), arrival and departure times, tasks completed, and any issues flagged &mdash; like a leaking under-counter fridge, a blown bulb, or an espresso machine due for descale &mdash; before they become complaints. From &pound;16 per hour for a small independent café through to a fully bespoke retainer for a multi-site specialty coffee group. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function CafeCoffeeShopSeoBooking() {
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
            addressing the fast-paced needs of the Scottish hospitality scene. From site survey to
            first clean in under a week &mdash; no friction, no waiting, no surprises. Just a
            pristine venue, every visit, on schedule.
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
// Section 5 - Solutions for Every Business Stage
// (Semantic H2: "Solutions for Every Business Stage")
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Seasonal Resets &middot; Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Top-to-bottom seasonal deep clean of a Scottish café before the Christmas or Spring rush",
    description:
      "Prepare for the Christmas or Spring rush with a top-to-bottom Deep House Cleaning protocol applied to your commercial space. We pull equipment away from walls, detail ceiling vents and high shelving, degrease extraction ductwork, machine-scrub kitchenette floors, and reset the entire venue to a &ldquo;like-new&rdquo; baseline. The single most effective way to start a new trading season with a spotless, EHO-ready café.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty café unit being deep cleaned for lease handover by Maundy Clean in Scotland",
    description:
      "Opening a new site? Our End of Tenancy Cleaning ensures properties are front-line ready for launch and pass all initial inspections. We work to the letting agent&rsquo;s inventory, restore the unit to its original condition, and come back free of charge if anything is flagged on the inspection &mdash; the most stress-free way to close out a café lease or open a new coffee bar.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish café and coffee shop",
    description:
      "If your café has had home improvements or shopfitting, our After Builders Clean is designed to remove heavy layers of builders&rsquo; dust. Fine dust left on a kitchenette floor acts like sandpaper under foot traffic &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage equipment, soft furnishings, or your customers&rsquo; first impression on reopening day.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Specialist Hygiene &middot; Antiviral Sanitisation",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt: "Antiviral sanitisation treatment being applied to high-touch surfaces in a Scottish café",
    description:
      "Ask about our Antiviral Sanitisation using certified virucidal cleaners to keep germs and bugs at bay. EN 14476 virucidal chemistry is fogged and wiped across every high-touch surface in your café &mdash; from portafilter handles and POS terminals to washroom door handles and customer seating &mdash; reducing the spread of seasonal colds, flu, and norovirus among your staff and customers during peak trading.",
    cta: "Explore antiviral sanitisation",
  },
];

export function CafeCoffeeShopSeoInterlinking() {
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
            Beyond the daily clean &middot; café milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Business Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring home cleaning philosophy maintains your daily environment, but MaundyClean
            provides specialized &ldquo;resets&rdquo; for major property milestones &mdash; from
            seasonal refreshes before peak trading, through lease handovers and post-shopfitting
            dust clear-outs, to specialist antiviral hygiene that keeps germs and bugs at bay. The
            same trusted crew can step up whenever your café needs more than a standard visit.
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
// (Semantic H2: "Café & Coffee Shop Cleaning Near Me, Across Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function CafeCoffeeShopSeoNearMe() {
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
              Local café &amp; coffee shop cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Café &amp; Coffee Shop Cleaning Near Me, Across Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;café cleaning near me&rdquo; or &ldquo;coffee shop cleaning
              company near me&rdquo; in Scotland? Maundy Clean covers city-centre espresso bars,
              neighbourhood coffee shops, and specialty cafés across the Central Belt, Highlands,
              Borders, and Islands. Same vetted uniformed crews, same child-safe eco-friendly
              supplies, same dedicated crew every visit &mdash; wherever your venue happens to be.
              Find your local café cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean café and coffee shop cleaning service coverage areas"
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

            <div className="mt-6">
              <Button
                size="lg"
                className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                asChild
              >
                <Link href="/services/cafe-coffee-shop-cleaning-near-me">
                  <MapPin className="w-4 h-4" />
                  Browse the near-me directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
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
                Find your local café crew
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
                    href={`/services/cafe-coffee-shop-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> café</span>
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
            Our local café and coffee shop cleaning crews operate across Glasgow&rsquo;s Merchant
            City, Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s Union Street, Dundee&rsquo;s West End,
            and the Highlands &mdash; from Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re
            searching for daily FOH reset in Glasgow, after-hours kitchenette turnover in Edinburgh,
            espresso machine zone deep cleans in Aberdeen, or neighbourhood café cleaning anywhere in
            between, Maundy Clean assigns a vetted, PAYE-employed crew that stays with you for the
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

export function CafeCoffeeShopSeoFinalCta() {
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
            proposal within 2 business days. Vetted uniformed crews, espresso-machine-zone expertise,
            EHO-ready compliance documentation, signed daily checklists, and a 100% satisfaction
            guarantee &mdash; from &pound;16 per hour for a small independent café through to a fully
            bespoke multi-site specialty coffee retainer. No pushy sales call, no waiting 24 hours
            for a callback.
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
// 3 Q&As from the brief (insured for commercial sites, equipment, quality control)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for commercial sites?",
    a: "Yes. MaundyClean is a fully insured, registered professional cleaning company with years of experience serving the Central Belt and beyond. We hold &pound;5m public liability cover (suitable for independent cafés, multi-site specialty groups, franchise operators, and licensed premises with alcohol), &pound;5m employer&rsquo;s liability cover, and contingent employers&rsquo; liability. Every crew member carries Disclosure Scotland PVG scheme membership, wears an official uniform with photo I.D., and is trained on food-safety protocols (HACCP-aware, allergen-aware, colour-coded microfibre). We can name your café on our policy as additional insured &mdash; a common requirement for licensed premises, shopping-centre café units, and franchise leasehold agreements &mdash; and provide enhanced background checks for staff handling high-value stock or operating in sensitive locations. Certificates of insurance and our full compliance file (COSHH datasheets, risk assessments, method statements, training records) are available on request; we will not begin work until your facilities team and your EHO inspector have the documentation they need.",
  },
  {
    q: "Do you provide your own cleaning equipment?",
    a: "Absolutely. We supply all of our own professional-grade equipment and eco-friendly supplies, which are included in your competitive quote. Every crew arrives in a liveried van with commercial-grade vacuums (Sebo BS36/BS46, Henry HVR200), microfibre flat-mop systems with separate dirty-water extraction, colour-coded cloths (red for raw-pastry prep, blue for cooked-food prep, green for customer-facing, yellow for bar and washroom), HSE-compliant chemicals with COSHH datasheets on file, PPE, squeegees for windows and mirrors, food-safe Cafiza and milk-frother cleaner for the espresso machine zone, and EN 1276 food-safe bactericidal chemistry for prep surfaces and prep zones. We use non-toxic, child-safe, pet-safe products by default &mdash; no harsh chemical odours left in dining areas &mdash; with eco-labelled alternatives for kitchenette, bar, and FOH. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser tablets) or we can manage consumable restocking for an additional monthly fee so you never run out during service.",
  },
  {
    q: "Do you offer regular quality control inspections?",
    a: "Yes. We perform regular quality control inspections to ensure standards are consistently high and there are no issues with reliability. Every café client gets a dedicated account manager who knows your venue, your team, your access protocols, and your HACCP plan &mdash; direct mobile number, 24-hour response, quarterly on-site walk-throughs alongside your duty manager. After every visit you receive a signed daily checklist (cleaner signature, duty manager counter-signature), arrival and departure times, tasks completed, and any issues flagged &mdash; like a leaking under-counter fridge, a blown bulb, or an espresso machine due for descale &mdash; before they become complaints. We also conduct unannounced quality audits (typically monthly for high-footfall cafés, quarterly for low-volume sites) using our internal scoring rubric, share the results with you, and trigger a free re-clean within 24 to 48 hours if any line item drops below standard. Our visit-completion rate in 2025 was 99.6%.",
  },
];

export function CafeCoffeeShopSeoFaq() {
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
            Café &amp; coffee shop cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our café and coffee shop cleaning clients ask most
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

"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Crown,
  Hammer,
  UserCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Building2,
  Leaf,
  KeyRound,
  Droplets,
  ShowerHead,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches property-management + auto-dealership + salon-spa + day-porter + nightly-janitorial pool)
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%209.37.33%20PM.jpeg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%209.37.33%20PM.jpeg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistFront:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistCounter:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseSpring:
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
// Semantic H1: "Professional Restroom Sanitation & Washroom Cleaning Services Scotland"
// ============================================================

export function RestroomSanitationSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean PVG-checked, vetted washroom crew restoring toilets, urinals, dispensers and chrome fixtures to a showcase shine in a Scottish commercial restroom"
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
            Restroom Sanitation &amp; Washroom Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Restroom Sanitation &amp; Washroom Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Exquisite Hygiene Standards, Technical Deep Cleaning, and the Maundy
            Tradition of Care for Scottish Businesses. Facilities managers,
            office managers and building operations leads across Scotland&rsquo;s
            corporate, retail, hospitality and public-sector estates operate in
            a uniquely demanding washroom environment &mdash; every toilet
            reflects your brand promise, every urinal visit tells staff how much
            you care, and every chrome fixture makes or breaks the customer
            impression. MaundyClean brings vetted PVG-checked washroom crews,
            toilet &amp; urinal restoration, deep grout cleaning, chrome
            buffing, sanitary disposal, consumables restocking, infection
            control, superheated steam technology, eco-friendly non-toxic
            products, fixed monthly retainer, and a &ldquo;showcase&rdquo;
            shine to every washroom we serve.
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
                Request Your Bespoke Hygiene Quote Today
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
                View Our Bathroom Deep Cleaning Checklist
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
              <Droplets className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Washroom Crew Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Superheated Steam Sanitation
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
// verbatim intro paragraphs on the right (paragraph 2 contains
// ONE inline <Link>: /services/recurring-home-cleaning for
// "Recurring Home Cleaning").
// ============================================================

export function RestroomSanitationSeoIntro() {
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
                alt="Maundy Clean washroom crew restoring toilets, urinals, dispensers and chrome fixtures in a Scottish commercial restroom"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Motivated Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy, &ldquo;same-staff&rdquo; consistency, and
                  &ldquo;sanctuary&rdquo; care we bring to Scotland&rsquo;s finest properties
                  &mdash; applied to your toilets, urinals, basins, mirrors, partitions,
                  floors, dispensers, and the total hygiene of your commercial washroom.
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
                  <ShieldCheck className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m</div>
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
              Restroom sanitation &amp; washroom cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Restroom Sanitation
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              A washroom that is sparkling clean and a joy to use is an excellent
              representation of a business&rsquo;s commitment to excellence. Beyond
              aesthetics, maintaining high standards of hygiene is vital for the
              wellbeing of your staff and customers, directly impacting happiness
              and satisfaction at work. At <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we provide a premium restroom sanitation service that ensures your
              facilities are fresh, healthy, and always in order, utilizing the
              same meticulous care that has made us a leader in property
              maintenance across Glasgow, Edinburgh, and the Central Belt.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s most prestigious residences, we bring that same
              level of technical intimacy and &ldquo;same-staff&rdquo; consistency to
              specialized commercial hygiene. We provide a professional, flexible,
              and budget-conscious alternative to impersonal national agencies,
              ensuring your facilities remain free of harmful bacteria and germs.
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
                { label: "PVG-checked operatives", value: "100%" },
                { label: "From per hour", value: "&pound;14" },
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
                  <div
                    className="text-[11px] text-[var(--muted-foreground)] mt-0.5"
                    dangerouslySetInnerHTML={{ __html: stat.label }}
                  />
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
// Section 2 - Why MaundyClean is Scotland's Choice for Technical Washroom Hygiene
// (Semantic H2: "Why MaundyClean is Scotland's Choice for Technical Washroom Hygiene")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / ShieldCheck / Droplets / Leaf
// (icons chosen to reflect the brief's pillar themes: same trusted
// professional / specialized technical equipment / total regulatory
// & infection control / eco-friendly & safe).
// ALL 4 pillar bodies start with the brief sentence verbatim and
// are extended with restroom-sanitation-specific prose (no inline
// Links), but typed as ReactNode for codebase consistency with
// nightly-janitorial-seo.tsx (which uses ReactNode so a pillar
// can support an inline Link when needed).
// ============================================================

type TrustCard = {
  icon: typeof ShieldCheck;
  title: string;
  description: ReactNode;
};

const TRUST_CARDS: TrustCard[] = [
  {
    icon: UserCheck,
    title: "The Same Trusted Professional",
    description:
      "Reliability is built on familiarity. We ensure the same vetted, uniformed team manages your washrooms to build a deep understanding of your facility&rsquo;s specific needs and traffic patterns. The same PVG-checked crew returns every visit &mdash; learning your washroom count, your occupancy peaks, your dispenser types, your sanitary bin contractor, your finishes (chrome, stainless steel, ceramic, grout), and your inspection regime. When your regular crew is on annual leave, we send a trained backup who has been briefed on your facility &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking a Scottish commercial washroom.",
  },
  {
    icon: Droplets,
    title: "Specialized Technical Equipment",
    description:
      "Our teams are equipped with the latest technology, including superheated steam cleaners and sterilizing detergents, to provide a level of sanitation that standard wiping cannot achieve. Superheated dry-steam vapor (175&deg;C) on toilet seats, urinal surrounds, and tile grout &mdash; the only way to lift embedded biological load a spray-and-wipe leaves behind. Professional descaling agents for Scottish hard-water limescale on chrome taps, basins, and urinal slabs. EN 1276 bactericide and EN 14476 virucide with correct contact time on every high-touch touchpoint. Microfibre glass-cleaning systems for streak-free mirrors and partitions. We carry the kit standard wiping cannot match.",
  },
  {
    icon: ShieldCheck,
    title: "Total Regulatory & Infection Control",
    description:
      "We provide comprehensive robust hygienic cleaning, including fungus/mould/mildew removal and professional infection advice and control. HSE compliance, RAMS as standard, Safe Systems of Work, COSHH-documented chemistry on file, audit-ready signed washroom logs after every visit, and we can name your business on our policy as additional insured. Anti-fungal grout treatment on tile joints (the main odour reservoir in any washroom), enzymatic drain sanitisers (break down organic matter at the source of drain odour), full bodily-fluid cleanup protocols, and professional infection-control advice for facilities managers during flu season or outbreak response. &pound;5m public liability as standard.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "We utilize only certified non-toxic, child-safe, and pet-safe products. This includes anti-bacterial eco-friendly air fresheners and air quality management to keep your space fresh without harsh chemical odors. Fragrance-free sanitiser on high-touch touchpoints, pH-neutral glass and partition cleaner for streak-free shine without harsh solvent fumes, enzymatic drain treatment (biological, not caustic), non-toxic surface-safe chemistry by default &mdash; safe for staff with sensitivities, safe for the morning shift, safe for the premium finishes you&rsquo;ve invested in. COSHH-documented, biodegradable, and gentle on chrome, ceramic, and grout.",
  },
];

export function RestroomSanitationSeoWhy() {
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
                alt="Maundy Clean washroom crew &mdash; PVG-checked, uniformed, trained in superheated steam sanitation, descaling, chrome buffing, grout treatment, sanitary disposal, and consumables restocking"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Motivated Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, PVG-checked, uniformed, and trained in
                  restroom-sanitation-specific protocols &mdash; superheated steam
                  sanitation, descaling, chrome buffing, grout treatment, sanitary
                  disposal, consumables restocking, infection control, bodily fluid
                  cleanup, and issue flagging. Same crew every visit &mdash; never
                  a rotating cast of agency strangers walking a Scottish commercial
                  washroom.
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
                  <ShieldCheck className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m</div>
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
              Why MaundyClean is Scotland&rsquo;s Choice for Technical Washroom Hygiene
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Restroom environments require a higher frequency of care and
              specialized equipment to maintain total sanitation. MaundyClean
              focuses on building high-trust partnerships through local, reliable
              service. Our washroom crews carry the technical kit, the chemistry,
              and the protocols standard janitorial wiping cannot match &mdash; and
              the same vetted team returns every visit to build the deep
              familiarity your facility deserves.
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

        <div className="grid md:grid-cols-2 gap-6">
          {TRUST_CARDS.slice(2).map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[var(--border)] flex flex-col sm:flex-row items-start gap-5"
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
// Section 3 - Our Total Restroom Maintenance & Deep Cleaning Checklist
// (Semantic H2: "Our Total Restroom Maintenance & Deep Cleaning Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Advanced Sanitary Deep Cleaning
//   2. Technical Floor & Wall Care
//   3. Consumables & Facility Management
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO intro paragraphs on the 3 checklist cards
// (just H3 title + sub-points). ALL sub-point bodies in ALL 3
// cards are plain strings per the brief (no inline Links), but
// typed as ReactNode (via ChecklistPoint.text) for codebase
// consistency with nightly-janitorial-seo.tsx.
// ============================================================

type ChecklistPoint = {
  title: string;
  text: ReactNode;
};

const CHECKLIST_ITEMS: {
  icon: typeof Building2;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  points: ChecklistPoint[];
}[] = [
  {
    icon: HeartPulse,
    image: IMG.checklistFront,
    imageAlt:
      "Maundy Clean crew restoring toilets, urinals, dispensers and chrome fixtures to a showcase shine in a Scottish commercial washroom",
    title: "1. Advanced Sanitary Deep Cleaning",
    description: "",
    points: [
      {
        title: "Toilet & Urinal Restoration",
        text: "Intensive deep cleaning of all ceramic items using technical descaling agents. Acidic descaler for hard-water limescale under the rim and inside the bowl (where bacteria collect &mdash; often missed), enzymatic drain sanitiser to break down organic matter at the source of drain odour, urinal slab or trough cleaned, surround degreased, screen (if present) sanitised, flush handle and high-touch touchpoints treated with EN 1276 bactericide at the correct contact time. We use specialist commercial products &mdash; not bleach, which discolours grout and damages chrome.",
      },
      {
        title: "High-Traffic Sanitization",
        text: "Meticulous disinfecting of all touchpoints, including handles, dispensers, and entry phone systems. Door handles on every stall and entrance, locks and latches, cubicle door edges, tap levers, soap dispenser buttons, paper towel dispenser cranks, hand-dryer buttons, sanitary bin foot-pedals, light switches, baby-change table surfaces, and disabled-access grab rails &mdash; all wiped with EN 1276 bactericide (and EN 14476 virucide where appropriate) at the correct contact time, every visit. Disabled access toilets given particular attention.",
      },
      {
        title: "Surface Restoration",
        text: "Dusting and wiping down all surfaces, polishing mirrors and chrome fixtures to a streak-free &lsquo;showcase&rsquo; shine. Mirrors squeegeed with professional technique (not spray-and-wipe, which streaks), chrome taps polished to a uniform sheen, stainless steel partitions and grab rails buffed, splashbacks wiped, vanity shelving dusted, pipe-work under basins wiped, and air vents dusted &mdash; the &lsquo;showcase&rsquo; finish that signals a confident, well-run facility the moment a customer or staff member walks in.",
      },
    ],
  },
  {
    icon: Droplets,
    image: IMG.checklistCounter,
    imageAlt:
      "Maundy Clean crew performing floor and grout restoration, mat management and mould removal in a Scottish commercial restroom",
    title: "2. Technical Floor & Wall Care",
    description: "",
    points: [
      {
        title: "Vacuuming & Mopping",
        text: "Professional treatment of all flooring, including specialized grout cleaning to remove deep-seated grime. Hard floors mopped edge-to-edge &mdash; including under stalls (where urine drips collect and cause persistent odour if not cleaned), behind doors, in corners, and under basins where pipework sits. Specialist grout cleaning with anti-fungal treatment on tile joints (the main odour reservoir in any commercial washroom), rotary-machine deep scrub (quarterly) for ingrained dirt, and floors dried after mopping for slip-hazard management. The floor that looks as fresh at 8:00 AM as it did the night before.",
      },
      {
        title: "Floor Mat Management",
        text: "Supply and replacement of floor mats to maintain safety and cleanliness. Entrance matting to capture foot-borne contamination at the door, anti-slip mats in wet zones around basins and urinals (HSE slip-risk mitigation), and periodic mat exchange, laundering, and replacement as part of your fixed monthly retainer. Mats properly positioned, edges secured, and stock rotation managed so a soiled mat never sits in place for longer than your agreed cycle.",
      },
      {
        title: "Stain & Mould Removal",
        text: "Targeted spot removal and fungus control to keep walls and tiles looking brand new. Anti-fungal treatment on tile grout and sealant lines (the main odour reservoir), mould and mildew removal from damp zones around showers or wet floors, stain removal from partition surfaces (ink, dye, biological), paint touch-up coordination where the underlying issue is finish damage not soiling, and periodic deep restoration of stainless steel, chrome, and ceramic finishes to lift the cumulative contamination load a standard wipe cannot reach.",
      },
    ],
  },
  {
    icon: ClipboardCheck,
    image: IMG.checklistKitchen,
    imageAlt:
      "Maundy Clean crew restocking consumables, managing sanitary disposal and responding rapidly to spills in a Scottish managed washroom facility",
    title: "3. Consumables & Facility Management",
    description: "",
    points: [
      {
        title: "Supply Management",
        text: "Management of consumables including soaps, tissues, and hand-drying products. Toilet paper, paper towels, hand soap, sanitiser, and air-freshener stock levels checked and replenished every visit; dispensers refilled and inspected for damage; stock-rotation managed so a dispenser never runs empty between visits; and a consumables inventory log included in your monthly compliance file. We can supply consumables directly (single-invoice convenience) or top up stock you supply &mdash; whichever your procurement team prefers.",
      },
      {
        title: "Sanitary Disposal",
        text: "Feminine sanitary product disposal and maintenance of hygiene units. Sanitary bins checked, replaced if full, and coordinated with your licensed sanitary waste contractor (we don&rsquo;t transport sanitary waste off-site &mdash; we manage the on-site side of the contractor relationship). Bin exteriors wiped and sanitised, foot-pedals treated with EN 1276 bactericide, bin placement confirmed for accessibility and discretion, and full audit-trail documentation included in your monthly compliance file for environmental health inspection.",
      },
      {
        title: "Rapid Response",
        text: "We offer emergency cover and rapid response for unforeseen situations or messes. Spills, overflows, bodily-fluid incidents, vandalism, or a sudden client visit &mdash; call your dedicated account manager and we despatch a vetted uniformed washroom crew to your facility within the agreed response window (typically 2&ndash;4 hours for Central Belt postcodes). Full bodily-fluid cleanup protocols, PPE, biohazard bags, and COSHH-compliant chemistry on hand &mdash; so an 11am washroom incident doesn&rsquo;t become a 2pm customer impression.",
      },
    ],
  },
];

export function RestroomSanitationSeoChecklist() {
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
            Our Total Restroom Maintenance &amp; Deep Cleaning Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our bathroom deep cleaning follows a rigorous, agency-approved
            checklist designed to address the &ldquo;risky&rdquo; high-traffic areas
            where bacteria thrive. From toilet and urinal restoration through
            technical grout treatment to consumables restocking and sanitary
            disposal, every zone of your commercial washroom is treated with
            superheated steam, professional descaling agents, EN 1276 bactericide,
            and the &ldquo;showcase&rdquo; finish that signals a confident, well-run
            facility. Below is the scope we deliver as standard, regardless of
            building type, footprint, or occupancy schedule.
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
                  {item.description ? (
                    <p
                      className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  ) : null}
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
                            &mdash;{" "}
                            {typeof point.text === "string" ? (
                              <span dangerouslySetInnerHTML={{ __html: point.text }} />
                            ) : (
                              point.text
                            )}
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
// (Semantic H2: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// (FileText imported for safety/template parity even if not used.)
// Brief has NO [H3] marker on this heading, so we use <h2>
// (DIFFERENT from day-porter which used <h3> because day-porter's
// brief had an explicit [H3] marker; restroom-sanitation brief
// has no [H3] marker, so use <h2> to match the standard
// section-title pattern).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Bespoke Plan",
    description:
      "Contact us for a free site survey. We will assess your occupancy levels to determine if you need daily, weekly, or fortnightly cleaning during or after hours. We walk your washrooms with your facilities or office manager, count your toilets, urinals, basins, mirrors, partitions, dispensers, and sanitary bins, identify your traffic patterns (corporate 9&ndash;5, retail peak, hospitality evening, venue event-led), your access window (in-hours presence, after-hours unsupervised, key-safes and alarm codes), and any specific challenges (limescale build-up, persistent grout odour, listed-building constraints on finishes, bodily-fluid cleanup protocols). We send an itemised proposal within 2 business days: shift pattern, scope of work, fixed monthly retainer, RAMS, COSHH datasheets, and a draft washroom task schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of motivated, fully trained staff with in-depth knowledge of commercial hygiene standards. Your allocated washroom crew is PVG-checked, uniformed, and trained in restroom-sanitation-specific protocols &mdash; superheated steam sanitation, descaling, chrome buffing, grout treatment, sanitary disposal, consumables restocking, infection control, bodily-fluid cleanup, and issue flagging. We brief the crew on your washroom count, your dispenser types, your sanitary bin contractor, your access protocols (key safes, alarm codes, entry phone), your staff communications protocol, and your premium finishes &mdash; so cleaning happens during or after hours, not around your working day. The same crew returns every visit, building real knowledge of your facility&rsquo;s traffic patterns and your inspection regime.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Facility",
    description:
      "Experience washrooms that are a joy to use, backed by our MaundyClean satisfaction guarantee. You receive a signed washroom log after every visit (cleaner name, time in/out, areas cleaned, tasks actioned, consumables restocked, and any issues flagged), arrival and departure times, and issue-flagging for low-stock paper towel, damaged fixtures, leaking taps, light failures, security concerns, or pest sightings &mdash; before they undermine a client visit, an environmental health inspection, or a staff complaint. From &pound;14 per hour for a single-site restroom sanitation through to a fully bespoke multi-site retainer with one invoice. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function RestroomSanitationSeoBooking() {
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
            We have optimized our booking experience to be uncomplicated and
            straightforward, providing the responsive management support Scottish
            business owners demand. From free site survey and itemised proposal to
            first washroom crew on-site in under a week &mdash; no friction, no
            waiting, no surprises. Just a pristine washroom every visit, every
            toilet, every chrome fixture, every dispenser, and a compliance file
            that&rsquo;s audit-ready the day an environmental health officer or
            building inspector walks in.
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
              Request Your Bespoke Hygiene Quote Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Hygiene Solutions for Every Stage
// (Semantic H2: "Hygiene Solutions for Every Stage")
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
    title: "Maintaining the Standard",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseSpring,
    imageAlt:
      "Recurring home cleaning bringing restroom-sanitation standards of meticulous washroom hygiene to a Scottish private residence on a weekly or fortnightly basis",
    description: (
      <>
        After your commercial facilities are restored, keep your personal
        sanctuary in top condition with our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        plans. The same vetted uniformed crew, the same child-safe eco
        chemistry, the same signed cleaning log after every visit &mdash; so the
        standard you see at work follows you home.
      </>
    ),
    cta: "Explore recurring home cleaning",
  },
  {
    icon: Hammer,
    title: "Property Transitions",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy handover clean for a Scottish commercial unit being vacated, ensuring washrooms are front-line ready for the next occupant",
    description: (
      <>
        Moving offices or units? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        ensures washrooms are front-line ready for the next occupant and pass
        all inspections. Every surface detailed top-to-bottom, deposit-back
        guarantees met, and the same trusted vetted crew your washroom team
        knows &mdash; so your unit handover starts from a
        &ldquo;speechlessly spotless&rdquo; baseline.
      </>
    ),
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: Sparkles,
    title: "Post-Renovation",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt:
      "Post-refurbishment cleanup removing fine construction dust from a refitted Scottish commercial washroom before staff return to work",
    description: (
      <>
        If your facility has had home improvements or plumbing work, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is designed to remove heavy construction dust. Fine plaster and MDF
        dust on every horizontal surface, paint overspray on chrome fixtures,
        adhesive residue on new flooring &mdash; lifted in full before your
        washroom crew picks up the ongoing maintenance brief on the
        newly-refitted space.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Intensive Hygiene Resets",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt:
      "Antiviral sanitisation ULV fogging treatment giving a Scottish commercial facility a total biological reset between restroom-sanitation visits",
    description: (
      <>
        Book an{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        session for a total biological &ldquo;reset&rdquo; of all communal areas.
        EN 14476 virucidal ULV fogging of every surface, every washroom, every
        communal zone &mdash; the periodic deep biological reset that lifts the
        cumulative contamination load a standard restroom clean can&rsquo;t reach,
        and gives your washroom crew a clean baseline to maintain.
      </>
    ),
    cta: "Explore antiviral sanitisation",
  },
];

export function RestroomSanitationSeoInterlinking() {
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
            Beyond the washroom deep clean &middot; property milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Hygiene Solutions for Every Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our restroom sanitation is a critical component of your
            property&rsquo;s overall health, interlinking with our wider technical
            resets: from recurring home cleaning that brings washroom-crew
            standards into your residence, through end-of-tenancy resets for unit
            handovers, post-renovation dust clear-outs, and periodic antiviral
            sanitisation biological resets. The same trusted, vetted crew can
            step up whenever your facility needs more than a standard
            restroom-sanitation visit.
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
                      Learn more
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
// (Semantic H2: "Restroom Sanitation & Washroom Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/restroom-sanitation-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function RestroomSanitationSeoNearMe() {
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
              Local restroom sanitation &amp; washroom cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Restroom Sanitation &amp; Washroom Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;restroom sanitation near me&rdquo; or
              &ldquo;washroom cleaning near me&rdquo; in Scotland? Maundy Clean
              covers facilities managers, office managers, building operations
              leads, and commercial estates across the Central Belt, Highlands,
              Borders, and Islands &mdash; from Glasgow&rsquo;s IFSD and
              Edinburgh&rsquo;s Exchange District to Aberdeen&rsquo;s energy
              corridor and Dundee&rsquo;s Waterfront, plus commercial estates in
              Stirling, Perth, Inverness, and Ayr. Same PVG-checked, uniformed
              washroom crews, same dedicated crew every visit, same
              &ldquo;showcase&rdquo; shine &mdash; wherever your facility happens
              to be. Find your local restroom sanitation specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean restroom sanitation &amp; washroom cleaning coverage areas"
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
                  Same PVG-checked washroom crews, same 100% satisfaction guarantee &mdash; from
                  Glasgow to Inverness.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                asChild
              >
                <Link href="/services/restroom-sanitation-near-me#locations">
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
                Find your local washroom crew
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
                    href={`/services/restroom-sanitation-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> washroom cleaning</span>
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
            Our local restroom sanitation crews operate across Glasgow&rsquo;s
            International Financial Services District, Merchant City and West End
            commercial towers (facilities managers, office managers and building
            operations leads), Edinburgh&rsquo;s Exchange District, New Town and
            Quartermile business quarters (corporate estates and property management
            companies), Aberdeen&rsquo;s energy-corridor West End and Tullos
            industrial offices (energy operators and service companies),
            Dundee&rsquo;s Waterfront and City Centre professional services
            buildings (facilities teams and office managers), and Scottish commercial
            districts across the Central Belt &mdash; from Inverness to Perth, Falkirk
            to Ayr. Whether you&rsquo;re searching for a washroom deep clean in
            Glasgow, a restroom sanitation service in Edinburgh, a chrome buffing
            reset in Aberdeen, or a public restroom cleaning anywhere in between,
            Maundy Clean assigns a vetted, PAYE-employed, PVG-checked washroom crew
            that stays with you for the long run. Same crew, same standard, same
            locked-in rate for 12 months, &ldquo;showcase&rdquo; shine every visit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Hygiene Quote Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function RestroomSanitationSeoFinalCta() {
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
            Ready to book your free site survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Bespoke Hygiene Quote Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Facilities managers, office managers and business owners &mdash; book a
            free, no-obligation site survey with our management team and receive an
            itemised proposal within 2 business days. Technical steam-cleaning
            equipment, full infection control protocols, consumables restocking,
            sanitary disposal, and a fixed monthly retainer that locks your rate for
            12 months. From &pound;14 per hour for a single-site restroom sanitation
            through to a fully bespoke multi-site retainer with one invoice. No
            pushy sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Hygiene Quote Today
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
                View Our Bathroom Deep Cleaning Checklist
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
// 3 Q&As from the brief (provide own materials, insured for
// commercial sites, manage restocking of supplies)
// NOTE: This brief has the FAQ Q&A order DIFFERENT from previous
// briefs - materials FIRST, then insured, then restocking.
// ============================================================

const SEO_FAQS = [
  {
    q: "Do you provide your own cleaning materials?",
    a: "Yes. We supply all our own professional-grade equipment, including steam cleaners and non-toxic detergents, which are included in your quote. Superheated dry-steam vapor (175&deg;C) on toilet seats, urinal surrounds, and tile grout; professional descaling agents for Scottish hard-water limescale on chrome taps, basins, and urinal slabs; EN 1276 bactericide and EN 14476 virucide with correct contact time on every high-touch touchpoint; microfibre glass-cleaning systems for streak-free mirrors and partitions; enzymatic drain sanitisers; anti-fungal grout treatment; professional carpet spot-and-extract for spill &amp; mess response; pH-neutral sanitiser for surrounding fixtures; PPE; and non-toxic, surface-safe, child-safe chemistry by default &mdash; every tool is maintained to manufacturer spec. You provide consumables (paper towel, toilet paper, hand soap, sanitiser wipes, bin liners) or we can manage consumables restocking for an additional monthly fee. COSHH datasheets, RAMS, training records, vetting records (PVG), and &pound;5m public liability certificates for your compliance file &mdash; audit-ready the day an environmental health officer walks in.",
  },
  {
    q: "Are your cleaners insured for commercial sites?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience serving both the residential and commercial sectors. We carry &pound;5m public liability as standard &mdash; covering reception areas, washrooms, kitchenettes, meeting rooms, and back-of-house &mdash; and every washroom crew member is PVG-checked (essential for buildings that may have staff, customers, or vulnerable users present), uniformed, and trained in restroom-sanitation-specific protocols: superheated steam sanitation, descaling, chrome buffing, grout treatment, sanitary disposal, consumables restocking, infection control, bodily-fluid cleanup, and issue flagging. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, and corporate insurance compliance files. Our documentation is audit-ready for environmental health inspection and HSE review; we provide signed washroom logs, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file. We will not begin work until your facilities or office manager has the documentation they need.",
  },
  {
    q: "Can you manage the restocking of supplies?",
    a: "Yes. We handle the management of consumables and general fitting or maintenance as part of our comprehensive washroom services. Toilet paper, paper towels, hand soap, sanitiser, and air-freshener stock levels checked and replenished every visit; dispensers refilled and inspected for damage; stock-rotation managed so a dispenser never runs empty between visits; consumables inventory log included in your monthly compliance file. We can supply consumables directly (single-invoice convenience) or top up stock you supply &mdash; whichever your procurement team prefers. Sanitary bins checked, replaced if full, and coordinated with your licensed sanitary waste contractor. General fitting and minor maintenance (dispenser repair, mirror re-fixing, partition hinge tightening, light-bulb replacement where accessible) coordinated through your dedicated account manager. From &pound;14 per hour for a single-site restroom sanitation through to a fully bespoke retainer for a multi-site Scottish or UK-wide commercial estate. Same trusted crew at each site, same standard, same locked-in rate, &ldquo;showcase&rdquo; shine every visit &mdash; the operational simplicity that lets your facilities team manage one supplier instead of a dozen.",
  },
];

export function RestroomSanitationSeoFaq() {
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
            Restroom sanitation &amp; washroom cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our restroom sanitation clients ask
            most often. Can&rsquo;t find what you need? Call us on{" "}
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
                Request Your Bespoke Hygiene Quote Today
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
                View Our Bathroom Deep Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

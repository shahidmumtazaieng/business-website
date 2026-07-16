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
  Recycle,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches nightly-janitorial + day-porter + property-management pool)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
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
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseAntiviral:
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
// Semantic H1: "Professional Rubbish & Recycling Services Scotland"
// ============================================================

export function RubbishRecyclingSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean vetted, PVG-checked waste & recycling operatives collecting segregated commercial waste streams — paper, glass, food, DMR and general — from a Scottish business premises"
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
            Rubbish &amp; Recycling Services &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Rubbish &amp; Recycling Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Sustainable Waste Management, Zero-Waste Strategies, and the Maundy
            Tradition of Environmental Care. From the bustling commercial hubs of
            Glasgow and Edinburgh to the Highlands, MaundyClean provides a
            comprehensive rubbish and recycling service designed to help your
            business meet and exceed its sustainability goals while ensuring your
            premises remain &ldquo;speechlessly spotless.&rdquo; Commercial recycling,
            specialist rubbish clearance, food waste to energy, bin store
            sanitisation, waste audit reporting, PAS 402-aligned recycling rates,
            SEPA-licensed carriers, zero waste to landfill strategies, and a
            single-supplier partnership that integrates waste solutions seamlessly
            into your daily operations &mdash; from &pound;8 per collection.
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
                Request Your Bespoke Waste Audit Today
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
                View Our Commercial Recycling Checklist
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
              <Recycle className="w-4 h-4 text-[var(--gold)]" /> Zero Waste to Landfill Strategies
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> PAS 402-Aligned Reporting
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
// TWO inline <Link>s: /services/move-in-out-cleaning for
// "End of Tenancy Cleaning" and /services/deep-house-cleaning
// for "Deep Cleaning Services").
// ============================================================

export function RubbishRecyclingSeoIntro() {
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
                alt="Maundy Clean waste & recycling operatives segregating commercial waste streams at a Scottish business premises — paper, glass, food, DMR and general"
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
                  &mdash; applied to your waste streams, recycling segregation, bin
                  stores, and the environmental health of your commercial
                  operations.
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
              Rubbish &amp; recycling services &amp; sustainable waste management &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Rubbish &amp; Recycling Services
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the modern Scottish business landscape &mdash; from the bustling
              commercial hubs of Glasgow and Edinburgh to the Highlands &mdash;
              managing waste is no longer just about &ldquo;putting things in the
              bin.&rdquo; It is about corporate social responsibility (CSR), reducing
              operational costs, and the &ldquo;modern-day alchemy&rdquo; of turning old
              materials into new resources. At <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we provide a comprehensive rubbish and recycling service designed to
              help your business meet and exceed its sustainability goals while
              ensuring your premises remain &ldquo;speechlessly spotless.&rdquo;
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              While we are the recognized authority in{" "}
              <Link
                href="/services/move-in-out-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                End of Tenancy Cleaning
              </Link>{" "}
              and{" "}
              <Link
                href="/services/deep-house-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Deep Cleaning Services
              </Link>{" "}
              for Scotland&rsquo;s most demanding property transitions, we bring that
              same level of technical intimacy and meticulous oversight to waste
              management. We act as your single supplier partner, integrating waste
              solutions seamlessly into your daily operations to achieve zero waste
              to landfill.
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
                { label: "Waste diverted from landfill", value: "92%" },
                { label: "SEPA-licensed carriers", value: "100%" },
                { label: "From per collection", value: "&pound;8" },
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
// Section 2 - Why MaundyClean is Scotland's Strategic Recycling Partner
// (Semantic H2: "Why MaundyClean is Scotland's Strategic Recycling Partner")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / ClipboardCheck / ShieldCheck / Leaf
// (icons chosen to reflect the brief's pillar themes: same trusted
// team / cost-effective waste reduction / total regulatory compliance
// / eco-friendly & community safe).
// Pillar 3 contains an inline <Link> to /services/post-construction-cleaning
// for "After Builders Clean", so ALL pillar bodies are typed as ReactNode
// and rendered via the typeof check (codebase consistency pattern).
// ============================================================

type TrustCard = {
  icon: typeof ShieldCheck;
  title: string;
  description: ReactNode;
};

const TRUST_CARDS: TrustCard[] = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team",
    description:
      "Reliability is built on familiarity. We ensure the same vetted professionals manage your facility&rsquo;s waste cycles to build a deep understanding of your specific recycling streams and high-volume disposal areas. The crew that handles your paper &amp; card collection on a Tuesday is the same crew that handles your glass uplift on a Friday &mdash; they know which zones generate which waste, where your bin store is, which gates need unlocking, which lifts can take a 240L bin, and which corridors are too narrow for a 660L. When your regular crew is on annual leave, we send a trained backup who has been briefed on your waste streams, your bin-store layout, your access protocols, and your carrier collection schedule &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking your facility&rsquo;s waste routes.",
  },
  {
    icon: ClipboardCheck,
    title: "Cost-Effective Waste Reduction",
    description:
      "We analyze your waste output to develop a powerful package that increases recycling rates and reduces costs. By optimizing collection schedules and segregation, we ensure you only pay for what you need. A waste audit identifies your true stream composition &mdash; we typically find that 20&ndash;30% of general waste is mis-segregated recyclable material that&rsquo;s costing you landfill tax (&pound;103.40/tonne in 2024/25) when it could be diverted at lower cost. We right-size your containers (no paying for half-empty 1100L bins), right-frequency your collections (no over-servicing quiet periods), and route your waste to the highest-value recycling outlet &mdash; cardboard to a baler for rebate, glass to a colour-sort processor, food waste to anaerobic digestion for renewable energy. Most clients see 15&ndash;25% cost reduction within 90 days of switching to MaundyClean.",
  },
  {
    icon: ShieldCheck,
    title: "Total Regulatory Compliance",
    description: (
      <>
        We support businesses throughout the UK to uphold their environmental and
        health and safety commitments. Our teams handle everything from standard
        dry mixed recycling to specialized{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        waste removal, providing all necessary documentation as standard. Waste
        transfer notes (WTN) for every general and DMR uplift, hazardous waste
        consignment notes (HWCN) for WEEE/batteries/tubes/toner/chemicals, GDPR
        chain-of-custody certificates for confidential waste, COSHH datasheets
        on file, SEPA-licensed carriers under contract, two-year (general) and
        three-year (hazardous) document retention, and a monthly compliance
        pack that&rsquo;s audit-ready the day an environmental health officer or
        SEPA inspector walks in.
      </>
    ),
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Community Safe",
    description:
      "Recycling is better for the environment than landfill, and our goal is to reduce your carbon footprint through efficient logistics and &ldquo;reuse-first&rdquo; protocols. We route every stream to its highest-value outlet: paper and card to a UK reprocessor (not exported to unclear end-markets), glass to a Scottish colour-sort facility, food waste to a local anaerobic digestion plant generating renewable electricity, WEEE to a certified ATF (Authorised Treatment Facility), and only the residual non-recyclable fraction to energy-from-waste or landfill. Our collection routes are optimised to minimise diesel miles, our crews operate electric vans in Glasgow and Edinburgh city centres, and we carbon-offset every collection. The result is a measurable carbon saving per tonne diverted &mdash; reported in your monthly pack and ready for your CSR report.",
  },
];

export function RubbishRecyclingSeoWhy() {
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
                alt="Maundy Clean waste & recycling operatives &mdash; PVG-checked, uniformed, trained in waste segregation, hazardous waste handling, SEPA documentation and bin-store hygiene"
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
                  waste-and-recycling-specific protocols &mdash; waste
                  segregation, hazardous waste handling, SEPA documentation,
                  GDPR chain-of-custody for confidential waste, bin-store
                  hygiene, and issue flagging. Same crew every collection
                  &mdash; never a rotating cast of agency strangers.
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
                  <Recycle className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Waste diverted</div>
                  <div className="text-xs font-bold text-[var(--ink)]">92%</div>
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
              Why MaundyClean is Scotland&rsquo;s Strategic Recycling Partner
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many waste contractors provide impersonal, &ldquo;one-size-fits-all&rdquo;
              collections that ignore the specific needs of a business.
              MaundyClean focuses on listening to what Scottish businesses really
              want: a high level of service without compromising on cost or
              environmental impact. We act as a single supplier partner &mdash;
              integrating waste solutions seamlessly into your daily operations
              to achieve zero waste to landfill.
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
// Section 3 - Our Comprehensive Waste & Recycling Portfolio
// (Semantic H2: "Our Comprehensive Waste & Recycling Portfolio")
// Brief-specific section with 3 H3 sub-sections:
//   1. Commercial Recycling Solutions (The "Alchemy" Process)
//   2. Specialist Rubbish & Clearance Services
//   3. Often-Missed Operational Details
// Carries the id="checklist" anchor that the CTA buttons link to.
// ALL sub-point bodies in ALL 3 cards are plain strings per the
// brief (no inline Links), but typed as ReactNode (via
// ChecklistPoint.text) for codebase consistency.
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
    icon: Recycle,
    image: IMG.checklistFront,
    imageAlt:
      "Maundy Clean operatives collecting segregated commercial recycling &mdash; paper, card, plastic and glass &mdash; at a Scottish business premises",
    title: "1. Commercial Recycling Solutions (The &ldquo;Alchemy&rdquo; Process)",
    description:
      "We turn your waste into resources, helping you achieve a high standard of corporate social responsibility. Every recyclable stream is segregated at source, collected separately, and routed to its highest-value UK reprocessor &mdash; not co-mingled and sent to a Materials Recovery Facility where 15&ndash;25% is rejected to landfill.",
    points: [
      {
        title: "Paper & Cardboard",
        text: "Streamlined collection for office and retail environments. Under-desk recycling trays for paper, lockable consoles for confidential paper (chain-of-custody certificate issued per uplift), 240L or 660L wheeled bins for card, baler installed where card volume justifies (typically &gt;1 tonne/month) and bales returned to a UK paper mill for rebate. We can supply branded signage, colour-coded bins, and staff-engagement posters to drive your segregation rate from a typical 60% to 85%+ within 90 days.",
      },
      {
        title: "Plastic & Glass Restoration",
        text: "Turning &ldquo;old drinks bottles back into football tops&rdquo; through specialized processing streams. PET bottles collected separately and routed to a UK plastics reprocessor (food-grade rPET or fibre-grade for polyester fleece), glass collected in bottle banks or wheeled bins with bottle inserts and routed to a Scottish colour-sort facility (clear, green, brown separated for highest-value end market). Mixed plastics (HDPE, PP, LDPE) collected where volume justifies and routed to a specialist plastics recycler.",
      },
      {
        title: "Food Waste to Energy",
        text: "Implementing solutions that turn food scraps into electricity, providing a sustainable alternative to traditional disposal. Food waste collected in sealed 5L, 25L or 240L caddies (colour-coded, lockable, odour-controlled), routed to a local anaerobic digestion plant where micro-organisms break down the organic matter and generate biogas &mdash; the biogas is burned to generate renewable electricity fed to the National Grid, and the digestate is returned to farmland as fertiliser. Every tonne of food waste diverted generates approximately 200 kWh of renewable electricity &mdash; reported in your monthly pack.",
      },
    ],
  },
  {
    icon: Trash2,
    image: IMG.checklistCounter,
    imageAlt:
      "Maundy Clean specialist rubbish &amp; clearance operatives removing end-of-tenancy furniture, after-builders debris and confined-space waste from a Scottish commercial property",
    title: "2. Specialist Rubbish & Clearance Services",
    description:
      "Beyond the regular collection schedule, we provide specialist clearance services for the waste streams that arrive in surges &mdash; property transitions, post-construction debris, and confined-space accumulations that a standard wheeled-bin collection can&rsquo;t handle. All clearances are documented with waste transfer notes and routed to licensed facilities.",
    points: [
      {
        title: "End of Tenancy Clearances",
        text: "Total removal of left-behind furniture and debris to ensure properties are front-line ready for the next tenant. We clear offices at end of lease, retail units at handover, residential properties at end of tenancy &mdash; including bulky items (desks, chairs, sofas, white goods), packaging waste, IT equipment (WEEE-compliant), and general rubbish. Reusable items routed to charity partners (Reuse Scotland, Zero Waste Scotland) where possible; recyclable materials segregated; only the residual fraction to energy-from-waste. Pre-handover survey, fixed-price quote, certificate of clearance issued for the landlord or agent.",
      },
      {
        title: "After Builders Waste Removal",
        text: "Technical clearing of heavy construction dust, debris, and spillages following home or office improvements. Plasterboard (segregated &mdash; gypsum is a separate stream under SEPA guidance), timber (treated and untreated segregated), hardcore (rubble, tiles, ceramics) routed to aggregate recycling, metals segregated and routed to a scrap merchant for rebate, paint and solvent containers (hazardous waste consignment note), packaging (cardboard, polythene, polystyrene) recycled. We work alongside the cleaning team to leave the site &ldquo;speechlessly spotless&rdquo; &mdash; not just waste-cleared.",
      },
      {
        title: "Confined Space & Attic Cleans",
        text: "Professional clearing of &ldquo;dangerous to reach&rdquo; areas, including silos or storage facilities. Loft and attic clearances (insulation-aware, dust-suppressed, PPE-equipped), cellar and basement clearances (low-headroom, restricted-access, lighting-equipped), storage room and archive clearances (confidential paper chain-of-custody), silo and tank cleaning (confined-space-entry trained, atmospheric monitoring, rescue plan). Every confined-space job has a dedicated RAMS, a two-person minimum crew, and a standby rescue plan &mdash; not a quick visit from a man-with-a-van.",
      },
    ],
  },
  {
    icon: HeartPulse,
    image: IMG.checklistKitchen,
    imageAlt:
      "Maundy Clean operatives sanitising a commercial bin store, pressure-washing wheeled bins and disinfecting waste storage areas at a Scottish facility",
    title: "3. Often-Missed Operational Details",
    description:
      "The difference between a basic waste contractor and a strategic recycling partner shows up in the details that most contractors miss. These are the operational touches that protect your staff, your customers, and your environmental health rating &mdash; and they&rsquo;re included as standard in every MaundyClean waste &amp; recycling contract.",
    points: [
      {
        title: "Bin Store Sanitization",
        text: "Meticulous cleaning and disinfecting of waste storage areas to keep germs and bugs at bay. Weekly bin-store wash-down (pressure-washer with EN 1276 bactericide), bin exteriors wiped and sanitised, 240L/660L/1100L bins pressure-washed internally on a quarterly rota, drains in the bin store cleared and enzymatic-treated (eliminates drain-fly and odour at source), spill containment (broken glass, leaking food waste, split bin bags) cleaned immediately, signage and segregation stickers refreshed as needed. The bin store your facilities manager is happy to show an environmental health officer &mdash; not the smelly, sticky corner nobody wants to walk into.",
      },
      {
        title: "Waste Audit Reports",
        text: "Detailed pre and post-clean reports to monitor your progress toward zero-waste goals. Quarterly waste audit: we weigh every stream over a 2-week period, calculate your true diversion rate, identify mis-segregation (e.g. 25% of general waste is actually recyclable), and produce a 12-month rolling trend chart. Monthly compliance pack: waste transfer notes, hazardous waste consignment notes, GDPR chain-of-custody certificates, recycling rate report, carbon saving calculation, comparison to previous month and previous year. PAS 402-aligned reporting methodology &mdash; ready for your CSR report, SEPA inspection, or B Corp certification audit.",
      },
    ],
  },
];

export function RubbishRecyclingSeoChecklist() {
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
            Beyond the standard bin collection
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Waste &amp; Recycling Portfolio
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our rubbish and recycling services move beyond basic collection to
            deliver technical depth in waste management and segregation. From the
            &ldquo;alchemy&rdquo; of commercial recycling that turns your waste
            into resources, through specialist clearance services for property
            transitions and post-construction debris, to the often-missed
            operational details like bin-store sanitisation and waste audit
            reporting &mdash; here is the scope we deliver as standard, regardless
            of business type, footprint, or waste volume.
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
                  <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight" dangerouslySetInnerHTML={{ __html: item.title }} />
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
// (Semantic H3: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// (FileText imported for safety/template parity even if not used.)
// Brief has an EXPLICIT [H3] marker on this heading, so we use
// <h3> (matching day-porter pattern; different from
// nightly-janitorial which used <h2> because nightly-janitorial
// brief had NO [H3] marker).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Waste Audit",
    description:
      "Contact us for a free site survey. We will assess your waste streams and develop a bespoke recycling plan tailored to your operational flow. Our account manager walks your facility with your facilities or office manager, maps your waste generation points (desks, kitchens, washrooms, bin store, delivery bay), identifies your current stream composition (we weigh a 2-week sample if needed), reviews your existing carrier contracts and bin-store layout, and benchmarks your current diversion rate against PAS 402. We send an itemised proposal within 2 business days: stream-by-stream collection schedule, container sizing, fixed monthly retainer, SEPA-licensed carrier partners named, RAMS, COSHH datasheets, and a draft 90-day diversion-rate target. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Integration",
    description:
      "We hand-pick a team of trained technicians who follow strict protocols and Safe Systems of Work. Your allocated waste &amp; recycling crew is PVG-checked (essential for buildings with public access), uniformed, and trained in waste-specific protocols &mdash; waste segregation at source, hazardous waste handling (WEEE, batteries, tubes, toner, chemicals), GDPR chain-of-custody for confidential paper, bin-store hygiene, spill response, manual handling (1- and 2-person lifts for 240L/660L/1100L bins), and issue flagging (overflowing bins, contamination in recycling streams, broken containers, pest activity). We brief the crew on your bin-store layout, your access protocols (gate codes, fobs, key safes), your carrier collection schedule, and your waste audit reporting requirements. The same crew returns every collection &mdash; building real knowledge of your facility&rsquo;s waste patterns.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Greener Workspace",
    description:
      "Experience a facility that is clean, compliant, and environmentally conscious, backed by our MaundyClean satisfaction guarantee. You receive a monthly compliance pack: waste transfer notes (2-year retention), hazardous waste consignment notes (3-year retention), GDPR chain-of-custody certificates, recycling rate report with month-on-month and year-on-year comparison, carbon saving calculation per tonne diverted, and any issue-flagging (overflowing bins, contamination incidents, missed collections, carrier-side delays). From &pound;8 per collection for a single-stream low-volume site through to a fully bespoke multi-site retainer with one invoice. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function RubbishRecyclingSeoBooking() {
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
            We have optimized our waste management experience to be uncomplicated
            and straightforward, providing the responsive support Scottish
            business owners demand. From free site survey and itemised proposal
            to first collection in under a week &mdash; no friction, no waiting,
            no surprises. Just a cleaner, greener, more compliant facility every
            month, and an audit-ready compliance file the day a SEPA inspector
            or environmental health officer walks in.
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
                <h4 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight">
                  {step.title}
                </h4>
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
              Request Your Bespoke Waste Audit Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Property Cycle
// (Semantic H2: "Solutions for Every Property Cycle")
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
    title: "Move-In/Move-Out",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy clearance paired with end of tenancy cleaning at a Scottish commercial unit being vacated, ensuring the property is front-line ready for the next tenant",
    description: (
      <>
        Occupying a new office or home? Combine your waste removal with our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        to ensure your entire premise is spotless and ready for launch. The same
        trusted vetted crew handles the clearance and the clean &mdash; so the
        property is handed back &ldquo;speechlessly spotless&rdquo; and
        deposit-back guarantees are met.
      </>
    ),
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt:
      "Antiviral sanitisation ULV fogging of bin stores and communal areas at a Scottish commercial facility after waste clearance",
    description: (
      <>
        After clearing waste, book an{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        session to ensure your bin stores and communal areas are biologically
        safe. EN 14476 virucidal ULV fogging of every surface, every bin-store
        corner, every communal touchpoint &mdash; the periodic deep biological
        reset that lifts the cumulative contamination load a standard clean
        can&rsquo;t reach.
      </>
    ),
    cta: "Explore antiviral sanitisation",
  },
  {
    icon: Sparkles,
    title: "Facility Maintenance",
    href: "/services/event-venue-cleaning",
    image: IMG.leaseSpring,
    imageAlt:
      "Post-event rubbish removal and site restoration at a Scottish event venue, paired with full event-venue cleaning",
    description: (
      <>
        For high-traffic venues, our{" "}
        <Link
          href="/services/event-venue-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Event Venue Cleaning
        </Link>{" "}
        includes meticulous post-event rubbish removal and site restoration.
        From conference centres and stadia to exhibition halls and concert
        venues &mdash; the same trusted crew that handles your regular waste
        collection steps up for event-night clearance and next-day restoration.
      </>
    ),
    cta: "Explore event venue cleaning",
  },
  {
    icon: Hammer,
    title: "External Care",
    href: "/services/car-park-cleaning",
    image: IMG.leaseBuilders,
    imageAlt:
      "Car park pressure washing paired with rubbish collection at a Scottish commercial forecourt, removing oil stains and traffic film",
    description: (
      <>
        Pair your rubbish collection with our{" "}
        <Link
          href="/services/car-park-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Car Park Cleaning
        </Link>{" "}
        to remove oil stains and traffic film from your forecourts. SEPA-compliant
        oily-water capture, scrubber discharge via licensed waste contractors,
        and waste transfer notes for your records &mdash; the full external-care
        package under one contract.
      </>
    ),
    cta: "Explore car park cleaning",
  },
];

export function RubbishRecyclingSeoInterlinking() {
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
            Beyond the bin collection &middot; property milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Cycle
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our waste management services provide the heartbeat of your
            property&rsquo;s environmental health, but we offer specialized
            resets for major milestones &mdash; from end-of-tenancy clearances
            paired with end-of-tenancy cleaning, through antiviral sanitisation
            of bin stores and communal areas, event-venue post-event rubbish
            removal, and external car-park pressure washing. The same trusted,
            vetted crew can step up whenever your facility needs more than a
            standard waste collection.
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
// (Semantic H2: "Rubbish & Recycling Services Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/rubbish-recycling-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function RubbishRecyclingSeoNearMe() {
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
              Local rubbish &amp; recycling services &amp; sustainable waste management across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Rubbish &amp; Recycling Services Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;rubbish and recycling services near me&rdquo;
              or &ldquo;commercial waste collection near me&rdquo; in Scotland?
              Maundy Clean covers facilities managers, office managers, retail
              operators, hospitality groups, and commercial estates across the
              Central Belt, Highlands, Borders, and Islands &mdash; from
              Glasgow&rsquo;s IFSD and Edinburgh&rsquo;s Exchange District to
              Aberdeen&rsquo;s energy corridor and Dundee&rsquo;s Waterfront,
              plus commercial estates in Stirling, Perth, Inverness, and Ayr.
              Same SEPA-licensed carriers, same dedicated crew every collection,
              same audit-ready compliance file &mdash; wherever your facility
              happens to be. Find your local waste &amp; recycling specialist
              below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean rubbish &amp; recycling services &amp; commercial waste collection coverage areas"
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
                  Same SEPA-licensed carriers, same 100% satisfaction guarantee
                  &mdash; from Glasgow to Inverness.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                asChild
              >
                <Link href="/services/rubbish-recycling-near-me#locations">
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
                Find your local waste crew
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
                    href={`/services/rubbish-recycling-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> waste crew</span>
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
            Our local rubbish &amp; recycling crews operate across Glasgow&rsquo;s
            International Financial Services District, Merchant City and West End
            corporate towers (facilities managers, office managers and retail
            operators), Edinburgh&rsquo;s Exchange District, New Town and
            Quartermile business quarters (corporate estates and property
            management companies), Aberdeen&rsquo;s energy-corridor West End and
            Tullos industrial offices (energy operators and service companies),
            Dundee&rsquo;s Waterfront and City Centre professional services
            buildings (facilities teams and office managers), and Scottish
            commercial districts across the Central Belt &mdash; from Inverness
            to Perth, Falkirk to Ayr. Whether you&rsquo;re searching for
            commercial waste collection in Glasgow, segregated recycling uplift
            in Edinburgh, food waste to energy in Aberdeen, or end-of-tenancy
            clearance anywhere in between, Maundy Clean assigns a vetted,
            PAYE-employed, SEPA-licensed waste crew that stays with you for the
            long run. Same crew, same standard, same locked-in rate for 12
            months, audit-ready compliance file every month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Waste Audit Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function RubbishRecyclingSeoFinalCta() {
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
            Ready to book your free waste audit?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Bespoke Waste Audit Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Facilities managers, office managers and business owners &mdash; book
            a free, no-obligation site survey with our management team and
            receive an itemised proposal within 2 business days. Sustainable
            waste management, the same trusted team every collection, a fixed
            monthly retainer that locks your rate for 12 months, and an
            audit-ready compliance file every month. From &pound;8 per collection
            for a single-stream low-volume site through to a fully bespoke
            multi-site retainer with one invoice. No pushy sales call, no
            waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Waste Audit Today
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
                View Our Commercial Recycling Checklist
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
// 3 Q&As from the brief (zero waste to landfill, insured waste
// operatives, provide own bins and equipment)
// ============================================================

const SEO_FAQS = [
  {
    q: "Can you help us achieve zero waste to landfill?",
    a: "Yes. We specialize in designing waste strategies that prioritize reduction, reuse, and recycling to divert the maximum amount of waste away from landfills. A typical Scottish commercial site can move from 60% diversion to 92%+ within 90 days of switching to MaundyClean &mdash; we audit your true stream composition (weighing every stream over a 2-week sample period), identify the 20&ndash;30% of general waste that&rsquo;s mis-segregated recyclable material, right-size your containers, right-frequency your collections, and route every stream to its highest-value UK reprocessor. Residual non-recyclable waste goes to energy-from-waste (not landfill) via a SEPA-licensed EfW facility &mdash; so even your residual stream generates renewable electricity rather than methane in a hole in the ground. Your monthly compliance pack reports the diversion rate, carbon saving per tonne diverted, and 12-month rolling trend &mdash; ready for your CSR report, B Corp certification, or SEPA inspection.",
  },
  {
    q: "Are your waste operatives insured?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning and clearance company with years of experience serving the Scottish commercial sector. We carry &pound;5m public liability as standard &mdash; covering collection, segregation, bin-store operations, hazardous waste handling, confined-space clearance, and end-of-tenancy clearance &mdash; and every crew member is PVG-checked (essential for buildings with public access), uniformed, and trained in waste-specific protocols: waste segregation at source, hazardous waste handling (WEEE, batteries, tubes, toner, chemicals), GDPR chain-of-custody for confidential paper, bin-store hygiene, spill response, manual handling (1- and 2-person lifts for 240L/660L/1100L bins), confined-space entry (where applicable), and issue flagging. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, and corporate insurance compliance files. Our documentation is audit-ready for environmental health inspection, SEPA review, and B Corp certification; we provide waste transfer notes (2-year retention), hazardous waste consignment notes (3-year retention), GDPR chain-of-custody certificates, COSHH datasheets, RAMS, training records, and vetting records (PVG) for your compliance file.",
  },
  {
    q: "Do you provide your own bins and equipment?",
    a: "Yes. We supply all the necessary materials and professional-grade equipment required to manage your waste efficiently, which is included in your competitive quote. Standard container provision: 240L, 660L and 1100L wheeled bins (colour-coded by stream &mdash; general, DMR, paper, glass, food); lockable consoles for confidential paper; 5L, 25L and 240L caddies for food waste; bottle banks for glass; long-line boxes for fluorescent tubes; sealed bags for toner cartridges; battery collection tubes; WEEE boxes for laptops, monitors and small appliances; baler installation (lease or capital purchase) where card/plastic volume justifies. Specialist clearance equipment: confined-space-entry kits (atmospheric monitoring, rescue plan, PPE), pressure-washer with EN 1276 bactericide for bin-store sanitisation, manual handling aids (sack barrows, bin tugs, two-person lift straps). Branded signage, colour-coded bin stickers, and staff-engagement posters supplied as standard. Containers are typically leased as part of the monthly retainer (no upfront capital outlay) &mdash; or capital-purchased if you prefer to own them outright.",
  },
];

export function RubbishRecyclingSeoFaq() {
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
            Rubbish &amp; recycling services &amp; sustainable waste management &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our rubbish &amp; recycling clients
            ask most often. Can&rsquo;t find what you need? Call us on{" "}
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
                Request Your Bespoke Waste Audit Today
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
                View Our Commercial Recycling Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

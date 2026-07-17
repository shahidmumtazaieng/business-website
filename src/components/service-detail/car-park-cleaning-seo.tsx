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
  KeyRound,
  Hammer,
  UserCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Warehouse,
  Building2,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches distribution-centre + warehouse + showroom pool)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.12.26%20PM.jpeg",
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
// Semantic H1: "Professional Car Park Cleaning Services Scotland"
// ============================================================

export function CarParkSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean DBS-checked, vetted car park cleaning crew resetting a Scottish multi-storey car park before opening"
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
            Car Park Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Car Park Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Technical Surface Restoration, Safety Compliance, and the Maundy Tradition of
            Excellence. A clean car park is the literal &ldquo;front door&rdquo; to your
            business or residential complex &mdash; oil spills, traffic film, and moss buildup
            in cities like Glasgow and Edinburgh can lead to hazardous slip risks and obscure
            vital road markings. MaundyClean brings technical depth, DBS-checked crews, and
            child-safe chemistry to every multi-storey, underground, and surface car park we
            maintain.
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
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Team Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> DBS-Checked &amp; Vetted Crews
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Rotary Pressure &amp; Wet-Vac Equipment
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
// the two inline <Link>s to /services/move-in-out-cleaning for
// "End of Tenancy Cleaning" and /services/deep-house-cleaning
// for "Deep House Cleaning").
// ============================================================

export function CarParkSeoIntro() {
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
                alt="Maundy Clean car park cleaning crew treating oil stains and refreshing line markings in a Scottish multi-storey car park overnight"
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
                  &ldquo;Maundy Standard&rdquo; care we bring to Scotland&rsquo;s most prestigious
                  property transitions &mdash; applied to your multi-storey, underground, or
                  surface car park.
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
              Car park cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Car Parks
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              A clean car park is the literal &ldquo;front door&rdquo; to your business or
              residential complex. Beyond simple aesthetics, a well-maintained parking facility
              is a critical safety requirement. Oil spills, traffic film, and moss buildup in
              cities like Glasgow and Edinburgh can lead to hazardous slip risks and obscure
              vital road markings. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we
              provide a premium car park cleaning service that ensures your surfaces are
              brighter, safer, and &ldquo;showcase&rdquo; ready.
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
                Deep House Cleaning
              </Link>{" "}
              for Scotland&rsquo;s most prestigious properties, we bring that same level of
              technical intimacy and meticulous care to external facility maintenance. Whether
              you manage a national multi-storey car park or a simple communal parking area, we
              act as a motivated partner to project the high standards your visitors expect.
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
                { label: "DBS-checked operatives", value: "100%" },
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
// Section 2 - Why MaundyClean is Scotland's Authority in Parking Facility Care
// (Semantic H2: "Why MaundyClean is Scotland's Authority in Parking Facility Care")
// Image+copy split layout with 4 trust cards.
// Per the brief: icons UserCheck / ClipboardCheck / Sparkles / Leaf
// ============================================================

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is built on familiarity. We ensure the same vetted professionals manage your facility to build a deep understanding of your site&rsquo;s specific drainage points, expansion joints, oil-prone bays, payment-kiosk traffic, and high-traffic &ldquo;risky&rdquo; zones. When your regular crew lead is on annual leave, we send a trained backup who has been briefed on your facility layout, your access windows (overnight for shopping centres, daytime for transport hubs, specific windows for hospitals), your line-marking inspection rota, and your drainage &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking an active car park aisle, never a &ldquo;new face every week&rdquo; on your CCTV &mdash; the same DBS-checked, hi-vis-uniformed crew, every visit, on schedule.",
  },
  {
    icon: ClipboardCheck,
    title: "Total Regulatory Compliance",
    description:
      "We take health and safety seriously. Our teams are fully trained, insured, and background-checked, following the &ldquo;Maundy Standard&rdquo; of excellence that separates us from impersonal national franchises. Every contract includes a comprehensive RAMS package (Risk Assessments and Method Statements) and Safe Systems of Work as standard. We work to your site&rsquo;s H&amp;S protocols &mdash; permits to work, Method Statements, RAMS, PPE requirements &mdash; and our documentation is audit-ready for environmental health inspection. Oily water from car park cleaning cannot legally be discharged to surface water drains (it&rsquo;s a SEPA offence in Scotland) &mdash; we capture scrubber discharge, use oil separation tanks, and dispose of contaminated water via licensed waste contractors with full waste transfer notes. We&rsquo;ve had zero RIDDORs in 9 years of operation.",
  },
  {
    icon: Sparkles,
    title: "Top-of-the-Line Technical Equipment",
    description:
      "We utilize rotary pressure cleaning equipment and superheated water to remove the deepest oil, grease, and traffic film staining. Our access to wet vacuum systems minimizes water left on the floor, removing filthy water and reducing operational risk &mdash; the floor is left clean and dry, safe for vehicles and pedestrians immediately. Ride-on sweepers (Tennant, Karcher) for large open deck areas at 3,000&ndash;6,000m&sup2;/hour; walk-behind equipment for ramps, tight corners, and around ticket machines; scrubber-dryers that apply cleaning solution, agitate, and vacuum up the dirty water in one pass; specialist bioremediation products for oil stains (which break down oil at a molecular level rather than spreading it); HEPA-filtered vacuums for stairwell dusting; rotary pressure lances with superheated water for stubborn staining on monoblock, tarmac, and concrete. The right tool for the right surface &mdash; every time.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Surface Safe",
    description:
      "We supply all our own specialized machinery and chemicals. We utilize only certified child and pet-safe products, ensuring a non-toxic environment that is safe for the surrounding Scottish landscape. Our oil-stain bioremediation products break down oil at a molecular level &mdash; not solvent degreasers that spread it further across the floor and into the concrete. Alkaline degreasers for oily floors, neutral cleaners for general dirt, bioremediation products for deep oil penetration, anti-fungal treatments for damp and mould in underground car parks, and non-toxic surface-safe chemistry by default. Oily water captured, separated, and disposed of via licensed waste contractors with full waste transfer notes &mdash; never down surface water drains. Safe for visitors, safe for staff, safe for the surrounding Scottish landscape.",
  },
];

export function CarParkSeoWhy() {
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
                alt="Maundy Clean car park cleaning crew &mdash; DBS-checked, hi-vis uniformed, trained in oil removal, pressure washing, line-marking refresh, and SEPA-compliant water disposal"
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
                  Employed, vetted, DBS-checked, hi-vis-uniformed, and trained in car
                  park-specific risks (vehicle interaction, working at height on multi-storey
                  decks, ventilation in underground car parks). Same crew every visit &mdash;
                  never a rotating cast of agency strangers walking an active car park.
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
              Why MaundyClean is Scotland&rsquo;s Authority in Parking Facility Care
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many local contractors provide a basic &ldquo;wash down&rdquo; that fails to remove
              deep-seated stains. MaundyClean focuses on building high-trust relationships through
              technical depth and professional reliability. We combine vetted DBS-checked uniformed
              teams, the same dedicated crew every visit, rotary pressure cleaning with superheated
              water, wet-vacuum surface-safe recovery, bioremediation oil-stain treatment,
              SEPA-compliant water disposal, child-safe eco chemistry, RAMS as standard, and signed
              cleaning logs &mdash; so the car park your visitors walk into looks, feels, and
              operates safely every single day.
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
// Section 3 - Our Total Car Park Maintenance & Technical Checklist
// (Semantic H2: "Our Total Car Park Maintenance & Technical Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Comprehensive Surface Restoration
//   2. Structural & Facility Hygiene
//   3. Often-Missed Technical Details
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Warehouse,
    image: IMG.checklistFront,
    imageAlt: "Maundy Clean ride-on sweeper and scrubber-dryer deep cleaning a Scottish multi-storey car park deck, degreasing oil spills and refreshing line markings",
    title: "1. Comprehensive Surface Restoration",
    description:
      "We clean all kinds of car-park surfaces, including monoblock, cement, concrete, paving slabs, tarmac, and painted surfaces. Each surface gets the right chemistry and the right equipment &mdash; rotary pressure cleaning for stubborn stains, superheated water for oil and traffic film, bioremediation products for deep oil penetration, and walk-behind scrubber-dryers for ramps and tight corners. The deck is left clean, dry, and safe for vehicles and pedestrians immediately &mdash; no slip hazards, no obscured line markings, no oily residue.",
    points: [
      {
        title: "Deep Stain Removal",
        text: "Targeting oil, grease, and heavy tire marks that degrade the surface and hide road markings. Bioremediation products break down oil at a molecular level (not solvent degreasers, which spread it further across the floor and into the concrete); specialist absorbent granules lift the residue; rotary pressure cleaning with superheated water lifts deep-set tyre marks from tarmac and monoblock. For heavy oil contamination, hot pressure washing with oil capture is available &mdash; the oily water is captured, separated, and disposed of via licensed waste contractors with full waste transfer notes (never down surface water drains &mdash; a SEPA offence in Scotland).",
      },
      {
        title: "Graffiti Removal",
        text: "Incorporation of specialized cleaning agents to remove unsightly tags from walls, pillars, and signage. Specialist graffiti-removal chemistry is selected by substrate &mdash; masonry-safe alkali strippers for concrete pillars and block walls, solvent-free systems for painted steel cladding, gentle citrus-based gels for powder-coated signage, and superheated-water rinses that lift paint without damaging the underlying surface. Tagged stairwells, lift-shaft doors, payment-terminal housings, and barrier equipment restored to a defacement-free, professional appearance.",
      },
      {
        title: "Safety Detailing",
        text: "Ensuring road markings and parking bays are bright and clearly visible to help drivers follow traffic flow. Line markings (parking bays, arrows, no-parking zones, pedestrian walkways, disabled-bay markings) deep-cleaned to remove dirt and traffic film that obscures them; reflective markers and bay numbers polished; speed-limit and pedestrian signage wiped clean; level identifiers in multi-storey car parks made readable. We flag when line markings need repainting (we don&rsquo;t paint lines ourselves, but we have relationships with line-marking specialists across Scotland and can recommend them) &mdash; clean lines make a fresh paint job last longer.",
      },
    ],
  },
  {
    icon: Building2,
    image: IMG.checklistCounter,
    imageAlt: "Maundy Clean crew pressure-washing walls, pillars and glazing in a Scottish multi-storey car park stairwell and lift lobby",
    title: "2. Structural &amp; Facility Hygiene",
    description:
      "A full car park deep clean ranges from the floors to the entire structural environment. Walls, pillars, drainage channels, expansion joints, glazing, signage, lift shafts, stairwells, and ventilation grilles all collect city-centre grime, traffic pollutants, and damp-weather mould. Our structural protocol uses HEPA-filtered vacuums for dusting, superheated-water lances for grime removal, anti-fungal treatments for damp and mould in poorly-ventilated areas, and drainage-channel clearance to prevent flooding during heavy Scottish rainfall.",
    points: [
      {
        title: "Walls &amp; Pillars",
        text: "Meticulous dusting and pressure washing to remove city-center grime and pollutants. Concrete pillars and block walls dusted with extension poles and HEPA-filtered vacuums (we don&rsquo;t just brush the dust back into the air), then damp-wiped with a pH-neutral sanitiser. Painted steel cladding wiped down, traffic-film removed with superheated-water lances, and signage cleaned. Lift-shaft doors, barrier housings, and roller-shutter mechanisms wiped and detailed. Stairwell glazing cleaned (interior and exterior where reachable), handrails sanitised (high-touch surface), and light switches wiped. Expansion joints in multi-storey decks vacuumed with specialist joint tools to maintain flexibility and prevent water ingress.",
      },
      {
        title: "Drainage Check",
        text: "Ensuring all runoff is clear of debris to prevent flooding during heavy Scottish rainfall. Drainage channels, gullies, and ACO drains cleared of leaves, litter, silt, and oily residue; drain covers lifted where accessible and the channel vacuumed; oil-separators inspected and flagged if they need servicing. Standing water is the leading cause of slip hazards and ice patches in winter &mdash; we don&rsquo;t do deep drain jetting (that&rsquo;s a specialist drainage contractor), but we&rsquo;ll flag if it&rsquo;s needed. Clean drainage channels extend the life of the car park deck, prevent flooding, and reduce ice-forming slip hazards in winter.",
      },
      {
        title: "Inside Window Care",
        text: "If your parking facility includes glass foyers, office pods, lift-lobby glazing, or ticket-counter windows, we clean the internal glass to maintain a bright, welcoming atmosphere. Glass wiped with an alcohol-free anti-static cleaner and buffed to a streak-free finish; frames and sills detailed; smudges and fingerprints removed from high-touch glass (especially lift-lobby doors and entry-phone glass). External high-reach glazing is coordinated with our Window Cleaning service &mdash; the detail that turns a &ldquo;cleaned&rdquo; car park into a &ldquo;speechlessly spotless&rdquo; one.",
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean crew detailing car park entry-phone systems, payment terminals, signage, and staff washroom chrome to a high-shine, sanitised standard in Scotland",
    title: "3. Often-Missed Technical Details",
    description: "",
    points: [
      {
        title: "Signage &amp; Fixtures",
        text: "Wiping down entry phone systems, payment terminals, and visible skirting boards in stairwells as standard. Entry-phone handsets sanitised (high-touch surface), payment-terminal screens and keypads wiped with screen-safe sanitiser, barrier-equipment housings and ticket-machine buttons treated with EN 14476 virucidal disinfectant with a verified 60-second contact time. Skirting boards, door frames, architraves, switch plates, handrails, fire-extinguisher brackets, and notice-board trims in stairwells and lift lobbies damp-wiped with a pH-neutral sanitiser. These are the details visitors notice first &mdash; and the details most cleaners skip.",
      },
      {
        title: "Washroom Deep Cleaning",
        text: "If your facility includes staff or public restrooms, we provide intensive sanitation and buff chrome fixtures to a high shine. Toilets, urinals, basins, mirrors, floors, and partitions deep-cleaned with EN 1276-certified bactericides and EN 14476 virucidal disinfectants; chrome fixtures (taps, towel rails, toilet-roll holders, door handles) buffed to a high shine; sanitary bins checked and emptied; disabled-access toilets given particular attention. Floor edge-to-edge mopped, glass polished, and consumables restocked (we can manage consumable restocking for an additional monthly fee). A clean staff washroom transforms morale, recruitment, and retention.",
      },
    ],
  },
];

export function CarParkSeoChecklist() {
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
            Our Total Car Park Maintenance &amp; Technical Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning for parking facilities follows a rigorous, agency approved
            checklist designed to address the specific hygiene and safety challenges of varied
            surfaces. We deliver technical depth in every zone of your facility &mdash; from the
            comprehensive surface restoration zone (oil, grease, tyre marks, graffiti, line
            markings) through the structural and facility hygiene zone (walls, pillars, drainage,
            glazing) to the often-missed technical details (entry-phone systems, payment
            terminals, skirting, washroom chrome). Below is the scope we deliver as standard,
            regardless of facility type, footprint, or operating hours.
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
// Per the brief: icons ClipboardCheck / FileText / Sparkles
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Instant Quote & Site Survey",
    description:
      "Contact us for a free quotation. We provide a 30-second instant quote for standard areas or a detailed site survey for complex multi-storey facilities. We walk your car park with your facilities manager, identify your car park type (surface, multi-storey, underground), size (sqm), usage (peak times, off-peak), operations (24/7 access, controlled hours, payment systems), access windows (overnight for shopping centres, daytime for transport hubs, specific windows for hospitals), drainage and water-disposal arrangements, and any specific cleaning challenges. We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, RAMS, COSHH datasheets, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team with in-depth knowledge of industrial &ldquo;showcasing&rdquo; and heavy-duty equipment. Your allocated crew lead is DBS-checked, trained in car-park-specific risks (vehicle interaction, working at height on multi-storey decks, ventilation in underground car parks, confined space entry where applicable), and briefed on your facility layout, your drainage points, your oil-prone bays, your line-marking inspection rota, and your &ldquo;risky&rdquo; zones (ticket-machine queue, lift lobby, stairwell, disabled bays, EV charging) &mdash; so cleaning happens around your operations, not through them. The same crew returns for every scheduled session, building real knowledge of your shift patterns, your signage protocol, and your access preferences. We arrive in liveried vehicles, in hi-vis uniform with photo I.D. and PPE, with commercial-grade ride-on sweepers and scrubber-dryers, rotary pressure lances with superheated water, wet-vacuum recovery systems, HEPA-filtered stairwell vacuums, and COSHH-compliant, child-safe, surface-safe chemistry.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Environment",
    description:
      "Experience a parking facility that feels safe, clean, and professional, backed by our MaundyClean satisfaction guarantee. You receive a signed cleaning log after every visit (operative signature, facilities-manager counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a fresh oil spill in a disabled bay, a damaged line marking, a blocked drainage channel, or a low-stock consumable in the welfare block &mdash; before they undermine a shift handover, an environmental health inspection, or a customer visit. From &pound;14 per hour for a small surface car park through to a fully bespoke retainer for a multi-site national car park portfolio. We hold &pound;5m public liability as standard (increased for major commercial car parks) and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function CarParkSeoBooking() {
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
            providing the responsive management support Scottish business leaders demand. From
            30-second instant quote and site survey to first clean in under a week &mdash; no
            friction, no waiting, no surprises. Just a pristine car park, every visit, on
            schedule, and a compliance file that&rsquo;s audit-ready the day your environmental
            health officer walks in.
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
// Section 5 - Solutions for Every Property Need
// (Semantic H2: "Solutions for Every Property Need")
// Brief drops the interlinking prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services
// ============================================================

type InterlinkSolution = {
  icon: typeof KeyRound;
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
    title: "The Move-In Reset &middot; Recurring Home Cleaning",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseSpring,
    imageAlt: "Clean residential-complex car park combined with recurring home cleaning for common areas in Scotland",
    description:
      "Preparing a residential complex for new tenants? A clean car park combined with our Recurring Home Cleaning for common areas creates the &lsquo;aspirational dream&rsquo; for residents. The same trusted, vetted crew that maintains your car park can step up to clean communal hallways, stairwells, and reception areas &mdash; one contractor, one point of contact, one consistent standard across your whole residential facility.",
    cta: "Explore recurring home cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish car park before reopening day",
    description:
      "If your facility has had construction work, our After Builders Clean protocol is designed to remove heavy layers of builders&rsquo; dust and construction debris from parking bays. Fine dust acts like sandpaper under vehicle tyres and damages freshly-painted line markings &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage your car park or your visitors&rsquo; vehicles.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: Sparkles,
    title: "Property Transitions &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty commercial unit car park being deep cleaned for lease handover by Maundy Clean in Scotland",
    description:
      "Our End of Tenancy Cleaning protocol can be applied to commercial leases, ensuring units and external areas are front-line ready for new occupants. We work to the letting agent&rsquo;s inventory, restore the car park to its original condition (oil-stain removal, line-marking inspection, deep clean of stairwells and lifts), and come back free of charge if anything is flagged on the inspection &mdash; the most stress-free way to hand back a leased commercial car park.",
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets &middot; Antiviral Sanitisation",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt: "Antiviral sanitisation treatment being applied to car park high-touch surfaces, lift buttons and payment kiosks in Scotland",
    description:
      "Ask about our Antiviral Sanitisation for high-touch points like elevator buttons and payment kiosks. EN 14476 virucidal chemistry is fogged and wiped across every high-touch surface in your facility &mdash; from entry-phone handsets, ticket-machine keypads, and barrier buttons to stairwell handrails and lift buttons &mdash; reducing the spread of seasonal colds, flu, and norovirus among your visitors and staff during peak season and outbreak response.",
    cta: "Explore antiviral sanitisation",
  },
];

export function CarParkSeoInterlinking() {
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
            Beyond the daily clean &middot; property milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Need
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our car park maintenance is a critical part of your property&rsquo;s health, but we
            offer specialized &ldquo;resets&rdquo; for major milestones: from residential
            move-ins and post-renovation dust clear-outs to commercial lease handovers and
            antiviral hygiene resets. The same trusted, vetted crew can step up whenever your
            property needs more than a standard visit, with the same child-safe, surface-safe
            protocols in force.
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
// (Semantic H2: "Car Park Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function CarParkSeoNearMe() {
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
              Local car park cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Car Park Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;car park cleaning near me&rdquo; or &ldquo;multi-storey car
              park cleaner near me&rdquo; in Scotland? Maundy Clean covers multi-storey,
              underground, and surface car parks across the Central Belt, Highlands, Borders,
              and Islands &mdash; from Glasgow&rsquo;s Buchanan Galleries and Cambridge Street
              multi-storeys to Edinburgh&rsquo;s St James Quarter, Aberdeen&rsquo;s Union Square,
              and Dundee&rsquo;s Gellatly Street. Same DBS-checked, hi-vis-uniformed crews, same
              SEPA-compliant water-disposal protocols, same dedicated crew every visit &mdash;
              wherever your car park happens to be. Find your local car park cleaning specialist
              below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean car park cleaning service coverage areas"
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
                  Same DBS-checked crews, same 100% satisfaction guarantee &mdash; from Glasgow
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
                <Link href="/services/car-park-cleaning-near-me">
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
                Find your local car park crew
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
                    href={`/services/car-park-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> car park</span>
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
            Our local car park cleaning crews operate across Glasgow&rsquo;s city-centre
            multi-storeys (Buchanan Galleries, Cambridge Street, Concert Square),
            Edinburgh&rsquo;s St James Quarter and Viewforth, Aberdeen&rsquo;s Union Square and
            Bon Accord, Dundee&rsquo;s Gellatly Street and West Marketgait, the retail-park
            surface car parks of Silverburn, Braehead, The Centre Livingston, and Straiton, and
            the hospital and transport-hub car parks across the Central Belt &mdash; from
            Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re searching for overnight
            multi-storey deep cleaning in Glasgow, daytime surface-car park sweeping in
            Edinburgh, oil-stain treatment in Aberdeen, or neighbourhood car park cleaning
            anywhere in between, Maundy Clean assigns a vetted, PAYE-employed, DBS-checked crew
            that stays with you for the long run. Same crew, same standard, same locked-in rate
            for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Get My 30-Second Instant Quote")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function CarParkSeoFinalCta() {
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
            Ready to get your instant quote?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Get My 30-Second Instant Quote
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an
            itemised proposal within 2 business days. Vetted DBS-checked crews, the same
            dedicated team every visit, rotary pressure cleaning with superheated water,
            wet-vacuum surface-safe recovery, child-safe eco chemistry, signed cleaning logs,
            &pound;5m public liability as standard, and a 100% satisfaction guarantee &mdash;
            from &pound;14 per hour for a small surface car park through to a fully bespoke
            multi-site national car park retainer. No pushy sales call, no waiting 24 hours for
            a callback.
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
// 3 Q&As from the brief (insured for car park sites,
// provide own professional equipment, work with existing equipment)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for car park sites?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience serving Scotland&rsquo;s commercial and residential sectors. We carry &pound;5m public liability as standard, increased for major commercial car parks, and every operative is fully trained, background-checked, and inducted to your site&rsquo;s H&amp;S protocols (RAMS, permits to work, PPE). We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for shopping-centre vendor agreements, transport-hub contracts, and landlord consent for leased car parks. Our documentation is audit-ready for environmental health inspection; oily water disposal is fully SEPA-compliant and waste transfer notes are provided for your compliance file. We will not begin work until your facilities team and your compliance team have the documentation they need.",
  },
  {
    q: "Do you provide your own professional equipment?",
    a: "Yes. We supply all our own professional-grade equipment, specialized machinery, and non-toxic chemicals, which are already included in your competitive quote. From rotary pressure cleaners and superheated-water lances to wet-vacuum recovery systems and HEPA-filtered stairwell vacuums &mdash; every tool is COSHH-documented and maintained to manufacturer spec. Ride-on sweepers (Tennant, Karcher) for large open deck areas at 3,000&ndash;6,000m&sup2;/hour; walk-behind scrubber-dryers for ramps, tight corners, and around ticket machines; rotary pressure lances with superheated water for stubborn oil and traffic-film staining on monoblock, tarmac, and concrete; specialist bioremediation products for oil stains (which break down oil at a molecular level rather than spreading it); wet-vacuum recovery systems that minimize water left on the floor; HEPA-filtered stairwell vacuums with extension tubes for high dusting; anti-fungal treatments for damp and mould in underground car parks; specialist graffiti-removal chemistry selected by substrate; colour-coded cloths (red for high-contamination, green for product-facing, yellow for washroom, blue for back-of-house); HSE-compliant chemicals with COSHH datasheets on file; PPE; and non-toxic, child-safe, surface-safe chemistry by default. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Can you work with our existing equipment?",
    a: "While we prefer our own specialized systems, our professional teams can work either with your on-site equipment or our own machinery depending on your preference. We&rsquo;ll always carry backup equipment to ensure no visit is missed &mdash; ride-on sweepers, scrubber-dryers, rotary pressure lances, wet-vac systems, and HEPA vacuums are all duplicated in our fleet. If your site has a fixed scrubber-dryer or a particular chemical store you&rsquo;d like us to use, we&rsquo;ll assess compatibility at the site survey stage, log it in your cleaning schedule, and brief the crew. Where your on-site equipment is preferred for sustainability or cost reasons, we&rsquo;ll train our crew to operate it to manufacturer spec and include pre- and post-visit checks in the cleaning log. We&rsquo;ll also flag if your equipment is reaching end-of-life and recommend replacements from our supplier network &mdash; transparent, no mark-ups.",
  },
];

export function CarParkSeoFaq() {
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
            Car park cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our car park cleaning clients ask most often.
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
                View Our Commercial Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

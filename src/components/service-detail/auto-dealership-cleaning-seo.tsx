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
  Scissors,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches salon-spa + event-venue + car-park pool)
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
// Semantic H1: "Professional Auto Dealership & Car Showroom Cleaning Scotland"
// ============================================================

export function AutoDealershipSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean PVG-checked, vetted auto dealership cleaning crew restoring showroom floors, glass partitions and display vehicles in a Scottish car dealership before opening"
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
            Auto Dealership Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Auto Dealership &amp; Car Showroom Cleaning Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Protecting Brand Image with Manufacturer-Standard Technical Maintenance
            and Meticulous Care. Main dealerships, used car superstores, and EV
            showrooms operate in a uniquely demanding cleaning environment &mdash; the
            showroom floor reflects every footprint, every display car shows every
            fingerprint, and every customer walks the same path they would on a
            forecourt visit. MaundyClean brings vetted PVG-checked crews, showroom
            floor restoration, oil &amp; tyre mark removal, glass partition gleam,
            workshop degreasing, franchise audit compliance, chrome fixture buffing,
            customer lounge upholstery, and flexible out-of-hours scheduling to every
            dealership we serve.
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
                Request Your Free Site Survey Today
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
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Team Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Out-of-Hours 7 Days a Week
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
// "End of Tenancy Cleaning" AND /services/deep-house-cleaning
// for "Deep Cleaning Services").
// ============================================================

export function AutoDealershipSeoIntro() {
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
                alt="Maundy Clean auto dealership cleaning crew restoring showroom tiled floors, glass partitions and display vehicles in a Scottish car dealership before opening"
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
                  &ldquo;Maundy Standard&rdquo; care we bring to Scotland&rsquo;s finest properties
                  &mdash; applied to your main dealership, used car superstore, EV showroom,
                  workshop, and forecourt.
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
              Auto dealership &amp; car showroom cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Auto Dealerships
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              When you are selling a new or used vehicle at a main dealership, every
              last detail matters. The first impression of your showroom, the
              positioning of the vehicles, and the atmosphere all contribute to the
              buyer&rsquo;s experience. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we
              understand that an immaculately presented showroom reflects your culture
              and directly influences vehicle sales; customers expect the same high
              standards in the cars they buy as they see in the environment where they
              shop.
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
              for Scotland&rsquo;s most prestigious properties, we bring that same
              level of technical intimacy and &ldquo;speechlessly spotless&rdquo; finishing
              to the automotive sector. Serving Glasgow, Edinburgh, and the Central
              Belt, we act as a strategic partner to ensure your dealership remains
              front-line ready and fully compliant with franchise audits.
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
                { label: "From per hour", value: "&pound;17" },
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
// Section 2 - Why MaundyClean is Scotland's Authority in Showroom Maintenance
// (Semantic H2: "Why MaundyClean is Scotland's Authority in Showroom Maintenance")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars ShieldCheck / UserCheck / Sparkles / Leaf
// ============================================================

const TRUST_CARDS = [
  {
    icon: ShieldCheck,
    title: "Audit-Ready Compliance",
    description:
      "Our services are designed to protect your brand image and support franchise audit compliance. We work to detailed cleaning schedules that ensure your facility consistently meets manufacturer standards. From the showroom floor through to the customer lounge, every visit is logged, every task is signed off, and every report is audit-ready for the next manufacturer inspection or franchise review.",
  },
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is our anchor. We ensure the same vetted, uniformed professionals manage your account to build a deep understanding of your specific display layouts and high-traffic &ldquo;risky&rdquo; zones. When your regular crew lead is on annual leave, we send a trained backup who has been briefed on your showroom floor plan, your display vehicle rotation, your workshop flow, your handover zone, and your franchise audit schedule &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking an active showroom floor.",
  },
  {
    icon: Sparkles,
    title: "Specialist Surface Technicality",
    description:
      "Dealerships face unique issues, such as oil and tyre marks on white tiled floors, which are rare in other corporate environments. Our teams are trained in the specific processes, products, and machinery required to handle these heavy-duty stains without damaging delicate finishes. Paintwork-safe microfibre systems on display vehicles, specialist tyre-mark removers on tiled and polished concrete showroom floors, industrial degreasers in workshop service bays, and streak-free automotive glass cleaner on partitions and entrance glazing &mdash; the right chemistry for every surface.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "We utilize only certified child and pet-safe products. This ensures a fresh, non-toxic environment that is safe for families browsing your latest models, without the harsh chemical odors common with national industrial cleaners. Non-toxic, surface-safe chemistry by default; pH-neutral glass and partition cleaner for streak-free shine without harsh solvent fumes; COSHH-documented chemistry on file. Safe for customers with sensitivities, safe for sales staff working long shifts, safe for the premium finishes you&rsquo;ve invested in.",
  },
];

export function AutoDealershipSeoWhy() {
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
                alt="Maundy Clean auto dealership cleaning crew &mdash; PVG-checked, uniformed, trained in showroom floor restoration, paintwork-safe detailing, tyre mark removal, and workshop degreasing"
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
                  dealership-specific protocols &mdash; showroom floor restoration,
                  paintwork-safe detailing on display vehicles, tyre mark removal on
                  tiled and polished concrete, workshop degreasing, chrome fixture
                  buffing, glass partition gleam, and customer lounge upholstery. Same
                  crew every visit &mdash; never a rotating cast of agency strangers
                  walking an active showroom floor.
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
              Why MaundyClean is Scotland&rsquo;s Authority in Showroom Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many commercial contractors provide a generic surface wipe that fails to
              meet the rigorous criteria of automotive brands. MaundyClean focuses on
              building high-trust, local relationships through specialized technical
              knowledge and professional reliability.
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
// Section 3 - Our Total Dealership Maintenance & Technical Checklist
// (Semantic H2: "Our Total Dealership Maintenance & Technical Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Showroom Floor & Public Facing Areas
//   2. Workshop & Service Area Care
//   3. Amenity & Facility Hygiene
// Carries the id="checklist" anchor that the CTA buttons link to.
// All sub-points are plain strings (no ReactNode/inline Link needed
// per the brief - inline Links only appear in the Intro paragraph 2
// and in the Interlinking card descriptions). Per the brief, the 3
// checklist cards do NOT have intro paragraphs (just H3 title + sub-points).
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
    icon: Sparkles,
    image: IMG.checklistFront,
    imageAlt:
      "Maundy Clean crew restoring showroom tiled floors, glass partitions and customer-facing workstations to a premium, audit-ready standard in a Scottish car dealership",
    title: "1. Showroom Floor & Public Facing Areas",
    description: "",
    points: [
      {
        title: "Intensive Floor Restoration",
        text: "Specialized removal of oil, grease, and tyre marks from tiled or polished concrete surfaces. Dust-mopped with a microfibre dust mop (never a broom &mdash; brooms scratch the polish), periodic machine-scrub with neutral cleaner, and periodic high-speed buff to restore the showroom shine that reflects the vehicles displayed on it. Tyre marks from display cars moved on and off the floor treated with specialist tyre mark remover without dulling the surrounding polish.",
      },
      {
        title: "Gleaming Glass &amp; Windows",
        text: "Meticulous cleaning of the inside and outside of windows and glass partitions to maximize natural light and vehicle visibility. Internal partition glass, showroom-front glazing (interior side), entrance door glass, and customer-facing screens all wiped with an alcohol-free anti-static cleaner and buffed to a streak-free finish; frames and sills detailed; fingerprints, dust streaks, and customer smudges removed from high-touch glass. A gleaming partition makes a &pound;40,000 car look like &pound;50,000.",
      },
      {
        title: "Spotless Workstations",
        text: "Ensuring desks are uncluttered and high-touch points like payment terminals and door handles are sanitized to keep staff healthy. Reception desk, sales consultant pods, card terminals (high-touch), door furniture, display cabinet handles, brochure racks, and customer seating all wiped with a pH-neutral sanitiser; clutter cleared; paperwork fronted and tidy. A spotless workstation projects premium care to your customer and protects your sales team&rsquo;s health.",
      },
    ],
  },
  {
    icon: Hammer,
    image: IMG.checklistCounter,
    imageAlt:
      "Maundy Clean crew degreasing workshop service bays, clearing debris and restoring safe productive flooring in a Scottish car dealership workshop",
    title: "2. Workshop & Service Area Care",
    description: "",
    points: [
      {
        title: "Industrial Floor Degreasing",
        text: "Handling the heavy-duty requirements of service bays to maintain a safe and productive workspace. Workshop floors swept with oil-absorbent granules where needed, workbenches wiped, tool chests dusted, MOT bay cleaned, and handover zone presentation maintained &mdash; because customers walk through the workshop on test drive handover and judge what they see. Industrial degreasers applied with the correct dwell time and agitation, then rinsed and neutralised to protect the substrate and the technicians working on it.",
      },
      {
        title: "Waste Management",
        text: "Professional clearing of debris and spillages to meet health and safety requirements. Used oil, coolant, brake fluid, and parts-cleaning solvent spills contained and cleared with the correct absorbents and disposed of via licensed waste streams; parts-washer fluid replenished; waste segregation maintained; bin store kept tidy and audit-ready for environmental health inspection and franchise audit review.",
      },
    ],
  },
  {
    icon: Building2,
    image: IMG.checklistKitchen,
    imageAlt:
      "Maundy Clean crew sanitising customer restrooms, chrome fixtures, skirting boards and ceiling details in a Scottish car dealership amenity block",
    title: "3. Amenity & Facility Hygiene",
    description: "",
    points: [
      {
        title: "Sparkling Restrooms",
        text: "Intensive sanitation of customer and staff toilets, including buffing all chrome fixtures to a high shine as part of our &ldquo;showcase&rdquo; standard. Toilets descaled, disinfected, and polished; urinals descaled and deodorised; tiles and grout scrubbed; partition screens disinfected; mirrors squeegeed; floors mopped edge-to-edge with a slip-resistant sanitiser. Chrome taps, soap dispensers, towel dispensers, hand-dryer nozzles, and door furniture buffed with a streak-free stainless-steel cleaner. Sanitary bins checked and emptied; consumables restocked every visit.",
      },
      {
        title: "Often-Missed Details",
        text: "Our cleaners meticulously wipe visible skirting boards, door frames, and ceiling fixtures as standard. Skirting boards, door frames, architraves, switch plates, picture rails, window sills, fire-extinguisher brackets, signage housings, and ceiling light fixtures in showrooms, customer lounges, handover zones, and lift lobbies damp-wiped with a pH-neutral sanitiser. Ceiling light fixtures, air-conditioning vents, and extractor grilles dusted with extendable HEPA-filtered attachments. These are the details customers notice first &mdash; and the details most cleaners skip.",
      },
    ],
  },
];

export function AutoDealershipSeoChecklist() {
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
            Our Total Dealership Maintenance &amp; Technical Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our showroom deep cleaning follows a rigorous, agency approved checklist
            designed to address every inch of your property, from the forecourt to the
            workshop. We deliver technical depth in every zone of your facility &mdash;
            from the showroom floor and public facing areas through the workshop and
            service area to the amenity and facility hygiene zones. Below is the scope
            we deliver as standard, regardless of dealership type, footprint, or sales
            schedule.
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
// (Semantic H3: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// (FileText imported for safety/template parity even if not used.)
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Bespoke Plan",
    description:
      "Contact us for a free site survey. We will assess your dealership to establish a tailored schedule, whether you need daily maintenance 7 days a week or one-off event support. We walk your premises with your dealership principal or sales manager, identify your dealership type (main dealer, used car superstore, EV showroom), capacity (showroom footprint, number of display vehicles, workshop bays, customer lounge size), opening hours (early morning, late evening, 7 days a week), turnaround windows (pre-opening resets, between-handover touch-ups, end-of-day deep cleans), and any specific cleaning challenges (oil and tyre marks on tiled floors, paintwork-safe chemistry on display vehicles, chrome fixture buffing, glass partition gleam, franchise audit compliance, listed-building constraints). We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, RAMS, COSHH datasheets, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians with experience in large-scale commercial &ldquo;showcasing&rdquo;. Your allocated crew lead is PVG-checked (essential for dealerships with public access and customer test-drive footfall), uniformed, and trained in dealership-specific protocols &mdash; showroom floor restoration, paintwork-safe detailing on display vehicles, tyre mark removal on tiled and polished concrete, workshop degreasing, chrome fixture buffing, glass partition gleam, customer lounge upholstery, and franchise audit compliance. We brief the crew on your showroom layout, your display vehicle rotation, your workshop flow, your handover zone, your franchise audit schedule, and your premium finishes &mdash; so cleaning happens around your sales hours, not through them. The same crew returns for every scheduled session, building real knowledge of your peak footfall, your event calendar, and your quiet periods. We arrive in liveried vehicles, in uniform with photo I.D. and PPE, with HEPA-filtered vacuums, specialist tyre-mark removers, industrial degreasers, professional chrome polish, streak-free automotive glass cleaner, and COSHH-compliant, child-safe, surface-safe chemistry.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Dealership",
    description:
      "Experience a environment that looks, smells, and feels premium, backed by our MaundyClean 100% satisfaction guarantee. You receive a signed cleaning log after every visit (operative signature, dealership-manager counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a low-stock consumable, a damaged fixture, a blocked drain, a tyre-mark flare-up, or a chrome fixture losing its shine &mdash; before they undermine a sale, a franchise audit, or a customer review. From &pound;17 per hour for a single-site main dealer through to a fully bespoke retainer for a multi-site group. We hold &pound;5m public liability as standard (covering damage to display vehicles, which can be worth &pound;100,000+) and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function AutoDealershipSeoBooking() {
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
            We have optimized our booking experience to be uncomplicated and
            straightforward, providing the responsive management support Scottish
            business owners demand. From free site survey and itemised proposal to first
            clean in under a week &mdash; no friction, no waiting, no surprises. Just a
            pristine dealership, every morning, every handover, and a compliance file
            that&rsquo;s audit-ready the day your franchise inspector walks in.
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
              Request Your Free Site Survey Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Property Milestone
// (Semantic H2: "Solutions for Every Property Milestone")
// Brief drops the interlinking prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services.
// All 4 card descriptions are ReactNode values (card 1 is a plain
// string, cards 2/3/4 contain an inline <Link> per the brief) -
// rendered via the typeof sol.description === "string" check.
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
    icon: Sparkles,
    title: "New Model Launches",
    href: "/services/event-venue-cleaning",
    image: IMG.leaseSpring,
    imageAlt:
      "Rapid-response pre-launch deep clean of a Scottish car dealership showroom ahead of a new model reveal event with VIP guests",
    description:
      "We provide rapid response for one-off marketing events, ensuring your showroom is perfect for VIP guests and vehicle reveals.",
    cta: "Explore event venue cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt:
      "Post-shopfitting cleanup removing fine construction dust from a refurbished Scottish car dealership showroom before reopening day",
    description: (
      <>
        If your dealership has undergone refitting, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        protocol is designed to remove heavy layers of builders&rsquo; dust and grime.
        Fine dust left on showroom floors, glass partitions, display vehicles, or
        customer lounges undermines the customer-trust signal the moment the dealership
        re-opens &mdash; we vacuum, damp-wipe, and protect every surface before the dust
        has a chance to damage your customers&rsquo; experience or your freshly-painted
        finishes.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy handover clean for a Scottish car dealership unit being vacated, ensuring the property is front-line ready for the next operator",
    description: (
      <>
        Moving sites? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        ensures units are front-line ready for handover. Every surface detailed
        top-to-bottom &mdash; the same trusted, vetted crew, the same child-safe eco
        chemistry, the same signed cleaning log after every visit &mdash; so your
        handover inspection, your dilapidations negotiation, and your next operator&rsquo;s
        first walk-through all start from a &ldquo;speechlessly spotless&rdquo; baseline.
      </>
    ),
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: HeartPulse,
    title: "Fabric & Upholstery Restoration",
    href: "/services/upholstery-cleaning",
    image: IMG.leaseAntiviral,
    imageAlt:
      "Professional upholstery cleaning of customer lounge seating and office chairs in a Scottish car dealership with Maundy Clean using certified fabric-safe chemistry",
    description: (
      <>
        Rejuvenate customer lounges and office seating with our professional{" "}
        <Link
          href="/services/upholstery-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Upholstery Cleaning
        </Link>{" "}
        to remove germs and odors. Hot-water extraction for cloth lounge seating and
        waiting-area chairs; leather conditioning for executive office seating; stain
        treatment for coffee, juice, and snack spills from customers waiting on a
        service; odour neutralisation for lingering food and tobacco. The detail that
        keeps your customer lounge feeling premium visit after visit, year after year.
      </>
    ),
    cta: "Explore upholstery cleaning",
  },
];

export function AutoDealershipSeoInterlinking() {
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
            Solutions for Every Property Milestone
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our showroom maintenance ensures daily sales excellence, but we offer
            specialized &ldquo;resets&rdquo; for major property milestones: from new
            model launches that need rapid-response pre-event deep cleans, through
            post-renovation dust clear-outs and property transition handovers, to
            fabric and upholstery restoration for customer lounges and office seating.
            The same trusted, vetted crew can step up whenever your dealership needs
            more than a standard visit, with the same child-safe, surface-safe protocols
            in force.
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
// (Semantic H2: "Auto Dealership & Car Showroom Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function AutoDealershipSeoNearMe() {
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
              Local auto dealership &amp; car showroom cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Auto Dealership &amp; Car Showroom Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;auto dealership cleaning near me&rdquo; or &ldquo;car
              showroom cleaning near me&rdquo; in Scotland? Maundy Clean covers main
              dealerships, used car superstores, and EV showrooms across the Central
              Belt, Highlands, Borders, and Islands &mdash; from Glasgow&rsquo;s
              Braehead and Edinburgh&rsquo;s Newbridge to Aberdeen&rsquo;s Lang
              Stracht and Dundee&rsquo;s Clepington Road, plus independent dealers in
              Stirling, Perth, Inverness, and Ayr. Same PVG-checked, uniformed crews,
              same dedicated crew every visit, same flexible out-of-hours scheduling
              &mdash; wherever your dealership happens to be. Find your local dealership
              cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean auto dealership &amp; car showroom cleaning service coverage areas"
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
                  Same PVG-checked crews, same 100% satisfaction guarantee &mdash; from
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
                <Link href="/services/auto-dealership-cleaning-near-me#locations">
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
                Find your local dealership crew
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
                    href={`/services/auto-dealership-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> dealership</span>
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
            Our local dealership cleaning crews operate across Glasgow&rsquo;s
            Braehead, Hillington and Cambuslang (main dealer groups and used car
            superstores), Edinburgh&rsquo;s Newbridge, Sighthill and Fort Kinnaird
            (premium main dealers and EV showrooms), Aberdeen&rsquo;s Lang Stracht and
            Westhill (main dealers and motor trade), Dundee&rsquo;s Clepington Road
            and Kingsway (used car superstores and independent dealers), and Scottish
            dealership districts across the Central Belt &mdash; from Inverness to
            Perth, Falkirk to Ayr. Whether you&rsquo;re searching for early-morning
            pre-opening showroom resets in Glasgow, evening end-of-day workshop
            degreasing in Edinburgh, weekend turnover support in Aberdeen, or
            franchise-audit-compliance deep cleans anywhere in between, Maundy Clean
            assigns a vetted, PAYE-employed, PVG-checked crew that stays with you for
            the long run. Same crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Free Site Survey Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function AutoDealershipSeoFinalCta() {
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
            Ready to book your dealership survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Free Site Survey Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive
            an itemised proposal within 2 business days. Manufacturer-standard finishes,
            franchise audit compliance, paintwork-safe chemistry on display vehicles,
            showroom floor restoration, workshop degreasing, chrome fixture buffing,
            flexible out-of-hours scheduling around your sales hours, signed cleaning
            logs, &pound;5m public liability as standard (covering damage to display
            vehicles), and a 100% satisfaction guarantee &mdash; from &pound;17 per
            hour for a single-site main dealer through to a fully bespoke multi-site
            group retainer. No pushy sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Free Site Survey Today
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
// 3 Q&As from the brief (insured for dealership environments,
// provide own specialized machinery, work around sales hours)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for dealership environments?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience in the high-value commercial sector. We carry &pound;5m public liability as standard &mdash; covering damage to display vehicles, which can be worth &pound;100,000+ &mdash; and every operative is PVG-checked, uniformed, and trained in dealership-specific protocols: showroom floor restoration, paintwork-safe detailing on display vehicles, tyre mark removal on tiled and polished concrete, workshop degreasing, chrome fixture buffing, glass partition gleam, customer lounge upholstery, and franchise audit compliance. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for dealership lease agreements, franchise operator insurance terms, landlord insurance, and manufacturer compliance files. Our documentation is audit-ready for franchise inspection, environmental health inspection, and HSE review; we provide signed cleaning logs, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file. We will not begin work until your dealership principal and your franchise compliance team have the documentation they need.",
  },
  {
    q: "Do you provide your own specialized machinery?",
    a: "Yes. We supply all our own professional-grade equipment and non-toxic chemicals tailored for showroom floors and workshop areas, which are included in your competitive quote. From HEPA-filtered vacuums for showroom floor dust and industrial scrubber-driers for polished concrete restoration, to specialist tyre-mark removers for tiled showroom floors, industrial degreasers for workshop service bays, professional chrome polish for fixture buffing, and streak-free automotive glass cleaner for partitions and entrance glazing &mdash; every tool is COSHH-documented and maintained to manufacturer spec. HEPA-filtered vacuums with extension tubes for showroom floor dust; industrial scrubber-driers (Karcher, Truvox) for polished concrete and tiled showroom floor restoration; high-speed burnishers for periodic showroom floor buffing; specialist tyre-mark removers for display-vehicle tyre marks on tiled and polished concrete; industrial degreasers for workshop service bays and MOT bay floors; oil-absorbent granules for spill response in workshop areas; professional chrome polish for taps, towel rails, display cabinet hardware, and customer lounge fixtures; streak-free automotive glass cleaner for partitions, mirrors, and entrance door glass; microfibre systems (folded to multiple faces) for paintwork-safe wipe-downs on display vehicles; HSE-compliant chemicals with COSHH datasheets on file; PPE; and non-toxic, child-safe, surface-safe chemistry by default. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Can you work around our sales hours?",
    a: "Yes. We offer flexible scheduling around your sales hours, including early mornings, late evenings, or through the night, to ensure zero disruption to your customers. The most common windows are pre-opening resets (typically 6&ndash;8am before the showroom opens) for showroom floors, glass partitions, display vehicle wipe-downs, reception, and customer lounge; between-handover touch-ups for high-traffic reception and customer lounge areas during the day; and end-of-day deep cleans (typically 7&ndash;11pm after the last customer leaves) for workshop service bays, amenity blocks, customer restrooms, and back-of-house. We&rsquo;re trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys stored in a coded safe between visits, alarm codes encrypted and only released to your assigned crew lead, never labelled with your address. We can also split: light touch during the day (between-handover touch-ups on high-traffic welfare areas), full deep clean after hours. From &pound;17 per hour for a single-site main dealer through to a fully bespoke retainer for a multi-site group. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured.",
  },
];

export function AutoDealershipSeoFaq() {
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
            Auto dealership &amp; car showroom cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our auto dealership &amp; car showroom
            cleaning clients ask most often. Can&rsquo;t find what you need? Call us on{" "}
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
                Request Your Free Site Survey Today
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

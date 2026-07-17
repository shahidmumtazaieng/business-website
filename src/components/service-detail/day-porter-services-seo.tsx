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
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches property-management + auto-dealership + salon-spa pool)
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
// Semantic H1: "Professional Day Porter Services Scotland | Continuous Workspace Hygiene"
// ============================================================

export function DayPorterSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean PVG-checked, vetted day porter maintaining reception, washrooms, breakout areas and meeting rooms in a Scottish corporate facility throughout the working day"
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
            Day Porter Services &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Day Porter Services Scotland | Continuous Workspace Hygiene
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Meticulous Daytime Maintenance, Visible Standards of Care, and the Maundy
            Tradition of Excellence. Facilities managers, office managers and building
            operations leads across Scotland&rsquo;s corporate, retail and hospitality
            estates operate in a uniquely demanding cleaning environment &mdash; every
            reception reflects your brand promise, every washroom visit tells staff
            how much you care, and every meeting room turnaround makes or breaks a
            client presentation. MaundyClean brings vetted PVG-checked uniformed day
            porters, continuous reception &amp; entryway care, washroom audits every
            90 minutes, breakout area hygiene, meeting room turnaround, spill &amp;
            mess response, high-touch sanitisation, fixed monthly retainer, and
            multi-site one-invoice convenience to every facility we serve.
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
                Request Your Bespoke Site Survey Today
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
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Porter Every Day
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Continuous Daytime Presence
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

export function DayPorterSeoIntro() {
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
                alt="Maundy Clean day porter maintaining reception, washroom and breakout areas in a Scottish corporate facility throughout the working day"
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
                  &mdash; applied to your reception, washrooms, breakout areas, meeting rooms,
                  and the live operational hygiene of your working day.
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
              Day porter services &amp; continuous daytime maintenance &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Day Porter Services
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In high-traffic professional environments across Glasgow, Edinburgh, and
              the Central Belt, an overnight clean is often just the beginning. While
              a night crew &ldquo;resets&rdquo; the building once, a day porter holds
              that standard hour by hour, ensuring your facility remains continuously
              presentable through peak occupancy. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we provide a premium day porter service &mdash; a visible daytime
              presence that reactive, out-of-hours cleaning simply cannot match.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              Whether you are managing a busy corporate reception, a retail
              environment, or a hospitality venue, we act as your on-site hygiene
              partner. While we are the recognized authority in{" "}
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
              level of technical intimacy and &ldquo;speechlessly spotless&rdquo;
              finishing to your daily operations.
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
// Section 2 - Why MaundyClean is the Authority in Scottish Day Porter Services
// (Semantic H2: "Why MaundyClean is the Authority in Scottish Day Porter Services")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / ShieldCheck / UserCheck / Leaf
// (icons chosen to reflect the brief's pillar themes: vetted &
// uniformed / regulatory compliance / same trusted staff / eco-friendly).
// ALL 4 pillar bodies are plain strings per the brief (no inline
// Links), but typed as ReactNode for codebase consistency with
// property-management-cleaning-seo.tsx (which uses ReactNode so a
// pillar can support an inline Link when needed).
// ============================================================

type TrustCard = {
  icon: typeof ShieldCheck;
  title: string;
  description: ReactNode;
};

const TRUST_CARDS: TrustCard[] = [
  {
    icon: UserCheck,
    title: "Vetted & Uniformed Professionals",
    description:
      "Because a day porter is a constant on-site presence, who they are matters. Every MaundyClean professional is fully trained, background-checked, and wears an official uniform with I.D. to represent your business with the highest standards. A day porter is the face your staff and visitors see every working hour &mdash; so we choose that face carefully, brief them on your facility&rsquo;s protocols, and ensure they arrive in liveried uniform with photo I.D. and PPE from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Total Regulatory Compliance",
    description:
      "Our janitorial services are fully compliant with all Scottish safety regulations, providing you with peace of mind regarding health and safety on-site. HSE compliance, RAMS as standard, Safe Systems of Work, COSHH-documented chemistry on file, audit-ready signed cleaning logs, &pound;5m public liability as standard, and we can name your business on our policy as additional insured &mdash; the documentation a facilities manager needs the day an environmental health officer or building inspector walks in.",
  },
  {
    icon: KeyRound,
    title: "The Same Trusted Staff Every Day",
    description:
      "Reliability is the bedrock of facility management. We ensure the same vetted team member manages your site, allowing them to learn your specific requirements and the nuance of your building&rsquo;s traffic patterns. When your regular day porter is on annual leave, we send a trained backup who has been briefed on your reception layout, your washroom audit schedule, your meeting room turnaround windows, and your high-traffic zones &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking an active corporate floor.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "We utilize only certified child-safe and pet-safe products. This ensures a fresh, non-toxic environment that is safe for your staff and visitors, without the harsh chemical residues common in commercial janitorial supplies. Fragrance-free sanitiser on high-touch touchpoints, pH-neutral glass and partition cleaner for streak-free shine without harsh solvent fumes, COSHH-documented chemistry on file, and non-toxic, surface-safe chemistry by default &mdash; safe for staff with sensitivities, safe for visitors, safe for the premium finishes you&rsquo;ve invested in.",
  },
];

export function DayPorterSeoWhy() {
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
                alt="Maundy Clean day porter &mdash; PVG-checked, uniformed, trained in reception care, washroom audits, breakout hygiene, meeting room turnaround and spill response"
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
                  day-porter-specific protocols &mdash; reception &amp; entryway care,
                  washroom audits, breakout area hygiene, meeting room turnaround,
                  spill &amp; mess response, high-touch sanitisation, and operational
                  support for your facilities team. Same porter every day &mdash;
                  never a rotating cast of agency strangers walking an active
                  corporate floor.
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
              Why MaundyClean is the Authority in Scottish Day Porter Services
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Unlike national agencies that rely on gig-economy staff, MaundyClean
              focuses on building high-trust relationships with vocationally trained
              professionals who become an integral part of your team.
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
// Section 3 - Our Total Daytime Maintenance & Hygiene Checklist
// (Semantic H2: "Our Total Daytime Maintenance & Hygiene Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Public Areas & First Impressions
//   2. Washroom & Breakout Management
//   3. Operational Support & Rapid Response
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO intro paragraphs on the 3 checklist cards
// (just H3 title + sub-points). ALL sub-point bodies in ALL 3
// cards are plain strings per the brief (no inline Links), but
// typed as ReactNode (via ChecklistPoint.text) for codebase
// consistency with property-management-cleaning-seo.tsx.
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
    icon: Building2,
    image: IMG.checklistFront,
    imageAlt:
      "Maundy Clean day porter maintaining reception, entryway, glass partitions and high-touch touchpoints in a Scottish corporate lobby throughout the day",
    title: "1. Public Areas & First Impressions",
    description: "",
    points: [
      {
        title: "Reception & Entryway Care",
        text: "Continuous clearing and tidying of lobbies to ensure a flawless first impression for visitors. Reception desks wiped down, glossy magazines realigned, leaflet holders straightened, lounge seating plumped, floor matting shaken or vacuumed, and entrance glazing spot-checked &mdash; the kind of visible care that signals a professionally managed building from the moment a visitor steps in.",
      },
      {
        title: "High-Traffic Touchpoints",
        text: "Meticulous wiping and disinfecting of door handles, lift buttons, and entry phone systems to prevent the spread of germs. Door handles on every meeting room and WC, lift call panels and lift car buttons, reception desk pens and visitor sign-in tablets, stair handrails on every flight, light switches, and entry phone handsets &mdash; all wiped with a fragrance-free EN 1276 bactericide with the correct contact time, multiple times through the working day.",
      },
      {
        title: "Inside Window Care",
        text: "Meticulous cleaning of glass partitions and internal windows to maximize natural light. Meeting room glass partitions squeegeed to streak-free clarity, reception entrance side panels polished, internal office doors wiped where reachable, and lobby glazing spot-checked every couple of hours &mdash; the natural light and transparency that signals a confident, well-run operation.",
      },
    ],
  },
  {
    icon: Coffee,
    image: IMG.checklistCounter,
    imageAlt:
      "Maundy Clean day porter auditing washroom supplies, sanitising breakout kitchens and coffee stations in a Scottish corporate facility",
    title: "2. Washroom & Breakout Management",
    description: "",
    points: [
      {
        title: "Continuous Washroom Audits",
        text: "Checking and topping up supplies (soap, tissue, towels) and maintaining &ldquo;showcase&rdquo; standards throughout the day. Toilets wiped and sanitised, sinks polished, mirrors streak-checked, floors spot-mopped, paper towel and toilet paper restocked, soap refilled, sanitary bins checked, and air freshener monitored &mdash; every 90 minutes on a fixed audit cycle, with busier washrooms flexing to 60-minute cycles and quieter ones to 2-hourly.",
      },
      {
        title: "Breakout Area Hygiene",
        text: "Clearing communal kitchens, wiping coffee stations, and managing waste to maintain an effortlessly neat environment. Worktops wiped down after every use, coffee machine drip tray emptied, microwave interiors spot-checked, fridge handles sanitised, dishwasher loaded and unloaded, bin liners changed before they overflow, and spill &amp; mess response on call &mdash; the kitchen that stays as fresh at 4pm as it did at 8am.",
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistKitchen,
    imageAlt:
      "Maundy Clean day porter turning over meeting rooms, responding to spills and detailing skirting boards in a Scottish corporate workplace",
    title: "3. Operational Support & Rapid Response",
    description: "",
    points: [
      {
        title: "Meeting Room Turnaround",
        text: "Professional setting up and clearing of conference rooms between sessions. Chairs realigned to the table grid, whiteboards wiped, marker pens capped and racked, glass partitions squeegeed, water glasses cleared and replaced, used cups and saucers ferried to the kitchen, AV cabling checked, and the room reset to a &ldquo;ready for the next booking&rdquo; baseline within minutes of the previous session ending.",
      },
      {
        title: "Spill & Mess Response",
        text: "Dealing with coffee spills or unpredictable messes as they happen &mdash; tasks out-of-hours cleans simply cannot reach in time. A spilled flat white on the boardroom carpet, a pastry dropped in the lobby, a visiting client&rsquo;s water glass knocked over in reception, a washroom basin overflow: our day porter responds within minutes of being reported, with the right chemistry and absorbent pads to lift the contaminant before it sets, stains, or compounds into a hygiene incident.",
      },
      {
        title: "Often-Missed Details",
        text: "Our porters meticulously wipe all visible skirting boards, door frames, and surrounding fixtures to maintain the Maundy standard of excellence. Skirting boards, door frames, architraves, switch plates, picture rails, window sills, fire-extinguisher brackets, signage housings, and ceiling light fixtures damp-wiped with a pH-neutral sanitiser. Ceiling light fixtures and extractor grilles dusted with extendable HEPA-filtered attachments. These are the details your staff and visitors notice first &mdash; and the details most cleaners skip.",
      },
    ],
  },
];

export function DayPorterSeoChecklist() {
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
            Our Total Daytime Maintenance &amp; Hygiene Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our day porter services follow a rigorous, agency-approved checklist
            designed to keep your building looking cared-for at 3:00 PM as well as
            it did at 8:00 AM. We deliver visible daytime presence in every zone of
            your facility &mdash; from the reception and entryway through the
            washroom audits and breakout area hygiene to the operational support and
            rapid response that keeps your working day flowing. Below is the scope we
            deliver as standard, regardless of building type, footprint, or occupancy
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
// Brief HAS a [H3] marker on this heading, so we use <h3>
// (matches the auto-dealership pattern; property-management had
// no [H3] marker so it used <h2>).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Strategy",
    description:
      "Contact us for a site survey to establish a bespoke schedule and standard of excellence tailored to your hours and occupancy. We walk your facility with your facilities or office manager, identify your high-traffic zones (reception, washrooms, breakout, meeting rooms, kitchen, lift lobbies), your occupancy pattern (9&ndash;5 corporate, retail footfall peaks, hospitality service windows), your turnaround windows (between-meeting resets, post-lunch kitchen refresh, end-of-day deep reset), and any specific cleaning challenges (glass partition streak, carpeted meeting room with coffee spill risk, listed-building constraints on finishes). We send an itemised proposal within 2 business days: porter hours on-site, audit cycle frequency, scope of work, fixed monthly retainer, RAMS, COSHH datasheets, and a draft daily task schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team member with the necessary qualifications and &ldquo;Maundy&rdquo; mindset for your specific facility. Your allocated day porter is PVG-checked (essential for buildings where staff and visitors are present), uniformed, and trained in day-porter-specific protocols &mdash; reception &amp; entryway care, continuous washroom audits, breakout area hygiene, meeting room turnaround, spill &amp; mess response, high-touch sanitisation, and operational support for your facilities team. We brief the porter on your reception layout, your washroom audit schedule, your meeting room turnaround windows, your access protocols (key safes, alarm codes, entry phone), your staff communications protocol, and your premium finishes &mdash; so cleaning happens around your working day, not through it. The same porter returns every working day, building real knowledge of your high-traffic zones and your occupancy rhythm.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Workplace",
    description:
      "Experience a workspace that feels fresh and professional all day long, backed by our MaundyClean 100% satisfaction guarantee. You receive a signed daily log after every shift (porter signature, facilities or office-manager counter-signature on request), arrival and departure times, audit cycles completed, tasks actioned, consumables restocked, and any issues flagged &mdash; like a low-stock paper towel, a damaged fixture, a leaking tap, a meeting room AV cable fault, or a washroom hygiene incident &mdash; before they undermine a client visit, an environmental health inspection, or a staff complaint. From &pound;17 per hour for a single-site day porter through to a fully bespoke multi-site retainer with one invoice. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function DayPorterSeoBooking() {
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
            business owners demand. From free site survey and itemised proposal to
            first day porter on-site in under a week &mdash; no friction, no waiting,
            no surprises. Just a pristine workplace, every reception, every washroom,
            every meeting room, and a compliance file that&rsquo;s audit-ready the
            day an environmental health officer or building inspector walks in.
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
              Request Your Bespoke Site Survey Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Property Lifecycle
// (Semantic H2: "Solutions for Every Property Lifecycle")
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
    title: "Maintaining the Sanctuary",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseSpring,
    imageAlt:
      "Recurring home cleaning bringing day-porter standards of meticulous daytime maintenance to a Scottish private residence on a weekly or fortnightly basis",
    description: (
      <>
        For your personal residence, our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        brings the same meticulous day-porter standards into your home on a weekly or
        fortnightly basis. The same vetted uniformed crew, the same child-safe eco
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
      "End of tenancy handover clean for a Scottish commercial unit being vacated, ensuring the property is front-line ready for the next occupant",
    description: (
      <>
        Preparing to move offices? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        ensures units are front-line ready for the next occupant. Every surface
        detailed top-to-bottom, deposit-back guarantees met, and the same trusted
        vetted crew your day porter knows &mdash; so your unit handover starts from
        a &ldquo;speechlessly spotless&rdquo; baseline.
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
      "Post-refurbishment cleanup removing fine construction dust from a refitted Scottish commercial facility before staff return to work",
    description: (
      <>
        If your facility has had home improvements or refitting, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is designed to remove heavy construction dust. Fine plaster and MDF dust on
        every horizontal surface, paint overspray on fixtures, adhesive residue on
        new flooring &mdash; lifted in full before your day porter picks up the
        ongoing maintenance brief on the newly-refitted space.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt:
      "Antiviral sanitisation ULV fogging treatment giving a Scottish corporate facility a total biological reset between day-porter shifts",
    description: (
      <>
        Book an{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        session for a total biological &ldquo;reset&rdquo; of your environment.
        EN 14476 virucidal ULV fogging of every surface, every meeting room, every
        washroom &mdash; the periodic deep biological reset that lifts the cumulative
        contamination load a daytime clean can&rsquo;t reach, and gives your day
        porter a clean baseline to maintain.
      </>
    ),
    cta: "Explore antiviral sanitisation",
  },
];

export function DayPorterSeoInterlinking() {
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
            Beyond the daily clean &middot; property lifecycle
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Lifecycle
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our day porter services provide the visible pulse of your building&rsquo;s
            health, but they work best when integrated with our wider technical
            resets: from recurring home cleaning that brings day-porter standards
            into your residence, through end-of-tenancy resets for unit handovers,
            post-renovation dust clear-outs, and periodic antiviral sanitisation
            biological resets. The same trusted, vetted crew can step up whenever
            your facility needs more than a standard day-porter visit.
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
// (Semantic H2: "Day Porter Services Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/day-porter-services-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function DayPorterSeoNearMe() {
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
              Local day porter services &amp; continuous daytime maintenance across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Day Porter Services Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;day porter services near me&rdquo; or
              &ldquo;on-site attendant cleaning near me&rdquo; in Scotland? Maundy
              Clean covers facilities managers, office managers, building operations
              leads, and corporate estates across the Central Belt, Highlands,
              Borders, and Islands &mdash; from Glasgow&rsquo;s IFSD and
              Edinburgh&rsquo;s Exchange District to Aberdeen&rsquo;s energy
              corridor and Dundee&rsquo;s Waterfront, plus corporate estates in
              Stirling, Perth, Inverness, and Ayr. Same PVG-checked, uniformed day
              porters, same dedicated porter every working day, same rapid response
              to spills and messes &mdash; wherever your facility happens to be.
              Find your local day porter specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean day porter services &amp; continuous daytime maintenance coverage areas"
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
                  Same PVG-checked porters, same 100% satisfaction guarantee &mdash; from
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
                <Link href="/services/day-porter-services-near-me#locations">
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
                Find your local day porter
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
                    href={`/services/day-porter-services-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> day porter</span>
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
            Our local day porter crews operate across Glasgow&rsquo;s International
            Financial Services District, Merchant City and West End corporate towers
            (facilities managers, office managers and building operations leads),
            Edinburgh&rsquo;s Exchange District, New Town and Quartermile business
            quarters (corporate estates and property management companies),
            Aberdeen&rsquo;s energy-corridor West End and Tullos industrial offices
            (energy operators and service companies), Dundee&rsquo;s Waterfront and
            City Centre professional services buildings (facilities teams and office
            managers), and Scottish corporate districts across the Central Belt
            &mdash; from Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re
            searching for an early-opening reception reset in Glasgow, a
            lunch-rush breakout refresh in Edinburgh, an afternoon meeting room
            turnaround in Aberdeen, or a spill-and-mess rapid response anywhere in
            between, Maundy Clean assigns a vetted, PAYE-employed, PVG-checked day
            porter that stays with you for the long run. Same porter, same standard,
            same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Site Survey Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function DayPorterSeoFinalCta() {
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
            Request Your Bespoke Site Survey Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Facilities managers, office managers and building operations leads &mdash;
            book a free, no-obligation site survey with our management team and
            receive an itemised proposal within 2 business days. A continuous
            daytime presence that holds your morning &ldquo;reset&rdquo; all the way
            through to 5pm, a fixed monthly retainer that locks your rate for 12
            months, PVG-checked uniformed professionals who become part of your
            team, and the multi-site one-invoice convenience that lets you
            consolidate every Scottish property on a single audit-ready
            compliance file. From &pound;17 per hour for a single-site day porter
            through to a fully bespoke multi-site retainer. No pushy sales call,
            no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Site Survey Today
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
// 3 Q&As from the brief (insured, provide own equipment, multiple
// sites one invoice)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience in the Scottish commercial sector. We carry &pound;5m public liability as standard &mdash; covering reception areas, washrooms, breakout areas, meeting rooms, and back-of-house &mdash; and every day porter is PVG-checked (essential for buildings where staff and visitors are present), uniformed, and trained in day-porter-specific protocols: reception &amp; entryway care, continuous washroom audits, breakout area hygiene, meeting room turnaround, spill &amp; mess response, high-touch sanitisation, and operational support for your facilities team. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, and corporate insurance compliance files. Our documentation is audit-ready for environmental health inspection and HSE review; we provide signed daily logs, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file. We will not begin work until your facilities or office manager has the documentation they need.",
  },
  {
    q: "Do you provide your own cleaning equipment?",
    a: "Yes. We supply all our own professional-grade equipment and non-toxic sanitizing solutions, which are included in your fixed monthly quote. From HEPA-filtered vacuums for meeting room carpets and breakout area rugs, to microfibre systems for streak-free glass partition care, professional EN 1276 bactericide for washroom audits, EN 14476 virucidal disinfectant for high-touch touchpoints, professional carpet spot-and-extract for spill &amp; mess response, fragrance-free sanitiser on reception desks and entry phone systems, COSHH-documented chemistry on file, and non-toxic, child-safe, surface-safe chemistry by default &mdash; every tool is maintained to manufacturer spec. HEPA-filtered vacuums with extension tubes for high-level dusting; microfibre glass-cleaning systems for partitions and entrance glazing; EN 1276 bactericide for washroom deep audit cycles; EN 14476 virucidal disinfectant for high-touch touchpoints; professional carpet spot-and-extract for spill &amp; mess response; pH-neutral sanitiser for skirting boards, door frames, and surrounding fixtures; PPE; and non-toxic, surface-safe chemistry by default. You provide consumables (paper towel, toilet paper, hand soap, sanitiser wipes, bin liners) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Can you provide a porter for multiple sites?",
    a: "Yes. Whether you need a porter at one specific Glasgow site or across a national estate, we provide one standard and one invoice for maximum convenience. Multi-site portfolios get a single account manager who knows every site in your estate, a single fixed monthly retainer covering all locations, a single signed-daily-log compliance file, and a single &pound;5m public liability certificate naming your business as additional insured. From &pound;17 per hour for a single-site day porter through to a fully bespoke retainer for a multi-site Scottish or UK-wide corporate estate. Same trusted porter at each site, same standard, same locked-in rate &mdash; the operational simplicity that lets your facilities team manage one supplier instead of a dozen.",
  },
];

export function DayPorterSeoFaq() {
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
            Day porter services &amp; continuous daytime maintenance &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our day porter clients ask most often.
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
                Request Your Bespoke Site Survey Today
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

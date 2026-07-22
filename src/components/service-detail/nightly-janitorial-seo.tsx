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
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches property-management + auto-dealership + salon-spa + day-porter pool)
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-22%20at%205.09.33%20PM.jpeg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-22%20at%205.09.33%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_niz2xeniz2xeniz2.png",
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
// Semantic H1: "Professional Nightly Janitorial Services Scotland | Commercial Workspace Hygiene"
// ============================================================

export function NightlyJanitorialSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean PVG-checked, vetted night crew performing nightly janitorial duties — desk wiping, floor care, washroom deep clean and kitchenette reset — in a Scottish corporate office after hours"
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
            Nightly Janitorial Services &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Nightly Janitorial Services Scotland | Commercial Workspace Hygiene
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Meticulous Nightly Maintenance, Absolute Reliability, and the Maundy
            Tradition of Excellence. Facilities managers, office managers and
            building operations leads across Scotland&rsquo;s corporate, education
            and public-sector estates operate in a uniquely demanding cleaning
            environment &mdash; every desk reflects your brand promise, every
            washroom visit tells staff how much you care, and every kitchenette
            reset makes or breaks the morning rush. MaundyClean brings vetted
            PVG-checked night crews, after-hours office cleaning, desk &amp;
            keyboard sanitisation, floor &amp; carpet maintenance, washroom deep
            cleans, kitchenette refresh, bin &amp; recycling handling, fixed
            monthly retainer, and a fresh-start by 8:00 AM every morning to every
            facility we serve.
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
                Request Your Bespoke Janitorial Quote
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
              <Moon className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Crew Every Night
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Fresh Start by 8:00 AM
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

export function NightlyJanitorialSeoIntro() {
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
                alt="Maundy Clean night crew performing nightly janitorial duties — desk wiping, floor care and washroom deep clean — in a Scottish corporate office after hours"
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
                  &mdash; applied to your workstations, washrooms, kitchenettes, meeting
                  rooms, and the overnight hygiene of your commercial workspace.
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
              Nightly janitorial services &amp; after-hours office cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Nightly Janitorial Services
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the competitive business hubs of Glasgow, Edinburgh, and across the
              Central Belt, a clean office is the silent backbone of your
              brand&rsquo;s reputation and staff well-being. While many companies offer
              basic cleaning, <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>{" "}
              provides a premium nightly janitorial service designed to leave your
              commercial space hygienic, spotless, and effortlessly neat. We
              understand that first impressions are critical, which is why we act as
              a dedicated partner to keep your workspace a pleasant and healthy place
              to be.
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
              level of technical intimacy, &ldquo;same-staff&rdquo; consistency, and
              &ldquo;sanctuary&rdquo; care to the corporate world. We provide a
              reliable alternative to impersonal national agencies, positioning
              ourselves as Scotland&rsquo;s most trustworthy commercial cleaning
              partner.
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
                { label: "From per hour", value: "&pound;13" },
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
// Section 2 - Why MaundyClean is Scotland's Choice for Reliable Janitorial Support
// (Semantic H2: "Why MaundyClean is Scotland's Choice for Reliable Janitorial Support")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / ShieldCheck / Clock / Leaf
// (icons chosen to reflect the brief's pillar themes: same
// trusted team every night / regulatory compliance / flexibility
// around your schedule / eco-friendly & safe).
// ALL 4 pillar bodies start with the brief sentence verbatim and
// are extended with nightly-janitorial-specific prose (no inline
// Links), but typed as ReactNode for codebase consistency with
// day-porter-services-seo.tsx (which uses ReactNode so a pillar
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
    title: "The Same Trusted Team Every Night",
    description:
      "Reliability is our anchor. We ensure the same vetted, background-checked professionals manage your site, allowing them to build a deep understanding of your specific workspace layout and &ldquo;risky&rdquo; high-traffic areas. When your regular night crew is on annual leave, we send a trained backup who has been briefed on your workstation cluster layout, your washroom deep-clean sequence, your kitchenette reset routine, your access protocols (key safes, alarm codes, entry phone), and your premium finishes &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking an empty corporate floor at 11pm.",
  },
  {
    icon: ShieldCheck,
    title: "Total Regulatory Compliance",
    description:
      "Our janitorial services are fully compliant with all Scottish safety regulations, providing you with peace of mind that your facility is being maintained to the highest legal and hygiene standards. HSE compliance, RAMS as standard, Safe Systems of Work, COSHH-documented chemistry on file, audit-ready signed nightly logs, &pound;5m public liability as standard, and we can name your business on our policy as additional insured &mdash; the documentation a facilities manager needs the day an environmental health officer or building inspector walks in.",
  },
  {
    icon: Clock,
    title: "Flexibility Around Your Schedule",
    description:
      "We work efficiently around your team&rsquo;s unique requirements, offering nightly shifts that ensure a perfect &ldquo;fresh start&rdquo; every morning without disrupting your daily operations. Early-evening shifts (6&ndash;10pm) for offices with late-working staff, through-the-night shifts (10pm&ndash;6am) for buildings that empty completely, dawn-finish shifts (4&ndash;8am) for early-opening retail and hospitality &mdash; we tailor the shift pattern to your occupancy calendar, your alarm-setting window, and your staff arrival time, so your team walks in at 8:00 AM to a fresh, hygienic, ready-to-work environment every single morning.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "We supply all our own professional-grade equipment and utilize only certified child-safe and pet-safe products as standard. This ensures a fresh environment for your staff without the harsh chemical odors common in industrial janitorial supplies. Fragrance-free sanitiser on high-touch touchpoints, pH-neutral glass and partition cleaner for streak-free shine without harsh solvent fumes, COSHH-documented chemistry on file, and non-toxic, surface-safe chemistry by default &mdash; safe for staff with sensitivities, safe for the morning shift, safe for the premium finishes you&rsquo;ve invested in.",
  },
];

export function NightlyJanitorialSeoWhy() {
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
                alt="Maundy Clean night crew &mdash; PVG-checked, uniformed, trained in after-hours access, alarm systems, lone working protocols, desk &amp; keyboard sanitisation, floor &amp; carpet maintenance, washroom deep cleans and kitchenette refresh"
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
                  nightly-janitorial-specific protocols &mdash; after-hours access,
                  alarm systems, key handling, lone working, emergency procedures,
                  desk &amp; keyboard sanitisation, floor &amp; carpet maintenance,
                  washroom deep cleans, kitchenette refresh, bin &amp; recycling
                  handling, and issue flagging. Same crew every night &mdash;
                  never a rotating cast of agency strangers walking an empty
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
              Why MaundyClean is Scotland&rsquo;s Choice for Reliable Janitorial Support
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Most commercial contracts fail due to high staff turnover and lack of
              accountability. MaundyClean addresses these exploitable weaknesses by
              focusing on 100% reliability and hands-on management.
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
// Section 3 - Our Comprehensive Nightly Janitorial & Office Hygiene Checklist
// (Semantic H2: "Our Comprehensive Nightly Janitorial & Office Hygiene Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. General Workspace & Station Care
//   2. Communal Areas & High-Traffic Hygiene
//   3. Facilities & Kitchenette Sanitation
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO intro paragraphs on the 3 checklist cards
// (just H3 title + sub-points). ALL sub-point bodies in ALL 3
// cards are plain strings per the brief (no inline Links), but
// typed as ReactNode (via ChecklistPoint.text) for codebase
// consistency with day-porter-services-seo.tsx.
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
      "Maundy Clean night crew dusting desks, polishing surfaces and emptying bins in a Scottish corporate office after hours",
    title: "1. General Workspace & Station Care",
    description: "",
    points: [
      {
        title: "Detailed Dusting & Wiping",
        text: "Meticulous cleaning of desks, keyboards, and phones to prevent the spread of germs and bugs. Anti-bacterial spray applied to every workstation surface, screens wiped with screen-safe chemistry, keyboards and phones sanitised with fragrance-free EN 1276 bactericide (correct contact time observed), chairs lint-rolled or vacuumed, cable-management zones dusted, printer areas wiped &mdash; without moving papers or personal items, just wiping carefully around them so your staff arrive to a hygienic desk they can sit at immediately.",
      },
      {
        title: "Surface Restoration",
        text: "Polishing wood, glass, and mirrors to a streak-free shine as part of our &ldquo;showcase&rdquo; standards. Meeting room tables polished, glass partitions squeegeed to streak-free clarity, reception desk buffed, internal office doors wiped where reachable, lobby glazing spot-checked, mirrors streak-checked, whiteboards erased and cleaned with whiteboard cleaner (not water &mdash; water leaves ghosting), and stainless-steel fixtures polished to a uniform sheen.",
      },
      {
        title: "Waste Management",
        text: "Efficient rubbish removal and recycling handling to maintain an effortlessly neat environment. Bins emptied at every workstation and meeting room, liners replaced (we can supply liners if needed), recycling sorted into the correct streams (paper, plastic, cans, glass, food waste), general waste removed to your designated collection point, and bin exteriors wiped down &mdash; the bin area that looks as fresh at 8:00 AM as it did the night before.",
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistCounter,
    imageAlt:
      "Maundy Clean night crew vacuuming carpets, mopping hard floors and sanitising high-touch touchpoints in a Scottish corporate communal area",
    title: "2. Communal Areas & High-Traffic Hygiene",
    description: "",
    points: [
      {
        title: "Floor & Carpet Maintenance",
        text: "Intensive vacuuming and disinfecting of all floor surfaces to remove city-center dust and pollutants. HEPA-filtered vacuums across carpeted offices, meeting rooms, and breakout areas (including under desks where accessible, in cable-managed zones); hard floors mopped edge-to-edge with a neutral pH floor cleaner; entrance matting shaken or vacuumed; spill stains spot-treated with professional carpet spot-and-extract &mdash; so your flooring looks cared-for, not just briefly passed over.",
      },
      {
        title: "Inside Window Care",
        text: "Meticulous cleaning of glass partitions and internal windows to maximize natural light for the following day. Meeting room glass partitions squeegeed to streak-free clarity, reception entrance side panels polished, internal office doors wiped where reachable, lobby glazing spot-checked, and mirror surfaces re-checked &mdash; the natural light and transparency that signals a confident, well-run operation when your team arrives.",
      },
      {
        title: "High-Touch Sanitization",
        text: "Disinfecting communal handles, lift buttons, and entry phone systems. Door handles on every meeting room and WC, lift call panels and lift car buttons, reception desk pens and visitor sign-in tablets, stair handrails on every flight, light switches, entry phone handsets, vending machine buttons, water dispenser taps, and printer control panels &mdash; all wiped with a fragrance-free EN 1276 bactericide with the correct contact time, every night.",
      },
    ],
  },
  {
    icon: HeartPulse,
    image: IMG.checklistKitchen,
    imageAlt:
      "Maundy Clean night crew deep cleaning washrooms, chrome buffing and refreshing corporate kitchenettes in a Scottish facility",
    title: "3. Facilities & Kitchenette Sanitation",
    description: "",
    points: [
      {
        title: "Deep Washroom Cleaning",
        text: "Intensive sanitation of all restrooms, including buffing chrome to a high shine and disinfecting ceramic items. Toilet (inside, outside, behind), urinal (with descaler), basin and tap (limescale removed), mirror (streak-free), floor (mopped edge-to-edge), partitions (wiped), door handles and locks (sanitised &mdash; high-touch). Restock: toilet paper, paper towels, hand soap, sanitary products, air freshener. Polished: chrome fittings, mirror, stainless steel. Sanitary bins checked and replaced if full. Disabled access toilets given particular attention.",
      },
      {
        title: "Kitchen Refresh",
        text: "Thorough cleaning of worktops, splashbacks, and the exterior of all communal appliances to ensure a hygienic break area. Worktops wiped and sanitised. Sink cleaned (limescale removed, drainer wiped). Microwave cleaned inside and out. Fridge exterior wiped and handle sanitised (interior cleaned weekly &mdash; see add-on). Kettle descaled (essential in Scotland&rsquo;s hard water). Dishwasher exterior wiped. Coffee machine cleaned (group head, steam wand, drip tray). Water dispenser sanitised. Floor swept and mopped. Bins emptied and recycling sorted. Dishwasher loaded and put on (if requested).",
      },
    ],
  },
];

export function NightlyJanitorialSeoChecklist() {
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
            Our Comprehensive Nightly Janitorial &amp; Office Hygiene Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our nightly janitorial services follow a rigorous, agency-approved
            checklist designed to address every inch of your office, from public
            foyers to private workstations. We deliver after-hours care across every
            zone of your facility &mdash; from the reception foyer and front-of-house,
            through the workstation clusters and meeting rooms, to the washrooms,
            kitchenettes, and back-of-house spaces &mdash; so your team walks in at
            8:00 AM to a fresh, hygienic, ready-to-work environment. Below is the
            scope we deliver as standard, regardless of building type, footprint, or
            occupancy schedule.
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
// brief had an explicit [H3] marker; nightly-janitorial brief
// has no [H3] marker, so use <h2> to match the standard
// section-title pattern).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Bespoke Plan",
    description:
      "Contact us for a free site survey. We will assess your facility and develop a tailored nightly schedule based on your agreed requirements and budget. We walk your facility with your facilities or office manager, identify your workstation clusters, your washroom count, your kitchenette and breakout zones, your occupancy pattern (9&ndash;5 corporate, late-working teams, early-opening retail, term-time school, public-sector office hours), your alarm-setting window, your access protocols (key safes, alarm codes, entry phone), and any specific cleaning challenges (glass partition streak, carpeted meeting room with coffee spill risk, listed-building constraints on finishes). We send an itemised proposal within 2 business days: shift pattern, scope of work, fixed monthly retainer, RAMS, COSHH datasheets, and a draft nightly task schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team with the necessary qualifications and &ldquo;Maundy&rdquo; mindset for your specific corporate environment. Your allocated night crew is PVG-checked (essential for buildings that may have late-working staff or security personnel present), uniformed, and trained in nightly-janitorial-specific protocols &mdash; after-hours access, alarm systems, key handling, lone working, emergency procedures, desk &amp; keyboard sanitisation, floor &amp; carpet maintenance, washroom deep cleans, kitchenette refresh, bin &amp; recycling handling, and issue flagging. We brief the crew on your workstation cluster layout, your washroom deep-clean sequence, your kitchenette reset routine, your access protocols, your premium finishes, and your morning arrival cut-off time &mdash; so cleaning happens after hours, not around your working day. The same crew returns every night, building real knowledge of your facility&rsquo;s traffic patterns and your overnight security regime.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Office",
    description:
      "Walk into a workspace that looks, smells, and feels brand new every single morning, backed by our MaundyClean satisfaction guarantee. You receive a signed nightly log after every shift (cleaner name, time in/out, areas cleaned, issues flagged), arrival and departure times, tasks actioned, consumables restocked, and any issues flagged &mdash; like a light failure, a leaking tap, a low-stock paper towel, a damaged fixture, a security concern, or a pest sighting &mdash; before they undermine a client visit, an environmental health inspection, or a staff complaint. From &pound;13 per hour for a single-site nightly janitorial through to a fully bespoke multi-site retainer with one invoice. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function NightlyJanitorialSeoBooking() {
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
            first night crew on-site in under a week &mdash; no friction, no waiting,
            no surprises. Just a pristine workplace every morning, every desk, every
            washroom, every kitchenette, and a compliance file that&rsquo;s
            audit-ready the day an environmental health officer or building inspector
            walks in.
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
              Request Your Bespoke Janitorial Quote
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
      "Recurring home cleaning bringing nightly-janitorial standards of meticulous after-hours office hygiene to a Scottish private residence on a weekly or fortnightly basis",
    description: (
      <>
        Enjoy the same level of care in your personal sanctuary with our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        service, tailored for weekly or fortnightly maintenance. The same vetted
        uniformed crew, the same child-safe eco chemistry, the same signed cleaning
        log after every visit &mdash; so the standard you see at work follows you
        home.
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
        Moving offices? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        ensures units are front-line ready for handover and pass all final
        inspections. Every surface detailed top-to-bottom, deposit-back guarantees
        met, and the same trusted vetted crew your night team knows &mdash; so your
        unit handover starts from a &ldquo;speechlessly spotless&rdquo; baseline.
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
        If your workspace has had home improvements or refitting, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is designed to remove heavy layers of builders&rsquo; dust. Fine plaster
        and MDF dust on every horizontal surface, paint overspray on fixtures,
        adhesive residue on new flooring &mdash; lifted in full before your night
        crew picks up the ongoing maintenance brief on the newly-refitted space.
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
      "Antiviral sanitisation ULV fogging treatment giving a Scottish corporate facility a total biological reset between nightly-janitorial shifts",
    description: (
      <>
        Ask about our specialist{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        and deep-cleaning treatments to keep your workforce healthy during peak flu
        seasons. EN 14476 virucidal ULV fogging of every surface, every meeting
        room, every washroom &mdash; the periodic deep biological reset that lifts
        the cumulative contamination load a nightly clean can&rsquo;t reach, and
        gives your night crew a clean baseline to maintain.
      </>
    ),
    cta: "Explore antiviral sanitisation",
  },
];

export function NightlyJanitorialSeoInterlinking() {
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
            Beyond the nightly clean &middot; property milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Milestone
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our nightly janitorial services are the heartbeat of your office&rsquo;s
            health, but we offer specialized &ldquo;resets&rdquo; for major property
            needs: from recurring home cleaning that brings night-crew standards into
            your residence, through end-of-tenancy resets for unit handovers,
            post-renovation dust clear-outs, and periodic antiviral sanitisation
            biological resets. The same trusted, vetted crew can step up whenever
            your facility needs more than a standard nightly janitorial visit.
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
// (Semantic H2: "Nightly Janitorial Services Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/nightly-janitorial-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function NightlyJanitorialSeoNearMe() {
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
              Local nightly janitorial services &amp; after-hours office cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Nightly Janitorial Services Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;nightly janitorial services near me&rdquo; or
              &ldquo;after-hours office cleaning near me&rdquo; in Scotland? Maundy
              Clean covers facilities managers, office managers, building operations
              leads, and corporate estates across the Central Belt, Highlands,
              Borders, and Islands &mdash; from Glasgow&rsquo;s IFSD and
              Edinburgh&rsquo;s Exchange District to Aberdeen&rsquo;s energy
              corridor and Dundee&rsquo;s Waterfront, plus corporate estates in
              Stirling, Perth, Inverness, and Ayr. Same PVG-checked, uniformed night
              crews, same dedicated crew every night, same fresh-start by 8:00 AM
              &mdash; wherever your facility happens to be. Find your local nightly
              janitorial specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean nightly janitorial services &amp; after-hours office cleaning coverage areas"
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
                  Same PVG-checked night crews, same 100% satisfaction guarantee &mdash; from
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
                <Link href="/services/nightly-janitorial-near-me#locations">
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
                Find your local night crew
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
                    href={`/services/nightly-janitorial-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> night cleaning</span>
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
            Our local nightly janitorial crews operate across Glasgow&rsquo;s
            International Financial Services District, Merchant City and West End
            corporate towers (facilities managers, office managers and building
            operations leads), Edinburgh&rsquo;s Exchange District, New Town and
            Quartermile business quarters (corporate estates and property management
            companies), Aberdeen&rsquo;s energy-corridor West End and Tullos
            industrial offices (energy operators and service companies),
            Dundee&rsquo;s Waterfront and City Centre professional services
            buildings (facilities teams and office managers), and Scottish corporate
            districts across the Central Belt &mdash; from Inverness to Perth, Falkirk
            to Ayr. Whether you&rsquo;re searching for an after-hours office clean in
            Glasgow, a through-the-night janitorial shift in Edinburgh, a dawn-finish
            floor reset in Aberdeen, or a school evening cleaning anywhere in
            between, Maundy Clean assigns a vetted, PAYE-employed, PVG-checked night
            crew that stays with you for the long run. Same crew, same standard,
            same locked-in rate for 12 months, fresh-start every morning by 8:00 AM.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Janitorial Quote")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function NightlyJanitorialSeoFinalCta() {
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
            Request Your Bespoke Janitorial Quote
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Facilities managers, office managers and business owners &mdash; book a
            free, no-obligation site survey with our management team and receive an
            itemised proposal within 2 business days. Absolute reliability, the same
            trusted team every night, a fixed monthly retainer that locks your rate
            for 12 months, and a fresh-start every morning by 8:00 AM. From
            &pound;13 per hour for a single-site nightly janitorial through to a
            fully bespoke multi-site retainer with one invoice. No pushy sales call,
            no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Janitorial Quote
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
// 3 Q&As from the brief (insured, provide own supplies, work
// through the night)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for commercial sites?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience serving the Scottish commercial and public sectors. We carry &pound;5m public liability as standard &mdash; covering reception areas, workstations, washrooms, kitchenettes, meeting rooms, and back-of-house &mdash; and every night crew member is PVG-checked (essential for buildings that may have late-working staff or security personnel present), uniformed, and trained in nightly-janitorial-specific protocols: after-hours access, alarm systems, key handling, lone working, emergency procedures, desk &amp; keyboard sanitisation, floor &amp; carpet maintenance, washroom deep cleans, kitchenette refresh, bin &amp; recycling handling, and issue flagging. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, and corporate insurance compliance files. Our documentation is audit-ready for environmental health inspection and HSE review; we provide signed nightly logs, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file. We will not begin work until your facilities or office manager has the documentation they need.",
  },
  {
    q: "Do you provide your own cleaning supplies?",
    a: "Yes. We supply all our own professional-grade equipment and non-toxic supplies, which are included in your competitive quote. From HEPA-filtered vacuums for workstation carpets and meeting room flooring, to microfibre systems for streak-free glass partition care, professional EN 1276 bactericide for washroom deep cleans, EN 14476 virucidal disinfectant for high-touch touchpoints, professional carpet spot-and-extract for spill stains, fragrance-free sanitiser on reception desks and entry phone systems, COSHH-documented chemistry on file, and non-toxic, child-safe, surface-safe chemistry by default &mdash; every tool is maintained to manufacturer spec. HEPA-filtered vacuums with extension tubes for high-level dusting; microfibre glass-cleaning systems for partitions and entrance glazing; EN 1276 bactericide for washroom deep cleans; EN 14476 virucidal disinfectant for high-touch touchpoints; professional carpet spot-and-extract for spill &amp; mess response; pH-neutral sanitiser for skirting boards, door frames, and surrounding fixtures; whiteboard cleaner (not water &mdash; water leaves ghosting); PPE; and non-toxic, surface-safe chemistry by default. You provide consumables (paper towel, toilet paper, hand soap, sanitiser wipes, bin liners) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Can you work through the night?",
    a: "Yes. We offer flexible shifts to suit your business requirements, including early evening or through-the-night cleaning, to ensure your building is ready for your team by 8:00 AM. Early-evening shifts (6&ndash;10pm) suit offices with late-working staff or security personnel present; through-the-night shifts (10pm&ndash;6am) suit buildings that empty completely and require an alarm-set after-hours window; dawn-finish shifts (4&ndash;8am) suit early-opening retail, hospitality, and front-of-house operations. We&rsquo;re trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys stored in a coded safe between shifts, alarm codes encrypted and only released to your assigned night crew, never labelled with your address. From &pound;13 per hour for a single-site nightly janitorial through to a fully bespoke retainer for a multi-site Scottish or UK-wide corporate estate. Same trusted crew at each site, same standard, same locked-in rate, fresh-start every morning &mdash; the operational simplicity that lets your facilities team manage one supplier instead of a dozen.",
  },
];

export function NightlyJanitorialSeoFaq() {
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
            Nightly janitorial services &amp; after-hours office cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our nightly janitorial clients ask most
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
                Request Your Bespoke Janitorial Quote
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

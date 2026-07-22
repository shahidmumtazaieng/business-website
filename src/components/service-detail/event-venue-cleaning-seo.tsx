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
  Utensils,
  Warehouse,
  Building2,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches car-park + distribution-centre + warehouse pool)
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%2010.17.44%20PM.jpeg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%2010.17.44%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_lkesbslkesbslkes.png",
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
// Semantic H1: "Professional Event & Public Venue Cleaning Services Scotland"
// ============================================================

export function EventVenueSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean PVG-checked, vetted event venue cleaning crew resetting a Scottish arena concourse before doors open"
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
            Event Venue Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Event &amp; Public Venue Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Meticulous Crowd-Ready Sanitation, High-Traffic Technical Excellence, and the Maundy
            Tradition of Property Care. Public venues &mdash; from stadia and arenas to corporate
            exhibition spaces &mdash; are the &ldquo;living rooms&rdquo; of our Scottish communities,
            and MaundyClean brings vetted PVG-checked crews, surge capacity for major events,
            tight turnaround windows (down to 90 minutes), and child-safe eco chemistry to every
            pre-event, during-event, and post-event clean.
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
                Request Your Free Venue Survey Today
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
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Team Every Event
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Pre / During / Post-Event 7 Days
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
// ONE inline <Link> to /services/recurring-home-cleaning for
// "Recurring Home Cleaning").
// ============================================================

export function EventVenueSeoIntro() {
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
                alt="Maundy Clean event venue cleaning crew resetting auditoria seating and concourse flooring in a Scottish arena between events"
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
                  &ldquo;Maundy Standard&rdquo; care we bring to Scotland&rsquo;s finest residences
                  &mdash; applied to your stadium, arena, concert hall, conference centre, or
                  wedding venue.
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
              Event venue cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Event Venues
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              Public venues &mdash; from stadiums and arenas to corporate exhibition spaces &mdash;
              are the &ldquo;living rooms&rdquo; of our Scottish communities. However, these
              environments are subject to heavy foot traffic and changing weather conditions that
              lead to the rapid build-up of dirt, algae, moss, and debris on walkways and seating
              areas. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we provide
              a premium event venue cleaning service that ensures your space remains pristine, safe,
              and welcoming for every attendee.
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
              &ldquo;sanctuary&rdquo; care, and meticulous attention to detail to the commercial
              event sector. Serving Glasgow, Edinburgh, and across the Central Belt, we help
              organizers maintain well-presented environments before, during, and after major
              events.
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
// Section 2 - Why MaundyClean is Scotland's Strategic Venue Partner
// (Semantic H2: "Why MaundyClean is Scotland's Strategic Venue Partner")
// Image+copy split layout with 4 trust cards.
// Per the brief: icons UserCheck / Clock / ClipboardCheck / Leaf
// ============================================================

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Event",
    description:
      "Reliability is the cornerstone of successful event management. We ensure the same vetted professionals manage your venue to build a deep understanding of your specific access routes and &ldquo;risky&rdquo; high-traffic concourses. When your regular crew lead is on annual leave, we send a trained backup who has been briefed on your venue layout, your event calendar, your artist-rider standards, your audience flow patterns, your back-of-house routes, and your lost-property protocol &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking an active event floor, never a &ldquo;new face every week&rdquo; on your CCTV &mdash; the same PVG-checked, uniformed crew, every event, on schedule.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling Around Timetables",
    description:
      "We understand that the show must go on. Our services can be scheduled precisely around your event timetables to minimize disruption, including out-of-hours and weekend deep cleans. Pre-event resets the night before doors open; during-event day porters, toilet attendants, and spill response for the worst-peak hours; post-event deep cleans starting the moment the audience leaves. We&rsquo;ve handled turnaround windows as tight as 90 minutes (concert to corporate conference setup) and surge mobilisations of 20&ndash;50 cleaners for stadia concerts, festival weekends, and exhibition build-up &mdash; we know how to deliver quality in impossible timeframes.",
  },
  {
    icon: ClipboardCheck,
    title: "Safety & Presentation Focused",
    description:
      "Every site is assessed before work begins to ensure the correct cleaning method and access approach is used, following industry best practices for busy and sensitive environments. We carry &pound;5m public liability as standard (increased for major venues), every operative is PVG-checked (essential for venues with public access), and our documentation is audit-ready for environmental health, licensing, and event post-mortem review. RAMS (Risk Assessments and Method Statements) and Safe Systems of Work provided as standard; COSHH datasheets on file; slip-risk assessments for every mopped floor; lost-child, spill-response, and bodily-fluid protocols built into crew briefings.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Public Safe",
    description:
      "Your visitors&rsquo; health is our priority. We utilize only certified non-toxic, child-safe, and pet-safe products, ensuring a fresh environment without the harsh chemical odors common with national agencies. EN 14476 virucidal disinfectants on high-touch surfaces (60-second contact time); EN 1276 bactericides for washroom deep cleans; bioremediation products for spill response that break down organic matter at a molecular level rather than spreading it; colour-coded cloths (red/green/yellow/blue) to prevent cross-contamination between concourse, washroom, catering, and back-of-house; non-toxic surface-safe chemistry by default. Safe for visitors, safe for staff, safe for the surrounding Scottish landscape.",
  },
];

export function EventVenueSeoWhy() {
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
                alt="Maundy Clean event venue cleaning crew &mdash; PVG-checked, uniformed, trained in crowd safety, spill response, lost child procedures, and bodily fluid cleanup"
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
                  Employed, vetted, PVG-checked, uniformed, and trained in event-specific protocols
                  &mdash; crowd safety, lost child procedures, spill response, vomit and bodily
                  fluid cleanup, artist-rider standards for backstage and dressing rooms. Same crew
                  every event &mdash; never a rotating cast of agency strangers walking an active
                  concourse.
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
              Why MaundyClean is Scotland&rsquo;s Strategic Venue Partner
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Managing a public venue requires a careful balance of presentation and safety.
              MaundyClean addresses the unique challenges of high-footfall environments by
              utilizing professional equipment suited for large-scale operations. We combine vetted
              PVG-checked uniformed teams, the same dedicated crew every event, surge capacity of
              20&ndash;50 cleaners for major concerts and stadium events, 90-minute turnaround
              capability, child-safe eco chemistry, RAMS as standard, and signed cleaning logs
              &mdash; so the venue your audience walks into looks, feels, and operates safely every
              single event.
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
// Section 3 - Our Total Venue Maintenance & Post-Event Checklist
// (Semantic H2: "Our Total Venue Maintenance & Post-Event Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. External Concourse & Entrance Care
//   2. Internal Seating & Arena Sanitation
//   3. Often-Missed Technical Details
// Carries the id="checklist" anchor that the CTA buttons link to.
// Card 1's third sub-point "Car Park Maintenance" description is a
// ReactNode containing an inline <Link> to /services/car-park-cleaning,
// rendered via a typeof desc === "string" check (mirroring the
// warehouse-cleaning-seo.tsx card 4 ReactNode pattern).
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
    imageAlt: "Maundy Clean ride-on sweeper and pressure-washing crew deep cleaning a Scottish arena concourse and forecourt before doors open",
    title: "1. External Concourse &amp; Entrance Care",
    description:
      "External concourses, forecourts, and entrance plazas are the first impression your attendees form &mdash; and the highest-risk slip-and-fall zones in any venue. Oil and food spills, dropped glass, chewing gum, discarded confetti, leaf litter, and organic growth (algae and moss on damp Scottish stonework) all accumulate between events. Our external protocol uses ride-on sweepers for large concourse areas, walk-behind scrubber-dryers for tight entrance zones, rotary pressure cleaning with superheated water for stubborn stains and gum removal, and bioremediation products for spill response &mdash; delivered to a slip-hazard-free, &ldquo;speechlessly spotless&rdquo; standard before doors open.",
    points: [
      {
        title: "Commercial Pressure Washing",
        text: "Intensive cleaning of hard surfaces, walkways, and forecourts to remove city-center pollutants and organic growth. Ride-on sweepers (Tennant, Karcher) tackle large open concourse areas at 3,000&ndash;6,000m&sup2;/hour; walk-behind scrubber-dryers handle tight entrance zones, queue barriers, and around ticket machines; rotary pressure lances with superheated water lift stubborn staining, discarded gum, and food-and-drink residue from monoblock, tarmac, and concrete. Bioremediation products break down organic spills (vomit, food, drink) at a molecular level rather than spreading them. Algae and moss on damp Scottish stonework treated with anti-fungal products so the entrance doesn&rsquo;t turn into a slip hazard after every rainfall.",
      },
      {
        title: "Access Route Restoration",
        text: "Ensuring all entry points are &ldquo;speechlessly spotless&rdquo; to create a positive first impression for guests. Entrances, turnstile banks, queue barriers, signage, wayfinding totems, and ticket-machine housings wiped down with a pH-neutral sanitiser; glass foyers and entrance canopies cleaned (interior and exterior where reachable); litter picked and bins emptied before, during, and after every event; high-touch points (entry-phone handsets, scanner housings, barrier buttons) treated with EN 14476 virucidal disinfectant with a verified 60-second contact time. A spotless entrance sets the tone for the entire event experience.",
      },
      {
        title: "Car Park Maintenance",
        text: (
          <>
            Specialized{" "}
            <Link
              href="/services/car-park-cleaning"
              className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
            >
              Car Park Cleaning
            </Link>{" "}
            to ensure road markings are visible and surfaces are free of oil and grease stains.
            Coordinated with our specialist car park cleaning protocol &mdash; ride-on sweepers
            for event parking, oil-stain bioremediation in disabled and family bays, line-marking
            inspection and refresh coordination, drainage-channel clearance, and SEPA-compliant
            oily-water capture and licensed-waste disposal (never down surface water drains).
            Clean car parks reduce slip hazards for visitors, protect your line-marking investment,
            and project the same &ldquo;curtain-up&rdquo; standard from the moment guests park to
            the moment they take their seats.
          </>
        ),
      },
    ],
  },
  {
    icon: Warehouse,
    image: IMG.checklistCounter,
    imageAlt: "Maundy Clean crew deep cleaning auditoria seating, sanitising armrests and cup holders, and restoring hospitality-suite carpets in a Scottish concert hall between events",
    title: "2. Internal Seating &amp; Arena Sanitation",
    description:
      "Auditoria and seating areas are the heart of any venue &mdash; and the surfaces your guests touch most. Armrests, cup holders, seat flips, aisle edges, and staircases all collect spilled drinks, dropped food, confetti, chewing gum, and bodily-fluid residue between events. Our internal seating protocol uses HEPA-filtered vacuums for auditoria carpet, industrial-grade extractors for hospitality-suite carpet restoration, EN 14476 virucidal disinfectant on every armrest and cup holder, and biohazard kits for spill response &mdash; delivered to a uniform, audit-grade standard across every seating zone, every event.",
    points: [
      {
        title: "Intensive Seating Cleans",
        text: "Meticulous wiping and disinfecting of all seating areas and concourse fixtures. Seats vacuumed (litter, confetti, dropped food, glass); armrests wiped with EN 14476 virucidal disinfectant (the highest-touch surface in any auditorium); cup holders emptied, wiped, and sanitised; seat flips checked for lost property; aisle edges and staircases swept and mopped; handrails sanitised; vomit and spill response with specific biohazard protocols; stage edge (where accessible) cleaned; lighting and audio equipment wiped where safe. A clean auditorium is the difference between a venue guests remember and one they avoid.",
      },
      {
        title: "Floor &amp; Carpet Restoration",
        text: "Using industrial-grade equipment to bring old or dirty carpets in hospitality suites back to life. Hospitality suites, VIP boxes, backstage corridors, and dressing rooms get heavy use and visible wear. Industrial carpet extractors (Karcher Puzzi, Truvox) lift embedded dirt, drink spills, and food stains; low-moisture encapsulation for areas that need to be back in service within the hour; protective Scotchgard application on request for high-traffic routes; hard floors scrubbed, buffed, and slip-tested. A restored carpet projects premium care to your VIP guests and protects your flooring investment for the long run.",
      },
      {
        title: "Window &amp; Glass Detailing",
        text: "Cleaning the inside and outside of windows to maximize natural light and maintain a bright, professional atmosphere. Glass foyers, atrium glazing, internal partition glass, lift-lobby doors, mirror walls in hospitality suites, and showcase cabinets all collect fingerprints, smudges, and airborne grime between events. Glass wiped with an alcohol-free anti-static cleaner and buffed to a streak-free finish; frames and sills detailed; smudges and fingerprints removed from high-touch glass (especially lift-lobby doors and entry-phone glass). External high-reach glazing is coordinated with our Window Cleaning service &mdash; the detail that turns a &ldquo;cleaned&rdquo; venue into a &ldquo;speechlessly spotless&rdquo; one.",
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean crew detailing event venue washroom chrome, signage, fixtures, and entry systems to a high-shine, sanitised standard in Scotland",
    title: "3. Often-Missed Technical Details",
    description:
      "The details visitors notice first &mdash; and the details most cleaners skip. Signage and fixture refresh, washroom deep cleaning, back-of-house touchpoints, and the chrome details that signal genuine care. These are the moments that turn a &ldquo;cleaned&rdquo; venue into a &ldquo;speechlessly spotless&rdquo; one, and the details that protect your reputation in event post-mortems, online reviews, and licensing inspections.",
    points: [
      {
        title: "Washroom Deep Cleaning",
        text: "Intensive sanitation of all public restrooms, including buffing chrome to a high shine and disinfecting all high-touch points. Toilets descaled, disinfected with EN 1276-certified bactericide, and polished; urinals descaled and deodorised; tiles and grout scrubbed; partition screens disinfected; mirrors squeegeed; floors mopped edge-to-edge with a slip-resistant sanitiser. Chrome taps, soap dispensers, towel dispensers, hand-dryer nozzles, door furniture, and cubicle locks buffed with a streak-free stainless-steel cleaner to a high shine. Sanitary bins checked and emptied; disabled-access and changing-places toilets given particular attention; consumables (toilet paper, hand soap, paper towel, sanitiser) restocked every visit. Continuous attendant service during events for high-capacity venues.",
      },
      {
        title: "Signage &amp; Fixture Refresh",
        text: "Meticulously wiping visible skirting boards, door frames, and entry systems in communal areas. Skirting boards, door frames, architraves, switch plates, handrails, fire-extinguisher brackets, notice-board trims, signage housings, ATM fascias, ticket-machine fronts, and entry-system keypads in foyers, concourses, and lift lobbies damp-wiped with a pH-neutral sanitiser. Ceiling light fixtures, air-conditioning vents, and extractor grilles dusted with extendable HEPA-filtered attachments (we don&rsquo;t just brush the dust back into the air); cable trays, picture frames, and wayfinding totems wiped down. These are the details visitors notice first &mdash; and the details most cleaners skip.",
      },
    ],
  },
];

export function EventVenueSeoChecklist() {
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
            Our Total Venue Maintenance &amp; Post-Event Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning philosophy for venues follows a rigorous, agency approved
            checklist designed to restore cleanliness and reduce slip hazards for visitors. We
            deliver technical depth in every zone of your facility &mdash; from the external
            concourse and entrance care zone (pressure washing, access route restoration, car park
            coordination) through the internal seating and arena sanitation zone (intensive seating
            cleans, floor and carpet restoration, window and glass detailing) to the often-missed
            technical details (washroom deep cleaning, signage and fixture refresh). Below is the
            scope we deliver as standard, regardless of venue type, footprint, or event schedule.
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
// Per the brief: icons ClipboardCheck / FileText / Sparkles
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Assessment & Quote",
    description:
      "Contact us for a free, no-obligation quote. We conduct a thorough assessment to determine the most effective cleaning method for your specific venue. We walk your venue with your facilities manager, identify your venue type (stadium, arena, concert hall, conference centre, exhibition centre, wedding venue), capacity (100 to 67,000 guests), event calendar (one-off concerts, recurring conferences, exhibition cycles, wedding season), access windows (overnight post-event resets, daytime between-event maintenance, during-event day porters and toilet attendants), turnaround windows (90 minutes to 24 hours between events), and any specific cleaning challenges (backstage artist-rider standards, lost-property protocol, slip-risk zones, vulnerable surfaces). We send an itemised proposal within 2 business days: crew size, surge capacity (2&ndash;3 cleaners for routine maintenance up to 20&ndash;50 cleaners for major events), visit frequency, time on-site, scope of work, fixed monthly rate, RAMS, COSHH datasheets, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team with experience in large-scale event support and commercial hygiene. Your allocated crew lead is PVG-checked (essential for venues with public access), uniformed, and trained in event-specific protocols &mdash; crowd safety, lost child procedures, spill response, vomit and bodily fluid cleanup, artist-rider standards for backstage and dressing rooms, and audience-flow management. We brief the crew on your venue layout, your event calendar, your access preferences, your &ldquo;risky&rdquo; zones (concourse bottlenecks, washroom peaks, bar queues, disabled viewing platforms, EV charging in car parks) and your lost-property protocol &mdash; so cleaning happens around your operations, not through them. The same crew returns for every scheduled session, building real knowledge of your shift patterns, your signage protocol, and your event-day pressures. We arrive in liveried vehicles, in uniform with photo I.D. and PPE, with commercial-grade ride-on sweepers for concourses, HEPA-filtered vacuums for auditoria seating, industrial carpet extractors for hospitality suites, bioremediation products for spill response, and COSHH-compliant, child-safe, surface-safe chemistry.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Venue",
    description:
      "Experience a space that feels fresh and safe for your participants, backed by our MaundyClean 100% satisfaction guarantee. You receive a signed cleaning log after every visit (operative signature, facilities-manager counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a fresh spill in a disabled bay, a damaged fixture, a blocked drainage channel, a low-stock consumable, or a lost-property item handed to security &mdash; before they undermine a turnaround window, an environmental health inspection, or a guest review. From &pound;14 per hour for a small wedding venue through to a fully bespoke retainer for a multi-arena national portfolio. We hold &pound;5m public liability as standard (increased for major venues) and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function EventVenueSeoBooking() {
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
            providing the dependable results Scottish venue managers rely on. From free site
            assessment and itemised quote to first clean in under a week &mdash; no friction, no
            waiting, no surprises. Just a pristine venue, every event, on schedule, and a compliance
            file that&rsquo;s audit-ready the day your environmental health officer or licensing
            inspector walks in.
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
              Request Your Free Venue Survey Today
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
// Brief drops the interlinking prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services.
// All 4 cards use plain string descriptions (no inline <Link> in
// card descriptions per the brief - only the Intro section has
// inline Links, and the Checklist Card 1 third sub-point has one).
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
    title: "Pre-Season Reset &middot; Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseSpring,
    imageAlt: "Pre-season deep clean of event venue interior offices and back-of-house zones combined with Deep House Cleaning protocol in Scotland",
    description:
      "Combine a venue clean with a Deep House Cleaning protocol for your interior offices to ensure your entire building is front-line ready. Backstage offices, green rooms, production offices, and staff welfare zones get the same meticulous, top-to-bottom treatment as your auditoria and concourses &mdash; the same trusted, vetted crew, the same child-safe eco chemistry, the same signed cleaning log after every visit.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish arena concourse before reopening day",
    description:
      "If your arena has undergone improvements, our After Builders Clean is designed to remove heavy layers of builders&rsquo; dust. Fine dust left on auditoria seating, concourse flooring, or hospitality suites undermines the customer-trust signal the moment the venue re-opens &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage your guests&rsquo; experience or your freshly-painted finishes.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: Utensils,
    title: "Hospitality Excellence &middot; Restaurant Deep Cleaning",
    href: "/services/restaurant-cleaning",
    image: IMG.leaseAntiviral,
    imageAlt: "Deep cleaning of on-site bars, eateries and concession kitchens in a Scottish event venue to food hygiene standards with Maundy Clean",
    description:
      "For on-site bars and eateries, our Restaurant Deep Cleaning ensures compliance with food hygiene standards. Extraction hoods degreased, prep surfaces descaled and sanitised, canopies and baffle filters deep-cleaned, floors edge-to-edge mopped with food-safe chemistry, and audit-ready documentation for EHO inspection &mdash; the same specialist standard we deliver to standalone Scottish restaurants, applied to your venue&rsquo;s catering and concession zones.",
    cta: "Explore restaurant deep cleaning",
  },
  {
    icon: HeartPulse,
    title: "Fabric Rejuvenation &middot; Upholstery Cleaning",
    href: "/services/upholstery-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Rejuvenating VIP suite upholstery, hospitality seating and dressing room soft furnishings in a Scottish event venue with Maundy Clean",
    description:
      "Bring freshness back to VIP suites with our professional Upholstery Cleaning to remove germs and unwanted odors. VIP box seating, hospitality-suite sofas, backstage dressing room chairs, and reception-area suites all benefit from a periodic specialist reset &mdash; hot-water extraction, stain treatment, odour neutralisation, and Scotchgard protection on request. The detail that turns a &ldquo;cleaned&rdquo; venue into a &ldquo;speechlessly spotless&rdquo; one.",
    cta: "Explore upholstery cleaning",
  },
];

export function EventVenueSeoInterlinking() {
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
            Solutions for Every Property Cycle
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our venue cleaning services ensure your facility is always &ldquo;curtain-up&rdquo;
            ready, but we offer specialized support for major transitions: from pre-season resets
            that combine venue cleaning with deep house cleaning for interior offices, through
            post-renovation dust clear-outs and hospitality-zone restaurant deep cleaning, to
            fabric rejuvenation for VIP suites. The same trusted, vetted crew can step up whenever
            your venue needs more than a standard visit, with the same child-safe, surface-safe
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
// (Semantic H2: "Event Venue Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function EventVenueSeoNearMe() {
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
              Local event venue cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Event Venue Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;event venue cleaning near me&rdquo; or &ldquo;stadium cleaning
              near me&rdquo; in Scotland? Maundy Clean covers stadia, arenas, concert halls,
              conference centres, exhibition venues, and wedding venues across the Central Belt,
              Highlands, Borders, and Islands &mdash; from Glasgow&rsquo;s OVO Hydro and SEC Centre
              to Edinburgh&rsquo;s Usher Hall, EICC and Playhouse, Aberdeen&rsquo;s P&amp;J Live
              and Music Hall, and Dundee&rsquo;s Caird Hall and V&amp;A Dundee events. Same
              PVG-checked, uniformed crews, same surge capacity for major events, same dedicated
              crew every visit &mdash; wherever your venue happens to be. Find your local event
              venue cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean event venue cleaning service coverage areas"
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
                  Same PVG-checked crews, same 100% satisfaction guarantee &mdash; from Glasgow
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
                <Link href="/services/event-venue-cleaning-near-me">
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
                Find your local event venue crew
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
                    href={`/services/event-venue-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> venue</span>
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
            Our local event venue cleaning crews operate across Glasgow&rsquo;s OVO Hydro and SEC
            Centre (Exhibition Way), Edinburgh&rsquo;s Usher Hall, EICC and the Playhouse,
            Aberdeen&rsquo;s P&amp;J Live and Music Hall, Dundee&rsquo;s Caird Hall and V&amp;A
            Dundee events, and Scottish wedding venues (castles, country house hotels, dedicated
            wedding barns) across the Central Belt &mdash; from Inverness to Perth, Falkirk to Ayr.
            Whether you&rsquo;re searching for overnight post-concert deep cleaning in Glasgow,
            daytime conference-centre maintenance in Edinburgh, festival turnaround support in
            Aberdeen, or wedding-venue reset services anywhere in between, Maundy Clean assigns a
            vetted, PAYE-employed, PVG-checked crew that stays with you for the long run. Same
            crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Free Venue Survey Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function EventVenueSeoFinalCta() {
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
            Ready to book your venue survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Free Venue Survey Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted PVG-checked crews, the same dedicated team every
            event, surge capacity (20&ndash;50 cleaners for major events), 90-minute turnaround
            capability, child-safe eco chemistry, signed cleaning logs, &pound;5m public liability
            as standard, and a 100% satisfaction guarantee &mdash; from &pound;14 per hour for a
            small wedding venue through to a fully bespoke multi-arena national retainer. No pushy
            sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Free Venue Survey Today
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
// 3 Q&As from the brief (insured for public venues,
// provide own professional equipment, one-off cleans for festivals)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for public venues?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience serving Scotland&rsquo;s commercial and public sectors. We carry &pound;5m public liability as standard (increased for major venues), and every operative is PVG-checked, uniformed, and trained in event-specific protocols &mdash; crowd safety, lost child procedures, spill response, and bodily fluid cleanup. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for stadia vendor agreements, arena contracts, council-licence venues, and wedding-venue insurance terms. Our documentation is audit-ready for environmental health inspection, licensing review, and event post-mortem; we provide signed cleaning logs, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file. We will not begin work until your facilities team and your compliance team have the documentation they need.",
  },
  {
    q: "Do you provide your own professional equipment?",
    a: "Yes. We supply all our own professional-grade equipment and non-toxic materials, which are already included in your competitive quote. From ride-on sweepers for concourses and HEPA-filtered vacuums for auditoria seating, to industrial carpet extractors for hospitality suites and bioremediation products for spill response &mdash; every tool is COSHH-documented and maintained to manufacturer spec. Ride-on sweepers (Tennant, Karcher) for large open concourse areas at 3,000&ndash;6,000m&sup2;/hour; walk-behind scrubber-dryers for tight entrance zones and around ticket machines; rotary pressure lances with superheated water for stubborn staining, discarded gum, and food-and-drink residue on external forecourts; HEPA-filtered vacuums with extension tubes for auditoria seating and high dusting; industrial carpet extractors (Karcher Puzzi, Truvox) for hospitality-suite carpet restoration; bioremediation products for organic spill response (vomit, food, drink); EN 14476 virucidal disinfectants for high-touch surfaces (60-second contact time); EN 1276 bactericides for washroom deep cleans; colour-coded cloths (red for high-contamination, green for product-facing, yellow for washroom, blue for back-of-house); biohazard kits for bodily-fluid cleanup; HSE-compliant chemicals with COSHH datasheets on file; PPE; and non-toxic, child-safe, surface-safe chemistry by default. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Can you handle one-off cleans for specific festivals?",
    a: "Yes. We offer both one-off post-event deep cleans and planned maintenance programs to suit your event cycle. Our surge capacity allows us to mobilise 20&ndash;50 cleaners for major concerts and stadium events at short notice, then scale down to 2&ndash;3 cleaners for routine venue maintenance between events. We&rsquo;ve handled turnaround windows as tight as 90 minutes (concert to corporate conference setup) &mdash; we know how to deliver quality in impossible timeframes. For festival weekends, exhibition build-ups, and multi-day conferences, we can deploy day porters and toilet attendants during the event and full deep-clean crews overnight. We arrive in liveried vehicles, in uniform with photo I.D. and PPE, with commercial-grade ride-on sweepers, HEPA-filtered auditoria vacuums, industrial carpet extractors, bioremediation spill-response kits, and COSHH-compliant, child-safe, surface-safe chemistry &mdash; ready for whatever the event throws at your venue.",
  },
];

export function EventVenueSeoFaq() {
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
            Event venue cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our event venue cleaning clients ask most often.
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
                Request Your Free Venue Survey Today
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

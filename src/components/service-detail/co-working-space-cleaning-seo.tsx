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
  KeyRound,
  Warehouse,
  Building2,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches event-venue + car-park + warehouse pool)
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
// Semantic H1: "Professional Co-Working Space Cleaning Services Scotland"
// ============================================================

export function CoWorkingSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean vetted, PVG-checked co-working space cleaning crew resetting hot-desks, meeting rooms and shared kitchens in a Scottish flexible workspace before members arrive"
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
            Co-Working Space Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Co-Working Space Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Member Retention Through Visible Cleanliness, Technical Hygiene, and the Maundy
            Tradition of Care. Co-working spaces &mdash; from hot-desk floors and meeting rooms
            to shared kitchens, phone booths and event spaces &mdash; are the &ldquo;home away
            from home&rdquo; of Scotland&rsquo;s modern member-driven economy, and MaundyClean
            brings vetted, DBS-checked crews, a dual-shift strategy (day porters plus evening
            deep cleans), fixed monthly contracts, child-safe eco chemistry, and secure safe-key
            handling to every visit.
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
                Request Your Bespoke Site Survey
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
                View Our Managed Workspace Checklist
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
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> Fully Insured &amp; DBS-Checked
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Team Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Day Porters + Evening Deep Clean
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

export function CoWorkingSeoIntro() {
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
                alt="Maundy Clean co-working space cleaning crew sanitising hot-desks, meeting rooms and a shared kitchen in a Scottish flexible workspace between member sessions"
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
                  &mdash; applied to your hot-desk floor, meeting rooms, phone booths, shared
                  kitchen, and event space.
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
              Co-working space cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Co-Working Spaces
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the modern member-driven economy of Glasgow and Edinburgh, visible cleanliness is
              not just a standard &mdash; it is a critical retention tool. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we
              understand that co-working and serviced offices require a higher frequency of care to
              maintain a healthy, hygienic environment that impresses visitors and keeps your
              community thriving.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s finest residences, we bring that same level of technical
              intimacy and &ldquo;same-staff&rdquo; consistency to the commercial world. We
              provide a premium alternative to impersonal agencies, acting as a motivated partner
              that allows your team to focus on core business activities without the distraction of
              routine maintenance.
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
                { label: "From per hour", value: "&pound;15" },
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
// Section 2 - Why MaundyClean is Scotland's Authority in Managed Workspaces
// (Semantic H2: "Why MaundyClean is Scotland's Authority in Managed Workspaces")
// Image+copy split layout with 4 trust cards.
// Per the brief: icons Clock / UserCheck / ClipboardCheck / Leaf
// ============================================================

const TRUST_CARDS = [
  {
    icon: Clock,
    title: "The Dual-Shift Strategy",
    description:
      "We recognize that co-working spaces need more than one visit. We offer daytime porters to manage shared kitchens, breakout areas, and washrooms during peak hours, followed by a full evening clean of desks, meeting rooms, and floors. The day porter handles hourly kitchen checks, 5-minute meeting-room resets between bookings, bin top-ups, spill response, and reception-area presentation; the evening crew delivers the deep clean &mdash; hot-desks sanitised, glass partitions polished streak-free, floors vacuumed and mopped, kitchens reset to &ldquo;showcase&rdquo; standard, phone booths aired and sanitised, and consumables restocked before the first member arrives at 7am. The result is a space that looks brand new at 8am AND at 6pm &mdash; not just at opening time.",
  },
  {
    icon: UserCheck,
    title: "The Same Trusted Professional",
    description:
      "Trust is the backbone of your community. We ensure the same vetted professionals visit your space every time to build an understanding of your members&rsquo; preferences and your facility&rsquo;s specific layouts. Continuity matters when members pay &pound;150&ndash;&pound;500 a month for a desk and judge the brand on the small details &mdash; the kitchen bin that&rsquo;s never overflowing, the meeting-room glass that&rsquo;s streak-free, the phone booth that doesn&rsquo;t smell of the previous occupant&rsquo;s lunch, the toilet that always has paper. When your regular crew lead is on annual leave, we send a trained backup who has been briefed on your member etiquette, your booking system, your access windows, your community-team preferences, and your &ldquo;risky&rdquo; zones &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking an active member floor.",
  },
  {
    icon: ClipboardCheck,
    title: "Enhanced Productivity & Well-being",
    description:
      "A cleaner office is a healthier one. Our meticulous sanitation protocols significantly reduce sick days caused by contamination from shared facilities, directly benefiting your business&rsquo;s bottom line. Hot-desks (where members eat, drink, cough, and sneeze) sanitised daily with anti-bacterial spray; high-touch points (door handles, entry-phone handsets, scanner housings, lift buttons, printer keypads, coffee-machine buttons, microwave handles) treated with EN 14476 virucidal disinfectant (60-second contact time); colour-coded cloths (red/green/yellow/blue) to prevent cross-contamination between kitchen, washroom, and desk zones; HEPA-filtered vacuums that capture fine particulates rather than recirculating them; and signed cleaning logs after every visit. Members notice &mdash; in their NPS scores, their renewal rates, and their word-of-mouth referrals.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Member Safe",
    description:
      "We utilize only certified child-safe and pet-safe products. This is essential for co-working spaces that host &ldquo;puppy days&rdquo; or family-friendly events, providing a fresh sanctuary without harsh chemical residues. EN 14476 virucidal disinfectants on high-touch surfaces (food-safe, non-tainting); EN 1276 bactericides for washroom deep cleans; pH-neutral sanitisers for desks, screens, and glass partitions; non-toxic surface-safe chemistry by default; biodegradable bin liners; eco-labelled floor cleaners; microfibre systems that clean with water alone where possible; and COSHH-documented chemistry on file for your compliance team. Safe for members, safe for staff, safe for the surrounding Scottish community &mdash; and aligned with the sustainability commitments your members increasingly expect from their workspace provider.",
  },
];

export function CoWorkingSeoWhy() {
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
                alt="Maundy Clean co-working space cleaning crew &mdash; DBS-checked, uniformed, trained in member etiquette, dual-shift strategy, hot-desk sanitisation, meeting-room resets, and shared-kitchen deep cleaning"
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
                  Employed, vetted, DBS-checked, uniformed, and trained in co-working-specific
                  protocols &mdash; member etiquette (when to chat, when to be invisible), hot-desk
                  sanitisation, meeting-room resets, phone-booth refresh, kitchen deep cleans, and
                  secure safe-key handling for out-of-hours access. Same crew every visit &mdash;
                  never a rotating cast of agency strangers walking an active member floor.
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
              Why MaundyClean is Scotland&rsquo;s Authority in Managed Workspaces
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Managed workspaces face a unique challenge: they need to feel like a &ldquo;home away
              from home&rdquo; while operating under heavy-duty commercial footfall. We bridge this
              gap by offering a technical, two-shift approach that ensures shared areas remain
              presentable through peak occupancy. Vetted DBS-checked uniformed teams, the same
              dedicated crew every visit, a dual-shift strategy (day porters for shared kitchens
              and breakout areas, evening deep cleans for desks, meeting rooms and floors),
              fixed monthly contracts, child-safe eco chemistry, HEPA-filtered vacuums for
              hot-desk zones, microfibre systems for streak-free glass partitions, EN 14476
              virucidal disinfectants for shared kitchens &mdash; so the workspace your members
              walk into looks, feels, and operates safely every single day.
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
// Section 3 - Our Total Workspace Maintenance & Hygiene Checklist
// (Semantic H2: "Our Total Workspace Maintenance & Hygiene Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Shared Breakout Areas & Kitchens
//   2. Private Desks & Meeting Rooms
//   3. Often-Missed Technical Details
// Carries the id="checklist" anchor that the CTA buttons link to.
// All sub-point descriptions are plain strings (no inline <Link>
// needed in the co-working checklist cards per the brief).
// ChecklistPoint type declared with text: ReactNode for forward
// compatibility (mirrors warehouse/event-venue pattern).
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
    imageAlt: "Maundy Clean day porter resetting a shared co-working kitchen and breakout area in a Scottish flexible workspace between member sessions",
    title: "1. Shared Breakout Areas &amp; Kitchens",
    description:
      "Shared kitchens and breakout areas are the heart of any co-working space &mdash; and the part members most judge. A dirty microwave, an overflowing bin, a sticky worktop, a smelly fridge, a coffee machine with a clogged group head: these are the details members mention in exit surveys and online reviews. Our shared-area protocol combines a daytime porter (hourly kitchen checks, spill response, bin top-ups) with an evening deep clean (worktops sanitised, sink descaled, microwave inside and out, coffee machine cleaned, water dispenser sanitised, floor swept and mopped, bins emptied and recycling sorted) &mdash; delivered to a &ldquo;showcase&rdquo; standard your community team can be proud of.",
    points: [
      {
        title: "Daytime Porter Service",
        text: "Constant monitoring and tidying of communal kitchens and coffee stations. A discreet, uniformed day porter on-site during member hours handles hourly kitchen checks (worktops wiped, microwave wiped, coffee machine drip tray emptied, bins topped up, sink cleared of dirty mugs), spill response, meeting-room resets between back-to-back bookings (5-minute turnaround: table wiped, chairs arranged, whiteboard erased, bin emptied, door handle sanitised), reception-area presentation, and restock runs. The day porter is the difference between a co-working space that looks great at 8am and one that looks great at 6pm &mdash; most operators find the investment pays for itself in member retention.",
      },
      {
        title: "Sanitization of High-Touch Points",
        text: "Meticulous disinfecting of entry phone systems, door handles, and appliances to keep germs at bay. Entry-phone handsets, door handles, scanner housings, lift buttons, printer keypads, coffee-machine buttons, microwave handles, fridge handles, water-dispenser buttons, vending-machine keypads, and reception desk touchpoints treated with EN 14476 virucidal disinfectant (verified 60-second contact time) on every visit. Colour-coded cloths (red for high-contamination, green for product-facing, yellow for washroom, blue for back-of-house) to prevent cross-contamination between kitchen, washroom, and desk zones. The protocol members don&rsquo;t see but they feel &mdash; fewer sick days, fewer shared-cold outbreaks, fewer norovirus incidents in the shared kitchen.",
      },
      {
        title: "Waste &amp; Recycling Management",
        text: "Efficient handling of communal bins to maintain a clutter-free environment. General waste, mixed recycling, food waste, glass, and (where your space supports it) coffee-ground composting all sorted, emptied, and relined on every visit. Bins in kitchens, meeting rooms, phone booths, breakout areas, and washrooms checked hourly by the day porter and emptied before they overflow. Recycling streams audited monthly to confirm contamination rates are within your waste contractor&rsquo;s acceptance criteria. Bin housings and surrounding floors wiped down; odour-control treatments applied where needed. A clutter-free, odour-free, &ldquo;curated&rdquo; waste presentation is one of the strongest visible signals that your space is professionally managed &mdash; not just &ldquo;cleaned&rdquo;.",
      },
    ],
  },
  {
    icon: Warehouse,
    image: IMG.checklistCounter,
    imageAlt: "Maundy Clean evening crew deep cleaning private desks, meeting rooms and glass partitions in a Scottish co-working space after member hours",
    title: "2. Private Desks &amp; Meeting Rooms",
    description:
      "Private desks (hot-desks, dedicated desks, and member offices) and meeting rooms are the surfaces your members touch most. Hot-desk surfaces collect food residue, drink spills, and bacteria from dozens of daily users; meeting-room tables collect coffee rings, whiteboard-marker residue, and fingerprints on glass partitions. Our private-desks protocol uses anti-bacterial spray on every desk surface, microfibre systems for streak-free glass partitions, HEPA-filtered vacuums for carpeted hot-desk zones, and 5-minute meeting-room resets between bookings &mdash; delivered to a uniform, audit-grade standard across every zone of your workspace, every day.",
    points: [
      {
        title: "Deep Surface Polishing",
        text: "Meticulously wiping down desks and polishing glass partitions to a streak-free shine. Desks (hot-desk, dedicated, and member-office) wiped with anti-bacterial spray &mdash; members eat, drink, cough, and sneeze on these surfaces, so daily sanitisation is non-negotiable. Chairs lint-rolled (fabric chairs show every spill). Cable trays under desks dusted and tidied (they collect dust, dropped pens, and crumbs). Glass partitions, meeting-room doors, and phone-booth glass wiped with an alcohol-free anti-static cleaner and buffed to a streak-free finish; frames and sills detailed; smudges and fingerprints removed from high-touch glass (especially meeting-room doors and entry-phone glass). The detail that turns a &ldquo;cleaned&rdquo; workspace into a &ldquo;speechlessly spotless&rdquo; one.",
      },
      {
        title: "Technology Care",
        text: "Specialized dusting of monitors and peripherals to remove city-center dust buildup. Monitors, laptop docks, keyboards (where member-permitted), printer housings, scanner glass, AV equipment in meeting rooms, projector lenses, video-conference camera housings, white-board surfaces, presentation screens, and phone-booth ventilation grilles dusted with anti-static microfibre cloths and HEPA-filtered attachments. Plugs, USB ports, and charging-station surfaces wiped and checked. We don&rsquo;t just brush the dust back into the air &mdash; we capture it, so it doesn&rsquo;t resettle on the next member&rsquo;s laptop within the hour. Tech-friendly, screen-safe chemistry only &mdash; no alcohol on anti-glare coatings, no ammonia on tinted glass, no abrasives on touchscreens.",
      },
      {
        title: "Floor Restoration",
        text: "Intensive vacuuming of carpets and mopping of hard floors to remove footfall grime and environmental pollutants. HEPA-filtered vacuums (capturing fine particulates rather than recirculating them) for carpeted hot-desk zones, breakout areas, and meeting rooms; low-moisture encapsulation for high-traffic routes that need to be back in service within the hour; hard floors (entrance lobbies, kitchen, washroom) scrubbed, mopped, and slip-tested with a slip-resistant sanitiser; entrance matting vacuumed and refreshed daily; spill response with bio-remediation products where needed. A restored floor projects premium care to your members and protects your flooring investment for the long run &mdash; especially important in listed buildings and converted warehouses where original features command a premium in your membership pricing.",
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean crew detailing co-working space skirting boards, door frames, window sills and internal glazing to a high-shine, sanitised standard in Scotland",
    title: "3. Often-Missed Technical Details",
    description:
      "The details members notice first &mdash; and the details most cleaners skip. Skirting boards, door frames, window sills, internal window cleaning, light-fixture dusting, and the chrome details that signal genuine care. These are the moments that turn a &ldquo;cleaned&rdquo; workspace into a &ldquo;speechlessly spotless&rdquo; one, and the details that protect your reputation in member exit surveys, online reviews, and NPS scores.",
    points: [
      {
        title: "Visible Skirting Boards",
        text: "Our cleaners meticulously wipe all skirting boards, door frames, and window sills as part of our standard service. Skirting boards, door frames, architraves, switch plates, handrails, fire-extinguisher brackets, notice-board trims, signage housings, ATM fascias (where present), printer-housing fronts, and entry-system keypads in foyers, hot-desk zones, meeting-room corridors, and lift lobbies damp-wiped with a pH-neutral sanitiser. Ceiling light fixtures, air-conditioning vents, and extractor grilles dusted with extendable HEPA-filtered attachments (we don&rsquo;t just brush the dust back into the air); cable trays, picture frames, and wayfinding totems wiped down. These are the details members notice first &mdash; and the details most cleaners skip.",
      },
      {
        title: "Internal Window Cleaning",
        text: "Ensuring your space is bright and welcoming by cleaning the inside of the windows. Internal glazing, glass partitions, meeting-room doors, phone-booth glass, lift-lobby doors, mirror walls in wellness rooms, and showcase cabinets all collect fingerprints, smudges, and airborne grime between visits. Glass wiped with an alcohol-free anti-static cleaner and buffed to a streak-free finish; frames and sills detailed; smudges and fingerprints removed from high-touch glass (especially meeting-room doors and entry-phone glass). A bright, naturally-lit workspace is the difference between a space members want to spend 10 hours a day in and one they want to leave at 4pm &mdash; natural light is a wellbeing signal, and clean glass is what makes natural light possible.",
      },
    ],
  },
];

export function CoWorkingSeoChecklist() {
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
            Our Total Workspace Maintenance &amp; Hygiene Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning for co-working spaces follows a rigorous, agency-approved
            checklist designed to keep your facility &ldquo;showcase&rdquo; ready 24/7. We deliver
            technical depth in every zone of your facility &mdash; from the shared breakout areas
            and kitchens zone (daytime porter service, sanitization of high-touch points, waste and
            recycling management) through the private desks and meeting rooms zone (deep surface
            polishing, technology care, floor restoration) to the often-missed technical details
            (visible skirting boards, internal window cleaning). Below is the scope we deliver as
            standard, regardless of workspace type, footprint, or membership model.
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
// FileText import verified present (avoiding the FileText bug).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Bespoke Contract",
    description:
      "Contact us for a free site survey. We will assess your occupancy levels and design a plan that combines daytime maintenance with evening deep cleans into a single fixed monthly contract. We walk your workspace with your community manager, identify your membership model (hot-desk, dedicated desk, private office, day pass, enterprise team), your member hours (typically 7am&ndash;7pm, with 24/7 access for premium tiers), your meeting-room booking system (internal vs. external hires, peak booking windows, 5-minute reset requirements), your kitchen usage (number of daily users, coffee-machine type, microwave count, fridge inventory), and any specific cleaning challenges (phone-booth odour, glass-partition fingerprints, carpet wear in high-traffic routes, whiteboard ghosting). We send an itemised proposal within 2 business days: crew size, day-porter hours, evening clean hours, visit frequency, scope of work, fixed monthly rate, RAMS, COSHH datasheets, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of uniformed, background-checked staff who represent your space with the highest standards. Your allocated crew lead is DBS-checked, uniformed, and trained in co-working-specific protocols &mdash; member etiquette (when to chat, when to be invisible, when to defer to the community team), hot-desk sanitisation, meeting-room resets (5-minute turnaround between back-to-back bookings), phone-booth refresh, shared-kitchen deep cleans, secure safe-key handling for out-of-hours access, and member-confidentiality (no photos, no member data, no social-media posts featuring your space). We brief the crew on your member hours, your booking system, your access preferences, your &ldquo;risky&rdquo; zones (kitchen peaks at lunch, washroom peaks mid-morning, meeting-room changeover at the top of each hour) and your community-team preferences &mdash; so cleaning happens around your operations, not through them. The same crew returns for every scheduled session, building real knowledge of your member etiquette, your signage protocol, and your event-day pressures.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Community",
    description:
      "Walk into a space that feels fresh and brand new every morning, backed by our MaundyClean satisfaction guarantee. You receive a signed cleaning log after every visit (operative signature, community-manager counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a fresh spill in the kitchen, a damaged fixture, a low-stock consumable, a member-feedback item handed to the community team, or a phone-booth air-freshener refill needed &mdash; before they undermine a member&rsquo;s NPS score, a community-team review, or an online rating. From &pound;15 per hour for a small boutique co-working space through to a fully bespoke retainer for a multi-site national portfolio. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function CoWorkingSeoBooking() {
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
            providing the responsive management support Scottish business owners demand. From free
            site survey and itemised proposal to first clean in under a week &mdash; no friction,
            no waiting, no surprises. Just a pristine community, every morning, and a compliance
            file that&rsquo;s audit-ready the day your member-experience manager or facilities
            director walks in.
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
              Request Your Bespoke Site Survey
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
// Card 4 description is a ReactNode containing TWO inline <Link>
// components (Upholstery Cleaning + Deep Oven Clean) - mirrors
// the warehouse-cleaning-seo.tsx card 4 ReactNode description
// pattern with typeof sol.description === "string" check.
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
    title: "Property Transitions &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty co-working space wing being deep cleaned for lease handover and new-member launch by Maundy Clean in Scotland",
    description:
      "Preparing a new office wing? Our End of Tenancy Cleaning ensures the space is spotless and attractive to future members. We work to the letting agent&rsquo;s inventory, restore the wing to its original condition, and come back free of charge if anything is flagged on the inspection &mdash; the most stress-free way to take on a new co-working floor, private-office suite, or expansion wing in a Scottish flexible workspace.",
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish co-working space before reopening day",
    description:
      "If you have recently upgraded your breakout areas, our After Builders Clean protocol is designed to remove heavy layers of builders&rsquo; dust. Fine dust left on hot-desks, meeting-room tables, or kitchen worktops undermines the member-trust signal the moment the wing re-opens &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage your members&rsquo; experience or your freshly-painted finishes.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: Sparkles,
    title: "Intensive Resets &middot; Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseSpring,
    imageAlt: "Deep house cleaning protocol applied to a Scottish co-working space twice-yearly to move furniture and reach unreachable areas with Maundy Clean",
    description:
      "Book a Deep House Cleaning protocol for your entire facility twice a year to move all furniture and reach the &ldquo;unreachable&rdquo; areas. Behind racking, under fixed desks, above kitchen units, behind reception counters, beneath breakout-area sofas, and inside storage cupboards &mdash; the bi-annual reset that keeps your space operating at &ldquo;Day One&rdquo; standard long after launch.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: HeartPulse,
    title: "Fabric &amp; Oven Care",
    href: "/services/upholstery-cleaning",
    image: IMG.leaseAntiviral,
    imageAlt: "Rejuvenating communal sofas in a Scottish co-working breakout area and deep cleaning staff-room oven appliances with Maundy Clean",
    description: (
      <>
        Rejuvenate communal sofas with our{" "}
        <Link
          href="/services/upholstery-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Upholstery Cleaning
        </Link>{" "}
        or bring staff room appliances back to a &ldquo;like new&rdquo; condition with a{" "}
        <Link
          href="/services/oven-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Deep Oven Clean
        </Link>
        . Breakout-area sofas, phone-booth seating, reception-area armchairs, and staff-room
        appliances all benefit from a periodic specialist reset &mdash; hot-water extraction, stain
        treatment, odour neutralisation, and Scotchgard protection on request. The detail that
        turns a &ldquo;cleaned&rdquo; workspace into a &ldquo;speechlessly spotless&rdquo; one.
      </>
    ),
    cta: "Explore upholstery cleaning",
  },
];

export function CoWorkingSeoInterlinking() {
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
            Our recurring cleaning keeps your community running, but we offer specialized
            &ldquo;resets&rdquo; for major property milestones: from property transitions (new
            wings, lease handovers, end-of-tenancy resets for departing members) through
            post-renovation dust clear-outs and intensive bi-annual deep cleans, to fabric and
            oven care for breakout-area sofas and staff-room appliances. The same trusted, vetted
            crew can step up whenever your workspace needs more than a standard visit, with the
            same child-safe, member-safe protocols in force.
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
// (Semantic H2: "Co-Working Space Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function CoWorkingSeoNearMe() {
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
              Local co-working space cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Co-Working Space Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;co-working space cleaning near me&rdquo; or &ldquo;flexible
              workspace cleaning near me&rdquo; in Scotland? Maundy Clean covers hot-desks,
              meeting rooms, shared kitchens, phone booths, and event spaces across the Central
              Belt, Highlands, Borders, and Islands &mdash; from Glasgow&rsquo;s Merchant City and
              the Tontine to Edinburgh&rsquo;s Codebase and Quartermile, Aberdeen&rsquo;s Energy
              Hub and ONE Tech Hub, and Dundee&rsquo;s Circus Hub and Waterfront. Same
              DBS-checked, uniformed crews, same dual-shift strategy (day porters + evening deep
              clean), same dedicated crew every visit &mdash; wherever your workspace happens to
              be. Find your local co-working cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean co-working space cleaning service coverage areas"
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
                <Link href="/services/co-working-space-cleaning-near-me">
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
                Find your local workspace crew
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
                    href={`/services/co-working-space-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> workspace</span>
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
            Our local co-working space cleaning crews operate across Glasgow&rsquo;s Merchant City
            and the Tontine, Edinburgh&rsquo;s Codebase and Quartermile, Aberdeen&rsquo;s Energy
            Hub and ONE Tech Hub, Dundee&rsquo;s Circus Hub and Waterfront, plus TechScot
            incubators, Plus X, Ethical Property Foundation hubs, and council-backed enterprise
            hubs across the Central Belt &mdash; from Inverness to Perth, Falkirk to Ayr. Whether
            you&rsquo;re searching for overnight post-member-hours deep cleaning in Glasgow,
            daytime day-porter and kitchen-check coverage in Edinburgh, bi-annual deep-clean reset
            in Aberdeen, or new-wing launch cleans anywhere in between, Maundy Clean assigns a
            vetted, PAYE-employed, DBS-checked crew that stays with you for the long run. Same
            crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Site Survey")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function CoWorkingSeoFinalCta() {
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
            Request Your Bespoke Site Survey
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted DBS-checked crews, the same dedicated team
            every visit, a dual-shift strategy (day porters for shared kitchens and breakout
            areas, evening deep cleans for desks, meeting rooms and floors), fixed monthly
            contracts, child-safe eco chemistry, secure safe-key system for out-of-hours access,
            signed cleaning logs, &pound;5m public liability as standard, and a 100% satisfaction
            guarantee &mdash; from &pound;15 per hour for a small boutique co-working space through
            to a fully bespoke multi-site national retainer. No pushy sales call, no waiting 24
            hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Site Survey
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
                View Our Managed Workspace Checklist
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
// 3 Q&As from the brief (insured for commercial spaces,
// provide own professional equipment, manage keys for evening cleaning)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for commercial spaces?",
    a: "Absolutely. MaundyClean is a fully insured professional cleaning company with years of experience serving both the residential and commercial sectors across Scotland. We carry &pound;5m public liability as standard, and every operative is DBS-checked, uniformed, and trained in commercial-grade protocols &mdash; including member-interaction etiquette, secure-key handling, and shared-facility sanitisation. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for co-working operator agreements, landlord insurance terms, and council-backed enterprise-hub compliance files. Our documentation is audit-ready for environmental health inspection, member-survey review, and quarterly community-management walk-through; we provide signed cleaning logs, RAMS, COSHH datasheets, training records, and vetting records (DBS) for your compliance file. We will not begin work until your community team and your compliance team have the documentation they need.",
  },
  {
    q: "Do you provide your own cleaning equipment?",
    a: "Yes. We supply all our own professional-grade equipment and supplies, which are included in your competitive quote. From HEPA-filtered vacuums for carpeted hot-desk zones and microfibre systems for glass partition streak-free polishing, to EN 14476 virucidal disinfectants for high-touch points in shared kitchens &mdash; every tool is COSHH-documented and maintained to manufacturer spec. HEPA-filtered vacuums with extension tubes for hot-desk zones, breakout areas, and high dusting; low-moisture encapsulation machines for high-traffic routes that need to be back in service within the hour; industrial carpet extractors (Karcher Puzzi, Truvox) for periodic deep cleaning of breakout-area carpets; microfibre systems (colour-coded red/green/yellow/blue) for desks, glass partitions, kitchen surfaces, and washroom zones to prevent cross-contamination; anti-static glass cleaner for meeting-room partitions and phone-booth glass; EN 14476 virucidal disinfectants for high-touch surfaces (60-second contact time); EN 1276 bactericides for washroom deep cleans; anti-bacterial spray for hot-desk sanitisation; biodegradable bin liners; eco-labelled floor cleaners; non-toxic, child-safe, surface-safe chemistry by default. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Do you manage keys for evening cleaning?",
    a: "Yes. We operate a secure safe key system, allowing our staff to deliver a full evening clean while you and your members are away. Every key is signed in/out, stored in a coded safe between visits, and access is restricted to vetted, DBS-checked operatives who have signed your site&rsquo;s confidentiality agreement. All out-of-hours visits are logged with arrival/departure times for full audit trail. We&rsquo;re trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys stored in a coded safe between visits, alarm codes encrypted and only released to your assigned crew lead, never labelled with your address. The most common windows are overnight post-member-hours deep cleaning (typically 7pm&ndash;10pm after the last member leaves, or 5am&ndash;7am before the first member arrives), with day-porter coverage (a discreet cleaner on-site during member hours) for shared kitchens, meeting-room resets, bin top-ups, spill response, and reception-area presentation. We can also split: light touch during member hours (day porter), full deep clean after hours (evening crew) &mdash; the dual-shift strategy that keeps your workspace &ldquo;showcase&rdquo; ready from 7am to 7pm and beyond.",
  },
];

export function CoWorkingSeoFaq() {
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
            Co-working space cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our co-working space cleaning clients ask most
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
                Request Your Bespoke Site Survey
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
                View Our Managed Workspace Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

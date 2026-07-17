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
// (matches event-venue + car-park + distribution-centre pool)
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
// Semantic H1: "Professional Salon & Spa Cleaning Services Glasgow & Edinburgh"
// ============================================================

export function SalonSpaSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean PVG-checked, vetted salon & spa cleaning crew resetting styling stations and treatment rooms in a Scottish hair salon before opening"
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
            Salon &amp; Spa Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Salon &amp; Spa Cleaning Services Glasgow &amp; Edinburgh
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Exquisite Hygiene, Technical Sanitisation, and the Maundy Tradition of Care for
            Scotland&rsquo;s Beauty Industry. Salons, spas, aesthetics clinics, barbers, and nail
            bars are &ldquo;close contact&rdquo; environments &mdash; the highest-touch, most
            hygiene-sensitive commercial premises in Scotland. MaundyClean brings vetted
            PVG-checked crews, antimicrobial fogging, mirror &amp; chrome restoration, treatment
            room disinfection, child-safe eco chemistry, and flexible out-of-hours scheduling to
            every hair salon, beauty spa, and aesthetics clinic we serve.
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
                Request Your 30-Second Instant Quote
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
// ONE inline <Link> to /services/recurring-home-cleaning for
// "Recurring Home Cleaning").
// ============================================================

export function SalonSpaSeoIntro() {
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
                alt="Maundy Clean salon & spa cleaning crew resetting styling stations, mirrors and treatment rooms in a Scottish hair salon between appointments"
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
                  &mdash; applied to your hair salon, beauty spa, aesthetics clinic, barber shop,
                  or nail bar.
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
              Salon &amp; spa cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Salons &amp; Spas
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the hair and beauty industry, your premises are a direct reflection of your
              brand&rsquo;s commitment to self-care and excellence. As &ldquo;close contact
              services,&rdquo; salons and spas in Glasgow and Edinburgh face unique challenges that
              require a cleaning regime far more rigorous than a standard office wipe-down. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we have
              adapted our premium cleaning protocols to ensure your salon is not only
              &ldquo;speechlessly spotless&rdquo; but a demonstrably safe environment for both your
              clients and your staff.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              While we are the recognised authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s most prestigious residences, we bring that same level of
              technical intimacy and meticulous attention to detail to the commercial beauty
              sector. We provide a professional and affordable alternative to impersonal national
              agencies, acting as a motivated partner that &ldquo;showcases&rdquo; your urban
              sanctuary to its absolute best.
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
// Section 2 - Why MaundyClean is the Trusted Partner for Scottish Salons
// (Semantic H2: "Why MaundyClean is the Trusted Partner for Scottish Salons")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / HeartPulse / Clock / Leaf
// ============================================================

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is built on trust. We ensure the same vetted professionals manage your account every time, allowing our staff to become experts in your specific layout, delicate equipment, and &ldquo;showcasing&rdquo; requirements. When your regular crew lead is on annual leave, we send a trained backup who has been briefed on your styling-station layout, your treatment-room protocols, your towel rotation, your back-of-house routines, and your opening hours &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking an active salon floor, never a &ldquo;new face every week&rdquo; on your CCTV &mdash; the same PVG-checked, uniformed crew, every visit, on schedule.",
  },
  {
    icon: HeartPulse,
    title: "Specialised Sanitisation &amp; Fogging",
    description:
      "We offer technical deep cleans and antimicrobial fogging and sanitisation services. This helps salon owners demonstrate they are doing everything possible to maintain a biologically safe environment for clients. EN 14476 virucidal disinfectants on high-touch surfaces (60-second contact time); EN 1276 bactericides for treatment room and washroom deep cleans; ULV fogging for end-of-day resets in treatment rooms; bioremediation products for spill response (massage oil, hair dye, peroxide, acetone, wax); colour-coded cloths (red for high-contamination, green for product-facing, yellow for washroom, blue for back-of-house) to prevent cross-contamination between styling, treatment, washroom, and laundry zones. Audit-ready documentation for environmental health inspection and licensing review.",
  },
  {
    icon: Clock,
    title: "Flexible Around Your Opening Hours",
    description:
      "We know your business is fast-paced. Our scheduled cleaning is designed to fit seamlessly around your unique operating hours, including early mornings, late evenings, and weekends, to minimise disruption. Pre-opening resets (typically 6&ndash;8am before the first client arrives) for styling stations and reception; between-appointment touch-ups for high-turnover nail bars and barbers; end-of-day deep cleans (typically 7&ndash;11pm after the last client leaves) for treatment rooms, washrooms, and back-of-house. We arrive in liveried vehicles, in uniform with photo I.D. and PPE, ready to work around your client bookings &mdash; not through them. The same crew returns for every scheduled session, building real knowledge of your appointment flow, your peak hours, and your quiet periods.",
  },
  {
    icon: Leaf,
    title: "Premium Eco-Friendly Standards",
    description:
      "We utilise only certified child-safe and pet-safe products. This ensures a fresh, non-toxic environment that is safe for your staff and clients while protecting the high-end finishes of your styling stations and treatment rooms. Non-toxic, surface-safe chemistry by default; pH-neutral glass and mirror cleaner for streak-free shine without harsh solvent fumes; stainless-steel polish for chrome taps and fixture buffing; salon-friendly detergent for towel laundry (no fabric softener on towels &mdash; it reduces absorbency); bioremediation products for spill response that break down organic matter at a molecular level rather than spreading it; COSHH-documented chemistry on file. Safe for clients with sensitivities, safe for staff working long shifts, safe for the premium finishes you&rsquo;ve invested in.",
  },
];

export function SalonSpaSeoWhy() {
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
                alt="Maundy Clean salon &amp; spa cleaning crew &mdash; PVG-checked, uniformed, trained in close-contact hygiene, treatment room disinfection, sharps handling, and chemical spill management"
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
                  Employed, vetted, PVG-checked, uniformed, and trained in salon-specific protocols
                  &mdash; close-contact hygiene, treatment room disinfection, sharps handling for
                  aesthetics clinics, blood spill procedures, chemical spill management for hair
                  dye and acetone, and towel-launderette operations. Same crew every visit &mdash;
                  never a rotating cast of agency strangers walking an active salon floor.
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
              Why MaundyClean is the Trusted Partner for Scottish Salons
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While many local cleaners offer a generic service, MaundyClean focuses on the topic
              of professional hygiene. We understand that in a spa or hair salon, reliability and
              first-class standards are not just &ldquo;nice to have&rdquo; &mdash; they are
              crucial for customer loyalty. We combine vetted PVG-checked uniformed teams, the same
              dedicated crew every visit, antimicrobial fogging and sanitisation, flexible
              out-of-hours scheduling around your opening hours, child-safe eco chemistry, and
              signed cleaning logs &mdash; so the salon your client walks into looks, feels, and
              operates safely every single appointment.
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
// Section 3 - Our Total Salon Maintenance & Hygiene Checklist
// (Semantic H2: "Our Total Salon Maintenance & Hygiene Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Styling Stations & Public Areas
//   2. Treatment Rooms & Spa Facilities
//   3. Often-Missed Technical Details
// Carries the id="checklist" anchor that the CTA buttons link to.
// All sub-points are plain strings (no ReactNode/inline Link needed
// per the brief - inline Links only appear in the Intro paragraph 2
// and in the Interlinking card descriptions).
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
    icon: Scissors,
    image: IMG.checklistFront,
    imageAlt: "Maundy Clean crew deep cleaning styling stations, mirrors and reception areas in a Scottish hair salon before opening",
    title: "1. Styling Stations &amp; Public Areas",
    description:
      "Styling stations and public areas are the front-of-house face of your salon &mdash; the surfaces your clients touch, photograph, and judge within the first thirty seconds of arriving. Hair spray residue, clippings, product spills, fingerprinted mirrors, and city-centre dust all accumulate between appointments. Our front-of-house protocol uses streak-free glass cleaner on every mirror and partition, pH-neutral sanitiser on every workstation and product shelf, HEPA-filtered vacuums for cut hair on flooring, and colour-coded cloths to prevent cross-contamination &mdash; delivered to a &ldquo;speechlessly spotless&rdquo; standard before your first client walks in.",
    points: [
      {
        title: "Glass &amp; Mirror Restoration",
        text: "Meticulous cleaning of all mirrors and glass partitions to a streak-free, crystal-clear shine as standard. Styling-station mirrors, partition screens, retail display glass, reception desk screens, and entrance door glass all wiped with an alcohol-free anti-static cleaner and buffed to a streak-free finish; frames and sills detailed; fingerprints, hair spray residue, and product smudges removed from high-touch glass (especially styling-station mirrors and reception screens). A spotless mirror is the difference between a salon clients photograph and one they avoid.",
      },
      {
        title: "Surface Sanitisation",
        text: "Deep cleaning of workstations, product shelves, and reception desks to remove hair spray residue and city-centre dust. Styling stations, trolleys, hydraulic chair bases and pedals (where hair collects), product shelves (fronted forward, labels aligned), reception desk, card terminal (high-touch), magazine rack, and seating all wiped with a pH-neutral sanitiser; hair clippings swept from corners and underneath stations; product spills (hair dye, peroxide, styling product) cleaned immediately with the correct solvent. A sanitised workstation projects premium care to your client and protects your styling-team&rsquo;s health.",
      },
      {
        title: "Floor Care",
        text: "Intensive vacuuming and mopping of high-traffic styling areas to ensure hair-free, slip-resistant surfaces. HEPA-filtered vacuums lift cut hair from hard flooring and from carpeted waiting areas (where hair drifts on air currents and settles hours after the last cut); hard flooring mopped edge-to-edge with a slip-resistant sanitiser; entrance matting shaken and refreshed; thresholds and transitions detailed; spill response for hair dye, peroxide, and styling product. A hair-free, slip-resistant floor protects your clients from falls and your styling team from litigation.",
      },
    ],
  },
  {
    icon: Sparkles,
    image: IMG.checklistCounter,
    imageAlt: "Maundy Clean crew sanitising treatment couches, chrome fixtures and internal glass in a Scottish beauty spa between treatments",
    title: "2. Treatment Rooms &amp; Spa Facilities",
    description:
      "Treatment rooms and spa facilities are the most hygiene-sensitive zones in any salon or spa &mdash; the surfaces where &ldquo;close contact&rdquo; literally means skin-to-skin. Treatment couches, massage tables, ceramic items, chrome taps, and internal glass all need hospital-grade disinfection between every client, not just a daily wipe-down. Our treatment-room protocol uses EN 14476 virucidal disinfectant on every couch and high-touch surface, EN 1276 bactericide for ceramic sinks and taps, professional chrome buffing, and meticulous internal glass care &mdash; delivered to a uniform, audit-grade standard across every treatment room, every visit.",
    points: [
      {
        title: "Deep Sanitisation",
        text: "Disinfecting all ceramic items, massage tables, and sinks to the highest industry hygiene standards. Treatment couches (including headrest, armrests, and underneath) wiped with EN 14476 virucidal disinfectant with a verified 60-second contact time; fresh couch roll or laundry fitted between every client; trolleys wiped and restocked (cotton wool, spatulas, tweezers, mirrors); hot towel cabinet cleaned and refilled; magnifying lamp wiped; steamer descaled; ceramic sinks descaled and disinfected with EN 1276 bactericide; massage tables sanitised between every treatment; wax pots and surrounds deep cleaned; sharps containers (for aesthetics clinics) checked and logged. The standard your environmental health officer expects &mdash; the standard your clients demand.",
      },
      {
        title: "Chrome &amp; Fixture Buffing",
        text: "Professional buffing of all chrome taps and fixtures to a high shine as part of our &ldquo;showcase&rdquo; standards. Chrome taps, towel rails, soap dispensers, door furniture, magnifying-lamp stems, styling-station chrome, treatment-couch chrome, and any stainless-steel surface buffed with a streak-free stainless-steel cleaner to a high shine; water spots and limescale removed (a major issue in Scottish hard water areas); fingerprints and product residue removed from high-touch chrome. Chrome that gleams signals genuine care &mdash; chrome that&rsquo;s dull or spotted signals a salon that&rsquo;s cutting corners.",
      },
      {
        title: "Inside Window Care",
        text: "Meticulous cleaning of internal glass to maximise natural light and maintain a bright, welcoming atmosphere for relaxation. Internal partition glass, treatment-room screens, salon-front glazing (interior side), mirror walls, display cabinets, and reception screens all wiped with an alcohol-free anti-static cleaner and buffed to a streak-free finish; frames and sills detailed; fingerprints, product smudges, and condensation marks removed. A bright, naturally-lit treatment room is essential for relaxation therapies and aesthetics consultations &mdash; internal glass care is the detail that protects the calm atmosphere your clients pay for.",
      },
    ],
  },
  {
    icon: Building2,
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean crew detailing salon washroom chrome, skirting boards, towel cupboard and back-of-house areas to a high-shine, sanitised standard in Scotland",
    title: "3. Often-Missed Technical Details",
    description:
      "The details clients notice first &mdash; and the details most cleaners skip. Visible skirting boards and sills, washroom and kitchen hygiene, towel-cupboard organisation, and back-of-house touchpoints are the moments that turn a &ldquo;cleaned&rdquo; salon into a &ldquo;speechlessly spotless&rdquo; one, and the details that protect your reputation in client reviews, environmental health inspections, and Care Inspectorate audits (for aesthetics clinics and registered treatment providers).",
    points: [
      {
        title: "Visible Skirting Boards &amp; Sills",
        text: "Our cleaners meticulously wipe all skirting boards, door frames, and window sills in communal areas. Skirting boards, door frames, architraves, switch plates, picture rails, window sills, fire-extinguisher brackets, notice-board trims, signage housings, retail-shelf uprights, and styling-station bases in foyers, styling areas, treatment corridors, and lift lobbies damp-wiped with a pH-neutral sanitiser. Ceiling light fixtures, air-conditioning vents, and extractor grilles dusted with extendable HEPA-filtered attachments (we don&rsquo;t just brush the dust back into the air); cable trays, picture frames, and wayfinding totems wiped down. These are the details clients notice first &mdash; and the details most cleaners skip.",
      },
      {
        title: "Washroom &amp; Kitchen Hygiene",
        text: "Full sanitisation of staff rooms and guest restrooms, ensuring they reflect the same high standards as your main floor. Toilets descaled, disinfected with EN 1276-certified bactericide, and polished; urinals descaled and deodorised; tiles and grout scrubbed; partition screens disinfected; mirrors squeegeed; floors mopped edge-to-edge with a slip-resistant sanitiser. Chrome taps, soap dispensers, towel dispensers, hand-dryer nozzles, door furniture, and cubicle locks buffed with a streak-free stainless-steel cleaner. Sanitary bins checked and emptied; consumables (toilet paper, hand soap, paper towel, sanitiser) restocked every visit. Staff kitchens and back-of-house laundry zones (washing machine exteriors, dryer lint cleared, microwave, kettle, fridge exterior, worktops) sanitised to the same standard as the front-of-house &mdash; your team deserves the same care as your clients.",
      },
    ],
  },
];

export function SalonSpaSeoChecklist() {
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
            Our Total Salon Maintenance &amp; Hygiene Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning for salons follows a rigorous, agency approved checklist
            designed to address the specific hygiene risks of the beauty industry. We deliver
            technical depth in every zone of your facility &mdash; from the styling stations and
            public areas zone (glass and mirror restoration, surface sanitisation, floor care)
            through the treatment rooms and spa facilities zone (deep sanitisation, chrome and
            fixture buffing, inside window care) to the often-missed technical details (visible
            skirting boards and sills, washroom and kitchen hygiene). Below is the scope we deliver
            as standard, regardless of salon type, footprint, or appointment schedule.
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
    title: "Instant Quote &amp; Site Survey",
    description:
      "Contact us for a free site survey. We provide a 30-second instant quote for standard salon layouts or a bespoke proposal for large-scale spas. We walk your premises with your salon manager, identify your salon type (hair salon, beauty spa, aesthetics clinic, barber shop, nail bar), capacity (2 to 25 styling stations or treatment rooms), opening hours (early morning, late evening, 7 days a week), turnaround windows (between-appointment touch-ups, end-of-day deep cleans, weekly resets), and any specific cleaning challenges (sharps handling for aesthetics clinics, blood spill procedures, chemical spill management for hair dye and acetone, premium finishes, listed-building constraints). We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, RAMS, COSHH datasheets, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians with in-depth knowledge of &ldquo;close contact&rdquo; hygiene protocols. Your allocated crew lead is PVG-checked (essential for salons with public access and for aesthetics clinics subject to Care Inspectorate oversight), uniformed, and trained in salon-specific protocols &mdash; treatment-room disinfection, sharps handling for aesthetics clinics, blood spill procedures, chemical spill management for hair dye and acetone, towel-launderette operations, and colour-coded cloth systems to prevent cross-contamination. We brief the crew on your salon layout, your appointment calendar, your opening hours, your &ldquo;risky&rdquo; zones (treatment rooms, waxing areas, washrooms, towel cupboard, sharps storage) and your premium finishes &mdash; so cleaning happens around your client bookings, not through them. The same crew returns for every scheduled session, building real knowledge of your appointment flow, your peak hours, and your quiet periods. We arrive in liveried vehicles, in uniform with photo I.D. and PPE, with HEPA-filtered vacuums for cut hair, EN 14476 virucidal disinfectants for treatment rooms, EN 1276 bactericides for washroom deep cleans, professional chrome polish, streak-free glass cleaner, and COSHH-compliant, child-safe, surface-safe chemistry.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Venue",
    description:
      "Experience a space that looks, smells, and feels fresh every single morning, backed by our MaundyClean satisfaction guarantee. You receive a signed cleaning log after every visit (operative signature, salon-manager counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a low-stock consumable, a damaged fixture, a blocked drain, a low towel supply, or a sharps-container nearing capacity &mdash; before they undermine an appointment, an environmental health inspection, or a client review. From &pound;16 per hour for a small hair salon through to a fully bespoke retainer for a multi-site spa group. We hold &pound;5m public liability as standard (increased for aesthetics clinics) and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function SalonSpaSeoBooking() {
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
            We have optimised our booking experience to be uncomplicated and straightforward,
            addressing the fast-paced needs of the Scottish beauty scene. From 30-second instant
            quote and free site survey to first clean in under a week &mdash; no friction, no
            waiting, no surprises. Just a pristine salon, every morning, every appointment, and a
            compliance file that&rsquo;s audit-ready the day your environmental health officer or
            Care Inspectorate inspector walks in.
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
              Request Your 30-Second Instant Quote
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
// Brief drops the interlinking prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services.
// All 4 card descriptions are ReactNode values (containing an
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
    title: "New Salon Launch &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseSpring,
    imageAlt: "Pre-launch deep clean of a new Scottish salon premises combined with End of Tenancy Cleaning protocol before opening day",
    description: (
      <>
        Opening a new location? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        protocol ensures your premises are front-line ready for your grand opening. Every surface
        detailed top-to-bottom &mdash; the same trusted, vetted crew, the same child-safe eco
        chemistry, the same signed cleaning log after every visit &mdash; so your opening day
        photographs, your launch event, and your first client appointments all start from a
        &ldquo;speechlessly spotless&rdquo; baseline.
      </>
    ),
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-shopfitting cleanup removing fine construction dust from a refurbished Scottish salon before reopening day",
    description: (
      <>
        If your salon has had home improvements or shopfitting, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is designed to remove heavy layers of builders&rsquo; dust. Fine dust left on styling
        stations, mirrors, treatment-room couches, or retail shelves undermines the customer-trust
        signal the moment the salon re-opens &mdash; we vacuum, damp-wipe, and protect every
        surface before the dust has a chance to damage your clients&rsquo; experience or your
        freshly-painted finishes.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: Sparkles,
    title: "Intensive Maintenance &middot; Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Twice-yearly intensive deep clean of a Scottish salon facility combined with Deep House Cleaning protocol to reach the unreachable areas",
    description: (
      <>
        Book a{" "}
        <Link
          href="/services/deep-house-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Deep House Cleaning
        </Link>{" "}
        protocol for your entire facility twice a year to move all equipment and reach the
        &ldquo;unreachable&rdquo; areas. Behind styling stations, beneath treatment couches, inside
        towel cupboards, above suspended ceilings, behind retail displays, and into every corner
        your daily clean can&rsquo;t reach &mdash; the periodic reset that protects your finishes,
        your air quality, and your compliance file.
      </>
    ),
    cta: "Explore deep house cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets &middot; Antiviral Sanitisation",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt: "Antiviral sanitisation and ULV fogging treatment in a Scottish aesthetics clinic with Maundy Clean using certified virucidal cleaners",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        and deep-disinfection treatments using certified virucidal cleaners. ULV fogging for
        treatment rooms and high-traffic areas; EN 14476 virucidal disinfectants with a verified
        60-second contact time; EN 1276 bactericides for washroom deep cleans; biohazard protocols
        for blood spills and sharps incidents. The specialist standard we deliver to Scottish
        aesthetics clinics, dental surgeries, and care environments &mdash; applied to your salon,
        spa, or clinic whenever you need to demonstrate a biologically safe environment to clients,
        staff, and regulators.
      </>
    ),
    cta: "Explore antiviral sanitisation",
  },
];

export function SalonSpaSeoInterlinking() {
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
            Beyond the daily clean &middot; business milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Business Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our salon cleaning services are the heartbeat of your property&rsquo;s hygiene, but we
            offer specialised &ldquo;resets&rdquo; for major milestones: from new salon launches
            that combine salon cleaning with end of tenancy cleaning for front-line-ready premises,
            through post-renovation dust clear-outs and intensive twice-yearly deep cleans, to
            hygiene resets with antiviral sanitisation and ULV fogging. The same trusted, vetted
            crew can step up whenever your salon needs more than a standard visit, with the same
            child-safe, surface-safe protocols in force.
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
// (Semantic H2: "Salon & Spa Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function SalonSpaSeoNearMe() {
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
              Local salon &amp; spa cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Salon &amp; Spa Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;salon cleaning near me&rdquo; or &ldquo;spa cleaning near
              me&rdquo; in Scotland? Maundy Clean covers hair salons, beauty spas, aesthetics
              clinics, barber shops, and nail bars across the Central Belt, Highlands, Borders, and
              Islands &mdash; from Glasgow&rsquo;s Merchant City and Stockbridge to Edinburgh&rsquo;s
              New Town and West End, Aberdeen&rsquo;s Rosemount and Dundee&rsquo;s City Centre,
              plus independent salons in Stirling, Perth, Inverness, and Ayr. Same PVG-checked,
              uniformed crews, same dedicated crew every visit, same flexible out-of-hours
              scheduling &mdash; wherever your salon happens to be. Find your local salon cleaning
              specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean salon &amp; spa cleaning service coverage areas"
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
                <Link href="/services/salon-spa-cleaning-near-me#locations">
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
                Find your local salon crew
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
                    href={`/services/salon-spa-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> salon</span>
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
            Our local salon cleaning crews operate across Glasgow&rsquo;s Merchant City, Byres
            Road and Shawlands (independent hair salons and aesthetics clinics), Edinburgh&rsquo;s
            Stockbridge, New Town and Morningside (beauty spas and aesthetics clinics), Aberdeen&rsquo;s
            Rosemount and West End (hair salons and barber shops), Dundee&rsquo;s City Centre and
            West End (nail bars and beauty spas), and Scottish salon districts across the Central
            Belt &mdash; from Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re searching
            for early-morning pre-opening resets in Glasgow, evening end-of-day deep cleans in
            Edinburgh, weekend turnover support in Aberdeen, or aesthetics-clinic disinfection
            anywhere in between, Maundy Clean assigns a vetted, PAYE-employed, PVG-checked crew
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
// (Semantic H2: "Request Your 30-Second Instant Quote")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function SalonSpaSeoFinalCta() {
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
            Ready to book your salon survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your 30-Second Instant Quote
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted PVG-checked crews, the same dedicated team every
            visit, antimicrobial fogging and sanitisation, mirror &amp; chrome restoration,
            treatment-room disinfection, flexible out-of-hours scheduling around your opening
            hours, child-safe eco chemistry, signed cleaning logs, &pound;5m public liability as
            standard, and a 100% satisfaction guarantee &mdash; from &pound;16 per hour for a small
            hair salon through to a fully bespoke multi-site spa retainer. No pushy sales call, no
            waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your 30-Second Instant Quote
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
// 3 Q&As from the brief (insured for salon environments,
// provide own equipment, work out-of-hours)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for salon environments?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive knowledge of commercial insurance requirements for &ldquo;close contact&rdquo; businesses. We carry &pound;5m public liability as standard (increased for aesthetics clinics subject to Care Inspectorate oversight), and every operative is PVG-checked, uniformed, and trained in salon-specific protocols &mdash; treatment-room disinfection, sharps handling for aesthetics clinics, blood spill procedures, chemical spill management for hair dye and acetone, and towel-launderette operations. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for salon lease agreements, aesthetics-clinic insurance terms, landlord insurance, and registered-treatment-provider compliance. Our documentation is audit-ready for environmental health inspection, Care Inspectorate review, and licensing review; we provide signed cleaning logs, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file. We will not begin work until your salon manager and your compliance team have the documentation they need.",
  },
  {
    q: "Do you provide your own cleaning equipment?",
    a: "Yes. We supply all our own professional-grade equipment and non-toxic sanitising solutions, which are included in your competitive quote. From HEPA-filtered vacuums for cut hair and industrial carpet extractors for waiting-area carpets, to EN 14476 virucidal disinfectants for treatment rooms and professional chrome polish for fixture buffing &mdash; every tool is COSHH-documented and maintained to manufacturer spec. HEPA-filtered vacuums with extension tubes for cut hair on hard flooring and carpet; industrial carpet extractors (Karcher Puzzi, Truvox) for waiting-area and treatment-room carpet restoration; ULV foggers for end-of-day antimicrobial resets in treatment rooms; EN 14476 virucidal disinfectants for high-touch surfaces (60-second contact time); EN 1276 bactericides for washroom and treatment-room deep cleans; bioremediation products for spill response (massage oil, hair dye, peroxide, acetone, wax); professional chrome polish for taps, towel rails, and styling-station chrome; streak-free glass cleaner for mirrors and partitions; colour-coded cloths (red for high-contamination, green for product-facing, yellow for washroom, blue for back-of-house); biohazard kits for sharps and blood spills (essential for aesthetics clinics); HSE-compliant chemicals with COSHH datasheets on file; PPE; and non-toxic, child-safe, surface-safe chemistry by default. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes, couch roll) or we can manage consumable restocking for an additional monthly fee.",
  },
  {
    q: "Can you work out-of-hours?",
    a: "Yes. We offer flexible appointments across 7 days a week, including through the night or early mornings, to ensure we never interfere with your client bookings. The most common windows are pre-opening resets (typically 6&ndash;8am before the first client arrives) for styling stations, mirrors and reception; between-appointment touch-ups for high-turnover nail bars and barbers during the day; and end-of-day deep cleans (typically 7&ndash;11pm after the last client leaves) for treatment rooms, washrooms, and back-of-house. We&rsquo;re trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys stored in a coded safe between visits, alarm codes encrypted and only released to your assigned crew lead, never labelled with your address. We can also split: light touch during the day (between-appointment touch-ups on high-traffic welfare areas), full deep clean after hours. From &pound;16 per hour for a small hair salon through to a fully bespoke retainer for a multi-site spa group. We hold &pound;5m public liability as standard (increased for aesthetics clinics) and can name your business on our policy as additional insured.",
  },
];

export function SalonSpaSeoFaq() {
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
            Salon &amp; spa cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our salon &amp; spa cleaning clients ask most often.
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
                Request Your 30-Second Instant Quote
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

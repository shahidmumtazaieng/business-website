"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Shield,
  ShieldCheck,
  Leaf,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Wind,
  SprayCan,
  Crown,
  Users,
  Home,
  KeyRound,
  Hammer,
  UserCheck,
  CalendarCheck,
  Award,
  Gem,
  ShoppingBag,
  Store,
  Tag,
  Phone,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Microscope,
  FlaskConical,
  Biohazard,
  AirVent,
  Lightbulb,
  Boxes,
  DoorOpen,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-22%20at%206.00.47%20PM.jpeg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-22%20at%206.00.47%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_h014vsh014vsh014.png",
  checklistHighTouch:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistFogging:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  checklistDetails:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseTrauma:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
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
// Semantic H1: "Professional Disinfection & Antiviral Sanitisation Services Scotland"
// ============================================================

export function DisinfectionSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean disinfection technician in full PPE operating an electrostatic fogging machine in a Scottish commercial facility"
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
            Disinfection &amp; Antiviral Sanitisation &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Disinfection &amp; Antiviral Sanitisation Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Technical Pathogen Control, Ongoing Microbiological Protection, and the Maundy Tradition of
            Care. In high-traffic environments across Glasgow, Edinburgh, and the Central Belt, standard
            surface cleaning is often the first line of defense, but it is rarely enough to ensure total
            safety. Germs and bacteria linger on doorknobs, light switches, keyboards, and shared
            equipment, creating hidden risks for cross-contamination. At MaundyClean, we provide a
            premium disinfection service that goes &ldquo;beyond clean&rdquo; to ensure your workplace or
            facility is fully sanitised and safe for your staff and visitors.
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
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> EN 14476 Virucidal
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe Supplies
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> 4-Hour Outbreak Callout
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
// Split-layout with aspect-[4/3] image on the left and the
// verbatim intro paragraphs on the right. Paragraph 2 contains
// TWO inline <Link>s: /services/recurring-home-cleaning for
// "Recurring Home Cleaning" and /services/deep-house-cleaning
// for "Deep House Cleaning". The brief gives three intro
// paragraphs (p1 + p2-with-two-links + p3).
// ============================================================

export function DisinfectionSeoIntro() {
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
                alt="Maundy Clean disinfection specialist using electrostatic fogging equipment to sanitise a Scottish commercial office"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Beyond Clean &mdash; Biologically Safe
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy and &ldquo;same-staff&rdquo; consistency we bring
                  to Scotland&rsquo;s finest residences &mdash; applied to your commercial facility&rsquo;s
                  pathogen-control regime.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Efficacy</div>
                  <div className="text-xs font-bold text-[var(--ink)]">99.99%</div>
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
              Disinfection &amp; antiviral sanitisation &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Pathogen Control
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While we are the recognised authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              and{" "}
              <Link
                href="/services/deep-house-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Deep House Cleaning
              </Link>{" "}
              for Scotland&rsquo;s most prestigious residences, we bring that same level of technical
              intimacy and &ldquo;same-staff&rdquo; consistency to specialised hygiene services. We act
              as your strategic partner, helping Scottish businesses meet required health and safety
              standards with a multi-step disinfection process that provides true peace of mind.
            </p>

            {/* Compact trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7"
            >
              {[
                { icon: UserCheck, label: "Same crew every visit" },
                { icon: ShieldCheck, label: "EN 14476 virucidal" },
                { icon: Leaf, label: "Non-toxic & safe" },
                { icon: Clock, label: "30-day protection" },
              ].map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 bg-white rounded-lg p-2.5 border border-[var(--border)]"
                  >
                    <Icon className="w-4 h-4 text-[var(--brand)] shrink-0" />
                    <span className="text-xs font-semibold text-[var(--ink)] leading-tight">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why MaundyClean is Scotland's Authority in Pathogen Control
// (Semantic H2: "Why MaundyClean is Scotland's Authority in Pathogen Control")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck (same trusted team) /
// ShieldCheck (99.99% efficacy & 30-day protection) /
// FileText (total regulatory compliance) /
// Leaf (eco-friendly & safe for occupants).
// ALL 4 pillar bodies typed as ReactNode for codebase consistency.
// ============================================================

type TrustCard = {
  icon: typeof ShieldCheck;
  title: string;
  description: ReactNode;
};

const TRUST_CARDS: TrustCard[] = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is built on familiarity. We ensure the same vetted professionals manage your facility, allowing our staff to build a deep understanding of your specific high-traffic &ldquo;hotspots&rdquo; and sensitive equipment. The same PAYE-employed, PVG-checked, uniformed disinfection technicians return every visit &mdash; learning your floor plan&rsquo;s touchpoint map (which door handles get touched most, which lift buttons see the heaviest traffic at which hours, which shared keyboards and meeting-room controls are the cross-contamination vectors), your equipment register (electrostatic sprayer vs ULV fogger vs UV-C cabinet by zone), your occupancy constraints (in-hours presence, after-hours unsupervised, key-safes and alarm codes), and your inspection regime (EHO environmental health, insurer audit, HSE biological agents review, Care Inspectorate). When your regular crew is on annual leave, we send a trained backup who has been briefed on your facility &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking a Scottish commercial facility with fogging equipment they do not understand.",
  },
  {
    icon: ShieldCheck,
    title: "99.99% Efficacy & 30-Day Protection",
    description:
      "Our effective service ensures your workplace and equipment remain 99.99% virus and bacteria-free. We utilize advanced treatments that can offer ongoing protection from the transmission of bacteria for up to 30 days following the initial application. The chemistry is certified to EN 14476 (virucidal &mdash; proven effective against enveloped viruses including influenza, rhinovirus, SARS-CoV-2, and norovirus), EN 1276 (bactericidal &mdash; including MRSA, E. coli, Salmonella, and Listeria), and EN 1650 (fungicidal). The 30-day residual protection comes from a antimicrobial surface coating that bonds to treated surfaces and continues to kill pathogens on contact between disinfection visits &mdash; ideal for high-risk settings like schools, nurseries, gyms, dental practices, and food-prep areas where the gap between visits is the vulnerability window. ATP swab verification available on request &mdash; we prove the result, we don&rsquo;t just claim it.",
  },
  {
    icon: FileText,
    title: "Total Regulatory Compliance",
    description:
      "We support businesses throughout Scotland to uphold their environmental and health and safety commitments. Our teams are trained in robust decontamination protocols, providing full RAMS (Risk Assessments and Method Statements) for every site survey. The RAMS covers: occupancy type (office, school, nursery, gym, dental practice, food-processing facility, care home), zone classification (general, high-touch, food-prep, clinical, childcare), chemistry register (EN 14476 virucidal, EN 1276 bactericidal, EN 1650 fungicidal, HSE-approved, food-safe, REACH-compliant), application method (electrostatic spray, ULV fogging, UV-C cabinet, touchpoint wipe-down), contact time and re-entry clearance, PPE protocol (Tyvek suit, FFP3 respirator, nitrile gloves, eye protection), and waste-water disposal. We are SafeContractor-approved, hold full employer&rsquo;s liability and &pound;5m public liability, can name your business on our policy as additional insured, and provide audit-ready documentation &mdash; COSHH datasheets, training records, Treatment Certificates, and HSE Biological Agents Code of Practice alignment &mdash; for your compliance file.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe for Occupants",
    description:
      "Your well-being is our priority. We utilize only certified child-safe and pet-safe products. This ensures a fresh, non-toxic environment that is safe for immediate use in childcare, healthcare, and office settings without the harsh chemical odors common with industrial agencies. The cardinal rule of our disinfection service: nothing that off-gasses into an occupied space. No chlorine-based bleach (off-gasses for hours, triggers asthma, unacceptable in childcare and healthcare). No quaternary-ammonium compounds at high concentration (residue risk on food-contact surfaces). No VOC-heavy aerosols. We use a hydrogen-peroxide-based virucide (decomposes to water and oxygen, no residue), a plant-derived biocidal surfactant for pre-cleaning, and an antimicrobial surface coating that is EPA-approved for use in occupied buildings. Every chemistry is biodegradable, food-safe (no rinse required on food-contact surfaces), child-safe, pet-safe, and safe for occupants to re-enter after the 8-minute dry time. The finishes you&rsquo;ve invested in are protected &mdash; and the staff who return the morning after are not walking into chemical fumes.",
  },
];

export function DisinfectionSeoWhy() {
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
                alt="Maundy Clean disinfection crew &mdash; uniformed, PPE-trained, and certified for EN 14476 virucidal fogging in Scottish commercial facilities"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Reactive vs Preventive &mdash; We Do Both
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Many commercial contractors rely on reactive, one-off treatments. MaundyClean focuses
                  on building high-trust, ongoing relationships through vocational excellence and
                  technical depth.
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
              Why MaundyClean is Scotland&rsquo;s Authority in Pathogen Control
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many commercial contractors rely on reactive, one-off treatments. MaundyClean focuses on
              building high-trust, ongoing relationships through vocational excellence and technical
              depth &mdash; combining vetted uniformed teams, the same dedicated crew every visit,
              99.99% virucidal efficacy with 30-day residual protection, full RAMS compliance, and
              child-safe eco-friendly chemistry as standard.
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
// Section 3 - Our Total Disinfection & Sanitisation Checklist
// (Semantic H2: "Our Total Disinfection & Sanitisation Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Targeted High-Touch Disinfection (3 items)
//   2. Advanced Environmental Sanitisation (3 items)
//   3. Often-Missed Technical Details (2 items)
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO intro paragraphs on the 3 checklist cards
// (just H3 title + sub-points).
// ============================================================

type ChecklistPoint = {
  icon: typeof Sparkles;
  title: string;
  text: string;
};

const CHECKLIST_ITEMS: {
  icon: typeof ShieldCheck;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  points: ChecklistPoint[];
}[] = [
  {
    icon: HeartPulse,
    image: IMG.checklistHighTouch,
    imageAlt:
      "Maundy Clean disinfection specialist hand-wiping high-touch doorknobs, lift buttons, and light switches with EN 14476 virucidal wipes in a Scottish commercial office",
    title: "1. Targeted High-Touch Disinfection",
    description:
      "The technical core of every disinfection visit. High-touch surfaces are the primary cross-contamination vectors in any commercial facility &mdash; doorknobs, handrails, lift buttons, light switches, shared keyboards, and payment terminals see hundreds of touches per day and accumulate dangerous pathogen loads within hours. We follow a targeted protocol: identify the touchpoint map, pre-clean visible soil, then apply EN 14476 virucidal chemistry with the verified 60-second contact time.",
    points: [
      {
        icon: CheckCircle2,
        title: "Thorough Wipe Downs",
        text: "Meticulous cleaning of all doorknobs, handrails, lift buttons, and light switches. Every high-touch surface is pre-wiped with a general cleaner to remove organic soil (which deactivates most disinfectants on contact), then treated with EN 14476 virucidal wipes with a verified 60-second contact time. Door handles and push plates on both sides of every door. Lift call buttons and in-car floor buttons. Stair handrails the full length. Light switches and socket switches. Reception desk counters and pen holders. The touchpoint map is documented and replicated every visit.",
      },
      {
        icon: Microscope,
        title: "Workstation Sanitisation",
        text: "Deep cleaning of desks, phones, and peripherals to reduce the risk of cross-contamination in shared offices. Desk surfaces wiped with EN 1276 bactericidal chemistry. Phone handsets and headsets disinfected (the highest pathogen load on any desk &mdash; typically 25,000 CFU per square inch). Keyboards and mice damp-wiped with alint-free cloth and alcohol-free virucide (alcohol damages keyboard coatings). Monitor frames and stands wiped. Chair armrests disinfected. Hot-desk stations get a full turnover disinfection between users. Shared meeting-room controllers, presentation clickers, and video-conference touch panels disinfected after every booking.",
      },
      {
        icon: Wrench,
        title: "Equipment Decontamination",
        text: "Specialized cleaning for factory production lines, supermarket trolleys, and shared electronic terminals. Factory production-line touchpoints (control panels, conveyor handrails, tool handles) disinfected with food-safe EN 1276 chemistry. Supermarket trolley handles and basket grips disinfected (the single highest-cross-contamination surface in retail &mdash; we offer a trolley-park fogging station). Shared electronic terminals (self-checkout touchscreens, card readers, PIN pads) wiped with a non-alcohol virucide that does not damage the anti-glare coating. Gym equipment grips and weight-machine adjustment pins disinfected. The equipment-specific touchpoints that generic cleaners miss.",
      },
    ],
  },
  {
    icon: SprayCan,
    image: IMG.checklistFogging,
    imageAlt:
      "Maundy Clean disinfection technician operating an electrostatic fogging machine to achieve full-room virucidal coverage in a Scottish commercial reception area",
    title: "2. Advanced Environmental Sanitisation",
    description:
      "Beyond the touchpoints you can see, pathogens accumulate on surfaces you can&rsquo;t reach with a cloth &mdash; ceiling voids, under-desk cable runs, behind equipment, inside air-conditioning grilles. Our environmental sanitisation protocol uses electrostatic and fogging technology to achieve full-room coverage, then addresses the floor and washroom zones that standard cleaning leaves behind.",
    points: [
      {
        icon: Wind,
        title: "Disinfectant Spraying & Fogging",
        text: "Utilizing electrostatic fogging technology to reach the &ldquo;unreachable&rdquo; areas and provide full-room coverage. Electrostatic spraying charges the disinfectant droplets so they wrap around surfaces &mdash; front, back, underside, and crevices &mdash; treating a 200m² office in 25 minutes. ULV (ultra-low-volume) fogging produces a fine mist that penetrates every surface in a sealed room &mdash; the method of choice for outbreak response, since it treats areas spraying can&rsquo;t reach (under desks, behind equipment, into ceiling voids). Room sealed for 60-minute contact time, then aired for 30 minutes before re-entry. Chemistry is HSE-approved, food-safe, and dries residue-free in 8 minutes.",
      },
      {
        icon: Droplets,
        title: "Floor & Carpet Restoration",
        text: "Using industrial-grade equipment to remove pathogens from high-traffic floor surfaces that standard recurring home cleaning might miss. Hard floors machine-scrubbed with EN 1276 bactericidal solution (the floor is the largest surface in any room and accumulates pathogens from every shoe). Carpeted zones hot-water-extracted with a sanitising pre-spray (carpet traps pathogens in the fibre matrix &mdash; vacuuming alone does not remove them). Entrance matting deep-cleaned (the first 3 metres of matting captures 80% of foot-borne contamination). Floor drains treated with enzymatic biocide. The floor work that separates a &ldquo;spray-and-go&rdquo; from a genuine environmental reset.",
      },
      {
        icon: HeartPulse,
        title: "Washroom Deep Sanitation",
        text: "Intensive sanitation of all facilities, including buffing chrome and disinfecting all ceramic items to a high shine. Toilets descaled with a non-abrasive acid, disinfected with EN 1276-certified bacteriacide. Chrome fittings (taps, flush handles, door furniture) polished to a streak-free shine. Mirrors squeegeed. Sanitary bins checked, emptied, and replaced. Floors mopped with a slip-resistant sanitiser. Washroom ventilation grilles vacuumed and damp-wiped (a neglected pathogen reservoir). The washroom is the highest-risk zone in any commercial facility &mdash; we treat it that way.",
      },
    ],
  },
  {
    icon: FileText,
    image: IMG.checklistDetails,
    imageAlt:
      "Maundy Clean disinfection specialist detailing often-missed technical surfaces &mdash; skirting boards, ventilation grilles, and internal glazing &mdash; in a Scottish commercial facility",
    title: "3. Often-Missed Technical Details",
    description:
      "The perimeter work that separates a &ldquo;disinfection spray&rdquo; from a genuine biological reset. Skirting boards, door frames, ventilation grilles, and internal glazing are the surfaces that generic contractors skip &mdash; and the surfaces that harbour the dust and biofilm that pathogens colonise between visits. We detail them as standard.",
    points: [
      {
        icon: AirVent,
        title: "Visible Skirting Boards & Vents",
        text: "Our cleaners meticulously wipe all skirting boards, door frames, and ventilation grilles to ensure no dust traps remain. Skirting boards hand-wiped the full perimeter (the dust that accumulates here is a biofilm reservoir that recontaminates freshly-disinfected surfaces within hours). Door frames detailed top-to-bottom. Ventilation grilles vacuumed with a HEPA crevice tool then damp-wiped with EN 1276 bactericidal solution (airborne pathogens recirculate through dust-loaded grilles). Light-switch backplates detailed. Ceiling light diffusers dusted with an anti-static cloth. The perimeter work your facilities manager notices first on the snagging walk &mdash; included as standard, never as an upsell.",
      },
      {
        icon: Sparkles,
        title: "Inside Window Care",
        text: "Meticulous cleaning of internal glazing and partitions to maintain a bright, healthy atmosphere. Internal glass partitions squeegeed with pure de-ionised water (no chemical haze, no streaks). Internal windows cleaned the same way. Glass door panels and vision panels polished. The psychological impact of bright, clean glass in a disinfected space is significant &mdash; staff and visitors perceive the space as genuinely safe, not just chemically treated. UV-C cabinet treatment available for items that can&rsquo;t be liquid-treated (laptops, tablets, books, soft toys, headphones, remote controls) &mdash; particularly useful in schools, nurseries, and dental practices.",
      },
    ],
  },
];

export function DisinfectionSeoChecklist() {
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
            Our Total Disinfection &amp; Sanitisation Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our antiviral sanitisation protocol follows a rigorous, agency-approved checklist designed to
            address the specific logistical challenges of varied commercial sectors. From targeted
            high-touch disinfection through advanced environmental fogging to the often-missed technical
            details &mdash; below is the scope we deliver as standard, regardless of facility type.
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
                      const PointIcon = point.icon;
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
// (Semantic H2: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// Brief HAS NO [H3] marker on this heading, so we use <h2>
// (matches the VCT/Glass-Partition/Escalator pattern when no
// [H3] marker is present).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Risk Assessment",
    description:
      "Contact us to organise a free site survey. We will assess your facility to determine the most effective, tailored disinfection strategy for your specific sector. On-site pathogen-risk audit: floor plan mapped, high-touch surface register built (door handles, lift buttons, light switches, shared keyboards, payment terminals, reception counters), zone classification assigned (general, high-touch, food-prep, clinical, childcare), occupancy constraints reviewed (in-hours presence, after-hours unsupervised, key-safes and alarm codes), operational window confirmed (overnight, weekend, holiday closure, 4-hour outbreak callout), and chemistry register aligned to your sector (EN 14476 virucidal, EN 1276 bactericidal, EN 1650 fungicidal, HSE-approved, food-safe). Risk Assessment &amp; Method Statement prepared &mdash; covering application method (electrostatic spray, ULV fogging, UV-C cabinet, touchpoint wipe-down), contact time, re-entry clearance, PPE protocol, and waste-water disposal. SafeContractor-aligned documentation. Fixed-price quote within 2 business days &mdash; no on-the-day upsells.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians with in-depth knowledge of &ldquo;beyond clean&rdquo; hygiene protocols. Your allocated disinfection crew is PAYE-employed, PVG-checked, uniformed, and trained in pathogen-control-specific protocols &mdash; electrostatic sprayer operation, ULV fogging (outbreak response), UV-C cabinet treatment, EN 14476 virucidal application, EN 1276 bactericidal wipe-down, ATP swab verification, HSE Biological Agents Code of Practice, and SafeContractor methodology. We brief the crew on your touchpoint map, your zone classification, your access window (overnight, weekend, holiday closure, 4-hour outbreak callout), your occupancy constraints (occupied office, school with children present, dental practice between patients, food-processing facility during shutdown), and any operational constraints on chemistry or method. The same crew returns every visit, building real knowledge of your facility and your inspection regime.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Safe Environment",
    description:
      "Experience a workspace that looks, smells, and feels biologically safe every day, backed by our MaundyClean satisfaction guarantee. You receive a signed Treatment Certificate after every visit (technician name, time in/out, zones treated, chemistry used with batch numbers, contact time, re-entry clearance), arrival and departure times, before-and-after ATP swab readings (on request), and issue-flagging for touchpoint wear, ventilation-grille contamination, washroom pathogen load, or outbreak-risk zones &mdash; before they undermine a facilities inspection, an insurer audit, or a Public Health Scotland review. From &pound;180 per visit for a single-zone preventive treatment through to &pound;POA for multi-site outbreak-response contracts with 4-hour SLA. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function DisinfectionSeoBooking() {
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
            We have optimised our booking experience to be uncomplicated and straightforward, providing
            the responsive support Scottish business owners demand. From free site survey and risk
            assessment through professional matching to a biologically safe environment &mdash; no
            friction, no waiting, no surprises. Just a &ldquo;beyond clean&rdquo; facility, every visit,
            and a compliance file that&rsquo;s audit-ready the day a facilities director, insurer, EHO,
            or operations manager walks in.
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
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services.
// All 4 card descriptions are ReactNode values (each contains an
// inline <Link> per the brief) - rendered via the
// typeof sol.description === "string" check.
// Card 4 (Specialised Hygiene) has TWO inline links: Trauma Cleaning
// AND Mould Cleaning.
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
    icon: Home,
    title: "Maintaining the Sanctuary",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt:
      "Recurring home cleaning service paired with commercial disinfection to bring the same pathogen-control standard to a Scottish residential property",
    description: (
      <>
        After your workplace is secured, bring the same standard to your personal home with our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        service, customized for weekly or fortnightly maintenance. The same EN 14476 virucidal
        discipline, the same &ldquo;same-staff&rdquo; consistency, and the same child-safe eco-friendly
        chemistry we apply to your commercial facility &mdash; brought home. The residential service
        covers high-touch home touchpoints (door handles, light switches, remote controls, kitchen
        counters, bathroom fixtures), with the option to add a quarterly disinfection fogging reset for
        households with young children, elderly residents, or immunocompromised family members.
      </>
    ),
    cta: "Explore recurring home cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy cleaning combined with disinfection services to ensure a Scottish commercial unit is fully sanitised for lease handover",
    description: (
      <>
        Moving offices? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        ensures units are front-line ready and fully sanitised for handover. We work to the letting
        agent&rsquo;s inventory, restore the unit to its original condition, deep-clean every surface
        from ceiling vents to floor edges, then apply a full EN 14476 virucidal fogging treatment
        before key handover &mdash; the new tenant walks into a space that is not just visually clean
        but biologically safe. Deposit-back guarantees met, lease handover starts from a
        &ldquo;speechlessly spotless&rdquo; baseline, and we come back free of charge if anything is
        flagged on the inspection.
      </>
    ),
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt:
      "After builders clean removing heavy layers of construction dust from a Scottish commercial facility before disinfection fogging",
    description: (
      <>
        If your facility has had home improvements or shopfitting, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is essential for removing heavy layers of builders&rsquo; dust before disinfection.
        Construction dust on surfaces deactivates disinfectant chemistry on contact &mdash; you cannot
        disinfect a dusty surface. We HEPA-vacuum every surface, damp-wipe with a general cleaner, then
        apply the EN 14476 virucidal treatment to a genuinely clean substrate. The two-stage protocol
        (builders clean &rarr; disinfection fog) is the only way to achieve genuine biological safety
        in a post-renovation commercial space &mdash; and the protocol your insurer and Public Health
        Scotland expect.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: Biohazard,
    title: "Specialised Hygiene",
    href: "/services/trauma-cleanup",
    image: IMG.leaseTrauma,
    imageAlt:
      "Trauma cleaning and mould remediation services for Scottish commercial facilities requiring deeper structural disinfection beyond standard virucidal fogging",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/trauma-cleanup"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Trauma Cleaning
        </Link>{" "}
        or{" "}
        <Link
          href="/services/mould-remediation-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Mould Cleaning
        </Link>{" "}
        services for environments requiring deeper structural remediation. Trauma scenes (blood-borne
        pathogen contamination, biohazard incidents, unattended deaths) require HSE Biological Agents
        Code of Practice compliance, specialist PPE, and regulated biohazard waste disposal. Mould
        remediation requires source identification, moisture mapping, HEPA-negative-air containment,
        and antimicrobial surface treatment. Both are beyond the scope of standard virucidal fogging
        &mdash; and both are delivered by the same Maundy Clean team, with the same documentation
        discipline, to the same audit-ready standard.
      </>
    ),
    cta: "Explore specialised hygiene services",
  },
];

export function DisinfectionSeoInterlinking() {
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
            Beyond the daily disinfect &middot; property lifecycle
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Milestone
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our disinfection services provide the safety foundation for your premises, but we offer
            specialised &ldquo;resets&rdquo; for major property needs &mdash; from bringing the same
            pathogen-control standard home, through lease handovers and post-renovation dust clear-outs,
            to trauma and mould remediation for environments requiring deeper structural intervention.
            The same trusted, vetted crew can step up whenever your property needs more than a standard
            disinfection visit.
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
// (Semantic H2: "Disinfection & Antiviral Sanitisation Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function DisinfectionSeoNearMe() {
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
              Local disinfection &amp; sanitisation across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Disinfection &amp; Antiviral Sanitisation Near Me, Across Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;disinfection services near me&rdquo; or &ldquo;antiviral sanitisation
              near me&rdquo; in Scotland? Maundy Clean covers offices, schools, nurseries, gyms, dental
              practices, restaurants, and commercial facilities across the Central Belt, Highlands,
              Borders, and Islands. Same vetted uniformed crews, same EN 14476 virucidal chemistry,
              same 4-hour outbreak callout &mdash; wherever your facility happens to be. Find your local
              disinfection specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean disinfection and antiviral sanitisation service coverage areas"
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
                  Same vetted uniformed crews, same 4-hour outbreak callout &mdash; from Glasgow to
                  Inverness.
                </p>
              </div>
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
                Find your local disinfection crew
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
                    href={`/services/disinfection-services-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> disinfection</span>
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
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  href="/services/disinfection-services-near-me#locations"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4" />
                  Browse the near-me directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  View all 72 Scottish locations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
            Our local disinfection crews operate across Glasgow&rsquo;s commercial district,
            Edinburgh&rsquo;s New Town offices, Aberdeen&rsquo;s energy-sector HQs, Dundee&rsquo;s
            life-sciences campus, and the Highlands &mdash; from Inverness to Perth, Falkirk to Ayr.
            Whether you&rsquo;re searching for outbreak-response fogging in Glasgow, preventive
            electrostatic disinfection in Edinburgh, nursery sanitisation in Aberdeen, or gym
            touchpoint disinfection anywhere in between, Maundy Clean assigns a vetted, PAYE-employed
            crew that stays with you for the long run. Same crew, same standard, same 4-hour SLA for
            confirmed outbreaks.
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

export function DisinfectionSeoFinalCta() {
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
            Request Your Free Site Survey Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted uniformed crews, EN 14476 virucidal chemistry, 99.99%
            efficacy with 30-day residual protection, full RAMS compliance, signed Treatment Certificates,
            and a 100% satisfaction guarantee &mdash; from &pound;180 per visit for a single-zone
            preventive treatment through to a fully bespoke multi-site outbreak-response retainer with
            4-hour SLA. No pushy sales call, no waiting 24 hours for a callback.
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
// 3 Q&As from the brief (childcare safe, own equipment, out-of-hours)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your disinfection services safe for childcare environments?",
    a: "Absolutely. We work with clients across various sectors including childcare and supermarkets, using only non-toxic, certified products that are safe for use in every area of the workplace. Our childcare-specific protocol uses a hydrogen-peroxide-based virucide (decomposes to water and oxygen, no residue), a plant-derived biocidal surfactant for pre-cleaning, and an antimicrobial surface coating that is EPA-approved for use in occupied buildings. No chlorine-based bleach (off-gasses for hours, triggers asthma), no quaternary-ammonium compounds at high concentration (residue risk), no VOC-heavy aerosols. Every chemistry is biodegradable, food-safe, child-safe, pet-safe, and safe for occupants to re-enter after the 8-minute dry time. We are experienced with Care Inspectorate compliance, nursery sleep-room protocols, and the specific touchpoint map of a childcare setting (nappy-change mats, door handles, shared toys, snack tables, hand-wash stations). Certificates of chemistry and COSHH datasheets are available on request.",
  },
  {
    q: "Do you provide your own specialised equipment?",
    a: "Yes. We supply all our own professional-grade equipment, including fogging machines and high-level disinfectant spraying tools, which are included in your no-obligation quote. Every crew arrives in a liveried van with electrostatic sprayers (charged-droplet wrap-around coverage, treats a 200m² office in 25 minutes), ULV fogging machines (ultra-low-volume mist for outbreak response, penetrates every surface in a sealed room), UV-C cabinets (360-degree UV-C light for items that can&rsquo;t be liquid-treated &mdash; laptops, tablets, books, soft toys), ATP swab readers (real-time pathogen-load verification), EN 14476 virucidal chemistry with batch tracking, EN 1276 bactericidal wipes for touchpoint wipe-downs, full PPE (Tyvek suit, FFP3 respirator, nitrile gloves, eye protection), and colour-coded microfibre cloths to prevent cross-contamination between zones. You provide access and a point of contact &mdash; we bring everything else. Equipment is PAT-tested, calibrated quarterly, and serviced by the manufacturer.",
  },
  {
    q: "Can you work out-of-hours to minimize disruption?",
    a: "Yes. We offer flexible appointments across 7 days a week, including early mornings or late evenings, to ensure your facility meets health and safety standards without interrupting your operations. The most common windows are pre-open (5am-7am) for a front-line ready reset before staff arrive, post-close (7pm-10pm) for a full disinfection turnover after the building empties, overnight (10pm-6am) for full-room ULV fogging with 60-minute contact time and 30-minute air-out, or weekend for a full-building deep disinfection with zero occupancy constraints. For confirmed outbreaks, we operate a 24/7 hotline with a 4-hour SLA across Scotland&rsquo;s central belt &mdash; phone us at 4pm with a confirmed norovirus case and our technician is on-site by 8pm with fogging equipment, full PPE, and HSE-approved chemistry. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols &mdash; keys stored in a coded safe, alarm codes encrypted, never labelled with your address.",
  },
];

export function DisinfectionSeoFaq() {
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
            Disinfection &amp; sanitisation &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our disinfection services clients ask most often.
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

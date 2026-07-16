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
  Crown,
  Users,
  Home,
  KeyRound,
  Hammer,
  UserCheck,
  CalendarCheck,
  Award,
  Gem,
  Phone,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Trash2,
  SprayCan,
  BookOpen,
  Recycle,
  Boxes,
  AirVent,
  DoorOpen,
  Microscope,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// Compassionate restoration aesthetic — sympathetic crew,
// cleared/cleaned rooms, sanctuary-style finishes
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistSort:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistDeep:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistDetails:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseTrauma:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
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
// Semantic H1: "Professional Hoarding Cleanup & Technical Property Resets Scotland"
// ============================================================

export function HoardingCleanupSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean hoarding cleanup technician in full PPE carrying out a compassionate property reset for a Scottish home affected by long-term hoarding"
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
            Hoarding Cleanup &amp; Technical Property Resets &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Hoarding Cleanup &amp; Technical Property Resets Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Compassionate Restoration, Comprehensive Waste Management, and the Maundy Tradition of
            Excellence. Hoarding creates an unsafe and unsanitary environment that can be a difficult
            and traumatic experience for both property owners and their families. At MaundyClean, we
            provide a premium hoarding cleanup service in Scotland that combines technical depth with a
            compassionate, sensitive approach.
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
                Request Your Sensitive Site Survey Today
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
              <HeartPulse className="w-4 h-4 text-[var(--gold)]" /> Compassion-First Crews
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Sanctuary-Safe Supplies
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> PVG-Checked &amp; Discreet
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 - Long-form semantic SEO intro
// Split-layout with image on the left and three intro
// paragraphs on the right. Paragraph 2 contains inline
// <Link> components to Recurring Home Cleaning and End of
// Tenancy Cleaning per the brief.
// ============================================================

export function HoardingCleanupSeoIntro() {
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
                alt="Maundy Clean hoarding cleanup specialists carrying out a compassionate property reset, sorting possessions into keep, donate and recycle streams at a Scottish home"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Speechlessly Spotless &mdash; Sanctuary Restored
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy and &ldquo;same-staff&rdquo; consistency we bring
                  to Scotland&rsquo;s finest residences &mdash; applied to the most complex hoarding
                  scenarios.
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
                  <HeartPulse className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Reset Quality</div>
                  <div className="text-xs font-bold text-[var(--ink)]">100%</div>
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
              Hoarding cleanup &amp; technical property resets &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Compassionate Property Restoration
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              Hoarding creates an unsafe and unsanitary environment that can be a difficult and
              traumatic experience for both property owners and their families. At MaundyClean, we
              provide a premium hoarding cleanup service in Scotland that combines technical depth with
              a compassionate, sensitive approach. Whether the property condition involves disorganized
              clutter or extreme unsanitary levels, our technicians have seen it all before and are
              trained to restore the home to a healthy, livable state.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              and{" "}
              <Link
                href="/services/move-in-out-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                End of Tenancy Cleaning
              </Link>{" "}
              for Scotland&rsquo;s finest residences, we bring that same level of technical intimacy and
              &ldquo;same-staff&rdquo; consistency to the most complex hoarding scenarios. We act as your
              motivated partner, delivering a &ldquo;speechlessly spotless&rdquo; result across Glasgow,
              Edinburgh, and the Central Belt.
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
                { icon: HeartPulse, label: "Compassion-first crews" },
                { icon: ShieldCheck, label: "RAMS & regulatory compliance" },
                { icon: Leaf, label: "Sanctuary-safe supplies" },
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
// Section 2 - Why MaundyClean is Scotland's Authority in
// Sensitive Property Restoration
// (Semantic H2: "Why MaundyClean is Scotland's Authority in
//  Sensitive Property Restoration")
// Image+copy split layout with 4 trust pillars per the brief:
//   UserCheck (same trusted team) /
//   BookOpen (specialized staff training) /
//   FileText (total regulatory compliance & safety) /
//   Leaf (eco-friendly & sanctuary-safe).
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
      "Sensitivity is paramount in hoarding cases. We ensure the same vetted, PAYE-employed, PVG-checked professionals manage the project from initial survey through final handover &mdash; building genuine trust and a deep understanding of the client&rsquo;s specific needs, triggers, and decision-making patterns. The crew that meets the individual (and any family or supporting agencies) at the compassionate assessment is the crew that returns for every subsequent visit. They learn the &ldquo;history map&rdquo; of the property (which rooms are most distressing, which items hold the strongest attachment, which spaces have been blocked for years), the individual&rsquo;s preferred pace (rapid clearance for housing-association notices, slow supported clearance over months for safeguarding cases), and the communication style that works (some clients want every decision discussed; others want to be in another room and updated hourly). When the regular crew is on annual leave, we send a briefed backup and tell you in advance &mdash; never a rotating cast of agency strangers walking through a vulnerable client&rsquo;s home during a sensitive clearance.",
  },
  {
    icon: BookOpen,
    title: "Specialized Staff Training",
    description:
      "Hoarding cleanup is a technical discipline as much as a compassionate one. We take the time to provide extra training for every staff member selected to tackle these scenarios, ensuring they are prepared for both the physical and emotional aspects of the job. Our hoarding-specialist training programme covers: hoarding disorder awareness (DSM-5 diagnostic criteria, comorbidity with anxiety and depression, the trauma of forced clearance, the cyclical nature of the condition), safeguarding protocols (recognition of abuse, neglect, self-neglect, financial exploitation, with escalation routes to Scottish local authority social work departments under the Adult Support and Protection Scotland Act 2007), mental-health-aware communication (pacing, consent, distress regulation, the &ldquo;pause-and-stop&rdquo; protocol if the client becomes overwhelmed), contamination control (PPE protocols for mould, rodent waste, spoiled food, sharps, and asbestos disturbance), specialist removal techniques (HEPA-filtered vacuuming, sealed-bag protocols, licensed waste-carrier coordination), and donation/recycling partnerships with charity shops, food banks, and animal shelters across Scotland. Every hoarding crew member is also Disclosure Scotland PVG-checked, vaccinated against hepatitis B, and occupational-health monitored.",
  },
  {
    icon: FileText,
    title: "Total Regulatory Compliance &amp; Safety",
    description:
      "We support homeowners and families throughout Scotland to uphold required health and safety standards. Every project includes a comprehensive RAMS (Risk Assessment and Method Statement) package and follows strict protocols for dealing with the results of hoarding professionally and safely. The RAMS covers: contamination classification (mould categories, rodent waste, spoiled food, sharps, asbestos, animal waste), structural-load assessment (floor loading in upper-floor flats with hoarded material), fire-risk assessment (blocked exits, overloaded electrics, combustible material accumulation), pest-infestation status (active, treated, or post-treatment), PPE protocol (FFP3 respirator, Tyvek suit, nitrile gloves, eye protection), waste-removal protocol (licensed waste carrier, sealed clinical-waste bags, waste-transfer notes), and chemistry register (HSE-approved, food-safe, REACH-compliant, child- and pet-safe). We hold &pound;5m public liability and &pound;10m employer&rsquo;s liability, are SafeContractor-approved, and can name your business on our policy as additional insured. For social work, NHS, housing association, or private guardian referrals, we provide court-ready documentation &mdash; COSHH datasheets, training records, safeguarding logs, donation receipts, and licensed waste-transfer notes &mdash; suitable for case-file audit and Care Inspectorate review.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly &amp; Sanctuary-Safe",
    description:
      "We utilize only certified child-safe and pet-safe products. This is essential for creating a fresh, non-toxic environment that feels like a sanctuary once the technical reset is complete &mdash; not a sterile, chemically-residue property that triggers asthma or sensitivities in a vulnerable resident. No chlorine-based bleach (off-gasses for hours, unacceptable in a home the client will reoccupy). No quaternary-ammonium compounds at high concentration (residue risk on surfaces the client touches daily). No VOC-heavy aerosols. We use a hydrogen-peroxide-based virucide (decomposes to water and oxygen, no residue), a plant-derived biocidal surfactant for pre-cleaning, and an antimicrobial surface coating that is EPA-approved for use in occupied buildings. Every chemistry is biodegradable, food-safe, child-safe, pet-safe, and safe for occupants to re-enter after the 8-minute dry time. For clients with chemical sensitivities (common in long-term hoarding cases where respiratory health is often compromised), we offer a fully fragrance-free, hypoallergenic variant. The finishes you&rsquo;ve invested in &mdash; wood, fabric, stone, ceramic &mdash; are protected, and the resident who returns to their reset home is not walking into chemical fumes.",
  },
];

export function HoardingCleanupSeoWhy() {
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
                alt="Maundy Clean hoarding cleanup crew in full PPE carrying out a compassionate property reset for a Scottish home affected by long-term hoarding"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    PVG-checked, mental-health trained
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same trusted crew, every visit, building real knowledge of the client&rsquo;s
                  history, pace, and decision-making patterns.
                </p>
              </div>
            </div>
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
              Why MaundyClean for sensitive property restoration
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why MaundyClean is Scotland&rsquo;s Authority in Sensitive Property Restoration
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
              Many industrial contractors provide an impersonal, &ldquo;clearance-only&rdquo; service.
              MaundyClean addresses these exploitable weaknesses by focusing on vocational excellence
              and long-term property health &mdash; the same vetted crew, the same specialised training,
              the same regulatory discipline, and the same child-safe standard we bring to Scotland&rsquo;s
              most prestigious homes.
            </p>
          </motion.div>
        </div>

        {/* First two cards as a 2-column strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {TRUST_CARDS.slice(0, 2).map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
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

        {/* Third + fourth cards as a 2-column strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRUST_CARDS.slice(2, 4).map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
// Section 3 - Our 3-Stage Hoarding Restoration Checklist
// (Semantic H2: "Our 3-Stage Hoarding Restoration Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Professional Organization & Waste Removal (3 items)
//   2. Technical Deep Cleaning & Sanitization (3 items)
//   3. Often-Missed Technical Details (3 items)
// Carries the id="checklist" anchor that the CTA buttons link to.
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
    icon: Boxes,
    image: IMG.checklistSort,
    imageAlt:
      "Maundy Clean hoarding cleanup specialist sorting possessions into keep, donate and recycle streams with a Scottish homeowner during a compassionate property reset",
    title: "1. Professional Organization & Waste Removal",
    description:
      "The first stage of any hoarding restoration is the most sensitive &mdash; sorting, decision-making, and physical clearance. Our compassionate sorting protocol keeps the client at the centre of every decision, with a &ldquo;reuse-first&rdquo; mindset that maximises donation and recycling while minimising landfill. We never bin items without explicit consent, and we document every stream (keep, donate, recycle, dispose) for the client&rsquo;s records and any supporting agency case file.",
    points: [
      {
        icon: HeartPulse,
        title: "Compassionate Sorting",
        text: "Helping to categorize items into keep, donate, and recycle streams with a &ldquo;reuse-first&rdquo; mindset. The client is the decision-maker at every step &mdash; we ask, we don&rsquo;t assume. Keep items are staged in a clearly-marked zone, donate items are bagged with a charity-stream label, recycle items are segregated (paper, glass, metal, textiles, electronics), and dispose items are double-bagged only with explicit consent. We pace the sort to the client&rsquo;s readiness &mdash; some rooms are emotionally charged and need a slower approach; others can be cleared rapidly. We never override a &ldquo;keep&rdquo; decision, even when an item appears valueless to us. The pause-and-stop protocol applies: if the client becomes distressed, we down tools and resume another day.",
      },
      {
        icon: Trash2,
        title: "Comprehensive Rubbish Removal",
        text: "Professional clearing of scattered papers, objects, and debris covering floors and surfaces. Once sorting decisions are made, our uniformed crew clears the property systematically &mdash; room by room, top-to-bottom, with a clearly-marked &ldquo;keep zone&rdquo; that is never touched. Scattered newspapers, magazines, packaging, food containers, broken items, expired goods, and general debris are bagged, sealed, and removed via our licensed waste carrier. Heavily-contaminated materials (mould-affected soft furnishings, animal-waste-soiled items, spoiled food) are sealed in clinical-waste bags and disposed of through a separate licensed clinical-waste stream with full waste-transfer notes. Floor surfaces, exits, and walkways are cleared first to restore safe access before the deeper clean begins.",
      },
      {
        icon: Recycle,
        title: "Safe Disposal",
        text: "Efficient handling of all waste, ensuring it is diverted from landfill where possible. Our &ldquo;reuse-first&rdquo; hierarchy means landfill is the last resort &mdash; not the default. Donations go to charity-shop partners (Cancer Research, British Heart Foundation, Shelter, local independents across Glasgow, Edinburgh, and Dundee), food banks (Trussell Trust and local independents &mdash; unopened, in-date food only), animal shelters (Scottish SPCA, Dogs Trust &mdash; blankets, towels, unopened pet food), and homeless charities (Crisis, local day centres &mdash; clean clothing, sleeping bags, toiletries). Recycling is segregated and taken to local-authority recycling centres under our waste-carrier licence. Only residual general waste (contaminated, broken, or non-recyclable items) goes to landfill, with full waste-transfer documentation for your compliance file. Donation receipts available on request.",
      },
    ],
  },
  {
    icon: SprayCan,
    image: IMG.checklistDeep,
    imageAlt:
      "Maundy Clean hoarding cleanup technician deep cleaning and sanitising kitchen and bathroom surfaces in a Scottish home after long-term hoarding clearance",
    title: "2. Technical Deep Cleaning & Sanitization",
    description:
      "Once the property is cleared, the technical deep clean begins. This is where the &ldquo;reset&rdquo; really happens &mdash; removing the ingrained contamination, biological residue, and grease film that no clearance can address. Our deep-clean protocol covers every surface, every fixture, and every fitting &mdash; restoring the property to a habitable, healthy state that genuinely feels like a sanctuary, not just an empty house.",
    points: [
      {
        icon: Sparkles,
        title: "Intensive Surface Restoration",
        text: "Meticulous cleaning of disorganized bookshelves, old computers, and fixtures to remove ingrained city-center dust. Every horizontal and vertical surface is detailed &mdash; bookshelves emptied and shelf-by-shelf wiped, electronic equipment (TVs, computers, monitors) cleaned with anti-static screen-safe cloths, light switches and sockets damp-wiped with EN 1276 bactericidal chemistry, picture frames and wall art cleaned front and back, radiators vacuumed behind and wiped down, picture rails and architraves detailed. Wall surfaces spot-cleaned to remove scuffs, marks, and biological staining. Ceiling corners vacuumed with a HEPA crevice tool to remove cobweb debris and dust accumulation. The detail work that turns a cleared house into a genuinely restored home.",
      },
      {
        icon: Droplets,
        title: "Kitchen & Bathroom Sanitization",
        text: "Deep cleaning of units, appliances, and ceramic items to remove pathogens and bacteria. The kitchen is typically the most-contaminated room in a hoarded property &mdash; spoiled food residue, grease accumulation, and biological contamination. We deep-clean every unit interior (emptied, vacuumed, damp-wiped, sanitised), every appliance (cooker, fridge, microwave, dishwasher &mdash; pulled out and cleaned behind and underneath), and every surface (counter, splashback, sink, drainer). Bathrooms receive the same intensive treatment &mdash; toilet deep-cleaned and sanitised, bath and shower descaled and disinfected, ceramic tiles scrubbed and grout brightened, vanity unit emptied and wiped, mirror polished. EN 1276 bactericidal and EN 14476 virucidal chemistry throughout. The result is a kitchen and bathroom that pass a Care Inspectorate or Environmental Health inspection.",
      },
      {
        icon: Wind,
        title: "Floor & Carpet Recovery",
        text: "Using industrial-grade equipment to restore floor surfaces to a &ldquo;like new&rdquo; condition. Carpets are HEPA-vacuumed in two directions (pile and against pile) to lift embedded debris and biological contamination, then hot-water-extraction cleaned (a deep steam clean that flushes the pile) to remove ingrained soiling, odours, and staining. Hard floors are stripped of old polish, deep-cleaned, re-sealed, and refinished to the appropriate specification (wood, vinyl, tile, stone, laminate). Stair carpets and runners receive the same treatment. Heavily-contaminated carpets (urine saturation, severe mould, biological damage) are flagged for replacement &mdash; we don&rsquo;t waste your budget cleaning something that genuinely needs to come up. The floor work that turns &ldquo;the clutter is gone&rdquo; into &ldquo;the property is genuinely restored.&rdquo;",
      },
    ],
  },
  {
    icon: FileText,
    image: IMG.checklistDetails,
    imageAlt:
      "Maundy Clean hoarding cleanup specialist wiping skirting boards, door frames and inside windows in a Scottish property to complete the technical restoration after long-term hoarding",
    title: "3. Often-Missed Technical Details",
    description:
      "The detail work that separates a genuine property reset from a &ldquo;deep clean with extra vacuuming.&rdquo; Skirting boards, inside windows, and odour neutralisation are the three surfaces generic contractors skip &mdash; and the three that determine whether the property genuinely feels like a sanctuary or just an empty house that still smells of the past.",
    points: [
      {
        icon: AirVent,
        title: "Visible Skirting Boards",
        text: "Our cleaners meticulously wipe all skirting boards, door frames, and ceiling fixtures as part of our standard service. Skirting boards hand-wiped the full perimeter of every room &mdash; the primary dust-and-contaminant trap in any home, and the surface generic contractors skip. Door frames detailed top-to-bottom, including the vertical surfaces and the top edge where dust accumulates. Ceiling fixtures (light fittings, roses, coving) vacuumed with a HEPA soft-brush attachment and damp-wiped where appropriate. Architraves, picture rails, and dado rails wiped. Plug sockets and light-switch backplates damp-wiped with bactericidal chemistry. Radiator backs vacuumed with a HEPA crevice tool. The perimeter work that signals to the client (and to any Environmental Health or Care Inspectorate officer) that every void has been addressed.",
      },
      {
        icon: DoorOpen,
        title: "Inside Window Care",
        text: "Cleaning internal glass and partitions to maximize natural light and improve the property&rsquo;s atmosphere. Hoarded properties are often dark &mdash; windows blocked, curtains closed for years, natural light reduced to a minimum. We squeegee every internal pane with pure de-ionised water (no chemical residue, no streaking), detail every window frame and sill (the tracks where mould spores cluster, the corners where dust accumulates), wipe down internal doors and partitions, clean mirrors, and refit curtains where the client has agreed. The light-restoration work that genuinely transforms the atmosphere of the property &mdash; many clients remark that the home feels &ldquo;like a different place&rdquo; once the natural light is back. Skylights and conservatory roofs cleaned where access allows.",
      },
      {
        icon: Wind,
        title: "Odor Neutralization",
        text: "Professional treatments to remove the lingering smells often associated with long-term hoarding. Standard cleaning doesn&rsquo;t remove hoarding-related odours &mdash; they&rsquo;ve penetrated walls, floors, soft furnishings, and even structural materials. We use specialist odour-neutralisation protocols: ozone treatment (generates ozone gas which oxidises odour molecules at the source &mdash; effective on smoke, pet, food, mould, and biological odours), thermal fogging (generates a thermal fog which penetrates everywhere the odour has penetrated &mdash; neutralises odour at molecular level), and enzyme-based surface treatments for biological contamination (urine, food, mould). The result is a property that genuinely doesn&rsquo;t smell &mdash; not one that&rsquo;s been perfumed over. For severe cases (long-term pet hoarding, decomposed food), we may recommend a second treatment cycle and a repaint to fully seal in residual odour.",
      },
    ],
  },
];

export function HoardingCleanupSeoChecklist() {
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
            Beyond the standard clearance
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our 3-Stage Hoarding Restoration Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for hoarders follow a rigorous, agency-approved checklist
            designed to address organization, waste removal, and deep sanitation. From compassionate
            sorting and &ldquo;reuse-first&rdquo; waste management through intensive surface
            restoration and kitchen/bathroom sanitisation to the often-missed technical details &mdash;
            below is the scope we deliver as standard, regardless of property type or extremity level.
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
// Section 4 - 3-Step "Hassle-Free" Process
// (Semantic H2: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// Step 2 contains inline <Link> to Deep House Cleaning.
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Compassionate Quote",
    description:
      "Contact us for a free, no-obligation quote. We will assess the level of extremity and provide a detailed, sensitive proposal. Our management team visits the property (with the individual&rsquo;s consent, and with any supporting family or agencies present if appropriate) to assess: contamination load (clutter level, biological contamination, mould, pest activity), structural risk (floor loading, fire risk, blocked exits), safeguarding status (vulnerable adult, multi-agency involvement, capacity considerations), pace requirements (rapid clearance for housing-association notices, slow supported clearance over weeks or months), and donation/recycling streams appropriate to the items present. The survey is unhurried &mdash; we take the time to build trust. A fixed-price, itemised quote follows within 2 business days. No on-the-day upsells, no &ldquo;clearance-only&rdquo; pressure tactics.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description: (
      <>
        We hand-pick a team with experience in{" "}
        <Link
          href="/services/deep-house-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Deep House Cleaning
        </Link>{" "}
        and specialized hoarding protocols. Your allocated crew is PAYE-employed, PVG-checked,
        mental-health-trained, safeguarding-aware, and uniformed &mdash; not agency temps. We brief the
        crew on the individual&rsquo;s communication preferences, the property&rsquo;s history map, the
        agreed pace, and any safeguarding protocols in place. They arrive in an unmarked van (discretion
        is part of our service &mdash; no neighbourhood signage) with full PPE, HEPA-filtered vacuums,
        sealed biohazard bags, EN 1276 bactericidal and EN 14476 virucidal chemistry, donation-stream
        labels, and licensed waste-carrier documentation. The same crew returns for every visit &mdash;
        building real trust and knowledge of the property&rsquo;s progress.
      </>
    ),
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Home",
    description:
      "Experience a property that looks, smells, and feels brand new, backed by our MaundyClean 100% satisfaction guarantee. You receive a signed Treatment Certificate after every visit (crew names, time in/out, rooms cleared, items donated/recycled/disposed with receipts, chemistry used with batch numbers, photo evidence of pre-and-post condition), arrival and departure times, before-and-after photos, and issue-flagging for structural pest-entry points, mould contamination, or items needing specialist disposal &mdash; before they become larger problems. From &pound;22/hr (minimum 6 hours) for a single-room clearance through to &pound;POA for complex safeguarding cases with multi-agency partnership and court-ready documentation. We hold &pound;5m public liability as standard and can name your business or agency on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function HoardingCleanupSeoBooking() {
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
            We have optimized our booking experience to be uncomplicated and straightforward,
            providing the responsive support Scottish families demand during what is often a difficult
            and emotional time. From free site survey and compassionate quote through professional
            matching to a pristine, sanctuary-restored home &mdash; no friction, no waiting, no
            surprises. Just a &ldquo;speechlessly spotless&rdquo; property, ready for the next chapter.
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
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {typeof step.description === "string" ? (
                    <span dangerouslySetInnerHTML={{ __html: step.description }} />
                  ) : (
                    step.description
                  )}
                </p>
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
              Request Your Sensitive Site Survey Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Semantic Interlinking: Maintaining the Sanctuary Long-Term
// (Semantic H2: "Semantic Interlinking: Maintaining the Sanctuary Long-Term")
// Image-topped cards with internal links to specialist services.
// All 4 card descriptions are ReactNode values (each contains an
// inline <Link> per the brief) - rendered via the
// typeof sol.description === "string" check.
// Card 4 (Hygiene Resets) has TWO inline links: Antiviral Sanitisation
// AND Disinfection Services.
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
    title: "Long-Term Maintenance",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt:
      "Recurring home cleaning service paired with hoarding cleanup to maintain a Scottish property as a manageable, clean sanctuary after restoration",
    description: (
      <>
        Once the property is restored, our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        service ensures it remains a manageable, clean sanctuary on a weekly or fortnightly basis. The
        same PAYE-employed, PVG-checked crew that delivered the restoration returns &mdash; with real
        knowledge of the client&rsquo;s communication preferences, the property&rsquo;s history, and the
        high-risk zones that need ongoing attention. Recurring visits catch the early signs of
        re-accumulation before they become overwhelming, support the client in maintaining the new
        baseline, and provide ongoing safeguarding observation (if the client is vulnerable, our
        regular presence is a recognised protective factor). The single most effective long-term
        step after a hoarding restoration &mdash; many of our recurring clients are former hoarding
        customers whose homes have stayed clear for years.
      </>
    ),
    cta: "Explore recurring home cleaning",
  },
  {
    icon: KeyRound,
    title: "The Move-In Reset",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy cleaning combined with hoarding cleanup to ensure a Scottish property is fully sanitised and ready for sale or new tenant handover",
    description: (
      <>
        If you are preparing the property for sale or new tenants, our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        protocol ensures it passes all final inspections. We work to the letting agent&rsquo;s
        inventory (or the estate agent&rsquo;s pre-sale spec), restore the property to its original
        condition, deep-clean every surface from ceiling vents to floor edges, then apply a full EN
        14476 virucidal treatment before key handover. The new tenant or purchaser walks into a space
        that is not just visually clean but biologically safe and history-neutralised. Deposit-back
        guarantees met, sale-completion starts from a &ldquo;speechlessly spotless&rdquo; baseline,
        and the property is genuinely ready for its next chapter &mdash; not just visually presented.
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
      "After builders clean removing heavy construction dust and debris from a Scottish property after renovation work triggered by hoarding damage",
    description: (
      <>
        If hoarding has caused structural damage requiring repair, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        removes heavy construction dust once improvements are finished. Long-term hoarding often
        causes damage that requires remediation: rotten floors from spills and pet waste, damaged
        walls from mould growth, replaced kitchens and bathrooms, re-pointed chimney stacks, replaced
        ceiling plaster from leaks. Once the builders leave, every surface is coated in fine
        construction dust &mdash; and that dust carries mould spores, old-contaminant residue, and
        fresh plaster particulates that should not be breathed in. We HEPA-vacuum every surface,
        damp-wipe with a general cleaner, then apply the full EN 14476 virucidal treatment. The
        final stage of a complete property reset.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene Resets",
    href: "/services/disinfection-services",
    image: IMG.leaseTrauma,
    imageAlt:
      "Antiviral sanitisation and disinfectant spraying service for a Scottish property after hoarding cleanup to ensure the home is biologically safe for re-occupancy",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Antiviral Sanitisation
        </Link>{" "}
        session for a total biological &ldquo;reset&rdquo; of high-touch points throughout the home.
        The post-clearance window is the highest-risk contamination period &mdash; long-term hoarding
        leaves biological residue (mould spores, bacteria, viral contamination, pest-borne pathogens)
        on every surface, in every soft furnishing, and in every void. Our EN 14476 virucidal / EN
        1276 bactericidal treatment removes the biological residue and applies a 30-day antimicrobial
        surface coating that continues to kill pathogens on contact between visits. The biology reset
        that turns &ldquo;visually clean&rdquo; into &ldquo;genuinely safe&rdquo; for the vulnerable
        resident who is about to move back in. Pair with our{" "}
        <Link
          href="/services/disinfection-services"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Disinfection Services
        </Link>{" "}
        for the full biological reset.
      </>
    ),
    cta: "Explore hygiene reset services",
  },
];

export function HoardingCleanupSeoInterlinking() {
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
            Beyond the restoration &middot; long-term sanctuary
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Semantic Interlinking: Maintaining the Sanctuary Long-Term
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            A hoarding cleanup is a total property reset, but the true goal is long-term health. We
            offer specialized services for every stage of this cycle &mdash; from ongoing maintenance
            that keeps the property manageable, through tenancy transitions and post-renovation dust
            clear-outs, to the biological &ldquo;reset&rdquo; that turns a visually clean house into a
            genuinely safe home. The same trusted, vetted crew can step up whenever your property
            needs more than a standard visit.
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
// (Semantic H2: "Hoarding Cleanup & Technical Property Resets Near Me in Scotland")
// Split layout with map image + 36-location grid.
// Links to /services/hoarding-cleanup-near-me#<slug> which
// is the dedicated near-me page (created in tandem).
// ============================================================

export function HoardingCleanupSeoNearMe() {
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
              Local hoarding cleanup across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Hoarding Cleanup &amp; Technical Property Resets Near Me, Across Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;hoarding cleanup near me&rdquo; or &ldquo;hoarder house clearance
              near me&rdquo; in Scotland? Maundy Clean covers homes, tenements, housing-association
              properties, and private estates across the Central Belt, Highlands, Borders, and
              Islands. Same vetted PVG-checked crews, same compassion-first protocols, same
              safeguarding-aware approach &mdash; wherever your property happens to be. Find your
              local hoarding-restoration specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean hoarding cleanup & technical property reset service coverage areas"
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
                  Same vetted PVG-checked crews, same compassion-first protocols &mdash; from Glasgow
                  to Inverness.
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
                Find your local hoarding-restoration crew
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
                    href={`/services/hoarding-cleanup-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> hoarding cleanup</span>
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
                  href="/services/hoarding-cleanup-near-me#locations"
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
            Our local hoarding-restoration crews operate across Glasgow&rsquo;s residential West End,
            Edinburgh&rsquo;s New Town tenements, Aberdeen&rsquo;s energy-sector HMOs, Dundee&rsquo;s
            student flats, and the Highlands &mdash; from Inverness to Perth, Falkirk to Ayr. Whether
            you&rsquo;re searching for compassionate hoarding cleanup in a Glasgow family home,
            safeguarding-led clearance for an Edinburgh social-work referral, deceased-estate
            clearance in Aberdeen, or a long-term hoarding restoration in a Dundee housing-association
            property, Maundy Clean assigns a vetted, PAYE-employed, mental-health-trained crew that
            stays with you for the long run. Same crew, same compassion-first standard, same
            multi-agency partnership capability across the entire property lifecycle.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Sensitive Site Survey Today")
// Placed BEFORE the FAQ sections so the page does not end with
// two stacked CTAs.
// ============================================================

export function HoardingCleanupSeoFinalCta() {
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
            Ready to book your sensitive site survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Sensitive Site Survey Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised,
            sensitive proposal within 2 business days. Vetted PVG-checked uniformed crews,
            mental-health-trained and safeguarding-aware, full RAMS compliance, signed Treatment
            Certificates, &pound;5m public liability, and a 100% satisfaction guarantee &mdash; from
            &pound;22/hr (minimum 6 hours) for a single-room clearance through to a fully bespoke
            multi-agency safeguarding case with court-ready documentation. No pushy sales call, no
            &ldquo;clearance-only&rdquo; pressure tactics.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Sensitive Site Survey Today
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
// 3 Q&As from the brief (insured for extreme hoarding, deceased
// estates, cities served).
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for extreme hoarding cleans?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience in Central Scotland&rsquo;s most complex property scenarios. We hold &pound;5m public liability and &pound;10m employer&rsquo;s liability cover, are SafeContractor-approved, and can name your business, agency, or housing association on our policy as additional insured. Our technicians are Disclosure Scotland PVG-checked (essential for working with vulnerable adults), mental-health-trained (hoarding disorder awareness, safeguarding, distress regulation), hepatitis-B vaccinated (relevant for biological-contamination exposure), and occupational-health monitored. We provide COSHH datasheets, training records, safeguarding logs, insurance certificates, licensed waste-transfer notes, and signed Treatment Certificates for every visit &mdash; suitable evidence for EHO inspection, Care Inspectorate review, social-work case-file audit, housing-association compliance, and insurer review. References from Scottish local authorities, NHS mental health teams, and housing associations available on request.",
  },
  {
    q: "Do you handle hoarding cleanup for deceased estates?",
    a: "Yes. We provide a compassionate and understanding service for both living and deceased hoarding situations, ensuring the property is treated with the utmost respect. Deceased-estate hoarding cleanup carries its own sensitivities &mdash; family grief, executor responsibilities, probate valuation of items, and often the additional complexity of biological contamination if the deceased was not discovered promptly. We work at the family&rsquo;s pace (some executors want rapid clearance to release the property for sale; others need weeks to grieve before they can face the property), we document every item of value for probate (with photographic evidence and donation/sale receipts), we coordinate with solicitors and executors on documentation, and we handle biological contamination with full PPE and licensed clinical-waste disposal. We are experienced working alongside funeral directors, solicitors, and Scottish local authority bereavement services. Discretion is absolute &mdash; unmarked vans, no neighbourhood signage, no discussion of the case outside the team.",
  },
  {
    q: "Which cities in Scotland do you serve?",
    a: "Our service area includes Edinburgh, Glasgow, Aberdeen, Dundee, Inverness, Stirling, Perth, St Andrews, Paisley, and Falkirk, as well as the surrounding Central Belt areas. We actively cover 72+ Scottish towns across the Central Belt (Glasgow, Edinburgh, Stirling, Falkirk, Livingston, East Kilbride, Paisley, Hamilton, Motherwell, Cumbernauld, Coatbridge, Ayr, Kilmarnock, Dunfermline, Kirkcaldy), the East (Dundee, Perth, St Andrews), the North East (Aberdeen, Elgin, Peterhead, Stonehaven, Inverurie), the Highlands and Islands (Inverness, Oban, Fort William, Aviemore), and the Borders and South-West (Galashiels, Dumfries). For properties in more remote locations (Islands, rural Highlands), we can travel with a mileage fee and a 2-day minimum. We add new postcodes every month as our crew capacity grows. If you&rsquo;re unsure whether we cover your area, please call us &mdash; we&rsquo;ll be honest about whether we can help or recommend a trusted local partner.",
  },
];

export function HoardingCleanupSeoFaq() {
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
            Hoarding cleanup &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our hoarding cleanup clients ask most often.
            Can&rsquo;t find what you need? Call us on{" "}
            <a
              href={contactInfo.phoneHref}
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4"
            >
              {contactInfo.phone}
            </a>{" "}
            and we&rsquo;ll talk it through &mdash; sensitively, confidentially, and at your pace.
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
                Request Your Sensitive Site Survey Today
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

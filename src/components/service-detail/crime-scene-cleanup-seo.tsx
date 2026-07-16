"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
  Phone,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Biohazard,
  Lightbulb,
  Boxes,
  Wrench,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked and aligned with crime scene aesthetics
// ============================================================
const IMG = {
  heroWide: "https://sfile.chatglm.cn/images-ppt/biohazard-cleaning.jpg",
  introSplit: "https://sfile.chatglm.cn/images-ppt/0520b4be848e.jpg",
  whyCrew: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistSanitisation: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
  checklistWaste: "https://sfile.chatglm.cn/images-ppt/2505b6c51368.jpg",
  checklistDetails: "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseRecurring: "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy: "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg",
  leaseBuilders: "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseTrauma: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  nearMeMap: "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    } as any,
  },
};

// ============================================================
// SECTION 1 — Full-width Hero Banner
// ============================================================
export function CrimeSceneCleanupSeoHeroBanner() {
  return (
    <section className="relative min-h-[580px] flex items-center justify-center bg-[var(--brand-dark)] text-white overflow-hidden py-16 lg:py-24">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.heroWide}
          alt="Professional Crime Scene Cleanup & Trauma Decontamination in Scotland"
          className="w-full h-full object-cover object-center opacity-25 scale-105 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-dark)]/90 via-[var(--brand-dark)]/85 to-[var(--brand-dark)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Specialist Crime Scene Decontamination
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
            Professional Crime Scene Cleanup & Trauma Restoration Scotland
          </h1>
          <p className="text-base sm:text-lg text-white/95 font-medium leading-relaxed max-w-2xl">
            Total Incident Management, Forensic-Level Decontamination, and the Maundy Tradition of Discretion. Meticulous, safe, and absolute privacy assured.
          </p>

          {/* Quick trust strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--gold)]">24/7</div>
              <div className="text-[11px] text-white/70 uppercase font-semibold tracking-wide">Emergency Response</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--gold)]">100%</div>
              <div className="text-[11px] text-white/70 uppercase font-semibold tracking-wide">Discreet Vans</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--gold)]">£5M</div>
              <div className="text-[11px] text-white/70 uppercase font-semibold tracking-wide">Public Liability</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--gold)]">PVG</div>
              <div className="text-[11px] text-white/70 uppercase font-semibold tracking-wide">Checked Techs</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] hover:text-white font-bold tracking-tight shadow-lg shadow-[var(--gold)]/20"
              asChild
            >
              <Link href="/quote">Request Sensitive Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-bold"
              asChild
            >
              <Link href="#checklist">View Technical Checklist</Link>
            </Button>
          </div>
        </motion.div>

        {/* Highlight Quote Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="flex items-center gap-1.5 text-[var(--gold)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-sm sm:text-base italic text-white/90 leading-relaxed">
            &quot;In an incredibly challenging situation, the Maundy Clean team handled everything with extreme professionalism and profound discretion. Their technical team was prompt, compassionate, and restored our premises to absolute safety.&quot;
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-[var(--brand)] flex items-center justify-center font-display font-bold text-white text-sm shadow">
              DM
            </div>
            <div>
              <div className="text-xs font-bold text-white">David Mitchell</div>
              <div className="text-[10px] text-white/60">Commercial Property Manager, Glasgow</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 2 — Deep Semantic Introduction
// ============================================================
export function CrimeSceneCleanupSeoIntro() {
  return (
    <section className="py-16 bg-background text-[var(--ink)]">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="space-y-6">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Professional Incident Management
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Meticulous Care & Discretion in Critical Forensic Restoration
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--muted-foreground)]">
            <p>
              The aftermath of a traumatic event or crime scene is an overwhelming and deeply sensitive situation that requires more than just standard cleaning. It demands Total Incident Management to ensure the property is not only visually restored but biologically decontaminated and safe for return to public or private use. At Maundy Clean, we provide a premium crime scene cleanup service across Glasgow, Edinburgh, and the Central Belt, delivering meticulous technical restoration with absolute discretion and compassion.
            </p>
            <p>
              While we are the recognised authority in <Link href="/services/recurring-home-cleaning" className="text-[var(--brand)] font-semibold hover:underline">Recurring Home Cleaning</Link> for Scotland’s most prestigious residences, we bring that same level of technical intimacy and same-staff consistency to the high-stakes world of forensic hygiene. We act as your strategic partner, decontaminating the scene and returning your home or workplace to a safe sanctuary where you can begin to move forward.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG.introSplit}
            alt="Crime Scene Decontamination Team"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-black/40 backdrop-blur rounded-xl border border-white/10">
            <div className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">Accredited Experts</div>
            <div className="text-sm font-semibold mt-0.5">Operated under strict Health and Safety Executive guidance.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 3 — Why Choose Maundy Clean
// ============================================================
type TrustCard = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: ReactNode;
};

const TRUST_CARDS: TrustCard[] = [
  {
    icon: Users,
    title: "The Same Trusted Professionals",
    description: "Reliability and privacy are paramount during sensitive recoveries. We ensure the same vetted, background-checked professionals manage your restoration to build a deep understanding of your property’s layout and maintain absolute privacy.",
  },
  {
    icon: ShieldCheck,
    title: "Forensic-Grade Decontamination",
    description: "Our experienced technical teams are fully qualified in the cleaning and disposal process for any eventuality, utilizing Ozone treatments for sterilising all types of material and ensuring no micro-residue remains.",
  },
  {
    icon: Hammer,
    title: "Discreet & Compassionate Support",
    description: "We understand the delicate nature of these events. Our teams operate with a high level of discretion, often working out-of-hours to protect your privacy and the reputation of your property.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Sanctuary-Safe",
    description: "Once biological pathogens are neutralized, we utilize only certified child-safe and pet-safe products. This ensures a fresh, non-toxic environment that feels like a home again, without the harsh chemical odors common in industrial cleaning.",
  },
];

export function CrimeSceneCleanupSeoWhy() {
  return (
    <section className="py-16 bg-[var(--cream)] text-[var(--ink)]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Professional Reliability
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Why Maundy Clean is Scotland’s Choice for Technical Trauma Recovery
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
            A trauma scene involves complex biohazards—including blood, bodily fluids, and forensic residues—that carry the risk of airborne pathogens and dangerous viruses. Maundy Clean addresses these challenges through vocational excellence and a commitment to safety.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 pt-6"
        >
          {TRUST_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand transition-all flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)] text-[var(--brand)] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold leading-tight">
                    {card.title}
                  </h3>
                  <div className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {card.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 4 — Technical Checklist
// ============================================================
type ChecklistGroup = {
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  points: { title: string; text: string }[];
};

const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    image: IMG.checklistSanitisation,
    icon: Droplets,
    title: "1. Biological Remediation & Decontamination",
    points: [
      {
        title: "Trauma Scene Sanitisation",
        text: "Professional removal and disposal of biohazardous materials, including blood and bodily fluids, following strict legal protocols.",
      },
      {
        title: "Forensic Residue Removal",
        text: "Technical cleaning to remove fingerprint powder, luminol, and other chemicals used during official investigations.",
      },
      {
        title: "Sterilisation of Materials",
        text: "Deep cleaning and sterilising all types of material to eliminate pathogens and bacteria.",
      },
    ],
  },
  {
    image: IMG.checklistWaste,
    icon: Biohazard,
    title: "2. Specialist Hazard Management",
    points: [
      {
        title: "Needle & Sharps Removal",
        text: "Safe removal and professional disposal of syringes and other hazardous objects.",
      },
      {
        title: "Animal Fouling Restoration",
        text: "Specialised cleaning and sterilisation of areas affected by animal waste or infestations.",
      },
      {
        title: "Ozone Odour Neutralization",
        text: "Utilizing industrial ozone generators to remove lingering smells and refresh the property’s air quality.",
      },
    ],
  },
  {
    image: IMG.checklistDetails,
    icon: FileText,
    title: "3. Often-Missed Technical Details",
    points: [
      {
        title: "Visible Skirting Boards & Fixtures",
        text: "Meticulously wiping all skirting boards, door frames, and internal glass to ensure a speechlessly spotless finish.",
      },
      {
        title: "Inside Window Care",
        text: "Cleaning internal glazing and partitions to maximize natural light and improve the property's atmosphere after the reset.",
      },
    ],
  },
];

export function CrimeSceneCleanupSeoChecklist() {
  return (
    <section id="checklist" className="scroll-mt-20 py-16 bg-background text-[var(--ink)]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Rigorous Protocols
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Our Total Crime Scene & Trauma Recovery Checklist
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for trauma and crime scenes follow a rigorous, agency-approved checklist designed to meet required health and safety standards.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-6 pt-6"
        >
          {CHECKLIST_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-brand transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand)]/90 backdrop-blur flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-display font-bold text-sm tracking-tight drop-shadow-sm">
                      {group.title.split(". ")[1]}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {group.points.map((pt, pIdx) => (
                      <div key={pIdx} className="space-y-1">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[var(--brand)] shrink-0 mt-0.5" />
                          <span className="font-semibold text-sm leading-tight text-[var(--ink)]">
                            {pt.title}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed pl-6.5">
                          {pt.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 5 — 3-Step Booking Process
// ============================================================
type BookingStep = {
  icon: React.ComponentType<{ className?: string }>;
  step: string;
  title: string;
  description: ReactNode;
};

const BOOKING_STEPS: BookingStep[] = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Immediate Site Assessment",
    description: "Contact us for a swift consultation. We will assess the technical requirements and provide a thorough, fixed-price quote.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description: "We hand-pick a team with specific experience in trauma & crime scene decontamination and technical forensic hygiene.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Sanctuary",
    description: "Experience a property that is safe, clean, and fresh, backed by our Maundy Clean 100% satisfaction guarantee.",
  },
];

export function CrimeSceneCleanupSeoBooking() {
  return (
    <section className="py-16 bg-background text-[var(--ink)] border-t border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Responsive Operations
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            The Maundy Clean 3-Step &quot;Hassle-Free&quot; Process
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
            We have optimized our booking experience to be uncomplicated and straightforward, providing the responsive support Scottish families and businesses demand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-6 relative">
          {/* Connector Line for larger screens */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[var(--brand)]/10 via-[var(--brand)]/40 to-[var(--brand)]/10 z-0" />

          {BOOKING_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center space-y-4 px-4"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--brand)] hover:scale-105 transition-transform flex items-center justify-center text-white shadow-lg shadow-[var(--brand)]/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[var(--brand)] uppercase tracking-wide">
                  Step {step.step}
                </div>
                <h3 className="font-display text-lg font-bold leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 6 — Semantic Interlinking
// ============================================================
type InterlinkSolution = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: ReactNode;
  href: string;
};

const INTERLINK_SOLUTIONS: InterlinkSolution[] = [
  {
    icon: Home,
    title: "Restoring the Standard",
    description: "Once the technical recovery is complete, our Recurring Home Cleaning service ensures your home remains a manageable, 5-star sanctuary on a weekly or fortnightly basis.",
    href: "/services/recurring-home-cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions",
    description: "If the incident occurred in a rental or property for sale, our End of Tenancy Cleaning protocol ensures the unit passes all final inspections.",
    href: "/services/move-in-out-cleaning",
  },
  {
    icon: Hammer,
    title: "After Builders Reset",
    description: "If structural repairs were required following the incident, our After Builders Clean is designed to remove heavy construction dust and debris.",
    href: "/services/post-construction-cleaning",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene Maintenance",
    description: "Ask about our Antiviral Sanitisation session for ongoing protection from bacteria and viruses in communal or high-traffic areas.",
    href: "/services/disinfection-services",
  },
];

export function CrimeSceneCleanupSeoInterlinking() {
  return (
    <section className="py-16 bg-[var(--cream)] text-[var(--ink)]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Technical Lifecycle Support
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Restoring the Sanctuary Long-Term
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
            A crime scene cleanup is a critical reset, but maintaining the health of your home or workspace is an ongoing journey. We offer specialized support for every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {INTERLINK_SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-brand transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] text-[var(--brand)] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-sm tracking-tight">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {sol.description}
                  </p>
                </div>
                <Link
                  href={sol.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] hover:underline mt-4 group"
                >
                  Learn More{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
// SECTION 7 — Near Me Directory Map & Grid
// ============================================================
export function CrimeSceneCleanupSeoNearMe() {
  return (
    <section className="py-16 bg-background text-[var(--ink)]">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
        <div className="space-y-6">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Regional Coverage
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Crime Scene Cleaning Near Me in Scotland
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--muted-foreground)]">
            <p>
              Forensic emergencies require localized, rapid dispatch to control pathogenetic risks and safely manage evidence support sites. Maundy Clean operates dedicated specialty crews based in regional hubs across Scotland, allowing us to deploy compliant incident management quickly.
            </p>
            <p>
              From tenement-block decontaminations in Edinburgh and Glasgow to rural cottages in the Highlands, our mobile units are fully stocked with high-grade sanitisation machinery. Explore our regional directory to locate a certified team near you.
            </p>
          </div>

          <div className="pt-4">
            <Button
              className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white gap-2 font-bold"
              asChild
            >
              <Link href="/services/crime-scene-cleanup-near-me#locations">
                Browse Near-Me Directory <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-[var(--cream)] rounded-3xl p-6 sm:p-8 border border-[var(--border)] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base">Active Service Hubs</h3>
            <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Live Dispatch
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {NEAR_ME_LOCATIONS.slice(0, 18).map((loc, i) => (
              <Link
                key={i}
                href={`/services/crime-scene-cleanup-near-me#${loc.slug}`}
                className="p-2.5 bg-white rounded-lg border border-[var(--border)] hover:border-[var(--brand)] text-xs font-semibold text-[var(--ink)] flex items-center gap-1.5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                <span className="truncate">{loc.city}</span>
              </Link>
            ))}
          </div>

          <p className="text-[11px] text-[var(--muted-foreground)] text-center italic">
            Don&apos;t see your area listed? We cover 72 towns and cities across Scotland. Contact us for emergency dispatch details.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 8 — Mid-page Conversion Banner (Placed ABOVE FAQ)
// ============================================================
export function CrimeSceneCleanupSeoFinalCta() {
  return (
    <section className="py-16 bg-[var(--brand-dark)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,color-mix(in_oklch,var(--gold)_8%,transparent)_0,transparent_50%)]" />
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center space-y-6">
        <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
          Ready to Restore Biological Safety to Your Space?
        </h3>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Contact our specialist incident team today for an immediate, completely confidential consultation. We provide swift site surveys, comprehensive RAMS, and discreet decontamination.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] hover:text-white font-bold tracking-tight shadow-lg shadow-[var(--gold)]/20"
            asChild
          >
            <Link href="/quote">Request Your Sensitive Site Assessment Today</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white font-bold"
            asChild
          >
            <Link href="#checklist">View Our Technical Restoration Checklist</Link>
          </Button>
        </div>
        <div className="text-xs text-white/60 flex items-center justify-center gap-2 pt-2">
          <span>Confidential hotline: {contactInfo.phone}</span>
          <span>·</span>
          <span>Email: {contactInfo.email}</span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 9 — Accessible Expandable FAQ
// ============================================================
type FaqItem = {
  q: string;
  a: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Are your cleaners insured for forensic and trauma work?",
    a: "Absolutely. Maundy Clean is a fully insured, registered professional cleaning company with technicians trained in the complete range of biohazard and trauma techniques.",
  },
  {
    q: "Do you provide your own specialist equipment?",
    a: "Yes. We supply all our own professional-grade machinery, including ozone generators, HEPA vacuums, and non-toxic sterilising detergents, which are included in your quote.",
  },
  {
    q: "Can you work out-of-hours for discretion?",
    a: "Yes. We offer flexible scheduling 7 days a week, including early mornings or late evenings, to ensure we provide a discreet service that respects your privacy.",
  },
];

export function CrimeSceneCleanupSeoFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background text-[var(--ink)] border-t border-[var(--border)]">
      <div className="max-w-[800px] mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight leading-tight">
            Common Inquiries About Crime Scene Cleanup & Decontamination
          </h2>
        </div>

        <div className="space-y-4 pt-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[var(--border)] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4.5 text-left font-display font-bold text-sm sm:text-base text-[var(--ink)] hover:text-[var(--brand)] flex justify-between items-center gap-4 transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--muted-foreground)] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[var(--brand)]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-[var(--muted-foreground)] border-t border-[var(--border)] bg-[var(--cream)]/30">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

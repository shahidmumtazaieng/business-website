"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
import { useState } from "react";

const REGIONAL_GROUPS = [
  {
    region: "Central Belt",
    slug: "central-belt",
    cities: [
      { city: "Glasgow", slug: "glasgow" },
      { city: "Edinburgh", slug: "edinburgh" },
      { city: "Stirling", slug: "stirling" },
      { city: "Falkirk", slug: "falkirk" },
      { city: "Livingston", slug: "livingston" },
      { city: "East Kilbride", slug: "east-kilbride" },
      { city: "Paisley", slug: "paisley" },
      { city: "Hamilton", slug: "hamilton" },
      { city: "Motherwell", slug: "motherwell" },
      { city: "Wishaw", slug: "wishaw" },
      { city: "Coatbridge", slug: "coatbridge" },
      { city: "Airdrie", slug: "airdrie" },
    ],
  },
  {
    region: "East & Fife",
    slug: "east",
    cities: [
      { city: "Dunfermline", slug: "dunfermline" },
      { city: "Kirkcaldy", slug: "kirkcaldy" },
      { city: "Glenrothes", slug: "glenrothes" },
      { city: "St Andrews", slug: "st-andrews" },
      { city: "Dundee", slug: "dundee" },
      { city: "Perth", slug: "perth" },
    ],
  },
  {
    region: "North & Highlands",
    slug: "north",
    cities: [
      { city: "Aberdeen", slug: "aberdeen" },
      { city: "Inverness", slug: "inverness" },
      { city: "Elgin", slug: "elgin" },
      { city: "Peterhead", slug: "peterhead" },
      { city: "Stonehaven", slug: "stonehaven" },
      { city: "Inverurie", slug: "inverurie" },
      { city: "Fort William", slug: "fort-william" },
      { city: "Aviemore", slug: "aviemore" },
      { city: "Wick", slug: "wick" },
      { city: "Thurso", slug: "thurso" },
    ],
  },
  {
    region: "South & Borders",
    slug: "south",
    cities: [
      { city: "Ayr", slug: "ayr" },
      { city: "Kilmarnock", slug: "kilmarnock" },
      { city: "Greenock", slug: "greenock" },
      { city: "Dumfries", slug: "dumfries" },
      { city: "Stranraer", slug: "stranraer" },
      { city: "Galashiels", slug: "galashiels" },
      { city: "Bearsden", slug: "bearsden" },
      { city: "Milngavie", slug: "milngavie" },
    ],
  },
];

const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Licensed Forensic Technicians",
    text: "Maundy Clean is fully qualified and accredited in forensic, trauma, and crime scene decontaminations. We never sub-contract or use unvetted labor.",
  },
  {
    icon: Users,
    title: "100% Discreet Operation",
    text: "We arrive in completely unmarked vehicles and work with absolute privacy and sensitivity to protect our clients' dignity and security.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Safe Neutralization",
    text: "We use certified low-toxicity, child-safe, and pet-safe products once biological pathogens have been completely neutralized to preserve your space as a non-toxic sanctuary.",
  },
  {
    icon: HeartPulse,
    title: "Total Incident Management",
    text: "From detailed risk assessments to licensed biohazardous waste transportation and final disposal notes, we provide comprehensive documentation for every phase.",
  },
];

const NEAR_ME_FAQS = [
  {
    q: "How quickly can a crime scene cleaning crew respond?",
    a: "We operate a 24/7 emergency hotline across Scotland and can typically dispatch a certified crew to any Central Belt location in under 2 hours, with slightly longer transit windows for rural Highlands and Border areas.",
  },
  {
    q: "Do your crime scene services cover domestic residences?",
    a: "Yes. We work extensively with private homeowners, tenants, local authorities, and housing associations to restore residential properties, tenement flats, and estate buildings back to complete safety.",
  },
  {
    q: "Are the cleaning products and methods safe for family and pets?",
    a: "Yes. While we must use hospital-grade, high-level virucides to neutralize pathogens like HIV, Hepatitis, and dangerous bacteria, we perform a thorough follow-up neutralization and wash-down using certified non-toxic, child-safe, and pet-safe products to ensure the environment is fully safe for re-entry.",
  },
  {
    q: "How do you handle hazardous waste disposal?",
    a: "We are licensed SEPA (Scottish Environment Protection Agency) waste carriers. All biohazardous items, sharps, and biological materials are packed in approved hazardous waste containers and sent directly to licensed high-temperature incinerators. We issue formal waste transfer documentation for your compliance files.",
  },
];

export function CrimeSceneCleanupNearMeHero() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="bg-background text-[var(--ink)]">
      {/* SECTION 1: Banner Hero */}
      <section className="relative min-h-[460px] flex items-center justify-center bg-[var(--brand-dark)] text-white overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://sfile.chatglm.cn/images-ppt/biohazard-cleaning.jpg"
            alt="Crime Scene Cleaning Near Me"
            className="w-full h-full object-cover object-center opacity-20 scale-105 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-dark)]/90 via-[var(--brand-dark)]/85 to-[var(--brand-dark)]" />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            24/7 National Dispatch Directories
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
            Crime Scene Cleaning Near Me in Scotland
          </h1>
          <p className="text-base sm:text-lg text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            Find certified, discreet, and HSE-compliant crime scene and trauma scene decontamination crews in your local Scottish area. On-site within 2 hours across the Central Belt.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] hover:text-white font-bold tracking-tight shadow-lg shadow-[var(--gold)]/20"
              asChild
            >
              <Link href="/quote">Request Emergency Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-bold"
              asChild
            >
              <Link href="#locations">Browse Regional Directories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: Compact Trust Bar */}
      <section className="py-10 bg-[var(--cream)] border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-8 lg:gap-16 text-center">
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-[var(--brand)]">2 Hours</div>
            <div className="text-[11px] text-[var(--muted-foreground)] uppercase font-semibold tracking-wider">Average Dispatch</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-[var(--brand)]">100%</div>
            <div className="text-[11px] text-[var(--muted-foreground)] uppercase font-semibold tracking-wider">Unmarked Discreet Vans</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-[var(--brand)]">Licensed</div>
            <div className="text-[11px] text-[var(--muted-foreground)] uppercase font-semibold tracking-wider">SEPA Waste Carrier</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-[var(--brand)]">HSE</div>
            <div className="text-[11px] text-[var(--muted-foreground)] uppercase font-semibold tracking-wider">Compliant Protocols</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Locations Grid */}
      <section id="locations" className="scroll-mt-20 py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
              Active Regional Hubs
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">
              Select Your Local Area Directory
            </h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              We operate emergency response units based out of four regional depots. Select your location from the lists below to read local dispatch details, contact emergency phone lines, or lock in service agreements.
            </p>
          </div>

          <div className="space-y-10 pt-6">
            {REGIONAL_GROUPS.map((group) => (
              <div
                key={group.slug}
                id={group.slug}
                className="scroll-mt-24 p-6 sm:p-8 bg-[var(--cream)] rounded-3xl border border-[var(--border)] space-y-6"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--brand)] flex items-center justify-center text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl">
                    {group.region} Directory
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {group.cities.map((city) => (
                    <div
                      key={city.slug}
                      id={city.slug}
                      className="p-3 bg-white rounded-xl border border-[var(--border)] shadow-sm hover:border-[var(--brand)] transition-colors group relative"
                    >
                      <div className="font-bold text-sm tracking-tight text-[var(--ink)]">
                        {city.city}
                      </div>
                      <div className="text-[10px] text-[var(--muted-foreground)] mt-0.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Local Response Live
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Trust Pillars */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-3xl font-extrabold tracking-tight leading-tight">
              A Higher Standard of Forensic Cleanliness
            </h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              Crime scene and trauma cleanup requires certified specialists. At Maundy Clean, our technical staff are rigorously trained and equipped for any sensitive environment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 pt-6">
            {TRUST_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-[var(--border)] space-y-4 hover:border-[var(--brand)] hover:shadow-brand transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] text-[var(--brand)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-sm sm:text-base leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ Accordion */}
      <section className="py-16 bg-background">
        <div className="max-w-[800px] mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display text-3xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 pt-4">
            {NEAR_ME_FAQS.map((faq, idx) => {
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
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--muted-foreground)] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[var(--brand)]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-[var(--muted-foreground)] border-t border-[var(--border)] bg-[var(--cream)]/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: Cross Link / Specialty Pages */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-3xl font-extrabold tracking-tight">
              Our Structural Cleaning Suites
            </h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Restoring properties from trauma or forensic risk involves sequential steps. Discover our adjacent cleaning programs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="bg-white p-6 rounded-2xl border border-[var(--border)] flex flex-col justify-between">
              <div className="space-y-3">
                <Home className="w-8 h-8 text-[var(--brand)]" />
                <h3 className="font-display font-bold text-sm sm:text-base">Recurring Home Cleaning</h3>
                <p className="text-xs text-[var(--muted-foreground)]">Ongoing, weekly or fortnightly maintenance programs to sustain biological sanitation.</p>
              </div>
              <Link href="/services/recurring-home-cleaning" className="text-xs font-bold text-[var(--brand)] hover:underline inline-flex items-center gap-1 mt-4">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[var(--border)] flex flex-col justify-between">
              <div className="space-y-3">
                <KeyRound className="w-8 h-8 text-[var(--brand)]" />
                <h3 className="font-display font-bold text-sm sm:text-base">Move-In / Move-Out Cleaning</h3>
                <p className="text-xs text-[var(--muted-foreground)]">Complete end-of-tenancy property decontamination before handovers or new lets.</p>
              </div>
              <Link href="/services/move-in-out-cleaning" className="text-xs font-bold text-[var(--brand)] hover:underline inline-flex items-center gap-1 mt-4">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[var(--border)] flex flex-col justify-between">
              <div className="space-y-3">
                <Hammer className="w-8 h-8 text-[var(--brand)]" />
                <h3 className="font-display font-bold text-sm sm:text-base">After Builders Reset</h3>
                <p className="text-xs text-[var(--muted-foreground)]">Technical dust and chemical particulate extraction after structural repairs or renovations.</p>
              </div>
              <Link href="/services/post-construction-cleaning" className="text-xs font-bold text-[var(--brand)] hover:underline inline-flex items-center gap-1 mt-4">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[var(--border)] flex flex-col justify-between">
              <div className="space-y-3">
                <ShieldCheck className="w-8 h-8 text-[var(--brand)]" />
                <h3 className="font-display font-bold text-sm sm:text-base">Antiviral Sanitisation</h3>
                <p className="text-xs text-[var(--muted-foreground)]">Ongoing protection and high-level disinfection for office workspaces and communal lobbies.</p>
              </div>
              <Link href="/services/disinfection-services" className="text-xs font-bold text-[var(--brand)] hover:underline inline-flex items-center gap-1 mt-4">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <section className="py-16 bg-[var(--brand-dark)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,color-mix(in_oklch,var(--gold)_8%,transparent)_0,transparent_50%)]" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 space-y-6">
          <h2 className="font-display text-3xl font-extrabold">
            Request Local Crime Scene Cleaning Dispatch
          </h2>
          <p className="text-sm text-white/90 max-w-xl mx-auto leading-relaxed">
            Our teams are strategically positioned in Glasgow, Edinburgh, Aberdeen, and Inverness for maximum speed. Get a safe, discreet, and fast estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] hover:text-white font-bold"
              asChild
            >
              <Link href="/quote">Request Emergency Decontamination</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold"
              asChild
            >
              <a href={`tel:${contactInfo.phone}`}>Call Urgent Line: {contactInfo.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

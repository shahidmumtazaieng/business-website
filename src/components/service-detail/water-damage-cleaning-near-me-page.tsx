"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle,
  Clock,
  ThumbsUp,
  Droplet,
  Flame,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Regional locations categorized precisely into Scottish regions
// ============================================================
const REGIONAL_LOCATIONS = {
  "Greater Glasgow & West": [
    { city: "Glasgow", slug: "glasgow", postcodes: "G1-G82" },
    { city: "Paisley", slug: "paisley", postcodes: "PA1-PA3" },
    { city: "East Kilbride", slug: "east-kilbride", postcodes: "G74-G75" },
    { city: "Hamilton", slug: "hamilton", postcodes: "ML3" },
    { city: "Ayr", slug: "ayr", postcodes: "KA7-KA8" },
    { city: "Kilmarnock", slug: "kilmarnock", postcodes: "KA1-KA3" },
    { city: "Greenock", slug: "greenock", postcodes: "PA15-PA16" },
    { city: "Bearsden", slug: "bearsden", postcodes: "G61" },
    { city: "Milngavie", slug: "milngavie", postcodes: "G62" },
    { city: "Bishopbriggs", slug: "bishopbriggs", postcodes: "G64" },
    { city: "Giffnock", slug: "giffnock", postcodes: "G46" },
    { city: "Newton Mearns", slug: "newton-mearns", postcodes: "G77" },
    { city: "Clarkston", slug: "clarkston", postcodes: "G76" },
    { city: "Barrhead", slug: "barrhead", postcodes: "G78" },
    { city: "Johnstone", slug: "johnstone", postcodes: "PA5" },
    { city: "Renfrew", slug: "renfrew", postcodes: "PA4" },
    { city: "Rutherglen", slug: "rutherglen", postcodes: "G73" },
  ],
  "Edinburgh & The Lothians": [
    { city: "Edinburgh", slug: "edinburgh", postcodes: "EH1-EH17" },
    { city: "Livingston", slug: "livingston", postcodes: "EH54" },
  ],
  "Central & Tayside": [
    { city: "Dundee", slug: "dundee", postcodes: "DD1-DD5" },
    { city: "Stirling", slug: "stirling", postcodes: "FK7-FK9" },
    { city: "Perth", slug: "perth", postcodes: "PH1-PH2" },
    { city: "Falkirk", slug: "falkirk", postcodes: "FK1-FK2" },
    { city: "Coatbridge", slug: "coatbridge", postcodes: "ML5" },
    { city: "Airdrie", slug: "airdrie", postcodes: "ML6" },
    { city: "Motherwell", slug: "motherwell", postcodes: "ML1" },
    { city: "Wishaw", slug: "wishaw", postcodes: "ML2" },
    { city: "Cambuslang", slug: "cambuslang", postcodes: "G72" },
    { city: "Bellshill", slug: "bellshill", postcodes: "ML4" },
    { city: "Lenzie", slug: "lenzie", postcodes: "G66" },
  ],
  "Fife & The North": [
    { city: "Aberdeen", slug: "aberdeen", postcodes: "AB10-AB25" },
    { city: "Inverness", slug: "inverness", postcodes: "IV1-IV3" },
    { city: "Dunfermline", slug: "dunfermline", postcodes: "KY11-KY12" },
    { city: "Kirkcaldy", slug: "kirkcaldy", postcodes: "KY1-KY2" },
    { city: "Glenrothes", slug: "glenrothes", postcodes: "KY6-KY7" },
    { city: "Dundonald", slug: "dundonald", postcodes: "KA2" },
  ],
};

const IMG = {
  hero: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-22%20at%208.35.15%20PM.jpeg",
  mapPlaceholder: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
};

// ============================================================
// Hero Section
// ============================================================
export function WaterDamageCleaningNearMeHero() {
  return (
    <section className="relative min-h-[460px] flex items-center justify-center bg-[var(--brand-dark)] text-white overflow-hidden py-16">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.hero}
          alt="Water Damage Restoration Scotland Near Me"
          className="w-full h-full object-cover opacity-20 scale-105 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-dark)]/90 via-[var(--brand-dark)]/85 to-[var(--brand-dark)]" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Local Emergency & Programmed Response
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]">
          Water Damage Restoration & Flood Cleaning Services Near Me
        </h1>
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Localised emergency water removal and structural restoration specialists serving Glasgow, Edinburgh, Aberdeen, Dundee, and all surrounding Scottish municipalities.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] hover:text-white font-bold tracking-tight shadow-lg"
            asChild
          >
            <Link href="/quote">Request Emergency Local Response</Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="border border-white/30 text-white hover:bg-white/10 hover:text-white font-bold"
            asChild
          >
            <Link href="#locations">Select Your Scottish Municipality</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Regional Interactive Grid
// ============================================================
export function WaterDamageCleaningNearMeGrid() {
  const [activeTab, setActiveTab] = useState<string>("All Regions");

  const regions = ["All Regions", ...Object.keys(REGIONAL_LOCATIONS)];

  return (
    <section id="locations" className="scroll-mt-20 py-16 bg-background text-[var(--ink)]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Regional Directory
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Certified Local Water Damage Restoration Coverage Areas
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
            Maundy Clean dispatch depots are strategically situated across Scotland. Select your region below to find local postcode details and book a local team.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-[var(--border)] pb-4">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveTab(region)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === region
                  ? "bg-[var(--brand)] text-white shadow"
                  : "bg-[var(--cream)] text-[var(--ink)] hover:bg-[var(--brand-light)] hover:text-[var(--brand)]"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Grid display */}
        <div className="space-y-12 pt-6">
          {Object.entries(REGIONAL_LOCATIONS).map(([regionName, cities]) => {
            if (activeTab !== "All Regions" && activeTab !== regionName) return null;

            return (
              <div key={regionName} className="space-y-6">
                <h3 className="font-display font-extrabold text-xl text-[var(--brand-dark)] border-l-4 border-[var(--brand)] pl-3">
                  {regionName}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <div
                      key={city.slug}
                      id={city.slug}
                      className="bg-white rounded-2xl border border-[var(--border)] p-6 hover:shadow-brand transition-all flex flex-col justify-between scroll-mt-24"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-display font-bold text-lg text-[var(--ink)]">
                              {city.city}
                            </h4>
                            <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                              Postcode range: {city.postcodes}
                            </p>
                          </div>
                          <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                            Active Crew
                          </span>
                        </div>

                        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                          Professional water damage cleaning, moisture detection, structural extraction, and comprehensive dampness sanitisation services for residential and commercial spaces in {city.city}.
                        </p>

                        <div className="space-y-2 border-t border-[var(--border)] pt-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink)]">
                            <Clock className="w-4 h-4 text-[var(--brand)] shrink-0" />
                            <span>Response Time: Under 2 Hours</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink)]">
                            <Award className="w-4 h-4 text-[var(--brand)] shrink-0" />
                            <span>Certification: HSE & COSHH Compliant</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <Button
                          size="sm"
                          className="w-full bg-[var(--brand-light)] hover:bg-[var(--brand)] text-[var(--brand)] hover:text-white font-bold transition-all shadow-sm"
                          asChild
                        >
                          <Link href={`/quote?location=${city.slug}`}>
                            Book {city.city} Restoration Team
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Service Dispatch Hub Map / Graphic Side-by-Side
// ============================================================
export function WaterDamageCleaningNearMeDispatch() {
  return (
    <section className="py-16 bg-[var(--cream)] text-[var(--ink)]">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div className="space-y-6">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Technical Operations
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Rapid Dispatch and Diagnostic Response Protocol
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--muted-foreground)]">
            <p>
              When dealing with severe moisture issues, timing is crucial. Our localized dispatch procedure ensures that within hours of your contact, a fully prepared Maundy Clean crew is on-site with the necessary containment tools.
            </p>
            <p>
              We don&apos;t just wipe away the visible moisture; we identify the underlying moisture sources (such as leaks or condensation issues) and use specialized dehumidification and air scrubbers to trap biological pollutants, preventing cross-contamination to unaffected rooms.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white p-4 rounded-xl border border-[var(--border)]">
              <div className="text-xl font-extrabold text-[var(--brand)]">90+ Mins</div>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">Average response time for urgent local dispatch.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[var(--border)]">
              <div className="text-xl font-extrabold text-[var(--brand)]">HSE Compliant</div>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">Full adherence to COSHH guidelines.</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-square shadow-lg border border-[var(--border)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG.mapPlaceholder}
            alt="Maundy Clean Scotland Service Areas Map"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-black/40 backdrop-blur rounded-xl border border-white/10">
            <div className="text-xs font-bold text-[var(--gold)] uppercase">Emergency Hotline</div>
            <div className="text-sm font-semibold mt-0.5">Call {contactInfo.phone} for immediate local dispatch.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Mid-Page Call-To-Action (Above FAQ)
// ============================================================
export function WaterDamageCleaningNearMeCta() {
  return (
    <section className="py-16 bg-[var(--brand-dark)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,color-mix(in_oklch,var(--gold)_8%,transparent)_0,transparent_50%)]" />
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center space-y-6">
        <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
          Ready to Connect with Your Local Water Damage Restoration Specialists?
        </h3>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Don&apos;t let water damage affect the air quality and structure of your property. Our localized teams are on standby across Scotland to restore biological safety, cleanliness, and peace of mind.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] hover:text-white font-bold tracking-tight shadow-lg shadow-[var(--gold)]/20"
            asChild
          >
            <Link href="/quote">Request Your Bespoke Local Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="border border-white/30 text-white hover:bg-white/10 hover:text-white font-bold"
            asChild
          >
            <Link href="/services/water-damage-cleaning">View Service Details</Link>
          </Button>
        </div>
        <div className="text-xs text-white/60 pt-2">
          Contact our operations desk directly: {contactInfo.phone} · {contactInfo.email}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Expandable FAQ Section
// ============================================================
type FaqItem = {
  q: string;
  a: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How quickly can your local water damage restoration team arrive?",
    a: "We have local dispatch depots across Scotland's major cities, allowing us to respond to emergency requests within under 2 hours in most Central Belt municipalities.",
  },
  {
    q: "Are your local crews fully certified and insured?",
    a: "Yes. All our technicians are fully vetted, background-checked, and highly trained in HSE and COSHH guidelines. We carry £5M public liability insurance as standard.",
  },
  {
    q: "Can you provide a moisture diagnostic report?",
    a: "Absolutely. As part of our professional service, we can inspect for underlying damp and moisture ingress using electronic thermal imaging and moisture meters to suggest long-term prevention steps.",
  },
];

export function WaterDamageCleaningNearMeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background text-[var(--ink)] border-t border-[var(--border)]">
      <div className="max-w-[800px] mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight leading-tight">
            Common Local Water Damage Restoration Questions
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

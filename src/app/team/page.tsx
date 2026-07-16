import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CompanyPageHero } from "@/components/company/company-hero";
import {
  CompanyFinalCta,
  CompanySectionHeader,
} from "@/components/company/company-sections";
import { IMG } from "@/lib/site-data";
import { Award, Shield, Leaf, Clock, Star, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | Maundy Clean Leadership & Crew",
  description:
    "Meet the leadership team and operatives behind Maundy Clean. 220 PVG-checked professionals across Scotland. Above-Living-Wage pay, contracted hours, promoted from within.",
  keywords: [
    "Maundy Clean team",
    "Amanda Maundy founder",
    "cleaning company leadership Scotland",
    "PVG-checked cleaners",
    "cleaning careers Scotland",
  ],
  alternates: { canonical: "/team" },
};

const leadership = [
  {
    name: "Amanda Maundy",
    role: "Founder & Managing Director",
    initials: "AM",
    bio: "Glasgow-born hospitality veteran. 15 years running boutique hotels in the city centre before founding Maundy Clean in 2014. Wrote the original 14-page cleaning protocol that grew into our 60-document library. Still answers the phone when a client calls the office directly.",
    focus: ["Strategy", "Client relationships", "Protocol library"],
    years: "12+",
  },
  {
    name: "Callum Bain",
    role: "Operations Director",
    initials: "CB",
    bio: "Joined in 2016 as depot manager for Leith. Promoted to Ops Director in 2020 after restructuring the post-pandemic electrostatic division. Runs crew scheduling, depot logistics, and the 24/7 emergency response rota. Lives in Edinburgh.",
    focus: ["Crew scheduling", "Depot logistics", "Emergency response"],
    years: "9",
  },
  {
    name: "Dr Fiona Reid",
    role: "Head of Compliance & Training",
    initials: "FR",
    bio: "PhD in microbiology (University of Glasgow). Joined in 2019 to formalise our HSE HSG272 biohazard protocol. Now owns the training curriculum — every operative completes her 5-week induction and annual refresher. Writes our ATP swab thresholds and EN 14476 chemical protocols.",
    focus: ["HSE HSG272 protocol", "Training curriculum", "Compliance audits"],
    years: "7",
  },
  {
    name: "Iain Sutherland",
    role: "Commercial Director",
    initials: "IS",
    bio: "Ex-Procter & Gamble commercial lead, joined in 2018 to build the B2B book. Owns client relationships for NHS Trusts, local authorities, university estates and corporate offices. Negotiates framework agreements and tender responses. Based in Aberdeen.",
    focus: ["B2B contracts", "Tender responses", "Framework agreements"],
    years: "8",
  },
  {
    name: "Mairi Sinclair",
    role: "Head of People & Recruitment",
    initials: "MS",
    bio: "Ex-Scotland energy-sector HR lead. Joined in 2021 to professionalise recruitment. Owns PVG-checking, the above-Living-Wage pay structure, contracted-hours policy, and the promote-from-within ladder. Crew retention up from 71% to 94% on her watch.",
    focus: ["PVG-checking", "Pay & benefits", "Crew retention"],
    years: "5",
  },
  {
    name: "Ross Paterson",
    role: "Head of Green Chemistry",
    initials: "RP",
    bio: "MSc in green chemistry (Heriot-Watt). Joined in 2020 to lead our EU Ecolabel transition. Owns product sourcing, refillable-container logistics, microfibre laundering protocol, and our EN 1276 bactericidal certification. Writes the safety datasheets library.",
    focus: ["EU Ecolabel sourcing", "Chemistry audits", "Refill logistics"],
    years: "6",
  },
];

const crewStats = [
  { icon: Shield, value: "100%", label: "PVG-checked" },
  { icon: Award, value: "94%", label: "Year-on-year retention" },
  { icon: Star, value: "4.9/5", label: "Crew-rated by clients" },
  { icon: Clock, value: "5 wks", label: "Induction training" },
];

const ladder = [
  {
    title: "Operative (Level 1)",
    pay: "£12.50/hr",
    description:
      "Entry level. 5-week induction with Dr Fiona Reid covering residential and commercial protocols, H&S, COSHH, EN 14476 chemistry, and PVG briefing. Above Scottish Living Wage from day one.",
  },
  {
    title: "Senior Operative (Level 2)",
    pay: "£14.20/hr",
    description:
      "After 12 months and 200+ visits. Can lead a two-person crew. Cross-trained in a second specialism (e.g. residential + biohazard). Mentors Level 1 inductees.",
  },
  {
    title: "Lead Technician (Level 3)",
    pay: "£16.80/hr",
    description:
      "After 3 years. Leads multi-room remediations. Authorised signatory on ATP swab verification. Runs site-specific risk assessments. Trained in HSE HSG272 incident command.",
  },
  {
    title: "Depot Manager / Specialist Lead",
    pay: "£34-46k/yr",
    description:
      "After 5 years. Manages a depot (Glasgow, Edinburgh, Aberdeen, Inverness) or a specialist division (biohazard, cleanroom, food-processing). Salaried, with profit-share.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Our Team"
          breadcrumb="Our Team"
          title={
            <>
              220 people.
              <br />
              <span className="text-[var(--brand)]">One written protocol.</span>
            </>
          }
          subhead="Every operative is PVG-checked, trained in a primary specialism, paid above the Scottish Living Wage on contracted hours, and promoted from within. The result: 94% crew retention year-on-year — and the same two faces showing up at your door every week."
          image={IMG.heroClean}
          imageAlt="Maundy Clean operatives"
          stats={[
            { value: "220", label: "Operatives" },
            { value: "94%", label: "Crew retention" },
            { value: "100%", label: "PVG-checked" },
            { value: "£12.50+", label: "Starting hourly" },
          ]}
        />

        {/* ---------- CREW STATS ---------- */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {crewStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="bg-[var(--cream)]/60 rounded-2xl p-6 border border-[var(--border)] text-center"
                  >
                    <Icon className="w-8 h-8 text-[var(--brand)] mx-auto mb-3" />
                    <div className="text-3xl font-extrabold text-[var(--ink)]">{s.value}</div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-1">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- LEADERSHIP ---------- */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Leadership team"
              title={<>Six people, all Scotland-based, all hands-on.</>}
              subhead="Our executive team has a combined 47 years of cleaning-industry experience — plus hospitality, microbiology, chemistry, HR and commercial-tendering backgrounds. Every one of them still visits client sites every month."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {leadership.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl p-7 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white font-display font-bold text-xl flex items-center justify-center shrink-0">
                      {p.initials}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--ink)] text-lg">{p.name}</div>
                      <div className="text-xs text-[var(--brand)] font-semibold">{p.role}</div>
                      <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                        {p.years} years with Maundy Clean
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {p.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.focus.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] font-medium px-2 py-1 rounded-full bg-[var(--brand-light)] text-[var(--brand-dark)]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CAREER LADDER ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              eyebrow="Career ladder"
              title={<>Promoted from within — always.</>}
              subhead="We don't hire depot managers from outside. Every leadership role at Maundy Clean is held by someone who started as a Level 1 operative. The ladder is transparent, the pay bands are published, and the promotion criteria are written down. Here's how it works."
            />
            <div className="space-y-4 max-w-4xl mx-auto">
              {ladder.map((l, idx) => (
                <div
                  key={l.title}
                  className="bg-white rounded-2xl p-6 lg:p-7 border border-[var(--border)] flex flex-col lg:flex-row gap-5 lg:items-center"
                >
                  <div className="lg:w-20 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[var(--brand)] text-white font-bold flex items-center justify-center">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 flex-wrap mb-2">
                      <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                        {l.title}
                      </h3>
                      <span className="text-sm font-bold text-[var(--brand)] bg-[var(--brand-light)] px-2 py-0.5 rounded-full">
                        {l.pay}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {l.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-6 lg:p-8 rounded-2xl bg-[var(--cream)]/60 border border-[var(--border)]">
              <div className="flex items-start gap-4">
                <Leaf className="w-6 h-6 text-[var(--brand)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[var(--ink)] mb-2">
                    We don't run zero-hours contracts. Ever.
                  </h4>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Every operative — from Level 1 day-one to depot manager — is on a
                    contracted-hours agreement with guaranteed minimum hours, holiday pay,
                    pension enrolment, and sick pay. Crew retention sits at 94%
                    year-on-year because we treat cleaning as a career, not a gig. (We're
                    not currently hiring — when we are, vacancies are posted on our Contact
                    page and on LinkedIn.)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="The right crew, every week, for years."
          subhead="When you book a recurring clean with Maundy Clean, you're not getting a rotating cast of strangers. You're getting a named two-person crew who'll learn your property, your preferences, and your 'don't touch that vase' instructions — and stay with you for years."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

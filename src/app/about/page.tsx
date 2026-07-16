import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CompanyPageHero } from "@/components/company/company-hero";
import {
  CompanyFinalCta,
  CompanySectionHeader,
} from "@/components/company/company-sections";
import { contactInfo, IMG } from "@/lib/site-data";
import {
  Shield,
  Leaf,
  Heart,
  Award,
  Clock,
  Users,
  Star,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Maundy Clean | 12+ Years of PVG-Checked Cleaning Across Scotland",
  description:
    "Maundy Clean is a Glasgow-founded, Scotland-wide cleaning company. 12+ years in business, 6,200+ 5-star reviews, 72 locations, 98 services. PVG-checked crews, eco-friendly chemistry, 100% satisfaction guarantee.",
  keywords: [
    "about Maundy Clean",
    "Scottish cleaning company",
    "Glasgow cleaning company",
    "PVG-checked cleaners Scotland",
    "eco-friendly cleaning Scotland",
    "cleaning company history",
  ],
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Shield,
    title: "Trust, verified",
    description:
      "Every operative is PVG-checked, uniformed, and trained to a written protocol. Every visit is logged, every quote is itemised, every promise is in writing. We don't do verbal agreements — the trust our clients place in us is documented on every job sheet, every portal entry, every invoice. We carry £5m public liability, £10m employer's liability, and we name your organisation on our policy as additional insured. Trust isn't a marketing claim for us — it's an audit trail.",
  },
  {
    icon: Leaf,
    title: "Genuinely green",
    description:
      "EU Ecolabel-certified chemistry throughout — no bleach, no phosphates, no NTA, no EDTA, no greenwashed 'natural' claims. Plant-based surfactants in refillable 5L containers dosed into reusable spray bottles. Microfibre cloths laundered at 90°C, 200+ wash cycles before retirement. The EU Ecolabel is the strictest ecolabel in Europe — and we use it as the baseline, not the upgrade. Our EN 1276 bactericidal certification proves eco doesn't mean weak.",
  },
  {
    icon: Heart,
    title: "Same crew, every visit",
    description:
      "We don't rotate crews. The same PVG-checked, uniformed professionals who clean your home on week one are the same ones who show up on week fifty-two. They learn your property, your preferences, your pets, your 'don't touch that vase' instructions. Crew retention is 94% year-on-year — we pay above the Scottish Living Wage, offer contracted hours (not zero-hours), and promote from within. The result: 98% client retention. People stay with people they trust.",
  },
  {
    icon: Award,
    title: "Specialist, not generalist",
    description:
      "98 distinct services across 8 categories — from recurring home cleaning to cleanroom ISO 14644, from biohazard HSE HSG272 to holiday-let turnover. Each operative is trained in a primary specialism (residential, commercial, medical, industrial, specialty) and cross-trained in adjacent areas. We don't send a domestic cleaner to an NHS clinic; we don't send a biohazard tech to a nursery. The right training, the right chemistry, the right protocol — every time.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Founded in Glasgow",
    description:
      "Amanda Maundy starts Maundy Clean with two vans and three PVG-checked operatives, serving the West End and South Side of Glasgow. The first 18 months are spent building a written protocol library that still underpins the company today.",
  },
  {
    year: "2016",
    title: "Edinburgh expansion",
    description:
      "Second depot opens in Leith. Crew roster grows to 18. First commercial contract won — a 240-desk corporate office in Edinburgh Quay that we still hold today. First 100 5-star reviews posted.",
  },
  {
    year: "2018",
    title: "Specialty division launched",
    description:
      "Biohazard remediation, hoarding cleanup, trauma cleanup and post-forensic cleaning added. HSE HSG272 protocol adopted. First local authority contract (void property remediation). Crew roster reaches 60.",
  },
  {
    year: "2020",
    title: "Pandemic response",
    description:
      "Electrostatic disinfection division spun up in 11 days. 1,200+ commercial sites disinfected in the first 90 days. EN 14476 virucidal chemistry adopted as standard. Featured in BBC Scotland and The Herald for hospital-grade disinfection protocols.",
  },
  {
    year: "2022",
    title: "Highlands & Islands",
    description:
      "Coverage extended to Inverness, Aviemore, Fort William and the island ferry-ports (Orkney, Shetland, Lewis, Skye). Ferry-timetable-aware scheduling introduced. Crew roster reaches 140. 4,000th 5-star review posted.",
  },
  {
    year: "2024",
    title: "98 services, 72 locations",
    description:
      "Cleanroom ISO 14644, food-processing FSA-compliant and pharma-aligned services launched. Coverage reaches 72 Scottish locations across 6 regions. Crew roster: 220. Reviews: 6,200+. Client retention: 98%.",
  },
];

const leadershipPreview = [
  { name: "Amanda Maundy", role: "Founder & Managing Director", initials: "AM" },
  { name: "Callum Bain", role: "Operations Director", initials: "CB" },
  { name: "Dr Fiona Reid", role: "Head of Compliance & Training", initials: "FR" },
  { name: "Iain Sutherland", role: "Commercial Director", initials: "IS" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="About Maundy Clean"
          breadcrumb="About"
          title={
            <>
              We started with two vans.
              <br />
              <span className="text-[var(--brand)]">
                Twelve years later, we clean Scotland.
              </span>
            </>
          }
          subhead="Maundy Clean is a Glasgow-founded, family-led cleaning company. We deliver 98 specialist services across 72 Scottish locations — from the tenements of Partick to the ferry-ports of Lerwick. PVG-checked crews, eco-friendly chemistry, and the same two-people-show-up-every-week promise we made on day one."
          image={IMG.heroCrew}
          imageAlt="Maundy Clean crew"
          stats={[
            { value: "12+", label: "Years in business" },
            { value: "6,200+", label: "5-star reviews" },
            { value: "72", label: "Scottish locations" },
            { value: "98%", label: "Client retention" },
          ]}
        />

        {/* ---------- STORY ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-24">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
                  Our story
                </span>
                <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight leading-tight">
                  From a West End close to a Scotland-wide crew.
                </h2>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                  <MapPin className="w-4 h-4 text-[var(--brand)]" />
                  412 Byres Road, Glasgow, G12 8AS
                </div>
              </div>

              <div className="space-y-6 text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  Maundy Clean was founded in 2014 by Amanda Maundy, a Glasgow-born
                  hospitality manager who'd spent fifteen years running boutique hotels in
                  the city centre. The catalyst was mundane: she couldn't find a domestic
                  cleaner she trusted for her own flat in Partick. Either they didn't show
                  up, or they showed up with bleach and ammonia in the same bucket, or they
                  wiped the toilet cloth across the kitchen counter. She wrote a 14-page
                  cleaning protocol — the kind she'd used to audit hotel housekeeping
                  teams — and hired two PVG-checked operatives.
                </p>
                <p>
                  The first 18 months were a study in slow, deliberate growth. Amanda
                  refused to take on more clients than her small team could serve to the
                  protocol. She turned away work — something the industry doesn't do —
                  because she wouldn't compromise the written standard. The protocol library
                  grew to 60 documents: how to clean a Victorian tenement close, how to
                  sanitise a nursery without triggering an asthma attack, how to turn a
                  holiday let in 90 minutes between ferry arrivals. That library still
                  underpins every job we run today.
                </p>
                <p>
                  By 2018 we'd expanded into Edinburgh, opened a Leith depot, and launched
                  our specialty division — biohazard remediation, hoarding cleanup, trauma
                  cleanup. The pandemic in 2020 forced us to spin up an electrostatic
                  disinfection division in 11 days; we disinfected 1,200+ commercial sites
                  in the first 90 days and were featured on BBC Scotland for the
                  hospital-grade protocol. By 2022 we'd reached the Highlands and Islands —
                  Inverness, Aviemore, Fort William, and the island ferry-ports of Orkney,
                  Shetland, Lewis and Skye.
                </p>
                <p>
                  Today we're 220 strong — every operative PVG-checked, uniformed, paid
                  above the Scottish Living Wage on contracted hours (never zero-hours),
                  and trained in a primary specialism. We hold 6,200+ five-star reviews
                  across Google, Trustpilot and Reviews.io. Client retention sits at 98%
                  year-on-year. We're still founder-led, still Glasgow-headquartered, and
                  still refuse to take on work we can't deliver to the protocol. The
                  two-van, three-operative, 14-page-protocol ethos of 2014 hasn't changed —
                  it's just been written down more often.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- VALUES ---------- */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="What we stand for"
              title={<>Four values, written down and audited.</>}
              subhead="Most cleaning companies have 'values' on a poster in the staff room. Ours are written into the protocol library, the recruitment criteria, the crew training manual, and the monthly internal audit. Here's what they look like in practice."
            />
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="bg-white rounded-2xl p-7 lg:p-8 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[var(--brand)]" />
                    </div>
                    <h3 className="font-display font-bold text-xl lg:text-2xl text-[var(--ink)] mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- TIMELINE ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="The Maundy Clean timeline"
              title={<>Twelve years, six chapters.</>}
              subhead="A short history of the company — from a Partick flat and two vans to 220 operatives across 72 Scottish locations."
            />
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-[var(--brand)]/20 -translate-x-1/2 hidden lg:block" />
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--brand)]/20 lg:hidden" />
              <div className="space-y-10">
                {milestones.map((m, idx) => (
                  <div
                    key={m.year}
                    className={`relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start ${
                      idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div
                      className={`absolute left-4 lg:left-1/2 top-2 w-3 h-3 rounded-full bg-[var(--brand)] -translate-x-1/2 ring-4 ring-white`}
                    />
                    <div className={idx % 2 === 1 ? "lg:text-left lg:pl-12" : "lg:text-right lg:pr-12"}>
                      <div className="text-3xl lg:text-4xl font-extrabold text-[var(--brand)] font-display">
                        {m.year}
                      </div>
                    </div>
                    <div className={idx % 2 === 1 ? "lg:pr-12" : "lg:pl-12"}>
                      <h3 className="font-display font-bold text-xl lg:text-2xl text-[var(--ink)] mb-2">
                        {m.title}
                      </h3>
                      <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- LEADERSHIP PREVIEW ---------- */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              eyebrow="Leadership"
              title={<>Meet the people running the show.</>}
              subhead="A four-person executive team, all Scotland-based, all hands-on. Full leadership bios and team photos over on the Our Team page."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {leadershipPreview.map((p) => (
                <Link
                  key={p.name}
                  href="/team"
                  className="group bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-md transition-all text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white font-display font-bold text-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    {p.initials}
                  </div>
                  <div className="font-bold text-[var(--ink)]">{p.name}</div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-1">{p.role}</div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold hover:text-[var(--brand-dark)]"
              >
                See the full team
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- TRUST STRIP ---------- */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, value: "220", label: "Operatives nationwide" },
                { icon: Star, value: "4.9/5", label: "Across 6,200+ reviews" },
                { icon: MapPin, value: "72", label: "Scottish locations" },
                { icon: Clock, value: "24/7", label: "Emergency response" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="flex items-center gap-4 p-5 rounded-xl bg-[var(--cream)]/60 border border-[var(--border)]"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--brand)]" />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[var(--ink)]">{s.value}</div>
                      <div className="text-xs text-[var(--muted-foreground)]">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Ready to meet your regular crew?"
          subhead="We'll match you with a PVG-checked team in your area, send a written quote within one business hour, and stand behind the work with our 100% satisfaction guarantee. No pushy sales, no contract pressure, no hidden fees."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

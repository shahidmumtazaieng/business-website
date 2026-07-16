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
import {
  Leaf,
  Shield,
  Recycle,
  FlaskConical,
  Droplet,
  Award,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Green Commitment | EU Ecolabel, Low-VOC, Plant-Based | Maundy Clean",
  description:
    "Maundy Clean's green commitment: EU Ecolabel-certified chemistry, low-VOC, plant-based, refillable containers, microfibre laundering, EN 1276 bactericidal. No bleach, no phosphates, no greenwashing.",
  keywords: [
    "eco-friendly cleaning Scotland",
    "EU Ecolabel cleaner",
    "low-VOC cleaning",
    "plant-based cleaning",
    "green cleaning commitment",
  ],
  alternates: { canonical: "/green-commitment" },
};

const certifications = [
  {
    icon: Award,
    title: "EU Ecolabel",
    description:
      "The strictest ecolabel in Europe. Bans bleach, phosphates, NTA, EDTA, LAS. Requires 28-day biodegradability, dermatological testing, cruelty-free certification, and proven EN-standard cleaning performance. We use it as the baseline — not the upgrade.",
  },
  {
    icon: FlaskConical,
    title: "EN 1276 bactericidal",
    description:
      "Our eco disinfectant passes EN 1276 — the European standard for bactericidal efficacy. Proven against 99.999% of common bacteria including E. coli, MRSA, Salmonella and Listeria. The 'eco = weak' stereotype is outdated. Modern plant-based chemistry passes the same tests as conventional.",
  },
  {
    icon: Shield,
    title: "Low-VOC, low-odour",
    description:
      "Volatile Organic Compounds cause headaches, eye irritation, respiratory symptoms. Our eco products are under 1% VOC (vs 10-30% in conventional products). No chemical smell on duvets, no fume-induced headaches, no airing-the-house-for-3-hours.",
  },
  {
    icon: Leaf,
    title: "Plant-based, not petroleum",
    description:
      "Surfactants from plant oils (coconut, rapeseed, corn) rather than petroleum. Lower carbon footprint, lower aquatic toxicity, faster biodegradability. The cleaning performance is identical — modern formulation chemistry has closed the gap entirely.",
  },
];

const commitments = [
  {
    title: "No bleach, ever",
    description:
      "Bleach (sodium hypochlorite) is a respiratory irritant, a corrosion risk, and a major contributor to aquatic toxicity when it reaches wastewater. We use oxygen-based alternatives (hydrogen peroxide, sodium percarbonate) that sanitise as effectively without the fumes or the aquatic damage. Bleach appears in zero products in our kit.",
  },
  {
    title: "No phosphates, no NTA, no EDTA",
    description:
      "These are chelating agents that persist in wastewater and contribute to algal blooms in Scottish lochs and rivers. The EU Ecolabel bans them outright. Our eco products use biodegradable alternatives (gluconate, citrate) that do the same job without the environmental persistence.",
  },
  {
    title: "Refillable containers, zero trigger-spray waste",
    description:
      "We use refillable 5L containers dosed into reusable spray bottles — not single-use trigger sprays. Over a year, a typical household prevents 30-50 plastic trigger-spray bottles from going to landfill. The 5L containers themselves are returned to the supplier for refilling — closed-loop supply chain.",
  },
  {
    title: "Microfibre laundering, not paper",
    description:
      "We use washable microfibre cloths (200+ wash cycles before retirement) and washable mop pads. Laundered at 90°C between visits to kill bacteria. We don't use paper towels for cleaning (only for biohazard cleanups). The microfibre captures bacteria physically as well as chemically — 99% removal with no disinfectant at all.",
  },
  {
    title: "Cruelty-free, dermatologically tested",
    description:
      "Every product we use is cruelty-free certified and dermatologically tested. No animal testing at any stage of the supply chain. No skin irritation, no contact dermatitis. Safe for babies, eczema sufferers, and anyone with sensitive skin. Our operatives don't even need to wear gloves (though they do, for hygiene reasons).",
  },
  {
    title: "Carbon-aware scheduling",
    description:
      "We route crews geographically to minimise vehicle miles. Our fleet is being transitioned to electric (3 vans so far, target 50% by 2027). Carbon offset is purchased for every ferry crossing to the islands. We measure and report scope 1, 2 and 3 emissions annually — the report is on our Press page.",
  },
];

const impact = [
  { value: "30-50", label: "Plastic bottles prevented per household per year" },
  { value: "200+", label: "Wash cycles per microfibre cloth before retirement" },
  { value: "<1%", label: "VOC content (vs 10-30% in conventional)" },
  { value: "28 days", label: "Full biodegradability of all surfactants" },
];

export default function GreenCommitmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Green Commitment"
          breadcrumb="Green Commitment"
          title={
            <>
              Genuinely green.
              <br />
              <span className="text-[var(--brand)]">Not greenwashed.</span>
            </>
          }
          subhead="Most cleaning companies slap a leaf icon on their homepage and call it eco-friendly. We don't. Every product we use carries the EU Ecolabel — the strictest ecolabel in Europe — and passes the same bactericidal tests as conventional chemistry. No bleach, no phosphates, no NTA, no EDTA, no vague 'natural' claims without certification. Here's exactly what we do and why."
          image={IMG.ecoSupplies}
          imageAlt="Eco-friendly cleaning supplies"
          stats={[
            { value: "EU Ecolabel", label: "Certified chemistry" },
            { value: "EN 1276", label: "Bactericidal tested" },
            { value: "<1%", label: "VOC content" },
            { value: "28 days", label: "To full biodegradability" },
          ]}
        />

        {/* ---------- CERTIFICATIONS ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Certifications that actually mean something"
              title={<>Four certifications. No marketing fluff.</>}
              subhead="Each of these is a regulated, independently-audited certification — not a self-awarded badge. We can produce the certificate number and audit history for any product on request."
            />
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {certifications.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="bg-white rounded-2xl p-7 lg:p-8 border border-[var(--border)] shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[var(--brand)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
                          {c.title}
                        </h3>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                          {c.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- COMMITMENTS ---------- */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              eyebrow="What we don't use"
              title={<>Six commitments, audited annually.</>}
              subhead="These aren't aspirational targets — they're hard rules. Every product is reviewed annually by our Head of Green Chemistry, Ross Paterson, against these criteria. Any product that fails any criterion is removed from the kit."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {commitments.map((c) => (
                <div
                  key={c.title}
                  className="bg-white rounded-2xl p-6 border border-[var(--border)]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="w-5 h-5 text-[var(--brand)]" />
                    <h3 className="font-bold text-[var(--ink)]">{c.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- IMPACT ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="The numbers"
              title={<>What this looks like in practice.</>}
              subhead="Concrete impact metrics from our 2024 internal audit. The full report is published on our Press page."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {impact.map((s) => (
                <div
                  key={s.label}
                  className="bg-gradient-to-br from-[var(--brand-light)]/60 to-[var(--cream)]/60 rounded-2xl p-6 border border-[var(--border)] text-center"
                >
                  <div className="text-3xl lg:text-4xl font-extrabold text-[var(--brand-dark)]">
                    {s.value}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-2 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-6 lg:p-8 rounded-2xl bg-white border border-[var(--border)]">
              <div className="flex items-start gap-4">
                <Droplet className="w-8 h-8 text-[var(--brand)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[var(--ink)] mb-2">
                    Does eco actually clean as well?
                  </h4>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Yes. We tested our eco range side-by-side with conventional chemistry
                    on grease, grime, limescale and bacteria. The eco products matched or
                    exceeded conventional performance on every test. The only difference:
                    dwell time on limescale is 5-10 minutes vs 2-5 minutes for
                    conventional. The cleaning result is identical. Modern plant-based
                    formulation chemistry has closed the gap entirely — the 'eco = weak'
                    stereotype is from 2010, not 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Want eco-friendly as standard?"
          subhead="Every Maundy Clean service can be delivered with our EU Ecolabel-certified eco protocol. Just ask when booking — we'll switch the chemistry, not the price. The cleaning result is identical."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
          bullets={[
            "EU Ecolabel-certified chemistry",
            "EN 1276 bactericidal — proven to work",
            "Refillable containers, zero trigger-spray waste",
            "No bleach, no phosphates, no greenwashing",
          ]}
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

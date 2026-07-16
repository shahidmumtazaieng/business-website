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
import { contactInfo, pricingTiers } from "@/lib/site-data";
import {
  Check,
  Star,
  ArrowRight,
  Home,
  Building2,
  Briefcase,
  Sparkles,
  Shield,
  Clock,
  Users,
  Phone,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Transparent Cleaning Prices Across Scotland | Maundy Clean",
  description:
    "Maundy Clean's published pricing: one-off from £89, weekly from £62/visit, fortnightly from £76/visit, move-out from £179, commercial custom-quoted. No hidden fees, no fuel surcharges, locked-in rate guarantee.",
  keywords: [
    "cleaning prices Scotland",
    "how much does cleaning cost",
    "house cleaning pricing",
    "commercial cleaning quote",
    "Maundy Clean prices",
  ],
  alternates: { canonical: "/pricing" },
};

const residentialAddOns = [
  { name: "Oven Cleaning", price: "£28", note: "Non-caustic, food-safe, 2-hour service" },
  { name: "Fridge Cleaning", price: "£22", note: "Interior deep clean & deodorising" },
  { name: "Inside-Cabinet Cleaning", price: "£35", note: "Per kitchen — drawers, runners, shelf liner" },
  { name: "Window Cleaning (interior)", price: "£18", note: "Per 5 windows, streak-free" },
  { name: "Carpet & Rug Cleaning", price: "£65", note: "Per room — HWE extraction, fast-dry" },
  { name: "Laundry & Folding", price: "£24", note: "Wash, dry, iron, fold, put away" },
  { name: "Ironing Service", price: "£18", note: "Per 2-hour session — hotel-finish" },
  { name: "Pet Area Sanitisation", price: "£26", note: "EN 14476 virucidal, pet-safe" },
  { name: "Eco-Friendly Green Clean", price: "+12%", note: "EU Ecolabel upgrade on any clean" },
  { name: "Electrostatic Disinfection", price: "£45", note: "Per room — outbreak response" },
];

const commercialServices = [
  { icon: Building2, name: "Office Cleaning", from: "£145", unit: "/visit", note: "Up to 2,000 sqft" },
  { icon: Building2, name: "Corporate Facility", from: "POA", unit: "", note: "2,000-10,000 sqft, framework agreement" },
  { icon: Briefcase, name: "Retail Store", from: "£120", unit: "/visit", note: "Per 1,500 sqft" },
  { icon: Building2, name: "Restaurant / QSR", from: "£185", unit: "/visit", note: "BOH + FOH, EHO-compliant" },
  { icon: Users, name: "Gym / Fitness Studio", from: "£165", unit: "/visit", note: "Per 3,000 sqft, MRSA-aware" },
  { icon: Briefcase, name: "Industrial Unit", from: "POA", unit: "", note: "10,000+ sqft, FSA/GMP-aware" },
];

const comparisonRows = [
  { feature: "Same PVG-checked crew every visit", oneTime: true, weekly: true, fortnightly: true, monthly: true, commercial: true },
  { feature: "All supplies & equipment included", oneTime: true, weekly: true, fortnightly: true, monthly: true, commercial: true },
  { feature: "100% satisfaction guarantee", oneTime: true, weekly: true, fortnightly: true, monthly: true, commercial: true },
  { feature: "Locked-in rate (12 months)", oneTime: false, weekly: true, fortnightly: true, monthly: true, commercial: true },
  { feature: "Priority scheduling", oneTime: false, weekly: true, fortnightly: true, monthly: false, commercial: true },
  { feature: "Member discount on add-ons", oneTime: false, weekly: "10%", fortnightly: "7%", monthly: "5%", commercial: "Custom" },
  { feature: "Free re-clean if unhappy", oneTime: false, weekly: true, fortnightly: true, monthly: true, commercial: true },
  { feature: "Named account manager", oneTime: false, weekly: false, fortnightly: false, monthly: false, commercial: true },
  { feature: "Monthly consolidated invoicing", oneTime: false, weekly: false, fortnightly: false, monthly: false, commercial: true },
  { feature: "Quarterly business review", oneTime: false, weekly: false, fortnightly: false, monthly: false, commercial: true },
];

const faqs = [
  {
    q: "Are these prices locked in for 12 months?",
    a: "Yes — for any recurring plan (weekly, fortnightly, monthly), the price you sign up for is locked in for 12 months. We don't do mid-contract price hikes. After 12 months, we review (typically 3-5% adjustment for inflation) and you can re-sign or cancel with 7 days' notice. Commercial framework agreements have their own price-review clause, typically 12-month fixed.",
  },
  {
    q: "What's not included in the published price?",
    a: "Nothing is hidden. The published price includes labour, supplies, equipment, travel within your area, and the satisfaction guarantee. Add-on services (oven, fridge, carpet, etc.) are priced separately and itemised on the same quote. The only extras are: parking charges if your property is in a paid-parking zone without visitor permits, and congestion-zone fees for central London-style ULEZ (not applicable in Scotland currently).",
  },
  {
    q: "Do you charge for the first visit?",
    a: "Yes, the first visit is charged at the normal rate — no 'trial clean' mark-up, no 'first-visit discount' that gets clawed back later. Some cleaning companies offer a free or 50% first clean as a hook; we don't, because the discount gets built back into subsequent visits. We'd rather charge a fair price from day one and let the quality sell the recurring plan.",
  },
  {
    q: "What if my clean takes longer than expected?",
    a: "For one-off cleans, the quote includes up to 2.5 hours for a 2-person crew. If the property is in worse condition than scoped (heavy soiling, hoarding, post-construction dust), we'll flag it on arrival and quote the additional time before starting — never silently running over. For recurring plans, the per-visit time is fixed; if a particular visit needs longer, we don't charge extra (we'd rather get it right).",
  },
  {
    q: "How do I pay? Do you take cash?",
    a: "Card (Visa, Mastercard, Amex), bank transfer, or Direct Debit. Commercial clients can apply for 30-day invoice terms. We don't take cash — everything is invoiced and traceable, which protects both you and our operatives. Payment is taken after the clean is completed and you've confirmed you're happy with it.",
  },
  {
    q: "Can I pause or cancel my recurring plan?",
    a: "Yes — 7 days' notice to pause (e.g. for a holiday) or cancel. No fees, no penalty, no 'exit charge'. If you pause for more than 8 weeks we'll release your crew to another client (with your permission) and find you a new regular crew when you resume. We'd rather keep the relationship warm than trap you in a contract.",
  },
];

const trustBadges = [
  { icon: Shield, title: "£5m public liability", note: "Every visit, every client" },
  { icon: Users, title: "PVG-checked crews", note: "Disclosure Scotland registered" },
  { icon: Star, title: "100% guarantee", note: "Free re-clean within 48 hours" },
  { icon: Clock, title: "Locked-in rates", note: "12-month price guarantee" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Pricing"
          breadcrumb="Pricing"
          title={
            <>
              No surprises.
              <br />
              <span className="text-[var(--brand)]">Just clean spaces.</span>
            </>
          }
          subhead="Flat-rate quotes locked in for 12 months. No hidden fees, no fuel surcharges, no 'well actually' add-ons after the work is done. Cancel or pause anytime. The price you see on the quote is the price you pay — every visit, for a year."
          ctaPrimary={{ label: "Get a Free Quote", href: "/quote" }}
          ctaSecondary={{ label: contactInfo.phone, href: contactInfo.phoneHref }}
          stats={[
            { value: "£89", label: "One-off cleans from" },
            { value: "£62", label: "Weekly plans from" },
            { value: "12 mo", label: "Rate lock guarantee" },
            { value: "0", label: "Hidden fees" },
          ]}
        />

        {/* TRUST BADGES */}
        <section className="py-12 lg:py-16 bg-background border-b border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {trustBadges.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="bg-[var(--cream)]/60 rounded-xl p-5 border border-[var(--border)] flex items-center gap-4"
                  >
                    <Icon className="w-8 h-8 text-[var(--brand)] shrink-0" />
                    <div>
                      <div className="font-bold text-[var(--ink)] text-sm">{b.title}</div>
                      <div className="text-xs text-[var(--muted-foreground)]">{b.note}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Residential plans"
              title={<>Six plans, one published price list.</>}
              subhead="Every plan below is a starting price — your final quote is itemised based on property size, condition, and frequency. The prices below are what most clients in 1-3 bed homes across central Scotland pay. No postcode premiums, no weekend surcharges."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-6 lg:p-7 border ${
                    tier.highlighted
                      ? "border-[var(--brand)] bg-[var(--brand-light)]/30 shadow-brand lg:scale-[1.02]"
                      : "border-[var(--border)] bg-white"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[var(--ink)] text-[10px] font-bold px-3 py-1 rounded-full">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                    {tier.name}
                  </h3>
                  <div className="text-sm text-[var(--muted-foreground)] mb-4">
                    {tier.tagline}
                  </div>
                  <div className="flex items-baseline gap-1 mb-5 pb-5 border-b border-[var(--border)]">
                    <span className="text-4xl font-extrabold text-[var(--brand-dark)]">
                      {tier.price}
                    </span>
                    {tier.unit && (
                      <span className="text-sm text-[var(--muted-foreground)]">
                        {tier.unit}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2.5 text-sm">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                        <span className="text-[var(--ink)]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/quote"
                    className={`mt-6 w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl font-semibold transition-colors ${
                      tier.highlighted
                        ? "bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white"
                        : "border border-[var(--brand)]/30 text-[var(--brand-dark)] hover:bg-[var(--brand-light)]"
                    }`}
                  >
                    Get this plan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Plan comparison"
              title={<>What's included in each plan.</>}
              subhead="Side-by-side comparison of the five residential plans. Commercial is bespoke — see the next section."
            />
            <div className="overflow-x-auto -mx-6 px-6">
              <div className="min-w-[800px] bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--brand-dark)] text-white">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="p-4 font-semibold text-center">One-Time</th>
                      <th className="p-4 font-semibold text-center bg-[var(--brand)]">Weekly</th>
                      <th className="p-4 font-semibold text-center">Fortnightly</th>
                      <th className="p-4 font-semibold text-center">Monthly</th>
                      <th className="p-4 font-semibold text-center">Commercial</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, idx) => (
                      <tr
                        key={row.feature}
                        className={idx % 2 === 0 ? "bg-white" : "bg-[var(--cream)]/30"}
                      >
                        <td className="p-4 font-medium text-[var(--ink)]">{row.feature}</td>
                        <td className="p-4 text-center">
                          <Cell value={row.oneTime} />
                        </td>
                        <td className="p-4 text-center bg-[var(--brand-light)]/20">
                          <Cell value={row.weekly} />
                        </td>
                        <td className="p-4 text-center">
                          <Cell value={row.fortnightly} />
                        </td>
                        <td className="p-4 text-center">
                          <Cell value={row.monthly} />
                        </td>
                        <td className="p-4 text-center">
                          <Cell value={row.commercial} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* COMMERCIAL */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              eyebrow="Commercial pricing"
              title={<>Custom-quoted for businesses.</>}
              subhead="Commercial cleaning is scoped to your facility, footfall, and compliance requirements. We offer free on-site consultations, itemised proposals, and framework agreements with locked-in rates. Below are starting prices for common commercial services — your final quote will be itemised."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {commercialServices.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.name}
                    className="bg-white rounded-2xl p-6 border border-[var(--border)]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[var(--brand)]" />
                      </div>
                      <h3 className="font-bold text-[var(--ink)]">{s.name}</h3>
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-xs text-[var(--muted-foreground)]">from</span>
                      <span className="text-2xl font-extrabold text-[var(--brand-dark)]">
                        {s.from}
                      </span>
                      {s.unit && (
                        <span className="text-sm text-[var(--muted-foreground)]">{s.unit}</span>
                      )}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      {s.note}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 max-w-3xl mx-auto p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand)] text-white">
              <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <h3 className="font-display font-bold text-xl lg:text-2xl mb-2">
                    Need a commercial framework agreement?
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    Free on-site consultation, itemised proposal within 5 business days,
                    framework agreement with 12-month rate lock. £5m public liability
                    standard, increased to £10m on request.
                  </p>
                </div>
                <Link
                  href="/quote"
                  className="shrink-0 inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[var(--gold)] text-[var(--ink)] font-bold hover:bg-[var(--gold-dark)] transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Get a custom quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ADD-ONS */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              eyebrow="Add-on services"
              title={<>Optional extras, priced upfront.</>}
              subhead="All add-on services are bookable alongside any plan or as a one-off. Prices below are starting prices — your quote will be itemised. Add-ons can be added, removed, or rescheduled up to 24 hours before your visit."
            />
            <div className="grid md:grid-cols-2 gap-4">
              {residentialAddOns.map((a) => (
                <div
                  key={a.name}
                  className="bg-white rounded-xl p-5 border border-[var(--border)] flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[var(--ink)] text-sm">{a.name}</div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-0.5">{a.note}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-extrabold text-[var(--brand-dark)]">
                      {a.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold hover:text-[var(--brand-dark)]"
              >
                See all 98 services with full pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1100px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Pricing FAQ"
              title={<>Six questions we get asked every week.</>}
              subhead="If your question isn't here, just call or email — we'll usually answer within one business hour. No pushy sales, no obligation."
            />
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white rounded-xl border border-[var(--border)] overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                    <span className="font-semibold text-[var(--ink)] text-sm lg:text-base">
                      {faq.q}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[var(--brand-light)] text-[var(--brand)] flex items-center justify-center text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Ready to lock in your rate for 12 months?"
          subhead="Get a free, itemised quote within one business hour. We'll match you with a PVG-checked crew in your area, lock in your rate for 12 months, and stand behind the work with our 100% satisfaction guarantee."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
          bullets={[
            "12-month rate lock guarantee",
            "No hidden fees, no fuel surcharges",
            "Cancel or pause anytime — 7 days' notice",
            "100% satisfaction guarantee",
          ]}
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-[var(--brand)] mx-auto" />;
  }
  if (value === false) {
    return <span className="text-[var(--muted-foreground)]">—</span>;
  }
  return (
    <span className="text-xs font-bold text-[var(--brand-dark)] bg-[var(--brand-light)] px-2 py-1 rounded-full">
      {value}
    </span>
  );
}

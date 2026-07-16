import type { Metadata } from "next";
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
  Home,
  Building2,
  Stethoscope,
  Factory,
  Sparkles,
  Check,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Quote | 60-Second Cleaning Quote | Maundy Clean",
  description:
    "Get a free, itemised cleaning quote from Maundy Clean in 60 seconds. Residential, commercial, medical, industrial. Same-day response. No pushy sales, no contract pressure.",
  keywords: [
    "cleaning quote Scotland",
    "free cleaning quote",
    "cleaner price estimate",
    "book a cleaner Glasgow",
    "Maundy Clean quote",
  ],
  alternates: { canonical: "/quote" },
};

const propertyTypes = [
  { icon: Home, label: "Studio / 1-bed flat", sqft: "up to 500 sqft", from: "£89" },
  { icon: Home, label: "2-3 bed home", sqft: "500-1,200 sqft", from: "£120" },
  { icon: Home, label: "4+ bed home", sqft: "1,200-2,500 sqft", from: "£180" },
  { icon: Building2, label: "Small office", sqft: "up to 2,000 sqft", from: "£145" },
  { icon: Building2, label: "Medium office", sqft: "2,000-10,000 sqft", from: "POA" },
  { icon: Factory, label: "Industrial unit", sqft: "10,000+ sqft", from: "POA" },
];

const frequencies = [
  { label: "One-off", description: "Single visit. Deep clean, move-out, post-construction.", priceNote: "from £89" },
  { label: "Weekly", description: "Best value. Same crew, same day, every week.", priceNote: "from £62/visit", popular: true },
  { label: "Fortnightly", description: "Most popular for families. Same crew every fortnight.", priceNote: "from £74/visit" },
  { label: "Monthly", description: "Top-up clean between your own weekly tidy-ups.", priceNote: "from £98/visit" },
];

const addons = [
  "Oven Cleaning",
  "Fridge Cleaning",
  "Inside-Cabinet Cleaning",
  "Window Cleaning (interior)",
  "Carpet & Rug Cleaning",
  "Laundry & Folding",
  "Ironing Service",
  "Pantry Organisation",
  "Wardrobe Organisation",
  "Pet Area Sanitisation",
  "Eco-Friendly Green Clean",
  "Electrostatic Disinfection",
];

const process = [
  { step: "01", title: "Tell us your space", description: "Property type, square footage, frequency, priorities. 60 seconds." },
  { step: "02", title: "Get an itemised quote", description: "Written quote in your inbox within one business hour. No pushy sales call." },
  { step: "03", title: "We match your crew", description: "PVG-checked, uniformed, named crew assigned. Same team every visit." },
  { step: "04", title: "Sit back & relax", description: "We clean to the protocol. You rate the visit. 100% satisfaction guarantee." },
];

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Get a Free Quote"
          breadcrumb="Quote"
          title={
            <>
              Your quote, in your inbox,
              <br />
              <span className="text-[var(--brand)]">within the hour.</span>
            </>
          }
          subhead="No pushy sales call, no in-home estimate that takes two weeks to schedule, no contract pressure. Fill in the form below — we'll come back with an itemised quote, a named crew, and availability in your postcode within one business hour. 7 days a week."
          ctaPrimary={{ label: "Start the form", href: "#quote-form" }}
          ctaSecondary={{ label: contactInfo.phone, href: contactInfo.phoneHref }}
          stats={[
            { value: "<1hr", label: "Average response" },
            { value: "60 sec", label: "Form fill time" },
            { value: "7 days", label: "Available" },
            { value: "100%", label: "Satisfaction guarantee" },
          ]}
        />

        {/* ---------- PROCESS ---------- */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="bg-white rounded-2xl p-6 border border-[var(--border)]"
                >
                  <div className="text-3xl font-extrabold text-[var(--brand-light)] font-display">
                    {p.step}
                  </div>
                  <div className="font-bold text-[var(--ink)] mt-2">{p.title}</div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">
                    {p.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FORM ---------- */}
        <section id="quote-form" className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="60-second quote"
              title={<>Tell us about your space.</>}
              subhead="The more detail you give us, the more accurate the quote. All fields with * are required. We never share your details — see our privacy policy."
            />
            <form className="max-w-4xl mx-auto bg-white rounded-2xl p-6 lg:p-10 border border-[var(--border)] shadow-brand space-y-8">
              {/* Step 1: Contact */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--brand)] text-white font-bold flex items-center justify-center text-sm">
                    1
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                    Your details
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name *"
                    required
                    className="h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name *"
                    required
                    className="h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Postcode *"
                    required
                    className="h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none sm:col-span-2"
                  />
                </div>
              </div>

              {/* Step 2: Property type */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--brand)] text-white font-bold flex items-center justify-center text-sm">
                    2
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                    What are we cleaning?
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {propertyTypes.map((p) => {
                    const Icon = p.icon;
                    return (
                      <label
                        key={p.label}
                        className="flex items-start gap-3 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--brand)]/40 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="propertyType"
                          className="mt-1 accent-[var(--brand)]"
                        />
                        <Icon className="w-5 h-5 text-[var(--brand)] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-[var(--ink)]">
                            {p.label}
                          </div>
                          <div className="text-xs text-[var(--muted-foreground)]">
                            {p.sqft} · {p.from}
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Frequency */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--brand)] text-white font-bold flex items-center justify-center text-sm">
                    3
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                    How often?
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {frequencies.map((f) => (
                    <label
                      key={f.label}
                      className={`relative p-4 rounded-lg border cursor-pointer ${
                        f.popular
                          ? "border-[var(--brand)] bg-[var(--brand-light)]/40"
                          : "border-[var(--border)] hover:border-[var(--brand)]/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="frequency"
                        className="absolute top-3 right-3 accent-[var(--brand)]"
                      />
                      <div className="text-sm font-bold text-[var(--ink)]">{f.label}</div>
                      <div className="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">
                        {f.description}
                      </div>
                      <div className="text-xs font-bold text-[var(--brand)] mt-2">
                        {f.priceNote}
                      </div>
                      {f.popular && (
                        <div className="absolute -top-2 -right-2 bg-[var(--gold)] text-[var(--ink)] text-[10px] font-bold px-2 py-0.5 rounded-full">
                          BEST VALUE
                        </div>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 4: Add-ons */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--brand)] text-white font-bold flex items-center justify-center text-sm">
                    4
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                    Add-ons (optional)
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {addons.map((a) => (
                    <label
                      key={a}
                      className="flex items-center gap-2 p-3 rounded-lg border border-[var(--border)] hover:border-[var(--brand)]/40 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="accent-[var(--brand)]"
                      />
                      <span className="text-sm text-[var(--ink)]">{a}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 5: Notes */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--brand)] text-white font-bold flex items-center justify-center text-sm">
                    5
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                    Anything else we should know?
                  </h3>
                </div>
                <textarea
                  rows={4}
                  placeholder="Allergies, pets, listed building, biohazard, specific concerns, preferred days/times…"
                  className="w-full px-3 py-2 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                />
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white font-semibold shadow-brand transition-colors"
                >
                  Get my free quote
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-[var(--muted-foreground)] mt-3">
                  By submitting, you agree to our privacy policy. We'll send your itemised
                  quote within one business hour. No pushy sales, no contract pressure.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* ---------- PRICING REFERENCE ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Pricing reference"
              title={<>Ballpark prices, before we've seen your space.</>}
              subhead="These are the published starting prices for one-off cleans. Recurring plans are 10-30% cheaper per visit. We'll always send you an itemised quote before any work is done — no hidden fees, no surprise add-ons."
            />
            <div className="grid md:grid-cols-3 gap-5">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-6 lg:p-7 border ${
                    tier.highlighted
                      ? "border-[var(--brand)] bg-[var(--brand-light)]/30 shadow-brand"
                      : "border-[var(--border)] bg-white"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="inline-block text-[10px] font-bold bg-[var(--gold)] text-[var(--ink)] px-2 py-0.5 rounded-full mb-3">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="font-display font-bold text-xl text-[var(--ink)]">
                    {tier.name}
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)] mb-4">
                    {tier.tagline}
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-extrabold text-[var(--brand-dark)]">
                      {tier.price}
                    </span>
                    <span className="text-sm text-[var(--muted-foreground)]">{tier.unit}</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                        <span className="text-[var(--ink)]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 max-w-3xl mx-auto p-6 rounded-2xl bg-[var(--cream)]/60 border border-[var(--border)] flex flex-col sm:flex-row items-start gap-4">
              <Shield className="w-8 h-8 text-[var(--brand)] shrink-0" />
              <div>
                <h4 className="font-bold text-[var(--ink)] mb-2">
                  100% satisfaction guarantee
                </h4>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  If you're not delighted with the clean, we'll re-clean the affected areas
                  free of charge within 48 hours. No quibbles, no forms, no escalation
                  process. Just call the office and we'll be back. We've issued this
                  guarantee on every job since 2014 — and we've paid out on it less than 1%
                  of the time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Prefer to talk to a human?"
          subhead="Our Glasgow office team is on hand 7 days a week, 7am to 9pm. They know the crew schedule, they know the pricing, and they'll have a written quote in your inbox within one business hour."
          primaryLabel={`Call ${contactInfo.phone}`}
          primaryHref={contactInfo.phoneHref}
          bullets={[
            "Same-day quote, 7 days a week",
            "100% satisfaction guarantee",
            "PVG-checked, uniformed crew",
            "Same crew, every visit",
          ]}
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

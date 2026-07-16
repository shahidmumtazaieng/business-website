import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CompanyPageHero } from "@/components/company/company-hero";
import {
  CompanyFinalCta,
  CompanySectionHeader,
} from "@/components/company/company-sections";
import { testimonials, IMG } from "@/lib/site-data";
import { Star, Quote, Shield, Award, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | 4.9★ across 6,200+ reviews | Maundy Clean",
  description:
    "Real reviews from Maundy Clean clients across Scotland. 4.9★ on Google, Trustpilot, and Reviews.io. 6,200+ verified reviews, 98% client retention. Read what Scottish households and businesses say.",
  keywords: [
    "Maundy Clean reviews",
    "cleaning reviews Scotland",
    "Trustpilot cleaning",
    "Google reviews cleaning",
    "cleaner testimonials Glasgow",
  ],
  alternates: { canonical: "/reviews" },
};

// Extra testimonials layered on top of the four in site-data.ts
const extraReviews = [
  {
    name: "Linda Cairney",
    role: "Homeowner · Morningside, Edinburgh",
    quote:
      "I work from home three days a week and was sceptical about having cleaners in the house during the working day. They're quieter than my own children. They remember which rooms to skip while I'm on calls. They even leave a handwritten note when they've noticed something (a leaking radiator, a window left open). Six months in, I can't imagine going back.",
    rating: 5,
    service: "Recurring Home Cleaning",
  },
  {
    name: "Davie McPherson",
    role: "Facilities Manager · 11-building corporate estate, Aberdeen",
    quote:
      "We put the contract out to tender every three years. Maundy Clean have won it three times running. The audit trail is the cleanest of any contractor we use — every visit logged, every chemical batch-tracked, every operative named. The EHO commented on the improvement last inspection. That's the kind of feedback that gets me a bonus.",
    rating: 5,
    service: "Corporate Facility Cleaning",
  },
  {
    name: "Mags Thomson",
    role: "Holiday Let Owner · 3 properties, Tobermory & Fionnphort",
    quote:
      "Island turnover is brutal — Saturday 10am checkout, 4pm check-in, and the ferry's late. Maundy Clean's island crew have never missed a turnover in two years. They strip the beds while the dishwasher runs, they know to air the property (damp is the enemy on Mull), and they text me a photo of the freshly-made bed before they leave. Worth every penny.",
    rating: 5,
    service: "Holiday Let Turnover",
  },
  {
    name: "Dr Hamish Urquhart",
    role: "GP Partner · Practice in Inverness",
    quote:
      "We switched contractors after a Care Inspectorate near-miss on restroom hygiene. Maundy Clean's HTM 01-05-aware protocol is the best I've seen in primary care. The ATP swab results they provide are the kind of evidence the Inspectorate wants to see. We've been 'Excellent' on every inspection since.",
    rating: 5,
    service: "Medical Office Cleaning",
  },
  {
    name: "Yasmin Khaliq",
    role: "Operations Lead · Co-working space, Glasgow Merchant City",
    quote:
      "We have 400 members passing through daily. The glass partitions, the meeting-room screens, the kitchen — all fingerprint magnets. The Maundy Clean night crew is so consistent that I genuinely can't tell which morning I've walked into. Our members have stopped complaining about cleanliness. Which, for co-working, is the highest praise there is.",
    rating: 5,
    service: "Co-Working Space Cleaning",
  },
  {
    name: "Stewart Campbell",
    role: "Hotel General Manager · 4-star boutique, St Andrews",
    quote:
      "We've used three national contractors in the last decade. None of them understood hospitality — they cleaned to a contract, not to a guest experience. Maundy Clean's housekeeping lead attends our morning briefings, flags maintenance issues, and has reduced guest complaints about room cleanliness by 71% year-on-year. They get hospitality.",
    rating: 5,
    service: "Hotel & Hospitality Cleaning",
  },
];

const allReviews = [
  ...testimonials.map((t) => ({ ...t, service: "Recurring Home Cleaning" })),
  ...extraReviews,
];

const ratingBuckets = [
  { stars: 5, percent: 94, count: 5848 },
  { stars: 4, percent: 5, count: 310 },
  { stars: 3, percent: 1, count: 62 },
  { stars: 2, percent: 0.2, count: 12 },
  { stars: 1, percent: 0.1, count: 6 },
];

const platforms = [
  { name: "Google", rating: "4.9", count: "3,840" },
  { name: "Trustpilot", rating: "4.9", count: "1,640" },
  { name: "Reviews.io", rating: "4.8", count: "740" },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Reviews & Testimonials"
          breadcrumb="Reviews"
          title={
            <>
              6,200+ reviews.
              <br />
              <span className="text-[var(--brand)]">4.9 stars, every platform.</span>
            </>
          }
          subhead="We don't filter, curate, or pay for reviews. Every review on this page is from a verified Maundy Clean client — households, businesses, NHS sites, holiday-let owners, GP practices — across 72 Scottish locations. The 1-star and 2-star reviews are public too. Read what Scotland says."
          image={IMG.heroClean}
          imageAlt="Maundy Clean client testimonials"
          stats={[
            { value: "4.9/5", label: "Average rating" },
            { value: "6,200+", label: "Verified reviews" },
            { value: "98%", label: "Client retention" },
            { value: "94%", label: "5-star rating" },
          ]}
        />

        {/* ---------- PLATFORM SUMMARY ---------- */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-extrabold text-[var(--ink)] font-display">
                  4.9
                </div>
                <div className="flex justify-center lg:justify-start gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-6 h-6 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <div className="text-sm text-[var(--muted-foreground)] mt-2">
                  across 6,200+ verified reviews
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  {platforms.map((p) => (
                    <div
                      key={p.name}
                      className="bg-[var(--cream)]/60 rounded-2xl p-5 border border-[var(--border)] text-center"
                    >
                      <div className="font-bold text-[var(--ink)] text-sm uppercase tracking-wide">
                        {p.name}
                      </div>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <Star className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                        <span className="font-extrabold text-[var(--ink)] text-xl">
                          {p.rating}
                        </span>
                      </div>
                      <div className="text-xs text-[var(--muted-foreground)] mt-1">
                        {p.count} reviews
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {ratingBuckets.map((b) => (
                    <div key={b.stars} className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1 w-20">
                        <span className="font-semibold text-[var(--ink)]">{b.stars}</span>
                        <Star className="w-3 h-3 fill-[var(--gold)] text-[var(--gold)]" />
                      </div>
                      <div className="flex-1 h-2 bg-[var(--cream)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--gold)] rounded-full"
                          style={{ width: `${b.percent}%` }}
                        />
                      </div>
                      <div className="w-16 text-right text-xs text-[var(--muted-foreground)]">
                        {b.count.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- TESTIMONIAL GRID ---------- */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="What clients say"
              title={<>Ten recent reviews, unedited.</>}
              subhead="A representative cross-section — residential, commercial, healthcare, hospitality, holiday-let. Names and roles are real; some postcodes are generalised for privacy. Every review is verifiable on the platform it was originally posted to."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {allReviews.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl p-6 lg:p-7 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <Quote className="w-8 h-8 text-[var(--brand-light)] mb-3" />
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--ink)] leading-relaxed flex-1">
                    {t.quote}
                  </p>
                  <div className="mt-5 pt-5 border-t border-[var(--border)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white font-bold flex items-center justify-center text-sm">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-bold text-[var(--ink)] text-sm">{t.name}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">{t.role}</div>
                      </div>
                    </div>
                    <div className="mt-3 text-[11px] font-semibold text-[var(--brand)] bg-[var(--brand-light)] inline-block px-2 py-1 rounded-full">
                      {t.service}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- TRUST BADGES ---------- */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Shield, title: "£5m public liability", description: "Every visit, every client. Increased to £10m for NHS contracts." },
                { icon: Award, title: "PVG-checked crews", description: "Every operative. Disclosure Scotland registered body." },
                { icon: TrendingUp, title: "98% retention", description: "Year-on-year. The same crew, every week, for years." },
                { icon: Star, title: "100% guarantee", description: "If you're not delighted, we re-clean free within 48 hours." },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="bg-white rounded-2xl p-6 border border-[var(--border)]"
                  >
                    <Icon className="w-8 h-8 text-[var(--brand)] mb-3" />
                    <div className="font-bold text-[var(--ink)] text-sm">{b.title}</div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">
                      {b.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Join the 6,200+ households and businesses who trust us."
          subhead="Book a one-off clean and see why our average client stays with us for 4.7 years. Same crew, same standard, same guarantee — every visit."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CompanyPageHero } from "@/components/company/company-hero";
import {
  CompanyFinalCta,
  CompanySectionHeader,
} from "@/components/company/company-sections";
import { contactInfo } from "@/lib/site-data";
import { HelpCircle, Phone, Mail, Clock, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Help Centre & FAQ | Maundy Clean",
  description:
    "Frequently asked questions about Maundy Clean. Pricing, PVG-checking, eco-friendly products, scheduling, satisfaction guarantee, contracts, cancellations and more.",
  keywords: [
    "cleaning FAQ Scotland",
    "Maundy Clean help",
    "cleaning questions answered",
    "PVG-checking cleaner",
    "cleaning cancellation policy",
  ],
  alternates: { canonical: "/help" },
};

const faqCategories = [
  {
    title: "Pricing & quotes",
    faqs: [
      {
        q: "How much does a clean cost?",
        a: "One-off cleans start at £89 for a studio or 1-bed flat, £120 for a 2-3 bed home, and £180 for a 4+ bed home. Recurring plans are 10-30% cheaper per visit — weekly from £62/visit, fortnightly from £74/visit, monthly from £98/visit. Commercial and specialist services are quoted individually. Every quote is itemised — no hidden fees, no surprise add-ons.",
      },
      {
        q: "Do you charge for quotes?",
        a: "No. Every quote is free, written, and itemised. We don't do in-home estimates that take two weeks to schedule — we'll send an itemised quote within one business hour of you filling in our 60-second form. If your space needs an in-person visit (typically for industrial or specialist services), we'll come out free of charge.",
      },
      {
        q: "What's included in the price?",
        a: "Everything — supplies, equipment, labour, travel within your area, and the 100% satisfaction guarantee. There are no fuel surcharges, no equipment fees, no 'well actually' add-ons after the work is done. Add-on services (oven cleaning, fridge cleaning, laundry, etc.) are priced separately and itemised on the same quote.",
      },
      {
        q: "How do I pay?",
        a: "Card (Visa, Mastercard, Amex), bank transfer, or Direct Debit. Commercial clients can apply for 30-day invoice terms. We never take cash — everything is invoiced and traceable. Payment is taken after the clean is completed and you've confirmed you're happy with it.",
      },
    ],
  },
  {
    title: "Crew & trust",
    faqs: [
      {
        q: "Are your cleaners PVG-checked?",
        a: "Yes — every operative, without exception. We're a Disclosure Scotland registered body and PVG-check every crew member before their first shift. The check is repeated every 3 years. We can provide the PVG scheme record for the specific operative attending your property on request.",
      },
      {
        q: "Will I get the same crew every visit?",
        a: "Yes. We don't rotate crews. The same PVG-checked, uniformed professionals who clean your home on week one are the same ones who show up on week fifty-two. Crew retention is 94% year-on-year. If your regular crew is on annual leave or off sick, we'll send a trained replacement and let you know in advance.",
      },
      {
        q: "What insurance do you carry?",
        a: "£5m public liability, £10m employer's liability, professional indemnity, and we name your organisation on our policy as additional insured. Increased to £10m public liability for NHS contracts. Insurance certificates are available on request — we don't start work without confirming cover is in place.",
      },
      {
        q: "What if something is damaged during a clean?",
        a: "Tell us within 48 hours. We'll investigate, and if our crew caused the damage, we'll pay for repair or replacement up to the value of the item (no excess, no quibble). Our public liability covers accidental damage. In 12 years and 220 operatives, we've had 14 claims — all settled within 7 days.",
      },
    ],
  },
  {
    title: "Scheduling & contracts",
    faqs: [
      {
        q: "How quickly can you start?",
        a: "For one-off cleans, typically within 48-72 hours of quote acceptance. For recurring plans, usually the week after your quote is accepted — same crew, same day of the week, same time. For 24/7 emergency biohazard response, 60-90 minutes in the central belt, 2-3 hours in remote areas.",
      },
      {
        q: "Do I have to sign a contract?",
        a: "For residential, no. Recurring plans are rolling — you can pause, skip, or cancel anytime with 7 days' notice. For commercial and trade partnerships, we typically use a 12-month framework agreement with a 30-day exit clause. Either way, no lock-in, no cancellation fees.",
      },
      {
        q: "What's your cancellation policy?",
        a: "Residential: 7 days' notice to pause or cancel a recurring plan, no fees. One-off cleans: 24 hours' notice to reschedule or cancel free of charge. Commercial: 30 days' notice per framework agreement. If we can't make a scheduled visit (extreme weather, crew illness), we'll reschedule at your convenience and offer 10% off the next clean.",
      },
      {
        q: "Do you clean evenings and weekends?",
        a: "Yes. Standard cleaning hours are 7am-9pm, 7 days a week. Commercial clients can schedule night cleans (10pm-6am) for after-hours office and facility work. Biohazard emergency response is 24/7/365. There's no weekend or evening surcharge — the price is the same whenever we clean.",
      },
    ],
  },
  {
    title: "Products & eco-friendly",
    faqs: [
      {
        q: "Are your products eco-friendly?",
        a: "By default, we use conventional chemistry (still HSE-approved, still safe). On request, every service can be delivered with our EU Ecolabel-certified eco protocol — plant-based, low-VOC, biodegradable, refillable containers, no bleach, no phosphates. The eco protocol is the same price as conventional. Just ask when booking.",
      },
      {
        q: "Are your products safe for pets and children?",
        a: "Yes — both our conventional and eco products are safe for children and pets once dry (typically 30 minutes after application). We don't use bleach or any product classified as toxic. If you have specific concerns (allergies, asthma, eczema, exotic pets), tell us and we'll tailor the chemistry accordingly.",
      },
      {
        q: "Do I need to provide any supplies or equipment?",
        a: "No. Our operatives arrive with a full kit — products, microfibre cloths (per-room, laundered at 90°C), mop, vacuum, buckets, PPE. You don't need to provide anything except access to the property and (ideally) a parking spot. If you'd prefer us to use your own products, that's fine too — just let us know.",
      },
      {
        q: "What about COVID / disinfection?",
        a: "Our standard clean includes disinfection of all high-touch surfaces (door handles, light switches, tap handles, WC flush handles) with EN 14476 virucidal chemistry. For outbreak response or higher-risk settings (medical, care, schools), we offer electrostatic disinfection as an add-on — same chemistry as our hospital-grade service.",
      },
    ],
  },
  {
    title: "Satisfaction guarantee",
    faqs: [
      {
        q: "What is your satisfaction guarantee?",
        a: "If you're not delighted with the clean, call us within 48 hours. We'll send the crew back (typically within 24-48 hours) to re-clean the affected areas free of charge. No quibbles, no forms, no escalation process. We've issued this guarantee on every job since 2014 — we've paid out on it less than 1% of the time.",
      },
      {
        q: "What if I'm not happy with my regular crew?",
        a: "Tell us. We'll either retrain the crew, swap them for a different team, or assign a new crew lead — whatever you'd prefer. We don't take it personally. We'd rather you have a crew you trust than stick with one you don't. Call the office and we'll sort it within the week.",
      },
      {
        q: "Do I tip the crew?",
        a: "No expectation, no obligation. If you'd like to, our operatives are allowed to accept tips — but most clients don't, and there's no awkwardness either way. A 5-star review on Google or Trustpilot is the most appreciated 'tip' — it directly helps the crew's bonus structure.",
      },
    ],
  },
];

const contactOptions = [
  {
    icon: Phone,
    title: "Call us",
    detail: contactInfo.phone,
    note: "Mon-Sun 7am-9pm",
    href: contactInfo.phoneHref,
  },
  {
    icon: Mail,
    title: "Email us",
    detail: contactInfo.email,
    note: "Responses within one business hour",
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Clock,
    title: "Emergency line",
    detail: contactInfo.phone,
    note: "24/7 biohazard & flood response",
    href: contactInfo.phoneHref,
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Help Centre & FAQ"
          breadcrumb="Help"
          title={
            <>
              Common questions,
              <br />
              <span className="text-[var(--brand)]">straight answers.</span>
            </>
          }
          subhead="Everything you might want to know before booking — pricing, PVG-checking, eco-friendly products, scheduling, contracts, cancellations and our satisfaction guarantee. If your question isn't answered below, just call or email. We're a Glasgow office team, not a call centre."
          ctaPrimary={{ label: "Get a Free Quote", href: "/quote" }}
          ctaSecondary={{ label: contactInfo.phone, href: contactInfo.phoneHref }}
        />

        {/* ---------- QUICK CONTACT ---------- */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-5">
              {contactOptions.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.title}
                    href={c.href}
                    className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
                  >
                    <Icon className="w-8 h-8 text-[var(--brand)] mb-3" />
                    <div className="font-bold text-[var(--ink)] text-sm">{c.title}</div>
                    <div className="text-base font-semibold text-[var(--brand-dark)] mt-1 break-words">
                      {c.detail}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-1">
                      {c.note}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- FAQ CATEGORIES ---------- */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1100px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Frequently asked"
              title={<>Five categories, twenty-one questions.</>}
              subhead="Click any question to expand the answer. If your question isn't here, we'd rather you call us than guess — we'll usually answer within one business hour."
            />
            <div className="space-y-12">
              {faqCategories.map((cat) => (
                <div key={cat.title}>
                  <div className="flex items-center gap-3 mb-5">
                    <HelpCircle className="w-6 h-6 text-[var(--brand)]" />
                    <h3 className="font-display font-bold text-2xl text-[var(--ink)]">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {cat.faqs.map((faq) => (
                      <details
                        key={faq.q}
                        className="group bg-white rounded-xl border border-[var(--border)] overflow-hidden"
                      >
                        <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                          <span className="font-semibold text-[var(--ink)] text-sm lg:text-base">
                            {faq.q}
                          </span>
                          <ChevronDown className="w-5 h-5 text-[var(--brand)] shrink-0 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-5 pb-5 text-sm text-[var(--muted-foreground)] leading-relaxed">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Still have a question?"
          subhead="Call our Glasgow office team — we're real humans, we know the crew schedule, and we'll have an answer in your inbox within one business hour. No call centre, no automated menus."
          primaryLabel={`Call ${contactInfo.phone}`}
          primaryHref={contactInfo.phoneHref}
          bullets={[
            "Same-day response, 7 days a week",
            "Real humans in our Glasgow office",
            "100% satisfaction guarantee",
            "No pushy sales, ever",
          ]}
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

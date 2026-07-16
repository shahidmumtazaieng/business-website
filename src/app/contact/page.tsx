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
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Building2,
  Home,
  Briefcase,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Maundy Clean | Phone, Email & Glasgow HQ",
  description:
    "Contact Maundy Clean. Call +44 7735 322362, email hello@maundyclean.co.uk, or visit 412 Byres Road, Glasgow, G12 8AS. Same-day quotes 7 days a week. 24/7 emergency biohazard response.",
  keywords: [
    "contact Maundy Clean",
    "cleaning company phone Glasgow",
    "cleaner contact Scotland",
    "book a cleaner",
    "cleaning quote Scotland",
  ],
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: contactInfo.phone,
    detail: "Mon-Sun 7am-9pm. 24/7 emergency line for biohazard & flood.",
    href: contactInfo.phoneHref,
  },
  {
    icon: Mail,
    label: "Email us",
    value: contactInfo.email,
    detail: "Responses within one business hour, 7 days a week.",
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Visit HQ",
    value: "412 Byres Road, Glasgow",
    detail: "G12 8AS, Scotland. By appointment only — coffee on us.",
    href: "#map",
  },
  {
    icon: MessageSquare,
    label: "Live chat",
    value: "Open chat widget",
    detail: "Bottom-right of every page. Staffed 8am-8pm daily.",
    href: "#",
  },
];

const officeHours = [
  { day: "Monday — Friday", hours: "7:00am — 9:00pm" },
  { day: "Saturday", hours: "8:00am — 6:00pm" },
  { day: "Sunday", hours: "9:00am — 5:00pm" },
  { day: "Emergency biohazard line", hours: "24 / 7 / 365" },
];

const depots = [
  { city: "Glasgow (HQ)", address: "412 Byres Road, G12 8AS", phone: contactInfo.phone },
  { city: "Edinburgh", address: "Leith Depot, EH6", phone: contactInfo.phone },
  { city: "Aberdeen", address: "Tullos Industrial Estate, AB12", phone: contactInfo.phone },
  { city: "Inverness", address: "Auchterairnie, IV1", phone: contactInfo.phone },
];

const enquiryTypes = [
  { icon: Home, label: "Residential cleaning", description: "Home, flat, holiday let" },
  { icon: Briefcase, label: "Commercial cleaning", description: "Office, retail, venue" },
  { icon: Building2, label: "Industrial / facility", description: "Warehouse, factory, depot" },
  { icon: Stethoscope, label: "Medical / educational", description: "GP, dental, school, university" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Contact Us"
          breadcrumb="Contact"
          title={
            <>
              Talk to a human.
              <br />
              <span className="text-[var(--brand)]">Within one business hour.</span>
            </>
          }
          subhead="No call centres, no automated menus, no 'your call is important to us' hold music. The phone is answered by our Glasgow office team — they know the crew schedule, they know the pricing, and they'll have a written quote in your inbox within one business hour."
          ctaPrimary={{ label: "Get a Free Quote", href: "/quote" }}
          ctaSecondary={{ label: contactInfo.phone, href: contactInfo.phoneHref }}
          stats={[
            { value: "<1hr", label: "Average quote response" },
            { value: "24/7", label: "Biohazard emergency" },
            { value: "7 days", label: "Office hours" },
            { value: "4", label: "Scottish depots" },
          ]}
        />

        {/* ---------- CONTACT CHANNELS ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[var(--brand)]" />
                    </div>
                    <div className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wide">
                      {c.label}
                    </div>
                    <div className="font-bold text-[var(--ink)] text-lg mt-1 break-words">
                      {c.value}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-2 leading-relaxed">
                      {c.detail}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- FORM + INFO ---------- */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
              {/* Left: Form */}
              <div>
                <CompanySectionHeader
                  eyebrow="Send us a message"
                  title={<>Tell us about your space.</>}
                  subhead="The more detail you give us, the more accurate the quote. We'll come back within one business hour with an itemised price, a named crew, and availability in your area."
                />
                <form className="bg-white rounded-2xl p-6 lg:p-8 border border-[var(--border)] shadow-sm space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--ink)] mb-2">
                        First name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--ink)] mb-2">
                        Last name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--ink)] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--ink)] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--ink)] mb-2">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. G12 8AS"
                      className="w-full h-11 px-3 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--ink)] mb-2">
                      What kind of clean?
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {enquiryTypes.map((e) => {
                        const Icon = e.icon;
                        return (
                          <label
                            key={e.label}
                            className="flex items-start gap-3 p-3 rounded-lg border border-[var(--border)] hover:border-[var(--brand)]/40 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="enquiryType"
                              className="mt-1 accent-[var(--brand)]"
                            />
                            <Icon className="w-5 h-5 text-[var(--brand)] mt-0.5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold text-[var(--ink)]">
                                {e.label}
                              </div>
                              <div className="text-xs text-[var(--muted-foreground)]">
                                {e.description}
                              </div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--ink)] mb-2">
                      Tell us what you need
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Property type, square footage, frequency (one-off / weekly / fortnightly / monthly), any specific concerns (allergies, pets, biohazard, listed building)…"
                      className="w-full px-3 py-2 rounded-lg border border-[var(--border)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white font-semibold shadow-brand transition-colors"
                  >
                    Send message
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-[var(--muted-foreground)] text-center">
                    By submitting, you agree to our privacy policy. We never share your details.
                  </p>
                </form>
              </div>

              {/* Right: info */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 lg:p-7 border border-[var(--border)]">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-[var(--brand)]" />
                    <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                      Office hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((o) => (
                      <div
                        key={o.day}
                        className="flex justify-between items-baseline gap-4 pb-3 border-b border-[var(--border)] last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-[var(--ink)] font-medium">{o.day}</span>
                        <span className="text-sm text-[var(--muted-foreground)] text-right">
                          {o.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 lg:p-7 border border-[var(--border)]">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[var(--brand)]" />
                    <h3 className="font-display font-bold text-xl text-[var(--ink)]">
                      Our depots
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {depots.map((d) => (
                      <div
                        key={d.city}
                        className="flex items-start gap-3 pb-3 border-b border-[var(--border)] last:border-0 last:pb-0"
                      >
                        <Building2 className="w-4 h-4 text-[var(--brand)] mt-1 shrink-0" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-[var(--ink)]">
                            {d.city}
                          </div>
                          <div className="text-xs text-[var(--muted-foreground)]">
                            {d.address}
                          </div>
                          <div className="text-xs text-[var(--brand)] font-semibold mt-0.5">
                            {d.phone}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand)] rounded-2xl p-6 lg:p-7 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wide text-white/80 mb-2">
                    Emergency biohazard line
                  </div>
                  <div className="font-display font-bold text-2xl mb-3">
                    24/7 — 365 days a year
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed mb-4">
                    For blood, bodily fluids, sharps, sewage, trauma, post-forensic or
                    unattended-death remediation. 60-90 minute response in central belt.
                    Discreet unmarked vans. HSE HSG272 compliant.
                  </p>
                  <a
                    href={contactInfo.phoneHref}
                    className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--ink)] font-bold px-5 h-11 rounded-xl hover:bg-[var(--gold-dark)] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- MAP ---------- */}
        <section id="map" className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Glasgow HQ"
              title={<>412 Byres Road, Glasgow, G12 8AS.</>}
              subhead="In the heart of Glasgow's West End, two minutes from Hillhead subway. Drop in for a coffee — by appointment, please, so we can make sure the right person is at the desk."
            />
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] shadow-brand aspect-[16/9] bg-[var(--cream)]">
              <iframe
                title="Maundy Clean HQ location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.295%2C55.870%2C-4.270%2C55.880&layer=mapnik&marker=55.875%2C-4.2825"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Need a quote right now?"
          subhead="Skip the form and use our 60-second quote builder. We'll have an itemised price and named crew in your inbox within the hour."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

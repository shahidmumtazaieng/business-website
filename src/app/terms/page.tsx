import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CompanyPageHero } from "@/components/company/company-hero";
import { CompanyFinalCta } from "@/components/company/company-sections";
import { contactInfo } from "@/lib/site-data";
import { FileText, Shield, Clock, Mail, Phone, ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Maundy Clean",
  description:
    "Maundy Clean's Terms of Service for residential and commercial cleaning clients in Scotland. Engagement terms, service guarantees, cancellation policy, liability and SLAs in plain English.",
  keywords: [
    "cleaning contract terms Scotland",
    "Maundy Clean terms of service",
    "domestic cleaning agreement",
    "commercial cleaning SLA",
  ],
  alternates: { canonical: "/terms" },
};

const lastUpdated = "1 July 2026";

const sections = [
  {
    id: "agreement",
    title: "1. About This Agreement",
    body: [
      `These Terms of Service (the "Terms") form a binding agreement between Maundy Clean Ltd (company number SC528471, registered office at 412 Byres Road, Glasgow, G12 8AS, Scotland — "Maundy Clean", "we", "us") and the individual or entity engaging our cleaning services ("you", "the Client").`,
      "By requesting a quote, booking a cleaning visit, signing a service agreement, or otherwise engaging Maundy Clean to provide cleaning services, you confirm that you have read, understood and agree to be bound by these Terms. If you are entering into an agreement on behalf of a company, you confirm that you have authority to bind that company.",
      "These Terms apply to all residential and commercial cleaning services we provide. Commercial framework agreements, periodic service contracts and tender responses may include additional or varied terms that will be set out in a signed Schedule or Statement of Work — those terms will take precedence over these Terms in the event of any conflict.",
      "We may update these Terms from time to time. Where changes are material, we will notify existing clients by email at least 30 days before the changes take effect. Continued use of our services after the effective date of any change constitutes acceptance of the updated Terms.",
    ],
  },
  {
    id: "services",
    title: "2. Services We Provide",
    body: [
      "Maundy Clean provides professional cleaning services to residential and commercial clients across 72 Scottish locations. Our service catalogue comprises 98 distinct cleaning services across eight categories: residential, commercial, janitorial, specialty, medical, industrial, outdoor and add-on services. A full list of services is available at maundyclean.co.uk/services.",
      "Residential services include recurring home cleaning (weekly, fortnightly, monthly), one-off deep cleans, move-in / move-out cleans, spring cleans, post-construction cleans, holiday let turnover, and a range of add-on services such as oven cleaning, fridge cleaning, carpet cleaning, and ironing.",
      "Commercial services include office cleaning, retail cleaning, restaurant and QSR cleaning, gym and fitness studio cleaning, hospitality cleaning, medical and dental practice cleaning, industrial facility cleaning, and day porter services. Commercial engagements are typically delivered under a written framework agreement with site-specific schedules and SLAs.",
      "Each cleaning visit is delivered by a named, PVG-checked Maundy Clean employee (we do not use subcontractors). For recurring residential clients we commit to sending the same operative (or small team) on every visit, subject to illness, holiday, or your request for a change of operative.",
      "All cleaning supplies and equipment required to deliver the service are provided by Maundy Clean and included in the quoted price, unless otherwise agreed in writing. This includes cleaning chemicals, microfibre cloths, mops, vacuums, and PPE for our operatives. Where you have specific product preferences (e.g. eco-friendly, fragrance-free), we will accommodate these at no additional cost where possible.",
    ],
  },
  {
    id: "quotes-pricing",
    title: "3. Quotes, Pricing & Payment",
    body: [
      "All quotes issued by Maundy Clean are valid for 30 days from the date of issue. Quotes are based on the information you provide about your property (size, condition, scope of work) and our standard pricing published at maundyclean.co.uk/pricing. If the property or scope differs materially from what was described at the quoting stage, we reserve the right to revise the quote before commencing work.",
      "Residential one-off cleaning services are priced per visit. Recurring residential services (weekly, fortnightly, monthly) are priced per visit with a 12-month rate-lock guarantee — the per-visit price you sign up for is fixed for 12 months from your first clean. After 12 months, prices may be reviewed (typically a 3–5% adjustment aligned with inflation); you will be notified in writing at least 30 days before any change takes effect.",
      "Commercial services are typically priced per visit or per square foot per month, depending on the engagement. Commercial framework agreements include their own pricing schedule and price-review clause (typically 12-month fixed with an index-linked review). For commercial engagements, the prices in your signed Schedule take precedence over any prices published on our website.",
      "Payment terms: residential clients pay by card (via Stripe) on the day of each clean, or by monthly direct debit for recurring plans. Commercial clients are invoiced monthly in arrears with 30-day payment terms (Net 30). BACS, CHAPS and card payments are accepted. Late payment on commercial invoices may incur interest at 8% above the Bank of England base rate under the Late Payment of Commercial Debts (Interest) Act 1998.",
      "We do not charge fuel surcharges, congestion charges, weekend supplements, or hidden fees. The price we quote is the price you pay. Add-on services are priced separately and are clearly itemised on your quote and invoice.",
    ],
  },
  {
    id: "scheduling",
    title: "4. Scheduling, Access & Cancellations",
    body: [
      "Scheduling: cleaning visits are scheduled by mutual agreement between you and your account manager. For residential clients, we agree a recurring day and time slot at the start of your engagement. For commercial clients, schedules are set out in your signed service agreement. We commit to arriving within the agreed time window; if we are going to be more than 15 minutes late, we will contact you to advise.",
      "Property access: it is your responsibility to ensure that our operative can access the property at the agreed time. You may provide a key, a key safe code, alarm codes, or arrange to be present. If access is not available at the agreed time, we will attempt to contact you; if we are unable to gain access within 30 minutes, the visit will be treated as a late cancellation under Section 4.3 and a call-out fee of £35 will apply.",
      "Cancellations (residential): for one-off cleans, we require at least 48 hours' notice of cancellation. Cancellations within 48 hours incur a 50% charge; cancellations within 24 hours or no-shows incur a 100% charge. For recurring plans, you can skip or reschedule an individual visit with at least 24 hours' notice at no charge; skips with less than 24 hours' notice incur a £15 administration fee.",
      "Cancellations (commercial): cancellation terms for commercial engagements are set out in your signed framework agreement. Standard terms require 30 days' notice for cancellation of recurring services, with early termination fees calculated on a sliding scale based on remaining contract value. One-off commercial services require 5 working days' notice of cancellation.",
      "Weather and force majeure: in the event of severe weather, transport disruption, or other circumstances beyond our control, we may need to reschedule a cleaning visit. In such cases we will contact you at the earliest opportunity to arrange an alternative date. No cancellation fee applies to weather-related rescheduling.",
      "Holidays: our office is closed on UK bank holidays and between 24 December and 2 January inclusive. We do not schedule cleaning visits on these days without prior agreement. Recurring clients whose regular cleaning day falls on a bank holiday will be offered an alternative date in the same week.",
    ],
  },
  {
    id: "guarantee",
    title: "5. Satisfaction Guarantee & Re-Cleans",
    body: [
      "Maundy Clean offers a 100% satisfaction guarantee on all cleaning services. If you are not completely satisfied with any aspect of your cleaning visit, contact us within 24 hours of the visit and we will return to re-clean the affected areas free of charge. Re-clean requests are typically actioned within 48 hours, and always within 5 working days.",
      "Re-clean scope: our satisfaction guarantee covers specific aspects of the cleaning service that did not meet our published service standard. It does not cover issues that fall outside the agreed scope of work (e.g. areas not included in your quote), issues that have arisen since the cleaning visit (e.g. new spills, pet mess), or issues that you did not raise within the 24-hour window.",
      "If a re-clean does not resolve the issue to your satisfaction, you may escalate the matter to our Operations Director (operations@maundyclean.co.uk). For recurring residential clients, if we cannot resolve a recurring quality issue after three attempts, you may cancel your engagement with 7 days' notice and no early termination fee.",
      "For commercial clients, service quality is governed by the SLA in your signed framework agreement. This typically includes monthly KPI reporting, quarterly business reviews, and a formal escalation pathway. SLA credits for missed KPIs are calculated as set out in your agreement.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "6. Client Responsibilities",
    body: [
      "To enable us to deliver a high-quality cleaning service safely and efficiently, we ask clients to meet the following responsibilities:",
      "Access and entry: provide reliable access to the property at the agreed time. This includes providing working keys, key safe codes, alarm codes, and any access fobs required. If our operative cannot access the property within 30 minutes, call-out fees may apply (see Section 4.2).",
      "Health & safety: disclose any known hazards on the property at the time of booking. This includes aggressive pets, fragile items, trip hazards, areas with restricted access, loose carpets or flooring, exposed electrical wiring, or any other condition that could affect the safety of our operative. We reserve the right to decline to clean specific areas where safety cannot be assured.",
      "Health sensitivities: inform us of any health conditions, allergies, or sensitivities in the household or workplace that may be affected by cleaning products. We will select appropriate products (fragrance-free, low-VOC, eco-labelled) and brief our operative accordingly. Failure to disclose relevant health information may affect our liability under Section 8.",
      "Property preparation: tidy away personal items, clothing, dishes, and clutter to the extent reasonably possible before our visit. Our standard cleaning service does not include decluttering, dishwashing, or moving heavy furniture. If you require these services, please add them at the time of booking.",
      "Children and vulnerable adults: children under 16 should not be left alone with our operatives. If a vulnerable adult is present, please ensure appropriate supervision is in place. Our operatives are PVG-checked but are not trained carers.",
      "Payment: ensure payment is made in accordance with the terms in Section 3. For card payments, ensure a valid payment method is on file. For commercial invoice payments, ensure remittance is made within the agreed terms to avoid late payment interest.",
    ],
  },
  {
    id: "liability",
    title: "7. Liability & Insurance",
    body: [
      "Maundy Clean holds public liability insurance of £5,000,000 and employer's liability insurance of £10,000,000 with Hiscox Insurance. Our insurance covers accidental damage to client property caused by our operatives during the course of a cleaning visit, subject to the terms of our policy.",
      "If you believe that damage has occurred during a cleaning visit, you must notify us within 48 hours of the visit. We will investigate and, where we accept liability, arrange repair or replacement up to the value of the damaged item(s). For high-value items (over £500), we may request evidence of value (receipts, valuations) and will settle based on the current replacement value, not the original purchase price.",
      "Our total liability for any single incident of accidental damage is capped at £5,000 per cleaning visit. This cap does not apply where damage is caused by our negligence, where liability cannot be limited by law, or where a higher cap is agreed in writing in a commercial framework agreement.",
      "We are not liable for: damage to items that were already damaged, fragile, or poorly secured before our visit; damage to items of sentimental or irreplaceable value (please put such items away before our visit); damage caused by failure of the client to disclose a known hazard (Section 6.2); damage arising from wear and tear or pre-existing conditions; or damage to items left in unsafe or unsuitable locations.",
      "Jewellery, cash, and high-value items: please store jewellery, cash, documents and other high-value items securely before our visit. While our operatives are PVG-checked, trust-checked and our key handling is logged, we cannot accept liability for items that go missing unless they were specifically entrusted to us for safekeeping.",
      "Force majeure: we are not liable for failure to perform our obligations where that failure is caused by circumstances beyond our reasonable control, including but not limited to severe weather, pandemic restrictions, government action, transport disruption, or industrial action. In such cases we will use reasonable endeavours to resume service as soon as practicable.",
    ],
  },
  {
    id: "data-privacy",
    title: "8. Data Protection & Key Holding",
    body: [
      "We process personal data in accordance with our Privacy Policy, available at maundyclean.co.uk/privacy. By engaging our services, you consent to us processing your personal data as described in that policy. Key aspects include: we hold your name, address, contact details and payment information for the duration of your engagement and for 6 years thereafter (for tax and legal compliance).",
      "Key holding: if you entrust us with keys to your property, we will store them securely in a locked safe at our Glasgow HQ when not in use. Keys are signed in and out by named operatives, and our chain of custody is logged. Keys are never labelled with your address — they are tagged with a unique reference number that can only be cross-referenced via our secure CRM.",
      "Property access information (key safe codes, alarm codes) is stored in our secure CRM and shared only with the named operative(s) attending your property. This information is deleted within 30 days of the end of your engagement, unless you instruct us otherwise.",
      "CCTV: we do not operate CCTV at customer premises. If you have CCTV at your property, please let us know so we can brief our operatives. We do not record our operatives on body-worn cameras or any other monitoring equipment.",
      "Photography: our operatives do not take photographs at customer properties without your prior permission. Where we request permission (e.g. for portfolio images of commercial work), we will agree in advance which areas may be photographed and how the images will be used.",
    ],
  },
  {
    id: "termination",
    title: "9. Termination & Suspension",
    body: [
      "Residential recurring engagements: you may terminate your recurring cleaning plan at any time with 7 days' written notice. Notice can be given by email to hello@maundyclean.co.uk or by phone. No early termination fee applies to residential recurring engagements terminated with the required notice.",
      "Commercial framework agreements: termination terms are set out in your signed agreement. Standard terms provide for termination by either party with 90 days' written notice, with early termination fees on a sliding scale based on remaining contract value. Material breach (failure to pay, persistent service failure, breach of H&S) may permit termination with shorter notice.",
      "Suspension: we may suspend cleaning services with immediate effect where: (a) our operative is subjected to threatening or abusive behaviour; (b) the property presents an immediate health or safety risk; (c) payment is more than 14 days overdue despite reminders; or (d) we are required to do so by law or regulatory action. We will use reasonable endeavours to notify you before suspending service, except in cases of immediate safety risk.",
      "Termination by us: we may terminate any engagement with 30 days' written notice where we are no longer able to service your location, where the engagement is no longer commercially viable, or for material breach by you that has not been remedied within 14 days of written notice.",
      "Effect of termination: on termination, all sums owed to Maundy Clean become immediately due and payable. We will return any keys held within 7 days, delete property access information within 30 days, and provide a final invoice for services rendered up to the termination date. Pre-paid services that have not been delivered will be refunded on a pro-rata basis.",
    ],
  },
  {
    id: "complaints",
    title: "10. Complaints & Dispute Resolution",
    body: [
      "We take complaints seriously and aim to resolve all issues quickly and fairly. Our complaints procedure is as follows:",
      "Stage 1 (Operational): contact your account manager or our office on +44 7735 322362 or hello@maundyclean.co.uk. We will acknowledge your complaint within 1 working day and aim to resolve it within 5 working days. Most complaints are resolved at this stage.",
      "Stage 2 (Managerial): if your complaint is not resolved at Stage 1, you may escalate to our Operations Director at operations@maundyclean.co.uk. The Operations Director will investigate and respond within 10 working days.",
      "Stage 3 (Directorial): if you remain dissatisfied, you may escalate to the Managing Director at md@maundyclean.co.uk. The MD will personally review your complaint and respond within 15 working days. This is the final stage of our internal complaints process.",
      "Alternative dispute resolution: if your complaint remains unresolved after Stage 3, you may refer it to The Dispute Resolution Ombudsman (DRO), an independent ADR provider approved by the Chartered Trading Standards Institute. The DRO can be contacted at www.disputeresolutionombudsman.org or on 0333 241 3209. Use of the DRO is free for consumers.",
      "Legal proceedings: any legal proceedings arising from these Terms or our services will be governed by the laws of Scotland and subject to the exclusive jurisdiction of the Scottish courts. Nothing in this clause affects your statutory rights as a consumer under the Consumer Rights Act 2015 or other applicable UK legislation.",
    ],
  },
  {
    id: "general",
    title: "11. General Terms",
    body: [
      "Entire agreement: these Terms, together with any signed Schedule, quote, or framework agreement, constitute the entire agreement between you and Maundy Clean in respect of the services and supersede all prior discussions, representations and agreements.",
      "Severability: if any provision of these Terms is held by a court to be invalid or unenforceable, the remaining provisions will continue in full force and effect.",
      "Assignment: you may not assign or transfer these Terms or your rights under them to any third party without our written consent. We may assign these Terms to a successor entity in connection with a corporate restructuring, merger or sale of all or part of our business.",
      "No waiver: our failure to enforce any provision of these Terms at any time shall not be deemed a waiver of our right to enforce it at a later date.",
      "Communications: all formal communications under these Terms should be sent to Maundy Clean Ltd, 412 Byres Road, Glasgow, G12 8AS, or by email to hello@maundyclean.co.uk. We will communicate with you using the contact details you have provided to us.",
      "Governing law: these Terms are governed by the laws of Scotland. Any disputes arising in connection with these Terms will be subject to the exclusive jurisdiction of the Scottish courts, except where mandatory consumer protection law provides otherwise.",
    ],
  },
];

const quickFacts = [
  { icon: Shield, label: "Satisfaction Guarantee", value: "24-hr re-clean window" },
  { icon: Clock, label: "Notice to Cancel", value: "Residential: 48 hrs · Commercial: 30 days" },
  { icon: FileText, label: "Rate Lock", value: "12 months on recurring plans" },
  { icon: CheckCircle2, label: "Liability Cover", value: "£5M public liability" },
];

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CompanyPageHero
          eyebrow="Legal · Engagement Terms"
          breadcrumb="Terms of Service"
          title={
            <>
              Fair terms, <span className="text-[var(--brand)]">clearly written</span>
            </>
          }
          subhead={`Our Terms of Service, last updated ${lastUpdated}. Plain-English engagement terms for residential and commercial cleaning clients across Scotland. No lock-in tricks, no hidden clauses.`}
          stats={[
            { value: "£5M", label: "Public liability cover" },
            { value: "24 hrs", label: "Re-clean window" },
            { value: "12 mo", label: "Rate lock guarantee" },
            { value: "7 days", label: "Cancel residential anytime" },
          ]}
          ctaPrimary={{ label: "Get a Free Quote", href: "/quote" }}
          ctaSecondary={{ label: "Call our team", href: contactInfo.phoneHref }}
        />

        {/* Quick facts */}
        <section className="py-12 border-b border-[var(--border)] bg-[var(--cream)]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickFacts.map((f) => (
                <div key={f.label} className="bg-white rounded-2xl p-5 border border-[var(--border)]">
                  <f.icon className="w-7 h-7 text-[var(--brand)] mb-3" />
                  <div className="text-xs font-bold uppercase tracking-wide text-[var(--muted-foreground)] mb-1">
                    {f.label}
                  </div>
                  <div className="font-display font-bold text-[var(--ink)]">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-[300px_1fr] gap-10">
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-4">
                    On this page
                  </div>
                  <nav className="space-y-1.5">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="flex items-start gap-2 text-sm text-[var(--ink)] hover:text-[var(--brand)] transition-colors py-1.5"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--brand)] mt-0.5 shrink-0" />
                        <span>{s.title}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-8 p-4 rounded-xl bg-[var(--brand-light)]/40 border border-[var(--brand)]/20">
                    <div className="text-xs font-bold uppercase tracking-wide text-[var(--brand-dark)] mb-2">
                      Need a custom agreement?
                    </div>
                    <p className="text-xs text-[var(--ink)] leading-relaxed mb-3">
                      Commercial framework agreements, SLAs and tender responses available.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--brand)] hover:underline"
                    >
                      Talk to our team <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </aside>

              <div>
                <div className="mb-8 text-sm text-[var(--muted-foreground)]">
                  <span className="font-semibold text-[var(--ink)]">Last updated:</span> {lastUpdated}
                </div>

                {sections.map((s) => (
                  <section key={s.id} id={s.id} className="mb-12 scroll-mt-24">
                    <h2 className="font-display font-extrabold text-2xl lg:text-3xl text-[var(--ink)] mb-4 tracking-tight">
                      {s.title}
                    </h2>
                    <div className="space-y-4">
                      {s.body.map((para, idx) => (
                        <p
                          key={idx}
                          className="text-[15px] lg:text-base text-[var(--ink)]/85 leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}

                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--brand-light)]/40 to-[var(--cream)] border border-[var(--border)]">
                  <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
                    Questions about these terms?
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    Our team is happy to walk through any clause, explain it in plain language, or discuss custom terms for commercial engagements.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="inline-flex items-center gap-1.5 text-[var(--brand)] hover:underline font-semibold"
                    >
                      <Mail className="w-4 h-4" /> {contactInfo.email}
                    </a>
                    <a
                      href={contactInfo.phoneHref}
                      className="inline-flex items-center gap-1.5 text-[var(--brand)] hover:underline font-semibold"
                    >
                      <Phone className="w-4 h-4" /> {contactInfo.phone}
                    </a>
                    <Link
                      href="/privacy"
                      className="inline-flex items-center gap-1.5 text-[var(--brand)] hover:underline font-semibold"
                    >
                      <FileText className="w-4 h-4" /> Read our Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Ready to book your first clean?"
          subhead="Get a free, no-obligation quote in under 60 seconds. Same PVG-checked crew every visit, 100% satisfaction guarantee, no lock-in."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
          bullets={[
            "98 specialist cleaning services available",
            "12-month rate-lock on recurring plans",
            "Same PVG-checked crew every visit",
            "100% satisfaction guarantee",
          ]}
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}

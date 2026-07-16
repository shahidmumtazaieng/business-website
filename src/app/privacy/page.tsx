import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CompanyPageHero } from "@/components/company/company-hero";
import { CompanyFinalCta } from "@/components/company/company-sections";
import { contactInfo } from "@/lib/site-data";
import { Shield, Lock, FileText, Mail, Phone, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Maundy Clean",
  description:
    "How Maundy Clean collects, uses, stores and protects your personal data. GDPR-compliant, registered with the ICO, UK Data Protection Act 2018 aligned.",
  keywords: [
    "Maundy Clean privacy policy",
    "GDPR cleaning company Scotland",
    "data protection cleaning services",
    "ICO registered cleaner",
  ],
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "1 July 2026";

const sections = [
  {
    id: "overview",
    title: "1. Overview & Data Controller",
    body: [
      "Maundy Clean Ltd (company number SC528471, VAT GB 423 1897 56) is a cleaning services company headquartered at 412 Byres Road, Glasgow, G12 8AS, Scotland. We provide residential, commercial, industrial and specialist cleaning services across 72 Scottish locations.",
      "We are registered with the Information Commissioner's Office (ICO) as a Data Controller under the UK Data Protection Act 2018 and the UK GDPR. Our ICO registration number is ZB528471. This Privacy Policy explains, in plain English, what personal data we collect, why we collect it, who we share it with, how long we keep it, and the rights you have over that data.",
      "This policy applies to all individuals whose personal data we process, including residential customers, commercial clients, employees, job applicants, website visitors, and anyone who contacts us by phone, email, web form, or social media. By engaging our services or using our website, you acknowledge that we will process your personal data as described in this policy.",
      "If at any point you would like clarification on anything in this document, or you wish to exercise any of your data protection rights, you can contact our Data Protection Officer directly using the details in Section 11 below. We aim to respond to all data-related enquiries within five working days.",
    ],
  },
  {
    id: "data-we-collect",
    title: "2. Personal Data We Collect",
    body: [
      "We collect only the personal data we genuinely need to deliver cleaning services, manage our client relationships, fulfil our legal obligations, and improve the quality of our service. We do not buy personal data from data brokers, and we do not sell personal data to anyone.",
      "For residential customers we typically collect: full name, home address, contact telephone number, email address, billing address (if different from service address), payment method details (processed via Stripe — we never store full card numbers on our systems), property access instructions (e.g. key safe codes, alarm codes, pet information), cleaning preferences and notes, and any health or allergy information you voluntarily share so we can choose appropriate products.",
      "For commercial clients we additionally collect: company name, registered office, company registration number, VAT number (where applicable), accounts payable contact, site addresses, site access protocols, key holder lists, health & safety risk assessments, COSHH information where relevant, and contract terms. For commercial framework agreements we may also process employee names and roles for site access lists.",
      "For website visitors we collect: IP address, browser type, pages visited, time on site, and referring URL. This is collected via privacy-preserving analytics (Plausible) which does not use cookies and does not build individual user profiles. We do not use advertising trackers, Facebook Pixel, or Google Ads remarketing tags.",
      "For job applicants (where relevant) we collect: name, contact details, employment history, right-to-work documentation, PVG scheme membership status, references, and any reasonable adjustment information you choose to share. We retain applicant data for 12 months after the position is filled, then securely delete it.",
    ],
  },
  {
    id: "legal-basis",
    title: "3. Legal Basis for Processing",
    body: [
      "Under the UK GDPR, we must have a lawful basis for every type of personal data we process. We rely on the following lawful bases:",
      "Performance of a contract (Article 6(1)(b)) — we process your name, address, contact details, payment information, and property access information in order to deliver the cleaning services you have engaged us to perform. Without this data we cannot fulfil our contractual obligations to you.",
      "Legal obligation (Article 6(1)(c)) — we process certain data to comply with UK tax law (HMRC invoicing and VAT records), employment law (right-to-work checks, payroll), health & safety regulations (COSHH records, incident logs), and insurance requirements. We retain these records for the periods specified by the relevant legislation.",
      "Legitimate interests (Article 6(1)(f)) — we process analytics data, customer service correspondence, and feedback records under our legitimate interest in improving our services, training our staff, and resolving disputes. We have conducted a legitimate interests assessment (LIA) for each such processing activity and balanced our interests against your rights.",
      "Consent (Article 6(1)(a)) — for marketing communications (our quarterly customer newsletter, occasional service update emails), we rely on your explicit opt-in consent. You can withdraw consent at any time by clicking the unsubscribe link in any marketing email, or by contacting us using the details in Section 11.",
      "Special category data — we do not routinely process special category data (health, ethnicity, religion, etc.). If you voluntarily share health information (e.g. allergies, asthma, immune compromise) so we can choose appropriate cleaning products, we process this under Article 9(2)(b) (necessary to carry out obligations under employment law) or with your explicit consent under Article 9(2)(a).",
    ],
  },
  {
    id: "how-we-use",
    title: "4. How We Use Your Data",
    body: [
      "We use your personal data for the following specific purposes: scheduling and delivering cleaning visits at your property; communicating with you about appointments, crew arrival times, and any service issues; processing payments and issuing invoices and receipts; managing key holding and property access securely; conducting DBS/PVG checks on our cleaning operatives; maintaining insurance cover and handling any claims; responding to complaints and conducting internal quality investigations; sending you service-related notifications (e.g. schedule changes, holiday cover); and, only where you have consented, sending occasional marketing communications.",
      "We do not use your personal data to build automated decision-making profiles about you. We do not use your data for credit scoring, eligibility scoring, or behavioural advertising. All decisions about your service (e.g. crew allocation, scheduling) are made by humans, not algorithms.",
      "If you provide health or allergy information, we use it solely to select appropriate cleaning products (e.g. fragrance-free, low-VOC, non-caustic) and to brief the operative attending your property. This information is shared with the assigned crew on a need-to-know basis only.",
      "We may use anonymised, aggregated data (e.g. average cleaning duration by property type) for internal operational analysis and to publish industry insights on our blog. This aggregated data cannot be used to identify any individual customer.",
    ],
  },
  {
    id: "sharing",
    title: "5. Who We Share Your Data With",
    body: [
      "We share personal data only with third parties where it is necessary to deliver our services, comply with the law, or protect our legitimate business interests. We never sell your data, and we never share it for marketing purposes with third parties.",
      "Service delivery partners: our cleaning operatives are directly employed by Maundy Clean Ltd (we do not use subcontractors). Your property access details are shared only with the named crew members attending your property. For commercial clients with multiple sites, site access information is shared with the relevant regional operations manager.",
      "Payment processor: we use Stripe as our payment processor. Stripe receives your card details directly via their secure iframe — we never see or store your full card number. Stripe is PCI-DSS Level 1 certified. Their privacy policy is available at stripe.com/privacy.",
      "Insurance provider: in the event of a claim (e.g. accidental damage during a cleaning visit), we may share relevant details with our insurer, Hiscox Insurance (policy reference available on request). This is necessary to process the claim and is required under our insurance terms.",
      "Regulatory bodies: we may share data with HMRC (for VAT and tax compliance), Health & Safety Executive (for incident reporting), Disclosure Scotland (for PVG scheme verification), and the ICO (in the event of a notifiable data breach, within 72 hours as required by law).",
      "IT service providers: we use Google Workspace for email and document storage, Plausible for privacy-preserving website analytics, and Xero for accounting. All providers are UK GDPR compliant and have signed Data Processing Agreements with us. A full list of sub-processors is available on request.",
      "Legal & law enforcement: we will disclose personal data to police, trading standards, or other lawful authorities where legally required to do so (e.g. court order, prevention of fraud, safeguarding investigation). We do not volunteer data to any law enforcement body without a valid legal basis.",
    ],
  },
  {
    id: "international",
    title: "6. International Data Transfers",
    body: [
      "Maundy Clean Ltd is a Scottish company and we store all customer personal data within the United Kingdom. Our primary data storage is Google Workspace (UK region), Xero (UK region), and our own CRM hosted on UK-based AWS London (eu-west-2) servers.",
      "Some of our third-party providers (notably Google and Stripe) may transfer data to servers outside the UK for technical operational reasons. Where this occurs, the transfer is protected by International Data Transfer Agreements (IDTAs) or the UK Addendum to the EU Standard Contractual Clauses, in accordance with the ICO's guidance. We have assessed these transfers and concluded that they do not create a risk to your data protection rights.",
      "We do not transfer personal data to countries that the UK government has deemed inadequate for data protection purposes. If our arrangements change in a way that affects international transfers, we will update this policy and notify affected customers directly.",
    ],
  },
  {
    id: "retention",
    title: "7. Data Retention",
    body: [
      "We retain personal data only for as long as is necessary to fulfil the purpose for which it was collected, or as required by law. Our retention periods are as follows:",
      "Active customer records: kept for the duration of your engagement with us plus 6 years thereafter (to cover the statutory limitation period for contract claims under the Limitation Act 1980). After 6 years of inactivity, we securely delete or anonymise your record.",
      "Payment and invoice records: retained for 6 years from the end of the financial year in which the transaction occurred, as required by HMRC for tax and VAT purposes.",
      "Property access details (key safe codes, alarm codes): deleted within 30 days of the end of your engagement, unless you request earlier deletion.",
      "PVG and DBS disclosure records: retained for the duration of employment plus 6 months, then deleted in accordance with Disclosure Scotland guidance.",
      "CCTV footage at our Glasgow HQ: retained for 30 days, then automatically overwritten. We do not operate CCTV at customer premises.",
      "Marketing data: if you opt into our newsletter, we keep your email address until you unsubscribe. Unsubscribe requests are processed within 24 hours.",
      "Website analytics (Plausible): aggregated, anonymised, retained indefinitely in aggregate form. No individual visitor data is retained.",
      "Job applicant data: retained for 12 months from the date of application (or 6 months from the position being filled, whichever is longer), then securely deleted.",
      "If you would like us to delete your data earlier than these retention periods allow, please contact us using the details in Section 11 — we will action verified deletion requests within 30 days.",
    ],
  },
  {
    id: "security",
    title: "8. Data Security",
    body: [
      "We take the security of your personal data seriously and have implemented a layered set of technical, organisational and physical safeguards designed to protect it from unauthorised access, disclosure, alteration, or loss.",
      "Technical safeguards: all customer data is encrypted in transit (TLS 1.3) and at rest (AES-256). Access to customer records is restricted by role-based access controls and protected by mandatory two-factor authentication for all Maundy Clean staff. Our CRM, accounting system and email provider are all ISO 27001 certified.",
      "Operational safeguards: all Maundy Clean employees undergo data protection training during onboarding and annually thereafter. Access to customer property access details is restricted to the named crew attending your property and your account manager. Property access details are never printed, never shared via personal phones, and never left in voicemails.",
      "Physical safeguards: our Glasgow HQ is accessed via keycard only and protected by monitored CCTV. We do not maintain paper customer files — all records are digital. Customer keys, where held overnight, are stored in a locked safe in a locked room in a locked building, with a logged chain of custody.",
      "Breach response: in the event of a personal data breach likely to result in a risk to your rights and freedoms, we will notify the ICO within 72 hours of becoming aware of the breach, and notify affected individuals without undue delay where the breach is likely to result in a high risk to your rights. Our breach response plan is tested annually.",
      "Despite our best efforts, no system can be guaranteed 100% secure. If you have any concerns about the security of your data, please contact our Data Protection Officer using the details in Section 11.",
    ],
  },
  {
    id: "your-rights",
    title: "9. Your Data Protection Rights",
    body: [
      "Under the UK GDPR and the Data Protection Act 2018, you have the following rights over your personal data:",
      "Right of access (Article 15): you can request a copy of all the personal data we hold about you, free of charge, and we will provide it within 30 days. We will verify your identity before releasing any data.",
      "Right to rectification (Article 16): if any of the personal data we hold about you is inaccurate or incomplete, you can ask us to correct it. We will action verified correction requests within 7 days.",
      "Right to erasure (Article 17): also known as the 'right to be forgotten'. You can ask us to delete your personal data where it is no longer necessary for the purpose for which it was collected, where you withdraw consent, or where you have objected to processing and there are no overriding legitimate grounds. We will action verified erasure requests within 30 days, except where retention is required by law (e.g. HMRC records).",
      "Right to restrict processing (Article 18): you can ask us to suspend processing of your personal data in certain circumstances, e.g. while a rectification request is being investigated or where you have objected to processing pending verification of our legitimate grounds.",
      "Right to data portability (Article 20): you can request a machine-readable copy of the personal data you have provided to us, and you have the right to transmit that data to another service provider. We will provide this in JSON or CSV format within 30 days.",
      "Right to object (Article 21): you can object to processing based on legitimate interests or for direct marketing. We will cease processing for marketing purposes immediately upon receipt of your objection. For legitimate interests, we will cease unless we can demonstrate compelling legitimate grounds that override your rights.",
      "Right to withdraw consent (Article 7(3)): where processing is based on your consent (e.g. marketing emails), you can withdraw consent at any time without giving a reason. Withdrawal does not affect the lawfulness of processing carried out before withdrawal.",
      "Rights related to automated decision-making (Article 22): you have the right not to be subject to a decision based solely on automated processing. We do not use automated decision-making, so this right is not engaged by our practices.",
      "To exercise any of these rights, please contact our Data Protection Officer using the details in Section 11. We will respond to all valid requests within 30 days. If you are dissatisfied with our response, you have the right to complain to the Information Commissioner's Office at ico.org.uk or by calling 0303 123 1113.",
    ],
  },
  {
    id: "cookies",
    title: "10. Cookies & Website Tracking",
    body: [
      "Our website uses minimal cookies and tracking technologies. We do not use advertising cookies, do not engage in cross-site tracking, and do not sell website visitor data to any third party.",
      "Essential cookies: we use a small number of essential cookies required for the website to function correctly (e.g. remembering your cookie preferences, maintaining your session if you log into the customer portal). These cookies cannot be disabled as the website would not work without them.",
      "Analytics: we use Plausible Analytics, a privacy-preserving analytics service that does not use cookies and does not collect personal data. Plausible measures aggregate traffic (total page views, top referrers, country-level visitor origin) without tracking individuals. You can read more about Plausible's privacy approach at plausible.io/privacy.",
      "No advertising: we do not run any advertising on our website. We do not use Google Ads, Facebook Pixel, LinkedIn Insight Tag, or any other advertising or remarketing technology. We do not use Google Analytics.",
      "Embedded content: where we embed YouTube videos or third-party content on our blog, those third parties may set their own cookies when you interact with the embedded content. We have no control over these cookies and recommend reviewing the relevant third party's privacy policy.",
      "You can manage or delete cookies through your browser settings at any time. Most browsers also offer a 'do not track' setting which we respect.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact & Complaints",
    body: [
      "If you have any questions about this Privacy Policy, wish to exercise any of your data protection rights, or have a complaint about how we have handled your personal data, please contact our Data Protection Officer:",
      "Maundy Clean Ltd, Attn: Data Protection Officer, 412 Byres Road, Glasgow, G12 8AS, Scotland. Email: dpo@maundyclean.co.uk. Phone: +44 7735 322362 (Mon–Fri, 08:00–18:00).",
      `General customer enquiries can be directed to ${contactInfo.email} or by phone on ${contactInfo.phone}. We aim to respond to all enquiries within one working day, and to all data protection requests within 30 days.`,
      "If you are not satisfied with our response to a data protection complaint, you have the right to escalate your complaint to the Information Commissioner's Office (ICO). The ICO is the UK's independent authority for data protection and can be contacted at: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF. Phone: 0303 123 1113 (local rate) or 01625 545 745. Website: ico.org.uk.",
      "We commit to working cooperatively with the ICO and to addressing any findings or recommendations they make. We also commit to reviewing and updating this Privacy Policy at least annually, and more frequently where there are material changes to our data processing practices. The date of the last review is shown at the top of this document.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CompanyPageHero
          eyebrow="Legal · GDPR Compliant"
          breadcrumb="Privacy Policy"
          title={
            <>
              Your data, <span className="text-[var(--brand)]">handled with care</span>
            </>
          }
          subhead={`Our full Privacy Policy, last updated ${lastUpdated}. We are registered with the ICO, compliant with UK GDPR and the Data Protection Act 2018, and committed to handling your personal data transparently and securely.`}
          stats={[
            { value: "ICO", label: "Registered (ZB528471)" },
            { value: "UK GDPR", label: "Compliant" },
            { value: "72 hrs", label: "Breach notification" },
            { value: "30 days", label: "DSAR response" },
          ]}
          ctaPrimary={{ label: "Contact our DPO", href: `mailto:dpo@maundyclean.co.uk` }}
          ctaSecondary={{ label: "Call our team", href: contactInfo.phoneHref }}
        />

        {/* Quick navigation */}
        <section className="py-12 lg:py-16 border-b border-[var(--border)]">
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

                  <div className="mt-8 p-4 rounded-xl bg-[var(--cream)] border border-[var(--border)]">
                    <div className="text-xs font-bold uppercase tracking-wide text-[var(--muted-foreground)] mb-2">
                      Quick summary
                    </div>
                    <ul className="space-y-2 text-xs text-[var(--ink)] leading-relaxed">
                      <li className="flex gap-2"><Shield className="w-3.5 h-3.5 text-[var(--brand)] mt-0.5 shrink-0" /> ICO-registered Data Controller</li>
                      <li className="flex gap-2"><Lock className="w-3.5 h-3.5 text-[var(--brand)] mt-0.5 shrink-0" /> We never sell your data</li>
                      <li className="flex gap-2"><FileText className="w-3.5 h-3.5 text-[var(--brand)] mt-0.5 shrink-0" /> 30-day response to subject access</li>
                      <li className="flex gap-2"><Mail className="w-3.5 h-3.5 text-[var(--brand)] mt-0.5 shrink-0" /> dpo@maundyclean.co.uk</li>
                    </ul>
                  </div>
                </div>
              </aside>

              <div>
                <div className="lg:hidden mb-6 p-4 rounded-xl bg-[var(--cream)] border border-[var(--border)] text-sm text-[var(--muted-foreground)]">
                  <span className="font-semibold text-[var(--ink)]">Last updated:</span> {lastUpdated}
                </div>
                <div className="hidden lg:block mb-8 text-sm text-[var(--muted-foreground)]">
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

                <div className="mt-12 p-6 rounded-2xl bg-[var(--cream)] border border-[var(--border)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand)] flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-1">
                        Questions about your data?
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-3">
                        Our Data Protection Officer is available Monday to Friday, 08:00–18:00, to answer any questions or help you exercise your rights.
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <a
                          href="mailto:dpo@maundyclean.co.uk"
                          className="inline-flex items-center gap-1.5 text-[var(--brand)] hover:underline font-semibold"
                        >
                          <Mail className="w-4 h-4" /> dpo@maundyclean.co.uk
                        </a>
                        <a
                          href={contactInfo.phoneHref}
                          className="inline-flex items-center gap-1.5 text-[var(--brand)] hover:underline font-semibold"
                        >
                          <Phone className="w-4 h-4" /> {contactInfo.phone}
                        </a>
                        <span className="inline-flex items-center gap-1.5 text-[var(--muted-foreground)]">
                          <Clock className="w-4 h-4" /> Mon–Fri, 08:00–18:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Clear about how we handle your data?"
          subhead="Get a free, no-obligation quote in under 60 seconds. Same crew every visit, 100% satisfaction guarantee, no hidden fees."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
          bullets={[
            "98 specialist cleaning services available",
            "ICO-registered, UK GDPR compliant",
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

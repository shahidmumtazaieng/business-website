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
  Building2,
  Users,
  Handshake,
  Briefcase,
  Home,
  Gift,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us | Trade, B2B & Referrals | Maundy Clean",
  description:
    "Partner with Maundy Clean. Trade partnerships for letting agents, property managers, factors and developers. B2B framework agreements. Refer-a-friend scheme with £50 credit.",
  keywords: [
    "cleaning partner Scotland",
    "trade cleaning partnership",
    "letting agent cleaner",
    "property manager cleaning contractor",
    "cleaning referral scheme",
  ],
  alternates: { canonical: "/partners" },
};

const partnerTypes = [
  {
    icon: Building2,
    title: "Letting agents & estate agencies",
    description:
      "Trusted move-out, end-of-tenancy and turnover cleaning for your portfolio. We work with 40+ Scottish agencies — deposit-dispute-safe cleaning, 24-hour turnaround, single point of contact, monthly invoicing. White-label option available.",
    benefits: [
      "24-hour move-out turnaround",
      "Inventory-aware clean (AIIC-compatible)",
      "Single point of contact & monthly invoicing",
      "Deposit-dispute-safe documentation",
    ],
  },
  {
    icon: Home,
    title: "Property factors & HAs",
    description:
      "Communal-area cleaning for tenements, flatted developments and housing associations. Day porter, nightly janitorial, void-property remediation, biohazard response. Framework agreements with 12 Scottish factors and 8 housing associations.",
    benefits: [
      "Communal stairwell, close & garden maintenance",
      "Void-property strip-out & biohazard remediation",
      "Framework agreement terms (3-year typical)",
      "Tenant liaison & complaint resolution",
    ],
  },
  {
    icon: Briefcase,
    title: "Commercial & facilities managers",
    description:
      "Outsource your cleaning to a specialist crew — day porters, nightly janitorial, restroom sanitation, floor care, electrostatic disinfection. We hold framework agreements with NHS Trusts, local authorities, university estates and corporate property portfolios.",
    benefits: [
      "Framework-agreement terms & KPIs",
      "Named account manager & quarterly review",
      "Full audit trail (chemical, crew, ATP swab)",
      "£10m public liability on request",
    ],
  },
  {
    icon: Users,
    title: "Hospitality & holiday-let operators",
    description:
      "Turnover cleaning for hotels, B&Bs, self-catering and holiday-let portfolios. Ferry-timetable-aware scheduling for the islands. Linen change, mini-bar restock, guest-welcome pack preparation. 4-star and 5-star boutique hotel references available.",
    benefits: [
      "Same-day turnover (10am checkout, 4pm check-in)",
      "Linen change & laundry coordination",
      "Island-ferry-aware scheduling",
      "Guest-experience-trained housekeeping crew",
    ],
  },
];

const referralSteps = [
  {
    step: "01",
    title: "You refer a friend",
    description:
      "Send your unique referral link (or just give us your name when your friend books). We'll match it to your account.",
  },
  {
    step: "02",
    title: "They book & complete a clean",
    description:
      "Your friend books any service — one-off, recurring, commercial. The first clean is completed and paid for.",
  },
  {
    step: "03",
    title: "You both get £50 credit",
    description:
      "£50 credit on your next invoice. £50 credit on theirs. No limit on referrals — refer 10 friends, get £500 in credit.",
  },
];

const tradeBenefits = [
  "10-15% trade discount on published prices",
  "30-day invoice terms (no card payment needed)",
  "Single point of contact & dedicated account manager",
  "Monthly consolidated invoicing (one PO, one invoice, one payment)",
  "Priority scheduling during peak periods (June-August, December)",
  "Quarterly business review with KPIs and SLA performance",
  "Full audit trail — chemical batch-tracking, crew sign-in, ATP swab results",
  "£5m public liability as standard, increased to £10m on request",
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Partner With Us"
          breadcrumb="Partners"
          title={
            <>
              Cleaning partnerships,
              <br />
              <span className="text-[var(--brand)]">built to last.</span>
            </>
          }
          subhead="We work with letting agents, property factors, housing associations, NHS Trusts, university estates, facilities managers, hotel operators and holiday-let portfolio owners across Scotland. Framework agreements, trade pricing, monthly invoicing, single point of contact. And a refer-a-friend scheme that pays £50 both ways."
          ctaPrimary={{ label: "Become a trade partner", href: "#trade-enquiry" }}
          ctaSecondary={{ label: contactInfo.phone, href: contactInfo.phoneHref }}
          stats={[
            { value: "40+", label: "Letting agency partners" },
            { value: "12", label: "Property factor partners" },
            { value: "8", label: "Housing associations" },
            { value: "£50", label: "Referral credit, both ways" },
          ]}
        />

        {/* ---------- PARTNER TYPES ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Partner types"
              title={<>Four ways to work with us.</>}
              subhead="Every partnership is structured differently — but the basics are the same. Trade pricing, named account manager, monthly invoicing, full audit trail, framework agreement terms. Click through to start a conversation."
            />
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {partnerTypes.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="bg-white rounded-2xl p-7 lg:p-8 border border-[var(--border)] shadow-sm"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[var(--brand)]" />
                      </div>
                      <h3 className="font-display font-bold text-xl lg:text-2xl text-[var(--ink)] pt-2">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
                      {p.description}
                    </p>
                    <ul className="space-y-2">
                      {p.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                          <span className="text-[var(--ink)]">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- TRADE BENEFITS ---------- */}
        <section id="trade-enquiry" className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
                  Trade partnership benefits
                </span>
                <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-[var(--ink)] tracking-tight leading-tight mb-4">
                  What every trade partner gets.
                </h2>
                <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-6">
                  Trade partnerships are open to any business that books cleaning on behalf
                  of clients, tenants or properties — letting agents, property factors,
                  housing associations, facilities managers, hotel operators and trade
                  contractors. There's no minimum volume; we'll talk through your needs and
                  put together a framework agreement.
                </p>
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white font-semibold shadow-brand transition-colors"
                >
                  <Handshake className="w-5 h-5" />
                  Start the conversation
                </a>
              </div>
              <div className="bg-white rounded-2xl p-7 lg:p-8 border border-[var(--border)]">
                <ul className="space-y-4">
                  {tradeBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[var(--brand)] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm text-[var(--ink)] leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- REFER-A-FRIEND ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Refer-a-friend scheme"
              title={
                <>
                  Refer a friend. <span className="text-[var(--brand)]">£50 each.</span>
                </>
              }
              subhead="Existing Maundy Clean clients can refer friends, family, or anyone who'd benefit from a PVG-checked, eco-friendly cleaning service. When they complete their first clean, you both get £50 credit on your next invoice. No limit on referrals."
            />
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {referralSteps.map((s) => (
                <div
                  key={s.step}
                  className="bg-white rounded-2xl p-7 border border-[var(--border)] text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white font-display font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-lg text-[var(--ink)] mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 max-w-2xl mx-auto p-6 rounded-2xl bg-[var(--gold)]/15 border border-[var(--gold)]/30 flex items-center gap-4">
              <Gift className="w-8 h-8 text-[var(--gold-dark)] shrink-0" />
              <div>
                <div className="font-bold text-[var(--ink)] text-sm">
                  Already a client? Get your referral link.
                </div>
                <div className="text-xs text-[var(--muted-foreground)] mt-1">
                  Log in to your client portal, head to 'Refer a friend', and share your
                  unique link. Or just give us your name when your friend books — we'll
                  match it manually.
                </div>
              </div>
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Let's talk partnership."
          subhead="Whether you're a letting agent with 240 tenancies or a holiday-let owner with two properties, we'll structure a partnership that works. Call us — we'll come out to your office for a coffee and a proper conversation."
          primaryLabel={`Call ${contactInfo.phone}`}
          primaryHref={contactInfo.phoneHref}
          bullets={[
            "Trade discount of 10-15% on published prices",
            "30-day invoice terms, monthly consolidated billing",
            "Named account manager & quarterly business review",
            "Full audit trail — chemical, crew, ATP swab",
          ]}
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

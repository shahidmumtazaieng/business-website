import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServiceProcess } from "@/components/service-detail/service-process";
import { ServiceBenefits } from "@/components/service-detail/service-benefits";
import { ServiceGallery } from "@/components/service-detail/service-gallery";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceAreas } from "@/components/service-detail/service-areas";
import { ServiceTestimonials } from "@/components/service-detail/service-testimonials";
import { ServiceFaq } from "@/components/service-detail/service-faq";
import { ServiceRelated } from "@/components/service-detail/service-related";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import {
  BankFinancialSeoHeroBanner,
  BankFinancialSeoIntro,
  BankFinancialSeoWhy,
  BankFinancialSeoChecklist,
  BankFinancialSeoBooking,
  BankFinancialSeoInterlinking,
  BankFinancialSeoNearMe,
  BankFinancialSeoFaq,
  BankFinancialSeoFinalCta,
} from "@/components/service-detail/bank-financial-office-cleaning-seo";
import { bankFinancialOfficeCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: bankFinancialOfficeCleaning.metaTitle,
  description: bankFinancialOfficeCleaning.metaDescription,
  keywords: [
    "bank cleaning Scotland",
    "financial office cleaning Scotland",
    "PCI-DSS aware cleaning",
    "GDPR cleaning protocol",
    "vault dual-control cleaning",
    "DBS PVG bank cleaning",
    "secure bank cleaning Scotland",
    "building society cleaning",
    "wealth management office cleaning",
    "fintech office cleaning",
    "ATM sanitisation service",
    "branch network cleaning Scotland",
    "after-hours bank cleaning Scotland",
    "bank cleaning Glasgow",
    "bank cleaning Edinburgh",
    "bank cleaning Aberdeen",
    "bank cleaning near me",
    "Maundy Clean bank",
  ],
  openGraph: {
    title: bankFinancialOfficeCleaning.metaTitle,
    description: bankFinancialOfficeCleaning.metaDescription,
    type: "website",
    images: [{ url: bankFinancialOfficeCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${bankFinancialOfficeCleaning.slug}` },
};

export default function BankFinancialOfficeCleaningPage() {
  const service = bankFinancialOfficeCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Bank & Financial Office Cleaning Services Scotland) */}
        <BankFinancialSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Links to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <BankFinancialSeoIntro />

        {/* 3. Existing overview - rich paragraphs about PCI-DSS-aware, GDPR-aligned, dual-control keyholding */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Choice for Secure Financial Cleaning (image + 4 trust pillars: Vetted & Security-Cleared, Discretion, Same Trusted Team, Flexible Hours) */}
        <BankFinancialSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (PCI-DSS daily branch clean, executive suite, GDPR confidential waste, dual-control keyholding, server-adjacent dry clean, audit-defensible documentation) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Financial Office Hygiene & Maintenance Checklist (H2 + 3 H3 cards with images: Public Areas & ATM Sanitization, Staff Workstations & Secure Offices, Facilities & Kitchenette Hygiene) */}
        <BankFinancialSeoChecklist />

        {/* 7. Existing process - 4-step security & compliance scoping / mobilisation & PCI-DSS training / daily clean & dual-control logging / compliance review & audit prep */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Survey & Security Assessment / Professional Matching / Enjoy a Pristine Institution, link to /quote) */}
        <BankFinancialSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (PCI-DSS-aware, dual-control keyholding, GDPR-aligned confidential waste, £10m liability, etc.) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Need (H2 + 4 interlink cards to move-in-out, post-construction, disinfection, carpet-rug) */}
        <BankFinancialSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Bank & Financial Office Cleaning Near Me, Across Scotland) - 36 internal links */}
        <BankFinancialSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Quote Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <BankFinancialSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for financial institutions, equipment, key handovers) */}
        <BankFinancialSeoFaq />

        {/* 18. Existing FAQ - additional Q&As from service-detail-data */}
        <ServiceFaq service={service} />

        {/* 19. Related services - 6 internal links */}
        <ServiceRelated service={service} />

        {/* 20. Final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

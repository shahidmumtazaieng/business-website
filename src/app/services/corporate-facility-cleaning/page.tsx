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
  CorporateFacilitySeoHeroBanner,
  CorporateFacilitySeoIntro,
  CorporateFacilitySeoWhy,
  CorporateFacilitySeoChecklist,
  CorporateFacilitySeoBooking,
  CorporateFacilitySeoInterlinking,
  CorporateFacilitySeoNearMe,
  CorporateFacilitySeoFaq,
  CorporateFacilitySeoFinalCta,
} from "@/components/service-detail/corporate-facility-cleaning-seo";
import { corporateFacilityCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: corporateFacilityCleaning.metaTitle,
  description: corporateFacilityCleaning.metaDescription,
  keywords: [
    "corporate facility cleaning Scotland",
    "corporate HQ cleaning",
    "business park cleaning",
    "multi-tenant building cleaning",
    "ESG cleaning reporting",
    "ISO 14001 cleaning",
    "corporate grade cleaning",
    "managed facility cleaning",
    "PVG-checked corporate cleaners",
    "corporate facility cleaning Glasgow",
    "corporate facility cleaning Edinburgh",
    "corporate facility cleaning Aberdeen",
    "corporate facility cleaning near me",
    "Maundy Clean corporate",
  ],
  openGraph: {
    title: corporateFacilityCleaning.metaTitle,
    description: corporateFacilityCleaning.metaDescription,
    type: "website",
    images: [{ url: corporateFacilityCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${corporateFacilityCleaning.slug}` },
};

export default function CorporateFacilityCleaningPage() {
  const service = corporateFacilityCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Corporate Facility Cleaning Services Scotland) */}
        <CorporateFacilitySeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Link to /services/recurring-home-cleaning) */}
        <CorporateFacilitySeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about corporate-grade standards, single point of contact, multi-stakeholder coordination */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Strategic Commercial Partner (image + 4 trust pillars) */}
        <CorporateFacilitySeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (reception/atrium, executive floors, open-plan, meeting rooms, ESG, SPOC) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Facility Maintenance & Deep Cleaning Checklist (H2 + 3 H3 cards with images: workstations, floors, washroom/kitchen) */}
        <CorporateFacilitySeoChecklist />

        {/* 7. Existing process - 4-step site survey / mobilisation / daily service / quarterly review flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps, link to /quote) */}
        <CorporateFacilitySeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (corporate-grade standards, SPOC, ESG, multi-stakeholder, flexible hours, £10m liability) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Small Corporate £15/hr, Corporate HQ £15/hr highlighted, Major Corporate £POA) */}
        <ServicePricing service={service} />

        {/* 12. Commercial Solutions for Every Stage (H2 + 4 interlink cards to move-in-out, post-construction, restaurant, disinfection) */}
        <CorporateFacilitySeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Corporate Facility Cleaning Near Me, Across Scotland) - 36 internal links */}
        <CorporateFacilitySeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Book My Free Site Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <CorporateFacilitySeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 6 Q&As (3 from the user brief: insured, own equipment, all sizes + 3 additions: multi-tenant, ESG, after-hours) */}
        <CorporateFacilitySeoFaq />

        {/* 18. Existing FAQ - 6 additional Q&As from service-detail-data */}
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

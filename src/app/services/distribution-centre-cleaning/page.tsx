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
  DistributionCentreSeoHeroBanner,
  DistributionCentreSeoIntro,
  DistributionCentreSeoWhy,
  DistributionCentreSeoChecklist,
  DistributionCentreSeoBooking,
  DistributionCentreSeoInterlinking,
  DistributionCentreSeoNearMe,
  DistributionCentreSeoFaq,
  DistributionCentreSeoFinalCta,
} from "@/components/service-detail/distribution-centre-cleaning-seo";
import { distributionCentreCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: distributionCentreCleaning.metaTitle,
  description: distributionCentreCleaning.metaDescription,
  keywords: [
    "distribution centre cleaning Scotland",
    "distribution centre cleaner Edinburgh",
    "distribution centre cleaner Glasgow",
    "DC cleaning Scotland",
    "RDC cleaning Scotland",
    "NDC cleaning Scotland",
    "24/7 fulfilment cleaning",
    "MHE-aware cleaning Scotland",
    "BRCGS storage hygiene",
    "cold store cleaning Scotland",
    "high-bay racking cleaning",
    "confined space cleaning",
    "silo cleaning Scotland",
    "electrostatic fogging Scotland",
    "night shift cleaning Scotland",
    "distribution centre cleaning Glasgow",
    "distribution centre cleaning Edinburgh",
    "distribution centre cleaning Aberdeen",
    "distribution centre cleaning near me",
    "Maundy Clean distribution centre",
  ],
  openGraph: {
    title: distributionCentreCleaning.metaTitle,
    description: distributionCentreCleaning.metaDescription,
    type: "website",
    images: [{ url: distributionCentreCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${distributionCentreCleaning.slug}` },
};

export default function DistributionCentreCleaningPage() {
  const service = distributionCentreCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Distribution Centre & Logistics Cleaning Scotland) */}
        <DistributionCentreSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Links to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <DistributionCentreSeoIntro />

        {/* 3. Existing overview - rich paragraphs about distribution centre cleaning as a compliance & operational function */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Logistics Maintenance (image + 4 trust pillars: Same Trusted Team, Total Regulatory Compliance & RAMS, Specialist High-Reach Access, Flexible Operational Hours) */}
        <DistributionCentreSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (picker workstation, dock floors, high-bay racking, MHE charging, break rooms, BRCGS storage hygiene) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Distribution Centre Maintenance Checklist (H2 + 3 H3 cards with images: Floor Refurbishment & Heavy-Duty Scrubbing, Technical Storage & Racking Care, Amenity & Operational Hygiene) */}
        <DistributionCentreSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to DC operations & compliance */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Survey & Safe Systems / Professional Matching / Verifiable Results, link to /quote) */}
        <DistributionCentreSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (MHE-aware crews, BRCGS compliance, IPAF high-reach, zero-downtime night shifts, audit-ready docs, signed cleaning logs) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Small DC / Standard RDC / National Distribution) */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Logistics Cycle (H2 + 4 interlink cards to move-in-out, post-construction, window-cleaning (with inline pressure-washing Link), disinfection-services) */}
        <DistributionCentreSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Distribution Centre Cleaning Near Me in Scotland) - 36 internal links */}
        <DistributionCentreSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Detailed Proposal Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <DistributionCentreSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for industrial environments, provide own equipment, high-level cleaning for warehouses) */}
        <DistributionCentreSeoFaq />

        {/* 18. Existing FAQ - additional Q&As from service-detail-data */}
        <ServiceFaq service={service} />

        {/* 19. Related services - internal links */}
        <ServiceRelated service={service} />

        {/* 20. Final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

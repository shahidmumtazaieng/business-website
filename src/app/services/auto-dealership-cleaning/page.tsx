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
  AutoDealershipSeoHeroBanner,
  AutoDealershipSeoIntro,
  AutoDealershipSeoWhy,
  AutoDealershipSeoChecklist,
  AutoDealershipSeoBooking,
  AutoDealershipSeoInterlinking,
  AutoDealershipSeoNearMe,
  AutoDealershipSeoFaq,
  AutoDealershipSeoFinalCta,
} from "@/components/service-detail/auto-dealership-cleaning-seo";
import { autoDealershipCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: autoDealershipCleaning.metaTitle,
  description: autoDealershipCleaning.metaDescription,
  keywords: [
    "auto dealership cleaning Scotland",
    "car dealership cleaning",
    "showroom car cleaning",
    "main dealer cleaning",
    "EV showroom cleaning",
    "used car showroom cleaning",
    "car workshop cleaning",
    "forecourt cleaning",
    "Maundy Clean dealerships",
  ],
  openGraph: {
    title: autoDealershipCleaning.metaTitle,
    description: autoDealershipCleaning.metaDescription,
    type: "website",
    images: [{ url: autoDealershipCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${autoDealershipCleaning.slug}` },
};

export default function AutoDealershipCleaningPage() {
  const service = autoDealershipCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Auto Dealership & Car Showroom Cleaning Scotland) */}
        <AutoDealershipSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with TWO inline Links to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <AutoDealershipSeoIntro />

        {/* 3. Existing overview - rich paragraphs about auto dealership cleaning as a brand-image-critical maintenance function */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Showroom Maintenance (image + 4 trust pillars: Audit-Ready Compliance, Same Trusted Team, Specialist Surface Technicality, Eco-Friendly & Safe) */}
        <AutoDealershipSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (showroom floor, display cars, glass, workshop, forecourt, customer areas) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Dealership Maintenance & Technical Checklist (H2 + 3 H3 cards with images: Showroom Floor & Public Facing Areas, Workshop & Service Area Care, Amenity & Facility Hygiene) */}
        <AutoDealershipSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to dealership operations & out-of-hours scheduling */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Survey & Bespoke Plan / Professional Matching / Enjoy a Pristine Dealership, link to /quote) */}
        <AutoDealershipSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (PVG-checked crews, paintwork-safe chemistry, audit-ready logs, child-safe chemistry, franchise compliance, out-of-hours) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Main Dealer / Used Car Superstore / EV Showroom) */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Milestone (H2 + 4 interlink cards to event-venue-cleaning, post-construction-cleaning, move-in-out-cleaning, upholstery-cleaning) */}
        <AutoDealershipSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Auto Dealership & Car Showroom Cleaning Near Me in Scotland) - 36 internal links */}
        <AutoDealershipSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Free Site Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <AutoDealershipSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for dealership environments, provide own machinery, work around sales hours) */}
        <AutoDealershipSeoFaq />

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

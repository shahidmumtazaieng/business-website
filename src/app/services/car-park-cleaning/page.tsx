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
  CarParkSeoHeroBanner,
  CarParkSeoIntro,
  CarParkSeoWhy,
  CarParkSeoChecklist,
  CarParkSeoBooking,
  CarParkSeoInterlinking,
  CarParkSeoNearMe,
  CarParkSeoFaq,
  CarParkSeoFinalCta,
} from "@/components/service-detail/car-park-cleaning-seo";
import { carParkCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: carParkCleaning.metaTitle,
  description: carParkCleaning.metaDescription,
  keywords: [
    "car park cleaning Scotland",
    "car park cleaner Edinburgh",
    "car park cleaner Glasgow",
    "multi-storey car park cleaning Scotland",
    "underground car park cleaning",
    "surface car park cleaning Scotland",
    "car park pressure washing",
    "oil stain removal car park",
    "line marking refresh Scotland",
    "car park stairwell cleaning",
    "car park lift cleaning",
    "shopping centre car park cleaning Scotland",
    "hospital car park cleaning Scotland",
    "transport hub car park cleaning",
    "retail park car park cleaning",
    "car park cleaning Glasgow",
    "car park cleaning Edinburgh",
    "car park cleaning Aberdeen",
    "car park cleaning near me",
  ],
  openGraph: {
    title: carParkCleaning.metaTitle,
    description: carParkCleaning.metaDescription,
    type: "website",
    images: [{ url: carParkCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${carParkCleaning.slug}` },
};

export default function CarParkCleaningPage() {
  const service = carParkCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Car Park Cleaning Services Scotland) */}
        <CarParkSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Links to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <CarParkSeoIntro />

        {/* 3. Existing overview - rich paragraphs about car park cleaning as a safety & perception function */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Parking Facility Care (image + 4 trust pillars: Same Trusted Team, Total Regulatory Compliance, Top-of-the-Line Technical Equipment, Eco-Friendly & Surface Safe) */}
        <CarParkSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (mechanical sweeping, oil stain treatment, scrubber-drying, stairwells/lifts, line marking refresh, litter & perimeter) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Car Park Maintenance & Technical Checklist (H2 + 3 H3 cards with images: Comprehensive Surface Restoration, Structural & Facility Hygiene, Often-Missed Technical Details) */}
        <CarParkSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to car park operations & SEPA compliance */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Instant Quote & Site Survey / Professional Matching / Enjoy a Pristine Environment, link to /quote) */}
        <CarParkSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (ride-on equipment, oil bioremediation, SEPA-compliant disposal, scheduled around operations, stairwells & lifts, customer perception) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Surface Car Park / Multi-Storey & Underground / Large Commercial) */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Need (H2 + 4 interlink cards to recurring-home-cleaning, post-construction-cleaning, move-in-out-cleaning, disinfection-services) */}
        <CarParkSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Car Park Cleaning Near Me in Scotland) - 36 internal links */}
        <CarParkSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Get My 30-Second Instant Quote) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <CarParkSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for car park sites, provide own equipment, work with existing equipment) */}
        <CarParkSeoFaq />

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

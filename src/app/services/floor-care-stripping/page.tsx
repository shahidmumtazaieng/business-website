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
  FloorCareStrippingSeoHeroBanner,
  FloorCareStrippingSeoIntro,
  FloorCareStrippingSeoWhy,
  FloorCareStrippingSeoChecklist,
  FloorCareStrippingSeoBooking,
  FloorCareStrippingSeoInterlinking,
  FloorCareStrippingSeoNearMe,
  FloorCareStrippingSeoFaq,
  FloorCareStrippingSeoFinalCta,
} from "@/components/service-detail/floor-care-stripping-seo";
import { floorCareStripping } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: floorCareStripping.metaTitle,
  description: floorCareStripping.metaDescription,
  keywords: [
    "floor care Scotland",
    "floor stripping Glasgow",
    "floor refinishing Edinburgh",
    "VCT strip and refinish",
    "linoleum floor care",
    "terrazzo diamond polish",
    "marble floor restoration",
    "natural stone floor cleaning",
    "wood floor preservation",
    "commercial vinyl stripping",
    "anti-slip floor treatment",
    "heritage floor restoration Scotland",
    "floor care near me",
    "Maundy Clean floors",
  ],
  openGraph: {
    title: floorCareStripping.metaTitle,
    description: floorCareStripping.metaDescription,
    type: "website",
    images: [{ url: floorCareStripping.heroImage }],
  },
  alternates: { canonical: `/services/${floorCareStripping.slug}` },
};

export default function FloorCareStrippingPage() {
  const service = floorCareStripping;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Floor Care & Stripping Services Scotland) */}
        <FloorCareStrippingSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 3 intro paragraphs with ONE inline Link to /services/recurring-home-cleaning) */}
        <FloorCareStrippingSeoIntro />

        {/* 3. Existing overview - rich paragraphs about floor care as a specialist discipline */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Expert in Floor Restoration (image + 4 trust pillars: Same Trusted Team, Heritage & Architectural Specialists, Latest Technology, Sustainable & Safe Products) */}
        <FloorCareStrippingSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (full strip and refinish, scrub and recoat, daily burnish, natural stone restoration, terrazzo diamond polish, sealed concrete densifier) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Floor Maintenance & Stripping Checklist (H2 + 3 H3 cards with images: Natural Stone & Concrete Restoration, Wood Floor Preservation, Commercial Vinyl & Resilient Surfaces) */}
        <FloorCareStrippingSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to floor audit, pre-clean, strip/refinish, quarterly inspection */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Free Estimate & Floor Analysis / Professional Matching / Enjoy a Pristine Foundation, link to /quote) */}
        <FloorCareStrippingSeoBooking />

        {/* 9. Existing benefits grid - benefit cards (chemistry matched to floor type, high-solids metal-interlock polish, diamond-grit restoration, quarterly inspection, dust-free stripping, 14 years specialist) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - tiered options for scrub-and-recoat, full strip-and-refinish, and diamond restoration */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Need (H2 + 4 interlink cards to move-in-out-cleaning, post-construction-cleaning, recurring-home-cleaning, upholstery-cleaning - all 4 with inline Links in ReactNode descriptions) */}
        <FloorCareStrippingSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Floor Care & Stripping Near Me in Scotland) - 37 internal links */}
        <FloorCareStrippingSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Free Floor Estimate Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <FloorCareStrippingSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured technicians, provide own machinery, heritage-listed buildings) */}
        <FloorCareStrippingSeoFaq />

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

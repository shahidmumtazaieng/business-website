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
  HardwoodFloorSeoHeroBanner,
  HardwoodFloorSeoIntro,
  HardwoodFloorSeoWhy,
  HardwoodFloorSeoChecklist,
  HardwoodFloorSeoBooking,
  HardwoodFloorSeoInterlinking,
  HardwoodFloorSeoNearMe,
  HardwoodFloorSeoFaq,
  HardwoodFloorSeoFinalCta,
} from "@/components/service-detail/hardwood-floor-care-seo";
import { hardwoodFloorCare } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: hardwoodFloorCare.metaTitle,
  description: hardwoodFloorCare.metaDescription,
  keywords: [
    "hardwood floor care Scotland",
    "wood floor cleaning Scotland",
    "engineered wood cleaning",
    "laminate floor cleaning",
    "hardwood floor maintenance",
    "wood floor restoration Glasgow",
    "wood floor restoration Edinburgh",
    "parquet floor sanding",
    "herringbone floor sanding",
    "wood floor polishing Scotland",
    "low moisture wood floor cleaning",
    "hardwood floor care near me",
    "Maundy Clean hardwood",
  ],
  openGraph: {
    title: hardwoodFloorCare.metaTitle,
    description: hardwoodFloorCare.metaDescription,
    type: "website",
    images: [{ url: hardwoodFloorCare.heroImage }],
  },
  alternates: { canonical: `/services/${hardwoodFloorCare.slug}` },
};

export default function HardwoodFloorCarePage() {
  const service = hardwoodFloorCare;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Hardwood Floor Care & Recurring Home Cleaning Scotland) */}
        <HardwoodFloorSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Timber Surface Care) + stats band */}
        <HardwoodFloorSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about wood species, finish types, maintenance lifecycle */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is the Authority in Scottish Floor Maintenance (image + 4 trust pillars) */}
        <HardwoodFloorSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (assessment, maintenance clean, deep clean, screen & recoat, full sand, parquet/engineered specialists) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Comprehensive Hard Floor Technical Checklist (H2 + 3 H3 cards with images: engineered/solid, laminate, safety) */}
        <HardwoodFloorSeoChecklist />

        {/* 7. Existing process - 4-step assessment/preparation/cleaning/handover flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps, link to /quote) */}
        <HardwoodFloorSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (wood science, right products, dust-free, investment protection, parquet specialists, guarantee) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Maintenance £18/hr, Deep/Screen & Recoat £12/sqm, Full Sand & Refinish £35/sqm) */}
        <ServicePricing service={service} />

        {/* 12. A Solution for Every Stage (H2 + 4 interlink cards to recurring, deep, move-in/out, post-construction) */}
        <HardwoodFloorSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Hardwood Floor Care Services Near Me in Scotland) - 36 internal links */}
        <HardwoodFloorSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Book Your Hardwood Floor Care?) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <HardwoodFloorSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 6 Q&As (3 from the user brief: own equipment, how often, insured + 3 additions: sanding engineered wood, dust-free, finish choice) */}
        <HardwoodFloorSeoFaq />

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

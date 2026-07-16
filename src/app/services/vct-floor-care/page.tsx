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
  VctFloorCareSeoHeroBanner,
  VctFloorCareSeoIntro,
  VctFloorCareSeoWhy,
  VctFloorCareSeoChecklist,
  VctFloorCareSeoBooking,
  VctFloorCareSeoInterlinking,
  VctFloorCareSeoNearMe,
  VctFloorCareSeoFaq,
  VctFloorCareSeoFinalCta,
} from "@/components/service-detail/vct-floor-care-seo";
import { vctFloorCare } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: vctFloorCare.metaTitle,
  description: vctFloorCare.metaDescription,
  keywords: [
    "VCT floor care Scotland",
    "vinyl composition tile",
    "VCT strip and refinish",
    "metal-interlock polish",
    "HTM 01-05 VCT",
    "VCT burnish",
    "high-speed burnishing Scotland",
    "commercial vinyl stripping",
    "multi-layer waxing",
    "high-solids sealer",
    "VCT floor care near me",
    "Maundy Clean VCT",
  ],
  openGraph: {
    title: vctFloorCare.metaTitle,
    description: vctFloorCare.metaDescription,
    type: "website",
    images: [{ url: vctFloorCare.heroImage }],
  },
  alternates: { canonical: `/services/${vctFloorCare.slug}` },
};

export default function VctFloorCarePage() {
  const service = vctFloorCare;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional VCT Floor Care & Stripping Services Scotland) */}
        <VctFloorCareSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with ONE inline Link to /services/recurring-home-cleaning) */}
        <VctFloorCareSeoIntro />

        {/* 3. Existing overview - rich paragraphs about VCT as a specialist discipline */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in VCT Maintenance (image + 4 trust pillars: Same Trusted Team, Heavy-Duty Technical Machinery, Sustainable & Safe Products, Manufacturer-Standard Care) */}
        <VctFloorCareSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (full strip and refinish, scrub and recoat, daily burnish, HTM 01-05 compliant chemistry, slip-resistant polish, gloss meter readings) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total VCT Maintenance & Stripping Checklist (H2 + 3 H3 cards with images: Professional Stripping & Deep Cleaning, Technical Sealing & Finishing, Often-Missed Technical Details) */}
        <VctFloorCareSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to VCT audit, pre-clean, strip/refinish, quarterly inspection */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Survey & Floor Analysis / Professional Matching / Enjoy a Pristine Foundation, link to /quote) */}
        <VctFloorCareSeoBooking />

        {/* 9. Existing benefits grid - benefit cards (chemistry matched to VCT, high-solids metal-interlock polish, colour-coded pad systems, quarterly inspection, dust-free wet stripping, 14 years specialist) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - tiered options for scrub-and-recoat, full strip-and-refinish, and premium 30% solids polish */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Need (H2 + 4 interlink cards to recurring-home-cleaning, move-in-out-cleaning, post-construction-cleaning, carpet-rug-cleaning/upholstery-cleaning - all 4 with inline Links in ReactNode descriptions) */}
        <VctFloorCareSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: VCT Floor Care Near Me in Scotland) - 37 internal links */}
        <VctFloorCareSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Free Floor Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <VctFloorCareSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (stripping frequency, insured technicians, provide own machinery) */}
        <VctFloorCareSeoFaq />

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

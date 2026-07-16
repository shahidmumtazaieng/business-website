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
  BlindShadeSeoHeroBanner,
  BlindShadeSeoIntro,
  BlindShadeSeoWhy,
  BlindShadeSeoChecklist,
  BlindShadeSeoBooking,
  BlindShadeSeoInterlinking,
  BlindShadeSeoNearMe,
  BlindShadeSeoFaq,
  BlindShadeSeoFinalCta,
} from "@/components/service-detail/blind-shade-cleaning-seo";
import { blindShadeCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: blindShadeCleaning.metaTitle,
  description: blindShadeCleaning.metaDescription,
  keywords: [
    "blind cleaning Scotland",
    "venetian blind cleaning",
    "roller blind cleaning",
    "vertical blind cleaning",
    "roman blind cleaning",
    "pleated blind cleaning",
    "honeycomb blind cleaning",
    "plantation shutter cleaning",
    "ultrasonic blind cleaning",
    "blind restoration Scotland",
    "blind cleaning Glasgow",
    "blind cleaning Edinburgh",
    "blind cleaning near me",
    "Maundy Clean blinds",
  ],
  openGraph: {
    title: blindShadeCleaning.metaTitle,
    description: blindShadeCleaning.metaDescription,
    type: "website",
    images: [{ url: blindShadeCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${blindShadeCleaning.slug}` },
};

export default function BlindShadeCleaningPage() {
  const service = blindShadeCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Blind & Shade Cleaning Services in Scotland) */}
        <BlindShadeSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Window Treatment Care) + stats band */}
        <BlindShadeSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about allergens, blind types, ultrasonic vs hand-clean */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is the Authority in Blind Maintenance (image + 4 trust pillars) */}
        <BlindShadeSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (Venetian ultrasonic, roller/Roman hand-clean, vertical, pleated, plantation, on-site/workshop) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Comprehensive Blind Restoration Checklist (H2 + 3 H3 cards with images: inspection, execution, final checks) + specialized services strip */}
        <BlindShadeSeoChecklist />

        {/* 7. Existing process - 4-step quote/schedule/clean/handover flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps, link to /quote) */}
        <BlindShadeSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (ultrasonic, allergen reduction, every type, same-day, careful, guarantee) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Venetian £12/blind, Mixed £10/blind, Plantation Shutters £18/shutter) */}
        <ServicePricing service={service} />

        {/* 12. A Solution for Every Cycle (H2 + 4 interlink cards to recurring, deep, move-in/out, post-construction) */}
        <BlindShadeSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Blind & Shade Cleaning Services Near Me in Scotland) - 36 internal links */}
        <BlindShadeSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Book Your Blind & Shade Cleaning?) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <BlindShadeSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 6 Q&As (3 from the user brief: repairs, take down yourself, insured + 3 additions: ultrasonic safety, real wood, frequency) */}
        <BlindShadeSeoFaq />

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

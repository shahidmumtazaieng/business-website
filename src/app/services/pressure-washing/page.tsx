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
  PressureWashingSeoHeroBanner,
  PressureWashingSeoIntro,
  PressureWashingSeoWhy,
  PressureWashingSeoChecklist,
  PressureWashingSeoBooking,
  PressureWashingSeoInterlinking,
  PressureWashingSeoNearMe,
  PressureWashingSeoFaq,
  PressureWashingSeoFinalCta,
} from "@/components/service-detail/pressure-washing-seo";
import { pressureWashing } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: pressureWashing.metaTitle,
  description: pressureWashing.metaDescription,
  keywords: [
    "pressure washing Scotland",
    "driveway cleaning Scotland",
    "patio cleaning Scotland",
    "block paving cleaning",
    "render cleaning",
    "decking cleaning",
    "sandstone cleaning",
    "rotary surface cleaner",
    "biocidal wash",
    "exterior cleaning Glasgow",
    "pressure washing Edinburgh",
    "commercial pressure washing",
    "pressure washing near me",
    "Maundy Clean pressure washing",
  ],
  openGraph: {
    title: pressureWashing.metaTitle,
    description: pressureWashing.metaDescription,
    type: "website",
    images: [{ url: pressureWashing.heroImage }],
  },
  alternates: { canonical: `/services/${pressureWashing.slug}` },
};

export default function PressureWashingPage() {
  const service = pressureWashing;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Pressure Washing & Exterior Cleaning Scotland) */}
        <PressureWashingSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Exterior Maintenance) + stats band */}
        <PressureWashingSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about rotary surface cleaners, substrate pressure caps, sealing */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is the Authority in Scottish Exterior Maintenance (image + 4 trust pillars) */}
        <PressureWashingSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Exterior Maintenance Checklist (H2 + 3 H3 cards with images: driveways, patios, facade) */}
        <PressureWashingSeoChecklist />

        {/* 7. Existing process - 4-step site-visit/pre-treat/wash/re-sand flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps, link to /quote) */}
        <PressureWashingSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (substrate-trained, rotary, biocidal, sealing, drainage, photos) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Single Surface £3.50/m², Whole Property £2.95/m², Commercial £POA) */}
        <ServicePricing service={service} />

        {/* 12. A Solution for Every Property Cycle (H2 + 4 interlink cards to recurring, deep, move-in/out, post-construction) */}
        <PressureWashingSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Pressure Washing Services Near Me in Scotland) - 36 internal links */}
        <PressureWashingSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Ready to Book Your Pressure Washing Service?) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <PressureWashingSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 6 Q&As (3 from the user brief: frequency, commercial, need-to-be-home + 3 additions: substrate damage, regrowth, runoff) */}
        <PressureWashingSeoFaq />

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

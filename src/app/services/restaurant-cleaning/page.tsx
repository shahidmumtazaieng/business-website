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
  RestaurantSeoHeroBanner,
  RestaurantSeoIntro,
  RestaurantSeoWhy,
  RestaurantSeoChecklist,
  RestaurantSeoBooking,
  RestaurantSeoInterlinking,
  RestaurantSeoNearMe,
  RestaurantSeoFaq,
  RestaurantSeoFinalCta,
} from "@/components/service-detail/restaurant-cleaning-seo";
import { restaurantCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: restaurantCleaning.metaTitle,
  description: restaurantCleaning.metaDescription,
  keywords: [
    "restaurant cleaning Scotland",
    "bar and pub cleaning Scotland",
    "kitchen deep cleaning Glasgow",
    "extraction TR19 canopy clean",
    "FOH BOH cleaning Edinburgh",
    "EHO inspection ready cleaning",
    "HACCP cleaning schedule",
    "COSHH food-safe cleaning",
    "after-hours restaurant cleaning",
    "independent bar cleaning Scotland",
    "restaurant cleaning Glasgow",
    "restaurant cleaning Edinburgh",
    "restaurant cleaning Aberdeen",
    "restaurant cleaning near me",
    "Maundy Clean restaurant",
  ],
  openGraph: {
    title: restaurantCleaning.metaTitle,
    description: restaurantCleaning.metaDescription,
    type: "website",
    images: [{ url: restaurantCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${restaurantCleaning.slug}` },
};

export default function RestaurantCleaningPage() {
  const service = restaurantCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Restaurant Cleaning & Recurring Commercial Maintenance Scotland) */}
        <RestaurantSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Link to /services/recurring-home-cleaning) */}
        <RestaurantSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about kitchen-deep-clean methodology, HACCP, EHO compliance */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is the Authority in Scottish Pub & Restaurant Cleaning (image + 4 trust pillars) */}
        <RestaurantSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (FOH daily reset, BOH end-of-service, etc.) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Comprehensive Restaurant Maintenance & Deep Cleaning Checklist (H2 + 3 H3 cards with images: kitchen, FOH, washroom) */}
        <RestaurantSeoChecklist />

        {/* 7. Existing process - 4-step site survey / HACCP SOP / daily service / quarterly review flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps, link to /quote) */}
        <RestaurantSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (kitchen deep clean, FOH sparkle, EHO compliance, HACCP SOPs, dedicated team, £5m liability) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Commercial Solutions for Every Stage (H2 + 4 interlink cards to deep-house, move-in-out, post-construction, upholstery) */}
        <RestaurantSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Restaurant Cleaning Near Me, Across Scotland) - 36 internal links */}
        <RestaurantSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Book Your Free Consultation Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <RestaurantSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for hospitality, all supplies, quality control) */}
        <RestaurantSeoFaq />

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

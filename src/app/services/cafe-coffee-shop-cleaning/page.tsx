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
  CafeCoffeeShopSeoHeroBanner,
  CafeCoffeeShopSeoIntro,
  CafeCoffeeShopSeoWhy,
  CafeCoffeeShopSeoChecklist,
  CafeCoffeeShopSeoBooking,
  CafeCoffeeShopSeoInterlinking,
  CafeCoffeeShopSeoNearMe,
  CafeCoffeeShopSeoFaq,
  CafeCoffeeShopSeoFinalCta,
} from "@/components/service-detail/cafe-coffee-shop-cleaning-seo";
import { cafeCoffeeShopCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: cafeCoffeeShopCleaning.metaTitle,
  description: cafeCoffeeShopCleaning.metaDescription,
  keywords: [
    "cafe cleaning Scotland",
    "coffee shop cleaning Scotland",
    "espresso machine cleaning Glasgow",
    "EHO compliant cafe cleaning",
    "barista zone cleaning Edinburgh",
    "cafe daily open close cleaning",
    "food safe cleaning chemistry",
    "HACCP cleaning schedule cafe",
    "COSHH food-safe cafe cleaning",
    "after-hours cafe cleaning Scotland",
    "independent cafe cleaning Scotland",
    "cafe cleaning Glasgow",
    "cafe cleaning Edinburgh",
    "cafe cleaning Aberdeen",
    "cafe cleaning near me",
    "Maundy Clean cafe",
  ],
  openGraph: {
    title: cafeCoffeeShopCleaning.metaTitle,
    description: cafeCoffeeShopCleaning.metaDescription,
    type: "website",
    images: [{ url: cafeCoffeeShopCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${cafeCoffeeShopCleaning.slug}` },
};

export default function CafeCoffeeShopCleaningPage() {
  const service = cafeCoffeeShopCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Café & Coffee Shop Cleaning Services Scotland) */}
        <CafeCoffeeShopSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Link to /services/recurring-home-cleaning) */}
        <CafeCoffeeShopSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about espresso-machine-zone methodology, HACCP, EHO compliance */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Café Maintenance (image + 4 trust pillars) */}
        <CafeCoffeeShopSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (daily open & close, weekly deep, espresso machine zone, WC, EHO docs, floor degrease) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Comprehensive Café & Coffee Shop Cleaning Checklist (H2 + 3 H3 cards with images: FOH, Counter/Barista, BOH/Kitchenette) */}
        <CafeCoffeeShopSeoChecklist />

        {/* 7. Existing process - 4-step site survey / HACCP SOP / daily service / quarterly review flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps, link to /quote) */}
        <CafeCoffeeShopSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (espresso zone, FOH sparkle, EHO compliance, HACCP SOPs, dedicated team, £5m liability) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Business Stage (H2 + 4 interlink cards to deep-house, move-in-out, post-construction, disinfection) */}
        <CafeCoffeeShopSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Café & Coffee Shop Cleaning Near Me, Across Scotland) - 36 internal links */}
        <CafeCoffeeShopSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Book Your Free Consultation Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <CafeCoffeeShopSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for commercial sites, equipment, quality control) */}
        <CafeCoffeeShopSeoFaq />

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

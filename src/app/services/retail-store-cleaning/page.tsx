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
  RetailStoreSeoHeroBanner,
  RetailStoreSeoIntro,
  RetailStoreSeoWhy,
  RetailStoreSeoChecklist,
  RetailStoreSeoBooking,
  RetailStoreSeoInterlinking,
  RetailStoreSeoNearMe,
  RetailStoreSeoFaq,
  RetailStoreSeoFinalCta,
} from "@/components/service-detail/retail-store-cleaning-seo";
import { retailStoreCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: retailStoreCleaning.metaTitle,
  description: retailStoreCleaning.metaDescription,
  keywords: [
    "retail store cleaning Scotland",
    "high-street retailer cleaning",
    "shopping centre cleaning",
    "fitting room cleaning",
    "till zone disinfection",
    "display-aware cleaning",
    "shop front cleaning",
    "retail park cleaning",
    "boutique cleaning",
    "retail store cleaning Glasgow",
    "retail store cleaning Edinburgh",
    "retail store cleaning Aberdeen",
    "retail store cleaning near me",
    "Maundy Clean retail",
  ],
  openGraph: {
    title: retailStoreCleaning.metaTitle,
    description: retailStoreCleaning.metaDescription,
    type: "website",
    images: [{ url: retailStoreCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${retailStoreCleaning.slug}` },
};

export default function RetailStoreCleaningPage() {
  const service = retailStoreCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Retail Store Cleaning Services in Glasgow, Edinburgh & Across Scotland) */}
        <RetailStoreSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Link to /services/recurring-home-cleaning) */}
        <RetailStoreSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about display-aware methodology, fitting-room detail, till-zone hygiene */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is the Trusted Choice for Scottish Retailers (image + 4 trust pillars) */}
        <RetailStoreSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (daily open & close, display-aware, fitting-room, till zone, etc.) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Retail Maintenance & Deep Cleaning Checklist (H2 + 2 H3 cards with images: shop floors, washroom & facilities) */}
        <RetailStoreSeoChecklist />

        {/* 7. Existing process - 4-step site survey / brand SOP / daily service / quarterly review flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps, link to /quote) */}
        <RetailStoreSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (display-aware, fitting-room detail, till-zone disinfection, brand SOPs, dedicated team, £5m liability) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Commercial Solutions for Every Stage (H2 + 4 interlink cards to spring-cleaning, move-in-out, post-construction, disinfection) */}
        <RetailStoreSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Retail Store Cleaning Near Me, Across Scotland) - 36 internal links */}
        <RetailStoreSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Book Your Free Site Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <RetailStoreSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured, own equipment, out-of-town retail parks) */}
        <RetailStoreSeoFaq />

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

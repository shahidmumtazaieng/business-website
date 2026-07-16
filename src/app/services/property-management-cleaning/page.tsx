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
  PropertyManagementSeoHeroBanner,
  PropertyManagementSeoIntro,
  PropertyManagementSeoWhy,
  PropertyManagementSeoChecklist,
  PropertyManagementSeoBooking,
  PropertyManagementSeoInterlinking,
  PropertyManagementSeoNearMe,
  PropertyManagementSeoFaq,
  PropertyManagementSeoFinalCta,
} from "@/components/service-detail/property-management-cleaning-seo";
import { propertyManagementCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: propertyManagementCleaning.metaTitle,
  description: propertyManagementCleaning.metaDescription,
  keywords: [
    "property management cleaning Scotland",
    "factor cleaning Glasgow",
    "factor cleaning Edinburgh",
    "tenement close cleaning",
    "communal area cleaning",
    "housing association cleaning",
    "bin store cleaning",
    "stairwell cleaning Scotland",
    "Maundy Clean property management",
  ],
  openGraph: {
    title: propertyManagementCleaning.metaTitle,
    description: propertyManagementCleaning.metaDescription,
    type: "website",
    images: [{ url: propertyManagementCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${propertyManagementCleaning.slug}` },
};

export default function PropertyManagementCleaningPage() {
  const service = propertyManagementCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Property Management & Landlord Cleaning Services Scotland) */}
        <PropertyManagementSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with ONE inline Link to /services/recurring-home-cleaning) */}
        <PropertyManagementSeoIntro />

        {/* 3. Existing overview - rich paragraphs about property management cleaning as a communal-area-critical maintenance function */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Property Maintenance (image + 4 trust pillars: Same Trusted Team, Reactive Mobile Team, Total Landlord Support with inline Link, Eco-Friendly & Safe) */}
        <PropertyManagementSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (close, landing, bin store, communal lounge, shared garden, tenancy transition) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Property Management & Block Maintenance Checklist (H2 + 3 H3 cards with images: Communal & Block Maintenance (Recurring), Technical Unit Resets (Deep Cleans), Often-Missed Technical Details) */}
        <PropertyManagementSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to portfolio operations & out-of-hours scheduling */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 steps: Site Survey & Strategy / Professional Matching / Enjoy a Pristine Portfolio, link to /quote) */}
        <PropertyManagementSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (PVG-checked crews, communal-area consistency, signed logs, child-safe chemistry, factor compliance, reactive mobile team) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Single Block / Multi-Block Portfolio / Multi-Site Retainer) */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Need (H2 + 4 interlink cards to move-in-out-cleaning, post-construction-cleaning, deep-house-cleaning, upholstery-cleaning - all 4 with inline Links in ReactNode descriptions) */}
        <PropertyManagementSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Property Management & Landlord Cleaning Near Me in Scotland) - 37 internal links */}
        <PropertyManagementSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Portfolio Quote) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <PropertyManagementSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for commercial and block management, provide own supplies, 24/7 emergency response) */}
        <PropertyManagementSeoFaq />

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

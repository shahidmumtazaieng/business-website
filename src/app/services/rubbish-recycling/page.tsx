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
  RubbishRecyclingSeoHeroBanner,
  RubbishRecyclingSeoIntro,
  RubbishRecyclingSeoWhy,
  RubbishRecyclingSeoChecklist,
  RubbishRecyclingSeoBooking,
  RubbishRecyclingSeoInterlinking,
  RubbishRecyclingSeoNearMe,
  RubbishRecyclingSeoFaq,
  RubbishRecyclingSeoFinalCta,
} from "@/components/service-detail/rubbish-recycling-seo";
import { rubbishRecycling } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: rubbishRecycling.metaTitle,
  description: rubbishRecycling.metaDescription,
  keywords: [
    "rubbish & recycling Scotland",
    "commercial waste collection",
    "PAS 402 reporting",
    "SEPA licensed carriers",
    "GDPR confidential waste",
    "baling equipment",
    "zero waste to landfill",
    "sustainable waste management",
    "Maundy Clean waste",
  ],
  openGraph: {
    title: rubbishRecycling.metaTitle,
    description: rubbishRecycling.metaDescription,
    type: "website",
    images: [{ url: rubbishRecycling.heroImage }],
  },
  alternates: { canonical: `/services/${rubbishRecycling.slug}` },
};

export default function RubbishRecyclingPage() {
  const service = rubbishRecycling;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Rubbish & Recycling Services Scotland) */}
        <RubbishRecyclingSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with TWO inline Links to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <RubbishRecyclingSeoIntro />

        {/* 3. Existing overview - rich paragraphs about SEPA regulation, waste streams, licensed carriers, PAS 402-aligned reporting */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Strategic Recycling Partner (image + 4 trust pillars: The Same Trusted Team, Cost-Effective Waste Reduction, Total Regulatory Compliance with inline Link to /services/post-construction-cleaning, Eco-Friendly & Community Safe) */}
        <RubbishRecyclingSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (segregated collection, hazardous streams, baling, audit-defensible reporting) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Comprehensive Waste & Recycling Portfolio (H2 + 3 H3 cards with images: Commercial Recycling Solutions (The "Alchemy" Process), Specialist Rubbish & Clearance Services, Often-Missed Operational Details) */}
        <RubbishRecyclingSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to site survey, mobilisation, monthly review, quarterly deep clean */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Survey & Waste Audit / Professional Integration / Enjoy a Greener Workspace, link to /quote) */}
        <RubbishRecyclingSeoBooking />

        {/* 9. Existing benefits grid - benefit cards (above-standard, odour elimination, limescale specialist, PVG-checked, deep clean rota, customer perception) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - tiered retainer options for small office through distribution centre */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Cycle (H2 + 4 interlink cards to move-in-out-cleaning, disinfection-services, event-venue-cleaning, car-park-cleaning - all 4 with inline Links in ReactNode descriptions) */}
        <RubbishRecyclingSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Rubbish & Recycling Services Near Me in Scotland) - 37 internal links */}
        <RubbishRecyclingSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Waste Audit Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <RubbishRecyclingSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (zero waste to landfill, insured waste operatives, provide own bins and equipment) */}
        <RubbishRecyclingSeoFaq />

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

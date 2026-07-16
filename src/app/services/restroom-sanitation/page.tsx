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
  RestroomSanitationSeoHeroBanner,
  RestroomSanitationSeoIntro,
  RestroomSanitationSeoWhy,
  RestroomSanitationSeoChecklist,
  RestroomSanitationSeoBooking,
  RestroomSanitationSeoInterlinking,
  RestroomSanitationSeoNearMe,
  RestroomSanitationSeoFaq,
  RestroomSanitationSeoFinalCta,
} from "@/components/service-detail/restroom-sanitation-seo";
import { restroomSanitation } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: restroomSanitation.metaTitle,
  description: restroomSanitation.metaDescription,
  keywords: [
    "restroom sanitation Scotland",
    "washroom cleaning Glasgow",
    "washroom cleaning Edinburgh",
    "restroom deep cleaning",
    "washroom hygiene services",
    "commercial toilet cleaning",
    "public restroom cleaning",
    "sanitary hygiene services",
    "restroom sanitation near me",
    "Maundy Clean washroom",
  ],
  openGraph: {
    title: restroomSanitation.metaTitle,
    description: restroomSanitation.metaDescription,
    type: "website",
    images: [{ url: restroomSanitation.heroImage }],
  },
  alternates: { canonical: `/services/${restroomSanitation.slug}` },
};

export default function RestroomSanitationPage() {
  const service = restroomSanitation;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Restroom Sanitation & Washroom Cleaning Services Scotland) */}
        <RestroomSanitationSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with ONE inline Link to /services/recurring-home-cleaning) */}
        <RestroomSanitationSeoIntro />

        {/* 3. Existing overview - rich paragraphs about restroom sanitation as the brand-critical washroom hygiene discipline */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Choice for Technical Washroom Hygiene (image + 4 trust pillars: The Same Trusted Professional, Specialized Technical Equipment, Total Regulatory & Infection Control, Eco-Friendly & Safe) */}
        <RestroomSanitationSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (toilets/urinals/basins, mirrors, floors, partitions, dispensers, sanitary bins) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Restroom Maintenance & Deep Cleaning Checklist (H2 + 3 H3 cards with images: Advanced Sanitary Deep Cleaning, Technical Floor & Wall Care, Consumables & Facility Management) */}
        <RestroomSanitationSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to washroom survey, crew matching, sanitisation and inspection */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 steps: Site Survey & Bespoke Plan / Professional Matching / Enjoy a Pristine Facility, link to /quote) */}
        <RestroomSanitationSeoBooking />

        {/* 9. Existing benefits grid - benefit cards (PVG-checked washroom crews, same crew every visit, signed washroom logs, child-safe chemistry, multi-site one-invoice convenience) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - tiered retainer options for single-site restroom sanitation through multi-site commercial estate */}
        <ServicePricing service={service} />

        {/* 12. Hygiene Solutions for Every Stage (H2 + 4 interlink cards to recurring-home-cleaning, move-in-out-cleaning, post-construction-cleaning, disinfection-services - all 4 with inline Links in ReactNode descriptions) */}
        <RestroomSanitationSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Restroom Sanitation & Washroom Cleaning Near Me in Scotland) - 37 internal links */}
        <RestroomSanitationSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Hygiene Quote Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <RestroomSanitationSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (provide own materials, insured for commercial sites, manage restocking of supplies) */}
        <RestroomSanitationSeoFaq />

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

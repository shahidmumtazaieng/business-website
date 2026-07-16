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
  HighDustingSeoHeroBanner,
  HighDustingSeoIntro,
  HighDustingSeoWhy,
  HighDustingSeoChecklist,
  HighDustingSeoBooking,
  HighDustingSeoInterlinking,
  HighDustingSeoNearMe,
  HighDustingSeoFaq,
  HighDustingSeoFinalCta,
} from "@/components/service-detail/high-dusting-seo";
import { highDusting } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: highDusting.metaTitle,
  description: highDusting.metaDescription,
  keywords: [
    "high dusting Scotland",
    "high-level dusting",
    "commercial dusting services",
    "ceiling dusting",
    "ductwork cleaning",
    "warehouse high dusting",
    "MEWP cleaning access",
    "cherry-picker cleaning",
    "IPAF certified cleaning",
    "HEPA H-class vacuum",
    "high dusting near me",
    "Maundy Clean high dusting",
  ],
  openGraph: {
    title: highDusting.metaTitle,
    description: highDusting.metaDescription,
    type: "website",
    images: [{ url: highDusting.heroImage }],
  },
  alternates: { canonical: `/services/${highDusting.slug}` },
};

export default function HighDustingPage() {
  const service = highDusting;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional High-Level Dusting & Commercial Dusting Services Scotland) */}
        <HighDustingSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 3 intro paragraphs with ONE inline Link to /services/recurring-home-cleaning in para 2) */}
        <HighDustingSeoIntro />

        {/* 3. Existing overview - rich paragraphs about high dusting as a specialist discipline */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Expert in High-Level Maintenance (image + 4 trust pillars: Same Trusted Team, Enhanced Indoor Air Quality, Total Regulatory Compliance, Eco-Friendly & Safe) */}
        <HighDustingSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (MEWP-access, carbon-fibre pole, ceiling/beam/truss, ductwork, extractor fan, defect report) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Comprehensive High-Level Dusting Checklist (H2 + 3 H3 cards with images: Structural & Architectural Features, Technical & Mechanical Systems, Specialized Commercial Environments - each with 3 sub-points) */}
        <HighDustingSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to high-dusting survey, prep, section-by-section clean, floor recovery */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 steps: Site Survey & Safety Assessment / Professional Matching / Enjoy a Pristine Premise, link to /quote) */}
        <HighDustingSeoBooking />

        {/* 9. Existing benefits grid - benefit cards (IPAF-certified, HEPA H-class, respiratory health, out-of-hours, carbon-fibre pole, defect report) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - tiered options for single-area, full warehouse/factory, historic/listed building */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Stage (H2 + 4 interlink cards to recurring-home-cleaning, post-construction-cleaning, move-in-out-cleaning, disinfection-services - all 4 with inline Links in ReactNode descriptions) */}
        <HighDustingSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: High Dusting Near Me in Scotland) - 37 internal links */}
        <HighDustingSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Free High-Level Survey) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <HighDustingSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (own equipment, insured for high-level work, work around business hours) */}
        <HighDustingSeoFaq />

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

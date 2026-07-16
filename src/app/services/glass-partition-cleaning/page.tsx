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
  GlassPartitionCleaningSeoHeroBanner,
  GlassPartitionCleaningSeoIntro,
  GlassPartitionCleaningSeoWhy,
  GlassPartitionCleaningSeoChecklist,
  GlassPartitionCleaningSeoBooking,
  GlassPartitionCleaningSeoInterlinking,
  GlassPartitionCleaningSeoNearMe,
  GlassPartitionCleaningSeoFaq,
  GlassPartitionCleaningSeoFinalCta,
} from "@/components/service-detail/glass-partition-cleaning-seo";
import { glassPartitionCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: glassPartitionCleaning.metaTitle,
  description: glassPartitionCleaning.metaDescription,
  keywords: [
    "glass partition cleaning Scotland",
    "internal glazing cleaning",
    "streak-free glass cleaning",
    "office glass partition cleaning",
    "pure water glass cleaning",
    "Reach and Wash system",
    "Rope Access glass cleaning",
    "mirror restoration",
    "commercial glass cleaning",
    "glass door cleaning",
    "glass partition cleaning near me",
    "Maundy Clean glass",
  ],
  openGraph: {
    title: glassPartitionCleaning.metaTitle,
    description: glassPartitionCleaning.metaDescription,
    type: "website",
    images: [{ url: glassPartitionCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${glassPartitionCleaning.slug}` },
};

export default function GlassPartitionCleaningPage() {
  const service = glassPartitionCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Glass Partition & Internal Glazing Cleaning Scotland) */}
        <GlassPartitionCleaningSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with TWO inline Links in para 2 to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <GlassPartitionCleaningSeoIntro />

        {/* 3. Existing overview - rich paragraphs about glass partition cleaning as a specialist discipline */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is the Expert in Scottish Internal Glazing (image + 4 trust pillars: Same Trusted Team, Pure Water Technology, Safety & Compliance, Safe for Your Environment) */}
        <GlassPartitionCleaningSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (streak-free squeegee, frames & fittings, glass doors, balustrades & mirrors, high-touch sanitisation, flexible scheduling) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Glass & Partition Maintenance Checklist (H2 + 3 H3 cards with images: Internal Partition & Glazing Care, Specialized High-Reach & External Systems, Often-Missed Technical Details) */}
        <GlassPartitionCleaningSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to glass survey, scheduling, service & QC, monthly review */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 steps: Site Assessment & Quote / Professional Matching / Enjoy a Pristine Workplace, link to /quote) */}
        <GlassPartitionCleaningSeoBooking />

        {/* 9. Existing benefits grid - benefit cards (streak-free finish, pure-water tech, frame detailing, door furniture sanitisation, flexible scheduling, PVG-checked) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - tiered options for routine maintenance, full atrium high-reach clean, external curtain-walling programme */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Need (H2 + 4 interlink cards to recurring-home-cleaning, move-in-out-cleaning, post-construction-cleaning, disinfection-services - all 4 with inline Links in ReactNode descriptions) */}
        <GlassPartitionCleaningSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Glass Partition Cleaning Near Me in Scotland) - 37 internal links */}
        <GlassPartitionCleaningSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Glass Quote Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <GlassPartitionCleaningSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for working at height, harmful chemicals on internal glass, windows of all shapes and sizes) */}
        <GlassPartitionCleaningSeoFaq />

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

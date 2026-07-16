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
  HousekeepingSeoHeroBanner,
  HousekeepingSeoIntro,
  HousekeepingSeoWhy,
  HousekeepingSeoSpecializedCare,
  HousekeepingSeoBooking,
  HousekeepingSeoInterlinking,
  HousekeepingSeoNearMe,
  HousekeepingSeoFaq,
  HousekeepingSeoFinalCta,
} from "@/components/service-detail/housekeeping-services-seo";
import { housekeepingServices } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: housekeepingServices.metaTitle,
  description: housekeepingServices.metaDescription,
  keywords: [
    "housekeeping services Scotland",
    "housekeeping near me",
    "recurring home cleaning Scotland",
    "housekeeper Edinburgh",
    "housekeeper Glasgow",
    "private housekeeper Scotland",
    "weekly housekeeping",
    "fortnightly housekeeping",
    "household management Scotland",
    "live-out housekeeper Scotland",
    "country estate housekeeping",
    "same housekeeper every visit",
    "PVG-checked housekeeper",
    "professional housekeeping service",
    "Maundy Clean housekeeping",
  ],
  openGraph: {
    title: housekeepingServices.metaTitle,
    description: housekeepingServices.metaDescription,
    type: "website",
    images: [{ url: housekeepingServices.heroImage }],
  },
  alternates: { canonical: `/services/${housekeepingServices.slug}` },
};

export default function HousekeepingServicesPage() {
  const service = housekeepingServices;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Housekeeping & Recurring Home Cleaning Scotland) */}
        <HousekeepingSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Trusted Housekeeping) */}
        <HousekeepingSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is Scotland's Choice for Trusted Housekeeping (image+copy split + 4 trust cards) */}
        <HousekeepingSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Specialized Care for Premium Surfaces (H2 + 2 H3 sub-sections: Expert Hardwood Floor Maintenance + Total Property Technical Checklist) */}
        <HousekeepingSeoSpecializedCare />

        {/* 7. Existing process — 4-step housekeeping onboarding flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3: The 3-Step "Hassle-Free" Process) */}
        <HousekeepingSeoBooking />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers (Part-Time £20/hr, Full-Time £20/hr, Live-In/Estate POA) */}
        <ServicePricing service={service} />

        {/* 12. A Solution for Every Stage (H2 + internal links to deep house, end of tenancy, spring, after builders) */}
        <HousekeepingSeoInterlinking />

        {/* 13. Existing service areas — Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Housekeeping Services Near Me in Scotland) — 36 internal links */}
        <HousekeepingSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Book Your Housekeeping Service?) — placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <HousekeepingSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) — 6 Q&As (3 from the user brief: area, equipment, contracts + 3 housekeeping-specific additions) */}
        <HousekeepingSeoFaq />

        {/* 18. Existing FAQ — 6 additional Q&As from service-detail-data (housekeeper-vs-cleaner, multi-staff, fine art, country estate, employed, NDA) */}
        <ServiceFaq service={service} />

        {/* 19. Related services — 6 internal links */}
        <ServiceRelated service={service} />

        {/* 20. Final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

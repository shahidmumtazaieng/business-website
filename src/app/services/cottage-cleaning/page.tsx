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
  CottageSeoHeroBanner,
  CottageSeoIntro,
  CottageSeoWhy,
  CottageSeoBooking,
  CottageSeoIncludedDetail,
  CottageSeoInterlinking,
  CottageSeoNearMe,
  CottageSeoFaq,
  CottageSeoFinalCta,
} from "@/components/service-detail/cottage-cleaning-seo";
import { cottageCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: cottageCleaning.metaTitle,
  description: cottageCleaning.metaDescription,
  keywords: [
    "cottage cleaning Scotland",
    "cottage cleaning near me",
    "recurring cottage cleaning",
    "Highland cottage cleaning",
    "coastal cottage cleaning",
    "rural cottage cleaning",
    "holiday cottage cleaning",
    "second home cleaning",
    "wood burner soot cleaning",
    "sea salt cottage cleaning",
    "septic tank safe cleaning",
    "private water supply cleaning",
    "traditional cottage cleaning",
    "stone cottage cleaning Scotland",
    "period cottage cleaning",
    "weekly cottage cleaning",
    "fortnightly cottage cleaning",
    "monthly cottage cleaning",
    "PVG-checked cottage cleaners",
    "same cleaner every visit cottage",
    "Maundy Clean cottages",
  ],
  openGraph: {
    title: cottageCleaning.metaTitle,
    description: cottageCleaning.metaDescription,
    type: "website",
    images: [{ url: cottageCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${cottageCleaning.slug}` },
};

export default function CottageCleaningPage() {
  const service = cottageCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Expert Recurring Cottage Cleaning Services in Scotland) */}
        <CottageSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Cottage Care) */}
        <CottageSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is Scotland's Authority in Cottage Maintenance (image+copy split + 4 trust cards) */}
        <CottageSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Detailed what's included (H2: Our Comprehensive Recurring Cleaning Checklist) — 4 image-topped cards */}
        <CottageSeoIncludedDetail />

        {/* 7. Existing process — 4-step cottage onboarding flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2: Our 3-Step "Hassle-Free" Booking Process) */}
        <CottageSeoBooking />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers (1-2 Bed £20/hr, 3-4 Bed £20/hr, Holiday Let POA) */}
        <ServicePricing service={service} />

        {/* 12. Specialized Solutions for Every Stage (H2 + internal links to deep, holiday-let, spring, carpet) */}
        <CottageSeoInterlinking />

        {/* 13. Existing service areas — Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Cottage Cleaning Near Me in Scotland) — 36 internal links */}
        <CottageSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Refresh Your Cottage?) — placed ABOVE all FAQ sections so the page does not end with two stacked CTAs; the existing ServiceFinalCta stays as the page closer */}
        <CottageSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) — 6 Q&As (3 from the user brief + 3 cottage-specific additions) */}
        <CottageSeoFaq />

        {/* 18. Existing FAQ — 6 additional Q&As from service-detail-data (rural access, septic, hard water, holiday let, soot, off-grid) */}
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

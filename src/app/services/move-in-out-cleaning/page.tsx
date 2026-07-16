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
import { ServiceTestimonials } from "@/components/service-detail/service-testimonials";
import { ServiceFaq } from "@/components/service-detail/service-faq";
import { ServiceRelated } from "@/components/service-detail/service-related";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import {
  MoveSeoHeroBanner,
  MoveSeoIntro,
  MoveSeoWhy,
  MoveSeoChecklist,
  MoveSeoHowItWorks,
  MoveSeoInterlinking,
  MoveSeoFaq,
  MoveSeoNearMe,
  MoveSeoFinalCta,
} from "@/components/service-detail/move-in-out-cleaning-seo";
import { moveInOutCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: moveInOutCleaning.metaTitle,
  description: moveInOutCleaning.metaDescription,
  keywords: [
    "move out cleaning",
    "move in cleaning",
    "end of tenancy cleaning Scotland",
    "deposit back guarantee",
    "letting agent cleaning",
    "bond back cleaning",
    "Maundy Clean move out",
    "move out cleaning Glasgow",
    "move out cleaning Edinburgh",
    "end of tenancy cleaning near me",
    "move in cleaning service Scotland",
    "checkout cleaning Scotland",
    "tenant cleaning service",
    "deposit back cleaning",
    "bond back guarantee Scotland",
    "letting agent checkout cleaning",
    "47 point checklist cleaning",
    "move out clean Scotland",
    "PVG-checked move out cleaners",
    "before and after cleaning report",
  ],
  openGraph: {
    title: moveInOutCleaning.metaTitle,
    description: moveInOutCleaning.metaDescription,
    type: "website",
    images: [{ url: moveInOutCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${moveInOutCleaning.slug}` },
};

export default function MoveInOutCleaningPage() {
  const service = moveInOutCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Move-In / Move-Out Cleaning Services in Glasgow & Edinburgh) */}
        <MoveSeoHeroBanner />

        {/* 2. Long-form semantic SEO intro (H2: The Maundy Clean Standard for Property Transitions) */}
        <MoveSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is the Authority in Move-In/Out Cleaning (H2) */}
        <MoveSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Detailed room-by-room checklist (H2: Our Comprehensive Move-In / Move-Out Cleaning Checklist) */}
        <MoveSeoChecklist />

        {/* 7. How it works (H3: The MaundyClean 3-Step "Hassle-Free" Process) */}
        <MoveSeoHowItWorks />

        {/* 8. Existing process — 4-step onboarding flow */}
        <ServiceProcess service={service} />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Semantic interlinking (H2: Semantic Interlinking: A Solution for Every Property Transition) */}
        <MoveSeoInterlinking />

        {/* 13. SEO FAQ (H2: Frequently Asked Questions About Move-In / Move-Out Cleaning) */}
        <MoveSeoFaq />

        {/* 14. Existing testimonials */}
        <ServiceTestimonials service={service} />

        {/* 15. Final SEO CTA (H3: Ready to Move With Confidence?) — placed above the existing ServiceFaq to avoid stacking two CTAs at the end; the existing ServiceFinalCta stays as the page closer */}
        <MoveSeoFinalCta />

        {/* 16. Existing FAQ — 6 long-form Q&As */}
        <ServiceFaq service={service} />

        {/* 17. Near-me keyword section (H2: Move-In / Move-Out Cleaning Near Me in Scotland) — 36 internal links */}
        <MoveSeoNearMe />

        {/* 18. Existing related services — 6 internal links */}
        <ServiceRelated service={service} />

        {/* 19. Existing final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

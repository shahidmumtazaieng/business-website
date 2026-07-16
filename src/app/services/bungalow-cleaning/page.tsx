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
  BungalowSeoHeroBanner,
  BungalowSeoIntro,
  BungalowSeoWhy,
  BungalowSeoBooking,
  BungalowSeoIncludedDetail,
  BungalowSeoInterlinking,
  BungalowSeoNearMe,
  BungalowSeoFaq,
  BungalowSeoFinalCta,
} from "@/components/service-detail/bungalow-cleaning-seo";
import { bungalowCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: bungalowCleaning.metaTitle,
  description: bungalowCleaning.metaDescription,
  keywords: [
    "bungalow cleaning Scotland",
    "bungalow cleaning near me",
    "recurring bungalow cleaning",
    "single-story home cleaning",
    "weekly bungalow cleaning",
    "fortnightly bungalow cleaning",
    "monthly bungalow cleaning",
    "stone bungalow cleaning",
    "dormer bungalow cleaning",
    "park home cleaning Scotland",
    "coastal bungalow cleaning",
    "bungalow housekeeping",
    "regular bungalow cleaning Glasgow",
    "regular bungalow cleaning Edinburgh",
    "PVG-checked bungalow cleaners",
    "same cleaner every visit bungalow",
    "bungalow window cleaning",
    "high ceiling dusting bungalow",
    "eco-friendly bungalow cleaning",
    "Maundy Clean bungalows",
  ],
  openGraph: {
    title: bungalowCleaning.metaTitle,
    description: bungalowCleaning.metaDescription,
    type: "website",
    images: [{ url: bungalowCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${bungalowCleaning.slug}` },
};

export default function BungalowCleaningPage() {
  const service = bungalowCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Recurring Bungalow Cleaning Services in Scotland) */}
        <BungalowSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Single-Story Living) */}
        <BungalowSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is the Authority in Regular Bungalow Maintenance (image+copy split + 4 trust cards) */}
        <BungalowSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Detailed what's included (H2: Our Comprehensive Bungalow Cleaning Checklist) — 4 image-topped cards */}
        <BungalowSeoIncludedDetail />

        {/* 7. Existing process — 4-step bungalow onboarding flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2: Our 3-Step "Hassle-Free" Process) */}
        <BungalowSeoBooking />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers (Weekly £62, Fortnightly £76, Monthly £97) */}
        <ServicePricing service={service} />

        {/* 12. Specialist Solutions for Every Stage (H2 + internal links to deep, end-of-tenancy, after-builders, spring) */}
        <BungalowSeoInterlinking />

        {/* 13. Existing service areas — Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Bungalow Cleaning Near Me in Scotland) — 36 internal links */}
        <BungalowSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Refresh Your Bungalow?) — placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <BungalowSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) — 6 Q&As (3 from the user brief + 3 bungalow-specific additions) */}
        <BungalowSeoFaq />

        {/* 18. Existing FAQ — 6 additional Q&As from service-detail-data (equipment, contracts, deep-clean diff, stone-built, park homes, satisfaction) */}
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

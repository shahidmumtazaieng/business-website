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
  DeepSeoHeroBanner,
  DeepSeoIntro,
  DeepSeoWhy,
  DeepSeoChecklist,
  DeepSeoHowItWorks,
  DeepSeoInterlinking,
  DeepSeoFaq,
  DeepSeoNearMe,
  DeepSeoFinalCta,
} from "@/components/service-detail/deep-cleaning-seo";
import { deepHouseCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: deepHouseCleaning.metaTitle,
  description: deepHouseCleaning.metaDescription,
  keywords: [
    "deep house cleaning",
    "deep clean service Scotland",
    "one-off deep clean",
    "quarterly deep clean",
    "oven deep clean",
    "grout cleaning",
    "Maundy Clean deep clean",
    "deep cleaning Glasgow",
    "deep cleaning Edinburgh",
    "deep house cleaning near me",
    "top to bottom clean",
    "spring clean service",
    "intensive house cleaning",
    "move out deep clean",
    "post renovation clean",
    "specialist deep clean Scotland",
    "PVG-checked deep cleaners",
    "non-caustic deep cleaning",
    "steam clean grout",
    "before and after cleaning",
  ],
  openGraph: {
    title: deepHouseCleaning.metaTitle,
    description: deepHouseCleaning.metaDescription,
    type: "website",
    images: [{ url: deepHouseCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${deepHouseCleaning.slug}` },
};

export default function DeepHouseCleaningPage() {
  const service = deepHouseCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Deep House Cleaning Services in Glasgow & Edinburgh) */}
        <DeepSeoHeroBanner />

        {/* 2. Long-form semantic SEO intro (H2: The Maundy Clean Standard for Deep House Cleaning) */}
        <DeepSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why our deep housekeeping outperforms the rest (H2: Why Our Deep Housekeeping Outperforms the Rest) */}
        <DeepSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Detailed room-by-room checklist (H2: The Deep Cleaning Checklist: Standard Excellence in Every Room) */}
        <DeepSeoChecklist />

        {/* 7. How it works (H3: How It Works: 3 Simple Steps to a Dazzling Home) */}
        <DeepSeoHowItWorks />

        {/* 8. Existing process — 4-step onboarding flow */}
        <ServiceProcess service={service} />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Semantic interlinking (H2: Semantic Interlinking: Specialized Solutions for Every Need) */}
        <DeepSeoInterlinking />

        {/* 13. SEO FAQ (H2: Frequently Asked Questions About Deep Cleaning) */}
        <DeepSeoFaq />

        {/* 14. Existing testimonials */}
        <ServiceTestimonials service={service} />

        {/* 15. Final SEO CTA (H3: Ready to Reset Your Home?) — placed above the existing ServiceFaq to avoid stacking two CTAs at the end; the existing ServiceFinalCta stays as the page closer */}
        <DeepSeoFinalCta />

        {/* 16. Existing FAQ — 6 long-form Q&As */}
        <ServiceFaq service={service} />

        {/* 17. Near-me keyword section (H2: Deep House Cleaning Near Me in Scotland) — 36 internal links */}
        <DeepSeoNearMe />

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

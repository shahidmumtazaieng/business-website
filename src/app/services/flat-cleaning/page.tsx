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
  FlatSeoHeroBanner,
  FlatSeoIntro,
  FlatSeoWhy,
  FlatSeoBooking,
  FlatSeoIncludedDetail,
  FlatSeoLeaseStages,
  FlatSeoFaq,
  FlatSeoNearMe,
  FlatSeoFinalCta,
} from "@/components/service-detail/flat-cleaning-seo";
import { flatCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: flatCleaning.metaTitle,
  description: flatCleaning.metaDescription,
  keywords: [
    "flat cleaning Scotland",
    "flat cleaning near me",
    "tenement flat cleaning",
    "apartment cleaning Glasgow",
    "apartment cleaning Edinburgh",
    "flat cleaners Scotland",
    "recurring flat cleaning",
    "weekly flat cleaning",
    "fortnightly flat cleaning",
    "modern flat cleaning",
    "city centre flat cleaning",
    "Scottish flat cleaning service",
    "PVG-checked flat cleaners",
    "same cleaner every visit",
    "HEPA vacuum flat cleaning",
    "Maundy Clean flats",
    "flat cleaning Central Belt",
    "tenement close cleaning",
    "studio flat cleaning",
    "family flat cleaning",
  ],
  openGraph: {
    title: flatCleaning.metaTitle,
    description: flatCleaning.metaDescription,
    type: "website",
    images: [{ url: flatCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${flatCleaning.slug}` },
};

export default function FlatCleaningPage() {
  const service = flatCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Expert Recurring Flat Cleaning Scotland) */}
        <FlatSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Flat Cleaning) */}
        <FlatSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is Scotland's Trusted Choice for Flat Cleaning (image+copy split) */}
        <FlatSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Detailed what's included (H2: Our Comprehensive Flat Maintenance Checklist) — 4 image-topped cards */}
        <FlatSeoIncludedDetail />

        {/* 7. Existing process — 4-step onboarding flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2: The Maundy Clean 3-Step "Hassle-Free" Process) */}
        <FlatSeoBooking />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers (Studio/1-bed, 2-3 bed, 4+ bed) */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Transition (H2 + internal links to move-in/out, post-construction, carpet) */}
        <FlatSeoLeaseStages />

        {/* 13. Existing service areas — Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Flat Cleaning Near Me in Scotland) — 36 internal links */}
        <FlatSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. SEO FAQ (H2: Frequently Asked Questions) — 6 Q&As from the user brief */}
        <FlatSeoFaq />

        {/* 17. Final SEO CTA (H3: Ready to Refresh Your Flat?) — placed between the two FAQ blocks to break them up with a conversion point; the existing ServiceFinalCta stays as the page closer */}
        <FlatSeoFinalCta />

        {/* 18. Existing FAQ — 6 additional Q&As from service-detail-data */}
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

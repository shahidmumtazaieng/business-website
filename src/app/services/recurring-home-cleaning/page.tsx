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
  RecurringSeoHeroBanner,
  RecurringSeoIntro,
  RecurringSeoWhy,
  RecurringSeoBooking,
  RecurringSeoIncludedDetail,
  RecurringSeoLeaseStages,
  RecurringSeoNearMe,
  RecurringSeoFinalCta,
} from "@/components/service-detail/recurring-cleaning-seo";
import { recurringHomeCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: recurringHomeCleaning.metaTitle,
  description: recurringHomeCleaning.metaDescription,
  keywords: [
    "recurring home cleaning",
    "weekly cleaning service",
    "fortnightly cleaning",
    "monthly cleaning",
    "regular house cleaning",
    "maid service Scotland",
    "house cleaning Glasgow",
    "house cleaning Edinburgh",
    "recurring cleaning plan",
    "recurring cleaning near me",
    "weekly cleaner near me",
    "regular cleaning services Scotland",
    "PVG-checked cleaners",
    "same cleaner every visit",
    "home cleaning Central Belt",
    "Maundy Clean",
  ],
  openGraph: {
    title: recurringHomeCleaning.metaTitle,
    description: recurringHomeCleaning.metaDescription,
    type: "website",
    images: [{ url: recurringHomeCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${recurringHomeCleaning.slug}` },
};

export default function RecurringHomeCleaningPage() {
  const service = recurringHomeCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Recurring Home Cleaning Services in Glasgow & Edinburgh) */}
        <RecurringSeoHeroBanner />

        {/* 2. Long-form semantic SEO intro (H2: The Maundy Clean Standard for Recurring Housekeeping) */}
        <RecurringSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why choose Maundy Clean (H2: Why Maundy Clean is Scotland's Trusted Choice for Regular Cleaning) */}
        <RecurringSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Detailed what's included (H2: What is Included in Your Recurring Clean?) */}
        <RecurringSeoIncludedDetail />

        {/* 7. Existing process — 4-step onboarding flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2: Our 3-Step "Hassle-Free" Booking Process) */}
        <RecurringSeoBooking />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers (Weekly, Fortnightly, Monthly) */}
        <ServicePricing service={service} />

        {/* 12. Targeted solutions for every stage of your lease (H2 + internal links) */}
        <RecurringSeoLeaseStages />

        {/* 13. Existing service areas — 30 Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Recurring Home Cleaning Near Me in Scotland) — 36 internal links */}
        <RecurringSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. SEO FAQ — 8 FAQs including the regular-vs-deep-clean question (kept inline above) */}
        {/*     NOTE: this page does not have a separate SEO-only FAQ block; the page's FAQ is the ServiceFaq below. */}

        {/* 17. Final SEO CTA (H3: Ready to Refresh Your Home?) — placed before the FAQ + Related + FinalCta so the page does not end with two stacked CTAs */}
        <RecurringSeoFinalCta />

        {/* 18. FAQ — 8 FAQs including the new regular-vs-deep-clean question */}
        <ServiceFaq service={service} />

        {/* 19. Related services — 6 internal links (now pointing to real routes) */}
        <ServiceRelated service={service} />

        {/* 20. Final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

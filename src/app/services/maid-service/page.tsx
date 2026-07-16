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
  MaidSeoHeroBanner,
  MaidSeoIntro,
  MaidSeoWhy,
  MaidSeoBooking,
  MaidSeoIncludedDetail,
  MaidSeoInterlinking,
  MaidSeoNearMe,
  MaidSeoFaq,
  MaidSeoFinalCta,
} from "@/components/service-detail/maid-service-seo";
import { maidService } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: maidService.metaTitle,
  description: maidService.metaDescription,
  keywords: [
    "maid service Scotland",
    "maid service near me",
    "maid service Edinburgh",
    "maid service Glasgow",
    "maid service Aberdeen",
    "maid service Dundee",
    "weekly maid service",
    "fortnightly maid service",
    "private maid service Scotland",
    "live-out maid Scotland",
    "domestic maid service",
    "recurring maid cleaning",
    "same maid every visit",
    "PVG-checked maid service",
    "house maid service Scotland",
    "professional maid service",
    "Maundy Clean maid service",
  ],
  openGraph: {
    title: maidService.metaTitle,
    description: maidService.metaDescription,
    type: "website",
    images: [{ url: maidService.heroImage }],
  },
  alternates: { canonical: `/services/${maidService.slug}` },
};

export default function MaidServicePage() {
  const service = maidService;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Maid Service Scotland) */}
        <MaidSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Trusted Home Care) */}
        <MaidSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is Scotland's Most Trusted Maid Service (image+copy split + 4 trust cards) */}
        <MaidSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Detailed what's included (H2: Your Recurring Home Cleaning Checklist) — 4 image-topped cards */}
        <MaidSeoIncludedDetail />

        {/* 7. Existing process — 4-step maid onboarding flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3: The 3-Step "Hassle-Free" Booking Process) */}
        <MaidSeoBooking />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers (Half-Day £18/hr, Full-Day £18/hr, Full-Time POA) */}
        <ServicePricing service={service} />

        {/* 12. Beyond Maintenance: Solutions for Every Property Milestone (H3 + internal links to spring, end-of-tenancy, after-builders, office) */}
        <MaidSeoInterlinking />

        {/* 13. Existing service areas — Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Maid Service Near Me in Scotland) — 36 internal links */}
        <MaidSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Book Your Maid Service?) — placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <MaidSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) — 6 Q&As (3 from the user brief + 3 maid-specific additions) */}
        <MaidSeoFaq />

        {/* 18. Existing FAQ — 6 additional Q&As from service-detail-data (maid-vs-cleaning, laundry, relief, employed, household tasks, confidentiality) */}
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

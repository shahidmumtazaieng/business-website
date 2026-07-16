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
  HolidayLetSeoHeroBanner,
  HolidayLetSeoIntro,
  HolidayLetSeoWhy,
  HolidayLetSeoBooking,
  HolidayLetSeoIncludedDetail,
  HolidayLetSeoInterlinking,
  HolidayLetSeoNearMe,
  HolidayLetSeoFaq,
  HolidayLetSeoFinalCta,
} from "@/components/service-detail/holiday-let-turnover-seo";
import { holidayLetTurnover } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: holidayLetTurnover.metaTitle,
  description: holidayLetTurnover.metaDescription,
  keywords: [
    "holiday let cleaning Scotland",
    "holiday let cleaning near me",
    "Airbnb cleaning Scotland",
    "Booking.com turnover cleaning",
    "short-term let cleaning",
    "cottage turnover service",
    "guest-ready cleaning",
    "holiday let changeover service",
    "Airbnb turnover cleaning Glasgow",
    "Airbnb turnover cleaning Edinburgh",
    "short-term let housekeeping Scotland",
    "holiday let linen service",
    "PVG-checked holiday let cleaners",
    "same crew every turnover",
    "holiday let restocking service",
    "90-minute response holiday let",
    "eco-friendly holiday let cleaning",
    "Maundy Clean holiday let",
  ],
  openGraph: {
    title: holidayLetTurnover.metaTitle,
    description: holidayLetTurnover.metaDescription,
    type: "website",
    images: [{ url: holidayLetTurnover.heroImage }],
  },
  alternates: { canonical: `/services/${holidayLetTurnover.slug}` },
};

export default function HolidayLetTurnoverPage() {
  const service = holidayLetTurnover;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Holiday Let Turnover Services in Scotland) */}
        <HolidayLetSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Short-Term Let Care) */}
        <HolidayLetSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean for Scottish Short-Term Let Management (image+copy split + 4 trust cards) */}
        <HolidayLetSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Detailed what's included (H2: Our Comprehensive Holiday Let Turnover Checklist) — 4 image-topped cards */}
        <HolidayLetSeoIncludedDetail />

        {/* 7. Existing process — 4-step holiday let onboarding flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3: The 3-Step "Hassle-Free" Process) */}
        <HolidayLetSeoBooking />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers (Studio £65, 2-3 Bed £95, 4+ Bed £145) */}
        <ServicePricing service={service} />

        {/* 12. Specialized Solutions for Property Owners (H2 + internal links to deep, end-of-tenancy, after-builders, carpet) */}
        <HolidayLetSeoInterlinking />

        {/* 13. Existing service areas — Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Holiday Let Cleaning Near Me in Scotland) — 36 internal links */}
        <HolidayLetSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Refresh Your Holiday Let?) — placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <HolidayLetSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) — 6 Q&As (3 from the user brief + 3 holiday-let-specific additions) */}
        <HolidayLetSeoFaq />

        {/* 18. Existing FAQ — 6 additional Q&As from service-detail-data (last-minute bookings, late guests, linens, key handovers, 90-min response, restocking) */}
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

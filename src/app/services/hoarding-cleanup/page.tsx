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
  HoardingCleanupSeoHeroBanner,
  HoardingCleanupSeoIntro,
  HoardingCleanupSeoWhy,
  HoardingCleanupSeoChecklist,
  HoardingCleanupSeoBooking,
  HoardingCleanupSeoInterlinking,
  HoardingCleanupSeoNearMe,
  HoardingCleanupSeoFinalCta,
  HoardingCleanupSeoFaq,
} from "@/components/service-detail/hoarding-cleanup-seo";
import { hoardingCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: hoardingCleanup.metaTitle,
  description: hoardingCleanup.metaDescription,
  keywords: [
    "hoarding cleanup Scotland",
    "hoarding disorder cleanup",
    "compulsive hoarding cleaning",
    "compassionate cleaning service",
    "hoarder house clearance",
    "social work cleaning",
    "safeguarding cleaning",
    "mental health cleaning",
    "deceased estate clearance Scotland",
    "technical property reset",
    "PVG-checked hoarding cleanup",
    "hoarding cleanup near me",
    "Maundy Clean hoarding",
  ],
  openGraph: {
    title: hoardingCleanup.metaTitle,
    description: hoardingCleanup.metaDescription,
    type: "website",
    images: [{ url: hoardingCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${hoardingCleanup.slug}` },
};

export default function HoardingCleanupPage() {
  const service = hoardingCleanup;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Hoarding Cleanup & Technical Property Resets Scotland) */}
        <HoardingCleanupSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + intro paragraphs with inline Links to Recurring Home Cleaning + End of Tenancy Cleaning) */}
        <HoardingCleanupSeoIntro />

        {/* 3. Existing overview - rich paragraphs about hoarding disorder, compassionate approach, safety, partnership */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Sensitive Property Restoration (image + 4 trust pillars) */}
        <HoardingCleanupSeoWhy />

        {/* 5. Existing what's included - 6 high-level items (assessment, safety, sorting, deep clean, pest control, PVG-checked) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our 3-Stage Hoarding Restoration Checklist (H2 + 3 grouped H3 cards: organization / deep clean / often-missed) */}
        <HoardingCleanupSeoChecklist />

        {/* 7. Existing process - 4-step referral/safety/clearance/handover flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 steps: Site Survey & Compassionate Quote / Professional Matching / Enjoy a Pristine Home) */}
        <HoardingCleanupSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (compassionate, PVG-checked, safety-first, sustainable, odour removal, partnership) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Semantic Interlinking: Maintaining the Sanctuary Long-Term (H2 + 4 interlink cards with inline Links to recurring-home, move-in-out, post-construction, disinfection) */}
        <HoardingCleanupSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Hoarding Cleanup & Technical Property Resets Near Me, Across Scotland) - 36 internal links */}
        <HoardingCleanupSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Sensitive Site Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <HoardingCleanupSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for extreme hoarding, deceased estates, cities served) */}
        <HoardingCleanupSeoFaq />

        {/* 18. Existing FAQ - additional Q&As from service-detail-data */}
        <ServiceFaq service={service} />

        {/* 19. Related services - 6 internal links */}
        <ServiceRelated service={service} />

        {/* 20. Final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

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
  WindowSeoHeroBanner,
  WindowSeoIntro,
  WindowSeoWhy,
  WindowSeoChecklist,
  WindowSeoBooking,
  WindowSeoInterlinking,
  WindowSeoNearMe,
  WindowSeoFaq,
  WindowSeoFinalCta,
} from "@/components/service-detail/window-cleaning-seo";
import { windowCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: windowCleaning.metaTitle,
  description: windowCleaning.metaDescription,
  keywords: [
    "window cleaning Scotland",
    "window cleaning Glasgow",
    "window cleaning Edinburgh",
    "pure water window cleaning",
    "reach and wash system",
    "sash window cleaning",
    "tenement window cleaning",
    "streak-free windows",
    "deionised water cleaning",
    "commercial window cleaning",
    "window cleaning near me",
    "window cleaners near me Scotland",
    "Maundy Clean windows",
  ],
  openGraph: {
    title: windowCleaning.metaTitle,
    description: windowCleaning.metaDescription,
    type: "website",
    images: [{ url: windowCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${windowCleaning.slug}` },
};

export default function WindowCleaningPage() {
  const service = windowCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Window Cleaning Services in Glasgow & Edinburgh) */}
        <WindowSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Glass Care) + stats band */}
        <WindowSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about pure-water, sash windows, Scottish weather */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is the Authority in Scottish Window Maintenance (image + 4 trust pillars) */}
        <WindowSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Comprehensive Cleaning for Homes & Businesses (H2 + 4 H3 cards with images, links to gutter-cleaning) */}
        <WindowSeoChecklist />

        {/* 7. Existing process - 4-step quote/schedule/arrive/sign-off flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 H3 steps, link to /quote) */}
        <WindowSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (PVG-checked, chemical-free, streak-free, same tech, listed-bldg, SMS) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (One-Off £45, 4-Weekly £22, Commercial POA) */}
        <ServicePricing service={service} />

        {/* 12. A Solution for Every Property Stage (H2 + 4 interlink cards to recurring, move-in/out, deep, after-builders) */}
        <WindowSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Window Cleaning Near Me in Scotland) - 36 internal links */}
        <WindowSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Ready to Book Your Window Cleaning?) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <WindowSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 6 Q&As (3 from the user brief: frequency, frames/sills, rain + 3 additions: pure water, tenement, listed) */}
        <WindowSeoFaq />

        {/* 18. Existing FAQ - 6 additional Q&As from service-detail-data */}
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

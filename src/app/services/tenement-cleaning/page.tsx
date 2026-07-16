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
  TenementSeoHeroBanner,
  TenementSeoIntro,
  TenementSeoWhy,
  TenementSeoBooking,
  TenementSeoIncludedDetail,
  TenementSeoLeaseStages,
  TenementSeoFaq,
  TenementSeoNearMe,
  TenementSeoFinalCta,
} from "@/components/service-detail/tenement-cleaning-seo";
import { tenementCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: tenementCleaning.metaTitle,
  description: tenementCleaning.metaDescription,
  keywords: [
    "tenement cleaning Scotland",
    "tenement cleaning near me",
    "tenement cleaning Glasgow",
    "tenement cleaning Edinburgh",
    "tenement cleaning Paisley",
    "close cleaning Glasgow",
    "stair cleaning Scotland",
    "communal close cleaning",
    "tenement flat cleaning",
    "period property cleaning Scotland",
    "cornicing clean",
    "sash window track clean",
    "encaustic tile restoration",
    "pitch-pine floor care",
    "cast-iron fireplace clean",
    "recurring tenement cleaning",
    "tenement cleaners Central Belt",
    "property factor cleaning Glasgow",
    "resident association cleaning",
    "Maundy Clean tenements",
  ],
  openGraph: {
    title: tenementCleaning.metaTitle,
    description: tenementCleaning.metaDescription,
    type: "website",
    images: [{ url: tenementCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${tenementCleaning.slug}` },
};

export default function TenementCleaningPage() {
  const service = tenementCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Tenement Cleaning Glasgow & Paisley) */}
        <TenementSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Tenement Care) */}
        <TenementSeoIntro />

        {/* 3. Existing overview — 3 rich paragraphs about the service */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is Scotland's Trusted Choice for Tenement Cleaning (image+copy split) */}
        <TenementSeoWhy />

        {/* 5. Existing what's included — 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Detailed what's included (H2: Our Total Tenement Maintenance Checklist) — 4 image-topped cards */}
        <TenementSeoIncludedDetail />

        {/* 7. Existing process — 4-step specialist clean flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2: The Maundy Clean 3-Step "Hassle-Free" Process) */}
        <TenementSeoBooking />

        {/* 9. Existing benefits grid — 6 benefit cards */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery — 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing — 3 tiers (1-Bed £145, 2-Bed £245, 3-Bed POA) */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Transition (H2 + internal links to move-in/out, post-construction, spring) */}
        <TenementSeoLeaseStages />

        {/* 13. Existing service areas — Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Tenement Cleaning Near Me in Scotland) — 36 internal links */}
        <TenementSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Refresh Your Tenement?) — placed ABOVE all FAQ sections so the page does not end with two stacked CTAs; the existing ServiceFinalCta stays as the page closer */}
        <TenementSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) — 6 Q&As from the user brief + period-property additions */}
        <TenementSeoFaq />

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

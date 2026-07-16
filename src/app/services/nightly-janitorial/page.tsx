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
  NightlyJanitorialSeoHeroBanner,
  NightlyJanitorialSeoIntro,
  NightlyJanitorialSeoWhy,
  NightlyJanitorialSeoChecklist,
  NightlyJanitorialSeoBooking,
  NightlyJanitorialSeoInterlinking,
  NightlyJanitorialSeoNearMe,
  NightlyJanitorialSeoFaq,
  NightlyJanitorialSeoFinalCta,
} from "@/components/service-detail/nightly-janitorial-seo";
import { nightlyJanitorial } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: nightlyJanitorial.metaTitle,
  description: nightlyJanitorial.metaDescription,
  keywords: [
    "nightly janitorial Scotland",
    "after hours office cleaning",
    "night cleaning Scotland",
    "out of hours cleaning",
    "office janitorial service",
    "night shift cleaning",
    "school evening cleaning",
    "facility janitorial Scotland",
    "Maundy Clean nightly",
  ],
  openGraph: {
    title: nightlyJanitorial.metaTitle,
    description: nightlyJanitorial.metaDescription,
    type: "website",
    images: [{ url: nightlyJanitorial.heroImage }],
  },
  alternates: { canonical: `/services/${nightlyJanitorial.slug}` },
};

export default function NightlyJanitorialPage() {
  const service = nightlyJanitorial;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Nightly Janitorial Services Scotland | Commercial Workspace Hygiene) */}
        <NightlyJanitorialSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with ONE inline Link to /services/recurring-home-cleaning) */}
        <NightlyJanitorialSeoIntro />

        {/* 3. Existing overview - rich paragraphs about nightly janitorial as the after-hours backbone of commercial cleaning */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Choice for Reliable Janitorial Support (image + 4 trust pillars: The Same Trusted Team Every Night, Total Regulatory Compliance, Flexibility Around Your Schedule, Eco-Friendly & Safe) */}
        <NightlyJanitorialSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (office desks/bins/floors, toilets, kitchen/kitchenette, meeting rooms/reception, issue flagging & security check) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Comprehensive Nightly Janitorial & Office Hygiene Checklist (H2 + 3 H3 cards with images: General Workspace & Station Care, Communal Areas & High-Traffic Hygiene, Facilities & Kitchenette Sanitation) */}
        <NightlyJanitorialSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to after-hours operations & fresh-start by 8 AM */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 steps: Site Survey & Bespoke Plan / Professional Matching / Enjoy a Pristine Office, link to /quote) */}
        <NightlyJanitorialSeoBooking />

        {/* 9. Existing benefits grid - benefit cards (PVG-checked night crews, fresh-start every morning by 8 AM, signed nightly logs, child-safe chemistry, multi-site one-invoice convenience) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - tiered retainer options for single-site nightly janitorial through multi-site corporate estate */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Milestone (H2 + 4 interlink cards to recurring-home-cleaning, move-in-out-cleaning, post-construction-cleaning, disinfection-services - all 4 with inline Links in ReactNode descriptions) */}
        <NightlyJanitorialSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Nightly Janitorial Services Near Me in Scotland) - 37 internal links */}
        <NightlyJanitorialSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Janitorial Quote) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <NightlyJanitorialSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured, provide own supplies, work through the night) */}
        <NightlyJanitorialSeoFaq />

        {/* 18. Existing FAQ - additional Q&As from service-detail-data */}
        <ServiceFaq service={service} />

        {/* 19. Related services - internal links */}
        <ServiceRelated service={service} />

        {/* 20. Final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

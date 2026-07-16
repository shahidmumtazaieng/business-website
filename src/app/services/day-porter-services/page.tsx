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
  DayPorterSeoHeroBanner,
  DayPorterSeoIntro,
  DayPorterSeoWhy,
  DayPorterSeoChecklist,
  DayPorterSeoBooking,
  DayPorterSeoInterlinking,
  DayPorterSeoNearMe,
  DayPorterSeoFaq,
  DayPorterSeoFinalCta,
} from "@/components/service-detail/day-porter-services-seo";
import { dayPorterServices } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: dayPorterServices.metaTitle,
  description: dayPorterServices.metaDescription,
  keywords: [
    "day porter Scotland",
    "day porter service",
    "on-site attendant cleaning",
    "office porter Glasgow",
    "washroom attendant Edinburgh",
    "meeting room reset service",
    "facilities day porter",
    "corporate day porter",
    "Maundy Clean day porter",
  ],
  openGraph: {
    title: dayPorterServices.metaTitle,
    description: dayPorterServices.metaDescription,
    type: "website",
    images: [{ url: dayPorterServices.heroImage }],
  },
  alternates: { canonical: `/services/${dayPorterServices.slug}` },
};

export default function DayPorterServicesPage() {
  const service = dayPorterServices;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Day Porter Services Scotland | Continuous Workspace Hygiene) */}
        <DayPorterSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with TWO inline Links to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <DayPorterSeoIntro />

        {/* 3. Existing overview - rich paragraphs about day porter services as a continuous daytime maintenance function */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is the Authority in Scottish Day Porter Services (image + 4 trust pillars: Vetted & Uniformed Professionals, Total Regulatory Compliance, The Same Trusted Staff Every Day, Eco-Friendly & Safe) */}
        <DayPorterSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (washroom refresh, spill response, meeting room reset, consumables restock) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Daytime Maintenance & Hygiene Checklist (H2 + 3 H3 cards with images: Public Areas & First Impressions, Washroom & Breakout Management, Operational Support & Rapid Response) */}
        <DayPorterSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to daytime operations & continuous presence */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Survey & Strategy / Professional Matching / Enjoy a Pristine Workplace, link to /quote) */}
        <DayPorterSeoBooking />

        {/* 9. Existing benefits grid - benefit cards (PVG-checked porters, continuous daytime presence, signed daily logs, child-safe chemistry, multi-site one-invoice convenience) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - tiered retainer options for single-site day porter through multi-site corporate estate */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Lifecycle (H2 + 4 interlink cards to recurring-home-cleaning, move-in-out-cleaning, post-construction-cleaning, disinfection-services - all 4 with inline Links in ReactNode descriptions) */}
        <DayPorterSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Day Porter Services Near Me in Scotland) - 37 internal links */}
        <DayPorterSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Site Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <DayPorterSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured, provide own equipment, multiple sites one invoice) */}
        <DayPorterSeoFaq />

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

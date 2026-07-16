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
  EscalatorLiftCleaningSeoHeroBanner,
  EscalatorLiftCleaningSeoIntro,
  EscalatorLiftCleaningSeoWhy,
  EscalatorLiftCleaningSeoChecklist,
  EscalatorLiftCleaningSeoBooking,
  EscalatorLiftCleaningSeoInterlinking,
  EscalatorLiftCleaningSeoNearMe,
  EscalatorLiftCleaningSeoFaq,
  EscalatorLiftCleaningSeoFinalCta,
} from "@/components/service-detail/escalator-lift-cleaning-seo";
import { escalatorLiftCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: escalatorLiftCleaning.metaTitle,
  description: escalatorLiftCleaning.metaDescription,
  keywords: [
    "escalator cleaning Scotland",
    "lift cleaning services",
    "escalator step tread deep clean",
    "handrail virucidal sanitisation",
    "Rosemor Rotomatic escalator cleaner",
    "lift car interior polish",
    "LOLER compliant cleaning",
    "SafeContractor approved",
    "EN 14476 handrail sanitiser",
    "HEPA mechanism vacuum",
    "HTM 01-05 hospital escalator cleaning",
    "escalator cleaning near me",
    "Maundy Clean escalator",
  ],
  openGraph: {
    title: escalatorLiftCleaning.metaTitle,
    description: escalatorLiftCleaning.metaDescription,
    type: "website",
    images: [{ url: escalatorLiftCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${escalatorLiftCleaning.slug}` },
};

export default function EscalatorLiftCleaningPage() {
  const service = escalatorLiftCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Escalator & Lift Cleaning Services Scotland) */}
        <EscalatorLiftCleaningSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with TWO inline Links in para 2 to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <EscalatorLiftCleaningSeoIntro />

        {/* 3. Existing overview - rich paragraphs about escalator & lift cleaning as a specialist discipline */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Escalator & Lift Hygiene (image + 4 trust pillars: Industry-Leading Technical Equipment, Total Regulatory Compliance & RAMS, Same Trusted Team, Eco-Friendly & Safe) */}
        <EscalatorLiftCleaningSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (step-tread deep clean, comb plate & skirt guard, handrail sanitisation, glass panel polish, lift car interior polish, mechanism zone HEPA vacuum) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Escalator & Lift Maintenance Checklist (H2 + 3 H3 cards with images: Escalator & Walkway Deep Cleaning [3 items], Lift & Elevator Sanitation [3 items], Often-Missed Technical Details [2 items, second item has inline Link to /services/marble-polishing]) */}
        <EscalatorLiftCleaningSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to escalator survey, mobilisation, scheduled clean, quarterly inspection */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 steps: Site Survey & Risk Assessment / Bespoke Scheduling / Enjoy Pristine Equipment, link to /quote) */}
        <EscalatorLiftCleaningSeoBooking />

        {/* 9. Existing benefits grid - benefit cards (step-tread deep clean, handrail EN 14476 sanitisation, glass panel polish, mechanism HEPA vacuum, LOLER support, HTM 01-05 chemistry) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - tiered options for single escalator/lift, high-traffic bank, multi-site estate */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Milestone (H2 + 4 interlink cards to move-in-out-cleaning, post-construction-cleaning, marble-polishing, disinfection-services - all 4 with inline Links in ReactNode descriptions) */}
        <EscalatorLiftCleaningSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Escalator & Lift Cleaning Near Me in Scotland) - 37 internal links */}
        <EscalatorLiftCleaningSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Free Site Assessment Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <EscalatorLiftCleaningSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (SafeContractor approved, provide own equipment, work out-of-hours) */}
        <EscalatorLiftCleaningSeoFaq />

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

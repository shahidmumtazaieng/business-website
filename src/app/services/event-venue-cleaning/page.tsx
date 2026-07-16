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
  EventVenueSeoHeroBanner,
  EventVenueSeoIntro,
  EventVenueSeoWhy,
  EventVenueSeoChecklist,
  EventVenueSeoBooking,
  EventVenueSeoInterlinking,
  EventVenueSeoNearMe,
  EventVenueSeoFaq,
  EventVenueSeoFinalCta,
} from "@/components/service-detail/event-venue-cleaning-seo";
import { eventVenueCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: eventVenueCleaning.metaTitle,
  description: eventVenueCleaning.metaDescription,
  keywords: [
    "event venue cleaning Scotland",
    "event venue cleaner Edinburgh",
    "event venue cleaner Glasgow",
    "stadium cleaning Scotland",
    "arena cleaning Scotland",
    "concert hall cleaning",
    "conference centre cleaning Scotland",
    "wedding venue cleaning Scotland",
    "exhibition centre cleaning",
    "festival cleaning Scotland",
    "pre-event cleaning Scotland",
    "post-event cleaning Scotland",
    "event turnover cleaning",
    "day porter services events",
    "event venue cleaning Glasgow",
    "event venue cleaning Edinburgh",
    "event venue cleaning Aberdeen",
    "event venue cleaning near me",
    "Maundy Clean events",
  ],
  openGraph: {
    title: eventVenueCleaning.metaTitle,
    description: eventVenueCleaning.metaDescription,
    type: "website",
    images: [{ url: eventVenueCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${eventVenueCleaning.slug}` },
};

export default function EventVenueCleaningPage() {
  const service = eventVenueCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Event & Public Venue Cleaning Services Scotland) */}
        <EventVenueSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Link to /services/recurring-home-cleaning) */}
        <EventVenueSeoIntro />

        {/* 3. Existing overview - rich paragraphs about event venue cleaning as a presentation & safety function */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Strategic Venue Partner (image + 4 trust pillars: Same Trusted Team, Flexible Scheduling, Safety & Presentation, Eco-Friendly & Public Safe) */}
        <EventVenueSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (auditoria & seating, foyers & concourses, toilets, catering & concessions, external areas, backstage & dressing rooms) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Venue Maintenance & Post-Event Checklist (H2 + 3 H3 cards with images: External Concourse & Entrance Care, Internal Seating & Arena Sanitation, Often-Missed Technical Details) */}
        <EventVenueSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to event venue operations & turnaround windows */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Assessment & Quote / Professional Matching / Enjoy a Pristine Venue, link to /quote) */}
        <EventVenueSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (surge capacity, tight turnaround, PVG-checked crews, child-safe chemistry, signed logs, event-specific protocols) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Wedding Venue / Concert Hall & Conference Centre / Stadium & Arena) */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Cycle (H2 + 4 interlink cards to deep-house-cleaning, post-construction-cleaning, restaurant-cleaning, upholstery-cleaning) */}
        <EventVenueSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Event Venue Cleaning Near Me in Scotland) - 36 internal links */}
        <EventVenueSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Free Venue Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <EventVenueSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for public venues, provide own equipment, one-off cleans for festivals) */}
        <EventVenueSeoFaq />

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

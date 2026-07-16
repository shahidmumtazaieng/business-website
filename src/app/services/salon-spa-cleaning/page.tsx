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
  SalonSpaSeoHeroBanner,
  SalonSpaSeoIntro,
  SalonSpaSeoWhy,
  SalonSpaSeoChecklist,
  SalonSpaSeoBooking,
  SalonSpaSeoInterlinking,
  SalonSpaSeoNearMe,
  SalonSpaSeoFaq,
  SalonSpaSeoFinalCta,
} from "@/components/service-detail/salon-spa-cleaning-seo";
import { salonSpaCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: salonSpaCleaning.metaTitle,
  description: salonSpaCleaning.metaDescription,
  keywords: [
    "salon cleaning Scotland",
    "spa cleaning Edinburgh",
    "spa cleaning Glasgow",
    "hair salon cleaner",
    "beauty salon cleaning",
    "aesthetics clinic cleaning",
    "barber shop cleaning",
    "nail bar cleaning",
    "salon cleaning Glasgow",
    "salon cleaning near me",
    "Maundy Clean salons",
  ],
  openGraph: {
    title: salonSpaCleaning.metaTitle,
    description: salonSpaCleaning.metaDescription,
    type: "website",
    images: [{ url: salonSpaCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${salonSpaCleaning.slug}` },
};

export default function SalonSpaCleaningPage() {
  const service = salonSpaCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Salon & Spa Cleaning Services Glasgow & Edinburgh) */}
        <SalonSpaSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Link to /services/recurring-home-cleaning) */}
        <SalonSpaSeoIntro />

        {/* 3. Existing overview - rich paragraphs about salon & spa cleaning as a close-contact hygiene function */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is the Trusted Partner for Scottish Salons (image + 4 trust pillars: Same Trusted Team, Specialised Sanitisation & Fogging, Flexible Around Hours, Premium Eco-Friendly Standards) */}
        <SalonSpaSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (styling stations, treatment rooms, reception, launderette, etc.) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Salon Maintenance & Hygiene Checklist (H2 + 3 H3 cards with images: Styling Stations & Public Areas, Treatment Rooms & Spa Facilities, Often-Missed Technical Details) */}
        <SalonSpaSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to salon operations & out-of-hours scheduling */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Instant Quote & Site Survey / Professional Matching / Enjoy a Pristine Venue, link to /quote) */}
        <SalonSpaSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (PVG-checked crews, antimicrobial fogging, treatment room disinfection, child-safe chemistry, signed logs, out-of-hours) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Hair Salon / Beauty Spa / Aesthetics Clinic) */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Business Stage (H2 + 4 interlink cards to move-in-out-cleaning, post-construction-cleaning, deep-house-cleaning, disinfection-services) */}
        <SalonSpaSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Salon & Spa Cleaning Near Me in Scotland) - 36 internal links */}
        <SalonSpaSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your 30-Second Instant Quote) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <SalonSpaSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for salon environments, provide own equipment, work out-of-hours) */}
        <SalonSpaSeoFaq />

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

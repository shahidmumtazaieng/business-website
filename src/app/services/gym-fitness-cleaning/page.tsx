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
  GymFitnessSeoHeroBanner,
  GymFitnessSeoIntro,
  GymFitnessSeoWhy,
  GymFitnessSeoChecklist,
  GymFitnessSeoBooking,
  GymFitnessSeoInterlinking,
  GymFitnessSeoNearMe,
  GymFitnessSeoFaq,
  GymFitnessSeoFinalCta,
} from "@/components/service-detail/gym-fitness-cleaning-seo";
import { gymFitnessCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: gymFitnessCleaning.metaTitle,
  description: gymFitnessCleaning.metaDescription,
  keywords: [
    "gym cleaning Scotland",
    "fitness centre cleaning Scotland",
    "gym disinfection service",
    "EN 14476 virucidal gym cleaning",
    "ATP swab testing gym",
    "leisure centre cleaning Scotland",
    "boutique studio cleaning",
    "changing room cleaning",
    "gym daily open close cleaning",
    "infection control cleaning gym",
    "HACCP cleaning schedule gym",
    "COSHH gym cleaning Scotland",
    "after-hours gym cleaning Scotland",
    "gym cleaning Glasgow",
    "gym cleaning Edinburgh",
    "gym cleaning Aberdeen",
    "gym cleaning near me",
    "Maundy Clean gym",
  ],
  openGraph: {
    title: gymFitnessCleaning.metaTitle,
    description: gymFitnessCleaning.metaDescription,
    type: "website",
    images: [{ url: gymFitnessCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${gymFitnessCleaning.slug}` },
};

export default function GymFitnessCleaningPage() {
  const service = gymFitnessCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Gym & Fitness Centre Cleaning Services Scotland) */}
        <GymFitnessSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Links to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <GymFitnessSeoIntro />

        {/* 3. Existing overview - rich paragraphs about EN 14476 virucidal disinfection, ATP swab testing, infection-control standards */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Fitness Facility Maintenance (image + 4 trust pillars: Same Team, Regulatory Compliance, Technical Equipment, Safe for Members) */}
        <GymFitnessSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (touchpoint disinfection, floor/mat care, changing rooms, high-touch ancillary, air quality, ATP verification) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Gym Maintenance & Deep Decontamination Checklist (H2 + 3 H3 cards with images: Equipment & Production Floors, Clean Room Standards for Amenities, Often-Missed Technical Details) */}
        <GymFitnessSeoChecklist />

        {/* 7. Existing process - 4-step site survey / HACCP SOP / daily service / quarterly review flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Survey & Bespoke Plan / Professional Matching / Enjoy a Pristine Facility, link to /quote) */}
        <GymFitnessSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (touchpoint disinfection, floor/mat care, changing rooms, EHO compliance, dedicated team, £5m liability) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Stage (H2 + 4 interlink cards to move-in-out, post-construction, carpet-rug, disinfection) */}
        <GymFitnessSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Gym & Fitness Centre Cleaning Near Me, Across Scotland) - 36 internal links */}
        <GymFitnessSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Book Your Free Site Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <GymFitnessSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for industrial/leisure spaces, equipment, communication & quality control) */}
        <GymFitnessSeoFaq />

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

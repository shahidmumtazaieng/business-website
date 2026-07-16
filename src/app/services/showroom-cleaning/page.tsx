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
  ShowroomSeoHeroBanner,
  ShowroomSeoIntro,
  ShowroomSeoWhy,
  ShowroomSeoChecklist,
  ShowroomSeoBooking,
  ShowroomSeoInterlinking,
  ShowroomSeoNearMe,
  ShowroomSeoFaq,
  ShowroomSeoFinalCta,
} from "@/components/service-detail/showroom-cleaning-seo";
import { showroomCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: showroomCleaning.metaTitle,
  description: showroomCleaning.metaDescription,
  keywords: [
    "showroom cleaning Scotland",
    "showroom cleaner Edinburgh",
    "showroom cleaner Glasgow",
    "car showroom cleaning",
    "kitchen showroom cleaning",
    "bathroom showroom cleaning",
    "furniture showroom cleaning",
    "luxury retail cleaning",
    "car dealership cleaning",
    "showroom deep cleaning Scotland",
    "showroom presentation cleaning",
    "brass restoration showroom",
    "display product detailing",
    "out-of-hours showroom cleaning",
    "showroom cleaning Glasgow",
    "showroom cleaning Edinburgh",
    "showroom cleaning Aberdeen",
    "showroom cleaning near me",
    "Maundy Clean showrooms",
  ],
  openGraph: {
    title: showroomCleaning.metaTitle,
    description: showroomCleaning.metaDescription,
    type: "website",
    images: [{ url: showroomCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${showroomCleaning.slug}` },
};

export default function ShowroomCleaningPage() {
  const service = showroomCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Showroom Deep Cleaning Services Scotland) */}
        <ShowroomSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Links to /services/move-in-out-cleaning and /services/deep-house-cleaning) */}
        <ShowroomSeoIntro />

        {/* 3. Existing overview - rich paragraphs about showroom presentation, surface care, white-glove standards */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is the Authority in Showroom Presentation (image + 4 trust pillars: Same Trusted Team, Surface & Brass Restoration, Hands-On Management, Safe for Staff & Clients) */}
        <ShowroomSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (showroom floor, display products, glass & mirrors, reception, back-of-house, external areas) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Showroom Maintenance & Technical Checklist (H2 + 3 H3 cards with images: Display & Public Facing Areas, Technical Floor & Fabric Care, Often-Missed Technical Details) */}
        <ShowroomSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to showroom presentation */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Survey & Bespoke Plan / Professional Matching / Enjoy a Pristine Environment, link to /quote) */}
        <ShowroomSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (white-glove inspection, specialist chemistry, out-of-hours flexibility, etc.) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Milestone (H2 + 4 interlink cards to move-in-out, post-construction, spring-cleaning, disinfection-services) */}
        <ShowroomSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Showroom Cleaning Near Me, Across Scotland) - 36 internal links */}
        <ShowroomSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Quote Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <ShowroomSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for high-value showrooms, equipment, out-of-hours) */}
        <ShowroomSeoFaq />

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

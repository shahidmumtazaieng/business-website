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
  MarblePolishingSeoHeroBanner,
  MarblePolishingSeoIntro,
  MarblePolishingSeoWhy,
  MarblePolishingSeoKillers,
  MarblePolishingSeoChecklist,
  MarblePolishingSeoBooking,
  MarblePolishingSeoInterlinking,
  MarblePolishingSeoNearMe,
  MarblePolishingSeoFaq,
  MarblePolishingSeoFinalCta,
} from "@/components/service-detail/marble-polishing-seo";
import { marblePolishing } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: marblePolishing.metaTitle,
  description: marblePolishing.metaDescription,
  keywords: [
    "marble polishing Scotland",
    "marble restoration",
    "diamond-grit honing",
    "marble crystallisation",
    "etch mark removal",
    "Crema Marfil polishing",
    "Carrara marble restoration",
    "marble floor restoration Scotland",
    "natural stone polishing",
    "heritage marble restoration",
    "marble polishing near me",
    "Maundy Clean marble",
  ],
  openGraph: {
    title: marblePolishing.metaTitle,
    description: marblePolishing.metaDescription,
    type: "website",
    images: [{ url: marblePolishing.heroImage }],
  },
  alternates: { canonical: `/services/${marblePolishing.slug}` },
};

export default function MarblePolishingPage() {
  const service = marblePolishing;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Marble Polishing & Stone Restoration Scotland) */}
        <MarblePolishingSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with ONE inline Link to /services/recurring-home-cleaning) */}
        <MarblePolishingSeoIntro />

        {/* 3. Existing overview - rich paragraphs about marble as a specialist discipline */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Expert in Marble Maintenance (image + 4 trust pillars: Same Trusted Team, Central Scotland Coverage, Total Regulatory Compliance, Sustainable & Stone-Safe Products) */}
        <MarblePolishingSeoWhy />

        {/* 5. Existing what's included - high-level checklist items (stone identification, diamond-grit honing, polishing compound, crystallisation, stain removal, penetrating sealer) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Addressing the 4 Killers of Stone Brilliance (H2 + 4 problem-solution cards: Etching Restoration, Advanced Stain Removal, Luster Restoration, Scratch & Chip Repair) */}
        <MarblePolishingSeoKillers />

        {/* 7. Our Total Marble Polishing & Preservation Checklist (H3 + 5 flat checklist items: Diamond Abrasive Honing, High-Gloss Mechanical Polishing, Technical Sealing, Often-Missed Details, Inside Window Care) */}
        <MarblePolishingSeoChecklist />

        {/* 8. Existing process - 4-step process tailored to marble survey, prep, hone, polish/seal */}
        <ServiceProcess service={service} />

        {/* 9. 3-step hassle-free booking (H2 + 3 steps: Site Survey & Stone Analysis / Professional Matching / Enjoy a Pristine Foundation, link to /quote) */}
        <MarblePolishingSeoBooking />

        {/* 10. Existing benefits grid - benefit cards (mirror finish, crystallisation, etch mark removal, food-safe sealer, all marble types, written maintenance guidance) */}
        <ServiceBenefits service={service} />

        {/* 11. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 12. Pricing - tiered options for maintenance polish, full restoration, deep restoration with crystallisation */}
        <ServicePricing service={service} />

        {/* 13. Solutions for Every Property Milestone (H2 + 4 interlink cards to recurring-home-cleaning, move-in-out-cleaning, post-construction-cleaning, upholstery-cleaning/tile-grout-cleaning - all 4 with inline Links in ReactNode descriptions, card 4 has TWO inline Links) */}
        <MarblePolishingSeoInterlinking />

        {/* 14. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 15. Near-me keyword section (H2: Marble Polishing Near Me in Scotland) - 37 internal links */}
        <MarblePolishingSeoNearMe />

        {/* 16. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 17. Final SEO CTA (H2: Request Your Free Stone Assessment Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <MarblePolishingSeoFinalCta />

        {/* 18. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured technicians, provide own equipment, heritage marble floors) */}
        <MarblePolishingSeoFaq />

        {/* 19. Existing FAQ - additional Q&As from service-detail-data */}
        <ServiceFaq service={service} />

        {/* 20. Related services - internal links */}
        <ServiceRelated service={service} />

        {/* 21. Final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

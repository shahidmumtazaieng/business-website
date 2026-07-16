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
  TileGroutSeoHeroBanner,
  TileGroutSeoIntro,
  TileGroutSeoWhy,
  TileGroutSeoChecklist,
  TileGroutSeoBooking,
  TileGroutSeoInterlinking,
  TileGroutSeoNearMe,
  TileGroutSeoFaq,
  TileGroutSeoFinalCta,
} from "@/components/service-detail/tile-grout-cleaning-seo";
import { tileGroutCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: tileGroutCleaning.metaTitle,
  description: tileGroutCleaning.metaDescription,
  keywords: [
    "tile and grout cleaning Scotland",
    "grout cleaning Scotland",
    "grout recolour Scotland",
    "ceramic tile cleaning",
    "porcelain tile clean",
    "Victorian tile restoration",
    "natural stone floor cleaning",
    "marble floor clean",
    "travertine cleaning",
    "slate cleaning",
    "grout sealing Scotland",
    "tile and grout cleaning Glasgow",
    "tile and grout cleaning Edinburgh",
    "tile and grout cleaning near me",
    "Maundy Clean tile",
  ],
  openGraph: {
    title: tileGroutCleaning.metaTitle,
    description: tileGroutCleaning.metaDescription,
    type: "website",
    images: [{ url: tileGroutCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${tileGroutCleaning.slug}` },
};

export default function TileGroutCleaningPage() {
  const service = tileGroutCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Tile & Grout Cleaning Services Scotland) */}
        <TileGroutSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Surface Restoration) + stats band */}
        <TileGroutSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about hot-water extraction, tile-material-specific chemistry, sealing options */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is Scotland's Authority in Tile Restoration (image + 4 trust pillars) */}
        <TileGroutSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (material ID, pre-vacuum, pre-spray, extraction, recolour, seal) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Surface Maintenance Checklist (H2 + 3 H3 cards with images: deep clean, sealing, restoration) */}
        <TileGroutSeoChecklist />

        {/* 7. Existing process - 4-step identify/pre-spray/extract/seal flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps, link to /quote) */}
        <TileGroutSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (extraction, material-specific, recolour, dry time, eco, Victorian) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Single Room £149, Open-Plan £295, Victorian £POA) */}
        <ServicePricing service={service} />

        {/* 12. A Solution for Every Property Cycle (H2 + 4 interlink cards to recurring, deep, move-in/out, post-construction) */}
        <TileGroutSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Tile & Grout Cleaning Services Near Me in Scotland) - 36 internal links */}
        <TileGroutSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Book Your Tile & Grout Cleaning?) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <TileGroutSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 6 Q&As (3 from the user brief: clean without replacing, deep vs regular, insured + 3 additions: pressure damage, dry time, Victorian tiles) */}
        <TileGroutSeoFaq />

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

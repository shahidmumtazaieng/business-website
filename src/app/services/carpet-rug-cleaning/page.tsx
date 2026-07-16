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
  CarpetRugSeoHeroBanner,
  CarpetRugSeoIntro,
  CarpetRugSeoWhy,
  CarpetRugSeoChecklist,
  CarpetRugSeoBooking,
  CarpetRugSeoInterlinking,
  CarpetRugSeoNearMe,
  CarpetRugSeoFaq,
  CarpetRugSeoFinalCta,
} from "@/components/service-detail/carpet-rug-cleaning-seo";
import { carpetRugCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: carpetRugCleaning.metaTitle,
  description: carpetRugCleaning.metaDescription,
  keywords: [
    "carpet cleaning Scotland",
    "rug cleaning Scotland",
    "carpet deep cleaning",
    "hot-water extraction",
    "Persian rug cleaning",
    "Oriental rug cleaning",
    "wool carpet cleaning",
    "NCCA certified cleaner",
    "WoolSafe approved",
    "stain removal carpet",
    "rug bathing Glasgow",
    "carpet cleaning near me",
    "rug cleaning near me",
    "Maundy Clean carpet",
  ],
  openGraph: {
    title: carpetRugCleaning.metaTitle,
    description: carpetRugCleaning.metaDescription,
    type: "website",
    images: [{ url: carpetRugCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${carpetRugCleaning.slug}` },
};

export default function CarpetRugCleaningPage() {
  const service = carpetRugCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Carpet & Rug Deep Cleaning Scotland) */}
        <CarpetRugSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Fabric Care) + stats band */}
        <CarpetRugSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about hot-water extraction, rug bathing, NCCA */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is the Authority in Rug Restoration (image + 4 trust pillars) */}
        <CarpetRugSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Technical Checklist for Deep Clean (H2 + 4 H3 cards with images, links to upholstery) */}
        <CarpetRugSeoChecklist />

        {/* 7. Existing process - 4-step scoping/crew/clean/walk-through flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 H3 steps, link to /quote) */}
        <CarpetRugSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (NCCA, eco-labelled, honest, fast-dry, workshop, reminder) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Per Room £18, Whole-Home £145, Rug Bathing £6/sq ft) */}
        <ServicePricing service={service} />

        {/* 12. A Solution for Every Cycle (H2 + 4 interlink cards to recurring, move-in/out, deep, spring) */}
        <CarpetRugSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Carpet & Rug Cleaning Near Me in Scotland) - 36 internal links */}
        <CarpetRugSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Restore the fabrics...) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <CarpetRugSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 6 Q&As (3 from the user brief: on/off-site, insured, dry time + 3 additions: wool-safe, frequency, stain removal) */}
        <CarpetRugSeoFaq />

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

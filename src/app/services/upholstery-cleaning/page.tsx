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
  UpholsterySeoHeroBanner,
  UpholsterySeoIntro,
  UpholsterySeoWhy,
  UpholsterySeoChecklist,
  UpholsterySeoBooking,
  UpholsterySeoInterlinking,
  UpholsterySeoNearMe,
  UpholsterySeoFaq,
  UpholsterySeoFinalCta,
} from "@/components/service-detail/upholstery-cleaning-seo";
import { upholsteryCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: upholsteryCleaning.metaTitle,
  description: upholsteryCleaning.metaDescription,
  keywords: [
    "upholstery cleaning Scotland",
    "sofa cleaning Scotland",
    "sofa deep cleaning",
    "fabric cleaning",
    "leather sofa cleaning",
    "velvet upholstery cleaning",
    "microfibre sofa clean",
    "stain removal upholstery",
    "hot-water extraction upholstery",
    "upholstery cleaning near me",
    "sofa cleaning near me",
    "Maundy Clean upholstery",
  ],
  openGraph: {
    title: upholsteryCleaning.metaTitle,
    description: upholsteryCleaning.metaDescription,
    type: "website",
    images: [{ url: upholsteryCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${upholsteryCleaning.slug}` },
};

export default function UpholsteryCleaningPage() {
  const service = upholsteryCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Upholstery & Sofa Deep Cleaning Scotland) */}
        <UpholsterySeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Fabric Care) + stats band */}
        <UpholsterySeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about hot-water extraction, fabric types, stain treatment */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Upholstery Care (image + 4 trust pillars) */}
        <UpholsterySeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Comprehensive Upholstery Maintenance Checklist (H2 + 4 H3 cards with images, links to carpet-rug) */}
        <UpholsterySeoChecklist />

        {/* 7. Existing process - 4-step quote/fibre-test/pre-spray/extraction flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 H3 steps, link to /quote) */}
        <UpholsterySeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (extraction, fabric-specific, child-safe, fast-dry, stain treatment, leather) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Single Item £69, 3-Seater Sofa £139, Full Suite £249) */}
        <ServicePricing service={service} />

        {/* 12. A Solution for Every Property Cycle (H2 + 4 interlink cards to recurring, move-in/out, deep, spring) */}
        <UpholsterySeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Upholstery & Sofa Cleaning Near Me in Scotland) - 36 internal links */}
        <UpholsterySeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Ready to Book Your Upholstery & Sofa Cleaning?) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <UpholsterySeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 6 Q&As (3 from the user brief: dry time, mattress, insured + 3 additions: velvet/viscose, leather, frequency) */}
        <UpholsterySeoFaq />

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

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
  PestControlPrepSeoHeroBanner,
  PestControlPrepSeoIntro,
  PestControlPrepSeoWhy,
  PestControlPrepSeoChecklist,
  PestControlPrepSeoBooking,
  PestControlPrepSeoInterlinking,
  PestControlPrepSeoNearMe,
  PestControlPrepSeoFinalCta,
  PestControlPrepSeoFaq,
} from "@/components/service-detail/pest-control-prep-seo";
import { pestControlPrep } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: pestControlPrep.metaTitle,
  description: pestControlPrep.metaDescription,
  keywords: [
    "pest control prep Scotland",
    "infestation cleaning",
    "pest control preparation",
    "pre-treatment cleaning Scotland",
    "BPCA contractor prep",
    "HEPA vacuum pest prep",
    "industrial degreasing pests",
    "skirting board pest prep",
    "bedbug prep Glasgow",
    "rodent prep Edinburgh",
    "cockroach prep Aberdeen",
    "EN 14476 virucidal post-treatment",
    "post-treatment disinfection",
    "pest control prep near me",
    "Maundy Clean pest prep",
  ],
  openGraph: {
    title: pestControlPrep.metaTitle,
    description: pestControlPrep.metaDescription,
    type: "website",
    images: [{ url: pestControlPrep.heroImage }],
  },
  alternates: { canonical: `/services/${pestControlPrep.slug}` },
};

export default function PestControlPrepPage() {
  const service = pestControlPrep;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Pest Control Prep & Infestation Cleaning Scotland) */}
        <PestControlPrepSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + intro paragraphs with inline Link to Recurring Home Cleaning) */}
        <PestControlPrepSeoIntro />

        {/* 3. Existing overview - rich paragraphs about BPCA contractor coordination, 47-point prep checklist, post-treatment disinfection */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Choice for Technical Pest Prep (image + 4 trust pillars) */}
        <PestControlPrepSeoWhy />

        {/* 5. Existing what's included - 6 high-level items (pre-treatment prep, kitchen neutralisation, living-area reset, contaminant removal, post-treatment disinfection, RAMS) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Comprehensive Pest Control Prep Checklist (H2 + 3 grouped H3 cards: kitchen / living / often-missed) */}
        <PestControlPrepSeoChecklist />

        {/* 7. Existing process - 4-step survey/prep/treatment/disinfection flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 steps: Site Survey & Bespoke Plan / Professional Matching / Enjoy a Treatment-Ready Facility) */}
        <PestControlPrepSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (same crew, 99.99% pathogen, regulatory compliance, child-safe, 7-day scheduling, BPCA trusted) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Long-Term Protection (H2 + 4 interlink cards with inline Links to recurring-home, move-in-out, post-construction, antiviral) */}
        <PestControlPrepSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Pest Control Prep & Infestation Cleaning Near Me, Across Scotland) - 36 internal links */}
        <PestControlPrepSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Prep Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <PestControlPrepSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (own equipment, insured for infestation, out-of-hours) */}
        <PestControlPrepSeoFaq />

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

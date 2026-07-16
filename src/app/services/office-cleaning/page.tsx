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
  OfficeCleaningSeoHeroBanner,
  OfficeCleaningSeoIntro,
  OfficeCleaningSeoWhy,
  OfficeCleaningSeoChecklist,
  OfficeCleaningSeoBooking,
  OfficeCleaningSeoInterlinking,
  OfficeCleaningSeoNearMe,
  OfficeCleaningSeoFaq,
  OfficeCleaningSeoFinalCta,
} from "@/components/service-detail/office-cleaning-seo";
import { officeCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: officeCleaning.metaTitle,
  description: officeCleaning.metaDescription,
  keywords: [
    "office cleaning Scotland",
    "commercial office cleaning",
    "after hours office cleaning",
    "janitorial services",
    "PVG-checked office cleaners",
    "contract cleaning Glasgow",
    "office cleaning Edinburgh",
    "office cleaning Aberdeen",
    "office deep cleaning Scotland",
    "professional office cleaning company",
    "office cleaning near me",
    "Maundy Clean office",
  ],
  openGraph: {
    title: officeCleaning.metaTitle,
    description: officeCleaning.metaDescription,
    type: "website",
    images: [{ url: officeCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${officeCleaning.slug}` },
};

export default function OfficeCleaningPage() {
  const service = officeCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Office Deep Cleaning Services Scotland) */}
        <OfficeCleaningSeoHeroBanner />

        {/* 2. Long-form SEO intro (H2: The Maundy Clean Standard for Commercial Workspace Care) + stats band */}
        <OfficeCleaningSeoIntro />

        {/* 3. Existing overview - 3 rich paragraphs about commercial risk profile, account management, PAYE-employed crews */}
        <ServiceOverview service={service} />

        {/* 4. Why Maundy Clean is Scotland's Choice for Reliable Commercial Deep Cleaning (image + 4 trust pillars) */}
        <OfficeCleaningSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (workstation, kitchen, meeting rooms, bathrooms, reception, periodic deep) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Office Hygiene & Maintenance Checklist (H2 + 3 H3 cards with images: workstations, floors, washroom/kitchen) */}
        <OfficeCleaningSeoChecklist />

        {/* 7. Existing process - 4-step site survey / proposal / onboarding / ongoing management flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps, link to /quote) */}
        <OfficeCleaningSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (account manager, PVG/GDPR, after-hours, HSE supplies, monthly logs, 24h issue response) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Small £89, Medium £168 highlighted, Large Custom) */}
        <ServicePricing service={service} />

        {/* 12. Commercial Solutions for Every Stage (H2 + 4 interlink cards to restaurant, move-in/out, post-construction, disinfection) */}
        <OfficeCleaningSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Office Cleaning Services Near Me in Scotland) - 36 internal links */}
        <OfficeCleaningSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H3: Ready to Book Your Office Deep Clean?) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <OfficeCleaningSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 6 Q&As (3 from the user brief: own equipment, insured, all sizes + 3 additions: after-hours, same crew, missed visit) */}
        <OfficeCleaningSeoFaq />

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

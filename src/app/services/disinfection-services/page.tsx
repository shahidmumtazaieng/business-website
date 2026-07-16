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
  DisinfectionSeoHeroBanner,
  DisinfectionSeoIntro,
  DisinfectionSeoWhy,
  DisinfectionSeoChecklist,
  DisinfectionSeoBooking,
  DisinfectionSeoInterlinking,
  DisinfectionSeoNearMe,
  DisinfectionSeoFinalCta,
  DisinfectionSeoFaq,
} from "@/components/service-detail/disinfection-services-seo";
import { disinfectionServices } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: disinfectionServices.metaTitle,
  description: disinfectionServices.metaDescription,
  keywords: [
    "disinfection services Scotland",
    "antiviral sanitisation",
    "electrostatic disinfection",
    "ULV fogging",
    "EN 14476 virucidal",
    "outbreak response",
    "norovirus disinfection",
    "COVID cleaning",
    "HSE-approved disinfection",
    "disinfection services Glasgow",
    "disinfection services Edinburgh",
    "disinfection services Aberdeen",
    "disinfection services near me",
    "Maundy Clean disinfection",
  ],
  openGraph: {
    title: disinfectionServices.metaTitle,
    description: disinfectionServices.metaDescription,
    type: "website",
    images: [{ url: disinfectionServices.heroImage }],
  },
  alternates: { canonical: `/services/${disinfectionServices.slug}` },
};

export default function DisinfectionServicesPage() {
  const service = disinfectionServices;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Disinfection & Antiviral Sanitisation Services Scotland) */}
        <DisinfectionSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + intro paragraphs with TWO inline Links to Recurring Home Cleaning + Deep House Cleaning) */}
        <DisinfectionSeoIntro />

        {/* 3. Existing overview - rich paragraphs about EN 14476 chemistry, electrostatic/ULV/UV-C methods, Treatment Certificates */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Pathogen Control (image + 4 trust pillars) */}
        <DisinfectionSeoWhy />

        {/* 5. Existing what's included - 6 high-level items (pre-disinfection clean, electrostatic spray, ULV fogging, UV-C, touchpoint wipe, certificate) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Disinfection & Sanitisation Checklist (H2 + 3 grouped H3 cards: high-touch / environmental / often-missed) */}
        <DisinfectionSeoChecklist />

        {/* 7. Existing process - 4-step call/arrive/disinfect/re-entry flow */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H2 + 3 steps: Site Survey & Risk Assessment / Professional Matching / Enjoy a Safe Environment) */}
        <DisinfectionSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (EN 14476, 4-hr callout, Treatment Cert, HSE-approved, PPE-trained, preventive schedule) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - 4 photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Milestone (H2 + 4 interlink cards with inline Links to recurring-home, move-in-out, post-construction, trauma/mould) */}
        <DisinfectionSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Disinfection & Antiviral Sanitisation Near Me, Across Scotland) - 36 internal links */}
        <DisinfectionSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Free Site Survey Today) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <DisinfectionSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (childcare safe, own equipment, out-of-hours) */}
        <DisinfectionSeoFaq />

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

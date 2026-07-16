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
  CoWorkingSeoHeroBanner,
  CoWorkingSeoIntro,
  CoWorkingSeoWhy,
  CoWorkingSeoChecklist,
  CoWorkingSeoBooking,
  CoWorkingSeoInterlinking,
  CoWorkingSeoNearMe,
  CoWorkingSeoFaq,
  CoWorkingSeoFinalCta,
} from "@/components/service-detail/co-working-space-cleaning-seo";
import { coWorkingSpaceCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: coWorkingSpaceCleaning.metaTitle,
  description: coWorkingSpaceCleaning.metaDescription,
  keywords: [
    "co-working cleaning Scotland",
    "co-working cleaner Edinburgh",
    "co-working cleaner Glasgow",
    "flexible workspace cleaning Scotland",
    "hot-desk cleaning",
    "shared office cleaning",
    "meeting room cleaning Scotland",
    "incubator cleaning Scotland",
    "day porter services Scotland",
    "serviced office cleaning",
    "dual-shift cleaning Scotland",
    "member retention cleaning",
    "co-working cleaning Glasgow",
    "co-working cleaning Edinburgh",
    "co-working cleaning Aberdeen",
    "co-working space cleaning near me",
    "Maundy Clean co-working",
  ],
  openGraph: {
    title: coWorkingSpaceCleaning.metaTitle,
    description: coWorkingSpaceCleaning.metaDescription,
    type: "website",
    images: [{ url: coWorkingSpaceCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${coWorkingSpaceCleaning.slug}` },
};

export default function CoWorkingSpaceCleaningPage() {
  const service = coWorkingSpaceCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Full-width hero banner (H1: Professional Co-Working Space Cleaning Services Scotland) */}
        <CoWorkingSeoHeroBanner />

        {/* 2. Long-form SEO intro (split-layout image + 2 intro paragraphs with inline Link to /services/recurring-home-cleaning) */}
        <CoWorkingSeoIntro />

        {/* 3. Existing overview - rich paragraphs about co-working cleaning as a retention function */}
        <ServiceOverview service={service} />

        {/* 4. Why MaundyClean is Scotland's Authority in Managed Workspaces (image + 4 trust pillars: Dual-Shift Strategy, Same Trusted Professional, Enhanced Productivity & Well-being, Eco-Friendly & Member Safe) */}
        <CoWorkingSeoWhy />

        {/* 5. Existing what's included - 6 high-level checklist items (hot-desk areas, meeting rooms, phone booths, communal kitchen, toilets/showers/wellness, day porter option) */}
        <ServiceWhatsIncluded service={service} />

        {/* 6. Our Total Workspace Maintenance & Hygiene Checklist (H2 + 3 H3 cards with images: Shared Breakout Areas & Kitchens, Private Desks & Meeting Rooms, Often-Missed Technical Details) */}
        <CoWorkingSeoChecklist />

        {/* 7. Existing process - 4-step process tailored to co-working operations & member hours */}
        <ServiceProcess service={service} />

        {/* 8. 3-step hassle-free booking (H3 + 3 steps: Site Survey & Bespoke Contract / Professional Matching / Enjoy a Pristine Community, link to /quote) */}
        <CoWorkingSeoBooking />

        {/* 9. Existing benefits grid - 6 benefit cards (co-working specific protocols, flexible timing, day porter option, PVG-checked & £5m liability, kitchen-first approach, improves NPS) */}
        <ServiceBenefits service={service} />

        {/* 10. Gallery - photo cards */}
        <ServiceGallery service={service} />

        {/* 11. Pricing - 3 tiers (Small Space / Standard Space / Multi-Site) */}
        <ServicePricing service={service} />

        {/* 12. Solutions for Every Property Milestone (H2 + 4 interlink cards to move-in-out-cleaning, post-construction-cleaning, deep-house-cleaning, upholstery-cleaning + oven-cleaning inline) */}
        <CoWorkingSeoInterlinking />

        {/* 13. Existing service areas - Scottish locations grid */}
        <ServiceAreas service={service} />

        {/* 14. Near-me keyword section (H2: Co-Working Space Cleaning Near Me in Scotland) - 36 internal links */}
        <CoWorkingSeoNearMe />

        {/* 15. Testimonials */}
        <ServiceTestimonials service={service} />

        {/* 16. Final SEO CTA (H2: Request Your Bespoke Site Survey) - placed ABOVE all FAQ sections so the page does not end with two stacked CTAs */}
        <CoWorkingSeoFinalCta />

        {/* 17. SEO FAQ (H2: Frequently Asked Questions) - 3 Q&As (insured for commercial spaces, provide own equipment, manage keys for evening cleaning) */}
        <CoWorkingSeoFaq />

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

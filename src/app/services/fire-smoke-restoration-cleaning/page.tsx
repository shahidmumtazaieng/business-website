import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

// Standard components
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

// Custom SEO components
import {
  FireSmokeRestorationCleaningSeoHeroBanner,
  FireSmokeRestorationCleaningSeoIntro,
  FireSmokeRestorationCleaningSeoWhy,
  FireSmokeRestorationCleaningSeoChecklist,
  FireSmokeRestorationCleaningSeoBooking,
  FireSmokeRestorationCleaningSeoInterlinking,
  FireSmokeRestorationCleaningSeoNearMe,
  FireSmokeRestorationCleaningSeoFinalCta,
  FireSmokeRestorationCleaningSeoFaq,
} from "@/components/service-detail/fire-smoke-restoration-cleaning-seo";

import { fireSmokeRestorationCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Fire & Smoke Restoration Cleaning Scotland | Maundy Clean",
  description: "Premium fire & smoke restoration cleaning services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet structural soot recovery.",
  keywords: [
    "fire damage restoration Scotland",
    "smoke damage cleanup",
    "soot removal",
    "IICRC S700 protocol",
    "ozone deodorisation",
    "insurance-preferred contractor",
    "Maundy Clean fire",
  ],
  openGraph: {
    title: "Professional Fire & Smoke Restoration Cleaning Scotland | Maundy Clean",
    description: "Premium fire & smoke restoration cleaning services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet structural soot recovery.",
    type: "website",
    images: [{ url: fireSmokeRestorationCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${fireSmokeRestorationCleaning.slug}` },
};

export default function FireSmokeRestorationCleaningPage() {
  const service = fireSmokeRestorationCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Interleaved 20-Section Layout Pattern */}
        <FireSmokeRestorationCleaningSeoHeroBanner />
        <FireSmokeRestorationCleaningSeoIntro />
        <ServiceOverview service={service} />
        <FireSmokeRestorationCleaningSeoWhy />
        <ServiceWhatsIncluded service={service} />
        <FireSmokeRestorationCleaningSeoChecklist />
        <ServiceProcess service={service} />
        <FireSmokeRestorationCleaningSeoBooking />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServicePricing service={service} />
        <FireSmokeRestorationCleaningSeoInterlinking />
        <ServiceAreas service={service} />
        <FireSmokeRestorationCleaningSeoNearMe />
        <ServiceTestimonials service={service} />
        <FireSmokeRestorationCleaningSeoFinalCta />
        <FireSmokeRestorationCleaningSeoFaq />
        <ServiceFaq service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

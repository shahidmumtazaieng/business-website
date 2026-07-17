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
  AsbestosCleanupPrepSeoHeroBanner,
  AsbestosCleanupPrepSeoIntro,
  AsbestosCleanupPrepSeoWhy,
  AsbestosCleanupPrepSeoChecklist,
  AsbestosCleanupPrepSeoBooking,
  AsbestosCleanupPrepSeoInterlinking,
  AsbestosCleanupPrepSeoNearMe,
  AsbestosCleanupPrepSeoFinalCta,
  AsbestosCleanupPrepSeoFaq,
} from "@/components/service-detail/asbestos-cleanup-prep-seo";

import { asbestosPrepCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Asbestos Cleanup Prep & Decontamination Cleaning Scotland | Maundy Clean",
  description: "Premium asbestos prep cleaning and decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet structural recovery.",
  keywords: [
    "asbestos prep cleaning Scotland",
    "asbestos clearance cleaning",
    "CAR 2012 compliant",
    "HSG247 compliant",
    "HSG264 compliant",
    "post asbestos removal clean",
    "four stage clearance",
    "Maundy Clean asbestos",
  ],
  openGraph: {
    title: "Professional Asbestos Cleanup Prep & Decontamination Cleaning Scotland | Maundy Clean",
    description: "Premium asbestos prep cleaning and decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet structural recovery.",
    type: "website",
    images: [{ url: asbestosPrepCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${asbestosPrepCleaning.slug}` },
};

export default function AsbestosPrepCleaningPage() {
  const service = asbestosPrepCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Interleaved 20-Section Layout Pattern */}
        <AsbestosCleanupPrepSeoHeroBanner />
        <AsbestosCleanupPrepSeoIntro />
        <ServiceOverview service={service} />
        <AsbestosCleanupPrepSeoWhy />
        <ServiceWhatsIncluded service={service} />
        <AsbestosCleanupPrepSeoChecklist />
        <ServiceProcess service={service} />
        <AsbestosCleanupPrepSeoBooking />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServicePricing service={service} />
        <AsbestosCleanupPrepSeoInterlinking />
        <ServiceAreas service={service} />
        <AsbestosCleanupPrepSeoNearMe />
        <ServiceTestimonials service={service} />
        <AsbestosCleanupPrepSeoFinalCta />
        <AsbestosCleanupPrepSeoFaq />
        <ServiceFaq service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

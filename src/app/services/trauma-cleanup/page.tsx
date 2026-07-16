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
  TraumaCleanupSeoHeroBanner,
  TraumaCleanupSeoIntro,
  TraumaCleanupSeoWhy,
  TraumaCleanupSeoChecklist,
  TraumaCleanupSeoBooking,
  TraumaCleanupSeoInterlinking,
  TraumaCleanupSeoNearMe,
  TraumaCleanupSeoFinalCta,
  TraumaCleanupSeoFaq,
} from "@/components/service-detail/trauma-cleanup-seo";

import { traumaCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Trauma Cleanup & Biohazard Decontamination Scotland | Maundy Clean",
  description: "Premium trauma cleanup and biohazard decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet incident management.",
  keywords: [
    "trauma cleanup Scotland",
    "unattended death cleanup",
    "suicide cleanup",
    "accident cleanup",
    "HSE HSG272 compliant",
    "compassionate cleanup",
    "discreet trauma remediation",
    "Maundy Clean trauma",
  ],
  openGraph: {
    title: "Professional Trauma Cleanup & Biohazard Decontamination Scotland | Maundy Clean",
    description: "Premium trauma cleanup and biohazard decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet incident management.",
    type: "website",
    images: [{ url: traumaCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${traumaCleanup.slug}` },
};

export default function TraumaCleanupPage() {
  const service = traumaCleanup;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Interleaved 20-Section Layout Pattern */}
        <TraumaCleanupSeoHeroBanner />
        <TraumaCleanupSeoIntro />
        <ServiceOverview service={service} />
        <TraumaCleanupSeoWhy />
        <ServiceWhatsIncluded service={service} />
        <TraumaCleanupSeoChecklist />
        <ServiceProcess service={service} />
        <TraumaCleanupSeoBooking />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServicePricing service={service} />
        <TraumaCleanupSeoInterlinking />
        <ServiceAreas service={service} />
        <TraumaCleanupSeoNearMe />
        <ServiceTestimonials service={service} />
        <TraumaCleanupSeoFinalCta />
        <TraumaCleanupSeoFaq />
        <ServiceFaq service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

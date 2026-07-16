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
  CrimeSceneCleanupSeoHeroBanner,
  CrimeSceneCleanupSeoIntro,
  CrimeSceneCleanupSeoWhy,
  CrimeSceneCleanupSeoChecklist,
  CrimeSceneCleanupSeoBooking,
  CrimeSceneCleanupSeoInterlinking,
  CrimeSceneCleanupSeoNearMe,
  CrimeSceneCleanupSeoFinalCta,
  CrimeSceneCleanupSeoFaq,
} from "@/components/service-detail/crime-scene-cleanup-seo";

import { crimeSceneCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Crime Scene Cleanup & Trauma Decontamination Scotland | Maundy Clean",
  description: "Premium crime scene cleanup and trauma scene decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet incident management.",
  keywords: [
    "crime scene cleanup Scotland",
    "trauma decontamination",
    "blood cleaning Glasgow",
    "sharps disposal Scotland",
    "forensic hygiene services",
    "biological hazard cleaning",
    "emergency crime scene cleaners",
    "discreet forensic remediation",
  ],
  openGraph: {
    title: "Professional Crime Scene Cleanup & Trauma Decontamination Scotland | Maundy Clean",
    description: "Premium crime scene cleanup and trauma scene decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet incident management.",
    type: "website",
    images: [{ url: crimeSceneCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${crimeSceneCleanup.slug}` },
};

export default function CrimeSceneCleanupPage() {
  const service = crimeSceneCleanup;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Interleaved 20-Section Layout Pattern */}
        <CrimeSceneCleanupSeoHeroBanner />
        <CrimeSceneCleanupSeoIntro />
        <ServiceOverview service={service} />
        <CrimeSceneCleanupSeoWhy />
        <ServiceWhatsIncluded service={service} />
        <CrimeSceneCleanupSeoChecklist />
        <ServiceProcess service={service} />
        <CrimeSceneCleanupSeoBooking />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServicePricing service={service} />
        <CrimeSceneCleanupSeoInterlinking />
        <ServiceAreas service={service} />
        <CrimeSceneCleanupSeoNearMe />
        <ServiceTestimonials service={service} />
        <CrimeSceneCleanupSeoFinalCta />
        <CrimeSceneCleanupSeoFaq />
        <ServiceFaq service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

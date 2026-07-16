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
  BiohazardCleaningSeoHeroBanner,
  BiohazardCleaningSeoIntro,
  BiohazardCleaningSeoWhy,
  BiohazardCleaningSeoChecklist,
  BiohazardCleaningSeoBooking,
  BiohazardCleaningSeoInterlinking,
  BiohazardCleaningSeoNearMe,
  BiohazardCleaningSeoFinalCta,
  BiohazardCleaningSeoFaq,
} from "@/components/service-detail/biohazard-cleaning-seo";

import { biohazardCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Biohazard Cleanup & Trauma Decontamination Scotland | Maundy Clean",
  description: "Premium biohazard cleanup and trauma scene decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet incident management.",
  keywords: [
    "biohazard cleanup Scotland",
    "trauma decontamination",
    "blood cleaning Glasgow",
    "sharps disposal Scotland",
    "forensic hygiene services",
    "biological hazard cleaning",
    "emergency biohazard cleaners",
    "discreet biological remediation",
  ],
  openGraph: {
    title: "Professional Biohazard Cleanup & Trauma Decontamination Scotland | Maundy Clean",
    description: "Premium biohazard cleanup and trauma scene decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet incident management.",
    type: "website",
    images: [{ url: biohazardCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${biohazardCleanup.slug}` },
};

export default function BiohazardCleaningPage() {
  const service = biohazardCleanup;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Interleaved 20-Section Layout Pattern */}
        <BiohazardCleaningSeoHeroBanner />
        <BiohazardCleaningSeoIntro />
        <ServiceOverview service={service} />
        <BiohazardCleaningSeoWhy />
        <ServiceWhatsIncluded service={service} />
        <BiohazardCleaningSeoChecklist />
        <ServiceProcess service={service} />
        <BiohazardCleaningSeoBooking />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServicePricing service={service} />
        <BiohazardCleaningSeoInterlinking />
        <ServiceAreas service={service} />
        <BiohazardCleaningSeoNearMe />
        <ServiceTestimonials service={service} />
        <BiohazardCleaningSeoFinalCta />
        <BiohazardCleaningSeoFaq />
        <ServiceFaq service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

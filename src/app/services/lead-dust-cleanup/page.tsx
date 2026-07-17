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
  LeadDustCleanupSeoHeroBanner,
  LeadDustCleanupSeoIntro,
  LeadDustCleanupSeoWhy,
  LeadDustCleanupSeoChecklist,
  LeadDustCleanupSeoBooking,
  LeadDustCleanupSeoInterlinking,
  LeadDustCleanupSeoNearMe,
  LeadDustCleanupSeoFinalCta,
  LeadDustCleanupSeoFaq,
} from "@/components/service-detail/lead-dust-cleanup-seo";

import { leadDustCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Lead Dust Cleanup & Decontamination Scotland | Maundy Clean",
  description: "Premium lead dust cleanup and decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet structural recovery.",
  keywords: [
    "lead dust cleanup Scotland",
    "lead paint remediation",
    "CLAW 2002 compliant",
    "lead decontamination",
    "shooting range cleanup",
    "industrial lead cleanup",
    "lead dust removal",
    "Maundy Clean lead",
  ],
  openGraph: {
    title: "Professional Lead Dust Cleanup & Decontamination Scotland | Maundy Clean",
    description: "Premium lead dust cleanup and decontamination services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet structural recovery.",
    type: "website",
    images: [{ url: leadDustCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${leadDustCleanup.slug}` },
};

export default function LeadDustCleanupPage() {
  const service = leadDustCleanup;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Interleaved 20-Section Layout Pattern */}
        <LeadDustCleanupSeoHeroBanner />
        <LeadDustCleanupSeoIntro />
        <ServiceOverview service={service} />
        <LeadDustCleanupSeoWhy />
        <ServiceWhatsIncluded service={service} />
        <LeadDustCleanupSeoChecklist />
        <ServiceProcess service={service} />
        <LeadDustCleanupSeoBooking />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServicePricing service={service} />
        <LeadDustCleanupSeoInterlinking />
        <ServiceAreas service={service} />
        <LeadDustCleanupSeoNearMe />
        <ServiceTestimonials service={service} />
        <LeadDustCleanupSeoFinalCta />
        <LeadDustCleanupSeoFaq />
        <ServiceFaq service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

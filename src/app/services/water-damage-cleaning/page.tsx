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
  WaterDamageCleaningSeoHeroBanner,
  WaterDamageCleaningSeoIntro,
  WaterDamageCleaningSeoWhy,
  WaterDamageCleaningSeoChecklist,
  WaterDamageCleaningSeoBooking,
  WaterDamageCleaningSeoInterlinking,
  WaterDamageCleaningSeoNearMe,
  WaterDamageCleaningSeoFinalCta,
  WaterDamageCleaningSeoFaq,
} from "@/components/service-detail/water-damage-cleaning-seo";

import { waterDamageCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Water Damage Cleaning & Flood Restoration Scotland | Maundy Clean",
  description: "Premium water damage cleaning and flood restoration services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet structural recovery.",
  keywords: [
    "water damage cleaning Scotland",
    "burst pipe cleanup",
    "flood damage cleaning",
    "water damage restoration",
    "24/7 water damage",
    "insurance water damage",
    "dehumidifier drying",
    "IICRC water damage",
    "Maundy Clean water damage",
  ],
  openGraph: {
    title: "Professional Water Damage Cleaning & Flood Restoration Scotland | Maundy Clean",
    description: "Premium water damage cleaning and flood restoration services in Glasgow, Edinburgh, and across Scotland. Compliant, safe, and discreet structural recovery.",
    type: "website",
    images: [{ url: waterDamageCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${waterDamageCleaning.slug}` },
};

export default function WaterDamageCleaningPage() {
  const service = waterDamageCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Interleaved 20-Section Layout Pattern */}
        <WaterDamageCleaningSeoHeroBanner />
        <WaterDamageCleaningSeoIntro />
        <ServiceOverview service={service} />
        <WaterDamageCleaningSeoWhy />
        <ServiceWhatsIncluded service={service} />
        <WaterDamageCleaningSeoChecklist />
        <ServiceProcess service={service} />
        <WaterDamageCleaningSeoBooking />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServicePricing service={service} />
        <WaterDamageCleaningSeoInterlinking />
        <ServiceAreas service={service} />
        <WaterDamageCleaningSeoNearMe />
        <ServiceTestimonials service={service} />
        <WaterDamageCleaningSeoFinalCta />
        <WaterDamageCleaningSeoFaq />
        <ServiceFaq service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

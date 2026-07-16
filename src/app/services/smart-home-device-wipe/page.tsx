import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServiceProcess } from "@/components/service-detail/service-process";
import { ServiceBenefits } from "@/components/service-detail/service-benefits";
import { ServiceGallery } from "@/components/service-detail/service-gallery";
import { ServiceTestimonials } from "@/components/service-detail/service-testimonials";
import { ServiceFaq } from "@/components/service-detail/service-faq";
import { ServiceRelated } from "@/components/service-detail/service-related";
import { ServiceAreas } from "@/components/service-detail/service-areas";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { smartHomeDeviceWipe } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: smartHomeDeviceWipe.metaTitle,
  description: smartHomeDeviceWipe.metaDescription,
  keywords: ["smart home cleaning Scotland","Echo speaker cleaning","Nest thermostat clean","Ring doorbell clean","smart display wipe","electronics-safe cleaning","IPA electronics wipe","Maundy Clean smart"],
  openGraph: {
    title: smartHomeDeviceWipe.metaTitle,
    description: smartHomeDeviceWipe.metaDescription,
    type: "website",
    images: [{ url: smartHomeDeviceWipe.heroImage }],
  },
  alternates: { canonical: `/services/smart-home-device-wipe` },
};

export default function SmartHomeDeviceWipePage() {
  const service = smartHomeDeviceWipe;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceWhatsIncluded service={service} />
        <ServiceProcess service={service} />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServiceTestimonials service={service} />
        <ServiceFaq service={service} />
        <ServiceAreas service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

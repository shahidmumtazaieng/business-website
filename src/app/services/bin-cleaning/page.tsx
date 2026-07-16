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
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { binCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: binCleaning.metaTitle,
  description: binCleaning.metaDescription,
  keywords: [
    "bin cleaning Scotland",
    "wheelie bin wash",
    "kitchen bin sanitise",
    "food caddy cleaning",
    "EN 14476 bins",
    "maggot removal",
    "Maundy Clean bins",  ],
  openGraph: {
    title: binCleaning.metaTitle,
    description: binCleaning.metaDescription,
    type: "website",
    images: [{ url: binCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${binCleaning.slug}` },
};

export default function BinCleaningPage() {
  const service = binCleaning;
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
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

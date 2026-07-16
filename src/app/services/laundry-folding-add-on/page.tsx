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
import { laundryFoldingAddOn } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: laundryFoldingAddOn.metaTitle,
  description: laundryFoldingAddOn.metaDescription,
  keywords: [
    "laundry folding Scotland",
    "wash dry iron fold",
    "bed linen change",
    "Marie Kondo folding",
    "put away laundry",
    "fabric-care trained",
    "Maundy Clean laundry",  ],
  openGraph: {
    title: laundryFoldingAddOn.metaTitle,
    description: laundryFoldingAddOn.metaDescription,
    type: "website",
    images: [{ url: laundryFoldingAddOn.heroImage }],
  },
  alternates: { canonical: `/services/${laundryFoldingAddOn.slug}` },
};

export default function LaundryFoldingAddOnPage() {
  const service = laundryFoldingAddOn;
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

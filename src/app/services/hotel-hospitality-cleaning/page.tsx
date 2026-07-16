import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { hotelHospitalityCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: hotelHospitalityCleaning.metaTitle,
  description: hotelHospitalityCleaning.metaDescription,
  keywords: [
    "hotel cleaning Scotland",
    "hotel housekeeping",
    "guest house cleaning",
    "inn cleaning service",
    "hotel room turnover",
    "serviced apartment cleaning",
    "hospitality cleaning contractor",
    "hotel public space cleaning",
    "Maundy Clean hospitality",
  ],
  openGraph: {
    title: hotelHospitalityCleaning.metaTitle,
    description: hotelHospitalityCleaning.metaDescription,
    type: "website",
    images: [{ url: hotelHospitalityCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${hotelHospitalityCleaning.slug}` },
};

export default function HotelHospitalityCleaningPage() {
  const service = hotelHospitalityCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceWhatsIncluded service={service} />
        <ServicePricing service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { softWashRoofCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: softWashRoofCleaning.metaTitle,
  description: softWashRoofCleaning.metaDescription,
  keywords: [
    "soft wash roof cleaning Scotland",
    "roof moss removal",
    "roof algae cleaning",
    "biocidal roof treatment",
    "concrete tile roof cleaning",
    "slate roof cleaning",
    "low pressure roof cleaning",
    "roof lichen removal",
    "Maundy Clean roof",
  ],
  openGraph: {
    title: softWashRoofCleaning.metaTitle,
    description: softWashRoofCleaning.metaDescription,
    type: "website",
    images: [{ url: softWashRoofCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${softWashRoofCleaning.slug}` },
};

export default function SoftWashRoofCleaningPage() {
  const service = softWashRoofCleaning;
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

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { medicalOfficeCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: medicalOfficeCleaning.metaTitle,
  description: medicalOfficeCleaning.metaDescription,
  keywords: [
    "medical office cleaning Scotland",
    "GP surgery cleaning",
    "dental practice cleaning",
    "clinic cleaning",
    "NHS infection control cleaning",
    "EN 14476 healthcare cleaning",
    "ATP swab verification",
    "Care Inspectorate cleaning",
    "Maundy Clean medical",
  ],
  openGraph: {
    title: medicalOfficeCleaning.metaTitle,
    description: medicalOfficeCleaning.metaDescription,
    type: "website",
    images: [{ url: medicalOfficeCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${medicalOfficeCleaning.slug}` },
};

export default function MedicalOfficeCleaningPage() {
  const service = medicalOfficeCleaning;
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

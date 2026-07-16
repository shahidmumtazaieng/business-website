import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { schoolNurseryCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: schoolNurseryCleaning.metaTitle,
  description: schoolNurseryCleaning.metaDescription,
  keywords: [
    "school cleaning Scotland",
    "nursery cleaning",
    "primary school cleaning",
    "secondary school cleaning",
    "child-safe cleaning products",
    "Care Inspectorate cleaning",
    "Education Scotland cleaning",
    "enhanced PVG cleaners",
    "Maundy Clean education",
  ],
  openGraph: {
    title: schoolNurseryCleaning.metaTitle,
    description: schoolNurseryCleaning.metaDescription,
    type: "website",
    images: [{ url: schoolNurseryCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${schoolNurseryCleaning.slug}` },
};

export default function SchoolNurseryCleaningPage() {
  const service = schoolNurseryCleaning;
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

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { universityCampusCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: universityCampusCleaning.metaTitle,
  description: universityCampusCleaning.metaDescription,
  keywords: [
    "university campus cleaning Scotland",
    "university cleaning contractor",
    "lecture theatre cleaning",
    "halls of residence cleaning",
    "BSL laboratory cleaning",
    "library cleaning 24/7",
    "APUC framework cleaning",
    "Maundy Clean university",
  ],
  openGraph: {
    title: universityCampusCleaning.metaTitle,
    description: universityCampusCleaning.metaDescription,
    type: "website",
    images: [{ url: universityCampusCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${universityCampusCleaning.slug}` },
};

export default function UniversityCampusCleaningPage() {
  const service = universityCampusCleaning;
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

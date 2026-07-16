import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { graffitiRemoval } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: graffitiRemoval.metaTitle,
  description: graffitiRemoval.metaDescription,
  keywords: [
    "graffiti removal Scotland",
    "graffiti removal Edinburgh",
    "graffiti removal Glasgow",
    "graffiti cleaner",
    "spray paint removal",
    "anti-graffiti coating",
    "vandalism cleaning Scotland",
    "listed building graffiti removal",
    "Maundy Clean graffiti",
  ],
  openGraph: {
    title: graffitiRemoval.metaTitle,
    description: graffitiRemoval.metaDescription,
    type: "website",
    images: [{ url: graffitiRemoval.heroImage }],
  },
  alternates: { canonical: `/services/${graffitiRemoval.slug}` },
};

export default function GraffitiRemovalPage() {
  const service = graffitiRemoval;
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

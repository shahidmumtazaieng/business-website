import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { fridgeCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: fridgeCleaning.metaTitle,
  description: fridgeCleaning.metaDescription,
  keywords: [
    "fridge cleaning Scotland",
    "fridge cleaner Edinburgh",
    "fridge cleaner Glasgow",
    "fridge cleaning service",
    "food-safe fridge cleaning",
    "fridge sanitisation",
    "freezer cleaning",
    "American fridge freezer cleaning",
    "Maundy Clean fridges",
  ],
  openGraph: {
    title: fridgeCleaning.metaTitle,
    description: fridgeCleaning.metaDescription,
    type: "website",
    images: [{ url: fridgeCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${fridgeCleaning.slug}` },
};

export default function FridgeCleaningPage() {
  const service = fridgeCleaning;
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

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { LocationHero } from "@/components/location-detail/location-hero";
import { LocationOverview } from "@/components/location-detail/location-overview";
import { LocationStats } from "@/components/location-detail/location-stats";
import { LocationAreas } from "@/components/location-detail/location-areas";
import { LocationServices } from "@/components/location-detail/location-services";
import { LocationProcess } from "@/components/location-detail/location-process";
import { LocationTestimonials } from "@/components/location-detail/location-testimonials";
import { LocationGallery } from "@/components/location-detail/location-gallery";
import { LocationFaq } from "@/components/location-detail/location-faq";
import { LocationNearby } from "@/components/location-detail/location-nearby";
import { LocationFinalCta } from "@/components/location-detail/location-final-cta";
import { fort_william } from "@/lib/location-detail-data";

export const metadata: Metadata = {
  title: fort_william.metaTitle,
  description: fort_william.metaDescription,
  keywords: [
    "cleaning services Fort William",
    "Fort William cleaners",
    "house cleaning Fort William",
    "commercial cleaning Fort William",
    "deep clean Fort William",
    "move out cleaning Fort William",
    "PVG-checked cleaners Fort William",
    "recurring cleaning Fort William",
    "holiday let cleaning Fort William",
    "Maundy Clean Fort William",
  ],
  openGraph: {
    title: fort_william.metaTitle,
    description: fort_william.metaDescription,
    type: "website",
    images: [{ url: fort_william.heroImage }],
  },
  alternates: { canonical: `/locations/fort-william` },
};

export default function FortWilliamPage() {
  const location = fort_william;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <LocationHero location={location} />
        <LocationOverview location={location} />
        <LocationStats location={location} />
        <LocationAreas location={location} />
        <LocationServices location={location} />
        <LocationProcess location={location} />
        <LocationTestimonials location={location} />
        <LocationGallery location={location} />
        <LocationFaq location={location} />
        <LocationNearby location={location} />
        <LocationFinalCta location={location} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

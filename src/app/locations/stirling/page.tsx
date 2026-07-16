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
import { stirling } from "@/lib/location-detail-data";

export const metadata: Metadata = {
  title: stirling.metaTitle,
  description: stirling.metaDescription,
  keywords: [
    "cleaning services Stirling",
    "Stirling cleaners",
    "house cleaning Stirling",
    "commercial cleaning Stirling",
    "deep clean Stirling",
    "move out cleaning Stirling",
    "PVG-checked cleaners Stirling",
    "recurring cleaning Stirling",
    "holiday let cleaning Stirling",
    "Maundy Clean Stirling",
  ],
  openGraph: {
    title: stirling.metaTitle,
    description: stirling.metaDescription,
    type: "website",
    images: [{ url: stirling.heroImage }],
  },
  alternates: { canonical: `/locations/stirling` },
};

export default function StirlingPage() {
  const location = stirling;
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

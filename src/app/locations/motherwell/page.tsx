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
import { motherwell } from "@/lib/location-detail-data";

export const metadata: Metadata = {
  title: motherwell.metaTitle,
  description: motherwell.metaDescription,
  keywords: [
    "cleaning services Motherwell",
    "Motherwell cleaners",
    "house cleaning Motherwell",
    "commercial cleaning Motherwell",
    "deep clean Motherwell",
    "move out cleaning Motherwell",
    "PVG-checked cleaners Motherwell",
    "recurring cleaning Motherwell",
    "holiday let cleaning Motherwell",
    "Maundy Clean Motherwell",
  ],
  openGraph: {
    title: motherwell.metaTitle,
    description: motherwell.metaDescription,
    type: "website",
    images: [{ url: motherwell.heroImage }],
  },
  alternates: { canonical: `/locations/motherwell` },
};

export default function MotherwellPage() {
  const location = motherwell;
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

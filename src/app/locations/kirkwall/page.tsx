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
import { kirkwall } from "@/lib/location-detail-data";

export const metadata: Metadata = {
  title: kirkwall.metaTitle,
  description: kirkwall.metaDescription,
  keywords: [
    "cleaning services Kirkwall (Orkney)",
    "Kirkwall (Orkney) cleaners",
    "house cleaning Kirkwall (Orkney)",
    "commercial cleaning Kirkwall (Orkney)",
    "deep clean Kirkwall (Orkney)",
    "move out cleaning Kirkwall (Orkney)",
    "PVG-checked cleaners Kirkwall (Orkney)",
    "recurring cleaning Kirkwall (Orkney)",
    "holiday let cleaning Kirkwall (Orkney)",
    "Maundy Clean Kirkwall (Orkney)",
  ],
  openGraph: {
    title: kirkwall.metaTitle,
    description: kirkwall.metaDescription,
    type: "website",
    images: [{ url: kirkwall.heroImage }],
  },
  alternates: { canonical: `/locations/kirkwall` },
};

export default function KirkwallPage() {
  const location = kirkwall;
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

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
import { lochgilphead } from "@/lib/location-detail-data";

export const metadata: Metadata = {
  title: lochgilphead.metaTitle,
  description: lochgilphead.metaDescription,
  keywords: [
    "cleaning services Lochgilphead",
    "Lochgilphead cleaners",
    "house cleaning Lochgilphead",
    "commercial cleaning Lochgilphead",
    "deep clean Lochgilphead",
    "move out cleaning Lochgilphead",
    "PVG-checked cleaners Lochgilphead",
    "recurring cleaning Lochgilphead",
    "holiday let cleaning Lochgilphead",
    "Maundy Clean Lochgilphead",
  ],
  openGraph: {
    title: lochgilphead.metaTitle,
    description: lochgilphead.metaDescription,
    type: "website",
    images: [{ url: lochgilphead.heroImage }],
  },
  alternates: { canonical: `/locations/lochgilphead` },
};

export default function LochgilpheadPage() {
  const location = lochgilphead;
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

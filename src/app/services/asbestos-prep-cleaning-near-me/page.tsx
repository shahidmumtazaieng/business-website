import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

// Near Me page components
import {
  AsbestosCleanupPrepNearMeHero,
  AsbestosCleanupPrepNearMeGrid,
  AsbestosCleanupPrepNearMeDispatch,
  AsbestosCleanupPrepNearMeCta,
  AsbestosCleanupPrepNearMeFaq,
} from "@/components/service-detail/asbestos-cleanup-prep-near-me-page";

import { asbestosPrepCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Asbestos Cleanup Prep Near Me | Maundy Clean",
  description: "Find your local Maundy Clean asbestos prep cleaning and decontamination team. Serving Glasgow, Edinburgh, Aberdeen, Dundee, and all surrounding Scottish areas with under 2-hour response times.",
  keywords: [
    "asbestos prep cleaning near me",
    "asbestos decontamination near me Scotland",
    "local emergency dust extraction",
    "post asbestos removal clean near me",
    "Maundy Clean asbestos prep",
  ],
  openGraph: {
    title: "Professional Asbestos Cleanup Prep Near Me | Maundy Clean",
    description: "Find your local Maundy Clean asbestos prep cleaning and decontamination team. Serving Glasgow, Edinburgh, Aberdeen, Dundee, and all surrounding Scottish areas with under 2-hour response times.",
    type: "website",
    images: [{ url: asbestosPrepCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${asbestosPrepCleaning.slug}-near-me` },
};

export default function AsbestosPrepCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <AsbestosCleanupPrepNearMeHero />
        <AsbestosCleanupPrepNearMeGrid />
        <AsbestosCleanupPrepNearMeDispatch />
        <AsbestosCleanupPrepNearMeCta />
        <AsbestosCleanupPrepNearMeFaq />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

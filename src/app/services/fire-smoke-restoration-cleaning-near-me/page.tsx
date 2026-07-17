import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

// Near Me page components
import {
  FireSmokeRestorationCleaningNearMeHero,
  FireSmokeRestorationCleaningNearMeGrid,
  FireSmokeRestorationCleaningNearMeDispatch,
  FireSmokeRestorationCleaningNearMeCta,
  FireSmokeRestorationCleaningNearMeFaq,
} from "@/components/service-detail/fire-smoke-restoration-cleaning-near-me-page";

import { fireSmokeRestorationCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Fire & Smoke Restoration Near Me | Maundy Clean",
  description: "Find your local Maundy Clean fire and smoke restoration team. Serving Glasgow, Edinburgh, Aberdeen, Dundee, and all surrounding Scottish areas with under 2-hour response times.",
  keywords: [
    "fire damage restoration near me",
    "smoke damage cleanup near me Scotland",
    "local emergency soot removal",
    "burst soot cleanup near me",
    "local post fire cleaners",
    "Maundy Clean fire damage",
  ],
  openGraph: {
    title: "Professional Fire & Smoke Restoration Near Me | Maundy Clean",
    description: "Find your local Maundy Clean fire and smoke restoration team. Serving Glasgow, Edinburgh, Aberdeen, Dundee, and all surrounding Scottish areas with under 2-hour response times.",
    type: "website",
    images: [{ url: fireSmokeRestorationCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${fireSmokeRestorationCleaning.slug}-near-me` },
};

export default function FireSmokeRestorationCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <FireSmokeRestorationCleaningNearMeHero />
        <FireSmokeRestorationCleaningNearMeGrid />
        <FireSmokeRestorationCleaningNearMeDispatch />
        <FireSmokeRestorationCleaningNearMeCta />
        <FireSmokeRestorationCleaningNearMeFaq />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

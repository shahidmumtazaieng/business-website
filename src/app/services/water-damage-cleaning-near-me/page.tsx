import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

// Near Me page components
import {
  WaterDamageCleaningNearMeHero,
  WaterDamageCleaningNearMeGrid,
  WaterDamageCleaningNearMeDispatch,
  WaterDamageCleaningNearMeCta,
  WaterDamageCleaningNearMeFaq,
} from "@/components/service-detail/water-damage-cleaning-near-me-page";

import { waterDamageCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Water Damage Restoration Near Me | Maundy Clean",
  description: "Find your local Maundy Clean water damage restoration and flood recovery team. Serving Glasgow, Edinburgh, Aberdeen, Dundee, and all surrounding Scottish areas with under 2-hour response times.",
  keywords: [
    "water damage cleaning near me",
    "flood restoration near me Scotland",
    "local emergency water removal",
    "burst pipe cleanup near me",
    "local flood cleaners",
    "Maundy Clean water damage",
  ],
  openGraph: {
    title: "Professional Water Damage Restoration Near Me | Maundy Clean",
    description: "Find your local Maundy Clean water damage restoration and flood recovery team. Serving Glasgow, Edinburgh, Aberdeen, Dundee, and all surrounding Scottish areas with under 2-hour response times.",
    type: "website",
    images: [{ url: waterDamageCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${waterDamageCleaning.slug}-near-me` },
};

export default function WaterDamageCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <WaterDamageCleaningNearMeHero />
        <WaterDamageCleaningNearMeGrid />
        <WaterDamageCleaningNearMeDispatch />
        <WaterDamageCleaningNearMeCta />
        <WaterDamageCleaningNearMeFaq />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

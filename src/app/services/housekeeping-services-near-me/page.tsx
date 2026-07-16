import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { HousekeepingNearMeHero } from "@/components/service-detail/housekeeping-near-me-page";

export const metadata: Metadata = {
  title: "Housekeeping Services Near Me in Scotland | Local Housekeepers | Maundy Clean",
  description:
    "Find local PVG-checked housekeepers across Scotland. Same trusted professional every visit, no contracts, child & pet-safe products. 72+ Scottish towns covered. Get your 30-second instant quote.",
  keywords: [
    "housekeeping services near me",
    "housekeeper near me Scotland",
    "local housekeeping service",
    "housekeeping near me Glasgow",
    "housekeeping near me Edinburgh",
    "housekeeping near me Aberdeen",
    "housekeeping near me Dundee",
    "recurring home cleaning near me",
    "weekly housekeeper near me",
    "local domestic housekeeping Scotland",
    "PVG-checked housekeeper near me",
    "Maundy Clean local housekeeping",
  ],
  openGraph: {
    title: "Housekeeping Services Near Me in Scotland | Local Housekeepers | Maundy Clean",
    description:
      "Find local PVG-checked housekeepers across Scotland. Same trusted professional every visit, no contracts, child & pet-safe products. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/housekeeping-services-near-me",
  },
};

export default function HousekeepingServicesNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HousekeepingNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

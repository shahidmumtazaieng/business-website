import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { RestaurantCleaningNearMeHero } from "@/components/service-detail/restaurant-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Restaurant Cleaning Near Me in Scotland | Local Vetted Uniformed Crews | Maundy Clean",
  description:
    "Find local vetted uniformed restaurant & bar cleaning crews across Scotland. Kitchen deep cleans, FOH sparkle, TR19 extraction, EHO-ready compliance, guest-safe eco supplies, 100% satisfaction guarantee. 72+ Scottish towns covered. From £16/hr.",
  keywords: [
    "restaurant cleaning near me",
    "bar cleaning near me Scotland",
    "pub cleaning company near me",
    "restaurant cleaning near me Glasgow",
    "restaurant cleaning near me Edinburgh",
    "restaurant cleaning near me Aberdeen",
    "restaurant cleaning near me Dundee",
    "after hours bar cleaning near me",
    "kitchen deep clean near me",
    "EHO inspection ready cleaning near me Scotland",
    "vetted uniformed restaurant cleaners near me",
    "professional restaurant cleaning company near me",
    "daily bar cleaning near me",
    "weekly restaurant cleaning near me",
    "Maundy Clean local restaurant cleaning",
  ],
  openGraph: {
    title: "Restaurant Cleaning Near Me in Scotland | Local Vetted Uniformed Crews | Maundy Clean",
    description:
      "Find local vetted uniformed restaurant & bar cleaning crews across Scotland. Kitchen deep cleans, FOH sparkle, TR19 extraction, EHO-ready compliance. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/restaurant-cleaning-near-me",
  },
};

export default function RestaurantCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <RestaurantCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

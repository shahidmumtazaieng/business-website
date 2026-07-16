import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { RetailStoreCleaningNearMeHero } from "@/components/service-detail/retail-store-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Retail Store Cleaning Near Me in Scotland | Local Vetted Uniformed Crews | Maundy Clean",
  description:
    "Find local vetted uniformed retail store cleaning crews across Scotland. Daily open & close, after-hours turnover, display-aware shop-floor care, till-zone disinfection, child-safe eco supplies, 100% satisfaction guarantee. 72+ Scottish towns covered. From £16/hr.",
  keywords: [
    "retail store cleaning near me",
    "shop cleaning near me Scotland",
    "retail cleaning company near me",
    "retail store cleaning near me Glasgow",
    "retail store cleaning near me Edinburgh",
    "retail store cleaning near me Aberdeen",
    "retail store cleaning near me Dundee",
    "after hours shop cleaning near me",
    "high street cleaning near me",
    "shopping centre cleaning near me Scotland",
    "vetted uniformed retail cleaners near me",
    "professional retail cleaning company near me",
    "daily shop cleaning near me",
    "weekly retail cleaning near me",
    "Maundy Clean local retail cleaning",
  ],
  openGraph: {
    title: "Retail Store Cleaning Near Me in Scotland | Local Vetted Uniformed Crews | Maundy Clean",
    description:
      "Find local vetted uniformed retail store cleaning crews across Scotland. Daily open & close, after-hours turnover, display-aware shop-floor care, till-zone disinfection. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/retail-store-cleaning-near-me",
  },
};

export default function RetailStoreCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <RetailStoreCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

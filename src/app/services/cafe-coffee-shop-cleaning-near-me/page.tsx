import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CafeCoffeeShopCleaningNearMeHero } from "@/components/service-detail/cafe-coffee-shop-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Café & Coffee Shop Cleaning Near Me in Scotland | Local Vetted Uniformed Crews | Maundy Clean",
  description:
    "Find local vetted uniformed café & coffee shop cleaning crews across Scotland. Daily open-close, weekly deep, espresso machine zone degrease, EHO-ready compliance, child-safe eco supplies, 100% satisfaction guarantee. 72+ Scottish towns covered. From £16/hr.",
  keywords: [
    "cafe cleaning near me",
    "coffee shop cleaning near me Scotland",
    "cafe cleaning company near me",
    "cafe cleaning near me Glasgow",
    "cafe cleaning near me Edinburgh",
    "cafe cleaning near me Aberdeen",
    "cafe cleaning near me Dundee",
    "after hours cafe cleaning near me",
    "espresso machine cleaning near me",
    "EHO inspection ready cafe cleaning near me Scotland",
    "vetted uniformed cafe cleaners near me",
    "professional cafe cleaning company near me",
    "daily cafe cleaning near me",
    "weekly cafe cleaning near me",
    "Maundy Clean local cafe cleaning",
  ],
  openGraph: {
    title: "Café & Coffee Shop Cleaning Near Me in Scotland | Local Vetted Uniformed Crews | Maundy Clean",
    description:
      "Find local vetted uniformed café & coffee shop cleaning crews across Scotland. Daily open-close, weekly deep, espresso machine zone degrease, EHO-ready compliance. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/cafe-coffee-shop-cleaning-near-me",
  },
};

export default function CafeCoffeeShopCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CafeCoffeeShopCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

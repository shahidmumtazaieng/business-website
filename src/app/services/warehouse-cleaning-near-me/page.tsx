import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { WarehouseCleaningNearMeHero } from "@/components/service-detail/warehouse-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Warehouse Cleaning Near Me in Scotland | Local CSCS & IPAF Crews | Maundy Clean",
  description:
    "Find local vetted, CSCS-carded, IPAF-certified warehouse and industrial cleaning crews across Scotland. HSE & COSHH compliant, ride-on sweepers, HEPA vacuums, scissor lifts, signed cleaning logs, 100% satisfaction guarantee. 72+ Scottish towns. From £14/hr.",
  keywords: [
    "warehouse cleaning near me",
    "warehouse cleaning near me Scotland",
    "industrial cleaning near me",
    "factory cleaning near me",
    "distribution centre cleaning near me",
    "logistics hub cleaning near me",
    "vetted warehouse cleaners near me",
    "warehouse cleaning near me Glasgow",
    "warehouse cleaning near me Edinburgh",
    "warehouse cleaning near me Aberdeen",
    "warehouse cleaning near me Dundee",
    "after hours warehouse cleaning near me",
    "CSCS warehouse cleaning near me",
    "IPAF industrial cleaning near me",
    "BRCGS warehouse cleaning near me",
    "cold storage cleaning near me",
    "professional warehouse cleaning company near me",
    "daily warehouse cleaning near me",
    "Maundy Clean local industrial cleaning",
  ],
  openGraph: {
    title: "Warehouse Cleaning Near Me in Scotland | Local CSCS & IPAF Crews | Maundy Clean",
    description:
      "Find local vetted, CSCS-carded, IPAF-certified warehouse and industrial cleaning crews across Scotland. HSE & COSHH compliant. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/warehouse-cleaning-near-me",
  },
};

export default function WarehouseCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <WarehouseCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

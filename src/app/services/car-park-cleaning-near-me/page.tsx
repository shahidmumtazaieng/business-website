import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CarParkCleaningNearMeHero } from "@/components/service-detail/car-park-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Car Park Cleaning Near Me in Scotland | Local DBS-Checked Crews | Maundy Clean",
  description:
    "Find local vetted, DBS-checked car park cleaning crews across Scotland. Multi-storey, underground & surface car parks. Oil removal, pressure washing, line marking refresh, wet-vac recovery, stairwell & lift sanitation, SEPA-compliant disposal, signed cleaning logs, 100% satisfaction guarantee. 72+ Scottish towns. From £14/hr.",
  keywords: [
    "car park cleaning near me",
    "car park cleaning near me Scotland",
    "multi-storey car park cleaning near me",
    "underground car park cleaning near me",
    "car park pressure washing near me",
    "oil stain removal car park near me",
    "vetted car park cleaners near me",
    "car park cleaning near me Glasgow",
    "car park cleaning near me Edinburgh",
    "car park cleaning near me Aberdeen",
    "car park cleaning near me Dundee",
    "surface car park cleaning near me",
    "shopping centre car park cleaning near me",
    "hospital car park cleaning near me",
    "transport hub car park cleaning near me",
    "retail park car park cleaning near me",
    "nightly car park cleaning near me",
    "DBS-checked car park cleaning near me",
    "Maundy Clean local car park cleaning",
  ],
  openGraph: {
    title: "Car Park Cleaning Near Me in Scotland | Local DBS-Checked Crews | Maundy Clean",
    description:
      "Find local vetted, DBS-checked car park cleaning crews across Scotland. Multi-storey, underground & surface car parks. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/car-park-cleaning-near-me",
  },
};

export default function CarParkCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CarParkCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

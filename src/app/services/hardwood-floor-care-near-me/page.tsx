import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { HardwoodFloorNearMeHero } from "@/components/service-detail/hardwood-floor-care-near-me-page";

export const metadata: Metadata = {
  title: "Hardwood Floor Care Services Near Me in Scotland | Local Material-Trained Crews | Maundy Clean",
  description:
    "Find local material-trained hardwood floor care technicians across Scotland. Solid timber, engineered wood, laminate, parquet & herringbone. Ultra-low moisture cleaning, polishing, screening, full sanding & refinishing. Same trusted professional every visit, 100% satisfaction guarantee, 5-10 year guarantee on full refinish. 72+ Scottish towns covered. From £18/hr.",
  keywords: [
    "hardwood floor cleaning near me",
    "wood floor cleaning near me Scotland",
    "wood floor restoration near me",
    "hardwood floor care near me Glasgow",
    "hardwood floor care near me Edinburgh",
    "hardwood floor care near me Aberdeen",
    "hardwood floor care near me Dundee",
    "wood floor sanding near me",
    "floor sanding near me Edinburgh",
    "pine board restoration near me",
    "engineered wood cleaning near me",
    "laminate floor cleaning near me",
    "herringbone parquet sanding near me",
    "wood floor polishing near me Scotland",
    "Maundy Clean local hardwood floor care",
  ],
  openGraph: {
    title: "Hardwood Floor Care Services Near Me in Scotland | Local Material-Trained Crews | Maundy Clean",
    description:
      "Find local material-trained hardwood floor care technicians across Scotland. Solid timber, engineered wood, laminate, parquet & herringbone. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/hardwood-floor-care-near-me",
  },
};

export default function HardwoodFloorCareNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HardwoodFloorNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { VctFloorCareNearMeHero } from "@/components/service-detail/vct-floor-care-near-me-page";

export const metadata: Metadata = {
  title:
    "VCT Floor Care Services Near Me in Scotland | Local VCT-Trained Specialists | Maundy Clean",
  description:
    "Find local vetted, PVG-checked VCT floor care specialists across Scotland. VCT stripping and refinishing, high-solids metal-interlock polish, multi-layer waxing, high-speed burnishing, slip-resistant treatment, eco-friendly products, 5-10 year guarantee. 36+ Scottish towns. From £4/m². 4.9★.",
  keywords: [
    "VCT floor care near me",
    "VCT stripping near me",
    "VCT refinishing near me Scotland",
    "VCT strip and refinish near me Glasgow",
    "commercial VCT burnish near me Edinburgh",
    "VCT floor care near me Aberdeen",
    "VCT floor care near me Dundee",
    "high-speed burnishing near me",
    "multi-layer waxing near me",
    "high-solids sealer near me",
    "slip-resistant VCT polish near me",
    "vetted VCT specialists near me",
    "Maundy Clean local VCT care",
  ],
  openGraph: {
    title:
      "VCT Floor Care Services Near Me in Scotland | Local VCT-Trained Specialists | Maundy Clean",
    description:
      "Find local vetted, PVG-checked VCT floor care specialists across Scotland. Stripping, refinishing, multi-layer waxing, high-speed burnishing, slip-resistant treatment. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/vct-floor-care.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/vct-floor-care-near-me",
  },
};

export default function VctFloorCareNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <VctFloorCareNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

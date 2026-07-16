import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { FloorCareStrippingNearMeHero } from "@/components/service-detail/floor-care-stripping-near-me-page";

export const metadata: Metadata = {
  title:
    "Floor Care & Stripping Services Near Me in Scotland | Local Material-Trained Specialists | Maundy Clean",
  description:
    "Find local vetted, PVG-checked floor care specialists across Scotland. Floor stripping and re-sealing, diamond-grit restoration, marble and natural stone polishing, terrazzo honing, wood floor preservation, anti-slip treatment, eco-friendly products, 5-10 year guarantee. 36+ Scottish towns. From £4/m². 4.9★.",
  keywords: [
    "floor care near me",
    "floor stripping near me",
    "floor refinishing near me Scotland",
    "VCT strip and refinish near me Glasgow",
    "marble floor restoration near me Edinburgh",
    "floor stripping near me Aberdeen",
    "floor care near me Dundee",
    "terrazzo diamond polish near me",
    "wood floor preservation near me",
    "commercial vinyl stripping near me",
    "anti-slip floor treatment near me",
    "heritage floor restoration near me",
    "vetted floor care specialists near me",
    "Maundy Clean local floor care",
  ],
  openGraph: {
    title:
      "Floor Care & Stripping Services Near Me in Scotland | Local Material-Trained Specialists | Maundy Clean",
    description:
      "Find local vetted, PVG-checked floor care specialists across Scotland. Stripping, refinishing, diamond-grit restoration, wood floor preservation, anti-slip treatment. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/floor-care-stripping.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/floor-care-stripping-near-me",
  },
};

export default function FloorCareStrippingNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <FloorCareStrippingNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

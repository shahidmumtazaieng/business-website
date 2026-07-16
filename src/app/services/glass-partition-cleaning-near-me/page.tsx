import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { GlassPartitionCleaningNearMeHero } from "@/components/service-detail/glass-partition-cleaning-near-me-page";

export const metadata: Metadata = {
  title:
    "Glass Partition Cleaning Services Near Me in Scotland | Local PVG-Checked Specialists | Maundy Clean",
  description:
    "Find local vetted, PVG-checked glass partition cleaning specialists across Scotland. Pure-water de-ionised systems, Reach-and-Wash telescopic poles, Rope Access, Mobile Platforms, squeegee-buff finishing, frame and track detailing, mirror restoration, fascia and gutter refresh, ISO 14001 compliance. 36+ Scottish towns. From £14/hr. 4.9★.",
  keywords: [
    "glass partition cleaning near me",
    "glass partition cleaning near me Scotland",
    "glass partition cleaning near me Glasgow",
    "glass partition cleaning near me Edinburgh",
    "glass partition cleaning near me Aberdeen",
    "glass partition cleaning near me Dundee",
    "internal glazing cleaning near me",
    "office glass cleaning near me",
    "Reach and Wash near me",
    "Rope Access glass cleaning near me",
    "mirror restoration near me",
    "vetted glass specialists near me",
    "Maundy Clean local glass care",
  ],
  openGraph: {
    title:
      "Glass Partition Cleaning Services Near Me in Scotland | Local PVG-Checked Specialists | Maundy Clean",
    description:
      "Find local vetted, PVG-checked glass partition cleaning specialists across Scotland. Pure-water systems, Reach-and-Wash poles, Rope Access, squeegee-buff finishing. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/glass-partition-cleaning-near-me",
  },
};

export default function GlassPartitionCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <GlassPartitionCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

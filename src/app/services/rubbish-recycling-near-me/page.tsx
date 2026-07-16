import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { RubbishRecyclingNearMeHero } from "@/components/service-detail/rubbish-recycling-near-me-page";

export const metadata: Metadata = {
  title:
    "Rubbish & Recycling Services Near Me in Scotland | Local Vetted Waste Crews | Maundy Clean",
  description:
    "Find local vetted, PVG-checked waste & recycling crews across Scotland. Commercial recycling, specialist rubbish clearance, food waste to energy, bin store sanitisation, waste audit reporting, PAS 402-aligned recycling rates, zero waste to landfill strategies, SEPA-licensed carriers, emergency cover, fixed monthly retainer. 36+ Scottish towns. From £8/collection. 4.9★.",
  keywords: [
    "rubbish and recycling near me",
    "commercial waste collection near me",
    "waste management near me Scotland",
    "recycling services near me Glasgow",
    "recycling services near me Edinburgh",
    "recycling services near me Aberdeen",
    "recycling services near me Dundee",
    "commercial recycling near me",
    "waste audit near me",
    "zero waste to landfill near me",
    "SEPA licensed waste carriers near me",
    "vetted waste crew near me",
    "Maundy Clean local rubbish & recycling",
  ],
  openGraph: {
    title:
      "Rubbish & Recycling Services Near Me in Scotland | Local Vetted Waste Crews | Maundy Clean",
    description:
      "Find local vetted, PVG-checked waste & recycling crews across Scotland. Commercial recycling, specialist rubbish clearance, food waste to energy, bin store sanitisation, PAS 402-aligned recycling rates. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/rubbish-recycling-near-me",
  },
};

export default function RubbishRecyclingNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <RubbishRecyclingNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

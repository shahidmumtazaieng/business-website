import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { TileGroutNearMeHero } from "@/components/service-detail/tile-grout-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Tile & Grout Cleaning Services Near Me in Scotland | Local Material-Trained Crews | Maundy Clean",
  description:
    "Find local material-trained tile & grout cleaning technicians across Scotland. Ceramic, porcelain, stone & Victorian tiles restored. High-pressure extraction, precision grout re-colour in 12 shades, sealing & surface protection. Same trusted professional every visit, 100% satisfaction guarantee. 72+ Scottish towns covered. From £149 per room.",
  keywords: [
    "tile and grout cleaning near me",
    "grout cleaning near me Scotland",
    "grout recolour near me",
    "tile cleaning near me Glasgow",
    "tile cleaning near me Edinburgh",
    "tile cleaning near me Aberdeen",
    "tile cleaning near me Dundee",
    "grout restoration near me Glasgow",
    "grout restoration near me Edinburgh",
    "Victorian tile restoration near me",
    "ceramic tile cleaning Scotland",
    "porcelain tile cleaning near me",
    "natural stone floor cleaning near me",
    "marble floor cleaning near me",
    "material-trained tile cleaning near me",
    "Maundy Clean local tile cleaning",
  ],
  openGraph: {
    title: "Tile & Grout Cleaning Services Near Me in Scotland | Local Material-Trained Crews | Maundy Clean",
    description:
      "Find local material-trained tile & grout cleaning technicians across Scotland. Ceramic, porcelain, stone & Victorian tiles restored. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/tile-grout-cleaning-near-me",
  },
};

export default function TileGroutCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <TileGroutNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

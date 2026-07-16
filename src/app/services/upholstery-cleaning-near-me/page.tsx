import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { UpholsteryNearMeHero } from "@/components/service-detail/upholstery-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Upholstery & Sofa Cleaning Near Me in Scotland | Local Fibre-Matched Technicians | Maundy Clean",
  description:
    "Find local fibre-matched upholstery and sofa cleaning technicians across Scotland. Hot-water extraction, leather conditioning, velvet & viscose care, stain removal. Same trusted professional every visit, 100% re-clean guarantee. 72+ Scottish towns covered. From £69/item.",
  keywords: [
    "upholstery cleaning near me",
    "sofa cleaning near me Scotland",
    "local upholstery cleaning service",
    "upholstery cleaning near me Glasgow",
    "upholstery cleaning near me Edinburgh",
    "upholstery cleaning near me Aberdeen",
    "upholstery cleaning near me Dundee",
    "sofa cleaning near me Glasgow",
    "sofa cleaning near me Edinburgh",
    "leather sofa cleaning near me",
    "fabric sofa cleaning Scotland",
    "hot-water extraction upholstery near me",
    "fibre-matched upholstery cleaner near me",
    "Maundy Clean local upholstery cleaning",
  ],
  openGraph: {
    title: "Upholstery & Sofa Cleaning Near Me in Scotland | Local Fibre-Matched Technicians | Maundy Clean",
    description:
      "Find local fibre-matched upholstery and sofa cleaning technicians across Scotland. Hot-water extraction, leather conditioning, velvet & viscose care. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/upholstery-cleaning-near-me",
  },
};

export default function UpholsteryCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <UpholsteryNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

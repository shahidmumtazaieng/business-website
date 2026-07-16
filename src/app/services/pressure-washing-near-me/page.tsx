import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { PressureWashingNearMeHero } from "@/components/service-detail/pressure-washing-near-me-page";

export const metadata: Metadata = {
  title: "Pressure Washing Services Near Me in Scotland | Local Substrate-Trained Crews | Maundy Clean",
  description:
    "Find local substrate-trained pressure washing technicians across Scotland. Driveways, patios, decking, render & sandstone restored. Rotary surface cleaners, biocidal pre-treatment, re-sanding & sealing included. Same trusted professional every visit, 100% re-clean guarantee. 72+ Scottish towns covered. From £3.50/m².",
  keywords: [
    "pressure washing near me",
    "driveway cleaning near me Scotland",
    "local pressure washing service",
    "pressure washing near me Glasgow",
    "pressure washing near me Edinburgh",
    "pressure washing near me Aberdeen",
    "pressure washing near me Dundee",
    "patio cleaning near me Glasgow",
    "patio cleaning near me Edinburgh",
    "render cleaning near me",
    "block paving cleaning Scotland",
    "rotary surface cleaner near me",
    "exterior cleaning near me",
    "substrate-trained pressure washing near me",
    "Maundy Clean local pressure washing",
  ],
  openGraph: {
    title: "Pressure Washing Services Near Me in Scotland | Local Substrate-Trained Crews | Maundy Clean",
    description:
      "Find local substrate-trained pressure washing technicians across Scotland. Driveways, patios, decking, render & sandstone restored. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/pressure-washing-near-me",
  },
};

export default function PressureWashingNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PressureWashingNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { BlindShadeNearMeHero } from "@/components/service-detail/blind-shade-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Blind & Shade Cleaning Services Near Me in Scotland | Local Material-Trained Crews | Maundy Clean",
  description:
    "Find local material-trained blind & shade cleaning technicians across Scotland. Venetian, roller, vertical, Roman, pleated, honeycomb & plantation shutters. Ultrasonic and hand-clean. Free collection & delivery. Same trusted professional every visit, 100% satisfaction guarantee. 72+ Scottish towns covered. From £15/blind.",
  keywords: [
    "blind cleaning near me",
    "venetian blind cleaning near me Scotland",
    "blind cleaning near me Glasgow",
    "blind cleaning near me Edinburgh",
    "blind cleaning near me Aberdeen",
    "blind cleaning near me Dundee",
    "roman blind cleaning near me",
    "roller blind cleaning near me",
    "vertical blind cleaning near me",
    "plantation shutter cleaning near me",
    "pleated blind cleaning near me",
    "honeycomb blind cleaning near me",
    "ultrasonic blind cleaning near me",
    "wooden blind cleaning near me Scotland",
    "Maundy Clean local blind cleaning",
  ],
  openGraph: {
    title: "Blind & Shade Cleaning Services Near Me in Scotland | Local Material-Trained Crews | Maundy Clean",
    description:
      "Find local material-trained blind & shade cleaning technicians across Scotland. Venetian, roller, vertical, Roman, pleated, honeycomb & plantation shutters. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/blind-shade-cleaning-near-me",
  },
};

export default function BlindShadeCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <BlindShadeNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { WindowNearMeHero } from "@/components/service-detail/window-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Window Cleaning Near Me in Scotland | Local Reach & Wash Technicians | Maundy Clean",
  description:
    "Find local pure-water Reach & Wash window cleaning technicians across Scotland. Deionised water, frames & sills included, tenement & listed-building specialists. Same trusted professional every visit, 100% satisfaction guarantee. 72+ Scottish towns covered. From £14/visit.",
  keywords: [
    "window cleaning near me",
    "window cleaners near me Scotland",
    "local window cleaning service",
    "window cleaning near me Glasgow",
    "window cleaning near me Edinburgh",
    "window cleaning near me Aberdeen",
    "window cleaning near me Dundee",
    "window cleaners near me Glasgow",
    "window cleaners near me Edinburgh",
    "tenement window cleaning near me",
    "pure water window cleaning Scotland",
    "reach and wash window cleaning near me",
    "commercial window cleaning near me",
    "Maundy Clean local window cleaning",
  ],
  openGraph: {
    title: "Window Cleaning Near Me in Scotland | Local Reach & Wash Technicians | Maundy Clean",
    description:
      "Find local pure-water Reach & Wash window cleaning technicians across Scotland. Deionised water, frames & sills included. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/window-cleaning-near-me",
  },
};

export default function WindowCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <WindowNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

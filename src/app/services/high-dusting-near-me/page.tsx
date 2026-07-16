import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { HighDustingNearMeHero } from "@/components/service-detail/high-dusting-near-me-page";

export const metadata: Metadata = {
  title:
    "High-Level Dusting Services Near Me in Scotland | Local IPAF-Certified Specialists | Maundy Clean",
  description:
    "Find local vetted, IPAF-certified high-level dusting specialists across Scotland. MEWP cherry-picker and scissor-lift access, carbon-fibre telescopic poles for delicate surfaces, HEPA H-class vacuum capture, ductwork cleaning, beam & truss detail, light fixture restoration, defect reporting. 36+ Scottish towns. From £395/visit. 4.9★.",
  keywords: [
    "high dusting near me",
    "high-level dusting near me Scotland",
    "high-level dusting near me Glasgow",
    "high-level dusting near me Edinburgh",
    "high dusting near me Aberdeen",
    "high dusting near me Dundee",
    "MEWP cherry-picker cleaning near me",
    "scissor-lift cleaning near me",
    "carbon-fibre telescopic pole near me",
    "HEPA H-class vacuum high dusting near me",
    "ductwork cleaning near me",
    "warehouse high dusting near me",
    "vetted IPAF-certified specialists near me",
    "Maundy Clean local high dusting",
  ],
  openGraph: {
    title:
      "High-Level Dusting Services Near Me in Scotland | Local IPAF-Certified Specialists | Maundy Clean",
    description:
      "Find local vetted, IPAF-certified high-level dusting specialists across Scotland. MEWP access, carbon-fibre poles, HEPA H-class vacuum, ductwork cleaning, beam & truss detail, defect reporting. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/high-dusting-near-me",
  },
};

export default function HighDustingNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HighDustingNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

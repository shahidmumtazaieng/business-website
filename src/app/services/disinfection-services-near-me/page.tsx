import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { DisinfectionServicesNearMeHero } from "@/components/service-detail/disinfection-services-near-me-page";

export const metadata: Metadata = {
  title: "Disinfection & Antiviral Sanitisation Services Near Me in Scotland | Local EN 14476 Specialists | Maundy Clean",
  description:
    "Find local EN 14476 virucidal disinfection crews across Scotland. Electrostatic fogging, ULV outbreak response, 4-hour callout, 99.99% efficacy, 30-day protection, child-safe eco supplies, 100% satisfaction guarantee. 72+ Scottish towns covered. From £180/visit.",
  keywords: [
    "disinfection services near me",
    "antiviral sanitisation near me Scotland",
    "disinfection company near me",
    "disinfection services near me Glasgow",
    "disinfection services near me Edinburgh",
    "disinfection services near me Aberdeen",
    "disinfection services near me Dundee",
    "outbreak fogging near me",
    "electrostatic disinfection near me",
    "ULV fogging near me Scotland",
    "EN 14476 virucidal near me",
    "office disinfection near me",
    "school disinfection near me",
    "nursery sanitisation near me",
    "Maundy Clean local disinfection",
  ],
  openGraph: {
    title: "Disinfection & Antiviral Sanitisation Services Near Me in Scotland | Local EN 14476 Specialists | Maundy Clean",
    description:
      "Find local EN 14476 virucidal disinfection crews across Scotland. Electrostatic fogging, ULV outbreak response, 4-hour callout, 99.99% efficacy. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/disinfection-services-near-me",
  },
};

export default function DisinfectionServicesNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <DisinfectionServicesNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { OdourRemovalNearMeHero } from "@/components/service-detail/odour-removal-near-me-page";

export const metadata: Metadata = {
  title: "Odour Removal Near Me in Scotland | Maundy Clean",
  description: "Find certified, discreet, and HSE-compliant odour elimination and air quality restoration crews in your local Scottish town or city. 2-hour response across the Central Belt.",
  keywords: [
    "odour removal near me",
    "deodorisation Scotland",
    "ozone treatment near me",
    "smoke odour removal near me",
    "local odour neutralisation",
    "Maundy Clean odour locations",
  ],
  openGraph: {
    title: "Odour Removal Near Me in Scotland | Maundy Clean",
    description: "Find certified, discreet, and HSE-compliant odour elimination and air quality restoration crews in your local area.",
    type: "website",
    images: [{ url: "https://sfile.chatglm.cn/images-ppt/biohazard-cleaning.jpg" }],
  },
  alternates: { canonical: "/services/odour-removal-near-me" },
};

export default function OdourRemovalNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <OdourRemovalNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CarpetRugNearMeHero } from "@/components/service-detail/carpet-rug-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Carpet & Rug Cleaning Near Me in Scotland | Local NCCA-Certified Technicians | Maundy Clean",
  description:
    "Find local NCCA & WoolSafe certified carpet and rug cleaning technicians across Scotland. Hot-water extraction, wool-safe low-moisture, and full-immersion rug bathing. Same trusted professional every visit, 100% re-clean guarantee. 72+ Scottish towns covered. From £18/room.",
  keywords: [
    "carpet cleaning near me",
    "rug cleaning near me Scotland",
    "local carpet cleaning service",
    "carpet cleaning near me Glasgow",
    "carpet cleaning near me Edinburgh",
    "carpet cleaning near me Aberdeen",
    "carpet cleaning near me Dundee",
    "rug cleaning near me Glasgow",
    "rug cleaning near me Edinburgh",
    "Persian rug cleaning near me",
    "wool carpet cleaning Scotland",
    "hot-water extraction near me",
    "NCCA certified carpet cleaner near me",
    "Maundy Clean local carpet cleaning",
  ],
  openGraph: {
    title: "Carpet & Rug Cleaning Near Me in Scotland | Local NCCA-Certified Technicians | Maundy Clean",
    description:
      "Find local NCCA & WoolSafe certified carpet and rug cleaning technicians across Scotland. Hot-water extraction, wool-safe low-moisture, and full-immersion rug bathing. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
      },
    ],
  },
  alternates: {
    canonical: "/services/carpet-rug-cleaning-near-me",
  },
};

export default function CarpetRugCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CarpetRugNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

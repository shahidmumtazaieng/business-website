import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { DistributionCentreCleaningNearMeHero } from "@/components/service-detail/distribution-centre-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Distribution Centre Cleaning Near Me in Scotland | Local MHE-Aware Crews | Maundy Clean",
  description:
    "Find local vetted, MHE-aware, IPAF-certified distribution centre and logistics cleaning crews across Scotland. HSE & BRCGS compliant, ride-on sweepers, scrubber-dryers, HEPA vacuums, scissor lifts, confined-space entry for silos, signed cleaning logs, 100% satisfaction guarantee. 72+ Scottish towns. From £17/hr.",
  keywords: [
    "distribution centre cleaning near me",
    "distribution centre cleaning near me Scotland",
    "DC cleaning near me",
    "logistics hub cleaning near me",
    "fulfilment centre cleaning near me",
    "RDC cleaning near me",
    "vetted distribution centre cleaners near me",
    "distribution centre cleaning near me Glasgow",
    "distribution centre cleaning near me Edinburgh",
    "distribution centre cleaning near me Aberdeen",
    "distribution centre cleaning near me Dundee",
    "after hours distribution centre cleaning near me",
    "MHE-aware distribution centre cleaning near me",
    "IPAF distribution centre cleaning near me",
    "BRCGS distribution centre cleaning near me",
    "cold store cleaning near me",
    "professional distribution centre cleaning company near me",
    "nightly distribution centre cleaning near me",
    "Maundy Clean local logistics cleaning",
  ],
  openGraph: {
    title: "Distribution Centre Cleaning Near Me in Scotland | Local MHE-Aware Crews | Maundy Clean",
    description:
      "Find local vetted, MHE-aware, IPAF-certified distribution centre and logistics cleaning crews across Scotland. HSE & BRCGS compliant. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/distribution-centre-cleaning-near-me",
  },
};

export default function DistributionCentreCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <DistributionCentreCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

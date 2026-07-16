import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { BankFinancialOfficeCleaningNearMeHero } from "@/components/service-detail/bank-financial-office-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Bank & Financial Office Cleaning Near Me in Scotland | Local Vetted Security-Cleared Crews | Maundy Clean",
  description:
    "Find local vetted, uniformed, security-cleared bank & financial office cleaning crews across Scotland. PCI-DSS-aware, GDPR-aligned protocols, dual-control keyholding, £10m public liability, signed cleaning logs, 100% satisfaction guarantee. 72+ Scottish towns covered. From £19/hr.",
  keywords: [
    "bank cleaning near me",
    "financial office cleaning near me Scotland",
    "bank cleaning company near me",
    "bank cleaning near me Glasgow",
    "bank cleaning near me Edinburgh",
    "bank cleaning near me Aberdeen",
    "bank cleaning near me Dundee",
    "after hours bank cleaning near me",
    "PCI-DSS aware bank cleaning near me",
    "GDPR aligned financial office cleaning near me Scotland",
    "dual control keyholding bank cleaning near me",
    "vetted security-cleared bank cleaners near me",
    "professional bank cleaning company near me",
    "daily bank cleaning near me",
    "weekly bank cleaning near me",
    "building society cleaning near me",
    "fintech office cleaning near me",
    "Maundy Clean local bank cleaning",
  ],
  openGraph: {
    title: "Bank & Financial Office Cleaning Near Me in Scotland | Local Vetted Security-Cleared Crews | Maundy Clean",
    description:
      "Find local vetted, uniformed, security-cleared bank & financial office cleaning crews across Scotland. PCI-DSS-aware, GDPR-aligned protocols, dual-control keyholding, £10m public liability. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/bank-financial-office-cleaning-near-me",
  },
};

export default function BankFinancialOfficeCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <BankFinancialOfficeCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

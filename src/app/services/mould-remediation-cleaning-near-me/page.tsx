import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import {
  MouldRemediationNearMeHero,
  MouldRemediationNearMeGrid,
  MouldRemediationNearMeDispatch,
  MouldRemediationNearMeCta,
  MouldRemediationNearMeFaq,
} from "@/components/service-detail/mould-remediation-near-me-page";

export const metadata: Metadata = {
  title: "Mould Remediation Near Me | Local Mould Cleaning Scotland | Maundy Clean",
  description:
    "Find professional mould remediation near you in Scotland. Maundy Clean offers local mould cleaning, biological spore containment, and damp treatments across Glasgow, Edinburgh, Aberdeen, Dundee, and surrounding areas.",
  keywords: [
    "mould remediation near me",
    "mould cleaning near me",
    "local black mould removal Scotland",
    "black mould clean Glasgow",
    "black mould clean Edinburgh",
    "Maundy Clean mould near me",
  ],
  alternates: { canonical: "/services/mould-remediation-cleaning-near-me" },
};

export default function MouldRemediationNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Step 1: Near Me Hero */}
        <MouldRemediationNearMeHero />

        {/* Step 2: Diagnostic Dispatch Side-by-Side */}
        <MouldRemediationNearMeDispatch />

        {/* Step 3: Interactive Location Grid & Postcodes */}
        <MouldRemediationNearMeGrid />

        {/* Step 4: Mid-Page Conversion Banner */}
        <MouldRemediationNearMeCta />

        {/* Step 5: Expandable FAQ */}
        <MouldRemediationNearMeFaq />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

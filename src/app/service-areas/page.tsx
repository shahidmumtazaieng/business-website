import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CompanyPageHero } from "@/components/company/company-hero";
import {
  CompanyFinalCta,
  CompanySectionHeader,
} from "@/components/company/company-sections";
import { locationCategories, IMG } from "@/lib/site-data";
import {
  MapPin,
  ArrowRight,
  Ship,
  Mountain,
  Building2,
  Trees,
  Factory,
  Sparkles,
  Clock,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | 72 Scottish Locations | Maundy Clean",
  description:
    "Maundy Clean serves 72 Scottish locations across 6 regions — from Glasgow and Edinburgh to Orkney, Shetland and the Hebrides. Same PVG-checked crew, same protocol, same 100% guarantee everywhere.",
  keywords: [
    "cleaning service areas Scotland",
    "Maundy Clean locations",
    "Scottish cleaning coverage",
    "Highlands cleaning",
    "island cleaning Scotland",
  ],
  alternates: { canonical: "/service-areas" },
};

const regionIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Greater Glasgow": Building2,
  "Edinburgh & Lothians": Sparkles,
  "Fife & Central": Trees,
  "Aberdeen & Grampian": Factory,
  "Highlands & Islands": Mountain,
  "Borders & South-West": Ship,
};

const coverageFeatures = [
  {
    icon: Shield,
    title: "Same protocol, everywhere",
    description:
      "Every location — from Partick to Portree — is served to the same 60-document written protocol. We don't cut corners in remote areas.",
  },
  {
    icon: Clock,
    title: "Same-day quotes",
    description:
      "Call us at 9am from Lerwick or Melrose and you'll have a written quote in your inbox within one business hour, 7 days a week.",
  },
  {
    icon: Ship,
    title: "Ferry-timetable-aware",
    description:
      "For Orkney, Shetland, Lewis and Skye, our crew scheduling is built around the CalMac and NorthLink ferry timetables. No missed turnarounds.",
  },
  {
    icon: Mountain,
    title: "Rural-aware routing",
    description:
      "Single-track roads, farm steadings, off-grid properties — our crews know rural Scotland. We factor in extra travel time, no surcharge.",
  },
];

export default function ServiceAreasPage() {
  const totalLocations = locationCategories.reduce(
    (acc, region) => acc + region.children.length,
    0,
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Service Areas"
          breadcrumb="Service Areas"
          title={
            <>
              {totalLocations} Scottish locations.
              <br />
              <span className="text-[var(--brand)]">One written protocol.</span>
            </>
          }
          subhead="From the tenements of Glasgow and the Georgian crescents of Edinburgh to the ferry-ports of Orkney, Shetland and the Hebrides — Maundy Clean delivers 98 specialist cleaning services across 6 Scottish regions. The same PVG-checked crew. The same eco-friendly chemistry. The same 100% satisfaction guarantee. Everywhere."
          image={IMG.highlands}
          imageAlt="Scotland landscape"
          stats={[
            { value: String(totalLocations), label: "Locations" },
            { value: "6", label: "Scottish regions" },
            { value: "4", label: "Island ferry-ports" },
            { value: "24/7", label: "Emergency response" },
          ]}
        />

        {/* ---------- COVERAGE FEATURES ---------- */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coverageFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="bg-white rounded-2xl p-6 border border-[var(--border)]"
                  >
                    <Icon className="w-8 h-8 text-[var(--brand)] mb-3" />
                    <div className="font-bold text-[var(--ink)] text-sm">{f.title}</div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">
                      {f.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- REGIONS GRID ---------- */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              align="center"
              eyebrow="Find your region"
              title={<>Six regions. {totalLocations} towns. One crew roster.</>}
              subhead="Every location below has its own dedicated landing page with the full 98-service catalog, local context, neighbourhood-level coverage notes, and client testimonials. Click any location to see what we deliver in your part of Scotland."
            />
            <div className="space-y-12 lg:space-y-16">
              {locationCategories.map((region) => {
                const Icon = regionIconMap[region.title] ?? MapPin;
                return (
                  <div key={region.title}>
                    <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-10 mb-6 items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-[var(--brand)]" />
                        </div>
                        <div>
                          <h3 className="font-display font-extrabold text-2xl text-[var(--ink)]">
                            {region.title}
                          </h3>
                          <div className="text-sm text-[var(--muted-foreground)]">
                            {region.children.length} locations
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {regionBlurb(region.title)}
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {region.children.map((loc) => (
                        <Link
                          key={loc.href}
                          href={loc.href}
                          className="group flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
                        >
                          <MapPin className="w-4 h-4 text-[var(--brand)] shrink-0" />
                          <span className="text-sm font-semibold text-[var(--ink)] flex-1 truncate group-hover:text-[var(--brand-dark)]">
                            {loc.name}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--muted-foreground)] group-hover:text-[var(--brand)] group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white font-semibold shadow-brand transition-colors"
              >
                Browse all {totalLocations} locations on one page
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Don't see your town? We probably still cover it."
          subhead="The list above is our named locations — but we clean across the entire Scottish mainland and islands. If you're in a village or hamlet not listed, give us a call. Chances are we have a crew passing through within the week."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

function regionBlurb(title: string): string {
  const blurbs: Record<string, string> = {
    "Greater Glasgow":
      "Scotland's largest metro — West End tenements, Merchant City flats, Newton Mearns suburbs and the Clyde corridor. Daily coverage, 7 days a week.",
    "Edinburgh & Lothians":
      "The capital and its commuting belt — New Town, Marchmont, Leith, Livingston new-town and the East Lothian coast. Listed-building-aware products throughout.",
    "Fife & Central":
      "The Kingdom of Fife, Forth Valley and Perthshire — Dunfermline, Kirkcaldy, St Andrews, Falkirk, Stirling, Perth. University towns, harbours, distilleries.",
    "Aberdeen & Grampian":
      "The Granite City and the north-east coast — oil-and-gas HQs, fishing ports, Royal Deeside. Energy-sector compliance and offshore-rotation-aware scheduling.",
    "Highlands & Islands":
      "Mainland Highlands plus Orkney, Shetland, Lewis and Skye. Ferry-timetable-aware scheduling, island-crew rotation, full coverage of Inverness and the north coast.",
    "Borders & South-West":
      "The Scottish Borders, Dumfries & Galloway and the Ayrshire coast — Galashiels, Melrose, Peebles, Dumfries, Ayr, Troon. Rural-aware routing throughout.",
  };
  return blurbs[title] ?? "Full Maundy Clean coverage — 98 services, same crew, same guarantee.";
}

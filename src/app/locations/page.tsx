import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { locationCategories, contactInfo } from "@/lib/site-data";
import {
  MapPin,
  ArrowRight,
  Phone,
  Star,
  Shield,
  Leaf,
  Clock,
  ChevronRight,
  Building2,
  Waves,
  Mountain,
  Trees,
  Factory,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cleaning Services Across 72 Scottish Locations | Maundy Clean",
  description:
    "From Glasgow and Edinburgh to the Highlands and Islands — Maundy Clean delivers 98 PVG-checked cleaning services across 72 Scottish locations. Same-day quotes, same crew every visit.",
  keywords: [
    "cleaning services Scotland",
    "Scottish cleaning companies",
    "cleaners near me Scotland",
    "Glasgow cleaners",
    "Edinburgh cleaners",
    "Aberdeen cleaners",
    "Dundee cleaners",
    "Inverness cleaners",
    "Highlands cleaning services",
    "Maundy Clean locations",
  ],
  openGraph: {
    title: "Cleaning Services Across 72 Scottish Locations | Maundy Clean",
    description:
      "From Glasgow and Edinburgh to the Highlands and Islands — 98 PVG-checked cleaning services across 72 Scottish locations. Same-day quotes, same crew every visit.",
    type: "website",
  },
  alternates: { canonical: "/locations" },
};

// Icon map for region headers
const regionIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Greater Glasgow": Building2,
  "Edinburgh & Lothians": Sparkles,
  "Fife & Central": Trees,
  "Aberdeen & Grampian": Factory,
  "Highlands & Islands": Mountain,
  "Borders & South-West": Waves,
};

const totalLocations = locationCategories.reduce(
  (acc, region) => acc + region.children.length,
  0,
);

const stats = [
  { value: String(totalLocations), label: "Scottish locations served" },
  { value: String(locationCategories.length), label: "Regions covered" },
  { value: "98", label: "Cleaning services available" },
  { value: "<1hr", label: "Average response time" },
];

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden bg-mesh pt-8 lg:pt-12 pb-16 lg:pb-24">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand)]/10 blur-3xl" />
          <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" />

          <div className="max-w-[1400px] mx-auto px-6 relative">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] mb-6">
              <Link href="/" className="hover:text-[var(--brand)] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[var(--ink)] font-semibold">Locations</span>
            </nav>

            <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
              {/* Left: copy */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-light)]/60 border border-[var(--brand)]/20 text-xs font-semibold text-[var(--brand-dark)] mb-5">
                  <MapPin className="w-3.5 h-3.5" />
                  {totalLocations} Scottish locations · Same-day quotes
                </div>

                <h1 className="font-display font-extrabold text-[40px] sm:text-[48px] lg:text-[60px] leading-[1.05] tracking-tight text-[var(--ink)]">
                  Cleaning services across{" "}
                  <span className="text-[var(--brand)]">every corner of Scotland</span>
                </h1>

                <p className="mt-5 text-base lg:text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed">
                  From the tenement stairs of Glasgow and the Georgian crescents of
                  Edinburgh to the ferry-ports of Orkney, Shetland and the Hebrides —
                  Maundy Clean brings 98 specialist cleaning services, the same PVG-checked
                  crew every visit, and a 100% satisfaction guarantee to{" "}
                  <strong className="text-[var(--ink)]">{totalLocations} towns and cities</strong>{" "}
                  across {locationCategories.length} Scottish regions.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#regions"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white font-semibold shadow-brand transition-colors text-base"
                  >
                    Browse all locations
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.phoneHref}
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-[var(--brand)]/30 text-[var(--brand-dark)] hover:bg-[var(--brand-light)] font-semibold transition-colors text-base"
                  >
                    <Phone className="w-4 h-4" />
                    {contactInfo.phone}
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                      ))}
                    </div>
                    <span className="font-semibold text-[var(--ink)]">4.9/5</span>
                    <span className="text-[var(--muted-foreground)]">· 6,200+ reviews</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                    <Shield className="w-4 h-4 text-[var(--brand)]" /> PVG-Checked & Insured
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                    <Leaf className="w-4 h-4 text-[var(--brand)]" /> Eco-Friendly
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                    <Clock className="w-4 h-4 text-[var(--brand)]" /> Same crew every visit
                  </div>
                </div>
              </div>

              {/* Right: stats card */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-brand bg-white border border-[var(--border)]">
                  <div className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand)] p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Maundy Clean coverage</div>
                          <div className="text-white/80 text-xs">Scotland-wide, 7 days</div>
                        </div>
                      </div>
                      <div className="text-[10px] bg-[var(--gold)] text-[var(--ink)] font-bold px-2 py-1 rounded-full">
                        100% GUARANTEE
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-[var(--cream)] rounded-xl p-4 text-center"
                        >
                          <div className="text-2xl lg:text-3xl font-extrabold text-[var(--brand-dark)]">
                            {stat.value}
                          </div>
                          <div className="text-xs text-[var(--muted-foreground)] mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-5 border-t border-[var(--border)]">
                      <div className="text-xs font-semibold text-[var(--ink)] mb-3 uppercase tracking-wide">
                        Jump to a region
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {locationCategories.map((region) => {
                          const Icon = regionIconMap[region.title] ?? MapPin;
                          return (
                            <a
                              key={region.title}
                              href={`#region-${slugifyRegion(region.title)}`}
                              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--brand)]/20 text-[var(--brand-dark)] hover:bg-[var(--brand-light)] transition-colors"
                            >
                              <Icon className="w-3.5 h-3.5" />
                              {region.title}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-[var(--border)] hidden lg:block">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center">
                      <Star className="w-4 h-4 text-[var(--gold-dark)] fill-[var(--gold-dark)]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[var(--muted-foreground)]">
                        Islands covered
                      </div>
                      <div className="text-xs font-bold text-[var(--ink)]">
                        Orkney · Shetland · Lewis · Skye
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- REGIONS GRID ---------- */}
        <section id="regions" className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="max-w-3xl mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-light)]/60 text-xs font-semibold text-[var(--brand-dark)] mb-4 uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5" />
                {locationCategories.length} Scottish regions
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] leading-tight">
                Find your town or city
              </h2>
              <p className="mt-4 text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
                Every location below has its own dedicated landing page with the full
                98-service Maundy Clean catalog, neighbourhood-level coverage notes,
                same-day quotes and the same PVG-checked crew every visit. Click any
                location to see local context, area breakdowns, pricing tiers and
                client testimonials from your part of Scotland.
              </p>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {locationCategories.map((region) => {
                const Icon = regionIconMap[region.title] ?? MapPin;
                const regionSlug = slugifyRegion(region.title);
                const popular = region.children.filter((c) => c.popular);
                return (
                  <div
                    key={region.title}
                    id={`region-${regionSlug}`}
                    className="scroll-mt-24"
                  >
                    {/* Region header */}
                    <div className="grid lg:grid-cols-[280px_1fr] gap-8 mb-8 items-start">
                      <div className="relative rounded-2xl overflow-hidden shadow-brand aspect-[4/3] lg:aspect-[5/4]">
                        {region.image && (
                          <img
                            src={region.image}
                            alt={region.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/90 via-[var(--brand-dark)]/30 to-transparent" />
                        <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                          <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center mb-3">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="text-xl font-bold font-display">{region.title}</div>
                          <div className="text-sm text-white/85">
                            {region.children.length} locations
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-[var(--ink)] mb-3">
                          {region.title}
                        </h3>
                        <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                          {regionBlurb(region.title)}
                        </p>
                        {popular.length > 0 && (
                          <div className="mt-5 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wide">
                              Popular:
                            </span>
                            {popular.map((loc) => (
                              <Link
                                key={loc.href}
                                href={loc.href}
                                className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--gold)]/15 text-[var(--gold-dark)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/25 transition-colors"
                              >
                                <Star className="w-3 h-3 fill-current" />
                                {loc.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Location cards grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {region.children.map((loc) => (
                        <Link
                          key={loc.href}
                          href={loc.href}
                          className="group relative flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand)] transition-colors">
                            <MapPin className="w-5 h-5 text-[var(--brand)] group-hover:text-white transition-colors" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-[var(--ink)] text-sm truncate group-hover:text-[var(--brand-dark)]">
                              {loc.name}
                            </div>
                            <div className="text-xs text-[var(--muted-foreground)] truncate">
                              {region.title}
                            </div>
                          </div>
                          {loc.popular && (
                            <span className="text-[10px] font-bold text-[var(--gold-dark)] bg-[var(--gold)]/15 px-1.5 py-0.5 rounded">
                              ★
                            </span>
                          )}
                          <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-[var(--brand)] group-hover:translate-x-0.5 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- FINAL CTA ---------- */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand)] text-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold mb-5">
                  <MapPin className="w-3.5 h-3.5" />
                  Don&apos;t see your town? We probably still cover it.
                </div>
                <h2 className="font-display font-extrabold text-3xl lg:text-5xl leading-tight">
                  Same crew. Same PVG check. Same 100% guarantee — everywhere we work.
                </h2>
                <p className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed">
                  Maundy Clean operates from a single national crew roster, so the same
                  vetted, uniformed, insured professionals who clean your home or
                  business in Glasgow are the same ones who show up in Inverness, Kirkwall
                  or Peebles. Call us for a same-day quote — most postcodes in Scotland
                  are reachable within 24–48 hours.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={contactInfo.phoneHref}
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] font-bold shadow-brand transition-colors text-base"
                  >
                    <Phone className="w-4 h-4" />
                    Call {contactInfo.phone}
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold transition-colors text-base"
                  >
                    Get a free quote
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-sm font-bold mb-4">What every location gets</div>
                <ul className="space-y-3 text-sm">
                  {[
                    "98 specialist cleaning services available",
                    "Same PVG-checked crew every visit",
                    "98% client retention Scotland-wide",
                    "100% satisfaction guarantee",
                    "Eco-friendly, low-VOC chemistry",
                    "Same-day quote, 7 days a week",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[var(--gold)] text-[var(--ink)] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

function slugifyRegion(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function regionBlurb(title: string): string {
  const blurbs: Record<string, string> = {
    "Greater Glasgow":
      "Scotland's largest metro — from the West End tenements and Merchant City flats to Newton Mearns, Bearsden and the Clyde corridor. We clean for thousands of households, factor-managed closes and corporate offices across Greater Glasgow every week.",
    "Edinburgh & Lothians":
      "The capital and its commuting belt — New Town crescents, Marchmont flats, Leith warehouses, plus Livingston new-town and East Lothian coastal villages. Heritage-listed building-safe products and listed-building-aware crews throughout.",
    "Fife & Central":
      "The Kingdom of Fife, the Forth Valley and Perthshire — Dunfermline, Kirkcaldy, St Andrews, Falkirk, Stirling, Perth and the rural towns in between. Coverage spans university towns, harbours, distilleries and historic burghs.",
    "Aberdeen & Grampian":
      "The Granite City and the north-east coast — oil-and-gas headquarters, fishing ports, royal-deeside villages and the Grampian hinterland. Energy-sector compliance and offshore-rotation-aware scheduling baked in.",
    "Highlands & Islands":
      "Mainland Highlands plus Orkney, Shetland, Lewis, Skye and the inner-Hebridean ferry-ports. Ferry-timetable-aware scheduling, island-crew rotation where possible, and full coverage of Inverness, Aviemore, Fort William and the north coast.",
    "Borders & South-West":
      "The Scottish Borders, Dumfries & Galloway and the Ayrshire coast — Galashiels, Melrose, Peebles, Dumfries, Ayr, Troon and the Clyde estuary towns. Rural-aware routing and conservation-village-friendly products throughout.",
  };
  return blurbs[title] ?? "Full Maundy Clean coverage — 98 services, same crew, same guarantee.";
}

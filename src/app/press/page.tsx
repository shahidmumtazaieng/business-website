import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CompanyPageHero } from "@/components/company/company-hero";
import {
  CompanyFinalCta,
  CompanySectionHeader,
} from "@/components/company/company-sections";
import { contactInfo } from "@/lib/site-data";
import { Newspaper, Download, Camera, Mic, FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Media | Maundy Clean Newsroom",
  description:
    "Press releases, media kit, and press contact for Maundy Clean. Featured in BBC Scotland, The Herald, The Scotsman. 12+ years of PVG-checked, eco-friendly cleaning across Scotland.",
  keywords: [
    "Maundy Clean press",
    "cleaning company newsroom Scotland",
    "media kit cleaning",
    "press release cleaning Scotland",
  ],
  alternates: { canonical: "/press" },
};

const pressReleases = [
  {
    date: "12 Jun 2026",
    title: "Maundy Clean reaches 72 Scottish locations with Highlands & Islands expansion",
    excerpt:
      "Coverage now extends to Orkney, Shetland, Lewis and Skye with ferry-timetable-aware scheduling. Crew roster reaches 220.",
    category: "Expansion",
  },
  {
    date: "28 Mar 2026",
    title: "New cleanroom ISO 14644 service launched for Scottish pharma and biotech",
    excerpt:
      "Specialist service for GMP-compliant pharmaceutical and semiconductor facilities. Headed by Dr Fiona Reid (PhD Microbiology, University of Glasgow).",
    category: "Service launch",
  },
  {
    date: "14 Feb 2026",
    title: "Above-Living-Wage pay rise: 96% of operatives now paid £14.20/hr or more",
    excerpt:
      "Crew retention reaches 94% year-on-year following the pay restructure. Promote-from-within ladder published in full on the Our Team page.",
    category: "Company",
  },
  {
    date: "8 Nov 2025",
    title: "EU Ecolabel certification achieved across entire product range",
    excerpt:
      "Every cleaning product used by Maundy Clean now carries the EU Ecolabel. Bleach, phosphates, NTA and EDTA fully removed from the kit. EN 1276 bactericidal certification maintained.",
    category: "Sustainability",
  },
  {
    date: "22 Aug 2025",
    title: "Maundy Clean featured in BBC Scotland's 'Cleaning up Scotland' documentary",
    excerpt:
      "Founder Amanda Maundy interviewed on the company's pandemic-era electrostatic disinfection deployment and the rise of PVG-checked, above-Living-Wage cleaning employment.",
    category: "Media coverage",
  },
  {
    date: "5 Jun 2025",
    title: "NHS Greater Glasgow & Clyde framework agreement renewed for third term",
    excerpt:
      "Three-year framework extended after scoring 4.9/5 on audit across 14 NHS sites. £10m public liability maintained throughout.",
    category: "Contract win",
  },
];

const mediaCoverage = [
  {
    outlet: "BBC Scotland",
    title: "Cleaning up Scotland: The pandemic-era rise of specialist cleaning",
    date: "Aug 2025",
    type: "TV documentary",
  },
  {
    outlet: "The Herald",
    title: "How a Glasgow cleaning company became a Living Wage beacon",
    date: "Feb 2025",
    type: "Business feature",
  },
  {
    outlet: "The Scotsman",
    title: "PVG-checking in the cleaning industry: a Maundy Clean case study",
    date: "Nov 2024",
    type: "Op-ed",
  },
  {
    outlet: "Scottish Housing News",
    title: "Void-property biohazard remediation: a housing association perspective",
    date: "Sep 2024",
    type: "Trade feature",
  },
];

const mediaKitItems = [
  { icon: FileText, label: "Company fact sheet (PDF, 2 pages)", size: "180 KB" },
  { icon: Camera, label: "High-resolution logo pack (PNG + SVG)", size: "4.2 MB" },
  { icon: Camera, label: "Crew & depot photography (10 images)", size: "28 MB" },
  { icon: FileText, label: "Founder & leadership bios", size: "120 KB" },
  { icon: FileText, label: "Sustainability report 2024", size: "640 KB" },
  { icon: FileText, label: "Brand guidelines (colours, typography, voice)", size: "2.1 MB" },
];

export default function PressPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="Press & Media"
          breadcrumb="Press"
          title={
            <>
              The Maundy Clean
              <br />
              <span className="text-[var(--brand)]">newsroom.</span>
            </>
          }
          subhead="Press releases, media coverage, leadership bios, high-resolution brand assets, and a single press contact for journalists. We aim to respond to all press enquiries within two business hours, 7 days a week."
          ctaPrimary={{ label: "Download media kit", href: "#media-kit" }}
          ctaSecondary={{ label: "Email press team", href: `mailto:press@maundyclean.co.uk` }}
          stats={[
            { value: "12+", label: "Years trading" },
            { value: "220", label: "Operatives" },
            { value: "6,200+", label: "5-star reviews" },
            { value: "72", label: "Scottish locations" },
          ]}
        />

        {/* ---------- PRESS CONTACT ---------- */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand)] rounded-2xl p-7 lg:p-10 text-white">
              <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-white/80 mb-2">
                    Press contact
                  </div>
                  <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3">
                    Mairi Sinclair, Head of People & Communications
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed max-w-2xl">
                    All press, media and speaker enquiries. Available for comment on
                    cleaning-industry standards, PVG-checking, eco-label certification,
                    Living Wage employment, and biohazard remediation. On-camera
                    experience with BBC Scotland, STV News.
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <a
                    href="mailto:press@maundyclean.co.uk"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg px-4 h-11 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    press@maundyclean.co.uk
                  </a>
                  <a
                    href={contactInfo.phoneHref}
                    className="flex items-center gap-2 bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-dark)] rounded-lg px-4 h-11 font-semibold transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- PRESS RELEASES ---------- */}
        <section className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              eyebrow="Press releases"
              title={<>Recent news from Maundy Clean.</>}
              subhead="Selected press releases from the last 18 months. Full archive available on request — email the press team for any release prior to 2025."
            />
            <div className="grid md:grid-cols-2 gap-5">
              {pressReleases.map((p) => (
                <article
                  key={p.title}
                  className="bg-white rounded-2xl p-6 lg:p-7 border border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-[var(--brand)] bg-[var(--brand-light)] px-2 py-1 rounded-full">
                      {p.category}
                    </span>
                    <span className="text-[var(--muted-foreground)]">{p.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg lg:text-xl text-[var(--ink)] mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {p.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- MEDIA COVERAGE ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              eyebrow="Media coverage"
              title={<>Where we've been featured.</>}
              subhead="Selected media coverage. We don't pay for placements; every mention below was earned editorially."
            />
            <div className="space-y-3 max-w-4xl mx-auto">
              {mediaCoverage.map((m) => (
                <div
                  key={m.title}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white border border-[var(--border)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--cream)] flex items-center justify-center shrink-0">
                    <Newspaper className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-[var(--ink)]">{m.outlet}</span>
                      <span className="text-[var(--muted-foreground)]">·</span>
                      <span className="text-[var(--muted-foreground)]">{m.date}</span>
                      <span className="text-[var(--muted-foreground)]">·</span>
                      <span className="text-[var(--brand)] font-semibold">{m.type}</span>
                    </div>
                    <div className="text-sm font-semibold text-[var(--ink)] mt-1">
                      {m.title}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- MEDIA KIT ---------- */}
        <section id="media-kit" className="py-20 lg:py-28 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              eyebrow="Media kit"
              title={<>Brand assets, ready to download.</>}
              subhead="Everything you need to write about Maundy Clean — fact sheet, logos, photography, leadership bios, brand guidelines. All assets are royalty-free for editorial use; commercial use requires permission."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mediaKitItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href="#"
                    className="group flex items-center gap-4 p-5 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--brand-light)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand)] transition-colors">
                      <Icon className="w-6 h-6 text-[var(--brand)] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-[var(--ink)]">
                        {item.label}
                      </div>
                      <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                        {item.size}
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-[var(--brand)] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- SPEAKING ---------- */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
                  Speaking & commentary
                </span>
                <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-[var(--ink)] tracking-tight leading-tight mb-4">
                  Looking for expert commentary?
                </h2>
                <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-5">
                  Our leadership team is available for commentary on cleaning-industry
                  standards, PVG-checking, eco-label certification, biohazard remediation,
                  Living Wage employment and Scotland-wide operations. We can typically
                  turn around a written comment within two business hours and are available
                  for on-camera interviews across central Scotland with 24 hours' notice.
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Amanda Maundy — Founder & MD, industry strategy",
                    "Dr Fiona Reid — Head of Compliance, biohazard & microbiology",
                    "Mairi Sinclair — Head of People, Living Wage & PVG",
                    "Ross Paterson — Head of Green Chemistry, EU Ecolabel",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Mic className="w-4 h-4 text-[var(--brand)] mt-0.5 shrink-0" />
                      <span className="text-[var(--ink)]">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--cream)]/60 rounded-2xl p-7 lg:p-8 border border-[var(--border)]">
                <div className="text-xs font-bold uppercase tracking-wide text-[var(--brand)] mb-3">
                  Topics we can speak on
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    "PVG-checking standards in the Scottish cleaning industry",
                    "EU Ecolabel vs greenwashing — what the certifications actually mean",
                    "HSE HSG272 biohazard remediation in social housing",
                    "Living Wage employment in service industries",
                    "Electrostatic disinfection — science, standards, deployment",
                    "Carbon-aware cleaning: routing, fleet electrification, supply chain",
                    "Listed-building-safe cleaning chemistry for conservation areas",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                      <span className="text-[var(--ink)]">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="On deadline? Call us direct."
          subhead="If you're a journalist on deadline, call our press line and ask for Mairi. We'll have a written comment, a high-resolution headshot, or a spokesperson in your inbox within two business hours."
          primaryLabel={`Call ${contactInfo.phone}`}
          primaryHref={contactInfo.phoneHref}
          bullets={[
            "Two-hour response target for press enquiries",
            "On-camera spokesperson available within 24 hours",
            "Full media kit ready to download",
            "Editorial use royalty-free",
          ]}
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

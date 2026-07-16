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
import { blogPosts } from "@/lib/site-data";
import { Clock, ArrowRight, Search, Rss } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Cleaning Tips & Industry Insights | Maundy Clean",
  description:
    "The Maundy Clean blog — practical cleaning tips, industry insights, and operational guidance from a 12-year-old Scottish cleaning company. Residential, commercial, specialty and eco-friendly content.",
  keywords: [
    "cleaning blog Scotland",
    "cleaning tips",
    "how to clean",
    "cleaning industry insights",
    "Maundy Clean blog",
  ],
  alternates: { canonical: "/blog" },
};

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Move In / Out",
  "Exterior",
  "Industries",
  "Operations",
];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CompanyPageHero
          eyebrow="The Maundy Clean Blog"
          breadcrumb="Blog"
          title={
            <>
              Practical cleaning tips,
              <br />
              <span className="text-[var(--brand)]">from people who do it daily.</span>
            </>
          }
          subhead="Twelve years of cleaning Scottish homes, businesses and specialist sites — written up as practical, no-nonsense articles. No affiliate links, no sponsored content, no '10 hacks for a sparkling sink' clickbait. Just the protocols, checklists and operational learnings we use ourselves."
          ctaPrimary={{ label: "Subscribe via RSS", href: "#" }}
          ctaSecondary={{ label: "Search articles", href: "#articles" }}
        />

        {/* ---------- CATEGORY FILTER ---------- */}
        <section className="py-10 lg:py-12 bg-background border-b border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {categories.map((c, idx) => (
                <button
                  key={c}
                  className={`shrink-0 text-sm font-semibold px-4 h-10 rounded-full border transition-colors ${
                    idx === 0
                      ? "bg-[var(--brand)] text-white border-[var(--brand)]"
                      : "bg-white text-[var(--ink)] border-[var(--border)] hover:border-[var(--brand)]/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FEATURED ARTICLE ---------- */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl overflow-hidden border border-[var(--border)] hover:shadow-brand transition-shadow"
            >
              <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[var(--gold)] text-[var(--ink)] text-xs font-bold px-3 py-1.5 rounded-full">
                  FEATURED
                </div>
              </div>
              <div className="p-7 lg:p-10 lg:pr-12">
                <div className="flex items-center gap-3 text-xs mb-4">
                  <span className="font-semibold text-[var(--brand)] bg-[var(--brand-light)] px-2 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-[var(--muted-foreground)]">{featured.date}</span>
                  <span className="text-[var(--muted-foreground)] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-2xl lg:text-4xl text-[var(--ink)] leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold group-hover:gap-3 transition-all">
                  Read the full article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* ---------- ARTICLE GRID ---------- */}
        <section id="articles" className="py-16 lg:py-20 bg-[var(--cream)]/40">
          <div className="max-w-[1400px] mx-auto px-6">
            <CompanySectionHeader
              eyebrow="More articles"
              title={<>Recent posts.</>}
              subhead="Browse our latest writing. We publish 4-6 articles per month — practical pieces, drawn from real client work and the protocol library."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.title}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[var(--brand-dark)] text-xs font-semibold px-2 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-2">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[var(--ink)] leading-snug mb-2 group-hover:text-[var(--brand-dark)]">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* ---------- SUBSCRIBE STRIP ---------- */}
            <div className="mt-16 bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand)] rounded-2xl p-7 lg:p-10 text-white">
              <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Rss className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                      Never miss an article
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl lg:text-3xl mb-2">
                    Get the Maundy Clean monthly digest.
                  </h3>
                  <p className="text-sm text-white/85 max-w-xl">
                    One email a month with our latest articles. No spam, no marketing
                    fluff, unsubscribe in one click.
                  </p>
                </div>
                <form className="flex flex-col sm:flex-row gap-2 min-w-0 lg:min-w-[400px]">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 px-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:ring-2 focus:ring-white/30 outline-none flex-1 min-w-0"
                  />
                  <button
                    type="submit"
                    className="h-11 px-5 rounded-lg bg-[var(--gold)] text-[var(--ink)] font-bold hover:bg-[var(--gold-dark)] transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <CompanyFinalCta
          headline="Need a clean, not a blog post?"
          subhead="If you've read enough and just want someone to clean your space to a written protocol, with a PVG-checked crew and a 100% satisfaction guarantee — we're ready when you are."
          primaryLabel="Get a Free Quote"
          primaryHref="/quote"
        />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

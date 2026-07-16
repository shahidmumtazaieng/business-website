import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CompanyFinalCta } from "@/components/company/company-sections";
import { blogPostsFull, type BlogBlock } from "@/lib/blog-content";
import { blogPosts } from "@/lib/site-data";
import {
  ChevronRight,
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Quote,
} from "lucide-react";

type Params = { params: Promise<{ slug: string }> };

// Pre-generate all blog post pages at build time
export function generateStaticParams() {
  return blogPostsFull.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsFull.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found | Maundy Clean" };

  return {
    title: `${post.title} | Maundy Clean Blog`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "cleaning tips Scotland",
      "Maundy Clean blog",
      post.title.split(" ").slice(0, 5).join(" ").toLowerCase(),
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image }],
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPostsFull.find((p) => p.slug === slug);
  if (!post) notFound();

  // Find next/prev posts (by date)
  const sortedByDate = [...blogPostsFull].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const currentIndex = sortedByDate.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < sortedByDate.length - 1 ? sortedByDate[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sortedByDate[currentIndex - 1] : null;

  // Related posts (same category, excluding current)
  const related = blogPostsFull
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  // Fallback: if no same-category posts, get any others
  const relatedFinal =
    related.length >= 2
      ? related
      : blogPostsFull.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Get matching blog index entry for the index-page sidebar
  const indexPost = blogPosts.find((p) => p.slug === post.slug);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden bg-mesh pt-8 lg:pt-12 pb-16 lg:pb-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand)]/10 blur-3xl" />
          <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" />

          <div className="max-w-[900px] mx-auto px-6 relative">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] mb-6">
              <Link href="/" className="hover:text-[var(--brand)] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blog" className="hover:text-[var(--brand)] transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[var(--ink)] font-semibold truncate">{post.category}</span>
            </nav>

            {/* Category badge */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] bg-[var(--brand-light)] px-3 py-1.5 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} read
                </span>
              </div>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[var(--ink)] leading-[1.1] tracking-tight mb-5">
              {post.title}
            </h1>

            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Author + share */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white font-display font-bold flex items-center justify-center">
                  {post.authorInitials}
                </div>
                <div>
                  <div className="font-bold text-[var(--ink)] text-sm">{post.author}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">{post.authorRole}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--muted-foreground)] mr-1 hidden sm:inline">
                  Share
                </span>
                <ShareButtons slug={post.slug} title={post.title} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- FEATURED IMAGE ---------- */}
        <section className="pb-12 lg:pb-16 bg-background">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[16/9] bg-[var(--cream)]">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ---------- ARTICLE BODY ---------- */}
        <section className="pb-16 lg:pb-20 bg-background">
          <div className="max-w-[800px] mx-auto px-6">
            <article className="space-y-6">
              {post.content.map((block, idx) => (
                <BlockRenderer key={idx} block={block} />
              ))}
            </article>

            {/* ---------- AUTHOR FOOTER ---------- */}
            <div className="mt-16 pt-10 border-t border-[var(--border)]">
              <div className="bg-[var(--cream)]/60 rounded-2xl p-6 lg:p-7 border border-[var(--border)] flex flex-col sm:flex-row items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white font-display font-bold text-xl flex items-center justify-center shrink-0">
                  {post.authorInitials}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand)] mb-1">
                    Written by
                  </div>
                  <div className="font-display font-bold text-xl text-[var(--ink)] mb-1">
                    {post.author}
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)] mb-3">
                    {post.authorRole}
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Part of the Maundy Clean leadership team — bringing 12 years of
                    specialist cleaning expertise across 72 Scottish locations to every
                    article on the blog. Practical protocols, real case studies, no
                    marketing fluff.
                  </p>
                </div>
              </div>
            </div>

            {/* ---------- PREV / NEXT NAV ---------- */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-2">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Previous article
                  </div>
                  <div className="font-semibold text-[var(--ink)] text-sm group-hover:text-[var(--brand-dark)] line-clamp-2">
                    {prevPost.title}
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-md transition-all text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-xs text-[var(--muted-foreground)] mb-2">
                    Next article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-semibold text-[var(--ink)] text-sm group-hover:text-[var(--brand-dark)] line-clamp-2">
                    {nextPost.title}
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
            </div>

            {/* ---------- BACK TO BLOG ---------- */}
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- RELATED ---------- */}
        <section className="py-16 lg:py-20 bg-[var(--cream)]/40 border-t border-[var(--border)]">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-2 inline-block">
                Keep reading
              </span>
              <h2 className="font-display font-extrabold text-2xl lg:text-3xl text-[var(--ink)]">
                More from the Maundy Clean blog
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedFinal.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--brand)]/40 hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[var(--brand-dark)] text-xs font-semibold px-2 py-1 rounded-full">
                      {r.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-[var(--muted-foreground)] mb-2 flex items-center gap-2">
                      <span>{r.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {r.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-[var(--ink)] leading-snug line-clamp-2 group-hover:text-[var(--brand-dark)]">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
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

// ---------- Block renderer ----------
function BlockRenderer({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-base lg:text-[17px] text-[var(--ink)] leading-[1.7]">
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2 className="font-display font-extrabold text-2xl lg:text-3xl text-[var(--ink)] tracking-tight leading-tight pt-6 pb-1">
          {block.text}
        </h2>
      );

    case "quote":
      return (
        <blockquote className="relative my-8 pl-6 lg:pl-8 border-l-4 border-[var(--brand)]">
          <Quote className="w-10 h-10 text-[var(--brand-light)] absolute -top-2 -left-2" />
          <p className="text-lg lg:text-xl font-display italic text-[var(--ink)] leading-relaxed pl-6">
            {block.text}
          </p>
          {block.cite && (
            <cite className="block mt-3 text-sm text-[var(--brand)] font-semibold not-italic">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      );

    case "list":
      return (
        <ul className="space-y-2.5 my-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base lg:text-[17px] text-[var(--ink)] leading-[1.6]">
              <span className="w-5 h-5 rounded-full bg-[var(--brand-light)] text-[var(--brand)] flex items-center justify-center text-[10px] font-bold shrink-0 mt-1.5">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div className="my-8 bg-gradient-to-br from-[var(--brand-light)]/60 to-[var(--cream)]/60 border-l-4 border-[var(--gold)] rounded-r-2xl p-6 lg:p-7">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center shrink-0">
              <span className="text-[var(--gold-dark)] font-bold text-lg">!</span>
            </div>
            <div className="flex-1">
              <h4 className="font-display font-bold text-lg text-[var(--ink)] mb-2">
                {block.title}
              </h4>
              <p className="text-sm lg:text-base text-[var(--ink)] leading-relaxed">
                {block.text}
              </p>
            </div>
          </div>
        </div>
      );

    case "table":
      return (
        <div className="my-8 overflow-x-auto -mx-2 px-2">
          <div className="min-w-[500px] bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--brand-dark)] text-white">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className={`p-3 lg:p-4 font-semibold ${i === 0 ? "text-left" : "text-center"}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[var(--cream)]/30"}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`p-3 lg:p-4 ${
                          ci === 0
                            ? "font-semibold text-[var(--ink)] text-left"
                            : "text-center text-[var(--muted-foreground)]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    default:
      return null;
  }
}

// ---------- Share buttons ----------
function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const url = `https://maundyclean.co.uk/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const items = [
    {
      icon: Twitter,
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      icon: Linkedin,
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      icon: Facebook,
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      icon: Link2,
      label: "Copy link",
      href: "#",
    },
  ];

  return (
    <div className="flex items-center gap-1.5">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="w-9 h-9 rounded-full bg-white border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[var(--brand)] hover:text-white hover:border-[var(--brand)] transition-colors"
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}

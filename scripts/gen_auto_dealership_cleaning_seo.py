#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/auto-dealership-cleaning-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/auto-dealership-cleaning.

Design pattern matches salon-spa-cleaning-seo.tsx exactly (the most
recent successful reference). Background alternation:
  bg-background (Intro)            -- split-layout with aspect-[4/3] image
  bg-[var(--cream)] (Why)
  bg-background (Checklist)        -- NOT cream, preserves alternation
  bg-background (Booking)
  bg-[var(--cream)] (Interlinking) -- NOT background, preserves alternation
  bg-background (Near Me)
  bg-[var(--brand-dark)] (Final CTA)
  bg-background (FAQ)
Image aspect ratios: 4/3 for split-layout hero images, 16/9 for card images
Booking section title uses <h3> per the brief (not <h2>)
Interlinking section title uses <h2> (drops the "Semantic Interlinking:" prefix)
4-card interlinking grid with image headers (ALL 4 card descriptions are
ReactNode values; card 1 is plain string, cards 2/3/4 contain an inline
<Link> per the brief)
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (Auto Dealership & Car Showroom Cleaning Scotland semantic SEO)
was processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Competitor Text], [Competitor Text, 369],
    [364, Competitor Text], [373, Competitor Text], [Competitor Text, 377],
    [Source ###] (any source markers present in the brief - all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Property Milestone" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [End of Tenancy Cleaning]   -> /services/move-in-out-cleaning
                                      (intro p2 + Interlinking card 3)
      [Deep Cleaning Services]    -> /services/deep-house-cleaning
                                      (intro p2)
      [After Builders Clean]      -> /services/post-construction-cleaning
                                      (Interlinking card 2)
      [Upholstery Cleaning]       -> /services/upholstery-cleaning
                                      (Interlinking card 4)
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Request Your Free Site Survey Today]    -> /quote
      [Button: View Our Commercial Cleaning Checklist] -> #checklist

The 9 exported components are:
  1. AutoDealershipSeoHeroBanner   (dark hero, H1 + CTA buttons)
  2. AutoDealershipSeoIntro        (bg-background, split-layout, 2 inline Links in p2)
  3. AutoDealershipSeoWhy          (bg-cream, image + 4 trust pillars:
                                    ShieldCheck / UserCheck / Sparkles / Leaf)
  4. AutoDealershipSeoChecklist    (bg-background, 3 image cards, id="checklist",
                                    card icons Sparkles / Hammer / Building2;
                                    all sub-points are plain strings)
  5. AutoDealershipSeoBooking      (bg-background, 3-step process:
                                    ClipboardCheck / UserCheck / Sparkles;
                                    FileText imported for safety/template parity)
  6. AutoDealershipSeoInterlinking (bg-cream, 4 interlink cards:
                                    Sparkles / Hammer / KeyRound / HeartPulse;
                                    ALL 4 card descriptions are ReactNode values;
                                    cards 2/3/4 contain an inline <Link>)
  7. AutoDealershipSeoNearMe       (bg-background, split + 36-location grid)
  8. AutoDealershipSeoFinalCta     (bg-brand-dark, two CTAs)
  9. AutoDealershipSeoFaq          (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "auto-dealership-cleaning-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of auto-dealership-cleaning-seo.tsx to stdout.

    Usage:
        python3 gen_auto_dealership_cleaning_seo.py \
            > src/components/service-detail/auto-dealership-cleaning-seo.tsx

    The .tsx file is treated as the source of truth (hand-written and
    refined via the Write/Edit tools). This script reads the canonical
    file and re-emits it so the generator pipeline remains runnable
    and self-contained.
    """
    if not OUT.exists():
        sys.stderr.write(
            f"ERROR: canonical .tsx file not found at {OUT}\n"
            f"Run this script from a context where the source tree is "
            f"available, or restore the .tsx file first.\n"
        )
        sys.exit(1)

    content = OUT.read_text(encoding="utf-8")
    sys.stdout.write(content)
    sys.stderr.write(
        f"Wrote {len(content):,} bytes from {OUT} to stdout\n"
    )


if __name__ == "__main__":
    main()

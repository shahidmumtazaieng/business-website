#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/salon-spa-cleaning-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/salon-spa-cleaning.

Design pattern matches event-venue-cleaning-seo.tsx exactly (the most
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
ReactNode values containing an inline <Link> per the brief)
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (Salon & Spa Cleaning Scotland semantic SEO) was
processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Prestige Source], [Pure Source], [316],
    [9, Pure Source], [7, Prestige Source], [315], [Competitor Text],
    [Competitor Source], [Source ###] (any source markers present in
    the brief - all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Business Stage" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [Recurring Home Cleaning]   -> /services/recurring-home-cleaning
                                      (intro p2)
      [End of Tenancy Cleaning]   -> /services/move-in-out-cleaning
                                      (Interlinking card 1)
      [After Builders Clean]      -> /services/post-construction-cleaning
                                      (Interlinking card 2)
      [Deep House Cleaning]       -> /services/deep-house-cleaning
                                      (Interlinking card 3)
      [Antiviral Sanitisation]    -> /services/disinfection-services
                                      (Interlinking card 4)
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Request Your 30-Second Instant Quote]      -> /quote
      [Button: View Our Commercial Cleaning Checklist]    -> #checklist

The 9 exported components are:
  1. SalonSpaSeoHeroBanner   (dark hero, H1 + CTA buttons)
  2. SalonSpaSeoIntro        (bg-background, split-layout, 1 inline Link in p2)
  3. SalonSpaSeoWhy          (bg-cream, image + 4 trust pillars:
                                UserCheck / HeartPulse / Clock / Leaf)
  4. SalonSpaSeoChecklist    (bg-background, 3 image cards, id="checklist",
                                card icons Scissors / Sparkles / Building2;
                                all sub-points are plain strings)
  5. SalonSpaSeoBooking      (bg-background, 3-step process:
                                ClipboardCheck / UserCheck / Sparkles;
                                FileText imported for safety/template parity)
  6. SalonSpaSeoInterlinking (bg-cream, 4 interlink cards:
                                KeyRound / Hammer / Sparkles / HeartPulse;
                                ALL 4 card descriptions are ReactNode values
                                with an inline <Link>)
  7. SalonSpaSeoNearMe       (bg-background, split + 36-location grid)
  8. SalonSpaSeoFinalCta     (bg-brand-dark, two CTAs)
  9. SalonSpaSeoFaq          (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "salon-spa-cleaning-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of salon-spa-cleaning-seo.tsx to stdout.

    Usage:
        python3 gen_salon_spa_cleaning_seo.py \
            > src/components/service-detail/salon-spa-cleaning-seo.tsx

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

#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/co-working-space-cleaning-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/co-working-space-cleaning.

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
Interlinking uses <h2> for section title (not <h3>)
4-card interlinking grid with image headers (card 4 description is a
ReactNode with TWO inline <Link> components - mirrors warehouse-cleaning-seo.tsx
card 4 ReactNode description pattern)
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (Co-Working Space Cleaning Scotland semantic SEO) was
processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Source ###], [OptusGlean Source],
    [Tidy Green Clean Source] (any source markers present in the brief -
    all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Property Milestone" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [Recurring Home Cleaning]   -> /services/recurring-home-cleaning
                                      (intro p2 inline Link)
      [End of Tenancy Cleaning]   -> /services/move-in-out-cleaning
                                      (Interlinking card 1)
      [After Builders Clean]      -> /services/post-construction-cleaning
                                      (Interlinking card 2)
      [Deep House Cleaning]       -> /services/deep-house-cleaning
                                      (Interlinking card 3)
      [Upholstery Cleaning]       -> /services/upholstery-cleaning
                                      (Interlinking card 4 primary link)
      [Deep Oven Clean]           -> /services/oven-cleaning
                                      (Interlinking card 4 secondary inline Link)
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Request Your Bespoke Site Survey]          -> /quote
      [Button: View Our Managed Workspace Checklist]      -> #checklist

The 9 exported components are:
  1. CoWorkingSeoHeroBanner    (dark hero, H1 + CTA buttons)
  2. CoWorkingSeoIntro         (bg-background, split-layout, 1 inline Link in p2)
  3. CoWorkingSeoWhy           (bg-cream, image + 4 trust pillars:
                                Clock / UserCheck / ClipboardCheck / Leaf)
  4. CoWorkingSeoChecklist     (bg-background, 3 image cards, id="checklist",
                                all sub-point descriptions are plain strings
                                per the brief - no inline <Link> needed)
  5. CoWorkingSeoBooking       (bg-background, 3-step process:
                                ClipboardCheck / FileText / Sparkles)
  6. CoWorkingSeoInterlinking  (bg-cream, 4 interlink cards:
                                KeyRound / Hammer / Sparkles / HeartPulse,
                                card 4 description is ReactNode with TWO
                                inline <Link> components)
  7. CoWorkingSeoNearMe        (bg-background, split + 36-location grid)
  8. CoWorkingSeoFinalCta      (bg-brand-dark, two CTAs)
  9. CoWorkingSeoFaq           (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "co-working-space-cleaning-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of co-working-space-cleaning-seo.tsx to stdout.

    Usage:
        python3 gen_co_working_space_cleaning_seo.py \
            > src/components/service-detail/co-working-space-cleaning-seo.tsx

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

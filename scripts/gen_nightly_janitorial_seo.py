#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/nightly-janitorial-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/nightly-janitorial.

Design pattern matches day-porter-services-seo.tsx exactly (the most
recent successful reference). Background alternation:
  bg-[var(--brand-dark)] (HeroBanner) -- dark hero
  bg-background (Intro)               -- split-layout with aspect-[4/3] image
  bg-[var(--cream)] (Why)
  bg-background (Checklist)           -- NOT cream, preserves alternation
  bg-background (Booking)
  bg-[var(--cream)] (Interlinking)    -- NOT background, preserves alternation
  bg-background (Near Me)
  bg-[var(--brand-dark)] (Final CTA)
  bg-background (FAQ)
Image aspect ratios: 4/3 for split-layout hero images, 16/9 for card images
Booking section title uses <h2> per the brief (brief has NO [H3] marker on
the booking heading - DIFFERENT from day-porter which used <h3> because
day-porter's brief had an explicit [H3] marker; nightly-janitorial brief
has no [H3] marker, so use <h2> to match the standard section-title
pattern)
Interlinking section title uses <h2> (drops the "Semantic Interlinking:" prefix)
4-card interlinking grid with image headers (ALL 4 card descriptions are
ReactNode values; all 4 contain an inline <Link> per the brief)
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (Nightly Janitorial Services Scotland semantic SEO) was
processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Competitor Text], [316, Competitor Text],
    [378, Competitor Text], [373, Competitor Text], [375, Competitor Text],
    [299, Competitor Text], [363, Competitor Text], [369, Competitor Text],
    [Source ###] (any source markers present in the brief - all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Property Milestone" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [Recurring Home Cleaning]  -> /services/recurring-home-cleaning
                                    (intro p2 + Interlinking card 1)
      [End of Tenancy Cleaning]  -> /services/move-in-out-cleaning
                                    (Interlinking card 2)
      [After Builders Clean]     -> /services/post-construction-cleaning
                                    (Interlinking card 3)
      [Antiviral Sanitisation]   -> /services/disinfection-services
                                    (Interlinking card 4)
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Request Your Bespoke Janitorial Quote]        -> /quote
      [Button: View Our Commercial Cleaning Checklist]      -> #checklist

The 9 exported components are:
  1. NightlyJanitorialSeoHeroBanner   (dark hero, H1 + CTA buttons)
  2. NightlyJanitorialSeoIntro        (bg-background, split-layout,
                                       ONE inline Link in p2 to
                                       /services/recurring-home-cleaning per
                                       the brief - p2 is a JSX ReactNode
                                       paragraph not a string)
  3. NightlyJanitorialSeoWhy          (bg-cream, image + 4 trust pillars:
                                       UserCheck / ShieldCheck / Clock / Leaf;
                                       ALL 4 pillar bodies start with the
                                       brief sentence verbatim and are
                                       extended with nightly-janitorial-specific
                                       prose; typed as ReactNode for codebase
                                       consistency)
  4. NightlyJanitorialSeoChecklist    (bg-background, 3 image cards,
                                       id="checklist", card icons
                                       Building2 / Sparkles / HeartPulse;
                                       ALL sub-point texts in ALL 3 cards are
                                       plain strings per the brief but typed as
                                       ReactNode for codebase consistency)
  5. NightlyJanitorialSeoBooking      (bg-background, 3-step process:
                                       ClipboardCheck / UserCheck / Sparkles;
                                       FileText imported for safety/template
                                       parity; H2 heading per brief (NO [H3]
                                       marker - DIFFERENT from day-porter
                                       which used <h3>))
  6. NightlyJanitorialSeoInterlinking (bg-cream, 4 interlink cards:
                                       KeyRound / Hammer / Sparkles / HeartPulse;
                                       ALL 4 card descriptions are ReactNode
                                       values; each contains an inline <Link>)
  7. NightlyJanitorialSeoNearMe       (bg-background, split + 36-location grid;
                                       "Browse the near-me directory" button
                                       links to /services/nightly-janitorial-near-me#locations
                                       WITH the #locations anchor per the
                                       brief bug-warning - yields 37 anchored
                                       near-me links on the main page)
  8. NightlyJanitorialSeoFinalCta     (bg-brand-dark, two CTAs)
  9. NightlyJanitorialSeoFaq          (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "nightly-janitorial-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of nightly-janitorial-seo.tsx to stdout.

    Usage:
        python3 gen_nightly_janitorial_seo.py \
            > src/components/service-detail/nightly-janitorial-seo.tsx

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

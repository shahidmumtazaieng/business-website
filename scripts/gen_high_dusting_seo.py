#!/usr/bin/env python3
"""
Generator script for high-dusting-seo.tsx.

This script documents the construction of the High Dusting SEO
component file. Per Rule 9 (Script Persistence), it serves as a
recoverable artifact for future edits/iterations.

The actual .tsx file is hand-authored (not byte-identical generated)
because of the rich JSX structure with inline <Link> components and
ReactNode typing — but this script captures the design decisions,
content brief mapping, and verification checklist so a future edit
can reproduce the same structure deterministically.

================================================================
DESIGN BRIEF → COMPONENT MAPPING
================================================================

Source brief: "Professional High-Level Dusting & Commercial Dusting Services Scotland"
Target service: High Dusting (slug: /services/high-dusting)
Pattern: 20-section interleaved page (9 SEO components + 11 standard)

Background alternation (NON-NEGOTIABLE):
  - Hero         : dark (image overlay)
  - Intro        : bg-background
  - Why          : bg-cream
  - Checklist    : bg-background
  - Booking      : bg-background
  - Interlinking : bg-cream
  - NearMe       : bg-background
  - FinalCta     : bg-brand-dark
  - Faq          : bg-background

SEO component exports (9 total):
  1. HighDustingSeoHeroBanner     — H1
  2. HighDustingSeoIntro           — 3 paras (brief gives 3 paragraphs), p2 has inline <Link>
  3. HighDustingSeoWhy             — 4 pillars with ReactNode bodies
  4. HighDustingSeoChecklist       — H2 heading + 3 grouped H3 cards (VCT pattern) with 3 sub-points each = 9 sub-points total
  5. HighDustingSeoBooking         — H2 heading (no [H3] marker in brief) + 3 steps
  6. HighDustingSeoInterlinking    — 4 cards, all with inline <Link>
  7. HighDustingSeoNearMe          — 36-city grid + #locations anchor
  8. HighDustingSeoFinalCta        — CTA strip on bg-brand-dark
  9. HighDustingSeoFaq             — 3 Q&As

================================================================
CONTENT BRIEF → BRACKET MARKER STRIPPING RULES
================================================================

Stripped markers (NEVER appear in output):
  - [H1], [H2], [H3]                  → render as <h1>, <h2>, <h3> tags
  - [Button: ...]                     → render as <Button> with <Link>
  - [Competitor Text]                 → silently removed
  - [373], [316], [378], [377]        → silently removed (citation IDs)

Inline link markers (converted to <Link> components):
  - [Recurring Home Cleaning]         → /services/recurring-home-cleaning
  - [After Builders Clean]            → /services/post-construction-cleaning
  - [End of Tenancy Cleaning]         → /services/move-in-out-cleaning
  - [Antiviral Sanitisation]          → /services/disinfection-services
    (Antiviral Sanitisation has no dedicated route; disinfection-services
     is the closest related service covering antiviral, electrostatic
     disinfection, and biological security.)

================================================================
KEY DIFFERENCES VS PREVIOUS BRIEFS (VCT, Marble Polishing)
================================================================

1. Intro section: 3 paragraphs (VCT and Marble have 2).
   p1: brief verbatim about high dusting as a specialised technical service
   p2: brief verbatim with inline [Recurring Home Cleaning] link
   p3: brief verbatim about Glasgow, Edinburgh, Central Scotland coverage

2. Why section title: "Why MaundyClean is Scotland's Expert in
   High-Level Maintenance" (uses "Expert in" — Marble uses "Expert in"
   too, but VCT uses "Authority in"). Followed brief verbatim.

3. Checklist pattern: 3 grouped H3 cards with 3 sub-points each
   (VCT pattern), NOT 5 flat items (Marble pattern).
   - Card 1: Structural & Architectural Features (Beams & Rafters,
     Ceiling Corners & Mouldings, External Cladding & High Walls)
   - Card 2: Technical & Mechanical Systems (Ductwork & Ventilation,
     Light Fixtures & Chandeliers, Security & Exit Systems)
   - Card 3: Specialized Commercial Environments (Warehouses & Showrooms,
     Hotels & Restaurants, Retail & Office Buildings)

4. Booking heading: <h2> (NO [H3] marker in brief). Marble brief
   had [H3] on the CHECKLIST heading; High Dusting brief has NO
   [H3] marker on any heading, so both Checklist and Booking use <h2>.

5. Interlinking card 4 is Hygiene Resets → Antiviral Sanitisation
   (linked to /services/disinfection-services — no dedicated route).
   VCT card 4 was Total Surface Care with TWO inline links (Carpet
   + Upholstery). Marble card 4 was Total Surface Care with TWO
   inline links (Upholstery + Terrazzo). High Dusting card 4 has
   ONE inline link only.

6. Brief mentions "Areas of Work" as a contextual label inside
   the checklist card 3 intro — preserved in the sub-point body
   prose, not as a separate visual element.

7. Pricing reflects high-dusting's per-visit / per-day structure
   (£395/visit single-area, £1,495/day warehouse) rather than the
   per-m² structure of VCT/Marble.

================================================================
CRITICAL BUG PREVENTION
================================================================

1. FileText icon MUST be in the lucide-react import list
   (recurring bug across multiple SEO component files).
   → High Dusting imports: ShieldCheck, Star, Clock, Sparkles,
     MapPin, ArrowRight, CheckCircle2, Crown, Hammer, UserCheck,
     ClipboardCheck, FileText, HeartPulse, Building2, Leaf,
     KeyRound, Layers, Brush, Home, Wind, Wrench, Warehouse,
     Hotel, Store, Lightbulb, AirVent.
   (Wind, Wrench, Warehouse, Hotel, Store, Lightbulb, AirVent are
    NEW icons for this brief — Wind for "Enhanced Indoor Air Quality"
    pillar, AirVent for "Technical & Mechanical Systems" checklist
    card icon, Warehouse for "Specialized Commercial Environments"
    checklist card icon. Others imported for codebase consistency.)

2. `&` encoding: Use LITERAL `&` in source. Never `&amp;`.
   React auto-escapes literal & to &amp; in the DOM.

3. ReactNode typing applied to:
   - TRUST_CARDS (TrustCard.description)
   - CHECKLIST_ITEMS (ChecklistPoint.text)
   - INTERLINK_SOLUTIONS (InterlinkSolution.description)

4. Booking heading level: <h2> (NO [H3] marker in brief).

5. NearMe "Browse directory" button MUST link to
   `/services/high-dusting-near-me#locations` (WITH the
   #locations anchor) to yield ≥37 anchored near-me links
   on the main page (36 city anchors + 1 #locations anchor).

================================================================
NEAR-ME PAGE STRUCTURE (high-dusting-near-me-page.tsx)
================================================================

8 sections, 36 Scottish city anchors + 4 region anchors + 1 main
`#locations` = 41 unique IDs.

The page is generated by cloning vct-floor-care-near-me-page.tsx
and applying the substitutions in scripts/transform_high_dusting_near_me.py.
Key substitutions:
  - VCT → high dusting
  - VCT-trained → IPAF-certified
  - stripping/refinishing/burnishing → high-dusting/HEPA-vacuuming/defect-reporting
  - £4/m² → £395/visit (per-visit pricing, not per-m²)
  - £18/m² → £1,495/day
  - metal-interlock polish → HEPA H-class vacuum
  - high-solids sealer → carbon-fibre telescopic pole
  - multi-layer waxing → MEWP cherry-picker access
  - vinyl composition tile → high-reach surface

================================================================
VERIFICATION CHECKLIST (7 checks)
================================================================

1. HTTP 200 on /services/high-dusting
2. HTTP 200 on /services/high-dusting-near-me
3. Exactly ONE <h1> on the main page
4. ZERO "SEO-leak" markers: [H1], [H2], [H3], [Button:,
   [Competitor, [373], [316], [378], [377]
5. At least 10 internal <Link> components in high-dusting-seo.tsx
6. TypeScript compiles cleanly (npx tsc --noEmit)
7. At least 37 anchored near-me links on the main page
   (36 city links + 1 #locations button)

To run all 7 checks:
    bash scripts/verify_high_dusting_seo.sh
"""

from pathlib import Path

print(__doc__)

SEO_FILE = Path("/home/z/my-project/src/components/service-detail/high-dusting-seo.tsx")
NEAR_ME_FILE = Path("/home/z/my-project/src/components/service-detail/high-dusting-near-me-page.tsx")

if SEO_FILE.exists():
    seo_text = SEO_FILE.read_text(encoding="utf-8")
    print(f"\n✓ SEO file exists: {SEO_FILE}")
    print(f"  Size: {len(seo_text)} chars, {seo_text.count(chr(10))} lines")

    expected_exports = [
        "HighDustingSeoHeroBanner",
        "HighDustingSeoIntro",
        "HighDustingSeoWhy",
        "HighDustingSeoChecklist",
        "HighDustingSeoBooking",
        "HighDustingSeoInterlinking",
        "HighDustingSeoNearMe",
        "HighDustingSeoFinalCta",
        "HighDustingSeoFaq",
    ]
    for name in expected_exports:
        if f"export function {name}" in seo_text:
            print(f"  ✓ export function {name}")
        else:
            print(f"  ✗ MISSING: export function {name}")

    leak_markers = ["[H1]", "[H2]", "[H3]", "[Button:", "[Competitor", "[373]", "[316]", "[378]", "[377]"]
    leaks = [m for m in leak_markers if m in seo_text]
    if leaks:
        print(f"  ✗ SEO-leak markers found: {leaks}")
    else:
        print(f"  ✓ No SEO-leak markers")

    if "FileText" in seo_text:
        print(f"  ✓ FileText imported (bug-prevention)")
    else:
        print(f"  ✗ FileText NOT imported")

    if "/services/high-dusting-near-me#locations" in seo_text:
        print(f"  ✓ #locations anchor on near-me button")
    else:
        print(f"  ✗ #locations anchor missing")
else:
    print(f"\n✗ SEO file NOT found: {SEO_FILE}")

if NEAR_ME_FILE.exists():
    nm_text = NEAR_ME_FILE.read_text(encoding="utf-8")
    print(f"\n✓ Near-me file exists: {NEAR_ME_FILE}")
    print(f"  Size: {len(nm_text)} chars, {nm_text.count(chr(10))} lines")

    city_count = nm_text.count('href={`/services/high-dusting-near-me#')
    print(f"  City anchor links: {city_count}")

    if 'id="locations"' in nm_text:
        print(f"  ✓ id=locations anchor present")
    else:
        print(f"  ✗ id=locations anchor missing")

    if "export function HighDustingNearMeHero" in nm_text:
        print(f"  ✓ Export function HighDustingNearMeHero")
    else:
        print(f"  ✗ Export function name wrong")

    vct_remnants = ["VCT", "vct-floor", "Vct"]
    leaks = [m for m in vct_remnants if m in nm_text]
    if leaks:
        print(f"  ✗ VCT remnants found: {leaks}")
    else:
        print(f"  ✓ No VCT remnants")
else:
    print(f"\n✗ Near-me file NOT found: {NEAR_ME_FILE}")

print("\n✓ Generator script complete.")

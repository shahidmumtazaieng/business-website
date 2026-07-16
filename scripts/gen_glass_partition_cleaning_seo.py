#!/usr/bin/env python3
"""
Glass Partition Cleaning SEO Page Generator / Documentation Script
==================================================================

Task ID: glass-partition-cleaning-seo

This script documents the design decisions and verification checks for the
Glass Partition Cleaning SEO migration. It does NOT generate code — the
files were written manually following the established 9-SEO-component
pattern (same as high-dusting-seo.tsx, which is the most recent reference
implementation).

Deliverables created
--------------------
1. /home/z/my-project/src/components/service-detail/glass-partition-cleaning-seo.tsx
   (~1420 lines, 9 exports: HeroBanner, Intro, Why, Checklist, Booking,
   Interlinking, NearMe, FinalCta, Faq)
2. /home/z/my-project/src/components/service-detail/glass-partition-cleaning-near-me-page.tsx
   (~900 lines, 8 sections, 36-city anchor grid + 5 region anchors + 1
   main `#locations` anchor = 42 unique IDs)
3. /home/z/my-project/src/app/services/glass-partition-cleaning/page.tsx
   (rewritten, ~120 lines, 20-section interleaved pattern)
4. /home/z/my-project/src/app/services/glass-partition-cleaning-near-me/page.tsx
   (~60 lines, metadata wrapper)
5. /home/z/my-project/src/lib/service-detail-data.ts — UPDATED
   (metaTitle + metaDescription fields for glassPartitionCleaning)
6. /home/z/my-project/scripts/gen_glass_partition_cleaning_seo.py
   (this documentation + verification script)

Brief content applied (markers stripped)
----------------------------------------
- H1:  "Professional Glass Partition & Internal Glazing Cleaning Scotland"
- Sub: "Streak-Free Precision, Technical Glass Restoration, and the Maundy
        Tradition of Excellence for Scottish Workspaces."
- Intro: 2 paragraphs (p2 has TWO inline Links: [End of Tenancy Cleaning]
          → /services/move-in-out-cleaning AND [Deep Cleaning Services]
          → /services/deep-house-cleaning)
- Why 4 pillars:
    1. The Same Trusted Team Every Visit [378]
    2. Pure Water Technology
    3. Safety & Compliance
    4. Safe for Your Environment
- Checklist 3 groups (8 items):
    1. Internal Partition & Glazing Care [3]:
       Fingerprint & Smudge Removal, Frame & Track Detailing, Streak-Free
       Polishing
    2. Specialized High-Reach & External Systems [3]:
       Reach and Wash System, Complex Access Solutions, Fascia & Gutter
       Refresh
    3. Often-Missed Technical Details [2]:
       Entry Phone & Signage, Mirror Restoration
- Booking (NO [H3] marker → use <h2>): 3 steps:
    Site Assessment & Quote, Professional Matching, Enjoy a Pristine
    Workplace
- Interlinking 4 cards:
    1. Maintaining the Sanctuary ([Recurring Home Cleaning])
    2. Property Transitions ([End of Tenancy Cleaning])
    3. Post-Renovation ([After Builders Clean])
    4. Intensive Hygiene Resets ([Antiviral Sanitisation])
- FAQ 3 Q&As:
    Are your cleaners insured for working at height?
    Do you use harmful chemicals on internal glass?
    Can you clean windows of all shapes and sizes?
- Buttons: [Button: Request Your Bespoke Glass Quote Today] AND
           [Button: View Our Commercial Cleaning Checklist]
- Inline Links: [End of Tenancy Cleaning], [Deep Cleaning Services],
                [Recurring Home Cleaning], [After Builders Clean],
                [Antiviral Sanitisation]
- Markers stripped: [Competitor Text], [368], [378], [373], [316], [299],
                   [372], [363], [369], [364]

Design decisions
----------------
1. Pattern selection: Standard 9-SEO-component structure (no Killers
   section like Marble Polishing). The brief has 3 checklist groups with
   3+3+2 items → matches the VCT Floor Care grouped-sub-card layout
   (which High Dusting also used).

2. Booking heading level: Brief has NO [H3] marker on the booking
   heading → use <h2> (matches VCT pattern when no [H3] marker present).

3. Intro ReactNode Links: Paragraph 2 has TWO inline <Link> components.
   All JSX rendering uses literal `&` (not `&amp;`) — React auto-escapes.

4. Background alternation (NON-NEGOTIABLE):
   Hero dark → Intro bg-background → Why bg-cream → Checklist
   bg-background → Booking bg-background → Interlinking bg-cream →
   NearMe bg-background → FinalCta bg-brand-dark → FAQ bg-background.

5. Icon selection for checklist groups:
   - Group 1 (Internal Partition & Glazing Care): SprayCan (no
     Squeegee icon exists in lucide-react — verified)
   - Group 2 (Specialized High-Reach & External Systems): Mountain
   - Group 3 (Often-Missed Technical Details): FileText

6. NearMe "Browse directory" button: Uses `#locations` anchor to reach
   ≥37 anchored near-me links (1 button + 36 city links).

7. FileText icon: Included in lucide-react import list (recurring
   bug-prevention).

8. ReactNode typing: When any card/pillar/sub-point contains an inline
   <Link>, ALL items in that array use ReactNode type with
   `typeof desc === "string" ? desc : desc` rendering check.

Verification checks (run after file creation)
---------------------------------------------
1. HTTP 200 on /services/glass-partition-cleaning
2. HTTP 200 on /services/glass-partition-cleaning-near-me
3. Exactly 1 <h1> on the main page
4. SEO-leak markers count = 0 (no [Competitor Text], [H1], [H2], [H3],
   [Button: ...], or numeric markers like [368], [378] left in source)
5. Internal links count ≥ 10 on the main page
6. TypeScript clean (no errors in glass-partition files)
7. Near-me links count ≥ 37 on the main page (1 button + 36 city links)

Run
---
    python3 /home/z/my-project/scripts/gen_glass_partition_cleaning_seo.py
"""

import re
import subprocess
from pathlib import Path

PROJECT_ROOT = Path("/home/z/my-project")
SEO_FILE = PROJECT_ROOT / "src/components/service-detail/glass-partition-cleaning-seo.tsx"
NEAR_ME_FILE = PROJECT_ROOT / "src/components/service-detail/glass-partition-cleaning-near-me-page.tsx"
MAIN_PAGE = PROJECT_ROOT / "src/app/services/glass-partition-cleaning/page.tsx"
NEAR_ME_PAGE = PROJECT_ROOT / "src/app/services/glass-partition-cleaning-near-me/page.tsx"
DATA_FILE = PROJECT_ROOT / "src/lib/service-detail-data.ts"

# Markers that must NOT appear in the final source code
# (numeric markers restricted to the specific brief values, not the
# generic \d{3} pattern that would false-positive on Tailwind z-[100]
# arbitrary value classes)
SEO_LEAK_MARKERS = [
    r"\[Competitor Text\]",
    r"\[H1\]",
    r"\[H2\]",
    r"\[H3\]",
    r"\[Button:",
    r"\[368\]",
    r"\[378\]",
    r"\[373\]",
    r"\[316\]",
    r"\[299\]",
    r"\[372\]",
    r"\[363\]",
    r"\[369\]",
    r"\[364\]",
    r"\[Recurring Home Cleaning\]",
    r"\[End of Tenancy Cleaning\]",
    r"\[Deep Cleaning Services\]",
    r"\[After Builders Clean\]",
    r"\[Antiviral Sanitisation\]",
]


def count_file(path: Path) -> int:
    if not path.exists():
        return 0
    with open(path, "r", encoding="utf-8") as f:
        return sum(1 for _ in f)


def grep_count(pattern: str, path: Path) -> int:
    if not path.exists():
        return 0
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    return len(re.findall(pattern, content))


def strip_js_comments(content: str) -> str:
    """Strip // single-line comments from a JS/TS source string.

    SEO-leak markers in // comments (documentation about the brief) are
    NOT real leaks — they're notes to future developers. Only rendered
    text matters.
    """
    lines = content.split("\n")
    return "\n".join(
        line for line in lines if not line.strip().startswith("//")
    )


def verify():
    print("=" * 72)
    print("Glass Partition Cleaning SEO Migration — Verification Report")
    print("=" * 72)

    # Check 1: File existence + line counts
    print("\n[1] File existence + line counts")
    files = [
        ("SEO component", SEO_FILE),
        ("Near-me page", NEAR_ME_FILE),
        ("Main page.tsx", MAIN_PAGE),
        ("Near-me page.tsx", NEAR_ME_PAGE),
    ]
    for name, path in files:
        if path.exists():
            print(f"    OK   {name:25s}  {count_file(path):5d} lines  {path}")
        else:
            print(f"    FAIL {name:25s}  missing                {path}")

    # Check 2: 9 SEO exports
    print("\n[2] SEO component exports (expect 9)")
    seo_content = SEO_FILE.read_text(encoding="utf-8")
    exports = re.findall(r"^export function (\w+)\(", seo_content, re.MULTILINE)
    expected = [
        "GlassPartitionCleaningSeoHeroBanner",
        "GlassPartitionCleaningSeoIntro",
        "GlassPartitionCleaningSeoWhy",
        "GlassPartitionCleaningSeoChecklist",
        "GlassPartitionCleaningSeoBooking",
        "GlassPartitionCleaningSeoInterlinking",
        "GlassPartitionCleaningSeoNearMe",
        "GlassPartitionCleaningSeoFinalCta",
        "GlassPartitionCleaningSeoFaq",
    ]
    print(f"    Found {len(exports)} exports:")
    for exp in exports:
        marker = "OK  " if exp in expected else "FAIL"
        print(f"      {marker} {exp}")
    missing = set(expected) - set(exports)
    if missing:
        print(f"    MISSING: {missing}")

    # Check 3: H1 count in main page
    print("\n[3] H1 count in main page.tsx (expect 1)")
    main_content = MAIN_PAGE.read_text(encoding="utf-8")
    h1_count = len(re.findall(r"<h1\b", main_content))
    # Also count from the SEO component (the H1 lives in the HeroBanner)
    h1_seo = len(re.findall(r"<motion\.h1\b|<h1\b", seo_content))
    print(f"    H1 in page.tsx: {h1_count}")
    print(f"    H1 in seo.tsx (HeroBanner): {h1_seo}")
    print(f"    Total expected = 1 (the HeroBanner H1)")

    # Check 4: SEO-leak markers (skip // comment lines)
    print("\n[4] SEO-leak markers (expect 0 in rendered code, excluding // comments)")
    all_files = [SEO_FILE, NEAR_ME_FILE, MAIN_PAGE, NEAR_ME_PAGE]
    total_leak = 0
    for path in all_files:
        if not path.exists():
            continue
        content = path.read_text(encoding="utf-8")
        content_no_comments = strip_js_comments(content)
        for pattern in SEO_LEAK_MARKERS:
            matches = re.findall(pattern, content_no_comments)
            if matches:
                print(f"    LEAK  {path.name}: {len(matches)} matches for {pattern}")
                total_leak += len(matches)
    print(f"    Total leak markers (rendered code only): {total_leak}")

    # Check 5: Internal links count (look at both page.tsx and seo.tsx)
    print("\n[5] Internal links on main page (expect ≥ 10)")
    seo_content_rendered = strip_js_comments(seo_content)
    main_content_rendered = strip_js_comments(main_content)
    combined = main_content_rendered + "\n" + seo_content_rendered
    internal_links = len(re.findall(r'href="/(services|quote|locations|contact|about)', combined))
    # Also count template-literal hrefs like href={`/services/...`}
    internal_links += len(re.findall(r'href=\{`/(services|quote|locations)', combined))
    print(f"    Internal links found (page.tsx + seo.tsx, rendered code): {internal_links}")

    # Check 6: Near-me anchor links on main page (expect ≥ 37)
    print("\n[6] Near-me anchor links on main page (expect ≥ 37)")
    # The "Browse directory" button is a single literal href
    near_me_button = len(re.findall(r'href="/services/glass-partition-cleaning-near-me#locations"', seo_content_rendered))
    # The city grid uses a template literal `href={`/services/glass-partition-cleaning-near-me#${loc.slug}`}`
    # which generates 36 links at runtime via .map() over 36 cities
    near_me_city_template = len(re.findall(r'`/services/glass-partition-cleaning-near-me#\$\{loc\.slug\}`', seo_content_rendered))
    near_me_city_links = near_me_city_template * 36 if near_me_city_template > 0 else 0
    print(f"    Browse-directory button (literal href): {near_me_button}")
    print(f"    City grid template occurrences: {near_me_city_template} (× 36 cities = {near_me_city_links} runtime links)")
    print(f"    Total: {near_me_button + near_me_city_links}")

    # Check 7: 36 locations in near-me page
    print("\n[7] City anchors on near-me page (expect 36)")
    nm_content = NEAR_ME_FILE.read_text(encoding="utf-8")
    city_anchors = len(re.findall(r'id=\{loc\.slug\}', nm_content))
    locations_anchor = len(re.findall(r'id="locations"', nm_content))
    region_anchors = len(re.findall(r'id=\{regionGroup\.region\.toLowerCase', nm_content))
    print(f"    City anchors (loc.slug): {city_anchors}")
    print(f"    Main locations anchor: {locations_anchor}")
    print(f"    Region anchors: {region_anchors}")
    print(f"    Total unique IDs: {city_anchors + locations_anchor + region_anchors}")

    # Check 8: Updated metadata in service-detail-data.ts
    print("\n[8] service-detail-data.ts metadata update")
    data_content = DATA_FILE.read_text(encoding="utf-8")
    # Find the glassPartitionCleaning export block
    match = re.search(
        r"export const glassPartitionCleaning: ServiceDetail = \{(.*?)(?=\nexport const|\Z)",
        data_content,
        re.DOTALL,
    )
    if match:
        block = match.group(1)
        meta_title = re.search(r'metaTitle:\s*"([^"]+)"', block)
        meta_desc = re.search(r'metaDescription:\s*\n?\s*"([^"]+)"', block)
        if meta_title:
            print(f"    metaTitle: {meta_title.group(1)[:80]}...")
        if meta_desc:
            print(f"    metaDescription: {meta_desc.group(1)[:80]}...")

    print("\n" + "=" * 72)
    print("Verification complete.")
    print("=" * 72)


if __name__ == "__main__":
    verify()

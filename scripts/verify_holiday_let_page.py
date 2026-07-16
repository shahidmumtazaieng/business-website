#!/usr/bin/env python3
"""
Verify the Holiday Let Turnover service page:
- Fetch HTML
- Count H1, H2, H3
- Check SEO-leak (forbidden phrases from the brief strategy language)
- Check internal link counts (/services/* and /locations/*)
- Check byte-offset ordering of key sections (CTA must come before FAQ, FAQ before Final CTA, etc.)
- Unescape HTML entities before substring matching
"""
import urllib.request, urllib.parse, re, html, sys

URL = "http://localhost:3000/services/holiday-let-turnover"

try:
    with urllib.request.urlopen(URL, timeout=30) as r:
        html_raw = r.read().decode("utf-8", errors="replace")
except Exception as e:
    print(f"FATAL: could not fetch {URL} - {e}")
    sys.exit(1)

# Unescape entities for substring checks
text = html.unescape(html_raw)

print("=" * 70)
print(f"Verifying: {URL}")
print("=" * 70)

# --- H1/H2/H3 counts ---
h1_matches = re.findall(r"<h1[^>]*>(.*?)</h1>", html_raw, flags=re.IGNORECASE | re.DOTALL)
h2_matches = re.findall(r"<h2[^>]*>(.*?)</h2>", html_raw, flags=re.IGNORECASE | re.DOTALL)
h3_matches = re.findall(r"<h3[^>]*>(.*?)</h3>", html_raw, flags=re.IGNORECASE | re.DOTALL)

print(f"\n[Headings]")
print(f"  H1 count: {len(h1_matches)}")
for i, h in enumerate(h1_matches, 1):
    clean = re.sub(r"<[^>]+>", "", html.unescape(h)).strip()
    print(f"    H1 #{i}: {clean[:100]}")
print(f"  H2 count: {len(h2_matches)}")
for i, h in enumerate(h2_matches, 1):
    clean = re.sub(r"<[^>]+>", "", html.unescape(h)).strip()
    print(f"    H2 #{i}: {clean[:100]}")
print(f"  H3 count: {len(h3_matches)}")

# --- SEO-leak scan ---
print(f"\n[SEO-leak scan]")
FORBIDDEN = [
    "Topical Authority",
    "outperform competitors",
    "outperform competitor",
    "Green Glide Cleaners",
    "Prestige Cleaning Solutions",
    "Sparkle Sparkle",
    "Semantic SEO Strategy",
    "Semantic Interlinking",
    "Semantic Interlinking:",
    "(Source)",
    "[Deep Cleaning Service]",
    "[End of Tenancy Cleaning]",
    "[After Builders Clean]",
    "[Deep Carpet Cleaning]",
    "[After Builders / Extreme Clean]",
    "[H1]",
    "[H2]",
    "[H3]",
    "[Button:",
    "establish Topical Authority",
    "high-intent keywords",
]

leak_hits = []
for term in FORBIDDEN:
    if term in text:
        # Find context
        idx = text.find(term)
        ctx_start = max(0, idx - 40)
        ctx_end = min(len(text), idx + len(term) + 40)
        ctx = text[ctx_start:ctx_end].replace("\n", " ").strip()
        leak_hits.append((term, ctx))

if leak_hits:
    print(f"  FAIL - {len(leak_hits)} forbidden phrase(s) found:")
    for term, ctx in leak_hits:
        print(f"    [{term}] ...{ctx}...")
else:
    print(f"  PASS - no forbidden SEO-strategy phrases found")

# --- Internal link counts ---
print(f"\n[Internal links]")
services_links = sorted(set(re.findall(r'href="(/services/[^"#?]+)"', html_raw)))
locations_links = sorted(set(re.findall(r'href="(/locations/[^"#?]+)"', html_raw)))
print(f"  Unique /services/* links: {len(services_links)}")
print(f"  Unique /locations/* links: {len(locations_links)}")
if len(locations_links) < 30:
    print(f"  WARNING: expected 36+ /locations/* links, got {len(locations_links)}")

# --- Byte-offset ordering: key sections ---
# Parse all h1/h2/h3 opening tags in document order, capture position + text
print(f"\n[Byte-offset section ordering]")
heading_re = re.compile(r"<(h[123])[^>]*>(.*?)</\1>", re.IGNORECASE | re.DOTALL)
all_headings = []
for m in heading_re.finditer(html_raw):
    tag = m.group(1).lower()
    raw_text = m.group(2)
    clean = re.sub(r"<[^>]+>", "", html.unescape(raw_text)).strip()
    # Normalize whitespace
    clean = re.sub(r"\s+", " ", clean)
    all_headings.append((m.start(), tag, clean))

# Define expected order: list of (section_name, tag, search_substring)
KEY_SECTIONS = [
    ("H1 hero",          "h1", "professional holiday let turnover services in scotland"),
    ("H2 intro",         "h2", "the maundy clean standard for short-term let care"),
    ("H2 why",           "h2", "why maundy clean for scottish short-term let management"),
    ("H2 checklist",     "h2", "our comprehensive holiday let turnover checklist"),
    ("H3 booking",       "h3", "the 3-step"),
    ("H2 interlinking",  "h2", "specialized solutions for property owners"),
    ("H2 near-me",       "h2", "holiday let cleaning near me in scotland"),
    ("H3 final-cta",     "h3", "ready to refresh your holiday let"),
    ("H2 seo-faq",       "h2", "frequently asked questions"),
]

positions = []
for name, want_tag, want_substr in KEY_SECTIONS:
    found = None
    for pos, tag, text in all_headings:
        if tag == want_tag and want_substr in text.lower():
            found = (name, pos, text[:80])
            break
    if found:
        positions.append(found)
        print(f"  {found[0]:25s} -> byte {found[1]:>8d}  | {found[2]}")
    else:
        positions.append((name, -1, ""))
        print(f"  {name:25s} -> NOT FOUND")

# Verify ordering
print(f"\n[Ordering check]")
positions_valid = [p for p in positions if p[1] >= 0]
sorted_by_pos = sorted(positions_valid, key=lambda x: x[1])
actual_order = [p[0] for p in sorted_by_pos]
expected_order = [p[0] for p in positions if p[1] >= 0]
if actual_order == expected_order:
    print(f"  PASS - sections appear in expected order")
else:
    print(f"  FAIL - ordering mismatch")
    print(f"    Expected: {expected_order}")
    print(f"    Actual:   {actual_order}")

# --- Final summary ---
print(f"\n{'=' * 70}")
print("SUMMARY")
print(f"{'=' * 70}")
issues = []
if len(h1_matches) != 1:
    issues.append(f"H1 count = {len(h1_matches)} (expected 1)")
if len(locations_links) < 30:
    issues.append(f"Only {len(locations_links)} /locations/* links (expected 36+)")
if leak_hits:
    issues.append(f"{len(leak_hits)} SEO-leak phrase(s) found")
if actual_order != expected_order:
    issues.append("Section ordering mismatch")

if issues:
    print("ISSUES:")
    for i in issues:
        print(f"  - {i}")
    sys.exit(1)
else:
    print("ALL CHECKS PASS")
    sys.exit(0)

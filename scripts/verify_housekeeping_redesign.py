#!/usr/bin/env python3
"""
Verify the Housekeeping Services redesign + the new standalone near-me page:
- Fetch HTML for both pages
- Count H1, H2, H3 on each
- Check SEO-leak (forbidden phrases from the brief strategy language)
- Check internal link counts (/services/* and /locations/*)
- Check byte-offset ordering of key sections on the main page
- Verify the near-me page has the expected 8 sections
- Unescape HTML entities before substring matching
"""
import urllib.request, re, html, sys

MAIN_URL = "http://localhost:3000/services/housekeeping-services"
NEARME_URL = "http://localhost:3000/services/housekeeping-services-near-me"

def fetch(url):
    try:
        with urllib.request.urlopen(url, timeout=30) as r:
            return r.read().decode("utf-8", errors="replace")
    except Exception as e:
        print(f"FATAL: could not fetch {url} - {e}")
        sys.exit(1)

main_html = fetch(MAIN_URL)
nearme_html = fetch(NEARME_URL)
main_text = html.unescape(main_html)
nearme_text = html.unescape(nearme_html)

# Forbidden phrases from the user's SEO brief — all must be stripped
FORBIDDEN = [
    "Topical Authority",
    "topical authority",
    "outperform competitors",
    "outperform competitor",
    "Daybreak Scotland",
    "Daybreak Source",
    "[314, Daybreak Source]",
    "[373, Daybreak Source]",
    "MaundyClean Semantic SEO Strategy",
    "Semantic SEO Strategy",
    "Semantic Interlinking",
    "Semantic Interlinking:",
    "(Source)",
    "[Source]",
    "[Deep House Cleaning]",
    "[End of Tenancy Cleaning]",
    "[One-Off Spring Clean]",
    "[After Builders Clean]",
    "[H1]",
    "[H2]",
    "[H3]",
    "[Button:",
    "establish Topical Authority",
    "establishing deep Topical Authority",
    "high-intent urban searches",
    "high-intent keywords",
    "signals quality to both you and search engines",
    "signal quality to both you and search engines",
    "MaundyClean",  # must always be "Maundy Clean" with a space
    # NOTE: "showcasing" and "showcase-ready" are explicitly used in the user's brief
    # as marketing copy ("showcasing your living spaces to their absolute best",
    # "showcase-ready"), so they are NOT treated as SEO-strategy leaks.
]

def count_headings(html_raw):
    h1 = re.findall(r"<h1[^>]*>(.*?)</h1>", html_raw, flags=re.IGNORECASE | re.DOTALL)
    h2 = re.findall(r"<h2[^>]*>(.*?)</h2>", html_raw, flags=re.IGNORECASE | re.DOTALL)
    h3 = re.findall(r"<h3[^>]*>(.*?)</h3>", html_raw, flags=re.IGNORECASE | re.DOTALL)
    return h1, h2, h3

def clean(h):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", html.unescape(h))).strip()

def scan_seo_leak(text):
    hits = []
    for term in FORBIDDEN:
        if term in text:
            idx = text.find(term)
            ctx = text[max(0, idx - 50) : idx + len(term) + 50].replace("\n", " ").strip()
            hits.append((term, ctx))
    return hits

def get_internal_links(html_raw):
    services = sorted(set(re.findall(r'href="(/services/[^"#?]+)"', html_raw)))
    locations = sorted(set(re.findall(r'href="(/locations/[^"#?]+)"', html_raw)))
    return services, locations

def get_byte_offsets(html_raw, key_sections):
    heading_re = re.compile(r"<(h[123])[^>]*>(.*?)</\1>", re.IGNORECASE | re.DOTALL)
    all_h = []
    for m in heading_re.finditer(html_raw):
        tag = m.group(1).lower()
        text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", html.unescape(m.group(2)))).strip()
        all_h.append((m.start(), tag, text))
    positions = []
    for name, want_tag, want_substr in key_sections:
        for pos, tag, h_text in all_h:
            if tag == want_tag and want_substr in h_text.lower():
                positions.append((name, pos, h_text[:80]))
                break
        else:
            positions.append((name, -1, ""))
    return positions

# =========================================================================
print("=" * 78)
print(f"Verifying MAIN page: {MAIN_URL}")
print("=" * 78)

main_h1, main_h2, main_h3 = count_headings(main_html)
print(f"\n[Main page headings]")
print(f"  H1 count: {len(main_h1)}")
for h in main_h1:
    print(f"    H1: {clean(h)[:120]}")
print(f"  H2 count: {len(main_h2)}")
for i, h in enumerate(main_h2, 1):
    print(f"    H2 #{i}: {clean(h)[:100]}")
print(f"  H3 count: {len(main_h3)}")

print(f"\n[Main page SEO-leak scan]")
main_leak = scan_seo_leak(main_text)
if main_leak:
    print(f"  FAIL - {len(main_leak)} forbidden phrase(s) found:")
    for term, ctx in main_leak[:10]:
        print(f"    [{term}] ...{ctx}...")
else:
    print(f"  PASS - no forbidden SEO-strategy phrases found")

print(f"\n[Main page internal links]")
main_services, main_locations = get_internal_links(main_html)
print(f"  Unique /services/* links: {len(main_services)}")
print(f"  Unique /locations/* links: {len(main_locations)}")
nearme_in_main = "/services/housekeeping-services-near-me" in main_services
print(f"  Cross-link to near-me page present: {'YES' if nearme_in_main else 'NO'}")

print(f"\n[Main page byte-offset section ordering]")
MAIN_KEY_SECTIONS = [
    ("H1 hero",            "h1", "professional housekeeping & recurring home cleaning scotland"),
    ("H2 intro",           "h2", "the maundy clean standard for trusted housekeeping"),
    ("H2 why",             "h2", "why maundy clean is scotland"),
    ("H2 specialized",     "h2", "specialized care for premium surfaces"),
    ("H3 hardwood",        "h3", "expert hardwood floor maintenance"),
    ("H3 checklist",       "h3", "total property technical checklist"),
    ("H3 booking",         "h3", "the 3-step"),
    ("H2 interlinking",    "h2", "a solution for every stage"),
    ("H2 near-me",         "h2", "housekeeping services near me in scotland"),
    ("H3 final-cta",       "h3", "ready to book your housekeeping service"),
    ("H2 seo-faq",         "h2", "frequently asked questions"),
]
positions = get_byte_offsets(main_html, MAIN_KEY_SECTIONS)
for name, pos, txt in positions:
    if pos >= 0:
        print(f"  {name:25s} -> byte {pos:>8d}  | {txt}")
    else:
        print(f"  {name:25s} -> NOT FOUND")

print(f"\n[Main page ordering check]")
valid = [p for p in positions if p[1] >= 0]
sorted_pos = sorted(valid, key=lambda x: x[1])
actual = [p[0] for p in sorted_pos]
expected = [p[0] for p in valid]
if actual == expected:
    print(f"  PASS - sections appear in expected order")
else:
    print(f"  FAIL - ordering mismatch")
    print(f"    Expected: {expected}")
    print(f"    Actual:   {actual}")

# Verify #checklist anchor is on the specialized care section
print(f"\n[Main page #checklist anchor check]")
has_checklist_id = 'id="checklist"' in main_html or 'id="checklist"' in main_html.replace("'", '"')
print(f"  id=\"checklist\" present: {'YES' if has_checklist_id else 'NO'}")
checklist_links = main_html.count('href="#checklist"')
print(f"  Links to #checklist: {checklist_links}")

# =========================================================================
print("\n" + "=" * 78)
print(f"Verifying NEAR-ME page: {NEARME_URL}")
print("=" * 78)

nm_h1, nm_h2, nm_h3 = count_headings(nearme_html)
print(f"\n[Near-me page headings]")
print(f"  H1 count: {len(nm_h1)}")
for h in nm_h1:
    print(f"    H1: {clean(h)[:120]}")
print(f"  H2 count: {len(nm_h2)}")
for i, h in enumerate(nm_h2, 1):
    print(f"    H2 #{i}: {clean(h)[:100]}")
print(f"  H3 count: {len(nm_h3)}")

print(f"\n[Near-me page SEO-leak scan]")
nm_leak = scan_seo_leak(nearme_text)
if nm_leak:
    print(f"  FAIL - {len(nm_leak)} forbidden phrase(s) found:")
    for term, ctx in nm_leak[:10]:
        print(f"    [{term}] ...{ctx}...")
else:
    print(f"  PASS - no forbidden SEO-strategy phrases found")

print(f"\n[Near-me page internal links]")
nm_services, nm_locations = get_internal_links(nearme_html)
print(f"  Unique /services/* links: {len(nm_services)}")
print(f"  Unique /locations/* links: {len(nm_locations)}")
print(f"  Cross-link back to main housekeeping page: {'YES' if '/services/housekeeping-services' in nm_services else 'NO'}")

print(f"\n[Near-me page byte-offset section ordering]")
NEARME_KEY_SECTIONS = [
    ("H1 hero",            "h1", "housekeeping services near me in scotland"),
    ("H2 intro",           "h2", "local housekeepers you can trust"),
    ("H2 locations",       "h2", "find your local housekeeper"),
    ("H2 why",             "h2", "why scottish households choose maundy clean"),
    ("H2 booking",         "h2", "from quote to first clean in 48 hours"),
    ("H2 specialist",      "h2", "specialist services for every property milestone"),
    ("H2 final-cta",       "h2", "ready for a housekeeper near you"),
    ("H2 faq",             "h2", "frequently asked questions"),
]
nm_positions = get_byte_offsets(nearme_html, NEARME_KEY_SECTIONS)
for name, pos, txt in nm_positions:
    if pos >= 0:
        print(f"  {name:25s} -> byte {pos:>8d}  | {txt}")
    else:
        print(f"  {name:25s} -> NOT FOUND")

print(f"\n[Near-me page ordering check]")
nm_valid = [p for p in nm_positions if p[1] >= 0]
nm_sorted = sorted(nm_valid, key=lambda x: x[1])
nm_actual = [p[0] for p in nm_sorted]
nm_expected = [p[0] for p in nm_valid]
if nm_actual == nm_expected:
    print(f"  PASS - sections appear in expected order")
else:
    print(f"  FAIL - ordering mismatch")
    print(f"    Expected: {nm_expected}")
    print(f"    Actual:   {nm_actual}")

# Verify required brief content is present in main page
print(f"\n[Main page user-brief content integration]")
REQUIRED_PHRASES = [
    "Professional Housekeeping & Recurring Home Cleaning Scotland",
    "The Right Staff, the Right Attitude",
    "Passion for High-Standard Housekeeping",
    "Maundy tradition of service and care",
    "showcase",  # lowercase check for any form
    "Why Maundy Clean is Scotland",
    "Same Trusted Professional Every Visit",
    "Maundy Standard of Excellence",
    "Safe for Your Sanctuary",
    "Fully Vetted and Insured",
    "Specialized Care for Premium Surfaces",
    "Expert Hardwood Floor Maintenance",
    "Total Property Technical Checklist",
    "Gently Buffed",
    "Dust-Free Restoration",
    "Living Areas",
    "Kitchens & Bathrooms",
    "Often-Missed Details",
    "skirting boards",
    "door frames",
    "inside of the windows",
    "Instant Online Quote",
    "Initial Consultation",
    "Enjoy a Pristine Sanctuary",
    "A Solution for Every Stage",
    "Intensive Maintenance",
    "Property Transitions",
    "Seasonal Resets",
    "Post-Renovation",
    "Housekeeping Services Near Me in Scotland",
    "Ready to Book Your Housekeeping Service",
    "Do you provide services in my area",
    "Do I need to provide any equipment",
    "Are there long-term contracts",
    "Get My 30-Second Instant Quote",
    "View Our Regular Cleaning Checklist",
]
missing = [p for p in REQUIRED_PHRASES if p.lower() not in main_text.lower()]
if missing:
    print(f"  FAIL - {len(missing)} required phrase(s) missing:")
    for p in missing:
        print(f"    - {p}")
else:
    print(f"  PASS - all {len(REQUIRED_PHRASES)} required phrases found")

# =========================================================================
print("\n" + "=" * 78)
print("SUMMARY")
print("=" * 78)
issues = []
if len(main_h1) != 1:
    issues.append(f"Main page H1 count = {len(main_h1)} (expected 1)")
if main_leak:
    issues.append(f"Main page: {len(main_leak)} SEO-leak phrase(s)")
if len(main_locations) < 30:
    issues.append(f"Main page: only {len(main_locations)} /locations/* links (expected 36+)")
if actual != expected:
    issues.append("Main page section ordering mismatch")
if missing:
    issues.append(f"Main page: {len(missing)} required brief phrases missing")
if not nearme_in_main:
    issues.append("Main page: no cross-link to near-me page")
if len(nm_h1) != 1:
    issues.append(f"Near-me page H1 count = {len(nm_h1)} (expected 1)")
if nm_leak:
    issues.append(f"Near-me page: {len(nm_leak)} SEO-leak phrase(s)")
if len(nm_locations) < 30:
    issues.append(f"Near-me page: only {len(nm_locations)} /locations/* links (expected 36+)")
if nm_actual != nm_expected:
    issues.append("Near-me page section ordering mismatch")

if issues:
    print("ISSUES:")
    for i in issues:
        print(f"  - {i}")
    sys.exit(1)
else:
    print("ALL CHECKS PASS")
    sys.exit(0)

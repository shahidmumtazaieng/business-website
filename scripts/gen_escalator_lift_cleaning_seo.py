#!/usr/bin/env python3
"""
Verification script for escalator-lift-cleaning SEO migration.
Runs 7 checks against the dev server and source files.
"""
import re
import sys
import urllib.request
import urllib.error
from pathlib import Path

BASE = "http://localhost:3000"
MAIN_URL = f"{BASE}/services/escalator-lift-cleaning"
NEARME_URL = f"{BASE}/services/escalator-lift-cleaning-near-me"

SEO_COMPONENT = Path("/home/z/my-project/src/components/service-detail/escalator-lift-cleaning-seo.tsx")
NEARME_COMPONENT = Path("/home/z/my-project/src/components/service-detail/escalator-lift-cleaning-near-me-page.tsx")

# Bracket markers / SEO-leak patterns to detect in source
SEO_LEAK_PATTERNS = [
    r"\[Competitor[^\]]*\]",
    r"\[Competitor Source\]",
    r"\[Competitor Text\]",
    r"\[Button:[^\]]+\]",
    r"\[H1\]",
    r"\[H2\]",
    r"\[H3\]",
    # Brief numeric markers
    r"\[316\]",
    r"\[363\]",
    r"\[364\]",
    r"\[368\]",
    r"\[369\]",
    r"\[372\]",
    r"\[373\]",
    r"\[377\]",
    r"\[378\]",
    r"\[299\]",
]


def strip_js_comments(src: str) -> str:
    """Strip // line comments (preserves strings, but good enough for marker check)."""
    out = []
    for line in src.splitlines():
        # Find // that's not inside a string (simple heuristic: skip lines where // is inside quotes)
        # For our purpose, just remove from // to EOL if // is not preceded by : (URL scheme) or in a string
        # Simple: if line has // but starts with // or contains // after non-string chars, strip
        stripped = line.lstrip()
        if stripped.startswith("//"):
            continue
        # Find // not inside a string (best-effort: skip if line has odd number of double-quotes before //)
        # For marker detection, we want to skip comment-only markers, not in-string markers
        # Simplification: just keep the line; we'll inspect matches manually
        out.append(line)
    return "\n".join(out)


def fetch(url: str) -> tuple[int, str]:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as r:
            return r.status, r.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", errors="replace")
    except Exception as e:
        return 0, str(e)


def check1_main_page():
    """Check 1: HTTP 200 on main escalator-lift-cleaning page."""
    code, _ = fetch(MAIN_URL)
    print(f"  Check 1: HTTP {code} on /services/escalator-lift-cleaning")
    return code == 200


def check2_nearme_page():
    """Check 2: HTTP 200 on near-me page."""
    code, _ = fetch(NEARME_URL)
    print(f"  Check 2: HTTP {code} on /services/escalator-lift-cleaning-near-me")
    return code == 200


def check3_h1_count():
    """Check 3: H1 count = 1 on main page."""
    _, html = fetch(MAIN_URL)
    h1s = re.findall(r"<h1[^>]*>", html, re.IGNORECASE)
    print(f"  Check 3: H1 count on main page = {len(h1s)}")
    return len(h1s) == 1


def check4_seo_leak_markers():
    """Check 4: SEO-leak markers = 0 in source code (excluding // comments)."""
    src = SEO_COMPONENT.read_text(encoding="utf-8")
    # Strip // comment lines (but keep code lines)
    cleaned_lines = []
    for line in src.splitlines():
        stripped = line.lstrip()
        if stripped.startswith("//"):
            continue
        # Also strip inline // comments (best-effort: find // not in a string)
        # Simple heuristic: only strip if // comes after a non-string char and there are no unmatched quotes before it
        # For our purpose: if line contains "http://" or "https://", don't strip those //
        # Otherwise, find // outside strings
        if "//" in line and "://" not in line:
            # Best-effort: count quotes before //
            in_string = False
            quote_char = None
            cut_pos = len(line)
            i = 0
            while i < len(line) - 1:
                ch = line[i]
                if ch in ('"', "'", "`") and not in_string:
                    in_string = True
                    quote_char = ch
                elif ch == quote_char and in_string:
                    in_string = False
                    quote_char = None
                elif ch == "/" and line[i+1] == "/" and not in_string:
                    cut_pos = i
                    break
                i += 1
            line = line[:cut_pos]
        cleaned_lines.append(line)
    cleaned = "\n".join(cleaned_lines)

    leaks = []
    for pat in SEO_LEAK_PATTERNS:
        for m in re.finditer(pat, cleaned):
            leaks.append((m.start(), m.group(), pat))
            ctx = cleaned[max(0, m.start()-40):m.end()+40]
            print(f"    LEAK at {m.start()}: {m.group()!r}  ctx={ctx!r}")

    print(f"  Check 4: SEO-leak markers = {len(leaks)} (must be 0)")
    return len(leaks) == 0


def check5_internal_links():
    """Check 5: Internal Link components >= 10 in SEO component."""
    src = SEO_COMPONENT.read_text(encoding="utf-8")
    # Count <Link href= occurrences (both as JSX and as href={`/...`} in arrays)
    link_count = len(re.findall(r"<Link\b", src))
    href_in_strings = len(re.findall(r'href=["\']/', src))
    href_in_templates = len(re.findall(r'href=\{`/', src))
    total = link_count
    print(f"  Check 5: <Link> components in SEO file = {link_count} (must be ≥10)")
    return total >= 10


def check6_nearme_anchor_links():
    """Check 6: Near-me anchored links >= 37 (1 button + 36 city grid)."""
    src = SEO_COMPONENT.read_text(encoding="utf-8")
    # Count city anchors rendered via .map() — each becomes one anchor link.
    # Match each { city: "...", slug: "..." } entry directly in the NEAR_ME_LOCATIONS array.
    cities = re.findall(r'\{\s*city:\s*"([^"]+)"\s*,\s*slug:\s*"', src)
    city_count = len(cities)
    # Check for the #locations button
    has_locations_button = "#locations" in src and "escalator-lift-cleaning-near-me#locations" in src
    total = city_count + (1 if has_locations_button else 0)
    print(f"  Check 6: city count = {city_count}, #locations button = {has_locations_button}, total = {total} (must be ≥37)")
    return total >= 37


def check7_typescript_clean():
    """Check 7: TypeScript clean for escalator files (no errors specific to our files)."""
    import subprocess
    try:
        result = subprocess.run(
            ["npx", "tsc", "--noEmit"],
            capture_output=True, text=True, timeout=120,
            cwd="/home/z/my-project"
        )
        out = result.stdout + result.stderr
        # Filter to escalator-related errors only
        escalator_errors = [l for l in out.splitlines() if "escalator" in l.lower()]
        print(f"  Check 7: TypeScript errors specific to escalator files = {len(escalator_errors)} (must be 0)")
        for e in escalator_errors[:5]:
            print(f"    {e}")
        return len(escalator_errors) == 0
    except Exception as e:
        print(f"  Check 7: ERROR running tsc — {e}")
        return False


def main():
    print("=" * 60)
    print("Escalator & Lift Cleaning SEO — 7 Verification Checks")
    print("=" * 60)
    results = []
    results.append(("Check 1: HTTP 200 main page", check1_main_page()))
    results.append(("Check 2: HTTP 200 near-me page", check2_nearme_page()))
    results.append(("Check 3: H1 count = 1", check3_h1_count()))
    results.append(("Check 4: SEO-leak markers = 0", check4_seo_leak_markers()))
    results.append(("Check 5: Internal Links ≥ 10", check5_internal_links()))
    results.append(("Check 6: Near-me anchored links ≥ 37", check6_nearme_anchor_links()))
    results.append(("Check 7: TypeScript clean", check7_typescript_clean()))

    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    passed = sum(1 for _, ok in results if ok)
    for name, ok in results:
        marker = "✓" if ok else "✗"
        print(f"  {marker} {name}")
    print(f"\nTotal: {passed}/{len(results)} passed")
    return 0 if passed == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())

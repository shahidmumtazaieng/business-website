#!/usr/bin/env python3
"""Remove the duplicate old bungalowCleaning block (Service #34) from service-detail-data.ts.
Keep the new bungalowCleaning block at line 355 (the one with the user's SEO brief content)."""

import re
from pathlib import Path

FILE = Path("/home/z/my-project/src/lib/service-detail-data.ts")
text = FILE.read_text()

# Find the old block by matching the comment header through the closing brace
# right before the maidService comment block.
old_block_pattern = re.compile(
    r"\n// =+\n// Service #34 — Bungalow Cleaning \(Residential\)\n// =+\n"
    r"export const bungalowCleaning: ServiceDetail = \{.*?\n\};\n",
    re.DOTALL,
)

match = old_block_pattern.search(text)
if not match:
    print("ERROR: old block not found")
    raise SystemExit(1)

print(f"Found old block: chars {match.start()}-{match.end()} ({match.end() - match.start()} chars)")
print(f"Preview start: {text[match.start():match.start()+120]!r}")
print(f"Preview end:   {text[match.end()-120:match.end()]!r}")

new_text = text[:match.start()] + "\n" + text[match.end():]
FILE.write_text(new_text)
print(f"Removed {match.end() - match.start()} chars. New file size: {len(new_text)}")

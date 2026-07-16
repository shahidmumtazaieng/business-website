#!/usr/bin/env python3
"""
Transform marble-polishing-near-me-page.tsx from VCT-themed clone
into a marble-polishing-themed near-me page.

Strategy: targeted, context-aware replacements applied atomically.
Preserves the 8-section structure and 36-city anchor grid.
"""
from pathlib import Path

SRC = Path("/home/z/my-project/src/components/service-detail/marble-polishing-near-me-page.tsx")

text = SRC.read_text(encoding="utf-8")

# Order matters: longer/more specific replacements first
# to avoid double-substitution.

replacements = [
    # --- Image URL (hero) ---
    ("https://sfile.chatglm.cn/images-ppt/vct-floor-care.jpg",
     "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg"),

    # --- Function / export name ---
    ("VctFloorCareNearMeHero", "MarblePolishingNearMeHero"),

    # --- Route slugs ---
    ("/services/vct-floor-care-near-me#", "/services/marble-polishing-near-me#"),
    ("/services/vct-floor-care-near-me", "/services/marble-polishing-near-me"),
    ("/services/vct-floor-care", "/services/marble-polishing"),

    # --- Pricing ---
    ("£4/m²", "£35/m²"),
    ("£18/m²", "£75/m²"),
    ("£4/m&sup2;", "£35/m&sup2;"),
    ("£18/m&sup2;", "£75/m&sup2;"),
    ("£12-£18/m&sup2;", "£50-£75/m&sup2;"),
    ("£1.50/m&sup2;", "£15/m&sup2;"),

    # --- Compound phrases (before standalone term replacements) ---
    ("VCT floor care & stripping coverage", "marble polishing & stone restoration coverage"),
    ("VCT floor care &amp; stripping coverage", "marble polishing &amp; stone restoration coverage"),
    ("VCT floor care & stripping", "marble polishing & stone restoration"),
    ("VCT floor care &amp; stripping", "marble polishing &amp; stone restoration"),
    ("VCT Floor Care Services Near Me", "Marble Polishing Services Near Me"),
    ("VCT Floor Care Crew Near You", "Marble Polishing Crew Near You"),
    ("VCT Floor Care", "Marble Polishing"),
    ("VCT floor care", "marble polishing"),
    ("VCT-trained", "stone-trained"),
    ("VCT specialist", "marble specialist"),
    ("VCT specialists", "marble specialists"),
    ("VCT zones", "marble zones"),
    ("VCT zone", "marble zone"),
    ("VCT strip-and-refinish", "marble restoration"),
    ("VCT strips", "marble restorations"),
    ("VCT care", "marble care"),
    ("VCT crew", "marble crew"),
    ("VCT is restored", "marble is restored"),
    ("VCT today", "marble today"),
    ("VCT for a comprehensive", "marble for a comprehensive"),
    ("commercial VCT", "commercial marble"),
    ("local VCT", "local marble"),
    ("stripping, refinishing, and burnishing", "diamond-grit honing, polishing, and sealing"),
    ("stripping, sealing, and finishing", "honing, polishing, and sealing"),
    ("stripping and refinishing", "diamond-grit honing and polishing"),
    ("strip and refinish", "polish and seal"),
    ("strip-and-refinish", "polish-and-seal"),
    ("Stripping & Deep Cleaning", "Diamond Honing & Polishing"),
    ("Technical Sealing & Finishing", "Premium Impregnating Sealing"),
    ("high-speed burnish technology", "diamond-grit honing technology"),
    ("high-speed burnishing", "mechanical polishing"),
    ("high-speed burnish", "mechanical polish"),
    ("wet-look gloss", "mirror finish"),
    ("wet-look high-gloss", "mirror-finish high-gloss"),
    ("wet-look shine", "mirror-finish shine"),
    ("metal-interlock polish", "polishing compound"),
    ("high-solids sealer", "impregnating sealer"),
    ("multi-layer waxing", "multi-stage polishing"),
    ("alkaline stripper for VCT", "pH-neutral cleaner for marble"),
    ("scrub-and-recoat", "maintenance polish"),
    ("scot-school-holiday", "school-holiday"),
    ("school-holiday VCT strips", "school-holiday marble restorations"),
    ("VCT in corridors", "marble in corridors"),
    ("VCT in my Glasgow school", "marble in my Glasgow school"),
    ("25% commercial, 30% premium", "matte, satin, or high-gloss mirror"),
    ("standard VCT", "standard marble"),
    ("homogeneous vinyl, safety vinyl, anti-static VCT for server rooms, and conductive VCT for theatres and operating rooms",
     "Carrara, Calacatta, Statuary, Crema Marfil, Emperador, and Nero Marquina, plus travertine, limestone, and terrazzo"),
    ("vinyl composition tile", "natural stone marble"),
    ("VCT substrate", "marble substrate"),
    ("fine abrasive dust that settles on hard floors",
     "fine abrasive dust that settles on natural stone"),
    ("stripped VCT floor", "polished marble floor"),
    ("hard floor care", "stone floor care"),
    ("hard floor reset", "stone floor reset"),
    ("hard floors", "natural stone"),
    ("VCT entrances", "marble entrances"),
    ("VCT corridors", "marble corridors"),
    ("VCT aisles", "marble aisles"),
    ("VCT zones", "marble zones"),
    ("Marble Polishing Specialists", "Marble Polishing Specialists"),  # idempotent
    ("Find Your Local VCT Crew", "Find Your Local Marble Crew"),
    ("Local VCT Floor Care You Can Trust", "Local Marble Polishing You Can Trust"),
    ("Local VCT floor care, stripping &amp; refinishing &middot; Scotland-wide",
     "Local marble polishing &amp; stone restoration &middot; Scotland-wide"),
    ("Local VCT", "Local Marble"),
    ("commercial VCT", "commercial marble"),
    ("VCT-trained floor care", "stone-trained marble care"),
    ("stripped, refinished, and cured", "honed, polished, and sealed"),
    ("slip-resistant polish additives", "breathable impregnating sealers"),
    ("low-speed rotary machines, high-speed burnishers, HEPA-filtered wet/dry vacuums, air movers, gloss meters, colour-coded pad systems",
     "weighted rotary machines, progressive diamond-grit pads, wet-vacuum slurry extractors, air movers, gloss meters, colour-coded pad systems"),
    ("commercial vinyl composition tile floor to a wet-look gloss",
     "natural stone marble floor to a mirror finish"),
    ("VCT floor care specialist stripping, refinishing and burnishing a commercial vinyl composition tile floor to a wet-look gloss in a Scottish property",
     "marble polishing specialist diamond-grit honing, polishing and sealing a natural stone marble floor to a mirror finish in a Scottish property"),
    ("commercial VCT entrance", "commercial marble entrance"),
    ("retail-chain aisle", "retail-chain aisle"),
    ("school corridor", "hotel lobby"),
    ("VCT entrance", "marble entrance"),
    ("local VCT floor care", "local marble polishing"),
    ("local VCT-trained", "local stone-trained"),
    ("VCT and adjacent resilient surfaces", "marble and adjacent natural stone surfaces"),
    ("substrate, the existing finish, and the traffic pattern",
     "stone type, the existing polish, and the traffic pattern"),
    ("floor type", "stone type"),
    ("VCT care quote", "marble care quote"),
    ("VCT zones, footprint, and traffic pattern", "marble zones, footprint, and traffic pattern"),
    ("VCT-trained floor care specialist", "stone-trained marble polishing specialist"),
    ("VCT-trained standard", "stone-trained standard"),
    ("VCT specialist &mdash; wherever", "marble specialist &mdash; wherever"),
    ("VCT-trained", "stone-trained"),
    ("VCT in corridors, halls, classrooms, and dining areas",
     "marble in lobbies, corridors, receptions, and feature zones"),
    ("VCT floor care specialist near you", "marble polishing specialist near you"),
    ("VCT floor care and restoration", "marble polishing and restoration"),
    ("VCT floor care client", "marble polishing client"),
    ("VCT floor care clients", "marble polishing clients"),
    ("VCT floor care is the perfect reset", "marble polishing is the perfect reset"),
    ("VCT is restored, keep it pristine", "marble is restored, keep it pristine"),
    ("VCT floor", "marble floor"),
    ("VCT tile", "marble tile"),
    ("VCT for a comprehensive property refresh",
     "marble for a comprehensive property refresh"),
    ("VCT to its original appearance", "marble to its original appearance"),
    ("VCT standard", "marble standard"),
    ("5-10 year guarantee on every full refinish",
     "5-10 year guarantee on every full restoration"),
    ("5-10 year guarantee", "5-10 year guarantee"),
    ("full strip and refinish with premium 30% solids polish",
     "full restoration with etch-mark treatment and re-seal"),
    ("full strip-and-refinish", "full polish-and-seal"),
    ("full refinish", "full restoration"),
    ("full strip", "full restoration"),
    ("local VCT-trained floor care specialist",
     "local stone-trained marble polishing specialist"),
    ("VCT-trained floor care specialists",
     "stone-trained marble polishing specialists"),
    ("VCT-trained floor care specialist",
     "stone-trained marble polishing specialist"),
    ("floor care specialist", "marble polishing specialist"),
    ("floor care & stripping", "marble polishing & stone restoration"),
    ("floor care &amp; stripping", "marble polishing &amp; stone restoration"),
    ("floor care specialists", "marble polishing specialists"),
    ("floor care", "marble care"),
    ("Floor Care", "Marble Polishing"),
    ("local VCT floor care", "local marble polishing"),
    ("Local VCT", "Local Marble"),
    ("VCT-trained", "stone-trained"),
    ("VCT specialist", "marble specialist"),
    ("VCT specialists", "marble specialists"),
    ("VCT floor care specialist", "marble polishing specialist"),
    ("VCT floor care", "marble polishing"),
    ("VCT Floor Care", "Marble Polishing"),
    ("VCT care", "marble care"),
    ("VCT standard", "marble standard"),
    ("VCT substrate", "marble substrate"),
    ("VCT zones", "marble zones"),
    ("VCT zone", "marble zone"),
    ("VCT-trained", "stone-trained"),
    ("VCT crew", "marble crew"),
    ("VCT entrances", "marble entrances"),
    ("VCT corridors", "marble corridors"),
    ("VCT aisles", "marble aisles"),
    ("VCT tile", "marble tile"),
    ("VCT today", "marble today"),
    ("VCT is restored", "marble is restored"),
    ("VCT for a comprehensive", "marble for a comprehensive"),
    ("commercial VCT", "commercial marble"),
    ("local VCT", "local marble"),
    ("VCT-trained", "stone-trained"),
    ("VCT in corridors", "marble in corridors"),
    ("VCT in my Glasgow", "marble in my Glasgow"),
    ("VCT strips", "marble restorations"),
    ("VCT strip", "marble restoration"),
    ("VCT and adjacent", "marble and adjacent"),
    ("VCT floor", "marble floor"),
    ("VCT to its original", "marble to its original"),
    ("VCT standard", "marble standard"),
    ("VCT", "marble"),

    # --- Cleanup: any leftover "stripping" / "burnish" ---
    ("high-speed burnishing program", "mechanical polishing programme"),
    ("high-speed burnishing programme", "mechanical polishing programme"),
    ("burnish program", "polish programme"),
    ("burnish programme", "polish programme"),
    ("burnish", "polish"),
    ("Burnishing", "Polishing"),
    ("Burnish", "Polish"),

    # --- Quote/pricing cleanup for marble context ---
    ("From £35/m&sup2; for quarterly maintenance polish through to £75/m&sup2; for full polish-and-seal",
     "From £35/m&sup2; for quarterly maintenance polish through to £75/m&sup2; for full restoration"),
    ("£15/m&sup2; per visit", "£15/m&sup2; per visit"),
    ("From £35/m&sup2; for quarterly maintenance polish through to £75/m&sup2; for full restoration with etch-mark treatment and re-seal",
     "From £35/m&sup2; for quarterly maintenance polish through to £75/m&sup2; for full restoration with etch-mark treatment and re-seal"),

    # --- "polish solids content" specific ---
    ("polish solids content (25% commercial, 30% premium)",
     "polish spec (matte, satin, or high-gloss mirror)"),

    # --- "Quarters" / "-quarters" / specific phrases ---
    ("IFSD corporate VCT entrance", "IFSD corporate marble entrance"),
    ("IFSD corporate marble entrance", "IFSD corporate marble entrance"),  # idempotent

    # --- "VCT-trained" leftover ---
    ("marble marble", "marble"),  # cleanup any double-substitutions

    # --- "polish solids content" already handled above ---
]

# Apply replacements
for old, new in replacements:
    text = text.replace(old, new)

# Final cleanups for double-replacements
text = text.replace("marble marble", "marble")
text = text.replace("Marble Marble", "Marble")
text = text.replace("stone stone", "stone")
text = text.replace("Stone Stone", "Stone")
text = text.replace("marble polishing marble polishing", "marble polishing")
text = text.replace("Marble Polishing Marble Polishing", "Marble Polishing")
text = text.replace("polishing polishing", "polishing")
text = text.replace("honing honing", "honing")
text = text.replace("sealing sealing", "sealing")

SRC.write_text(text, encoding="utf-8")

print(f"Transformed: {SRC}")
print(f"New size: {len(text)} chars, {text.count(chr(10))} lines")

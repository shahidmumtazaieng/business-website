// Full blog post content for /blog/[slug] detail pages.
// Each entry mirrors an item in blogPosts (site-data.ts) by slug, and adds:
//   - author + authorRole
//   - content[] — an array of section blocks rendered by /blog/[slug]/page.tsx
//
// Block types:
//   { type: "p", text: string }                                    — paragraph
//   { type: "h2", text: string }                                   — subheading
//   { type: "quote", text: string, cite?: string }                 — pull quote
//   { type: "list", items: string[] }                              — bullet list
//   { type: "callout", title: string, text: string }               — highlighted box
//   { type: "table", headers: string[], rows: string[][] }         — comparison table

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogPostFull = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  content: BlogBlock[];
};

// ---- Image constants (kept here so the file is self-contained) ----
const IMG = {
  blogDeep: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.23.18%20PM.jpeg",
  blogElectro: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
  blogMove: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.28.09%20PM.jpeg",
  blogRoof: "https://sfile.chatglm.cn/images-ppt/23f9d6e7b05c.png",
  blogRestroom: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
  blogOps: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
};

export const blogPostsFull: BlogPostFull[] = [
  // ============================================================
  // POST 1 — How Often Should You Deep Clean Your Home?
  // ============================================================
  {
    slug: "how-often-deep-clean-home-room-by-room",
    title: "How Often Should You Deep Clean Your Home? A Room-by-Room Guide",
    category: "Residential",
    readTime: "8 min",
    date: "10 Jul 2026",
    excerpt:
      "Frequency matters. We break down exactly how often each room in your home needs a deep clean — from kitchens and bathrooms to bedrooms and home offices — so you can build a realistic cleaning calendar for the Scottish climate.",
    image: IMG.blogDeep,
    author: "Dr Fiona Reid",
    authorRole: "Head of Compliance & Training, Maundy Clean",
    authorInitials: "FR",
    content: [
      {
        type: "p",
        text: "If you ask ten cleaners how often you should deep clean your home, you'll get ten different answers. That's because the right frequency depends on three variables most guides gloss over: how many people live in the property, what the property is made of (Victorian tenement vs new-build estate vs rural cottage), and what the Scottish climate is doing to it. This guide gives you specific, room-by-room frequencies drawn from the protocol library we use across 220 operative cleanings every day — calibrated for Scottish homes.",
      },
      {
        type: "p",
        text: "Before we get into the rooms, one rule of thumb: deep cleaning is not the same as tidying, and it's not the same as your weekly reset. A deep clean is the systematic, top-to-bottom, behind-and-under protocol that takes 4-6 hours for a 2-bed property. Weekly resets are surface-level — wipe, vacuum, mop, bin. Deep cleans are what catches the things weekly resets miss: grease behind the oven, dust on top of the kitchen units, limescale inside the showerhead, mould on the bathroom ceiling grout. You can do a weekly reset forever and still need a deep clean once a quarter.",
      },
      { type: "h2", text: "Kitchen — every 6 to 8 weeks" },
      {
        type: "p",
        text: "The kitchen is the most contamination-sensitive room in any home, and the one that benefits most from a structured deep-clean frequency. Grease aerosolises every time you cook — it lands on top of the units, on the splashback grout, on the extractor hood mesh, on the ceiling above the hob. Left for 12 weeks, it polymerises into a yellow varnish that's 5x harder to remove. A 6-8 week cycle keeps it as a wipe-clean film.",
      },
      {
        type: "list",
        items: [
          "Inside oven: degrease (non-caustic), re-season the racks, clean the door glass",
          "Behind & under the freestanding appliances (you'd be amazed what's under the fridge)",
          "Extractor hood mesh: soak in hot degreaser, dry, refit",
          "Top of wall units: degrease wipe-down",
          "Splashback grout: enzyme cleaner, re-seal if needed",
          "Plugholes: enzyme drain treatment (no bleach — it kills the good bacteria)",
          "Kickboards: vacuum the dust, wipe the grease",
          "Bin: full sanitisation (EN 14476), deodorise, dry",
        ],
      },
      {
        type: "callout",
        title: "Why 6-8 weeks, not 12?",
        text: "We ran a side-by-side trial in 2024 across 40 Glasgow kitchens. At 6 weeks, grease film wipes off in one pass with a microfibre cloth and food-safe degreaser. At 12 weeks, the same job takes three passes and a scrubbing pad. At 24 weeks, the grease has yellowed and started to etch painted surfaces — full restoration requires chemical stripper. The cost-per-clean is the same; the labour cost is 3x higher at 12 weeks and 8x higher at 24 weeks. Clean more often, pay less overall.",
      },
      { type: "h2", text: "Bathroom — every 4 to 6 weeks" },
      {
        type: "p",
        text: "Bathrooms in Scotland have a harder life than bathrooms anywhere else in the UK. The combination of hard water (especially in Edinburgh and the Borders), high humidity, and inadequate extraction in older housing stock means limescale forms faster, mould spores germinate faster, and grout degrades faster. A 4-6 week deep clean cycle is the sweet spot.",
      },
      {
        type: "list",
        items: [
          "Showerhead: descale (citric acid soak for eco, phosphoric for conventional)",
          "Shower screen: limescale strip, hydrophobic coating reapply",
          "Grout: enzyme cleaner, re-seal annually",
          "Behind the toilet (yes, behind it) — sanitise",
          "Toilet cistern: descale (often overlooked — affects flush performance)",
          "Extractor fan: vacuum the dust, wipe the grease",
          "Silicone sealant: inspect for mould, replace if degraded (don't just bleach it)",
          "Wall tiles: descale, polish",
        ],
      },
      {
        type: "callout",
        title: "The mould myth",
        text: "Bleach does not kill mould. It bleaches the visible mycelium white, but the root structure (hyphae) survives in the silicone or grout and regrows within 2-3 weeks. The only way to permanently remove bathroom mould is to remove the affected silicone or grout and replace it. The only way to prevent it is to fix the ventilation. Bleach is a cosmetic intervention, not a remediation. We tell every client this on the first visit.",
      },
      { type: "h2", text: "Bedrooms — every 12 weeks" },
      {
        type: "p",
        text: "Bedrooms accumulate dust, skin cells and fabric fibres rather than grease or limescale. The deep clean here is about air quality and allergen management — particularly important for asthma and eczema sufferers, which is a significant proportion of Scottish households. A 12-week cycle keeps dust mite populations in check and mattress allergen loading below the threshold that triggers symptoms in most adults.",
      },
      {
        type: "list",
        items: [
          "Mattress: vacuum (HEPA), stain treat, UV sanitise, rotate head-to-foot",
          "Under the bed: full vacuum (this is where dust mites thrive)",
          "Wardrobe interiors: empty, wipe, deodorise, refold",
          "Skirting boards & architraves: damp wipe",
          "Light fittings & lampshades: dust (often missed)",
          "Curtains: vacuum (HEPA), steam treat if washable",
          "Behind radiators: radiator brush (massive dust trap)",
        ],
      },
      { type: "h2", text: "Living room — every 12 weeks" },
      {
        type: "p",
        text: "Similar frequency to bedrooms, with the added complication of soft furnishings. Sofas, armchairs and rugs act as dust reservoirs — every time you sit down, you re-aerosolise the trapped dust. A 12-week deep clean that includes upholstery extraction and a proper rug beating dramatically reduces living-room dust levels. If you have pets, halve the frequency to 6 weeks.",
      },
      {
        type: "list",
        items: [
          "Sofa & armchairs: HWE extraction (hot water extraction), stain treat, reapply fabric protector",
          "Rugs: take outside, beat, vacuum both sides, edge-clean",
          "Under sofas & armchairs (the void beneath is a dust bunny factory)",
          "Skirtings & architraves: damp wipe",
          "Light fittings & ceiling rose: dust",
          "TV screen & AV equipment: electronics-safe wipe (never glass cleaner)",
          "Books & shelves: dust (top-down, don't forget the top edge of the books)",
        ],
      },
      { type: "h2", text: "Home office — every 8 weeks" },
      {
        type: "p",
        text: "Home offices are often the dustiest room in the house. Paper is a dust generator (every page you turn sheds microscopic cellulose fibres), printers and shredders are dust bombs, and the static charge on monitors and screens attracts dust from across the room. An 8-week cycle keeps the keyboard gunk at bay and the monitor streak-free — both of which affect your productivity more than you think.",
      },
      {
        type: "list",
        items: [
          "Keyboard: compressed air, keycap pull, sanitise (keyboards carry 5x more bacteria than a toilet seat)",
          "Monitor: electronics-safe wipe, microfibre buff",
          "Printer & shredder: vacuum (do not blow — you'll spread the dust)",
          "Desk surface: damp wipe, sanitise, dry",
          "Cable run: dust (the cable spaghetti behind your desk is a dust trap)",
          "Filing cabinet tops: dust",
        ],
      },
      { type: "h2", text: "Hallway, stairs & landing — every 8 weeks" },
      {
        type: "p",
        text: "The transitional spaces in your home are the highest-traffic areas, which means they accumulate dirt faster than any other room. But they're also the easiest to deep clean — usually 30-45 minutes for a typical hallway and staircase. An 8-week cycle keeps the carpet pile upright, the paintwork fresh, and the bannister sanitised (the bannister is one of the most-touched surfaces in any home).",
      },
      { type: "h2", text: "A realistic cleaning calendar" },
      {
        type: "p",
        text: "Here's the calendar we recommend to clients — based on 220 operative cleanings per day across 72 Scottish locations. Adjust the frequencies based on household size (more people = more frequent), pet ownership (halve the frequencies), and property type (tenements benefit from more frequent stairwell cleans).",
      },
      {
        type: "table",
        headers: ["Room", "Deep clean frequency", "Time per clean"],
        rows: [
          ["Kitchen", "Every 6-8 weeks", "2-3 hours"],
          ["Bathroom", "Every 4-6 weeks", "1.5-2 hours"],
          ["Bedrooms", "Every 12 weeks", "1 hour per room"],
          ["Living room", "Every 12 weeks", "1.5 hours"],
          ["Home office", "Every 8 weeks", "1 hour"],
          ["Hallway & stairs", "Every 8 weeks", "45 mins"],
          ["Whole house", "Quarterly (every 13 weeks)", "5-7 hours total"],
        ],
      },
      {
        type: "quote",
        text: "The single biggest mistake we see is households treating 'deep clean' as an annual event. By the time you notice the limescale on the showerhead, it's been there 6 months. A quarterly whole-house deep clean, supplemented by room-specific deep cleans on the rotation above, is what keeps a home genuinely clean — not just visually clean, but hygienically clean.",
        cite: "Dr Fiona Reid, Head of Compliance & Training",
      },
      {
        type: "p",
        text: "If all this sounds like a lot of work, that's because it is. A full quarterly deep clean of a 3-bed home is 5-7 hours of physical labour — and that's with a two-person trained crew using commercial-grade equipment. Doing it solo, with domestic equipment, takes 2-3x longer. Which is why most of our residential clients book a recurring weekly or fortnightly plan (which keeps the surface clean) and add a quarterly deep clean on top. The combination is what delivers a genuinely clean home without you spending your weekends on it.",
      },
    ],
  },

  // ============================================================
  // POST 2 — Electrostatic Disinfection
  // ============================================================
  {
    slug: "electrostatic-disinfection-office-standard",
    title: "Electrostatic Disinfection: Why It's Now the Office Standard",
    category: "Commercial",
    readTime: "6 min",
    date: "7 Jul 2026",
    excerpt:
      "Post-pandemic, electrostatic spraying moved from a niche hospital protocol to a baseline office service. Here's the science behind it, what it kills, and what it doesn't.",
    image: IMG.blogElectro,
    author: "Dr Fiona Reid",
    authorRole: "Head of Compliance & Training, Maundy Clean",
    authorInitials: "FR",
    content: [
      {
        type: "p",
        text: "In February 2020, electrostatic disinfection was a niche service offered by a handful of specialist biohazard contractors, primarily for hospitals, cleanrooms and pharmaceutical facilities. By September 2020, it was a baseline expectation in office cleaning tenders. The pandemic compressed a decade of adoption into six months — but the science behind electrostatic spraying predates COVID by 70 years, and its limitations are still widely misunderstood.",
      },
      {
        type: "p",
        text: "This article explains what electrostatic disinfection actually is, what it kills (and what it doesn't), when it's the right tool, and when it's the wrong tool being used because someone read a brochure. We deploy electrostatic sprayers daily across Scotland — for outbreak response in offices, schools and care homes, for routine disinfection in medical settings, and as an add-on to our standard commercial cleaning protocol. Used correctly, it's transformative. Used incorrectly, it's expensive theatre.",
      },
      { type: "h2", text: "The science: how electrostatic spraying works" },
      {
        type: "p",
        text: "An electrostatic sprayer gives each droplet of disinfectant a positive electrical charge as it leaves the nozzle. Surfaces in the room are negatively charged (or grounded, which has the same effect). Opposite charges attract — the positively-charged droplets are pulled towards the negatively-charged surfaces, wrapping around them and providing 360° coverage even on the underside and back of objects.",
      },
      {
        type: "p",
        text: "Without the electrostatic charge, droplets land only on the side of an object facing the sprayer — the back of a chair leg, the underside of a desk, the rear of a computer monitor all remain untouched. With the charge, the same droplet volume covers 3-4x more surface area. That's the entire point of the technology: better coverage with less chemistry, in less time.",
      },
      {
        type: "callout",
        title: "The 70-year history",
        text: "Electrostatic spraying was invented in the 1940s for agricultural pesticide application — farmers needed to coat the underside of leaves, not just the top. It was adopted for automotive painting in the 1960s (better paint coverage, less waste). It moved into healthcare disinfection in the 2000s, primarily for terminal cleaning of hospital rooms after C. difficile or Norovirus patients. The technology is mature; the pandemic just made it mainstream.",
      },
      { type: "h2", text: "What electrostatic disinfection kills" },
      {
        type: "p",
        text: "The chemistry matters more than the sprayer. Electrostatic spraying is a delivery mechanism — what kills the pathogens is the disinfectant you put in the tank. We use EN 14476 virucidal chemistry, proven effective against enveloped and non-enveloped viruses, bacteria, fungi and bloodborne pathogens. The chemistry passes the relevant European Norms:",
      },
      {
        type: "table",
        headers: ["Standard", "Tests against", "Pass threshold"],
        rows: [
          ["EN 14476", "Virucidal activity (Norovirus, Poliovirus, Adenovirus, Murine Norovirus)", "≥4 log reduction (99.99%)"],
          ["EN 1276", "Bactericidal activity (E. coli, MRSA, Salmonella, Listeria)", "≥5 log reduction (99.999%)"],
          ["EN 1650", "Fungicidal activity (Candida albicans, Aspergillus)", "≥4 log reduction"],
          ["EN 13697", "Surface disinfection in medical area", "≥4 log reduction, surface test"],
        ],
      },
      {
        type: "p",
        text: "Translation: the chemistry we use, delivered electrostatically, kills 99.999% of common bacteria and 99.99% of common viruses on the surfaces it touches. For office environments, this covers cold and flu viruses, Norovirus, MRSA, E. coli, Salmonella, and yes, SARS-CoV-2 (which is a relatively easy-to-kill enveloped virus — most disinfectants work on it).",
      },
      { type: "h2", text: "What it does NOT kill" },
      {
        type: "p",
        text: "This is where the marketing claims get slippery. Electrostatic disinfection does not kill:",
      },
      {
        type: "list",
        items: [
          "Bacterial spores (C. difficile spores require a sporicide — different chemistry)",
          "Biofilms (the chemistry can't penetrate established biofilm; mechanical removal first)",
          "Anything inside a closed drawer, cupboard or container (the charge wraps around surfaces, but doesn't penetrate solid objects)",
          "Anything under heavy organic load (visible dirt must be removed first — disinfectant binds to organic matter and is inactivated)",
          "Anything on a surface the chemistry can't reach (electrostatics improve coverage, but they don't defy physics — if the droplet can't get there, the charge can't help)",
        ],
      },
      {
        type: "callout",
        title: "The 'dirty surface' rule",
        text: "Disinfectant chemistry binds to organic matter — blood, food, faeces, visible dirt. If you spray disinfectant on a visibly soiled surface, the chemistry binds to the dirt, not the bacteria underneath. The surface is 'disinfected' on paper but the bacteria are still alive beneath the dirt. This is why electrostatic disinfection should always follow a clean, never replace it. The correct protocol is: clean to remove organic load, then disinfect to kill remaining pathogens.",
      },
      { type: "h2", text: "When electrostatic spraying is the right tool" },
      {
        type: "p",
        text: "Electrostatic disinfection is the right choice for high-density, high-touch environments where 360° coverage matters and where you can tolerate the chemistry dwell time. Specifically:",
      },
      {
        type: "list",
        items: [
          "Offices during/after an outbreak (Norovirus, flu, COVID) — covers every desk, chair, keyboard, door handle in one pass",
          "Schools and nurseries — high-touch environments with rapid pathogen transmission",
          "Care homes — high-vulnerability population, outbreak-prone settings",
          "Medical waiting rooms — terminal disinfection between sessions",
          "Gyms and fitness studios — equipment with awkward shapes, high-touch surfaces",
          "Public transport vehicles — bus, tram, train interior disinfection",
          "Restaurants — between services during a Norovirus outbreak in the community",
        ],
      },
      { type: "h2", text: "When it's the wrong tool" },
      {
        type: "p",
        text: "It's the wrong tool when there's visible soiling (clean first, then disinfect), when the space is empty of items (a bare room gains nothing from electrostatics vs a fogger), when the chemistry dwell time can't be tolerated (offices that can't be vacated for 30 minutes), or when the surfaces are incompatible with the chemistry (some soft furnishings, electronics, artwork).",
      },
      {
        type: "p",
        text: "It's also the wrong tool when it's being sold as a replacement for routine cleaning. Electrostatic disinfection kills pathogens — it does not remove dirt, grease, grime, limescale, or any visible soil. If your cleaning contractor is pitching electrostatic as the 'new way' to clean, walk away. The correct protocol is: routine cleaning (visible soil removal) followed by electrostatic disinfection (pathogen kill) where required.",
      },
      {
        type: "quote",
        text: "Electrostatic disinfection is a tool in the kit, not a silver bullet. Used correctly — after a clean, with the right chemistry, on the right surfaces, with the right dwell time — it's transformative. Used incorrectly, it's expensive theatre that gives a false sense of hygiene. The technology is mature; the marketing is not.",
        cite: "Dr Fiona Reid, Head of Compliance & Training",
      },
      {
        type: "p",
        text: "If you're considering electrostatic disinfection for your office, school or commercial space, the right questions to ask are: what chemistry are you using (ask for EN 14476 and EN 1276 certification), what's the dwell time, what surfaces are incompatible, and what does the protocol look like (clean first, then disinfect — never just disinfect). If the answers are vague, find another contractor. The technology is real — but it has to be deployed correctly to deliver the pathogen kill it promises.",
      },
    ],
  },

  // ============================================================
  // POST 3 — Move-Out Cleaning Checklist
  // ============================================================
  {
    slug: "move-out-cleaning-checklist-deposit-back",
    title: "Move-Out Cleaning Checklist That Actually Gets Your Deposit Back",
    category: "Move In / Out",
    readTime: "10 min",
    date: "3 Jul 2026",
    excerpt:
      "We've audited 1,200 move-out walk-throughs with Scottish letting agents and pulled out the 47 things they check first. Print this checklist and walk through it the night before handover.",
    image: IMG.blogMove,
    author: "Eilidh Drummond",
    authorRole: "Letting Agency Liaison, Maundy Clean",
    authorInitials: "ED",
    content: [
      {
        type: "p",
        text: "In 12 years of cleaning for Scottish letting agents — and auditing 1,200+ move-out walk-throughs alongside them — we've learned exactly what gets checked, what gets missed, and what gets a deposit扣. The pattern is remarkably consistent: the same 47 items appear on nearly every deduction notice. Master those 47 and you'll get your deposit back. Miss them and you'll lose £80-£400 to 'professional cleaning fees' that the agent's contractor may or may not actually deliver.",
      },
      {
        type: "p",
        text: "This checklist is the protocol our move-out teams use on every end-of-tenancy clean. It's organised by room, prioritised by what agents check first, and includes the 'why' behind each item — because understanding the agent's perspective is what turns a generic clean into a deposit-safe clean. Print it, work through it the night before handover, and don't skip the items marked CRITICAL.",
      },
      {
        type: "callout",
        title: "The legal context (Scotland)",
        text: "Under the Scottish Tenancy Deposit Schemes (SafeDeposits Scotland, mydeposits Scotland, Letting Protection Service Scotland), the landlord must prove that any deduction is reasonable and based on actual loss. 'Professional cleaning' deductions are routinely challenged and overturned if the property was left in a clean, hygienic condition. The inventory you signed at move-in is your defence — and a photo-walkthrough before handover is your evidence. Clean to the inventory; photograph the result; you'll get your deposit back.",
      },
      { type: "h2", text: "Kitchen (12 items — 3 CRITICAL)" },
      {
        type: "list",
        items: [
          "CRITICAL — Inside the oven: degrease, re-season racks, clean door glass. Letting agents open the oven door first; a dirty oven is the #1 reason for cleaning deductions.",
          "CRITICAL — Inside the fridge: defrost if needed, sanitise, deodorise. Remove all shelves and drawers; clean the back of the cavity.",
          "CRITICAL — Inside the microwave: degrease, sanitise, remove the turntable and wash separately.",
          "Extractor hood: remove mesh filters, soak in degreaser, dry, refit.",
          "Splashback tiles: degrease, grout-line clean.",
          "Sink & drainer: descale, sanitise, polish the tap (limescale on taps is a frequent deduction).",
          "Plughole: enzyme drain treatment (do not use bleach — agents can smell it and it indicates you've masked a problem).",
          "Worktops: degrease, sanitise, dry. Pay attention to the upstand edge where it meets the wall.",
          "Cupboard interiors: empty, wipe, dry. Crumb residue in cupboards is a common 'not properly cleaned' finding.",
          "Cupboard exteriors: degrease, paying attention to handles (finger grease builds up).",
          "Floor: sweep, mop, dry. Move the freestanding appliances and clean underneath — agents always check.",
          "Bin: sanitise, deodorise, dry. Replace the bin bag with a fresh one.",
        ],
      },
      { type: "h2", text: "Bathroom (9 items — 2 CRITICAL)" },
      {
        type: "list",
        items: [
          "CRITICAL — Shower screen: full limescale strip, hydrophobic coating reapply. Cloudy shower glass is the bathroom equivalent of a dirty oven.",
          "CRITICAL — Grout & silicone: clean, re-seal if degraded. Mould on silicone is routinely deducted — replace the silicone rather than bleach it (bleach only masks, doesn't kill).",
          "Showerhead: descale (soak in citric acid solution).",
          "Bath: descale, sanitise, polish the chrome waste/overflow.",
          "Toilet — full sanitisation including behind, under, and the cistern. Lift the lid and check the hinge (frequently missed).",
          "Sink & pedestal: descale, sanitise, polish tap.",
          "Wall tiles: descale, wipe dry.",
          "Mirror: streak-free clean (use microfibre, not glass cleaner which can damage the silvering).",
          "Floor: mop, dry. Pay attention to the floor behind the toilet and around the pedestal.",
        ],
      },
      { type: "h2", text: "Living areas & bedrooms (10 items)" },
      {
        type: "list",
        items: [
          "Skirting boards: damp wipe the full perimeter. Dust on skirtings is a frequent deduction.",
          "Door frames & architraves: damp wipe, paying attention to the top edge (dust collects there).",
          "Light switches & socket facias: sanitise (yellowing around switches is grease and is deducted).",
          "Light fittings & lampshades: dust, wipe if washable.",
          "Window sills: damp wipe.",
          "Windows (interior): streak-free clean.",
          "Radiators: dust the top, wipe the front, brush behind (radiator brush).",
          "Curtains: vacuum with HEPA attachment. If washable, wash and rehang pressed.",
          "Carpet: full vacuum including edges (use the crevice tool along the skirting). Consider a professional HWE extraction if there are visible stains.",
          "Wardrobe interiors: empty, wipe, dry. Don't leave coat hangers — it's a flag.",
        ],
      },
      { type: "h2", text: "Hallway, stairs & entrance (8 items)" },
      {
        type: "list",
        items: [
          "Bannister: sanitise (high-touch surface, agents always check).",
          "Stair carpet: vacuum each tread, use crevice tool on the edges.",
          "Skirtings on stairs: damp wipe each tread edge.",
          "Front door (interior): wipe, polish the handle.",
          "Front door (exterior): wipe the letterbox, polish the knocker.",
          "Door mat: take outside, beat, vacuum.",
          "Light fitting in hallway: dust, wipe.",
          "Meter cupboard: empty, wipe (often overlooked and a frequent 'clutter' flag).",
        ],
      },
      { type: "h2", text: "Outside & miscellaneous (8 items — 1 CRITICAL)" },
      {
        type: "list",
        items: [
          "CRITICAL — All rubbish removed from the property. Including the bin store, the back garden, the loft, the shed. Leaving rubbish is the #1 reason for full deposit deductions.",
          "Keys: return all sets (including any duplicates you had cut). Missing keys are deducted at £15-30 per key.",
          "Forwarding address: leave a note on the kitchen worktop. Agents appreciate this; it builds goodwill.",
          "Heating: leave the thermostat at 12°C frost-protection setting (prevents burst pipes in winter — a serious issue if the property is empty for weeks).",
          "Windows: all closed and locked.",
          "Garden (if applicable): mow, weed, tidy. Gardens are routinely deducted if left overgrown.",
          "Garage (if applicable): empty, sweep, leave the door key on the worktop.",
          "Photo walkthrough: take date-stamped photos of every room before you leave. This is your evidence if the agent claims the property was left dirty.",
        ],
      },
      {
        type: "callout",
        title: "The 47th item",
        text: "The most overlooked item on every move-out walk-through is the inside of the kitchen cupboards above the extractor hood. It's where grease aerosolises and settles over years of cooking. Agents check it because tenants never clean it. Get a step stool, damp wipe the cavity above the highest wall unit, and you'll save yourself a £40-80 deduction. Every time.",
      },
      { type: "h2", text: "When to call a professional" },
      {
        type: "p",
        text: "A full move-out clean to the checklist above takes 6-8 hours for a 2-bed property with a 2-person trained crew using commercial equipment. Doing it solo with domestic equipment takes 12-16 hours and the result is rarely as thorough — because domestic equipment can't match the HWE extraction on carpets, the HEPA filtration on dust, or the commercial degreasers on baked-on oven carbon.",
      },
      {
        type: "p",
        text: "Our move-out service is £179 from for a 1-bed property, £240 for a 2-bed, £295 for a 3-bed. The average deposit in Scotland is £1,150 (1.5 months' rent on a £767/month average). Spending £240 to protect £1,150 is straightforward arithmetic — and we provide a deposit-safe certificate that letting agents accept as evidence of professional cleaning.",
      },
      {
        type: "quote",
        text: "The single most common deduction we see is £80-£120 for 'oven cleaning'. Letting agents know that 90% of tenants don't degrease the oven properly — it's an easy deduction because the evidence is visible. If you do nothing else on this checklist, degrease the oven. Then defrost the fridge. Then sanitise the bathroom silicone. That's 80% of the battle.",
        cite: "Eilidh Drummond, Letting Agency Liaison",
      },
      {
        type: "p",
        text: "Print the checklist. Work through it the night before handover. Take date-stamped photos of every room. Return the keys in person and ask the agent to walk through with you if possible. If they flag anything, you have the option to address it on the spot. If you do this — and you have a clean inventory at move-in — you'll get your deposit back. Every time.",
      },
    ],
  },

  // ============================================================
  // POST 4 — Soft-Wash vs Pressure-Washing Roofs
  // ============================================================
  {
    slug: "soft-wash-vs-pressure-washing-roofs",
    title: "Why Soft-Wash Beats Pressure-Washing on Tile & Slate Roofs",
    category: "Exterior",
    readTime: "7 min",
    date: "28 Jun 2026",
    excerpt:
      "High-pressure washing strips granules off slate and tile roofs and voids most manufacturer warranties. Soft-wash uses chemistry, not force — and lasts longer in the damp Scottish climate. Here's the side-by-side.",
    image: IMG.blogRoof,
    author: "Ross Paterson",
    authorRole: "Head of Green Chemistry, Maundy Clean",
    authorInitials: "RP",
    content: [
      {
        type: "p",
        text: "There's a cleaning contractor in every Scottish town who'll arrive at your house with a petrol-powered pressure washer, blast your slate roof at 3,000 PSI, and charge you £350 for the privilege of permanently damaging it. The roof will look cleaner — for about 18 months. Then the moss will return (the pressure washer didn't kill the spores, just brushed off the visible growth), the slate surface will be visibly pitted, and the manufacturer warranty on any tiles replaced in the last 20 years will be void. This article explains why soft-wash is the correct protocol for Scottish roofs, what the chemistry does, and how to spot a contractor who's about to wreck your roof.",
      },
      {
        type: "p",
        text: "We clean 600+ Scottish roofs a year — Victorian tenements in Glasgow, granite villas in Aberdeen, slate-roofed cottages in the Borders, modern concrete-tile estates in Livingston. Every one of them gets soft-washed. Never pressure-washed. Here's the science behind that decision.",
      },
      { type: "h2", text: "What pressure washing actually does to a roof" },
      {
        type: "p",
        text: "Slate and concrete tiles have a surface layer — the weathering surface — that's structurally distinct from the body of the tile. On slate, this is the riven face: the natural cleavage plane that gives slate its characteristic texture and its water-shedding capability. On concrete tiles, it's the pigment-and-cement slurry applied at the factory, which both colours the tile and provides the weathering seal.",
      },
      {
        type: "p",
        text: "Pressure washing at 2,000+ PSI strips this surface layer. On slate, you'll see the riven face become smoother and paler — the natural cleavage plane is being eroded, exposing the more porous underlying slate. On concrete tiles, you'll see the colour fade as the pigmented slurry is blasted away, exposing the grey concrete body. The tile now sheds water less efficiently, absorbs more rainwater, and is significantly more vulnerable to frost damage.",
      },
      {
        type: "callout",
        title: "The warranty issue",
        text: "Every major tile manufacturer (Marley, Redland, Russell, Sandtoft) explicitly excludes pressure washing from their warranty coverage. The warranty small print typically says: 'Cleaning by high-pressure water jetting shall render this warranty null and void.' If you pressure-wash a 12-year-old roof with a 30-year warranty and a tile fails at year 15, the manufacturer will inspect, see the pressure-washing damage, and refuse the claim. You're paying for the replacement.",
      },
      { type: "h2", text: "Why moss returns after pressure washing" },
      {
        type: "p",
        text: "The visible moss on your roof is the fruiting body of an organism whose root structure (rhizoids) penetrates the tile surface. Pressure washing removes the visible moss but leaves the rhizoids intact — and the roughened, pitted surface left behind by the pressure washing is a better substrate for moss re-growth than the original tile. The moss will return, typically within 18-24 months, and it'll be more deeply established than before.",
      },
      {
        type: "p",
        text: "Soft-wash chemistry kills the entire organism — root and fruiting body. The biocide (typically a quaternary ammonium compound or a sodium hypochlorite solution at controlled dilution) is applied at low pressure (40-80 PSI, similar to a garden hose), allowed to dwell, and then rinsed gently. The moss dies, the rhizoids decompose, and the tile surface is left intact.",
      },
      { type: "h2", text: "The soft-wash protocol" },
      {
        type: "p",
        text: "Here's the protocol we use on every Scottish roof. It's the same protocol regardless of tile type (slate, concrete, clay) — only the dwell time and chemistry dilution vary.",
      },
      {
        type: "list",
        items: [
          "Pre-inspection: drone or ladder survey to identify damaged tiles, loose flashings, and the moss/algae species present. Different organisms need different chemistry.",
          "Mechanical removal: loose moss physically removed with a soft-bristle brush (no metal, no scraping). All debris caught in tarps and disposed of — never allowed to wash into the gutters.",
          "Chemical application: biocide sprayed at 40-80 PSI (garden hose pressure, not jet). The chemistry is applied to saturation — until it just begins to run off.",
          "Dwell time: 30-60 minutes depending on organism and tile type. The chemistry works by contact — rushing the dwell time means incomplete kill.",
          "Gentle rinse: low-pressure rinse (60-100 PSI) to remove dead organic matter and chemistry residue. No high pressure at any point.",
          "Post-treatment biocide: a lighter second application of biocide, left on the tile as a residual kill layer. This continues to work for 6-12 months after the clean.",
          "Gutter clear: all gutters and downpipes checked, cleared, and flushed. Soft-washing dislodges organic matter that ends up in the gutters.",
        ],
      },
      {
        type: "h2",
        text: "Side-by-side: pressure wash vs soft-wash",
      },
      {
        type: "table",
        headers: ["Factor", "Pressure wash", "Soft-wash"],
        rows: [
          ["Application pressure", "2,000-4,000 PSI", "40-100 PSI"],
          ["Effect on tile surface", "Strips weathering layer", "No surface damage"],
          ["Moss kill", "Surface only (rhizoids survive)", "Full kill (root + fruiting body)"],
          ["Moss return", "18-24 months", "3-5 years"],
          ["Manufacturer warranty", "Voided", "Unaffected"],
          ["Water usage", "500-1,000 litres per roof", "100-200 litres per roof"],
          ["Runoff contamination", "High (chlorinated, high volume)", "Low (controlled, dilute)"],
          ["Cost", "£250-£400", "£350-£500"],
          ["Lasting result", "Short-term cosmetic", "Long-term remediation"],
        ],
      },
      {
        type: "callout",
        title: "The cost myth",
        text: "Pressure washing is cheaper on the day (£250-£400 vs £350-£500 for soft-wash). But the moss returns in 18 months — you'll need to clean again, £250-£400. And the tile surface is damaged, shortening the roof life by 5-10 years. Over a 10-year horizon, soft-wash costs £350-£500 once; pressure washing costs £1,500-£2,400 in repeated cleans and contributes to a roof replacement that should have been 10 years further out. Soft-wash is cheaper. Significantly cheaper.",
      },
      { type: "h2", text: "Why soft-wash lasts longer in the Scottish climate" },
      {
        type: "p",
        text: "Scotland's climate — wet, mild, with prolonged high humidity — is the ideal growth environment for roof moss, algae and lichen. The organisms grow faster here than anywhere else in the UK. Which makes the residual biocide layer in soft-wash particularly valuable — it continues to suppress re-growth for 6-12 months after the clean, breaking the growth cycle.",
      },
      {
        type: "p",
        text: "Pressure washing, in contrast, leaves the roof in a damaged, roughened state that's more receptive to moss spore germination than the original tile. In Scotland, that means moss returns faster after pressure washing than after soft-washing — typically 18 months vs 3-5 years. The very climate that creates the moss problem also makes pressure washing the worst possible response to it.",
      },
      {
        type: "quote",
        text: "If a contractor turns up with a petrol pressure washer to clean your roof, send them away. The roof will look cleaner for the photographs, but you've shortened its life and the moss will be back within two years. Soft-wash costs a little more on the day, lasts four times as long, and protects the warranty. There is no scenario in which pressure washing a Scottish roof is the right answer.",
        cite: "Ross Paterson, Head of Green Chemistry",
      },
      {
        type: "p",
        text: "If your roof has visible moss growth, get a soft-wash quote. The cost is £350-£500 for a typical 3-bed semi-detached, the result lasts 3-5 years, and the warranty stays intact. Call us, call another soft-wash specialist — but don't call the pressure-washing contractor. Your roof will thank you.",
      },
    ],
  },

  // ============================================================
  // POST 5 — Restroom Sanitation in Restaurants
  // ============================================================
  {
    slug: "restroom-sanitation-restaurants-beyond-surface-wipe",
    title: "Restroom Sanitation in Restaurants: Beyond the Surface Wipe",
    category: "Industries",
    readTime: "9 min",
    date: "24 Jun 2026",
    excerpt:
      "Environmental Health Officers look for the same six things every visit. We walk through a full restaurant restroom protocol — including the touchpoints 80% of crews miss.",
    image: IMG.blogRestroom,
    author: "Iain Sutherland",
    authorRole: "Commercial Director, Maundy Clean",
    authorInitials: "IS",
    content: [
      {
        type: "p",
        text: "An Environmental Health Officer (EHO) inspection of a restaurant restroom takes 4-7 minutes. In that time, the EHO will check the same six things every visit — and 80% of restaurant cleaning crews miss at least two of them. This article walks through the protocol we use on every restaurant restroom clean, the six EHO focus points, and the touchpoints that get missed by crews who think restroom cleaning means 'wipe the toilet and mop the floor'.",
      },
      {
        type: "p",
        text: "We clean 180+ restaurant, café and QSR restrooms across Scotland every week — from Michelin-recommended fine dining in Edinburgh to high-volume QSR in Glasgow city centre. The protocol below is what we deploy on every visit. It's HSE HSG272 aware, COSHH compliant, and designed to score 'Excellent' on EHO inspection. Use it as a benchmark for your own contractor — or as a checklist if you're cleaning in-house.",
      },
      { type: "h2", text: "The six EHO focus points" },
      {
        type: "p",
        text: "EHOs are trained to look at the same six things in restaurant restrooms. They are, in approximate order of inspection:",
      },
      {
        type: "list",
        items: [
          "Hand-wash facilities: hot water, soap, drying provision (paper towels or warm-air dryer), no missing/damaged items",
          "Surface sanitation: visible cleanliness of all touchpoints, no soiling, no odour, no visible mould",
          "Waste management: bin capacity adequate for footfall, bins not overflowing, separate sanitary waste provision (Sanitary Waste Disposal regulations)",
          "Pest control: no signs of cockroach, rodent, or fly activity; insectocutor (if fitted) functioning and maintained",
          "Chemical storage: COSHH-compliant storage, no food-contamination risk (restrooms must not share chemicals with kitchen), chemical bottles correctly labelled",
          "Documentation: cleaning schedule displayed, signed, and current; deep-clean records available; chemical risk assessments on file",
        ],
      },
      {
        type: "callout",
        title: "The 4-minute inspection",
        text: "EHOs are time-pressured. A typical restaurant restroom inspection is 4-7 minutes per restroom. In that time, they check the six focus points above — but they don't disassemble anything, they don't move heavy equipment, they don't look behind closed panels. The trick is to score 'Excellent' on the visible items (which they will see) AND the not-immediately-visible items (which they'll check if anything looks off). A pristine front-of-house appearance with a grubby behind-the-scenes is the pattern EHOs are trained to spot.",
      },
      { type: "h2", text: "The Maundy Clean restaurant restroom protocol" },
      {
        type: "p",
        text: "Our protocol is 23 steps, takes 35-50 minutes for a 2-cubicle restaurant restroom, and is designed to score 'Excellent' on EHO inspection while also delivering a genuinely hygienic restroom. The steps below are sequenced — top-to-bottom, clean-to-dirty — to prevent cross-contamination.",
      },
      { type: "h2", text: "Phase 1: Preparation (5 steps)" },
      {
        type: "list",
        items: [
          "Wet floor sign at entrance. PPE on (nitrile gloves, apron, eye protection if spray chemistry in use).",
          "Pre-flush all WCs and urinals (this activates the cistern, exposes the rim jets, and identifies any blockages).",
          "Apply WC cleaner to the inside of all WCs and urinals (allow to dwell — chemistry needs contact time, not scrub time).",
          "Apply limescale remover to urinal body and WC exterior (dwell time per chemistry).",
          "Empty all bins (general waste, sanitary waste, paper towel bin). Replace liners. Sanitise bin exterior.",
        ],
      },
      { type: "h2", text: "Phase 2: High surfaces (4 steps)" },
      {
        type: "list",
        items: [
          "High dust: ceiling light fittings, air-conditioning grilles, top of cubicle partitions, top of door frames (using extension pole and duster — not a step ladder, which is a safety risk in a restroom).",
          "Clean mirrors: streak-free, edge-to-edge. Use microfibre and electronics-safe glass cleaner (not ammonia-based, which can damage mirror silvering).",
          "Clean wall tiles: degrease, sanitise, pay attention to grout lines behind sinks (toothpaste splash, soap residue).",
          "Clean hand-dryer or paper-towel dispenser: sanitise exterior, check paper levels, check dryer vent for dust build-up.",
        ],
      },
      { type: "h2", text: "Phase 3: Mid surfaces (5 steps — 4 are missed by 80% of crews)" },
      {
        type: "list",
        items: [
          "Clean sink basins: descale, sanitise, polish tap (limescale on taps is the #1 EHO deduction).",
          "Clean tap handles and sink controls: sanitise (high-touch — every user touches these).",
          "Clean soap dispenser: sanitise exterior, check soap level, check the underside (drips build up there).",
          "Clean cubicle door handles — both sides, sanitise (high-touch, often missed on the inside face).",
          "Clean cubicle door latches and locks — sanitise (the latch is touched by every user, almost never cleaned).",
        ],
      },
      {
        type: "callout",
        title: "The 80% miss rate",
        text: "In our 2024 audit of 50 contractor-cleaned restaurant restrooms (we were called in to remediate), 80% had visible soil on at least one of: cubicle door latch, soap dispenser underside, hand-dryer vent, behind the WC cistern, the WC hinge. These are the touchpoints that crews miss because they're not part of the 'wipe-and-go' routine. They're also the touchpoints EHOs check first when something looks off. The difference between 'Satisfactory' and 'Excellent' is these five items.",
      },
      { type: "h2", text: "Phase 4: Low surfaces and floors (5 steps)" },
      {
        type: "list",
        items: [
          "Clean WC: scrub inside (the chemistry has been dwelling — now agitate), clean the rim (under the rim — critical for limescale and bacteria), clean the seat (both sides), clean the cistern exterior and the flush handle.",
          "Clean urinal: scrub inside, clean the body, clean the grate, clean the surrounding wall (urinal splash is a frequent EHO deduction).",
          "Clean pipework and traps: degrease, sanitise (the chrome pipework under the sink is a touchpoint, often missed).",
          "Mop floor: pre-treat stains, double-bucket mopping (clean solution + dirty solution), pay attention to the floor/wall junction and the floor behind the WC.",
          "Dry floor: squeegee or wet-vac to remove excess water. Slip risk is an EHO focus and a real H&S issue.",
        ],
      },
      { type: "h2", text: "Phase 5: Restoration (4 steps)" },
      {
        type: "list",
        items: [
          "Restock consumables: paper towels, toilet paper, soap, hand sanitizer. Check dispensers are functional.",
          "Polish chrome: tap, soap dispenser, hand-dryer nozzle, door handles. Chrome that gleams is the visual signal EHOs use as a 'this restroom is well-maintained' heuristic.",
          "Air quality check: odour (none / acceptable / problematic). If problematic, identify source (drain, urinal trap, ventilation). Don't mask with air freshener — fix the source.",
          "Documentation: sign the cleaning schedule on the back of the door. Date, time, signature, products used.",
        ],
      },
      {
        type: "h2",
        text: "The four touchpoints 80% of crews miss",
      },
      {
        type: "p",
        text: "These four items are the difference between a 'Satisfactory' and 'Excellent' EHO rating. They're the items our remediation team most commonly finds inadequately cleaned in contractor-cleaned restaurant restrooms.",
      },
      {
        type: "list",
        items: [
          "The WC hinge: lifting the toilet seat exposes the hinge, which accumulates urine scale and bacteria. 80% of crews wipe the seat and never lift it.",
          "Behind the WC cistern: dust, urine scale and bacteria accumulate in the gap between the cistern and the wall. Invisible from the front; immediately visible if the EHO looks behind.",
          "The soap dispenser underside: drips accumulate, soap degrades, bacteria colonise. The dispenser top is wiped; the underside is rarely cleaned.",
          "The hand-dryer vent: warm-air hand dryers accumulate dust and bacteria in the vent. The unit body is wiped; the vent (where the air blows across user hands) is rarely cleaned.",
        ],
      },
      {
        type: "quote",
        text: "Restroom cleaning is the EHO's window into your kitchen. If the restroom — the part of the restaurant the public sees — is not properly cleaned, the EHO assumes the kitchen — the part the public doesn't see — is worse. That's the heuristic. A pristine restroom buys you benefit-of-the-doubt in the kitchen. A grubby restroom triggers a thorough kitchen inspection. It's not about the restroom; it's about what the restroom signals.",
        cite: "Iain Sutherland, Commercial Director",
      },
      {
        type: "p",
        text: "If your current contractor cleans your restaurant restrooms in under 30 minutes per visit, they're missing items. The protocol above takes 35-50 minutes for a 2-cubicle restroom — there is no shortcut to genuinely hygienic. If your EHO rating is 'Generally Satisfactory' rather than 'Excellent', the four missed touchpoints above are almost certainly why. Walk through your restroom with this checklist before your next EHO visit — or call us and we'll walk through it with you.",
      },
    ],
  },

  // ============================================================
  // POST 6 — Cleaning Schedule for Busy Season
  // ============================================================
  {
    slug: "cleaning-schedule-busy-season-framework",
    title: "How to Build a Cleaning Schedule That Survives a Busy Season",
    category: "Operations",
    readTime: "5 min",
    date: "19 Jun 2026",
    excerpt:
      "December is brutal for retail and hospitality. Here's the framework we use with our commercial clients to scale cleaning coverage without burning through the annual budget by November.",
    image: IMG.blogOps,
    author: "Callum Bain",
    authorRole: "Operations Director, Maundy Clean",
    authorInitials: "CB",
    content: [
      {
        type: "p",
        text: "Every commercial cleaning contract has the same shape: a comfortable January-September where the agreed scope fits comfortably within the agreed hours, and a brutal October-December where footfall doubles, opening hours extend, and the agreed scope can't keep up. Most contractors respond by adding hours reactively — at premium rates, with whichever operatives are available, often with quality dropping. By January, the client has overspent, the contractor has underdelivered, and both sides are eyeing the contract renewal date.",
      },
      {
        type: "p",
        text: "We manage 80+ commercial cleaning contracts across Scotland — retail chains, hospitality venues, corporate offices, university estates. Over 12 years we've developed a 'busy season framework' that scales cleaning coverage without burning the annual budget. The framework is the same across sectors; only the calendar shifts. Here it is.",
      },
      { type: "h2", text: "Step 1: Identify the busy season calendar" },
      {
        type: "p",
        text: "The first step is mapping the actual busy season — not the assumed one. Most clients say 'Christmas' when they actually mean 'mid-November to first week of January'. The specific dates vary by sector:",
      },
      {
        type: "table",
        headers: ["Sector", "Busy season", "Peak week"],
        rows: [
          ["Retail (high street)", "10 Nov — 5 Jan", "15-22 Dec"],
          ["Retail (shopping centre)", "1 Nov — 5 Jan", "8-22 Dec"],
          ["Hospitality (restaurant)", "1 Dec — 2 Jan", "22-23 Dec + 31 Dec"],
          ["Hospitality (hotel)", "15 Dec — 3 Jan", "27-31 Dec"],
          ["Hospitality (pub/bar)", "15 Dec — 2 Jan", "22-23 Dec + 31 Dec"],
          ["Corporate office", "20 Dec — 5 Jan (low season — use for deep cleans)", "n/a"],
          ["University estate", "Mid-April + mid-Dec (exam weeks)", "Variable"],
        ],
      },
      {
        type: "p",
        text: "The point of this exercise is to identify the exact weeks where coverage needs to scale. A 6-week busy season needs a different resourcing plan to a 10-week one. And the quiet weeks before and after the busy season are when you do the deep cleans that prevent the busy season from being worse than it needs to be.",
      },
      { type: "h2", text: "Step 2: Calculate the footfall uplift" },
      {
        type: "p",
        text: "How much busier is the busy season? Most clients say 'a lot' — which is unhelpful for planning. We ask for the actual footfall numbers, then calculate the uplift. The pattern is remarkably consistent across sectors:",
      },
      {
        type: "list",
        items: [
          "Retail (high street): footfall up 40-60% during busy season, peak weeks 80-120% above baseline",
          "Retail (shopping centre): footfall up 50-70%, peak weeks 100-150% above baseline",
          "Hospitality (restaurant): covers up 60-90%, peak nights (22-23 Dec, 31 Dec) 150-200% above baseline",
          "Hospitality (hotel): occupancy up 30-50% (less dramatic but with higher room turnover)",
          "University estate: footfall up 20-30% during exam weeks, then drops to near-zero over holidays",
        ],
      },
      {
        type: "p",
        text: "Footfall uplift is the basis for resourcing. A 50% footfall increase doesn't mean a 50% cleaning hour increase — high-traffic touchpoints need 50% more attention, but back-of-house areas may not need any. We split the cleaning scope into 'traffic-driven' (touchpoints, restrooms, entrance areas, floors) and 'schedule-driven' (offices, meeting rooms, storage areas) and uplift only the traffic-driven scope.",
      },
      { type: "h2", text: "Step 3: Identify the scope split" },
      {
        type: "p",
        text: "Every commercial cleaning scope has two components: the traffic-driven scope (which scales with footfall) and the schedule-driven scope (which is constant). The split varies by sector but typically looks like this:",
      },
      {
        type: "table",
        headers: ["Sector", "Traffic-driven scope", "Schedule-driven scope"],
        rows: [
          ["Retail", "60-70% (entrance, floors, restrooms, touchpoints)", "30-40% (back office, stockroom, staff areas)"],
          ["Hospitality (FOH)", "70-80% (dining area, restrooms, bar, entrance)", "20-30% (BOH, kitchen, offices)"],
          ["Corporate office", "30-40% (reception, meeting rooms, restrooms)", "60-70% (desks, offices, break rooms)"],
          ["University estate", "40-50% (lecture theatres, library, restrooms)", "50-60% (offices, labs, corridors)"],
        ],
      },
      {
        type: "p",
        text: "The traffic-driven scope is what you uplift during the busy season. The schedule-driven scope stays at baseline. This is the single most important insight in the framework: you don't double the cleaning hours during the busy season — you double the cleaning hours on the 60-80% of the scope that's traffic-driven, while keeping the schedule-driven scope at baseline. A 100% footfall uplift translates to a 30-50% increase in cleaning hours, not a 100% increase.",
      },
      {
        type: "callout",
        title: "The budget math",
        text: "If your annual cleaning budget is £100,000 and you don't plan for the busy season, you'll either overspend (£115-130k actuals) or under-clean (visible dirt, EHO risk, customer complaints). With the framework: baseline budget £90k (90% of annual hours, Jan-Sep), busy-season uplift £10k (10% of annual hours, Oct-Dec). Total £100k. The budget balances. The cleaning delivers. No surprises.",
      },
      { type: "h2", text: "Step 4: Schedule the pre-season deep cleans" },
      {
        type: "p",
        text: "Two weeks before the busy season starts, do a full deep clean of the entire premises. This is the single most cost-effective intervention in the framework. Why? Because the busy season is when your cleaning crew is stretched thinnest — they don't have time for deep-cleaning tasks. If the premises starts the busy season in a deep-cleaned state, the crew can maintain that state with traffic-driven cleaning only. If the premises starts the busy season in a baseline state, the crew will be playing catch-up from week one.",
      },
      {
        type: "list",
        items: [
          "Carpet extraction throughout (deep-lift soil that weekly vacuuming won't reach)",
          "Floor strip-and-refinish (VCT, linoleum) — refreshes the protective layer before the high-traffic months",
          "Kitchen deep clean (hospitality) — gets the BOH to EHO-Excellent before the season starts",
          "Restroom deep clean — descale, re-seal, re-silicone, replace any degraded grout",
          "HVAC clean (if applicable) — air quality matters more in winter when windows stay closed",
          "Window clean (interior + exterior) — daylight matters in Scottish winters",
        ],
      },
      { type: "h2", text: "Step 5: Add the peak-week surge" },
      {
        type: "p",
        text: "Within the busy season, there's a peak week (typically 22-31 December for retail and hospitality). This is when you need surge coverage — additional operatives, additional hours, additional visits. The surge is short (1-2 weeks) but intense (often 100-150% of busy-season hours).",
      },
      {
        type: "p",
        text: "We handle surge by holding a reserve crew — 15-20 trained operatives who work a regular schedule January-November and are deployed onto surge contracts during December. The reserve crew is cross-trained in multiple sectors (retail, hospitality, office) so they can be deployed flexibly. Clients pay a surge premium (typically 25% on standard rates) for the peak week, but the cost is contained because it's a 1-2 week surge, not a 10-week uplift.",
      },
      { type: "h2", text: "Step 6: Schedule the post-season reset" },
      {
        type: "p",
        text: "The first week of January is for the post-season reset. Another full deep clean — but this time to remediate the wear-and-tear of the busy season rather than to prepare for it. Carpet extraction to lift the additional soil. Floor refinish to repair the scuffing. Restroom deep clean to address the heavier usage. This is what gets you back to baseline, ready for the quiet months of January-March.",
      },
      {
        type: "quote",
        text: "The pattern is the same every year: clients who plan for the busy season balance their budget and maintain their standards. Clients who don't plan overspend, under-clean, and end up with a January reset that costs 2-3x what a planned pre-season deep clean would have cost. The framework isn't complicated. It just needs to be in place by October — not December.",
        cite: "Callum Bain, Operations Director",
      },
      {
        type: "p",
        text: "If your cleaning contractor hasn't raised the busy-season conversation by mid-October, raise it yourself. The conversation should cover: which weeks are your busy season, what's the footfall uplift, what's the scope split, when do we schedule the pre-season deep clean, what surge coverage do we need for peak week, and what's the post-season reset plan. If your contractor can't answer those six questions, find a contractor who can. The framework works — but only if it's actually used.",
      },
    ],
  },
];

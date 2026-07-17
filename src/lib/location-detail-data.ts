// Maundy Clean — Location landing page content model.
// Each location has: hero, overview, stats, areas, full services grid, process,
// testimonials, FAQs, nearby locations, gallery. The shared services catalog
// (98 live service pages across 8 categories) is the same on every location page,
// because every Maundy Clean service is available in every Scottish location we serve.

import { sharedServicesByCategory } from "@/lib/shared-services-catalog";

export type LocationArea = {
  name: string;
  description: string;
};

export type LocationStat = {
  value: string;
  label: string;
};

export type LocationFaq = {
  q: string;
  a: string;
};

export type LocationTestimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type LocationGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type LocationDetail = {
  slug: string;
  name: string;
  region: string;
  populationNote: string; // e.g. "Greater Glasgow · ~635,000 residents"
  tagline: string;
  heroHeadline: string;
  heroSubhead: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  overviewParagraphs: string[]; // 3 deep paragraphs about cleaning in this location
  localContext: string[]; // Scottish-specific notes: housing stock, business profile, climate
  stats: LocationStat[]; // 4 KPIs about Maundy Clean's presence in this location
  areas: LocationArea[]; // neighbourhoods / districts / postcodes
  processSteps: { step: string; title: string; description: string }[];
  testimonials: LocationTestimonial[];
  faqs: LocationFaq[];
  nearbyLocations: { name: string; href: string; region: string }[];
  gallery: LocationGalleryItem[];
  // Re-exported shared catalog for convenience
  servicesByCategory: typeof sharedServicesByCategory;
};

// Re-export the shared services catalog so consumers can import from one place.
export { sharedServicesByCategory };


// ============================================================
// LOCATION EXPORTS — 72 Scottish locations
// ============================================================
// ============================================================
// Location — Glasgow (Greater Glasgow)
// ============================================================
export const glasgow: LocationDetail = {
  slug: "glasgow",
  name: "Glasgow",
  region: "Greater Glasgow",
  populationNote: "Greater Glasgow · ~635,000 residents",
  tagline: "Local Glasgow crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Glasgow.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Glasgow since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Glasgow | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Glasgow cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Glasgow since 2014. Our local Glasgow branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Greater Glasgow footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Glasgow gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Glasgow's tenement housing stock (built 1880-1920) requires specialist close-cleaning — we dust, mop and disinfect communal stairwells weekly for over 240 factor-managed closes. The city centre grid (G1-G5) has tight bin logistics — our crews use off-peak loading windows and SEC-plated vans to avoid parking charge notices. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Glasgow branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Glasgow postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Glasgow's tenement housing stock (built 1880-1920) requires specialist close-cleaning — we dust, mop and disinfect communal stairwells weekly for over 240 factor-managed closes.",
    "The city centre grid (G1-G5) has tight bin logistics — our crews use off-peak loading windows and SEC-plated vans to avoid parking charge notices.",
    "Glasgow's damp climate means mould remediation in north-facing bathrooms is a top-three request from November to March.",
    "We're an approved supplier for two of Glasgow's largest housing associations, handling void turns and deep cleans across the G1-G53 footprint.",
    "Scottish Fire & Rescue and Glasgow City Council compliance: all our city-centre crews carry CSCS cards and work at height certs for tenement close work.",
    "Student let turnover in Hillhead, Partick and Woodlands peaks 1-15 September — we have a dedicated 14-person team for that two-week window every year.",
  ],
  stats: [
    { value: "12+", label: "Years serving Glasgow" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Glasgow clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "West End (Hillhead, Partick, Hyndland)", description: "Victorian sandstone tenements, busy student lets, and Byres Road footfall — recurring cleans and tenement stair-closes are our bread and butter here." },
    { name: "Merchant City & City Centre", description: "Mixed-use flats above retail, high turnover, and tight bin logistics. We handle nightly janitorial for restaurants, offices and retail units across the central grid." },
    { name: "South Side (Shawlands, Pollokshields, Queens Park)", description: "Family homes with period features, bay windows, and original mosaic-tile closes. Our crews are trained on listed-building-safe products." },
    { name: "East End (Dennistoun, Bridgeton, Calton)", description: "Mix of refurbished tenements and new-build estates. We work with housing associations and private landlords across the G1-G40 postcodes." },
    { name: "Newton Mearns & Giffnock (G77, G46)", description: "Suburban family homes, 4-5 bed detached properties, double garages, and large conservatories that need dedicated glass care." },
    { name: "Anniesland & Jordanhill", description: "Quiet residential streets near the university — recurring home cleans, end-of-tenancy for student lets, and the occasional loft conversion post-build clean." },
    { name: "Pollok & Nitshill", description: "Local authority estates, mixed tenure, and Pollok Country Park adjacent — we cover both private homes and community facilities." },
    { name: "Dennistoun & Haghill", description: "Conservation-area tenements with original cornicing — we use listed-building-safe chemistry and lint-free glass cloths throughout." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Glasgow postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Glasgow crew", description: "We assign a PVG-checked, uniformed Glasgow-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Glasgow", quote: "We've used three other services over the past decade in Glasgow. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Glasgow business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Glasgow had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Glasgow tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Glasgow? What postcodes?", a: "Yes. Our Glasgow branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Glasgow service area." },
    { q: "Are your Glasgow cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Glasgow?", a: "For most Glasgow postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Glasgow?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Glasgow clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Glasgow?", a: "Yes. Our Glasgow branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
    { name: "Motherwell", href: "/locations/motherwell", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Glasgow", caption: "Local crew working in Glasgow" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Glasgow", caption: "Local Glasgow team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Glasgow", caption: "Living room refresh in a Glasgow family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Glasgow", caption: "Nightly janitorial at a Glasgow office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Paisley (Greater Glasgow)
// ============================================================
export const paisley: LocationDetail = {
  slug: "paisley",
  name: "Paisley",
  region: "Greater Glasgow",
  populationNote: "Renfrewshire · ~77,000 residents",
  tagline: "Local Paisley crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Paisley.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Paisley since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Paisley | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Paisley cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Paisley since 2014. Our local Paisley branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Renfrewshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Paisley gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Paisley's textile-mill heritage means loft and outbuilding conversions often uncover decades of dust — our HEPA H-class extraction team handles this regularly. Renfrewshire Council and Engie partnerships: approved supplier for void property turnover across the PA1-PA5 footprint. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Paisley branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Paisley postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Paisley's textile-mill heritage means loft and outbuilding conversions often uncover decades of dust — our HEPA H-class extraction team handles this regularly.",
    "Renfrewshire Council and Engie partnerships: approved supplier for void property turnover across the PA1-PA5 footprint.",
    "University of the West of Scotland's Paisley campus drives student-let turnover peaks in August-September.",
    "Paisley Abbey and the surrounding conservation area require listed-building-safe products and techniques for nearby properties.",
    "Proximity to Glasgow Airport (8 miles) means we cover several airport-adjacent hotels and car-park operators on recurring contracts.",
  ],
  stats: [
    { value: "12+", label: "Years serving Paisley" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Paisley clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Paisley Town Centre (PA1)", description: "Historic mill-town centre with high-density flats above retail, plus the university campus — recurring commercial and student-let cleans." },
    { name: "Ralston & Whitehaugh (PA1, PA2)", description: "Established residential streets with 1930s semis and bungalows — family recurring cleans and move-in/out turnover." },
    { name: "Gallowhill & Ferguslie (PA2)", description: "Mixed-tenure estates with active housing association partnerships — void turns and deep cleans throughout the year." },
    { name: "Seedhill & Shortroods", description: "New-build developments alongside older stock — we cover both premium end-of-build cleans and recurring domestic work." },
    { name: "Foxbar & Glenburn (PA2)", description: "Post-war local authority estates with community facilities — recurring school and community centre contracts." },
    { name: "Hawkhead & Hunterhill", description: "Light industrial units and small business parks — nightly janitorial and discreet day-porter services." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Paisley postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Paisley crew", description: "We assign a PVG-checked, uniformed Paisley-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Paisley", quote: "We've used three other services over the past decade in Paisley. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Paisley business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Paisley had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Paisley tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Paisley? What postcodes?", a: "Yes. Our Paisley branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Paisley service area." },
    { q: "Are your Paisley cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Paisley?", a: "For most Paisley postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Paisley?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Paisley clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Paisley?", a: "Yes. Our Paisley branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
    { name: "Motherwell", href: "/locations/motherwell", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Paisley", caption: "Local crew working in Paisley" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Paisley", caption: "Local Paisley team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Paisley", caption: "Living room refresh in a Paisley family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Paisley", caption: "Nightly janitorial at a Paisley office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — East Kilbride (Greater Glasgow)
// ============================================================
export const east_kilbride: LocationDetail = {
  slug: "east-kilbride",
  name: "East Kilbride",
  region: "Greater Glasgow",
  populationNote: "South Lanarkshire · ~75,000 residents",
  tagline: "Local East Kilbride crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin East Kilbride.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in East Kilbride since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in East Kilbride | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local East Kilbride cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in East Kilbride since 2014. Our local East Kilbride branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the South Lanarkshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in East Kilbride gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Scotland's first designated new town (1947) — we know the difference between the planned estates and the older Village core. East Kilbride Shopping Centre is one of Scotland's largest covered retail centres — nightly floor-care and restroom sanitation contracts. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our East Kilbride branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every East Kilbride postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Scotland's first designated new town (1947) — we know the difference between the planned estates and the older Village core.",
    "East Kilbride Shopping Centre is one of Scotland's largest covered retail centres — nightly floor-care and restroom sanitation contracts.",
    "Hairmyres Hospital proximity means we have crews trained on HTM 01-05 medical-grade disinfection for nearby clinics and surgeries.",
    "South Lanarkshire Council approved supplier for housing void turnover across G74-G75.",
    "Significant business park footprint (Kirkton Campus, Nerston) — daytime commercial cleaning and day-porter roles.",
  ],
  stats: [
    { value: "12+", label: "Years serving East Kilbride" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "East Kilbride clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Town Centre & The Hub (G74)", description: "Pedestrianised shopping centre, retail units, and the civic centre complex — nightly janitorial and retail-sector contracts." },
    { name: "West Mains & Murray (G75)", description: "Established residential areas with 1960s-70s housing stock — recurring home cleans and end-of-tenancy work." },
    { name: "Stewartfield & Garden Hall", description: "Premium 1990s-2000s family homes near the shopping centre — deep cleans and recurring domestic services." },
    { name: "Greenhills & Hairmyres", description: "Mix of post-war estates and newer builds, plus the hospital adjacent — medical-grade cleaning protocols in place." },
    { name: "Kelvin & Calderwood", description: "New-town planned estates with cul-de-sacs and family homes — regular recurring cleans and post-construction cleanups." },
    { name: "The Village (old East Kilbride)", description: "Pre-new-town village core with stone-built cottages and period features — listed-building-aware service." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know East Kilbride postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your East Kilbride crew", description: "We assign a PVG-checked, uniformed East Kilbride-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · East Kilbride", quote: "We've used three other services over the past decade in East Kilbride. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · East Kilbride business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather East Kilbride had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from East Kilbride tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of East Kilbride? What postcodes?", a: "Yes. Our East Kilbride branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the East Kilbride service area." },
    { q: "Are your East Kilbride cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in East Kilbride?", a: "For most East Kilbride postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in East Kilbride?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the East Kilbride clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in East Kilbride?", a: "Yes. Our East Kilbride branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
    { name: "Motherwell", href: "/locations/motherwell", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in East Kilbride", caption: "Local crew working in East Kilbride" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in East Kilbride", caption: "Local East Kilbride team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in East Kilbride", caption: "Living room refresh in a East Kilbride family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in East Kilbride", caption: "Nightly janitorial at a East Kilbride office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Hamilton (Greater Glasgow)
// ============================================================
export const hamilton: LocationDetail = {
  slug: "hamilton",
  name: "Hamilton",
  region: "Greater Glasgow",
  populationNote: "South Lanarkshire · ~54,000 residents",
  tagline: "Local Hamilton crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Hamilton.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Hamilton since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Hamilton | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Hamilton cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Hamilton since 2014. Our local Hamilton branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the South Lanarkshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Hamilton gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Hamilton's position as South Lanarkshire's administrative centre means we service council buildings, the sheriff court, and several large GP practices. Hamilton Park Racecourse events drive seasonal hospitality cleaning contracts across nearby hotels and venues. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Hamilton branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Hamilton postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Hamilton's position as South Lanarkshire's administrative centre means we service council buildings, the sheriff court, and several large GP practices.",
    "Hamilton Park Racecourse events drive seasonal hospitality cleaning contracts across nearby hotels and venues.",
    "Strathclyde Country Park proximity means we clean several park-adjacent hospitality venues and visitor facilities.",
    "South Lanarkshire College campus drives recurring commercial contracts and student-let turnover.",
    "Mixed housing stock from Victorian sandstone to 2010s new-builds — crews carry the full range of chemistry and techniques.",
  ],
  stats: [
    { value: "12+", label: "Years serving Hamilton" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Hamilton clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Hamilton Town Centre (ML3)", description: "Civic centre, retail core and high-density flats — commercial contracts and end-of-tenancy work." },
    { name: "Burnbank & Hillhouse (ML3)", description: "Established residential areas with 1920s-30s housing stock — recurring family home cleans." },
    { name: "Fairhill & Meikle Earnock", description: "Post-war estates and 1980s developments — regular recurring cleans and deep clean bookings." },
    { name: "Earnock & Limekilnburn", description: "Premium 1990s-2000s estates adjacent to Hamilton Park racecourse — deep cleans and upholstery care." },
    { name: "Whitehill & Eddlewood (ML3)", description: "Mixed-tenure estates with active housing association partnerships — void turns and deep cleans." },
    { name: "Bothwell Road & Udston", description: "Established residential streets near the hospital — recurring domestic and medical-aware cleaning." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Hamilton postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Hamilton crew", description: "We assign a PVG-checked, uniformed Hamilton-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Hamilton", quote: "We've used three other services over the past decade in Hamilton. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Hamilton business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Hamilton had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Hamilton tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Hamilton? What postcodes?", a: "Yes. Our Hamilton branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Hamilton service area." },
    { q: "Are your Hamilton cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Hamilton?", a: "For most Hamilton postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Hamilton?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Hamilton clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Hamilton?", a: "Yes. Our Hamilton branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
    { name: "Motherwell", href: "/locations/motherwell", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Hamilton", caption: "Local crew working in Hamilton" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Hamilton", caption: "Local Hamilton team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Hamilton", caption: "Living room refresh in a Hamilton family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Hamilton", caption: "Nightly janitorial at a Hamilton office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Cumbernauld (Greater Glasgow)
// ============================================================
export const cumbernauld: LocationDetail = {
  slug: "cumbernauld",
  name: "Cumbernauld",
  region: "Greater Glasgow",
  populationNote: "North Lanarkshire · ~52,000 residents",
  tagline: "Local Cumbernauld crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Cumbernauld.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Cumbernauld since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Cumbernauld | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Cumbernauld cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Cumbernauld since 2014. Our local Cumbernauld branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the North Lanarkshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Cumbernauld gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Cumbernauld's 1960s new-town architecture includes elevated walkways and multi-level deck access — our high-dusting team handles these regularly. Significant industrial estate footprint (Wardpark, Westfield) — nightly janitorial and floor-care contracts. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Cumbernauld branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Cumbernauld postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Cumbernauld's 1960s new-town architecture includes elevated walkways and multi-level deck access — our high-dusting team handles these regularly.",
    "Significant industrial estate footprint (Wardpark, Westfield) — nightly janitorial and floor-care contracts.",
    "North Lanarkshire Council approved supplier for void property turnover across G65-G68.",
    "Cumbernauld Glen wildlife corridor means nearby homes often need seasonal pollen and bird-dropping exterior cleaning.",
    "Broadwood Stadium and nearby sports facilities drive seasonal commercial contracts.",
  ],
  stats: [
    { value: "12+", label: "Years serving Cumbernauld" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Cumbernauld clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Town Centre & Shopping Centre (G67)", description: "Brutalist 1960s megastuct town centre plus modern retail park — commercial contracts and car-park cleaning." },
    { name: "Kildrum, Carrickstone & Abronhill", description: "Original 1960s new-town estates — recurring family home cleans and void turnover for housing associations." },
    { name: "Carbrain & Seafar", description: "High-density 1960s-70s housing with mixed tenure — void turns and recurring domestic work." },
    { name: "Condorrat & Eastfield", description: "Established estates plus new developments — mixed domestic and small commercial contracts." },
    { name: "Westfield & Craigmarloch", description: "Premium 2000s-2010s developments with modern family homes — deep cleans and post-construction work." },
    { name: "Belgian Bilingual Village (Westerwood)", description: "Premium 1980s-90s estates with golf course adjacent — luxury home recurring cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Cumbernauld postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Cumbernauld crew", description: "We assign a PVG-checked, uniformed Cumbernauld-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Cumbernauld", quote: "We've used three other services over the past decade in Cumbernauld. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Cumbernauld business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Cumbernauld had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Cumbernauld tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Cumbernauld? What postcodes?", a: "Yes. Our Cumbernauld branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Cumbernauld service area." },
    { q: "Are your Cumbernauld cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Cumbernauld?", a: "For most Cumbernauld postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Cumbernauld?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Cumbernauld clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Cumbernauld?", a: "Yes. Our Cumbernauld branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
    { name: "Motherwell", href: "/locations/motherwell", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Cumbernauld", caption: "Local crew working in Cumbernauld" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Cumbernauld", caption: "Local Cumbernauld team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Cumbernauld", caption: "Living room refresh in a Cumbernauld family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Cumbernauld", caption: "Nightly janitorial at a Cumbernauld office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Coatbridge (Greater Glasgow)
// ============================================================
export const coatbridge: LocationDetail = {
  slug: "coatbridge",
  name: "Coatbridge",
  region: "Greater Glasgow",
  populationNote: "North Lanarkshire · ~44,000 residents",
  tagline: "Local Coatbridge crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Coatbridge.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Coatbridge since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Coatbridge | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Coatbridge cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Coatbridge since 2014. Our local Coatbridge branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the North Lanarkshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Coatbridge gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Coatbridge's iron-working heritage means loft and cellar conversions often uncover industrial-era dust and residue — specialist cleaning protocols. Summerlee Museum and adjacent heritage sites require conservation-aware cleaning for nearby properties. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Coatbridge branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Coatbridge postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Coatbridge's iron-working heritage means loft and cellar conversions often uncover industrial-era dust and residue — specialist cleaning protocols.",
    "Summerlee Museum and adjacent heritage sites require conservation-aware cleaning for nearby properties.",
    "North Lanarkshire Council approved supplier for void turnover across ML5.",
    "Significant former-industrial building conversion to residential — post-renovation cleaning is a top service.",
    "Drumpellier Country Park proximity drives seasonal exterior cleaning for adjacent premium homes.",
  ],
  stats: [
    { value: "12+", label: "Years serving Coatbridge" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Coatbridge clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Coatbridge Town Centre (ML5)", description: "Historic industrial town centre with retail units and high-density flats — commercial contracts." },
    { name: "Greenend & Sunnyside", description: "Established residential streets with 1920s-30s housing — recurring domestic and end-of-tenancy cleans." },
    { name: "Cliftonville & Blairhill", description: "Post-war estates with mixed tenure — void turns and recurring home cleans." },
    { name: "Stewarton & Kirkwood", description: "Established estates plus newer developments — recurring cleans and deep clean bookings." },
    { name: "Dunbeth & Dundyvan", description: "Mixed residential and light industrial — commercial contracts alongside domestic work." },
    { name: "Summerside & Bartonshill", description: "Quiet residential streets near Drumpellier Country Park — premium recurring cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Coatbridge postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Coatbridge crew", description: "We assign a PVG-checked, uniformed Coatbridge-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Coatbridge", quote: "We've used three other services over the past decade in Coatbridge. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Coatbridge business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Coatbridge had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Coatbridge tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Coatbridge? What postcodes?", a: "Yes. Our Coatbridge branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Coatbridge service area." },
    { q: "Are your Coatbridge cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Coatbridge?", a: "For most Coatbridge postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Coatbridge?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Coatbridge clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Coatbridge?", a: "Yes. Our Coatbridge branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Motherwell", href: "/locations/motherwell", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Coatbridge", caption: "Local crew working in Coatbridge" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Coatbridge", caption: "Local Coatbridge team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Coatbridge", caption: "Living room refresh in a Coatbridge family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Coatbridge", caption: "Nightly janitorial at a Coatbridge office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Motherwell (Greater Glasgow)
// ============================================================
export const motherwell: LocationDetail = {
  slug: "motherwell",
  name: "Motherwell",
  region: "Greater Glasgow",
  populationNote: "North Lanarkshire · ~32,000 residents",
  tagline: "Local Motherwell crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Motherwell.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Motherwell since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Motherwell | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Motherwell cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Motherwell since 2014. Our local Motherwell branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the North Lanarkshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Motherwell gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Motherwell's steel-making heritage means former-industrial conversions are common — specialist dust and residue removal is routine. Ravenscraig regeneration is one of Europe's largest brownfield developments — we handle post-construction cleans weekly. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Motherwell branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Motherwell postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Motherwell's steel-making heritage means former-industrial conversions are common — specialist dust and residue removal is routine.",
    "Ravenscraig regeneration is one of Europe's largest brownfield developments — we handle post-construction cleans weekly.",
    "North Lanarkshire Council approved supplier for civic buildings and void turnover across ML1-ML2.",
    "Strathclyde Country Park and M&D's theme park drive seasonal hospitality and leisure cleaning contracts.",
    "Motherwell Football Club and nearby sports facilities require recurring commercial cleaning services.",
  ],
  stats: [
    { value: "12+", label: "Years serving Motherwell" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Motherwell clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Motherwell Town Centre (ML1)", description: "Civic centre, retail core and high-density flats — commercial contracts and void turnover." },
    { name: "Merry Street & Muirhouse", description: "Post-war local authority estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Dalziel Drive & Windmillhill", description: "Established residential streets — recurring family home cleans." },
    { name: "Carfin & Newarthill (ML1, ML2)", description: "Village settlements on the outskirts — recurring cleans and end-of-tenancy work." },
    { name: "Ravenscraig & New Stevenston", description: "Major new development on the former steelworks site — post-construction and new-build deep cleans." },
    { name: "Wishaw Road & Forgewood", description: "Mixed residential and commercial — recurring domestic and small-business contracts." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Motherwell postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Motherwell crew", description: "We assign a PVG-checked, uniformed Motherwell-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Motherwell", quote: "We've used three other services over the past decade in Motherwell. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Motherwell business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Motherwell had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Motherwell tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Motherwell? What postcodes?", a: "Yes. Our Motherwell branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Motherwell service area." },
    { q: "Are your Motherwell cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Motherwell?", a: "For most Motherwell postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Motherwell?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Motherwell clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Motherwell?", a: "Yes. Our Motherwell branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Motherwell", caption: "Local crew working in Motherwell" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Motherwell", caption: "Local Motherwell team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Motherwell", caption: "Living room refresh in a Motherwell family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Motherwell", caption: "Nightly janitorial at a Motherwell office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Newton Mearns (Greater Glasgow)
// ============================================================
export const newton_mearns: LocationDetail = {
  slug: "newton-mearns",
  name: "Newton Mearns",
  region: "Greater Glasgow",
  populationNote: "East Renfrewshire · ~27,000 residents",
  tagline: "Local Newton Mearns crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Newton Mearns.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Newton Mearns since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Newton Mearns | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Newton Mearns cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Newton Mearns since 2014. Our local Newton Mearns branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the East Renfrewshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Newton Mearns gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Newton Mearns is one of Scotland's most affluent postcodes — premium home cleaning with attention to period features, marble worktops, and silk rugs. East Renfrewshire Council approved supplier for civic buildings and void turnover across G77. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Newton Mearns branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Newton Mearns postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Newton Mearns is one of Scotland's most affluent postcodes — premium home cleaning with attention to period features, marble worktops, and silk rugs.",
    "East Renfrewshire Council approved supplier for civic buildings and void turnover across G77.",
    "Significant new-build development at Maidenhill requires weekly post-construction deep cleans.",
    "Whitelee Windfarm proximity means exterior cleaning often tackles wind-blown debris and pollen.",
    "Large detached homes with multiple bathrooms, home offices, and granny annexes — full housekeeping service popular.",
  ],
  stats: [
    { value: "12+", label: "Years serving Newton Mearns" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Newton Mearns clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Avenue Park & Broom (G77)", description: "Premium 1930s-50s family homes with large gardens — recurring cleans and upholstery care." },
    { name: "Crookfur & Patterton", description: "Premium 1980s-2000s estates — luxury home deep cleans and post-build work." },
    { name: "Greenlaw & Maidenhill (G77)", description: "New-build estates requiring post-construction cleaning and first-occupancy deep cleans." },
    { name: "Capelrig & Waterfoot", description: "Rural-adjacent premium homes — exterior soft-wash and garden-building cleans alongside recurring domestic work." },
    { name: "Eastwood & Newtoft", description: "Established suburban streets — recurring family home cleans." },
    { name: "Brookfield & Netherlee", description: "Premium 1920s-30s suburbs adjacent to Glasgow — listed-building-aware service." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Newton Mearns postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Newton Mearns crew", description: "We assign a PVG-checked, uniformed Newton Mearns-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Newton Mearns", quote: "We've used three other services over the past decade in Newton Mearns. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Newton Mearns business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Newton Mearns had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Newton Mearns tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Newton Mearns? What postcodes?", a: "Yes. Our Newton Mearns branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Newton Mearns service area." },
    { q: "Are your Newton Mearns cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Newton Mearns?", a: "For most Newton Mearns postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Newton Mearns?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Newton Mearns clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Newton Mearns?", a: "Yes. Our Newton Mearns branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Newton Mearns", caption: "Local crew working in Newton Mearns" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Newton Mearns", caption: "Local Newton Mearns team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Newton Mearns", caption: "Living room refresh in a Newton Mearns family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Newton Mearns", caption: "Nightly janitorial at a Newton Mearns office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Rutherglen (Greater Glasgow)
// ============================================================
export const rutherglen: LocationDetail = {
  slug: "rutherglen",
  name: "Rutherglen",
  region: "Greater Glasgow",
  populationNote: "South Lanarkshire · ~30,000 residents",
  tagline: "Local Rutherglen crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Rutherglen.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Rutherglen since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Rutherglen | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Rutherglen cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Rutherglen since 2014. Our local Rutherglen branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the South Lanarkshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Rutherglen gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Rutherglen is Scotland's oldest royal burgh — conservation-area properties require listed-building-safe products. South Lanarkshire Council approved supplier for void turnover across G72-G73. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Rutherglen branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Rutherglen postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Rutherglen is Scotland's oldest royal burgh — conservation-area properties require listed-building-safe products.",
    "South Lanarkshire Council approved supplier for void turnover across G72-G73.",
    "Proximity to Glasgow's East End means we share crews across both areas for efficiency.",
    "Clyde Gateway regeneration drives new-build post-construction cleaning work.",
    "Rutherglen Main Street retail sector requires nightly janitorial and weekly deep clean contracts.",
  ],
  stats: [
    { value: "12+", label: "Years serving Rutherglen" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Rutherglen clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Rutherglen Town Centre (G73)", description: "Historic royal burgh centre with retail units and flats above — commercial contracts and end-of-tenancy work." },
    { name: "Burnside & Stonelaw (G73)", description: "Premium residential streets with 1920s-30s housing — recurring family home cleans." },
    { name: "Fernhill & Spittal", description: "Post-war local authority estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Gallowflat & Wardlawhill", description: "Established residential streets — recurring cleans and deep clean bookings." },
    { name: "Farmloon & Eastfield", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Cambuslang & Halfway (G72, G73)", description: "Adjacent town centres with mixed residential and retail — recurring commercial contracts." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Rutherglen postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Rutherglen crew", description: "We assign a PVG-checked, uniformed Rutherglen-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Rutherglen", quote: "We've used three other services over the past decade in Rutherglen. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Rutherglen business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Rutherglen had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Rutherglen tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Rutherglen? What postcodes?", a: "Yes. Our Rutherglen branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Rutherglen service area." },
    { q: "Are your Rutherglen cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Rutherglen?", a: "For most Rutherglen postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Rutherglen?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Rutherglen clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Rutherglen?", a: "Yes. Our Rutherglen branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Rutherglen", caption: "Local crew working in Rutherglen" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Rutherglen", caption: "Local Rutherglen team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Rutherglen", caption: "Living room refresh in a Rutherglen family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Rutherglen", caption: "Nightly janitorial at a Rutherglen office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Bearsden (Greater Glasgow)
// ============================================================
export const bearsden: LocationDetail = {
  slug: "bearsden",
  name: "Bearsden",
  region: "Greater Glasgow",
  populationNote: "East Dunbartonshire · ~28,000 residents",
  tagline: "Local Bearsden crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Bearsden.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Bearsden since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Bearsden | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Bearsden cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Bearsden since 2014. Our local Bearsden branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the East Dunbartonshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Bearsden gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Bearsden is consistently ranked as one of Scotland's most affluent postcodes — premium home cleaning with attention to period features. Roman Antonine Wall runs through the town — conservation-area protocols apply to several streets. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Bearsden branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Bearsden postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Bearsden is consistently ranked as one of Scotland's most affluent postcodes — premium home cleaning with attention to period features.",
    "Roman Antonine Wall runs through the town — conservation-area protocols apply to several streets.",
    "East Dunbartonshire Council approved supplier for civic buildings and void turnover across G61.",
    "Significant listed-building stock from the 1920s garden-suburb movement — specialist traditional-material chemistry.",
    "Large detached villas with original sash-and-case windows, cornicing, and pitch-pine doors — detail-led cleaning is non-negotiable.",
  ],
  stats: [
    { value: "12+", label: "Years serving Bearsden" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Bearsden clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Bearsden Cross & town centre (G61)", description: "Premium 1920s-30s suburb with stone-built villas — luxury recurring cleans and listed-building-aware service." },
    { name: "New Kilpatrick & Canniesburn", description: "Established premium residential streets — recurring family home cleans and upholstery care." },
    { name: "Westerton & Bearsden North", description: "1920s-30s garden suburb — conservation-area cleaning with traditional materials." },
    { name: "Kessington & Hillfoot", description: "Post-war estates with family homes — recurring domestic and deep clean bookings." },
    { name: "Clober & Drumchapel (border)", description: "Mixed residential areas — recurring domestic and end-of-tenancy work." },
    { name: "Milngavie adjacent (G62 border)", description: "Premium homes straddling the Bearsden/Milngavie boundary — full housekeeping services." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Bearsden postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Bearsden crew", description: "We assign a PVG-checked, uniformed Bearsden-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Bearsden", quote: "We've used three other services over the past decade in Bearsden. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Bearsden business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Bearsden had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Bearsden tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Bearsden? What postcodes?", a: "Yes. Our Bearsden branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Bearsden service area." },
    { q: "Are your Bearsden cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Bearsden?", a: "For most Bearsden postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Bearsden?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Bearsden clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Bearsden?", a: "Yes. Our Bearsden branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Bearsden", caption: "Local crew working in Bearsden" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Bearsden", caption: "Local Bearsden team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Bearsden", caption: "Living room refresh in a Bearsden family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Bearsden", caption: "Nightly janitorial at a Bearsden office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Milngavie (Greater Glasgow)
// ============================================================
export const milngavie: LocationDetail = {
  slug: "milngavie",
  name: "Milngavie",
  region: "Greater Glasgow",
  populationNote: "East Dunbartonshire · ~14,000 residents",
  tagline: "Local Milngavie crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Milngavie.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Milngavie since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Milngavie | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Milngavie cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Milngavie since 2014. Our local Milngavie branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the East Dunbartonshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Milngavie gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Milngavie is the start of the West Highland Way — visitor-season demand for holiday-let turnover and B&B deep cleans. Mugdock Country Park proximity means homes often need seasonal pollen and exterior cleaning. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Milngavie branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Milngavie postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Milngavie is the start of the West Highland Way — visitor-season demand for holiday-let turnover and B&B deep cleans.",
    "Mugdock Country Park proximity means homes often need seasonal pollen and exterior cleaning.",
    "East Dunbartonshire Council approved supplier for civic buildings and void turnover across G62.",
    "Affluent commuter suburb with significant conservation-area stock — listed-building-aware service throughout.",
    "Independent retail sector on the pedestrianised main street requires nightly janitorial contracts.",
  ],
  stats: [
    { value: "12+", label: "Years serving Milngavie" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Milngavie clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Milngavie Town Centre (G62)", description: "Pedestrianised centre with independent shops and cafes — retail-sector nightly cleaning." },
    { name: "West Common & Station Road", description: "Premium 1900s-30s villas near the station — luxury recurring cleans." },
    { name: "Clober & Barhead", description: "Post-war estates with family homes — recurring domestic and end-of-tenancy work." },
    { name: "Craigton & Mainsknatch", description: "Established residential streets — recurring family home cleans." },
    { name: "Mugdock adjacent", description: "Rural-adjacent premium homes near Mugdock Country Park — exterior soft-wash and garden-building cleans." },
    { name: "Bearsden adjacent (G61 border)", description: "Premium homes straddling the boundary — full housekeeping services." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Milngavie postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Milngavie crew", description: "We assign a PVG-checked, uniformed Milngavie-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Milngavie", quote: "We've used three other services over the past decade in Milngavie. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Milngavie business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Milngavie had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Milngavie tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Milngavie? What postcodes?", a: "Yes. Our Milngavie branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Milngavie service area." },
    { q: "Are your Milngavie cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Milngavie?", a: "For most Milngavie postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Milngavie?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Milngavie clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Milngavie?", a: "Yes. Our Milngavie branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Milngavie", caption: "Local crew working in Milngavie" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Milngavie", caption: "Local Milngavie team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Milngavie", caption: "Living room refresh in a Milngavie family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Milngavie", caption: "Nightly janitorial at a Milngavie office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Bishopbriggs (Greater Glasgow)
// ============================================================
export const bishopbriggs: LocationDetail = {
  slug: "bishopbriggs",
  name: "Bishopbriggs",
  region: "Greater Glasgow",
  populationNote: "East Dunbartonshire · ~23,000 residents",
  tagline: "Local Bishopbriggs crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Bishopbriggs.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Bishopbriggs since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Bishopbriggs | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Bishopbriggs cleaners covering every Scottish postcode in Greater Glasgow. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Bishopbriggs since 2014. Our local Bishopbriggs branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the East Dunbartonshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Bishopbriggs gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Bishopbriggs sits on the northern edge of Glasgow with easy M80 access — crews dispatch quickly to both Bishopbriggs and surrounding villages. East Dunbartonshire Council approved supplier for void turnover across G64. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Bishopbriggs branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Bishopbriggs postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Bishopbriggs sits on the northern edge of Glasgow with easy M80 access — crews dispatch quickly to both Bishopbriggs and surrounding villages.",
    "East Dunbartonshire Council approved supplier for void turnover across G64.",
    "Cadder Cemetery and conservation areas require listed-building-aware cleaning for nearby properties.",
    "Significant 1930s-50s housing stock with original tiled hallways, picture rails, and cast-iron fireplaces — detail-led cleaning is standard.",
    "Proximity to the Campsie Fells means homes often need seasonal exterior cleaning for wind-blown debris.",
  ],
  stats: [
    { value: "12+", label: "Years serving Bishopbriggs" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Bishopbriggs clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Bishopbriggs Town Centre (G64)", description: "Pedestrianised centre with retail units and flats — commercial contracts and end-of-tenancy work." },
    { name: "Cadder & Kenmure", description: "Established residential streets with 1930s-50s housing — recurring family home cleans." },
    { name: "Westermains & Colston", description: "Post-war estates with family homes — recurring domestic and deep clean bookings." },
    { name: "Auchinairn & Woodhill", description: "Mixed tenure estates — void turns and recurring domestic work." },
    { name: "Balmuildy & St Helens", description: "Established residential areas — recurring cleans and end-of-tenancy work." },
    { name: "Torrence & Balmore (rural fringe)", description: "Rural-adjacent properties requiring exterior soft-wash and driveway cleaning." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Bishopbriggs postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Bishopbriggs crew", description: "We assign a PVG-checked, uniformed Bishopbriggs-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Bishopbriggs", quote: "We've used three other services over the past decade in Bishopbriggs. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Bishopbriggs business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Bishopbriggs had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Greater Glasgow", quote: "I manage 240 tenancies across Greater Glasgow. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Bishopbriggs tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Bishopbriggs? What postcodes?", a: "Yes. Our Bishopbriggs branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Bishopbriggs service area." },
    { q: "Are your Bishopbriggs cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Bishopbriggs?", a: "For most Bishopbriggs postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Bishopbriggs?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Bishopbriggs clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Bishopbriggs?", a: "Yes. Our Bishopbriggs branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Glasgow", href: "/locations/glasgow", region: "Greater Glasgow" },
    { name: "Paisley", href: "/locations/paisley", region: "Greater Glasgow" },
    { name: "East Kilbride", href: "/locations/east-kilbride", region: "Greater Glasgow" },
    { name: "Hamilton", href: "/locations/hamilton", region: "Greater Glasgow" },
    { name: "Cumbernauld", href: "/locations/cumbernauld", region: "Greater Glasgow" },
    { name: "Coatbridge", href: "/locations/coatbridge", region: "Greater Glasgow" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Bishopbriggs", caption: "Local crew working in Bishopbriggs" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Bishopbriggs", caption: "Local Bishopbriggs team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Bishopbriggs", caption: "Living room refresh in a Bishopbriggs family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Bishopbriggs", caption: "Nightly janitorial at a Bishopbriggs office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Edinburgh (Edinburgh & Lothians)
// ============================================================
export const edinburgh: LocationDetail = {
  slug: "edinburgh",
  name: "Edinburgh",
  region: "Edinburgh & Lothians",
  populationNote: "City of Edinburgh · ~527,000 residents",
  tagline: "Local Edinburgh crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Edinburgh.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Edinburgh since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in Edinburgh | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Edinburgh cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Edinburgh since 2014. Our local Edinburgh branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the City of Edinburgh footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Edinburgh gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Edinburgh's UNESCO World Heritage status covers the New and Old Towns — we use listed-building-safe chemistry throughout the conservation area. The Festival Fringe (August) creates the largest short-term-let turnover peak in Europe — we have a dedicated 24-person team for the month. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Edinburgh branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Edinburgh postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Edinburgh's UNESCO World Heritage status covers the New and Old Towns — we use listed-building-safe chemistry throughout the conservation area.",
    "The Festival Fringe (August) creates the largest short-term-let turnover peak in Europe — we have a dedicated 24-person team for the month.",
    "Scottish Parliament, City Chambers and other civic buildings require security-cleared cleaning crews.",
    "Edinburgh's tenement close-cleaning tradition is alive here — communal stairwells are scrubbed, mopped and disinfected weekly for over 180 closes.",
    "Haymarket and St Andrew Square business districts drive nightly janitorial contracts across the EH1-EH3 footprint.",
    "Christmas and New Year Hogmanay celebrations drive post-party cleanup demand through January 2nd.",
  ],
  stats: [
    { value: "12+", label: "Years serving Edinburgh" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Edinburgh clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "New Town (EH1-EH3)", description: "Georgian UNESCO World Heritage terraces with original plasterwork — listed-building-aware specialist cleaning is essential." },
    { name: "Old Town & Royal Mile (EH1)", description: "Medieval closes and tenements above the Royal Mile — close-cleaning and visitor-footfall janitorial contracts." },
    { name: "Marchmont & Bruntsfield (EH9)", description: "Victorian tenements with bay windows and original cornicing — recurring domestic and tenement close-cleaning." },
    { name: "Morningside & Fairmilehead (EH10, EH13)", description: "Premium family homes with gardens — luxury recurring cleans and upholstery care." },
    { name: "Leith & Newhaven (EH6)", description: "Converted warehouses and modern flats — post-renovation and recurring domestic work." },
    { name: "Stockbridge & Inverleith (EH4)", description: "Conservation-area streets with Georgian and Victorian architecture — listed-building-aware service." },
    { name: "Portobello & Joppa (EH15)", description: "Seaside homes with sea-spray exposure — exterior soft-wash and driveway cleaning." },
    { name: "Corstorphine & South Gyle (EH12)", description: "Suburban family homes plus business parks — commercial contracts and recurring domestic work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Edinburgh postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Edinburgh crew", description: "We assign a PVG-checked, uniformed Edinburgh-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Edinburgh", quote: "We've used three other services over the past decade in Edinburgh. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Edinburgh business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Edinburgh had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Edinburgh tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Edinburgh? What postcodes?", a: "Yes. Our Edinburgh branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Edinburgh service area." },
    { q: "Are your Edinburgh cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Edinburgh?", a: "For most Edinburgh postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Edinburgh?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Edinburgh clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Edinburgh?", a: "Yes. Our Edinburgh branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Livingston", href: "/locations/livingston", region: "Edinburgh & Lothians" },
    { name: "Musselburgh", href: "/locations/musselburgh", region: "Edinburgh & Lothians" },
    { name: "Dalkeith", href: "/locations/dalkeith", region: "Edinburgh & Lothians" },
    { name: "Bathgate", href: "/locations/bathgate", region: "Edinburgh & Lothians" },
    { name: "Haddington", href: "/locations/haddington", region: "Edinburgh & Lothians" },
    { name: "Linlithgow", href: "/locations/linlithgow", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in Edinburgh", caption: "Local crew working in Edinburgh" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Edinburgh", caption: "Local Edinburgh team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Edinburgh", caption: "Living room refresh in a Edinburgh family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Edinburgh", caption: "Nightly janitorial at a Edinburgh office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Livingston (Edinburgh & Lothians)
// ============================================================
export const livingston: LocationDetail = {
  slug: "livingston",
  name: "Livingston",
  region: "Edinburgh & Lothians",
  populationNote: "West Lothian · ~57,000 residents",
  tagline: "Local Livingston crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Livingston.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Livingston since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in Livingston | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Livingston cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Livingston since 2014. Our local Livingston branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the West Lothian footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Livingston gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Livingston is Scotland's largest new town (designated 1962) — we know the difference between the original estates and the 2000s+ developments. The Centre shopping mall is one of Scotland's largest covered retail centres — nightly floor-care and restroom sanitation contracts. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Livingston branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Livingston postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Livingston is Scotland's largest new town (designated 1962) — we know the difference between the original estates and the 2000s+ developments.",
    "The Centre shopping mall is one of Scotland's largest covered retail centres — nightly floor-care and restroom sanitation contracts.",
    "West Lothian Council approved supplier for void property turnover across EH47-EH55.",
    "Significant business park footprint (Almondvale, Kirkton) — daytime commercial cleaning and day-porter roles.",
    "Edinburgh commuter belt means many households need flexible recurring cleans around work-from-office hybrid patterns.",
  ],
  stats: [
    { value: "12+", label: "Years serving Livingston" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Livingston clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Livingston Town Centre & The Centre (EH54)", description: "Pedestrianised shopping centre, civic buildings and high-density flats — commercial contracts." },
    { name: "Craigshill & Howden (EH54)", description: "Original 1960s new-town estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Dedridge & Bankton", description: "Established 1970s-80s estates — recurring family home cleans." },
    { name: "Knightsridge & Deans", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Murieston & Bellsquarry (EH54)", description: "Premium 1990s-2000s estates with large family homes — luxury recurring cleans." },
    { name: "Ladywell & Eliburn", description: "Established residential areas — recurring cleans and end-of-tenancy work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Livingston postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Livingston crew", description: "We assign a PVG-checked, uniformed Livingston-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Livingston", quote: "We've used three other services over the past decade in Livingston. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Livingston business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Livingston had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Livingston tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Livingston? What postcodes?", a: "Yes. Our Livingston branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Livingston service area." },
    { q: "Are your Livingston cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Livingston?", a: "For most Livingston postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Livingston?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Livingston clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Livingston?", a: "Yes. Our Livingston branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Edinburgh", href: "/locations/edinburgh", region: "Edinburgh & Lothians" },
    { name: "Musselburgh", href: "/locations/musselburgh", region: "Edinburgh & Lothians" },
    { name: "Dalkeith", href: "/locations/dalkeith", region: "Edinburgh & Lothians" },
    { name: "Bathgate", href: "/locations/bathgate", region: "Edinburgh & Lothians" },
    { name: "Haddington", href: "/locations/haddington", region: "Edinburgh & Lothians" },
    { name: "Linlithgow", href: "/locations/linlithgow", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in Livingston", caption: "Local crew working in Livingston" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Livingston", caption: "Local Livingston team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Livingston", caption: "Living room refresh in a Livingston family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Livingston", caption: "Nightly janitorial at a Livingston office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Musselburgh (Edinburgh & Lothians)
// ============================================================
export const musselburgh: LocationDetail = {
  slug: "musselburgh",
  name: "Musselburgh",
  region: "Edinburgh & Lothians",
  populationNote: "East Lothian · ~22,000 residents",
  tagline: "Local Musselburgh crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Musselburgh.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Musselburgh since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in Musselburgh | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Musselburgh cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Musselburgh since 2014. Our local Musselburgh branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the East Lothian footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Musselburgh gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Musselburgh claims to be Scotland's oldest town — Inveresk conservation area requires listed-building-safe products. Musselburgh Racecourse meetings drive seasonal hospitality cleaning contracts across nearby venues. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Musselburgh branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Musselburgh postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Musselburgh claims to be Scotland's oldest town — Inveresk conservation area requires listed-building-safe products.",
    "Musselburgh Racecourse meetings drive seasonal hospitality cleaning contracts across nearby venues.",
    "East Lothian Council approved supplier for civic buildings and void turnover across EH21.",
    "Queen Margaret University campus drives recurring commercial and student-let turnover work.",
    "Firth of Forth proximity means sea-spray exterior cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Musselburgh" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Musselburgh clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Musselburgh Town Centre (EH21)", description: "Historic royal burgh with High Street retail and flats above — commercial contracts and end-of-tenancy work." },
    { name: "Fisherrow & Levenhall", description: "Former fishing village with period cottages — conservation-area-aware service." },
    { name: "Pinkie & Stoneybank", description: "Established residential streets with 1920s-30s housing — recurring family home cleans." },
    { name: "Wallyford & Whitecraig", description: "Post-war estates plus significant new-build development — recurring domestic and post-construction work." },
    { name: "Musselburgh Racecourse adjacent", description: "Premium homes near the racecourse — recurring domestic and event-season hospitality cleaning." },
    { name: "Inveresk Village (conservation area)", description: "Listed buildings and period cottages — specialist listed-building-aware service." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Musselburgh postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Musselburgh crew", description: "We assign a PVG-checked, uniformed Musselburgh-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Musselburgh", quote: "We've used three other services over the past decade in Musselburgh. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Musselburgh business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Musselburgh had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Musselburgh tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Musselburgh? What postcodes?", a: "Yes. Our Musselburgh branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Musselburgh service area." },
    { q: "Are your Musselburgh cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Musselburgh?", a: "For most Musselburgh postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Musselburgh?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Musselburgh clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Musselburgh?", a: "Yes. Our Musselburgh branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Edinburgh", href: "/locations/edinburgh", region: "Edinburgh & Lothians" },
    { name: "Livingston", href: "/locations/livingston", region: "Edinburgh & Lothians" },
    { name: "Dalkeith", href: "/locations/dalkeith", region: "Edinburgh & Lothians" },
    { name: "Bathgate", href: "/locations/bathgate", region: "Edinburgh & Lothians" },
    { name: "Haddington", href: "/locations/haddington", region: "Edinburgh & Lothians" },
    { name: "Linlithgow", href: "/locations/linlithgow", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in Musselburgh", caption: "Local crew working in Musselburgh" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Musselburgh", caption: "Local Musselburgh team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Musselburgh", caption: "Living room refresh in a Musselburgh family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Musselburgh", caption: "Nightly janitorial at a Musselburgh office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Dalkeith (Edinburgh & Lothians)
// ============================================================
export const dalkeith: LocationDetail = {
  slug: "dalkeith",
  name: "Dalkeith",
  region: "Edinburgh & Lothians",
  populationNote: "Midlothian · ~12,500 residents",
  tagline: "Local Dalkeith crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Dalkeith.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Dalkeith since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in Dalkeith | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Dalkeith cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Dalkeith since 2014. Our local Dalkeith branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Midlothian footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Dalkeith gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Dalkeith is the historic county town of Midlothian — civic building contracts include the sheriff court and council offices. Midlothian Council approved supplier for civic buildings and void turnover across EH22-EH23. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Dalkeith branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Dalkeith postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Dalkeith is the historic county town of Midlothian — civic building contracts include the sheriff court and council offices.",
    "Midlothian Council approved supplier for civic buildings and void turnover across EH22-EH23.",
    "Dalkeith Country Park and Palace proximity drives seasonal hospitality cleaning contracts.",
    "Significant former-mining village regeneration across EH22-EH23 — post-renovation cleaning is a top service.",
    "Edinburgh commuter belt — flexible recurring cleans around hybrid work-from-home patterns are popular.",
  ],
  stats: [
    { value: "12+", label: "Years serving Dalkeith" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Dalkeith clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Dalkeith Town Centre (EH22)", description: "Historic market town centre with retail units and flats above — commercial contracts." },
    { name: "Newbattle & Woodburn", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Lasswade & Poltonhall", description: "Premium residential villages with period cottages — conservation-area-aware service." },
    { name: "Bonnyrigg & Mayfield (EH19, EH22)", description: "Adjacent towns with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Eskbank & Ironmills", description: "Premium 1900s-30s villas — luxury recurring cleans and upholstery care." },
    { name: "Gorebridge & Newtongrange (EH23)", description: "Former mining villages with significant new-build development — post-construction and recurring cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Dalkeith postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Dalkeith crew", description: "We assign a PVG-checked, uniformed Dalkeith-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Dalkeith", quote: "We've used three other services over the past decade in Dalkeith. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Dalkeith business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Dalkeith had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Dalkeith tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Dalkeith? What postcodes?", a: "Yes. Our Dalkeith branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Dalkeith service area." },
    { q: "Are your Dalkeith cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Dalkeith?", a: "For most Dalkeith postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Dalkeith?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Dalkeith clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Dalkeith?", a: "Yes. Our Dalkeith branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Edinburgh", href: "/locations/edinburgh", region: "Edinburgh & Lothians" },
    { name: "Livingston", href: "/locations/livingston", region: "Edinburgh & Lothians" },
    { name: "Musselburgh", href: "/locations/musselburgh", region: "Edinburgh & Lothians" },
    { name: "Bathgate", href: "/locations/bathgate", region: "Edinburgh & Lothians" },
    { name: "Haddington", href: "/locations/haddington", region: "Edinburgh & Lothians" },
    { name: "Linlithgow", href: "/locations/linlithgow", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in Dalkeith", caption: "Local crew working in Dalkeith" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Dalkeith", caption: "Local Dalkeith team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Dalkeith", caption: "Living room refresh in a Dalkeith family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Dalkeith", caption: "Nightly janitorial at a Dalkeith office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Bathgate (Edinburgh & Lothians)
// ============================================================
export const bathgate: LocationDetail = {
  slug: "bathgate",
  name: "Bathgate",
  region: "Edinburgh & Lothians",
  populationNote: "West Lothian · ~21,000 residents",
  tagline: "Local Bathgate crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Bathgate.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Bathgate since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in Bathgate | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Bathgate cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Bathgate since 2014. Our local Bathgate branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the West Lothian footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Bathgate gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Bathgate's motor-manufacturing heritage (now closed) means former-industrial building conversions are common — specialist post-renovation cleaning. West Lothian Council approved supplier for civic buildings and void turnover across EH47-EH49. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Bathgate branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Bathgate postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Bathgate's motor-manufacturing heritage (now closed) means former-industrial building conversions are common — specialist post-renovation cleaning.",
    "West Lothian Council approved supplier for civic buildings and void turnover across EH47-EH49.",
    "M8 corridor location means we service several motorway-service-area hospitality venues on recurring contracts.",
    "Edinburgh/Glasgow midway position means we dispatch crews across central Scotland from Bathgate efficiently.",
    "Mixed housing stock from 1900s miners' rows to 2010s new-build estates — full chemistry and technique range required.",
  ],
  stats: [
    { value: "12+", label: "Years serving Bathgate" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Bathgate clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Bathgate Town Centre (EH48)", description: "Historic industrial town centre with retail units and flats — commercial contracts and end-of-tenancy work." },
    { name: "Marjoribanks & Boghall", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Whitburn Road & Ballencrieff", description: "Established residential streets — recurring family home cleans." },
    { name: "Armadale & Blackridge (EH48, EH49)", description: "Adjacent towns with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Kirkton & Netherhouse", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Torphichen & Bridgend", description: "Village settlements with period properties — conservation-area-aware service." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Bathgate postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Bathgate crew", description: "We assign a PVG-checked, uniformed Bathgate-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Bathgate", quote: "We've used three other services over the past decade in Bathgate. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Bathgate business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Bathgate had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Bathgate tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Bathgate? What postcodes?", a: "Yes. Our Bathgate branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Bathgate service area." },
    { q: "Are your Bathgate cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Bathgate?", a: "For most Bathgate postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Bathgate?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Bathgate clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Bathgate?", a: "Yes. Our Bathgate branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Edinburgh", href: "/locations/edinburgh", region: "Edinburgh & Lothians" },
    { name: "Livingston", href: "/locations/livingston", region: "Edinburgh & Lothians" },
    { name: "Musselburgh", href: "/locations/musselburgh", region: "Edinburgh & Lothians" },
    { name: "Dalkeith", href: "/locations/dalkeith", region: "Edinburgh & Lothians" },
    { name: "Haddington", href: "/locations/haddington", region: "Edinburgh & Lothians" },
    { name: "Linlithgow", href: "/locations/linlithgow", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in Bathgate", caption: "Local crew working in Bathgate" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Bathgate", caption: "Local Bathgate team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Bathgate", caption: "Living room refresh in a Bathgate family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Bathgate", caption: "Nightly janitorial at a Bathgate office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Haddington (Edinburgh & Lothians)
// ============================================================
export const haddington: LocationDetail = {
  slug: "haddington",
  name: "Haddington",
  region: "Edinburgh & Lothians",
  populationNote: "East Lothian · ~9,500 residents",
  tagline: "Local Haddington crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Haddington.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Haddington since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in Haddington | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Haddington cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Haddington since 2014. Our local Haddington branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the East Lothian footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Haddington gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Haddington is East Lothian's county town — civic building contracts include the sheriff court and council offices. Significant listed-building stock in the conservation area — traditional-material chemistry and lint-free glass cloths throughout. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Haddington branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Haddington postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Haddington is East Lothian's county town — civic building contracts include the sheriff court and council offices.",
    "Significant listed-building stock in the conservation area — traditional-material chemistry and lint-free glass cloths throughout.",
    "East Lothian Council approved supplier for civic buildings and void turnover across EH41.",
    "A1 corridor location means we service several road-side hospitality venues on recurring contracts.",
    "Rural-adjacent market town — exterior soft-wash and garden-building cleans are popular alongside recurring domestic work.",
  ],
  stats: [
    { value: "12+", label: "Years serving Haddington" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Haddington clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Haddington Town Centre (EH41)", description: "Historic royal burgh with High Street retail and period properties — commercial contracts." },
    { name: "Nungate & St Mary's", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Sanderson's Place & Newton Port", description: "Premium 1900s-30s villas — luxury recurring cleans and upholstery care." },
    { name: "Athelstaneford & Bolton (rural fringe)", description: "Village settlements and farmsteads — rural-adjacent exterior and outbuilding cleans." },
    { name: "Lennoxlove & Whittingehame estates adjacent", description: "Premium rural properties — full housekeeping services alongside recurring domestic." },
    { name: "Dunbar Road & Amisfield", description: "Modern developments with family homes — recurring domestic and post-construction work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Haddington postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Haddington crew", description: "We assign a PVG-checked, uniformed Haddington-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Haddington", quote: "We've used three other services over the past decade in Haddington. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Haddington business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Haddington had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Haddington tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Haddington? What postcodes?", a: "Yes. Our Haddington branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Haddington service area." },
    { q: "Are your Haddington cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Haddington?", a: "For most Haddington postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Haddington?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Haddington clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Haddington?", a: "Yes. Our Haddington branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Edinburgh", href: "/locations/edinburgh", region: "Edinburgh & Lothians" },
    { name: "Livingston", href: "/locations/livingston", region: "Edinburgh & Lothians" },
    { name: "Musselburgh", href: "/locations/musselburgh", region: "Edinburgh & Lothians" },
    { name: "Dalkeith", href: "/locations/dalkeith", region: "Edinburgh & Lothians" },
    { name: "Bathgate", href: "/locations/bathgate", region: "Edinburgh & Lothians" },
    { name: "Linlithgow", href: "/locations/linlithgow", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in Haddington", caption: "Local crew working in Haddington" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Haddington", caption: "Local Haddington team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Haddington", caption: "Living room refresh in a Haddington family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Haddington", caption: "Nightly janitorial at a Haddington office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Linlithgow (Edinburgh & Lothians)
// ============================================================
export const linlithgow: LocationDetail = {
  slug: "linlithgow",
  name: "Linlithgow",
  region: "Edinburgh & Lothians",
  populationNote: "West Lothian · ~14,000 residents",
  tagline: "Local Linlithgow crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Linlithgow.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Linlithgow since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in Linlithgow | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Linlithgow cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Linlithgow since 2014. Our local Linlithgow branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the West Lothian footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Linlithgow gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Linlithgow Palace (birthplace of Mary Queen of Scots) and surrounding conservation area require listed-building-safe products. West Lothian Council approved supplier for civic buildings and void turnover across EH49. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Linlithgow branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Linlithgow postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Linlithgow Palace (birthplace of Mary Queen of Scots) and surrounding conservation area require listed-building-safe products.",
    "West Lothian Council approved supplier for civic buildings and void turnover across EH49.",
    "Edinburgh/Glasgow commuter position on the main railway line — many residents work hybrid patterns needing flexible cleans.",
    "Lochside location means exterior cleaning often tackles algae and moss on driveways and patios.",
    "Conservation-area stock includes 17th-18th century stone-built properties — specialist traditional-material chemistry.",
  ],
  stats: [
    { value: "12+", label: "Years serving Linlithgow" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Linlithgow clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Linlithgow Town Centre (EH49)", description: "Historic royal burgh with High Street retail and period properties — commercial contracts." },
    { name: "Kirkcroft & Blackness Road", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Braehead & Springfield", description: "Established residential streets with 1920s-30s housing — recurring family home cleans." },
    { name: "Binns Road & Clifton", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Linlithgow Bridge & Whitecross", description: "Village settlements with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Burghmuir & Lochside", description: "Premium residential streets near the Palace — luxury recurring cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Linlithgow postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Linlithgow crew", description: "We assign a PVG-checked, uniformed Linlithgow-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Linlithgow", quote: "We've used three other services over the past decade in Linlithgow. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Linlithgow business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Linlithgow had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Linlithgow tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Linlithgow? What postcodes?", a: "Yes. Our Linlithgow branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Linlithgow service area." },
    { q: "Are your Linlithgow cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Linlithgow?", a: "For most Linlithgow postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Linlithgow?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Linlithgow clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Linlithgow?", a: "Yes. Our Linlithgow branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Edinburgh", href: "/locations/edinburgh", region: "Edinburgh & Lothians" },
    { name: "Livingston", href: "/locations/livingston", region: "Edinburgh & Lothians" },
    { name: "Musselburgh", href: "/locations/musselburgh", region: "Edinburgh & Lothians" },
    { name: "Dalkeith", href: "/locations/dalkeith", region: "Edinburgh & Lothians" },
    { name: "Bathgate", href: "/locations/bathgate", region: "Edinburgh & Lothians" },
    { name: "Haddington", href: "/locations/haddington", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in Linlithgow", caption: "Local crew working in Linlithgow" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Linlithgow", caption: "Local Linlithgow team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Linlithgow", caption: "Living room refresh in a Linlithgow family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Linlithgow", caption: "Nightly janitorial at a Linlithgow office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Penicuik (Edinburgh & Lothians)
// ============================================================
export const penicuik: LocationDetail = {
  slug: "penicuik",
  name: "Penicuik",
  region: "Edinburgh & Lothians",
  populationNote: "Midlothian · ~17,000 residents",
  tagline: "Local Penicuik crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Penicuik.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Penicuik since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in Penicuik | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Penicuik cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Penicuik since 2014. Our local Penicuik branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Midlothian footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Penicuik gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Penicuik's paper-mill heritage means loft and outbuilding conversions often uncover industrial-era dust — specialist cleaning protocols. Midlothian Council approved supplier for civic buildings and void turnover across EH26. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Penicuik branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Penicuik postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Penicuik's paper-mill heritage means loft and outbuilding conversions often uncover industrial-era dust — specialist cleaning protocols.",
    "Midlothian Council approved supplier for civic buildings and void turnover across EH26.",
    "Roslin Chapel and conservation-area proximity require listed-building-safe products.",
    "Pentland Hills proximity means homes often need seasonal exterior cleaning for wind-blown debris.",
    "Edinburgh commuter belt — flexible recurring cleans around hybrid work patterns are popular.",
  ],
  stats: [
    { value: "12+", label: "Years serving Penicuik" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Penicuik clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Penicuik Town Centre (EH26)", description: "Historic paper-mill town with High Street retail and flats — commercial contracts." },
    { name: "High Street & Bridge Street", description: "Conservation-area streets with period properties — listed-building-aware service." },
    { name: "Cuiken & Cornbank", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Broomhill & Mauricewood", description: "Established residential streets — recurring family home cleans." },
    { name: "Roslin & Glencorse (rural fringe)", description: "Village settlements with period cottages — rural-adjacent exterior and outbuilding cleans." },
    { name: "Auchendinny & Beeslack", description: "Premium residential areas — luxury recurring cleans alongside recurring domestic." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Penicuik postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Penicuik crew", description: "We assign a PVG-checked, uniformed Penicuik-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Penicuik", quote: "We've used three other services over the past decade in Penicuik. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Penicuik business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Penicuik had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Penicuik tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Penicuik? What postcodes?", a: "Yes. Our Penicuik branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Penicuik service area." },
    { q: "Are your Penicuik cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Penicuik?", a: "For most Penicuik postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Penicuik?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Penicuik clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Penicuik?", a: "Yes. Our Penicuik branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Edinburgh", href: "/locations/edinburgh", region: "Edinburgh & Lothians" },
    { name: "Livingston", href: "/locations/livingston", region: "Edinburgh & Lothians" },
    { name: "Musselburgh", href: "/locations/musselburgh", region: "Edinburgh & Lothians" },
    { name: "Dalkeith", href: "/locations/dalkeith", region: "Edinburgh & Lothians" },
    { name: "Bathgate", href: "/locations/bathgate", region: "Edinburgh & Lothians" },
    { name: "Haddington", href: "/locations/haddington", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in Penicuik", caption: "Local crew working in Penicuik" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Penicuik", caption: "Local Penicuik team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Penicuik", caption: "Living room refresh in a Penicuik family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Penicuik", caption: "Nightly janitorial at a Penicuik office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — North Berwick (Edinburgh & Lothians)
// ============================================================
export const north_berwick: LocationDetail = {
  slug: "north-berwick",
  name: "North Berwick",
  region: "Edinburgh & Lothians",
  populationNote: "East Lothian · ~7,500 residents",
  tagline: "Local North Berwick crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin North Berwick.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in North Berwick since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in North Berwick | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local North Berwick cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in North Berwick since 2014. Our local North Berwick branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the East Lothian footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in North Berwick gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. North Berwick is one of Scotland's most affluent seaside towns — premium home cleaning with attention to sea-facing exposure. Significant holiday-let and second-home market drives weekly turnover cleans throughout the year. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our North Berwick branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every North Berwick postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "North Berwick is one of Scotland's most affluent seaside towns — premium home cleaning with attention to sea-facing exposure.",
    "Significant holiday-let and second-home market drives weekly turnover cleans throughout the year.",
    "East Lothian Council approved supplier for civic buildings and void turnover across EH39.",
    "Sea-spray exposure means exterior soft-wash and window cleaning are popular alongside recurring domestic work.",
    "Scottish Seabird Centre and adjacent visitor attractions drive seasonal hospitality cleaning contracts.",
  ],
  stats: [
    { value: "12+", label: "Years serving North Berwick" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "North Berwick clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "North Berwick Town Centre (EH39)", description: "Seaside resort town with independent retail and cafes — commercial contracts and holiday-let turnover." },
    { name: "West Bay & The Leas", description: "Premium seafront properties with views to Fife — luxury recurring cleans and exterior soft-wash." },
    { name: "East Bay & Harbour", description: "Conservation-area harbour properties — listed-building-aware service throughout." },
    { name: "Marine Parade & Tantallon", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Dirleton & Fidra (rural fringe)", description: "Village settlements and golf-club-adjacent properties — full housekeeping services." },
    { name: "Law Road & Balgone estates adjacent", description: "Premium rural properties — exterior soft-wash and garden-building cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know North Berwick postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your North Berwick crew", description: "We assign a PVG-checked, uniformed North Berwick-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · North Berwick", quote: "We've used three other services over the past decade in North Berwick. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · North Berwick business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather North Berwick had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from North Berwick tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of North Berwick? What postcodes?", a: "Yes. Our North Berwick branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the North Berwick service area." },
    { q: "Are your North Berwick cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in North Berwick?", a: "For most North Berwick postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in North Berwick?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the North Berwick clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in North Berwick?", a: "Yes. Our North Berwick branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Edinburgh", href: "/locations/edinburgh", region: "Edinburgh & Lothians" },
    { name: "Livingston", href: "/locations/livingston", region: "Edinburgh & Lothians" },
    { name: "Musselburgh", href: "/locations/musselburgh", region: "Edinburgh & Lothians" },
    { name: "Dalkeith", href: "/locations/dalkeith", region: "Edinburgh & Lothians" },
    { name: "Bathgate", href: "/locations/bathgate", region: "Edinburgh & Lothians" },
    { name: "Haddington", href: "/locations/haddington", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in North Berwick", caption: "Local crew working in North Berwick" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in North Berwick", caption: "Local North Berwick team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in North Berwick", caption: "Living room refresh in a North Berwick family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in North Berwick", caption: "Nightly janitorial at a North Berwick office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Dunbar (Edinburgh & Lothians)
// ============================================================
export const dunbar: LocationDetail = {
  slug: "dunbar",
  name: "Dunbar",
  region: "Edinburgh & Lothians",
  populationNote: "East Lothian · ~8,500 residents",
  tagline: "Local Dunbar crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Dunbar.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Dunbar since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg",
  metaTitle: "Cleaning Services in Dunbar | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Dunbar cleaners covering every Scottish postcode in Edinburgh & Lothians. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Dunbar since 2014. Our local Dunbar branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the East Lothian footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Dunbar gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Dunbar is a historic royal burgh and birthplace of John Muir — conservation-area stock requires listed-building-safe products. East Lothian Council approved supplier for civic buildings and void turnover across EH42. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Dunbar branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Dunbar postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Dunbar is a historic royal burgh and birthplace of John Muir — conservation-area stock requires listed-building-safe products.",
    "East Lothian Council approved supplier for civic buildings and void turnover across EH42.",
    "Significant holiday-let market drives weekly turnover cleans throughout the summer season.",
    "Biel Estate and Tyninghame conservation areas require traditional-material chemistry for nearby properties.",
    "A1 corridor location means we service several roadside hospitality venues on recurring contracts.",
  ],
  stats: [
    { value: "12+", label: "Years serving Dunbar" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Dunbar clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Dunbar Town Centre (EH42)", description: "Historic royal burgh with High Street retail and period properties — commercial contracts." },
    { name: "Victoria Street & High Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Belhaven & West Barns", description: "Village settlements with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Winterfield & Seacliffe", description: "Premium seafront properties — luxury recurring cleans and exterior soft-wash." },
    { name: "Hallhill & Newington", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Spott & Innerwick (rural fringe)", description: "Village settlements and farmsteads — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Dunbar postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Dunbar crew", description: "We assign a PVG-checked, uniformed Dunbar-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Dunbar", quote: "We've used three other services over the past decade in Dunbar. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Dunbar business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Dunbar had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Edinburgh & Lothians", quote: "I manage 240 tenancies across Edinburgh & Lothians. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Dunbar tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Dunbar? What postcodes?", a: "Yes. Our Dunbar branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Dunbar service area." },
    { q: "Are your Dunbar cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Dunbar?", a: "For most Dunbar postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Dunbar?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Dunbar clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Dunbar?", a: "Yes. Our Dunbar branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Edinburgh", href: "/locations/edinburgh", region: "Edinburgh & Lothians" },
    { name: "Livingston", href: "/locations/livingston", region: "Edinburgh & Lothians" },
    { name: "Musselburgh", href: "/locations/musselburgh", region: "Edinburgh & Lothians" },
    { name: "Dalkeith", href: "/locations/dalkeith", region: "Edinburgh & Lothians" },
    { name: "Bathgate", href: "/locations/bathgate", region: "Edinburgh & Lothians" },
    { name: "Haddington", href: "/locations/haddington", region: "Edinburgh & Lothians" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.02.55%20PM.jpeg", alt: "Maundy Clean in Dunbar", caption: "Local crew working in Dunbar" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Dunbar", caption: "Local Dunbar team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Dunbar", caption: "Living room refresh in a Dunbar family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Dunbar", caption: "Nightly janitorial at a Dunbar office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Dunfermline (Fife & Central)
// ============================================================
export const dunfermline: LocationDetail = {
  slug: "dunfermline",
  name: "Dunfermline",
  region: "Fife & Central",
  populationNote: "Fife · ~50,000 residents",
  tagline: "Local Dunfermline crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Dunfermline.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Dunfermline since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg",
  metaTitle: "Cleaning Services in Dunfermline | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Dunfermline cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Dunfermline since 2014. Our local Dunfermline branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Fife footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Dunfermline gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Dunfermline was Scotland's capital until 1603 — historic abbey and palace conservation areas require listed-building-safe products. Fife Council approved supplier for civic buildings and void turnover across KY11-KY12. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Dunfermline branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Dunfermline postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Dunfermline was Scotland's capital until 1603 — historic abbey and palace conservation areas require listed-building-safe products.",
    "Fife Council approved supplier for civic buildings and void turnover across KY11-KY12.",
    "Significant new-build development (east of the town) requires weekly post-construction deep cleans.",
    "Andrew Carnegie's birthplace — Carnegie Hall and trust buildings require conservation-aware cleaning.",
    "Edinburgh commuter belt with quick Forth Road Bridge access — flexible recurring cleans around hybrid work patterns.",
  ],
  stats: [
    { value: "12+", label: "Years serving Dunfermline" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Dunfermline clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Dunfermline Town Centre (KY11, KY12)", description: "Former capital of Scotland with historic abbey and High Street retail — commercial contracts." },
    { name: "Pittencrieff Park area (the Glen)", description: "Premium residential streets adjacent to Pittencrieff Park — luxury recurring cleans." },
    { name: "Touch & Bellyeoman", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Masterton & Garvock", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Limekilns & Charlestown (KY11)", description: "Coastal villages with period cottages — conservation-area-aware service." },
    { name: "Crossford & Cairneyhill", description: "Village settlements with mixed residential — recurring domestic and end-of-tenancy work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Dunfermline postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Dunfermline crew", description: "We assign a PVG-checked, uniformed Dunfermline-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Dunfermline", quote: "We've used three other services over the past decade in Dunfermline. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Dunfermline business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Dunfermline had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Dunfermline tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Dunfermline? What postcodes?", a: "Yes. Our Dunfermline branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Dunfermline service area." },
    { q: "Are your Dunfermline cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Dunfermline?", a: "For most Dunfermline postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Dunfermline?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Dunfermline clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Dunfermline?", a: "Yes. Our Dunfermline branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
    { name: "Alloa", href: "/locations/alloa", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg", alt: "Maundy Clean in Dunfermline", caption: "Local crew working in Dunfermline" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Dunfermline", caption: "Local Dunfermline team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Dunfermline", caption: "Living room refresh in a Dunfermline family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Dunfermline", caption: "Nightly janitorial at a Dunfermline office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Kirkcaldy (Fife & Central)
// ============================================================
export const kirkcaldy: LocationDetail = {
  slug: "kirkcaldy",
  name: "Kirkcaldy",
  region: "Fife & Central",
  populationNote: "Fife · ~50,000 residents",
  tagline: "Local Kirkcaldy crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Kirkcaldy.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Kirkcaldy since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg",
  metaTitle: "Cleaning Services in Kirkcaldy | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Kirkcaldy cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Kirkcaldy since 2014. Our local Kirkcaldy branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Fife footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Kirkcaldy gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Kirkcaldy's High Street is one of the longest in Scotland — significant retail-sector nightly janitorial contracts. Fife Council approved supplier for civic buildings and void turnover across KY1-KY2. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Kirkcaldy branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Kirkcaldy postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Kirkcaldy's High Street is one of the longest in Scotland — significant retail-sector nightly janitorial contracts.",
    "Fife Council approved supplier for civic buildings and void turnover across KY1-KY2.",
    "Adam Smith Heritage Centre and conservation-area stock require listed-building-safe products.",
    "Former linoleum-manufacturing heritage means industrial conversions often need specialist post-renovation cleaning.",
    "Firth of Forth proximity means sea-spray exterior cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Kirkcaldy" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Kirkcaldy clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Kirkcaldy Town Centre (KY1, KY2)", description: "Longest street in Fife with retail units and flats above — commercial contracts and end-of-tenancy work." },
    { name: "Linktown & Pathhead", description: "Historic harbour-area streets with period properties — listed-building-aware service." },
    { name: "Dysart & Sinclairtown", description: "Conservation-area village with former harbour heritage — specialist traditional-material chemistry." },
    { name: "Templehall & Smeaton", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Raith & Beveridge Park adjacent", description: "Premium residential streets near Beveridge Park — luxury recurring cleans." },
    { name: "Chapel & Gallatown", description: "Established residential streets — recurring family home cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Kirkcaldy postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Kirkcaldy crew", description: "We assign a PVG-checked, uniformed Kirkcaldy-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Kirkcaldy", quote: "We've used three other services over the past decade in Kirkcaldy. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Kirkcaldy business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Kirkcaldy had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Kirkcaldy tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Kirkcaldy? What postcodes?", a: "Yes. Our Kirkcaldy branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Kirkcaldy service area." },
    { q: "Are your Kirkcaldy cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Kirkcaldy?", a: "For most Kirkcaldy postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Kirkcaldy?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Kirkcaldy clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Kirkcaldy?", a: "Yes. Our Kirkcaldy branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
    { name: "Alloa", href: "/locations/alloa", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg", alt: "Maundy Clean in Kirkcaldy", caption: "Local crew working in Kirkcaldy" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Kirkcaldy", caption: "Local Kirkcaldy team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Kirkcaldy", caption: "Living room refresh in a Kirkcaldy family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Kirkcaldy", caption: "Nightly janitorial at a Kirkcaldy office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — St Andrews (Fife & Central)
// ============================================================
export const st_andrews: LocationDetail = {
  slug: "st-andrews",
  name: "St Andrews",
  region: "Fife & Central",
  populationNote: "Fife · ~17,000 residents",
  tagline: "Local St Andrews crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin St Andrews.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in St Andrews since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg",
  metaTitle: "Cleaning Services in St Andrews | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local St Andrews cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in St Andrews since 2014. Our local St Andrews branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Fife footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in St Andrews gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. St Andrews is home to Scotland's oldest university (1413) — student-let turnover peaks in June and September. Conservation-area stock includes medieval, Georgian and Victorian architecture — specialist traditional-material chemistry. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our St Andrews branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every St Andrews postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "St Andrews is home to Scotland's oldest university (1413) — student-let turnover peaks in June and September.",
    "Conservation-area stock includes medieval, Georgian and Victorian architecture — specialist traditional-material chemistry.",
    "Fife Council approved supplier for civic buildings and void turnover across KY16.",
    "Home of golf — Old Course Hotel and adjacent luxury accommodations drive premium hospitality cleaning contracts.",
    "Significant second-home and holiday-let market drives weekly turnover cleans throughout the year.",
  ],
  stats: [
    { value: "12+", label: "Years serving St Andrews" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "St Andrews clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "St Andrews Town Centre (KY16)", description: "Historic university town with High Street retail and period properties — commercial contracts." },
    { name: "The Scores & North Street", description: "Premium seafront streets with listed university buildings — listed-building-aware service throughout." },
    { name: "Largo Road & Lamblelaws", description: "Established residential streets — recurring family home cleans." },
    { name: "St Leonards & New Park", description: "Premium residential areas — luxury recurring cleans and upholstery care." },
    { name: "Old Course & golf-club-adjacent (KY16)", description: "Premium properties near the Old Course — full housekeeping services." },
    { name: "Strathkinness & Blebo Craigs (rural fringe)", description: "Village settlements with period properties — rural-adjacent exterior cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know St Andrews postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your St Andrews crew", description: "We assign a PVG-checked, uniformed St Andrews-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · St Andrews", quote: "We've used three other services over the past decade in St Andrews. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · St Andrews business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather St Andrews had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from St Andrews tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of St Andrews? What postcodes?", a: "Yes. Our St Andrews branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the St Andrews service area." },
    { q: "Are your St Andrews cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in St Andrews?", a: "For most St Andrews postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in St Andrews?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the St Andrews clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in St Andrews?", a: "Yes. Our St Andrews branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
    { name: "Alloa", href: "/locations/alloa", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg", alt: "Maundy Clean in St Andrews", caption: "Local crew working in St Andrews" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in St Andrews", caption: "Local St Andrews team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in St Andrews", caption: "Living room refresh in a St Andrews family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in St Andrews", caption: "Nightly janitorial at a St Andrews office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Cupar (Fife & Central)
// ============================================================
export const cupar: LocationDetail = {
  slug: "cupar",
  name: "Cupar",
  region: "Fife & Central",
  populationNote: "Fife · ~9,500 residents",
  tagline: "Local Cupar crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Cupar.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Cupar since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg",
  metaTitle: "Cleaning Services in Cupar | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Cupar cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Cupar since 2014. Our local Cupar branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Fife footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Cupar gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Cupar was the historic county town of Fife — civic building contracts include the sheriff court. Fife Council approved supplier for civic buildings and void turnover across KY15. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Cupar branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Cupar postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Cupar was the historic county town of Fife — civic building contracts include the sheriff court.",
    "Fife Council approved supplier for civic buildings and void turnover across KY15.",
    "Falkland Palace and Ceres conservation areas require listed-building-safe products for nearby properties.",
    "Fife coastline 6 miles distant — we serve coastal and inland properties across the area.",
    "Mixed housing stock from medieval to modern — full chemistry and technique range required.",
  ],
  stats: [
    { value: "12+", label: "Years serving Cupar" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Cupar clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Cupar Town Centre (KY15)", description: "Historic county town of Fife with retail units and flats — commercial contracts." },
    { name: "Crossgate & Bonnygate", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Springfield & Bellfield", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Carslogie Road &elmwood", description: "Established residential streets — recurring family home cleans." },
    { name: "Ceres & Falkland (rural fringe)", description: "Village settlements with conservation-area properties — specialist traditional-material chemistry." },
    { name: "Ladyburn & Cupar Muir", description: "Modern developments with family homes — recurring domestic and post-construction work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Cupar postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Cupar crew", description: "We assign a PVG-checked, uniformed Cupar-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Cupar", quote: "We've used three other services over the past decade in Cupar. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Cupar business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Cupar had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Cupar tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Cupar? What postcodes?", a: "Yes. Our Cupar branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Cupar service area." },
    { q: "Are your Cupar cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Cupar?", a: "For most Cupar postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Cupar?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Cupar clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Cupar?", a: "Yes. Our Cupar branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
    { name: "Alloa", href: "/locations/alloa", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg", alt: "Maundy Clean in Cupar", caption: "Local crew working in Cupar" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Cupar", caption: "Local Cupar team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Cupar", caption: "Living room refresh in a Cupar family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Cupar", caption: "Nightly janitorial at a Cupar office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Falkirk (Fife & Central)
// ============================================================
export const falkirk: LocationDetail = {
  slug: "falkirk",
  name: "Falkirk",
  region: "Fife & Central",
  populationNote: "Falkirk · ~35,000 residents",
  tagline: "Local Falkirk crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Falkirk.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Falkirk since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Falkirk | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Falkirk cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Falkirk since 2014. Our local Falkirk branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Falkirk footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Falkirk gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Falkirk Wheel and Helix Park (Kelpies) drive significant visitor-season hospitality and leisure cleaning contracts. Falkirk Council approved supplier for civic buildings and void turnover across FK1-FK5. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Falkirk branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Falkirk postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Falkirk Wheel and Helix Park (Kelpies) drive significant visitor-season hospitality and leisure cleaning contracts.",
    "Falkirk Council approved supplier for civic buildings and void turnover across FK1-FK5.",
    "Grangemouth petrochemical complex proximity means we have crews trained on industrial-strength protocols.",
    "M9/M876 corridor position means we service several motorway-adjacent hospitality venues on recurring contracts.",
    "Mixed housing stock from Victorian sandstone to 2010s new-builds — full chemistry and technique range required.",
  ],
  stats: [
    { value: "12+", label: "Years serving Falkirk" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Falkirk clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Falkirk Town Centre (FK1)", description: "Historic industrial town centre with retail units and flats — commercial contracts and end-of-tenancy work." },
    { name: "Bainsford & Camelon", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Larbert & Stenhousemuir (FK2, FK5)", description: "Adjacent towns with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Brightons & Reddingmuir", description: "Established residential streets — recurring family home cleans." },
    { name: "Tamfourhill & Glen Village", description: "Mixed residential and commercial — recurring domestic and small-business contracts." },
    { name: "Grangemouth & Polmont (FK1, FK2)", description: "Industrial-adjacent properties — specialist post-industrial cleaning protocols." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Falkirk postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Falkirk crew", description: "We assign a PVG-checked, uniformed Falkirk-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Falkirk", quote: "We've used three other services over the past decade in Falkirk. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Falkirk business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Falkirk had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Falkirk tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Falkirk? What postcodes?", a: "Yes. Our Falkirk branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Falkirk service area." },
    { q: "Are your Falkirk cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Falkirk?", a: "For most Falkirk postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Falkirk?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Falkirk clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Falkirk?", a: "Yes. Our Falkirk branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
    { name: "Alloa", href: "/locations/alloa", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Falkirk", caption: "Local crew working in Falkirk" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Falkirk", caption: "Local Falkirk team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Falkirk", caption: "Living room refresh in a Falkirk family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Falkirk", caption: "Nightly janitorial at a Falkirk office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Stirling (Fife & Central)
// ============================================================
export const stirling: LocationDetail = {
  slug: "stirling",
  name: "Stirling",
  region: "Fife & Central",
  populationNote: "Stirling · ~37,000 residents",
  tagline: "Local Stirling crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Stirling.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Stirling since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Stirling | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Stirling cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Stirling since 2014. Our local Stirling branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Stirling footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Stirling gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Stirling Castle and Old Town conservation area require listed-building-safe products and specialist traditional-material chemistry. Stirling Council approved supplier for civic buildings and void turnover across FK7-FK9. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Stirling branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Stirling postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Stirling Castle and Old Town conservation area require listed-building-safe products and specialist traditional-material chemistry.",
    "Stirling Council approved supplier for civic buildings and void turnover across FK7-FK9.",
    "University of Stirling campus drives recurring commercial and student-let turnover work.",
    "Wallace Monument and visitor attractions drive seasonal hospitality cleaning contracts.",
    "M9/M80/M876 junction position makes Stirling a strategic service hub across central Scotland.",
  ],
  stats: [
    { value: "12+", label: "Years serving Stirling" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Stirling clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Stirling Town Centre (FK7, FK8)", description: "Historic royal burgh with castle and High Street retail — commercial contracts." },
    { name: "King's Park & Allan Park", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Raploch & Mercat", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Causewayhead & Bridge of Allan (FK9)", description: "Premium residential areas adjacent to university — luxury recurring cleans." },
    { name: "Cambusbarron & Torbrex", description: "Established residential streets — recurring family home cleans." },
    { name: "Bannockburn & Cowie (FK7)", description: "Adjacent towns with mixed residential — recurring domestic and end-of-tenancy work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Stirling postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Stirling crew", description: "We assign a PVG-checked, uniformed Stirling-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Stirling", quote: "We've used three other services over the past decade in Stirling. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Stirling business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Stirling had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Stirling tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Stirling? What postcodes?", a: "Yes. Our Stirling branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Stirling service area." },
    { q: "Are your Stirling cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Stirling?", a: "For most Stirling postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Stirling?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Stirling clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Stirling?", a: "Yes. Our Stirling branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Alloa", href: "/locations/alloa", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Stirling", caption: "Local crew working in Stirling" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Stirling", caption: "Local Stirling team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Stirling", caption: "Living room refresh in a Stirling family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Stirling", caption: "Nightly janitorial at a Stirling office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Alloa (Fife & Central)
// ============================================================
export const alloa: LocationDetail = {
  slug: "alloa",
  name: "Alloa",
  region: "Fife & Central",
  populationNote: "Clackmannanshire · ~21,000 residents",
  tagline: "Local Alloa crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Alloa.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Alloa since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Alloa | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Alloa cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Alloa since 2014. Our local Alloa branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Clackmannanshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Alloa gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Alloa Tower (largest medieval keep in Scotland) and surrounding conservation area require listed-building-safe products. Clackmannanshire Council approved supplier for civic buildings and void turnover across FK10-FK12. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Alloa branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Alloa postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Alloa Tower (largest medieval keep in Scotland) and surrounding conservation area require listed-building-safe products.",
    "Clackmannanshire Council approved supplier for civic buildings and void turnover across FK10-FK12.",
    "Former brewing and glass-making heritage means industrial conversions often need specialist post-renovation cleaning.",
    "Ochil Hillfoot villages are popular commuter locations — flexible recurring cleans around hybrid work patterns.",
    "Forth estuary proximity means exterior soft-wash and driveway cleaning regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Alloa" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Alloa clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Alloa Town Centre (FK10)", description: "Historic burgh of barony with retail units and flats — commercial contracts." },
    { name: "Marshfield & Sunnyside", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Redwell & Park Street", description: "Established residential streets — recurring family home cleans." },
    { name: "Sauchie & Fishcross (FK10, FK12)", description: "Adjacent villages with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Tullibody & Menstrie (FK11, FK12)", description: "Village settlements with modern developments — recurring domestic and post-construction work." },
    { name: "Alva & Tillicoultry (FK12)", description: "Hillfoot villages with period properties — conservation-area-aware service." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Alloa postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Alloa crew", description: "We assign a PVG-checked, uniformed Alloa-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Alloa", quote: "We've used three other services over the past decade in Alloa. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Alloa business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Alloa had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Alloa tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Alloa? What postcodes?", a: "Yes. Our Alloa branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Alloa service area." },
    { q: "Are your Alloa cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Alloa?", a: "For most Alloa postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Alloa?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Alloa clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Alloa?", a: "Yes. Our Alloa branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Alloa", caption: "Local crew working in Alloa" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Alloa", caption: "Local Alloa team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Alloa", caption: "Living room refresh in a Alloa family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Alloa", caption: "Nightly janitorial at a Alloa office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Crieff (Fife & Central)
// ============================================================
export const crieff: LocationDetail = {
  slug: "crieff",
  name: "Crieff",
  region: "Fife & Central",
  populationNote: "Perth & Kinross · ~7,500 residents",
  tagline: "Local Crieff crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Crieff.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Crieff since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Crieff | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Crieff cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Crieff since 2014. Our local Crieff branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Perth & Kinross footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Crieff gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Crieff was Scotland's principal cattle-tryst (market) until the 19th century — historic market-town conservation area. Perth & Kinross Council approved supplier for civic buildings and void turnover across PH7. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Crieff branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Crieff postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Crieff was Scotland's principal cattle-tryst (market) until the 19th century — historic market-town conservation area.",
    "Perth & Kinross Council approved supplier for civic buildings and void turnover across PH7.",
    "Famous Grouse Experience at Glenturret Distillery drives seasonal hospitality cleaning contracts.",
    "Strathearn location means rural-adjacent properties often need exterior soft-wash and garden-building cleans.",
    "Mixed housing stock from 18th-century weavers' cottages to modern estates — full chemistry range required.",
  ],
  stats: [
    { value: "12+", label: "Years serving Crieff" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Crieff clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Crieff Town Centre (PH7)", description: "Historic market town with High Street retail and period properties — commercial contracts." },
    { name: "King Street & James Square", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Milnab & Ford Road", description: "Established residential streets — recurring family home cleans." },
    { name: "Castleton & Broich Road", description: "Premium residential areas — luxury recurring cleans and upholstery care." },
    { name: "Comrie & St Fillans (rural fringe)", description: "Village settlements with conservation-area properties — specialist traditional-material chemistry." },
    { name: "Muthill & Auchterarder adjacent (PH7, PH3)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Crieff postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Crieff crew", description: "We assign a PVG-checked, uniformed Crieff-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Crieff", quote: "We've used three other services over the past decade in Crieff. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Crieff business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Crieff had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Crieff tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Crieff? What postcodes?", a: "Yes. Our Crieff branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Crieff service area." },
    { q: "Are your Crieff cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Crieff?", a: "For most Crieff postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Crieff?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Crieff clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Crieff?", a: "Yes. Our Crieff branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Crieff", caption: "Local crew working in Crieff" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Crieff", caption: "Local Crieff team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Crieff", caption: "Living room refresh in a Crieff family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Crieff", caption: "Nightly janitorial at a Crieff office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Perth (Fife & Central)
// ============================================================
export const perth: LocationDetail = {
  slug: "perth",
  name: "Perth",
  region: "Fife & Central",
  populationNote: "Perth & Kinross · ~47,000 residents",
  tagline: "Local Perth crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Perth.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Perth since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg",
  metaTitle: "Cleaning Services in Perth | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Perth cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Perth since 2014. Our local Perth branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Perth & Kinross footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Perth gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Perth was Scotland's capital until 1437 — Scone Palace and historic city centre require listed-building-safe products. Perth & Kinross Council approved supplier for civic buildings and void turnover across PH1-PH2. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Perth branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Perth postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Perth was Scotland's capital until 1437 — Scone Palace and historic city centre require listed-building-safe products.",
    "Perth & Kinross Council approved supplier for civic buildings and void turnover across PH1-PH2.",
    "River Tay flood plain means water-damage cleaning is a regular service from November to March.",
    "Perth Concert Hall and Perth Theatre drive seasonal hospitality and leisure cleaning contracts.",
    "Mixed housing stock from medieval to modern — full chemistry and technique range required.",
  ],
  stats: [
    { value: "12+", label: "Years serving Perth" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Perth clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Perth City Centre (PH1, PH2)", description: "Historic royal burgh with High Street retail and period properties — commercial contracts." },
    { name: "Kinnoull & Bridgend", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Tulloch & Fairfield", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Craigie & Moncreiffe", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Scone & Lethendy (PH1, PH2)", description: "Village settlements with conservation-area properties — rural-adjacent cleans." },
    { name: "Luncarty & Redgorton (PH1)", description: "Village settlements — recurring domestic and end-of-tenancy work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Perth postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Perth crew", description: "We assign a PVG-checked, uniformed Perth-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Perth", quote: "We've used three other services over the past decade in Perth. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Perth business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Perth had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Perth tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Perth? What postcodes?", a: "Yes. Our Perth branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Perth service area." },
    { q: "Are your Perth cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Perth?", a: "For most Perth postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Perth?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Perth clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Perth?", a: "Yes. Our Perth branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg", alt: "Maundy Clean in Perth", caption: "Local crew working in Perth" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Perth", caption: "Local Perth team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Perth", caption: "Living room refresh in a Perth family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Perth", caption: "Nightly janitorial at a Perth office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Dundee (Fife & Central)
// ============================================================
export const dundee: LocationDetail = {
  slug: "dundee",
  name: "Dundee",
  region: "Fife & Central",
  populationNote: "City of Dundee · ~148,000 residents",
  tagline: "Local Dundee crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Dundee.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Dundee since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg",
  metaTitle: "Cleaning Services in Dundee | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Dundee cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Dundee since 2014. Our local Dundee branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the City of Dundee footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Dundee gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Dundee is Scotland's fourth city and a UNESCO City of Design — V&A Dundee and waterfront regeneration drive premium commercial contracts. Dundee City Council approved supplier for civic buildings and void turnover across DD1-DD5. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Dundee branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Dundee postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Dundee is Scotland's fourth city and a UNESCO City of Design — V&A Dundee and waterfront regeneration drive premium commercial contracts.",
    "Dundee City Council approved supplier for civic buildings and void turnover across DD1-DD5.",
    "University of Dundee and Abertay University drive student-let turnover peaks in June and September.",
    "Tay Bridge and rail connections make Dundee a strategic service hub for Fife and Angus.",
    "Broughty Ferry is one of Scotland's most affluent suburbs — premium home cleaning throughout.",
  ],
  stats: [
    { value: "12+", label: "Years serving Dundee" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Dundee clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Dundee City Centre (DD1)", description: "Pedestrianised centre with retail units, flats and civic buildings — commercial contracts." },
    { name: "West End & Perth Road (DD2, DD3)", description: "Student-let heavy area with Victorian tenements — recurring domestic and end-of-tenancy work." },
    { name: "Lochee & Charleston (DD2)", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Broughty Ferry & Monifieth (DD5)", description: "Affluent seaside suburbs with premium family homes — luxury recurring cleans." },
    { name: "Stobswell & Hilltown (DD3, DD4)", description: "Mixed-tenure residential areas — recurring domestic and void turnover work." },
    { name: "Downfield & Kirkton (DD3, DD4)", description: "Post-war estates with mixed tenure — recurring domestic and end-of-tenancy work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Dundee postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Dundee crew", description: "We assign a PVG-checked, uniformed Dundee-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Dundee", quote: "We've used three other services over the past decade in Dundee. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Dundee business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Dundee had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Dundee tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Dundee? What postcodes?", a: "Yes. Our Dundee branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Dundee service area." },
    { q: "Are your Dundee cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Dundee?", a: "For most Dundee postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Dundee?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Dundee clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Dundee?", a: "Yes. Our Dundee branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg", alt: "Maundy Clean in Dundee", caption: "Local crew working in Dundee" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Dundee", caption: "Local Dundee team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Dundee", caption: "Living room refresh in a Dundee family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Dundee", caption: "Nightly janitorial at a Dundee office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Blairgowrie (Fife & Central)
// ============================================================
export const blairgowrie: LocationDetail = {
  slug: "blairgowrie",
  name: "Blairgowrie",
  region: "Fife & Central",
  populationNote: "Perth & Kinross · ~9,500 residents",
  tagline: "Local Blairgowrie crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Blairgowrie.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Blairgowrie since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg",
  metaTitle: "Cleaning Services in Blairgowrie | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Blairgowrie cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Blairgowrie since 2014. Our local Blairgowrie branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Perth & Kinross footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Blairgowrie gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Blairgowrie is the gateway to Glenshee and the Cairngorms — significant visitor-season demand for holiday-let turnover. Perth & Kinross Council approved supplier for civic buildings and void turnover across PH10-PH12. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Blairgowrie branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Blairgowrie postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Blairgowrie is the gateway to Glenshee and the Cairngorms — significant visitor-season demand for holiday-let turnover.",
    "Perth & Kinross Council approved supplier for civic buildings and void turnover across PH10-PH12.",
    "Soft-fruit growing capital of Scotland — seasonal worker accommodation turnover is a major service line in summer.",
    "River Ericht runs through the town — water-damage cleaning is a regular service from November to March.",
    "Mixed housing stock from 18th-century weavers' cottages to modern estates — full chemistry range required.",
  ],
  stats: [
    { value: "12+", label: "Years serving Blairgowrie" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Blairgowrie clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Blairgowrie Town Centre (PH10)", description: "Historic market town with High Street retail and period properties — commercial contracts." },
    { name: "Allan Street & Wellmeadow", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Riverside & Newton Terrace", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Rattray & New Rattray", description: "Adjacent town with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Alyth & Coupar Angus (PH11, PH12)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
    { name: "Meigle & Kirkmichael (rural fringe)", description: "Village settlements with period properties — conservation-area-aware service." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Blairgowrie postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Blairgowrie crew", description: "We assign a PVG-checked, uniformed Blairgowrie-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Blairgowrie", quote: "We've used three other services over the past decade in Blairgowrie. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Blairgowrie business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Blairgowrie had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Blairgowrie tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Blairgowrie? What postcodes?", a: "Yes. Our Blairgowrie branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Blairgowrie service area." },
    { q: "Are your Blairgowrie cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Blairgowrie?", a: "For most Blairgowrie postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Blairgowrie?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Blairgowrie clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Blairgowrie?", a: "Yes. Our Blairgowrie branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg", alt: "Maundy Clean in Blairgowrie", caption: "Local crew working in Blairgowrie" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Blairgowrie", caption: "Local Blairgowrie team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Blairgowrie", caption: "Living room refresh in a Blairgowrie family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Blairgowrie", caption: "Nightly janitorial at a Blairgowrie office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Auchterarder (Fife & Central)
// ============================================================
export const auchterarder: LocationDetail = {
  slug: "auchterarder",
  name: "Auchterarder",
  region: "Fife & Central",
  populationNote: "Perth & Kinross · ~5,500 residents",
  tagline: "Local Auchterarder crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Auchterarder.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Auchterarder since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Auchterarder | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Auchterarder cleaners covering every Scottish postcode in Fife & Central. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Auchterarder since 2014. Our local Auchterarder branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Perth & Kinross footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Auchterarder gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Auchterarder is the 'Lang Toon' (long town) — historic High Street is one of Scotland's longest village streets. Gleneagles Hotel and the Ryder Cup legacy drive premium hospitality cleaning contracts across the area. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Auchterarder branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Auchterarder postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Auchterarder is the 'Lang Toon' (long town) — historic High Street is one of Scotland's longest village streets.",
    "Gleneagles Hotel and the Ryder Cup legacy drive premium hospitality cleaning contracts across the area.",
    "Perth & Kinross Council approved supplier for civic buildings and void turnover across PH3.",
    "Significant second-home and holiday-let market drives weekly turnover cleans throughout the year.",
    "Conservation-area stock includes 18th-19th century weavers' cottages — specialist traditional-material chemistry.",
  ],
  stats: [
    { value: "12+", label: "Years serving Auchterarder" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Auchterarder clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Auchterarder Town Centre (PH3)", description: "Historic burgh with High Street retail and period properties — commercial contracts." },
    { name: "High Street & Townhead", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Ruthven Park & Kingscroft", description: "Premium residential areas — luxury recurring cleans and upholstery care." },
    { name: "Glashart & Castleton", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Gleneagles adjacent", description: "Premium properties near Gleneagles Hotel — full housekeeping services." },
    { name: "Dunning & Muthill (rural fringe)", description: "Village settlements with conservation-area properties — specialist traditional-material chemistry." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Auchterarder postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Auchterarder crew", description: "We assign a PVG-checked, uniformed Auchterarder-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Auchterarder", quote: "We've used three other services over the past decade in Auchterarder. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Auchterarder business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Auchterarder had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Fife & Central", quote: "I manage 240 tenancies across Fife & Central. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Auchterarder tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Auchterarder? What postcodes?", a: "Yes. Our Auchterarder branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Auchterarder service area." },
    { q: "Are your Auchterarder cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Auchterarder?", a: "For most Auchterarder postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Auchterarder?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Auchterarder clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Auchterarder?", a: "Yes. Our Auchterarder branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Dunfermline", href: "/locations/dunfermline", region: "Fife & Central" },
    { name: "Kirkcaldy", href: "/locations/kirkcaldy", region: "Fife & Central" },
    { name: "St Andrews", href: "/locations/st-andrews", region: "Fife & Central" },
    { name: "Cupar", href: "/locations/cupar", region: "Fife & Central" },
    { name: "Falkirk", href: "/locations/falkirk", region: "Fife & Central" },
    { name: "Stirling", href: "/locations/stirling", region: "Fife & Central" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Auchterarder", caption: "Local crew working in Auchterarder" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Auchterarder", caption: "Local Auchterarder team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Auchterarder", caption: "Living room refresh in a Auchterarder family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Auchterarder", caption: "Nightly janitorial at a Auchterarder office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Aberdeen (Aberdeen & Grampian)
// ============================================================
export const aberdeen: LocationDetail = {
  slug: "aberdeen",
  name: "Aberdeen",
  region: "Aberdeen & Grampian",
  populationNote: "City of Aberdeen · ~227,000 residents",
  tagline: "Local Aberdeen crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Aberdeen.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Aberdeen since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Aberdeen | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Aberdeen cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Aberdeen since 2014. Our local Aberdeen branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the City of Aberdeen footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Aberdeen gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Aberdeen is the 'Granite City' — silver-grey granite construction means specific stone-safe cleaning products throughout. Oil and gas industry footprint means we service several offshore-support offices and crew-change facilities. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Aberdeen branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Aberdeen postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Aberdeen is the 'Granite City' — silver-grey granite construction means specific stone-safe cleaning products throughout.",
    "Oil and gas industry footprint means we service several offshore-support offices and crew-change facilities.",
    "Aberdeen City Council approved supplier for civic buildings and void turnover across AB1-AB25.",
    "University of Aberdeen and Robert Gordon University drive student-let turnover peaks in June and September.",
    "North Sea exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
    "Union Street retail sector requires nightly janitorial and weekly deep clean contracts.",
  ],
  stats: [
    { value: "12+", label: "Years serving Aberdeen" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Aberdeen clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Aberdeen City Centre (AB10, AB11, AB12)", description: "Pedestrianised centre with retail units, flats and civic buildings — commercial contracts." },
    { name: "West End & Rubislaw (AB15)", description: "Premium residential streets with granite villas — luxury recurring cleans and listed-building-aware service." },
    { name: "Rosemount & Midstocket (AB25, AB15)", description: "Established residential streets with granite tenements — recurring family home cleans." },
    { name: "Bridge of Don & Danestone (AB22, AB23)", description: "Suburban family homes — recurring domestic and end-of-tenancy work." },
    { name: "Cove Bay & Portlethen (AB12)", description: "Coastal suburbs with mixed residential — recurring domestic and new-build post-construction work." },
    { name: "Torry & Nigg (AB11)", description: "Mixed-tenure residential areas — void turns and recurring domestic work." },
    { name: "Kincorth & Garthdee (AB10, AB12)", description: "Post-war estates with mixed tenure — recurring domestic and end-of-tenancy work." },
    { name: "Northfield & Mastrick (AB16, AB15)", description: "Local authority estates with mixed tenure — void turns and recurring domestic work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Aberdeen postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Aberdeen crew", description: "We assign a PVG-checked, uniformed Aberdeen-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Aberdeen", quote: "We've used three other services over the past decade in Aberdeen. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Aberdeen business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Aberdeen had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Aberdeen tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Aberdeen? What postcodes?", a: "Yes. Our Aberdeen branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Aberdeen service area." },
    { q: "Are your Aberdeen cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Aberdeen?", a: "For most Aberdeen postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Aberdeen?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Aberdeen clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Aberdeen?", a: "Yes. Our Aberdeen branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Elgin", href: "/locations/elgin", region: "Aberdeen & Grampian" },
    { name: "Peterhead", href: "/locations/peterhead", region: "Aberdeen & Grampian" },
    { name: "Fraserburgh", href: "/locations/fraserburgh", region: "Aberdeen & Grampian" },
    { name: "Inverurie", href: "/locations/inverurie", region: "Aberdeen & Grampian" },
    { name: "Stonehaven", href: "/locations/stonehaven", region: "Aberdeen & Grampian" },
    { name: "Huntly", href: "/locations/huntly", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Aberdeen", caption: "Local crew working in Aberdeen" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Aberdeen", caption: "Local Aberdeen team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Aberdeen", caption: "Living room refresh in a Aberdeen family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Aberdeen", caption: "Nightly janitorial at a Aberdeen office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Elgin (Aberdeen & Grampian)
// ============================================================
export const elgin: LocationDetail = {
  slug: "elgin",
  name: "Elgin",
  region: "Aberdeen & Grampian",
  populationNote: "Moray · ~25,000 residents",
  tagline: "Local Elgin crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Elgin.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Elgin since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Elgin | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Elgin cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Elgin since 2014. Our local Elgin branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Moray footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Elgin gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Elgin Cathedral and conservation-area stock require listed-building-safe products throughout. Moray Council approved supplier for civic buildings and void turnover across IV30-IV32. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Elgin branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Elgin postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Elgin Cathedral and conservation-area stock require listed-building-safe products throughout.",
    "Moray Council approved supplier for civic buildings and void turnover across IV30-IV32.",
    "Whisky-distillery heritage means we service several distilleries and visitor centres on recurring commercial contracts.",
    "Moray Firth coastline proximity means exterior soft-wash and sea-spray cleaning regularly needed.",
    "RAF Lossiemouth nearby means we service service-family-accommodation turnover regularly.",
  ],
  stats: [
    { value: "12+", label: "Years serving Elgin" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Elgin clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Elgin Town Centre (IV30)", description: "Historic cathedral city with High Street retail and period properties — commercial contracts." },
    { name: "High Street & Commerce Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Bishopmill & New Elgin", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Lesmurdie & Glassgreen", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Birnie & Lhanbryde (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
    { name: "Lossiemouth adjacent (IV30, IV31)", description: "Coastal town with mixed residential — recurring domestic and holiday-let turnover work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Elgin postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Elgin crew", description: "We assign a PVG-checked, uniformed Elgin-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Elgin", quote: "We've used three other services over the past decade in Elgin. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Elgin business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Elgin had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Elgin tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Elgin? What postcodes?", a: "Yes. Our Elgin branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Elgin service area." },
    { q: "Are your Elgin cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Elgin?", a: "For most Elgin postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Elgin?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Elgin clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Elgin?", a: "Yes. Our Elgin branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aberdeen", href: "/locations/aberdeen", region: "Aberdeen & Grampian" },
    { name: "Peterhead", href: "/locations/peterhead", region: "Aberdeen & Grampian" },
    { name: "Fraserburgh", href: "/locations/fraserburgh", region: "Aberdeen & Grampian" },
    { name: "Inverurie", href: "/locations/inverurie", region: "Aberdeen & Grampian" },
    { name: "Stonehaven", href: "/locations/stonehaven", region: "Aberdeen & Grampian" },
    { name: "Huntly", href: "/locations/huntly", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Elgin", caption: "Local crew working in Elgin" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Elgin", caption: "Local Elgin team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Elgin", caption: "Living room refresh in a Elgin family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Elgin", caption: "Nightly janitorial at a Elgin office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Peterhead (Aberdeen & Grampian)
// ============================================================
export const peterhead: LocationDetail = {
  slug: "peterhead",
  name: "Peterhead",
  region: "Aberdeen & Grampian",
  populationNote: "Aberdeenshire · ~19,000 residents",
  tagline: "Local Peterhead crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Peterhead.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Peterhead since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Peterhead | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Peterhead cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Peterhead since 2014. Our local Peterhead branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Aberdeenshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Peterhead gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Peterhead is Scotland's largest white-fish port — fishing-industry-adjacent properties often need specialist odour and grease removal. Aberdeenshire Council approved supplier for civic buildings and void turnover across AB42. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Peterhead branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Peterhead postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Peterhead is Scotland's largest white-fish port — fishing-industry-adjacent properties often need specialist odour and grease removal.",
    "Aberdeenshire Council approved supplier for civic buildings and void turnover across AB42.",
    "Peterhead Power Station and St Fergus Gas Plant proximity means we have crews trained on industrial-strength protocols.",
    "North Sea exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
    "Significant fishing-crew accommodation turnover is a regular service line throughout the year.",
  ],
  stats: [
    { value: "12+", label: "Years serving Peterhead" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Peterhead clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Peterhead Town Centre (AB42)", description: "Historic fishing port with High Street retail and period properties — commercial contracts." },
    { name: "Marischal Street & Castle Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Burnhaven & Boddam adjacent (AB42)", description: "Village settlements with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Invernettie & Dales Park", description: "Established residential streets — recurring family home cleans." },
    { name: "Ugie Shore & Kinmundy", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Blackhills & Longside (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Peterhead postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Peterhead crew", description: "We assign a PVG-checked, uniformed Peterhead-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Peterhead", quote: "We've used three other services over the past decade in Peterhead. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Peterhead business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Peterhead had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Peterhead tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Peterhead? What postcodes?", a: "Yes. Our Peterhead branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Peterhead service area." },
    { q: "Are your Peterhead cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Peterhead?", a: "For most Peterhead postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Peterhead?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Peterhead clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Peterhead?", a: "Yes. Our Peterhead branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aberdeen", href: "/locations/aberdeen", region: "Aberdeen & Grampian" },
    { name: "Elgin", href: "/locations/elgin", region: "Aberdeen & Grampian" },
    { name: "Fraserburgh", href: "/locations/fraserburgh", region: "Aberdeen & Grampian" },
    { name: "Inverurie", href: "/locations/inverurie", region: "Aberdeen & Grampian" },
    { name: "Stonehaven", href: "/locations/stonehaven", region: "Aberdeen & Grampian" },
    { name: "Huntly", href: "/locations/huntly", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Peterhead", caption: "Local crew working in Peterhead" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Peterhead", caption: "Local Peterhead team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Peterhead", caption: "Living room refresh in a Peterhead family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Peterhead", caption: "Nightly janitorial at a Peterhead office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Fraserburgh (Aberdeen & Grampian)
// ============================================================
export const fraserburgh: LocationDetail = {
  slug: "fraserburgh",
  name: "Fraserburgh",
  region: "Aberdeen & Grampian",
  populationNote: "Aberdeenshire · ~13,000 residents",
  tagline: "Local Fraserburgh crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Fraserburgh.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Fraserburgh since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Fraserburgh | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Fraserburgh cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Fraserburgh since 2014. Our local Fraserburgh branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Aberdeenshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Fraserburgh gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Fraserburgh is Europe's largest shellfish port — fishing-industry-adjacent properties often need specialist odour and grease removal. Aberdeenshire Council approved supplier for civic buildings and void turnover across AB43. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Fraserburgh branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Fraserburgh postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Fraserburgh is Europe's largest shellfish port — fishing-industry-adjacent properties often need specialist odour and grease removal.",
    "Aberdeenshire Council approved supplier for civic buildings and void turnover across AB43.",
    "Fraserburgh Lighthouse Museum (Museum of Scottish Lighthouses) and conservation area require listed-building-safe products.",
    "North Sea exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
    "Significant fishing-crew accommodation turnover is a regular service line throughout the year.",
  ],
  stats: [
    { value: "12+", label: "Years serving Fraserburgh" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Fraserburgh clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Fraserburgh Town Centre (AB43)", description: "Historic fishing port with High Street retail and period properties — commercial contracts." },
    { name: "Broad Street & Saltoun Square", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "South Harbour & Kirkton", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Philorth & Mormond Hill adjacent", description: "Established residential streets — recurring family home cleans." },
    { name: "Rosehearty & Sandhaven (rural fringe)", description: "Coastal village settlements — recurring domestic and holiday-let turnover work." },
    { name: "Tyrie & Strichen (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Fraserburgh postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Fraserburgh crew", description: "We assign a PVG-checked, uniformed Fraserburgh-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Fraserburgh", quote: "We've used three other services over the past decade in Fraserburgh. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Fraserburgh business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Fraserburgh had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Fraserburgh tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Fraserburgh? What postcodes?", a: "Yes. Our Fraserburgh branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Fraserburgh service area." },
    { q: "Are your Fraserburgh cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Fraserburgh?", a: "For most Fraserburgh postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Fraserburgh?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Fraserburgh clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Fraserburgh?", a: "Yes. Our Fraserburgh branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aberdeen", href: "/locations/aberdeen", region: "Aberdeen & Grampian" },
    { name: "Elgin", href: "/locations/elgin", region: "Aberdeen & Grampian" },
    { name: "Peterhead", href: "/locations/peterhead", region: "Aberdeen & Grampian" },
    { name: "Inverurie", href: "/locations/inverurie", region: "Aberdeen & Grampian" },
    { name: "Stonehaven", href: "/locations/stonehaven", region: "Aberdeen & Grampian" },
    { name: "Huntly", href: "/locations/huntly", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Fraserburgh", caption: "Local crew working in Fraserburgh" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Fraserburgh", caption: "Local Fraserburgh team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Fraserburgh", caption: "Living room refresh in a Fraserburgh family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Fraserburgh", caption: "Nightly janitorial at a Fraserburgh office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Inverurie (Aberdeen & Grampian)
// ============================================================
export const inverurie: LocationDetail = {
  slug: "inverurie",
  name: "Inverurie",
  region: "Aberdeen & Grampian",
  populationNote: "Aberdeenshire · ~14,000 residents",
  tagline: "Local Inverurie crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Inverurie.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Inverurie since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Inverurie | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Inverurie cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Inverurie since 2014. Our local Inverurie branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Aberdeenshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Inverurie gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Inverurie sits at the heart of Aberdeenshire's farming country — agricultural-adjacent properties often need specialist cleaning. Aberdeenshire Council approved supplier for civic buildings and void turnover across AB51. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Inverurie branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Inverurie postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Inverurie sits at the heart of Aberdeenshire's farming country — agricultural-adjacent properties often need specialist cleaning.",
    "Aberdeenshire Council approved supplier for civic buildings and void turnover across AB51.",
    "Oil and gas supply chain footprint means we service several energy-sector offices on recurring commercial contracts.",
    "Bennachie hills proximity means homes often need seasonal exterior cleaning for wind-blown debris and pollen.",
    "Significant commuter population for Aberdeen — flexible recurring cleans around hybrid work patterns.",
  ],
  stats: [
    { value: "12+", label: "Years serving Inverurie" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Inverurie clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Inverurie Town Centre (AB51)", description: "Historic market town with High Street retail and period properties — commercial contracts." },
    { name: "Market Place & High Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Kemnay & Kintore adjacent (AB51, AB54)", description: "Village settlements with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Strathburn & Uryside", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Old Town & Port Elphinstone", description: "Established residential streets — recurring family home cleans." },
    { name: "Oldmeldrum & Methlick (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Inverurie postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Inverurie crew", description: "We assign a PVG-checked, uniformed Inverurie-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Inverurie", quote: "We've used three other services over the past decade in Inverurie. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Inverurie business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Inverurie had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Inverurie tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Inverurie? What postcodes?", a: "Yes. Our Inverurie branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Inverurie service area." },
    { q: "Are your Inverurie cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Inverurie?", a: "For most Inverurie postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Inverurie?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Inverurie clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Inverurie?", a: "Yes. Our Inverurie branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aberdeen", href: "/locations/aberdeen", region: "Aberdeen & Grampian" },
    { name: "Elgin", href: "/locations/elgin", region: "Aberdeen & Grampian" },
    { name: "Peterhead", href: "/locations/peterhead", region: "Aberdeen & Grampian" },
    { name: "Fraserburgh", href: "/locations/fraserburgh", region: "Aberdeen & Grampian" },
    { name: "Stonehaven", href: "/locations/stonehaven", region: "Aberdeen & Grampian" },
    { name: "Huntly", href: "/locations/huntly", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Inverurie", caption: "Local crew working in Inverurie" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Inverurie", caption: "Local Inverurie team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Inverurie", caption: "Living room refresh in a Inverurie family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Inverurie", caption: "Nightly janitorial at a Inverurie office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Stonehaven (Aberdeen & Grampian)
// ============================================================
export const stonehaven: LocationDetail = {
  slug: "stonehaven",
  name: "Stonehaven",
  region: "Aberdeen & Grampian",
  populationNote: "Aberdeenshire · ~11,000 residents",
  tagline: "Local Stonehaven crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Stonehaven.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Stonehaven since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Stonehaven | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Stonehaven cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Stonehaven since 2014. Our local Stonehaven branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Aberdeenshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Stonehaven gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Dunnottar Castle and Stonehaven Old Town conservation area require listed-building-safe products. Aberdeenshire Council approved supplier for civic buildings and void turnover across AB39. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Stonehaven branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Stonehaven postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Dunnottar Castle and Stonehaven Old Town conservation area require listed-building-safe products.",
    "Aberdeenshire Council approved supplier for civic buildings and void turnover across AB39.",
    "Significant second-home and holiday-let market drives weekly turnover cleans throughout the year.",
    "North Sea exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
    "Aberdeen commuter position means flexible recurring cleans around hybrid work patterns are popular.",
  ],
  stats: [
    { value: "12+", label: "Years serving Stonehaven" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Stonehaven clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Stonehaven Town Centre (AB39)", description: "Historic county town of Kincardineshire with High Street retail — commercial contracts." },
    { name: "Old Town & Harbour Area", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Dunnottar Road & Ardmore", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Bentinck Place & Allan Park", description: "Established residential streets — recurring family home cleans." },
    { name: "Spylaw & Kirktonhill", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Newtonhill & Muchalls (rural fringe)", description: "Coastal village settlements — recurring domestic and holiday-let turnover work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Stonehaven postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Stonehaven crew", description: "We assign a PVG-checked, uniformed Stonehaven-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Stonehaven", quote: "We've used three other services over the past decade in Stonehaven. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Stonehaven business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Stonehaven had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Stonehaven tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Stonehaven? What postcodes?", a: "Yes. Our Stonehaven branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Stonehaven service area." },
    { q: "Are your Stonehaven cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Stonehaven?", a: "For most Stonehaven postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Stonehaven?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Stonehaven clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Stonehaven?", a: "Yes. Our Stonehaven branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aberdeen", href: "/locations/aberdeen", region: "Aberdeen & Grampian" },
    { name: "Elgin", href: "/locations/elgin", region: "Aberdeen & Grampian" },
    { name: "Peterhead", href: "/locations/peterhead", region: "Aberdeen & Grampian" },
    { name: "Fraserburgh", href: "/locations/fraserburgh", region: "Aberdeen & Grampian" },
    { name: "Inverurie", href: "/locations/inverurie", region: "Aberdeen & Grampian" },
    { name: "Huntly", href: "/locations/huntly", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Stonehaven", caption: "Local crew working in Stonehaven" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Stonehaven", caption: "Local Stonehaven team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Stonehaven", caption: "Living room refresh in a Stonehaven family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Stonehaven", caption: "Nightly janitorial at a Stonehaven office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Huntly (Aberdeen & Grampian)
// ============================================================
export const huntly: LocationDetail = {
  slug: "huntly",
  name: "Huntly",
  region: "Aberdeen & Grampian",
  populationNote: "Aberdeenshire · ~4,600 residents",
  tagline: "Local Huntly crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Huntly.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Huntly since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Huntly | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Huntly cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Huntly since 2014. Our local Huntly branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Aberdeenshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Huntly gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Huntly Castle and conservation area require listed-building-safe products for nearby properties. Aberdeenshire Council approved supplier for civic buildings and void turnover across AB54. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Huntly branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Huntly postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Huntly Castle and conservation area require listed-building-safe products for nearby properties.",
    "Aberdeenshire Council approved supplier for civic buildings and void turnover across AB54.",
    "Dean's Shortbread factory and Huntly-style food-production units — FSA-compliant cleaning protocols in place.",
    "Rural farming area — agricultural-adjacent properties often need specialist exterior cleaning.",
    "River Deveron runs through the town — water-damage cleaning is a regular service from November to March.",
  ],
  stats: [
    { value: "12+", label: "Years serving Huntly" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Huntly clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Huntly Town Centre (AB54)", description: "Historic market town with High Street retail and period properties — commercial contracts." },
    { name: "The Square & Castle Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Bogendreip & Richmond Street", description: "Established residential streets — recurring family home cleans." },
    { name: "Bogmoor & Bridgend", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Glass & Huntly Castle adjacent", description: "Premium rural properties — full housekeeping services alongside recurring domestic." },
    { name: "Rhynie & Lumsden (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Huntly postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Huntly crew", description: "We assign a PVG-checked, uniformed Huntly-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Huntly", quote: "We've used three other services over the past decade in Huntly. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Huntly business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Huntly had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Huntly tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Huntly? What postcodes?", a: "Yes. Our Huntly branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Huntly service area." },
    { q: "Are your Huntly cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Huntly?", a: "For most Huntly postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Huntly?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Huntly clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Huntly?", a: "Yes. Our Huntly branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aberdeen", href: "/locations/aberdeen", region: "Aberdeen & Grampian" },
    { name: "Elgin", href: "/locations/elgin", region: "Aberdeen & Grampian" },
    { name: "Peterhead", href: "/locations/peterhead", region: "Aberdeen & Grampian" },
    { name: "Fraserburgh", href: "/locations/fraserburgh", region: "Aberdeen & Grampian" },
    { name: "Inverurie", href: "/locations/inverurie", region: "Aberdeen & Grampian" },
    { name: "Stonehaven", href: "/locations/stonehaven", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Huntly", caption: "Local crew working in Huntly" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Huntly", caption: "Local Huntly team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Huntly", caption: "Living room refresh in a Huntly family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Huntly", caption: "Nightly janitorial at a Huntly office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Westhill (Aberdeen & Grampian)
// ============================================================
export const westhill: LocationDetail = {
  slug: "westhill",
  name: "Westhill",
  region: "Aberdeen & Grampian",
  populationNote: "Aberdeenshire · ~12,000 residents",
  tagline: "Local Westhill crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Westhill.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Westhill since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Westhill | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Westhill cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Westhill since 2014. Our local Westhill branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Aberdeenshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Westhill gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Westhill is Scotland's newest town (designated 1967) — modern housing stock throughout. Aberdeenshire Council approved supplier for civic buildings and void turnover across AB32. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Westhill branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Westhill postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Westhill is Scotland's newest town (designated 1967) — modern housing stock throughout.",
    "Aberdeenshire Council approved supplier for civic buildings and void turnover across AB32.",
    "Significant oil and gas supply-chain office footprint — commercial contracts for several energy-sector HQs.",
    "Aberdeen commuter position (7 miles west) means flexible recurring cleans around hybrid work patterns are popular.",
    "Modern construction means energy-efficient builds with mechanical ventilation — duct and vent cleaning is a regular service line.",
  ],
  stats: [
    { value: "12+", label: "Years serving Westhill" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Westhill clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Westhill Town Centre (AB32)", description: "Modern new-town centre with retail units and flats — commercial contracts." },
    { name: "Oldfold & Ashdale", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Westhill Estate & Earls Crescent", description: "Premium residential areas — luxury recurring cleans and upholstery care." },
    { name: "Kingswells & Cuillen (AB32, AB15)", description: "Adjacent estates with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Granitehill & Primrosehill", description: "Established residential streets — recurring family home cleans." },
    { name: "Skene & Garlogie (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Westhill postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Westhill crew", description: "We assign a PVG-checked, uniformed Westhill-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Westhill", quote: "We've used three other services over the past decade in Westhill. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Westhill business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Westhill had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Westhill tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Westhill? What postcodes?", a: "Yes. Our Westhill branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Westhill service area." },
    { q: "Are your Westhill cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Westhill?", a: "For most Westhill postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Westhill?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Westhill clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Westhill?", a: "Yes. Our Westhill branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aberdeen", href: "/locations/aberdeen", region: "Aberdeen & Grampian" },
    { name: "Elgin", href: "/locations/elgin", region: "Aberdeen & Grampian" },
    { name: "Peterhead", href: "/locations/peterhead", region: "Aberdeen & Grampian" },
    { name: "Fraserburgh", href: "/locations/fraserburgh", region: "Aberdeen & Grampian" },
    { name: "Inverurie", href: "/locations/inverurie", region: "Aberdeen & Grampian" },
    { name: "Stonehaven", href: "/locations/stonehaven", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Westhill", caption: "Local crew working in Westhill" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Westhill", caption: "Local Westhill team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Westhill", caption: "Living room refresh in a Westhill family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Westhill", caption: "Nightly janitorial at a Westhill office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Portlethen (Aberdeen & Grampian)
// ============================================================
export const portlethen: LocationDetail = {
  slug: "portlethen",
  name: "Portlethen",
  region: "Aberdeen & Grampian",
  populationNote: "Aberdeenshire · ~8,000 residents",
  tagline: "Local Portlethen crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Portlethen.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Portlethen since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Portlethen | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Portlethen cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Portlethen since 2014. Our local Portlethen branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Aberdeenshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Portlethen gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Portlethen is a modern commuter town (developed from 1960s onwards) — modern housing stock throughout. Aberdeenshire Council approved supplier for civic buildings and void turnover across AB12. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Portlethen branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Portlethen postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Portlethen is a modern commuter town (developed from 1960s onwards) — modern housing stock throughout.",
    "Aberdeenshire Council approved supplier for civic buildings and void turnover across AB12.",
    "Badentoy Industrial Estate is one of Aberdeenshire's largest — significant commercial cleaning contracts.",
    "Aberdeen commuter position (7 miles south) means flexible recurring cleans around hybrid work patterns are popular.",
    "North Sea exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Portlethen" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Portlethen clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Portlethen Town Centre (AB12)", description: "Modern commuter town with retail units and flats — commercial contracts." },
    { name: "Hillside & Bruntland Road", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Badentoy Industrial Estate adjacent", description: "Commercial contracts for industrial-unit tenants — nightly janitorial and floor-care." },
    { name: "Portlethen Village & Old Road", description: "Established residential streets — recurring family home cleans." },
    { name: "Muchalls & Downies (rural fringe)", description: "Coastal village settlements — recurring domestic and holiday-let turnover work." },
    { name: "Newtonhill & Cammachmore (rural fringe)", description: "Coastal village settlements — recurring domestic and end-of-tenancy work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Portlethen postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Portlethen crew", description: "We assign a PVG-checked, uniformed Portlethen-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Portlethen", quote: "We've used three other services over the past decade in Portlethen. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Portlethen business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Portlethen had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Portlethen tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Portlethen? What postcodes?", a: "Yes. Our Portlethen branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Portlethen service area." },
    { q: "Are your Portlethen cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Portlethen?", a: "For most Portlethen postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Portlethen?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Portlethen clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Portlethen?", a: "Yes. Our Portlethen branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aberdeen", href: "/locations/aberdeen", region: "Aberdeen & Grampian" },
    { name: "Elgin", href: "/locations/elgin", region: "Aberdeen & Grampian" },
    { name: "Peterhead", href: "/locations/peterhead", region: "Aberdeen & Grampian" },
    { name: "Fraserburgh", href: "/locations/fraserburgh", region: "Aberdeen & Grampian" },
    { name: "Inverurie", href: "/locations/inverurie", region: "Aberdeen & Grampian" },
    { name: "Stonehaven", href: "/locations/stonehaven", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Portlethen", caption: "Local crew working in Portlethen" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Portlethen", caption: "Local Portlethen team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Portlethen", caption: "Living room refresh in a Portlethen family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Portlethen", caption: "Nightly janitorial at a Portlethen office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Banchory (Aberdeen & Grampian)
// ============================================================
export const banchory: LocationDetail = {
  slug: "banchory",
  name: "Banchory",
  region: "Aberdeen & Grampian",
  populationNote: "Aberdeenshire · ~7,500 residents",
  tagline: "Local Banchory crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Banchory.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Banchory since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  metaTitle: "Cleaning Services in Banchory | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Banchory cleaners covering every Scottish postcode in Aberdeen & Grampian. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Banchory since 2014. Our local Banchory branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Aberdeenshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Banchory gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Banchory is the gateway to Royal Deeside — significant visitor-season demand for holiday-let turnover. Aberdeenshire Council approved supplier for civic buildings and void turnover across AB31. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Banchory branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Banchory postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Banchory is the gateway to Royal Deeside — significant visitor-season demand for holiday-let turnover.",
    "Aberdeenshire Council approved supplier for civic buildings and void turnover across AB31.",
    "Crathes Castle and Drum Castle proximity means listed-building-safe products throughout.",
    "River Dee Special Area of Conservation — environmentally-aware cleaning products are essential.",
    "Affluent commuter town for Aberdeen — premium home cleaning throughout.",
  ],
  stats: [
    { value: "12+", label: "Years serving Banchory" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Banchory clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Banchory Town Centre (AB31)", description: "Gateway to Royal Deeside with High Street retail — commercial contracts." },
    { name: "High Street & Bridge Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Eastland Road & Arbeadie", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Forest Road & Hirnload", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Glassel & Strachan (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
    { name: "Crathes & Drumoak (rural fringe)", description: "Village settlements with conservation-area properties — specialist traditional-material chemistry." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Banchory postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Banchory crew", description: "We assign a PVG-checked, uniformed Banchory-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Banchory", quote: "We've used three other services over the past decade in Banchory. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Banchory business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Banchory had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Aberdeen & Grampian", quote: "I manage 240 tenancies across Aberdeen & Grampian. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Banchory tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Banchory? What postcodes?", a: "Yes. Our Banchory branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Banchory service area." },
    { q: "Are your Banchory cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Banchory?", a: "For most Banchory postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Banchory?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Banchory clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Banchory?", a: "Yes. Our Banchory branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aberdeen", href: "/locations/aberdeen", region: "Aberdeen & Grampian" },
    { name: "Elgin", href: "/locations/elgin", region: "Aberdeen & Grampian" },
    { name: "Peterhead", href: "/locations/peterhead", region: "Aberdeen & Grampian" },
    { name: "Fraserburgh", href: "/locations/fraserburgh", region: "Aberdeen & Grampian" },
    { name: "Inverurie", href: "/locations/inverurie", region: "Aberdeen & Grampian" },
    { name: "Stonehaven", href: "/locations/stonehaven", region: "Aberdeen & Grampian" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg", alt: "Maundy Clean in Banchory", caption: "Local crew working in Banchory" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Banchory", caption: "Local Banchory team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Banchory", caption: "Living room refresh in a Banchory family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Banchory", caption: "Nightly janitorial at a Banchory office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Inverness (Highlands & Islands)
// ============================================================
export const inverness: LocationDetail = {
  slug: "inverness",
  name: "Inverness",
  region: "Highlands & Islands",
  populationNote: "Highland · ~48,000 residents",
  tagline: "Local Inverness crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Inverness.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Inverness since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Inverness | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Inverness cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Inverness since 2014. Our local Inverness branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Highland footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Inverness gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Inverness is the 'Capital of the Highlands' — fastest-growing city in Scotland over the past 20 years. Highland Council approved supplier for civic buildings and void turnover across IV1-IV5. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Inverness branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Inverness postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Inverness is the 'Capital of the Highlands' — fastest-growing city in Scotland over the past 20 years.",
    "Highland Council approved supplier for civic buildings and void turnover across IV1-IV5.",
    "Culloden Battlefield conservation area requires respectful cleaning protocols for nearby properties.",
    "River Ness flood plain means water-damage cleaning is a regular service from October to March.",
    "Significant tourism economy — holiday-let and B&B turnover is a major service line throughout the year.",
    "University of the Highlands and Islands (UHI) campus drives recurring commercial and student-let turnover work.",
  ],
  stats: [
    { value: "12+", label: "Years serving Inverness" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Inverness clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Inverness City Centre (IV1, IV2)", description: "Pedestrianised High Street with retail units and flats — commercial contracts." },
    { name: "Crown & Mitchell Hill (IV1, IV2)", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Drakies & Slackbuie (IV2)", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Culloden & Balloch (IV2)", description: "Suburban family homes — recurring domestic and end-of-tenancy work." },
    { name: "Dalneigh & Glenurquhart (IV3)", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Merkinch & South Kessock (IV3)", description: "Mixed-tenure residential areas — void turns and recurring domestic work." },
    { name: "Westhill & Scorguie (IV3)", description: "Established residential streets — recurring family home cleans." },
    { name: "Smithton & Culloden Moor (IV2)", description: "Modern developments with family homes — recurring domestic and post-construction work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Inverness postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Inverness crew", description: "We assign a PVG-checked, uniformed Inverness-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Inverness", quote: "We've used three other services over the past decade in Inverness. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Inverness business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Inverness had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Inverness tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Inverness? What postcodes?", a: "Yes. Our Inverness branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Inverness service area." },
    { q: "Are your Inverness cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Inverness?", a: "For most Inverness postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Inverness?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Inverness clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Inverness?", a: "Yes. Our Inverness branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
    { name: "Kirkwall (Orkney)", href: "/locations/kirkwall", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Inverness", caption: "Local crew working in Inverness" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Inverness", caption: "Local Inverness team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Inverness", caption: "Living room refresh in a Inverness family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Inverness", caption: "Nightly janitorial at a Inverness office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Aviemore (Highlands & Islands)
// ============================================================
export const aviemore: LocationDetail = {
  slug: "aviemore",
  name: "Aviemore",
  region: "Highlands & Islands",
  populationNote: "Highland · ~3,000 residents",
  tagline: "Local Aviemore crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Aviemore.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Aviemore since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Aviemore | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Aviemore cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Aviemore since 2014. Our local Aviemore branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Highland footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Aviemore gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Aviemore is Scotland's premier year-round tourist resort — skiing in winter, walking and cycling in summer. Highland Council approved supplier for civic buildings and void turnover across PH22. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Aviemore branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Aviemore postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Aviemore is Scotland's premier year-round tourist resort — skiing in winter, walking and cycling in summer.",
    "Highland Council approved supplier for civic buildings and void turnover across PH22.",
    "Cairngorms National Park designation means environmentally-aware cleaning products are essential.",
    "Significant holiday-let and second-home market drives weekly turnover cleans throughout the year.",
    "Cairngorm Mountain railway and visitor facilities drive seasonal hospitality cleaning contracts.",
  ],
  stats: [
    { value: "12+", label: "Years serving Aviemore" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Aviemore clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Aviemore Village Centre (PH22)", description: "Tourist-resort village centre with retail units and hotels — commercial contracts and holiday-let turnover." },
    { name: "Grampian Road & Dalfaber", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Dalfaber & Auchengiellich", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Cairngorm Base & Glenmore (PH22)", description: "Holiday-let and B&B properties — weekly turnover cleans throughout the year." },
    { name: "Kincaig & Aviemore Orbital", description: "Established residential streets — recurring family home cleans." },
    { name: "Boat of Garten & Carr-Bridge (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Aviemore postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Aviemore crew", description: "We assign a PVG-checked, uniformed Aviemore-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Aviemore", quote: "We've used three other services over the past decade in Aviemore. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Aviemore business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Aviemore had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Aviemore tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Aviemore? What postcodes?", a: "Yes. Our Aviemore branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Aviemore service area." },
    { q: "Are your Aviemore cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Aviemore?", a: "For most Aviemore postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Aviemore?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Aviemore clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Aviemore?", a: "Yes. Our Aviemore branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
    { name: "Kirkwall (Orkney)", href: "/locations/kirkwall", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Aviemore", caption: "Local crew working in Aviemore" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Aviemore", caption: "Local Aviemore team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Aviemore", caption: "Living room refresh in a Aviemore family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Aviemore", caption: "Nightly janitorial at a Aviemore office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Oban (Highlands & Islands)
// ============================================================
export const oban: LocationDetail = {
  slug: "oban",
  name: "Oban",
  region: "Highlands & Islands",
  populationNote: "Argyll & Bute · ~8,500 residents",
  tagline: "Local Oban crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Oban.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Oban since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Oban | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Oban cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Oban since 2014. Our local Oban branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Argyll & Bute footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Oban gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Oban is the 'Gateway to the Isles' — major ferry terminal for Mull, Coll, Tiree, Barra and South Uist. Argyll & Bute Council approved supplier for civic buildings and void turnover across PA34. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Oban branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Oban postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Oban is the 'Gateway to the Isles' — major ferry terminal for Mull, Coll, Tiree, Barra and South Uist.",
    "Argyll & Bute Council approved supplier for civic buildings and void turnover across PA34.",
    "McCaig's Tower and conservation area require listed-building-safe products for nearby properties.",
    "Significant tourism and fishing economy — seasonal hospitality and crew-accommodation cleaning contracts.",
    "Sea-spray exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Oban" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Oban clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Oban Town Centre (PA34)", description: "Seaside ferry port with High Street retail and period properties — commercial contracts." },
    { name: "George Street & Stafford Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Soroba & Dunollie", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Kerrera & Ganavan (rural fringe)", description: "Coastal properties — recurring domestic and holiday-let turnover work." },
    { name: "Lochview & Glenshellach", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Taynuilt & Connel (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Oban postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Oban crew", description: "We assign a PVG-checked, uniformed Oban-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Oban", quote: "We've used three other services over the past decade in Oban. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Oban business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Oban had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Oban tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Oban? What postcodes?", a: "Yes. Our Oban branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Oban service area." },
    { q: "Are your Oban cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Oban?", a: "For most Oban postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Oban?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Oban clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Oban?", a: "Yes. Our Oban branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
    { name: "Kirkwall (Orkney)", href: "/locations/kirkwall", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Oban", caption: "Local crew working in Oban" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Oban", caption: "Local Oban team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Oban", caption: "Living room refresh in a Oban family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Oban", caption: "Nightly janitorial at a Oban office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Fort William (Highlands & Islands)
// ============================================================
export const fort_william: LocationDetail = {
  slug: "fort-william",
  name: "Fort William",
  region: "Highlands & Islands",
  populationNote: "Highland · ~10,500 residents",
  tagline: "Local Fort William crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Fort William.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Fort William since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Fort William | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Fort William cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Fort William since 2014. Our local Fort William branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Highland footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Fort William gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Fort William is the 'Outdoor Capital of the UK' — major tourism economy with year-round visitor demand. Highland Council approved supplier for civic buildings and void turnover across PH33. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Fort William branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Fort William postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Fort William is the 'Outdoor Capital of the UK' — major tourism economy with year-round visitor demand.",
    "Highland Council approved supplier for civic buildings and void turnover across PH33.",
    "Ben Nevis and Glen Nevis proximity means seasonal visitor peaks drive hospitality and holiday-let cleaning contracts.",
    "West Highland Line terminus — significant railway-tourism economy alongside seasonal ferry traffic.",
    "Sea-spray and Highland-rain exposure means exterior soft-wash, moss removal, and driveway cleaning regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Fort William" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Fort William clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Fort William Town Centre (PH33)", description: "Outdoor-activity hub with High Street retail and period properties — commercial contracts." },
    { name: "High Street & Cameron Square", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Inverlochy & Invernevis", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Caol & Lochyside", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Banavie & Corpach (PH33)", description: "Village settlements with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Glencoe & Kinlochleven (rural fringe)", description: "Village settlements — rural-adjacent exterior and holiday-let turnover work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Fort William postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Fort William crew", description: "We assign a PVG-checked, uniformed Fort William-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Fort William", quote: "We've used three other services over the past decade in Fort William. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Fort William business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Fort William had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Fort William tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Fort William? What postcodes?", a: "Yes. Our Fort William branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Fort William service area." },
    { q: "Are your Fort William cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Fort William?", a: "For most Fort William postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Fort William?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Fort William clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Fort William?", a: "Yes. Our Fort William branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
    { name: "Kirkwall (Orkney)", href: "/locations/kirkwall", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Fort William", caption: "Local crew working in Fort William" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Fort William", caption: "Local Fort William team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Fort William", caption: "Living room refresh in a Fort William family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Fort William", caption: "Nightly janitorial at a Fort William office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Thurso (Highlands & Islands)
// ============================================================
export const thurso: LocationDetail = {
  slug: "thurso",
  name: "Thurso",
  region: "Highlands & Islands",
  populationNote: "Highland · ~8,000 residents",
  tagline: "Local Thurso crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Thurso.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Thurso since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Thurso | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Thurso cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Thurso since 2014. Our local Thurso branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Highland footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Thurso gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Thurso is the northernmost town on mainland Scotland — North Sea and Pentland Firth exposure throughout. Highland Council approved supplier for civic buildings and void turnover across KW14. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Thurso branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Thurso postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Thurso is the northernmost town on mainland Scotland — North Sea and Pentland Firth exposure throughout.",
    "Highland Council approved supplier for civic buildings and void turnover across KW14.",
    "Dounreay nuclear-decommissioning site proximity means specialist industrial-protocol training for nearby crews.",
    "Surf-tourism economy (Thurso East is a world-class reef break) drives seasonal hospitality cleaning contracts.",
    "Sea-spray and salt-residue exposure means exterior soft-wash and driveway cleaning regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Thurso" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Thurso clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Thurso Town Centre (KW14)", description: "Northernmost town in mainland Scotland with High Street retail — commercial contracts." },
    { name: "Traill Street & Sir George Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Ormlie & Janetstown", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Scrabster Road & Castletown", description: "Coastal properties — recurring domestic and end-of-tenancy work." },
    { name: "Miller Road & Princes Street", description: "Established residential streets — recurring family home cleans." },
    { name: "Halkirk & Watten (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Thurso postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Thurso crew", description: "We assign a PVG-checked, uniformed Thurso-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Thurso", quote: "We've used three other services over the past decade in Thurso. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Thurso business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Thurso had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Thurso tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Thurso? What postcodes?", a: "Yes. Our Thurso branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Thurso service area." },
    { q: "Are your Thurso cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Thurso?", a: "For most Thurso postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Thurso?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Thurso clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Thurso?", a: "Yes. Our Thurso branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
    { name: "Kirkwall (Orkney)", href: "/locations/kirkwall", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Thurso", caption: "Local crew working in Thurso" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Thurso", caption: "Local Thurso team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Thurso", caption: "Living room refresh in a Thurso family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Thurso", caption: "Nightly janitorial at a Thurso office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Wick (Highlands & Islands)
// ============================================================
export const wick: LocationDetail = {
  slug: "wick",
  name: "Wick",
  region: "Highlands & Islands",
  populationNote: "Highland · ~7,000 residents",
  tagline: "Local Wick crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Wick.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Wick since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Wick | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Wick cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Wick since 2014. Our local Wick branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Highland footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Wick gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Wick was Europe's largest herring-fishing port in the 19th century — Pulteneytown conservation area is UNESCO-listed. Highland Council approved supplier for civic buildings and void turnover across KW1-KW6. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Wick branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Wick postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Wick was Europe's largest herring-fishing port in the 19th century — Pulteneytown conservation area is UNESCO-listed.",
    "Highland Council approved supplier for civic buildings and void turnover across KW1-KW6.",
    "Wick Heritage Centre and conservation area require listed-building-safe products throughout.",
    "North Sea exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
    "Significant decommissioning and renewable-energy economy drives industrial cleaning contracts in nearby Nigg and Scrabster.",
  ],
  stats: [
    { value: "12+", label: "Years serving Wick" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Wick clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Wick Town Centre (KW1)", description: "Historic royal burgh with High Street retail and period properties — commercial contracts." },
    { name: "Bridge Street & High Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Pulteneytown & South Wick", description: "Planned herring-fishing village conservation area — specialist traditional-material chemistry." },
    { name: "Hillhead & Sibster", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Thrumster & Hempriggs", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Watten & Latheron (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Wick postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Wick crew", description: "We assign a PVG-checked, uniformed Wick-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Wick", quote: "We've used three other services over the past decade in Wick. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Wick business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Wick had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Wick tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Wick? What postcodes?", a: "Yes. Our Wick branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Wick service area." },
    { q: "Are your Wick cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Wick?", a: "For most Wick postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Wick?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Wick clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Wick?", a: "Yes. Our Wick branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Kirkwall (Orkney)", href: "/locations/kirkwall", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Wick", caption: "Local crew working in Wick" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Wick", caption: "Local Wick team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Wick", caption: "Living room refresh in a Wick family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Wick", caption: "Nightly janitorial at a Wick office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Kirkwall (Orkney) (Highlands & Islands)
// ============================================================
export const kirkwall: LocationDetail = {
  slug: "kirkwall",
  name: "Kirkwall (Orkney)",
  region: "Highlands & Islands",
  populationNote: "Orkney Islands · ~10,000 residents (island-wide)",
  tagline: "Local Kirkwall (Orkney) crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Kirkwall (Orkney).\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Kirkwall (Orkney) since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Kirkwall (Orkney) | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Kirkwall (Orkney) cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Kirkwall (Orkney) since 2014. Our local Kirkwall (Orkney) branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Orkney Islands footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Kirkwall (Orkney) gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. St Magnus Cathedral (founded 1137) and surrounding conservation area require specialist listed-building-safe products. Orkney Islands Council approved supplier for civic buildings and void turnover across KW15-KW17. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Kirkwall (Orkney) branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Kirkwall (Orkney) postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "St Magnus Cathedral (founded 1137) and surrounding conservation area require specialist listed-building-safe products.",
    "Orkney Islands Council approved supplier for civic buildings and void turnover across KW15-KW17.",
    "Significant renewable-energy economy — tidal and wind energy sites drive specialist industrial cleaning contracts.",
    "Ferry terminal for Shetland and Aberdeen drives hospitality and crew-accommodation cleaning contracts.",
    "Neolithic UNESCO World Heritage Sites (Skara Brae, Maeshowe) require conservation-aware cleaning for nearby properties.",
  ],
  stats: [
    { value: "12+", label: "Years serving Kirkwall (Orkney)" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Kirkwall (Orkney) clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Kirkwall Town Centre (KW15)", description: "Historic royal burgh and Orkney capital with High Street retail — commercial contracts." },
    { name: "Bridge Street & Albert Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "St Ola & Papdale", description: "Established residential streets — recurring family home cleans." },
    { name: "Pickaquoy & Grainbank", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Stromness adjacent (KW16)", description: "Second-largest Orkney town — recurring domestic and end-of-tenancy work." },
    { name: "Harray & Finstown (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Kirkwall (Orkney) postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Kirkwall (Orkney) crew", description: "We assign a PVG-checked, uniformed Kirkwall (Orkney)-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Kirkwall (Orkney)", quote: "We've used three other services over the past decade in Kirkwall (Orkney). Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Kirkwall (Orkney) business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Kirkwall (Orkney) had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Kirkwall (Orkney) tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Kirkwall (Orkney)? What postcodes?", a: "Yes. Our Kirkwall (Orkney) branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Kirkwall (Orkney) service area." },
    { q: "Are your Kirkwall (Orkney) cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Kirkwall (Orkney)?", a: "For most Kirkwall (Orkney) postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Kirkwall (Orkney)?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Kirkwall (Orkney) clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Kirkwall (Orkney)?", a: "Yes. Our Kirkwall (Orkney) branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Kirkwall (Orkney)", caption: "Local crew working in Kirkwall (Orkney)" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Kirkwall (Orkney)", caption: "Local Kirkwall (Orkney) team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Kirkwall (Orkney)", caption: "Living room refresh in a Kirkwall (Orkney) family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Kirkwall (Orkney)", caption: "Nightly janitorial at a Kirkwall (Orkney) office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Lerwick (Shetland) (Highlands & Islands)
// ============================================================
export const lerwick: LocationDetail = {
  slug: "lerwick",
  name: "Lerwick (Shetland)",
  region: "Highlands & Islands",
  populationNote: "Shetland Islands · ~7,500 residents (island-wide)",
  tagline: "Local Lerwick (Shetland) crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Lerwick (Shetland).\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Lerwick (Shetland) since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Lerwick (Shetland) | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Lerwick (Shetland) cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Lerwick (Shetland) since 2014. Our local Lerwick (Shetland) branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Shetland Islands footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Lerwick (Shetland) gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Lerwick is Britain's most northerly town — North Sea exposure means specialist salt-residue cleaning throughout. Shetland Islands Council approved supplier for civic buildings and void turnover across ZE1-ZE3. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Lerwick (Shetland) branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Lerwick (Shetland) postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Lerwick is Britain's most northerly town — North Sea exposure means specialist salt-residue cleaning throughout.",
    "Shetland Islands Council approved supplier for civic buildings and void turnover across ZE1-ZE3.",
    "Significant oil and gas economy (Sullom Voe Terminal) — specialist industrial-protocol crews available.",
    "Ferry terminal for Aberdeen and Orkney drives hospitality and crew-accommodation cleaning contracts.",
    "Lerwick conservation area includes 17th-18th century buildings — specialist traditional-material chemistry throughout.",
  ],
  stats: [
    { value: "12+", label: "Years serving Lerwick (Shetland)" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Lerwick (Shetland) clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Lerwick Town Centre (ZE1)", description: "Shetland capital and main port with Commercial Street retail — commercial contracts." },
    { name: "Commercial Street & Esplanade", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Sound & North Sound", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "South Road & Staney Hill", description: "Established residential streets — recurring family home cleans." },
    { name: "Gremista & Blackhill", description: "Industrial-adjacent properties — specialist post-industrial cleaning protocols." },
    { name: "Scalloway & Sandwick (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Lerwick (Shetland) postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Lerwick (Shetland) crew", description: "We assign a PVG-checked, uniformed Lerwick (Shetland)-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Lerwick (Shetland)", quote: "We've used three other services over the past decade in Lerwick (Shetland). Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Lerwick (Shetland) business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Lerwick (Shetland) had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Lerwick (Shetland) tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Lerwick (Shetland)? What postcodes?", a: "Yes. Our Lerwick (Shetland) branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Lerwick (Shetland) service area." },
    { q: "Are your Lerwick (Shetland) cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Lerwick (Shetland)?", a: "For most Lerwick (Shetland) postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Lerwick (Shetland)?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Lerwick (Shetland) clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Lerwick (Shetland)?", a: "Yes. Our Lerwick (Shetland) branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Lerwick (Shetland)", caption: "Local crew working in Lerwick (Shetland)" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Lerwick (Shetland)", caption: "Local Lerwick (Shetland) team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Lerwick (Shetland)", caption: "Living room refresh in a Lerwick (Shetland) family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Lerwick (Shetland)", caption: "Nightly janitorial at a Lerwick (Shetland) office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Stornoway (Lewis) (Highlands & Islands)
// ============================================================
export const stornoway: LocationDetail = {
  slug: "stornoway",
  name: "Stornoway (Lewis)",
  region: "Highlands & Islands",
  populationNote: "Comhairle nan Eilean Siar · ~8,000 residents (island-wide)",
  tagline: "Local Stornoway (Lewis) crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Stornoway (Lewis).\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Stornoway (Lewis) since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Stornoway (Lewis) | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Stornoway (Lewis) cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Stornoway (Lewis) since 2014. Our local Stornoway (Lewis) branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Comhairle nan Eilean Siar footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Stornoway (Lewis) gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Stornoway is the capital of the Outer Hebrides — main ferry terminal for Ullapool drives hospitality cleaning. Comhairle nan Eilean Siar (Western Isles Council) approved supplier for civic buildings and void turnover across HS1-HS9. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Stornoway (Lewis) branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Stornoway (Lewis) postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Stornoway is the capital of the Outer Hebrides — main ferry terminal for Ullapool drives hospitality cleaning.",
    "Comhairle nan Eilean Siar (Western Isles Council) approved supplier for civic buildings and void turnover across HS1-HS9.",
    "Lews Castle and conservation area require listed-building-safe products for nearby properties.",
    "Atlantic exposure means exterior soft-wash, moss removal, and salt-residue cleaning regularly needed.",
    "Significant Gaelic-speaking community — local crew members understand the cultural context throughout.",
  ],
  stats: [
    { value: "12+", label: "Years serving Stornoway (Lewis)" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Stornoway (Lewis) clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Stornoway Town Centre (HS1)", description: "Western Isles capital with retail units and period properties — commercial contracts." },
    { name: "Point Street & Cromwell Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Sandwickhill & Plasterfield", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Laxdale & Newmarket", description: "Established residential streets — recurring family home cleans." },
    { name: "Lower Sandwick & Jamestown", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Tong & Back (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Stornoway (Lewis) postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Stornoway (Lewis) crew", description: "We assign a PVG-checked, uniformed Stornoway (Lewis)-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Stornoway (Lewis)", quote: "We've used three other services over the past decade in Stornoway (Lewis). Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Stornoway (Lewis) business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Stornoway (Lewis) had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Stornoway (Lewis) tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Stornoway (Lewis)? What postcodes?", a: "Yes. Our Stornoway (Lewis) branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Stornoway (Lewis) service area." },
    { q: "Are your Stornoway (Lewis) cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Stornoway (Lewis)?", a: "For most Stornoway (Lewis) postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Stornoway (Lewis)?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Stornoway (Lewis) clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Stornoway (Lewis)?", a: "Yes. Our Stornoway (Lewis) branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Stornoway (Lewis)", caption: "Local crew working in Stornoway (Lewis)" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Stornoway (Lewis)", caption: "Local Stornoway (Lewis) team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Stornoway (Lewis)", caption: "Living room refresh in a Stornoway (Lewis) family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Stornoway (Lewis)", caption: "Nightly janitorial at a Stornoway (Lewis) office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Portree (Skye) (Highlands & Islands)
// ============================================================
export const portree: LocationDetail = {
  slug: "portree",
  name: "Portree (Skye)",
  region: "Highlands & Islands",
  populationNote: "Highland · ~2,500 residents",
  tagline: "Local Portree (Skye) crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Portree (Skye).\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Portree (Skye) since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Portree (Skye) | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Portree (Skye) cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Portree (Skye) since 2014. Our local Portree (Skye) branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Highland footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Portree (Skye) gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Portree is the main settlement on the Isle of Skye — significant tourism economy with year-round visitor demand. Highland Council approved supplier for civic buildings and void turnover across IV51-IV52. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Portree (Skye) branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Portree (Skye) postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Portree is the main settlement on the Isle of Skye — significant tourism economy with year-round visitor demand.",
    "Highland Council approved supplier for civic buildings and void turnover across IV51-IV52.",
    "Cuillin mountains and Trotternish Ridge UNESCO Geopark drive significant visitor-season demand for holiday-let turnover.",
    "Skye Bridge access means year-round service availability regardless of ferry schedules.",
    "Atlantic exposure means exterior soft-wash, moss removal, and salt-residue cleaning regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Portree (Skye)" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Portree (Skye) clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Portree Village Centre (IV51)", description: "Skye capital with harbour-area retail and period properties — commercial contracts." },
    { name: "Quay Street & Bayfield", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Wentworth Street & Viewfield", description: "Established residential streets — recurring family home cleans." },
    { name: "Kingsburgh Road & The Lump", description: "Premium residential areas — luxury recurring cleans and upholstery care." },
    { name: "Sconser & Sligachan (rural fringe)", description: "Village settlements — rural-adjacent exterior and holiday-let turnover work." },
    { name: "Dunvegan & Broadford (rural fringe)", description: "Village settlements with mixed residential — recurring domestic and holiday-let turnover work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Portree (Skye) postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Portree (Skye) crew", description: "We assign a PVG-checked, uniformed Portree (Skye)-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Portree (Skye)", quote: "We've used three other services over the past decade in Portree (Skye). Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Portree (Skye) business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Portree (Skye) had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Portree (Skye) tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Portree (Skye)? What postcodes?", a: "Yes. Our Portree (Skye) branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Portree (Skye) service area." },
    { q: "Are your Portree (Skye) cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Portree (Skye)?", a: "For most Portree (Skye) postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Portree (Skye)?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Portree (Skye) clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Portree (Skye)?", a: "Yes. Our Portree (Skye) branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Portree (Skye)", caption: "Local crew working in Portree (Skye)" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Portree (Skye)", caption: "Local Portree (Skye) team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Portree (Skye)", caption: "Living room refresh in a Portree (Skye) family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Portree (Skye)", caption: "Nightly janitorial at a Portree (Skye) office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Ballater (Highlands & Islands)
// ============================================================
export const ballater: LocationDetail = {
  slug: "ballater",
  name: "Ballater",
  region: "Highlands & Islands",
  populationNote: "Aberdeenshire · ~1,500 residents",
  tagline: "Local Ballater crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Ballater.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Ballater since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Ballater | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Ballater cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Ballater since 2014. Our local Ballater branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Aberdeenshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Ballater gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Ballater is a Victorian spa town in Royal Deeside — significant tourism economy with year-round visitor demand. Aberdeenshire Council approved supplier for civic buildings and void turnover across AB35. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Ballater branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Ballater postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Ballater is a Victorian spa town in Royal Deeside — significant tourism economy with year-round visitor demand.",
    "Aberdeenshire Council approved supplier for civic buildings and void turnover across AB35.",
    "Balmoral Castle and Crathie Kirk proximity — security-cleared crews available for royal-adjacent properties.",
    "Cairngorms National Park designation means environmentally-aware cleaning products are essential.",
    "River Dee Special Area of Conservation — strict environmental protocols for cleaning products.",
  ],
  stats: [
    { value: "12+", label: "Years serving Ballater" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Ballater clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Ballater Town Centre (AB35)", description: "Victorian spa town with High Street retail and period properties — commercial contracts." },
    { name: "Station Square & Bridge Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Moray Road & Tullich Road", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Glenmuick & Monaltrie", description: "Established residential streets — recurring family home cleans." },
    { name: "Balmoral & Crathie adjacent (AB35)", description: "Royal-adjacent properties — premium housekeeping services." },
    { name: "Braemar & Aboyne (rural fringe)", description: "Village settlements — rural-adjacent exterior and holiday-let turnover work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Ballater postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Ballater crew", description: "We assign a PVG-checked, uniformed Ballater-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Ballater", quote: "We've used three other services over the past decade in Ballater. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Ballater business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Ballater had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Ballater tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Ballater? What postcodes?", a: "Yes. Our Ballater branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Ballater service area." },
    { q: "Are your Ballater cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Ballater?", a: "For most Ballater postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Ballater?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Ballater clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Ballater?", a: "Yes. Our Ballater branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Ballater", caption: "Local crew working in Ballater" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Ballater", caption: "Local Ballater team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Ballater", caption: "Living room refresh in a Ballater family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Ballater", caption: "Nightly janitorial at a Ballater office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Nairn (Highlands & Islands)
// ============================================================
export const nairn: LocationDetail = {
  slug: "nairn",
  name: "Nairn",
  region: "Highlands & Islands",
  populationNote: "Highland · ~9,500 residents",
  tagline: "Local Nairn crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Nairn.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Nairn since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Nairn | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Nairn cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Nairn since 2014. Our local Nairn branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Highland footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Nairn gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Nairn is one of Scotland's sunniest seaside resorts — significant tourism and second-home market. Highland Council approved supplier for civic buildings and void turnover across IV12. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Nairn branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Nairn postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Nairn is one of Scotland's sunniest seaside resorts — significant tourism and second-home market.",
    "Highland Council approved supplier for civic buildings and void turnover across IV12.",
    "Cawdor Castle and Brodie Castle proximity means listed-building-safe products throughout.",
    "Moray Firth dolphin-watching tourism drives seasonal hospitality cleaning contracts.",
    "Sea-spray exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Nairn" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Nairn clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Nairn Town Centre (IV12)", description: "Seaside resort town with High Street retail and period properties — commercial contracts." },
    { name: "High Street & Bridge Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Seabank Road & Queen Street", description: "Premium seafront properties — luxury recurring cleans and exterior soft-wash." },
    { name: "Fishertown & Harbour", description: "Conservation-area former fishing village — specialist traditional-material chemistry." },
    { name: "Sandown & Balmakeith", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Cawdor & Auldearn (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Nairn postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Nairn crew", description: "We assign a PVG-checked, uniformed Nairn-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Nairn", quote: "We've used three other services over the past decade in Nairn. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Nairn business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Nairn had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Nairn tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Nairn? What postcodes?", a: "Yes. Our Nairn branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Nairn service area." },
    { q: "Are your Nairn cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Nairn?", a: "For most Nairn postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Nairn?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Nairn clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Nairn?", a: "Yes. Our Nairn branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Nairn", caption: "Local crew working in Nairn" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Nairn", caption: "Local Nairn team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Nairn", caption: "Living room refresh in a Nairn family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Nairn", caption: "Nightly janitorial at a Nairn office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Dornoch (Highlands & Islands)
// ============================================================
export const dornoch: LocationDetail = {
  slug: "dornoch",
  name: "Dornoch",
  region: "Highlands & Islands",
  populationNote: "Highland · ~1,200 residents",
  tagline: "Local Dornoch crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Dornoch.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Dornoch since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Dornoch | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Dornoch cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Dornoch since 2014. Our local Dornoch branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Highland footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Dornoch gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Dornoch Cathedral (13th century) and conservation area require listed-building-safe products throughout. Highland Council approved supplier for civic buildings and void turnover across IV25. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Dornoch branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Dornoch postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Dornoch Cathedral (13th century) and conservation area require listed-building-safe products throughout.",
    "Highland Council approved supplier for civic buildings and void turnover across IV25.",
    "Skibo Castle (Carnegie Club) proximity drives premium hospitality and second-home cleaning contracts.",
    "Royal Dornoch Golf Club drives seasonal visitor accommodation and turnover cleaning contracts.",
    "Sea-spray exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Dornoch" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Dornoch clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Dornoch Town Centre (IV25)", description: "Royal burgh and cathedral town with High Street retail — commercial contracts." },
    { name: "Castle Street & High Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Evelix Road & Meadowfield", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Brae & Poles Road", description: "Established residential streets — recurring family home cleans." },
    { name: "Embo & Skibo (rural fringe)", description: "Coastal village settlements — recurring domestic and holiday-let turnover work." },
    { name: "Golspie & Brora (rural fringe)", description: "Village settlements — recurring domestic and end-of-tenancy work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Dornoch postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Dornoch crew", description: "We assign a PVG-checked, uniformed Dornoch-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Dornoch", quote: "We've used three other services over the past decade in Dornoch. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Dornoch business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Dornoch had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Dornoch tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Dornoch? What postcodes?", a: "Yes. Our Dornoch branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Dornoch service area." },
    { q: "Are your Dornoch cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Dornoch?", a: "For most Dornoch postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Dornoch?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Dornoch clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Dornoch?", a: "Yes. Our Dornoch branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Dornoch", caption: "Local crew working in Dornoch" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Dornoch", caption: "Local Dornoch team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Dornoch", caption: "Living room refresh in a Dornoch family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Dornoch", caption: "Nightly janitorial at a Dornoch office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Ullapool (Highlands & Islands)
// ============================================================
export const ullapool: LocationDetail = {
  slug: "ullapool",
  name: "Ullapool",
  region: "Highlands & Islands",
  populationNote: "Highland · ~1,500 residents",
  tagline: "Local Ullapool crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Ullapool.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Ullapool since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Ullapool | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Ullapool cleaners covering every Scottish postcode in Highlands & Islands. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Ullapool since 2014. Our local Ullapool branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Highland footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Ullapool gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Ullapool is the main ferry terminal for Stornoway — significant visitor and crew-accommodation economy. Highland Council approved supplier for civic buildings and void turnover across IV26. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Ullapool branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Ullapool postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Ullapool is the main ferry terminal for Stornoway — significant visitor and crew-accommodation economy.",
    "Highland Council approved supplier for civic buildings and void turnover across IV26.",
    "Planned 18th-century fishing village conservation area — Thomas Telford-design heritage throughout.",
    "Wester Ross UNESCO Biosphere Reserve — environmentally-aware cleaning products are essential.",
    "Atlantic exposure means exterior soft-wash, moss removal, and salt-residue cleaning regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Ullapool" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Ullapool clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Ullapool Village Centre (IV26)", description: "Planned fishing village with harbour-area retail — commercial contracts and holiday-let turnover." },
    { name: "Quay Street & Argyle Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "West Argyle Street & Morefield", description: "Established residential streets — recurring family home cleans." },
    { name: "Braes & Achtercairn", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Achiltibuie & Inverpolly (rural fringe)", description: "Coastal village settlements — recurring domestic and holiday-let turnover work." },
    { name: "Laide & Poolewe (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Ullapool postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Ullapool crew", description: "We assign a PVG-checked, uniformed Ullapool-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Ullapool", quote: "We've used three other services over the past decade in Ullapool. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Ullapool business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Ullapool had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Highlands & Islands", quote: "I manage 240 tenancies across Highlands & Islands. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Ullapool tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Ullapool? What postcodes?", a: "Yes. Our Ullapool branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Ullapool service area." },
    { q: "Are your Ullapool cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Ullapool?", a: "For most Ullapool postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Ullapool?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Ullapool clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Ullapool?", a: "Yes. Our Ullapool branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Inverness", href: "/locations/inverness", region: "Highlands & Islands" },
    { name: "Aviemore", href: "/locations/aviemore", region: "Highlands & Islands" },
    { name: "Oban", href: "/locations/oban", region: "Highlands & Islands" },
    { name: "Fort William", href: "/locations/fort-william", region: "Highlands & Islands" },
    { name: "Thurso", href: "/locations/thurso", region: "Highlands & Islands" },
    { name: "Wick", href: "/locations/wick", region: "Highlands & Islands" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Ullapool", caption: "Local crew working in Ullapool" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Ullapool", caption: "Local Ullapool team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Ullapool", caption: "Living room refresh in a Ullapool family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Ullapool", caption: "Nightly janitorial at a Ullapool office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Galashiels (Borders & South-West)
// ============================================================
export const galashiels: LocationDetail = {
  slug: "galashiels",
  name: "Galashiels",
  region: "Borders & South-West",
  populationNote: "Scottish Borders · ~14,000 residents",
  tagline: "Local Galashiels crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Galashiels.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Galashiels since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Galashiels | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Galashiels cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Galashiels since 2014. Our local Galashiels branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Scottish Borders footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Galashiels gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Galashiels is the largest town in the Scottish Borders — Borders Railway connection to Edinburgh drives commuter demand. Scottish Borders Council approved supplier for civic buildings and void turnover across TD1. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Galashiels branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Galashiels postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Galashiels is the largest town in the Scottish Borders — Borders Railway connection to Edinburgh drives commuter demand.",
    "Scottish Borders Council approved supplier for civic buildings and void turnover across TD1.",
    "Heriot-Watt University School of Textiles and Design campus drives recurring commercial and student-let turnover work.",
    "Former textile-mill heritage means industrial conversions often need specialist post-renovation cleaning.",
    "Tweed Valley location means rural-adjacent properties often need exterior soft-wash and garden-building cleans.",
  ],
  stats: [
    { value: "12+", label: "Years serving Galashiels" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Galashiels clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Galashiels Town Centre (TD1)", description: "Borders' largest town with retail units and flats — commercial contracts." },
    { name: "Channel Street & Bridge Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Langlee & March Street", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Scott Crescent & Loaningdale", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Balmoral Road & Elm Row", description: "Established residential streets — recurring family home cleans." },
    { name: "Melrose & Newtown (rural fringe)", description: "Village settlements with period properties — conservation-area-aware service." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Galashiels postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Galashiels crew", description: "We assign a PVG-checked, uniformed Galashiels-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Galashiels", quote: "We've used three other services over the past decade in Galashiels. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Galashiels business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Galashiels had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Galashiels tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Galashiels? What postcodes?", a: "Yes. Our Galashiels branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Galashiels service area." },
    { q: "Are your Galashiels cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Galashiels?", a: "For most Galashiels postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Galashiels?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Galashiels clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Galashiels?", a: "Yes. Our Galashiels branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
    { name: "Troon", href: "/locations/troon", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Galashiels", caption: "Local crew working in Galashiels" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Galashiels", caption: "Local Galashiels team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Galashiels", caption: "Living room refresh in a Galashiels family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Galashiels", caption: "Nightly janitorial at a Galashiels office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Ayr (Borders & South-West)
// ============================================================
export const ayr: LocationDetail = {
  slug: "ayr",
  name: "Ayr",
  region: "Borders & South-West",
  populationNote: "South Ayrshire · ~47,000 residents",
  tagline: "Local Ayr crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Ayr.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Ayr since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Ayr | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Ayr cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Ayr since 2014. Our local Ayr branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the South Ayrshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Ayr gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Ayr is the birthplace of Robert Burns — Burns National Heritage Park and conservation area require listed-building-safe products. South Ayrshire Council approved supplier for civic buildings and void turnover across KA6-KA9. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Ayr branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Ayr postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Ayr is the birthplace of Robert Burns — Burns National Heritage Park and conservation area require listed-building-safe products.",
    "South Ayrshire Council approved supplier for civic buildings and void turnover across KA6-KA9.",
    "Ayr Racecourse (Scottish Grand National) drives seasonal hospitality cleaning contracts.",
    "Significant holiday-let and second-home market along the Ayrshire coast — weekly turnover cleans throughout the year.",
    "Firth of Clyde exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Ayr" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Ayr clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Ayr Town Centre (KA7, KA8)", description: "Historic royal burgh with High Street retail and period properties — commercial contracts." },
    { name: "Sandgate & New Bridge Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Alloway & Doonfoot (KA7)", description: "Premium residential areas — luxury recurring cleans and upholstery care." },
    { name: "Whitletts & Holmston (KA6, KA8)", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Prestwick & Monkton adjacent (KA9, KA8)", description: "Affluent seaside suburbs — recurring domestic and holiday-let turnover work." },
    { name: "Ayr Racecourse adjacent", description: "Premium properties near Ayr Racecourse — recurring domestic and event-season hospitality cleaning." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Ayr postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Ayr crew", description: "We assign a PVG-checked, uniformed Ayr-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Ayr", quote: "We've used three other services over the past decade in Ayr. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Ayr business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Ayr had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Ayr tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Ayr? What postcodes?", a: "Yes. Our Ayr branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Ayr service area." },
    { q: "Are your Ayr cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Ayr?", a: "For most Ayr postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Ayr?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Ayr clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Ayr?", a: "Yes. Our Ayr branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
    { name: "Troon", href: "/locations/troon", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Ayr", caption: "Local crew working in Ayr" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Ayr", caption: "Local Ayr team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Ayr", caption: "Living room refresh in a Ayr family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Ayr", caption: "Nightly janitorial at a Ayr office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Kilmarnock (Borders & South-West)
// ============================================================
export const kilmarnock: LocationDetail = {
  slug: "kilmarnock",
  name: "Kilmarnock",
  region: "Borders & South-West",
  populationNote: "East Ayrshire · ~46,000 residents",
  tagline: "Local Kilmarnock crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Kilmarnock.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Kilmarnock since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Kilmarnock | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Kilmarnock cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Kilmarnock since 2014. Our local Kilmarnock branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the East Ayrshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Kilmarnock gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Kilmarnock is the home of Johnnie Walker whisky — Diageo bottling plant drives specialist industrial cleaning contracts. East Ayrshire Council approved supplier for civic buildings and void turnover across KA1-KA3. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Kilmarnock branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Kilmarnock postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Kilmarnock is the home of Johnnie Walker whisky — Diageo bottling plant drives specialist industrial cleaning contracts.",
    "East Ayrshire Council approved supplier for civic buildings and void turnover across KA1-KA3.",
    "Dean Castle Country Park and conservation area require listed-building-safe products for nearby properties.",
    "Former textile and engineering heritage means industrial conversions often need specialist post-renovation cleaning.",
    "Crosshouse Hospital proximity means HTM 01-05 medical-grade cleaning protocols for nearby clinics and surgeries.",
  ],
  stats: [
    { value: "12+", label: "Years serving Kilmarnock" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Kilmarnock clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Kilmarnock Town Centre (KA1, KA3)", description: "Historic industrial town with retail units and flats — commercial contracts and end-of-tenancy work." },
    { name: "King Street & Portland Road", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "New Farm Loch & Shortlees", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Loudoun & Crosshouse", description: "Village settlements with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Onthank & Dean Castle Country Park adjacent", description: "Established residential streets — recurring family home cleans." },
    { name: "Hurlford & Gatehead (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Kilmarnock postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Kilmarnock crew", description: "We assign a PVG-checked, uniformed Kilmarnock-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Kilmarnock", quote: "We've used three other services over the past decade in Kilmarnock. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Kilmarnock business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Kilmarnock had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Kilmarnock tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Kilmarnock? What postcodes?", a: "Yes. Our Kilmarnock branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Kilmarnock service area." },
    { q: "Are your Kilmarnock cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Kilmarnock?", a: "For most Kilmarnock postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Kilmarnock?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Kilmarnock clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Kilmarnock?", a: "Yes. Our Kilmarnock branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
    { name: "Troon", href: "/locations/troon", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Kilmarnock", caption: "Local crew working in Kilmarnock" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Kilmarnock", caption: "Local Kilmarnock team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Kilmarnock", caption: "Living room refresh in a Kilmarnock family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Kilmarnock", caption: "Nightly janitorial at a Kilmarnock office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Dumfries (Borders & South-West)
// ============================================================
export const dumfries: LocationDetail = {
  slug: "dumfries",
  name: "Dumfries",
  region: "Borders & South-West",
  populationNote: "Dumfries & Galloway · ~34,000 residents",
  tagline: "Local Dumfries crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Dumfries.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Dumfries since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Dumfries | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Dumfries cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Dumfries since 2014. Our local Dumfries branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Dumfries & Galloway footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Dumfries gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Dumfries was Robert Burns' final home — Burns House and conservation area require listed-building-safe products. Dumfries & Galloway Council approved supplier for civic buildings and void turnover across DG1-DG2. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Dumfries branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Dumfries postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Dumfries was Robert Burns' final home — Burns House and conservation area require listed-building-safe products.",
    "Dumfries & Galloway Council approved supplier for civic buildings and void turnover across DG1-DG2.",
    "River Nith flood plain means water-damage cleaning is a regular service from October to March.",
    "Dumfries House and surrounding conservation area — specialist traditional-material chemistry throughout.",
    "Crichton Campus (University of Glasgow) drives recurring commercial and student-let turnover work.",
  ],
  stats: [
    { value: "12+", label: "Years serving Dumfries" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Dumfries clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Dumfries Town Centre (DG1)", description: "Historic royal burgh with High Street retail and period properties — commercial contracts." },
    { name: "High Street & Buccleuch Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Lochside & Lincluden", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Maxwelltown & Troqueer (DG2)", description: "Adjacent former burgh with mixed residential — recurring domestic and end-of-tenancy work." },
    { name: "Georgetown & Heathhall", description: "Established residential streets — recurring family home cleans." },
    { name: "New Abbey & Glencaple (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Dumfries postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Dumfries crew", description: "We assign a PVG-checked, uniformed Dumfries-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Dumfries", quote: "We've used three other services over the past decade in Dumfries. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Dumfries business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Dumfries had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Dumfries tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Dumfries? What postcodes?", a: "Yes. Our Dumfries branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Dumfries service area." },
    { q: "Are your Dumfries cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Dumfries?", a: "For most Dumfries postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Dumfries?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Dumfries clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Dumfries?", a: "Yes. Our Dumfries branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
    { name: "Troon", href: "/locations/troon", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Dumfries", caption: "Local crew working in Dumfries" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Dumfries", caption: "Local Dumfries team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Dumfries", caption: "Living room refresh in a Dumfries family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Dumfries", caption: "Nightly janitorial at a Dumfries office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Greenock (Borders & South-West)
// ============================================================
export const greenock: LocationDetail = {
  slug: "greenock",
  name: "Greenock",
  region: "Borders & South-West",
  populationNote: "Inverclyde · ~43,000 residents",
  tagline: "Local Greenock crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Greenock.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Greenock since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Greenock | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Greenock cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Greenock since 2014. Our local Greenock branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Inverclyde footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Greenock gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Greenock was once Scotland's leading port for transatlantic trade — historic waterfront conservation area throughout. Inverclyde Council approved supplier for civic buildings and void turnover across PA15-PA19. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Greenock branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Greenock postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Greenock was once Scotland's leading port for transatlantic trade — historic waterfront conservation area throughout.",
    "Inverclyde Council approved supplier for civic buildings and void turnover across PA15-PA19.",
    "Firth of Clyde ferry terminal drives hospitality and crew-accommodation cleaning contracts.",
    "Ocean Terminal and cruise-ship port drive seasonal hospitality and visitor cleaning contracts.",
    "Sea-spray exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Greenock" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Greenock clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Greenock Town Centre (PA15, PA16)", description: "Historic port town with retail units and flats — commercial contracts." },
    { name: "West Blackhall Street & Cathcart Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Branchton & Larkfield", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Skye & Fancy Farm", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Gourock adjacent (PA19)", description: "Affluent seaside town — recurring domestic and holiday-let turnover work." },
    { name: "Wemyss Bay & Inverkip (rural fringe)", description: "Premium village settlements — luxury recurring cleans and exterior soft-wash." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Greenock postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Greenock crew", description: "We assign a PVG-checked, uniformed Greenock-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Greenock", quote: "We've used three other services over the past decade in Greenock. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Greenock business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Greenock had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Greenock tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Greenock? What postcodes?", a: "Yes. Our Greenock branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Greenock service area." },
    { q: "Are your Greenock cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Greenock?", a: "For most Greenock postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Greenock?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Greenock clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Greenock?", a: "Yes. Our Greenock branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
    { name: "Troon", href: "/locations/troon", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Greenock", caption: "Local crew working in Greenock" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Greenock", caption: "Local Greenock team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Greenock", caption: "Living room refresh in a Greenock family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Greenock", caption: "Nightly janitorial at a Greenock office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Stranraer (Borders & South-West)
// ============================================================
export const stranraer: LocationDetail = {
  slug: "stranraer",
  name: "Stranraer",
  region: "Borders & South-West",
  populationNote: "Dumfries & Galloway · ~10,500 residents",
  tagline: "Local Stranraer crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Stranraer.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Stranraer since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Stranraer | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Stranraer cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Stranraer since 2014. Our local Stranraer branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Dumfries & Galloway footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Stranraer gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Stranraer was historically the main ferry port for Northern Ireland — significant ferry-crew and hospitality economy. Dumfries & Galloway Council approved supplier for civic buildings and void turnover across DG9. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Stranraer branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Stranraer postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Stranraer was historically the main ferry port for Northern Ireland — significant ferry-crew and hospitality economy.",
    "Dumfries & Galloway Council approved supplier for civic buildings and void turnover across DG9.",
    "Cairnryan ferry terminal (5 miles north) — specialist cleaning for ferry-crew accommodation and terminal facilities.",
    "Rhins of Galloway location means rural-adjacent properties often need exterior soft-wash and garden-building cleans.",
    "Sea-spray exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Stranraer" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Stranraer clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Stranraer Town Centre (DG9)", description: "Historic ferry port with High Street retail and period properties — commercial contracts." },
    { name: "George Street & Castle Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Lewis Park & Oxcars", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Sandmill & Cairnryan Road", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Cairnryan & Lochryan adjacent", description: "Ferry terminal for Northern Ireland — specialist crew-accommodation cleaning contracts." },
    { name: "Portpatrick & Glenluce (rural fringe)", description: "Village settlements — rural-adjacent exterior and holiday-let turnover work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Stranraer postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Stranraer crew", description: "We assign a PVG-checked, uniformed Stranraer-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Stranraer", quote: "We've used three other services over the past decade in Stranraer. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Stranraer business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Stranraer had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Stranraer tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Stranraer? What postcodes?", a: "Yes. Our Stranraer branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Stranraer service area." },
    { q: "Are your Stranraer cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Stranraer?", a: "For most Stranraer postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Stranraer?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Stranraer clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Stranraer?", a: "Yes. Our Stranraer branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Troon", href: "/locations/troon", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Stranraer", caption: "Local crew working in Stranraer" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Stranraer", caption: "Local Stranraer team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Stranraer", caption: "Living room refresh in a Stranraer family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Stranraer", caption: "Nightly janitorial at a Stranraer office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Troon (Borders & South-West)
// ============================================================
export const troon: LocationDetail = {
  slug: "troon",
  name: "Troon",
  region: "Borders & South-West",
  populationNote: "South Ayrshire · ~14,500 residents",
  tagline: "Local Troon crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Troon.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Troon since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Troon | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Troon cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Troon since 2014. Our local Troon branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the South Ayrshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Troon gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Troon is the home of Royal Troon Golf Club (Open Championship venue) — significant visitor-season hospitality cleaning. South Ayrshire Council approved supplier for civic buildings and void turnover across KA10. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Troon branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Troon postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Troon is the home of Royal Troon Golf Club (Open Championship venue) — significant visitor-season hospitality cleaning.",
    "South Ayrshire Council approved supplier for civic buildings and void turnover across KA10.",
    "P&O ferry terminal (Troon-Ardrossan-Larne) drives crew-accommodation cleaning contracts.",
    "Significant second-home and holiday-let market — weekly turnover cleans throughout the year.",
    "Sea-spray exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Troon" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Troon clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Troon Town Centre (KA10)", description: "Seaside resort and port with High Street retail — commercial contracts and holiday-let turnover." },
    { name: "Portland Street & Templehill", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Barassie & Loans", description: "Established residential streets — recurring family home cleans." },
    { name: "Marr College area & Crosbie", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Troon Harbour & Piersport adjacent", description: "Premium harbour-area properties — recurring domestic and exterior soft-wash." },
    { name: "Prestwick & Monkton adjacent (KA9)", description: "Affluent adjacent towns — recurring domestic and holiday-let turnover work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Troon postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Troon crew", description: "We assign a PVG-checked, uniformed Troon-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Troon", quote: "We've used three other services over the past decade in Troon. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Troon business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Troon had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Troon tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Troon? What postcodes?", a: "Yes. Our Troon branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Troon service area." },
    { q: "Are your Troon cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Troon?", a: "For most Troon postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Troon?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Troon clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Troon?", a: "Yes. Our Troon branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Troon", caption: "Local crew working in Troon" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Troon", caption: "Local Troon team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Troon", caption: "Living room refresh in a Troon family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Troon", caption: "Nightly janitorial at a Troon office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Irvine (Borders & South-West)
// ============================================================
export const irvine: LocationDetail = {
  slug: "irvine",
  name: "Irvine",
  region: "Borders & South-West",
  populationNote: "North Ayrshire · ~34,000 residents",
  tagline: "Local Irvine crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Irvine.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Irvine since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Irvine | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Irvine cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Irvine since 2014. Our local Irvine branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the North Ayrshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Irvine gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Irvine is Scotland's oldest royal burgh (chartered 1372) — historic harbour conservation area throughout. North Ayrshire Council approved supplier for civic buildings and void turnover across KA11-KA13. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Irvine branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Irvine postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Irvine is Scotland's oldest royal burgh (chartered 1372) — historic harbour conservation area throughout.",
    "North Ayrshire Council approved supplier for civic buildings and void turnover across KA11-KA13.",
    "Irvine Beach Park and Magnum Leisure Centre drive seasonal hospitality and leisure cleaning contracts.",
    "Former ICI chemical-industry heritage means industrial conversions often need specialist post-renovation cleaning.",
    "Firth of Clyde exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Irvine" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Irvine clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Irvine Town Centre (KA12, KA13)", description: "Historic royal burgh with retail units and flats — commercial contracts and end-of-tenancy work." },
    { name: "High Street & Bridgegate", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Bourtreehill & Broomlands", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Castlepark & Redburn", description: "Post-war estates with mixed tenure — recurring domestic and void turnover work." },
    { name: "Moorfield & Springside (KA11, KA12)", description: "Village settlements — recurring domestic and end-of-tenancy work." },
    { name: "Kilwinning & Stevenston adjacent (KA13, KA12)", description: "Adjacent towns with mixed residential — recurring domestic and end-of-tenancy work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Irvine postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Irvine crew", description: "We assign a PVG-checked, uniformed Irvine-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Irvine", quote: "We've used three other services over the past decade in Irvine. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Irvine business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Irvine had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Irvine tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Irvine? What postcodes?", a: "Yes. Our Irvine branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Irvine service area." },
    { q: "Are your Irvine cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Irvine?", a: "For most Irvine postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Irvine?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Irvine clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Irvine?", a: "Yes. Our Irvine branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Irvine", caption: "Local crew working in Irvine" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Irvine", caption: "Local Irvine team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Irvine", caption: "Living room refresh in a Irvine family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Irvine", caption: "Nightly janitorial at a Irvine office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Prestwick (Borders & South-West)
// ============================================================
export const prestwick: LocationDetail = {
  slug: "prestwick",
  name: "Prestwick",
  region: "Borders & South-West",
  populationNote: "South Ayrshire · ~14,500 residents",
  tagline: "Local Prestwick crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Prestwick.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Prestwick since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Prestwick | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Prestwick cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Prestwick since 2014. Our local Prestwick branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the South Ayrshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Prestwick gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Prestwick is home to Glasgow Prestwick Airport — significant airport-related commercial cleaning contracts. South Ayrshire Council approved supplier for civic buildings and void turnover across KA9. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Prestwick branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Prestwick postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Prestwick is home to Glasgow Prestwick Airport — significant airport-related commercial cleaning contracts.",
    "South Ayrshire Council approved supplier for civic buildings and void turnover across KA9.",
    "Prestwick Golf Club (Open Championship venue) drives seasonal visitor hospitality cleaning contracts.",
    "Significant second-home and holiday-let market — weekly turnover cleans throughout the year.",
    "Sea-spray exposure means exterior soft-wash and salt-residue cleaning is regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Prestwick" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Prestwick clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Prestwick Town Centre (KA9)", description: "Seaside resort with High Street retail and period properties — commercial contracts." },
    { name: "Ayr Road & Main Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Powburn & Grangemuir", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "New Prestwick & Heathfield", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Prestwick Airport adjacent", description: "Airport-related hotels and car parks — recurring commercial cleaning contracts." },
    { name: "Monkton & Symington (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Prestwick postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Prestwick crew", description: "We assign a PVG-checked, uniformed Prestwick-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Prestwick", quote: "We've used three other services over the past decade in Prestwick. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Prestwick business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Prestwick had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Prestwick tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Prestwick? What postcodes?", a: "Yes. Our Prestwick branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Prestwick service area." },
    { q: "Are your Prestwick cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Prestwick?", a: "For most Prestwick postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Prestwick?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Prestwick clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Prestwick?", a: "Yes. Our Prestwick branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Prestwick", caption: "Local crew working in Prestwick" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Prestwick", caption: "Local Prestwick team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Prestwick", caption: "Living room refresh in a Prestwick family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Prestwick", caption: "Nightly janitorial at a Prestwick office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Melrose (Borders & South-West)
// ============================================================
export const melrose: LocationDetail = {
  slug: "melrose",
  name: "Melrose",
  region: "Borders & South-West",
  populationNote: "Scottish Borders · ~2,500 residents",
  tagline: "Local Melrose crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Melrose.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Melrose since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Melrose | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Melrose cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Melrose since 2014. Our local Melrose branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Scottish Borders footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Melrose gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Melrose Abbey (founded 1136) and conservation area require listed-building-safe products throughout. Scottish Borders Council approved supplier for civic buildings and void turnover across TD6. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Melrose branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Melrose postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Melrose Abbey (founded 1136) and conservation area require listed-building-safe products throughout.",
    "Scottish Borders Council approved supplier for civic buildings and void turnover across TD6.",
    "Melrose Sevens (rugby 7s tournament) drives seasonal hospitality cleaning contracts.",
    "Significant second-home and holiday-let market — weekly turnover cleans throughout the year.",
    "Eildon Hills and Borders Abbey Way proximity means rural-adjacent properties often need exterior soft-wash.",
  ],
  stats: [
    { value: "12+", label: "Years serving Melrose" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Melrose clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Melrose Town Centre (TD6)", description: "Historic royal burgh with High Street retail and period properties — commercial contracts." },
    { name: "Market Square & Buccleuch Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Dingleton & Buccleuch", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Priory Gate & Huntly Road", description: "Premium residential streets — luxury recurring cleans and upholstery care." },
    { name: "Gattonside & Darnick (rural fringe)", description: "Village settlements with conservation-area properties — specialist traditional-material chemistry." },
    { name: "Galashiels & Selkirk adjacent (rural fringe)", description: "Adjacent towns — recurring domestic and end-of-tenancy work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Melrose postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Melrose crew", description: "We assign a PVG-checked, uniformed Melrose-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Melrose", quote: "We've used three other services over the past decade in Melrose. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Melrose business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Melrose had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Melrose tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Melrose? What postcodes?", a: "Yes. Our Melrose branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Melrose service area." },
    { q: "Are your Melrose cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Melrose?", a: "For most Melrose postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Melrose?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Melrose clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Melrose?", a: "Yes. Our Melrose branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Melrose", caption: "Local crew working in Melrose" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Melrose", caption: "Local Melrose team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Melrose", caption: "Living room refresh in a Melrose family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Melrose", caption: "Nightly janitorial at a Melrose office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Peebles (Borders & South-West)
// ============================================================
export const peebles: LocationDetail = {
  slug: "peebles",
  name: "Peebles",
  region: "Borders & South-West",
  populationNote: "Scottish Borders · ~8,500 residents",
  tagline: "Local Peebles crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Peebles.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Peebles since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Peebles | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Peebles cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Peebles since 2014. Our local Peebles branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Scottish Borders footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Peebles gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Peebles is a former royal burgh — historic High Street conservation area requires listed-building-safe products. Scottish Borders Council approved supplier for civic buildings and void turnover across EH45. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Peebles branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Peebles postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Peebles is a former royal burgh — historic High Street conservation area requires listed-building-safe products.",
    "Scottish Borders Council approved supplier for civic buildings and void turnover across EH45.",
    "Glentress Forest (mountain-biking hub) drives significant visitor-season hospitality and leisure cleaning contracts.",
    "River Tweed flood plain means water-damage cleaning is a regular service from October to March.",
    "Significant second-home and holiday-let market — weekly turnover cleans throughout the year.",
  ],
  stats: [
    { value: "12+", label: "Years serving Peebles" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Peebles clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Peebles Town Centre (EH45)", description: "Historic royal burgh with High Street retail and period properties — commercial contracts." },
    { name: "High Street & Northgate", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Kingsmeadows & Rosetta", description: "Established residential streets — recurring family home cleans." },
    { name: "Neidpath & Whitehaugh", description: "Premium residential areas — luxury recurring cleans and upholstery care." },
    { name: "Venlaw & March Street", description: "Modern developments with family homes — recurring domestic and post-construction work." },
    { name: "Innerleithen & Walkerburn (rural fringe)", description: "Village settlements — recurring domestic and holiday-let turnover work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Peebles postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Peebles crew", description: "We assign a PVG-checked, uniformed Peebles-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Peebles", quote: "We've used three other services over the past decade in Peebles. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Peebles business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Peebles had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Peebles tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Peebles? What postcodes?", a: "Yes. Our Peebles branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Peebles service area." },
    { q: "Are your Peebles cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Peebles?", a: "For most Peebles postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Peebles?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Peebles clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Peebles?", a: "Yes. Our Peebles branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Peebles", caption: "Local crew working in Peebles" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Peebles", caption: "Local Peebles team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Peebles", caption: "Living room refresh in a Peebles family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Peebles", caption: "Nightly janitorial at a Peebles office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Hawick (Borders & South-West)
// ============================================================
export const hawick: LocationDetail = {
  slug: "hawick",
  name: "Hawick",
  region: "Borders & South-West",
  populationNote: "Scottish Borders · ~14,000 residents",
  tagline: "Local Hawick crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Hawick.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Hawick since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg",
  metaTitle: "Cleaning Services in Hawick | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Hawick cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Hawick since 2014. Our local Hawick branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Scottish Borders footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Hawick gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Hawick is the home of Scottish cashmere — significant textile-manufacturing heritage and specialist industrial cleaning. Scottish Borders Council approved supplier for civic buildings and void turnover across TD9. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Hawick branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Hawick postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Hawick is the home of Scottish cashmere — significant textile-manufacturing heritage and specialist industrial cleaning.",
    "Scottish Borders Council approved supplier for civic buildings and void turnover across TD9.",
    "Hawick Common Riding and Borders festivals drive seasonal hospitality cleaning contracts.",
    "Former textile-mill heritage means industrial conversions often need specialist post-renovation cleaning.",
    "River Teviot flood plain means water-damage cleaning is a regular service from October to March.",
  ],
  stats: [
    { value: "12+", label: "Years serving Hawick" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Hawick clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Hawick Town Centre (TD9)", description: "Historic textile town with retail units and flats — commercial contracts and end-of-tenancy work." },
    { name: "High Street & Drumlanrig Square", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Wilton & Burnfoot", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Mansfield & Beechwood", description: "Established residential streets — recurring family home cleans." },
    { name: " stirlingshire Road & Commercial Road", description: "Mixed residential and commercial — recurring domestic and small-business contracts." },
    { name: "Denholm & Newcastleton (rural fringe)", description: "Village settlements — rural-adjacent exterior and outbuilding cleans." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Hawick postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Hawick crew", description: "We assign a PVG-checked, uniformed Hawick-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Hawick", quote: "We've used three other services over the past decade in Hawick. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Hawick business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Hawick had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Hawick tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Hawick? What postcodes?", a: "Yes. Our Hawick branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Hawick service area." },
    { q: "Are your Hawick cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Hawick?", a: "For most Hawick postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Hawick?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Hawick clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Hawick?", a: "Yes. Our Hawick branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.07.12%20PM.jpeg", alt: "Maundy Clean in Hawick", caption: "Local crew working in Hawick" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Hawick", caption: "Local Hawick team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Hawick", caption: "Living room refresh in a Hawick family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Hawick", caption: "Nightly janitorial at a Hawick office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Dumbarton (Borders & South-West)
// ============================================================
export const dumbarton: LocationDetail = {
  slug: "dumbarton",
  name: "Dumbarton",
  region: "Borders & South-West",
  populationNote: "West Dunbartonshire · ~20,000 residents",
  tagline: "Local Dumbarton crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Dumbarton.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Dumbarton since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png",
  metaTitle: "Cleaning Services in Dumbarton | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Dumbarton cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Dumbarton since 2014. Our local Dumbarton branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the West Dunbartonshire footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Dumbarton gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Dumbarton Castle (ancient capital of Strathclyde) and conservation area require listed-building-safe products. West Dunbartonshire Council approved supplier for civic buildings and void turnover across G82. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Dumbarton branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Dumbarton postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Dumbarton Castle (ancient capital of Strathclyde) and conservation area require listed-building-safe products.",
    "West Dunbartonshire Council approved supplier for civic buildings and void turnover across G82.",
    "Loch Lomond proximity drives significant visitor-season hospitality and holiday-let turnover work.",
    "Former shipbuilding and whisky-distilling heritage means industrial conversions often need specialist post-renovation cleaning.",
    "River Leven flood plain means water-damage cleaning is a regular service from October to March.",
  ],
  stats: [
    { value: "12+", label: "Years serving Dumbarton" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Dumbarton clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Dumbarton Town Centre (G82)", description: "Historic royal burgh with retail units and flats — commercial contracts and end-of-tenancy work." },
    { name: "High Street & Church Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Bellsmyre & Castlehill", description: "Post-war estates with mixed tenure — void turns and recurring domestic work." },
    { name: "Dalreoch & Bridgend", description: "Established residential streets — recurring family home cleans." },
    { name: "Milton & Bowling (rural fringe)", description: "Village settlements — recurring domestic and end-of-tenancy work." },
    { name: "Balloch & Alexandria adjacent (G83)", description: "Adjacent Loch Lomond-side towns — recurring domestic and holiday-let turnover work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Dumbarton postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Dumbarton crew", description: "We assign a PVG-checked, uniformed Dumbarton-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Dumbarton", quote: "We've used three other services over the past decade in Dumbarton. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Dumbarton business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Dumbarton had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Dumbarton tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Dumbarton? What postcodes?", a: "Yes. Our Dumbarton branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Dumbarton service area." },
    { q: "Are your Dumbarton cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Dumbarton?", a: "For most Dumbarton postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Dumbarton?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Dumbarton clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Dumbarton?", a: "Yes. Our Dumbarton branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_rbkd85rbkd85rbkd.png", alt: "Maundy Clean in Dumbarton", caption: "Local crew working in Dumbarton" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Dumbarton", caption: "Local Dumbarton team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Dumbarton", caption: "Living room refresh in a Dumbarton family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Dumbarton", caption: "Nightly janitorial at a Dumbarton office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// ============================================================
// Location — Lochgilphead (Borders & South-West)
// ============================================================
export const lochgilphead: LocationDetail = {
  slug: "lochgilphead",
  name: "Lochgilphead",
  region: "Borders & South-West",
  populationNote: "Argyll & Bute · ~3,300 residents",
  tagline: "Local Lochgilphead crews. Same PVG-checked team every visit. 98 services, one phone number.",
  heroHeadline: "Cleaning services\nin Lochgilphead.\nDone properly.",
  heroSubhead: "Maundy Clean has been operating in Lochgilphead since 2014. Our local branch covers every postcode in the area with the same PVG-checked, PAYE-employed crew every visit — backed by a 100% re-clean guarantee if anything's missed. Recurring home, commercial, deep clean, move-in/out, holiday-let, medical-grade and 90+ more services. All in one phone call.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  metaTitle: "Cleaning Services in Lochgilphead | 98 Services · Same PVG-Checked Crew | Maundy Clean",
  metaDescription: "Local Lochgilphead cleaners covering every Scottish postcode in Borders & South-West. 98 cleaning services — recurring home, commercial, deep clean, move-in/out, holiday-let & more. Free re-clean guarantee. 4.9★ across 6,200+ reviews. Quote within 1 hour.",
  overviewParagraphs: [
    "Maundy Clean has been operating in Lochgilphead since 2014. Our local Lochgilphead branch runs from a central depot with 14 PVG-checked, PAYE-employed cleaners — all living within 20 minutes of the town centre — covering every postcode in the Argyll & Bute footprint. The crew knows the housing stock, the parking restrictions, the school-run congestion windows, and which streets flood in heavy rain. That local knowledge is the difference between a crew that shows up on time and one that doesn't.",
    "Every client in Lochgilphead gets the same standardised Maundy Clean service: a personalised cleaning checklist in your client portal, a 100% re-clean guarantee within 24 hours if anything's missed, and the same PVG-checked crew every visit. Lochgilphead is the administrative centre of Argyll and Bute — civic building contracts include council HQ. Argyll & Bute Council approved supplier for civic buildings and void turnover across PA31. We don't send a different contractor each week — you build a relationship with the team that cleans your home or premises, and they learn the small details that no checklist can capture.",
    "Beyond residential, our Lochgilphead branch handles a full book of commercial contracts — offices, retail units, medical and dental surgeries, holiday-let turnover, hospitality venues, schools, nurseries, and industrial units. The full service catalogue on this page (98 services across 8 categories) is available to every Lochgilphead postcode. If you're not sure which service you need, give us a call on +44 7735 322362 — we'll talk you through it in plain English (or Gaelic in the relevant islands) and send an itemised quote within one business hour.",
  ],
  localContext: [
    "Lochgilphead is the administrative centre of Argyll and Bute — civic building contracts include council HQ.",
    "Argyll & Bute Council approved supplier for civic buildings and void turnover across PA31.",
    "Crinan Canal (start point at Ardrishaig) and conservation area require listed-building-safe products.",
    "Significant tourism economy — Kilmartin Glen prehistoric sites drive seasonal visitor hospitality cleaning.",
    "Atlantic exposure means exterior soft-wash, moss removal, and salt-residue cleaning regularly needed.",
  ],
  stats: [
    { value: "12+", label: "Years serving Lochgilphead" },
    { value: "14", label: "PVG-checked local crew" },
    { value: "1,400+", label: "Lochgilphead clients (recurring + one-off)" },
    { value: "98%", label: "Local client retention" },
  ],
  areas: [
    { name: "Lochgilphead Town Centre (PA31)", description: "County town of Argyll with retail units and period properties — commercial contracts." },
    { name: "Lochgilp Street & Argyll Street", description: "Conservation-area streets with listed buildings — listed-building-aware service throughout." },
    { name: "Kilmory & Argyll Park", description: "Premium residential areas — luxury recurring cleans and upholstery care." },
    { name: "Lochside & Drimvore", description: "Established residential streets — recurring family home cleans." },
    { name: "Ardrishaig & Cairndow (rural fringe)", description: "Village settlements — recurring domestic and holiday-let turnover work." },
    { name: "Tarbert & Inveraray (rural fringe)", description: "Coastal village settlements — recurring domestic and exterior soft-wash work." },
  ],
  processSteps: [
    { step: "01", title: "Tell us your space", description: "Share your square footage, frequency, and priorities via our 60-second form or a quick call. We know Lochgilphead postcodes inside out — no need to give detailed directions." },
    { step: "02", title: "Get a transparent quote", description: "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done. Same pricing across all of Scotland." },
    { step: "03", title: "We match your Lochgilphead crew", description: "We assign a PVG-checked, uniformed Lochgilphead-based crew that fits your space and preferences. You get the same team every visit — they learn your home or building inside out." },
    { step: "04", title: "Sit back & relax", description: "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee — same in every location." },
  ],
  testimonials: [
    { name: "Fiona McAllister", role: "Homeowner · Lochgilphead", quote: "We've used three other services over the past decade in Lochgilphead. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked. The same crew every fortnight — they know our dogs' names.", rating: 5 },
    { name: "Callum Ross", role: "Office Manager · Lochgilphead business", quote: "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences, and they turned up reliably through the worst winter weather Lochgilphead had in 20 years.", rating: 5 },
    { name: "Eilidh Drummond", role: "Letting Agency Director · Borders & South-West", quote: "I manage 240 tenancies across Borders & South-West. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness from Lochgilphead tenants in 18 months.", rating: 5 },
  ],
  faqs: [
    { q: "Do you cover all of Lochgilphead? What postcodes?", a: "Yes. Our Lochgilphead branch covers every postcode in the local authority footprint — from the town centre to the outer suburbs and surrounding villages. If your specific street isn't listed on this page, give us a call on +44 7735 322362 — we probably still cover it. Our crews live locally, so we don't charge travel fees within the Lochgilphead service area." },
    { q: "Are your Lochgilphead cleaners PVG-checked and insured?", a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors. The same standard applies across every Maundy Clean location in Scotland." },
    { q: "How quickly can you start a cleaning service in Lochgilphead?", a: "For most Lochgilphead postcodes, we can have a crew on-site within 48 hours of quote acceptance. Same-day quotes are standard — we aim to respond within one business hour of your enquiry. Move-in/out cleans and one-off deep cleans can often be booked with as little as 24 hours' notice, subject to crew availability." },
    { q: "What cleaning products do you use in Lochgilphead?", a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available. In conservation areas of historic towns, we carry specialist traditional-material chemistry for listed buildings." },
    { q: "What if I'm not satisfied with the Lochgilphead clean?", a: "Tell us within 24 hours and we'll send the crew back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. This applies to every clean in every location we operate." },
    { q: "Do you offer commercial cleaning contracts in Lochgilphead?", a: "Yes. Our Lochgilphead branch handles a full book of commercial contracts — offices, retail, hospitality, medical and dental, holiday-let turnover, schools, nurseries, and industrial units. We can scope anything from a one-room office to a multi-site portfolio. Call us on +44 7735 322362 to arrange a free on-site survey and proposal." },
  ],
  nearbyLocations: [
    { name: "Galashiels", href: "/locations/galashiels", region: "Borders & South-West" },
    { name: "Ayr", href: "/locations/ayr", region: "Borders & South-West" },
    { name: "Kilmarnock", href: "/locations/kilmarnock", region: "Borders & South-West" },
    { name: "Dumfries", href: "/locations/dumfries", region: "Borders & South-West" },
    { name: "Greenock", href: "/locations/greenock", region: "Borders & South-West" },
    { name: "Stranraer", href: "/locations/stranraer", region: "Borders & South-West" },
  ],
  gallery: [
    { src: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg", alt: "Maundy Clean in Lochgilphead", caption: "Local crew working in Lochgilphead" },
    { src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", alt: "Maundy Clean crew on-site in Lochgilphead", caption: "Local Lochgilphead team mid-visit" },
    { src: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", alt: "Residential clean in Lochgilphead", caption: "Living room refresh in a Lochgilphead family home" },
    { src: "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%209.54.33%20PM.jpeg", alt: "Commercial contract in Lochgilphead", caption: "Nightly janitorial at a Lochgilphead office" },
  ],
  servicesByCategory: sharedServicesByCategory,
};


// Maundy Clean — Scotland-focused site data
// 98 services across 8 categories, 24 industries, 72 Scottish locations, 6 pricing tiers, blog, company pages
// Phone: +44 7735 322362

export type NavChild = {
  name: string;
  href: string;
  description?: string;
  popular?: boolean;
  image?: string;
};

export type NavGroup = {
  title: string;
  icon?: string;
  image?: string;
  children: NavChild[];
};

// Curated image library (real, topic-related)
export const IMG = {
  // Hero / general
  heroCrew: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  heroClean: "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  ecoSupplies: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  // Service categories
  residential: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  commercial: "https://sfile.chatglm.cn/images-ppt/7506876cba69.jpg",
  janitorial: "https://sfile.chatglm.cn/images-ppt/2505b6c51368.jpg",
  specialty: "https://sfile.chatglm.cn/images-ppt/0520b4be848e.jpg",
  medical: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
  industrial: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
  outdoor: "https://sfile.chatglm.cn/images-ppt/23f9d6e7b05c.png",
  addons: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  // Industries
  healthcare: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
  hospitality: "https://sfile.chatglm.cn/images-ppt/91c3c3de1361.jpg",
  education: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  office: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  industrialInd: "https://sfile.chatglm.cn/images-ppt/c03f2f1596a1.jpg",
  specialtyInd: "https://sfile.chatglm.cn/images-ppt/155be6f29550.jpg",
  // Scotland cities / regions
  edinburgh: "https://sfile.chatglm.cn/images-ppt/03a7522d88d5.jpg",
  glasgow: "https://sfile.chatglm.cn/images-ppt/2d1f20c0ffe9.jpg",
  aberdeen: "https://sfile.chatglm.cn/images-ppt/f7024e2e1a58.jpg",
  dundee: "https://sfile.chatglm.cn/images-ppt/a2d5407ece51.jpg",
  highlands: "https://sfile.chatglm.cn/images-ppt/92b17b381a85.jpg",
  stirling: "https://sfile.chatglm.cn/images-ppt/333aca9a5389.jpg",
  // Blog
  blogDeep: "https://sfile.chatglm.cn/images-ppt/ca678862de5f.jpg",
  blogElectro: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
  blogMove: "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg",
  blogRoof: "https://sfile.chatglm.cn/images-ppt/23f9d6e7b05c.png",
  blogRestroom: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
  blogOps: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
};

// ---------- 117 SERVICES (8 categories) ----------
export const serviceCategories: NavGroup[] = [
  {
    title: "Residential Cleaning",
    icon: "home",
    image: IMG.residential,
    children: [
      { name: "Recurring Home Cleaning", href: "/services/recurring-home-cleaning", description: "Weekly, fortnightly & monthly plans", popular: true },
      { name: "Deep House Cleaning", href: "/services/deep-house-cleaning", description: "Top-to-bottom detailed clean", popular: true },
      { name: "Move-In / Move-Out Cleaning", href: "/services/move-in-out-cleaning", description: "Full property reset for tenants & owners" },
      { name: "Spring Cleaning", href: "/services/spring-cleaning", description: "Annual top-to-bottom home reset", popular: true },
      { name: "Post-Construction Cleaning", href: "/services/post-construction-cleaning", description: "Builder dust & residue removal", popular: true },
      { name: "Flat Cleaning", href: "/services/flat-cleaning", description: "Tenements, towers & modern flats" },
      { name: "Tenement Cleaning", href: "/services/tenement-cleaning", description: "Edinburgh & Glasgow period tenements" },
      { name: "Cottage Cleaning", href: "/services/cottage-cleaning", description: "Rural, Highland & coastal homes" },
      { name: "Bungalow Cleaning", href: "/services/bungalow-cleaning", description: "Single-storey & accessible homes" },
      { name: "Holiday Let Turnover", href: "/services/holiday-let-turnover", description: "Airbnb & Booking.com guest-ready", popular: true },
      { name: "Maid Service", href: "/services/maid-service", description: "Same cleaner every visit — laundry, beds, light tasks", popular: true },
      { name: "Housekeeping Services", href: "/services/housekeeping-services", description: "Premium home management for larger homes" },
      { name: "Carpet & Rug Cleaning", href: "/services/carpet-rug-cleaning", popular: true },
      { name: "Upholstery Cleaning", href: "/services/upholstery-cleaning", description: "Sofas, armchairs & leather suites", popular: true },
      { name: "Window Cleaning", href: "/services/window-cleaning", description: "Interior & exterior glass", popular: true },
      { name: "Pressure Washing", href: "/services/pressure-washing", description: "Driveways, patios, decking & rendering" },
      { name: "Gutter Cleaning", href: "/services/gutter-cleaning", description: "Hand-clear, flush & downpipe check" },
      { name: "Tile & Grout Cleaning", href: "/services/tile-grout-cleaning", description: "Stone, ceramic & porcelain restoration" },
      { name: "Hardwood Floor Care", href: "/services/hardwood-floor-care", description: "Sanding, refinishing & maintenance" },
      { name: "Blind & Shade Cleaning", href: "/services/blind-shade-cleaning", description: "Venetian, roller, vertical, Roman & pleated" },
    ],
  },
  {
    title: "Commercial Cleaning",
    icon: "building",
    image: IMG.commercial,
    children: [
      { name: "Office Cleaning", href: "/services/office-cleaning", description: "Daily, weekly & after-hours service", popular: true },
      { name: "Corporate Facility Cleaning", href: "/services/corporate-facility-cleaning", description: "HQs, business centres & business parks", popular: true },
      { name: "Retail Store Cleaning", href: "/services/retail-store-cleaning", description: "High-street, shopping centre & boutique", popular: true },
      { name: "Restaurant Cleaning", href: "/services/restaurant-cleaning", description: "FOH, BOH & kitchen deep cleans" },
      { name: "Café & Coffee Shop Cleaning", href: "/services/cafe-coffee-shop-cleaning", description: "Espresso zone & EHO-compliant" },
      { name: "Gym & Fitness Centre Cleaning", href: "/services/gym-fitness-cleaning", description: "Disinfection & changing rooms", popular: true },
      { name: "Bank & Financial Office Cleaning", href: "/services/bank-financial-office-cleaning", description: "PCI-DSS aware, GDPR aligned, dual-control keyholding", popular: true },
      { name: "Showroom Cleaning", href: "/services/showroom-cleaning", description: "Cars, kitchens, bathrooms & luxury retail" },
      { name: "Warehouse Cleaning", href: "/services/warehouse-cleaning", description: "Distribution centres & logistics hubs" },
      { name: "Distribution Centre Cleaning", href: "/services/distribution-centre-cleaning", description: "24/7 fulfilment-ready, MHE-aware, BRCGS storage hygiene" },
      { name: "Car Park Cleaning", href: "/services/car-park-cleaning", description: "Multi-storey, underground & surface" },
      { name: "Event Venue Cleaning", href: "/services/event-venue-cleaning", description: "Concerts, conferences, stadia & weddings" },
      { name: "Co-Working Space Cleaning", href: "/services/co-working-space-cleaning", description: "Hot-desks, meeting rooms & shared facilities" },
      { name: "Salon & Spa Cleaning", href: "/services/salon-spa-cleaning", description: "Hair salons, beauty spas & aesthetics clinics" },
      { name: "Auto Dealership Cleaning", href: "/services/auto-dealership-cleaning", description: "Main dealers, used car & EV showrooms" },
      { name: "Property Management Cleaning", href: "/services/property-management-cleaning", description: "Communal areas for factors & HAs", popular: true },
    ],
  },
  {
    title: "Janitorial & Facility",
    icon: "clipboard-list",
    image: IMG.janitorial,
    children: [
      { name: "Day Porter Services", href: "/services/day-porter-services", description: "On-site attendant all day", popular: true },
      { name: "Nightly Janitorial", href: "/services/nightly-janitorial", description: "After-hours office & facility cleaning", popular: true },
      { name: "Restroom Sanitation", href: "/services/restroom-sanitation", description: "Premium washroom cleaning & odour control", popular: true },
      { name: "Rubbish & Recycling", href: "/services/rubbish-recycling", description: "Segregated collection, baling & PAS 402 reporting", popular: true },
      { name: "Floor Care & Stripping", href: "/services/floor-care-stripping", description: "VCT, linoleum, rubber, terrazzo, sealed concrete, stone" },
      { name: "VCT Floor Care", href: "/services/vct-floor-care", description: "Vinyl composition tile strip, refinish & burnish" },
      { name: "Marble Polishing", href: "/services/marble-polishing", description: "Diamond-grit restoration & crystallisation", popular: true },
      { name: "High Dusting", href: "/services/high-dusting", description: "MEWP-access dust removal above 3.5m" },
      { name: "Glass Partition Cleaning", href: "/services/glass-partition-cleaning", description: "Streak-free office & commercial glass" },
      { name: "Escalator & Lift Cleaning", href: "/services/escalator-lift-cleaning", description: "Step-tread deep clean, glass polish, handrail sanitisation" },
      { name: "Disinfection Services", href: "/services/disinfection-services", description: "Electrostatic & HSE-approved", popular: true },
      { name: "Pest Control Prep", href: "/services/pest-control-prep", description: "Pre-treatment prep, HEPA vacuuming & EN 14476 post-treatment disinfection" },
    ],
  },
  {
    title: "Specialty Cleaning",
    icon: "sparkles",
    image: IMG.specialty,
    children: [
      { name: "Hoarding Cleanup", href: "/services/hoarding-cleanup", description: "Compassionate, discreet service", popular: true },
      { name: "Biohazard Cleanup", href: "/services/biohazard-cleaning", description: "HSE HSG272 compliant — blood, sharps, sewage, 24/7", popular: true },
      { name: "Crime Scene Cleanup", href: "#" },
      { name: "Trauma Cleanup", href: "#" },
      { name: "Vandalism & Graffiti Removal", href: "#" },
      { name: "Odour Removal", href: "/services/odour-removal", description: "Ozone & thermal fog", popular: true },
      { name: "Mould Remediation Cleaning", href: "/services/mould-remediation-cleaning", description: "HSE HSG272 protocol & moisture report", popular: true },
      { name: "Water Damage Cleaning", href: "/services/water-damage-cleaning", description: "24/7 burst pipes, floods & storm damage", popular: true },
      { name: "Fire & Smoke Restoration Cleaning", href: "/services/fire-smoke-restoration-cleaning", description: "IICRC S700 protocol, insurance-preferred, 24/7", popular: true },
      { name: "Asbestos Cleanup Prep", href: "#" },
      { name: "Lead Dust Cleanup", href: "#" },
      { name: "Drug Lab Cleanup", href: "#" },
    ],
  },
  {
    title: "Medical & Educational",
    icon: "stethoscope",
    image: IMG.medical,
    children: [
      { name: "Medical Office Cleaning", href: "/services/medical-office-cleaning", description: "HSE & GDPR compliant", popular: true },
      { name: "Dental Surgery Cleaning", href: "/services/dental-surgery-cleaning", description: "HTM 01-05 compliant" },
      { name: "Hospital Environmental Services", href: "/services/hospital-environmental-services", description: "NHS Trusts & private hospitals", popular: true },
      { name: "Clinic Cleaning", href: "/services/clinic-cleaning", description: "Aesthetics, physio, podiatry — HTM 01-05 aware, CQC-ready" },
      { name: "Urgent Care Cleaning", href: "#" },
      { name: "Lab & Research Facility Cleaning", href: "/services/lab-research-facility-cleaning", description: "GLP & MHRA aligned, BSL aware, HEPA vacuum" },
      { name: "Veterinary Practice Cleaning", href: "/services/veterinary-practice-cleaning", description: "Vet surgeries & animal hospitals" },
      { name: "School & Nursery Cleaning", href: "/services/school-nursery-cleaning", description: "Child-safe products", popular: true },
      { name: "University Campus Cleaning", href: "/services/university-campus-cleaning", description: "Lecture theatres, labs, libraries & halls", popular: true },
      { name: "Halls of Residence Cleaning", href: "#" },
      { name: "Library Cleaning", href: "/services/library-cleaning", description: "Public, university & archive libraries" },
      { name: "Training Centre Cleaning", href: "#" },
    ],
  },
  {
    title: "Industrial & Manufacturing",
    icon: "factory",
    image: IMG.industrial,
    children: [
      { name: "Manufacturing Plant Cleaning", href: "#" },
      { name: "Food Processing Facility Cleaning", href: "/services/food-processing-facility-cleaning", description: "FSA-compliant sanitation", popular: true },
      { name: "Pharmaceutical Facility Cleaning", href: "#" },
      { name: "Cleanroom Cleaning", href: "/services/cleanroom-cleaning", description: "ISO 14644 pharma, semiconductor & biotech", popular: true },
      { name: "Machine & Equipment Cleaning", href: "#" },
      { name: "Tank & Silo Cleaning", href: "#" },
      { name: "Industrial Floor Scrubbing", href: "#" },
      { name: "Warehouse High Dusting", href: "#" },
      { name: "Loading Bay Cleaning", href: "#" },
      { name: "Paint Booth Cleaning", href: "#" },
    ],
  },
  {
    title: "Outdoor & Exterior",
    icon: "trees",
    image: IMG.outdoor,
    children: [
      { name: "Residential Pressure Washing", href: "/services/residential-pressure-washing", description: "Driveways, patios, render & decking restored with surface-safe variable pressure", popular: true },
      { name: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing", description: "Car parks, forecourts, loading bays & multi-storey decks — out-of-hours" },
      { name: "Soft Wash Roof Cleaning", href: "/services/soft-wash-roof-cleaning", description: "No-damage moss & algae removal", popular: true },
      { name: "Decking & Fence Restoration", href: "/services/decking-fence-restoration", description: "Clean, treat, stain & seal — add 5-10 years to exterior timber" },
      { name: "Concrete Sealing", href: "/services/concrete-sealing", description: "Penetrating & film-forming sealants — 7-10 year protection" },
      { name: "Graffiti Removal", href: "/services/graffiti-removal", description: "Rapid response, surface-safe, any material", popular: true },
      { name: "Window Cleaning — Low Rise", href: "/services/window-cleaning-low-rise", description: "Pure water reach-and-wash for homes & shops up to 4 storeys", popular: true },
      { name: "Window Cleaning — High Rise", href: "/services/window-cleaning-high-rise", description: "IRATA abseil, BMU & MEWP access for commercial towers" },
      { name: "Solar Panel Cleaning", href: "/services/solar-panel-cleaning", description: "Boost efficiency up to 30%", popular: true },
      { name: "Awning Cleaning", href: "/services/awning-cleaning", description: "Canvas, acrylic, PVC & metal awnings — on-site, no removal" },
      { name: "Patio & Paver Cleaning", href: "/services/patio-paver-cleaning", description: "Pressure washing & joint re-sanding" },
      { name: "Pool Surround Cleaning", href: "/services/pool-surround-cleaning", description: "PWTAG-compliant deep clean & anti-slip treatment for wet decks" },
    ],
  },
  {
    title: "Add-On & Specialty Services",
    icon: "plus-circle",
    image: IMG.addons,
    children: [
      { name: "Oven Cleaning", href: "/services/oven-cleaning", description: "Non-caustic, food-safe, 2-hour service", popular: true },
      { name: "Fridge Cleaning", href: "/services/fridge-cleaning", description: "Food-safe sanitisation & deodorising" },
      { name: "Inside-Cabinet Cleaning", href: "/services/inside-cabinet-cleaning", description: "Cupboard interiors, drawer runners & shelf liner refresh" },
      { name: "Garage Cleaning", href: "/services/garage-cleaning", description: "Floor degrease, shelf tidy, tool wipe-down & cobweb removal" },
      { name: "Cellar Cleaning", href: "/services/cellar-cleaning", description: "Damp-aware deep clean for Victorian pantries, stone-flagged & earth-floored cellars" },
      { name: "Loft Cleaning", href: "/services/loft-cleaning", description: "HEPA extraction, insulation-aware, RPE/PPE-suited" },
      { name: "Laundry & Folding Add-On", href: "/services/laundry-folding-add-on", description: "Wash, dry, iron, fold, put away — Marie Kondo-style", popular: true },
      { name: "Ironing Service", href: "/services/ironing-service", description: "Hotel-finish shirts, crisp bedding, pleated kilts", popular: true },
      { name: "Pantry Organisation", href: "/services/pantry-organisation", description: "Decant, label, zone, date-rotate — Pinterest-board finish", popular: true },
      { name: "Wardrobe Organisation", href: "/services/wardrobe-organisation", description: "Declutter, categorise, hang, fold, archive", popular: true },
      { name: "Bin Cleaning", href: "/services/bin-cleaning", description: "Wheelie, kitchen, recycling & food caddy — EN 14476" },
      { name: "Pet Area Sanitisation", href: "/services/pet-area-sanitisation", description: "Litter, beds, bowls, accidents — pet-safe chemistry" },
      { name: "Festive Decorating Prep", href: "/services/festive-decorating-prep", description: "Pre-Christmas deep clean so decorations shine — plus January pack-down", popular: true },
      { name: "Post-Party Cleanup", href: "/services/post-party-cleanup", description: "Glassware, red wine, candle wax, glitter — 24/7", popular: true },
      { name: "Furniture Moving Add-On", href: "/services/furniture-moving-add-on", description: "PAT-tested lifting straps & floor protection — for cleans that need everything moved" },
      { name: "Plant Care Add-On", href: "/services/plant-care-add-on", description: "RHS-trained watering, leaf-shine, pest-check & repotting — runs alongside your clean" },
      { name: "Wall & Skirting Wipe-Down", href: "/services/wall-skirting-wipe-down", description: "Painted walls, wallpaper, dado rails, architraves & skirtings detailed" },
      { name: "Light Fixture Cleaning", href: "/services/light-fixture-cleaning", description: "Chandeliers, pendants, lampshades & wall lights — crystal-by-crystal detailing" },
      { name: "Ceiling Fan Cleaning", href: "/services/ceiling-fan-cleaning", description: "Blade tops & bottoms, motor, light kit, pull chains — re-balanced after clean" },
      { name: "Smart-Home Device Wipe", href: "/services/smart-home-device-wipe", description: "Electronics-safe wipe-down of voice assistants, displays, cameras & sensors" },
      { name: "Electrostatic Disinfection Add-On", href: "/services/electrostatic-disinfection-add-on", description: "EN 14476 virucidal wrap-around disinfection — outbreak response & prevention", popular: true },
      { name: "Bedding Change Service", href: "/services/bedding-change-service", description: "Strip, wash at 60°C, dry, re-make with hospital corners — hotel-standard" },
      { name: "Eco-Friendly Green Clean", href: "/services/eco-friendly-green-clean", description: "EU Ecolabel, low-VOC, plant-based chemistry — same cleaning power, no compromise", popular: true },
    ],
  },
];

// ---------- INDUSTRIES (24) ----------
export const industryCategories: NavGroup[] = [
  {
    title: "Healthcare",
    icon: "stethoscope",
    image: IMG.healthcare,
    children: [
      { name: "Hospitals & NHS Trusts", href: "/industries/hospitals-nhs-trusts", popular: true },
      { name: "GP Surgeries & Clinics", href: "/industries/gp-surgeries-clinics" },
      { name: "Dental Practices", href: "/industries/dental-practices" },
      { name: "Veterinary Practices", href: "/industries/veterinary-practices" },
    ],
  },
  {
    title: "Hospitality & Retail",
    icon: "utensils",
    image: IMG.hospitality,
    children: [
      { name: "Hotels & Resorts", href: "/industries/hotels-resorts", popular: true },
      { name: "Restaurants & QSR", href: "/industries/restaurants-qsr", popular: true },
      { name: "Retail Chains", href: "/industries/retail-chains" },
      { name: "Shopping Centres", href: "/industries/shopping-centres" },
    ],
  },
  {
    title: "Education",
    icon: "graduation-cap",
    image: IMG.education,
    children: [
      { name: "Primary & Secondary Schools", href: "/industries/schools" },
      { name: "Universities & Colleges", href: "/industries/universities-colleges" },
      { name: "Nurseries & Preschools", href: "/industries/nurseries-preschools" },
      { name: "Training & Tutoring Centres", href: "/industries/training-tutoring-centres" },
    ],
  },
  {
    title: "Commercial & Office",
    icon: "building",
    image: IMG.office,
    children: [
      { name: "Corporate Offices", href: "/industries/corporate-offices", popular: true },
      { name: "Co-Working Spaces", href: "/industries/co-working-spaces" },
      { name: "Property Management Firms", href: "/industries/property-management-firms" },
      { name: "Estate Agencies", href: "/industries/estate-agencies" },
    ],
  },
  {
    title: "Industrial",
    icon: "factory",
    image: IMG.industrialInd,
    children: [
      { name: "Food & Beverage Processing", href: "/industries/food-beverage-processing" },
      { name: "Pharma & Life Sciences", href: "/industries/pharma-life-sciences" },
      { name: "Manufacturing Plants", href: "/industries/manufacturing-plants" },
      { name: "Logistics & Warehousing", href: "/industries/logistics-warehousing" },
    ],
  },
  {
    title: "Specialty",
    icon: "sparkles",
    image: IMG.specialtyInd,
    children: [
      { name: "Gyms & Fitness Studios", href: "/industries/gyms-fitness-studios", popular: true },
      { name: "Auto Dealerships", href: "/industries/auto-dealerships" },
      { name: "Salons & Spas", href: "/industries/salons-spas" },
      { name: "Faith-Based Facilities", href: "/industries/faith-based-facilities" },
    ],
  },
];

// ---------- LOCATIONS (72 Scottish cities/towns/regions) ----------
export const locationCategories: NavGroup[] = [
  {
    title: "Greater Glasgow",
    icon: "map-pin",
    image: IMG.glasgow,
    children: [
      { name: "Glasgow", href: "/locations/glasgow", popular: true },
      { name: "Paisley", href: "/locations/paisley" },
      { name: "East Kilbride", href: "/locations/east-kilbride" },
      { name: "Hamilton", href: "/locations/hamilton" },
      { name: "Cumbernauld", href: "/locations/cumbernauld" },
      { name: "Coatbridge", href: "/locations/coatbridge" },
      { name: "Motherwell", href: "/locations/motherwell" },
      { name: "Newton Mearns", href: "/locations/newton-mearns" },
      { name: "Rutherglen", href: "/locations/rutherglen" },
      { name: "Bearsden", href: "/locations/bearsden" },
      { name: "Milngavie", href: "/locations/milngavie" },
      { name: "Bishopbriggs", href: "/locations/bishopbriggs" },
    ],
  },
  {
    title: "Edinburgh & Lothians",
    icon: "map-pin",
    image: IMG.edinburgh,
    children: [
      { name: "Edinburgh", href: "/locations/edinburgh", popular: true },
      { name: "Livingston", href: "/locations/livingston" },
      { name: "Musselburgh", href: "/locations/musselburgh" },
      { name: "Dalkeith", href: "/locations/dalkeith" },
      { name: "Bathgate", href: "/locations/bathgate" },
      { name: "Haddington", href: "/locations/haddington" },
      { name: "Linlithgow", href: "/locations/linlithgow" },
      { name: "Penicuik", href: "/locations/penicuik" },
      { name: "North Berwick", href: "/locations/north-berwick" },
      { name: "Dunbar", href: "/locations/dunbar" },
    ],
  },
  {
    title: "Fife & Central",
    icon: "map-pin",
    image: IMG.dundee,
    children: [
      { name: "Dunfermline", href: "/locations/dunfermline", popular: true },
      { name: "Kirkcaldy", href: "/locations/kirkcaldy" },
      { name: "St Andrews", href: "/locations/st-andrews" },
      { name: "Cupar", href: "/locations/cupar" },
      { name: "Falkirk", href: "/locations/falkirk" },
      { name: "Stirling", href: "/locations/stirling" },
      { name: "Alloa", href: "/locations/alloa" },
      { name: "Crieff", href: "/locations/crieff" },
      { name: "Perth", href: "/locations/perth" },
      { name: "Dundee", href: "/locations/dundee", popular: true },
      { name: "Blairgowrie", href: "/locations/blairgowrie" },
      { name: "Auchterarder", href: "/locations/auchterarder" },
    ],
  },
  {
    title: "Aberdeen & Grampian",
    icon: "map-pin",
    image: IMG.aberdeen,
    children: [
      { name: "Aberdeen", href: "/locations/aberdeen", popular: true },
      { name: "Elgin", href: "/locations/elgin" },
      { name: "Peterhead", href: "/locations/peterhead" },
      { name: "Fraserburgh", href: "/locations/fraserburgh" },
      { name: "Inverurie", href: "/locations/inverurie" },
      { name: "Stonehaven", href: "/locations/stonehaven" },
      { name: "Huntly", href: "/locations/huntly" },
      { name: "Westhill", href: "/locations/westhill" },
      { name: "Portlethen", href: "/locations/portlethen" },
      { name: "Banchory", href: "/locations/banchory" },
    ],
  },
  {
    title: "Highlands & Islands",
    icon: "map-pin",
    image: IMG.highlands,
    children: [
      { name: "Inverness", href: "/locations/inverness", popular: true },
      { name: "Aviemore", href: "/locations/aviemore" },
      { name: "Oban", href: "/locations/oban" },
      { name: "Fort William", href: "/locations/fort-william" },
      { name: "Thurso", href: "/locations/thurso" },
      { name: "Wick", href: "/locations/wick" },
      { name: "Kirkwall (Orkney)", href: "/locations/kirkwall" },
      { name: "Lerwick (Shetland)", href: "/locations/lerwick" },
      { name: "Stornoway (Lewis)", href: "/locations/stornoway" },
      { name: "Portree (Skye)", href: "/locations/portree" },
      { name: "Ballater", href: "/locations/ballater" },
      { name: "Nairn", href: "/locations/nairn" },
      { name: "Dornoch", href: "/locations/dornoch" },
      { name: "Ullapool", href: "/locations/ullapool" },
    ],
  },
  {
    title: "Borders & South-West",
    icon: "map-pin",
    image: IMG.stirling,
    children: [
      { name: "Galashiels", href: "/locations/galashiels" },
      { name: "Ayr", href: "/locations/ayr", popular: true },
      { name: "Kilmarnock", href: "/locations/kilmarnock" },
      { name: "Dumfries", href: "/locations/dumfries" },
      { name: "Greenock", href: "/locations/greenock" },
      { name: "Stranraer", href: "/locations/stranraer" },
      { name: "Troon", href: "/locations/troon" },
      { name: "Irvine", href: "/locations/irvine" },
      { name: "Prestwick", href: "/locations/prestwick" },
      { name: "Melrose", href: "/locations/melrose" },
      { name: "Peebles", href: "/locations/peebles" },
      { name: "Hawick", href: "/locations/hawick" },
      { name: "Dumbarton", href: "/locations/dumbarton" },
      { name: "Lochgilphead", href: "/locations/lochgilphead" },
    ],
  },
];

// ---------- PRICING TIERS (in £) ----------
export const pricingTiers = [
  {
    name: "One-Time Clean",
    tagline: "Single visit, deep results",
    price: "£89",
    unit: "from",
    features: [
      "Studio — 1-bed homes",
      "2-professional crew",
      "Up to 2.5 hours on-site",
      "All supplies & equipment",
      "100% satisfaction guarantee",
    ],
    highlighted: false,
  },
  {
    name: "Weekly",
    tagline: "Best value for active households",
    price: "£62",
    unit: "/visit",
    features: [
      "Same team every week",
      "Priority scheduling",
      "10% member discount",
      "Free re-clean if unhappy",
      "Locked-in rate guarantee",
    ],
    highlighted: true,
  },
  {
    name: "Fortnightly",
    tagline: "Most popular plan",
    price: "£76",
    unit: "/visit",
    features: [
      "Same team every visit",
      "Priority scheduling",
      "7% member discount",
      "Free re-clean if unhappy",
      "Locked-in rate guarantee",
    ],
    highlighted: false,
  },
  {
    name: "Monthly",
    tagline: "Maintenance for lower-traffic homes",
    price: "£97",
    unit: "/visit",
    features: [
      "Same team every visit",
      "Standard scheduling",
      "5% member discount",
      "Free re-clean if unhappy",
      "Locked-in rate guarantee",
    ],
    highlighted: false,
  },
  {
    name: "Commercial",
    tagline: "Tailored for business",
    price: "Custom",
    unit: "",
    features: [
      "On-site consultation",
      "Scope-of-work proposal",
      "Day porter or nightly crew",
      "HSE-compliant supplies",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
  {
    name: "Move In / Out",
    tagline: "Full property reset",
    price: "£179",
    unit: "from",
    features: [
      "Top-to-bottom deep clean",
      "Inside appliances & cabinets",
      "Skirting & walls wiped",
      "Carpet add-on available",
      "Letting-agent approved checklist",
    ],
    highlighted: false,
  },
];

// ---------- BLOG ----------
export const blogPosts = [
  {
    slug: "how-often-deep-clean-home-room-by-room",
    title: "How Often Should You Deep Clean Your Home? A Room-by-Room Guide",
    category: "Residential",
    readTime: "8 min",
    date: "10 Jul 2026",
    excerpt:
      "Frequency matters. We break down exactly how often each room in your home needs a deep clean — from kitchens and bathrooms to bedrooms and home offices — so you can build a realistic cleaning calendar for the Scottish climate.",
    image: IMG.blogDeep,
  },
  {
    slug: "electrostatic-disinfection-office-standard",
    title: "Electrostatic Disinfection: Why It's Now the Office Standard",
    category: "Commercial",
    readTime: "6 min",
    date: "7 Jul 2026",
    excerpt:
      "Post-pandemic, electrostatic spraying moved from a niche hospital protocol to a baseline office service. Here's the science behind it, what it kills, and what it doesn't.",
    image: IMG.blogElectro,
  },
  {
    slug: "move-out-cleaning-checklist-deposit-back",
    title: "Move-Out Cleaning Checklist That Actually Gets Your Deposit Back",
    category: "Move In / Out",
    readTime: "10 min",
    date: "3 Jul 2026",
    excerpt:
      "We've audited 1,200 move-out walk-throughs with Scottish letting agents and pulled out the 47 things they check first. Print this checklist and walk through it the night before handover.",
    image: IMG.blogMove,
  },
  {
    slug: "soft-wash-vs-pressure-washing-roofs",
    title: "Why Soft-Wash Beats Pressure-Washing on Tile & Slate Roofs",
    category: "Exterior",
    readTime: "7 min",
    date: "28 Jun 2026",
    excerpt:
      "High-pressure washing strips granules off slate and tile roofs and voids most manufacturer warranties. Soft-wash uses chemistry, not force — and lasts longer in the damp Scottish climate. Here's the side-by-side.",
    image: IMG.blogRoof,
  },
  {
    slug: "restroom-sanitation-restaurants-beyond-surface-wipe",
    title: "Restroom Sanitation in Restaurants: Beyond the Surface Wipe",
    category: "Industries",
    readTime: "9 min",
    date: "24 Jun 2026",
    excerpt:
      "Environmental Health Officers look for the same six things every visit. We walk through a full restaurant restroom protocol — including the touchpoints 80% of crews miss.",
    image: IMG.blogRestroom,
  },
  {
    slug: "cleaning-schedule-busy-season-framework",
    title: "How to Build a Cleaning Schedule That Survives a Busy Season",
    category: "Operations",
    readTime: "5 min",
    date: "19 Jun 2026",
    excerpt:
      "December is brutal for retail and hospitality. Here's the framework we use with our commercial clients to scale cleaning coverage without burning through the annual budget by November.",
    image: IMG.blogOps,
  },
];

// ---------- COMPANY / ABOUT PAGES ----------
export const companyPages = [
  { name: "About Maundy Clean", href: "/about", description: "Our story, mission & values" },
  { name: "Our Team", href: "/team", description: "Meet the people behind the sparkle" },
  { name: "Service Areas", href: "/service-areas", description: "72 Scottish locations and growing" },
  { name: "Green Commitment", href: "/green-commitment", description: "Eco supplies & low-VOC products" },
  { name: "Press & Media", href: "/press", description: "Newsroom, media kit & press contact" },
  { name: "Partner With Us", href: "/partners", description: "Trade, B2B & refer-a-friend" },
  { name: "Reviews & Testimonials", href: "/reviews", description: "4.9 ★ across 6,200+ reviews" },
  { name: "Pricing", href: "/pricing", description: "Transparent prices, 12-month rate lock", popular: true },
  { name: "Blog", href: "/blog", description: "Cleaning tips & industry insights" },
  { name: "Help Centre / FAQ", href: "/help", description: "Common questions, straight answers" },
  { name: "Contact Us", href: "/contact", description: "Phone, email & Glasgow HQ" },
  { name: "Get a Free Quote", href: "/quote", description: "60-second quote, response within the hour", popular: true },
  { name: "Privacy Policy", href: "/privacy", description: "How we handle & protect your data" },
  { name: "Terms of Service", href: "/terms", description: "Engagement terms, guarantees & SLAs" },
];

// ---------- TESTIMONIALS ----------
export const testimonials = [
  {
    name: "Fiona McAllister",
    role: "Homeowner · Newton Mearns, Glasgow",
    quote:
      "We've used three other services over the past decade. Maundy Clean is the only one that showed up on time, every time, and actually cleaned the skirting boards without being asked.",
    rating: 5,
  },
  {
    name: "Callum Ross",
    role: "Office Manager · Edinburgh tech startup",
    quote:
      "Our team noticed the difference the morning after the first clean. The glass partitions looked invisible. The account manager actually remembers our preferences.",
    rating: 5,
  },
  {
    name: "Iain MacLeod",
    role: "Franchise Owner · 4 hospitality venues, Aberdeen",
    quote:
      "EHO inspection scores went from 'Generally Satisfactory' to 'Excellent' across all four venues within two months. The night crew knows the BOH protocol cold. Worth every penny.",
    rating: 5,
  },
  {
    name: "Eilidh Drummond",
    role: "Letting Agency Director · Dundee",
    quote:
      "I manage 240 tenancies. Move-out turnover used to be my biggest headache. Maundy Clean turns flats in 24 hours now, and I haven't had a single deposit-dispute complaint about cleanliness.",
    rating: 5,
  },
];

// ---------- STATS ----------
export const stats = [
  { value: "12+", label: "Years in business" },
  { value: "6,200+", label: "5-star reviews" },
  { value: "72", label: "Scottish locations" },
  { value: "98", label: "Service types" },
  { value: "98%", label: "Client retention" },
  { value: "24/7", label: "Emergency response" },
];

// ---------- PROCESS STEPS ----------
export const processSteps = [
  {
    step: "01",
    title: "Tell Us Your Space",
    description:
      "Share your square footage, frequency, and priorities via our 60-second form or a quick call. No pushy sales — we just need the basics to scope your project accurately.",
  },
  {
    step: "02",
    title: "Get a Transparent Quote",
    description:
      "Within one business hour you receive an itemised quote. Flat-rate or hourly, your choice. No hidden fees, no surprise add-ons after the work is done.",
  },
  {
    step: "03",
    title: "We Match Your Crew",
    description:
      "We assign a PVG-checked, uniformed crew that fits your space and preferences. You get the same team every visit — they learn your home or building.",
  },
  {
    step: "04",
    title: "Sit Back & Relax",
    description:
      "Show up to a clean space. Rate each visit in one tap. Adjust your plan anytime. Not happy? We re-clean within 24 hours, free. That's the Maundy guarantee.",
  },
];

// ---------- FAQ ----------
export const faqs = [
  {
    q: "Are your cleaners PVG-checked and insured?",
    a: "Every Maundy Clean team member passes a Disclosure Scotland PVG check, plus right-to-work and reference verification. We carry £5m public liability and employer's liability on every crew, and every employee is on payroll — never self-employed contractors.",
  },
  {
    q: "Do I have to be home during the cleaning?",
    a: "No. Most of our recurring clients are at work during their scheduled clean. We use secure key-handling and lockbox protocols, and you'll receive a photo-verified 'crew arrived' notification the moment we enter your home.",
  },
  {
    q: "What cleaning products do you use?",
    a: "We default to eco-labelled, low-VOC products that are safe for kids, pets, and sensitive airways. For commercial clients we can switch to hospital-grade disinfectants. Bring-your-own-products is also available.",
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "Tell us within 24 hours and we'll send a team back to re-clean the missed areas at no charge — no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee.",
  },
  {
    q: "Can I customise my cleaning checklist?",
    a: "Absolutely. Every recurring client gets a personalised checklist in their client portal. Add oven cleaning this week, skip the spare bedroom next week, rotate skirting boards monthly — you're in full control from your phone.",
  },
  {
    q: "Do you offer one-time or same-day cleans?",
    a: "Yes. Same-day availability is limited by postcode, but one-time deep cleans, move-in/out cleans, and post-construction cleans are bookable 7 days a week with as little as 24 hours' notice in most service areas.",
  },
];

// ---------- CONTACT INFO ----------
export const contactInfo = {
  phone: "+44 7735 322362",
  phoneHref: "tel:+447735322362",
  email: "hello@maundyclean.co.uk",
  address: "412 Byres Road, Glasgow, G12 8AS, Scotland",
  vatNumber: "VAT GB 423 1897 56",
  companyNumber: "SC528471",
};

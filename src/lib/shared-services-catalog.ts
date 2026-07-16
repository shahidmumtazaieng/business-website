// Shared catalog of all live Maundy Clean services, grouped by the 8 categories
// used in site-data.ts. This is the same catalog rendered on every location
// landing page — every service is available in every Scottish location we serve.
//
// Source of truth: src/lib/site-data.ts serviceCategories + src/app/services/<slug>/
// (only services with a live page are listed here; "Coming soon" href="#" entries
// are excluded).

export type SharedService = {
  name: string;
  slug: string;
  popular?: boolean;
};

export type SharedServiceCategory = {
  title: string;
  icon: string; // lucide icon name
  blurb: string;
  services: SharedService[];
};

export const sharedServicesByCategory: SharedServiceCategory[] = [
  {
    title: "Residential Cleaning",
    icon: "home",
    blurb: "Recurring home cleaning, deep cleans, move-in/out, and specialist home services.",
    services: [
      { name: "Recurring Home Cleaning", slug: "recurring-home-cleaning", popular: true },
      { name: "Deep House Cleaning", slug: "deep-house-cleaning", popular: true },
      { name: "Move-In / Move-Out Cleaning", slug: "move-in-out-cleaning" },
      { name: "Spring Cleaning", slug: "spring-cleaning", popular: true },
      { name: "Post-Construction Cleaning", slug: "post-construction-cleaning", popular: true },
      { name: "Flat Cleaning", slug: "flat-cleaning" },
      { name: "Tenement Cleaning", slug: "tenement-cleaning" },
      { name: "Cottage Cleaning", slug: "cottage-cleaning" },
      { name: "Bungalow Cleaning", slug: "bungalow-cleaning" },
      { name: "Holiday Let Turnover", slug: "holiday-let-turnover", popular: true },
      { name: "Maid Service", slug: "maid-service", popular: true },
      { name: "Housekeeping Services", slug: "housekeeping-services" },
      { name: "Carpet & Rug Cleaning", slug: "carpet-rug-cleaning", popular: true },
      { name: "Upholstery Cleaning", slug: "upholstery-cleaning", popular: true },
      { name: "Window Cleaning", slug: "window-cleaning", popular: true },
      { name: "Pressure Washing", slug: "pressure-washing" },
      { name: "Gutter Cleaning", slug: "gutter-cleaning" },
      { name: "Tile & Grout Cleaning", slug: "tile-grout-cleaning" },
      { name: "Hardwood Floor Care", slug: "hardwood-floor-care" },
      { name: "Blind & Shade Cleaning", slug: "blind-shade-cleaning" },
    ],
  },
  {
    title: "Commercial Cleaning",
    icon: "building",
    blurb: "Offices, retail, hospitality, gyms, showrooms, and property management.",
    services: [
      { name: "Office Cleaning", slug: "office-cleaning", popular: true },
      { name: "Corporate Facility Cleaning", slug: "corporate-facility-cleaning", popular: true },
      { name: "Retail Store Cleaning", slug: "retail-store-cleaning", popular: true },
      { name: "Restaurant Cleaning", slug: "restaurant-cleaning" },
      { name: "Café & Coffee Shop Cleaning", slug: "cafe-coffee-shop-cleaning" },
      { name: "Gym & Fitness Centre Cleaning", slug: "gym-fitness-cleaning", popular: true },
      { name: "Bank & Financial Office Cleaning", slug: "bank-financial-office-cleaning", popular: true },
      { name: "Showroom Cleaning", slug: "showroom-cleaning" },
      { name: "Warehouse Cleaning", slug: "warehouse-cleaning" },
      { name: "Distribution Centre Cleaning", slug: "distribution-centre-cleaning" },
      { name: "Car Park Cleaning", slug: "car-park-cleaning" },
      { name: "Event Venue Cleaning", slug: "event-venue-cleaning" },
      { name: "Co-Working Space Cleaning", slug: "co-working-space-cleaning" },
      { name: "Salon & Spa Cleaning", slug: "salon-spa-cleaning" },
      { name: "Auto Dealership Cleaning", slug: "auto-dealership-cleaning" },
      { name: "Property Management Cleaning", slug: "property-management-cleaning", popular: true },
      { name: "Hotel & Hospitality Cleaning", slug: "hotel-hospitality-cleaning" },
    ],
  },
  {
    title: "Janitorial & Facility",
    icon: "clipboard-list",
    blurb: "Day porters, nightly janitorial, restroom sanitation, floor care, and disinfection.",
    services: [
      { name: "Day Porter Services", slug: "day-porter-services", popular: true },
      { name: "Nightly Janitorial", slug: "nightly-janitorial", popular: true },
      { name: "Restroom Sanitation", slug: "restroom-sanitation", popular: true },
      { name: "Rubbish & Recycling", slug: "rubbish-recycling", popular: true },
      { name: "Floor Care & Stripping", slug: "floor-care-stripping" },
      { name: "VCT Floor Care", slug: "vct-floor-care" },
      { name: "Marble Polishing", slug: "marble-polishing", popular: true },
      { name: "High Dusting", slug: "high-dusting" },
      { name: "Glass Partition Cleaning", slug: "glass-partition-cleaning" },
      { name: "Escalator & Lift Cleaning", slug: "escalator-lift-cleaning" },
      { name: "Disinfection Services", slug: "disinfection-services", popular: true },
    ],
  },
  {
    title: "Specialty Cleaning",
    icon: "sparkles",
    blurb: "Hoarding, biohazard, mould, water and fire restoration — compassionate, HSE-compliant.",
    services: [
      { name: "Hoarding Cleanup", slug: "hoarding-cleanup", popular: true },
      { name: "Biohazard Cleanup", slug: "biohazard-cleaning", popular: true },
      { name: "Odour Removal", slug: "odour-removal", popular: true },
      { name: "Mould Remediation Cleaning", slug: "mould-remediation-cleaning", popular: true },
      { name: "Water Damage Cleaning", slug: "water-damage-cleaning", popular: true },
      { name: "Fire & Smoke Restoration Cleaning", slug: "fire-smoke-restoration-cleaning", popular: true },
      { name: "Graffiti Removal", slug: "graffiti-removal", popular: true },
    ],
  },
  {
    title: "Medical & Educational",
    icon: "stethoscope",
    blurb: "HSE, HTM 01-05, CQC-aware cleaning for clinics, dental surgeries, schools and universities.",
    services: [
      { name: "Medical Office Cleaning", slug: "medical-office-cleaning", popular: true },
      { name: "Dental Surgery Cleaning", slug: "dental-surgery-cleaning" },
      { name: "Hospital Environmental Services", slug: "hospital-environmental-services", popular: true },
      { name: "Clinic Cleaning", slug: "clinic-cleaning" },
      { name: "Lab & Research Facility Cleaning", slug: "lab-research-facility-cleaning" },
      { name: "Veterinary Practice Cleaning", slug: "veterinary-practice-cleaning" },
      { name: "School & Nursery Cleaning", slug: "school-nursery-cleaning", popular: true },
      { name: "University Campus Cleaning", slug: "university-campus-cleaning", popular: true },
      { name: "Library Cleaning", slug: "library-cleaning" },
    ],
  },
  {
    title: "Industrial & Manufacturing",
    icon: "factory",
    blurb: "FSA-compliant food processing, ISO 14644 cleanroom, and pharma-aligned services.",
    services: [
      { name: "Food Processing Facility Cleaning", slug: "food-processing-facility-cleaning", popular: true },
      { name: "Cleanroom Cleaning", slug: "cleanroom-cleaning", popular: true },
    ],
  },
  {
    title: "Outdoor & Exterior",
    icon: "trees",
    blurb: "Pressure washing, soft-wash roof cleaning, solar panels, and abseil-access window cleaning.",
    services: [
      { name: "Residential Pressure Washing", slug: "residential-pressure-washing", popular: true },
      { name: "Commercial Pressure Washing", slug: "commercial-pressure-washing" },
      { name: "Soft Wash Roof Cleaning", slug: "soft-wash-roof-cleaning", popular: true },
      { name: "Decking & Fence Restoration", slug: "decking-fence-restoration" },
      { name: "Concrete Sealing", slug: "concrete-sealing" },
      { name: "Graffiti Removal (Exterior)", slug: "graffiti-removal", popular: true },
      { name: "Window Cleaning — Low Rise", slug: "window-cleaning-low-rise", popular: true },
      { name: "Window Cleaning — High Rise", slug: "window-cleaning-high-rise" },
      { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", popular: true },
      { name: "Awning Cleaning", slug: "awning-cleaning" },
      { name: "Patio & Paver Cleaning", slug: "patio-paver-cleaning" },
      { name: "Pool Surround Cleaning", slug: "pool-surround-cleaning" },
    ],
  },
  {
    title: "Add-On & Specialty Services",
    icon: "plus-circle",
    blurb: "Oven, fridge, garage, loft, laundry, ironing, organisation, and eco-friendly add-ons.",
    services: [
      { name: "Oven Cleaning", slug: "oven-cleaning", popular: true },
      { name: "Fridge Cleaning", slug: "fridge-cleaning" },
      { name: "Inside-Cabinet Cleaning", slug: "inside-cabinet-cleaning" },
      { name: "Garage Cleaning", slug: "garage-cleaning" },
      { name: "Cellar Cleaning", slug: "cellar-cleaning" },
      { name: "Loft Cleaning", slug: "loft-cleaning" },
      { name: "Laundry & Folding Add-On", slug: "laundry-folding-add-on", popular: true },
      { name: "Ironing Service", slug: "ironing-service", popular: true },
      { name: "Pantry Organisation", slug: "pantry-organisation", popular: true },
      { name: "Wardrobe Organisation", slug: "wardrobe-organisation", popular: true },
      { name: "Bin Cleaning", slug: "bin-cleaning" },
      { name: "Pet Area Sanitisation", slug: "pet-area-sanitisation" },
      { name: "Festive Decorating Prep", slug: "festive-decorating-prep", popular: true },
      { name: "Post-Party Cleanup", slug: "post-party-cleanup", popular: true },
      { name: "Furniture Moving Add-On", slug: "furniture-moving-add-on" },
      { name: "Plant Care Add-On", slug: "plant-care-add-on" },
      { name: "Wall & Skirting Wipe-Down", slug: "wall-skirting-wipe-down" },
      { name: "Light Fixture Cleaning", slug: "light-fixture-cleaning" },
      { name: "Ceiling Fan Cleaning", slug: "ceiling-fan-cleaning" },
      { name: "Smart-Home Device Wipe", slug: "smart-home-device-wipe" },
      { name: "Electrostatic Disinfection Add-On", slug: "electrostatic-disinfection-add-on", popular: true },
      { name: "Bedding Change Service", slug: "bedding-change-service" },
      { name: "Eco-Friendly Green Clean", slug: "eco-friendly-green-clean", popular: true },
    ],
  },
];

// Total service count (for hero stat)
export const totalServicesCount = sharedServicesByCategory.reduce(
  (acc, cat) => acc + cat.services.length,
  0,
);

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Leaf,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Wind,
  SprayCan,
  Crown,
  Users,
  Home,
  KeyRound,
  Hammer,
  Zap,
  UserCheck,
  CalendarCheck,
  Award,
  Gem,
  Building2,
  Briefcase,
  Phone,
  ClipboardList,
  UtensilsCrossed,
  HeartPulse,
  Server,
  Microwave,
  Printer,
  Keyboard,
  DoorOpen,
  Trees,
  Flame,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistWorkstation:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistFloor:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistWashroom:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseRestaurant:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  leaseDisinfection:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
// ============================================================
const NEAR_ME_LOCATIONS: { city: string; slug: string }[] = [
  { city: "Glasgow", slug: "glasgow" },
  { city: "Edinburgh", slug: "edinburgh" },
  { city: "Aberdeen", slug: "aberdeen" },
  { city: "Dundee", slug: "dundee" },
  { city: "Stirling", slug: "stirling" },
  { city: "Perth", slug: "perth" },
  { city: "Falkirk", slug: "falkirk" },
  { city: "Inverness", slug: "inverness" },
  { city: "Ayr", slug: "ayr" },
  { city: "Kilmarnock", slug: "kilmarnock" },
  { city: "Livingston", slug: "livingston" },
  { city: "East Kilbride", slug: "east-kilbride" },
  { city: "Paisley", slug: "paisley" },
  { city: "Hamilton", slug: "hamilton" },
  { city: "Motherwell", slug: "motherwell" },
  { city: "Dunfermline", slug: "dunfermline" },
  { city: "Kirkcaldy", slug: "kirkcaldy" },
  { city: "Musselburgh", slug: "musselburgh" },
  { city: "Dalkeith", slug: "dalkeith" },
  { city: "Bathgate", slug: "bathgate" },
  { city: "Cumbernauld", slug: "cumbernauld" },
  { city: "Coatbridge", slug: "coatbridge" },
  { city: "St Andrews", slug: "st-andrews" },
  { city: "Elgin", slug: "elgin" },
  { city: "Peterhead", slug: "peterhead" },
  { city: "Stonehaven", slug: "stonehaven" },
  { city: "Inverurie", slug: "inverurie" },
  { city: "Oban", slug: "oban" },
  { city: "Fort William", slug: "fort-william" },
  { city: "Aviemore", slug: "aviemore" },
  { city: "Dumfries", slug: "dumfries" },
  { city: "Stranraer", slug: "stranraer" },
  { city: "Wick", slug: "wick" },
  { city: "Thurso", slug: "thurso" },
  { city: "Lerwick", slug: "lerwick" },
  { city: "Kirkwall", slug: "kirkwall" },
];

// ============================================================
// Section 0 - Full-width hero banner
// Semantic H1: "Professional Office Deep Cleaning Services Scotland"
// ============================================================

export function OfficeCleaningSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean uniformed commercial cleaning crew resetting an open-plan office in Glasgow after hours"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)]/95 via-[var(--brand-dark)]/75 to-[var(--brand-dark)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-xs font-semibold text-white mb-5"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--gold)] animate-pulse-ring" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--gold)]" />
            </span>
            Commercial Office Deep Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Office Deep Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Meticulous Workspace Maintenance, Reliable Commercial Standards, and the Maundy Tradition
            of Excellence. In the competitive business landscapes of Glasgow, Edinburgh, and across
            the Central Belt, presentation is everything. A clean office is not merely an aesthetic
            choice &mdash; it is critical for staff morale, protecting your professional image, and
            keeping your workforce healthy by keeping germs and bugs at bay. At Maundy Clean, we
            understand that every organization functions differently, which is why we act as a
            partner that supports your unique operational needs, workflow, and schedule. Whether you
            require a one-off technical reset or a transition into a bespoke maintenance plan, our
            service ensures your office remains front-line ready.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Book My Free Site Survey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Office Cleaning Checklist
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5</span>
              <span className="text-white/70">&middot; 6,200+ reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[var(--gold)]" /> Fully Insured &amp; PVG-Checked
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> HSE-Compliant Supplies
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> After-Hours &amp; Early-Morning
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 - Long-form semantic SEO intro
// Sits right after the hero, before the existing ServiceOverview.
// ============================================================

export function OfficeCleaningSeoIntro() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Strategic commercial workspace care &middot; Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Commercial Workspace Care
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Built on the <strong className="font-semibold text-[var(--ink)]">Maundy tradition of
            service and care</strong>, we provide a premium alternative to impersonal national
            agencies and inconsistent gig-economy contractors. While we are widely recognized as the
            authority for recurring home cleaning in Scotland&rsquo;s finest residences, we bring
            that same level of intimacy, technical detail, and sanctuary care to the corporate
            world. Whether you manage an open-plan tech HQ in Edinburgh, a legal chambers in
            Aberdeen, or a single-occupancy suite in Falkirk, our service is built on trust,
            consistency, and a deep understanding of commercial compliance. Every visit blends
            GDPR-aware workstation care, HSE-compliant chemistry, and a 100% satisfaction guarantee
            &mdash; treating your business with the meticulous care it deserves.
          </p>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "Visits completed in 2025", value: "99.6%" },
            { label: "PVG-checked crews", value: "100%" },
            { label: "From per visit", value: "&pound;89" },
            { label: "Star rating", value: "4.9/5" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--cream)] rounded-xl p-4 border border-[var(--brand)]/10 text-center"
            >
              <div
                className="font-display font-extrabold text-2xl text-gradient-brand"
                dangerouslySetInnerHTML={{ __html: stat.value }}
              />
              <div className="text-xs text-[var(--muted-foreground)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why MaundyClean is Scotland's Choice for Reliable Commercial Deep Cleaning
// (Semantic H2: "Why Maundy Clean is Scotland's Choice for Reliable Commercial Deep Cleaning")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "Vetted & Uniformed Professionals",
    description:
      "We understand that a commercial cleaning service is only as good as its staff. Every Maundy Clean professional is fully trained, Disclosure Scotland PVG-checked, background-checked, insured to &pound;5m public liability, and well-presented to represent your business with the highest standards. Our crews carry photo ID, branded uniforms, and arrive in liveried vehicles &mdash; your reception team will recognise them on sight, every visit. We never use subcontractors or gig-economy labour; every cleaner on your site is a PAYE employee of Maundy Clean, accountable to our name and our training.",
  },
  {
    icon: Users,
    title: "The Same Trusted Team",
    description:
      "Reliability and trust are paramount in a commercial setting. We ensure the same vetted team manages your account to build a deep understanding of your operational needs, workspace layout, alarm codes, key-handling protocols, and the quirks of your building. Crew consistency means someone who cleans your office every Tuesday night knows that the third-floor meeting room gets heavy use on Mondays, knows which desk surfaces are screen-sensitive, and knows your access preferences without re-briefing. When the regular crew lead is on leave, we send a trained backup who has been briefed on your site specifics &mdash; and we tell you in advance.",
  },
  {
    icon: Clock,
    title: "Flexible Operational Hours",
    description:
      "We work when it suits you &mdash; whether that is early morning, early evening, or through the night &mdash; to minimize any inconvenience to your day-to-day activities. The most common windows are 6pm-10pm (after your team logs off) or 5am-7am (before your team arrives), but we also support split schedules (light touch during the day, deep clean after hours) and 24/7 emergency callout for flood, fire, or post-incident restoration. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols &mdash; keys stored in a coded safe, alarm codes encrypted, never labelled with your address.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "We utilize only certified child-safe and pet-safe products (essential for offices with family-friendly zones, creches, or &ldquo;puppy days&rdquo;) and environmentally friendly HSE-compliant supplies as standard. COSHH datasheets are available for every product we use, and we default to eco-labelled chemicals with hospital-grade alternatives for medical or food-prep areas. All PPE is provided. Colour-coded microfibre cloths prevent cross-contamination between kitchens, bathrooms, and desk areas. Your sustainability team will love the audit-ready monthly logs; your staff will love the lack of chemical smell when they arrive in the morning.",
  },
];

export function OfficeCleaningSeoWhy() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center mb-14">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.whyCrew}
                alt="Maundy Clean commercial cleaning crew &mdash; uniformed, PVG-checked, and GDPR-trained for office service"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Trusted Presence in Your Workplace
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, uniformed, and trained in commercial compliance.
                  Same crew every visit &mdash; never a rotating cast of strangers.
                </p>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl p-3 border border-[var(--border)] w-36"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[var(--gold-dark)] fill-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Visit completion</div>
                  <div className="text-xs font-bold text-[var(--ink)]">99.6% in 2025</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Copy side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
              Why choose Maundy Clean
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why Maundy Clean is Scotland&rsquo;s Choice for Reliable Commercial Deep Cleaning
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While national agencies often provide impersonal and inconsistent service, Maundy Clean
              is a local specialist focused on building high-trust relationships with businesses in
              Glasgow, Edinburgh, Falkirk, Stirling, Paisley, Aberdeen, and across the Central Belt.
              We act as a strategic business partner rather than a basic janitorial vendor &mdash;
              combining vetted uniformed professionals, the same trusted team every visit, flexible
              operational hours, and HSE-compliant eco-friendly supplies as standard.
            </p>

            <div className="space-y-3">
              {TRUST_CARDS.slice(0, 2).map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--border)]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--brand)]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--ink)] mb-1">
                        {card.title}
                      </h3>
                      <p
                        className="text-sm text-[var(--muted-foreground)] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Third + fourth cards as a 2-column strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRUST_CARDS.slice(2, 4).map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[var(--border)] flex flex-col md:flex-row items-start gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[var(--brand)]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
                    {card.title}
                  </h3>
                  <p
                    className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 3 - Our Total Office Hygiene & Maintenance Checklist
// (Semantic H2: "Our Total Office Hygiene & Maintenance Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. General Office Areas & Workstations
//   2. Specialized Floor & Fabric Care
//   3. Washroom & Kitchen "Special Treatment"
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Building2,
    image: IMG.checklistWorkstation,
    imageAlt: "Open-plan office workstations being sanitised with anti-static screen-safe wipes by Maundy Clean",
    title: "General Office Areas & Workstations",
    description:
      "The technical core of every commercial visit. Workstations are the highest-risk zone in any office &mdash; keyboards and phones harbour more bacteria than a toilet seat, and the wrong cleaning chemistry on a &pound;2,000 monitor causes permanent damage. We follow a GDPR-aware protocol: don&rsquo;t touch documents on desks, don&rsquo;t plug or unplug devices, don&rsquo;t photograph the space. Then we get to work on the surfaces.",
    points: [
      {
        icon: Keyboard,
        title: "High-Touch Sanitization",
        text: "Deep cleaning of keyboards, phones, and desks to keep staff healthy. Each device is treated with 70% isopropyl on a non-abrasive swab &mdash; never sprayed directly &mdash; and dried immediately. Phones, headsets, mice, and trackpads get the same protocol. This is the single highest-impact task for reducing winter illness absence.",
      },
      {
        icon: Sparkles,
        title: "Surface Restoration",
        text: "Meticulous dusting of all fixtures and fittings. We polish wood, glass, and mirrors to a streak-free shine using pH-neutral screen-safe cloths &mdash; colour-coded so the cloth that cleaned a bathroom never touches a desk. Monitor stands, cable trays, planters, and light switches all get detailed attention.",
      },
      {
        icon: DoorOpen,
        title: "Often-Missed Details",
        text: "Our cleaners meticulously wipe visible skirting boards, door frames, and even the inside of the windows. These are the surfaces that visiting clients notice subconsciously &mdash; a dusty skirting board undermines a polished reception. We hand-detail every perimeter surface so the room feels genuinely reset, not just the centre of the floor.",
      },
    ],
  },
  {
    icon: Droplets,
    image: IMG.checklistFloor,
    imageAlt: "Commercial hard floor being machine-scrubbed and disinfected in a Glasgow office reception",
    title: "Specialized Floor & Fabric Care",
    description:
      "Office floors take more punishment than any residential surface &mdash; hundreds of footsteps per day, spilled coffee, chair castors grinding grit into the finish. Generic mopping destroys commercial flooring over time. Our floor protocol uses the right machine for the right surface: hot-water extraction for carpet, low-moisture scrubbing for hard floors, and dry-only methods for laminate joins.",
    points: [
      {
        icon: SprayCan,
        title: "Office Carpet Cleaning",
        text: "Utilizing the most up-to-date technology to remove deep-seated city-centre dust, stains, and allergens. We use hot-water extraction (HWE) with a commercial wand for open areas and a hand tool for under desks and along edges. Quarterly extraction is included on Medium and Large plans at no extra cost &mdash; the single most effective way to extend carpet life from 5 years to 10+.",
      },
      {
        icon: Wind,
        title: "Hard Floor Maintenance",
        text: "Intensive vacuuming and disinfecting of all hard floors to kill germs and maintain a fresh, welcoming scent. We use a low-moisture flat-mop system with separate dirty-water extraction &mdash; never a string mop that just spreads contamination. For vinyl, LVT, and polished concrete we add a periodic machine scrub and re-seal programme on a quarterly cycle.",
      },
    ],
  },
  {
    icon: Shield,
    image: IMG.checklistWashroom,
    imageAlt: "Office washroom being deep sanitised by Maundy Clean crew in an Edinburgh corporate suite",
    title: "Washroom & Kitchen &ldquo;Special Treatment&rdquo;",
    description:
      "Washrooms and kitchens make or break staff satisfaction with a cleaning service. A spotless office with a smelly washroom is a failure. Our &ldquo;special treatment&rdquo; protocol for these zones uses hospital-grade disinfectants, separate colour-coded cloths (red for toilets, blue for sinks, green for kitchens), and a final-fragrance pass that leaves the space genuinely fresh &mdash; not masked with cheap air freshener.",
    points: [
      {
        icon: HeartPulse,
        title: "Deep Sanitization",
        text: "Disinfecting all ceramic items, toilets, and sinks to the highest industry standards. We descale toilets with a non-abrasive acid, disinfect with a EN 1276-certified bacteriacide, and polish chrome fittings to a streak-free shine. Mirrors are squeegeed, never wiped, for a flawless finish. Sanitary bins are checked, emptied, and replaced. Extractor vents are vacuumed to remove dust build-up that harbours bacteria.",
      },
      {
        icon: Microwave,
        title: "Kitchen Refresh",
        text: "Thorough cleaning of worktops, splashbacks, and the exterior of all communal appliances, including ovens, hobs, and fridges. Sinks are descaled and sanitised. Microwave interiors are wiped (the most-requested detail by office staff). Fridge exteriors are cleaned; interiors are available as an add-on or on a rota. Dishwashers are emptied if a cycle has completed. Floors are mopped with a food-safe sanitiser.",
      },
    ],
  },
];

export function OfficeCleaningSeoChecklist() {
  return (
    <section id="checklist" className="py-16 lg:py-24 bg-background scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Beyond the basic surface wipe
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Office Hygiene &amp; Maintenance Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our office deep cleaning follows a rigorous, agency-approved checklist that provides far
            more than a basic surface wipe. We offer technical depth in every room &mdash; from
            GDPR-aware workstation care, through specialized floor and fabric maintenance, to the
            hospital-grade &ldquo;special treatment&rdquo; we apply to washrooms and kitchens. Below
            is the scope we deliver as standard on every visit, regardless of contract size.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {CHECKLIST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[var(--border)] shadow-sm flex flex-col"
              >
                <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p
                    className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <ul className="space-y-3 mt-auto">
                    {item.points.map((point) => {
                      const PointIcon = point.icon;
                      return (
                        <li
                          key={point.title}
                          className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85"
                        >
                          <PointIcon className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                          <span>
                            <strong className="font-semibold text-[var(--ink)]">{point.title}</strong>
                            &mdash; <span dangerouslySetInnerHTML={{ __html: point.text }} />
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 - 3-Step "Hassle-Free" Booking Process
// (Semantic H3: "The MaundyClean 3-Step 'Hassle-Free' Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Site Survey & Instant Quote",
    description:
      "Contact us today for a free site survey with our management team. We measure the space, identify priority zones, review access protocols, and discuss timing windows &mdash; then send you an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months, with no contracts tying you in and no on-the-day upsells.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick the right team with in-depth knowledge of your specific furnishings, tech requirements, and operational quirks. Your allocated crew lead is briefed on your site, GDPR-trained if you handle sensitive data, and introduced to your reception or facilities team on the first visit. The same crew returns for every scheduled session &mdash; building real knowledge of your office&rsquo;s high-traffic zones, screen-sensitive surfaces, and access preferences. We never rotate crews unless you ask us to.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Pristine Workplace",
    description:
      "Experience a workspace that looks, smells, and feels fresh, backed by our Maundy Clean 100% satisfaction guarantee. You receive monthly cleaning logs showing every visit, arrival and departure times, tasks completed, and any issues flagged. Your dedicated account manager visits quarterly for a walk-through and proactively raises any concerns before they become complaints. From &pound;89 per visit for a small office through to a fully bespoke contract for a multi-floor headquarters.",
  },
];

export function OfficeCleaningSeoBooking() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Hassle-free booking
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            The 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be uncomplicated and straightforward,
            addressing the slow response times common among local competitors. From site survey to
            first clean in under a week &mdash; no friction, no waiting, no surprises. Just a clean
            office, every visit, on schedule.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[var(--brand)]/10 via-[var(--brand)]/30 to-[var(--brand)]/10" />

          {BOOKING_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-white rounded-2xl p-7 border border-[var(--border)] shadow-sm text-center"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-5">
                  <div className="absolute inset-0 rounded-full bg-[var(--brand-light)]" />
                  <div className="absolute inset-2 rounded-full bg-white border border-[var(--brand)]/20" />
                  <Icon className="relative w-8 h-8 text-[var(--brand)]" />
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[var(--brand)] text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight">
                  {step.title}
                </h3>
                <p
                  className="text-sm text-[var(--muted-foreground)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 px-7 h-12 text-base"
            asChild
          >
            <Link href="/quote">
              Book My Free Site Survey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Semantic Interlinking: Commercial Solutions for Every Stage
// (Semantic H2: "Commercial Solutions for Every Stage")
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: UtensilsCrossed,
    title: "Industry-Specific &middot; Restaurant Deep Cleaning",
    href: "/services/restaurant-cleaning",
    image: IMG.leaseRestaurant,
    imageAlt: "Scottish restaurant kitchen being deep cleaned to environmental health standards by Maundy Clean",
    description:
      "We provide specialist Restaurant Deep Cleaning to help hospitality businesses meet rigorous health and safety standards. From kitchen extraction canopy degreasing to fryer boil-outs and food-safe surface sanitisation, our hospitality team understands HACCP, EHO inspection standards, and the deadlines that come with operating a commercial kitchen in Glasgow or Edinburgh.",
    cta: "Explore restaurant cleaning",
  },
  {
    icon: KeyRound,
    title: "Transitioning Spaces &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty commercial suite being deep cleaned for lease handover by Maundy Clean in Scotland",
    description:
      "Moving offices? Our End of Tenancy Cleaning is perfect for businesses looking to fulfill lease requirements and secure their full deposit back. We work to the letting agent&rsquo;s inventory, restore the suite to its original condition, and come back free of charge if anything is flagged on the inspection &mdash; the most stress-free way to close out a commercial lease.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from a refurbished Scottish office",
    description:
      "If you&rsquo;ve had building work or office improvements, our After Builders Clean is designed to remove heavy layers of construction dust. Fine dust left on a commercial floor acts like sandpaper under foot traffic &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage equipment, soft furnishings, or your team&rsquo;s lungs on the first day back.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets &middot; Antiviral Sanitisation",
    href: "/services/disinfection-services",
    image: IMG.leaseDisinfection,
    imageAlt: "Antiviral fogging and electrostatic disinfection being applied to an Edinburgh office during flu season",
    description:
      "Book an Antiviral Sanitisation or &ldquo;Covid-19 Deep Cleaning &amp; Fogging&rdquo; session to keep your environment germ-free. Our electrostatic disinfection service covers every surface &mdash; including the underside of desks and the back of monitors &mdash; with an EN 14476-certified virucide. Ideal for flu season, post-illness, or as a quarterly compliance reset for medical and food-prep environments.",
    cta: "Explore disinfection services",
  },
];

export function OfficeCleaningSeoInterlinking() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Beyond the daily clean &middot; commercial milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Commercial Solutions for Every Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our office deep cleaning services are the heartbeat of your property&rsquo;s maintenance,
            but we provide specialized support for major transitions &mdash; from industry-specific
            hospitality deep cleans, through lease handovers and post-renovation dust clear-outs,
            to quarterly antiviral hygiene resets. The same trusted crew can step up whenever your
            business needs more than a standard visit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERLINK_SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={sol.href}
                  className="group block bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/40 hover:-translate-y-1 transition-all h-full"
                >
                  <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/80 via-[var(--brand-dark)]/20 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-[var(--brand)]" />
                    </div>
                    <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-base text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p
                      className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: sol.description }}
                    />
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] group-hover:text-[var(--brand-dark)]">
                      {sol.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 6 - "Near Me" Location Internal Links
// (Semantic H2: "Office Cleaning Services Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function OfficeCleaningSeoNearMe() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
          {/* Left: copy + map image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
              Local commercial cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Office Cleaning Services Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;office cleaning near me&rdquo; or &ldquo;commercial cleaning
              company near me&rdquo; in Scotland? Maundy Clean covers 72+ towns and cities across
              the Central Belt, Highlands, Borders, and Islands. Same PVG-checked crews, same
              HSE-compliant supplies, same dedicated account manager &mdash; wherever your business
              happens to be. Find your local office cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean office cleaning service coverage areas"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    72+ Scottish towns covered
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Same PVG-checked crews, same 100% satisfaction guarantee &mdash; from Glasgow to
                  Lerwick.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: location grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 lg:p-8 border border-[var(--border)] shadow-sm"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-bold text-lg text-[var(--ink)]">
                Find your local commercial crew
              </h3>
              <span className="text-xs text-[var(--muted-foreground)]">36 of 72 locations</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5">
              {NEAR_ME_LOCATIONS.map((loc, i) => (
                <motion.div
                  key={loc.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.015, 0.6) }}
                >
                  <Link
                    href={`/services/office-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> office cleaning</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don&rsquo;t see your town? We add new postcodes every month.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  href="/services/office-cleaning-near-me"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4" />
                  Browse the near-me directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  View all 72 Scottish locations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SEO long-form paragraph for "near me" search intent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Our local commercial cleaning crews operate across Glasgow&rsquo;s financial district,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s granite-built business parks, Dundee&rsquo;s
            tech quarter, and the Highlands &mdash; from Inverness to Thurso, Fort William to
            Lerwick. Whether you&rsquo;re searching for daily office cleaning in Glasgow, after-hours
            janitorial service in Edinburgh, GDPR-aware cleaning for a legal firm in Aberdeen, or
            restaurant kitchen deep cleaning anywhere in between, Maundy Clean assigns a vetted,
            PAYE-employed crew that stays with you for the long run. Same crew, same standard, same
            locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Book Your Office Deep Clean?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function OfficeCleaningSeoFinalCta() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--brand-dark)] relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--gold)]/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[var(--brand)]/30 blur-3xl" />

      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-3 inline-block">
            Ready to book your office deep clean?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Book Your Office Deep Clean?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free site survey with our management team and receive an itemised proposal within
            2 business days. PVG-checked crews, GDPR-aware workstation care, HSE-compliant supplies,
            monthly cleaning logs, and a 100% satisfaction guarantee &mdash; from &pound;89 per
            visit for a small office through to a fully bespoke contract for a multi-floor
            headquarters. No pushy sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Book My Free Site Survey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Office Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 - SEO FAQ block
// (Semantic H2: "Frequently Asked Questions")
// 6 Q&As - 3 from the user brief (own equipment, insured, all sizes)
// + 3 office-specific additions (after-hours access, same crew, missed visit)
// ============================================================

const SEO_FAQS = [
  {
    q: "Do you provide your own equipment?",
    a: "Yes. We supply all of our own professional-grade cleaning equipment and supplies, which are included in your competitive quote. Every crew arrives with commercial-grade vacuums (Sebo BS36/BS46, Henry HVR200), microfibre flat-mop systems with separate dirty-water extraction, colour-coded cloths (red for toilets, blue for sinks, green for kitchens, yellow for desks), HSE-compliant chemicals with COSHH datasheets on file, and PPE. You provide consumables &mdash; bin liners, paper towel, toilet paper, hand soap, dishwasher tablets &mdash; or we can manage consumable restocking for an additional monthly fee so you never run out.",
  },
  {
    q: "Are your cleaners insured for commercial spaces?",
    a: "Absolutely. Maundy Clean is a fully insured, registered professional cleaning company with extensive knowledge of commercial insurance requirements. We hold &pound;5m public liability cover, &pound;5m employer&rsquo;s liability cover, and contingent employers&rsquo; liability. Every crew member carries Disclosure Scotland PVG scheme membership. We can provide enhanced background checks and additional NDAs for offices handling particularly sensitive data (legal, financial, medical) at no extra cost. Certificates of insurance are available on request &mdash; we will not begin work until your facilities team has the documentation they need.",
  },
  {
    q: "Can you clean offices of all sizes?",
    a: "Yes. From open-plan headquarters with 300+ desks to small single-occupancy suites with 5 desks, we can accommodate your requirements fully. Our pricing scales from &pound;89 per visit for a Small Office (up to 20 desks, 1-2 visits per week) through to a fully bespoke contract for Large Offices (75+ desks, daily visits plus periodic deep tasks, day porter service available if required). We also support multi-site portfolios, single-occupancy self-contained units, co-working spaces, and serviced offices. Your account manager will tailor the proposal to your specific footprint, density, and traffic patterns.",
  },
  {
    q: "Do you clean during business hours or after?",
    a: "Both are available, but we recommend after-hours for most office clients. Cleaning during business hours means vacuuming around people on calls, mopping floors while people walk on them, and crews feeling rushed. After-hours (typically 6pm-10pm) or early-morning (5am-7am) gives your crew the empty space they need to do a proper job. We can also split &mdash; light touch during the day, deep clean after hours. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys stored in a coded safe between visits, alarm codes encrypted, never labelled with your address.",
  },
  {
    q: "Will the same crew come every visit?",
    a: "Yes. We assign a regular crew to your office for the duration of your contract. If your regular crew lead is on annual leave or off sick, we send a trained backup who has been briefed on your site specifics &mdash; and we tell you in advance. Crew consistency matters: someone who cleans your office every Tuesday night knows the alarm code, knows which meeting room gets heavy use on Mondays, knows your access preferences. We never rotate crews unless you ask us to. The same faces, every visit, building real accountability to your space.",
  },
  {
    q: "What happens if a clean is missed?",
    a: "It&rsquo;s rare &mdash; our visit-completion rate in 2025 was 99.6% &mdash; but if it happens, we will send a crew within 24 hours at no charge, and your account manager will personally follow up to prevent recurrence. Three missed visits in a 6-month period triggers an automatic service review and a discount on your next month. We do not hide from accountability. You can flag an issue via our client portal, mobile app, or direct to your account manager &mdash; we respond within 24 hours and resolve within 48. No chasing, no friction. Our 4.9-star commercial rating exists because we actually fix things.",
  },
];

export function OfficeCleaningSeoFaq() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Office cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our office cleaning clients ask most often.
            Can&rsquo;t find what you need? Call us on{" "}
            <a
              href={contactInfo.phoneHref}
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4"
            >
              {contactInfo.phone}
            </a>{" "}
            and we&rsquo;ll talk it through.
          </p>
        </motion.div>

        <div className="space-y-4">
          {SEO_FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center justify-between gap-4 p-5 lg:p-6 cursor-pointer list-none">
                  <h3 className="font-display font-bold text-base lg:text-lg text-[var(--ink)] leading-tight">
                    {faq.q}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center transition-transform group-open:rotate-45">
                    <span className="relative w-3.5 h-3.5">
                      <span className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--brand)] -translate-y-1/2" />
                      <span className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--brand)] -translate-x-1/2" />
                    </span>
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1">
                  <p
                    className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Book My Free Site Survey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-light)]/40"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Office Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

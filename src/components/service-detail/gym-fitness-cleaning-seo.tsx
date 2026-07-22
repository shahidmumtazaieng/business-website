"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Crown,
  KeyRound,
  Hammer,
  UserCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Wrench,
  Dumbbell,
  ShowerHead,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches cafe-coffee-shop + restaurant-cleaning image pool)
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%209.54.46%20PM.jpeg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%209.54.46%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/Gemini_Generated_Image_h014vsh014vsh014.png",
  checklistFront:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistCounter:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseAntiviral:
    "https://sfile.chatglm.cn/images-ppt/8a7c4d6e0b51.jpg",
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
// (city-centre + neighbourhood coverage across Scotland)
// ============================================================
const NEAR_ME_LOCATIONS: { city: string; slug: string }[] = [
  { city: "Glasgow", slug: "glasgow" },
  { city: "Edinburgh", slug: "edinburgh" },
  { city: "Aberdeen", slug: "aberdeen" },
  { city: "Dundee", slug: "dundee" },
  { city: "Stirling", slug: "stirling" },
  { city: "Inverness", slug: "inverness" },
  { city: "Perth", slug: "perth" },
  { city: "Falkirk", slug: "falkirk" },
  { city: "Paisley", slug: "paisley" },
  { city: "East Kilbride", slug: "east-kilbride" },
  { city: "Livingston", slug: "livingston" },
  { city: "Hamilton", slug: "hamilton" },
  { city: "Ayr", slug: "ayr" },
  { city: "Kilmarnock", slug: "kilmarnock" },
  { city: "Greenock", slug: "greenock" },
  { city: "Coatbridge", slug: "coatbridge" },
  { city: "Airdrie", slug: "airdrie" },
  { city: "Motherwell", slug: "motherwell" },
  { city: "Wishaw", slug: "wishaw" },
  { city: "Dunfermline", slug: "dunfermline" },
  { city: "Kirkcaldy", slug: "kirkcaldy" },
  { city: "Glenrothes", slug: "glenrothes" },
  { city: "Dundonald", slug: "dundonald" },
  { city: "Bearsden", slug: "bearsden" },
  { city: "Milngavie", slug: "milngavie" },
  { city: "Bishopbriggs", slug: "bishopbriggs" },
  { city: "Lenzie", slug: "lenzie" },
  { city: "Giffnock", slug: "giffnock" },
  { city: "Newton Mearns", slug: "newton-mearns" },
  { city: "Clarkston", slug: "clarkston" },
  { city: "Barrhead", slug: "barrhead" },
  { city: "Johnstone", slug: "johnstone" },
  { city: "Renfrew", slug: "renfrew" },
  { city: "Rutherglen", slug: "rutherglen" },
  { city: "Cambuslang", slug: "cambuslang" },
  { city: "Bellshill", slug: "bellshill" },
];

// ============================================================
// Section 0 - Full-width hero banner
// Semantic H1: "Professional Gym & Fitness Centre Cleaning Services Scotland"
// ============================================================

export function GymFitnessSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean uniformed gym and fitness centre cleaning team resetting a Scottish health club before opening"
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
            Gym &amp; Fitness Centre Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Gym &amp; Fitness Centre Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Meticulous Hygiene, Technical Decontamination, and the Maundy Tradition of Excellence
            for Scottish Fitness Communities. In the high-stakes world of the fitness industry, your
            facility is more than a gym; it is a sanctuary for your members&rsquo; health and
            physical well-being &mdash; and a high-traffic leisure environment that demands far more
            than a standard surface wipe.
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
                Book Your Free Site Survey Today
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
                View Our Commercial Cleaning Checklist
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
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> Fully Insured &amp; PVG-Checked
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe, Non-Toxic Supplies
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Pre-Open &amp; Post-Close, 7 Days
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
// Split-layout with aspect-[4/3] image on the left and the two
// verbatim intro paragraphs on the right (paragraph 2 contains
// the two inline <Link>s to /services/move-in-out-cleaning for
// "End of Tenancy Cleaning" and /services/deep-house-cleaning
// for "Deep Cleaning Services").
// ============================================================

export function GymFitnessSeoIntro() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
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
                src={IMG.introSplit}
                alt="Maundy Clean uniformed gym cleaning crew decontaminating a Scottish fitness centre before opening"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Sanctuary Care for the Fitness World
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy, &ldquo;same-staff&rdquo; consistency, and
                  &ldquo;sanctuary&rdquo; care we bring to Scotland&rsquo;s finest residences &mdash;
                  applied to your gym, leisure centre, or boutique studio.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m cover</div>
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
              Gym &amp; fitness centre care &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The Maundy Clean Standard for Scottish Fitness Communities
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the high-stakes world of the fitness industry, your facility is more than a gym; it
              is a sanctuary for your members&rsquo; health and physical well-being. However,
              high-traffic leisure environments demand far more than a standard surface wipe. Dust,
              debris, and bacteria buildup can directly impact member retention, equipment lifespan,
              and compliance with strict industry safety regulations. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we provide a
              premium gym and fitness centre cleaning service that ensures your facility operates at
              peak performance, safely and efficiently.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              While we are the recognized authority in{" "}
              <Link
                href="/services/move-in-out-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                End of Tenancy Cleaning
              </Link>{" "}
              and{" "}
              <Link
                href="/services/deep-house-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Deep Cleaning Services
              </Link>{" "}
              for Scotland&rsquo;s most demanding property transitions, we bring that same level of
              technical intimacy, &ldquo;same-staff&rdquo; consistency, and &ldquo;sanctuary&rdquo;
              care to the commercial leisure sector. Serving Glasgow, Edinburgh, and the Central
              Belt, we act as a strategic partner to help you maintain a safe, productive workout
              space.
            </p>

            {/* Compact trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { label: "Visits completed in 2025", value: "99.6%" },
                { label: "Vetted, uniformed crews", value: "100%" },
                { label: "From per hour", value: "&pound;16" },
                { label: "Star rating", value: "4.9/5" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--cream)] rounded-xl p-3 border border-[var(--brand)]/10 text-center"
                >
                  <div
                    className="font-display font-extrabold text-xl text-gradient-brand"
                    dangerouslySetInnerHTML={{ __html: stat.value }}
                  />
                  <div className="text-[11px] text-[var(--muted-foreground)] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why MaundyClean is Scotland's Authority in Fitness Facility Maintenance
// (Semantic H2: "Why MaundyClean is Scotland's Authority in Fitness Facility Maintenance")
// Image+copy split layout with 4 trust cards.
// Per the brief: icons UserCheck / ShieldCheck / Wrench / Leaf
// ============================================================

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is the bedrock of facility management. We ensure the same vetted professionals manage your account every time. This allows our team to build a deep understanding of your unique equipment layouts and high-traffic &ldquo;risky&rdquo; areas &mdash; from the free-weight zone and the cable-machine rigs through the studio floors and the changing-room choke points. The same crew lead returns every visit, building real accountability to your hygiene standard, your member-experience score, and your EHO inspection file. When the regular crew lead is on annual leave, we send a trained backup who has been briefed on your site and we tell you in advance &mdash; never a rotating cast of agency strangers, never a &ldquo;new face every week&rdquo;.",
  },
  {
    icon: ShieldCheck,
    title: "Total Regulatory Compliance",
    description:
      "Industrial and leisure environments demand more than aesthetic cleaning. Our teams are trained in robust decontamination protocols, ensuring your sports halls and community facilities remain compliant with health and safety industry regulations. Every product we use has a current COSHH datasheet on file, every method is mapped to your HACCP-style cleaning plan, and every crew member is trained on infection-control standards (colour-coded microfibre to prevent cross-contamination between equipment, mats, washroom, and changing zones). We hold &pound;5m public liability cover and &pound;5m employer&rsquo;s liability cover &mdash; suitable for independent gyms, council leisure centres, boutique studios, and franchise operators alike. Audit-ready documentation is provided every visit, including EN 14476 virucidal contact-time logs and ATP swab-test results.",
  },
  {
    icon: Wrench,
    title: "Professional-Grade Technical Equipment",
    description:
      "We utilize proven systems and industrial-grade equipment designed to handle heavy-duty environments. From high-reach ventilation dusting and extractor-grille degreasing to specialized floor degreasing on rubber weight-room flooring, we ensure a &ldquo;speechlessly spotless&rdquo; finish. Our crews arrive in liveried vans with commercial-grade HEPA-filtered vacuums (Sebo BS36/BS46, Henry HVR200), flat-mop systems with separate dirty-water extraction (no double-dipping), 180&deg;C dry-steam sanitizers for yoga mats and foam rollers, ultra-low-volume foggers for outbreak response, and ATP luminometers for post-clean verification on a random sample of touchpoints. We use EN 14476 virucidal disinfectant with a verified 60-second contact time on every dumbbell, kettlebell, plate, cable grip, machine pin, treadmill console, bike handlebar, and rower chain.",
  },
  {
    icon: Leaf,
    title: "Safe for Your Members",
    description:
      "Your members&rsquo; health is paramount. We utilize only certified non-toxic and child-safe products. This is essential for community facilities and family-friendly gyms, providing a healthy environment without the harsh chemical odors common with national agencies. COSHH datasheets are available for every product we use, and we default to eco-labelled chemistry with food-safe alternatives (EN 1276 bactericide, EN 14476 virucide) for reception desks, member check-in tablets, water-fountain buttons, and vending-machine keypads. All PPE is provided. Colour-coded microfibre cloths prevent cross-contamination between equipment zones, mats, washrooms, and changing rooms. Your members notice the fresh-air feel &mdash; no chlorine-choked studios, no ammoniated changing rooms, no chemical haze in the weight area.",
  },
];

export function GymFitnessSeoWhy() {
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
                alt="Maundy Clean gym cleaning crew &mdash; uniformed, PVG-checked, and trained on EN 14476 virucidal disinfection protocols"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Strategic Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, uniformed, and trained in infection-control standards. Same crew
                  every visit &mdash; never a rotating cast of strangers handling your equipment.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m cover</div>
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
              Why MaundyClean is Scotland&rsquo;s Authority in Fitness Facility Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many commercial contractors rely on high-turnover agency staff, leading to inconsistent
              results. MaundyClean addresses these exploitable weaknesses by focusing on high-trust
              relationships and vocational excellence. By combining vetted uniformed teams, the same
              dedicated crew every visit, robust decontamination protocols, professional-grade
              technical equipment, and child-safe eco-friendly supplies as standard, we project the
              high standards your members expect &mdash; and the audit-ready documentation your
              health-and-safety inspector demands.
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
// Section 3 - Our Total Gym Maintenance & Deep Decontamination Checklist
// (Semantic H2: "Our Total Gym Maintenance & Deep Decontamination Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Equipment & Production Floors
//   2. "Clean Room" Standards for Amenities
//   3. Often-Missed Technical Details
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Dumbbell,
    image: IMG.checklistFront,
    imageAlt: "Maundy Clean crew disinfecting gym equipment, free weights, and resistance machines in Scotland",
    title: "1. Equipment & Production Floors",
    description:
      "The weight room, cardio zone, and studio floors are the highest-touch, highest-contamination surfaces in any fitness facility. Independent laboratory swab tests consistently find free weights carrying up to 362 times more bacteria than a public toilet seat &mdash; including Staphylococcus aureus, ringworm fungal spores, and rhinovirus. A standard spray-and-wipe with a generic cleaner does not kill these pathogens; it just moves them around. Our equipment protocol uses EN 14476 virucidal disinfectant with a verified 60-second contact time on every touchpoint, applied by trained infection-control-aware crews.",
    points: [
      {
        title: "High-Touch Point Sanitization",
        text: "Meticulous disinfecting of cardiorespiratory equipment, free weights, resistance machines, and entry phone systems to keep germs and bugs at bay. Every dumbbell, kettlebell, plate, cable grip, machine pin, treadmill console, bike handlebar, and rower chain is wiped with EN 14476 virucidal disinfectant &mdash; 60-second contact time, then dried with a clean microfibre. Never a single rag across multiple stations. Member check-in tablets, water-fountain buttons, vending-machine keypads, and door handles are disinfected every visit, with particular attention during cold and flu season.",
      },
      {
        title: "Specialized Mat Care",
        text: "Technical cleaning of BJJ mats, yoga mats, and stretching areas to prevent the spread of skin infections. Studio mats are steam-sanitised at 180&deg;C dry steam on both sides (the only method that reliably kills ringworm fungal spores and Staphylococcus on porous surfaces), then dried flat. BJJ and martial-arts mats get an additional EN 14476 fogging pass after every session block. Foam rollers, blocks, and resistance bands are individually wiped with a quat-based disinfectant &mdash; critical for community facilities and family-friendly gyms where skin-to-surface contact is unavoidable.",
      },
      {
        title: "Hard Floor & Degreasing",
        text: "Intensive vacuuming and mopping of workout floors to remove sweat, rubber dust, and grime. Weight-room rubber flooring is vacuumed with a HEPA-filtered upright (no beater bar &mdash; it degrades the rubber compound), then mopped with a gym-specific sanitiser that doesn&rsquo;t degrade the rubber. Studio floors are swept and flat-mopped with separate dirty-water extraction (no double-dipping). Treadmill and elliptical areas get degreased to remove the sweat-and-oil film that builds up under cardio machines. A polished gym floor reflects the lighting and makes the whole room feel premium.",
      },
    ],
  },
  {
    icon: ShowerHead,
    image: IMG.checklistCounter,
    imageAlt: "Maundy Clean crew deep cleaning gym locker rooms, showers, and sauna facilities in Scotland",
    title: "2. \u201cClean Room\u201d Standards for Amenities",
    description:
      "Locker rooms, showers, and sauna/steam rooms are the second-highest-risk zone in any fitness facility &mdash; the &ldquo;clean room&rdquo; standard amenities demand. High-moisture environments culture bacteria in minutes; warm humid air cultures mould and legionella in hours. Our amenities protocol uses non-caustic, food-safe chemistry and 180&deg;C dry-steam sanitation on tile, grout, and chrome &mdash; applied by trained catering-experienced crews who know the difference between a descale cycle and a sanitise cycle. We buff and polish all chrome fixtures to a high shine as part of our &ldquo;showcase&rdquo; standards.",
    points: [
      {
        title: "Washroom & Locker Room Deep Cleaning",
        text: "Intensive sanitation of ceramic items, toilets, and showers. We descale toilets with a non-abrasive acid, disinfect with an EN 1276-certified bactericide, and polish chrome fittings to a high shine as part of our &ldquo;showcase&rdquo; standards. Tiles and grout are scrubbed, shower glass is squeegeed and treated, locker interiors are wiped, benches are sanitised, toilet partitions are disinfected, and floors are mopped with a slip-resistant sanitiser. Hair traps are cleared daily in communal showers to prevent drain blockages. Mirrors are squeegeed, never wiped &mdash; a streaked mirror kills the room&rsquo;s perception of cleanliness.",
      },
      {
        title: "Sauna & Steam Room Care",
        text: "Using approved products and methods to minimise contamination in high-moisture controlled environments. Sauna benches are wiped with a food-safe, non-taint bactericide (never a chlorine sanitiser &mdash; it off-gasses at sauna temperatures and irritates airways). Steam-room tiles and grout are scrubbed, the drain is sanitised, and the ceiling is wiped to remove biofilm. Wood surfaces are treated with a specialist sauna-wood cleaner that prevents resin build-up without damaging the timber. Legionella controls are logged every visit &mdash; temperature checks, shower-head descale, and cold-water tank inspection where access permits.",
      },
      {
        title: "Chrome & Fixture Polishing",
        text: "We buff and polish all chrome fixtures to a high shine as part of our &ldquo;showcase&rdquo; standards. Shower heads, taps, soap dispensers, locker handles, bench frames, and door furniture are polished with a streak-free stainless-steel cleaner. Sanitary bins are checked, emptied, and replaced. Hair-dryer handles, mirror edges, and plug sockets are detailed. The amenities zone is where members decide whether to renew their membership &mdash; a smudged tap or a stained grout line undermines the whole facility&rsquo;s perceived standard.",
      },
    ],
  },
  {
    icon: Search,
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean crew detailing skirting boards, door frames, and ceiling fixtures in a Scottish gym",
    title: "3. Often-Missed Technical Details",
    description:
      "These are the surfaces that members notice subconsciously &mdash; a dusty vent, a stained ceiling tile, a streaked internal window. We hand-detail every perimeter surface, dust ceiling light fixtures and air-conditioning vents, and wipe down the inside of the windows so the room feels genuinely reset, not just the centre of the floor. These details are the difference between &ldquo;clean&rdquo; and &ldquo;speechlessly spotless&rdquo; &mdash; and the difference between a member who renews and a member who churns.",
    points: [
      {
        title: "Surface Restoration",
        text: "Meticulously wiping visible skirting boards, door frames, and ceiling fixtures. Skirting boards are damp-wiped with a pH-neutral cleaner; door frames and architraves are detailed; ceiling light fixtures, air-conditioning vents, and extractor grilles are dusted and degreased. High-reach ventilation dusting is performed with extendable poles and HEPA-filtered attachments &mdash; we don&rsquo;t just brush the dust back into the air. Cable trays, overhead rigging, and pull-up bar frames are wiped down. A dusty vent or a stained grout line undermines a polished weight room within seconds.",
      },
      {
        title: "Inside Window Care",
        text: "Meticulous cleaning of internal glass to maximize natural light and maintain a bright, welcoming atmosphere for members. We squeegee the inside of all glass doors, internal partitions, studio-view windows, mirror walls, and reception-area glazing on every visit, and schedule external window cleaning weekly (or daily for high-street units exposed to bus-stop and traffic grime). Mirrors in studios, changing rooms, and behind weight racks are squeegeed, never wiped &mdash; a streaked mirror kills the room&rsquo;s perception of cleanliness and undermines member-confidence in front of the barbell.",
      },
      {
        title: "Air Quality & Ventilation",
        text: "Air quality is the #1 driver of perceived cleanliness in member surveys &mdash; bad air undermines everything else. We service HVAC intake grilles, change extractor filters where you&rsquo;ve authorised it, and recommend an ozone-shock treatment monthly for high-traffic studios. The weight-room air-handling unit gets a coil-brush and drip-tray sanitise. The studio ozone treatment neutralises the sweat-and-rubber odour that builds up in a closed fitness environment. A gym that smells fresh is a gym that retains members &mdash; we manage the olfactory experience as carefully as the visual.",
      },
    ],
  },
];

export function GymFitnessSeoChecklist() {
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
            Beyond the standard surface wipe
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Gym Maintenance &amp; Deep Decontamination Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning for fitness centres follows a rigorous, agency-approved checklist
            designed to address the specific hygiene challenges of active spaces. We move beyond the
            basic surface wipe to deliver technical depth in every area of your facility &mdash; from
            the free-weight zone and cardio floor through the locker rooms and sauna to the
            often-missed ceiling fixtures and internal glazing. Below is the scope we deliver as
            standard, regardless of facility size or membership volume.
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
                      const PointIcon = CheckCircle2;
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
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Bespoke Plan",
    description:
      "Contact us to design a tailored cleaning plan. We walk the facility with your duty manager, identify priority zones (free-weight zone, cardio floor, studio mats, locker rooms, sauna, reception), review opening hours and access windows, capture your cleaning-compliance file and COSHH register, and establish the high standards and frequency required for your specific membership volume. We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians who follow strict protocols and regular check-ins to ensure a good line of communication. Your allocated crew lead is briefed on your equipment layouts, your mat-care schedule, your washroom choke-points, and your high-traffic &ldquo;risky&rdquo; areas &mdash; so cleaning happens around the membership, not through it. The same crew returns for every scheduled session, building real knowledge of your facility&rsquo;s routines, your screen-sensitive surfaces, and your access preferences. We arrive in liveried vehicles, in uniform with photo I.D., with commercial-grade equipment and COSHH-compliant infection-control chemistry.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Facility",
    description:
      "Experience a workout space that looks, smells, and feels fresh every single day, backed by our MaundyClean satisfaction guarantee. You receive a signed daily checklist after every visit (cleaner signature, duty manager counter-signature), arrival and departure times, tasks completed, and any issues flagged &mdash; like a leaking shower head, a blown bulb, or a treadmill due for belt-lube &mdash; before they become complaints. From &pound;16 per hour for a small independent studio through to a fully bespoke retainer for a multi-site leisure group. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function GymFitnessSeoBooking() {
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
            The MaundyClean 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be uncomplicated and straightforward,
            providing the responsive management support Scottish business owners demand. From site
            survey to first clean in under a week &mdash; no friction, no waiting, no surprises. Just
            a pristine facility, every visit, on schedule.
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
              Book Your Free Site Survey Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Property Stage
// (Semantic H2: "Solutions for Every Property Stage")
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: KeyRound,
    title: "Property Transitions &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty gym unit being deep cleaned for lease handover by Maundy Clean in Scotland",
    description:
      "Opening a new location or moving units? Our End of Tenancy Cleaning ensures properties are front-line ready for launch and pass all initial safety inspections. We work to the letting agent&rsquo;s inventory, restore the unit to its original condition, and come back free of charge if anything is flagged on the inspection &mdash; the most stress-free way to close out a gym lease or open a new fitness concept.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish gym and fitness centre",
    description:
      "If your gym has had home improvements or new equipment installed, our After Builders Clean is designed to remove heavy layers of builders&rsquo; dust. Fine dust left on a weight-room floor acts like sandpaper under foot traffic &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage equipment, rubber flooring, or your members&rsquo; first impression on reopening day.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: Sparkles,
    title: "Fabric &amp; Floor Rejuvenation &middot; Deep Carpet Cleaning",
    href: "/services/carpet-rug-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Deep carpet cleaning of a gym reception and lobby area by Maundy Clean in Scotland",
    description:
      "Bring tired lobby carpets back to life with our Deep Carpet Cleaning service to remove deep-seated city-center dust and odors. We hot-water-extract reception-area carpets, stretch-zone runners, and studio floor covers &mdash; removing the sweat-and-rubber smell that builds up in a busy fitness environment and refreshing the appearance of the high-traffic entrance your members see first.",
    cta: "Explore deep carpet cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets &middot; Antiviral Sanitisation",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt: "Antiviral sanitisation treatment being applied to high-touch gym surfaces in Scotland",
    description:
      "Ask about our specialist Antiviral Sanitisation and decontamination services for controlled environments. EN 14476 virucidal chemistry is fogged and wiped across every high-touch surface in your gym &mdash; from dumbbell knurling and treadmill consoles to locker handles and sauna benches &mdash; reducing the spread of seasonal colds, flu, ringworm, and norovirus among your members and staff during peak trading and outbreak response.",
    cta: "Explore antiviral sanitisation",
  },
];

export function GymFitnessSeoInterlinking() {
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
            Beyond the daily clean &middot; gym milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring cleaning for leisure centres is the heartbeat of your facility&rsquo;s
            health, but we offer specialized &ldquo;resets&rdquo; for major property milestones &mdash;
            from lease handovers and post-refurbishment dust clear-outs to fabric rejuvenation and
            outbreak-response hygiene resets. The same trusted crew can step up whenever your
            facility needs more than a standard visit.
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
// (Semantic H2: "Gym & Fitness Centre Cleaning Near Me, Across Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function GymFitnessSeoNearMe() {
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
              Local gym &amp; fitness centre cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Gym &amp; Fitness Centre Cleaning Near Me, Across Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;gym cleaning near me&rdquo; or &ldquo;fitness centre cleaning
              company near me&rdquo; in Scotland? Maundy Clean covers independent gyms, council
              leisure centres, boutique studios, and F45-style concept facilities across the Central
              Belt, Highlands, Borders, and Islands. Same vetted uniformed crews, same child-safe
              eco-friendly supplies, same dedicated crew every visit &mdash; wherever your facility
              happens to be. Find your local gym cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean gym and fitness centre cleaning service coverage areas"
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
                  Same vetted uniformed crews, same 100% satisfaction guarantee &mdash; from Glasgow
                  to Inverness.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                asChild
              >
                <Link href="/services/gym-fitness-cleaning-near-me">
                  <MapPin className="w-4 h-4" />
                  Browse the near-me directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
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
                Find your local gym crew
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
                    href={`/services/gym-fitness-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> gym</span>
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
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
              >
                View all 72 Scottish locations
                <ArrowRight className="w-4 h-4" />
              </Link>
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
            Our local gym and fitness centre cleaning crews operate across Glasgow&rsquo;s Merchant
            City, Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s Union Street, Dundee&rsquo;s West End,
            and the Highlands &mdash; from Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re
            searching for daily touchpoint disinfection in Glasgow, after-hours deep decontamination
            in Edinburgh, studio mat steam-sanitising in Aberdeen, or neighbourhood gym cleaning
            anywhere in between, Maundy Clean assigns a vetted, PAYE-employed crew that stays with
            you for the long run. Same crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Book Your Free Site Survey Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function GymFitnessSeoFinalCta() {
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
            Ready to book your site survey?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Book Your Free Site Survey Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted uniformed crews, infection-control-trained
            technicians, EN 14476 virucidal disinfection, ATP swab verification, audit-ready
            compliance documentation, signed daily checklists, and a 100% satisfaction guarantee
            &mdash; from &pound;16 per hour for a small independent studio through to a fully bespoke
            multi-site leisure retainer. No pushy sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Book Your Free Site Survey Today
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
                View Our Commercial Cleaning Checklist
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
// 3 Q&As from the brief (insured for industrial/leisure spaces,
// provide own professional equipment, communication & quality control)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for industrial and leisure spaces?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with years of experience serving both the residential and commercial sectors across Scotland. We hold &pound;5m public liability cover (suitable for independent gyms, council leisure centres, boutique studios, F45-style concept facilities, and franchise operators), &pound;5m employer&rsquo;s liability cover, and contingent employers&rsquo; liability. Every crew member carries Disclosure Scotland PVG scheme membership, wears an official uniform with photo I.D., and is trained on infection-control protocols (HACCP-aware, allergen-aware, colour-coded microfibre to prevent cross-contamination between equipment, mats, washroom, and changing zones). We can name your facility on our policy as additional insured &mdash; a common requirement for council leisure contracts, shopping-centre gym units, and franchise leasehold agreements &mdash; and provide enhanced background checks for staff handling secure keyholding or operating in sensitive locations. Certificates of insurance and our full compliance file (COSHH datasheets, risk assessments, method statements, training records, EN 14476 virucidal contact-time logs, ATP swab-test history) are available on request; we will not begin work until your facilities team and your health-and-safety inspector have the documentation they need.",
  },
  {
    q: "Do you provide your own professional equipment?",
    a: "Yes. We supply all our own professional-grade equipment and non-toxic supplies, ensuring we handle heavy-duty environments without additional costs to you. Every crew arrives in a liveried van with commercial-grade HEPA-filtered vacuums (Sebo BS36/BS46, Henry HVR200), microfibre flat-mop systems with separate dirty-water extraction (no double-dipping), colour-coded cloths (red for equipment, blue for mats, green for member-facing, yellow for washroom and changing), HSE-compliant chemicals with COSHH datasheets on file, PPE, squeegees for windows and mirrors, 180&deg;C dry-steam sanitizers for yoga mats and foam rollers, ultra-low-volume foggers for outbreak response, and ATP luminometers for post-clean verification on a random sample of touchpoints. We use EN 14476 virucidal disinfectant with a verified 60-second contact time on every dumbbell, kettlebell, plate, cable grip, machine pin, treadmill console, bike handlebar, and rower chain. We use non-toxic, child-safe, pet-safe products by default &mdash; no harsh chemical odours left in studios or changing rooms &mdash; with eco-labelled alternatives for the weight-room floor, locker rooms, and reception. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee so you never run out during trading.",
  },
  {
    q: "How do you handle communication and quality control?",
    a: "Our management team is highly responsive, with regular check-ins and a good line of communication to ensure staff are supported and your standards are strictly adhered to. Every gym and fitness centre client gets a dedicated account manager who knows your facility, your team, your access protocols, and your infection-control plan &mdash; direct mobile number, 24-hour response, quarterly on-site walk-throughs alongside your duty manager. After every visit you receive a signed daily checklist (cleaner signature, duty manager counter-signature), arrival and departure times, tasks completed, and any issues flagged &mdash; like a leaking shower head, a blown bulb, a treadmill due for belt-lube, or a weight-stack cable due for replacement &mdash; before they become complaints. We also conduct unannounced quality audits (typically monthly for high-footfall gyms, quarterly for low-volume studios) using our internal scoring rubric and ATP swab-test verification on a random sample of touchpoints, share the results with you, and trigger a free re-clean within 24 to 48 hours if any line item drops below standard. Our visit-completion rate in 2025 was 99.6%.",
  },
];

export function GymFitnessSeoFaq() {
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
            Gym &amp; fitness centre cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our gym and fitness centre cleaning clients ask most
            often. Can&rsquo;t find what you need? Call us on{" "}
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
                Book Your Free Site Survey Today
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
                View Our Commercial Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

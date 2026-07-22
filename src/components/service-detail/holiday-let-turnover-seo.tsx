"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Leaf,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Home,
  KeyRound,
  Hammer,
  Star,
  Zap,
  UserCheck,
  CalendarCheck,
  SprayCan,
  Sun,
  BedDouble,
  Utensils,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%207.02.26%20PM.jpeg", // beautifully turned-over holiday let bedroom
  whyCrew:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%207.02.26%20PM.jpeg", // Maundy Clean turnover crew
  checklistLiving:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg", // bright living room, morning light
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/8fce1b536378.jpg", // eco-spray kitchen
  checklistBathroom:
    "https://sfile.chatglm.cn/images-ppt/b9a3fe6960e9.webp", // sparkling bathroom chrome
  checklistFloors:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", // freshly vacuumed/mopped floor
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", // deep clean living room
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg", // empty flat move-in
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg", // post-builders cleanup
  leaseCarpet:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg", // eco-labelled supplies / fabric care
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg", // map of Scotland
};

// ============================================================
// Section 0 — Full-width hero banner
// Semantic H1: "Professional Holiday Let Turnover Services in Scotland"
// ============================================================

export function HolidayLetSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Beautifully turned-over Scottish holiday let bedroom prepared by Maundy Clean for the next guest check-in"
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
            Holiday Let Turnover · Airbnb · Booking.com · Glasgow · Edinburgh · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Holiday Let Turnover Services in Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            5-Star Guest Experiences through Meticulous Cleaning, Linen Management, and Reliable
            Turnovers. A premium turnover service designed for Airbnb hosts and property managers
            across Scotland &mdash; built on the Maundy tradition of care, with same-day turnovers
            from £65 and a 90-minute issue response window.
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
                Get My 30-Second Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
              asChild
            >
              <Link href="/locations">
                <MapPin className="w-4 h-4" />
                View Our Holiday Let Service Areas
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
              <span className="text-white/70">· 6,200+ reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[var(--gold)]" /> PVG-Checked &amp; £5m Insured
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Guest-Safe Eco Products
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> 90-Minute Response Window
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 — Long-form semantic SEO intro
// Sits right after the hero, before the existing ServiceOverview.
// ============================================================

export function HolidayLetSeoIntro() {
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
            Specialist holiday let turnover · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Short-Term Let Care
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Running a successful short-term rental in Scotland&rsquo;s competitive tourism market
            requires more than just a tidy home &mdash; it requires a professional{" "}
            <strong className="font-semibold text-[var(--ink)]">holiday let turnover</strong>{" "}
            partner who understands that presentation is everything. At Maundy Clean, we provide a
            premium turnover service designed for Airbnb hosts and property managers who demand the
            same highest standard in every location and for every guest. Our service is built on the{" "}
            <strong className="font-semibold text-[var(--ink)]">Maundy tradition of care and
            service</strong>, ensuring your property is front-line ready for every check-in &mdash;
            from Edinburgh festival flats to Highland retreats in Aviemore and Fort William.
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
            { label: "4.9★ rating", value: "6,200+ reviews" },
            { label: "Avg. host tenure", value: "3.8 years" },
            { label: "Issue response", value: "90 minutes" },
            { label: "Crew retention", value: "4.2 years avg" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--cream)] rounded-xl p-4 border border-[var(--brand)]/10 text-center"
            >
              <div className="font-display font-extrabold text-2xl text-gradient-brand">{stat.value}</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 — Why Maundy Clean for Scottish Short-Term Let Management
// (Semantic H2: "Why Maundy Clean for Scottish Short-Term Let Management")
// Image+copy split layout with 4 trust cards (holiday-let specialist framing)
// ============================================================

const TRUST_CARDS = [
  {
    icon: CalendarCheck,
    title: "Reliable Same-Day Turnovers",
    description:
      "We operate across west-central Scotland and the Central Belt, offering flexible 7-day-a-week availability to match your booking calendar. Same-day turnarounds, last-minute bookings, festival-season surges — we have the crew depth to mobilise fast and a 90-minute response window when a guest flags an issue. Your bookings drive our schedule, not the other way round.",
  },
  {
    icon: Users,
    title: "The Same Dedicated Team",
    description:
      "Trust and understanding of your property&rsquo;s layout are essential. We strive to provide the same vetted professionals for every turnover to build a deep understanding of your specific hosting requirements — your linen cupboard, your key safe code, your welcome pack spec, your quirky hot water timer. Crew continuity is the single biggest reason our hosts stay with us for an average of 3.8 years.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Guest-Safe Standards",
    description:
      "We use only certified, child-safe and pet-safe products. Our non-toxic, eco-friendly supplies ensure a healthy and welcoming environment for every guest, regardless of their sensitivities. EU Ecolabel and DEFRA-approved low-VOC products as standard — guests with allergies and sensitive airways notice, and your reviews reflect it. Fragrance-free options available on request.",
  },
  {
    icon: Shield,
    title: "Fully Vetted and Insured",
    description:
      "Every Maundy Clean technician is fully trained, background-checked, and carries official identification for your complete peace of mind. Disclosure Scotland PVG scheme membership and £5m public liability cover as standard on every turnover. We are a registered Scottish company — not a gig-economy agency — so there are no contractor grey areas. Key-safe trained and security-vetted.",
  },
];

export function HolidayLetSeoWhy() {
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
                alt="Maundy Clean uniformed turnover crew preparing a Scottish holiday let for the next guest arrival"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Home className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Short-Term Let Specialists
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Trained for fast turnovers, linen management, and guest-ready presentation. PVG-checked,
                  PAYE-employed, and uniformed — every visit.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Host retention</div>
                  <div className="text-xs font-bold text-[var(--ink)]">96%</div>
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
              Why Maundy Clean for Scottish Short-Term Let Management
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While many agencies offer generic housekeeping, Maundy Clean provides specialized
              recurring home cleaning modified for the high-pressure pace of holiday let cycles. We
              address the primary weaknesses of national platforms by offering a local, personal, and
              reliable Scottish service &mdash; same vetted crew every turnover, 7-day availability,
              guest-safe eco products, and full PVG vetting as standard.
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
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {card.description}
                      </p>
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
                  <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                    {card.description}
                  </p>
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
// Section 3 — Detailed What's Included (4 categories)
// (Semantic H2: "Our Comprehensive Holiday Let Turnover Checklist")
// Image-per-card layout — short-term let specialist framing
// ============================================================

const INCLUDED_DETAIL = [
  {
    icon: BedDouble,
    title: "Living Areas & Bedrooms",
    image: IMG.checklistLiving,
    imageAlt: "Bright holiday let living room and bedroom with polished surfaces and freshly made bed",
    description:
      "We provide meticulous dusting of all surfaces, fixtures, and fittings — polishing wood, glass, and mirrors to a streak-free shine. We go beyond the basics to clean often-missed areas like visible skirting boards, door frames, and window sills, and we even clean the inside of the windows as part of our regular routine. Beds are stripped, linens replaced, and remade to a hotel-standard finish.",
    points: [
      "Dust all surfaces, fixtures & fittings",
      "Polish wood, glass & mirrors streak-free",
      "Clean skirting boards, door frames, sills",
      "Clean inside of windows every visit",
      "Strip & remake beds to hotel standard",
    ],
  },
  {
    icon: Utensils,
    title: "Kitchen & Bathroom Sanitation",
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean technician disinfecting a holiday let kitchen with eco-friendly spray",
    description:
      "Deep cleaning and disinfecting of toilets, sinks, and showers. We buff and polish all chrome fixtures to remove water spots and limescale. In the kitchen, we wipe down worktops, splashbacks, and the exterior of all appliances — including the oven, hob, and fridge. Restocking of guest consumables (toiletries, tea, coffee, and more) is managed by us to ensure a seamless arrival experience.",
    points: [
      "Disinfect toilets, sinks & showers",
      "Buff chrome to remove water spots",
      "Descale taps & shower heads",
      "Wipe worktops, splashbacks, appliances",
      "Restock guest consumables & toiletries",
    ],
  },
  {
    icon: Wind,
    title: "Floor Care & Hygiene",
    image: IMG.checklistFloors,
    imageAlt: "Freshly vacuumed and mopped holiday let floor with crisp finish",
    description:
      "Intensive vacuuming of all carpets and upholstery, followed by mopping and disinfecting of hard floors to kill germs and maintain a fresh scent throughout the property. Hardwood damp-mopped with pH-neutral cleaner, rugs beaten if small enough, and tile & grout scrubbed in high-traffic zones. The detail surfaces that guests photograph for reviews are addressed every time.",
    points: [
      "Vacuum all carpets & upholstery",
      "Mop & disinfect hard floors",
      "Damp-mop hardwood with pH-neutral cleaner",
      "Scrub tile & grout in high-traffic zones",
      "Edge-to-edge coverage, no shortcuts",
    ],
  },
  {
    icon: Sparkles,
    title: "Guest-Ready Presentation",
    image: IMG.checklistBathroom,
    imageAlt: "Sparkling holiday let bathroom with chrome fixtures shining for guest arrival",
    description:
      "The finishing touches that turn a clean property into a five-star guest experience. Cushions plumped and arranged, throws folded, remote controls sanitised, light switches wiped, bins emptied, and a final walk-through photo set uploaded to your portal before the cleaner leaves. You see exactly what your next guest will see — before they see it.",
    points: [
      "Plump cushions & fold throws",
      "Sanitise remotes, switches & handles",
      "Empty all bins & replace liners",
      "Before/after photos uploaded to portal",
      "Final walk-through before lock-up",
    ],
  },
];

export function HolidayLetSeoIncludedDetail() {
  return (
    <section id="checklist" className="py-16 lg:py-24 bg-[var(--cream)] scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            What&apos;s included · the detail
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Holiday Let Turnover Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our holiday let turnover follows a rigorous, agency-approved checklist designed to ensure
            your property remains spotless for every guest. Every item below is included as standard
            &mdash; no add-on fees, no surprise charges, no skipped zones. Built from real Airbnb and
            Booking.com guest review data so we address the things guests actually flag.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INCLUDED_DETAIL.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/30 transition-all flex flex-col"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] bg-[var(--brand-dark)] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-lg text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-auto">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-[var(--ink)]/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
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
// Section 4 — 3-Step "Hassle-Free" Booking Process
// (Semantic H3: "The 3-Step 'Hassle-Free' Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant Quote & Schedule",
    description:
      "Use our 30-second online calculator to receive a simple, fixed-price quote based on your property size. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay — sync your Airbnb or Booking.com iCal link and we confirm every turnover 48 hours before check-out.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Execution",
    description:
      "Our experienced cleaning team arrives fully equipped with all necessary materials to perform a first-class clean — eco-labelled products, fresh linens (your supply or ours), steam cleaners for grout, and a 32-point turnover checklist built from real guest review data. Same vetted crew every turnover, so they know your property inside out.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Check-In Ready",
    description:
      "Your property is left spotless and attractive to future guests, supported by our Maundy Clean quality guarantee. Before-and-after photos are uploaded to your portal before the cleaner leaves. If a guest reports an issue, our 90-minute response window means we can have a crew back fast — even on a Sunday evening in peak festival season.",
  },
];

export function HolidayLetSeoBooking() {
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
            We have optimized our system to be straightforward and helpful, addressing the fast-paced
            needs of the short-term let industry. From quote to first turnover in under 48 hours &mdash;
            no friction, no waiting.
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
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {step.description}
                </p>
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
              Get My 30-Second Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 — Specialized Solutions for Property Owners
// (Semantic H2: "Specialized Solutions for Property Owners")
// Image-topped cards with internal links
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: SprayCan,
    title: "Seasonal Deep Cleans · Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Deep clean of a holiday let living room with furniture moved to reach hidden dust",
    description:
      "If your property requires a top-to-bottom refresh between seasons, our Deep House Cleaning moves furniture to clean behind and underneath items often missed during standard turnovers. The perfect quarterly reset on top of your recurring turnover plan — at a 15% host-member discount.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: KeyRound,
    title: "Starting a New Lease · End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty holiday let being deep cleaned for a new tenant or owner handover",
    description:
      "Moving in or out? Our End of Tenancy Cleaning includes a Deposit-Back Guarantee, ensuring properties are front-line ready for new tenants or owners. We work to the letting agent&rsquo;s inventory, not ours, and we&rsquo;ll come back free of charge if the agent flags anything.",
    cta: "Book end of tenancy cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation · After Builders Cleaning",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from a holiday let",
    description:
      "If you have recently had home improvements, our After Builders Cleaning is designed to remove heavy layers of builders&rsquo; dust and grime. Includes steam-cleaning of grout, extraction of upholstery, and the fine-dust wipe-down that builders never include in their quote — essential before the next guest arrives.",
    cta: "Get after builders cleaning quote",
  },
  {
    icon: Sparkles,
    title: "Fabric Restoration · Deep Carpet Cleaning",
    href: "/services/carpet-rug-cleaning",
    image: IMG.leaseCarpet,
    imageAlt: "Eco-labelled carpet cleaning supplies restoring high-traffic holiday let rugs",
    description:
      "Bring old or dirty carpets back to life with our Deep Carpet Cleaning, removing germs, stains, and unwanted odours. Hot-water extraction for high-turnover properties with heavy guest footfall — book as a one-off or schedule quarterly to protect your flooring investment.",
    cta: "Book carpet & rug cleaning",
  },
];

export function HolidayLetSeoInterlinking() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Beyond turnovers · specialist resets
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Specialized Solutions for Property Owners
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring home cleaning for holiday lets is the heartbeat of your property&rsquo;s
            maintenance, but we offer specialized reset services for more intensive needs &mdash; from
            seasonal deep cleans to post-renovation dust removal. The same trusted crew can step up
            when life changes between bookings.
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
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                      {sol.description}
                    </p>
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
// Section 6 — "Near Me" Location Internal Links
// (Semantic H2: "Holiday Let Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
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

export function HolidayLetSeoNearMe() {
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
              Local holiday let crews across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Holiday Let Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;holiday let cleaning near me&rdquo; in Scotland? Maundy Clean
              covers 72+ towns and cities across the Central Belt, Highlands, Borders, and Islands.
              Same PVG-checked standard, same 90-minute response window, same dedicated crew every
              turnover &mdash; wherever your short-term let happens to be. Find your local turnover
              crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean holiday let turnover coverage areas"
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
                  Same PVG-checked crews, same dedicated team every turnover, same 90-minute response
                  window — from Glasgow to Lerwick.
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
                Find your local turnover crew
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
                    href={`/locations/${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> holiday lets</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don&apos;t see your town? We add new postcodes every month.</span>
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
            Our local holiday let turnover crews operate across Glasgow&rsquo;s West End,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s suburbs, Dundee&rsquo;s city centre, and the
            Highlands &mdash; from Inverness to Thurso, Fort William to Lerwick. Whether
            you&rsquo;re searching for Airbnb turnover cleaning in Glasgow, Booking.com changeover
            service in Edinburgh, holiday let cleaning in Aviemore, or short-term let housekeeping
            anywhere in between, Maundy Clean assigns a PVG-checked, PAYE-employed professional that
            stays with you for the long run. Same crew, same day, same 90-minute response window.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Refresh Your Holiday Let?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function HolidayLetSeoFinalCta() {
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
            Ready to refresh your holiday let?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Refresh Your Holiday Let?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price holiday let turnover quote in 30 seconds. No pushy sales call, no
            waiting 24 hours for a callback. PVG-checked crews, 7-day availability, guest-safe eco
            products, photographic proof, and a 90-minute response window — from £65/turnover.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Get My Instant Quote Now
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
                View Our Turnover Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — SEO FAQ block
// (Semantic H2: "Frequently Asked Questions")
// 6 Q&As — 3 from the user brief + 3 holiday-let-specific additions
// ============================================================

const SEO_FAQS = [
  {
    q: "Do you manage key handovers?",
    a: "Yes. Our staff operate a secure key safe system, allowing us to perform turnovers efficiently even when you are not at the property. We can install a key safe for £40 if you don't have one, and we can also handle in-person key handovers for guests who prefer it — meet your guest at the property, hand over the keys, walk them through the basics (heating, hot water, WiFi, bins, parking), and lock up. £25 per handover, available 8am–9pm, 7 days a week.",
  },
  {
    q: "Do you provide the cleaning supplies?",
    a: "Absolutely. We supply all of our own professional-grade equipment and eco-friendly products, which are included in your competitive quote — no surprise add-on charges, no asking you to stock products. Our crews arrive with everything they need: EU Ecolabel cleaning products, fresh linens (your supply or ours at trade pricing), steam cleaners for grout, squeegees for glass, microfibre cloths, and specialist guest-presentation kit. You don't need to provide anything except access to the property.",
  },
  {
    q: "What if a guest leaves the property in poor condition?",
    a: "For properties requiring heavy-duty cleaning due to neglect or extreme mess, we recommend our After Builders / Extreme Clean protocol to bring the home back to its best. This is a separate, quote-based service that goes beyond a standard turnover — including deep extraction of upholstery, steam-cleaning of grout, oven dip-tank cleaning, and biohazard-grade disinfection where needed. We always text you photos of the condition before we begin, so you can decide whether to charge the guest via your platform's damage process. Most turnovers don't need this — but when they do, we have the kit and the crew.",
  },
  {
    q: "How quickly can you turn a property between guests?",
    a: "Most turnovers are scheduled to start 30 minutes after your published check-out time, with the property ready for the next check-in 2.5–3.5 hours later depending on size. For last-minute same-day bookings in our core service areas (Glasgow, Edinburgh, Aberdeen, Dundee, Stirling, Inverness), our 90-minute response window means we can typically mobilise a crew fast. Festival season in August is our busiest period — book early for Edinburgh and Glasgow properties, but we always try to fit hosts in.",
  },
  {
    q: "Can you handle multiple properties on the same turnover day?",
    a: "Yes. We support portfolio hosts with 1 to 20+ properties across Scotland. Each property gets a dedicated crew lead (not a different face every time), a shared account manager who understands your overall hosting operation, and a single portal where you can see every turnover, every photo set, every restock log, and every invoice. Volume discounts kick in at 3+ properties — ask us about portfolio pricing.",
  },
  {
    q: "Do you offer a guarantee if a guest complains about cleanliness?",
    a: "Yes. If a guest reports a cleaning issue — or you spot one in the turnover photos we upload to your portal — text your account manager and we'll have a crew back at the property within 90 minutes in core service areas (Glasgow, Edinburgh, Aberdeen, Dundee, Stirling, Inverness). For more remote properties, we'll be honest about realistic response times. The re-clean is free, no questions, no friction. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee.",
  },
];

export function HolidayLetSeoFaq() {
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
            Holiday let turnover · FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our holiday let hosts ask most often. Can&apos;t find
            what you need? Call us on{" "}
            <a
              href={contactInfo.phoneHref}
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4"
            >
              {contactInfo.phone}
            </a>{" "}
            and we&apos;ll talk it through.
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
                  <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                    {faq.a}
                  </p>
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
                Get My Instant Quote Now
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
                View Our Turnover Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
  Wind,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg", // bright panoramic living room (matches ServiceDetail heroImage)
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/0ba2e6837712.jpg", // uniformed cleaning crew
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/8fce1b536378.jpg", // eco-spray kitchen
  checklistBathroom:
    "https://sfile.chatglm.cn/images-ppt/b9a3fe6960e9.webp", // sparkling bathroom chrome
  checklistLiving:
    "https://sfile.chatglm.cn/images-ppt/8c109fd7dbba.jpg", // spotless living room sunlight
  checklistWindows:
    "https://sfile.chatglm.cn/images-ppt/0ae5e527798e.jpg", // squeegee window cleaning
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/a68134acc7e3.jpeg", // crew cleaning home (deep clean)
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg", // empty flat move-in (tenancy)
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg", // post-builders cleanup
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg", // map of Scotland
};

// ============================================================
// Section 0 — Full-width hero banner
// Semantic H1: "Professional Spring Cleaning Services in Glasgow & Edinburgh"
// ============================================================

export function SpringSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Bright, freshly spring-cleaned Scottish living room bathed in morning light"
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
            Spring Cleaning · Glasgow · Edinburgh · 30 Scottish towns
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Spring Cleaning Services in Glasgow &amp; Edinburgh
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Reliable, meticulous, and local housekeeping tailored to your Scottish lifestyle. Our
            top-to-bottom spring clean uses a 64-point checklist per room, an eco-friendly product
            suite safe for children and pets, and a 30-day re-clean guarantee. From £22/hr with a
            team of 2–3 PVG-checked cleaners.
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
              <a href={contactInfo.phoneHref}>
                <Zap className="w-4 h-4" />
                Same-day quote
              </a>
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
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Eco-labelled supplies
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> 30-day re-clean guarantee
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

export function SpringSeoIntro() {
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
            Professional spring cleaning · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Annual Spring Cleaning
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            A proper spring clean is far more than a seasonal tidy-up — it is a full top-to-bottom
            reset of your home that lifts a winter&rsquo;s worth of dust, allergens, and grime from
            places your weekly clean never reaches. At Maundy Clean, our spring cleaning service
            follows a documented{" "}
            <strong className="font-semibold text-[var(--ink)]">64-point checklist</strong>,
            combining technical depth with consistent local trust. In a world where everyone is
            living busy lives, the thought of pulling out furniture and washing every skirting board
            in your limited spare time can feel overwhelming. We transform the &ldquo;dreaded&rdquo;
            necessity of an annual reset into a seamless, premium experience &mdash; built on the
            Maundy tradition of care, meticulous service, and a higher standard of hygiene for the
            Scottish home.
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
            { label: "Checklist depth", value: "64 points/room" },
            { label: "Average duration", value: "1–2 days" },
            { label: "Re-clean rate", value: "1.4% of jobs" },
            { label: "Photo report", value: "Within 24 hrs" },
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
// Section 2 — Why Maundy Clean is Scotland's Trusted Choice
// (H2: "Why Maundy Clean is Scotland's Trusted Choice for Spring Cleaning")
// Image+copy split layout
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "A Vetted Team That Treats Your Home Like Their Own",
    description:
      "We believe trust is the foundation of a professional service. That is why we send a consistent team of 2–3 PVG-checked, PAYE-employed cleaners who carry official Maundy Clean identification. They arrive in uniform, on time, with a team leader who stays on site for the entire clean and a final QC walkthrough before handover.",
  },
  {
    icon: Shield,
    title: "Fully Vetted, Insured & Vocationally Trained",
    description:
      "Every cleaner is Disclosure Scotland PVG-checked, £5m public-liability insured, and trained in our 64-point spring clean checklist before they ever set foot in a client home. We are not an agency and we do not sub-contract &mdash; every member of the team is employed by us, trained by us, and accountable to us.",
  },
  {
    icon: Leaf,
    title: "Safe for Your Family and the Environment",
    description:
      "We utilise certified child- and pet-safe products and eco-friendly supplies that are EU Ecolabel and DEFRA-approved. No bleach, no ammonia, no caustic soda &mdash; just plant-based degreasers, food-safe sanitisers, pH-neutral stone cleaners, and natural citric-acid limescale removers that protect both your loved ones and the beautiful Scottish landscape.",
  },
];

export function SpringSeoWhy() {
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
                alt="Maundy Clean spring cleaning crew in uniform arriving at a Scottish home"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    64-Point Checklist · Photo Report
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  PVG-checked team of 2–3, £5m public liability, and a 30-day re-clean guarantee on
                  every spring clean we complete.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Repeat bookings</div>
                  <div className="text-xs font-bold text-[var(--ink)]">82% annual</div>
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
              Why Maundy Clean is Scotland\'s Trusted Choice for Spring Cleaning
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Maundy Clean is a local, personal, and affordable cleaning specialist across the
              Central Belt. Every spring clean is delivered by a vetted, uniformed, PAYE-employed
              crew and built on high-trust relationships and technical excellence — never
              high-pressure booking funnels or faceless call centres.
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

        {/* Third card as full-width strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-7 border border-[var(--border)] flex flex-col md:flex-row items-start gap-5"
        >
          <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
            <Leaf className="w-7 h-7 text-[var(--brand)]" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
              {TRUST_CARDS[2].title}
            </h3>
            <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
              {TRUST_CARDS[2].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 3 — 3-Step "Hassle-Free" Booking Process
// (Semantic H2: "Our 3-Step 'Hassle-Free' Booking Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Book Your Quote Online",
    description:
      "Use our interactive Price List Calculator to tell us about your home — property type, bedrooms, bathrooms, any post-winter issues you have spotted — and secure your slot in under a minute. The price you see is the price you pay: a fixed hourly rate from £22/hr with no pushy sales call and no 24-hour wait for a callback.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Meet Your Professional Cleaner",
    description:
      "We send a fully equipped team of 2–3 PVG-checked cleaners who follow an agency-approved 64-point checklist for the perfect clean. Your team leader is briefed on your priority zones before arrival, lays protective sheets, and walks the property with you before starting.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Pristine Home",
    description:
      "Walk into a space that looks, smells, and feels fresh for months to come — backed by our Maundy Clean 30-day satisfaction guarantee. We email you a photo report of any issues found within 24 hours, and many clients rebook us annually at the same time each year.",
  },
];

export function SpringSeoBooking() {
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
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our 3-Step &ldquo;Hassle-Free&rdquo; Booking Process
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have made the booking process uncomplicated and straightforward, featuring a 30-second
            instant quote tool and a same-day callback promise. From quote to clean in under a week.
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
              Get an Instant Quote Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 — Detailed What's Included (4 categories)
// (Semantic H2: "Our Comprehensive Domestic Cleaning Scope")
// Image-per-card layout
// ============================================================

const INCLUDED_DETAIL = [
  {
    icon: SprayCan,
    title: "Kitchens & Bathrooms",
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean technician wiping down a kitchen countertop with eco-friendly spray during a spring clean",
    description:
      "These high-use areas receive special treatment, including disinfecting all ceramic items, buffing chrome to a high shine, and scrubbing shower doors to remove limescale. We descale shower heads and taps, treat grout with anti-fungal, sanitise toilets behind and around the connection, and clean inside kitchen cupboards with your permission.",
    points: [
      "Disinfect all ceramic items",
      "Buff and polish chrome fittings",
      "Descaling of shower heads & screens",
      "Anti-fungal grout treatment",
      "Inside kitchen cupboards (with permission)",
    ],
  },
  {
    icon: Home,
    title: "Detailed Dusting & Polishing",
    image: IMG.checklistLiving,
    imageAlt: "Spotless living room after a Maundy Clean spring clean with sunlight streaming in",
    description:
      "We move ornaments to clean underneath them, polish wood and glass, and ensure mirrors are streak-free. Our team dusts ceiling cornicing with extension poles, vacuums lampshades with a soft brush, cleans behind picture frames, and pulls out sofas and armchairs to clean underneath and behind.",
    points: [
      "Ceiling cornicing dusted with extension poles",
      "Lampshades vacuumed with soft brush",
      "Polish wood and glass throughout",
      "Mirrors cleaned streak-free",
      "Behind & under furniture moved and replaced",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Floor & Fabric Care",
    image: IMG.checklistBathroom,
    imageAlt: "Deep-cleaned bathroom floor with chrome fittings shining after a spring clean",
    description:
      "We provide intensive vacuuming of all carpets — including edge-to-edge and under beds — and deep cleaning of hard floors with pH-neutral cleaners that protect natural stone. For an even fresher finish, you can add our Deep Carpet Shampoo service to your spring clean schedule.",
    points: [
      "Intensive carpet vacuuming edge-to-edge",
      "Deep-clean all hard floors",
      "pH-neutral cleaners safe for stone",
      "Hardwood damp-mopped with care",
      "Optional Deep Carpet Shampoo add-on",
    ],
  },
  {
    icon: Sparkles,
    title: "The Often-Missed Details",
    image: IMG.checklistWindows,
    imageAlt: "Professional cleaner using a squeegee on interior window glass during a spring clean",
    description:
      "Our cleaners meticulously wipe skirting boards, door frames, architraves, and window reveals — and clean the inside of your windows as standard. The full clean is reviewed against our 64-point checklist per room, and we email you a photo report of any issues found within 24 hours.",
    points: [
      "Skirting boards wiped top, front & underneath",
      "Door frames and architraves washed",
      "Inside windows cleaned (frames, sills, glass)",
      "Window reveals and runner tracks detailed",
      "64-point checklist signed off per room",
    ],
  },
];

export function SpringSeoIncludedDetail() {
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
            What\'s included · the detail
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Domestic Cleaning Scope
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our spring clean is vastly different from a standard &ldquo;quick clean.&rdquo; We follow
            a rigorous 64-point technical checklist per room &mdash; double the depth of our regular
            cleaning &mdash; to ensure your property is reset from top to bottom, inside and out.
            Every item below is included as standard.
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
// Section 5 — Semantic Interlinking: A Solution for Every Stage
// (Semantic H2: "Semantic Interlinking: A Solution for Every Stage")
// Image-topped cards with internal links
// ============================================================

const STAGE_SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Deep Cleaning Service",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Maundy Clean crew performing a comprehensive deep clean of a Scottish home",
    description:
      "If your home needs a thorough top-to-bottom reset that goes beyond seasonal tidying, our Deep Cleaning Service is the most intensive version of this work. It uses the same 64-point checklist and adds additional detail in areas that have been neglected for an extended period — perfect for properties that have never had a professional clean before.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: KeyRound,
    title: "End of Tenancy · Deposit-Back Guarantee",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Bright Scottish tenement flat prepared for tenant handover by Maundy Clean",
    description:
      "Moving homes? Our End of Tenancy Cleaning is designed to meet strict letting-agent checklists and includes a Deposit-Back Guarantee, ensuring you pass your final inspection with flying colours. We work to the letting agent's inventory, not ours — and we'll come back free of charge if the agent flags anything.",
    cta: "Book deposit-back end of tenancy clean",
  },
  {
    icon: Hammer,
    title: "After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from a renovated home",
    description:
      "For homes that have had construction work, our After Builders Clean is our most intensive service, designed to remove heavy layers of builders' dust and grime. Includes steam-cleaning of grout, extraction of upholstery, and the fine-dust wipe-down that builders never include in their quote — the perfect partner to a spring clean after renovation.",
    cta: "Get post-builders cleanup quote",
  },
];

export function SpringSeoLeaseStages() {
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
            Beyond spring · specialist support
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Semantic Interlinking: A Solution for Every Stage
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            While our spring clean resets your home from top to bottom, Maundy Clean provides a full
            spectrum of specialist support for those &ldquo;top-to-bottom&rdquo; moments. The same
            trusted, PVG-checked team can step up when life changes &mdash; from property
            transitions to post-renovation recovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAGE_SOLUTIONS.map((sol, i) => {
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
                    <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
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
// (Semantic H2: "Spring Cleaning Near Me in Scotland")
// Split layout with map image + location grid
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

export function SpringSeoNearMe() {
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
              Local crews across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Spring Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;spring cleaning near me&rdquo; in Scotland? Maundy Clean covers
              72+ towns and cities across the Central Belt, Highlands, Borders, and Islands. Same
              64-point checklist, same PVG-checked team, same 30-day re-clean guarantee — wherever
              you are. Find your local crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean spring cleaning coverage areas"
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
                  Same 64-point checklist, same PVG-checked crews, same 30-day re-clean guarantee —
                  from Glasgow to Lerwick.
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
                Find your local spring clean crew
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
                      <span className="text-[var(--muted-foreground)]"> spring clean</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don\'t see your town? We add new postcodes every month.</span>
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
            Our local spring cleaning crews operate across Glasgow&rsquo;s West End, Edinburgh&rsquo;s
            New Town, Aberdeen&rsquo;s suburbs, Dundee&rsquo;s city centre, and the Highlands
            &mdash; from Inverness to Thurso, Fort William to Lerwick. Whether you&rsquo;re searching
            for an annual spring clean in Glasgow, a top-to-bottom reset in Edinburgh, a post-winter
            clean in Aberdeen, or seasonal cleaning services anywhere in between, Maundy Clean
            assigns a PVG-checked, PAYE-employed team that follows the same 64-point checklist and
            30-day re-clean guarantee — wherever in Scotland you call home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — Final CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Reset Your Home?")
// ============================================================

export function SpringSeoFinalCta() {
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
            Ready to reset your home?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Reset Your Home?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price spring cleaning quote in 30 seconds. No pushy sales call, no waiting 24
            hours for a callback. PVG-checked crews of 2–3, eco-labelled supplies, a 64-point
            checklist per room, a photo report within 24 hours, and a 30-day re-clean guarantee —
            from £22/hr.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
              <a href={contactInfo.phoneHref}>
                <Zap className="w-4 h-4" />
                {contactInfo.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — SEO FAQ (Schema-ready Q&A)
// (Semantic H2: "Frequently Asked Questions")
// ============================================================

const SEO_FAQS = [
  {
    q: "What is the difference between a regular clean and a spring clean?",
    a: "A regular clean is a weekly or fortnightly maintenance service that covers the surfaces and fixtures you see every day. A spring clean is a one-off top-to-bottom reset where everything is cleaned from ceiling to floor — including behind furniture, inside cupboards, atop kitchen units, behind radiators, and inside light fittings. We use a 64-point checklist per room for a spring clean vs. 32-point for regular cleaning. If your home needs the most comprehensive clean we offer, the spring clean is it.",
  },
  {
    q: "Do I need to provide any equipment or products?",
    a: "No. We supply all of our own professional-grade cleaning equipment and eco-friendly supplies, which are already included in your fixed hourly rate. Our product suite is EU Ecolabel and DEFRA-approved — plant-based degreasers, food-safe sanitisers, pH-neutral stone cleaners, and natural citric-acid limescale removers. Safe for children, pets, and anyone with respiratory sensitivities. You don't need to lift a finger.",
  },
  {
    q: "Are your cleaners insured and vetted?",
    a: "Yes. Maundy Clean is a fully insured professional cleaning company with years of experience serving the Central Belt of Scotland. Every cleaner is Disclosure Scotland PVG-checked, £5m public-liability insured, PAYE-employed (never sub-contracted), and trained in our 64-point spring clean checklist before they ever set foot in a client home. They arrive in uniform with official Maundy Clean identification.",
  },
  {
    q: "How long does a spring clean take?",
    a: "A typical 2-3 bed property takes a full day (6-8 hours) with a team of 2-3 cleaners. A 4+ bed property typically takes two days. The exact duration depends on the scope agreed at quote stage — whether you want the full house cleaned or specific rooms, whether you've requested inside cupboards or behind appliances, and the condition of the property. We always agree the scope in advance so there are no surprises.",
  },
  {
    q: "What if I'm not happy with the spring clean?",
    a: "We offer a 30-day satisfaction guarantee. If you're not completely happy with any aspect of the spring clean, call us within 30 days and we'll return to re-clean the specific areas free of charge. We also email you a photo report of any issues we found during the clean (slow leaks, mould patches, damaged sealant, broken sash cords) within 24 hours — so you have a complete picture of your home's condition.",
  },
];

export function SpringSeoFaq() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Spring cleaning · frequently asked
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know before booking a Maundy Clean spring clean in Scotland.
            Still unsure? Call us on {contactInfo.phone} — we answer every enquiry personally.
          </p>
        </motion.div>

        <div className="space-y-4">
          {SEO_FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 lg:p-7 border border-[var(--border)] shadow-sm hover:shadow-brand hover:border-[var(--brand)]/20 transition-all"
            >
              <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight">
                {faq.q}
              </h3>
              <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-light)]/40"
              asChild
            >
              <Link href="#whats-included">View Our Spring Clean Checklist</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

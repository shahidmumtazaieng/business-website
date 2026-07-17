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
  Building2,
  Sofa,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.12.26%20PM.jpeg", // bright tenement flat living room (matches ServiceDetail heroImage)
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/0ba2e6837712.jpg", // uniformed cleaning crew
  checklistLiving:
    "https://sfile.chatglm.cn/images-ppt/8c109fd7dbba.jpg", // spotless living room sunlight
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/8fce1b536378.jpg", // eco-spray kitchen
  checklistBathroom:
    "https://sfile.chatglm.cn/images-ppt/b9a3fe6960e9.webp", // sparkling bathroom chrome
  checklistWindows:
    "https://sfile.chatglm.cn/images-ppt/0ae5e527798e.jpg", // squeegee window cleaning
  stageMoveInOut:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg", // empty flat move-in
  stageBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg", // post-builders cleanup
  stageCarpet:
    "https://sfile.chatglm.cn/images-ppt/2353ab471a3d.jpg", // bright tenement flat carpet
  stageOven:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg", // kitchen / oven area
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg", // map of Scotland
};

// ============================================================
// Section 0 — Full-width hero banner
// H1: "Expert Recurring Flat Cleaning Scotland"
// ============================================================

export function FlatSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Bright, spotless Scottish tenement flat living room maintained by Maundy Clean flat cleaning crew"
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
            Flat Cleaning · Glasgow · Edinburgh · 30 Scottish towns
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Expert Recurring Flat Cleaning Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Consistent care and professional housekeeping for your urban sanctuary.
            The same PVG-checked professional every visit, a 32-point flat-specific
            checklist, HEPA filtration for compact spaces, and a 100% re-clean guarantee
            if anything&apos;s missed. Weekly, fortnightly &amp; monthly plans from £18/hr.
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
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Same cleaner every visit
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 — Long-form SEO intro
// Sits right after the hero, before the existing ServiceOverview.
// ============================================================

export function FlatSeoIntro() {
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
            Professional flat cleaning · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Flat Cleaning
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Struggling to find enough time to maintain your home in Glasgow, Edinburgh, or
            across the Central Belt? At Maundy Clean, we understand that flat living in
            Scotland comes with unique challenges — from high-traffic city-centre dust to
            the specific architectural details of traditional tenements. Our recurring flat
            cleaning service is designed to transform your property into a pristine
            sanctuary, providing a premium housekeeping experience at a fair price. Whether
            you require a weekly or fortnightly visit, we move beyond the standard{" "}
            <strong className="font-semibold text-[var(--ink)]">&ldquo;surface wipe&rdquo;</strong>{" "}
            to deliver a level of technical excellence built on the Maundy tradition of
            care, meticulous service, and a higher standard of hygiene for the Scottish home.
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
            { label: "Flat-specific checklist", value: "32 points" },
            { label: "Re-clean rate", value: "1.4% of visits" },
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
// Section 2 — Why Maundy Clean is Scotland's Trusted Choice
// (H2: "Why Maundy Clean is Scotland's Trusted Choice for Flat Cleaning")
// Image+copy split layout
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "The Same Trusted Professional Every Visit",
    description:
      "We believe reliability and trust are paramount. That is why we ensure the same vetted professional gets to know your property in detail every time. Our crew leads stay with us an average of 4.2 years — they learn your flat&apos;s quirks, your priority zones, and the close etiquette of your building, visit after visit.",
  },
  {
    icon: Building2,
    title: "Specialist Flat Knowledge — Tenement to Modern",
    description:
      "From modern apartments to high-ceilinged tenements, our staff are trained to handle the specific requirements of flat cleaning in Scotland. That includes managing communal entryways and closes, sash-and-case window care, working around compact galley kitchens, and the city-centre parking and access logistics that come with every Scottish flat.",
  },
  {
    icon: Shield,
    title: "Fully Vetted & Uniformed Technicians",
    description:
      "We only recruit the best to be part of our team. Every member is fully trained, background-checked under the Disclosure Scotland PVG scheme, insured with £5m public liability cover, and carries official Maundy Clean identification for your total peace of mind.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Family Safe",
    description:
      "Your health is our priority. We supply all our own professional-grade equipment and use only certified child-safe and pet-safe products as standard — EU Ecolabel and DEFRA-approved low-VOC formulations that won&apos;t linger in compact flat spaces with limited ventilation.",
  },
];

export function FlatSeoWhy() {
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
                alt="Maundy Clean flat cleaning crew in uniform arriving at a Scottish tenement close"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Same Crew · Every Visit
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  PVG-checked, PAYE-employed, and uniformed. Crew leads stay with us 4.2 years on
                  average — they know your close, your sash windows, your key-safe code.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Client retention</div>
                  <div className="text-xs font-bold text-[var(--ink)]">98%</div>
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
              Why Maundy Clean is Scotland&apos;s Trusted Choice for Flat Cleaning
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Maundy Clean is a local, premium cleaning specialist focused on building
              high-trust relationships with our clients across the Central Belt. Every flat
              clean is delivered by a vetted, uniformed, PAYE-employed crew — built on trust,
              consistency, and genuine local expertise in Scottish flat types from tenement to
              modern development.
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

        {/* Remaining cards as 2-up grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {TRUST_CARDS.slice(2).map((card, i) => {
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
// Section 3 — 3-Step "Hassle-Free" Booking Process
// (H3: "The Maundy Clean 3-Step Hassle-Free Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "30-Second Instant Quote",
    description:
      "Use our online Price List Calculator to tell us about your flat — property type (tenement, modern, four-in-a-block), bedrooms, bathrooms, floor level, and frequency — and receive a simple, fixed-price quote in under a minute. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Meet Your Professional",
    description:
      "We match you with a local professional who fits your schedule, offering flexible appointments across five days a week. If you are at work, we operate a secure key-safe system to protect your property — your crew lead is briefed on your flat type and priority zones before the first visit.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Pass Every Inspection",
    description:
      "Enjoy a home that is always spotless and inviting, backed by our Maundy Clean satisfaction guarantee and a 32-point flat-specific checklist. If a letting agent, factor, or landlord ever flags anything, we come back free of charge to put it right — no quibbles, no extra invoices.",
  },
];

export function FlatSeoBooking() {
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
            The Maundy Clean 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have made the booking experience straightforward and helpful, with a 30-second
            instant quote tool and a same-day callback promise. From quote to first clean in
            under 48 hours.
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
// Section 4 — Detailed What's Included (4 image-topped cards)
// (H2: "Our Comprehensive Flat Maintenance Checklist")
// ============================================================

const INCLUDED_DETAIL = [
  {
    icon: Home,
    title: "Living Areas & Bedrooms",
    image: IMG.checklistLiving,
    imageAlt: "Spotless Scottish tenement living room maintained by Maundy Clean flat cleaning service",
    description:
      "Meticulous dusting of all surfaces, including ornaments, light fixtures, and family photos. We polish wood, glass, and mirrors to a streak-free shine, and target the often-overlooked spaces — skirting boards, door frames, and window sills — that catch dust in high-ceilinged tenement flats.",
    points: [
      "Dust all surfaces, ornaments, light fittings",
      "Polish wood, glass, and mirrors streak-free",
      "Wipe skirting boards, door frames, sills",
      "Dust high cornicing (tenement-ready extension poles)",
      "Vacuum under beds and sofa cushions",
    ],
  },
  {
    icon: SprayCan,
    title: "Kitchen & Bathroom Hygiene",
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean technician wiping down a compact flat kitchen with eco-friendly spray",
    description:
      "Deep cleaning of high-use worktops, splashbacks, and ceramic items. Professional buffing of taps and chrome fixtures to remove water spots and limescale. We wipe down the exterior of your oven, hob, fridge, and microwave as part of every visit, and use anti-fungal products on bathroom grout and silicone where ventilation is limited.",
    points: [
      "Sanitise worktops, splashbacks, ceramics",
      "Buff and polish chrome taps & shower fittings",
      "Wipe oven, hob, fridge & microwave exteriors",
      "Descale toilets and shower heads",
      "Anti-fungal treatment on grout & silicone",
    ],
  },
  {
    icon: Wind,
    title: "Floor Care & HEPA Vacuuming",
    image: IMG.checklistBathroom,
    imageAlt: "Deep-cleaned flat bathroom floor with chrome fittings shining",
    description:
      "Intensive vacuuming of all carpets and upholstery with HEPA-filtered vacuums — essential for flats where dust has fewer escape routes than in a house. Followed by mopping and disinfecting of hard floors to kill germs and maintain freshness in compact layouts where foot traffic is concentrated.",
    points: [
      "HEPA-filtered vacuum (captures 99.97% @ 0.3µm)",
      "Edge-to-edge carpet & upholstery vacuuming",
      "Mop and disinfect hard floors",
      "pH-neutral cleaner for hardwood & laminate",
      "Tile & grout scrub in high-traffic zones",
    ],
  },
  {
    icon: Sparkles,
    title: "Window Interiors & Close Etiquette",
    image: IMG.checklistWindows,
    imageAlt: "Professional cleaner using a squeegee on interior sash window glass in a Scottish flat",
    description:
      "We clean the inside of every reachable window — frames, sills, glass, and handles — with a streak-free squeegee finish. For tenement sash-and-case windows, we work carefully: no forcing stiff sashes, no pulling on weak cords. Your cleaner also respects close etiquette — quiet entry, door closure, no obstructing communal areas with equipment.",
    points: [
      "Interior window glass, frames, sills, handles",
      "Sash-and-case window care (no forced sashes)",
      "Window tracks vacuumed with crevice tool",
      "Streak-free squeegee finish",
      "Quiet entry & close-aware conduct",
    ],
  },
];

export function FlatSeoIncludedDetail() {
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
            What&apos;s included · the detail
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Flat Maintenance Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our regular house cleaning ensures your flat is maintained from top to bottom.
            We follow a rigorous, 32-point flat-specific checklist to ensure no detail is
            overlooked — and every item below is included as standard, with no add-on fees
            or surprise charges.
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
// Section 5 — Semantic Interlinking: Solutions for Every Transition
// (H2: "Solutions for Every Transition")
// Image-topped cards with internal links
// ============================================================

const STAGE_SOLUTIONS = [
  {
    icon: KeyRound,
    title: "Move-In / Move-Out Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.stageMoveInOut,
    imageAlt: "Empty Scottish flat being deep cleaned for new tenant move-in",
    description:
      "Preparing for a new tenant? Our End of Tenancy Cleaning includes a 100% Deposit-Back Guarantee to ensure you fulfil your lease requirements — full inventory documentation, appliance interiors, inside cabinets, and the skirting board detail that letting agents actually inspect.",
    cta: "Explore move-in / move-out cleaning",
  },
  {
    icon: Hammer,
    title: "The Heavy-Duty Reset — After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.stageBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from a flat",
    description:
      "If your flat has recently undergone renovation, our After Builders Clean is designed to remove construction dust and grime from even the hardest-to-reach areas — HEPA H-class filtration, tack-cloth particulate capture, and a top-down room-sealed protocol that genuinely captures dust rather than redistributing it.",
    cta: "Get post-builders cleanup quote",
  },
  {
    icon: Sofa,
    title: "Fabric Care — Carpet & Oven Cleaning",
    href: "/services/carpet-rug-cleaning",
    image: IMG.stageCarpet,
    imageAlt: "Bright tenement flat carpet after professional hot-water extraction",
    description:
      "Bring your floors back to life by adding a Deep Carpet Clean or Oven Clean to your regular schedule. Hot-water extraction for flat carpets and rugs, and a non-caustic dip-tank oven clean that lifts years of carbonised grease — both bookable as add-ons to your recurring flat cleaning plan.",
    cta: "Add carpet or oven cleaning",
  },
];

export function FlatSeoLeaseStages() {
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
            Beyond recurring · transitions
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Transition
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            A truly clean flat is about more than just the visible surfaces — it is about
            understanding the full life cycle of a property. While our recurring flat cleaning
            keeps your home in peak condition, we also offer specialised support for major
            property milestones — so the same trusted crew can step up when life changes.
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
// Section 6 — SEO FAQ (Schema-ready Q&A)
// (H2: "Frequently Asked Questions")
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured?",
    a: "Yes. Maundy Clean is a fully insured, trusted, and reputable professional cleaning company. Every flat cleaning visit is covered by £5m public liability insurance — protecting your flat, your contents, and communal areas of your building. We also carry employer's liability and professional indemnity cover as standard.",
  },
  {
    q: "Do I need to provide cleaning products?",
    a: "No. We supply all our own high-quality cleaning equipment and eco-friendly products as standard, including HEPA-filtered vacuums, microfibre cloths, squeegees, and EU Ecolabel-certified low-VOC formulations. If you prefer a specific brand for a particular surface — say a favourite stainless-steel polish or a fragrance-free bathroom spray — we are happy to use yours instead.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. At Maundy Clean, we let the quality of our results speak for us. You are never tied into a long-term contract for your regular flat cleaning — you can pause, reschedule, or cancel your recurring plan with 48 hours' notice. We earn your business visit by visit, not with cancellation fees.",
  },
  {
    q: "Can you clean my tenement flat if I'm on the top floor with no lift?",
    a: "Yes. We clean top-floor tenement flats across Edinburgh, Glasgow, and Aberdeen regularly. Our cleaners are equipped with lightweight HEPA vacuums and carry-on kits designed for stair access. There is no surcharge for upper-floor access without a lift, but please let us know in advance so we can allocate a cleaner comfortable with stair carries.",
  },
  {
    q: "How do you handle shared closes and stairwells?",
    a: "Inside your flat is always included. Shared closes and stairwells are typically the factor's responsibility, but we will sweep the immediate steps outside your door as a courtesy. If you would like a more thorough close clean — full sweep and mop of your stairwell, dusting of banisters and close windows — we can quote this as a separate service and invoice each flat separately if neighbours want to split the cost.",
  },
  {
    q: "What if I'm not home during the clean?",
    a: "No problem. Many of our flat cleaning clients are at work during their scheduled visit. We operate a secure key-safe protocol — you provide a coded key safe at your flat, we log the code securely, and your cleaner locks up and sets any alarm on departure. Alternatively, you can leave a key with a trusted neighbour or concierge. Your crew lead is briefed on building access, parking, and quiet-entry rules.",
  },
];

export function FlatSeoFaq() {
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
            Flat cleaning · FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our flat cleaning clients ask most often.
            Can&apos;t find what you need? Call us on{" "}
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
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — "Near Me" Location Internal Links
// (H2: "Flat Cleaning Near Me in Scotland")
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

export function FlatSeoNearMe() {
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
              Flat Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;flat cleaning near me&rdquo; in Scotland? Maundy Clean covers
              72+ towns and cities across the Central Belt, Highlands, Borders, and Islands —
              from Glasgow tenements to Edinburgh New Town flats, Aberdeen granite crescents to
              Dundee waterfront apartments. Same PVG-checked standard, same 100% re-clean
              guarantee, same dedicated crew every visit — wherever your flat is. Find your local
              crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean flat cleaning coverage areas"
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
                  Same PVG-checked crews, same dedicated crew every visit, same 100% re-clean
                  guarantee — from Glasgow to Lerwick.
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
                Find your local flat cleaning crew
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
                      <span className="text-[var(--muted-foreground)]"> flat cleaning</span>
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

        {/* Long-form paragraph for "near me" search intent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Our local flat cleaning crews operate across Glasgow&rsquo;s West End and Merchant
            City, Edinburgh&rsquo;s New Town and Marchmont, Aberdeen&rsquo;s granite crescents,
            Dundee&rsquo;s city centre, and the Highlands &mdash; from Inverness to Thurso, Fort
            William to Lerwick. Whether you&rsquo;re searching for weekly flat cleaning in
            Glasgow, fortnightly flat cleaning in Edinburgh, monthly cleaning in Aberdeen, or
            regular tenement cleaning anywhere in between, Maundy Clean assigns a PVG-checked,
            PAYE-employed crew that stays with you for the long run. Same crew, same day, same
            locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — Final CTA strip (companion to ServiceFinalCta)
// (H3: "Ready to Refresh Your Flat?")
// ============================================================

export function FlatSeoFinalCta() {
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
            Ready to refresh your flat?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Refresh Your Flat?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price flat cleaning quote in 30 seconds. No pushy sales call, no waiting
            24 hours for a callback. PVG-checked crews, HEPA filtration for compact spaces, a
            32-point flat-specific checklist, and a 100% re-clean guarantee — from £18/hr.
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

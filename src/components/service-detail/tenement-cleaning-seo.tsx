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
  Brush,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.28.09%20PM.jpeg", // bright tenement hallway encaustic tiles (matches ServiceDetail heroImage)
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/0ba2e6837712.jpg", // uniformed cleaning crew
  checklistClose:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", // restored tenement close / hallway
  checklistInterior:
    "https://sfile.chatglm.cn/images-ppt/8c109fd7dbba.jpg", // spotless living room sunlight
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/8fce1b536378.jpg", // eco-spray kitchen
  checklistWindows:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", // sash window detail / paint removal
  stageMoveInOut:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg", // empty tenement flat move-in
  stageBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg", // post-builders cleanup
  stageSpring:
    "https://sfile.chatglm.cn/images-ppt/2353ab471a3d.jpg", // bright spring-cleaned tenement room
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg", // map of Scotland
};

// ============================================================
// Section 0 — Full-width hero banner
// H1: "Professional Tenement Cleaning Glasgow & Paisley"
// ============================================================

export function TenementSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Restored tenement close and hallway with original encaustic tiles maintained by Maundy Clean"
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
            Tenement Cleaning · Glasgow · Edinburgh · Paisley · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Tenement Cleaning Glasgow &amp; Paisley
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Expert close cleaning, stair maintenance, and recurring home cleaning for traditional
            Scottish properties. The same PVG-checked specialist every visit, original-feature
            care (cornicing, sash windows, encaustic tiles, pitch-pine floors), and a 100%
            re-clean guarantee. One-off specialist cleans from £145; recurring close &amp; flat
            plans from £18/hr.
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
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Same specialist every visit
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

export function TenementSeoIntro() {
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
            Professional tenement cleaning · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Tenement Care
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Maintaining a tenement building requires more than just a quick sweep — it demands a
            specialist partner who understands the unique architectural heritage of Glasgow,
            Edinburgh, and Paisley. At Maundy Clean, we provide a comprehensive tenement
            cleaning service that covers every inch of your property, from the communal entrance
            and close stairs to the interior of your individual sanctuary. Original cornicing is
            dry-brushed, never wet-wiped. Sash cords are dry-brushed, never wet. Encaustic
            hallway tiles use pH-neutral cleaner, never acid. Pitch-pine floors get tack-cloth
            and oil, never water. Whether you are a resident association, a property factor, or a
            busy professional looking for recurring home cleaning, our service is built on trust,
            consistency, and a{" "}
            <strong className="font-semibold text-[var(--ink)]">Maundy level of care</strong> for
            the Scottish period-property home.
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
            { label: "Period-property experience", value: "Hundreds of tenements" },
            { label: "Typical 2-bed specialist clean", value: "1 day · £245" },
            { label: "Re-clean rate", value: "1.4% of jobs" },
            { label: "Specialist retention", value: "4.2 years avg" },
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
// (H2: "Why Maundy Clean is Scotland's Trusted Choice for Tenement Cleaning")
// Image+copy split layout
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "The Same Trusted Specialist Every Visit",
    description:
      "Trust is paramount in communal spaces. That is why we ensure the same vetted specialist visits your building every time — building a deep understanding of your close, your stair, your sash windows, and your priority zones. Our specialists stay with us an average of 4.2 years, so they know your building&apos;s quirks as well as you do.",
  },
  {
    icon: Building2,
    title: "Specialist Period-Flooring Care",
    description:
      "We are fully equipped to handle Linotol cleaning, stone stair restoration, encaustic tile revival, and modern tile maintenance — using the right chemistry for each surface. Acid never touches encaustic (it dissolves the lime bed); water never touches pitch-pine (it raises the grain). Your communal areas and interior floors are not just clean, they are preserved for years to come.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Family Safe",
    description:
      "We use only certified child-safe and pet-safe products as standard — EU Ecolabel and DEFRA-approved low-VOC formulations. Our non-toxic solutions are safe for the family living in the flat, the neighbours sharing the close, and the Scottish landscape we all share.",
  },
  {
    icon: Shield,
    title: "SafeContractor Standards & £5m Liability",
    description:
      "Every Maundy Clean technician is fully trained, Disclosure Scotland PVG-checked, insured with £5m public liability cover, and carries official Maundy Clean identification for your total peace of mind — whether they are cleaning your private flat or moving through a shared close.",
  },
];

export function TenementSeoWhy() {
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
                alt="Maundy Clean tenement cleaning specialist in uniform arriving at a Glasgow close"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    Same Specialist · Every Visit
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  PVG-checked, PAYE-employed, uniformed, and trained on cornicing, sash windows,
                  encaustic tiles, and pitch-pine floors. Specialists stay 4.2 years on average.
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
              Why Maundy Clean is Scotland&apos;s Trusted Choice for Tenement Cleaning
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Maundy Clean is a local, premium cleaning specialist focused on building
              high-trust relationships with tenement residents, factors, and resident
              associations across the Central Belt. Every tenement clean is delivered by a
              vetted, uniformed, PAYE-employed specialist — trained in the technical needs of
              traditional Scottish flats while ensuring the highest standards of safety and
              hygiene for communal and private spaces alike.
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
// (H2: "The Maundy Clean 3-Step 'Hassle-Free' Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant Online Quote",
    description:
      "Use our 30-second quote tool to tell us about your tenement — close and stair only, recurring interior flat cleaning, or a one-off specialist period-property clean — and receive a fixed-price estimate instantly. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We match your building or flat with a local tenement specialist who fits your schedule, offering appointments five days a week. For communal close cleans we coordinate with your factor or resident association; for private flats we operate a secure key-safe protocol if you can&apos;t be home. Your specialist is briefed on your building&apos;s original features before the first visit.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Pristine Property",
    description:
      "Experience a finish that leaves your entire tenement feeling fresh, clean, and welcoming — from the close entrance to the cornicing. Every clean is reviewed against our tenement-specific checklist, with a 100% re-clean guarantee if anything is missed. You also receive a photo-flagged defect report on every specialist clean, so you spot rising damp or sash-cord wear before it becomes a bigger problem.",
  },
];

export function TenementSeoBooking() {
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
            We have made our booking system straightforward and helpful, with a 30-second
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
// (H2: "Our Total Tenement Maintenance Checklist")
// ============================================================

const INCLUDED_DETAIL = [
  {
    icon: Building2,
    title: "The Close & Communal Areas",
    image: IMG.checklistClose,
    imageAlt: "Restored tenement close and hallway with original encaustic tiles",
    description:
      "Intensive sweeping and mopping of all stair levels, focusing on the removal of city-centre dust and debris. Professional cleaning of traditional flooring systems — Linotol, stone, encaustic tile — to maintain their like-new appearance. Disinfecting of high-touch points including communal door handles, entry-phone systems, and bannisters, plus meticulous cleaning of close windows to improve natural light and curb appeal.",
    points: [
      "Sweep & mop all stair levels, edge-to-edge",
      "Linotol, stone & encaustic tile restoration",
      "Disinfect door handles, entry-phone, bannisters",
      "Clean close windows for natural light",
      "Cobweb removal from stairwell corners",
    ],
  },
  {
    icon: Home,
    title: "Recurring Interior Flat Cleaning",
    image: IMG.checklistInterior,
    imageAlt: "Spotless tenement living room with original cornicing maintained by Maundy Clean",
    description:
      "Meticulous dusting of fixtures, ornaments, and skirting boards within your individual flat — including high cornicing reached with extension poles and a soft horsehair brush (never wet-wiping unpainted plaster). Living rooms, bedrooms, and hallways cleaned top-to-bottom on every recurring visit, with original features respected throughout.",
    points: [
      "Dust all surfaces, ornaments, light fittings",
      "Cornicing & ceiling roses — horsehair brush only",
      "Wipe skirting boards, door frames, sills",
      "Polish wood, glass, and mirrors streak-free",
      "Vacuum under beds and sofa cushions",
    ],
  },
  {
    icon: SprayCan,
    title: "Kitchen & Bathroom Hygiene",
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean technician wiping down a tenement flat kitchen with eco-friendly spray",
    description:
      "Deep sanitation of worktops, splashbacks, and ceramic items. Professional buffing of taps and chrome fixtures to remove water spots and limescale. We wipe down the exterior of your oven, hob, fridge, and microwave as part of every visit, and use anti-fungal products on bathroom grout and silicone where tenement ventilation is limited.",
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
    title: "Sash Windows, Floors & Fabric Care",
    image: IMG.checklistWindows,
    imageAlt: "Specialist cleaning of sash window track and pitch-pine floor in a Scottish tenement",
    description:
      "Specialist sash-and-case window care — vacuum the track with a crevice tool, dry-brush sash cords (never wet — swells and snaps them), and detail glazing bars and putty. Pitch-pine and Douglas-fir floors cleaned with a tack-cloth and replenished with Danish or linseed oil. Intensive HEPA-filtered vacuuming of carpets and period rugs, plus deep mopping of hard floors to kill germs and maintain freshness.",
    points: [
      "Sash track vacuumed with crevice tool",
      "Sash cords dry-brushed only (never wet)",
      "Pitch-pine floor tack-cloth + oil replenishment",
      "HEPA vacuum carpets & period rugs",
      "Hard floors mopped with pH-neutral cleaner",
    ],
  },
];

export function TenementSeoIncludedDetail() {
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
            Our Total Tenement Maintenance Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our recurring tenement cleaning service is designed to be technical and thorough,
            covering the areas that standard contractors often overlook — from the close
            entrance to the cornicing. Every item below is included as standard, with no
            add-on fees or surprise charges.
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
    title: "End of Tenancy · Deposit-Back Guarantee",
    href: "/services/move-in-out-cleaning",
    image: IMG.stageMoveInOut,
    imageAlt: "Empty Scottish tenement flat being deep cleaned for new tenant move-in",
    description:
      "Moving in or out of a tenement flat? Our End of Tenancy Cleaning includes a 100% Deposit-Back Guarantee to ensure you fulfil your lease — full inventory documentation, appliance interiors, inside cabinets, and the skirting board detail that letting agents in Glasgow and Edinburgh actually inspect.",
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: Hammer,
    title: "After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.stageBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from a tenement flat",
    description:
      "If your tenement flat or close has recently had work done — re-plastering, re-wiring, a new bathroom suite — our After Builders Clean is designed to remove heavy layers of construction dust. HEPA H-class filtration, tack-cloth particulate capture, and a top-down room-sealed protocol that genuinely captures dust rather than redistributing it.",
    cta: "Get post-builders cleanup quote",
  },
  {
    icon: Sparkles,
    title: "One-Off Spring Clean",
    href: "/services/spring-cleaning",
    image: IMG.stageSpring,
    imageAlt: "Bright spring-cleaned tenement living room with original features",
    description:
      "Book a one-off Spring Clean for a top-to-bottom refresh of your tenement home and communal areas — a 64-point checklist, paint-spot removal from sash window glass, deep-clean of the kitchen and bathroom, and a fresh coat of oil on the pitch-pine floors. The perfect seasonal reset for a period property.",
    cta: "Book a spring clean",
  },
];

export function TenementSeoLeaseStages() {
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
            A truly clean tenement is about more than just the visible surfaces — it is about
            understanding the full life cycle of a period property. While our recurring tenement
            cleaning maintains your daily environment, we also offer specialised support for
            major property milestones — so the same trusted specialist can step up when life
            changes.
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
    q: "Do you work with property factors and housing associations?",
    a: "Yes. We provide contracted support for factors, landlords, and resident associations across the Greater Glasgow area, including South and North Lanarkshire, Edinburgh, and Paisley. Single point of contact, consolidated invoicing per building, and consistent quality across your portfolio — whether you manage a single close or 200 tenement flats.",
  },
  {
    q: "Are your cleaners insured?",
    a: "Absolutely. Maundy Clean is a fully insured professional cleaning company with years of experience serving the Central Belt. Every visit is covered by £5m public liability insurance — protecting your flat, your contents, the communal close, and your neighbours' property. We also carry employer's liability and professional indemnity cover as standard.",
  },
  {
    q: "Do I need to provide cleaning equipment?",
    a: "No. We supply all of our own professional-grade equipment and supplies, which are included in your competitive quote — HEPA-filtered vacuums, specialist sash-window track kits, horsehair brushes for cornicing, pH-neutral cleaners for encaustic tiles, tack-cloths and oils for pitch-pine floors, and EU Ecolabel low-VOC products throughout. You don't need to buy or store anything.",
  },
  {
    q: "Can you clean the original cornicing and ceiling roses?",
    a: "Yes — this is one of our specialities. Unpainted cornicing is dry-brushed with a soft horsehair brush and HEPA vacuum attachment — never wet-wiped, which causes water staining on the bare plaster. Painted cornicing (where previous owners have emulsioned over the original) is hand-wiped with a damp microfibre, taking care not to disturb the underlying detail. Ceiling roses are cleaned the same careful way.",
  },
  {
    q: "Will the cleaning damage my pitch-pine floors?",
    a: "No. Pitch-pine and Douglas-fir floors are cleaned with a tack-cloth to lift dry dust, then replenished with a thin coat of Danish oil or linseed oil (depending on the existing finish). Water-based products raise the grain and dull the colour, so we never wet-mop — at most a barely-damp microfibre pad. The floor looks deeper and richer after our clean, not stripped or dull.",
  },
  {
    q: "How do you clean the communal close and stair?",
    a: "Inside the close, we sweep and mop all stair levels edge-to-edge, disinfect high-touch points (door handles, entry-phone, bannisters), clean the close windows for natural light, and remove cobwebs from stairwell corners. For traditional flooring — Linotol, stone, encaustic tile — we use the correct chemistry for each surface (pH-neutral for encaustic, never acid or alkaline). Close cleans can be billed per flat or to the factor directly, whichever your building prefers.",
  },
];

export function TenementSeoFaq() {
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
            Tenement cleaning · FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our tenement clients ask most often. Can&apos;t
            find what you need? Call us on{" "}
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
// (H2: "Tenement Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

const NEAR_ME_LOCATIONS: { city: string; slug: string }[] = [
  { city: "Glasgow", slug: "glasgow" },
  { city: "Edinburgh", slug: "edinburgh" },
  { city: "Paisley", slug: "paisley" },
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

export function TenementSeoNearMe() {
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
              Local specialists across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Tenement Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;tenement cleaning near me&rdquo; in Scotland? Maundy Clean
              covers 72+ towns and cities across the Central Belt, Highlands, Borders, and
              Islands — from Glasgow sandstone tenements to Edinburgh New Town flats, Paisley
              four-in-a-blocks to Aberdeen granite crescents. Same PVG-checked standard, same
              100% re-clean guarantee, same dedicated specialist every visit — wherever your
              tenement is. Find your local crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean tenement cleaning coverage areas"
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
                  Same PVG-checked specialists, same dedicated crew every visit, same 100%
                  re-clean guarantee — from Glasgow to Lerwick.
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
                Find your local tenement specialist
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
                      <span className="text-[var(--muted-foreground)]"> tenement</span>
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
            Our local tenement specialists operate across Glasgow&apos;s West End, Hyndland,
            Dowanhill, Partick, and Dennistoun; Edinburgh&apos;s New Town, Marchmont,
            Bruntsfield, Morningside, and Leith; Paisley&apos;s historic centre; Aberdeen&apos;s
            granite tenements; and Dundee&apos;s West End &mdash; from Inverness to Thurso, Fort
            William to Lerwick. Whether you&apos;re searching for recurring tenement cleaning in
            Glasgow, close and stair cleaning in Edinburgh, period-property specialist cleaning
            in Aberdeen, or one-off tenement deep cleaning anywhere in between, Maundy Clean
            assigns a PVG-checked, PAYE-employed specialist who stays with you for the long run.
            Same specialist, same day, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — Final CTA strip (companion to ServiceFinalCta)
// (H3: "Ready to Refresh Your Tenement?")
// ============================================================

export function TenementSeoFinalCta() {
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
            Ready to refresh your tenement?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Refresh Your Tenement?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price tenement cleaning quote in 30 seconds. No pushy sales call, no
            waiting 24 hours for a callback. PVG-checked specialists, original-feature care
            (cornicing, sash windows, encaustic tiles, pitch-pine floors), a 100% re-clean
            guarantee, and a photo-flagged defect report on every specialist clean — one-off
            from £145, recurring from £18/hr.
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

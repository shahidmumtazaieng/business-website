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
  Bath,
  Sun,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images — hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg", // maid service in a family home
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg", // uniformed Maundy Clean maid
  checklistLiving:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg", // bright living room, morning light
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/8fce1b536378.jpg", // eco-spray kitchen
  checklistBathroom:
    "https://sfile.chatglm.cn/images-ppt/b9a3fe6960e9.webp", // sparkling bathroom chrome
  checklistFloors:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png", // freshly vacuumed/mopped floor
  leaseSpring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg", // spring-clean / maid refresh
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg", // empty flat move-in
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg", // post-builders cleanup
  leaseOffice:
    "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg", // office / commercial space clean
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg", // map of Scotland
};

// ============================================================
// Section 0 — Full-width hero banner
// Semantic H1: "Professional Maid Service Scotland"
// ============================================================

export function MaidSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean maid service in a Scottish family home — uniformed, vetted, and reliable"
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
            Maid Service Scotland · Edinburgh · Glasgow · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Maid Service Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Premium Recurring Home Cleaning Tailored to Your Scottish Lifestyle. Built on the Maundy
            tradition of service and care, our recurring home cleaning is more than a standard maid
            service &mdash; it is a consistent commitment to your home&rsquo;s well-being, with the
            same vetted professional every visit from £18/hr.
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
                View Our Service Areas in Scotland
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
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe Products
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Same Maid Every Visit
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

export function MaidSeoIntro() {
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
            Specialist maid service · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Trusted Home Care
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Maintaining a pristine home shouldn&rsquo;t be a source of stress. Whether you are a
            busy professional in Edinburgh&rsquo;s city centre, a family in a Glasgow tenement, or a
            housebound resident requiring reliable support, Maundy Clean provides a superior{" "}
            <strong className="font-semibold text-[var(--ink)]">maid service</strong> you can trust.
            Built on the <strong className="font-semibold text-[var(--ink)]">Maundy tradition of
            service and care</strong>, our recurring home cleaning is more than a standard maid
            service &mdash; it is a consistent commitment to your home&rsquo;s well-being, with the
            same vetted professional visiting every scheduled session.
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
            { label: "Client tenure", value: "3.4 years avg" },
            { label: "Maid retention", value: "85%+" },
            { label: "Crew coverage", value: "30 Scottish towns" },
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
// Section 2 — Why Maundy Clean is Scotland's Most Trusted Maid Service
// (Semantic H2: "Why Maundy Clean is Scotland's Most Trusted Maid Service")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "The Same Cleaner Every Time",
    description:
      "We believe trust is the foundation of a great service. We ensure the same vetted professional visits your home for every scheduled session to build a deep understanding of your specific cleaning preferences. Your maid is allocated to your home and your time slot &mdash; they don&rsquo;t get reassigned, shared, or pulled elsewhere. Continuity is what turns a clean into a relationship.",
  },
  {
    icon: Shield,
    title: "Vocationally Trained & Fully Insured",
    description:
      "Our reputation has grown because we only recruit the best. Every maid is fully trained, background-checked, and our services are fully insured for your total peace of mind. Disclosure Scotland PVG scheme membership, £5m public liability cover, and official Maundy Clean identification as standard on every visit. We are a registered Scottish company &mdash; not a gig-economy agency.",
  },
  {
    icon: Leaf,
    title: "Safe for Families and Pets",
    description:
      "Your health is paramount. We use only certified child and pet-safe products and environmentally friendly supplies, ensuring a healthy environment for your loved ones and the beautiful Scottish landscape. EU Ecolabel and DEFRA-approved low-VOC products as standard. Hospital-grade alternatives available on request for medical needs or sensitive airways.",
  },
  {
    icon: KeyRound,
    title: "Secure Key Safe System",
    description:
      "For clients who are at work during our visits, we operate a secure key safe system to ensure your property remains protected while we deliver a 5-star clean. We can install a key safe for £40 if you don&rsquo;t have one, and your maid is briefed on your access protocol before the first visit. Keys are never labelled with your address and are returned to the safe at the end of every visit.",
  },
];

export function MaidSeoWhy() {
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
                alt="Maundy Clean maid — uniformed, PVG-checked, and trained in discretion"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Home className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Trusted Presence in Your Home
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, PVG-checked, uniformed, and trained in discretion. Same maid every visit
                  &mdash; never a rotating cast of strangers.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Maid retention</div>
                  <div className="text-xs font-bold text-[var(--ink)]">85%+</div>
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
              Why Maundy Clean is Scotland&rsquo;s Most Trusted Maid Service
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While many competitors operate as impersonal agencies, Maundy Clean is a professional
              cleaning company that only employs its own full-time, vetted staff. We focus on
              building deep relationships through reliability and meticulous standards &mdash; the
              same vetted professional every visit, vocationally trained staff, family-safe products,
              and a secure key safe system for clients who are at work during our visits.
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
// (Semantic H2: "Your Recurring Home Cleaning Checklist")
// Image-per-card layout
// ============================================================

const INCLUDED_DETAIL = [
  {
    icon: Home,
    title: "Living Areas & Bedrooms",
    image: IMG.checklistLiving,
    imageAlt: "Bright Scottish living room with polished surfaces and streak-free mirrors",
    description:
      "We provide meticulous dusting of all surfaces, light fixtures, and ornaments &mdash; moving items to clean underneath and behind them. We polish wood, glass, and mirrors to a streak-free shine. Our cleaners also meticulously wipe skirting boards, door frames, and even the inside of your windows &mdash; the often-missed details that signal a genuine quality clean.",
    points: [
      "Dust all surfaces, light fixtures & ornaments",
      "Move items to clean underneath & behind",
      "Polish wood, glass & mirrors streak-free",
      "Wipe skirting boards & door frames",
      "Clean inside of windows every visit",
    ],
  },
  {
    icon: SprayCan,
    title: "Kitchen & Bathroom Special Treatment",
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean maid disinfecting kitchen surfaces with eco-friendly spray",
    description:
      "We disinfect and clean all ceramic items, including toilets and sinks. Professional buffing of chrome taps and fixtures to a high shine &mdash; removing water spots and limescale. In the kitchen, we wipe down worktops and the exterior of all appliances, including the oven, hob, and fridge. The high-touch points where germs accumulate are properly sanitised, not just wiped.",
    points: [
      "Disinfect all ceramic items",
      "Buff chrome taps & fixtures to a shine",
      "Remove water spots & limescale",
      "Wipe worktops & appliance exteriors",
      "Clean oven, hob & fridge fronts",
    ],
  },
  {
    icon: Wind,
    title: "Floor Care & Detail",
    image: IMG.checklistFloors,
    imageAlt: "Freshly vacuumed and mopped Scottish home floor with crisp finish",
    description:
      "Intensive vacuuming of all carpets and upholstery, followed by mopping and disinfecting of all hard floors to kill germs and maintain a fresh scent. Hardwood damp-mopped with pH-neutral cleaner, rugs beaten if small enough, and tile & grout scrubbed in high-traffic zones. The detail surfaces that signal quality to you and your guests are addressed every time.",
    points: [
      "Vacuum all carpets & upholstery",
      "Mop & disinfect hard floors",
      "Damp-mop hardwood with pH-neutral cleaner",
      "Scrub tile & grout in high-traffic zones",
      "Edge-to-edge coverage, no shortcuts",
    ],
  },
  {
    icon: Sun,
    title: "Beyond Cleaning — The Maundy Touch",
    image: IMG.checklistBathroom,
    imageAlt: "Sparkling bathroom with chrome fixtures shining after a Maundy Clean maid visit",
    description:
      "A true maid service goes beyond cleaning. Your maid can handle laundry (wash, dry, fold, iron), bed-making and linen changes, grocery unpacking, parcel taking, plant watering, and pet feeding. Scope is agreed with you at the outset and reviewed quarterly. Many clients add tasks over time as trust builds &mdash; this is what turns a clean into a relationship.",
    points: [
      "Laundry — wash, dry, fold, iron",
      "Bed-making & linen change",
      "Grocery unpacking & parcel taking",
      "Plant watering & pet feeding",
      "Light meal prep on request",
    ],
  },
];

export function MaidSeoIncludedDetail() {
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
            Your Recurring Home Cleaning Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our maid service ensures your property is maintained from top to bottom. We follow a
            rigorous, agency-approved checklist that signals genuine quality on every visit. Every
            item below is included as standard &mdash; no add-on fees, no surprise charges, no
            skipped zones.
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
// (Semantic H3: "The 3-Step 'Hassle-Free' Booking Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "30-Second Instant Quote",
    description:
      "Use our online tool to tell us about your home and receive a simple, fixed-price quote in under a minute. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay — locked in for 12 months from your start date, with no contracts tying you in.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We match you with a local professional who fits your schedule, offering appointments five days a week. Your maid is briefed on your home&rsquo;s specific cleaning priorities before the first visit. If you are at work during our visits, we operate a secure key safe system to ensure your property remains protected.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Pristine Sanctuary",
    description:
      "Experience a home that looks, smells, and feels fresh, backed by our Maundy Clean satisfaction guarantee. Adjust your personalised checklist anytime from your phone — your maid receives the update automatically before the next visit. Not happy? We re-clean within 24 hours, free. Your maid becomes a quiet, reliable presence in your life.",
  },
];

export function MaidSeoBooking() {
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
            The 3-Step &ldquo;Hassle-Free&rdquo; Booking Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized the booking experience to be uncomplicated and straightforward,
            addressing the slow response times common in the Scottish market. From quote to first
            clean in under 48 hours &mdash; no friction, no waiting.
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
// Section 5 — Beyond Maintenance: Solutions for Every Property Milestone
// (Semantic H3: "Beyond Maintenance: Solutions for Every Property Milestone")
// Image-topped cards with internal links
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Seasonal Resets · Spring Clean",
    href: "/services/spring-cleaning",
    image: IMG.leaseSpring,
    imageAlt: "Sparkling Scottish kitchen after a comprehensive spring clean",
    description:
      "If your home needs more intensive attention, book a Spring Clean for a comprehensive refresh without moving heavy furniture. Perfect as a one-off seasonal reset on top of your recurring maid service — or as a standalone treat when your home needs a little extra love. At a 15% member discount for existing clients.",
    cta: "Book a spring clean",
  },
  {
    icon: KeyRound,
    title: "Property Transitions · End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty Scottish flat being deep cleaned for a new tenant move-in",
    description:
      "Moving homes? Our End of Tenancy Cleaning includes a Deposit-Back Guarantee, ensuring you pass your final inspection with flying colours. We work to the letting agent&rsquo;s inventory, not ours, and we&rsquo;ll come back free of charge if the agent flags anything. Front-line ready for new tenants or owners.",
    cta: "Book end of tenancy cleaning",
  },
  {
    icon: Hammer,
    title: "The Heavy-Duty Reset · After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from a Scottish home",
    description:
      "If your property hasn&rsquo;t had a professional clean in 6 months or has undergone renovation, our After Builders Clean is designed to remove heavy layers of dust and grime. Includes steam-cleaning of grout, extraction of upholstery, and the fine-dust wipe-down that builders never include in their quote.",
    cta: "Get after builders cleaning quote",
  },
  {
    icon: Building2,
    title: "Office & Commercial Cleaning",
    href: "/services/office-cleaning",
    image: IMG.leaseOffice,
    imageAlt: "Clean modern Scottish office space ready for the working day",
    description:
      "In addition to our domestic maid service, we provide Office and Commercial Cleaning for businesses across Scotland. Same vetted standard, same PAYE-employed professionals, same 100% satisfaction guarantee — scaled to your workplace. Daily, weekly, or nightly schedules available.",
    cta: "Explore office & commercial cleaning",
  },
];

export function MaidSeoInterlinking() {
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
            Beyond maintenance · property milestones
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Beyond Maintenance: Solutions for Every Property Milestone
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            While our recurring home cleaning maintains your daily peace of mind, we provide a full
            spectrum of specialist support for those top-to-bottom moments &mdash; from seasonal
            resets to property transitions and post-renovation dust removal. The same trusted crew
            can step up when life changes.
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
                    <h4 className="absolute bottom-4 left-4 right-4 font-display font-bold text-base text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h4>
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
// (Semantic H2: "Maid Service Near Me in Scotland")
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

export function MaidSeoNearMe() {
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
              Local maids across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Maid Service Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;maid service near me&rdquo; in Scotland? Maundy Clean covers 72+
              towns and cities across the Central Belt, Highlands, Borders, and Islands. Same
              PVG-checked standard, same 100% re-clean guarantee, same dedicated maid every visit
              &mdash; wherever your home happens to be. Find your local maid below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean maid service coverage areas"
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
                  Same PVG-checked maids, same trusted professional every visit, same 100% re-clean
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
                Find your local maid
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
                      <span className="text-[var(--muted-foreground)]"> maids</span>
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
            Our local maids operate across Glasgow&rsquo;s West End, Edinburgh&rsquo;s New Town,
            Aberdeen&rsquo;s suburbs, Dundee&rsquo;s city centre, and the Highlands &mdash; from
            Inverness to Thurso, Fort William to Lerwick. Whether you&rsquo;re searching for weekly
            maid service in Glasgow, fortnightly maid cleaning in Edinburgh, monthly domestic maid
            service in Aberdeen, or a private maid anywhere in between, Maundy Clean assigns a
            PVG-checked, PAYE-employed professional that stays with you for the long run. Same maid,
            same day, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Book Your Maid Service?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function MaidSeoFinalCta() {
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
            Ready to book your maid service?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Book Your Maid Service?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price maid service quote in 30 seconds. No pushy sales call, no waiting 24
            hours for a callback. PVG-checked maids, same professional every visit, child &amp;
            pet-safe products, secure key safe system, and a 100% satisfaction guarantee &mdash; from
            £18/hr.
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
                View Our Recurring Cleaning Checklist
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
// 6 Q&As — 3 from the user brief + 3 maid-specific additions
// ============================================================

const SEO_FAQS = [
  {
    q: "What is the difference between a one-off clean and a regular clean?",
    a: "A one-off clean (like a Spring Clean) is a single visit to bring a home back to a high standard &mdash; a top-to-bottom refresh without a recurring commitment. A regular clean is a recurring home cleaning service on a weekly or fortnightly basis to maintain that standard, with the same vetted professional visiting every time. Most clients start with a one-off deep clean to set the baseline, then move to a recurring plan to keep it there. Our maid service includes both: a deeper first visit, then recurring maintenance visits from the same professional.",
  },
  {
    q: "Do I need to provide cleaning equipment?",
    a: "No. We bring all of our own professional-grade cleaning equipment and supplies with us, which are included in your competitive price &mdash; no surprise add-on charges, no asking you to stock products. Our maids arrive with everything they need: eco-labelled products, extendable poles for high ceilings, steam cleaners for grout, squeegees for windows, microfibre cloths, and specialist kit. You don't need to provide anything except access to the property (and a power socket for the vacuum).",
  },
  {
    q: "Do you provide commercial cleaning?",
    a: "Yes. In addition to our domestic maid service, we provide Office and Commercial Cleaning for businesses across Scotland &mdash; from single-office professional practices to multi-floor commercial premises. Same vetted standard, same PAYE-employed professionals, same 100% satisfaction guarantee. Daily, weekly, or nightly schedules available. Visit our Office Cleaning page for more detail, or call us to discuss your workplace needs.",
  },
  {
    q: "Will I really get the same maid every visit?",
    a: "Yes. We assign a dedicated maid to your home for the duration of your plan &mdash; they don&rsquo;t get reassigned, shared with other clients in your slot, or pulled to a different area. We believe reliability is built on familiarity. If your regular maid is ever on annual leave or off sick, we send a briefed relief maid who has been trained on your home&rsquo;s plan and your preferences &mdash; and we&rsquo;ll tell you in advance via the portal. Crew continuity is the single biggest reason our clients stay with us for an average of 3.4 years.",
  },
  {
    q: "Are there long-term contracts?",
    a: "No. At Maundy Clean, we let our professionalism and results speak for us. You are never tied into a long-term contract. We offer flexible appointments across five days a week with no contracts to tie you in. Pause for holidays, renovations, or anything else with 48 hours&rsquo; notice via the portal. Cancel entirely with one tap. If we&rsquo;re not earning your repeat business every visit, we don&rsquo;t deserve it. Your per-visit rate is also locked in for 12 months from your start date.",
  },
  {
    q: "What happens if I'm not satisfied with the cleaning?",
    a: "Tell us within 24 hours via the portal, app, or phone, and we&rsquo;ll send a maid back to re-clean the missed zones at no charge &mdash; no questions, no friction, no interrogation. Our 4.9-star average across 6,200+ reviews exists because we actually honour this guarantee. We re-cleaned 1.2% of visits last year and turned most of those clients into 5-year subscribers. Your satisfaction is the only metric that matters to us.",
  },
];

export function MaidSeoFaq() {
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
            Maid service · FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our maid service clients ask most often. Can&apos;t
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
                View Our Recurring Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

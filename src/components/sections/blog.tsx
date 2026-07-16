"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-light)]/60 text-[var(--brand-dark)] text-xs font-semibold mb-3">
              From the blog
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight text-[var(--ink)]">
              Cleaning insights you{" "}
              <span className="text-gradient-brand">can actually use</span>
            </h2>
          </div>
          <Button variant="outline" className="gap-2 shrink-0" asChild>
            <a href="#">
              View all articles <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p, idx) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col bg-[var(--cream)] rounded-2xl border border-[var(--border)] overflow-hidden hover:border-[var(--brand)] hover:shadow-brand transition-all"
            >
              {/* Real article image */}
              <div className="relative h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink)] bg-[var(--gold)] px-2 py-1 rounded">
                    {p.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 text-white text-[11px] flex items-center gap-1 bg-black/40 backdrop-blur px-2 py-1 rounded">
                  <Clock className="w-3 h-3" /> {p.readTime}
                </div>
              </div>

              <div className="flex-1 flex flex-col p-5">
                <div className="text-[11px] text-[var(--muted-foreground)] mb-2">{p.date}</div>
                <h3 className="font-display font-bold text-base text-[var(--ink)] group-hover:text-[var(--brand)] transition-colors leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-3 flex-1">
                  {p.excerpt}
                </p>
                <div className="mt-4 text-xs font-semibold text-[var(--brand)] flex items-center gap-1">
                  Read article <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

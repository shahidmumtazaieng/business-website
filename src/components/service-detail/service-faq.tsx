"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-detail-data";

export function ServiceFaq({ service }: { service: ServiceDetail }) {
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
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--brand-light)] mb-4">
            <HelpCircle className="w-7 h-7 text-[var(--brand)]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Frequently asked
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight">
            Everything you want to know.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto">
            Real questions from real Scottish homeowners. Can't find your answer? Call us on{" "}
            <a href="tel:+447735322362" className="text-[var(--brand)] font-semibold hover:underline">
              +44 7735 322362
            </a>{" "}
            — we pick up between 8am and 8pm, seven days a week.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {service.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-[var(--border)] rounded-2xl px-5 shadow-sm overflow-hidden data-[state=open]:border-[var(--brand)]/40 data-[state=open]:shadow-brand"
              >
                <AccordionTrigger className="text-left font-display font-bold text-base text-[var(--ink)] hover:no-underline py-5 hover:text-[var(--brand)] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[var(--muted-foreground)] leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[var(--muted-foreground)] mb-3">Still have questions?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
          >
            Talk to a real human <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataTestimonials } from "@/data";
import { sectionPad, SectionInner, SectionLabel, SectionTitle } from "./Section";

const Testimonials = () => {
  const { lang, t } = useLanguage();
  const items = dataTestimonials[lang];

  return (
    <section className={`bg-mt-bg transition-colors duration-300 ${sectionPad}`}>
      <SectionInner>
        <SectionLabel>{t.testimonials.label}</SectionLabel>
        <SectionTitle className="mb-13">{t.testimonials.title}</SectionTitle>

        <div className="grid grid-cols-3 gap-3.5 max-[900px]:grid-cols-1">
          {items.map((item, i) => (
            <motion.div
              className="rounded-2xl border border-mt-border bg-mt-surface p-6.5 transition-colors duration-300"
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <span className="mb-3.5 block font-mt-serif text-[56px] leading-[0.5] text-mt-orange opacity-40">&ldquo;</span>
              <p className="mb-5.5 text-sm leading-[1.7] text-mt-text-60 italic">{item.text}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-mt-orange to-[#8B3A00] font-mt-display text-[13px] font-bold text-white">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-mt-display text-sm font-semibold tracking-[-0.01em]">{item.name}</div>
                  <div className="text-[11px] text-mt-text-30">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-[11px] text-mt-text-30">{t.testimonials.disclaimer}</div>
      </SectionInner>
    </section>
  );
};

export default Testimonials;

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataFAQ } from "@/data";
import { sectionPad, SectionInner, SectionLabel, SectionTitle, SectionDesc } from "./Section";

const FAQ = () => {
  const { lang, t } = useLanguage();
  const items = dataFAQ[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`border-t border-mt-border bg-mt-bg transition-colors duration-300 ${sectionPad}`}>
      <SectionInner>
        <SectionLabel>{t.faq.label}</SectionLabel>
        <SectionTitle>{t.faq.title}</SectionTitle>
        <SectionDesc>{t.faq.desc}</SectionDesc>

        <div className="max-w-[760px]">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                className={`mb-2.5 overflow-hidden rounded-xl border bg-mt-surface transition-colors duration-300 ${isOpen ? "border-mt-border-bright" : "border-mt-border"}`}
                key={item.q}
              >
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-[22px] py-[18px] text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-mt-display text-sm font-semibold tracking-[-0.3px]">{item.q}</span>
                  <span
                    className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] border text-[13px] transition-all duration-250 ${
                      isOpen
                        ? "rotate-45 border-[rgba(242,100,25,.25)] bg-mt-orange-dim text-mt-orange"
                        : "border-mt-border bg-mt-text-10 text-mt-text-60"
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-[22px] pb-5 text-sm leading-[1.7] text-mt-text-60">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </SectionInner>
    </section>
  );
};

export default FAQ;

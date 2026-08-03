"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataFAQ } from "@/data";

const FAQ = () => {
  const { lang, t } = useLanguage();
  const items = dataFAQ[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-faq-section mt-section">
      <div className="mt-section-inner">
        <div className="mt-section-label">{t.faq.label}</div>
        <h2 className="mt-section-title">{t.faq.title}</h2>
        <p className="mt-section-desc">{t.faq.desc}</p>

        <div className="mt-faq-list">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`mt-faq-item${isOpen ? " open" : ""}`} key={item.q}>
                <button
                  className="mt-faq-q"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{ width: "100%", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
                >
                  <span className="mt-faq-q-text">{item.q}</span>
                  <span className="mt-faq-icon">+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="mt-faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="mt-faq-a-inner">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

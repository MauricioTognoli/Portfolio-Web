"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataProcess } from "@/data";

const Process = () => {
  const { lang, t } = useLanguage();
  const steps = dataProcess[lang];

  return (
    <section className="mt-process mt-section">
      <div className="mt-section-inner">
        <div className="mt-section-label">{t.process.label}</div>
        <h2 className="mt-section-title">{t.process.title}</h2>
        <p className="mt-section-desc">{t.process.desc}</p>

        <div className="mt-process-grid">
          {steps.map((step, i) => (
            <motion.div
              className="mt-process-step"
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="mt-process-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-process-title">{step.title}</div>
              <div className="mt-process-desc">{step.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

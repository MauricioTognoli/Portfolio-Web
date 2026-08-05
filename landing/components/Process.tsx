"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataProcess } from "@/data";
import { sectionPad, SectionInner, SectionLabel, SectionTitle, SectionDesc } from "./Section";

const Process = () => {
  const { lang, t } = useLanguage();
  const steps = dataProcess[lang];

  return (
    <section className={`border-t border-mt-border bg-mt-surface transition-colors duration-300 ${sectionPad}`}>
      <SectionInner>
        <SectionLabel>{t.process.label}</SectionLabel>
        <SectionTitle>{t.process.title}</SectionTitle>
        <SectionDesc>{t.process.desc}</SectionDesc>

        <div className="grid grid-cols-4 gap-3.5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {steps.map((step, i) => (
            <motion.div
              className="relative rounded-2xl border border-mt-border bg-mt-card-bg p-6.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-mt-border-bright"
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="mb-4 flex h-7.5 w-7.5 items-center justify-center rounded-lg border border-[rgba(242,100,25,.2)] bg-mt-orange-dim font-mt-mono text-xs font-medium text-mt-orange">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mb-2 font-mt-display text-[15px] leading-none font-bold tracking-[-0.4px]">{step.title}</div>
              <div className="text-xs leading-[1.65] text-mt-text-60">{step.desc}</div>
            </motion.div>
          ))}
        </div>
      </SectionInner>
    </section>
  );
};

export default Process;

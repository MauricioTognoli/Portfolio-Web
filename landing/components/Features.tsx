"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataFeatureBlocks } from "@/data";
import { sectionPad, SectionInner, SectionLabel, SectionTitle } from "./Section";
import { btnPrimary, btnSecondary } from "./uiClasses";

const Features = () => {
  const { lang, t } = useLanguage();
  const blocks = dataFeatureBlocks[lang];

  return (
    <section className={`border-t border-mt-border bg-mt-surface transition-colors duration-300 ${sectionPad}`}>
      <SectionInner>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>{t.features.label}</SectionLabel>
            <SectionTitle className="mb-2.5">
              {t.features.title1} <span className="text-mt-orange">{t.features.title2}</span>
            </SectionTitle>
            <p className="max-w-[460px] text-[13px] leading-[1.65] text-mt-text-60">{t.features.desc}</p>
          </div>
          <Link href="/features" className={`${btnSecondary} shrink-0`}>{t.features.viewAll}</Link>
        </div>

        <div className="grid grid-cols-3 gap-3.5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {blocks.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
            >
              <Link
                href="/features"
                className="block h-full rounded-2xl border border-mt-border bg-mt-card-bg p-5 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-mt-border-bright"
              >
                <div className="mb-3 font-mt-mono text-[10px] tracking-[0.08em] text-mt-orange uppercase">{f.eyebrow}</div>
                <div className="mb-4 font-mt-display text-sm leading-[1.3] font-bold tracking-[-0.01em] text-mt-text">{f.title}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mt-display text-xl font-bold tracking-[-0.02em] text-mt-orange tabular-nums">{f.impact[0].val}</span>
                  <span className="font-mt-mono text-[9px] tracking-[0.05em] text-mt-text-30 uppercase">{f.impact[0].lbl}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <Link href="/features" className={btnPrimary}>{t.features.cta}</Link>
        </div>
      </SectionInner>
    </section>
  );
};

export default Features;

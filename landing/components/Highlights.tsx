"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Globe2, Figma, Gauge } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dataHighlights } from "@/data";
import { sectionPad, SectionInner, SectionLabel, SectionTitle } from "./Section";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const bentoCard =
  "relative overflow-hidden rounded-2xl border border-mt-border bg-mt-card-bg p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-mt-border-bright before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,var(--mt-orange-dim)_0%,transparent_60%)] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100";
const bentoIcon =
  "relative mb-4.5 flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(242,100,25,0.2)] bg-mt-orange-dim text-mt-orange";
const bentoNumber = "relative mb-2 font-mt-display text-[42px] leading-none font-bold tracking-[-0.04em] [font-variant-numeric:tabular-nums]";
const bentoLabel = "relative text-[13px] leading-normal text-mt-text-60";
const bentoTitle = "relative mb-2 font-mt-display text-[17px] font-semibold tracking-[-0.02em]";
const techBar = "relative mt-3.5 flex flex-wrap gap-1.5";
const techTag = "rounded-full border border-mt-border bg-mt-tag-bg px-2.5 py-[3px] font-mt-mono text-[11px] text-mt-text-60";

const Highlights = () => {
  const { t } = useLanguage();

  return (
    <section className={`border-t border-b border-mt-border bg-mt-surface transition-colors duration-300 ${sectionPad}`}>
      <SectionInner>
        <SectionLabel>{t.highlights.label}</SectionLabel>
        <SectionTitle>
          {t.highlights.title1}
          <br />
          {t.highlights.title2}
        </SectionTitle>

        <motion.div
          className="grid grid-cols-12 gap-3.5 max-[900px]:grid-cols-6 max-[560px]:grid-cols-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div className={`${bentoCard} col-span-4 max-[900px]:col-span-3 max-[560px]:col-span-1`} variants={item}>
            <div className={bentoIcon}><Zap size={18} /></div>
            <div className={bentoNumber}>
              {dataHighlights.b1Number}<span className="text-mt-orange">{dataHighlights.b1Suffix}</span>
            </div>
            <div className={bentoLabel}>{t.highlights.b1Label}</div>
          </motion.div>

          <motion.div className={`${bentoCard} col-span-4 max-[900px]:col-span-3 max-[560px]:col-span-1`} variants={item}>
            <div className={bentoIcon}><Layers size={18} /></div>
            <div className={bentoNumber}>
              {dataHighlights.b2Number}<span className="text-mt-orange">{dataHighlights.b2Suffix}</span>
            </div>
            <div className={bentoLabel}>{t.highlights.b2Label}</div>
          </motion.div>

          <motion.div className={`${bentoCard} col-span-4 max-[900px]:col-span-3 max-[560px]:col-span-1`} variants={item}>
            <div className={bentoIcon}><Globe2 size={18} /></div>
            <div className={bentoNumber}>
              {dataHighlights.b3Number}<span className="text-mt-orange">{dataHighlights.b3Suffix}</span>
            </div>
            <div className={bentoLabel}>{t.highlights.b3Label}</div>
          </motion.div>

          <motion.div className={`${bentoCard} col-span-6 max-[560px]:col-span-1`} variants={item}>
            <div className={bentoIcon}><Figma size={18} /></div>
            <div className={bentoTitle}>{t.highlights.b4Title}</div>
            <div className={bentoLabel}>{t.highlights.b4Desc}</div>
            <div className={techBar}>
              <span className={techTag}>Figma</span>
              <span className={techTag}>Design Tokens</span>
              <span className={techTag}>Tailwind CSS</span>
            </div>
          </motion.div>

          <motion.div className={`${bentoCard} col-span-6 max-[560px]:col-span-1`} variants={item}>
            <div className={bentoIcon}><Gauge size={18} /></div>
            <div className={bentoTitle}>{t.highlights.b5Title}</div>
            <div className={bentoLabel}>{t.highlights.b5Desc}</div>
            <div className={techBar}>
              <span className={techTag}>SEO</span>
              <span className={techTag}>Code splitting</span>
              <span className={techTag}>Lazy loading</span>
            </div>
          </motion.div>
        </motion.div>
      </SectionInner>
    </section>
  );
};

export default Highlights;

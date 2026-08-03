"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Globe2, Figma, Gauge } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dataHighlights } from "@/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Highlights = () => {
  const { t } = useLanguage();

  return (
    <section className="mt-highlights mt-section">
      <div className="mt-section-inner">
        <div className="mt-section-label">{t.highlights.label}</div>
        <h2 className="mt-section-title">
          {t.highlights.title1}
          <br />
          {t.highlights.title2}
        </h2>

        <motion.div
          className="mt-bento-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div className="mt-bento-card mt-b1" variants={item}>
            <div className="mt-bento-icon"><Zap size={18} /></div>
            <div className="mt-bento-number">
              {dataHighlights.b1Number}<span>{dataHighlights.b1Suffix}</span>
            </div>
            <div className="mt-bento-label">{t.highlights.b1Label}</div>
          </motion.div>

          <motion.div className="mt-bento-card mt-b2" variants={item}>
            <div className="mt-bento-icon"><Layers size={18} /></div>
            <div className="mt-bento-number">
              {dataHighlights.b2Number}<span>{dataHighlights.b2Suffix}</span>
            </div>
            <div className="mt-bento-label">{t.highlights.b2Label}</div>
          </motion.div>

          <motion.div className="mt-bento-card mt-b3" variants={item}>
            <div className="mt-bento-icon"><Globe2 size={18} /></div>
            <div className="mt-bento-number">
              {dataHighlights.b3Number}<span>{dataHighlights.b3Suffix}</span>
            </div>
            <div className="mt-bento-label">{t.highlights.b3Label}</div>
          </motion.div>

          <motion.div className="mt-bento-card mt-b4" variants={item}>
            <div className="mt-bento-icon"><Figma size={18} /></div>
            <div className="mt-bento-title">{t.highlights.b4Title}</div>
            <div className="mt-bento-label">{t.highlights.b4Desc}</div>
            <div className="mt-tech-bar">
              <span className="mt-tech-tag">Figma</span>
              <span className="mt-tech-tag">Design Tokens</span>
              <span className="mt-tech-tag">Tailwind CSS</span>
            </div>
          </motion.div>

          <motion.div className="mt-bento-card mt-b5" variants={item}>
            <div className="mt-bento-icon"><Gauge size={18} /></div>
            <div className="mt-bento-title">{t.highlights.b5Title}</div>
            <div className="mt-bento-label">{t.highlights.b5Desc}</div>
            <div className="mt-tech-bar">
              <span className="mt-tech-tag">SEO</span>
              <span className="mt-tech-tag">Code splitting</span>
              <span className="mt-tech-tag">Lazy loading</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;

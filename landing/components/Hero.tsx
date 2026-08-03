"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "4", suffix: "+", label: t.hero.stat1 },
    { value: "4", suffix: "+", label: t.hero.stat2 },
    { value: "5", suffix: "+", label: t.hero.stat3 },
    { value: "20", suffix: "+", label: t.hero.stat4 },
  ];

  return (
    <section className="mt-hero">
      <div className="mt-hero-grid-bg" />
      <div className="mt-hero-glow" />
      <div className="mt-hero-content">
        <div>
          <motion.div
            className="mt-hero-badges-row"
            initial="hidden"
            animate="visible"
            style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 28 }}
          >
            <motion.div className="mt-hero-badge" custom={0} variants={fadeUp}>
              <div className="mt-badge-dot" />
              <span>{t.hero.badge}</span>
            </motion.div>
            <motion.div
              custom={0.1}
              variants={fadeUp}
              style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--mt-text-10)", border: "1px solid var(--mt-border)", color: "var(--mt-text-60)", padding: "6px 14px", borderRadius: 100, fontSize: 12 }}
            >
              <Globe2 size={14} color="var(--mt-orange)" />
              <span>{t.hero.location}</span>
            </motion.div>
            <motion.div
              custom={0.2}
              variants={fadeUp}
              style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(34,197,94,.08)", border: "1px solid rgba(34,197,94,.25)", color: "#4ade80", padding: "6px 14px", borderRadius: 100, fontSize: 12 }}
            >
              <div style={{ width: 6, height: 6, background: "#4ade80", borderRadius: "50%", boxShadow: "0 0 8px #4ade80" }} />
              <span>{t.hero.available}</span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="mt-hero-headline"
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
          >
            {t.hero.line1}
            <br />
            {t.hero.line2}
            <span className="accent">{t.hero.line2Accent}</span>
            <br />
            {t.hero.line3}
            <span className="serif">{t.hero.line3Accent}</span>
          </motion.h1>

          <motion.p className="mt-hero-sub" initial="hidden" animate="visible" custom={0.25} variants={fadeUp}>
            {t.hero.sub}
          </motion.p>

          <motion.div className="mt-hero-actions" initial="hidden" animate="visible" custom={0.35} variants={fadeUp}>
            <a href="#projects" className="btn-primary">{t.hero.cta1}</a>
            <a href="#contact" className="btn-secondary">{t.hero.cta2}</a>
          </motion.div>

          <motion.div className="mt-hero-stats" initial="hidden" animate="visible" custom={0.45} variants={fadeUp}>
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                <div className="mt-stat">
                  <div className="mt-stat-number">
                    {stat.value}
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="mt-stat-label">{stat.label}</div>
                </div>
                {i < stats.length - 1 && <div className="mt-stat-divider" />}
              </Fragment>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-hero-logo-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/logo-mt.png"
            alt="Logo Mauricio Tognoli"
            width={280}
            height={280}
            priority
            className="mt-hero-logo-svg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

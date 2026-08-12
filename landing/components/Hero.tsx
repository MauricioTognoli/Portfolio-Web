"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { btnPrimary, btnSecondary } from "./uiClasses";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

// No opacity gating on these — they're the LCP candidates (headline text /
// hero image) and must be visible in the very first paint, not hidden
// behind a JS-driven fade-in.
const slideUpVisible = {
  hidden: { y: 20 },
  visible: (delay = 0) => ({
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
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-12 pt-35 pb-20 max-[900px]:px-6 max-[560px]:min-h-0 max-[560px]:px-5 max-[560px]:pt-27.5 max-[560px]:pb-14">
      <div className="absolute inset-0 bg-[linear-gradient(var(--mt-grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--mt-grid-line)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_70%_at_50%_50%,black_30%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-50 -right-50 h-200 w-200 bg-[radial-gradient(circle,rgba(242,100,25,0.13)_0%,transparent_70%)]" />
      <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-[1fr_auto] items-center gap-20 max-[900px]:grid-cols-1 max-[900px]:text-center">
        <div>
          <motion.div
            className="mb-7 flex flex-wrap items-center gap-2.5 max-[560px]:justify-center"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(242,100,25,0.25)] bg-mt-orange-dim px-3.5 py-1.5 text-xs tracking-wider text-mt-orange"
              custom={0}
              variants={fadeUp}
            >
              <div className="h-1.5 w-1.5 animate-mt-pulse rounded-full bg-mt-orange" />
              <span>{t.hero.badge}</span>
            </motion.div>
            <motion.div
              custom={0.1}
              variants={fadeUp}
              className="inline-flex items-center gap-[7px] rounded-full border border-mt-border bg-mt-text-10 px-3.5 py-1.5 text-xs text-mt-text-60"
            >
              <Globe2 size={14} className="text-mt-orange" />
              <span>{t.hero.location}</span>
            </motion.div>
            <motion.div
              custom={0.2}
              variants={fadeUp}
              className="inline-flex items-center gap-[7px] rounded-full border border-[rgba(34,197,94,.25)] bg-[rgba(34,197,94,.08)] px-3.5 py-1.5 text-xs text-[#4ade80]"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
              <span>{t.hero.available}</span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="mb-6 font-mt-display text-[clamp(40px,6vw,80px)] leading-[1.04] font-bold tracking-[-0.04em]"
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={slideUpVisible}
          >
            {t.hero.line1}
            <br />
            {t.hero.line2}
            <span className="text-mt-orange">{t.hero.line2Accent}</span>
            <br />
            {t.hero.line3}
            <span className="font-mt-serif font-normal italic">{t.hero.line3Accent}</span>
          </motion.h1>

          <motion.p
            className="mb-9 max-w-[500px] text-[15px] leading-[1.75] text-mt-text-60 max-[900px]:mx-auto"
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            className="mb-14 flex flex-wrap items-center gap-3 max-[900px]:justify-center max-[560px]:flex-col max-[560px]:items-stretch max-[560px]:[&>a]:justify-center"
            initial="hidden"
            animate="visible"
            custom={0.35}
            variants={fadeUp}
          >
            <a href="#projects" className={btnPrimary}>{t.hero.cta1}</a>
            <a href="#contact" className={btnSecondary}>{t.hero.cta2}</a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-10 max-[900px]:justify-center max-[560px]:gap-6 max-[560px]:gap-y-4"
            initial="hidden"
            animate="visible"
            custom={0.45}
            variants={fadeUp}
          >
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                <div className="flex flex-col gap-1">
                  <div className="font-mt-display text-[28px] leading-none font-bold tracking-[-0.03em] [font-variant-numeric:tabular-nums]">
                    {stat.value}
                    <span className="text-mt-orange">{stat.suffix}</span>
                  </div>
                  <div className="font-mt-mono text-[10px] tracking-[0.08em] text-mt-text-30 uppercase">{stat.label}</div>
                </div>
                {i < stats.length - 1 && <div className="w-px self-stretch bg-mt-border" />}
              </Fragment>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center max-[900px]:-order-1"
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/logo-mt.png"
            alt="Logo Mauricio Tognoli"
            width={280}
            height={280}
            priority
            className="h-55 w-55 filter-[drop-shadow(0_0_48px_rgba(242,100,25,0.25))] max-[560px]:h-40 max-[560px]:w-40"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

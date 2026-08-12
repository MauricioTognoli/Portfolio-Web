"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { recruiterCoreStack, cvFiles } from "@/data";
import { sectionPad, SectionInner, SectionLabel, SectionTitle, SectionDesc } from "./Section";
import { btnPrimary, btnSecondary } from "./uiClasses";

const factLabel = "font-mt-mono text-[10px] tracking-[0.08em] text-mt-text-30 uppercase";
const factValue = "flex items-center gap-[7px] font-mt-display text-sm font-semibold tracking-[-0.2px]";
const factSub = "text-[11px] text-mt-text-30";

const RecruiterSnapshot = () => {
  const { t, lang } = useLanguage();
  const cvLink = cvFiles[lang];

  return (
    <section className={`border-t border-mt-border bg-mt-bg transition-colors duration-300 ${sectionPad}`} id="hire">
      <SectionInner>
        <SectionLabel>{t.recruiter.label}</SectionLabel>
        <SectionTitle>
          {t.recruiter.title1}
          <br />
          <span className="text-mt-orange">{t.recruiter.title2}</span>
        </SectionTitle>
        <SectionDesc>{t.recruiter.desc}</SectionDesc>

        <motion.div
          className="overflow-hidden rounded-[22px] border border-mt-border bg-mt-surface transition-colors duration-300"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-mt-border px-8 py-6.5 max-[560px]:flex-col max-[560px]:items-start">
            <div className="flex items-center gap-3.5">
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[14px] bg-mt-card-bg">
                <Image src="/logo-mt.png" alt="Mauricio Tognoli" width={40} height={40} />
              </div>
              <div>
                <div className="font-mt-display text-lg font-bold tracking-[-0.4px]">Mauricio Tognoli</div>
                <div className="mt-0.5 text-xs text-mt-text-60">{t.recruiter.role}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 max-[560px]:w-full max-[560px]:[&>a]:flex-1 max-[560px]:[&>a]:justify-center">
              <a href={cvLink} download className={btnPrimary}>{t.recruiter.cv}</a>
              <a href="#contact" className={btnSecondary}>{t.recruiter.call}</a>
            </div>
          </div>

          <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
            <div className="flex flex-col gap-1 border-r border-mt-border px-8 py-5.5 last:border-r-0 max-[900px]:border-b">
              <span className={factLabel}>{t.recruiter.f1l}</span>
              <span className={factValue}><span className="h-[7px] w-[7px] animate-mt-pulse rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />{t.recruiter.f1v}</span>
              <span className={factSub}>{t.recruiter.f1s}</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-mt-border px-8 py-5.5 last:border-r-0 max-[900px]:border-b">
              <span className={factLabel}>{t.recruiter.f2l}</span>
              <span className={factValue}>{t.recruiter.f2v}</span>
              <span className={factSub}>{t.recruiter.f2s}</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-mt-border px-8 py-5.5 last:border-r-0 max-[900px]:border-b">
              <span className={factLabel}>{t.recruiter.f3l}</span>
              <span className={factValue}>GMT-3 🇦🇷</span>
              <span className={factSub}>{t.recruiter.f3s}</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-mt-border px-8 py-5.5 last:border-r-0 max-[900px]:border-b">
              <span className={factLabel}>{t.recruiter.f4l}</span>
              <span className={factValue}>{t.recruiter.f4v}</span>
              <span className={factSub}>{t.recruiter.f4s}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-mt-border max-[560px]:grid-cols-1">
            <div className="flex flex-col gap-1 border-r border-mt-border px-8 py-4.5 last:border-r-0">
              <span className={factLabel}>{t.recruiter.f5l}</span>
              <span className={factValue}>{recruiterCoreStack}</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-mt-border px-8 py-4.5 last:border-r-0">
              <span className={factLabel}>{t.recruiter.f6l}</span>
              <span className={factValue}>{t.recruiter.f6v}</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-mt-border px-8 py-4.5 last:border-r-0">
              <span className={factLabel}>{t.recruiter.f7l}</span>
              <span className={factValue}>{t.recruiter.f7v}</span>
            </div>
          </div>
        </motion.div>
      </SectionInner>
    </section>
  );
};

export default RecruiterSnapshot;

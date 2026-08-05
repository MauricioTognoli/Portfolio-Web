"use client";

import { motion } from "framer-motion";
import { Sparkles, Wand2, Ruler } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { sectionPad, SectionInner, SectionLabel, SectionTitle } from "./Section";
import { btnPrimary, btnSecondary } from "./uiClasses";

const MTComponents = () => {
  const { t } = useLanguage();

  return (
    <section className={`bg-mt-bg transition-colors duration-300 ${sectionPad}`} id="components">
      <SectionInner>
        <SectionLabel>{t.mtc.label}</SectionLabel>
        <SectionTitle>
          {t.mtc.title1}
          <br />
          <span className="text-mt-orange">{t.mtc.title2}</span>
        </SectionTitle>

        <div className="grid grid-cols-2 items-start gap-5 max-[900px]:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-6 text-sm leading-[1.75] text-mt-text-60">{t.mtc.sub}</p>

            <div className="mb-8 flex flex-col gap-3">
              <div className="flex items-start gap-3 rounded-[10px] border border-mt-border bg-mt-surface px-4 py-3.5 transition-colors duration-200 hover:border-mt-border-bright">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mt-orange-dim text-mt-orange"><Sparkles size={18} /></div>
                <div>
                  <div className="mb-0.5 font-mt-display text-[13px] font-semibold">{t.mtc.h1Title}</div>
                  <div className="text-xs leading-normal text-mt-text-60">{t.mtc.h1Desc}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[10px] border border-mt-border bg-mt-surface px-4 py-3.5 transition-colors duration-200 hover:border-mt-border-bright">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mt-orange-dim text-mt-orange"><Wand2 size={16} /></div>
                <div>
                  <div className="mb-0.5 font-mt-display text-[13px] font-semibold">{t.mtc.h2Title}</div>
                  <div className="text-xs leading-normal text-mt-text-60">{t.mtc.h2Desc}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[10px] border border-mt-border bg-mt-surface px-4 py-3.5 transition-colors duration-200 hover:border-mt-border-bright">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mt-orange-dim text-mt-orange"><Ruler size={18} /></div>
                <div>
                  <div className="mb-0.5 font-mt-display text-[13px] font-semibold">{t.mtc.h3Title}</div>
                  <div className="text-xs leading-normal text-mt-text-60">{t.mtc.h3Desc}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/MauricioTognoli" target="_blank" rel="noopener noreferrer" className={btnPrimary}>{t.mtc.cta1}</a>
              <a href="https://github.com/MauricioTognoli" target="_blank" rel="noopener noreferrer" className={btnSecondary}>{t.mtc.cta2}</a>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[20px] border border-mt-border bg-mt-surface transition-colors duration-300"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between border-b border-mt-border px-5 py-4">
              <span className="font-mt-display text-sm font-semibold">MT Components</span>
              <span className="rounded-full border border-[rgba(242,100,25,0.2)] bg-mt-orange-dim px-2.5 py-[3px] text-[11px] text-mt-orange">{t.mtc.badge}</span>
            </div>
            <div className="grid grid-cols-3 gap-3 p-5">
              <div className="rounded-[10px] border border-mt-border bg-mt-card-bg p-3.5 text-center transition-all duration-200 hover:scale-[1.02] hover:border-[rgba(242,100,25,0.3)]">
                <div className="mb-1.5 inline-block rounded-md bg-mt-orange px-3 py-1.5 font-mt-display text-[10px] font-bold text-black">Button</div>
                <div className="font-mt-display text-[11px] font-semibold text-mt-text-60">{t.mtc.c1}</div>
              </div>
              <div className="rounded-[10px] border border-mt-border bg-mt-card-bg p-3.5 text-center transition-all duration-200 hover:scale-[1.02] hover:border-[rgba(242,100,25,0.3)]">
                <div className="mb-1.5 flex h-8 items-center gap-1.5 rounded-lg border border-mt-border bg-mt-surface-2 px-2">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-mt-orange" />
                  <div className="h-1 flex-1 rounded-sm bg-mt-border-bright" />
                </div>
                <div className="font-mt-display text-[11px] font-semibold text-mt-text-60">{t.mtc.c2}</div>
              </div>
              <div className="rounded-[10px] border border-mt-border bg-mt-card-bg p-3.5 text-center transition-all duration-200 hover:scale-[1.02] hover:border-[rgba(242,100,25,0.3)]">
                <div className="mb-1 flex justify-center gap-1">
                  <div className="rounded-full border border-[rgba(242,100,25,0.2)] bg-mt-orange-dim px-[7px] py-0.5 text-[9px] text-mt-orange">New</div>
                  <div className="rounded-full border border-[rgba(242,100,25,0.2)] bg-mt-orange-dim px-[7px] py-0.5 text-[9px] text-mt-orange">Beta</div>
                </div>
                <div className="font-mt-display text-[11px] font-semibold text-mt-text-60">{t.mtc.c3}</div>
              </div>
              <div className="rounded-[10px] border border-mt-border bg-mt-card-bg p-3.5 text-center transition-all duration-200 hover:scale-[1.02] hover:border-[rgba(242,100,25,0.3)]">
                <div className="mb-1.5 flex h-7 items-center rounded-[5px] bg-mt-border px-2">
                  <div className="h-1 w-[70%] rounded-sm bg-mt-border-bright" />
                </div>
                <div className="font-mt-display text-[11px] font-semibold text-mt-text-60">{t.mtc.c4}</div>
              </div>
              <div className="rounded-[10px] border border-mt-border bg-mt-card-bg p-3.5 text-center transition-all duration-200 hover:scale-[1.02] hover:border-[rgba(242,100,25,0.3)]">
                <div className="mb-1.5 flex gap-[3px]">
                  <div className="h-[3px] flex-1 rounded-sm bg-mt-orange" />
                  <div className="h-[3px] flex-1 rounded-sm bg-mt-border" />
                  <div className="h-[3px] flex-1 rounded-sm bg-mt-border" />
                </div>
                <div className="font-mt-display text-[11px] font-semibold text-mt-text-60">{t.mtc.c5}</div>
              </div>
              <div className="rounded-[10px] border border-mt-border bg-mt-card-bg p-3.5 text-center transition-all duration-200 hover:scale-[1.02] hover:border-[rgba(242,100,25,0.3)]">
                <div className="relative mx-auto mb-1.5 h-3.5 w-7 rounded-full bg-mt-orange">
                  <div className="absolute top-0.5 right-0.5 h-2.5 w-2.5 rounded-full bg-white" />
                </div>
                <div className="font-mt-display text-[11px] font-semibold text-mt-text-60">{t.mtc.c6}</div>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="rounded-[10px] border border-mt-border bg-mt-surface p-3.5 text-center">
                <span className="text-xs text-mt-text-60">{t.mtc.soon}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionInner>
    </section>
  );
};

export default MTComponents;

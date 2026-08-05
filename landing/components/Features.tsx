"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataFeatures } from "@/data";
import { sectionPad, SectionInner, SectionLabel, SectionTitle } from "./Section";
import { btnSecondary, miniCard, miniPreview, miniBadge } from "./uiClasses";

const MiniPreview = ({ variant }: { variant: number }) => (
  <div className="absolute inset-x-3.5 top-3.5 bottom-0 overflow-hidden rounded-t-lg border border-mt-border bg-mt-surface shadow-[0_8px_30px_rgba(0,0,0,.5)]">
    <div className="flex h-5.5 items-center gap-1 border-b border-mt-border bg-mt-surface-2 px-2">
      <div className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
      <div className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
      <div className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
    </div>
    {variant === 0 ? (
      <div className="flex flex-col gap-1.25 p-2">
        <div className="h-1.5 rounded-[3px] bg-mt-border-bright" />
        <div className="grid grid-cols-2 gap-1.25">
          <div className="h-6 rounded bg-mt-border" />
          <div className="h-6 rounded border border-[rgba(242,100,25,.2)] bg-[rgba(242,100,25,.15)]" />
        </div>
      </div>
    ) : (
      <div className="flex flex-col gap-1.25 p-2">
        <div className="h-1.5 w-1/2 rounded-[3px] bg-[rgba(242,100,25,.35)]" />
        <div className="relative mt-0.5 h-7.5 overflow-hidden rounded bg-mt-surface-2">
          <div className="absolute inset-x-0 bottom-0 flex items-end gap-0.5 p-[3px]">
            {[55, 75, 45, 90, 65].map((h, i) => (
              <div key={i} className="flex-1 rounded-[1px] bg-mt-orange" style={{ height: `${h}%`, opacity: 0.65 + i * 0.05 }} />
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

const Features = () => {
  const { lang, t } = useLanguage();
  const items = dataFeatures[lang].filter((f) => [1, 2, 5, 6].includes(f.id));

  return (
    <section className={`border-t border-mt-border bg-mt-surface transition-colors duration-300 ${sectionPad}`}>
      <SectionInner>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>{t.features.label}</SectionLabel>
            <SectionTitle className="mb-2.5">
              {t.features.title1} <span className="text-mt-orange">{t.features.title2}</span>
            </SectionTitle>
            <p className="max-w-[460px] text-[13px] leading-[1.65] text-mt-text-60">{t.features.desc}</p>
          </div>
          <Link href="/features" className={`${btnSecondary} shrink-0`}>{t.features.viewAll}</Link>
        </div>

        <div className="grid grid-cols-2 gap-4.5 max-[900px]:grid-cols-1">
          {items.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            >
              <Link href="/features" className={miniCard}>
                <div className={miniPreview}>
                  <MiniPreview variant={i % 2} />
                  <div className={`${miniBadge} left-2.5 text-mt-text-60 tracking-wider uppercase`}>{f.category}</div>
                  <div className={`${miniBadge} right-2.5 text-mt-orange`}>{f.company}</div>
                </div>
                <div className="p-5">
                  <h3 className="mb-1.75 font-mt-display text-[15px] leading-[1.3] font-bold tracking-[-0.4px]">{f.tagline}</h3>
                  <div className="mb-3 flex flex-wrap gap-1.25">
                    {f.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-[3px] border border-mt-border bg-mt-tag-bg px-2 py-0.5 text-[10px] text-mt-text-60">{tag}</span>
                    ))}
                  </div>
                  <div className="text-xs text-mt-orange">{t.features.cta}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 text-[11px] text-mt-text-30">{t.features.disclaimer}</div>
      </SectionInner>
    </section>
  );
};

export default Features;

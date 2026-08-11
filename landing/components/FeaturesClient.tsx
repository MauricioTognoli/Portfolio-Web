"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dataFeatureBlocks, featureImages, type FeatureBlock } from "@/data";
import { btnPrimary } from "./uiClasses";

const FeatureVisual = ({ f }: { f: FeatureBlock }) => {
  const { lang } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);
  const src = featureImages[f.id];

  if (src && !imageFailed) {
    return (
      <>
        <span className="absolute top-3.5 left-3.5 z-10 rounded-full border border-mt-border-bright bg-mt-bg/80 px-3 py-1 font-mt-mono text-[9px] tracking-widest text-mt-text-60 uppercase backdrop-blur-sm">
          {lang === "es" ? "En producción" : "In production"}
        </span>
        <Image
          src={src}
          alt={f.title}
          fill
          sizes="(max-width: 900px) 100vw, 550px"
          className="object-cover"
          onError={() => setImageFailed(true)}
        />
      </>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center p-10">
      <Image src="/logo-mt.png" alt="Mauricio Tognoli" width={96} height={96} className="opacity-90" />
    </div>
  );
};

const FeaturesClient = () => {
  const { lang, t } = useLanguage();
  const blocks = dataFeatureBlocks[lang];

  return (
    <>
      <div className="relative overflow-hidden px-12 pt-32.5 pb-17.5 max-[900px]:px-6 max-[560px]:px-5 max-[560px]:pt-25 max-[560px]:pb-11">
        <div className="absolute inset-0 [background-image:linear-gradient(var(--mt-grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--mt-grid-line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,black_20%,transparent_100%)]" />
        <div className="pointer-events-none absolute -top-30 left-1/2 h-112.5 w-175 -translate-x-1/2 bg-[radial-gradient(circle,rgba(242,100,25,0.12)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-[1100px]">
          <div className="mb-5.5 flex items-center gap-2 font-mt-mono text-[11px] text-mt-text-30">
            <Link href="/" className="text-mt-text-30 no-underline transition-colors duration-200 hover:text-mt-orange">home</Link>
            <span>/</span>
            <span className="text-mt-text-60">features</span>
          </div>
          <h1 className="mb-5 font-mt-display text-[clamp(38px,5.5vw,72px)] leading-[1.02] font-bold tracking-[-0.04em]">
            {t.features.pageTitle1}
            <br />
            <span className="font-mt-serif font-normal text-mt-orange italic">{t.features.pageTitle2}</span>
          </h1>
          <p className="max-w-[540px] text-[15px] leading-[1.7] text-mt-text-60">{t.features.pageSubtitle}</p>
          <div className="mt-6.5 inline-flex items-center gap-2 rounded-full border border-[rgba(242,100,25,.25)] bg-mt-orange-dim px-4 py-2 text-[12.5px] text-mt-orange">
            <Camera size={14} className="shrink-0" />
            {t.features.hint}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-12 pt-5 pb-27.5 max-[900px]:px-6 max-[560px]:px-5">
        {blocks.map((f, i) => {
          return (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" }}
              className="mb-6 grid grid-cols-2 overflow-hidden rounded-[22px] border border-mt-border bg-mt-card-bg transition-colors duration-300 hover:border-mt-border-bright max-[900px]:grid-cols-1"
            >
              <div className={`flex flex-col justify-center p-9.5 max-[900px]:order-1 max-[900px]:p-7 ${f.flip ? "order-2" : "order-1"}`}>
                <div className="mb-3 flex items-center gap-2 font-mt-mono text-[10px] tracking-[0.08em] text-mt-orange uppercase before:h-px before:w-4.5 before:bg-mt-orange before:content-['']">
                  {f.eyebrow}
                </div>
                <h2 className="mb-4 font-mt-display text-2xl leading-[1.15] font-bold tracking-[-0.025em]">{f.title}</h2>

                <div className="mb-4.5 flex flex-col gap-3">
                  <div className="rounded-xl border border-mt-border bg-mt-surface px-4 py-3.5">
                    <div className="mb-1.5 flex items-center gap-1.5 font-mt-mono text-[9.5px] tracking-[0.08em] text-[#f87171] uppercase">
                      × {t.features.problemLabel}
                    </div>
                    <div className="text-[13px] leading-[1.65] text-mt-text-60">{f.problem}</div>
                  </div>
                  <div className="rounded-xl border border-mt-border bg-mt-surface px-4 py-3.5">
                    <div className="mb-1.5 flex items-center gap-1.5 font-mt-mono text-[9.5px] tracking-[0.08em] text-[#4ade80] uppercase">
                      ✓ {t.features.solutionLabel}
                    </div>
                    <div className="text-[13px] leading-[1.65] text-mt-text-60">{f.solution}</div>
                  </div>
                </div>

                <div className="mb-4.5 flex flex-wrap gap-3.5">
                  {f.impact.map((im) => (
                    <div key={im.lbl} className="flex flex-col gap-px">
                      <span className="font-mt-display text-[19px] font-bold tracking-[-0.02em] text-mt-orange tabular-nums">{im.val}</span>
                      <span className="font-mt-mono text-[9px] tracking-[0.06em] text-mt-text-30 uppercase">{im.lbl}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.25">
                  {f.stack.map((s) => (
                    <span key={s} className="rounded-[5px] border border-mt-border bg-mt-tag-bg px-2.5 py-[3px] font-mt-mono text-[10.5px] text-mt-text-60">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`relative min-h-85 overflow-hidden bg-mt-surface transition-colors duration-300 max-[900px]:order-2 max-[900px]:min-h-75 max-[900px]:border-t max-[900px]:border-r-0 max-[900px]:border-b-0 max-[900px]:border-l-0 ${
                  f.flip ? "order-1 border-l" : "order-2 border-r"
                } border-mt-border`}
              >
                <FeatureVisual f={f} />
              </div>
            </motion.div>
          );
        })}

        <div className="mt-11 flex flex-wrap items-center justify-between gap-6 rounded-[20px] border border-mt-border bg-mt-surface px-9.5 py-8.5 transition-colors duration-300">
          <div>
            <h3 className="mb-1.5 font-mt-display text-xl font-bold tracking-[-0.025em]">{t.features.summaryTitle}</h3>
            <p className="max-w-110 text-[13px] leading-[1.65] text-mt-text-60">{t.features.summaryDesc}</p>
          </div>
          <Link href="/#contact" className={`${btnPrimary} shrink-0`}>{t.features.summaryCta}</Link>
        </div>
      </div>
    </>
  );
};

export default FeaturesClient;

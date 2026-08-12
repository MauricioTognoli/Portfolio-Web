"use client";

import { useLanguage } from "@/lib/i18n";
import { dataLogoCloud } from "@/data";

const LogoCloud = () => {
  const { t } = useLanguage();

  return (
    <div className="border-t border-b border-mt-border bg-mt-surface px-12 py-7 transition-colors duration-300 max-[560px]:px-5">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-10 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-3">
        <span className="whitespace-nowrap text-[11px] tracking-widest text-mt-text-30 uppercase">{t.logocloud.label}</span>
        <div className="flex flex-1 flex-wrap items-center gap-8">
          {dataLogoCloud.map((name) => (
            <span
              className="cursor-default font-mt-display text-sm font-semibold tracking-[-0.01em] text-mt-text-30 transition-colors duration-200 hover:text-mt-text-60"
              key={name}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;

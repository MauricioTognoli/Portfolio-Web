"use client";

import { useLanguage } from "@/lib/i18n";

const Marquee = () => {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div aria-hidden="true" className="overflow-hidden border-t border-b border-mt-border py-3.5 bg-mt-surface transition-colors duration-300">
      <div className="flex w-max gap-12 whitespace-nowrap animate-mt-marquee">
        {items.map((item, i) => (
          <div className="flex shrink-0 items-center gap-2.5 font-mt-mono text-xs text-mt-text-30" key={`${item}-${i}`}>
            <span className="text-mt-orange">✦</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

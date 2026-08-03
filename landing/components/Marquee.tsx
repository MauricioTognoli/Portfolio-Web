"use client";

import { useLanguage } from "@/lib/i18n";

const Marquee = () => {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="mt-marquee-section">
      <div className="mt-marquee-track">
        {items.map((item, i) => (
          <div className="mt-marquee-item" key={`${item}-${i}`}>
            <span>✦</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const StickyCta = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setShow(false);
      return;
    }

    const handleScroll = () => {
      const hireSection = document.getElementById("hire");
      const hireTop = hireSection ? hireSection.offsetTop : Infinity;
      const y = window.scrollY;
      setShow(y > 600 && y < hireTop - 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-5 bottom-5 z-90 flex items-center gap-2.5 rounded-full border border-mt-border-bright bg-mt-surface py-2 pr-2 pl-[18px] shadow-[0_12px_48px_rgba(0,0,0,.4)] transition-colors duration-300 max-[560px]:right-4 max-[560px]:bottom-4 max-[560px]:left-4 max-[560px]:justify-between"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-[7px] text-xs text-mt-text-60 max-[560px]:hidden">
            <span className="h-[7px] w-[7px] animate-mt-pulse rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
            {t.sticky.text}
          </span>
          <a href="#hire" className="rounded-full bg-mt-orange px-[18px] py-[9px] font-mt-display text-xs font-semibold whitespace-nowrap text-black no-underline transition-colors duration-200 hover:bg-[#ff7a30]">{t.sticky.btn}</a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCta;

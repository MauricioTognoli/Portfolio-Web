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
          className="mt-sticky-cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
        >
          <span className="mt-sticky-cta-text">
            <span className="mt-sticky-cta-dot" />
            {t.sticky.text}
          </span>
          <a href="#hire" className="mt-sticky-cta-btn">{t.sticky.btn}</a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCta;

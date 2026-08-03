"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";

const Logo = () => (
  <Image
    src="/logo-mt.png"
    alt="Logo Mauricio Tognoli"
    width={50}
    height={50}
    priority
  />
);

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { theme, toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="mt-nav">
      <Link href="/" className="mt-nav-logo">
        <Logo />
        <span className="mt-nav-name">Mauricio Tognoli</span>
      </Link>

      {isHome ? (
        <ul className="mt-nav-center">
          <li>
            <a href="#experience">{t.nav.experience}</a>
          </li>
          <li>
            <Link href="/features">{t.nav.features}</Link>
          </li>
          <li>
            <a href="#projects">{t.nav.projects}</a>
          </li>
          <li>
            <a href="#components">{t.nav.components}</a>
          </li>
          <li>
            <a href="#skills">{t.nav.skills}</a>
          </li>
        </ul>
      ) : (
        <Link href="/" className="mt-nav-back mt-nav-back-desktop">
          {t.nav.back}
        </Link>
      )}

      <div className="mt-nav-right">
        <button
          className="icon-btn"
          onClick={toggleTheme}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button
          className="lang-btn"
          onClick={toggleLang}
          title="Switch language"
          aria-label="Switch language"
        >
          <Languages size={14} />
          <span>{lang === "es" ? "EN" : "ES"}</span>
        </button>
        <Link href={isHome ? "#contact" : "/#contact"} className="mt-nav-cta mt-nav-cta-desktop">
          {t.nav.cta}
        </Link>
        <button
          className="icon-btn mt-mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          title="Menu"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mt-mobile-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {isHome ? (
              <>
                <a href="#experience" onClick={() => setMobileOpen(false)}>{t.nav.experience}</a>
                <Link href="/features" onClick={() => setMobileOpen(false)}>{t.nav.features}</Link>
                <a href="#projects" onClick={() => setMobileOpen(false)}>{t.nav.projects}</a>
                <a href="#components" onClick={() => setMobileOpen(false)}>{t.nav.components}</a>
                <a href="#skills" onClick={() => setMobileOpen(false)}>{t.nav.skills}</a>
              </>
            ) : (
              <Link href="/" onClick={() => setMobileOpen(false)}>{t.nav.back}</Link>
            )}
            <Link
              href={isHome ? "#contact" : "/#contact"}
              className="mt-nav-cta"
              style={{ marginTop: 8, justifyContent: "center" }}
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.cta}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;

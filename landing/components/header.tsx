"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import { iconBtn, langBtn } from "./uiClasses";

const Logo = () => (
  <Image
    src="/logo-mt.png"
    alt="Logo Mauricio Tognoli"
    width={50}
    height={50}
    priority
  />
);

const navCta =
  "rounded-md bg-mt-orange px-4.5 py-2 font-mt-display text-[13px] font-semibold whitespace-nowrap text-black no-underline transition-opacity duration-200 hover:opacity-85";
const navLink =
  "text-[13px] text-mt-text-60 no-underline transition-colors duration-200 hover:text-mt-text";
const mobileLink =
  "border-b border-mt-border px-1 py-[13px] text-[15px] text-mt-text-60 no-underline transition-colors duration-200 hover:text-mt-text";

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
    <nav className="fixed top-0 right-0 left-0 z-100 flex items-center justify-between border-b border-mt-border bg-mt-nav-bg px-12 py-4 backdrop-blur-[20px] transition-colors duration-300 max-[900px]:px-5 max-[900px]:py-3.5 max-[560px]:py-3">
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <Logo />
        <span className="font-mt-display text-[15px] font-semibold tracking-[-0.01em] text-mt-text max-[900px]:hidden">
          Mauricio Tognoli
        </span>
      </Link>

      {isHome ? (
        <ul className="flex list-none items-center gap-7 max-[900px]:hidden">
          <li>
            <a className={navLink} href="#experience">
              {t.nav.experience}
            </a>
          </li>
          {/* <li>
            <Link className={navLink} href="/features">{t.nav.features}</Link>
          </li> */}
          <li>
            <a className={navLink} href="#projects">
              {t.nav.projects}
            </a>
          </li>
          {/* <li>
            <a className={navLink} href="#components">
              {t.nav.components}
            </a>
          </li> */}
          <li>
            <a className={navLink} href="#skills">
              {t.nav.skills}
            </a>
          </li>
        </ul>
      ) : (
        <Link
          href="/"
          className="flex items-center gap-2 rounded-[7px] border border-mt-border px-3.5 py-[7px] text-[13px] text-mt-text-60 no-underline transition-all duration-200 hover:border-mt-border-bright hover:text-mt-text max-[900px]:hidden"
        >
          {t.nav.back}
        </Link>
      )}

      <div className="flex items-center gap-2">
        <button
          className={iconBtn}
          onClick={toggleTheme}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button
          className={langBtn}
          onClick={toggleLang}
          title="Switch language"
          aria-label="Switch language"
        >
          <Languages size={14} />
          <span className="max-[900px]:hidden">
            {lang === "es" ? "EN" : "ES"}
          </span>
        </button>
        <Link
          href={isHome ? "#contact" : "/#contact"}
          className={`${navCta} max-[900px]:hidden`}
        >
          {t.nav.cta}
        </Link>
        <button
          className={`${iconBtn} hidden max-[900px]:flex`}
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
            className="absolute top-full right-0 left-0 flex flex-col gap-0.5 border-b border-mt-border bg-mt-nav-bg px-6 pt-2.5 pb-5 backdrop-blur-[20px]"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {isHome ? (
              <>
                <a
                  className={mobileLink}
                  href="#experience"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.experience}
                </a>
                <Link
                  className={mobileLink}
                  href="/features"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.features}
                </Link>
                <a
                  className={mobileLink}
                  href="#projects"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.projects}
                </a>
                <a
                  className={mobileLink}
                  href="#components"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.components}
                </a>
                <a
                  className={mobileLink}
                  href="#skills"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.skills}
                </a>
              </>
            ) : (
              <Link
                className={mobileLink}
                href="/"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.back}
              </Link>
            )}
            <Link
              href={isHome ? "#contact" : "/#contact"}
              className={`${navCta} mt-2 flex items-center justify-center text-center`}
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

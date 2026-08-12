"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { socialNetworks, cvFiles } from "@/data";

const githubLink = socialNetworks.find((s) => s.description === "GitHub")?.src ?? "#";
const linkedinLink = socialNetworks.find((s) => s.description === "LinkedIn")?.src ?? "#";

const Footer = () => {
  const { t, lang } = useLanguage();
  const cvLink = cvFiles[lang];

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-mt-border bg-mt-bg px-12 py-7 transition-colors duration-300 max-[900px]:px-6 max-[560px]:flex-col max-[560px]:items-start max-[560px]:px-5 max-[560px]:py-6">
      <div className="text-xs text-mt-text-30">© {new Date().getFullYear()} Mauricio Tognoli · {t.footer.tagline}</div>
      <ul className="flex flex-wrap list-none gap-[22px]">
        <li><a className="text-xs text-mt-text-30 no-underline transition-colors duration-200 hover:text-mt-text-60" href={cvLink} download>{t.footer.cv}</a></li>
        <li><a className="text-xs text-mt-text-30 no-underline transition-colors duration-200 hover:text-mt-text-60" href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a className="text-xs text-mt-text-30 no-underline transition-colors duration-200 hover:text-mt-text-60" href={linkedinLink} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><Link className="text-xs text-mt-text-30 no-underline transition-colors duration-200 hover:text-mt-text-60" href="/#components">{t.footer.components}</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;

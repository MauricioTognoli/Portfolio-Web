"use client";

import { useLanguage } from "@/lib/i18n";
import { socialNetworks } from "@/data";

const cvLink = socialNetworks.find((s) => s.description === "Currículum")?.src ?? "#";
const githubLink = socialNetworks.find((s) => s.description === "GitHub")?.src ?? "#";
const linkedinLink = socialNetworks.find((s) => s.description === "LinkedIn")?.src ?? "#";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-footer">
      <div className="mt-footer-copy">© {new Date().getFullYear()} Mauricio Tognoli · {t.footer.tagline}</div>
      <ul className="mt-footer-links">
        <li><a href={cvLink} target="_blank" rel="noopener noreferrer">{t.footer.cv}</a></li>
        <li><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href={linkedinLink} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="/#components">{t.footer.components}</a></li>
      </ul>
    </footer>
  );
};

export default Footer;

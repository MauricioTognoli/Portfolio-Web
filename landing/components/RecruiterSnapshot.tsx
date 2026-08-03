"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { recruiterCoreStack, socialNetworks } from "@/data";

const cvLink = socialNetworks.find((s) => s.description === "Currículum")?.src ?? "#";

const RecruiterSnapshot = () => {
  const { t } = useLanguage();

  return (
    <section className="mt-recruiter-section mt-section" id="hire">
      <div className="mt-section-inner">
        <div className="mt-section-label">{t.recruiter.label}</div>
        <h2 className="mt-section-title">
          {t.recruiter.title1}
          <br />
          <span style={{ color: "var(--mt-orange)" }}>{t.recruiter.title2}</span>
        </h2>
        <p className="mt-section-desc">{t.recruiter.desc}</p>

        <motion.div
          className="mt-recruiter-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mt-recruiter-header">
            <div className="mt-recruiter-title-wrap">
              <div className="mt-recruiter-avatar">MT</div>
              <div>
                <div className="mt-recruiter-name">Mauricio Tognoli</div>
                <div className="mt-recruiter-role">{t.recruiter.role}</div>
              </div>
            </div>
            <div className="mt-recruiter-actions">
              <a href={cvLink} target="_blank" rel="noopener noreferrer" className="btn-primary">{t.recruiter.cv}</a>
              <a href="#contact" className="btn-secondary">{t.recruiter.call}</a>
            </div>
          </div>

          <div className="mt-recruiter-facts">
            <div className="mt-rfact">
              <span className="mt-rfact-label">{t.recruiter.f1l}</span>
              <span className="mt-rfact-value"><span className="mt-green-dot" />{t.recruiter.f1v}</span>
              <span className="mt-rfact-sub">{t.recruiter.f1s}</span>
            </div>
            <div className="mt-rfact">
              <span className="mt-rfact-label">{t.recruiter.f2l}</span>
              <span className="mt-rfact-value">{t.recruiter.f2v}</span>
              <span className="mt-rfact-sub">{t.recruiter.f2s}</span>
            </div>
            <div className="mt-rfact">
              <span className="mt-rfact-label">{t.recruiter.f3l}</span>
              <span className="mt-rfact-value">GMT-3 🇦🇷</span>
              <span className="mt-rfact-sub">{t.recruiter.f3s}</span>
            </div>
            <div className="mt-rfact">
              <span className="mt-rfact-label">{t.recruiter.f4l}</span>
              <span className="mt-rfact-value">{t.recruiter.f4v}</span>
              <span className="mt-rfact-sub">{t.recruiter.f4s}</span>
            </div>
          </div>

          <div className="mt-recruiter-row2">
            <div className="mt-rfact">
              <span className="mt-rfact-label">{t.recruiter.f5l}</span>
              <span className="mt-rfact-value">{recruiterCoreStack}</span>
            </div>
            <div className="mt-rfact">
              <span className="mt-rfact-label">{t.recruiter.f6l}</span>
              <span className="mt-rfact-value">{t.recruiter.f6v}</span>
            </div>
            <div className="mt-rfact">
              <span className="mt-rfact-label">{t.recruiter.f7l}</span>
              <span className="mt-rfact-value">{t.recruiter.f7v}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterSnapshot;

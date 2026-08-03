"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataExperience } from "@/data";

const Experience = () => {
  const { lang, t } = useLanguage();
  const items = dataExperience[lang];

  return (
    <section className="mt-experience mt-section" id="experience">
      <div className="mt-section-inner">
        <div className="mt-section-label">{t.experience.label}</div>
        <h2 className="mt-section-title">{t.experience.title}</h2>
        <p className="mt-section-desc">{t.experience.desc}</p>

        <div className="mt-timeline">
          {items.map((exp, i) => (
            <motion.div
              className="mt-timeline-item"
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div>
                <div className="mt-tl-period">{exp.period}</div>
                <div className="mt-tl-role">{exp.role}</div>
                <div className="mt-tl-company">{exp.company}</div>
                <span className="mt-tl-badge">{exp.badge}</span>
              </div>
              <div>
                <p className="mt-tl-summary">{exp.summary}</p>
                <ul className="mt-tl-achievements">
                  {exp.achievements.map((a, ai) => (
                    <li key={ai} dangerouslySetInnerHTML={{ __html: a }} />
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

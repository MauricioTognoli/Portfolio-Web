"use client";

import { motion } from "framer-motion";
import { Boxes, Palette, Gauge, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dataSkillGroups } from "@/data";

const Skills = () => {
  const { t } = useLanguage();

  const groups = [
    { key: "g1", icon: <Boxes size={18} />, name: t.skills.g1, data: dataSkillGroups.g1 },
    { key: "g2", icon: <Palette size={18} />, name: t.skills.g2, data: dataSkillGroups.g2 },
    { key: "g3", icon: <Gauge size={18} />, name: t.skills.g3, data: dataSkillGroups.g3 },
    { key: "g4", icon: <Wrench size={18} />, name: t.skills.g4, data: dataSkillGroups.g4 },
  ];

  return (
    <section className="mt-skills mt-section" id="skills">
      <div className="mt-section-inner">
        <div className="mt-section-label">{t.skills.label}</div>
        <h2 className="mt-section-title">
          {t.skills.title1}
          <br />
          <span style={{ color: "var(--mt-orange)" }}>{t.skills.title2}</span>
        </h2>
        <p className="mt-section-desc">{t.skills.desc}</p>

        <div className="mt-skills-grid">
          {groups.map((group, i) => (
            <motion.div
              className="mt-skill-group"
              key={group.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="mt-skill-group-header">
                <div className="mt-skill-group-icon">{group.icon}</div>
                <div className="mt-skill-group-name">{group.name}</div>
              </div>
              <div className="mt-skill-tags">
                {group.data.tags.map((tag) => (
                  <span key={tag.label} className={`mt-skill-pill${tag.highlight ? " highlight" : ""}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

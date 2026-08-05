"use client";

import { motion } from "framer-motion";
import { Boxes, Palette, Gauge, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dataSkillGroups } from "@/data";
import { sectionPad, SectionInner, SectionLabel, SectionTitle, SectionDesc } from "./Section";

const Skills = () => {
  const { t } = useLanguage();

  const groups = [
    { key: "g1", icon: <Boxes size={18} />, name: t.skills.g1, data: dataSkillGroups.g1 },
    { key: "g2", icon: <Palette size={18} />, name: t.skills.g2, data: dataSkillGroups.g2 },
    { key: "g3", icon: <Gauge size={18} />, name: t.skills.g3, data: dataSkillGroups.g3 },
    { key: "g4", icon: <Wrench size={18} />, name: t.skills.g4, data: dataSkillGroups.g4 },
  ];

  return (
    <section className={`border-t border-mt-border bg-mt-surface transition-colors duration-300 ${sectionPad}`} id="skills">
      <SectionInner>
        <SectionLabel>{t.skills.label}</SectionLabel>
        <SectionTitle>
          {t.skills.title1}
          <br />
          <span className="text-mt-orange">{t.skills.title2}</span>
        </SectionTitle>
        <SectionDesc>{t.skills.desc}</SectionDesc>

        <div className="grid grid-cols-2 gap-4.5 max-[900px]:grid-cols-1">
          {groups.map((group, i) => (
            <motion.div
              className="rounded-2xl border border-mt-border bg-mt-card-bg p-6.5 transition-colors duration-300"
              key={group.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="mb-4.5 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-mt-orange-dim text-mt-orange">{group.icon}</div>
                <div className="font-mt-display text-[15px] font-semibold tracking-[-0.01em]">{group.name}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.data.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`rounded-full border px-3.5 py-1.5 font-mt-mono text-xs transition-colors duration-200 ${
                      tag.highlight
                        ? "border-[rgba(242,100,25,.25)] bg-mt-orange-dim text-mt-orange"
                        : "border-mt-border bg-mt-tag-bg text-mt-text-60 hover:border-[rgba(242,100,25,.3)] hover:text-mt-text"
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionInner>
    </section>
  );
};

export default Skills;

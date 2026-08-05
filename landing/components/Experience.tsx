"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataExperience } from "@/data";
import { sectionPad, SectionInner, SectionLabel, SectionTitle, SectionDesc } from "./Section";

const Experience = () => {
  const { lang, t } = useLanguage();
  const items = dataExperience[lang];

  return (
    <section className={`bg-mt-bg transition-colors duration-300 ${sectionPad}`} id="experience">
      <SectionInner>
        <SectionLabel>{t.experience.label}</SectionLabel>
        <SectionTitle>{t.experience.title}</SectionTitle>
        <SectionDesc>{t.experience.desc}</SectionDesc>

        <div className="relative flex flex-col before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-linear-to-b before:from-mt-orange before:to-mt-border before:content-['']">
          {items.map((exp, i) => (
            <motion.div
              className="relative grid grid-cols-[1fr_2fr] gap-12 border-b border-mt-border py-9 pr-0 pl-10 last:border-b-0 before:absolute before:top-10 before:-left-1 before:h-[9px] before:w-[9px] before:rounded-full before:bg-mt-orange before:shadow-[0_0_0_3px_rgba(242,100,25,0.2)] before:content-[''] max-[900px]:grid-cols-1 max-[900px]:gap-4"
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div>
                <div className="mb-1.5 font-mt-mono text-[10px] tracking-[0.08em] text-mt-orange uppercase">{exp.period}</div>
                <div className="mb-1 font-mt-display text-[19px] font-bold tracking-[-0.02em]">{exp.role}</div>
                <div className="text-[13px] text-mt-text-60">{exp.company}</div>
                <span className="mt-2 inline-block rounded-full border border-[rgba(242,100,25,.2)] bg-mt-orange-dim px-2.5 py-[3px] text-[10px] tracking-wider text-mt-orange">
                  {exp.badge}
                </span>
              </div>
              <div>
                <p className="mb-4.5 pt-1 text-[13px] leading-[1.7] text-mt-text-60">{exp.summary}</p>
                <ul className="flex list-none flex-col gap-[9px] [&_strong]:text-mt-text">
                  {exp.achievements.map((a, ai) => (
                    <li
                      key={ai}
                      className="flex items-start gap-[9px] text-[13px] leading-normal text-mt-text-60 before:mt-px before:shrink-0 before:text-xs before:text-mt-orange before:content-['✓']"
                      dangerouslySetInnerHTML={{ __html: a }}
                    />
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionInner>
    </section>
  );
};

export default Experience;

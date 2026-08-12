"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataProjects, type ProjectItem } from "@/data";
import ScreenshotFrame from "./ScreenshotFrame";
import { sectionPad, SectionInner, SectionLabel, SectionTitle } from "./Section";
import { btnPrimary, btnSecondary, miniCard, miniPreview, miniBadge } from "./uiClasses";

const BrowserChrome = ({ project }: { project: ProjectItem }) => (
  <div className="absolute inset-x-5 top-5 bottom-0 flex flex-col overflow-hidden rounded-t-[10px] border border-mt-border bg-mt-surface shadow-[0_12px_48px_rgba(0,0,0,.5)] transition-transform duration-400 group-hover:-translate-y-2">
    <div className="flex h-7 shrink-0 items-center gap-2.5 border-b border-mt-border bg-mt-surface-2 px-3">
      <div className="flex gap-1.25">
        <div className="h-2.25 w-2.25 rounded-full bg-[#ff5f57]" />
        <div className="h-2.25 w-2.25 rounded-full bg-[#febc2e]" />
        <div className="h-2.25 w-2.25 rounded-full bg-[#28c840]" />
      </div>
      <div className="h-4 flex-1 rounded-[3px] bg-mt-border" />
    </div>
    {project.screenshots ? (
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <ScreenshotFrame
          src={project.screenshots.desktop[0].src}
          alt={`${project.title} — ${project.screenshots.desktop[0].label}`}
          naturalWidth={project.screenshots.desktop[0].width}
          naturalHeight={project.screenshots.desktop[0].height}
        />
      </div>
    ) : (
      <div className="flex flex-col gap-1.75 p-3">
        <div className="h-2 w-2/5 rounded-[3px] bg-[rgba(242,100,25,.35)]" />
        <div className="h-1.75 w-[65%] rounded-[3px] bg-mt-border-bright" />
        <div className="mt-1 grid grid-cols-4 gap-1.5">
          <div className="h-11 rounded-md bg-mt-border" />
          <div className="h-11 rounded-md border border-[rgba(242,100,25,.2)] bg-[rgba(242,100,25,.15)]" />
          <div className="h-11 rounded-md bg-mt-border" />
          <div className="h-11 rounded-md bg-mt-border" />
        </div>
        <div className="relative mt-1 h-20 overflow-hidden rounded-md bg-mt-surface-2">
          <div className="absolute inset-x-0 bottom-0 flex items-end gap-0.75 p-1.5">
            {[45, 65, 50, 80, 60, 90, 70, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-xs bg-mt-orange" style={{ height: `${h}%`, opacity: 0.6 + i * 0.04 }} />
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

const MiniPreview = ({ project }: { project: ProjectItem }) => (
  <div className="absolute inset-x-3.5 top-3.5 bottom-0 flex flex-col overflow-hidden rounded-t-lg border border-mt-border bg-mt-surface shadow-[0_8px_30px_rgba(0,0,0,.5)]">
    <div className="flex h-5.5 shrink-0 items-center gap-1 border-b border-mt-border bg-mt-surface-2 px-2">
      <div className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
      <div className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
      <div className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
    </div>
    {project.screenshots ? (
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <ScreenshotFrame
          src={project.screenshots.desktop[0].src}
          alt={`${project.title} — ${project.screenshots.desktop[0].label}`}
          naturalWidth={project.screenshots.desktop[0].width}
          naturalHeight={project.screenshots.desktop[0].height}
        />
      </div>
    ) : (
      <div className="flex flex-col gap-1.25 p-2">
        <div className="h-1.5 rounded-[3px] bg-mt-border-bright" />
        <div className="grid grid-cols-2 gap-1.25">
          <div className="h-6 rounded bg-mt-border" />
          <div className="h-6 rounded border border-[rgba(242,100,25,.15)] bg-[rgba(242,100,25,.15)]" />
        </div>
      </div>
    )}
  </div>
);

const ProjectsPreview = () => {
  const { lang, t } = useLanguage();
  const projects = dataProjects[lang];
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id).slice(0, 3);

  return (
    <section className={`border-t border-mt-border bg-mt-surface transition-colors duration-300 ${sectionPad}`} id="projects">
      <SectionInner>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>{t.projects.label}</SectionLabel>
            <SectionTitle className="mb-2.5">{t.projects.title}</SectionTitle>
            <p className="max-w-[420px] text-[13px] leading-[1.65] text-mt-text-60">{t.projects.desc}</p>
          </div>
          <Link href="/proyectos" className={`${btnSecondary} shrink-0`}>{t.projects.viewAll}</Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4"
        >
          <Link
            href="/proyectos"
            className="group grid grid-cols-2 overflow-hidden rounded-[20px] border border-mt-border bg-mt-card-bg text-inherit no-underline transition-all duration-300 hover:-translate-y-[3px] hover:border-mt-border-bright max-[900px]:grid-cols-1"
          >
            <div className="relative min-h-[300px] overflow-hidden bg-mt-surface-2">
              <BrowserChrome project={featured} />
              <div className="absolute top-4 left-4 rounded-full border border-mt-border-bright bg-mt-bg/80 px-3 py-1 text-[11px] tracking-[0.06em] text-mt-text-60 uppercase backdrop-blur-[10px]">
                {featured.category}
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-[5px] rounded-full border border-mt-border-bright bg-mt-bg/80 px-3 py-1 text-[11px] backdrop-blur-[10px]">
                <div className="h-1.5 w-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80]" />
                <span className="text-mt-text-60">{t.projects.liveNow}</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-9">
              <div className="mb-2.5 text-[11px] tracking-widest text-mt-orange uppercase">
                {t.projects.featured} · {featured.category}
              </div>
              <h3 className="mb-3 font-mt-display text-[26px] leading-[1.1] font-bold tracking-[-0.025em]">{featured.title}</h3>
              <p className="mb-5.5 text-[13px] leading-[1.7] text-mt-text-60">{featured.tagline}</p>
              <div className="mb-5.5 flex flex-wrap gap-4 rounded-[10px] bg-mt-text-10 p-4">
                {featured.metrics.slice(0, 3).map((m) => (
                  <div key={m.lbl}>
                    <div className="font-mt-display text-[22px] font-bold tracking-[-0.5px] text-mt-orange">{m.val}</div>
                    <div className="text-[9px] tracking-wider text-mt-text-30 uppercase">{m.lbl}</div>
                  </div>
                ))}
              </div>
              <div className="mb-5.5 flex flex-wrap gap-1.5">
                {featured.stackPills.map((s) => (
                  <span key={s} className="rounded border border-mt-border bg-mt-tag-bg px-2.5 py-[3px] text-[11px] text-mt-text-60">{s}</span>
                ))}
              </div>
              <div className="flex items-center gap-[5px] text-[13px] text-mt-orange">{t.projects.cta}</div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {rest.map((p) => (
            <Link href="/proyectos" className={miniCard} key={p.id}>
              <div className={miniPreview}>
                <MiniPreview project={p} />
                <div className={`${miniBadge} left-2.5 text-mt-text-60 tracking-wider uppercase`}>{p.category}</div>
              </div>
              <div className="p-5">
                <h3 className="mb-1.75 font-mt-display text-[17px] font-bold tracking-[-0.5px]">{p.title}</h3>
                <p className="mb-3.5 text-xs leading-[1.6] text-mt-text-60">{p.tagline}</p>
                <div className="mb-3.5 flex flex-wrap gap-1.25">
                  {p.stackPills.slice(0, 3).map((s) => (
                    <span key={s} className="rounded-[3px] border border-mt-border bg-mt-tag-bg px-2 py-0.5 text-[10px] text-mt-text-60">{s}</span>
                  ))}
                </div>
                <div className="text-xs text-mt-orange">{t.projects.cta}</div>
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[14px] border border-mt-border bg-mt-text-10 px-6.5 py-5.5"
        >
          <div>
            <div className="mb-[3px] font-mt-display text-[15px] font-semibold tracking-[-0.01em]">{t.projects.moreTitle}</div>
            <div className="text-xs text-mt-text-30">{t.projects.moreSub}</div>
          </div>
          <Link href="/proyectos" className={btnPrimary}>{t.projects.viewAllBtn}</Link>
        </motion.div>
      </SectionInner>
    </section>
  );
};

export default ProjectsPreview;

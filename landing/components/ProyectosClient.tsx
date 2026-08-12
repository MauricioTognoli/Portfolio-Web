"use client";

import {
  useEffect,
  useMemo,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutGrid,
  List,
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dataProjects, type ProjectItem } from "@/data";
import ScreenshotFrame from "./ScreenshotFrame";
import { btnPrimary, btnGhost } from "./uiClasses";
import * as pk from "./pageKit";

type ProjectType = "all" | ProjectItem["type"];
type StackFilter = "all" | "nextjs" | "react" | "tailwind" | "graphql";
type SortOption = "featured" | "newest" | "alpha";
type View = "grid" | "list";
type Tab = "overview" | "gallery" | "stack";

const stackMatch: Record<Exclude<StackFilter, "all">, string> = {
  nextjs: "next",
  react: "react",
  tailwind: "tailwind",
  graphql: "graphql",
};

const typeFilters: { value: ProjectType; es: string; en: string }[] = [
  { value: "all", es: "Todos", en: "All" },
  { value: "landing", es: "Landing", en: "Landing" },
  { value: "saas", es: "SaaS", en: "SaaS" },
];

const stackFilters: { value: StackFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "nextjs", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "tailwind", label: "Tailwind" },
  { value: "graphql", label: "GraphQL" },
];

const statusLabel: Record<ProjectItem["status"], { es: string; en: string }> = {
  live: { es: "En producción", en: "Live" },
  wip: { es: "En progreso", en: "In progress" },
  private: { es: "Aún no disponible", en: "Not yet available" },
};

const statusDotColor: Record<ProjectItem["status"], string> = {
  live: "bg-[#4ade80] shadow-[0_0_6px_#4ade80]",
  wip: "bg-[#fbbf24] shadow-[0_0_6px_#fbbf24]",
  private: "bg-mt-text-30",
};

const browserDots = ["#ff5f57", "#febc2e", "#28c840"];

const CardBrowserMock = ({ project }: { project: ProjectItem }) => (
  <div className={pk.pkBrowserMock}>
    <div className={pk.pkBrowserBar}>
      <div className="flex gap-1.25">
        {browserDots.map((c) => (
          <div
            key={c}
            className="h-2 w-2 rounded-full"
            style={{ background: c }}
          />
        ))}
      </div>
      <div className={pk.pkBrowserUrl} />
    </div>
    {project.screenshots ? (
      <div className={pk.pkBrowserShot}>
        <ScreenshotFrame
          src={project.screenshots.desktop[0].src}
          alt={`${project.title} — ${project.screenshots.desktop[0].label}`}
          naturalWidth={project.screenshots.desktop[0].width}
          naturalHeight={project.screenshots.desktop[0].height}
        />
      </div>
    ) : (
      <div className={pk.pkBrowserBody}>
        <div className={`${pk.pkBrow} w-1/2 bg-[rgba(242,100,25,.35)]`} />
        <div className={`${pk.pkBrow} w-[65%]`} />
        <div className={pk.pkBrowGrid}>
          <div className={pk.pkBrowBlock} />
          <div className={`${pk.pkBrowBlock} ${pk.pkBrowBlockAccent}`} />
          <div className={pk.pkBrowBlock} />
          <div className={pk.pkBrowBlock} />
        </div>
      </div>
    )}
  </div>
);

const ScreenshotGallery = ({ project }: { project: ProjectItem }) => {
  if (!project.screenshots) return null;
  const { desktop, mobile } = project.screenshots;
  return (
    <div className={pk.pkShotGallery}>
      {desktop.map((shot, i) => (
        <div
          key={shot.src}
          className={`${pk.pkShotGalleryItem}${i === 0 ? ` ${pk.pkShotGalleryItemWide}` : ""}`}
        >
          <ScreenshotFrame
            src={shot.src}
            alt={`${project.title} — ${shot.label}`}
            naturalWidth={shot.width}
            naturalHeight={shot.height}
            mode="scroll"
          />
          <div className={pk.pkGalleryLabel}>{shot.label}</div>
        </div>
      ))}
      {mobile?.map((shot) => (
        <div key={shot.src} className={pk.pkShotGalleryItem}>
          <ScreenshotFrame
            src={shot.src}
            alt={`${project.title} — ${shot.label}`}
            naturalWidth={shot.width}
            naturalHeight={shot.height}
            mode="scroll"
          />
          <div className={pk.pkGalleryLabel}>{shot.label}</div>
        </div>
      ))}
    </div>
  );
};

const GalleryScreen = ({
  variant,
  label,
}: {
  variant: number;
  label: string;
}) => (
  <div
    className={`${pk.pkGalleryItem}${variant === 0 ? ` ${pk.pkGalleryItemWide}` : ""}`}
  >
    <div className={pk.pkGscreen}>
      <div className={pk.pkGscreenBar}>
        {browserDots.map((c) => (
          <div key={c} className={pk.pkGscreenDot} style={{ background: c }} />
        ))}
      </div>
      {variant === 0 && (
        <div className={pk.pkGscreenBody}>
          <div
            className={`${pk.pkGscreenRow} w-[45%] bg-[rgba(242,100,25,.3)]`}
          />
          <div className={`${pk.pkGscreenRow} w-[60%]`} />
          <div className={pk.pkGscreenBlocks}>
            <div
              className={`${pk.pkGscreenBlock} ${pk.pkGscreenBlockAccent}`}
            />
            <div className={pk.pkGscreenBlock} />
            <div className={pk.pkGscreenBlock} />
          </div>
          <div className={pk.pkGscreenChart}>
            {[35, 55, 45, 70, 60, 80, 65, 90, 75, 85, 70, 95].map((h, i) => (
              <div
                key={i}
                className={pk.pkGscreenChartBar}
                style={{ left: `${i * 8.33}%`, height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      )}
      {variant === 1 && (
        <div
          className={`${pk.pkGscreenBody} grid grid-cols-[80px_1fr] gap-1.5`}
        >
          <div className="flex flex-col gap-1.25 border-r border-mt-border bg-mt-surface-3 p-1.5">
            <div className="h-2 w-4/5 rounded-[3px] bg-[rgba(242,100,25,.4)]" />
            <div className="h-1.5 rounded-[3px] bg-mt-border-bright" />
            <div className="h-1.5 rounded-[3px] bg-mt-border-bright" />
          </div>
          <div className="flex flex-col gap-1.25">
            <div
              className={`${pk.pkGscreenRow} w-[45%] bg-[rgba(242,100,25,.3)]`}
            />
            <div className={pk.pkGscreenRow} />
            <div className={`${pk.pkGscreenRow} w-[60%]`} />
          </div>
        </div>
      )}
      {variant === 2 && (
        <div className={pk.pkGscreenBody}>
          <div className={pk.pkGscreenRow} />
          <div className="mt-1 grid grid-cols-2 gap-1">
            <div
              className={`${pk.pkGscreenBlock} ${pk.pkGscreenBlockAccent} h-11`}
            />
            <div className={`${pk.pkGscreenBlock} h-11`} />
          </div>
          <div className={`${pk.pkGscreenRow} mt-1 w-[60%]`} />
          <div className={`${pk.pkGscreenRow} w-[90%]`} />
        </div>
      )}
      {variant === 3 && (
        <div className={pk.pkGscreenBody}>
          <div
            className={`${pk.pkGscreenRow} w-[45%] bg-[rgba(242,100,25,.3)]`}
          />
          <div className={pk.pkGscreenRow} />
          <div className={pk.pkGscreenBlocks}>
            <div className={pk.pkGscreenBlock} />
            <div
              className={`${pk.pkGscreenBlock} ${pk.pkGscreenBlockAccent}`}
            />
            <div className={pk.pkGscreenBlock} />
          </div>
        </div>
      )}
    </div>
    <div className={pk.pkGalleryLabel}>{label}</div>
  </div>
);

const onActivate = (fn: () => void) => (e: ReactKeyboardEvent) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fn();
  }
};

const ProyectosClient = () => {
  const { lang, t } = useLanguage();
  const projects = dataProjects[lang];

  const [type, setType] = useState<ProjectType>("all");
  const [stack, setStack] = useState<StackFilter>("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [view, setView] = useState<View>("grid");
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [tab, setTab] = useState<Tab>("overview");

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const typeOk = type === "all" || p.type === type;
      const stackOk =
        stack === "all" ||
        p.stackPills.some((s) => s.toLowerCase().includes(stackMatch[stack]));
      return typeOk && stackOk;
    });
    list = [...list];
    if (sort === "newest") list.sort((a, b) => b.date.localeCompare(a.date));
    else if (sort === "alpha")
      list.sort((a, b) => a.title.localeCompare(b.title));
    else list.sort((a, b) => Number(b.featured) - Number(a.featured));
    return list;
  }, [projects, type, stack, sort]);

  useEffect(() => {
    setModalIndex(null);
  }, [type, stack, sort, view, lang]);

  useEffect(() => {
    if (modalIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIndex(null);
      if (e.key === "ArrowLeft")
        setModalIndex((i) => (i !== null ? Math.max(0, i - 1) : i));
      if (e.key === "ArrowRight")
        setModalIndex((i) =>
          i !== null ? Math.min(filtered.length - 1, i + 1) : i,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalIndex, filtered.length]);

  const openModal = (id: number) => {
    const idx = filtered.findIndex((p) => p.id === id);
    if (idx === -1) return;
    setTab("overview");
    setModalIndex(idx);
  };

  const activeProject =
    modalIndex !== null && modalIndex < filtered.length
      ? filtered[modalIndex]
      : null;

  return (
    <>
      <div className={pk.pkHeader}>
        <div className={pk.pkHeaderGridBg} />
        <div className={pk.pkHeaderGlow} />
        <div className={pk.pkHeaderInner}>
          <div className={pk.pkBreadcrumb}>
            <Link className={pk.pkBreadcrumbLink} href="/">
              Home
            </Link>
            <span>/</span>
            <span className="text-mt-text-60">{t.nav.projects}</span>
          </div>
          <h1 className={pk.pkTitle}>
            {lang === "es" ? (
              <>
                Todo el <span className="text-mt-orange">trabajo,</span>
              </>
            ) : (
              <>
                All the <span className="text-mt-orange">work,</span>
              </>
            )}
            <br />
            <span className="font-mt-serif font-normal italic">
              {lang === "es" ? "sin relleno." : "no filler."}
            </span>
          </h1>
          <p className={pk.pkSubtitle}>
            {lang === "es"
              ? "Un archivo curado de las interfaces y productos que diseñé y construí — cada uno con un problema real, restricciones reales y resultados reales."
              : "A curated archive of the interfaces and products I've designed and built — each one with a real problem, real constraints, and real results."}
          </p>
          <div className={pk.pkStats}>
            <div>
              <div className={pk.pkStatN}>{projects.length}</div>
              <div className={pk.pkStatL}>{t.nav.projects}</div>
            </div>
            <div>
              <div className={pk.pkStatN}>
                3<span className="text-mt-orange">+</span>
              </div>
              <div className={pk.pkStatL}>
                {lang === "es" ? "Industrias" : "Industries"}
              </div>
            </div>
            <div>
              <div className={pk.pkStatN}>
                100<span className="text-mt-orange">%</span>
              </div>
              <div className={pk.pkStatL}>
                {lang === "es" ? "Real" : "Real"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={pk.pkToolbar}>
        <div className={pk.pkToolbarInner}>
          <span className={pk.pkFilterLabel}>Type:</span>
          <div className="flex flex-wrap gap-1.5">
            {typeFilters.map((f) => (
              <button
                key={f.value}
                className={`${pk.pkFilterPill}${type === f.value ? ` ${pk.pkFilterPillActive}` : ""}`}
                onClick={() => setType(f.value)}
              >
                {lang === "es" ? f.es : f.en}
              </button>
            ))}
          </div>

          <div className={pk.pkSep} />

          <span className={pk.pkFilterLabel}>Stack:</span>
          <div className="flex flex-wrap gap-1.5">
            {stackFilters.map((f) => (
              <button
                key={f.value}
                className={`${pk.pkFilterPill}${stack === f.value ? ` ${pk.pkFilterPillActive}` : ""}`}
                onClick={() => setStack(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className={pk.pkSep} />

          <select
            className={pk.pkSortSelect}
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
          >
            <option value="featured">
              {lang === "es" ? "Destacados primero" : "Featured first"}
            </option>
            <option value="newest">
              {lang === "es" ? "Más recientes" : "Newest first"}
            </option>
            <option value="alpha">A → Z</option>
          </select>

          <span className={pk.pkResultsCount}>
            {filtered.length} {lang === "es" ? "proyectos" : "projects"}
          </span>

          <div className={pk.pkViewToggle}>
            <button
              className={`${pk.pkViewBtn}${view === "grid" ? ` ${pk.pkViewBtnActive}` : ""}`}
              onClick={() => setView("grid")}
              title="Grid view"
              aria-label="Grid view"
              aria-pressed={view === "grid"}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              className={`${pk.pkViewBtn}${view === "list" ? ` ${pk.pkViewBtnActive}` : ""}`}
              onClick={() => setView("list")}
              title="List view"
              aria-label="List view"
              aria-pressed={view === "list"}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className={pk.pkMain}>
        {filtered.length === 0 ? (
          <div className={pk.pkNoResults}>
            <div className="mb-3 font-mt-mono text-[28px]">∅</div>
            <div className="font-mt-display text-lg font-semibold text-mt-text-60">
              {lang === "es"
                ? "Ningún proyecto coincide con este filtro"
                : "No projects match this filter"}
            </div>
          </div>
        ) : view === "grid" ? (
          <div className={pk.pkGrid}>
            {filtered.map((p, i) => (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                className={`${pk.pkCard}${p.featured && i === 0 ? ` ${pk.pkCardFeatured}` : ""}`}
                onClick={() => openModal(p.id)}
                onKeyDown={onActivate(() => openModal(p.id))}
              >
                <div
                  className={`${pk.pkCardPreview}${p.featured && i === 0 ? ` ${pk.pkCardPreviewFeatured}` : ""}`}
                >
                  <CardBrowserMock project={p} />
                  <div className={pk.pkPreviewGradient} />
                  <div className={pk.pkCatBadge}>{p.category}</div>
                  <div className={pk.pkStatusBadge}>
                    <div
                      className={`${pk.pkStatusDot} ${statusDotColor[p.status]}`}
                    />
                    {lang === "es"
                      ? statusLabel[p.status].es
                      : statusLabel[p.status].en}
                  </div>
                </div>
                <div className={pk.pkCardBody}>
                  <div className={pk.pkCardMeta}>
                    <span className={pk.pkCardType}>{p.type}</span>
                    <span className={pk.pkCardYear}>{p.year}</span>
                  </div>
                  <div className={pk.pkCardTitle}>{p.title}</div>
                  <div className={pk.pkCardDesc}>{p.tagline}</div>
                  <div className={pk.pkCardMetrics}>
                    {p.metrics.slice(0, 3).map((m) => (
                      <div key={m.lbl}>
                        <div className={pk.pkCardMetricVal}>{m.val}</div>
                        <div className={pk.pkCardMetricLbl}>{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                  <div className={pk.pkCardStack}>
                    {p.stackPills.slice(0, 5).map((s) => (
                      <span key={s} className={pk.pkStag}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className={pk.pkCardFooter}>
                    <span className={pk.pkCardCta}>{t.projects.cta}</span>
                    <div
                      className={pk.pkCardLinks}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {p.liveUrl && (
                        <a
                          className={pk.pkCardLink}
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live site"
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          className={pk.pkCardLink}
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                        >
                          <Github size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={pk.pkList}>
            {filtered.map((p) => (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                className={pk.pkLcard}
                onClick={() => openModal(p.id)}
                onKeyDown={onActivate(() => openModal(p.id))}
              >
                {p.logo ? (
                  <div className={pk.pkLcardLogo}>
                    <div className="relative h-full w-full">
                      <Image
                        src={p.logo}
                        alt={`${p.title} logo`}
                        fill
                        sizes="56px"
                        className={`object-contain ${p.title === "Freiguel" ? "invert" : ""}`}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={pk.pkLcardIcon}>
                    {p.title.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="mb-1 flex items-center gap-2.5">
                    <div className={pk.pkLcardTitle}>{p.title}</div>
                    <span className={pk.pkLcardCat}>{p.category}</span>
                  </div>
                  <div className={pk.pkLcardDesc}>{p.tagline}</div>
                  <div className={pk.pkLcardStack}>
                    {p.stackPills.slice(0, 6).map((s) => (
                      <span key={s} className={pk.pkLcardStag}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={pk.pkLcardRight}>
                  <div className="text-right">
                    <div className={pk.pkLcardMetricVal}>
                      {p.metrics[0].val}
                    </div>
                    <div className={pk.pkLcardMetricLbl}>
                      {p.metrics[0].lbl}
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-mt-text-30" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeProject && modalIndex !== null && (
          <motion.div
            className={pk.pkModalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalIndex(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className={`${pk.pkModal}${activeProject.screenshots ? ` ${pk.pkModalWide}` : ""}`}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className={pk.pkModalHeader}>
                <div>
                  <div className={pk.pkModalCategory}>
                    {activeProject.category} · {activeProject.year}
                  </div>
                  <div id="project-modal-title" className={pk.pkModalTitle}>
                    {activeProject.title}
                  </div>
                </div>
                <button
                  className={pk.pkModalClose}
                  onClick={() => setModalIndex(null)}
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className={pk.pkModalTabs} role="tablist">
                {(["overview", "gallery", "stack"] as Tab[]).map((tb) => (
                  <button
                    key={tb}
                    role="tab"
                    aria-selected={tab === tb}
                    className={`${pk.pkModalTab}${tab === tb ? ` ${pk.pkModalTabActive}` : ""}`}
                    onClick={() => setTab(tb)}
                  >
                    {tb === "overview"
                      ? "Overview"
                      : tb === "gallery"
                        ? "Gallery"
                        : "Tech Stack"}
                  </button>
                ))}
              </div>

              <div className={pk.pkModalBody}>
                {tab === "overview" && (
                  <div>
                    <p className={pk.pkModalDescFull}>{activeProject.desc}</p>
                    <div className={pk.pkModalStatRow}>
                      {activeProject.metrics.map((m) => (
                        <div key={m.lbl} className={pk.pkModalStat}>
                          <div className={pk.pkModalStatVal}>{m.val}</div>
                          <div className={pk.pkModalStatLbl}>{m.lbl}</div>
                        </div>
                      ))}
                    </div>
                    <div className={pk.pkModalChallenge}>
                      <div className={pk.pkModalChallengeLabel}>
                        {lang === "es" ? "El desafío" : "The challenge"}
                      </div>
                      <div className={pk.pkModalChallengeText}>
                        {activeProject.challenge}
                      </div>
                    </div>
                    <div className={pk.pkModalKpTitle}>
                      {lang === "es" ? "Puntos clave" : "Key outcomes"}
                    </div>
                    <ul className={pk.pkModalKpList}>
                      {activeProject.keypoints.map((k, i) => (
                        <li
                          key={i}
                          className={pk.pkModalKpItem}
                          dangerouslySetInnerHTML={{ __html: k }}
                        />
                      ))}
                    </ul>
                  </div>
                )}

                {tab === "gallery" &&
                  (activeProject.screenshots ? (
                    <ScreenshotGallery project={activeProject} />
                  ) : (
                    <div className={pk.pkGalleryGrid}>
                      {activeProject.screens.map((label, i) => (
                        <GalleryScreen key={label} variant={i} label={label} />
                      ))}
                    </div>
                  ))}

                {tab === "stack" && (
                  <div>
                    {(
                      Object.entries(activeProject.stack) as [
                        string,
                        string[],
                      ][]
                    ).map(([group, items]) => (
                      <div key={group} className={pk.pkStackSection}>
                        <div className={pk.pkStackSectionTitle}>
                          {group.charAt(0).toUpperCase() + group.slice(1)}
                        </div>
                        <div className={pk.pkStackPills}>
                          {items.map((s) => (
                            <span
                              key={s}
                              className={`${pk.pkStackPill}${group === "core" ? ` ${pk.pkStackPillCore}` : ""}`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={pk.pkModalFooter}>
                <div className={pk.pkModalFooterLinks}>
                  {activeProject.liveUrl ? (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnPrimary}
                    >
                      {lang === "es" ? "Ver en vivo →" : "View live →"}
                    </a>
                  ) : (
                    <span className={`${btnPrimary} cursor-default opacity-50`}>
                      <Lock size={13} />{" "}
                      {lang === "es"
                        ? "Aún no disponible al público"
                        : "Not yet publicly available"}
                    </span>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnGhost}
                    >
                      GitHub
                    </a>
                  )}
                </div>
                <div className={pk.pkModalNavBtns}>
                  <button
                    className={pk.pkModalNavBtn}
                    disabled={modalIndex === 0}
                    onClick={() =>
                      setModalIndex((i) => (i !== null ? i - 1 : i))
                    }
                    aria-label={
                      lang === "es" ? "Proyecto anterior" : "Previous project"
                    }
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    className={pk.pkModalNavBtn}
                    disabled={modalIndex === filtered.length - 1}
                    onClick={() =>
                      setModalIndex((i) => (i !== null ? i + 1 : i))
                    }
                    aria-label={
                      lang === "es" ? "Proyecto siguiente" : "Next project"
                    }
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProyectosClient;

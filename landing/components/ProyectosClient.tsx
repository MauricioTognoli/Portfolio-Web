"use client";

import { useEffect, useMemo, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutGrid, List, X, ExternalLink, Github, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dataProjects, type ProjectItem } from "@/data";

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
  { value: "web", es: "Web", en: "Web" },
  { value: "app", es: "App", en: "App" },
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
  private: { es: "Privado", en: "Private" },
};

const browserDots = ["#ff5f57", "#febc2e", "#28c840"];

const CardBrowserMock = () => (
  <div className="mtp-browser-mock">
    <div className="mtp-browser-bar">
      <div style={{ display: "flex", gap: 5 }}>
        {browserDots.map((c) => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
      </div>
      <div className="mtp-browser-url" />
    </div>
    <div className="mtp-browser-body">
      <div className="mtp-brow orange" />
      <div className="mtp-brow short" />
      <div className="mtp-brow-grid">
        <div className="mtp-brow-block" />
        <div className="mtp-brow-block accent" />
        <div className="mtp-brow-block" />
        <div className="mtp-brow-block" />
      </div>
    </div>
  </div>
);

const GalleryScreen = ({ variant, label }: { variant: number; label: string }) => (
  <div className={`mtp-gallery-item${variant === 0 ? " wide" : ""}`}>
    <div className="mtp-gscreen">
      <div className="mtp-gscreen-bar">
        {browserDots.map((c) => <div key={c} className="mtp-gscreen-dot" style={{ background: c }} />)}
      </div>
      {variant === 0 && (
        <div className="mtp-gscreen-body">
          <div className="mtp-gscreen-row orange" />
          <div className="mtp-gscreen-row short" />
          <div className="mtp-gscreen-blocks">
            <div className="mtp-gscreen-block accent" /><div className="mtp-gscreen-block" /><div className="mtp-gscreen-block" />
          </div>
          <div className="mtp-gscreen-chart">
            {[35, 55, 45, 70, 60, 80, 65, 90, 75, 85, 70, 95].map((h, i) => (
              <div key={i} className="mtp-gscreen-chart-bar" style={{ left: `${i * 8.33}%`, height: `${h}%` }} />
            ))}
          </div>
        </div>
      )}
      {variant === 1 && (
        <div className="mtp-gscreen-body" style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 6 }}>
          <div style={{ background: "var(--mt-surface-3)", borderRight: "1px solid var(--mt-border)", display: "flex", flexDirection: "column", gap: 5, padding: 6 }}>
            <div style={{ height: 8, background: "rgba(242,100,25,.4)", borderRadius: 3, width: "80%" }} />
            <div style={{ height: 6, background: "var(--mt-border-bright)", borderRadius: 3 }} />
            <div style={{ height: 6, background: "var(--mt-border-bright)", borderRadius: 3 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div className="mtp-gscreen-row orange" />
            <div className="mtp-gscreen-row" />
            <div className="mtp-gscreen-row short" />
          </div>
        </div>
      )}
      {variant === 2 && (
        <div className="mtp-gscreen-body">
          <div className="mtp-gscreen-row" />
          <div className="mtp-gscreen-blocks" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="mtp-gscreen-block accent" style={{ height: 44 }} />
            <div className="mtp-gscreen-block" style={{ height: 44 }} />
          </div>
          <div className="mtp-gscreen-row short" style={{ marginTop: 4 }} />
          <div className="mtp-gscreen-row" style={{ width: "90%" }} />
        </div>
      )}
      {variant === 3 && (
        <div className="mtp-gscreen-body">
          <div className="mtp-gscreen-row orange" />
          <div className="mtp-gscreen-row" />
          <div className="mtp-gscreen-blocks">
            <div className="mtp-gscreen-block" /><div className="mtp-gscreen-block accent" /><div className="mtp-gscreen-block" />
          </div>
        </div>
      )}
    </div>
    <div className="mtp-gallery-label">{label}</div>
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
      const stackOk = stack === "all" || p.stackPills.some((s) => s.toLowerCase().includes(stackMatch[stack]));
      return typeOk && stackOk;
    });
    list = [...list];
    if (sort === "newest") list.sort((a, b) => Number(b.year) - Number(a.year));
    else if (sort === "alpha") list.sort((a, b) => a.title.localeCompare(b.title));
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
      if (e.key === "ArrowLeft") setModalIndex((i) => (i !== null ? Math.max(0, i - 1) : i));
      if (e.key === "ArrowRight") setModalIndex((i) => (i !== null ? Math.min(filtered.length - 1, i + 1) : i));
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

  const activeProject = modalIndex !== null && modalIndex < filtered.length ? filtered[modalIndex] : null;

  return (
    <>
      <div className="mtp-header">
        <div className="mtp-header-grid-bg" />
        <div className="mtp-header-glow" />
        <div className="mtp-header-inner">
          <div className="mtp-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span style={{ color: "var(--mt-text-60)" }}>{t.nav.projects}</span>
          </div>
          <h1 className="mtp-title">
            {lang === "es" ? <>Todo el <span className="accent">trabajo,</span></> : <>All the <span className="accent">work,</span></>}
            <br />
            <span className="serif">{lang === "es" ? "sin relleno." : "no filler."}</span>
          </h1>
          <p className="mtp-subtitle">
            {lang === "es"
              ? "Un archivo curado de las interfaces y productos que diseñé y construí — cada uno con un problema real, restricciones reales y resultados reales."
              : "A curated archive of the interfaces and products I've designed and built — each one with a real problem, real constraints, and real results."}
          </p>
          <div className="mtp-stats">
            <div>
              <div className="mtp-stat-n">{projects.length}</div>
              <div className="mtp-stat-l">{t.nav.projects}</div>
            </div>
            <div>
              <div className="mtp-stat-n">3<span>+</span></div>
              <div className="mtp-stat-l">{lang === "es" ? "Industrias" : "Industries"}</div>
            </div>
            <div>
              <div className="mtp-stat-n">100<span>%</span></div>
              <div className="mtp-stat-l">{lang === "es" ? "Real" : "Real"}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mtp-toolbar">
        <div className="mtp-toolbar-inner">
          <span className="mtp-filter-label">Type:</span>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {typeFilters.map((f) => (
              <button
                key={f.value}
                className={`mtp-filter-pill${type === f.value ? " active" : ""}`}
                onClick={() => setType(f.value)}
              >
                {lang === "es" ? f.es : f.en}
              </button>
            ))}
          </div>

          <div className="mtp-sep" />

          <span className="mtp-filter-label">Stack:</span>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {stackFilters.map((f) => (
              <button
                key={f.value}
                className={`mtp-filter-pill${stack === f.value ? " active" : ""}`}
                onClick={() => setStack(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mtp-sep" />

          <select
            className="mtp-sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
          >
            <option value="featured">{lang === "es" ? "Destacados primero" : "Featured first"}</option>
            <option value="newest">{lang === "es" ? "Más recientes" : "Newest first"}</option>
            <option value="alpha">A → Z</option>
          </select>

          <span className="mtp-results-count">
            {filtered.length} {lang === "es" ? "proyectos" : "projects"}
          </span>

          <div className="mtp-view-toggle">
            <button className={`mtp-view-btn${view === "grid" ? " active" : ""}`} onClick={() => setView("grid")} title="Grid view">
              <LayoutGrid size={16} />
            </button>
            <button className={`mtp-view-btn${view === "list" ? " active" : ""}`} onClick={() => setView("list")} title="List view">
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="mtp-main">
        {filtered.length === 0 ? (
          <div className="mtp-no-results">
            <div style={{ fontFamily: "var(--mt-font-mono)", fontSize: 28, marginBottom: 12 }}>∅</div>
            <div style={{ fontFamily: "var(--mt-font-display)", fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--mt-text-60)" }}>
              {lang === "es" ? "Ningún proyecto coincide con este filtro" : "No projects match this filter"}
            </div>
          </div>
        ) : view === "grid" ? (
          <div className="mtp-grid">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                className={`mtp-card${p.featured && i === 0 ? " featured" : ""}`}
                onClick={() => openModal(p.id)}
                onKeyDown={onActivate(() => openModal(p.id))}
              >
                <div className="mtp-card-preview">
                  <CardBrowserMock />
                  <div className="mtp-preview-gradient" />
                  <div className="mtp-cat-badge">{p.category}</div>
                  <div className="mtp-status-badge">
                    <div className={`mtp-status-dot ${p.status}`} />
                    {lang === "es" ? statusLabel[p.status].es : statusLabel[p.status].en}
                  </div>
                </div>
                <div className="mtp-card-body">
                  <div className="mtp-card-meta">
                    <span className="mtp-card-type">{p.type}</span>
                    <span className="mtp-card-year">{p.year}</span>
                  </div>
                  <div className="mtp-card-title">{p.title}</div>
                  <div className="mtp-card-desc">{p.tagline}</div>
                  <div className="mtp-card-metrics">
                    {p.metrics.slice(0, 3).map((m) => (
                      <div key={m.lbl}>
                        <div className="mtp-card-metric-val">{m.val}</div>
                        <div className="mtp-card-metric-lbl">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mtp-card-stack">
                    {p.stackPills.slice(0, 5).map((s) => <span key={s} className="mtp-stag">{s}</span>)}
                  </div>
                  <div className="mtp-card-footer">
                    <span className="mtp-card-cta">{t.projects.cta}</span>
                    <div className="mtp-card-links" onClick={(e) => e.stopPropagation()}>
                      {p.liveUrl && (
                        <a className="mtp-card-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer" title="Live site">
                          <ExternalLink size={13} />
                        </a>
                      )}
                      {p.githubUrl && (
                        <a className="mtp-card-link" href={p.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub">
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
          <div className="mtp-list">
            {filtered.map((p) => (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                className="mtp-lcard"
                onClick={() => openModal(p.id)}
                onKeyDown={onActivate(() => openModal(p.id))}
              >
                <div className="mtp-lcard-icon">{p.title.slice(0, 2).toUpperCase()}</div>
                <div>
                  <div className="mtp-lcard-top" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <div className="mtp-lcard-title">{p.title}</div>
                    <span className="mtp-lcard-cat">{p.category}</span>
                  </div>
                  <div className="mtp-lcard-desc">{p.tagline}</div>
                  <div className="mtp-lcard-stack">
                    {p.stackPills.slice(0, 6).map((s) => <span key={s} className="mtp-lcard-stag">{s}</span>)}
                  </div>
                </div>
                <div className="mtp-lcard-right">
                  <div style={{ textAlign: "right" }}>
                    <div className="mtp-lcard-metric-val">{p.metrics[0].val}</div>
                    <div className="mtp-lcard-metric-lbl">{p.metrics[0].lbl}</div>
                  </div>
                  <ChevronRight size={18} color="var(--mt-text-30)" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeProject && modalIndex !== null && (
          <motion.div
            className="mtp-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => { if (e.target === e.currentTarget) setModalIndex(null); }}
          >
            <motion.div
              className="mtp-modal"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mtp-modal-header">
                <div>
                  <div className="mtp-modal-category">{activeProject.category} · {activeProject.year}</div>
                  <div className="mtp-modal-title">{activeProject.title}</div>
                </div>
                <button className="mtp-modal-close" onClick={() => setModalIndex(null)} aria-label="Close">
                  <X size={16} />
                </button>
              </div>

              <div className="mtp-modal-tabs">
                {(["overview", "gallery", "stack"] as Tab[]).map((tb) => (
                  <button key={tb} className={`mtp-modal-tab${tab === tb ? " active" : ""}`} onClick={() => setTab(tb)}>
                    {tb === "overview" ? "Overview" : tb === "gallery" ? "Gallery" : "Tech Stack"}
                  </button>
                ))}
              </div>

              <div className="mtp-modal-body">
                {tab === "overview" && (
                  <div>
                    <p className="mtp-modal-desc-full">{activeProject.desc}</p>
                    <div className="mtp-modal-stat-row">
                      {activeProject.metrics.map((m) => (
                        <div key={m.lbl} className="mtp-modal-stat">
                          <div className="mtp-modal-stat-val">{m.val}</div>
                          <div className="mtp-modal-stat-lbl">{m.lbl}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mtp-modal-challenge">
                      <div className="mtp-modal-challenge-label">{lang === "es" ? "El desafío" : "The challenge"}</div>
                      <div className="mtp-modal-challenge-text">{activeProject.challenge}</div>
                    </div>
                    <div className="mtp-modal-kp-title">{lang === "es" ? "Puntos clave" : "Key outcomes"}</div>
                    <ul className="mtp-modal-kp-list">
                      {activeProject.keypoints.map((k, i) => (
                        <li key={i} className="mtp-modal-kp-item" dangerouslySetInnerHTML={{ __html: k }} />
                      ))}
                    </ul>
                  </div>
                )}

                {tab === "gallery" && (
                  <div className="mtp-gallery-grid">
                    {activeProject.screens.map((label, i) => (
                      <GalleryScreen key={label} variant={i} label={label} />
                    ))}
                  </div>
                )}

                {tab === "stack" && (
                  <div>
                    {(Object.entries(activeProject.stack) as [string, string[]][]).map(([group, items]) => (
                      <div key={group} className="mtp-stack-section">
                        <div className="mtp-stack-section-title">{group.charAt(0).toUpperCase() + group.slice(1)}</div>
                        <div className="mtp-stack-pills">
                          {items.map((s) => (
                            <span key={s} className={`mtp-stack-pill${group === "core" ? " core" : ""}`}>{s}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mtp-modal-footer">
                <div className="mtp-modal-footer-links">
                  {activeProject.liveUrl ? (
                    <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      {lang === "es" ? "Ver en vivo →" : "View live →"}
                    </a>
                  ) : (
                    <span className="btn-primary" style={{ opacity: 0.5, cursor: "default" }}>
                      <Lock size={13} /> {lang === "es" ? "Proyecto privado" : "Private project"}
                    </span>
                  )}
                  {activeProject.githubUrl && (
                    <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub</a>
                  )}
                </div>
                <div className="mtp-modal-nav-btns">
                  <button className="mtp-modal-nav-btn" disabled={modalIndex === 0} onClick={() => setModalIndex((i) => (i !== null ? i - 1 : i))}>
                    <ChevronLeft size={16} />
                  </button>
                  <button className="mtp-modal-nav-btn" disabled={modalIndex === filtered.length - 1} onClick={() => setModalIndex((i) => (i !== null ? i + 1 : i))}>
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

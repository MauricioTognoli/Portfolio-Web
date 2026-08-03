"use client";

import { useEffect, useMemo, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { LayoutGrid, List, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataFeatures, type FeatureItem } from "@/data";

type SortOption = "default" | "alpha" | "company";
type View = "grid" | "list";

const browserDots = ["#ff5f57", "#febc2e", "#28c840"];

const onActivate = (fn: () => void) => (e: ReactKeyboardEvent) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fn();
  }
};

const PhotoMock = ({ variant, tall = false }: { variant: number; tall?: boolean }) => (
  <div className="mtp-gscreen">
    <div className="mtp-gscreen-bar">
      {browserDots.map((c) => <div key={c} className="mtp-gscreen-dot" style={{ background: c }} />)}
    </div>
    <div className="mtp-gscreen-body">
      <div className="mtp-gscreen-row orange" />
      <div className="mtp-gscreen-row short" />
      {variant % 2 === 0 ? (
        <>
          <div className="mtp-gscreen-blocks">
            <div className="mtp-gscreen-block accent" /><div className="mtp-gscreen-block" /><div className="mtp-gscreen-block" />
          </div>
          {tall && (
            <div className="mtp-gscreen-chart">
              {[35, 55, 45, 70, 60, 80, 65, 90, 75, 85, 70, 95].map((h, i) => (
                <div key={i} className="mtp-gscreen-chart-bar" style={{ left: `${i * 8.33}%`, height: `${h}%` }} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginTop: 4 }}>
          <div className="mtp-gscreen-block accent" style={{ height: tall ? 60 : 28 }} />
          <div className="mtp-gscreen-block" style={{ height: tall ? 60 : 28 }} />
        </div>
      )}
    </div>
  </div>
);

const FeaturesClient = () => {
  const { lang, t } = useLanguage();
  const items = dataFeatures[lang];
  const companies = useMemo(() => Array.from(new Set(items.map((f) => f.company))), [items]);

  const [company, setCompany] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("default");
  const [view, setView] = useState<View>("grid");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let list = items.filter((f) => company === "all" || f.company === company);
    list = [...list];
    if (sort === "alpha") list.sort((a, b) => a.tagline.localeCompare(b.tagline));
    else if (sort === "company") list.sort((a, b) => a.company.localeCompare(b.company) || a.id - b.id);
    else list.sort((a, b) => a.id - b.id);
    return list;
  }, [items, company, sort]);

  useEffect(() => {
    setModalIndex(null);
  }, [company, sort, view, lang]);

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
    const idx = filtered.findIndex((f) => f.id === id);
    if (idx === -1) return;
    setModalIndex(idx);
  };

  const active: FeatureItem | null = modalIndex !== null && modalIndex < filtered.length ? filtered[modalIndex] : null;

  return (
    <>
      <div className="mtp-header">
        <div className="mtp-header-grid-bg" />
        <div className="mtp-header-glow" />
        <div className="mtp-header-inner">
          <div className="mtp-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span style={{ color: "var(--mt-text-60)" }}>{t.nav.features}</span>
          </div>
          <h1 className="mtp-title">
            {lang === "es" ? <>Features que <span className="accent">construí,</span></> : <>Features I <span className="accent">built,</span></>}
            <br />
            <span className="serif">{lang === "es" ? "en producción." : "in production."}</span>
          </h1>
          <p className="mtp-subtitle">{t.features.desc}</p>
          <div className="mtp-stats">
            <div>
              <div className="mtp-stat-n">{items.length}</div>
              <div className="mtp-stat-l">Features</div>
            </div>
            <div>
              <div className="mtp-stat-n">{companies.length}</div>
              <div className="mtp-stat-l">{lang === "es" ? "Empresas" : "Companies"}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mtp-toolbar">
        <div className="mtp-toolbar-inner">
          <span className="mtp-filter-label">{lang === "es" ? "Empresa:" : "Company:"}</span>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button className={`mtp-filter-pill${company === "all" ? " active" : ""}`} onClick={() => setCompany("all")}>
              {lang === "es" ? "Todas" : "All"}
            </button>
            {companies.map((c) => (
              <button key={c} className={`mtp-filter-pill${company === c ? " active" : ""}`} onClick={() => setCompany(c)}>
                {c}
              </button>
            ))}
          </div>

          <div className="mtp-sep" />

          <select className="mtp-sort-select" value={sort} onChange={(e) => setSort(e.target.value as SortOption)}>
            <option value="default">{lang === "es" ? "Orden por defecto" : "Default order"}</option>
            <option value="company">{lang === "es" ? "Por empresa" : "By company"}</option>
            <option value="alpha">A → Z</option>
          </select>

          <span className="mtp-results-count">{filtered.length} features</span>

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
            <div style={{ fontFamily: "var(--mt-font-display)", fontSize: 18, fontWeight: 600, color: "var(--mt-text-60)" }}>
              {lang === "es" ? "Ninguna feature coincide con este filtro" : "No features match this filter"}
            </div>
          </div>
        ) : view === "grid" ? (
          <div className="mtp-grid">
            {filtered.map((f, i) => (
              <div
                key={f.id}
                role="button"
                tabIndex={0}
                className="mtp-card"
                onClick={() => openModal(f.id)}
                onKeyDown={onActivate(() => openModal(f.id))}
              >
                <div className="mtp-card-preview">
                  <div className="mtp-browser-mock">
                    <PhotoMock variant={i} />
                  </div>
                  <div className="mtp-preview-gradient" />
                  <div className="mtp-cat-badge">{f.category}</div>
                  <div className="mtp-status-badge">{f.company}</div>
                </div>
                <div className="mtp-card-body">
                  <div className="mtp-card-meta">
                    <span className="mtp-card-type">{f.role}</span>
                    <span className="mtp-card-year">{f.period}</span>
                  </div>
                  <div className="mtp-card-title">{f.tagline}</div>
                  <div className="mtp-card-desc">{f.description}</div>
                  <div className="mtp-card-stack">
                    {f.tags.map((s) => <span key={s} className="mtp-stag">{s}</span>)}
                  </div>
                  <div className="mtp-card-footer">
                    <span className="mtp-card-cta">{t.features.cta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mtp-list">
            {filtered.map((f) => (
              <div
                key={f.id}
                role="button"
                tabIndex={0}
                className="mtp-lcard"
                onClick={() => openModal(f.id)}
                onKeyDown={onActivate(() => openModal(f.id))}
              >
                <div className="mtp-lcard-icon">{f.company.slice(0, 2).toUpperCase()}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <div className="mtp-lcard-title">{f.tagline}</div>
                    <span className="mtp-lcard-cat">{f.category}</span>
                  </div>
                  <div className="mtp-lcard-desc">{f.description}</div>
                  <div className="mtp-lcard-stack">
                    {f.tags.map((s) => <span key={s} className="mtp-lcard-stag">{s}</span>)}
                  </div>
                </div>
                <div className="mtp-lcard-right">
                  <div style={{ textAlign: "right" }}>
                    <div className="mtp-lcard-metric-val">{f.company}</div>
                    <div className="mtp-lcard-metric-lbl">{f.period}</div>
                  </div>
                  <ChevronRight size={18} color="var(--mt-text-30)" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && modalIndex !== null && (
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
                  <div className="mtp-modal-category">{active.category} · {active.company}</div>
                  <div className="mtp-modal-title">{active.tagline}</div>
                </div>
                <button className="mtp-modal-close" onClick={() => setModalIndex(null)} aria-label="Close">
                  <X size={16} />
                </button>
              </div>

              <div className="mtp-modal-body">
                <div className="mtp-gallery-item wide" style={{ marginBottom: 24 }}>
                  <PhotoMock variant={modalIndex} tall />
                </div>

                <p className="mtp-modal-desc-full" style={{ gridColumn: "unset", marginBottom: 20 }}>{active.description}</p>

                <div className="mtp-modal-kp-title">{lang === "es" ? "Qué construí" : "What I built"}</div>
                <ul className="mtp-modal-kp-list">
                  {active.highlights.map((h, i) => (
                    <li key={i} className="mtp-modal-kp-item" dangerouslySetInnerHTML={{ __html: h }} />
                  ))}
                </ul>

                <div className="mtp-stack-section">
                  <div className="mtp-stack-section-title">Stack</div>
                  <div className="mtp-stack-pills">
                    {active.tags.map((s) => <span key={s} className="mtp-stack-pill core">{s}</span>)}
                  </div>
                </div>
              </div>

              <div className="mtp-modal-footer">
                <div className="mtp-modal-footer-links">
                  <span className="btn-ghost" style={{ cursor: "default" }}>{active.role} · {active.period}</span>
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

export default FeaturesClient;

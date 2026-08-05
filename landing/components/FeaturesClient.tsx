"use client";

import { useEffect, useMemo, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { LayoutGrid, List, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataFeatures, type FeatureItem } from "@/data";
import { btnGhost } from "./uiClasses";
import * as pk from "./pageKit";

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
  <div className={pk.pkGscreen}>
    <div className={pk.pkGscreenBar}>
      {browserDots.map((c) => <div key={c} className={pk.pkGscreenDot} style={{ background: c }} />)}
    </div>
    <div className={pk.pkGscreenBody}>
      <div className={`${pk.pkGscreenRow} w-[45%] bg-[rgba(242,100,25,.3)]`} />
      <div className={`${pk.pkGscreenRow} w-[60%]`} />
      {variant % 2 === 0 ? (
        <>
          <div className={pk.pkGscreenBlocks}>
            <div className={`${pk.pkGscreenBlock} ${pk.pkGscreenBlockAccent}`} /><div className={pk.pkGscreenBlock} /><div className={pk.pkGscreenBlock} />
          </div>
          {tall && (
            <div className={pk.pkGscreenChart}>
              {[35, 55, 45, 70, 60, 80, 65, 90, 75, 85, 70, 95].map((h, i) => (
                <div key={i} className={pk.pkGscreenChartBar} style={{ left: `${i * 8.33}%`, height: `${h}%` }} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="mt-1 grid grid-cols-2 gap-1.25">
          <div className={`${pk.pkGscreenBlock} ${pk.pkGscreenBlockAccent}`} style={{ height: tall ? 60 : 28 }} />
          <div className={pk.pkGscreenBlock} style={{ height: tall ? 60 : 28 }} />
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
      <div className={pk.pkHeader}>
        <div className={pk.pkHeaderGridBg} />
        <div className={pk.pkHeaderGlow} />
        <div className={pk.pkHeaderInner}>
          <div className={pk.pkBreadcrumb}>
            <a className={pk.pkBreadcrumbLink} href="/">Home</a>
            <span>/</span>
            <span className="text-mt-text-60">{t.nav.features}</span>
          </div>
          <h1 className={pk.pkTitle}>
            {lang === "es" ? <>Features que <span className="text-mt-orange">construí,</span></> : <>Features I <span className="text-mt-orange">built,</span></>}
            <br />
            <span className="font-mt-serif font-normal italic">{lang === "es" ? "en producción." : "in production."}</span>
          </h1>
          <p className={pk.pkSubtitle}>{t.features.desc}</p>
          <div className={pk.pkStats}>
            <div>
              <div className={pk.pkStatN}>{items.length}</div>
              <div className={pk.pkStatL}>Features</div>
            </div>
            <div>
              <div className={pk.pkStatN}>{companies.length}</div>
              <div className={pk.pkStatL}>{lang === "es" ? "Empresas" : "Companies"}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={pk.pkToolbar}>
        <div className={pk.pkToolbarInner}>
          <span className={pk.pkFilterLabel}>{lang === "es" ? "Empresa:" : "Company:"}</span>
          <div className="flex flex-wrap gap-1.5">
            <button className={`${pk.pkFilterPill}${company === "all" ? ` ${pk.pkFilterPillActive}` : ""}`} onClick={() => setCompany("all")}>
              {lang === "es" ? "Todas" : "All"}
            </button>
            {companies.map((c) => (
              <button key={c} className={`${pk.pkFilterPill}${company === c ? ` ${pk.pkFilterPillActive}` : ""}`} onClick={() => setCompany(c)}>
                {c}
              </button>
            ))}
          </div>

          <div className={pk.pkSep} />

          <select className={pk.pkSortSelect} value={sort} onChange={(e) => setSort(e.target.value as SortOption)}>
            <option value="default">{lang === "es" ? "Orden por defecto" : "Default order"}</option>
            <option value="company">{lang === "es" ? "Por empresa" : "By company"}</option>
            <option value="alpha">A → Z</option>
          </select>

          <span className={pk.pkResultsCount}>{filtered.length} features</span>

          <div className={pk.pkViewToggle}>
            <button className={`${pk.pkViewBtn}${view === "grid" ? ` ${pk.pkViewBtnActive}` : ""}`} onClick={() => setView("grid")} title="Grid view">
              <LayoutGrid size={16} />
            </button>
            <button className={`${pk.pkViewBtn}${view === "list" ? ` ${pk.pkViewBtnActive}` : ""}`} onClick={() => setView("list")} title="List view">
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
              {lang === "es" ? "Ninguna feature coincide con este filtro" : "No features match this filter"}
            </div>
          </div>
        ) : view === "grid" ? (
          <div className={pk.pkGrid}>
            {filtered.map((f, i) => (
              <div
                key={f.id}
                role="button"
                tabIndex={0}
                className={pk.pkCard}
                onClick={() => openModal(f.id)}
                onKeyDown={onActivate(() => openModal(f.id))}
              >
                <div className={pk.pkCardPreview}>
                  <div className={pk.pkBrowserMock}>
                    <PhotoMock variant={i} />
                  </div>
                  <div className={pk.pkPreviewGradient} />
                  <div className={pk.pkCatBadge}>{f.category}</div>
                  <div className={pk.pkStatusBadge}>{f.company}</div>
                </div>
                <div className={pk.pkCardBody}>
                  <div className={pk.pkCardMeta}>
                    <span className={pk.pkCardType}>{f.role}</span>
                    <span className={pk.pkCardYear}>{f.period}</span>
                  </div>
                  <div className={pk.pkCardTitle}>{f.tagline}</div>
                  <div className={pk.pkCardDesc}>{f.description}</div>
                  <div className={pk.pkCardStack}>
                    {f.tags.map((s) => <span key={s} className={pk.pkStag}>{s}</span>)}
                  </div>
                  <div className={pk.pkCardFooter}>
                    <span className={pk.pkCardCta}>{t.features.cta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={pk.pkList}>
            {filtered.map((f) => (
              <div
                key={f.id}
                role="button"
                tabIndex={0}
                className={pk.pkLcard}
                onClick={() => openModal(f.id)}
                onKeyDown={onActivate(() => openModal(f.id))}
              >
                <div className={pk.pkLcardIcon}>{f.company.slice(0, 2).toUpperCase()}</div>
                <div>
                  <div className="mb-1 flex items-center gap-2.5">
                    <div className={pk.pkLcardTitle}>{f.tagline}</div>
                    <span className={pk.pkLcardCat}>{f.category}</span>
                  </div>
                  <div className={pk.pkLcardDesc}>{f.description}</div>
                  <div className={pk.pkLcardStack}>
                    {f.tags.map((s) => <span key={s} className={pk.pkLcardStag}>{s}</span>)}
                  </div>
                </div>
                <div className={pk.pkLcardRight}>
                  <div className="text-right">
                    <div className={pk.pkLcardMetricVal}>{f.company}</div>
                    <div className={pk.pkLcardMetricLbl}>{f.period}</div>
                  </div>
                  <ChevronRight size={18} className="text-mt-text-30" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && modalIndex !== null && (
          <motion.div
            className={pk.pkModalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => { if (e.target === e.currentTarget) setModalIndex(null); }}
          >
            <motion.div
              className={pk.pkModal}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className={pk.pkModalHeader}>
                <div>
                  <div className={pk.pkModalCategory}>{active.category} · {active.company}</div>
                  <div className={pk.pkModalTitle}>{active.tagline}</div>
                </div>
                <button className={pk.pkModalClose} onClick={() => setModalIndex(null)} aria-label="Close">
                  <X size={16} />
                </button>
              </div>

              <div className={pk.pkModalBody}>
                <div className={`${pk.pkGalleryItem} ${pk.pkGalleryItemWide} mb-6`}>
                  <PhotoMock variant={modalIndex} tall />
                </div>

                <p className={`${pk.pkModalDescFull} mb-5`}>{active.description}</p>

                <div className={pk.pkModalKpTitle}>{lang === "es" ? "Qué construí" : "What I built"}</div>
                <ul className={pk.pkModalKpList}>
                  {active.highlights.map((h, i) => (
                    <li key={i} className={pk.pkModalKpItem} dangerouslySetInnerHTML={{ __html: h }} />
                  ))}
                </ul>

                <div className={pk.pkStackSection}>
                  <div className={pk.pkStackSectionTitle}>Stack</div>
                  <div className={pk.pkStackPills}>
                    {active.tags.map((s) => <span key={s} className={`${pk.pkStackPill} ${pk.pkStackPillCore}`}>{s}</span>)}
                  </div>
                </div>
              </div>

              <div className={pk.pkModalFooter}>
                <div className={pk.pkModalFooterLinks}>
                  <span className={`${btnGhost} cursor-default`}>{active.role} · {active.period}</span>
                </div>
                <div className={pk.pkModalNavBtns}>
                  <button className={pk.pkModalNavBtn} disabled={modalIndex === 0} onClick={() => setModalIndex((i) => (i !== null ? i - 1 : i))}>
                    <ChevronLeft size={16} />
                  </button>
                  <button className={pk.pkModalNavBtn} disabled={modalIndex === filtered.length - 1} onClick={() => setModalIndex((i) => (i !== null ? i + 1 : i))}>
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

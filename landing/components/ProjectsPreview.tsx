"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataProjects } from "@/data";

const BrowserMock = () => (
  <div className="mt-hp-browser">
    <div className="mt-hp-browser-bar">
      <div style={{ display: "flex", gap: 5 }}>
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
      </div>
      <div style={{ flex: 1, height: 16, background: "var(--mt-border)", borderRadius: 3, margin: "0 12px" }} />
    </div>
    <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 7 }}>
      <div style={{ height: 8, background: "rgba(242,100,25,.35)", borderRadius: 3, width: "40%" }} />
      <div style={{ height: 7, background: "var(--mt-border-bright)", borderRadius: 3, width: "65%" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginTop: 4 }}>
        <div style={{ height: 44, background: "var(--mt-border)", borderRadius: 6 }} />
        <div style={{ height: 44, background: "rgba(242,100,25,.15)", borderRadius: 6, border: "1px solid rgba(242,100,25,.2)" }} />
        <div style={{ height: 44, background: "var(--mt-border)", borderRadius: 6 }} />
        <div style={{ height: 44, background: "var(--mt-border)", borderRadius: 6 }} />
      </div>
      <div style={{ height: 80, background: "var(--mt-surface-2)", borderRadius: 6, position: "relative", overflow: "hidden", marginTop: 4 }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", gap: 3, alignItems: "flex-end", padding: 6 }}>
          {[45, 65, 50, 80, 60, 90, 70, 95].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: "var(--mt-orange)", borderRadius: "2px 2px 0 0", opacity: 0.6 + i * 0.04 }} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MiniPreview = () => (
  <div style={{ position: "absolute", inset: "14px 14px 0", background: "var(--mt-surface)", border: "1px solid var(--mt-border)", borderRadius: "8px 8px 0 0", overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,.5)" }}>
    <div style={{ height: 22, background: "var(--mt-surface-2)", borderBottom: "1px solid var(--mt-border)", display: "flex", alignItems: "center", padding: "0 8px", gap: 4 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
    </div>
    <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
      <div style={{ height: 6, background: "var(--mt-border-bright)", borderRadius: 3 }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
        <div style={{ height: 24, background: "var(--mt-border)", borderRadius: 4 }} />
        <div style={{ height: 24, background: "rgba(242,100,25,.15)", borderRadius: 4, border: "1px solid rgba(242,100,25,.2)" }} />
      </div>
    </div>
  </div>
);

const ProjectsPreview = () => {
  const { lang, t } = useLanguage();
  const projects = dataProjects[lang];
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id).slice(0, 3);

  return (
    <section className="mt-projects mt-section" id="projects">
      <div className="mt-section-inner">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
          <div>
            <div className="mt-section-label">{t.projects.label}</div>
            <h2 className="mt-section-title" style={{ marginBottom: 10 }}>{t.projects.title}</h2>
            <p style={{ color: "var(--mt-text-60)", fontSize: 13, maxWidth: 420, lineHeight: 1.65 }}>{t.projects.desc}</p>
          </div>
          <Link href="/proyectos" className="btn-secondary" style={{ flexShrink: 0 }}>{t.projects.viewAll}</Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ marginBottom: 16 }}
        >
          <Link href="/proyectos" className="mt-hp-featured">
            <div className="mt-hp-feat-preview">
              <BrowserMock />
              <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(8,8,8,.8)", backdropFilter: "blur(10px)", border: "1px solid var(--mt-border-bright)", color: "var(--mt-text-60)", padding: "4px 12px", borderRadius: 100, fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase" }}>{featured.category}</div>
              <div style={{ position: "absolute", top: 16, right: 16, display: "flex", alignItems: "center", gap: 5, background: "rgba(8,8,8,.8)", backdropFilter: "blur(10px)", border: "1px solid var(--mt-border-bright)", padding: "4px 12px", borderRadius: 100, fontSize: 11 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                <span style={{ color: "var(--mt-text-60)" }}>{t.projects.liveNow}</span>
              </div>
            </div>
            <div className="mt-hp-feat-body">
              <div style={{ fontSize: 11, color: "var(--mt-orange)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>
                {t.projects.featured} · {featured.category}
              </div>
              <h3 style={{ fontFamily: "var(--mt-font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-.025em", marginBottom: 12, lineHeight: 1.1 }}>{featured.title}</h3>
              <p style={{ color: "var(--mt-text-60)", fontSize: 13, lineHeight: 1.7, marginBottom: 22 }}>{featured.tagline}</p>
              <div style={{ display: "flex", gap: 16, marginBottom: 22, padding: 16, background: "var(--mt-text-10)", borderRadius: 10, flexWrap: "wrap" }}>
                {featured.metrics.slice(0, 3).map((m) => (
                  <div key={m.lbl}>
                    <div style={{ fontFamily: "var(--mt-font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-.5px", color: "var(--mt-orange)" }}>{m.val}</div>
                    <div style={{ fontSize: 9, color: "var(--mt-text-30)", textTransform: "uppercase", letterSpacing: ".05em" }}>{m.lbl}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                {featured.stackPills.map((s) => (
                  <span key={s} style={{ background: "var(--mt-tag-bg)", border: "1px solid var(--mt-border)", color: "var(--mt-text-60)", padding: "3px 10px", borderRadius: 4, fontSize: 11 }}>{s}</span>
                ))}
              </div>
              <div style={{ color: "var(--mt-orange)", fontSize: 13, display: "flex", alignItems: "center", gap: 5 }}>{t.projects.cta}</div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="mt-hp-mini-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {rest.map((p) => (
            <Link href="/proyectos" className="mt-hp-mini-card" key={p.id}>
              <div className="mt-hp-mini-preview">
                <MiniPreview />
                <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(8,8,8,.8)", backdropFilter: "blur(8px)", border: "1px solid var(--mt-border-bright)", color: "var(--mt-text-60)", padding: "3px 9px", borderRadius: 100, fontSize: 10, textTransform: "uppercase", letterSpacing: ".05em" }}>{p.category}</div>
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontFamily: "var(--mt-font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "-.5px", marginBottom: 7 }}>{p.title}</h3>
                <p style={{ color: "var(--mt-text-60)", fontSize: 12, lineHeight: 1.6, marginBottom: 14 }}>{p.tagline}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                  {p.stackPills.slice(0, 3).map((s) => (
                    <span key={s} style={{ background: "var(--mt-tag-bg)", border: "1px solid var(--mt-border)", color: "var(--mt-text-60)", padding: "2px 8px", borderRadius: 3, fontSize: 10 }}>{s}</span>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "var(--mt-orange)" }}>{t.projects.cta}</div>
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ marginTop: 20, padding: "22px 26px", background: "var(--mt-text-10)", border: "1px solid var(--mt-border)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}
        >
          <div>
            <div style={{ fontFamily: "var(--mt-font-display)", fontWeight: 600, fontSize: 15, letterSpacing: "-.01em", marginBottom: 3 }}>{t.projects.moreTitle}</div>
            <div style={{ fontSize: 12, color: "var(--mt-text-30)" }}>{t.projects.moreSub}</div>
          </div>
          <Link href="/proyectos" className="btn-primary">{t.projects.viewAllBtn}</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;

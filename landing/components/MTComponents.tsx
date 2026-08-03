"use client";

import { motion } from "framer-motion";
import { Sparkles, Wand2, Ruler } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const MTComponents = () => {
  const { t } = useLanguage();

  return (
    <section className="mt-components-section mt-section" id="components">
      <div className="mt-section-inner">
        <div className="mt-section-label">{t.mtc.label}</div>
        <h2 className="mt-section-title">
          {t.mtc.title1}
          <br />
          <span style={{ color: "var(--mt-orange)" }}>{t.mtc.title2}</span>
        </h2>

        <div className="mt-components-showcase">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mt-components-sub">{t.mtc.sub}</p>

            <div className="mt-components-highlights">
              <div className="mt-comp-highlight">
                <div className="mt-comp-hl-icon"><Sparkles size={18} /></div>
                <div>
                  <div className="mt-comp-hl-title">{t.mtc.h1Title}</div>
                  <div className="mt-comp-hl-desc">{t.mtc.h1Desc}</div>
                </div>
              </div>
              <div className="mt-comp-highlight">
                <div className="mt-comp-hl-icon"><Wand2 size={16} /></div>
                <div>
                  <div className="mt-comp-hl-title">{t.mtc.h2Title}</div>
                  <div className="mt-comp-hl-desc">{t.mtc.h2Desc}</div>
                </div>
              </div>
              <div className="mt-comp-highlight">
                <div className="mt-comp-hl-icon"><Ruler size={18} /></div>
                <div>
                  <div className="mt-comp-hl-title">{t.mtc.h3Title}</div>
                  <div className="mt-comp-hl-desc">{t.mtc.h3Desc}</div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://github.com/MauricioTognoli" target="_blank" rel="noopener noreferrer" className="btn-primary">{t.mtc.cta1}</a>
              <a href="https://github.com/MauricioTognoli" target="_blank" rel="noopener noreferrer" className="btn-secondary">{t.mtc.cta2}</a>
            </div>
          </motion.div>

          <motion.div
            className="mt-components-visual"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="mt-comp-visual-header">
              <span className="mt-comp-visual-title">MT Components</span>
              <span className="mt-comp-visual-badge">{t.mtc.badge}</span>
            </div>
            <div className="mt-comp-grid">
              <div className="mt-comp-tile">
                <div className="mt-comp-btn-preview">Button</div>
                <div className="mt-comp-tile-name">{t.mtc.c1}</div>
              </div>
              <div className="mt-comp-tile">
                <div className="mt-comp-card-preview">
                  <div className="mt-comp-card-dot" />
                  <div className="mt-comp-card-line" />
                </div>
                <div className="mt-comp-tile-name">{t.mtc.c2}</div>
              </div>
              <div className="mt-comp-tile">
                <div className="mt-comp-badge-row">
                  <div className="mt-comp-mini-badge">New</div>
                  <div className="mt-comp-mini-badge">Beta</div>
                </div>
                <div className="mt-comp-tile-name">{t.mtc.c3}</div>
              </div>
              <div className="mt-comp-tile">
                <div style={{ height: 28, background: "var(--mt-border)", borderRadius: 5, marginBottom: 6, display: "flex", alignItems: "center", padding: "0 8px" }}>
                  <div style={{ width: "70%", height: 4, background: "var(--mt-border-bright)", borderRadius: 2 }} />
                </div>
                <div className="mt-comp-tile-name">{t.mtc.c4}</div>
              </div>
              <div className="mt-comp-tile">
                <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
                  <div style={{ flex: 1, height: 3, background: "var(--mt-orange)", borderRadius: 2 }} />
                  <div style={{ flex: 1, height: 3, background: "var(--mt-border)", borderRadius: 2 }} />
                  <div style={{ flex: 1, height: 3, background: "var(--mt-border)", borderRadius: 2 }} />
                </div>
                <div className="mt-comp-tile-name">{t.mtc.c5}</div>
              </div>
              <div className="mt-comp-tile">
                <div style={{ width: 28, height: 14, background: "var(--mt-orange)", borderRadius: 100, margin: "0 auto 6px", position: "relative" }}>
                  <div style={{ position: "absolute", right: 2, top: 2, width: 10, height: 10, background: "#fff", borderRadius: "50%" }} />
                </div>
                <div className="mt-comp-tile-name">{t.mtc.c6}</div>
              </div>
            </div>
            <div style={{ padding: "0 20px 20px" }}>
              <div style={{ background: "var(--mt-surface)", border: "1px solid var(--mt-border)", borderRadius: 10, padding: 14, textAlign: "center" }}>
                <span style={{ fontSize: 12, color: "var(--mt-text-60)" }}>{t.mtc.soon}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MTComponents;

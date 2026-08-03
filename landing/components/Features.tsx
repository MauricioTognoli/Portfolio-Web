"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataFeatures } from "@/data";

const MiniPreview = ({ variant }: { variant: number }) => (
  <div style={{ position: "absolute", inset: "14px 14px 0", background: "var(--mt-surface)", border: "1px solid var(--mt-border)", borderRadius: "8px 8px 0 0", overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,.5)" }}>
    <div style={{ height: 22, background: "var(--mt-surface-2)", borderBottom: "1px solid var(--mt-border)", display: "flex", alignItems: "center", padding: "0 8px", gap: 4 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
    </div>
    {variant === 0 ? (
      <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ height: 6, background: "var(--mt-border-bright)", borderRadius: 3 }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          <div style={{ height: 24, background: "var(--mt-border)", borderRadius: 4 }} />
          <div style={{ height: 24, background: "rgba(242,100,25,.15)", borderRadius: 4, border: "1px solid rgba(242,100,25,.2)" }} />
        </div>
      </div>
    ) : (
      <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ height: 6, background: "rgba(242,100,25,.35)", borderRadius: 3, width: "50%" }} />
        <div style={{ height: 30, background: "var(--mt-surface-2)", borderRadius: 4, position: "relative", overflow: "hidden", marginTop: 2 }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", gap: 2, alignItems: "flex-end", padding: 3 }}>
            {[55, 75, 45, 90, 65].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: "var(--mt-orange)", borderRadius: 1, opacity: 0.65 + i * 0.05 }} />
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

const Features = () => {
  const { lang, t } = useLanguage();
  const items = dataFeatures[lang].filter((f) => [1, 2, 5, 6].includes(f.id));

  return (
    <section className="mt-features mt-section">
      <div className="mt-section-inner">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
          <div>
            <div className="mt-section-label">{t.features.label}</div>
            <h2 className="mt-section-title" style={{ marginBottom: 10 }}>
              {t.features.title1} <span style={{ color: "var(--mt-orange)" }}>{t.features.title2}</span>
            </h2>
            <p style={{ color: "var(--mt-text-60)", fontSize: 13, maxWidth: 460, lineHeight: 1.65 }}>{t.features.desc}</p>
          </div>
          <Link href="/features" className="btn-secondary" style={{ flexShrink: 0 }}>{t.features.viewAll}</Link>
        </div>

        <div className="mt-features-grid">
          {items.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            >
              <Link href="/features" className="mt-hp-mini-card" style={{ display: "block" }}>
                <div className="mt-hp-mini-preview">
                  <MiniPreview variant={i % 2} />
                  <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(8,8,8,.8)", backdropFilter: "blur(8px)", border: "1px solid var(--mt-border-bright)", color: "var(--mt-text-60)", padding: "3px 9px", borderRadius: 100, fontSize: 10, textTransform: "uppercase", letterSpacing: ".05em" }}>{f.category}</div>
                  <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(8,8,8,.8)", backdropFilter: "blur(8px)", border: "1px solid var(--mt-border-bright)", color: "var(--mt-orange)", padding: "3px 9px", borderRadius: 100, fontSize: 10 }}>{f.company}</div>
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontFamily: "var(--mt-font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "-.4px", marginBottom: 7, lineHeight: 1.3 }}>{f.tagline}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                    {f.tags.slice(0, 3).map((tag) => (
                      <span key={tag} style={{ background: "var(--mt-tag-bg)", border: "1px solid var(--mt-border)", color: "var(--mt-text-60)", padding: "2px 8px", borderRadius: 3, fontSize: 10 }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--mt-orange)" }}>{t.features.cta}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-features-disclaimer">{t.features.disclaimer}</div>
      </div>
    </section>
  );
};

export default Features;

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { dataTestimonials } from "@/data";

const Testimonials = () => {
  const { lang, t } = useLanguage();
  const items = dataTestimonials[lang];

  return (
    <section className="mt-testimonials mt-section">
      <div className="mt-section-inner">
        <div className="mt-section-label">{t.testimonials.label}</div>
        <h2 className="mt-section-title">{t.testimonials.title}</h2>

        <div className="mt-testimonials-grid">
          {items.map((item, i) => (
            <motion.div
              className="mt-testimonial-card"
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <span className="mt-quote-mark">&ldquo;</span>
              <p className="mt-testimonial-text">{item.text}</p>
              <div className="mt-testimonial-author">
                <div className="mt-author-avatar">{item.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <div className="mt-author-name">{item.name}</div>
                  <div className="mt-author-role">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-testimonials-disclaimer">{t.testimonials.disclaimer}</div>
      </div>
    </section>
  );
};

export default Testimonials;

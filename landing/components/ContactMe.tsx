"use client";

import type React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function ContactMe() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("✅ Tu mensaje fue enviado con éxito. ¡Gracias por contactarme!");
      form.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast.error("❌ Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-contact mt-section" id="contact">
      <div className="mt-section-inner">
        <div className="mt-open-to-work">
          <div className="mt-otw-icon"><CheckCircle2 size={17} color="#4ade80" /></div>
          <div>
            <div className="mt-otw-title">{t.otw.title}</div>
            <div className="mt-otw-sub">{t.otw.sub}</div>
          </div>
        </div>

        <div className="mt-contact-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mt-section-label">{t.contact.label}</div>
            <h2 className="mt-contact-headline">
              {t.contact.title}
              <br />
              <span className="accent">{t.contact.titleAccent}</span>
            </h2>
            <p className="mt-contact-desc">{t.contact.desc}</p>

            <div className="mt-contact-links">
              <a href="mailto:tognolimauricio@gmail.com" className="mt-contact-link">
                <div className="mt-contact-link-icon"><Mail size={15} /></div>
                tognolimauricio@gmail.com
              </a>
              <div className="mt-contact-link" style={{ cursor: "default" }}>
                <div className="mt-contact-link-icon"><MapPin size={15} /></div>
                Buenos Aires, Argentina
              </div>
              <a href="https://github.com/MauricioTognoli" target="_blank" rel="noopener noreferrer" className="mt-contact-link">
                <div className="mt-contact-link-icon"><Github size={15} /></div>
                github.com/MauricioTognoli
              </a>
              <a href="https://www.linkedin.com/in/mauricio-tognoli/" target="_blank" rel="noopener noreferrer" className="mt-contact-link">
                <div className="mt-contact-link-icon"><Linkedin size={15} /></div>
                linkedin.com/in/mauricio-tognoli
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mt-contact-form"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="mt-form-title">{t.contact.formTitle}</div>
            <form onSubmit={handleSubmit}>
              <div className="mt-form-group">
                <label className="mt-form-label" htmlFor="from_name">{t.contact.name}</label>
                <input id="from_name" name="from_name" className="mt-form-input" placeholder={t.contact.namePh} required disabled={isSubmitting} />
              </div>
              <div className="mt-form-group">
                <label className="mt-form-label" htmlFor="from_email">{t.contact.email}</label>
                <input id="from_email" name="from_email" type="email" className="mt-form-input" placeholder={t.contact.emailPh} required disabled={isSubmitting} />
              </div>
              <div className="mt-form-group">
                <label className="mt-form-label" htmlFor="subject">{t.contact.subject}</label>
                <input id="subject" name="subject" className="mt-form-input" placeholder={t.contact.subjectPh} required disabled={isSubmitting} />
              </div>
              <div className="mt-form-group">
                <label className="mt-form-label" htmlFor="message">{t.contact.message}</label>
                <textarea id="message" name="message" className="mt-form-input" placeholder={t.contact.messagePh} rows={5} required disabled={isSubmitting} />
              </div>
              <button type="submit" className="mt-form-submit" disabled={isSubmitting}>
                {isSubmitting ? t.contact.sending : (
                  <>
                    <Send size={14} />
                    {t.contact.submit}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

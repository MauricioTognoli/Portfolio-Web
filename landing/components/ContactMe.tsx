"use client";

import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { sectionPad, SectionInner, SectionLabel } from "./Section";
import { sendContactMessage } from "@/app/actions/contact";

const contactLink =
  "flex items-center gap-3 rounded-[10px] border border-mt-border bg-mt-card-bg px-3.5 py-3 text-[13px] text-mt-text-60 no-underline transition-all duration-200 hover:translate-x-1 hover:border-mt-border-bright hover:text-mt-text";
const contactLinkIcon =
  "flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-lg bg-mt-orange-dim text-mt-orange";
const formInput =
  "w-full rounded-lg border border-mt-border bg-mt-input-bg px-3.5 py-2.75 font-mt-body text-[13px] text-mt-text outline-none transition-colors duration-200 focus-visible:border-mt-orange focus-visible:ring-2 focus-visible:ring-mt-orange-dim disabled:cursor-not-allowed disabled:opacity-60";

export function ContactMe() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const result = await sendContactMessage(formData);
      if (!result.success) throw new Error(result.error);

      toast.success(
        "Tu mensaje fue enviado con éxito. ¡Gracias por contactarme!",
      );
      form.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast.error("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`border-t border-mt-border bg-mt-surface transition-colors duration-300 ${sectionPad}`}
      id="contact"
    >
      <SectionInner>
        <div className="mb-10 flex items-center gap-3 rounded-xl border border-mt-border bg-mt-card-bg px-4.5 py-3.5 transition-colors duration-300">
          <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.1)]">
            <CheckCircle2 size={17} color="#4ade80" />
          </div>
          <div>
            <div className="font-mt-display text-sm font-semibold tracking-[-0.01em]">
              {t.otw.title}
            </div>
            <div className="mt-0.5 text-xs text-mt-text-30">{t.otw.sub}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-18 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel>{t.contact.label}</SectionLabel>
            <h2 className="mb-4.5 font-mt-display text-[clamp(30px,4vw,46px)] leading-[1.1] font-bold tracking-[-0.03em]">
              {t.contact.title}
              <br />
              <span className="text-mt-orange">{t.contact.titleAccent}</span>
            </h2>
            <p className="mb-7 text-sm leading-[1.7] text-mt-text-60">
              {t.contact.desc}
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:tognolimauricio@gmail.com"
                className={contactLink}
              >
                <div className={contactLinkIcon}>
                  <Mail size={15} />
                </div>
                tognolimauricio@gmail.com
              </a>
              <div className={`${contactLink} cursor-default`}>
                <div className={contactLinkIcon}>
                  <MapPin size={15} />
                </div>
                Buenos Aires, Argentina
              </div>
              <a
                href="https://github.com/MauricioTognoli"
                target="_blank"
                rel="noopener noreferrer"
                className={contactLink}
              >
                <div className={contactLinkIcon}>
                  <Github size={15} />
                </div>
                github.com/MauricioTognoli
              </a>
              <a
                href="https://www.linkedin.com/in/mauricio-tognoli/"
                target="_blank"
                rel="noopener noreferrer"
                className={contactLink}
              >
                <div className={contactLinkIcon}>
                  <Linkedin size={15} />
                </div>
                linkedin.com/in/mauricio-tognoli
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[20px] border border-mt-border bg-mt-card-bg p-8 transition-colors duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="mb-5.5 font-mt-display text-[17px] font-semibold tracking-[-0.02em]">
              {t.contact.formTitle}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3.5">
                <label
                  className="mb-1.75 block text-[11px] tracking-[0.08em] text-mt-text-30 uppercase"
                  htmlFor="from_name"
                >
                  {t.contact.name}
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  className={formInput}
                  placeholder={t.contact.namePh}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-3.5">
                <label
                  className="mb-1.75 block text-[11px] tracking-[0.08em] text-mt-text-30 uppercase"
                  htmlFor="from_email"
                >
                  {t.contact.email}
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  className={formInput}
                  placeholder={t.contact.emailPh}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-3.5">
                <label
                  className="mb-1.75 block text-[11px] tracking-[0.08em] text-mt-text-30 uppercase"
                  htmlFor="subject"
                >
                  {t.contact.subject}
                </label>
                <input
                  id="subject"
                  name="subject"
                  className={formInput}
                  placeholder={t.contact.subjectPh}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-3.5">
                <label
                  className="mb-1.75 block text-[11px] tracking-[0.08em] text-mt-text-30 uppercase"
                  htmlFor="message"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${formInput} min-h-[90px] resize-y`}
                  placeholder={t.contact.messagePh}
                  rows={5}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="mt-1.5 flex w-full items-center justify-center gap-2 rounded-lg bg-mt-orange px-4 py-[13px] font-mt-display text-sm font-semibold text-black transition-all duration-200 hover:bg-[#ff7a30] hover:shadow-[0_8px_32px_rgba(242,100,25,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  t.contact.sending
                ) : (
                  <>
                    <Send size={14} />
                    {t.contact.submit}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </SectionInner>
    </section>
  );
}

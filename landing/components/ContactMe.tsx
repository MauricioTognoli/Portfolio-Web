"use client";

import type React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import ContainerPage from "./Container-page";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export function ContactMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
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
    <ContainerPage className="mb-52">
      <motion.div
        ref={ref}
        className="flex flex-col justify-center h-full"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Título */}
        <motion.h1
          className="text-2xl leading-tight md:text-4xl text-center my-10 md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Contacta <span className="font-bold text-secondary">conmigo</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Información */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:Tognolimauricio@gmail.com"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      Tognolimauricio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="pt-6">
              <h4 className="font-medium mb-4">Sígueme en</h4>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/MauricioTognoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mauricio-tognoli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
          <h2 className="text-lg mb-10 max-w-2xl mx-auto text-pretty">
            ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones.
          </h2>
          <Card className="p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="from_name" className="text-sm font-medium">
                  Nombre
                </label>
                <Input
                  id="from_name"
                  name="from_name"
                  placeholder="Tu nombre"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="from_email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </Card>
          </div>
        </div>
      </motion.div>
    </ContainerPage>
  );
}

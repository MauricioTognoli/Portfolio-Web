"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "es" | "en";

export interface Translations {
  nav: {
    experience: string;
    features: string;
    projects: string;
    components: string;
    skills: string;
    cta: string;
    back: string;
  };
  hero: {
    badge: string;
    location: string;
    available: string;
    line1: string;
    line2: string;
    line2Accent: string;
    line3: string;
    line3Accent: string;
    sub: string;
    cta1: string;
    cta2: string;
    stat1: string;
    stat2: string;
    stat3: string;
    stat4: string;
  };
  marquee: string[];
  highlights: {
    label: string;
    title1: string;
    title2: string;
    b1Label: string;
    b2Label: string;
    b3Label: string;
    b4Title: string;
    b4Desc: string;
    b5Title: string;
    b5Desc: string;
  };
  logocloud: { label: string };
  experience: { label: string; title: string; desc: string };
  features: {
    label: string;
    title1: string;
    title2: string;
    desc: string;
    viewAll: string;
    cta: string;
    pageTitle1: string;
    pageTitle2: string;
    pageSubtitle: string;
    hint: string;
    problemLabel: string;
    solutionLabel: string;
    summaryTitle: string;
    summaryDesc: string;
    summaryCta: string;
  };
  projects: {
    label: string;
    title: string;
    desc: string;
    viewAll: string;
    viewAllBtn: string;
    cta: string;
    featured: string;
    liveNow: string;
    moreTitle: string;
    moreSub: string;
  };
  mtc: {
    label: string;
    title1: string;
    title2: string;
    sub: string;
    h1Title: string;
    h1Desc: string;
    h2Title: string;
    h2Desc: string;
    h3Title: string;
    h3Desc: string;
    cta1: string;
    cta2: string;
    badge: string;
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    c5: string;
    c6: string;
    soon: string;
  };
  skills: {
    label: string;
    title1: string;
    title2: string;
    desc: string;
    g1: string;
    g2: string;
    g3: string;
    g4: string;
  };
  testimonials: { label: string; title: string; disclaimer: string };
  recruiter: {
    label: string;
    title1: string;
    title2: string;
    desc: string;
    role: string;
    cv: string;
    call: string;
    f1l: string;
    f1v: string;
    f1s: string;
    f2l: string;
    f2v: string;
    f2s: string;
    f3l: string;
    f3s: string;
    f4l: string;
    f4v: string;
    f4s: string;
    f5l: string;
    f6l: string;
    f6v: string;
    f7l: string;
    f7v: string;
  };
  process: { label: string; title: string; desc: string };
  faq: { label: string; title: string; desc: string };
  contact: {
    label: string;
    title: string;
    titleAccent: string;
    desc: string;
    formTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    namePh: string;
    emailPh: string;
    subjectPh: string;
    messagePh: string;
    submit: string;
    sending: string;
    infoTitle: string;
    emailLabel: string;
    locationLabel: string;
    followLabel: string;
  };
  otw: { title: string; sub: string };
  sticky: { text: string; btn: string };
  footer: { tagline: string; cv: string; components: string };
}

export const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      experience: "Experiencia",
      features: "Features",
      projects: "Proyectos",
      components: "Componentes",
      skills: "Skills",
      cta: "Hablemos →",
      back: "← Volver al portfolio",
    },
    hero: {
      badge: "Frontend Engineer · React & Next.js",
      location: "Argentina · GMT-3 · Overlap US/EU",
      available: "Abierto a nuevas oportunidades",
      line1: "Construyo interfaces",
      line2: "que se ",
      line2Accent: "sienten",
      line3: "tan bien como ",
      line3Accent: "funcionan.",
      sub: "Frontend Developer con 4+ años construyendo interfaces web y plataformas SaaS. Me especializo en React, Next.js y arquitectura de componentes — convirtiendo diseños complejos en productos rápidos, accesibles y prolijos.",
      cta1: "Ver mi trabajo →",
      cta2: "Descargar CV",
      stat1: "Años construyendo",
      stat2: "Proyectos finalizados",
      stat3: "Clientes satisfechos",
      stat4: "Tecnologías usadas",
    },
    marquee: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Figma → Código",
      "Turborepo",
      "GraphQL",
      "Accesibilidad",
      "Performance",
    ],
    highlights: {
      label: "De un vistazo",
      title1: "Por qué los equipos frontend",
      title2: "me quieren en su lado.",
      b1Label: "Años construyendo productos web en React y Next.js",
      b2Label: "Tecnologías del stack frontend moderno que uso a diario",
      b3Label:
        "Remoto — async-first, inglés profesional, flexible con husos horarios",
      b4Title: "Diseño → Código, pixel-perfect",
      b4Desc:
        "Cierro la brecha entre diseño e ingeniería. Trabajo directo desde Figma, extraigo tokens y entrego UI fiel al diseño — sin idas y vueltas.",
      b5Title: "La performance es una prioridad",
      b5Desc:
        "Trato el rendimiento y el SEO como requisitos del producto, no como un extra. Code splitting, lazy loading y buenas prácticas desde el día uno.",
    },
    logocloud: { label: "Construido con" },
    experience: {
      label: "Carrera",
      title: "Experiencia que produce resultados.",
      desc: "No descripciones de puesto. El contexto real, las decisiones técnicas y las interfaces que construí en cada rol.",
    },
    features: {
      label: "Features & Soluciones",
      title1: "Features que construyo,",
      title2: "problemas que resuelven.",
      desc: "Ocho patrones que resuelvo una y otra vez en producción — con demos en vivo, no capturas de pantalla. Probalos vos mismo.",
      viewAll: "Ver todas las features →",
      cta: "Ver features →",
      pageTitle1: "Features que construyo,",
      pageTitle2: "problemas que resuelven.",
      pageSubtitle:
        "Cada feature de abajo es algo que construí en producción — capturas reales del producto, y donde todavía no subí una, una demo interactiva hecha con el mismo patrón. No me creas de palabra.",
      hint: "Capturas reales de producción",
      problemLabel: "El problema",
      solutionLabel: "Mi solución",
      summaryTitle:
        "Cada demo de esta página es código real que escribí para esta página.",
      summaryDesc:
        "Sin librerías, sin frameworks — solo para demostrarlo. Imaginate lo que puedo construir con el stack completo de React. Hablemos de lo que necesita tu producto.",
      summaryCta: "Ponte en contacto →",
    },
    projects: {
      label: "Trabajo seleccionado",
      title: "Proyectos, no solo código.",
      desc: "Casos de estudio con problemas reales, interfaces reales y el contexto detrás de cada decisión.",
      viewAll: "Ver todos los proyectos →",
      viewAllBtn: "Ver todos los proyectos →",
      cta: "Ver caso de estudio →",
      featured: "Destacado",
      liveNow: "En producción",
      moreTitle: "Más proyectos esperando.",
      moreSub: "SaaS · Landing corporativa · Streaming · Design Systems",
    },
    mtc: {
      label: "Open Source",
      title1: "Mauricio Tognoli",
      title2: "Components.",
      sub: "Una librería propia de componentes UI reutilizables construidos con React, Next.js, Tailwind CSS, TypeScript y Framer Motion. Actualmente en construcción — la voy armando a partir de los patrones que más repito en proyectos reales.",
      h1Title: "Pensados para producción",
      h1Desc:
        "Cada componente accesible, responsive y pensado para uso real — no solo demos.",
      h2Title: "Animaciones con Framer Motion",
      h2Desc:
        "Micro-interacciones y transiciones que elevan el UX sin sumar complejidad al codebase.",
      h3Title: "Precisión Figma-to-code",
      h3Desc:
        "Construido con ojo de diseñador — tokens, espaciado consistente y lenguaje visual coherente.",
      cta1: "Ver en GitHub →",
      cta2: "GitHub",
      badge: "En construcción",
      c1: "Botones",
      c2: "Cards",
      c3: "Badges",
      c4: "Inputs",
      c5: "Tabs",
      c6: "Toggles",
      soon: "Más componentes próximamente",
    },
    skills: {
      label: "Profundidad técnica",
      title1: "Expertise Frontend,",
      title2: "de arriba a abajo.",
      desc: "Mi stack está enfocado en el craft del frontend — desde arquitectura y animación hasta accesibilidad y performance.",
      g1: "Frameworks y Librerías",
      g2: "Estilos y Diseño",
      g3: "Performance y Calidad",
      g4: "Herramientas y Flujo",
    },
    testimonials: {
      label: "Testimonios",
      title: "Lo que dicen de mí.",
      disclaimer:
        "Testimonios de ejemplo — a reemplazar por referencias reales.",
    },
    recruiter: {
      label: "Para recruiters y hiring managers",
      title1: "Todo lo que necesitás,",
      title2: "en 10 segundos.",
      desc: "La versión de lectura rápida. Sin buscar entre secciones los datos que importan.",
      role: "Frontend Engineer · Especialista en React & Next.js",
      cv: "Descargar CV →",
      call: "Agendar llamada",
      f1l: "Estado",
      f1v: "Abierto a oportunidades",
      f1s: "Full-time o freelance",
      f2l: "Buscando",
      f2v: "Roles Frontend remotos",
      f2s: "Full-time o contrato",
      f3l: "Uso horario",
      f3s: "Overlap total con US · Mañanas EU",
      f4l: "Inglés",
      f4v: "Profesional",
      f4s: "Async y meetings diarias",
      f5l: "Stack principal",
      f6l: "Experiencia",
      f6v: "4+ años · Freelance y SaaS",
      f7l: "Estilo de trabajo",
      f7v: "Async-first · Documentación primero",
    },
    process: {
      label: "Cómo trabajo",
      title: "Claridad, criterio y entregas confiables.",
      desc: "No se trata solo de escribir código. Se trata de entender el problema, tomar buenas decisiones y entregar soluciones que sean claras, mantenible",
    },
    faq: {
      label: "Preguntas frecuentes",
      title: "Respuestas, por adelantado.",
      desc: "Lo que suelen preguntar en la primera llamada — respondido antes de que tengas que preguntar.",
    },
    contact: {
      label: "Contacto",
      title: "Hablemos de",
      titleAccent: "tu próximo proyecto.",
      desc: "¿Buscás un frontend engineer para construir un producto, mejorar una interfaz o llevar una idea a producción? Contame qué estás construyendo y veamos cómo puedo ayudarte.",
      formTitle: "Enviame un mensaje",
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      namePh: "Tu nombre",
      emailPh: "tu@email.com",
      subjectPh: "¿En qué puedo ayudarte?",
      messagePh: "Contame brevemente sobre tu proyecto, idea o propuesta...",
      submit: "Enviar mensaje →",
      sending: "Enviando...",
      infoTitle: "Información de contacto",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      followLabel: "Encontrame en",
    },

    otw: {
      title: "Abierto a oportunidades",
      sub: "Roles remotos full-time · Freelance · Frontend",
    },
    sticky: { text: "Abierto a propuestas", btn: "Ver datos →" },
    footer: {
      tagline: "Construido con cuidado.",
      cv: "CV",
      components: "Componentes",
    },
  },
  en: {
    nav: {
      experience: "Experience",
      features: "Features",
      projects: "Projects",
      components: "Components",
      skills: "Skills",
      cta: "Let's talk →",
      back: "← Back to portfolio",
    },
    hero: {
      badge: "Frontend Engineer · React & Next.js",
      location: "Argentina · GMT-3 · US/EU overlap",
      available: "Open to new opportunities",
      line1: "I build interfaces",
      line2: "that ",
      line2Accent: "feel",
      line3: "as good as they ",
      line3Accent: "work.",
      sub: "Frontend Developer with 4+ years building web interfaces and SaaS platforms. I specialize in React, Next.js and component architecture — turning complex designs into fast, accessible, polished products.",
      cta1: "View my work →",
      cta2: "Download CV",
      stat1: "Years building",
      stat2: "Projects shipped",
      stat3: "Happy clients",
      stat4: "Technologies used",
    },
    marquee: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Figma to Code",
      "Turborepo",
      "GraphQL",
      "Accessibility",
      "Performance",
    ],
    highlights: {
      label: "At a glance",
      title1: "Why frontend teams",
      title2: "want me on their side.",
      b1Label: "Years building web products in React and Next.js",
      b2Label: "Technologies in the modern frontend stack I use daily",
      b3Label: "Remote — async-first, professional English, timezone flexible",
      b4Title: "Design → Code, pixel-perfect",
      b4Desc:
        "I bridge the gap between design and engineering. I work straight from Figma, extract tokens, and ship UI that matches the spec — without back-and-forth.",
      b5Title: "Performance is a priority",
      b5Desc:
        "I treat performance and SEO as product requirements, not an afterthought. Code splitting, lazy loading and good practices from day one.",
    },
    logocloud: { label: "Built with" },
    experience: {
      label: "Career",
      title: "Experience that ships results.",
      desc: "Not job descriptions. The real context, the technical decisions, and the interfaces I built in every role.",
    },
    features: {
      label: "Features & Solutions",
      title1: "Features I build,",
      title2: "problems they solve.",
      desc: "Eight patterns I solve again and again in production — with live demos, not screenshots. Try them yourself.",
      viewAll: "See all features →",
      cta: "See the features →",
      pageTitle1: "Features I ship,",
      pageTitle2: "problems they solve.",
      pageSubtitle:
        "Every feature below is something I've built in production — real product screenshots, and where I haven't uploaded one yet, a live demo built on the same pattern. Don't take my word for it.",
      hint: "Real production screenshots",
      problemLabel: "The problem",
      solutionLabel: "My solution",
      summaryTitle: "Every demo here is vanilla code I wrote for this page.",
      summaryDesc:
        "No libraries, no frameworks — just to prove the point. Imagine what I ship with the full React toolkit. Let's talk about what your product needs.",
      summaryCta: "Want this in your project? Let's talk →",
    },
    projects: {
      label: "Selected work",
      title: "Projects, not just code.",
      desc: "Case studies with real problems, real interfaces, and the context behind every decision.",
      viewAll: "View all projects →",
      viewAllBtn: "View all projects →",
      cta: "View case study →",
      featured: "Featured",
      liveNow: "In production",
      moreTitle: "More projects waiting.",
      moreSub: "SaaS · Corporate landing · Streaming · Design Systems",
    },
    mtc: {
      label: "Open Source",
      title1: "Mauricio Tognoli",
      title2: "Components.",
      sub: "A personal library of reusable UI components built with React, Next.js, Tailwind CSS, TypeScript and Framer Motion. Currently a work in progress — built from the patterns I repeat most in real projects.",
      h1Title: "Built for production",
      h1Desc:
        "Every component is accessible, responsive, and meant for real use — not just demos.",
      h2Title: "Framer Motion animations",
      h2Desc:
        "Micro-interactions and transitions that elevate UX without adding complexity to the codebase.",
      h3Title: "Figma-to-code precision",
      h3Desc:
        "Built with a designer's eye — tokens, consistent spacing, and a coherent visual language.",
      cta1: "View on GitHub →",
      cta2: "GitHub",
      badge: "Work in progress",
      c1: "Buttons",
      c2: "Cards",
      c3: "Badges",
      c4: "Inputs",
      c5: "Tabs",
      c6: "Toggles",
      soon: "More components coming soon",
    },
    skills: {
      label: "Technical depth",
      title1: "Frontend expertise,",
      title2: "top to bottom.",
      desc: "My toolkit is focused on frontend craft — from architecture and animation to accessibility and performance.",
      g1: "Frameworks & Libraries",
      g2: "Styling & Design",
      g3: "Performance & Quality",
      g4: "Tooling & Workflow",
    },
    testimonials: {
      label: "Testimonials",
      title: "What people say.",
      disclaimer: "Sample testimonials — to be replaced with real references.",
    },
    recruiter: {
      label: "For recruiters & hiring managers",
      title1: "Everything you need,",
      title2: "in 10 seconds.",
      desc: "The quick-scan version. No hunting through sections for the facts that matter.",
      role: "Frontend Engineer · React & Next.js Specialist",
      cv: "Download CV →",
      call: "Book intro call",
      f1l: "Status",
      f1v: "Open to opportunities",
      f1s: "Full-time or freelance",
      f2l: "Looking for",
      f2v: "Remote Frontend roles",
      f2s: "Full-time or contract",
      f3l: "Timezone",
      f3s: "Full US overlap · EU mornings",
      f4l: "English",
      f4v: "Professional",
      f4s: "Daily async & meetings",
      f5l: "Core stack",
      f6l: "Experience",
      f6v: "4+ years · Freelance & SaaS",
      f7l: "Work style",
      f7v: "Async-first · Documentation-driven",
    },
    process: {
      label: "How I work",
      title: "Clarity, sound judgment, and reliable delivery.",
      desc: "It’s not just about writing code. It’s about understanding the problem, making thoughtful decisions, and delivering solutions that are clear, maintainable, and predictable.",
    },
    faq: {
      label: "Common questions",
      title: "Answers, upfront.",
      desc: "The things people usually ask on the first call — answered before you have to ask.",
    },
    contact: {
      label: "Contact",
      title: "Let’s talk about",
      titleAccent: "your next project.",
      desc: "Looking for a frontend engineer to build a product, improve an interface, or bring an idea to production? Tell me what you’re working on and let’s see how I can help.",
      formTitle: "Send me a message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePh: "Your name",
      emailPh: "you@email.com",
      subjectPh: "How can I help?",
      messagePh: "Tell me briefly about your project, idea, or opportunity...",
      submit: "Send message →",
      sending: "Sending...",
      infoTitle: "Contact information",
      emailLabel: "Email",
      locationLabel: "Location",
      followLabel: "Find me on",
    },

    otw: {
      title: "Open to opportunities",
      sub: "Full-time remote roles · Freelance · Frontend",
    },
    sticky: { text: "Open to offers", btn: "View facts →" },
    footer: {
      tagline: "Built with craft.",
      cv: "Resume",
      components: "Components",
    },
  },
};

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem("mt-lang") as Lang | null;
    const browserLang = (
      navigator.languages?.[0] ??
      navigator.language ??
      "es"
    ).toLowerCase();
    const detected: Lang = browserLang.startsWith("es") ? "es" : "en";
    const initial = stored ?? detected;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads localStorage/navigator.language, only available client-side after mount
    setLang(initial);
    document.documentElement.lang = initial;
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === "es" ? "en" : "es";
      window.localStorage.setItem("mt-lang", next);
      document.documentElement.lang = next;
      return next;
    });
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

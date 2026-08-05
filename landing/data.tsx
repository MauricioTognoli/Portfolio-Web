import {
  Linkedin,
  GithubIcon,
  Mail,
  FileUserIcon,
  Twitter,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/mauricio-tognoli/",
    description: "LinkedIn",
  },
  {
    id: 2,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "https://x.com/MauricioTognoli",
    description: "Twitter",
  },
  {
    id: 3,
    logo: <GithubIcon size={30} strokeWidth={1} />,
    src: "https://github.com/MauricioTognoli",
    description: "GitHub",
  },
  {
    id: 4,
    logo: <FileUserIcon size={30} strokeWidth={1} />,
    src: "https://docs.google.com/document/d/13k-dT-JRagXQx-YnZ1PNsU8A6FJBiA-q/edit?usp=drivesdk&ouid=114730073055255632550&rtpof=true&sd=true",
    description: "Currículum",
  },
  {
    id: 5,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "mailto:tognolimauricio@gmail.com",
    description: "Correo",
  },
];

// ─── HIGHLIGHTS (bento stats) ───
export const dataHighlights = {
  b1Number: "4",
  b1Suffix: "+",
  b2Number: "20",
  b2Suffix: "+",
  b3Number: "100",
  b3Suffix: "%",
};

// ─── EXPERIENCE TIMELINE ───
export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  badge: string;
  summary: string;
  achievements: string[];
}

export const dataExperience: Record<"es" | "en", ExperienceItem[]> = {
  es: [
    {
      period: "Jul 2025 — Presente",
      role: "Frontend Engineer",
      company: "Powip",
      badge: "SaaS · ERP",
      summary:
        "Lidero el desarrollo frontend de una plataforma ERP SaaS en producción, usada para gestión de stock, ventas y operaciones comerciales.",
      achievements: [
        "Arquitectura frontend <strong>modular</strong> con React, Next.js y TypeScript, pensada para escalabilidad y mantenibilidad",
        "Diseño y mantenimiento de más de <strong>20 componentes reutilizables</strong> usados en múltiples módulos del sistema",
        "Integración con <strong>REST APIs</strong> y manejo de estado remoto vía React Query, optimizando sincronización de datos",
      ],
    },
    {
      period: "Feb 2026 — Presente",
      role: "Frontend Developer",
      company: "Devlusoft · Remoto (Part-time)",
      badge: "SaaS · Part-time",
      summary:
        "Desarrollo de funcionalidades para una plataforma SaaS de gestión de stock, catálogos y ventas.",
      achievements: [
        "Componentes reutilizables con <strong>shadcn/ui</strong> para consistencia visual y velocidad de desarrollo",
        "Uso de <strong>Server Actions</strong> para simplificar el flujo de datos y separar lógica de negocio y presentación",
        "Participación en decisiones técnicas sobre <strong>estructura del proyecto</strong> y mantenibilidad del código",
      ],
    },
    {
      period: "Dic 2025 — Ene 2026",
      role: "Frontend Developer",
      company: "SOS Service · Freelance (ZimaBlue)",
      badge: "Freelance · Landing",
      summary:
        "Landing corporativa desde cero para una empresa de mantenimiento del hogar en Madeira, Portugal, a partir de un diseño provisto por el cliente.",
      achievements: [
        "Implementación completa de la UI a partir de un diseño provisto, con foco en <strong>accesibilidad y diseño responsive</strong>",
        "<strong>Performance y accesibilidad</strong> optimizadas, superando los 90 puntos en Lighthouse",
        "Formularios dinámicos, <strong>SEO técnico</strong> y soporte multilenguaje, con arquitectura en Turborepo",
      ],
    },
    {
      period: "May 2025 — Jun 2025",
      role: "Frontend Developer",
      company: "Freiguel · Freelance (ZimaBlue)",
      badge: "Freelance · Web",
      summary:
        "Interfaces accesibles y mobile-first, trabajando junto al equipo de diseño en el sistema de navegación y las páginas públicas.",
      achievements: [
        "Implementación del <strong>sistema de navegación</strong> y páginas públicas junto al equipo de diseño",
        "Mejora del <strong>tiempo de carga inicial</strong> en aproximadamente un 35%",
        "Colaboración con diseño para garantizar <strong>consistencia responsive</strong> en distintos dispositivos",
      ],
    },
    {
      period: "2022 — 2024",
      role: "Frontend Developer en formación",
      company: "Autodidacta · Proyectos personales",
      badge: "Aprendizaje · Proyectos",
      summary:
        "Camino autodidacta en desarrollo web, reforzado con una formación fullstack y múltiples proyectos personales.",
      achievements: [
        "Aprendizaje autodidacta de <strong>HTML, CSS, JavaScript y React</strong> desde 2022",
        "Formación como <strong>desarrollador fullstack</strong> en 2024, sumando frontend y backend",
        "Múltiples <strong>proyectos personales</strong> con Next.js, React y Tailwind CSS",
      ],
    },
  ],
  en: [
    {
      period: "Jul 2025 — Present",
      role: "Frontend Engineer",
      company: "Powip",
      badge: "SaaS · ERP",
      summary:
        "Leading frontend development of a production SaaS ERP platform used for stock, sales, and business operations management.",
      achievements: [
        "<strong>Modular</strong> frontend architecture with React, Next.js and TypeScript, built for scalability and maintainability",
        "Designed and maintain more than <strong>20 reusable components</strong> used across multiple modules of the system",
        "<strong>REST API</strong> integration with remote state management via React Query, optimizing data syncing",
      ],
    },
    {
      period: "Feb 2026 — Present",
      role: "Frontend Developer",
      company: "Devlusoft · Remote (Part-time)",
      badge: "SaaS · Part-time",
      summary:
        "Building features for a SaaS platform for stock, catalog, and sales management.",
      achievements: [
        "Reusable components with <strong>shadcn/ui</strong> for visual consistency and faster development",
        "Used <strong>Server Actions</strong> to simplify data flow and separate business logic from presentation",
        "Contributed to technical decisions on <strong>project structure</strong> and codebase maintainability",
      ],
    },
    {
      period: "Dec 2025 — Jan 2026",
      role: "Frontend Developer",
      company: "SOS Service · Freelance (ZimaBlue)",
      badge: "Freelance · Landing",
      summary:
        "Corporate landing page built from scratch for a home-maintenance company in Madeira, Portugal, based on a design provided by the client.",
      achievements: [
        "Full UI implementation from a provided design, focused on <strong>accessibility and responsive design</strong>",
        "<strong>Performance and accessibility</strong> optimized, scoring above 90 on Lighthouse",
        "Dynamic forms, <strong>technical SEO</strong> and multilanguage support, with a Turborepo-based architecture",
      ],
    },
    {
      period: "May 2025 — Jun 2025",
      role: "Frontend Developer",
      company: "Freiguel · Freelance (ZimaBlue)",
      badge: "Freelance · Web",
      summary:
        "Accessible, mobile-first interfaces, working alongside the design team on navigation and public pages.",
      achievements: [
        "Implementation of the <strong>navigation system</strong> and public pages together with the design team",
        "Improved <strong>initial load time</strong> by approximately 35%",
        "Collaborated with design to ensure <strong>responsive consistency</strong> across devices",
      ],
    },
    {
      period: "2022 — 2024",
      role: "Frontend Developer in training",
      company: "Self-taught · Personal projects",
      badge: "Learning · Projects",
      summary:
        "Self-taught path into web development, reinforced with fullstack training and several personal projects.",
      achievements: [
        "Self-taught <strong>HTML, CSS, JavaScript and React</strong> starting in 2022",
        "<strong>Fullstack developer</strong> training in 2024, adding backend to frontend skills",
        "Multiple <strong>personal projects</strong> with Next.js, React and Tailwind CSS",
      ],
    },
  ],
};

// ─── PROJECTS (full schema, used on home preview + /proyectos) ───
export interface ProjectMetric {
  val: string;
  lbl: string;
}

export interface ProjectScreenshot {
  label: string;
  src: string;
  width: number;
  height: number;
}

export interface ProjectStack {
  core: string[];
  styling: string[];
  ui: string[];
  tooling: string[];
}

export interface ProjectItem {
  id: number;
  featured: boolean;
  title: string;
  category: string;
  type: "landing" | "web" | "app" | "saas";
  year: string;
  status: "live" | "wip" | "private";
  tagline: string;
  desc: string;
  challenge: string;
  metrics: ProjectMetric[];
  keypoints: string[];
  stack: ProjectStack;
  stackPills: string[];
  screens: string[];
  screenshots?: {
    desktop: ProjectScreenshot[];
    mobile?: ProjectScreenshot[];
  };
  liveUrl: string | null;
  githubUrl: string | null;
}

export const dataProjects: Record<"es" | "en", ProjectItem[]> = {
  es: [
    {
      id: 1,
      featured: true,
      title: "SOS Service",
      category: "Landing Corporativa",
      type: "landing",
      year: "2026",
      status: "live",
      tagline:
        "Landing corporativa para una empresa de mantenimiento del hogar en Madeira, Portugal",
      desc: "Desarrollo de una landing page corporativa desde cero para SOS Service, empresa de servicios de reparación y mantenimiento del hogar con sede en Madeira, Portugal. Implementación completa de la interfaz a partir de un diseño provisto, aplicando buenas prácticas de UI/UX, accesibilidad y diseño responsive. Optimización de SEO y performance para mejorar la visibilidad y la captación de clientes, incorporando estructura semántica, metadata y microinteracciones.",
      challenge:
        "El sitio necesitaba transmitir confianza a clientes residenciales en un mercado local partiendo de un diseño ya definido, sin sacrificar performance ni accesibilidad, y quedar listo para escalar a otros idiomas.",
      metrics: [
        { val: "SEO", lbl: "Optimizado" },
        { val: "A11y", lbl: "Accesible" },
        { val: "100%", lbl: "Responsive" },
        { val: "Turborepo", lbl: "Monorepo" },
      ],
      keypoints: [
        "Landing corporativa construida <strong>desde cero</strong> a partir de un diseño provisto por el cliente",
        "Implementación fiel al diseño con foco en <strong>accesibilidad y responsive design</strong>",
        "<strong>SEO y performance</strong> optimizados: estructura semántica, metadata y microinteracciones",
        "Arquitectura frontend <strong>escalable</strong> construida con Turborepo",
      ],
      stack: {
        core: ["Next.js", "TypeScript", "React"],
        styling: ["Tailwind CSS"],
        ui: ["Framer Motion"],
        tooling: ["Turborepo", "Vercel"],
      },
      stackPills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Turborepo",
      ],
      screens: [
        "Página de inicio",
        "Sección de servicios",
        "Formulario de contacto",
        "Vista mobile",
      ],
      screenshots: {
        desktop: [
          {
            label: "Inicio",
            src: "/sos-service/sos-service-desktop.png",
            width: 1920,
            height: 11216,
          },
          {
            label: "Servicios",
            src: "/sos-service/sos-service-services.png",
            width: 1920,
            height: 8116,
          },
          {
            label: "Proyectos",
            src: "/sos-service/sos-service-projects.png",
            width: 1920,
            height: 5632,
          },
          {
            label: "Recrutamiento",
            src: "/sos-service/sos-service-recruitment.png",
            width: 1920,
            height: 4690,
          },
          {
            label: "Contacto",
            src: "/sos-service/sos-service-contact.png",
            width: 1920,
            height: 3685,
          },
        ],
        mobile: [
          {
            label: "Inicio (mobile)",
            src: "/sos-service/sos-service-mobile.png",
            width: 378,
            height: 14387,
          },
        ],
      },
      liveUrl: "https://prepro-sos-service-web.vercel.app/en",
      githubUrl: "https://github.com/mauriciotognoli",
    },
    {
      id: 2,
      featured: false,
      title: "Freiguel",
      category: "Plataforma Web",
      type: "web",
      year: "2025",
      status: "live",
      tagline:
        "Interfaces accesibles y mobile-first para una plataforma pública",
      desc: "Desarrollo de interfaces web accesibles y mobile-first utilizando Next.js 14, Tailwind CSS y TypeScript. Implementación del sistema de navegación y las páginas públicas de la plataforma, colaborando estrechamente con el equipo de diseño para asegurar consistencia visual y una experiencia de usuario óptima.",
      challenge:
        "El equipo necesitaba páginas públicas rápidas y accesibles, coherentes con un sistema de diseño existente, sin frenar el ritmo de entrega del resto del monorepo.",
      metrics: [
        { val: "Next 14", lbl: "App Router" },
        { val: "Mobile", lbl: "First" },
        { val: "GraphQL", lbl: "Integrado" },
        { val: "Turborepo", lbl: "Monorepo" },
      ],
      keypoints: [
        "Interfaces <strong>accesibles y mobile-first</strong> con Next.js 14, Tailwind CSS y TypeScript",
        "Implementación del <strong>sistema de navegación</strong> y páginas públicas junto al equipo de diseño",
        "Optimización del <strong>rendimiento de carga inicial</strong> y la navegación general",
        "Desarrollo en un entorno basado en <strong>Turborepo</strong>",
      ],
      stack: {
        core: ["Next.js 14", "TypeScript", "React"],
        styling: ["Tailwind CSS"],
        ui: ["GraphQL"],
        tooling: ["Turborepo", "Vercel"],
      },
      stackPills: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "GraphQL",
        "Turborepo",
      ],
      screens: [
        "Home pública",
        "Página de contenido",
        "Navegación mobile",
        "Sección de detalle",
      ],
      screenshots: {
        desktop: [
          { label: "Inicio", src: "/freiguel/freiguel-home.png", width: 1920, height: 4503 },
          { label: "Productos", src: "/freiguel/freiguel-products.png", width: 1920, height: 5451 },
          { label: "Contacto", src: "/freiguel/freiguel-contact.png", width: 1920, height: 1843 },
        ],
        mobile: [
          { label: "Sobre nosotros (mobile)", src: "/freiguel/freiguel-about-mobile.png", width: 378, height: 4992 },
        ],
      },
      liveUrl: "https://www.freiguel.pt/pt",
      githubUrl: "https://github.com/mauriciotognoli",
    },
    {
      id: 3,
      featured: false,
      title: "Produp",
      category: "SaaS",
      type: "saas",
      year: "2023",
      status: "private",
      tagline: "Plataforma SaaS migrada de React a Vue",
      desc: "Producto SaaS en el que trabajé primero con React y luego participé en la migración del frontend a Vue, adaptando la arquitectura de componentes y manteniendo la paridad de funcionalidades durante la transición de stack.",
      challenge:
        "Migrar el frontend de un producto SaaS en producción de React a Vue sin frenar el desarrollo de nuevas funcionalidades ni afectar la experiencia de los usuarios existentes.",
      metrics: [
        { val: "React", lbl: "Etapa inicial" },
        { val: "Vue", lbl: "Etapa actual" },
        { val: "SaaS", lbl: "Producto" },
        { val: "Migración", lbl: "De stack" },
      ],
      keypoints: [
        "Desarrollo inicial de funcionalidades del producto <strong>SaaS</strong> con React",
        "Participación en la <strong>migración del frontend de React a Vue</strong>",
        "Mantenimiento de la <strong>paridad de funcionalidades</strong> durante la transición de stack",
        "Trabajo con frameworks internos propios de la empresa (<strong>Devix</strong> y <strong>Nuxe</strong>) además de React y Vue",
      ],
      stack: {
        core: ["React", "Vue"],
        styling: ["Tailwind CSS"],
        ui: [],
        tooling: ["Devix", "Nuxe"],
      },
      stackPills: ["React", "Vue", "Tailwind CSS", "Devix", "Nuxe"],
      screens: [
        "Panel principal",
        "Vista de producto",
        "Interfaz migrada a Vue",
        "Vista mobile",
      ],
      screenshots: {
        desktop: [
          { label: "Dashboard", src: "/produp/produp-dashboard.png", width: 1920, height: 1344 },
          { label: "Inventario", src: "/produp/produp-inventario.png", width: 1920, height: 2094 },
        ],
      },
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 4,
      featured: false,
      title: "Powip",
      category: "SaaS · ERP",
      type: "saas",
      year: "2025",
      status: "live",
      tagline: "Plataforma ERP SaaS de e-commerce construida desde cero",
      desc: "Plataforma ERP SaaS de e-commerce desarrollada desde cero para reemplazar una solución anterior que no soportaba la alta carga de usuarios y datos. Participación activa en el diseño de UX/UI y en la implementación de una arquitectura frontend escalable y modular, con integración a REST APIs y gestión de datos optimizada mediante React Query.",
      challenge:
        "La solución anterior no soportaba la carga de usuarios y datos del negocio. Había que rearquitecturar el frontend priorizando escalabilidad, rendimiento y una buena experiencia dentro de un equipo chico.",
      metrics: [
        { val: "React Query", lbl: "Cacheado" },
        { val: "REST", lbl: "APIs" },
        { val: "Modular", lbl: "Arquitectura" },
        { val: "Ágil", lbl: "Equipo chico" },
      ],
      keypoints: [
        "Plataforma <strong>ERP SaaS</strong> construida desde cero, reemplazando una solución anterior limitada",
        "Participación activa en el <strong>diseño de UX/UI</strong> y en decisiones de arquitectura",
        "Integración con <strong>REST APIs</strong> y cacheado inteligente vía React Query",
        "Trabajo colaborativo en equipo chico bajo <strong>metodologías ágiles</strong>",
      ],
      stack: {
        core: ["Next.js", "React"],
        styling: ["Tailwind CSS"],
        ui: ["React Query", "Axios"],
        tooling: ["Context API"],
      },
      stackPills: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "React Query",
        "Axios",
        "Context API",
      ],
      screens: [
        "Dashboard principal",
        "Gestión de productos",
        "Panel de pedidos",
        "Vista mobile",
      ],
      screenshots: {
        desktop: [
          { label: "Inicio", src: "/powip/powip-home.png", width: 1920, height: 7275 },
        ],
      },
      liveUrl: "https://www.powip.lat/",
      githubUrl: null,
    },
  ],
  en: [
    {
      id: 1,
      featured: true,
      title: "SOS Service",
      category: "Corporate Landing",
      type: "landing",
      year: "2026",
      status: "live",
      tagline:
        "Corporate landing page for a home-maintenance company in Madeira, Portugal",
      desc: "Built a corporate landing page from scratch for SOS Service, a home repair and maintenance company based in Madeira, Portugal. Full UI implementation from a provided design, applying UI/UX best practices, accessibility, and responsive design. SEO and performance optimization to improve visibility and lead generation, including semantic structure, metadata, and micro-interactions.",
      challenge:
        "The site needed to convey trust to residential clients in a local market, starting from an already-defined design, without sacrificing performance or accessibility, and ready to scale to other languages.",
      metrics: [
        { val: "SEO", lbl: "Optimized" },
        { val: "A11y", lbl: "Accessible" },
        { val: "100%", lbl: "Responsive" },
        { val: "Turborepo", lbl: "Monorepo" },
      ],
      keypoints: [
        "Corporate landing page built <strong>from scratch</strong> from a client-provided design",
        "Pixel-faithful implementation focused on <strong>accessibility and responsive design</strong>",
        "<strong>SEO and performance</strong> optimized: semantic structure, metadata and micro-interactions",
        "<strong>Scalable</strong> frontend architecture built with Turborepo",
      ],
      stack: {
        core: ["Next.js", "TypeScript", "React"],
        styling: ["Tailwind CSS"],
        ui: ["Framer Motion"],
        tooling: ["Turborepo", "Vercel"],
      },
      stackPills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Turborepo",
      ],
      screens: ["Homepage", "Services section", "Contact form", "Mobile view"],
      screenshots: {
        desktop: [
          {
            label: "Home",
            src: "/sos-service/sos-service-desktop.png",
            width: 1920,
            height: 11216,
          },
          {
            label: "Services",
            src: "/sos-service/sos-service-services.png",
            width: 1920,
            height: 8116,
          },
          {
            label: "Projects",
            src: "/sos-service/sos-service-projects.png",
            width: 1920,
            height: 5632,
          },
          {
            label: "Recruitment",
            src: "/sos-service/sos-service-recruitment.png",
            width: 1920,
            height: 4690,
          },
          {
            label: "Contact",
            src: "/sos-service/sos-service-contact.png",
            width: 1920,
            height: 3685,
          },
        ],
        mobile: [
          {
            label: "Home (mobile)",
            src: "/sos-service/sos-service-mobile.png",
            width: 378,
            height: 14387,
          },
        ],
      },
      liveUrl: "https://www.sosservice.pt/pt",
      githubUrl: "https://github.com/mauriciotognoli",
    },
    {
      id: 2,
      featured: false,
      title: "Freiguel",
      category: "Web Platform",
      type: "web",
      year: "2025",
      status: "live",
      tagline: "Accessible, mobile-first interfaces for a public platform",
      desc: "Built accessible, mobile-first web interfaces using Next.js 14, Tailwind CSS and TypeScript. Implemented the navigation system and public pages of the platform, working closely with the design team to ensure visual consistency and an optimal user experience.",
      challenge:
        "The team needed fast, accessible public pages consistent with an existing design system, without slowing down the rest of the monorepo's delivery pace.",
      metrics: [
        { val: "Next 14", lbl: "App Router" },
        { val: "Mobile", lbl: "First" },
        { val: "GraphQL", lbl: "Integrated" },
        { val: "Turborepo", lbl: "Monorepo" },
      ],
      keypoints: [
        "<strong>Accessible, mobile-first</strong> interfaces with Next.js 14, Tailwind CSS and TypeScript",
        "Implemented the <strong>navigation system</strong> and public pages with the design team",
        "Optimized <strong>initial load performance</strong> and overall navigation",
        "Built in a <strong>Turborepo</strong>-based environment",
      ],
      stack: {
        core: ["Next.js 14", "TypeScript", "React"],
        styling: ["Tailwind CSS"],
        ui: ["GraphQL"],
        tooling: ["Turborepo", "Vercel"],
      },
      stackPills: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "GraphQL",
        "Turborepo",
      ],
      screens: [
        "Public home",
        "Content page",
        "Mobile navigation",
        "Detail section",
      ],
      liveUrl: "https://www.freiguel.pt/pt",
      githubUrl: "https://github.com/mauriciotognoli",
    },
    {
      id: 3,
      featured: false,
      title: "Produp",
      category: "SaaS",
      type: "saas",
      year: "2023",
      status: "private",
      tagline: "SaaS platform migrated from React to Vue",
      desc: "A SaaS product I first worked on with React and later helped migrate to Vue, adapting the component architecture and keeping feature parity throughout the stack transition.",
      challenge:
        "Migrating the frontend of a production SaaS product from React to Vue without slowing down new feature development or affecting the experience of existing users.",
      metrics: [
        { val: "React", lbl: "Initial stage" },
        { val: "Vue", lbl: "Current stage" },
        { val: "SaaS", lbl: "Product" },
        { val: "Migration", lbl: "Stack" },
      ],
      keypoints: [
        "Initial development of <strong>SaaS</strong> product features with React",
        "Participated in the <strong>frontend migration from React to Vue</strong>",
        "Maintained <strong>feature parity</strong> throughout the stack transition",
        "Worked with the company's own internal frameworks (<strong>Devix</strong> and <strong>Nuxe</strong>) alongside React and Vue",
      ],
      stack: {
        core: ["React", "Vue"],
        styling: ["Tailwind CSS"],
        ui: [],
        tooling: ["Devix", "Nuxe"],
      },
      stackPills: ["React", "Vue", "Tailwind CSS", "Devix", "Nuxe"],
      screens: ["Main dashboard", "Product view", "Vue-migrated interface", "Mobile view"],
      screenshots: {
        desktop: [
          { label: "Dashboard", src: "/produp/produp-dashboard.png", width: 1920, height: 1344 },
          { label: "Inventory", src: "/produp/produp-inventario.png", width: 1920, height: 2094 },
        ],
      },
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 4,
      featured: false,
      title: "Powip",
      category: "SaaS · ERP",
      type: "saas",
      year: "2025",
      status: "live",
      tagline: "SaaS e-commerce ERP platform built from scratch",
      desc: "A SaaS e-commerce ERP platform built from scratch to replace a previous solution that couldn't handle the user and data load. Active participation in UX/UI design and in a scalable, modular frontend architecture, with REST API integration and optimized data management via React Query.",
      challenge:
        "The previous solution couldn't handle the business's user and data load. The frontend needed a re-architecture focused on scalability, performance, and a good experience within a small team.",
      metrics: [
        { val: "React Query", lbl: "Caching" },
        { val: "REST", lbl: "APIs" },
        { val: "Modular", lbl: "Architecture" },
        { val: "Agile", lbl: "Small team" },
      ],
      keypoints: [
        "<strong>SaaS ERP</strong> platform built from scratch, replacing a limited previous solution",
        "Active participation in <strong>UX/UI design</strong> and architecture decisions",
        "<strong>REST API</strong> integration with smart caching via React Query",
        "Collaborative work in a small team under <strong>agile methodologies</strong>",
      ],
      stack: {
        core: ["Next.js", "React"],
        styling: ["Tailwind CSS"],
        ui: ["React Query", "Axios"],
        tooling: ["Context API"],
      },
      stackPills: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "React Query",
        "Axios",
        "Context API",
      ],
      screens: [
        "Main dashboard",
        "Product management",
        "Orders panel",
        "Mobile view",
      ],
      screenshots: {
        desktop: [
          { label: "Home", src: "/powip/powip-home.png", width: 1920, height: 7275 },
        ],
      },
      liveUrl: "https://www.powip.lat/",
      githubUrl: null,
    },
  ],
};

// ─── EDUCATION ───
export interface EducationItem {
  institution: string;
  program: string;
  year: string;
}

export const dataEducation: Record<"es" | "en", EducationItem[]> = {
  es: [
    {
      institution: "Henry Bootcamp",
      program: "Full Stack Web Developer",
      year: "2024",
    },
    {
      institution: "Codecademy",
      program: "HTML, CSS & JavaScript",
      year: "2023",
    },
  ],
  en: [
    {
      institution: "Henry Bootcamp",
      program: "Full Stack Web Developer",
      year: "2024",
    },
    {
      institution: "Codecademy",
      program: "HTML, CSS & JavaScript",
      year: "2023",
    },
  ],
};

// ─── SKILLS ───
export interface SkillGroup {
  tags: { label: string; highlight?: boolean }[];
}

export const dataSkillGroups: Record<"g1" | "g2" | "g3" | "g4", SkillGroup> = {
  g1: {
    tags: [
      { label: "React", highlight: true },
      { label: "Next.js", highlight: true },
      { label: "TypeScript", highlight: true },
      { label: "React Query", highlight: true },
      { label: "Redux" },
      { label: "Node.js" },
      { label: "Express.js" },
    ],
  },
  g2: {
    tags: [
      { label: "Tailwind CSS", highlight: true },
      { label: "shadcn/ui", highlight: true },
      { label: "CSS3", highlight: true },
      { label: "HTML5" },
      { label: "Bootstrap" },
      { label: "Figma" },
      { label: "Responsive Design" },
    ],
  },
  g3: {
    tags: [
      { label: "SEO", highlight: true },
      { label: "Accesibilidad (WCAG/ARIA)", highlight: true },
      { label: "Core Web Vitals" },
      { label: "Lighthouse" },
      { label: "Code splitting" },
      { label: "Lazy loading" },
      { label: "Image Optimization" },
    ],
  },
  g4: {
    tags: [
      { label: "Git", highlight: true },
      { label: "Turborepo", highlight: true },
      { label: "Server Actions", highlight: true },
      { label: "GitHub" },
      { label: "Vite" },
      { label: "Webpack" },
      { label: "npm" },
      { label: "Vercel" },
    ],
  },
};

export const dataLogoCloud = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Turborepo",
  "GraphQL",
  "Figma",
  "Vercel",
];

// ─── TESTIMONIALS (placeholder — replace with real references) ───
export interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export const dataTestimonials: Record<"es" | "en", Testimonial[]> = {
  es: [
    {
      text: "Mauricio tomó un diseño ya definido y lo implementó con muchísimo cuidado en el detalle — tipografías, espaciados, microinteracciones. Entregó exactamente lo que necesitábamos.",
      name: "J. Almeida",
      role: "Cliente · SOS Service",
    },
    {
      text: "Se integró rápido a nuestro monorepo y a nuestro sistema de diseño existente. Comunicación clara y entregas prolijas de principio a fin.",
      name: "Equipo Freiguel",
      role: "Producto · Freiguel",
    },
    {
      text: "Rearmó el frontend de nuestro ERP con una arquitectura mucho más escalable que la anterior. Buen criterio técnico y buena comunicación con el equipo.",
      name: "Equipo Powip",
      role: "Producto · Powip",
    },
  ],
  en: [
    {
      text: "Mauricio took an already-defined design and implemented it with a lot of care for detail — typography, spacing, micro-interactions. He delivered exactly what we needed.",
      name: "J. Almeida",
      role: "Client · SOS Service",
    },
    {
      text: "He got up to speed quickly with our monorepo and existing design system. Clear communication and clean delivery from start to finish.",
      name: "Freiguel Team",
      role: "Product · Freiguel",
    },
    {
      text: "He rebuilt our ERP frontend with a far more scalable architecture than before. Good technical judgment and good communication with the team.",
      name: "Powip Team",
      role: "Product · Powip",
    },
  ],
};

// ─── PROCESS ("How I work") ───
export interface ProcessStep {
  title: string;
  desc: string;
}

export const dataProcess: Record<"es" | "en", ProcessStep[]> = {
  es: [
    {
      title: "Entender primero",
      desc: "Empiezo entendiendo el objetivo del producto y el problema real — no solo el ticket. Hago las preguntas que evitan retrabajo después.",
    },
    {
      title: "Comunicar temprano",
      desc: "Updates async claros y alertas apenas algo se ve raro. Sin sorpresas cerca del deadline.",
    },
    {
      title: "Entregar en partes",
      desc: "PRs chicos y revisables que suman valor de forma incremental, priorizando software funcionando sobre entregas grandes.",
    },
    {
      title: "Dejarlo mejor",
      desc: "Código documentado y componentes que el próximo dev puede reusar de verdad. Optimizo para el equipo, no solo para la tarea.",
    },
  ],
  en: [
    {
      title: "Understand first",
      desc: "I start by understanding the product goal and the real problem — not just the ticket. I ask the questions that prevent rework later.",
    },
    {
      title: "Communicate early",
      desc: "Clear async updates and flags raised the moment something looks off. No surprises near the deadline.",
    },
    {
      title: "Ship in slices",
      desc: "Small, reviewable PRs that add value incrementally, favoring working software over big releases.",
    },
    {
      title: "Leave it better",
      desc: "Documented code and components the next dev can actually reuse. I optimize for the team, not just the task.",
    },
  ],
};

// ─── FAQ ───
export interface FaqItem {
  q: string;
  a: string;
}

export const dataFAQ: Record<"es" | "en", FaqItem[]> = {
  es: [
    {
      q: "¿Qué roles estás buscando?",
      a: "Roles de Frontend Developer, remotos o freelance, en empresas de producto, startups o agencias con buena cultura de ingeniería. Abierto tanto a empleo full-time como a proyectos de largo plazo.",
    },
    {
      q: "¿Cómo manejás husos horarios desde Argentina?",
      a: "Argentina (GMT-3) tiene overlap casi completo con la costa este de EE.UU. y varias horas laborales con la costa oeste. Para equipos de Europa, mis mañanas coinciden con sus tardes. Trabajo con equipos remotos desde hace años — la comunicación async es mi default.",
    },
    {
      q: "¿Cuándo podés empezar?",
      a: "Depende del proyecto y del compromiso actual — escribime y lo conversamos según tus tiempos.",
    },
    {
      q: "¿Puedo ver tu código?",
      a: "Sí — mi GitHub es público y podés ver ahí cómo estructuro, tipo y documento el código. También estoy abierto a una prueba técnica o sesión de pairing como parte de tu proceso.",
    },
    {
      q: "¿Cómo preferís que te contacten?",
      a: "Email es lo mejor, o LinkedIn. Si podés incluir detalles del rol y el rango salarial, me ayuda a responder rápido y con una respuesta útil.",
    },
  ],
  en: [
    {
      q: "What roles are you looking for?",
      a: "Frontend Developer roles, remote or freelance, at product companies, startups, or agencies with a strong engineering culture. Open to both full-time employment and long-term project work.",
    },
    {
      q: "How do you handle timezones from Argentina?",
      a: "Argentina (GMT-3) has near-complete overlap with the US East Coast and several working hours with the West Coast. For European teams, my mornings match your afternoons. I've worked with remote teams for years — async communication is my default.",
    },
    {
      q: "When can you start?",
      a: "Depends on the project and current commitments — reach out and we can figure out timing together.",
    },
    {
      q: "Can I see your code?",
      a: "Yes — my GitHub is public and you can see how I structure, type, and document code there. I'm also open to a technical trial task or a live pairing session as part of your process.",
    },
    {
      q: "How do you prefer to be contacted?",
      a: "Email works best, or LinkedIn. If you can include role details and a salary range, it helps me give you a fast, useful answer.",
    },
  ],
};

// ─── RECRUITER SNAPSHOT ───
export const recruiterCoreStack = "React · Next.js · TypeScript · Tailwind CSS";

// ─── FEATURES SHIPPED (placeholder — reemplazar con datos reales) ───
export interface FeatureItem {
  id: number;
  company: string;
  role: string;
  period: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const dataFeatures: Record<"es" | "en", FeatureItem[]> = {
  es: [
    {
      id: 1,
      company: "Powip",
      role: "Frontend Developer",
      period: "2025",
      category: "Dashboard",
      tagline: "KPIs de ventas y stock actualizados en vivo",
      description:
        "Diseñé y construí el dashboard principal del ERP: un panel con los KPIs de ventas y stock del negocio actualizados en vivo, con gráficos por período y filtros que el equipo de operaciones usa a diario para tomar decisiones.",
      highlights: [
        "Gráficos y tarjetas de KPI con <strong>actualización en tiempo real</strong> vía WebSockets",
        "Filtros por rango de fechas y por depósito, con estado persistido en la URL",
        "Optimizado para cargar rápido incluso con <strong>grandes volúmenes de datos</strong>",
      ],
      tags: ["React", "React Query", "Recharts", "WebSockets"],
    },
    {
      id: 2,
      company: "Powip",
      role: "Frontend Developer",
      period: "2025",
      category: "Inventario",
      tagline: "Gestión de stock entre múltiples depósitos",
      description:
        "Módulo para administrar inventario entre múltiples almacenes: transferencias entre depósitos, alertas de quiebre de stock y búsqueda avanzada por SKU, categoría o proveedor.",
      highlights: [
        "Transferencias de stock entre depósitos con <strong>validación en tiempo real</strong>",
        "Alertas automáticas de <strong>quiebre de stock</strong> por depósito",
        "Búsqueda avanzada con filtros combinables (SKU, categoría, proveedor)",
      ],
      tags: ["Next.js", "TypeScript", "React Query"],
    },
    {
      id: 3,
      company: "Powip",
      role: "Frontend Developer",
      period: "2025",
      category: "Checkout",
      tagline: "Flujo de checkout con facturación integrada",
      description:
        "Flujo de checkout del ERP con validación en tiempo real de los datos de la orden, cálculo automático de impuestos según jurisdicción y generación del comprobante de facturación.",
      highlights: [
        "Validación de formularios en tiempo real con <strong>React Hook Form + Zod</strong>",
        "Cálculo automático de <strong>impuestos por jurisdicción</strong>",
        "Generación de comprobantes de facturación al confirmar la orden",
      ],
      tags: ["React Hook Form", "Zod", "Axios"],
    },
    {
      id: 4,
      company: "Powip",
      role: "Frontend Developer",
      period: "2025",
      category: "Permisos",
      tagline: "Control de acceso granular por rol",
      description:
        "Sistema de roles y permisos para las distintas áreas del ERP, con vistas y acciones condicionadas según el rol del usuario logueado, evitando exponer funciones que no le corresponden.",
      highlights: [
        "Control de acceso <strong>granular por rol</strong> a nivel de vista y de acción",
        "Componentes condicionados por permiso, reutilizables en todo el ERP",
        "Pensado para escalar a nuevos roles sin tocar la lógica existente",
      ],
      tags: ["Context API", "TypeScript"],
    },
    {
      id: 5,
      company: "Devlusoft",
      role: "Frontend Developer",
      period: "2026 — Presente",
      category: "Portal",
      tagline: "Portal de clientes white-label",
      description:
        "Portal de clientes configurable por marca: cada cliente ve su propia identidad visual (logo, colores, tipografía) sobre la misma base de código, sin necesidad de mantener un fork por cliente.",
      highlights: [
        "Theming <strong>white-label</strong> vía design tokens, sin forks de código",
        "Una sola base de código sirviendo a <strong>múltiples marcas</strong>",
        "Layout responsive pensado mobile-first",
      ],
      tags: ["Next.js", "Tailwind CSS", "Design Tokens"],
    },
    {
      id: 6,
      company: "Devlusoft",
      role: "Frontend Developer",
      period: "2026 — Presente",
      category: "Pagos",
      tagline: "Integraciones con pasarelas de pago",
      description:
        "Conexión del frontend con múltiples proveedores de pago, manejando los distintos estados de una transacción (pendiente, aprobada, rechazada) y la lógica de reintento ante fallos.",
      highlights: [
        "Integración con <strong>múltiples pasarelas de pago</strong> detrás de una interfaz común",
        "Manejo de estados de transacción y <strong>reintentos automáticos</strong>",
        "Feedback claro al usuario en cada paso del pago",
      ],
      tags: ["TypeScript", "REST APIs"],
    },
    {
      id: 7,
      company: "Devlusoft",
      role: "Frontend Developer",
      period: "2026 — Presente",
      category: "Notificaciones",
      tagline: "Centro de notificaciones en tiempo real",
      description:
        "Sistema de notificaciones push dentro de la app, con un centro de notificaciones centralizado y preferencias configurables por usuario para qué tipo de eventos quiere recibir.",
      highlights: [
        "Notificaciones <strong>en tiempo real</strong> dentro de la app",
        "Centro de notificaciones con historial y estado leído/no leído",
        "<strong>Preferencias por usuario</strong> sobre qué eventos recibir",
      ],
      tags: ["WebSockets", "React"],
    },
    {
      id: 8,
      company: "Devlusoft",
      role: "Frontend Developer",
      period: "2026 — Presente",
      category: "Admin",
      tagline: "Panel de administración modular",
      description:
        "Panel interno armado con una librería de componentes reutilizables propia, pensado para que el equipo pueda agregar nuevas features al panel sin duplicar código ni romper consistencia visual.",
      highlights: [
        "Librería de <strong>componentes reutilizables</strong> propia del panel interno",
        "Nuevas features se agregan <strong>sin duplicar código</strong>",
        "Estructurado como monorepo con Turborepo para escalar entre equipos",
      ],
      tags: ["Next.js", "Turborepo", "shadcn/ui"],
    },
  ],
  en: [
    {
      id: 1,
      company: "Powip",
      role: "Frontend Developer",
      period: "2025",
      category: "Dashboard",
      tagline: "Live sales and stock KPIs",
      description:
        "Designed and built the ERP's main dashboard: a panel with the business's sales and stock KPIs updated live, with per-period charts and filters the operations team uses daily to make decisions.",
      highlights: [
        "KPI cards and charts with <strong>real-time updates</strong> via WebSockets",
        "Date-range and warehouse filters, with state persisted in the URL",
        "Optimized to stay fast even with <strong>large data volumes</strong>",
      ],
      tags: ["React", "React Query", "Recharts", "WebSockets"],
    },
    {
      id: 2,
      company: "Powip",
      role: "Frontend Developer",
      period: "2025",
      category: "Inventory",
      tagline: "Stock management across multiple warehouses",
      description:
        "A module to manage inventory across multiple warehouses: transfers between locations, low-stock alerts, and advanced search by SKU, category, or supplier.",
      highlights: [
        "Stock transfers between warehouses with <strong>real-time validation</strong>",
        "Automatic <strong>low-stock alerts</strong> per warehouse",
        "Advanced search with combinable filters (SKU, category, supplier)",
      ],
      tags: ["Next.js", "TypeScript", "React Query"],
    },
    {
      id: 3,
      company: "Powip",
      role: "Frontend Developer",
      period: "2025",
      category: "Checkout",
      tagline: "Checkout flow with built-in billing",
      description:
        "The ERP's checkout flow with real-time order validation, automatic tax calculation by jurisdiction, and invoice generation.",
      highlights: [
        "Real-time form validation with <strong>React Hook Form + Zod</strong>",
        "Automatic <strong>tax calculation by jurisdiction</strong>",
        "Invoice generation on order confirmation",
      ],
      tags: ["React Hook Form", "Zod", "Axios"],
    },
    {
      id: 4,
      company: "Powip",
      role: "Frontend Developer",
      period: "2025",
      category: "Permissions",
      tagline: "Granular role-based access control",
      description:
        "A roles and permissions system for the ERP's different areas, with views and actions conditioned by the logged-in user's role, avoiding exposing functions they shouldn't have access to.",
      highlights: [
        "<strong>Granular role-based</strong> access control at view and action level",
        "Permission-conditioned components, reused across the whole ERP",
        "Built to scale to new roles without touching existing logic",
      ],
      tags: ["Context API", "TypeScript"],
    },
    {
      id: 5,
      company: "Devlusoft",
      role: "Frontend Developer",
      period: "2026 — Present",
      category: "Portal",
      tagline: "White-label client portal",
      description:
        "A brand-configurable client portal: each client sees their own visual identity (logo, colors, typography) on top of the same codebase, with no need to maintain a fork per client.",
      highlights: [
        "<strong>White-label</strong> theming via design tokens, no code forks",
        "One codebase serving <strong>multiple brands</strong>",
        "Mobile-first responsive layout",
      ],
      tags: ["Next.js", "Tailwind CSS", "Design Tokens"],
    },
    {
      id: 6,
      company: "Devlusoft",
      role: "Frontend Developer",
      period: "2026 — Present",
      category: "Payments",
      tagline: "Payment gateway integrations",
      description:
        "Connected the frontend to multiple payment providers, handling the different transaction states (pending, approved, rejected) and retry logic on failure.",
      highlights: [
        "Integration with <strong>multiple payment gateways</strong> behind a common interface",
        "Transaction state handling and <strong>automatic retries</strong>",
        "Clear user feedback at every step of the payment",
      ],
      tags: ["TypeScript", "REST APIs"],
    },
    {
      id: 7,
      company: "Devlusoft",
      role: "Frontend Developer",
      period: "2026 — Present",
      category: "Notifications",
      tagline: "Real-time notification center",
      description:
        "An in-app push notification system with a centralized notification center and per-user preferences for which kind of events they want to receive.",
      highlights: [
        "<strong>Real-time</strong> in-app notifications",
        "Notification center with history and read/unread state",
        "<strong>Per-user preferences</strong> for which events to receive",
      ],
      tags: ["WebSockets", "React"],
    },
    {
      id: 8,
      company: "Devlusoft",
      role: "Frontend Developer",
      period: "2026 — Present",
      category: "Admin",
      tagline: "Modular admin panel",
      description:
        "An internal panel built with a proprietary reusable component library, designed so the team can add new features to the panel without duplicating code or breaking visual consistency.",
      highlights: [
        "Proprietary <strong>reusable component library</strong> for the internal panel",
        "New features ship <strong>without duplicating code</strong>",
        "Structured as a Turborepo monorepo to scale across teams",
      ],
      tags: ["Next.js", "Turborepo", "shadcn/ui"],
    },
  ],
};

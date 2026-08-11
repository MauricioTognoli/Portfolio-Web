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
          {
            label: "Inicio",
            src: "/freiguel/freiguel-home.png",
            width: 1920,
            height: 4503,
          },
          {
            label: "Productos",
            src: "/freiguel/freiguel-products.png",
            width: 1920,
            height: 5451,
          },
          {
            label: "Contacto",
            src: "/freiguel/freiguel-contact.png",
            width: 1920,
            height: 1843,
          },
        ],
        mobile: [
          {
            label: "Sobre nosotros (mobile)",
            src: "/freiguel/freiguel-about-mobile.png",
            width: 378,
            height: 4992,
          },
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
          {
            label: "Dashboard",
            src: "/produp/produp-dashboard.png",
            width: 1920,
            height: 1344,
          },
          {
            label: "Inventario",
            src: "/produp/produp-inventario.png",
            width: 1920,
            height: 2094,
          },
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
          {
            label: "Inicio",
            src: "/powip/powip-home.png",
            width: 1920,
            height: 7275,
          },
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
      screens: [
        "Main dashboard",
        "Product view",
        "Vue-migrated interface",
        "Mobile view",
      ],
      screenshots: {
        desktop: [
          {
            label: "Dashboard",
            src: "/produp/produp-dashboard.png",
            width: 1920,
            height: 1344,
          },
          {
            label: "Inventory",
            src: "/produp/produp-inventario.png",
            width: 1920,
            height: 2094,
          },
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
          {
            label: "Home",
            src: "/powip/powip-home.png",
            width: 1920,
            height: 7275,
          },
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

// ─── FEATURES & LIVE DEMOS ───
export interface FeatureImpact {
  val: string;
  lbl: string;
}

export interface FeatureBlock {
  id: number;
  flip: boolean;
  eyebrow: string;
  title: string;
  problem: string;
  solution: string;
  impact: FeatureImpact[];
  stack: string[];
}

/** Real product screenshot per feature block id — served from /public/features/. Blocks without an entry fall back to the logo. */
export interface FeatureImage {
  src: string;
  width: number;
  height: number;
}

export const featureImages: Partial<Record<number, FeatureImage>> = {
  1: { src: "/features/niveles-de-precios.png", width: 2048, height: 1776 },
  2: { src: "/features/catalogos-produp.png", width: 2304, height: 1776 },
  3: { src: "/features/facturacion-sunat.png", width: 2368, height: 2212 },
  5: { src: "/features/ventas-powip.png", width: 2368, height: 2534 },
};

export const dataFeatureBlocks: Record<"es" | "en", FeatureBlock[]> = {
  es: [
    {
      id: 1,
      flip: true,
      eyebrow: "Migración & Rediseño de Producto",
      title: "Niveles de Precio",
      problem:
        "El panel de niveles de precio seguía en el stack legacy (React), con una tabla plana, sin accesibilidad real y sin soportar el modelo de precios que el negocio necesitaba (modificador %, cantidad mínima, activación) antes de que el backend terminara de reescribirse.",
      solution:
        "Migré la feature completa a Vue/Nuxt respetando el sistema de diseño ya vigente en la nueva app, la rediseñé como tarjetas de niveles al estilo pricing table con CRUD real contra la API, sumé estados de carga y accesibilidad completa por teclado/lector de pantalla.",
      impact: [
        { val: "3", lbl: "Bugs de producción resueltos en el camino" },
        { val: "100%", lbl: "Flujo operable por teclado y lector de pantalla" },
        {
          val: "0",
          lbl: "Downtime — migración sin interrumpir a usuarios activos",
        },
        { val: "5", lbl: "Componentes Vue nuevos y reutilizables" },
      ],
      stack: ["Vue 3", "Nuxt", "TypeScript", "Tailwind CSS", "Go", "REST API"],
    },
    {
      id: 2,
      flip: false,
      eyebrow: "Migración de producto",
      title:
        "Catálogos: de un stack React heredado a un nuevo sistema de diseño en Vue",
      problem:
        "La sección de Catálogos del panel de administración vivía en una app React legacy, desconectada del nuevo sistema de diseño de la plataforma. Cada nueva feature del dashboard tenía que reconstruirse dos veces si quería llegar a ambos mundos, y el equipo necesitaba migrar la sección completa —listado, alta, edición y gestión de productos por catálogo— sin romper el flujo de los usuarios que ya la usaban a diario.",
      solution:
        "Rediseñé e implementé la feature completa sobre el nuevo stack (Vue 3 + TypeScript, framework interno 'Nuxe'), respetando al pixel los patrones ya validados del sistema de diseño: tablas, diálogos nativos, toasts y estados de carga. Construí capa por capa: tipos compartidos, rutas de servidor que actúan de proxy autenticado hacia la API en Go, composables para listar/crear/editar catálogos y gestionar sus productos, y los componentes de UI (tabla, modal de alta, selector de productos con búsqueda, confirmación de borrado). En el camino resolví dos bugs sutiles pero bloqueantes: un conflicto de cascada CSS entre Tailwind y el elemento nativo <dialog> que dejaba el modal siempre visible e imposible de cerrar, y un límite de paginación de la API que hacía fallar silenciosamente la búsqueda de productos.",
      impact: [
        { val: "7", lbl: "endpoints de API migrados" },
        { val: "5", lbl: "componentes Vue nuevos" },
        { val: "2", lbl: "bugs de producción evitados" },
      ],
      stack: ["Vue 3", "TypeScript", "Tailwind CSS", "Nuxe", "Go", "Reka UI"],
    },
    {
      id: 3,
      flip: false,
      eyebrow: "Cumplimiento fiscal · SaaS B2B",
      title: "Facturación Electrónica SUNAT",
      problem:
        "Los negocios que vendían por WhatsApp e Instagram no tenían forma de emitir boletas y facturas electrónicas válidas ante SUNAT desde la misma plataforma donde gestionaban sus pedidos. Tenían que exportar datos a mano y usar un sistema de facturación aparte, perdiendo tiempo y generando errores en cada cierre contable.",
      solution:
        "Diseñé y construí un módulo completo de Facturación Electrónica dentro del dashboard de Powip: emisión real de boletas y facturas (con edición de ítems, verificación de RUC/DNI y emisión en lote), guías de remisión electrónica, notas de crédito/débito, gestión de certificado digital y series/correlativos, más reportes exportables a Excel, CSV y PDF listos para el contador — todo integrado con la pasarela SUNAT vía microservicios.",
      impact: [
        { val: "7", lbl: "módulos integrados en un solo panel" },
        {
          val: "3",
          lbl: "tipos de documentos electrónicos (boleta, factura, notas)",
        },
        {
          val: "100%",
          lbl: "trazabilidad del estado ante SUNAT en tiempo real",
        },
      ],
      stack: [
        "Next.js 15",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS 4",
        "Radix UI / shadcn",
        "Microservicios REST",
      ],
    },
    {
      id: 4,
      flip: false,
      eyebrow: "Panel operativo · Logística",
      title: "Centro de Envíos",
      problem:
        "El equipo de almacén no tenía un solo lugar donde ver qué despachar, qué guías fallaron o qué pedidos llevaban demasiado tiempo varados en agencia. La operación dependía de cruzar manualmente la tabla de pedidos, el panel del courier y WhatsApp, lo que generaba despachos duplicados, errores de estado y pedidos olvidados.",
      solution:
        "Diseñé y construí un panel operativo en tiempo real conectado en vivo a los microservicios de ventas y courier: una 'Bandeja de Atención' con accesos directos a lo urgente (por despachar, fallidos, por vencer), un escáner de código de barras/QR con tres modos de entrada (lectora física, teclado y cámara) para despachar y confirmar entregas, seguimiento en vivo por courier con exportación a Excel, y un modal de detalle con acciones logísticas (forzar sincronización, liberar de guía, cambiar courier). Todo con una vista mobile dedicada pensada para escanear desde el propio almacén.",
      impact: [
        { val: "6", lbl: "KPIs de acción rápida en un solo panel" },
        { val: "2", lbl: "microservicios integrados en tiempo real" },
        { val: "3", lbl: "modos de escaneo: lectora, teclado y cámara" },
        { val: "100%", lbl: "adaptado a mobile para uso en almacén" },
      ],
      stack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "TanStack Query",
        "Radix UI / shadcn/ui",
        "@zxing/browser",
        "Supabase SSR",
        "Axios",
      ],
    },
    {
      id: 5,
      flip: true,
      eyebrow: "UX/UI · Panel interno",
      title: "Ventas: de planilla plana a centro de control",
      problem:
        "La página de gestión de ventas era un componente de más de 2000 líneas con una tabla de 20+ columnas que obligaba a un scroll horizontal interminable incluso para ver datos secundarios. No tenía identidad visual propia, sin KPIs de contexto, colores de botón hardcodeados y un selector de estado nativo del navegador que además quedaba tapado por las columnas fijas en pantallas de laptop.",
      solution:
        "Rediseño integral del módulo: header con CTA en gradiente violeta que retoma la identidad ya validada en Centro de Envíos, una fila de KPIs (pendientes, anuladas, por cobrar, adelantado) filtrable por rango de fechas, y una tabla reestructurada que esconde los campos secundarios (ubicación, tracking, ID externo) detrás de una fila expandible por pedido. El estado de cada venta pasó a ser una píldora de color con su propio dropdown, anclada de forma inteligente para que nunca quede oculta, con tamaño responsive según el ancho de pantalla.",
      impact: [
        { val: "22 → 13", lbl: "Columnas visibles en la tabla" },
        { val: "4", lbl: "KPIs en vivo con filtro de fechas" },
        { val: "0", lbl: "Regresiones funcionales en producción" },
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI / shadcn",
        "date-fns",
      ],
    },
  ],
  en: [
    {
      id: 1,
      flip: true,
      eyebrow: "Product Migration & Redesign",
      title: "Pricing Tiers",
      problem:
        "The pricing tiers panel was still running on the legacy stack (React), with a flat table, limited accessibility, and no support for the pricing model the business needed (percentage modifier, minimum quantity, activation) before the backend rewrite was complete.",
      solution:
        "I migrated the entire feature to Vue/Nuxt while following the existing design system in the new app. I redesigned it as pricing-tier cards with real CRUD operations connected to the API, added loading states, and implemented full keyboard and screen reader accessibility.",
      impact: [
        { val: "3", lbl: "Production bugs resolved along the way" },
        { val: "100%", lbl: "Keyboard and screen reader operable" },
        {
          val: "0",
          lbl: "Downtime — migration completed without interrupting active users",
        },
        { val: "5", lbl: "New reusable Vue components" },
      ],
      stack: ["Vue 3", "Nuxt", "TypeScript", "Tailwind CSS", "Go", "REST API"],
    },
    {
      id: 2,
      flip: false,
      eyebrow: "Product Migration",
      title:
        "Catalogs: moving a legacy React section into a new Vue design system",
      problem:
        "The admin dashboard's Catalogs section lived in a legacy React app, disconnected from the platform's newer design system. Every new dashboard feature had to be built twice to reach both worlds, and the team needed to migrate the section end-to-end — listing, creation, editing, and per-catalog product management — without breaking the flow for users already relying on it daily.",
      solution:
        "I redesigned and rebuilt the full feature on the new stack (Vue 3 + TypeScript, in-house 'Nuxe' framework), matching the already-validated design system patterns pixel for pixel: tables, native dialogs, toasts, and loading states. I built it layer by layer: shared types, authenticated server routes proxying to the Go API, composables for listing/creating/editing catalogs and managing their products, and the UI components themselves (table, creation modal, searchable product picker, delete confirmation). Along the way I tracked down and fixed two subtle but blocking bugs: a CSS cascade conflict between Tailwind and the native <dialog> element that left the modal permanently stuck open, and an API pagination limit that was silently breaking product search.",
      impact: [
        { val: "7", lbl: "API endpoints migrated" },
        { val: "5", lbl: "new Vue components" },
        { val: "2", lbl: "production bugs caught pre-launch" },
      ],
      stack: ["Vue 3", "TypeScript", "Tailwind CSS", "Nuxe", "Go", "Reka UI"],
    },
    {
      id: 3,
      flip: false,
      eyebrow: "Tax Compliance · B2B SaaS",
      title: "SUNAT Electronic Invoicing",
      problem:
        "Merchants selling through WhatsApp and Instagram had no way to issue SUNAT-valid electronic receipts and invoices from the same platform where they managed their orders. They had to export data by hand into a separate invoicing system, losing time and introducing errors at every accounting close.",
      solution:
        "Designed and built a full Electronic Invoicing module inside the Powip dashboard: real receipt/invoice issuance (with editable line items, RUC/DNI verification, and bulk emission), electronic dispatch guides, credit/debit notes, digital certificate management, and series/correlative tracking — plus Excel, CSV, and PDF reports ready for the accountant, all wired to the SUNAT gateway through backend microservices.",
      impact: [
        { val: "7", lbl: "integrated modules in a single panel" },
        {
          val: "3",
          lbl: "electronic document types (receipt, invoice, notes)",
        },
        { val: "100%", lbl: "real-time SUNAT status traceability" },
      ],
      stack: [
        "Next.js 15",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS 4",
        "Radix UI / shadcn",
        "REST microservices",
      ],
    },
    {
      id: 4,
      flip: false,
      eyebrow: "Operations Panel · Logistics",
      title: "Shipping Center",
      problem:
        "The warehouse team had no single place to see what needed dispatching, which shipping labels had failed, or which orders had been sitting at the courier agency too long. The workflow relied on manually cross-referencing the orders table, the courier's own panel, and WhatsApp, which led to duplicate dispatches, status errors, and forgotten orders.",
      solution:
        "Designed and built a real-time operations dashboard wired directly into the sales and courier microservices: an 'Attention Tray' with one-click access to what's urgent (ready to dispatch, failed deliveries, aging in agency), a barcode/QR scanner with three input modes (handheld reader, keyboard, and camera) for dispatching and confirming deliveries, live per-courier tracking with Excel export, and an order detail modal with logistics actions (force sync, release from waybill, change courier). Includes a dedicated mobile view built for scanning directly from the warehouse floor.",
      impact: [
        { val: "6", lbl: "quick-action KPIs in a single panel" },
        { val: "2", lbl: "backend microservices integrated in real time" },
        { val: "3", lbl: "scan modes: reader, keyboard, and camera" },
        { val: "100%", lbl: "mobile-responsive for warehouse use" },
      ],
      stack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "TanStack Query",
        "Radix UI / shadcn/ui",
        "@zxing/browser",
        "Supabase SSR",
        "Axios",
      ],
    },
    {
      id: 5,
      flip: true,
      eyebrow: "UX/UI · Internal tooling",
      title: "Sales: from flat spreadsheet to control center",
      problem:
        "The sales management page was a 2,000+ line component with a 20+ column table that forced endless horizontal scrolling just to see secondary data. It had no visual identity of its own, no context-giving KPIs, hardcoded button colors, and a native browser status dropdown that could get hidden behind pinned columns on laptop screens.",
      solution:
        "A full redesign of the module: a header with a violet-gradient CTA that carries over the identity already validated in the Shipping Center, a KPI row (pending, cancelled, outstanding, advanced) filterable by date range, and a restructured table that tucks secondary fields (location, tracking, external ID) behind a per-row expandable panel. Order status became a color-coded pill with its own dropdown, smartly pinned so it's never hidden, with responsive sizing across screen widths.",
      impact: [
        { val: "22 → 13", lbl: "Visible table columns" },
        { val: "4", lbl: "Live KPIs with date filtering" },
        { val: "0", lbl: "Functional regressions shipped" },
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI / shadcn",
        "date-fns",
      ],
    },
  ],
};

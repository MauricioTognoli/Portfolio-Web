import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  GithubIcon,
  Mail,
  FileCode,
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
    src: "https://drive.google.com/file/d/1EWv6dm2YTokw1v7vtQc0Qf0yAIHfdd8v/view?usp=drivesdk",
    description: "Currículum",
  },
  {
    id: 5,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "mailto:tognolimauricio@gmail.com",
    description: "Correo",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "Sobre mí",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Servicios",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Proyectos",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/proyects",
  },
  {
    id: 5,
    title: "Tecnologías",
    icon: <FileCode size={25} color="#fff" strokeWidth={1} />,
    link: "/technologies",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "Powip",
    description:
      "Desarrollo desde cero de una plataforma ERP SaaS de Ecommerce para reemplazar la solución anterior que no soportaba la alta carga de usuarios y datos. Participación activa en el diseño de UX/UI y en la implementación de una arquitectura frontend escalable y modular. Integración con REST APIs y gestión de datos optimizada mediante React Query y cacheado inteligente, mejorando los tiempos de carga y la experiencia de usuario. Trabajo colaborativo en un equipo pequeño bajo metodologías ágiles, aportando en decisiones técnicas y de diseño para garantizar rendimiento, escalabilidad y usabilidad.",
    technologies:
      "Next.js, React, Tailwind CSS, React Query, Axios, Context API",
    date: "Actualidad",
  },
  {
    id: 2,
    title: "UI Developer",
    subtitle: "Freiguel (Remoto – ZimaBlue)",
    description:
      "Desarrollo de interfaces accesibles y mobile-first con Next.js 14 y Tailwind CSS. Implementación del sistema de navegación y páginas públicas, trabajando directamente con el equipo de diseño para asegurar consistencia visual y accesibilidad. Optimización del rendimiento de carga inicial y mejora en la navegación mediante buenas prácticas y una arquitectura moderna basada en Turborepo.",
    technologies: "Next.js 14, Tailwind CSS, TypeScript, Turborepo",
    date: "2025",
  },
  {
    id: 3,
    title: "Desarrollador Frontend",
    subtitle: "Proyectos Personales",
    description:
      "He trabajado en múltiples proyectos personales utilizando Next.js, React y Tailwind CSS, enfocándome en la creación de interfaces intuitivas y funcionales con una experiencia de usuario optimizada.",
    date: "2025",
  },
  {
    id: 4,
    title: "Formación en Desarrollo Fullstack",
    subtitle: "Programa de Especialización",
    description:
      "En 2024, completé mi formación como desarrollador fullstack, adquiriendo experiencia en frontend y backend con tecnologías modernas. Desarrollé aplicaciones prácticas, enfocándome en buenas prácticas y rendimiento.",
    date: "2024",
  },
  {
    id: 5,
    title: "Aprendizaje Autodidacta",
    subtitle: "Desarrollo Web",
    description:
      "En 2022, inicié mi camino en el desarrollo web de manera autodidacta, aprendiendo HTML, CSS, JavaScript y React. Experimenté con proyectos personales para reforzar mis conocimientos.",
    date: "2022",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 4,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 5,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 6,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 20,
    text: "Tecnologias utilizadas",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const serviceData = [
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
];

export const dataProyects = [
  {
    id: 1,
    title: "Freiguel",
    image: "/freiguel.png",
    urlGithub: "https://github.com/mauriciotognoli",
    urlDemo: "https://www.freiguel.pt/pt",
    technologies: ["Next.js", "TypeScript", "Tailwind", "GraphQL", "Turborepo"],
    description:
      "Desarrollé interfaces web accesibles y mobile-first utilizando Next.js 14, Tailwind CSS y TypeScript. Implementé el sistema de navegación y las páginas públicas de la plataforma, colaborando estrechamente con el equipo de diseño para asegurar consistencia visual y una experiencia de usuario óptima. También optimicé el rendimiento de carga inicial y mejoré la navegación, aplicando buenas prácticas de desarrollo en un entorno basado en Turborepo.",
  },
  {
    id: 2,
    title: "NexoTv",
    image: "/nexo.jpg",
    urlGithub: "https://github.com/mauriciotognoli/nexotv",
    urlDemo: "https://nexotv.vercel.app",
    technologies: ["React", "Apollo", "Tailwind"],
    description:
      "Desarrollé una plataforma de streaming de películas y series utilizando Next.js, React y Tailwind CSS, enfocándome en una experiencia de usuario fluida y atractiva. Implementé funcionalidades como búsqueda global, filtrado por categorías, paginación y visualización dinámica de contenido. La arquitectura del frontend es modular y escalable, integrando datos desde un backend simulado con GraphQL, y optimizando la carga y renderizado de los componentes para garantizar rendimiento y accesibilidad.",
  },
];

export const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
    src: "https://es.react.dev/",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
    src: "https://nextjs.org/",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Language",
    src: "https://www.typescriptlang.org/",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
    src: "https://html5.org/",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
    src: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
    src: "https://nodejs.org/en",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "Frontend",
    src: "https://getbootstrap.com/",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tool",
    src: "https://git-scm.com/",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Language",
    src: "https://www.javascript.com/",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
    src: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    category: "Frontend",
    src: "https://redux.js.org/",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Cloud",
    src: "https://www.mongodb.com/es/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_mongodb_core-high-int_prosp-brand_gic-null_ww-tier1_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=22124314749&adgroup=173195490843&cq_cmp=22124314749&gad_source=1&gclid=CjwKCAiAn9a9BhBtEiwAbKg6fpC2K7EO42Vy1SPPESMj_IiC8xRd4Dm_iRuEy6EeR-7TpbKpNj7l5BoC2mkQAvD_BwE",
  },
  {
    name: "Express,js",
    logo: "https://icongr.am/devicon/express-original.svg?size=128&color=ffffff",
    category: "Backend",
    src: "https://expressjs.com/",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "Backend",
    src: "https://www.docker.com/",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Cloud",
    src: "https://www.postgresql.org/",
  },
  {
    name: "Webpack",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    category: "Tool",
    src: "https://webpack.js.org/",
  },
  {
    name: "GitHub",
    logo: "https://icongr.am/devicon/github-original.svg?size=128&color=ffffff",
    category: "Tool",
    src: "https://github.com/",
  },
  {
    name: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    category: "Tool",
    src: "https://es.vite.dev/",
  },
  {
    name: "npm",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    category: "Tool",
    src: "https://www.npmjs.com/",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "Tool",
    src: "https://www.figma.com/es-la/",
  },
];

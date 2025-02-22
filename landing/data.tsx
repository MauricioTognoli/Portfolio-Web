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
  TwitterIcon,
  GithubIcon,
  Mail,
  FileCode,
  FileUserIcon,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/mauricio-tognoli/",
  },
  {
    id: 2,
    logo: <TwitterIcon size={30} strokeWidth={1} />,
    src: "https://x.com/Mau_Tognoli",
  },
  {
    id: 3,
    logo: <GithubIcon size={30} strokeWidth={1} />,
    src: "https://github.com/MauricioTognoli",
  },
  {
    id: 4,
    logo: <FileUserIcon size={30} strokeWidth={1} />,
    src: "https://drive.google.com/file/d/1vgbIBhHtwvgJfLofMtTlsgnN-QSFbbWd/view?usp=drivesdk",
  },
  {
    id: 5,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "mailto:tognolimauricio@gmail.com",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Target",
    icon: <FileCode size={25} color="#fff" strokeWidth={1} />,
    link: "/technologies",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador Frontend",
    subtitle: "Proyectos Personales",
    description:
      "He trabajado en múltiples proyectos personales utilizando Next.js, React y Tailwind CSS, enfocándome en la creación de interfaces intuitivas y funcionales con una experiencia de usuario optimizada.",
    date: "Actualidad",
  },
  {
    id: 2,
    title: "Formación en Desarrollo Fullstack",
    subtitle: "Programa de Especialización",
    description:
      "En 2024, completé mi formación como desarrollador fullstack, adquiriendo experiencia en frontend y backend con tecnologías modernas. Desarrollé aplicaciones prácticas, enfocándome en buenas prácticas y rendimiento.",
    date: "2024",
  },
  {
    id: 3,
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
    endCounter: 3,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 4,
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

export const dataPortfolio = [
  {
    id: 1,
    title: "NexoTv",
    image: "/nexo.jpg",
    urlGithub: "https://github.com/MauricioTognoli/NexoTv.git",
    urlDemo: "https://nexo-tv.vercel.app/",
  },
  {
    id: 2,
    title: "WeatherWeb",
    image: "/weather-web.png",
    urlGithub: "https://github.com/MauricioTognoli/WeatherWeb.git",
    urlDemo: "https://weather-web-six-omega.vercel.app/",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
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
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Language",
    src: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Language",
    src: "https://www.javascript.com/",
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
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
    src: "https://nextjs.org/",
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

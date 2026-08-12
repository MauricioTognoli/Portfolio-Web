import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Header from "@/components/header";
import StickyCta from "@/components/StickyCta";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme";
import { LanguageProvider } from "@/lib/i18n";

import { Toaster } from "sonner";

import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://portfolio-mauriciotognoli.vercel.app";
const SITE_TITLE = "Mauricio Tognoli | Frontend Engineer · React & Next.js";
const SITE_DESCRIPTION =
  "Frontend Engineer con 4+ años construyendo interfaces web y plataformas SaaS con React, Next.js, TypeScript y Tailwind CSS. Disponible para roles remotos.";

export const metadata: Metadata = {
  title: { default: SITE_TITLE, template: "%s | Mauricio Tognoli" },
  description: SITE_DESCRIPTION,
  keywords: [
    "Mauricio Tognoli",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Desarrollador Frontend",
    "Desarrollador Web Remoto",
    "Portfolio Frontend",
    "SaaS Frontend Engineer",
  ],
  authors: [{ name: "Mauricio Tognoli", url: SITE_URL }],
  creator: "Mauricio Tognoli",
  publisher: "Mauricio Tognoli",
  category: "technology",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Mauricio Tognoli — Portfolio",
    locale: "es_AR",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/card-mauriciotognoli.png",
        width: 1200,
        height: 630,
        alt: "Mauricio Tognoli — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MauricioTognoli",
    creator: "@MauricioTognoli",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/card-mauriciotognoli.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-mt.png",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#F7F5F2" },
  ],
  colorScheme: "dark light",
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mauricio Tognoli",
  jobTitle: "Frontend Engineer",
  url: SITE_URL,
  image: `${SITE_URL}/logo-mt.png`,
  email: "mailto:tognolimauricio@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
  sameAs: [
    "https://github.com/MauricioTognoli",
    "https://www.linkedin.com/in/mauricio-tognoli/",
    "https://x.com/MauricioTognoli",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Frontend Development"],
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = window.localStorage.getItem('mt-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="fixed top-2 left-2 z-200 -translate-y-20 rounded-lg bg-mt-orange px-4 py-2 font-mt-display text-sm font-semibold text-black transition-transform duration-200 focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <ThemeProvider>
          <LanguageProvider>
            <MotionConfig reducedMotion="user">
              <Header />
              <div id="main-content">{children}</div>
              <StickyCta />
              <Footer />
              <Toaster position="top-center" richColors />
            </MotionConfig>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

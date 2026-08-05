import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Mauricio Tognoli | Frontend Developer",
  description:
    "Portfolio personal de Mauricio Tognoli, desarrollador frontend especializado en React, Next.js y Tailwind CSS.",
  keywords: [
    "Mauricio Tognoli",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Desarrollador Web",
    "Desarrollador Frontend",
    "React",
    "Portfolio Frontend",
    "Junior Developer",
  ],
  authors: [{ name: "Mauricio Tognoli" }],
  creator: "Mauricio Tognoli",
  publisher: "Mauricio Tognoli",
  metadataBase: new URL("https://portfolio-mauriciotognoli.vercel.app"),
  openGraph: {
    title: "Mauricio Tognoli | Frontend Developer",
    description:
      "Desarrollador frontend especializado en React, Next.js y Tailwind CSS. Mirá mis proyectos y experiencia.",
    url: "https://portfolio-mauriciotognoli.vercel.app",
    siteName: "Mauricio Tognoli Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/card-mauriciotognoli.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Mauricio Tognoli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauricio Tognoli | Frontend Developer",
    description:
      "Portfolio personal de Mauricio Tognoli, desarrollador frontend especializado en React, Next.js y Tailwind CSS.",
    images: ["/card-mauriciotognoli.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#F26419",
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = window.localStorage.getItem('mt-theme');
    document.documentElement.setAttribute('data-theme', stored === 'light' ? 'light' : 'dark');
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
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            {children}
            <StickyCta />
            <Footer />
            <Toaster position="top-center" richColors />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

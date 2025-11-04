import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Toaster } from "sonner";

import { Analytics } from "@vercel/analytics/react";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
  themeColor: "#682bd6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.variable} antialiased bg-black text-white`}>
        <Header />
        {children}
        <Analytics />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

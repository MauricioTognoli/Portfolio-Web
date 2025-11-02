import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Toaster } from "sonner";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauricio Tognoli",
  description: "Porrtfolio made by Mauricio Tognoli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased bg-black text-white`}
        >
        <Header/>

        
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}

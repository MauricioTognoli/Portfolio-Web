import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";

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
        className={`${urbanist.variable} antialiased`}
        >
        <Navbar/>
        <Header/>

        
        {children}
      </body>
    </html>
  );
}

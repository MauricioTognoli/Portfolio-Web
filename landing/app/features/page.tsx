import type { Metadata } from "next";
import FeaturesClient from "@/components/FeaturesClient";

const title = "Features & Demos";
const ogTitle = "Features & Demos | Mauricio Tognoli";
const description =
  "Los patrones de frontend que Mauricio Tognoli resuelve en producción — design systems, theming, tablas, formularios, performance e i18n — con demos en vivo.";
const ogImages = [{ url: "/card-mauriciotognoli.png", width: 1200, height: 630, alt: ogTitle }];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/features" },
  openGraph: { title: ogTitle, description, url: "/features", images: ogImages },
  twitter: { title: ogTitle, description, images: ogImages.map((i) => i.url) },
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}

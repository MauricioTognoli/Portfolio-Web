import type { Metadata } from "next";
import FeaturesClient from "@/components/FeaturesClient";

export const metadata: Metadata = {
  title: "Features & Demos | Mauricio Tognoli",
  description:
    "Los patrones de frontend que Mauricio Tognoli resuelve en producción — design systems, theming, tablas, formularios, performance e i18n — con demos en vivo.",
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}

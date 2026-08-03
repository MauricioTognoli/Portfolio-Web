import type { Metadata } from "next";
import FeaturesClient from "@/components/FeaturesClient";

export const metadata: Metadata = {
  title: "Features | Mauricio Tognoli",
  description:
    "Funcionalidades concretas que Mauricio Tognoli diseñó y construyó en sus roles actuales en Powip y Devlusoft.",
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}

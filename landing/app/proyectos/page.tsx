import type { Metadata } from "next";
import ProyectosClient from "@/components/ProyectosClient";

export const metadata: Metadata = {
  title: "Proyectos | Mauricio Tognoli",
  description:
    "Casos de estudio de los proyectos frontend de Mauricio Tognoli: SaaS, landings corporativas y streaming construidos con React y Next.js.",
};

export default function ProyectosPage() {
  return <ProyectosClient />;
}

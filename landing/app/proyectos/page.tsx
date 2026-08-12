import type { Metadata } from "next";
import ProyectosClient from "@/components/ProyectosClient";

const title = "Proyectos";
const ogTitle = "Proyectos | Mauricio Tognoli";
const description =
  "Casos de estudio de los proyectos frontend de Mauricio Tognoli: SaaS, landings corporativas y streaming construidos con React y Next.js.";
const ogImages = [{ url: "/card-mauriciotognoli.png", width: 1200, height: 630, alt: ogTitle }];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/proyectos" },
  openGraph: { title: ogTitle, description, url: "/proyectos", images: ogImages },
  twitter: { title: ogTitle, description, images: ogImages.map((i) => i.url) },
};

export default function ProyectosPage() {
  return <ProyectosClient />;
}

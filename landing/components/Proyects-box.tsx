"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

interface Project {
  id: number;
  title: string;
  image: string;
  urlGithub: string;
  urlDemo: string;
  technologies: string[];
  description?: string;
}

interface ProjectsBoxProps {
  projects: Project[];
}

const ProyectsBox = ({ projects }: ProjectsBoxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTech, setShowTech] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextProject = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setShowTech(false);
  };

  const prevProject = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setShowTech(false);
  };

  const current = projects[currentIndex];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-4 items-center justify-center w-full mx-auto gap-6  overflow-hidden">
      {/* Flecha Izquierda */}
      <button
        onClick={prevProject}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-secondary p-2 rounded-full transition"
      >
        <ChevronLeft size={28}  />
      </button>

      {/* Proyecto Principal (3 columnas) con animación */}
      <div className="md:col-span-3 border border-white hover:border-secondary rounded-2xl p-5 bg-gray-800/40 hover:bg-gray-800 transition-all duration-300 backdrop-blur-md shadow-lg shadow-slate-800 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction === "right" ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -80 : 80 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-semibold mb-3">{current.title}</h2>
            <Image
              src={current.image}
              alt={current.title}
              width={800}
              height={450}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl mb-4"
            />

            <p className="text-sm text-gray-300 mb-3">
              {current.description ||
                "Proyecto destacado enfocado en experiencia de usuario y rendimiento."}
            </p>

            {/* Botones */}
            <div className="flex gap-4 mb-4">
              <Link
                href={current.urlGithub}
                target="_blank">
                <Button variant="outline">GitHub</Button>
              </Link>
              <Link
                href={current.urlDemo}
                target="_blank" >
                    <Button>Live Demo</Button>
              </Link>
            </div>

            {/* Desplegable de tecnologías */}
            <div className="border-t border-gray-600 pt-3">
              <button
                onClick={() => setShowTech((prev) => !prev)}
                className="flex items-center gap-2 text-gray-200 hover:text-white transition"
              >
                Tecnologías utilizadas
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    showTech ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showTech && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 flex flex-wrap gap-2"
                  >
                    {current.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-100"
                      >
                        {tech}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Preview del siguiente proyecto con animación */}
      <AnimatePresence mode="wait">
        <motion.div
          key={next.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="hidden md:flex flex-col items-center md:col-span-1 opacity-70 hover:opacity-100 transition"
        >
          <p className="text-sm mb-2 text-gray-400">Siguiente</p>
          <Image
            src={next.image}
            alt={next.title}
            width={250}
            height={160}
            className="rounded-xl object-cover shadow-md"
          />
          <p className="mt-2 text-sm font-medium text-gray-200">
            {next.title}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Flecha Derecha */}
      <button
        onClick={nextProject}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-secondary p-2 rounded-full transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default ProyectsBox;

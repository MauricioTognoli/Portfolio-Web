"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { technologies } from "@/data";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Technologies = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTechs = showAll ? technologies : technologies.slice(0, 5);

  return (
    <div className="text-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        <AnimatePresence>
          {visibleTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
              className="relative group"
            >
              <Link href={tech.src} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 transform group-hover:scale-110">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={64}
                    height={64}
                    className="w-16 h-16 mb-4 transition-transform duration-300"
                  />
                  <div className="text-white text-sm">{tech.name}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        initial={false}
        animate={{ y: showAll ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex justify-center mt-8"
      >
        <motion.button
          onClick={() => setShowAll(!showAll)}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-white font-semibold text-sm transition-all hover:bg-secondary/80"
        >
          {showAll ? "Ver menos" : "Ver más"}
          <motion.div
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Technologies;

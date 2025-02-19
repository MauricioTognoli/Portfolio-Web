"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { technologies } from "@/data";
import Link from "next/link";

const Technologies = () => {
  return (
    <div className="md:mb-40">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative group"
          >
            <Link href={tech.src} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 transform group-hover:scale-110">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={16}
                  height={16}
                  className="w-16 h-16 mb-4 transition-transform duration-300"
                />
                <div className=" text-white">{tech.name}</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

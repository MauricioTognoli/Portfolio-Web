"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { animate, motion } from "framer-motion";
import { Button } from "./ui/button";

const Introduction = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const top = element.offsetTop;
      animate(window.scrollY, top, {
        duration: 0.8,
        onUpdate(value) {
          window.scrollTo(0, value);
        },
        ease: [0.25, 0.1, 0.25, 1],
      });
    }
  };
  return (
    <section
      className="min-h-screen flex flex-col mt-32 items-center md:justify-evenly gap-10 px-4 py-20 md:flex-row md:gap-20 md:px-0 md:mt-0"
      aria-label="Introducción de Mauricio Tognoli"
    >
      <motion.figure
        className="flex justify-center "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/home.jpg"
          priority
          width={300}
          height={300}
          alt="Mauricio Tognoli, desarrollador frontend"
          className="rounded-full shadow-lg shadow-secondary"
        />
      </motion.figure>

      <motion.article
        className="flex flex-col justify-center max-w-md text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="justify-center ">
          <header>
            <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
              Si puedes pensarlo,
              <TypeAnimation
                sequence={[
                  "puedes programarlo",
                  1000,
                  "puedes optimizarlo",
                  1000,
                  "puedes implementarlo",
                  1000,
                  "puedes desarrollarlo",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block font-bold text-secondary"
              />
            </h1>
          </header>

          <motion.h2
            className="mx-auto mt-2 mb-4 text-3xl font-bold text-center md:mx-0 md:mb-8 md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hola, soy <span className="font-bold text-secondary">M</span>auricio{" "}
            <span className="font-bold text-secondary">T</span>ognoli
          </motion.h2>

          <motion.p
            className="mx-auto mb-2 text-xl text-center md:mx-0 md:mb-8 md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Desarrollador Front-end de Buenos Aires, Argentina, apasionado por
            crear experiencias digitales agradables e intuitivas.
            <br /> Mi objetivo es desafiarme en nuevos entornos, aprendiendo y
            mejorando continuamente mis habilidades a través de diversos
            proyectos.
          </motion.p>

          <motion.nav
            className="flex items-center justify-center text-sm gap-3 mt-6 md:text-md md:justify-start md:gap-10"
            aria-label="Enlaces de acción"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button variant="outline" onClick={scrollToProjects}>
              Ver proyectos
            </Button>
            <Link href="mailto:tognolimauricio@gmail.com">
              <Button>Contacta conmigo</Button>
            </Link>
          </motion.nav>
        </div>
      </motion.article>
    </section>
  );
};

export default Introduction;

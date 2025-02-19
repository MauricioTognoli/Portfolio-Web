"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="z-20 w-full">
      <div className="z-20 grid items-center h-full p-6 md:py-0 md:grid-cols-2">
        <Image
          src="/home.jpg"
          priority
          width="300"
          height="100"
          alt="Avatar"
          className="rounded-full shadow-2xl m-auto shadow-secondary"
        />
        <div className="flex flex-col justify-center max-w-md mt-6 ">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si Puedes Pensarlo,
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

          <h2 className="mx-auto mt-2 mb-4 text-2xl text-center md:mx-0 md:mb-8 md:text-left">
            Hola, soy{" "}
            <span className="font-bold text-secondary">Mauricio Tognoli</span>.
          </h2>
          <p className="mx-auto mb-2 text-xl text-center md:mx-0 md:mb-8 md:text-left">
            Desarrollador Front-end de Buenos Aires, Argentina, apasionado por
            crear experiencias digitales hermosas e intuitivas.
            <br /> Mi objetivo es desafiarme en nuevos entornos, aprendiendo y
            mejorando continuamente mis habilidades a través de diversos
            proyectos.
          </p>

          <div className="flex items-center justify-center text-sm gap-3 mt-6 md:text-md md:justify-start md:gap-10">
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-white/50"
            >
              Ver proyectos
            </Link>
            <Link
              href="mailto:tognolimauricio@gmail.com"
              className="px-3 py-2 transition-all  cursor-pointer bg-secondary text-black font-semibold  text-md w-fit rounded-xl hover:shadow-lg hover:shadow-secondary"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

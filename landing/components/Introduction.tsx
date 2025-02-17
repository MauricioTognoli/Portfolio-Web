"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="z-20 w-full">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
      <div className="relative h-full min-h-[400px] ">
              <div className="absolute inset-0 max-w-[550px] max-h-[650px] bg-secondary rounded-full scale-95 translate-x-4 translate-y-4 transform rotate-3"></div>
              <Image
                src=
                  "/home.jpg"
                
                alt="Profile"
                width={150}
                height={400}
                unoptimized
                className="absolute inset-0 w-full h-full max-w-[550px] max-h-[650px] object-cover object-top rounded-full scale-90 hover:scale-95 transition-transform duration-300"
              />
              <div className="absolute bottom-12 left-12 max-w-[550px]  bg-gray-900 bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300">
                <p className="text-xl font-semibold">Front-end Developer</p>
                <p className="text-blue-300">Junior</p>
              </div>
              </div>

        <div className="flex flex-col justify-center max-w-md mt-4 ">
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

          <p className="mx-auto mb-2 text-xl text-center md:mx-0 md:mb-8 md:text-left">
            Como desarrollador frontend, me dedico a combinar diseño y
            funcionalidad para crear experiencias digitales increibles y
            accesibles.
          </p>

          <div className="flex items-center justify-center text-sm gap-3 mt-6 md:text-md md:justify-start md:gap-10">
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-white/50"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-lg hover:shadow-secondary"
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

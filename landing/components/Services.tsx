"use client";
import ContainerPage from "@/components/Container-page";
import SliderServices from "@/components/Slider-services";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <ContainerPage>
      <motion.div
        ref={ref}
        className="relative grid items-center justify-center h-screen gap-6 mx-auto md:grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="min-h-[400px]"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-2xl  leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Mis <span className="font-bold text-secondary">servicios.</span>
          </h1>

          <p className="mb-6 text-xl text-center md:text-left text-gray-300">
            Ofrezco servicios de desarrollo web frontend especializados en la
            creación de sitios web, aplicaciones atractivas y funcionales.
            Utilizando las últimas tecnologías, como React, TailwindCSS y
            JavaScript, diseño interfaces de usuario intuitivas y responsivas
            que reflejan la identidad de marca de mis clientes y mejoran su
            presencia en línea.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="mailto:tognolimauricio@gmail.com"
              className="px-3 py-2 transition-all cursor-pointer bg-secondary text-white font-semibold text-md w-fit rounded-xl hover:shadow-lg hover:shadow-secondary mx-auto block md:mx-0"
            >
              Contacta conmigo
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SliderServices />
        </motion.div>
      </motion.div>
    </ContainerPage>
  );
};

export default Services;

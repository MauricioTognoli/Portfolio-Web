"use client";

import { dataProyects } from "@/data";
import ContainerPage from "@/components/Container-page";
import ProyectsBox from "@/components/Proyects-box";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Proyects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <ContainerPage>
      <section id="projects">
        <motion.div
          ref={ref}
          className="flex flex-col justify-center h-full"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl leading-tight md:text-4xl text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Mis últimos{" "}
            <span className="font-bold text-secondary">
              trabajos realizados
            </span>
          </motion.h1>

          <motion.div
            className="h-screen my-10"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <ProyectsBox projects={dataProyects} />
          </motion.div>
        </motion.div>
      </section>
    </ContainerPage>
  );
};

export default Proyects;

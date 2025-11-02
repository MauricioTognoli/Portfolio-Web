"use client";
import React from "react";
import { dataCounter } from "@/data";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CounterServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="grid justify-between max-w-[1000px] content-center grid-cols-2 gap-3 my-8 md:grid-cols-4 md:gap-6"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {dataCounter.map(
        ({ id, endCounter, text, lineRight, lineRightMobile }) => (
          <motion.div
            key={id}
            className={`${
              lineRight &&
              "border-2 border-transparent md:border-e-gray-100 mt-5"
            } ${
              lineRightMobile && "border-e-gray-100"
            } last:border-e-0 last:md:border-e-0`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: id * 0.2 }}
          >
            <p className="flex mb-2 text-2xl font-extrabold md:text-3xl text-secondary">
              +{inView && <CountUp end={endCounter} start={0} duration={3} />}
            </p>
            <p className="text-xs uppercase max-w-[100px]">{text}</p>
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default CounterServices;

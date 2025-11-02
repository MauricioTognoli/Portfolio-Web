// TimeLineItem.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { dataAboutPage } from "@/data";

// Definimos el tipo de props
interface TimeLineItemProps {
  data: typeof dataAboutPage[0];
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="relative py-6 pl-8 sm:pl-32 group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: data.id * 0.1,
        ease: "easeOut",
      }}
    >
      <h3 className="mb-1 text-2xl font-bold sm:mb-0 text-secondary dark:text-gray-100">
        {data.title}
      </h3>

      <div
        className="flex flex-col sm:flex-row items-start mb-1 
          group-last:before:hidden before:absolute 
          before:left-2 sm:before:left-0 before:h-full
          before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
          before:self-start before:-translate-x-1/2 
          before:translate-y-3 after:absolute after:left-2 
          sm:after:left-0 after:w-2 after:h-2 after:bg-black
          after:border-4 after:box-content after:border-slate-50 
          after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
          after:translate-y-1.5"
      >
        <motion.time
          className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {data.date}
        </motion.time>

        <motion.div
          className="text-xl font-bold text-gray-400"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {data.subtitle}
        </motion.div>
      </div>

      <motion.div
        className="text-slate-400 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {data.description}
      </motion.div>
    </motion.div>
  );
};

export default TimeLineItem;

"use client";
import { transitionVariantPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#f68036]"
          variants={transitionVariantPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 1.7, ease: "easeInOut" }}
        >
          <div className="flex-wrap w-auto h-full items-center content-center">
            <Image
              src="/logo-mt-black.png"
              alt="Logo de Mauricio Tognoli"
              className="flex items-center content-center justify-center m-auto  "
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default TransitionPage;

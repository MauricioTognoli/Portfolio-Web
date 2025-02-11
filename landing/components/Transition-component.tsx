"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion-transitions";

interface MotonTransitionProps {
  children: React.ReactNode;
  position: 'right' | 'bottom'
  className?: string
}

const motionTransition = (props: MotonTransitionProps) => {
  const { children, position, className } = props;
  return <motion.div variants={fadeIn(position)} initial='hidden'
  animate='visible'
  exit= 'hidden'
  className={className} >{children}</motion.div>;
};

export default motionTransition;

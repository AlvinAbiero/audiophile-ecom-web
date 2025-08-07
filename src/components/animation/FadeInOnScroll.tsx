"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type FadeInOnScrollProps = {
  children: React.ReactNode;
  transition?: { duration: number; delay: number; ease: string };
};

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;

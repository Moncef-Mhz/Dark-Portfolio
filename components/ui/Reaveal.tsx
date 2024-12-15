"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface props {
  children: JSX.Element;
  width?: "fit" | "full";
  className?: string;
}

const Reaveal = ({ children, width = "fit", className }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${
        width === "full" ? "w-full" : "w-fit"
      }`}
    >
      {/* Content Animation */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3, once: true }}
        className={className}
      >
        {children}
      </motion.div>
      {/* Sliding Overlay */}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
        className="absolute top-0 bottom-0 left-0 right-0 bg-foreground z-20"
      />
    </div>
  );
};
export default Reaveal;

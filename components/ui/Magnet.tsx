"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SPRING_CONFIG = { stiffness: 400, damping: 100 };
const Magnet: React.FC<Props> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", ...SPRING_CONFIG }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnet;

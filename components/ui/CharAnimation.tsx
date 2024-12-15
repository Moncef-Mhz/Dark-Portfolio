"use client";
import { motion } from "motion/react";

type Props = {
  children: string;
  className?: string;
};

const CharAnimation = ({ children, className }: Props) => {
  const splitChar: string[] = children.split("");

  return (
    <div className={`${className} flex items-center justify-center`}>
      {splitChar.map((char, i) => (
        <motion.h1
          key={i}
          whileHover={{
            color: "#fff",
            transition: {
              duration: 0.1,
              type: "linear",
              stiffnes: 150,
              damping: 15,
            },
          }}
          className={char === " " ? "lg:mx-4 md:mx-3 mx-2" : ""}
        >
          {char}
        </motion.h1>
      ))}
    </div>
  );
};
export default CharAnimation;

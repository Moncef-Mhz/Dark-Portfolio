"use client";
import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({
  children,
  href,
}: {
  children: string;
  href: string;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.startsWith("#") ? href.slice(1) : href;
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.a
      initial="initial"
      href={`#${href}`}
      whileHover="hovered"
      onClick={handleClick}
      className="relative block cursor-pointer overflow-hidden whitespace-nowrap text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.85,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-background"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-stroke-black"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

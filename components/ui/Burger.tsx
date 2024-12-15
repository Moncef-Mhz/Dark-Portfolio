"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FlipLink } from "./Links";
import { navlinks, socialLinks } from "@/constant/index";
import Link from "next/link";
import Magnet from "./Magnet";

const AnimatedBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the burger lines
  const line1Variants = {
    closed: { rotate: 0, y: 0, originX: 0.5, originY: 0.5 },
    open: { rotate: 45, y: 6, originX: 0.5, originY: 3 },
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const line3Variants = {
    closed: { rotate: 0, y: 0, originX: 0.5, originY: 0.5 },
    open: { rotate: -45, y: -6, originX: 0.3, originY: -3 },
  };

  return (
    <div className="z-50">
      {/* Burger button */}
      <button
        className="relative w-12 z-50 h-12 flex flex-col items-center justify-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Line 1 */}
        <motion.div
          className={`w-6 h-[1px] rounded ${
            isOpen ? "bg-background" : "bg-foreground"
          } transition-colors duration-150 `}
          animate={isOpen ? "open" : "closed"}
          variants={line1Variants}
          transition={{ duration: 0.3 }}
        />
        {/* Line 2 */}
        <motion.div
          className={`w-6 h-[1px] rounded ${
            isOpen ? "bg-background" : "bg-foreground"
          } transition-colors duration-150 `}
          animate={isOpen ? "open" : "closed"}
          variants={line2Variants}
          transition={{ duration: 0.3 }}
        />
        {/* Line 3 */}
        <motion.div
          className={`w-6 h-[1px] rounded ${
            isOpen ? "bg-background" : "bg-foreground"
          } transition-colors duration-150 `}
          animate={isOpen ? "open" : "closed"}
          variants={line3Variants}
          transition={{ duration: 0.3 }}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            exit={{ x: -2000 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 30,
              duration: 1.5,
            }}
            className="absolute px-10 pb-24 md:pb-10 top-0 right-0 bg-foreground flex items-end justify-between w-full h-screen z-10"
          >
            <div className=" z-50  ">
              {navlinks.map((nav, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <FlipLink href={nav.href}>{nav.name}</FlipLink>
                </motion.div>
              ))}
            </div>
            <div className="z-20 text-background flex flex-col gap-4">
              <div className="h-full w-[2px] bg-background " />
              {socialLinks.map((social, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.2,
                  }}
                >
                  <Magnet className="md:w-16 w-14 md:h-16 h-14 flex items-center justify-center  border rounded-full">
                    <Link href={social.href} target="_blank">
                      {social.icon}
                    </Link>
                  </Magnet>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBurger;

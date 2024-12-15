"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Reaveal from "../ui/Reaveal";
import Burger from "../ui/Burger";

const Header = () => {
  const [isSticky, setIsSticky] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 25) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="relative md:h-[100px] h-[80px] bg-background flex items-center justify-between px-4 md:px-[72px] transition-all duration-300"
      initial={{ y: -120 }}
      animate={{
        y: isSticky ? 0 : -120,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        position: isSticky ? "fixed" : "absolute",
        top: isSticky ? 0 : "unset",
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <Reaveal>
        <h1 className="text-2xl md:text-3xl font-black uppercase text-transparent text-stroke">
          Moncef Meharzi.
        </h1>
      </Reaveal>
      <Burger />
    </motion.div>
  );
};

export default Header;

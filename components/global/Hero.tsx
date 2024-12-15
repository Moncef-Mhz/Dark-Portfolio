"use client";
// import Image from "next/image";
import { Spotlight } from "../ui/Spotlight";
import Reaveal from "../ui/Reaveal";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import Magnet from "../ui/Magnet";
import CharAnimation from "../ui/CharAnimation";
import SmoothScrollLink from "../ui/SmoothScrollLink";

const Hero = () => {
  return (
    <div
      id="hero"
      className="h-screen pb-4 px-6 overflow-y-hidden  dark:bg-grid-small-white/[0.05] bg-grid-small-black/[0.2] relative w-full flex flex-col items-center justify-center gap-y-6"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-40"
        fill="white"
      />
      <motion.h1
        variants={{
          initial: { y: -25, opacity: 0 },
          animate: { y: 0, opacity: 1 },
        }}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.3 }}
        className="border w-fit capitalize text-base border-white/30 py-1 px-3 rounded-full flex items-center justify-center gap-2"
      >
        <div className="relative grid place-content-center">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <div className="absolute w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
        </div>
        Hey, I am moncef meharzi
      </motion.h1>
      <div className="relative">
        <h1 className="2xl:text-9xl text-4xl md:text-6xl lg:text-8xl text-center font-black uppercase flex items-center justify-center flex-col gap-1">
          <Reaveal className="">
            <>
              Web Developer
              <br />{" "}
            </>
          </Reaveal>
          <Reaveal>
            <CharAnimation className="text-stroke">
              UI/UX Designer
            </CharAnimation>
          </Reaveal>
        </h1>
      </div>
      <Reaveal>
        <p className="text-white/70 text-center text-base">
          I build digital experiences that merge functionality with aesthetics
          designing interfaces <br /> that inspire and engineering solutions
          that deliver.
        </p>
      </Reaveal>
      <div className="absolute bottom-0  mb-24">
        <Magnet>
          <SmoothScrollLink
            hover={true}
            targetId="parallax"
            className="border border-foreground rounded-full h-16 w-16 flex items-center justify-center cursor-pointer"
          >
            <ArrowDown strokeWidth={1} size={40} />
          </SmoothScrollLink>
        </Magnet>
      </div>
    </div>
  );
};
export default Hero;

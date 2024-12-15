"use client";
import { Works as projects } from "@/constant";
import Image from "next/image";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import Reaveal from "../ui/Reaveal";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Head from "../ui/Head";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      id="projects"
      className={
        "w-full h-full bg-background xl:px-0 pt-20 pb-10  px-4 max-w-7xl items-center mx-auto space-y-6"
      }
    >
      <Head>Projects</Head>
      <div
        className={cn(
          Jakarta.className,
          "grid  md:grid-cols-2 grid-cols-1 gap-6"
        )}
      >
        {projects.map((project, i) => (
          <motion.div
            variants={{
              initial: { y: -25, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="initial"
            animate={mainControls}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 * i }}
            key={project.id}
            className="w-full  border relative cursor-pointer group duration-150 z-0 overflow-hidden border-[#333]/50 rounded-2xl"
          >
            <div className="flex items-center justify-start  gap-2 pt-3 pb-2 px-4">
              <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
              <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
              <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
            </div>
            <motion.div className="md:h-[400px] my-1  mx-2 rounded-xl lg:h-[500px] h-[300px] z-10 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={800}
                loading="lazy"
                className=" group-hover:scale-105 duration-150 w-full h-full  object-cover"
              />
            </motion.div>
            <div className="p-4 px-4 space-y-3 z-10">
              <Reaveal>
                <h3 className="md:text-2xl text-xl font-bold capitalize ">
                  {project.title}
                </h3>
              </Reaveal>
              <Reaveal>
                <p className="text-white/70 line-clamp-">
                  {project.description}
                </p>
              </Reaveal>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tools.map((item, i) => (
                  <Reaveal key={i}>
                    <p className="uppercase text-sm font-medium px-3 py-2 border-[#333] border rounded-lg">
                      {item}
                    </p>
                  </Reaveal>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-neutral-900 group-hover:blur-3xl group-hover:bg-neutral-800 duration-100  -z-10 w-full h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Works;

"use client";
import { Works } from "@/constant";
import { CornerRightDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  LayoutGroup,
} from "framer-motion";
import Reaveal from "../ui/Reaveal";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number>(0);

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  const handleHover = (index: number) => {
    if (index !== selectedIndex) {
      setLastSelectedIndex(selectedIndex);
      setSelectedIndex(index);
    }
  };

  return (
    <LayoutGroup>
      <motion.div
        ref={ref}
        id="projects"
        className="h-screen md:px-[72px] px-[16px] w-full flex items-center justify-center gap-6 duration-150"
      >
        <div className="w-full xl:block hidden aspect-square  h-[600px] 2xl:h-[700px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{
                y: selectedIndex > lastSelectedIndex ? -50 : 50,
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: selectedIndex < lastSelectedIndex ? -50 : 50,
                opacity: 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              layoutId={`project-${Works[selectedIndex].slug}`}
              className="absolute inset-0"
            >
              <Image
                src={Works[selectedIndex].image}
                alt="alt"
                className="object-cover rounded-2xl h-full w-full"
                width={3000}
                height={3000}
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          variants={{
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
          }}
          initial="initial"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full flex flex-col items-start justify-between  h-[600px] 2xl:h-[700px]"
        >
          <div className="flex items-center justify-between w-full border-b pb-4">
            <Reaveal>
              <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-black text-stroke uppercase">
                Projects
              </h1>
            </Reaveal>
            <CornerRightDown strokeWidth={1} size={40} />
          </div>
          {Works.map((work, index) => (
            <div
              key={work.id}
              onMouseEnter={() => handleHover(index)}
              className="py-10 border-b group cursor-pointer w-full flex items-center justify-between"
            >
              <Reaveal>
                <h1 className=" xl:text-2xl md:text-xl text-lg  group-hover:text-slate-200/70 group-hover:-translate-x-2 px-2 duration-150">
                  {work.title}
                </h1>
              </Reaveal>

              <div className=" gap-2 capitalize flex items-center justify-center px-2">
                {work.tools.map((item) => (
                  <h1
                    key={item}
                    className=" md:text-base text-sm group-hover:text-slate-200/70 group-hover:translate-x-2 duration-150"
                  >
                    {item}
                  </h1>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
};

export default Projects;

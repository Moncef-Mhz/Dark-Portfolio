"use client";

import useDimesnion from "@/hook/useDimesnion";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Column from "../ui/Column";
import useLenis from "@/hook/useLenis";

const Images = [
  "/images/1/10.png",
  "/images/2/1.png",
  "/images/3/1.png",
  "/images/5/1.png",
  "/images/6/1.png",
  "/images/1/6.png",
  "/images/5/1.png",
  "/images/3/1.png",
  "/images/1/3.png",
  "/images/2/4.png",
  "/images/1/10.png",
];

const Parallax = () => {
  useLenis();
  const gallery = useRef(null);
  const { height } = useDimesnion();

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <div className="relative" id="parallax">
      <div
        ref={gallery}
        className="h-[175vh] bg-background relative flex gap-6 p-6 overflow-hidden box-border"
      >
        <Column images={[Images[0], Images[1], Images[2]]} y={y} />
        <Column images={[Images[3], Images[4], Images[5]]} y={y2} />
        <Column images={[Images[6], Images[7], Images[8]]} y={y3} />
        <Column images={[Images[9], Images[10], Images[0]]} y={y4} />
      </div>
    </div>
  );
};
export default Parallax;

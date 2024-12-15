"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  items: { id: string; svg: string; name: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  rotate?: "rotate-0" | "rotate-2" | "rotate-3" | "-rotate-2" | "-rotate-3";
};
const InfiniteMove = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  rotate = "rotate-0",
}: //   className,
Props) => {
  const [start, setStart] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        " flex w-full shrink-0 gap-4 py-2 bg-foreground border-2 border-background flex-nowrap ",
        rotate
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex w-full shrink-0 gap-4 py-4 flex-nowrap   items-center justify-center",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li key={item.id} className="relative group">
            <Image
              src={item.svg}
              alt={item.name}
              width={45}
              height={45}
              className="hover:opacity-80 transition-opacity duration-300"
            />
            <span className="absolute left-1/2  -translate-x-1/2  -bottom-8 bg-background text-foreground text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InfiniteMove;

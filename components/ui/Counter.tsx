"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";

type Props = {
  num: string;
  duration: string;
};

const Counter = ({ num, duration }: Props) => {
  const [count, setCount] = useState("0");
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let start = 0;
    const end = parseInt(num.substring(0, 3)) || 0;

    if (start === end) return;

    const totalMilSecDur = parseInt(duration) || 1000;
    const incrementTime = (totalMilSecDur / end) * 1000;
    if (isInView) {
      const timer = setInterval(() => {
        start++;
        setCount(String(start) + num.substring(3));
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [num, duration, isInView]);
  return (
    <div ref={ref} className="flex items-center justify-center">
      {count}
    </div>
  );
};

export default Counter;

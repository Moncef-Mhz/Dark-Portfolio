"use client";

import { useEffect, useState } from "react";

const useDimesnion = () => {
  const [dimension, setDimesnion] = useState({ width: 0, height: 0 });

  const updateDimension = () => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimesnion({ width, height });
  };

  useEffect(() => {
    updateDimension();

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return dimension;
};
export default useDimesnion;

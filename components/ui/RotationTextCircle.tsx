// app/components/RotatingTextCircle.tsx
"use client";

import { motion } from "framer-motion";

const RotatingTextCircle = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Rotating Circular Text */}
      <motion.svg
        viewBox="0 0 300 300"
        className="w-24 h-24 md:w-[300px] md:h-[300px]"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      >
        {/* Define the circular path for the text */}
        <defs>
          <path
            id="circlePath"
            d="M 150,150 
               m -100,0 
               a 100,100 0 1,0 200,0 
               a 100,100 0 1,0 -200,0"
          />
        </defs>

        {/* Text that follows the circular path */}
        <text fill="#fff" fontSize="14" fontWeight="regulare">
          <textPath
            xlinkHref="#circlePath"
            startOffset="50%" /* Align the text at the center of the path */
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Rotating Text Circle • Rotating Text Circle • Rotating Text Circle
            •Rotating Text
          </textPath>
        </text>
      </motion.svg>

      {/* Center Content */}
      <div className="w-16 h-16 md:w-28 md:h-28 absolute inset-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
        {/* Centered Text */}
        <p>Center</p>
      </div>
    </div>
  );
};

export default RotatingTextCircle;

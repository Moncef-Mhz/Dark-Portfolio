"use client";
import { motion } from "framer-motion";

type Props = {
  targetId: string; // The ID of the section to scroll to
  children: React.ReactNode;
  className?: string;
  hover: boolean; // Add a hover effect to the link?
};

const SmoothScrollLink = ({ targetId, children, className, hover }: Props) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start", // You can adjust this to 'center' or 'end' if needed
      });
    }
  };

  return (
    <motion.a
      href={`#${targetId}`}
      onClick={handleClick}
      className={className}
      whileHover={hover ? { scale: 1.1 } : { scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
};

export default SmoothScrollLink;

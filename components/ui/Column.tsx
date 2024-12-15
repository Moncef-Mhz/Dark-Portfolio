import { motion, MotionValue } from "motion/react";
import Image from "next/image";
type Props = {
  images: string[];
  y: MotionValue<number>;
};
const Column = ({ images, y }: Props) => {
  return (
    <motion.div
      className="relative child h-full w-[25%]  -left-20 md:left-0 min-w-[250px] flex flex-col gap-6"
      style={{ y }}
    >
      {images.map((image, i) => (
        <div
          key={i}
          className="h-full w-full relative rounded-md overflow-hidden"
        >
          <Image
            src={image}
            alt={image}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
};
export default Column;

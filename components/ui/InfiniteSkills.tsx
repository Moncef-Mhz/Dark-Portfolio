import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

type Props = {
  items: { id: string; svg: string; name: string }[];
  className?: string;
};
const InfiniteSkills = ({ items, className }: Props) => {
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        " py-4 border-background overflow-hidden border-y-2 MyGradient bg-foreground relative flex  w-full h-full",
        className,
        Jakarta.className
      )}
    >
      <motion.div
        variants={{ initial: { x: "0%" }, animate: { x: "-100%" } }}
        initial="initial"
        animate="animate"
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        className="flex shrink-0  gap-6"
      >
        {loopItems.map(({ id, svg, name }, index) => (
          <div
            key={`${id}-${index}`}
            className="flex items-center justify-center gap-2"
          >
            <Image
              src={svg}
              alt={name}
              width={45}
              height={45}
              className=" md:w-12 md:h-12 w-8 h-8 filter-green "
            />
            <h1 className="text-black/80 text-xl md:text-2xl font-bold capitalize">
              {name}
            </h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default InfiniteSkills;

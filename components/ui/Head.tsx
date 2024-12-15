import { CornerRightDown } from "lucide-react";
import Reaveal from "./Reaveal";
type Props = {
  children: string;
};

const Head = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-between w-full border-b pb-4 ">
      <Reaveal>
        <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl  text-3xl font-black text-stroke uppercase">
          {children}
        </h1>
      </Reaveal>
      <CornerRightDown strokeWidth={1} size={40} />
    </div>
  );
};
export default Head;

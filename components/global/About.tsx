"use client";

import { Badge, Flag, User } from "lucide-react";
import Image from "next/image";
import Counter from "../ui/Counter";
import Reaveal from "../ui/Reaveal";
import Button from "../ui/Button";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Head from "../ui/Head";
import SmoothScrollLink from "../ui/SmoothScrollLink";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const skill = [
  {
    id: 1,
    name: "React",
    logo: "/icons/react.svg",
    top: "45%",
    left: "20%",
  },
  {
    id: 2,
    name: "Figma",
    logo: "/icons/figma.svg",
    top: "15%",
    left: "50%",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    logo: "/icons/tailwind1.svg",
    top: "85%",
    left: "30%",
  },
  {
    id: 4,
    name: "Prisma",
    logo: "/icons/prisma.svg",
    top: "85%",
    left: "70%",
  },
  {
    id: 5,
    name: "node",
    logo: "/icons/node3.svg",
    top: "45%",
    left: "80%",
  },
];

const info = [
  {
    title: "Project Done",
    num: "34",
    icon: <Flag size={28} strokeWidth={2} />,
  },
  {
    title: "Happy Client",
    num: "12",
    icon: <User size={28} strokeWidth={2} />,
  },
  {
    title: "Experience",
    num: "03",
    icon: <Badge size={28} strokeWidth={2} />,
  },
];

const Stack = [
  {
    id: 1,
    name: "React",
    logo: "/images/react.svg",
  },
  {
    id: 2,
    name: "Next.js",
    logo: "/images/nextjs.svg",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    logo: "/images/tailwindcss.svg",
  },
  {
    id: 4,
    name: "Prisma",
    logo: "/images/prisma.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    logo: "/images/ts1.svg",
  },
  {
    id: 6,
    name: "Node.js",
    logo: "/images/nodejs.svg",
  },
  {
    id: 7,
    name: "Figma",
    logo: "/images/figma.svg",
  },
  {
    id: 8,
    name: "Mongo db",
    logo: "/images/mongodb1.svg",
  },
];

const About = () => {
  const [hovered, setHovered] = useState(false);

  const roundoutline = (
    <>
      <div className="w-[100px] h-[100px] absolute  rounded-full border-indigo-500/5 border " />
      <div className="w-[200px] h-[200px] absolute  rounded-full border-indigo-500/5 border " />
      <div className="w-[300px] h-[300px] absolute  rounded-full border-indigo-500/5 border " />
      <div className="w-[400px] h-[400px] absolute  rounded-full border-indigo-500/5 border " />
      <div className="w-[500px] h-[500px] absolute  rounded-full border-indigo-500/5 border " />
    </>
  );

  return (
    <div
      className={
        " h-full px-4 xl:px-0 w-full max-w-7xl mx-auto  pt-20 pb-10 space-y-6 "
      }
      id="about"
    >
      <Head>About Me</Head>
      <div
        className={cn(
          inter.className,
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-full"
        )}
      >
        {info.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-800 min-h-[300px] overflow-hidden group w-full h-full col-span-1 rounded-xl flex items-center justify-center relative"
          >
            <h1 className="text-8xl flex items-center justify-center  z-[1] group-hover:to-zinc-600 duration-150 font-bold bg-gradient-to-b from-foreground  text-transparent bg-clip-text to-zinc-900 ">
              <Counter num={item.num} duration="1" />
              <span className="text-indigo-500 font-normal">+</span>
            </h1>
            <div className="absolute z-[1] py-8 px-4 bottom-0 flex flex-col gap-2 left-0">
              <div className="text-indigo-500 fill-indigo-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-2 duration-150">
                {item.icon}
              </div>
              <Reaveal>
                <h1 className="text-lg z-10  font-black uppercase group-hover:-translate-y-2 duration-150">
                  {item.title}
                </h1>
              </Reaveal>
            </div>

            {roundoutline}
          </div>
        ))}
        <div
          className="bg-zinc-800 w-full h-full min-h-[300px] col-span-1 group rounded-xl overflow-hidden relative flex items-center justify-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="w-28 h-28 z-[1] rounded-full overflow-hidden">
            <Image
              src="/images/final.png"
              alt="me"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-full grayscale group-hover:scale-105 group-hover:grayscale-0 duration-150"
            />
          </div>
          {skill.map((item) => (
            <div
              key={item.id}
              className={`w-16 h-16 flex items-center justify-center bg-white rounded-full absolute transition-all duration-300 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                top: hovered ? item.top : "50%",
                left: hovered ? item.left : "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={400}
                height={400}
                className="object-cover w-10 h-10"
              />
            </div>
          ))}
          {roundoutline}
        </div>
        <div className="bg-zinc-800 py-8 px-6 flex flex-col gap-y-4 w-full h-full col-span-1 sm:col-span-2 md:col-span-2 row-span-2 rounded-xl relative">
          <p className="text-base text-white/80">
            👋 Hi there! I’m Moncef Meharzi, an 18-year-old web developer and
            UI/UX designer with 4+ years of experience crafting beautiful and
            functional digital solutions.
          </p>
          <div className="space-y-3">
            <h3 className="text-base text-white font-semibold">
              🔧 My Expertise:
            </h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Full-stack development with <strong> Next.js</strong>,{" "}
                <strong> React</strong>, and <strong> Node.js</strong>
              </li>
              <li>
                Designing seamless user experiences with <strong>Figma</strong>{" "}
              </li>
              <li>
                Styling with <strong>Tailwind CSS</strong>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-base text-white font-semibold">
              💡 What Drives Me:
            </h3>
            <p>
              I’m passionate about turning complex ideas into simple, intuitive
              designs and efficient code.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base text-white font-semibold">
              ⚽ Beyond Work:
            </h3>
            <p>
              When I’m not building or designing, you’ll find me playing
              football, gaming, or hitting the gym.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base text-white font-semibold">
              ✨ Let’s Collaborate!
            </h3>
            <p>
              If you’re looking for someone to bring your ideas to life, feel
              free to reach out.
            </p>
          </div>
          <SmoothScrollLink
            targetId="contact"
            hover={false}
            className="w-full flex h-full items-center justify-center"
          >
            <Button className="w-fit">Let&apos;s Collaborate</Button>
          </SmoothScrollLink>
        </div>
        <div className="bg-zinc-800  group w-full h-full min-h-[300px] col-span-1 group rounded-xl  overflow-hidden relative flex items-center justify-center">
          <div className="absolute top-0 py-8">
            <Reaveal>
              <h1 className="text-xl font-black uppercase ">loved Stack</h1>
            </Reaveal>
          </div>
          <div className="space-y-4">
            <ul className="flex gap-4 group-hover:translate-x-3  duration-150 relative shrink-0 MyGradient">
              {Stack.slice(0, 4).map(({ id, name }) => (
                <li
                  key={id}
                  className="border w-max  rounded-md bg-zinc-900 text-white/70 border-white/70 py-2 px-4"
                >
                  {name}
                </li>
              ))}
            </ul>
            <ul className="flex gap-4 relative group-hover:-translate-x-3 translate-x-1 duration-150 shrink-0 MyGradient">
              {Stack.slice(4, 8).map(({ id, name }) => (
                <li
                  key={id}
                  className="border w-max   rounded-md bg-zinc-900 text-white/70 border-white/70 py-2 px-4"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {roundoutline}
        </div>
      </div>
    </div>
  );
};
export default About;

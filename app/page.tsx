"use client";
import About from "@/components/global/About";
import Contact from "@/components/global/Contact";
import Hero from "@/components/global/Hero";
import Parallax from "@/components/global/Parallax";
import Works from "@/components/global/Works";
import { ScreenFitText } from "@/components/ui/FitText";
import InfiniteSkills from "@/components/ui/InfiniteSkills";
import { Skills } from "@/constant";
import useLenis from "@/hook/useLenis";

const HomePage = () => {
  useLenis();
  return (
    <main className="h-full w-full">
      <Hero />
      <Parallax />
      <InfiniteSkills items={Skills} className="" />
      <Works />
      <About />
      <Contact />
      <ScreenFitText />
    </main>
  );
};
export default HomePage;

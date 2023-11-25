import "./home.scss";

import Hero from "../hero/Hero.tsx";
import Skills from "../skills/Skills.tsx";
import Works from "../work/Works.tsx";
import Experience from "../background/Experience.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Works />
    </>
  );
}

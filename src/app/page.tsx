import Image from "next/image";
import {NavBar1 } from "./components/NavBar";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { Contect } from "./components/Contect";
import { About } from "./components/About";

export default function HomePage() {
  return (
    <div>
      <NavBar1 />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contect />
    </div>
  );
}

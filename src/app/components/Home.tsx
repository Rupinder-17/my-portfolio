"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes"
import { cn } from "@/lib/utils";
import { Container } from "./Container"
import { motion } from "motion/react";

export function Home() {
  return (
    <Container className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center p-6 rounded-lg">
      {/* Background mask effect */}
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
        id="home"
      />

      {/* Animated Background or Effect Component */}
      <Boxes />

      {/* Main Text Content */}
      <h1 className="relative z-30 text-white text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl text-center">
        Hi! I’m <span className="text-blue-400 font-semibold">Rupinder Kaur</span> — a passionate and dedicated web developer with a strong foundation in front-end technologies like <span className="text-yellow-400">HTML, CSS, JavaScript</span>, and <span className="text-cyan-400">React</span>. I love building clean, responsive, and user-friendly interfaces, often enhancing them with tools like <span className="text-pink-400">Tailwind CSS</span>, <span className="text-green-400">Framer Motion</span>, and <span className="text-orange-400">Toastify</span> for smooth interaction and feedback.
        <br /><br />
        I’ve worked on diverse projects, including food ordering apps, chat applications, and image sliders, always focusing on performance, usability, and a great user experience. I’m constantly learning, experimenting, and pushing myself to grow as a developer.
        <br /><br />
        Whether it’s crafting intuitive UI components or solving real-world problems through code, I’m always excited to turn ideas into interactive web experiences.
      </h1>

      {/* Optional Motion Header (commented in your code) */}
      {/* 
  <motion.h1
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      scale: { type: "spring", duration: 0.4, bounce: 0.5 },
    }}
    className="md:text-4xl text-3xl text-white font-bold mt-8 relative z-30 text-center"
  >
    Rupinder Kaur <br />
    <span className="text-blue-400 text-xl">SOFTWARE DEVELOPER</span>
  </motion.h1>
  */}

      {/* Optional Tagline or Subtext */}
      {/* 
  <p className="text-center mt-4 text-neutral-300 relative z-30">
    Framer Motion is the best animation library ngl
  </p>
  */}
    </Container>
  );
}

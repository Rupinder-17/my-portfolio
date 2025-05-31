"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes"
import { cn } from "@/lib/utils";
import { Container } from "./Container"
import { motion } from "motion/react";

export function Home() {
  return (
    <Container className="relative w-full overflow-hidden bg-slate-900 flex flex-col  px-6 py-16 rounded-2xl shadow-xl">
      {/* Radial background mask */}
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
        id="home"
      />

      {/* Optional animated or decorative component */}
      <Boxes />

      {/* Content Container */}
      <div className="relative z-30 max-w-4xl  space-y-6">
        {/* Name + Role */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Hi! I’m <span className="text-blue-400">Rupinder Kaur</span>
        </motion.h1>

       <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          A passionate <span className="text-yellow-400 font-semibold">front-end web developer</span> with a strong foundation in technologies like <span className="text-pink-400">HTML</span>, <span className="text-green-400">CSS</span>, <span className="text-blue-300">JavaScript</span>, and <span className="text-cyan-400">React</span>. I specialize in crafting clean, responsive, and user-friendly interfaces.
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I’ve built <span className="text-emerald-400 font-medium">food ordering apps</span>, <span className="text-orange-300 font-medium">chat applications</span>, and interactive <span className="text-purple-400 font-medium">image sliders</span>—always focusing on performance and user experience.
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          With tools like <span className="text-pink-300 font-medium">Tailwind CSS</span>, <span className="text-green-300 font-medium">Framer Motion</span>, and <span className="text-yellow-300 font-medium">Toastify</span>, I enhance web experiences to be smooth and interactive. I’m always experimenting, learning, and pushing boundaries to grow as a developer.
        </p> 

        <p className="text-lg md:text-xl text-gray-400 italic">
          "Turning ideas into beautiful, functional digital experiences."
        </p>
      </div> 
    </Container>

  );
}

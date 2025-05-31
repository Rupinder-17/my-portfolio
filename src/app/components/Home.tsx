"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes"
import { cn } from "@/lib/utils";
import { Container } from "./Container"
import { motion } from "motion/react";

export function Home() {
  return (
    <Container
      className=" relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <motion.h1 initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }} className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </motion.h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </Container>
  );
}

"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { motion } from "framer-motion";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MapPinIcon,
  CalendarIcon,
} from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Laravel",
  "TypeScript",
  "Node.js",
];

export function Home() {
  return (
    <Container className="relative w-full overflow-hidden items-center justify-center bg-slate-900 flex flex-col px-6 py-16 rounded-2xl shadow-xl">
      {/* Background radial mask */}
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
        id="home"
      />

      <Boxes />

      <div className="relative z-30 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content: bio */}
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Hi! I’m <span className="text-blue-400">Rupinder Kaur</span>
          </motion.h1>

          <h2 className="text-xl text-gray-300 mb-4 font-medium">
            Front-End Web Developer
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I specialize in building clean, responsive, and user-friendly
            interfaces using <span className="text-pink-400">React</span>,{" "}
            <span className="text-cyan-400">Tailwind CSS</span>, and more. I’ve
            worked on food ordering apps, chat applications, and image sliders,
            always focusing on performance and smooth interaction using tools
            like <span className="text-green-400">Framer Motion</span> and{" "}
            <span className="text-yellow-300">Toastify</span>.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 mb-6">
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2" />
              <span>Punjab, India</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <span>Available for new projects</span>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
          </div>

          <a
            href="/rupinder-kaur-cv.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>

        {/* Right content: image */}
        <div className="relative w-full  bg-amber-50 h-80 rounded-lg overflow-hidden shadow-xl">
          <img
            src="/your-photo.jpg"
            alt="Rupinder Kaur"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}

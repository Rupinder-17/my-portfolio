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
import { BorderBeam } from "@/components/magicui/border-beam";
// import MDEditor from "@uiw/react-md-editor";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Laravel",
  "TypeScript",
  "Node.js",
];
// import * as card from "../../components/ui/card";
// const code = `\`\`\`js
// const rupinderKaurDetails = [
//   {
//     name: "Rupinder Kaur",
//     profession: "Developer",
//     interests: ["Innovative software solutions", "Efficient coding"],
//     skills: ["HTML", "CSS", "JavaScript", "React", "GitHub , Tailwind css"]
//   }
// ];
// \`\`\``;

export default function Home() {
  return (
    <Container className="relative w-full overflow-hidden items-center justify-center bg-slate-900 flex flex-col  px-6 py-16 rounded-2xl shadow-xl">
      {/* Background radial mask */}
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
        id="home"
      />

      <Boxes />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
       className="relative z-30 w-full  max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16  items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Hi! I’m <span className="text-blue-400">Rupinder Kaur</span>
          </motion.h1   >

          <motion.h2 initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-xl text-gray-300 mb-4 font-medium">
            Front-End Web Developer
          </motion.h2>

          < motion.p initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }} className="text-gray-400 mb-4 leading-relaxed">
            I specialize in building clean, responsive, and user-friendly
            interfaces using <span className="text-pink-400">React</span>,{" "}
            <span className="text-cyan-400">Tailwind CSS</span>, and more. I’ve
            worked on food ordering apps, chat applications, and image sliders,
            always focusing on performance and smooth interaction using tools
            like <span className="text-green-400">Framer Motion</span> and{" "}
            <span className="text-yellow-300">Toastify</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }} className="mb-6">
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
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }} className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 mb-6">
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2" />
              <span>Punjab, India</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <span>Available for new projects</span>
            </div>
          </motion.div>

          <div  className="flex gap-4 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rupinder-kaur-randhawa-762140155/"
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

          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}

            href="/resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download CV
          </motion.a>
        </div>

        {/* Right content: image */}
        <div className="relative w-full rounded-lg shadow-2xl shadow-blue-900">
          <div className="">
            
            <Terminal className="bg-transparent border-0 pl-5 ">
              <TypingAnimation>&gt; </TypingAnimation>
              <AnimatedSpan delay={1000} className="text-red-500 text-xl">
                <span>✔ name: "Rupinder Kaur",</span>
              </AnimatedSpan>

              <AnimatedSpan delay={1500} className="text-blue-500 text-xl">
                <span>✔ profession: "Developer",</span>
              </AnimatedSpan>
              <AnimatedSpan delay={2000} className="text-cyan-500 text-xl">
                <span>✔ interests: ["Innovative software solutions", "Efficient coding"],</span>
              </AnimatedSpan>
              <AnimatedSpan delay={2500} className="text-amber-500 text-xl">
                <span>✔  skills: ["HTML", "CSS", "JavaScript", "ReactJS", "GitHub , 
                  Tailwind css","NextJS", "ReactNative"],</span>
              </AnimatedSpan>
              <AnimatedSpan delay={3000} className="text-emerald-700 text-xl pb-4">
                <span>✔ "Problem Solver: ture</span>
              </AnimatedSpan>
            </Terminal>
          </div>

          <BorderBeam duration={8} size={100} />
        </div>
      </motion.div>
    </Container>
  );
}

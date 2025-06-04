"use client"
// import { Container } from "./container"
import { Container } from "./Container"
import { Marquee } from "@/components/magicui/marquee"
import { motion } from "framer-motion"
// import * as sparkles from "../ui/sparkles";
import { SparklesCore } from "@/components/ui/sparkles";
// import { Sparkles } from "lucide-react";
import * as Sparkles from "@/components/ui/sparkles";

const skills = [
  {
    skill: "HTML5",
    description: "Expert in creating structured and semantic web page layouts with modern HTML5 features.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    category: "Frontend",
    level: "Expert",
    color: "from-orange-400 to-red-400",
  },
  {
    skill: "CSS3",
    description: "Skilled in designing responsive and visually appealing user interfaces with advanced CSS.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    category: "Frontend",
    level: "Expert",
    color: "from-blue-400 to-cyan-400",
  },
  {
    skill: "Laravel",
    description: "Proficient in building robust back-end systems using Laravel framework and PHP.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    category: "Backend",
    level: "Advanced",
    color: "from-red-400 to-orange-400",
  },
  {
    skill: "TypeScript",
    description: "Strong in typed JavaScript for scalable front-end architecture and better code quality.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    category: "Frontend",
    level: "Advanced",
    color: "from-blue-400 to-indigo-400",
  },
  {
    skill: "JavaScript",
    description: "Experienced in adding interactivity and dynamic functionality to web applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    category: "Frontend",
    level: "Expert",
    color: "from-yellow-400 to-orange-400",
  },
  {
    skill: "React.js",
    description: "Built dynamic UIs with reusable component architecture and modern React patterns.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    category: "Frontend",
    level: "Expert",
    color: "from-cyan-400 to-blue-400",
  },
  {
    skill: "GitHub",
    description: "Version control and collaboration using Git and GitHub for efficient team development.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    category: "Tools",
    level: "Advanced",
    color: "from-gray-400 to-gray-600",
  },
  {
    skill: "Tailwind CSS",
    description: "Built responsive, custom designs using utility-first CSS framework for rapid development.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    category: "Frontend",
    level: "Expert",
    color: "from-teal-400 to-cyan-400",
  },
  {
    skill: "Node.js",
    description: "Server-side JavaScript development for building scalable backend applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    category: "Backend",
    level: "Advanced",
    color: "from-green-400 to-emerald-400",
  },
  {
    skill: "Next.js",
    description: "Full-stack React framework for production-ready applications with SSR and SSG.",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
    category: "Frontend",
    level: "Advanced",
    color: "from-gray-300 to-gray-500",
  },
]

const firstRow = skills.slice(0, Math.ceil(skills.length / 2))
const secondRow = skills.slice(Math.ceil(skills.length / 2))

const SkillCard = ({ skill, description, logo, category, level, color }: any) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-400"
      case "Advanced":
        return "bg-blue-400"
      case "Intermediate":
        return "bg-yellow-400"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <motion.figure
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative w-80 h-52 border border-gray-800 rounded-2xl p-6 shadow-2xl bg-black hover:bg-gray-950 transition-all duration-300"
    >
      {/* Gradient border effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
      />

      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Category badge */}
      <div className="absolute top-4 right-4">
        <span className="px-2 py-1 text-xs font-medium bg-gray-800 border border-gray-700 rounded-full text-gray-300">
          {category}
        </span>
      </div>

      {/* Logo and title */}
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-800 p-2 group-hover:border-gray-700 transition-colors duration-300 flex items-center justify-center">
            <img
              src={logo || "/placeholder.svg"}
              alt={skill}
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div
            className={`absolute -bottom-1 -right-1 w-4 h-4 ${getLevelColor(level)} rounded-full border-2 border-black`}
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
            {skill}
          </h3>
          <p className="text-sm text-gray-400">{level}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 relative z-10">{description}</p>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
      />
    </motion.figure>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative w-full   overflow-hidden bg-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <div className=" w-full bg-black flex flex-col items-center   overflow-hidden rounded-md">
            <h1 className="md:text-2xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
              Skills
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
            <div className="w-[40rem] h-15 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              {/* <Sparkles.SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              /> */}

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          {/* <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">Skills</span>
          </h2> */}
         

          {/* Decorative line */}
        
        </motion.div>

        {/* Skills marquee */}
        <div className="space-y-8 ">
          <Marquee pauseOnHover className="[--duration:25s]">
            {firstRow.map((skill) => (
              <SkillCard key={skill.skill} {...skill} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((skill) => (
              <SkillCard key={skill.skill} {...skill} />
            ))}
          </Marquee>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-6 bg-gray-900 border border-gray-800 rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-sm text-gray-300">Expert</span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full" />
              <span className="text-sm text-gray-300">Advanced</span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="text-sm text-gray-300">Intermediate</span>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Gradient overlays for smooth edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />
    </section>
  )
}

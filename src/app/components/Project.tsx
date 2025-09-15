"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles";
import * as Sparkles from "@/components/ui/sparkles";
import quizapp from "@/app/images/QuizApp.png"
import weather from "@/app/images/weather-App.png"
import rider from "@/app/images/riderApp.png"
import hrSolex from "@/app/images/hesolex.png"
import ace from "@/app/images/ace.png"
import Image from "next/image";
import chat from "@/app/images/ChatGPT Image Jun 3, 2025, 11_17_59 PM.png"
import slider from "@/app/images/ChatGPT Image Jun 5, 2025, 07_27_56 AM.png"
import insta from "@/app/images/ChatGPT Image Jun 5, 2025, 07_41_53 AM.png"
import pomoDoro from "@/app/images/Screenshot (18).png"
import AIchatbot from "@/app/images/AIchatbot.png"

export const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  // const [hoveredProject, setHoveredProject] = useState()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "HRsolex",
      description: "A modern HR management platform designed to streamline employee data, attendance tracking, payroll processing, and recruitment workflows. Built with Next.js and Tailwind CSS, it offers a clean UI and efficient tools for businesses to manage their workforce effectively.",
      link: "https://www.hrsolx.com/",
      image: hrSolex,
      technologies: ["Next.js", "Tailwind CSS", "UI Design"],
      category: "Web App",

    },
    {
      title: "Acehaematology",
      description: "A healthcare-focused web platform that provides resources, services, and information related to haematology. Built with Next.js and Tailwind CSS, it delivers a user-friendly interface for patients, doctors, and healthcare professionals to access reliable medical content and services.",
      link: "https://www.acehaematology.com/",
      image: ace,
      technologies: ["Next.js", "Tailwind CSS", "UI Design"],
      category: "Web App",

    },
    {
      title: "AI-Chatbot",
      description: "An interactive AI-powered chatbot built with Next.js and Tailwind CSS. It provides real-time responses, a clean and modern UI, and can be used for tasks like answering questions, managing workflows, or enhancing customer support.",
      link: "https://my-ai-appp-m3uc.vercel.app/",
      image: AIchatbot,
      technologies: ["Next.js", "Tailwind CSS", "UI Design"],
      category: "Web App",

    },
    {
      title: "Quiz App",
      description: "A quiz application that provides an engaging and interactive user experience.",
      link: "https://quizz-app-rosy.vercel.app/",
      technologies: ["React", "Interactive UI", "Quiz Features"],
      image: quizapp,
      category: "Web App",
      featured: true,
    },
    {
      title: "Rider App",
      description:
        "An app where users can purchase food and drinks. The purchased items are displayed in a list along with their count.",
      link: "https://rider-app-ten.vercel.app/",
      technologies: ["React", "State Management", "UI Design"],
      image: rider,
      category: "Web App",
      featured: true,
    },
    {
      title: "Weather App",
      description: "A website that provides real-time weather updates with a responsive and clean design.",
      link: "https://weather-app-js-psi.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: weather,
      category: "Web App",
    },
    {
      title: "Image Slider",
      description:
        "A dynamic image slider application with smooth transitions, allowing users to navigate through various images.",
      link: "https://image-slider-two-liart.vercel.app/",
      image: slider,
      technologies: ["React", "CSS Transitions"],
      category: "Component",
    },
    {
      title: "Chat App",
      description: "A real-time chat application that allows users to communicate with each other in real-time.",
      link: "https://free-api-chat.vercel.app/register",
      image: chat,
      technologies: ["React", "Tailwind CSS", "UI Design"],
      category: "Web App",
      featured: true,
    },
    {
      title: "Social Media App",
      description: "A social media platform where users can connect, share posts, and interact with others.",
      link: "https://social-media-app-ruddy-chi.vercel.app/",
      image: insta,
      technologies: ["React", "Tailwind CSS", "UI Design"],
      category: "Web App",
    },
    {
      title: "Pomodoro App",
      description: "A productivity app that helps users manage their time with the Pomodoro technique.",
      link: "https://pomodoro-timer-pi-liard.vercel.app/",
      image: pomoDoro,
      technologies: ["React", "Tailwind CSS", "UI Design"],
      category: "Web App",
    },
   
  ]

  const categories = ["All", "Web App", "Component", "Design"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="bg-black text-white py-20" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
           
          </motion.h2>
          <div className=" w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
              My Projects
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Here are some of my recent works
            </motion.p>
            <div className="w-[40rem] h-11 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className=""
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>

          
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300"
              // onMouseEnter={() => setHoveredProject(index as number)}
              // onMouseLeave={() => setHoveredProject(null)}
            >
             
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project.title}
                  height={400}
                  width={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute inset-0 bg-black/10 bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                    {project.category}
                  </span>
                </div>

                {/* Link Button */}
                {project.link && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">Coming Soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Rupinder-17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

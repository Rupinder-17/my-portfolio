"use client";
import React from "react";
import { Container } from "./Container";

const reviews = [
  {
    skill: "HTML",
    description: "Expert in creating structured and semantic web page layouts.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    skill: "CSS",
    description:
      "Skilled in designing responsive and visually appealing user interfaces.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    skill: "Laravel",
    description:
      "Proficient in building robust and scalable back-end systems using Laravel framework.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    skill: "TypeScript",
    description:
      "Experienced in enhancing JavaScript with strong typing and improved tooling for scalable applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    skill: "JavaScript",
    description:
      "Proficient in adding interactivity and functionality to web applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    skill: "React js",
    description:
      "Experienced in building dynamic and reusable components for efficient front-end development.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    skill: "GitHub",
    description:
      "Adept at version control and collaborative coding using Git and GitHub.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    skill: "Tailwind CSS",
    description:
      "Experienced in using utility-first CSS framework for rapidly building custom designs.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
];

export const Skills = () => {
  return (
    <div id="skills" className="py-16 bg-gray-950 text-white">
      <Container className="text-center space-y-10">
        <h1></h1>
       
      </Container>

    </div>
  );
};

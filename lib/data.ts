import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.jpg";
import rmtdevImg from "@/public/rmtdev.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999skilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Attendance Monitoring system",
    description:
      "i created a attendance monitoring model in computer vision whihc marks the attendance and update the attendance in online database making it indeendent from physical storage",
    tags: ["openCV", "python", "firebase", "django", "ai-ml"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Multiplayer Chess Website",
    description:
      "I created a multiplayer chess website which allows users to play chess with other person by sharing a link and do a videocall while playing with no interruption in play.",
    tags: ["React", "Next.js","socket.io","WebRTC","Node. js"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Multiplayer Chess Website",
    description:
      "I created a multiplayer chess website which allows users to play chess with other person by sharing a link and do a videocall while playing with no interruption in play.",
    tags: ["React", "Next.js","socket.io","WebRTC","Node. js"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Multithreaded proxy server with LRU cache",
    description:
      "I created a multiplayer chess website which allows users to play chess with other person by sharing a link and do a videocall while playing with no interruption in play.",
    tags: ["C", "Computer Networking","System Design","Linux"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Three.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Unit Testing",
  
] as const;

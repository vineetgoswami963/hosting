import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.jpg";
import rmtdevImg from "@/public/rmtdev.jpg";
import proxym from "@/public/proxym.jpg";
import chess from "@/public/chess.png";

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
    title: "Multiplayer Chess Website",
    description:
      "I created a multiplayer chess website which allows users to play chess with other person by sharing a link and do a videocall while playing with no interruption in play.",
    tags: ["React", "Next.js","socket.io","WebRTC","Node. js"],
    imageUrl: chess,
    source:"https://github.com/vineetgoswami963/chess-front"
  },
  {
    title: "Multithreaded proxy server with LRU cache",
    description:
      "A high-performance, multithreaded proxy server designed for speed and concurrent request handling.",
    tags: ["C", "Computer Networking","System Design","Linux"],
    imageUrl: proxym,
    source:"https://github.com/vineetgoswami963/Proxy-Server/tree/main"
  },
  {
    title: "Attendance Monitoring system",
    description:
    "A smart attendance system powered by computer vision that instantly marks and syncs attendance records to an online database.", 
    tags: ["openCV", "python", "firebase", "django"],
    imageUrl: corpcommentImg,
    source:""
  },
 
 
 
  {
    title: "An Ed-tech platform",
    description:
      "Will Publish it soon....... ",
    tags: [],
    imageUrl: proxym,
    source:"https://github.com/vineetgoswami963/Proxy-Server/tree/main"
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

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      <span>Hello! I'm VINEET GOSWAMI</span>, a passionate 6th-semester engineering student with a keen interest in web development and machine learning, especially in computer vision. My journey into the world of programming started with a fascination for creating beautiful and functional websites, which led me to explore various technologies and frameworks like <span className="font-semibold">Next.js, Node.js, and Three.js.</span> <br />
      I thrive on challenges and love the process of turning ideas into reality through code. <br />
      <p>My goal is to continuously learn and grow, pushing the boundaries of what's possible in the digital world. Whether it's building responsive and intuitive web applications or developing innovative solutions in machine learning, I'm always up for the challenge.
      Currently, I'm honing my skills in full-stack web development, combining my knowledge of front-end and back-end technologies to create seamless user experiences.</p>
      <br />I'm also deeply engaged in the field of <span className="font-semibold">computer vision</span>, working on projects that involve machine learning models for image and video analysis.<br />
      I believe in the power of technology to transform lives and am excited about the endless possibilities that lie ahead. Join me on this journey as we explore the limitless potential of web development and machine learning together.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}

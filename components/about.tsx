

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import StarsDisplay from "@/components/star/StarsDisplay";  

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
      {/* --- Main Professional Introduction --- */}

<p className="mb-3">
  <span>Hello, I'm VINEET GOSWAMI.</span> I live at the intersection of elegant code and intelligent machines. As a full-stack developer, I architect complete digital ecosystems—crafting immersive user experiences with {" "}
  <span className="font-semibold">Next.js and React</span> on the front-end, and powering them with robust, scalable back-ends using {" "}
  <span className="font-semibold">Node.js</span>. By night, I'm teaching machines to see, analyzing visual data to solve complex problems in computer vision.
</p>

<p className="mb-3">
  My background in competitive programming isn't just a hobby—it's the foundation for how I build everything: with a deep respect for efficiency and elegant, high-performance solutions. This mindset for optimization applies everywhere, whether it's minimizing API latency on the server or streamlining a neural network. 
</p>

<p className="mb-8">
  For me, it’s not enough to simply build a feature; I'm driven to create holistic products where the user interface is as intelligent as the logic running behind it. This portfolio is a glimpse into that world. Dive in, and let's build something awesome together.
</p>

{/* --- Hobbies & Interests Section --- */}

<h3 className="text-xl font-semibold mb-3">The Strategist & The Sportsman</h3>

<p className="mb-3">
  When the laptop closes, the strategist in me doesn't switch off—it just changes arenas. Like many in India, I'm still processing the end of an era with Virat Kohli's retirement, but I channel that passion for the game onto the local pitch. As a batsman, I thrive on the pressure of <span className="font-medium">opening the innings or coming in at one-down</span>, setting the tone for the team. 
</p>

<p className="mb-8">
  That same love for foresight and strategy extends to the <span className="font-medium">chessboard</span>, where every move counts. For a different kind of recharge, my time is filled with the immersive stories of movies and video games.
</p>



       <div className="flex flex-col items-center justify-center w-full mb-10">  
        <img
          src="/cc2.png"  
          alt="CodeChef Logo"
           className="w-[140px] h-auto object-contain mb-[-3rem]"  
         />
        <StarsDisplay />
      </div>
    </motion.section>
  );
}
'use client'
// export const dynamic = 'force-dynamic';
import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
// import Particle from "@/components/particle";
// import Earth from "@/components/earth";
// import Projectss from "@/components/projectss"
// Import Next.js dynamic utility
import dynamic from 'next/dynamic';

// Dynamically import client-side components with SSR disabled
const Particle = dynamic(() => import('@/components/particle'), { ssr: false });
const Earth = dynamic(() => import('@/components/earth'), { ssr: false });
const Projectss = dynamic(() => import('@/components/projectss'), { ssr: false }); // Assuming this might also be an issue

export default function Home() {
  return (

    <div>
      <main style={{ height: '60vw', backgroundColor: '#0f0f0f', marginTop: '-20vh', marginBottom: '10vh', position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
      <Particle/>
      <Earth />
        <Projectss />
      </main>
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills /> 
      <Contact />
    </main>
    </div>
  );
}

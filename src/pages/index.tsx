import Projects from '@/components/home/projects/Projects.component';
import HeroSection from '../components/home/hero-section/HeroSection.component';

import { Inter } from 'next/font/google';
import CreativeSection from '@/components/home/creative/CreativeSection.component';

export default function Home() {
  return (
    <div className="bg-[#030027] min-h-screen h-full">
      <div className="flex flex-col gap-28">
        <div
          style={{
            perspective: '2000px',
          }}
          className="flex justify-center items-center hero relative pt-32"
        >
          <div className="absolute h-72 w-48 bg-purple-700 highlight-div top-72 left-44 -z-1 blur-3xl opacity-50 rounded-full rotate-45 overflow-hidden" />
          <div className="absolute h-72 w-48 bg-cyan-800 highlight-div top-10 right-40 -z-1 blur-3xl opacity-60 rounded-full rotate-45 overflow-hidden" />

          <HeroSection />
        </div>
        <Projects />
        <CreativeSection />
      </div>
    </div>
  );
}

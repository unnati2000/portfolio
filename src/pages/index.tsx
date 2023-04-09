import HeroSection from '../components/home/HeroSection.component';

import { Inter } from 'next/font/google';

export default function Home() {
  // bg-[#030027]
  // 151E3F
  // 7D5BA6
  // 2A2D43
  // 0C0A3E
  return (
    <div className="bg-[#030027] min-h-screen">
      <div className="p-8">
        <p className="font-semibold bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-transparent bg-clip-text text-lg">
          unnatibamania.me
        </p>
      </div>

      <div className="flex justify-center items-center hero relative">
        <div className="absolute h-72 w-48 bg-purple-700 highlight-div top-72 left-44 -z-1 blur-3xl opacity-50 rounded-full rotate-45 overflow-hidden" />
        <div className="absolute h-72 w-48 bg-cyan-800 highlight-div top-10 right-40 -z-1 blur-3xl opacity-60 rounded-full rotate-45 overflow-hidden" />
        <HeroSection />
      </div>
    </div>
  );
}

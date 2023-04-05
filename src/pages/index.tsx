import HeroSection from '../components/home/HeroSection.component';

import { Inter } from 'next/font/google';

export default function Home() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="p-8">
        <p className="font-semibold bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-transparent bg-clip-text text-lg">
          unnatibamania.me
        </p>
      </div>
      <div className="flex justify-center pt-6 items-center">
        <HeroSection />
      </div>
    </div>
  );
}

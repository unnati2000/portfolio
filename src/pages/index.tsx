import HeroSection from '../components/home/HeroSection.component';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <div className="p-4">
        <h1 className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-transparent bg-clip-text">
          unnatibamania.me
        </h1>
      </div>
      <div className="flex justify-center pt-12 items-center">
        <HeroSection />
      </div>
    </div>
  );
}

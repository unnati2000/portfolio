import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <div className="p-4">
        <p className="text-cyan-600 text-lg">unnatibamania.me</p>
      </div>
    </div>
  );
}

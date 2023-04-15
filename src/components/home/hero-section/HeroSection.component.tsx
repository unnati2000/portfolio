import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

import CodeEditor from './CodeEditor.component';

const HeroSectionComponent: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotation = useTransform(scrollYProgress, [0, 0.4], ['0deg', '-90deg']);

  return (
    <motion.div
      initial={{
        rotateX: 0,
      }}
      style={{
        transformOrigin: 'top center',
        rotateX: rotation,
      }}
      className="w-2/3 rounded-md z-100 relative bg-[#151E3F] border-2 border-indigo-950"
    >
      {/* navbar */}
      <div className="flex gap-3 justify-end rounded-md bg-slate-950 p-3">
        <div className="h-2 w-2 rounded-full bg-rose-700" />
        <div className="h-2 w-2 rounded-full bg-yellow-400" />
        <div className="h-2 w-2 rounded-full bg-green-500" />
      </div>

      <div className="flex items-center">
        {/* myself content */}
        <div className="flex w-1/2 flex-col gap-4 px-8 py-16">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <h1 className="text-4xl text-white">Hi! I am</h1>

              <span className="font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600  text-transparent bg-clip-text text-4xl">
                Unnati Bamania
              </span>
            </div>
            <p className="text-lg text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              officia quas consequuntur ducimus eos quaerat, labore accusantium
              deleniti incidunt repellendus officiis error minus esse illum
              distinctio eaque neque sequi maxime?
            </p>

            <Link href={'/about'}>
              <button
                className="py-4 px-12 w-fit bg-indigo-900 rounded-full"
                style={{
                  boxShadow: '0px 0px 30px 12px rgba(99, 102 ,241,0.3)',
                }}
              >
                About Me
              </button>
            </Link>
          </div>
        </div>
        {/* editor */}
        <div className="w-1/2 ">
          <CodeEditor />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSectionComponent;

import React from 'react';

import CodeEditor from './CodeEditor.component';

const HeroSectionComponent: React.FC = () => {
  return (
    <div className="h-3xl w-2/3 rounded-md z-100 relative bg-[#151E3F] border-2 border-indigo-950">
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
            <div className="flex gap-2">
              <h1 className="text-4xl text-white">Hi! I am</h1>

              <h1 className="font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600  text-transparent bg-clip-text text-4xl">
                Unnati Bamania
              </h1>
            </div>

            <p className="text-lg text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              officia quas consequuntur ducimus eos quaerat, labore accusantium
              deleniti incidunt repellendus officiis error minus esse illum
              distinctio eaque neque sequi maxime?
            </p>
          </div>
        </div>
        {/* editor */}
        <div className="w-1/2 ">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;

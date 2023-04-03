import React from 'react';

import CodeEditor from './CodeEditor.component';

const HeroSectionComponent: React.FC = () => {
  return (
    <div className="h-3xl w-3/4 rounded-md bg-zinc-800">
      {/* navbar */}
      <div className="flex gap-3 justify-end rounded-sm bg-zinc-700 p-3">
        <div className="h-2 w-2 rounded-full bg-rose-700" />
        <div className="h-2 w-2 rounded-full bg-yellow-400" />
        <div className="h-2 w-2 rounded-full bg-green-500" />
      </div>

      <div className="flex">
        {/* myself content */}
        <div className="flex w-1/2 flex-col gap-4 px-8 py-16">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <h1 className="text-4xl text-white">Hi! I am</h1>
              <h1 className="font-bold bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-transparent bg-clip-text text-4xl">
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
        <div className="w-1/2">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;

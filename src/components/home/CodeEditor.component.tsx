import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { RxCross1 } from 'react-icons/rx';
import { CgLoadbar } from 'react-icons/cg';
import { BsWindowFullscreen, BsCode } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

import { programmingLanguages } from '@/utils/codeUtils';

interface LanguageProps {
  index: number;
  Icon: IconType;
  name: string;
  language: string;
  code: string;
}

const CodeEditor: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageProps>(
    programmingLanguages[0]
  );
  return (
    <div className="rounded-md pt-8 pr-8">
      {/* navbar */}

      <div className="bg-zinc-950 h-8 flex justify-end rounded-t-md flex items-center">
        <div className="hover:bg-zinc-900 h-full py-1 px-2 flex items-center cursor-pointer">
          <CgLoadbar size={16} color="white" />
        </div>
        <div className="hover:bg-zinc-900 h-full py-1 px-2 flex items-center cursor-pointer">
          <BsWindowFullscreen size={16} color="white" />
        </div>
        <div className="hover:bg-rose-800 rounded-r-md  h-full py-1 px-2 items-center flex items-center cursor-pointer">
          <RxCross1 size={16} color="white" />
        </div>
      </div>

      {/* code editor */}
      <div className="flex">
        <div className="bg-zinc-900 py-8 px-4 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <BsCode size={24} className="bg-teal-500" />
            <p className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-transparent bg-clip-text text-lg">
              Languages
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {programmingLanguages.map((language) => (
              <div
                key={language.index}
                onClick={() => setSelectedLanguage(language)}
                className={
                  selectedLanguage.index === language.index
                    ? 'flex justify-between items-center p-1 w-full bg-zinc-800 cursor-pointer rounded-md'
                    : 'flex justify-between items-center p-1 w-full hover:bg-zinc-800 cursor-pointer rounded-md'
                }
              >
                <div className="flex items-center gap-2">
                  <language.Icon size={24} className="text-zinc-600" />
                  <p className="text-md text-zinc-600">{language.name}</p>
                </div>
                <IoIosArrowForward
                  size={12}
                  className="text-md text-zinc-600"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 p-4 bg-zinc-950 text-zinc-800">
          {selectedLanguage.code}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

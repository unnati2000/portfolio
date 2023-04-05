import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { RxCross1 } from 'react-icons/rx';
import { CgLoadbar } from 'react-icons/cg';
import { BsWindowFullscreen, BsCode } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

import { programmingLanguages } from '@/utils/codeUtils';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

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

  const [typingDone, setTypingDone] = useState(false);

  const handleTypingDone = () => {
    setTypingDone(true);
  };

  return (
    <div className="rounded-md">
      {/* navbar */}

      <div className="bg-neutral-950 h-8 flex justify-end rounded-t-md flex items-center">
        <div className="hover:bg-zinc-900 h-full py-1 px-2 flex items-center cursor-pointer">
          <CgLoadbar size={16} color="white" />
        </div>
        <div className="hover:bg-zinc-900 h-full py-1 px-2 flex items-center cursor-pointer">
          <BsWindowFullscreen size={16} color="white" />
        </div>
        <div className="hover:bg-rose-800 rounded-r-md  h-full py-1 px-2  flex items-center cursor-pointer">
          <RxCross1 size={16} color="white" />
        </div>
      </div>

      {/* code editor */}
      <div className="flex">
        <div className="bg-zinc-900 w-1/3 py-8 px-4 flex flex-col gap-6 rounded-bl-md">
          <div className="flex items-center gap-2">
            <BsCode size={24} className="text-teal-500" />
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
        <div className="p-4  w-2/3 bg-zinc-950 text-zinc-800 rounded-br-md">
          {typingDone ? (
            <Editor
              value={selectedLanguage.code}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
              highlight={(code) => highlight(code, languages.js)}
            />
          ) : (
            <Typist
              avgTypingDelay={30}
              onTypingDone={handleTypingDone}
              cursor={{
                hideWhenDone: true,
                hideWhenDoneDelay: 0,
              }}
            >
              <Editor
                value=""
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                }}
                highlight={(code) => highlight(code, languages.js)}
              />
            </Typist>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

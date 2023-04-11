import React, { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { CgLoadbar } from 'react-icons/cg';
import { BsWindowFullscreen, BsCode } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { Editor } from '@monaco-editor/react';
import Typist from 'react-typist';

import { programmingLanguages } from '@/utils/codeUtils';

const CodeEditor: React.FC = () => {
  const [typingDone, setTypingDone] = useState(false);
  const [index, setIndex] = useState<number>(0);

  const handleTypingDone = () => {
    setTypingDone(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % programmingLanguages.length);
      setTypingDone(false);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-md py-8 pr-8">
      {/* navbar */}
      <div className="border-2 border-slate-800 rounded-md">
        <div className="bg-gray-950 h-8 justify-end rounded-t-md flex items-center">
          <div className="hover:bg-zinc-900 h-full py-1 px-2 flex items-center cursor-pointer">
            <CgLoadbar size={16} color="white" />
          </div>
          <div className="hover:bg-zinc-900 h-full py-1 px-2 flex items-center cursor-pointer">
            <BsWindowFullscreen size={16} color="white" />
          </div>
          <div className="hover:bg-rose-800 rounded-r-md  h-full py-1 px-2 flex items-center cursor-pointer">
            <RxCross1 size={16} color="white" />
          </div>
        </div>

        {/* code editor */}
        <div className="flex">
          <div className="bg-slate-900 w-1/3 py-8 px-4 flex flex-col gap-6 rounded-bl-md">
            <div className="flex items-center gap-2">
              <BsCode size={24} className="text-sky-500" />
              <p className="bg-gradient-to-r font-semibold from-sky-500 via-blue-600 to-indigo-700 text-transparent bg-clip-text text-lg">
                Languages
              </p>
            </div>
            <div className="flex flex-col gap-1">
              {programmingLanguages.map((language) => (
                <div
                  key={language.index}
                  onClick={() => setIndex(language.index)}
                  className={
                    programmingLanguages[index].index === language.index
                      ? 'flex transition-colors delay-100 ease-in-out justify-between items-center p-2 w-full bg-slate-950 cursor-pointer rounded-md'
                      : 'flex transition-colors delay-100 ease-in-out justify-between items-center p-2 w-full hover:bg-gray-900 cursor-pointer rounded-md'
                  }
                >
                  <div className="flex items-center gap-2">
                    <language.Icon
                      size={24}
                      className={
                        programmingLanguages[index].index === language.index
                          ? 'text-md text-indigo-600 font-semibold '
                          : 'text-md text-indigo-400'
                      }
                    />
                    <p
                      className={
                        programmingLanguages[index].index === language.index
                          ? 'text-md text-indigo-600 font-semibold '
                          : 'text-md text-indigo-400'
                      }
                    >
                      {language.name}
                    </p>
                  </div>
                  <IoIosArrowForward
                    size={12}
                    className="text-md text-slate-600"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/3 bg-[#0d1117] text-zinc-800 rounded-br-md flex items-center justify-start">
            {/* <Typist onTypingDone={handleTypingDone}> */}
            <Editor
              height="100%"
              defaultValue={programmingLanguages[index]?.code}
              theme="vs-dark"
              defaultLanguage="javascript"
              value={programmingLanguages[index]?.code}
              width="100%"
              language={programmingLanguages[index].language}
              saveViewState={false}
              options={{
                readOnly: true,
                wordWrap: 'on',
                minimap: {
                  enabled: false,
                },
                fontSize: 16,
                scrollbars: {
                  vertical: 'hidden',
                },
              }}
            />
            {/* </Typist> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

import { useState } from 'react';
import { motion } from 'framer-motion';

import { AiOutlineTwitter } from 'react-icons/ai';

const Twitter = () => {
  const [hovered, setIsHovered] = useState(false);

  return (
    <div className="rounded-2xl flex flex-col gap-6  h-full p-3 backdrop-blur-4xl backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/20 border-indigo-950 border-2 relative">
      {hovered && (
        <motion.div
          initial={{
            height: 0,
            width: 0,
          }}
          animate={{
            height: '100%',
            width: '100%',
            origin: 'left center',
            transition: {
              duration: 0.5,
            },
          }}
          className={
            'border-2 h-full w-full absolute top-0  bg-gradient-to-tr from-blue-400 to-blue-500 right-0 z-10 rounded-lg'
          }
        ></motion.div>
      )}
      <div className="flex justify-between z-20">
        <div className="flex gap-2 items-center">
          <img
            src="https://github.com/unnati2000.png"
            height={30}
            width={30}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h1
              className={
                hovered
                  ? 'text-blue-600 font-semibold text-lg'
                  : 'text-indigo-400 text-lg'
              }
            >
              Unnati Bamania
            </h1>
            <p
              className={
                hovered ? 'text-sm text-white' : 'text-sm text-indigo-500'
              }
            >
              jsdhgfyui
            </p>
          </div>
        </div>
        <motion.div
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={
            hovered
              ? 'bg-blue-600 rounded-md p-2 h-min w-min border-2 border-blue-600 cursor-pointer'
              : 'border-2 h-min w-min p-2 border-indigo-400 rounded-md cursor-pointer hover:bg-indigo-400 z-10'
          }
        >
          <AiOutlineTwitter
            size={20}
            className={hovered ? 'text-white' : 'text-indigo-400'}
          />
        </motion.div>
      </div>

      <p className="text-sm text-white z-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti .
      </p>

      <button
        className={
          hovered
            ? 'bg-blue-600 border-2 border-blue-500 rounded-full py-1 z-20'
            : 'bg-indigo-400 border-2 border-indigo-400 rounded-full py-1 hover:bg-transparent hover:border-indigo-400 hover:border-2 hover:duration-200 hover:text-indigo-400 z-20'
        }
      >
        See Tweets
      </button>
    </div>
  );
};

export default Twitter;

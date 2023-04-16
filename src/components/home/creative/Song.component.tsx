import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpotify, FaBackward, FaPlay } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';
import {
  BsFillFastForwardFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs';
import { GiPauseButton } from 'react-icons/gi';

const Song = () => {
  const [hovered, setIsHovered] = useState(false);

  return (
    <div className="h-fit w-full rounded-lg backdrop-blur-4xl backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/20 border-indigo-950 border-2 flex flex-col gap-4 p-2">
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
            'border-2 h-full w-full absolute top-0  bg-gradient-to-tr from-green-950 to-green-900 right-0 z-10 rounded-lg'
          }
        ></motion.div>
      )}
      <div className="flex justify-between items-start z-20">
        <div
          className={
            hovered
              ? 'border-2 border-green-400 rounded-md'
              : 'border-2 border-indigo-400 rounded-md'
          }
        >
          <img
            src="https://picsum.photos/100"
            className="rounded-md object-cover"
          />
        </div>

        <div
          className={
            hovered
              ? 'bg-green-600 rounded-md p-2 h-min w-min border-2 border-green-600 cursor-pointer'
              : 'border-2 h-min w-min p-2 border-indigo-400 rounded-md cursor-pointer hover:bg-indigo-400 z-10'
          }
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FaSpotify
            size={28}
            className={hovered ? 'text-white' : 'text-indigo-400'}
          />
        </div>
      </div>

      <div className="flex flex-col z-20">
        <h1
          className={
            hovered ? 'text-xl text-green-400' : 'text-xl text-indigo-400'
          }
        >
          Song Name
        </h1>
        <p className="text-sm text-white">Soonger</p>
      </div>

      <div
        className={
          hovered
            ? 'border-2 border-green-400 flex items-center gap-4 justify-center p-2 rounded-full z-20'
            : 'border-2 border-indigo-400 flex items-center gap-4 justify-center p-2 rounded-full z-20'
        }
      >
        <MdLibraryMusic
          size={20}
          className={hovered ? 'text-green-400' : 'text-indigo-400'}
        />
        <FaBackward
          size={20}
          className={hovered ? 'text-green-400' : 'text-indigo-400'}
        />
        <FaPlay
          size={20}
          className={hovered ? 'text-green-400' : 'text-indigo-400'}
        />
        <BsFillFastForwardFill
          size={20}
          className={hovered ? 'text-green-400' : 'text-indigo-400'}
        />
        <BsVolumeDownFill
          size={24}
          className={hovered ? 'text-green-400' : 'text-indigo-400'}
        />
      </div>
    </div>
  );
};

export default Song;

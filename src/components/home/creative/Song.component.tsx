import { FaSpotify, FaBackward, FaPlay } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';
import {
  BsFillFastForwardFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs';
import { GiPauseButton } from 'react-icons/gi';

const Song = () => {
  return (
    <div className="h-full w-full rounded-lg backdrop-blur-4xl backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/20 border-indigo-950 border-2 flex flex-col gap-2 p-2">
      <div className="flex justify-between items-start">
        <div className="border-2 border-indigo-400 rounded-md">
          <img
            src="https://picsum.photos/100"
            className="rounded-md object-cover"
          />
        </div>

        <div className="border-2 border-indigo-400 rounded-md p-2">
          <FaSpotify size={28} className="text-indigo-400" />
        </div>
      </div>

      <div className="flex flex-col ">
        <h1 className="text-xl text-indigo-400">Song Name</h1>
        <p className="text-sm text-white">Soonger</p>
      </div>

      <div className="border-2 border-indigo-400 flex items-center gap-4 justify-center p-2 rounded-full">
        <MdLibraryMusic size={20} className="text-indigo-400" />
        <FaBackward size={20} className="text-indigo-400" />
        <FaPlay size={20} className="text-indigo-400" />
        <BsFillFastForwardFill size={20} className="text-indigo-400" />
        <BsVolumeDownFill size={24} className="text-indigo-400" />
      </div>
    </div>
  );
};

export default Song;

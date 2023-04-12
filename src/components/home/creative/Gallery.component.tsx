import { GiMountains } from 'react-icons/gi';
import { BsPersonWorkspace } from 'react-icons/bs';

const Gallery = () => {
  return (
    <div className="border-2 border-white rounded-lg relative">
      <div className="h-full w-full">
        <img src="https://picsum.photos/300" className="rounded-lg" />
      </div>
      <div className="z-10 flex justify-center">
        <div className="absolute bottom-2 flex gap-4 items-center bg-white p-2 rounded-full">
          <GiMountains size={18} className="text-slate-800" />
          <BsPersonWorkspace size={18} className="text-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

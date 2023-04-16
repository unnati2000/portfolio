import { AiOutlineBook } from 'react-icons/ai';

const Tessact = () => {
  return (
    <div className="backdrop-blur-4xl backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/20 border-indigo-950 border-2 rounded-lg p-4 flex flex-col gap-4 h-full">
      <div className="flex items-start justify-start gap-2">
        <div>
          <AiOutlineBook className="text-indigo-400" size={28} />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-indigo-400 text-lg font-semibold">Tessact</p>
          <p className="text-xs text-white">SDE 1</p>
        </div>
      </div>
      <div>
        <p className="text-white text-lg"> Currently working on Editor</p>
      </div>
    </div>
  );
};

export default Tessact;

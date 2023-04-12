import { AiOutlineBook } from 'react-icons/ai';

const Tessact = () => {
  return (
    <div className="border-2 border-indigo-400 rounded-lg p-4 flex flex-col gap-4">
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

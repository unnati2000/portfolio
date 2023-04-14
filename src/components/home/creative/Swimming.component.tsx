import { TbSwimming } from 'react-icons/tb';

const Swimming = () => {
  return (
    <div className="backdrop-blur-4xl backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/20 border-indigo-950 border-2 rounded-lg flex justify-between items-center h-full">
      <div>
        <p className="text-white p-2">If I am not coding I might by swimming</p>
      </div>
      <div className="bg-indigo-400 p-4 h-full w-min flex items-center rounded-tr-md rounded-br-md">
        <TbSwimming size={28} />
      </div>
    </div>
  );
};
export default Swimming;

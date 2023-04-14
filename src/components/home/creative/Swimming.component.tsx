import { useState } from 'react';
import { motion } from 'framer-motion';
import { TbSwimming } from 'react-icons/tb';

const Swimming = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="backdrop-blur-4xl backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/20 border-indigo-950 border-2 rounded-lg flex justify-between h-fit relative">
      <motion.div
        initial={{
          width: 'min-content',
        }}
        animate={{
          width: '200px',
          height: 'min-content',
          transition: {
            duration: 3,
          },
        }}
        transition={{
          duration: 3,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={
          // !isHovered
          // ? 'bg-indigo-400 p-4 h-full w-fit flex items-center rounded-tl-md rounded-bl-md flex-1'
          'bg-indigo-400 p-4 h-full w-fit  flex items-center rounded-md flex-1'
        }
      >
        <TbSwimming size={28} />
      </motion.div>

      <div>
        <p className={!isHovered ? 'text-white p-2' : 'w-0 opacity-0'}>
          If I am not coding I might by swimming
        </p>
      </div>
    </div>
  );
};
export default Swimming;

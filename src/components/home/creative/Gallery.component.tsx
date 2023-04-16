import { FaMountain } from 'react-icons/fa';
import { CgCoffee } from 'react-icons/cg';
import { HiPaintBrush } from 'react-icons/hi2';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [category, setCategory] = useState('nature');
  return (
    <div className="rounded-xl relative h-full w-full">
      <div className="h-full w-full">
        <img src="https://picsum.photos/300" className="rounded-2xl h-full" />
      </div>
      <div className="z-10 flex justify-center">
        <div className="absolute bottom-2 flex gap-6 items-center bg-gray-400/10 px-4 py-2 rounded-full backdrop-blur-lg backdrop-saturate-100">
          <motion.div
            initial={{
              x: 0,
            }}
            animate={{
              backgroundColor: category === 'nature' ? 'white' : 'transparent',
            }}
            transition={{ duration: 1 }}
            className={
              category === 'nature'
                ? 'bg-white rounded-full py-2 px-4 cursor-pointer'
                : 'cursor-pointer'
            }
            onClick={() => setCategory('nature')}
          >
            <FaMountain size={24} className="text-slate-800 cursor-pointer" />
          </motion.div>

          <motion.div
            className={
              category === 'coffee'
                ? 'bg-white rounded-full py-2 px-4 cursor-pointer'
                : 'cursor-pointer'
            }
            onClick={() => setCategory('coffee')}
          >
            <CgCoffee
              onClick={() => setCategory('coffee')}
              size={24}
              className="text-slate-800 cursor-pointer"
            />
          </motion.div>

          <motion.div
            className={
              category === 'paint'
                ? 'bg-white rounded-full py-2 px-4 cursor-pointer'
                : 'cursor-pointer'
            }
            onClick={() => setCategory('paint')}
          >
            <HiPaintBrush
              onClick={() => setCategory('paint')}
              size={24}
              className="text-slate-800 cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

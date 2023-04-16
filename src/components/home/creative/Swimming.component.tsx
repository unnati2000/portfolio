import { useState } from 'react';
import { motion } from 'framer-motion';
import { TbSwimming } from 'react-icons/tb';

import styles from './creative.module.css';

const Swimming = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="backdrop-blur-4xl h-full backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/20 border-indigo-950 border-2 rounded-lg flex justify-between flex-col relative"
    >
      <div>
        <p className={'text-white font-semibold text-2xl text-center p-4'}>
          If I am not coding I might be swimming
        </p>
      </div>

      {isHovered ? (
        <div className={styles.swimming}></div>
      ) : (
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,149.3C840,192,960,256,1080,234.7C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a2d9ff"
              fill-opacity="1"
              d="M0,32L80,74.7C160,117,320,203,480,234.7C640,267,800,245,960,202.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};
export default Swimming;

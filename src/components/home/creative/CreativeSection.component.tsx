import { AiOutlineTwitter } from 'react-icons/ai';
import { motion, useScroll, useTransform } from 'framer-motion';

import Book from './Book.component';
import Twitter from './Twitter.component';
import DevTo from './DevTo.component';
import Medium from './Medium.component';
import Tessact from './Tessact.component';
import Gallery from './Gallery.component';
import Swimming from './Swimming.component';
import DevToStats from './DevToStats.component';
import Song from './Song.component';

const CreativeSection = () => {
  const { scrollYProgress } = useScroll();

  const upwards = useTransform(scrollYProgress, [0.8, 1], [-24, 10]);
  const downwards = useTransform(scrollYProgress, [0.8, 1], [0, 24]);

  return (
    <div className="grid grid-rows-12 grid-cols-12 gap-4">
      <div className="row-start-1 row-span-3 col-start-2 col-span-6 py-4 px-4 ">
        <div className="flex flex-col gap-4">
          <p className="text-2xl text-indigo-400 font-semibold">Unnati demo</p>
          <h1 className="text-6xl text-white font-semibold">
            Lil More About Me
          </h1>
        </div>
      </div>

      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: upwards,
        }}
        className="row-start-1 row-span-4 col-start-10 col-span-2 text-white"
      >
        <Twitter />
      </motion.div>

      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: downwards,
        }}
        className="row-start-2 row-span-4 col-start-8 col-span-2"
      >
        <Tessact />
      </motion.div>

      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: downwards,
        }}
        className="row-start-5 row-span-6 col-start-2 col-span-2 text-white"
      >
        <DevTo />
      </motion.div>

      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: upwards,
        }}
        className="row-start-5 row-span-1 col-start-4 col-span-2 text-white h-min"
      >
        <Gallery />
      </motion.div>

      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: upwards,
        }}
        className="row-start-4 row-span-1 col-start-4 col-span-2 text-white"
      >
        <Swimming />
      </motion.div>

      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: downwards,
        }}
        className="row-start-5 mt-44 row-span-1 col-start-6 col-span-2 text-white  w-full"
      >
        <Song />
      </motion.div>

      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: downwards,
        }}
        className="row-start-4 row-span-1 col-start-6 col-span-2"
      >
        <Book />
      </motion.div>

      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: downwards,
        }}
        className="row-start-5 row-span-4 col-start-6 col-span-2  text-white"
      >
        <DevToStats />
      </motion.div>

      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: upwards,
        }}
        className="row-start-5 row-span-1 col-start-8 col-span-4 text-white"
      >
        <Medium />
      </motion.div>
    </div>
  );
};

export default CreativeSection;

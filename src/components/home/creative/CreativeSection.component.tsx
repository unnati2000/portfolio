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

  const upwards = useTransform(scrollYProgress, [0.7, 1], [-28, 0]);
  const downwards = useTransform(scrollYProgress, [0.7, 1], [0, 28]);

  return (
    <div className="grid grid-rows-6 grid-cols-10 gap-4 px-16">
      <div className="row-start-1 row-span-1 col-start-2 col-span-6 py-4 px-4 ">
        <div className="flex flex-col gap-4">
          <p className="text-2xl text-indigo-400 font-semibold">Unnati demo</p>
          <h1 className="text-6xl text-white font-semibold">
            Lil More About Me
          </h1>
        </div>
      </div>
      {/* row 1->2 col-> 9-10 */}
      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: upwards,
        }}
        className="row-start-1 row-span-1 col-start-9 col-span-2 text-white"
      >
        <Twitter />
      </motion.div>

      {/* rows 2->5 column 1->3 */}
      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: downwards,
        }}
        className="row-start-2 row-span-2 col-start-1 col-span-2  text-white"
      >
        <DevTo />
      </motion.div>

      {/* rows 2->3 column 3->5 */}
      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: upwards,
        }}
        className="row-start-2 row-span-1 col-start-3 col-span-2 text-white"
      >
        <Book />
      </motion.div>

      {/* rows 2->3 col 5->8 */}
      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: upwards,
        }}
        className="row-start-2 row-span-1 col-start-5 col-span-3 border-2 text-white"
      >
        <Tessact />
      </motion.div>

      {/* row 2->3 column 5->3  */}

      {/* 2->4 col 8->3 */}
      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: downwards,
        }}
        className="row-start-2 row-span-2 col-start-8 col-span-3 text-white"
      >
        <Gallery />
      </motion.div>

      {/* row 3->6 column 3->6 */}
      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: upwards,
        }}
        className="row-start-3 row-span-3 col-start-3 col-span-3  text-white"
      >
        <Medium />
      </motion.div>

      {/* row 4->5 col 8->10 */}
      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: downwards,
        }}
        className="row-start-4 row-span-1 col-start-8 col-span-3  text-white"
      >
        <Swimming />
      </motion.div>

      {/* row 3->5 col 6->7 */}
      <motion.div
        initial={{
          y: 0,
        }}
        style={{
          y: upwards,
        }}
        className="row-start-3 row-span-2 col-start-6 col-span-2 text-white"
      >
        <Song />
      </motion.div>
    </div>
  );
};

export default CreativeSection;

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
    <div className="grid grid-rows-6 grid-cols-10 gap-4 border-2 px-16">
      <div className="row-start-1 row-span-1 col-start-2 col-span-6 py-4 px-4 ">
        <div className="flex flex-col gap-4">
          <p className="text-2xl text-indigo-400 font-semibold">Unnati demo</p>
          <h1 className="text-6xl text-white font-semibold">
            Lil More About Me
          </h1>
        </div>
      </div>
      {/* row 1->2 col-> 9-10 */}
      <div className="row-start-1 row-span-1 col-start-9 col-span-2 text-white">
        <Twitter />
      </div>

      {/* rows 2->5 column 1->3 */}
      <div className="row-start-2 row-span-2 col-start-1 col-span-2 border-2 text-white">
        <DevTo />
      </div>

      {/* rows 2->3 column 3->5 */}
      <div className="row-start-2 row-span-1 col-start-3 col-span-2 border-2 text-white">
        <Book />
      </div>

      {/* rows 2->3 col 5->8 */}
      <div className="row-start-2 row-span-1 col-start-5 col-span-3 border-2 text-white">
        <Tessact />
      </div>

      {/* row 2->3 column 5->3  */}
      <div className="row-start-2 row-span-1 col-start-5 col-span-3 border-2 text-white">
        <Tessact />
      </div>

      {/* 2->4 col 8->3 */}
      <div className="row-start-2 row-span-2 col-start-8 col-span-3 text-white">
        <Gallery />
      </div>

      {/* row 3->6 column 3->6 */}
      <div className="row-start-3 row-span-3 col-start-3 col-span-3  text-white">
        <Medium />
      </div>

      {/* row 4->5 col 8->10 */}
      <div className="row-start-4 row-span-1 col-start-8 col-span-3  text-white">
        <Swimming />
      </div>

      {/* row 3->5 col 6->7 */}
      <div className="row-start-3 row-span-2 col-start-6 col-span-2 text-white">
        <Song />
      </div>
    </div>
  );
};

export default CreativeSection;

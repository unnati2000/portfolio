import { AiOutlineTwitter } from 'react-icons/ai';
import Book from './Book.component';
import Twitter from './Twitter.component';
import DevTo from './DevTo.component';
import Medium from './Medium.component';
import Tessact from './Tessact.component';
import Gallery from './Gallery.component';
import Swimming from './Swimming.component';
import DevToStats from './DevToStats.component';

const CreativeSection = () => {
  return (
    <div className="grid grid-rows-12 grid-cols-12 gap-2">
      <div className="row-start-1 row-span-3 col-start-2 col-span-6 py-4 px-4 ">
        <div className="flex flex-col gap-4">
          <p className="text-2xl text-indigo-400 font-semibold">Unnati demo</p>
          <h1 className="text-6xl text-white font-semibold">
            Lil More About Me
          </h1>
        </div>
      </div>

      <div className="row-start-1 row-span-4 col-start-10 col-span-2 text-white">
        <Twitter />
      </div>

      <div className="row-start-2 row-span-4 col-start-8 col-span-2">
        <Tessact />
      </div>

      <div className="row-start-5 row-span-6 col-start-2 col-span-2 text-white">
        <DevTo />
      </div>

      <div className="row-start-5 row-span-1 col-start-4 col-span-2 text-white">
        <Gallery />
      </div>

      <div className="row-start-6 row-span-1 col-start-4 col-span-2 text-white">
        <Swimming />
      </div>
      <div className="row-start-4 row-span-1 col-start-6 col-span-2">
        <Book />
      </div>

      <div className="row-start-5 row-span-4 col-start-6 col-span-2  text-white">
        <DevToStats />
      </div>
      <div className="row-start-5 row-span-1 col-start-8 col-span-4 text-white">
        <Medium />
      </div>
    </div>
  );
};

export default CreativeSection;

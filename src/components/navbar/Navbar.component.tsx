import React from 'react';
import {
  AiFillHome,
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { CiCircleMore } from 'react-icons/ci';
import { FaDev } from 'react-icons/fa';

const iconList = [
  {
    id: 1,
    Icon: AiFillHome,
    label: 'Home',
  },
  {
    id: 2,
    Icon: AiFillLinkedin,
    label: 'Linkdin',
  },
  {
    id: 3,
    Icon: AiFillTwitterSquare,
    label: 'Twitter',
  },
  {
    id: 4,
    Icon: AiFillGithub,
    label: 'Github',
  },
  {
    id: 5,
    Icon: AiFillMediumSquare,
    label: 'Medium',
  },
  {
    id: 6,
    Icon: FaDev,
    label: 'Devto',
  },
  {
    id: 7,
    Icon: AiOutlineInstagram,
    label: 'Instagram',
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="fixed bottom-8 bg-slate-900 flex gap-6 rounded-full p-4">
      {iconList.map((icon) => (
        <div key={icon.id} className="relative">
          <span
            className={' text-slate-700 cursor-pointer hover:text-cyan-400'}
          >
            <icon.Icon size={28} />
          </span>
          {/* <p
            className={
              'text-white transform translate-x-full opacity-0 transition-opacity duration-200'
            }
          >
            {icon.label}
          </p> */}
        </div>
      ))}
      <CiCircleMore
        size={28}
        className="text-slate-700 cursor-pointer hover:text-cyan-400"
      />
    </div>
  );
};

export default Navbar;

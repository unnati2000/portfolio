import { BsFillBookmarksFill } from 'react-icons/bs';

const Book = () => {
  return (
    <div className="flex justify-between items-center h-full rounded-lg backdrop-blur-4xl backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/20 border-indigo-950 border-2">
      <div className="flex flex-col p-2">
        <h1 className="text-indigo-400 text-xl font-semibold">Book Name</h1>
        <p className="text-indigo-600">@authorName</p>
      </div>
      <div className=" bg-indigo-400 p-4 h-full w-min flex items-center rounded-tr-md rounded-br-md">
        <BsFillBookmarksFill size={20} className="text-white" />
      </div>
    </div>
  );
};

export default Book;

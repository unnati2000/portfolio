import { AiOutlineTwitter } from 'react-icons/ai';

const Twitter = () => {
  return (
    <div className="border-2 border-indigo-400 rounded-lg flex flex-col gap-4  h-full p-3">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <img
            src="https://github.com/unnati2000.png"
            height={30}
            width={30}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-indigo-400 text-lg">Unnati Bamania</h1>
            <p className="text-sm text-indigo-500">jsdhgfyui</p>
          </div>
        </div>
        <div className="border-2 h-min w-min p-2 border-indigo-400 rounded-md">
          <AiOutlineTwitter size={20} className="text-indigo-400" />
        </div>
      </div>

      <p className="text-sm text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti .
      </p>

      <button className="bg-indigo-400 rounded-full py-1">See Tweets</button>
    </div>
  );
};

export default Twitter;

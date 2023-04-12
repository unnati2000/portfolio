import { FcLike } from 'react-icons/fc';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { RiUserFollowLine } from 'react-icons/ri';

const DevToStats = () => {
  return (
    <div className="border-2 border-indigo-400 rounded-lg p-4 flex gap-4 flex-col">
      <div className="flex items-center gap-2">
        <div>
          <img
            src="https://github.com/unnati2000.png"
            height={20}
            width={20}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg text-indigo-400 font-semibold">
            Unnati Bamania
          </h1>
          <p className="text-sm">@commentme</p>
        </div>
      </div>

      <div className="flex gap-4 justify-center border-indigo-400 border-2 py-2 bg-indigo-400 rounded-full">
        <div className="flex items-center gap-1">
          <FcLike size={20} />
          <p className="text-sm text-indigo-700 font-semibold">20</p>
        </div>

        <div className="flex items-center gap-1">
          <IoDocumentTextOutline size={20} className="text-indigo-700" />
          <p className="text-sm text-indigo-700 font-semibold">20</p>
        </div>
        <div className="flex items-center gap-1">
          <RiUserFollowLine size={18} className="text-indigo-700" />
          <p className="text-sm text-indigo-700 font-semibold">20</p>
        </div>
      </div>
    </div>
  );
};

export default DevToStats;

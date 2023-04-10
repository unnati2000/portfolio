import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

const timings = ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Docbook = () => {
  const [selectedTime, setSelectedTime] = useState('4:00 PM');
  const [appointmentDetails, setAppointmentDetails] = useState({
    time: '',
    appointment: false,
  });

  const [cardOneStatus, setCardOneStatus] = useState<any>(null);
  const [cardTwoStatus, setCardTwoStatus] = useState<any>(null);

  const date = new Date();

  return (
    <div className="bg-gradient-to-r h-full w-full from-sky-500 via-blue-500 p-0.5 to-indigo-500 rounded-xl flex items-center justify-center flex-col h-452px">
      <div className="h-full w-full bg-[#151E3F] p-4 rounded-xl flex flex-col gap-4">
        <h1 className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500  text-transparent bg-clip-text font-bold text-center text-4xl">
          Docbook
        </h1>
        <div className="flex flex-col gap-6">
          <p className="text-center text-indigo-400 text-2xl">
            {weekdays[date.getDay()]} {date.getDate()}/{date.getMonth()}/
            {date.getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            {timings.map((time, index) => (
              <div
                key={index}
                onClick={() => setSelectedTime(time)}
                className={
                  selectedTime === time
                    ? 'bg-indigo-400 rounded-md cursor-pointer px-2 py-1'
                    : 'border-indigo-500 border-2 px-2 py-1 rounded-md cursor-pointer'
                }
              >
                <p
                  className={
                    selectedTime === time
                      ? 'text-indigo-900'
                      : 'text-indigo-400'
                  }
                >
                  {time}
                </p>
              </div>
            ))}
          </div>
          <button
            className="w-full bg-indigo-400 rounded-md py-1 text-indigo-900"
            onClick={() =>
              setAppointmentDetails({
                appointment: true,
                time: selectedTime,
              })
            }
          >
            Book Appointment
          </button>
        </div>
        <div className="p-2 border-2 border-indigo-900 hover:bg-slate-900 cursor-pointer rounded-md flex flex-col gap-4">
          <div className="flex items-center justify-start gap-2">
            <img
              src="https://github.com/unnati2000.png"
              height={20}
              width={20}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-white text-lg">Unnati Bamania</p>
              <p className="text-indigo-400 text-md">Tuesday 4:00 PM</p>
            </div>
          </div>

          {cardOneStatus === null ? (
            <div className="flex justify-between gap-4">
              {' '}
              <button
                className="bg-green-700 text-green-200 rounded-sm py-1 px-4 flex items-center justify-center gap-1 w-full"
                onClick={() => setCardOneStatus(true)}
              >
                {' '}
                <AiOutlineCheck size={18} /> Accept
              </button>
              <button
                className="bg-rose-700 text-rose-200 rounded-sm py-1 px-4 flex items-center justify-center gap-1 w-full"
                onClick={() => setCardOneStatus(false)}
              >
                <RxCross1 size={18} />
                Reject
              </button>{' '}
            </div>
          ) : cardOneStatus ? (
            <div className="px-2 bg-green-400 py-1 rounded-md w-1/3">
              <p className="text-green-800 font-semibold text-lg flex items-center gap-2">
                <FaCheckCircle size={16} />
                Approved
              </p>
            </div>
          ) : (
            <div className="px-2 bg-rose-400 py-1 rounded-md w-1/3">
              <p className="text-rose-800 text-lg font-semibold gap-2 flex items-center">
                <IoMdCloseCircle size={18} /> Rejected
              </p>
            </div>
          )}
        </div>

        {appointmentDetails.appointment && (
          <div className="p-2 bg-indigo-950 border-2 border-indigo-900 hover:bg-slate-900 rounded-md flex flex-col gap-4">
            <div className="flex items-center justify-start gap-2">
              <img
                src="https://github.com/unnati2000.png"
                height={20}
                width={20}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-white text-lg">Unnati Bamania</p>
                <p className="text-indigo-400 text-md">
                  Tuesday {appointmentDetails.time}
                </p>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <button className="bg-green-700 text-green-200 rounded-sm py-1 px-4 flex items-center justify-center gap-1 w-full">
                {' '}
                <AiOutlineCheck size={18} /> Accept
              </button>
              <button className="bg-rose-700 text-rose-200 rounded-sm py-1 px-4 flex items-center justify-center gap-1 w-full">
                <RxCross1 size={18} />
                Reject
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Docbook;

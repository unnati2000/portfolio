const calendarData = [
  {
    id: 1,
    day: 'Oct 1',
    year: '2019',
    contents: [
      {
        title: 'series 1',
        photos: [''],
      },
    ],
  },
  {
    id: 2,
    day: 'Oct 1',
    year: '2019',
    contents: [
      {
        title: 'series 1',
        photos: [''],
      },
    ],
  },
  {
    id: 3,
    day: 'Oct 1',
    year: '2019',
    contents: [],
  },
  {
    id: 4,
    day: 'Oct 1',
    year: '2019',
    contents: [
      {
        title: 'series 1',
        photos: [''],
      },
    ],
  },
];

const About = () => {
  return (
    <div className="flex flex-col gap-4 min-h-screen bg-[#030027]">
      <div className="backdrop-blur-4xl backdrop-saturate-100 bg-gradient-to-br from-[#030027] to-slate-300/10 p-4 w-full h-fit">
        <h1 className="text-indigo-600 font-semibold text-lg">
          unnatibamania.me
        </h1>
      </div>
      <div className="flex border-2 justify-around">
        {calendarData.map((calendar) => (
          <div
            key={calendar.id}
            className="border-1 border-indigo-700 w-full h-full"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-indigo-400 text-xl font-semibold">
                {calendar.day}
              </h1>
              <p className="text-white text-md font-semibold">
                {calendar.year}
              </p>
            </div>
            {calendar.contents.map((content, index) => (
              <div
                key={index}
                className="bg-indigo-400 opacity-60 w-full rounded-md p-4"
              >
                <h1 className="text-indigo-800 font-semibold">
                  {content.title}
                </h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

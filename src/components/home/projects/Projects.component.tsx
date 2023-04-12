import Docbook from './Docbook.component';
import HealthyWays from './HealthyWays.component';

const Projects = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-8 relative">
      <h1 className="text-indigo-500 text-6xl">
        A glimpse of the my{' '}
        <span className="font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600  text-transparent bg-clip-text">
          {' '}
          projects
        </span>
      </h1>
      {/* <div className="flex justify-around items-center gap-12"> */}
      <div className="grid grid-cols-2 gap-12">
        <div className="absolute left-48 rotate-45 top-20 h-72 w-72 bg-sky-600 opacity-50 blur-3xl rounded-full overflow-hidden" />
        <div className="absolute right-48 rotate-45 bottom-4 h-96 w-72 bg-purple-600 opacity-50 blur-3xl rounded-full overflow-hidden" />

        <div className="relative">
          <HealthyWays />
        </div>
        <div className="relative">
          <Docbook />
        </div>
      </div>
    </div>
  );
};

export default Projects;

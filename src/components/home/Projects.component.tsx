import Docbook from './Docbook.component';
import HealthyWays from './HealthyWays.component';

const Projects = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-8">
      <h1 className="text-indigo-500 text-6xl">
        A glimpse of the my{' '}
        <span className="font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600  text-transparent bg-clip-text">
          {' '}
          projects
        </span>
      </h1>
      <div className="flex justify-around items-center gap-12">
        <div>
          <HealthyWays />
        </div>
        <div>
          <Docbook />
        </div>
        <div>
          <h1 className="text-lg text-white">TEXT !</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;

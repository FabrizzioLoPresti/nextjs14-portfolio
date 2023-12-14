import Link from 'next/link';
import { IconExternalLink } from '@tabler/icons-react';
import ProjectCard from './project-card';
import { projects } from '@/libs/project';

type Props = {};

const Projects = (props: Props) => {
  const sliceProjects = projects.slice(0, 3);

  return (
    <main className="screens mb-24">
      <h2 className="text-4xl font-bold mb-4">
        Projects
        <span className="text-[#67CE7E] dark:text-violet-600">.</span>
      </h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
        {/* {projects.toSpliced(3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))} */}
        {sliceProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center mt-4">
        <Link
          href="/projects"
          className="text-lg font-bold flex flex-row items-center gap-x-2 group text-[#67CE7E] dark:text-violet-600 relative animate-pulse"
        >
          See more
          <IconExternalLink size={24} />
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-transparent group-hover:bg-[#67CE7E] dark:group-hover:bg-violet-600 transition duration-300 ease-in-out"></span>
        </Link>
      </div>
    </main>
  );
};

export default Projects;

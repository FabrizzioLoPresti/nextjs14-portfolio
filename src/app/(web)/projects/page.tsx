import ProjectCard from '@/components/projects/project-card';
import { client } from '@/utils/sanity/client';
import { ProjectType } from '@/types/types';
import { getAllProjects } from '@/libs/sanity-queries';

type Props = {};

export default async function ProjectsPage({}: Props) {
  const projects: ProjectType[] = await client.fetch(
    getAllProjects,
    {},
    {
      cache: 'no-cache',
    },
  );

  return (
    <section className="screens my-12">
      <h2 className="text-4xl font-bold mb-4">
        Projects
        <span className="text-[#67CE7E] dark:text-violet-600">.</span>
      </h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}

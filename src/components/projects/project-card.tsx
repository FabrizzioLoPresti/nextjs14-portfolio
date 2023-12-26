import Image from 'next/image';
import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { IconBrandGithub, IconWorldCode } from '@tabler/icons-react';
import { IProject } from '@/types/types';

type Props = {
  project: IProject;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="border border-[#67CE7E] dark:border-violet-600 rounded-md flex flex-col justify-between">
      <div>
        <Image
          src={project.urlImage}
          alt={project.name}
          width={300}
          height={300}
          className="rounded-t-md object-fill overflow-hidden w-full h-[250px]"
        />
        <div className="p-4">
          <h3 className="text-2xl font-bold text-[#67CE7E] dark:text-violet-600">
            {project.name}
          </h3>
          <p className="text-sm">{project.description}</p>
          <div className="flex flex-row gap-2 flex-wrap my-2">
            {project.tags.map((tag) => (
              <Chip color="secondary" size="sm" key={tag}>
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-row items-center justify-between">
          <Link
            href={project.urlGithub}
            target="_blank"
            className="hover:scale-110 transition-transform ease-in-out flex flex-row items-center gap-x-2"
          >
            <IconBrandGithub size={24} />
            Github
          </Link>

          <Link
            href={project.urlDeploy}
            target="_blank"
            className="hover:scale-110 transition-transform ease-in-out flex flex-row items-center gap-x-2"
          >
            <IconWorldCode size={24} />
            Deploy
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

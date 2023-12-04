import Image from 'next/image';
import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { IconBrandGithub, IconWorldCode } from '@tabler/icons-react';

type Props = {
  description: string;
};

const ProjectCard = ({ description }: Props) => {
  return (
    <div className="border border-[#67CE7E] dark:border-violet-600 rounded-md flex flex-col justify-between">
      <div>
        <Image
          src="/images/project.png"
          alt="Next Portfolio"
          width={300}
          height={300}
          className="rounded-t-md object-fill overflow-hidden w-full h-[250px]"
        />
        <div className="p-4">
          <h3 className="text-2xl font-bold text-[#67CE7E] dark:text-violet-600">
            Next Portfolio
          </h3>
          <p className="text-sm">{description}</p>
          <div className="flex flex-row gap-2 flex-wrap my-2">
            <Chip color="secondary" size="sm">
              TypeScript
            </Chip>
            <Chip color="secondary" size="sm">
              Next.js
            </Chip>
            <Chip color="secondary" size="sm">
              Tailwind CSS
            </Chip>
            <Chip color="secondary" size="sm">
              NextUI
            </Chip>
            <Chip color="secondary" size="sm">
              Vercel
            </Chip>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-row items-center justify-between">
          <Link
            href="https://github.com/FabrizzioLoPresti/nextjs14-portfolio"
            target="_blank"
            className="hover:scale-110 transition-transform ease-in-out flex flex-row items-center gap-x-2"
          >
            <IconBrandGithub size={24} />
            Github
          </Link>

          <Link
            href="https://fabrizzio-lo-presti.vercel.app/"
            target="_blank"
            className="hover:scale-110 transition-transform ease-in-out flex flex-row items-center gap-x-2"
          >
            <IconWorldCode size={24} />
            Deploy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

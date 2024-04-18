'use client';

import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandFramerMotion,
  IconBrandThreejs,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandAstro,
  IconBrandVercel,
  IconBrandRedux,
  IconBrandCypress,
  IconBrandAuth0,
  IconBrandTypescript,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandSupabase,
  IconBrandNodejs,
  IconBrandSocketIo,
  IconBrandGit,
  IconBrandGithubCopilot,
  IconBrandWebflow,
} from '@tabler/icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

type Props = {};

type Skill = {
  name: string;
  icon: JSX.Element;
};

const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: <IconBrandHtml5 size={48} />,
  },
  {
    name: 'CSS3',
    icon: <IconBrandCss3 size={48} />,
  },
  {
    name: 'JavaScript',
    icon: <IconBrandJavascript size={48} />,
  },
  {
    name: 'Tailwind CSS',
    icon: <IconBrandTailwind size={48} />,
  },
  {
    name: 'Framer Motion',
    icon: <IconBrandFramerMotion size={48} />,
  },
  {
    name: 'Three.js',
    icon: <IconBrandThreejs size={48} />,
  },
  {
    name: 'React',
    icon: <IconBrandReact size={48} />,
  },
  {
    name: 'Next.js',
    icon: <IconBrandNextjs size={48} />,
  },
  {
    name: 'Astro',
    icon: <IconBrandAstro size={48} />,
  },
  {
    name: 'Vercel',
    icon: <IconBrandVercel size={48} />,
  },
  {
    name: 'Redux',
    icon: <IconBrandRedux size={48} />,
  },
  {
    name: 'Cypress',
    icon: <IconBrandCypress size={48} />,
  },
  {
    name: 'Auth0',
    icon: <IconBrandAuth0 size={48} />,
  },
  {
    name: 'TypeScript',
    icon: <IconBrandTypescript size={48} />,
  },
  {
    name: 'MySQL',
    icon: <IconBrandMysql size={48} />,
  },
  {
    name: 'MongoDB',
    icon: <IconBrandMongodb size={48} />,
  },
  {
    name: 'Supabase',
    icon: <IconBrandSupabase size={48} />,
  },
  {
    name: 'Node.js',
    icon: <IconBrandNodejs size={48} />,
  },
  {
    name: 'Socket.io',
    icon: <IconBrandSocketIo size={48} />,
  },
  {
    name: 'Git',
    icon: <IconBrandGit size={48} />,
  },
  {
    name: 'GitHub Copilot',
    icon: <IconBrandGithubCopilot size={48} />,
  },
];

const Skills = (props: Props) => {
  return (
    <section className="screens mb-24">
      <h2 className="text-4xl font-bold mb-4">
        Skills
        <span className="text-[#67CE7E] dark:text-violet-600">.</span>
      </h2>
      <Swiper
        className="mySwiper mt-2"
        slidesPerView="auto"
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={1500}
        modules={[Autoplay]}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={skill.name} className="!w-auto">
            <div className="flex flex-col items-center justify-center mx-4 min-w-[80px]">
              <div>{skill.icon}</div>
              <p className="text-lg mt-2 text-center">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;

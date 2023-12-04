import Link from 'next/link';
import Image from 'next/image';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="pattern">
      <div className="screens min-h-screen h-full flex flex-row items-center xl:gap-x-6">
        <div className="w-3/4 xl:w-1/2">
          <p className="text-2xl">Hi! I{"'"}m Fabri 👋</p>
          <h1 className="font-bold text-4xl">
            Full-Stack{' '}
            <span className="text-[#67CE7E] dark:text-violet-600">
              Developer
            </span>
          </h1>
          <p className="text-lg">
            Web development lover and technological advances.
          </p>
          <div className="mt-4 flex flex-row gap-x-4 [&>a]:flex [&>a]:flex-row [&>a]:items-center [&>a]:gap-x-1 [&>a]:text-sm">
            <Link
              href="https://www.linkedin.com/in/fabrizzio-lo-presti-a7222b1b4"
              target="_blank"
              className="hover:scale-110 transition-transform ease-in-out"
            >
              <IconBrandLinkedin size={24} />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/FabrizzioLoPresti"
              target="_blank"
              className="hover:scale-110 transition-transform ease-in-out"
            >
              <IconBrandGithub size={24} />
              Github
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/profile-image.jpg"
            width={300}
            height={300}
            alt="Fabrizzio Lo Presti"
            className="rounded-full object-cover overflow-hidden w-36 h-36 lg:w-40 lg:h-40 xl:w-72 xl:h-72 border-5 border-[#67CE7E] dark:border-violet-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

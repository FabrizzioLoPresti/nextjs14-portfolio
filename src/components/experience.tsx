import React from 'react';

type Props = {};

const Experience = (props: Props) => {
  return (
    <section className="screens mb-24">
      <div className="lg:w-3/4">
        <h2 className="text-4xl font-bold mb-4">
          Experience
          <span className="text-[#67CE7E] dark:text-violet-600">.</span>
        </h2>

        <div className="flex flex-col">
          <div className="relative">
            <div className="flex flex-col gap-y-2 border-l-2 border-l-[#67CE7E] dark:border-l-violet-600 pl-6 pb-4">
              <h3 className="text-2xl font-bold">Frontend Developer</h3>
              <h4 className="text-lg font-bold">Globant</h4>
              <p className="text-lg">2021 - Present</p>
            </div>
            <span className="absolute top-2 -left-2 inline-flex items-center justify-center w-4 h-4 bg-[#67CE7E] dark:bg-violet-600 rounded-full"></span>
          </div>

          <div className="relative">
            <div className="flex flex-col gap-y-2 border-l-2 border-l-[#67CE7E] dark:border-l-violet-600 pl-6 pb-4">
              <h3 className="text-2xl font-bold">Frontend Developer</h3>
              <h4 className="text-lg font-bold">Globant</h4>
              <p className="text-lg">2021 - Present</p>
            </div>
            <span className="absolute top-2 -left-2 inline-flex items-center justify-center w-4 h-4 bg-[#67CE7E] dark:bg-violet-600 rounded-full"></span>
          </div>

          <div className="relative">
            <div className="flex flex-col gap-y-2 border-l-2 border-l-[#67CE7E] dark:border-l-violet-600 pl-6 pb-4">
              <h3 className="text-2xl font-bold">Frontend Developer</h3>
              <h4 className="text-lg font-bold">Globant</h4>
              <p className="text-lg">2021 - Present</p>
            </div>
            <span className="absolute top-2 -left-2 inline-flex items-center justify-center w-4 h-4 bg-[#67CE7E] dark:bg-violet-600 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

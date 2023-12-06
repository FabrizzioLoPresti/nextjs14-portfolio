import React from 'react';

type Props = {
  date: string;
  position: string;
  company: string;
  children: React.ReactNode;
};

const ExperienceCard = ({ date, position, company, children }: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-y-2 border-l-1 border-l-[#67CE7E] dark:border-l-violet-600 pl-6 pb-6">
        <p className="text-sm">{date}</p>
        <h3 className="text-2xl font-bold">{position}</h3>
        <h4 className="text-lg font-bold">{company}</h4>
        <p className="text-base font-light">{children}</p>
      </div>
      <span className="absolute top-1 -left-2 inline-flex items-center justify-center w-4 h-4 bg-[#67CE7E] dark:bg-violet-600 rounded-full"></span>
    </div>
  );
};

export default ExperienceCard;

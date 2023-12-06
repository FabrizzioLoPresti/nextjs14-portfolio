import ExperienceCard from './experience-card';

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
          <ExperienceCard
            date="2023 - Present"
            position="Full-Stack Developer"
            company="Myself"
          >
            Currently I work as a web developer, developing websites for my
            clients, using the latest technologies and achieving their
            satisfaction.
          </ExperienceCard>

          <ExperienceCard
            date="2021 - 2023"
            position="University Degree in Programming"
            company="Universidad Tecnologica Nacional - FRC"
          >
            Professional graduated in the year 2023 with the title of University
            Technician in Programming with a grade of 9.
          </ExperienceCard>

          <ExperienceCard
            date="2017 - 2018"
            position="Web Development Internship"
            company="Instituto Universitario Aeronautico - IUA"
          >
            Intern in the area of Web Development, performing maintenance and
            development tasks of web projects for the institution within the
            framework of an awareness campaign in the field of computer
            security.
          </ExperienceCard>
        </div>
      </div>
    </section>
  );
};

export default Experience;

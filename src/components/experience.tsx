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
            <div className="flex flex-col gap-y-2 border-l-1 border-l-[#67CE7E] dark:border-l-violet-600 pl-6 pb-6">
              <p className="text-sm">2021 - Present</p>
              <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
              <h4 className="text-lg font-bold">Globant</h4>
              <p className="text-base font-light">
                I am currently working as a Frontend Developer in the company
                Globant. I am part of the team that develops the web
                application.
              </p>
            </div>
            <span className="absolute top-1 -left-2 inline-flex items-center justify-center w-4 h-4 bg-[#67CE7E] dark:bg-violet-600 rounded-full"></span>
          </div>

          <div className="relative">
            <div className="flex flex-col gap-y-2 border-l-1 border-l-[#67CE7E] dark:border-l-violet-600 pl-6 pb-6">
              <p className="text-sm">2021 - 2023</p>
              <h3 className="text-2xl font-bold">
                University Degree in Programming
              </h3>
              <h4 className="text-lg font-bold">
                Universidad Tecnologica Nacional - FRC
              </h4>
              <p className="text-base font-light">
                Professional graduated in the year 2023 with the title of
                University Technician in Programming with a grade of 9.
              </p>
            </div>
            <span className="absolute top-1 -left-2 inline-flex items-center justify-center w-4 h-4 bg-[#67CE7E] dark:bg-violet-600 rounded-full"></span>
          </div>

          <div className="relative">
            <div className="flex flex-col gap-y-2 border-l-1 border-l-[#67CE7E] dark:border-l-violet-600 pl-6 pb-4">
              <p className="text-sm">2017 - 2018</p>
              <h3 className="text-2xl font-bold">Web Development Internship</h3>
              <h4 className="text-lg font-bold">
                Instituto Universitario Aeronautico - IUA
              </h4>
              <p className="text-base font-light">
                Intern in the area of Web Development, performing maintenance
                and development tasks of web projects for the institution within
                the framework of an awareness campaign in the field of computer
                security.
              </p>
            </div>
            <span className="absolute top-1 -left-2 inline-flex items-center justify-center w-4 h-4 bg-[#67CE7E] dark:bg-violet-600 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

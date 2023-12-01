type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section className="screens mb-24">
      <div className="lg:w-3/4">
        <h2 className="text-4xl font-bold mb-4">
          About me<span className="text-[#67CE7E] dark:text-violet-600">.</span>
        </h2>
        <p>
          Frontend developer from Córdoba, Argentina, passionate about UI
          effects, animations and intuitive and dynamic user experiences. My
          goal is to combine technical skills and creativity to build attractive
          and functional web interfaces. I am constantly learning and keeping
          myself updated with the latest trends in design and development.
          Focused on understanding user needs and creating effective solutions.
          Looking forward to working with you and creating awesome websites!
          🚀🚀🚀
        </p>
        <p className="mt-2 font-bold">
          Contact me at{' '}
          <a
            href="mailto:fabrizziolopresti1999@gmail.com"
            className="group text-[#67CE7E] dark:text-violet-600 font-normal relative"
          >
            fabrizziolopresti1999@gmail.com
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-transparent group-hover:bg-[#67CE7E] dark:group-hover:bg-violet-600 transition duration-300 ease-in-out"></span>
          </a>
          {'.'}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

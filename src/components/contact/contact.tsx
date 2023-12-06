import ContactForm from './contact-form';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="screens mb-24">
      <h2 className="text-4xl font-bold mb-4">
        Contact me<span className="text-[#67CE7E] dark:text-violet-600">.</span>
      </h2>
      <div className="w-full flex items-center justify-center">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;

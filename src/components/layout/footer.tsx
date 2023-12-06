import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="screens py-2">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-lg">
          Made with{' '}
          <span className="text-[#67CE7E] dark:text-violet-600">♥</span> by{' '}
          <Link
            href="https://github.com/FabrizzioLoPresti"
            className="text-[#67CE7E] dark:text-violet-600"
            target="_blank"
          >
            Fabrizzio Lo Presti
          </Link>
        </p>
        <p className="text-lg">©{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

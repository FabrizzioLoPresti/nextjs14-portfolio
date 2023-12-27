import Link from 'next/link';

type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <section className="screens min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-[#67CE7E] dark:text-violet-600">
        404
      </h1>
      <h2 className="text-4xl font-bold mb-4">
        Not Found
        <span className="text-[#67CE7E] dark:text-violet-600">.</span>
      </h2>

      <Link
        href="/"
        className="text-lg font-bold flex flex-row items-center gap-x-2 group text-[#67CE7E] dark:text-violet-600 relative animate-pulse"
      >
        Go back
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-transparent group-hover:bg-[#67CE7E] dark:group-hover:bg-violet-600 transition duration-300 ease-in-out"></span>
      </Link>
    </section>
  );
}

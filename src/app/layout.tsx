import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/providers';
import NavbarComponent from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fabrizzio Lo Presti | Full-Stack Developer',
  description:
    'Passionate Full-Stack developer based in Cordoba, Argentina, with experience in creating innovative web solutions. Explore my portfolio to discover outstanding projects and technological skills. Turn ideas into reality with my web development skills!',
  keywords: [
    'full-stack',
    'developer',
    'web',
    'development',
    'job',
    'work',
    'freelance',
    'react',
    'nextjs',
    'typescript',
    'javascript',
    'nodejs',
    'tailwindcss',
    'css',
    'html',
    'portfolio',
    'fabrizzio',
    'lo',
    'presti',
    'fabrizzio lo presti',
    'fabrizzio lo presti portfolio',
    'fabrizzio lo presti full-stack developer',
    'fabrizzio lo presti full-stack developer portfolio',
    'cordoba argentina',
    'cordoba',
    'argentina',
    'cordoba software developer',
    'cordoba full-stack developer',
    'argentina software developer',
    'web development cordoba',
    'web development argentina',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavbarComponent />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Sanity CMS Studio',
  description: 'Admin panel for Sanity CMS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pink Cotton',
  description: '결혼식 청첩장',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

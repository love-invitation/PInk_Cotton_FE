import '@/styles/globals.css';

import type { Metadata } from 'next';

import pretendardFont from '@/assets/font';

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
    <html
      lang='ko'
      className={pretendardFont.className}
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

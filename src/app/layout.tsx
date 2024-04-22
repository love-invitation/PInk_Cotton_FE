import '@/styles/globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import pretendardFont from '@/assets/font';

export const metadata: Metadata = {
  title: 'Pink Cotton',
  description: '결혼식 청첩장',
};

const KAKAO_API_KEY = process.env.DB_KAKAO_MAP_API_KEY;

const URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`;

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
      <body>
        <Script
          type='text/javascript'
          src={URL}
          strategy='beforeInteractive'
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

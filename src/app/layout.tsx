import '@/styles/globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import pretendardFont from '@/assets/font';

import TanstackProvider from './_components/TanstackProvider';

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
      <TanstackProvider>
        <body>
          <Script
            type='text/javascript'
            src={URL}
            strategy='beforeInteractive'
          />

          <main id='app'>{children}</main>
        </body>
      </TanstackProvider>
    </html>
  );
};

export default RootLayout;

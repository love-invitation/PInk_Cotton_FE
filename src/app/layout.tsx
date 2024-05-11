import '@/styles/globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import { PretendardVariable } from '@/assets/font/index';

import { MswProvider, TanstackProvider, ToastProvider } from './_components';

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
      className={PretendardVariable.className}
    >
      <body>
        <TanstackProvider>
          <Script
            type='text/javascript'
            src={URL}
            strategy='beforeInteractive'
          />
          <MswProvider />
          <main id='app'>{children}</main>
          <ToastProvider />
        </TanstackProvider>
      </body>
    </html>
  );
};

export default RootLayout;

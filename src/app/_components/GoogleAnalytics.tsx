'use client';

import Script from 'next/script';

const G_TAG = process.env.NEXT_PUBLIC_G_TAG!;

const Analytics = () => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${G_TAG}`}
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('consent', 'default', {
          'analytics_storage': 'granted'
        });

        gtag('config', '${G_TAG}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
};

export default Analytics;

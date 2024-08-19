import '../src/styles/globals.css';

import Script from 'next/script';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => {
      const KAKAO_MAP_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
      const URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&libraries=services,clusterer,drawing&autoload=false`;
      return (
        <>
          {/* load kakao map Script */}
          <Script
            type='text/javascript'
            src={URL}
            strategy='lazyOnload'
          />

          <main id='app'>
            <Story />
          </main>
        </>
      );
    },
  ],
};

export default preview;

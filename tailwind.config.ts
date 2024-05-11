import type { Config } from 'tailwindcss';

type FontSizeMap = {
  [key: string]: string;
};

const generateSize = (name: string) => {
  const sizes: FontSizeMap = {};

  for (let i = 1; i <= 100; i += 1) {
    sizes[`${name}${i}`] = `${i * 0.1}rem`;
  }

  return sizes;
};

const config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        white_100: '#FFFFFF',

        gray_100: '#858585',
        gray_200: '#868686',
        gray_300: '#888888',
        gray_400: '#959595',
        gray_500: '#BBBBBB',
        gray_600: '#C9C9C9',
        gray_700: '#D2D2D2',
        gray_800: '#E0E0E0',
        gray_900: '#EFEFEF',

        black_900: '#000000',
        black_500: '#333333',
        black_300: '#393939',

        pink_500: '#F98284',
        pink_300: '#FFB2B2',
        pink_100: '#FFF0F0',

        brown_500: '#8B6254',
        brown_100: '#F4EFED',

        green_100: '#00C73C',

        yellow_100: '#FEE500',
        yellow_500: '#FFD400',
        yellow_kakao: '#FFEB00',

        red_500: '#ED4044',

        transparent_10: '#23232310',
        transparent_30: '#23232330',
        transparent_50: '#23232350',
        transparent_90: '#23232390',

        background: '#F9F9F9',

        placeholder_100: '#DDDDE3',

        text_primary: '',
        text_secondary: '',
      },

      fontSize: generateSize('size'),
      borderRadius: generateSize('radius'),

      zIndex: {
        // 각 컴포넌트별 z index => 0 ~ 100
        icon: '100',

        header: '300',

        modal: '500',

        toast: '600',

        spinner: '800',
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
        black: '900',
      },

      boxShadow: {
        shadow_500: '0.3rem 0.3rem 2rem 0 rgba(0, 0, 0, 0.06)',
        shadow_700: '0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25)',
      },

      screens: {
        mobile: { max: '767px' },
        tablet: { min: '768px', max: '1023px' },
        laptop: { min: '1024px' },
        header_min: { min: '900px' },
        header_max: { max: '900px' },
        main_card_max: { max: '1050px' },

        main_page_1050: { min: '1050px' },
      },

      spacing: {
        1: '0.5rem',
        2: '1rem',
        3: '1.5rem',
        4: '2rem',
        5: '2.5rem',
      },
    },
  },

  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar-hide'),
    require('daisyui'),
  ],
} satisfies Config;

export default config;

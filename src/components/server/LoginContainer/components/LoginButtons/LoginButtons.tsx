import Link from 'next/link';

import tailwindConfig from '@/../tailwind.config';
import { GoogleLogoIcon, KakaoLogoIcon, NaverLogoIcon } from '@/components/server';

import resolveConfig from 'tailwindcss/resolveConfig';

const OAUTH2_URL = process.env.NEXT_PUBLIC_OAUTH2_URL;

const LoginButtons = () => {
  const { theme } = resolveConfig(tailwindConfig);
  return (
    <div className='w-[80%] max-w-[48rem] flex flex-col items-center justify-center gap-[1.6rem] border-none text-[1.4rem] font-semibold border'>
      <Link
        href={`${OAUTH2_URL}/oauth2/authorization/naver`}
        className='shadow text-white_100 rounded-[10rem] w-full h-[5rem] flex items-center justify-center gap-[1rem] bg-naver_brand'
      >
        <NaverLogoIcon
          size='2.4rem'
          fill={theme.colors.white}
        />
        네이버 로그인
      </Link>
      <Link
        href={`${OAUTH2_URL}/oauth2/authorization/kakao`}
        className='shadow rounded-[10rem] w-full h-[5rem] flex items-center justify-center gap-[1rem] bg-kakao_brand'
      >
        <KakaoLogoIcon size='2.4rem' />
        카카오 로그인
      </Link>
      <Link
        href={`${OAUTH2_URL}/oauth2/authorization/google`}
        className='shadow text-black_900 rounded-[10rem] w-full h-[5rem] flex items-center justify-center gap-[1rem] bg-white_100'
      >
        <GoogleLogoIcon size='2.4rem' />
        구글 로그인
      </Link>
    </div>
  );
};

export default LoginButtons;

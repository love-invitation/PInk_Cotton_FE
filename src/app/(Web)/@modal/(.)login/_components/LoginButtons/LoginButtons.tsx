import tailwindConfig from '@/../tailwind.config';
import { Button } from '@/components/client';
import { GoogleLogoIcon, KakaoLogoIcon, NaverLogoIcon } from '@/components/server';

import resolveConfig from 'tailwindcss/resolveConfig';

const LoginButtons = () => {
  const { theme } = resolveConfig(tailwindConfig);
  return (
    <div className='w-[80%] max-w-[48rem] flex flex-col items-center justify-center gap-[1.6rem]'>
      <Button
        radius='rounded'
        fontSize='1.4rem'
        fontWeight='semiBold'
        shadow
        className='w-full h-[5rem] flex items-center justify-center gap-[1rem] bg-naver_brand'
      >
        <NaverLogoIcon
          size='2.4rem'
          fill={theme.colors.white}
        />
        네이버 로그인
      </Button>

      <Button
        radius='rounded'
        fontSize='1.4rem'
        fontWeight='semiBold'
        shadow
        className='w-full h-[5rem] flex items-center justify-center gap-[1rem] bg-kakao_brand'
      >
        <KakaoLogoIcon size='2.4rem' />
        카카오 로그인
      </Button>

      <Button
        radius='rounded'
        fontSize='1.4rem'
        fontWeight='semiBold'
        fontColor='black'
        shadow
        className='w-full h-[5rem] flex items-center justify-center gap-[1rem] bg-white_100'
      >
        <GoogleLogoIcon size='2.4rem' />
        구글 로그인
      </Button>
    </div>
  );
};

export default LoginButtons;

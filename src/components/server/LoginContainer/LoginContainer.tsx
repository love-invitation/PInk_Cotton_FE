import Image from 'next/image';

import { LOGIN_IMAGE } from '@/assets/images';

import { LoginButtons } from './components';

const LoginContainer = () => {
  return (
    <article className='w-full px-[2rem] pb-[2rem] max-w-[70rem] h-[70rem] bg-white_100 rounded-radius25 flex flex-col items-center justify-center gap-[4rem]'>
      <span className='flex flex-col items-center justify-center gap-[1.6rem]'>
        <h2 className='text-size26 font-medium'>로그인</h2>
        <p className='text-size18 font-medium break-keep text-gray_100'>
          PINK COTTON은 모바일청첩장을 가장 쉽고 빠르게 만들수 있는 공간이에요.
        </p>
      </span>

      <i className='max-w-[25.6rem] h-[18rem]'>
        <Image
          src={LOGIN_IMAGE}
          sizes='100%'
          alt='login_image'
        />
      </i>

      <LoginButtons />
    </article>
  );
};

export default LoginContainer;

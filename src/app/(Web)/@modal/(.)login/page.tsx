'use client';

import Image from 'next/image';

import { LOGIN_IMAGE } from '@/assets/images';

import { useCloseAwayClick } from './hooks';

const LoginModal = () => {
  const ref = useCloseAwayClick();

  return (
    <div className='w-dvw h-dvh bg-transparent_90 fixed top-0 left-0 z-modal flex items-center justify-center'>
      <article
        ref={ref}
        className='w-full max-w-[60rem] h-[60rem] py-[4rem] bg-white_100 rounded-radius25 flex flex-col items-center justify-center gap-[4rem]'
      >
        <span className='flex flex-col items-center justify-center gap-[1.6rem]'>
          <h2 className='text-size26 font-medium'>로그인</h2>
          <p className='text-size18 font-medium break-keep text-gray_100'>
            PINK COTTON은 모바일청첩장을 가장 쉽고 빠르게 만들 수 있는 공간이에요.
          </p>
        </span>

        <i className='w-[25rem] h-[18rem]'>
          <Image
            src={LOGIN_IMAGE}
            sizes='100%'
            alt='login_image'
          />
        </i>
      </article>
    </div>
  );
};

export default LoginModal;
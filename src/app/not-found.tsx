'use client';

import Lottie from 'react-lottie-player';

import Link from 'next/link';

import { NotFoundLottie } from '@/assets/lottie';
import { DOMAIN_URL } from '@/constants';

const NotFound = () => {
  return (
    <div className='flex flex-col gap-[3rem] justify-center items-center h-full w-full'>
      <Lottie
        animationData={NotFoundLottie}
        className='h-[22rem] w-[22rem]'
        play
        loop
      />
      <Link
        href={DOMAIN_URL.MAIN}
        className='rounded-radius4 text-size14 bg-[#FF3C00] px-[1.6rem] py-[1rem] text-white_100 font-bold'
      >
        PinkCotton 사이트 바로가기
      </Link>
    </div>
  );
};

export default NotFound;

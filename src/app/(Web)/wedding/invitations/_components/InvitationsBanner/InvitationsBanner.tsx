import Image from 'next/image';

import { GyeonggiBatangFont } from '@/assets/font';
import { BANNER_IMAGE } from '@/assets/images';
import { Banner } from '@/components/server';

const InvitationsBanner = () => {
  return (
    <Banner>
      <Image
        src={BANNER_IMAGE}
        alt='청첩장 종류 페이지 배너'
        className='w-full max-h-[30rem] min-h-[15rem]'
      />
      <p
        className={`flex flex-col items-end absolute bottom-[10%] right-[13%] text-[2.4rem] text-white_100 mobile:text-[1.8rem] ${GyeonggiBatangFont.className}`}
      >
        <span>가장 아름답고,</span>
        <span>쉽게 특별한 순간을 알려보세요.</span>
      </p>
    </Banner>
  );
};

export default InvitationsBanner;

import Image from 'next/image';

import { GyeonggiBatangFont } from '@/assets/font';
import { BANNER_IMAGE } from '@/assets/images';
import { Banner } from '@/components/server';

const InvitationsBanner = () => {
  return (
    <Banner>
      <Image
        layout='responsive'
        src={BANNER_IMAGE}
        alt='청첩장 종류 페이지 배너'
        priority
      />
      <p
        className={`flex flex-col items-end absolute bottom-[10%] right-[13%] mobile:text-[1.6rem] tablet:text-[2rem] text-[2.4rem] text-white_100 ${GyeonggiBatangFont.className}`}
      >
        <span>가장 아름답고,</span>
        <span>쉽게 특별한 순간을 알려보세요.</span>
      </p>
    </Banner>
  );
};

export default InvitationsBanner;

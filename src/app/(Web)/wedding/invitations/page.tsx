import Image from 'next/image';

import { BANNER_IMAGE } from '@/assets/images';
import { Banner } from '@/components/server';

import { BANNER } from './_constants';

const InvitationsPage = () => {
  return (
    <>
      <div>
        <Banner>
          <Image
            layout='responsive'
            src={BANNER_IMAGE}
            alt='청첩장 종류 페이지 배너'
            priority
          />
          <p className='flex flex-col items-end absolute bottom-[10%] right-[13%] text-[2.4rem] font-bold text-white_100'>
            <span>{BANNER.DESCRIPTION_1}</span>
            <span>{BANNER.DESCRIPTION_2}</span>
          </p>
        </Banner>
      </div>
    </>
  );
};

export default InvitationsPage;

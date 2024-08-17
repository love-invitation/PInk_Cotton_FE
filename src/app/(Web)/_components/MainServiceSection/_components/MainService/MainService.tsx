'use client';

import { KakaoChannelIcon } from '@/components/server';

import MainSectionTitle from '../../../MainSectionTitle/MainSectionTitle';

const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
const KAKAO_CHANNEL_ID = process.env.NEXT_PUBLIC_PINK_KAKAO_CHANNEL_ID;

const MainService = () => {
  const addKakaoChannel = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_API_KEY);
      }

      kakao.Channel.chat({
        channelPublicId: KAKAO_CHANNEL_ID,
      });
    }
  };

  return (
    <article className='flex flex-col gap-[4rem] items-center'>
      <div className='w-full px-[1rem]'>
        <MainSectionTitle
          title='고객센터'
          subTitle='더 궁금한 점이 있으신가요? 아래 버튼을 눌러주세요.'
        />
      </div>

      <button
        type='button'
        className='max-w-[35rem] flex items-center justify-center gap-[1rem] bg-kakao_brand rounded-[2rem_2rem_2rem_0] w-full h-[6.5rem]'
        onClick={addKakaoChannel}
      >
        <KakaoChannelIcon size='3.6rem' />
        <p className='h-[4rem] flex items-center justify-center bg-white_100 rounded-radius10 text-size18 font-semiBold px-[1.6rem]'>
          PINKCOTTON 고객센터
        </p>
      </button>
    </article>
  );
};

export default MainService;

'use client';

import { AlertModal } from '@/components/client';
import { KakaoChannelIcon } from '@/components/server';
import { useModal } from '@/hooks';

import MainSectionTitle from '../../../MainSectionTitle/MainSectionTitle';

const MainService = () => {
  const { showModal, isShowModal, closeModal } = useModal();

  return (
    <article className='flex flex-col gap-[4rem] items-center main_page_1050:items-start'>
      <MainSectionTitle
        title='고객센터'
        subTitle='더 궁금한 점이 있으신가요? 아래 버튼을 눌러주세요.'
      />

      <button
        type='button'
        className='max-w-[35rem] flex items-center justify-center gap-[1rem] bg-yellow_kakao rounded-[2rem_2rem_2rem_0] w-full h-[6.5rem]'
        onClick={showModal}
      >
        <KakaoChannelIcon size={36} />
        <p className='h-[4rem] flex items-center justify-center bg-white_100 rounded-radius10 text-size18 font-semiBold px-[1.6rem]'>
          PINKCOTTON 고객센터
        </p>
      </button>

      <AlertModal
        message='현재 준비중인 기능입니다.'
        isShow={isShowModal}
        onClose={closeModal}
      />
    </article>
  );
};

export default MainService;

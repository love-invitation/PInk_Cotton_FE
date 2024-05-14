import { KakaoChannelIcon } from '@/components/server';

import MainSectionTitle from '../MainSectionTitle/MainSectionTitle';
import { MainQuestion, MainReview } from './_components';

const MainServiceSection = () => {
  return (
    <section
      id='calc_header_height'
      className='w-full flex items-center justify-center'
    >
      <div className='px-[2rem] py-[6rem] flex flex-col gap-[10rem]'>
        <MainReview />

        <div className='w-full flex flex-col main_page_1050:flex-row gap-[10rem] main_page_1050:gap-0 justify-between'>
          <MainQuestion />

          <article className='flex flex-col gap-[4rem] items-center main_page_1050:items-start'>
            <MainSectionTitle
              title='고객센터'
              subTitle='더 궁금한 점이 있으신가요? 아래 버튼을 눌러주세요.'
            />

            <button
              type='button'
              className='max-w-[35rem] flex items-center justify-center gap-[1rem] bg-yellow_kakao rounded-[2rem_2rem_2rem_0] w-full h-[6.5rem] cursor-pointer'
            >
              <KakaoChannelIcon size={36} />
              <span className='h-[4rem] flex items-center justify-center bg-white_100 rounded-radius10 text-size18 font-semiBold px-[1.6rem]'>
                <p>PINKCOTTON</p>
                <p>고객센터</p>
              </span>
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MainServiceSection;

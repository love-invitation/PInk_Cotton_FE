import { Accordion } from '@/components/client';
import { Divider } from '@/components/server';

import { MainReview } from './_components';

const MainServiceSection = () => {
  return (
    <section
      id='calc_header_height'
      className='w-full py-[4rem] flex flex-col items-center justify-center gap-[6rem] px-[1.6rem]'
    >
      <MainReview />

      <div className='w-full flex justify-center text-black_500'>
        <article className='flex flex-col gap-[4rem] border-2 border-red-400 '>
          <span className='flex flex-col'>
            <h3 className='text-size30 text-black_500 font-semiBold text-nowrap'>자주 묻는 질문</h3>
            <p className='text-size16 text-gray_400'>
              자주 들어오는 질문입니다. 더 궁금한 점이 있다면 카카오톡채널을 이용해주세요!
            </p>
          </span>

          <ul>
            <Divider />

            <li>
              <Accordion
                type='main'
                buttonTitle='모바일청첩장은 언제까지 이용할 수 있나요?'
              >
                <p className='text-size16 py-[1rem]'>
                  <strong className='pr-[1rem] font-semiBold'>A.</strong>
                  예식일 기준 최대 3개월(90일)까지 보관되며, 이후 자동 삭제됩니다.
                </p>
              </Accordion>
            </li>

            <Divider />

            <li>
              <Accordion
                type='main'
                buttonTitle='제작기간은 며칠 소요되나요?'
              >
                <p className='text-size16 py-[1rem]'>
                  <strong className='pr-[1rem] font-semiBold'>A.</strong>
                  제작완료 버튼 클릭과 동시에 URL 주소가 생성되며, 바로 사용도 가능합니다.
                </p>
              </Accordion>
            </li>

            <Divider />

            <li>
              <Accordion
                type='main'
                buttonTitle='제작 후 수정하고 싶다면 어떻게 해야하나요?'
              >
                <p className='text-size16 py-[1rem]'>
                  <strong className='pr-[1rem] font-semiBold'>A.</strong>
                  [청첩장 수정 버튼]을 눌러 횟수제한 없이 수정하실 수 있습니다.
                </p>
              </Accordion>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default MainServiceSection;

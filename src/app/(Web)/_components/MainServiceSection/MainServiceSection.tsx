import { MainQuestion, MainReview } from './_components';

const MainServiceSection = () => {
  return (
    <section
      id='calc_header_height'
      className='w-full px-[1.6rem] py-[6rem] flex items-center justify-center'
    >
      <article className='flex flex-col gap-[10rem]'>
        <MainReview />

        <div className='w-full flex flex-col main_page_1050:flex-row gap-[10rem] main_page_1050:gap-0 justify-between'>
          <MainQuestion />

          <div className='flex flex-col gap-[4rem]'>
            <span>
              <h3 className='text-size30 font-semiBold text-nowrap'>고객센터</h3>
              <p className='text-size16 text-gray_400 break-keep'>
                더 궁금한 점이 있으신가요? 아래 버튼을 눌러주세요.
              </p>
            </span>

            <div>카카오톡 연결</div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default MainServiceSection;

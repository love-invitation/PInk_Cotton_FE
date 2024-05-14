import { MainQuestion, MainReview, MainService } from './_components';

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

          <MainService />
        </div>
      </div>
    </section>
  );
};

export default MainServiceSection;

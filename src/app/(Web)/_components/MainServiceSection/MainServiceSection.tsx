import { MainQuestion, MainReview, MainService } from './_components';

const MainServiceSection = () => {
  return (
    <section
      id='calc_header_height'
      className='w-full flex items-center justify-center '
    >
      <div
        id='service'
        className='max-w-[40rem] laptop:max-w-full px-[2rem] py-[6rem] flex flex-col gap-[10rem]'
      >
        <MainReview />

        <div className='w-full flex flex-col laptop:flex-row gap-[10rem] laptop:gap-0 laptop:justify-between'>
          <MainQuestion />

          <MainService />
        </div>
      </div>
    </section>
  );
};

export default MainServiceSection;

import { MainQuestion, MainReview } from './_components';

const MainServiceSection = () => {
  return (
    <section
      id='calc_header_height'
      className='w-full py-[4rem] flex flex-col items-center justify-center gap-[6rem] px-[1.6rem] text-black_500'
    >
      <MainReview />

      <div className='w-full flex justify-center'>
        <MainQuestion />
      </div>
    </section>
  );
};

export default MainServiceSection;

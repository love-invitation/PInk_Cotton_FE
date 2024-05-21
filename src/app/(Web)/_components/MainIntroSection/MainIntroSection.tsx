import { MainLeftIntroduce, MainRightIntroduce } from './_components';

const MainIntroSection = () => {
  return (
    <section
      id='calc_header_height'
      className='w-full flex justify-center items-center laptop:gap-[2rem] laptop:min-h-[120rem]'
    >
      <MainLeftIntroduce />
      <MainRightIntroduce />
    </section>
  );
};

export default MainIntroSection;

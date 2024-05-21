import { MainLeftIntroduce, MainRightIntroduce } from './_components';

const MainIntroSection = () => {
  return (
    <section
      id='calc_header_height'
      className='w-full laptop:min-h-[120rem] pt-[4rem] pb-[6rem] px-[1rem] laptop:pb-[3rem] flex justify-center items-center flex-col laptop:flex-row gap-[3.2rem] laptop:gap-[2rem]'
    >
      <MainLeftIntroduce />
      <MainRightIntroduce />
    </section>
  );
};

export default MainIntroSection;

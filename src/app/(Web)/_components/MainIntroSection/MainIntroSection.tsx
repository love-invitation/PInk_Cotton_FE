import { MainLeftIntroduce, MainRightIntroduce } from './_components';

const MainIntroSection = () => {
  return (
    <section
      id='calc_header_height'
      className='w-full flex justify-center items-center main_page_1050:gap-[2rem] main_page_1050:min-h-[120rem]'
    >
      <MainLeftIntroduce />
      <MainRightIntroduce />
    </section>
  );
};

export default MainIntroSection;

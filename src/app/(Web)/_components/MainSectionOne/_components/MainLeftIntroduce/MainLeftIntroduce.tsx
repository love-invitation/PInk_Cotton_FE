import { LayerIcon, PhoneMockup } from '@/components/server';

const MainLeftIntroduce = () => {
  return (
    <article className='hidden justify-center items-end gap-[0.3rem] select-none main_page_1050:flex py-[2rem]'>
      <div className='flex flex-col items-center gap-[3rem]'>
        <PhoneMockup>
          {
            /*
              TODO

              추후 Template 넣기
            */
            null
          }
        </PhoneMockup>
        <p className='text-size16 font-regular text-gray-400'>화면을 내려보세요!</p>
      </div>

      <LayerIcon />
    </article>
  );
};

export default MainLeftIntroduce;
